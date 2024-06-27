import{_ as v,q as m,k as r,l as b,B as p,M as u,x as i,u as c,y as w,z as s,A as l}from"./vendor-d624aab7.js";import"./vendor-sortablejs-c0fcb1ea.js";const _={name:"DeviceEnphase",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},componentId:{required:!0}},methods:{updateConfiguration(d,e=void 0){this.$emit("update:configuration",{value:d,object:e})}}},h={class:"device-enphase"},y={class:"small"},k=c("br",null,null,-1),V=c("a",{href:"https://developer.enphase.com/docs/quickstart.html",target:"_blank",rel:"noopener"},"Enphase-Webseite",-1);function E(d,e,t,B,C,o){const f=m("openwb-base-heading"),a=m("openwb-base-text-input"),g=m("openwb-base-select-input");return r(),b("div",h,[p(f,null,{default:u(()=>[i(" Einstellungen für Enphase Envoy / IQ Gateway "),c("span",y,"(Modul: "+w(d.$options.name)+")",1)]),_:1}),p(a,{title:"IP oder Hostname",subtype:"host",required:"","model-value":t.configuration.hostname,"onUpdate:modelValue":e[0]||(e[0]=n=>o.updateConfiguration(n,"configuration.hostname"))},{help:u(()=>[i(' Bitte geben Sie die IP-Adresse oder den Hostnamen des Enphase Envoy oder IQ Gateway an. Die Info finden Sie in Ihrem Router. Ab Werk ist der Hostname "envoy" oder "envoy.local". ')]),_:1},8,["model-value"]),p(g,{title:"Version",required:"",options:[{value:1,text:"Firmware < 7.0"},{value:2,text:"Firmware ab 7.0"}],"model-value":t.configuration.version,"onUpdate:modelValue":e[1]||(e[1]=n=>o.updateConfiguration(n,"configuration.version"))},{help:u(()=>[i(" Bitte wählen Sie die Version des Enphase Envoy oder IQ Gateway aus. Die Version 1 ist für Geräte mit einer Firmware-Version unter 7.0, die Version 2 für Geräte mit einer Firmware-Version ab 7.0. Ein angebundener Speicher wird nur bei Version 2 unterstützt. ")]),_:1},8,["model-value"]),t.configuration.version>1?(r(),s(a,{key:0,title:"Benutzer",subtype:"user","model-value":t.configuration.user,"onUpdate:modelValue":e[2]||(e[2]=n=>o.updateConfiguration(n,"configuration.user"))},null,8,["model-value"])):l("",!0),t.configuration.version>1?(r(),s(a,{key:1,title:"Kennwort",subtype:"password","model-value":t.configuration.password,"onUpdate:modelValue":e[3]||(e[3]=n=>o.updateConfiguration(n,"configuration.password"))},null,8,["model-value"])):l("",!0),t.configuration.version>1?(r(),s(a,{key:2,title:"Envoy Seriennummer","model-value":t.configuration.serial,"onUpdate:modelValue":e[4]||(e[4]=n=>o.updateConfiguration(n,"configuration.serial"))},null,8,["model-value"])):l("",!0),t.configuration.version>1?(r(),s(a,{key:3,title:"Token",subtype:"password","model-value":t.configuration.token,"onUpdate:modelValue":e[5]||(e[5]=n=>o.updateConfiguration(n,"configuration.token"))},{help:u(()=>[i(" Wenn Benutzer, Kennwort und Seriennummer des Envoys angegeben werden, wird das Token automatisch beim Speichern abgerufen. Ebenfalls wird ein abgelaufenes Token (derzeit nach einem Jahr) automatisch erneuert."),k,i(" Wenn Sie ein Token manuell erstellen möchten, können Sie dies auf der "),V,i(" erledigen. ")]),_:1},8,["model-value"])):l("",!0)])}const I=v(_,[["render",E],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/enphase/device.vue"]]);export{I as default};