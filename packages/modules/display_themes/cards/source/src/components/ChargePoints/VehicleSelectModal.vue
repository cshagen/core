<script>
import { useMqttStore } from "@/stores/mqtt.js";

export default {
  name: "VehicleSelectModal",
  props: {
    modelValue: { required: true, type: Boolean, default: false },
    chargePointId: {
      type: Number,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      mqttStore: useMqttStore(),
    };
  },
  computed: {
    vehicleList() {
      let topicList = this.mqttStore.getVehicleList;
      /* topicList is an object, but we need an array for our select input */
      var vehicleList = [];
      Object.keys(topicList).forEach((topic) => {
        let vehicleId = parseInt(
          topic.match(/(?:\/)([0-9]+)(?=\/)*/g)[0].replace(/[^0-9]+/g, ""),
        );
        vehicleList.push({ id: vehicleId, name: topicList[topic] });
      });
      return vehicleList;
    },
  },
  methods: {
    setChargePointConnectedVehicle(event) {
      if (event.id != this.mqttStore.getChargePointConnectedVehicleId(this.chargePointId)) {
        this.$root.sendTopicToBroker(
          `openWB/chargepoint/${this.chargePointId}/config/ev`,
          event.id,
        );
      }
      // hide modal vehicle select if visible
      // if (this.modalVehicleSelectVisible) {
      //   this.modalVehicleSelectVisible = false;
      // }
    },
  },
}
</script>

<template>
  <i-modal
    :model-value="modelValue"
    class="modal-vehicle-select"
    size="lg"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template #header>
      Fahrzeug an "{{ mqttStore.getChargePointName(chargePointId) }}"
      auswählen
    </template>
    <i-form>
      <i-form-group>
        <i-button-group
          vertical
          block
        >
          <i-button
            v-for="vehicle in vehicleList"
            :key="vehicle.id"
            size="lg"
            class="large-button"
            :active="
              mqttStore.getChargePointConnectedVehicleId(chargePointId) ==
                vehicle.id
            "
            :color="
              mqttStore.getChargePointConnectedVehicleId(chargePointId) ==
                vehicle.id
                ? 'primary'
                : ''
            "
            @click="setChargePointConnectedVehicle(vehicle)"
          >
            {{ vehicle.name }}
          </i-button>
        </i-button-group>
      </i-form-group>
    </i-form>
  </i-modal>
</template>

<style scoped>
.modal-vehicle-select:deep(.modal-body) {
  max-height: 72vh;
  overflow-y: scroll;
}

.large-button {
  height: 3.5rem;
  font-size: 1.5rem;
  padding: 0.75rem 1.5rem;
}
</style>
