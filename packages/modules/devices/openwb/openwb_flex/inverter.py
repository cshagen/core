#!/usr/bin/env python3
from typing import TypedDict, Any

from modules.common import modbus
from modules.common.abstract_device import AbstractInverter
from modules.common.component_state import InverterState
from modules.common.component_type import ComponentDescriptor
from modules.common.fault_state import ComponentInfo, FaultState
from modules.common.lovato import Lovato
from modules.common.sdm import Sdm120
from modules.common.simcount import SimCounter
from modules.common.store import get_inverter_value_store
from modules.devices.openwb.openwb_flex.config import PvKitFlexSetup
from modules.devices.openwb.openwb_flex.versions import kit_inverter_version_factory


class KwargsDict(TypedDict):
    device_id: int
    client: modbus.ModbusTcpClient_


class PvKitFlex(AbstractInverter):
    def __init__(self, component_config: PvKitFlexSetup, **kwargs: Any) -> None:
        self.component_config = component_config
        self.kwargs: KwargsDict = kwargs

    def initialize(self) -> None:
        self.__device_id: int = self.kwargs['device_id']
        self.__tcp_client: modbus.ModbusTcpClient_ = self.kwargs['client']
        factory = kit_inverter_version_factory(self.component_config.configuration.version)
        self.__client = factory(self.component_config.configuration.id, self.__tcp_client)
        self.sim_counter = SimCounter(self.__device_id, self.component_config.id, prefix="pv")
        self.simulation = {}
        self.store = get_inverter_value_store(self.component_config.id)
        self.fault_state = FaultState(ComponentInfo.from_component_config(self.component_config))

    def update(self) -> None:
        """ liest die Werte des Moduls aus.
        """
        with self.__tcp_client:
            powers, power = self.__client.get_power()

            version = self.component_config.configuration.version
            if version == 1:
                power = sum(powers)
            if power > 10:
                power = power*-1
            currents = self.__client.get_currents()

            if isinstance(self.__client, Lovato) or isinstance(self.__client, Sdm120):
                _, exported = self.sim_counter.sim_count(power)
            else:
                exported = self.__client.get_exported()

        inverter_state = InverterState(
            power=power,
            exported=exported,
            currents=currents
        )
        self.store.set(inverter_state)


component_descriptor = ComponentDescriptor(configuration_factory=PvKitFlexSetup)
