import{_ as c,q as t,k as d,l as p,B as o,M as s,x as i,u,y as l}from"./vendor-b3afda6d.js";import"./vendor-sortablejs-806a0b5c.js";const _={name:"DeviceSiemensInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,n=void 0){this.$emit("update:configuration",{value:e,object:n})}}},m={class:"device-siemens-inverter"},f={class:"small"};function v(e,n,b,g,h,w){const a=t("openwb-base-heading"),r=t("openwb-base-alert");return d(),p("div",m,[o(a,null,{default:s(()=>[i(" Einstellungen für Siemens Wechselrichter "),u("span",f,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(r,{subtype:"info"},{default:s(()=>[i(" Diese Komponente erfordert keine Einstellungen. ")]),_:1})])}const B=c(_,[["render",v],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/siemens/inverter.vue"]]);export{B as default};