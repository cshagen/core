import{C as a}from"./HardwareInstallation-2a15e893.js";import{_ as p,u as t,k as u,l,G as n,E as c,y as m}from"./vendor-88a3d381.js";import"./vendor-fortawesome-2ab93053.js";import"./index-92d4ea11.js";import"./vendor-bootstrap-6598ffd1.js";import"./vendor-jquery-536f4487.js";import"./vendor-axios-29ac7e52.js";import"./vendor-sortablejs-f1eda7cf.js";import"./dynamic-import-helper-be004503.js";const d={name:"DeviceKostalPikoInverter",mixins:[a]},_={class:"device-kostal-piko-inverter"};function f(o,e,b,v,g,k){const i=t("openwb-base-heading"),r=t("openwb-base-button-group-input");return u(),l("div",_,[n(i,null,{default:c(()=>e[1]||(e[1]=[m(" Einstellungen für Kostal Piko Wechselrichter ")])),_:1}),n(r,{title:"Speicher",buttons:[{buttonValue:!1,text:"nicht vorhanden"},{buttonValue:!0,text:"vorhanden"}],"model-value":o.component.configuration.bat_configured,"onUpdate:modelValue":e[0]||(e[0]=s=>o.updateConfiguration(s,"configuration.bat_configured"))},null,8,["model-value"])])}const N=p(d,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/kostal/kostal_piko/inverter.vue"]]);export{N as default};