import{_ as l,q as t,l as _,m,A as n,K as s,v as a,u as f,x as b}from"./vendor-b78ff8c0.js";import"./vendor-sortablejs-116030fd.js";const g={name:"DevicePowerdog",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},componentId:{required:!0}},methods:{updateConfiguration(o,e=void 0){this.$emit("update:configuration",{value:o,object:e})}}},v={class:"device-powerdog"},w={class:"small"};function h(o,e,i,x,C,d){const r=t("openwb-base-heading"),p=t("openwb-base-alert"),u=t("openwb-base-text-input");return _(),m("div",v,[n(r,null,{default:s(()=>[a(" Einstellungen für Powerdog "),f("span",w,"(Modul: "+b(o.$options.name)+")",1)]),_:1}),n(p,{subtype:"info"},{default:s(()=>[a(" ModbusTCP muss aktiviert sein. ")]),_:1}),n(u,{title:"IP oder Hostname",subtype:"host",required:"","model-value":i.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=c=>d.updateConfiguration(c,"configuration.ip_address"))},null,8,["model-value"])])}const B=l(g,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/powerdog/device.vue"]]);export{B as default};