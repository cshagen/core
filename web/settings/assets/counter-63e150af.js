import{C as p}from"./HardwareInstallation-b6711c62.js";import{_ as a,u as n,k as m,l as u,G as t,E as l,y as d}from"./vendor-f90150d8.js";import"./vendor-fortawesome-8488187c.js";import"./index-84ae27ac.js";import"./vendor-bootstrap-99f0c261.js";import"./vendor-jquery-99ccf6d7.js";import"./vendor-axios-871a0510.js";import"./vendor-sortablejs-cfc19546.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceSolisCounter",mixins:[p]},_={class:"device-solis-counter"};function b(o,e,f,v,g,C){const i=n("openwb-base-heading"),s=n("openwb-base-number-input");return m(),u("div",_,[t(i,null,{default:l(()=>e[1]||(e[1]=[d(" Einstellungen für Solis Zähler ")])),_:1}),t(s,{title:"Modbus ID",required:"","model-value":o.component.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=r=>o.updateConfiguration(r,"configuration.modbus_id"))},null,8,["model-value"])])}const M=a(c,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solis/solis/counter.vue"]]);export{M as default};