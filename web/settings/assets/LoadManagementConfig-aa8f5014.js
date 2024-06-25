import{l as z,O as C,N as x,F as L}from"./vendor-fortawesome-d651dd92.js";import{C as V}from"./index-1588343c.js";import{S as $}from"./OpenwbSortableList-3dd6993b.js";import{_ as M,q as l,k as u,l as d,u as m,B as i,M as r,x as s,I as _,J as v,z as w,y as W}from"./vendor-b3afda6d.js";import"./vendor-bootstrap-37731caa.js";import"./vendor-jquery-2371184a.js";import"./vendor-axios-dc7988e3.js";import"./vendor-sortablejs-806a0b5c.js";z.add(C,x);const Z={name:"OpenwbLoadManagementConfig",mixins:[V],emits:["sendCommand"],components:{SortableList:$,FontAwesomeIcon:L},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/counter/config/home_consumption_source_id","openWB/counter/config/reserve_for_not_charging","openWB/counter/get/hierarchy","openWB/system/device/+/component/+/config","openWB/counter/+/config/max_currents","openWB/counter/+/config/max_total_power","openWB/pv/+/config/max_ac_out","openWB/chargepoint/+/config"]}},computed:{componentConfigurations(){return this.getWildcardTopics("openWB/system/device/+/component/+/config")},counterConfigs:{get(){let e=this.getWildcardTopics("openWB/system/device/+/component/+/config");return Object.keys(e).filter(t=>e[t].type.includes("counter")).reduce((t,o)=>({...t,[o]:e[o]}),{})}},counterOptions(){var e=[];for(const t of Object.values(this.componentConfigurations))this.isComponentType(t.type,"counter")&&e.push({value:t.id,text:t.name});return e.sort((t,o)=>t.text==o.text?0:t.text>o.text?1:-1)},inverterConfigs:{get(){let e=this.getWildcardTopics("openWB/system/device/+/component/+/config");return Object.keys(e).filter(t=>e[t].type.includes("inverter")).reduce((t,o)=>({...t,[o]:e[o]}),{})}},hierarchyLabels:{get(){let e={};for(const t of Object.values(this.$store.state.mqtt["openWB/counter/get/hierarchy"]))e={...e,...this.getElementTreeNames(t)};return e}},getHcSourceIdOptions(){let e=[{value:null,text:"von openWB berechnen"}],t=[{label:"Eingerichtete Zähler-Komponenten",options:[...this.counterOptions]}];return{options:e,groups:t}}},methods:{getElementTreeNames(e){let t={};if(e.type=="cp"){let o=this.getChargePoint(e.id);o&&(t[e.id]=o.name)}else{let o=this.getComponent(e.id);o&&(t[e.id]=o.name)}return e.children.forEach(o=>{t={...t,...this.getElementTreeNames(o)}}),t},getComponent(e){let t;return Object.keys(this.$store.state.mqtt).forEach(o=>{o.match("^openWB/system/device/[0-9]+/component/"+e+"/config$")&&(t=this.$store.state.mqtt[o])}),t},getChargePoint(e){let t;return Object.keys(this.$store.state.mqtt).forEach(o=>{o.match("^openWB/chargepoint/"+e+"/config$")&&(t=this.$store.state.mqtt[o])}),t},isComponentType(e,t){return e.split("_").includes(t)}}},q={class:"loadManagementConfig"},U={name:"loadManagementConfigForm"},E={key:0},O={key:1},D=m("p",null," Wenn angesteckte Fahrzeuge, die nicht laden, im Lastmanagement berücksichtigt werden, wird für diese der Fahrzeug-Mindeststrom bei vorliegender Ladefreigabe reserviert. Dadurch können bei Eingreifen des Lastmanagements andere Fahrzeuge möglicherweise nur mit reduzierter Stromstärke laden und der reservierte Strom wird nicht genutzt. Wenn die Fahrzeuge wieder Leistung beziehen, z.B. um vorzuklimatisieren, nutzen sie den für sie reservierten Strom. ",-1),F=m("p",null," Wenn angesteckte Fahrzeuge, die nicht laden, nicht im Lastmanagement berücksichtigt werden, wird für diese auch kein Strom bei vorliegender Ladefreigabe reserviert. Andere Fahrzeuge können dadurch mit höherer Stromstärke laden. Wenn die maximalen Lastmanagement-Grenzen fast erreicht sind und die Fahrzeuge wieder Leistung beziehen, z.B. um vorzuklimatisieren, kann es zu einer kurzzeitigen Überschreitung der Lastmanagement-Grenzen kommen, bis im nächsten Zyklus die Stromstärken aller Ladepunkte an die neue Situation angepasst wurden. Das kurzzeitige Überschreiten der Maximal-Werte stellt für die Sicherungen in der Regel kein Problem dar. ",-1),A=m("a",{href:"https://github.com/openWB/core/wiki/Hausverbrauchs-Zähler",target:"_blank",rel:"noopener noreferrer"}," Wiki ",-1),N={key:0},P={key:1},T=m("br",null,null,-1),H=m("br",null,null,-1),j=m("br",null,null,-1);function I(e,t,o,K,R,c){const h=l("openwb-base-alert"),k=l("openwb-base-button-group-input"),B=l("openwb-base-select-input"),f=l("openwb-base-heading"),b=l("font-awesome-icon"),p=l("openwb-base-number-input"),g=l("openwb-base-card"),y=l("sortable-list"),S=l("openwb-base-submit-buttons");return u(),d("div",q,[m("form",U,[i(g,{title:"Einstellungen",collapsible:!0,collapsed:!1},{default:r(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(u(),d("div",E,[i(h,{subtype:"info"},{default:r(()=>[s(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(u(),d("div",O,[i(k,{title:"Nicht-ladende Fahrzeuge",buttons:[{buttonValue:!1,text:"nicht berücksichtigen",class:"btn-outline-danger"},{buttonValue:!0,text:"berücksichtigen",class:"btn-outline-success"}],"model-value":e.$store.state.mqtt["openWB/counter/config/reserve_for_not_charging"],"onUpdate:modelValue":t[0]||(t[0]=n=>e.updateState("openWB/counter/config/reserve_for_not_charging",n))},{help:r(()=>[D,F]),_:1},8,["model-value"]),i(B,{title:"Hausverbrauch",options:c.getHcSourceIdOptions.options,groups:c.getHcSourceIdOptions.groups,"model-value":e.$store.state.mqtt["openWB/counter/config/home_consumption_source_id"],"onUpdate:modelValue":t[1]||(t[1]=n=>e.updateState("openWB/counter/config/home_consumption_source_id",n))},{help:r(()=>[s(" Meist ist der Zähler am EVU-Punkt installiert, dann muss hier 'von openWB berechnen' ausgewählt werden. Wenn der Zähler im Hausverbrauchszweig installiert ist, die Struktur wie im "),A,s(" beschrieben anordnen und hier den Hausverbrauchszähler auswählen. Dann wird dieser Wert abzüglich der Ladeleistung als Hausverbrauch erfasst. ")]),_:1},8,["options","groups","model-value"]),i(f,null,{default:r(()=>[s(" Vorhandene Zählermodule ")]),_:1}),i(h,{subtype:"info"},{default:r(()=>[s(" Die maximale Leistung wird nur für den EVU-Zähler berücksichtigt. Bei Zwischenzählern begrenzt das Lastmanagement rein anhand der maximalen Phasenströme. ")]),_:1}),(u(!0),d(_,null,v(c.counterConfigs,n=>(u(),w(g,{key:n.id,collapsible:!0,collapsed:!0,subtype:"danger"},{header:r(()=>[i(b,{"fixed-width":"",icon:["fas","gauge-high"]}),s(" "+W(n.name),1)]),default:r(()=>[i(p,{title:"Maximale Leistung",min:1,step:1,unit:"kW","model-value":e.$store.state.mqtt["openWB/counter/"+n.id+"/config/max_total_power"]/1e3,"onUpdate:modelValue":a=>e.updateState("openWB/counter/"+n.id+"/config/max_total_power",a*1e3)},{help:r(()=>[s(" Maximal zulässige Leistung für diesen (Zwischen-)Zähler. ")]),_:2},1032,["model-value","onUpdate:modelValue"]),i(p,{title:"Maximaler Strom L1",min:16,step:1,unit:"A","model-value":e.$store.state.mqtt["openWB/counter/"+n.id+"/config/max_currents"][0],"onUpdate:modelValue":a=>e.updateState("openWB/counter/"+n.id+"/config/max_currents",a,"0")},{help:r(()=>[s(" Maximal zulässiger Strom für die Phase 1 dieses (Zwischen-)Zählers. ")]),_:2},1032,["model-value","onUpdate:modelValue"]),i(p,{title:"Maximaler Strom L2",min:16,step:1,unit:"A","model-value":e.$store.state.mqtt["openWB/counter/"+n.id+"/config/max_currents"][1],"onUpdate:modelValue":a=>e.updateState("openWB/counter/"+n.id+"/config/max_currents",a,"1")},{help:r(()=>[s(" Maximal zulässiger Strom für die Phase 2 dieses (Zwischen-)Zählers. ")]),_:2},1032,["model-value","onUpdate:modelValue"]),i(p,{title:"Maximaler Strom L3",min:16,step:1,unit:"A","model-value":e.$store.state.mqtt["openWB/counter/"+n.id+"/config/max_currents"][2],"onUpdate:modelValue":a=>e.updateState("openWB/counter/"+n.id+"/config/max_currents",a,"2")},{help:r(()=>[s(" Maximal zulässiger Strom für die Phase 3 dieses (Zwischen-)Zählers. ")]),_:2},1032,["model-value","onUpdate:modelValue"])]),_:2},1024))),128)),i(f,null,{default:r(()=>[s(" Vorhandene Wechselrichtermodule ")]),_:1}),(u(!0),d(_,null,v(c.inverterConfigs,n=>(u(),w(g,{key:n.id,collapsible:!0,collapsed:!0,subtype:"success"},{header:r(()=>[i(b,{"fixed-width":"",icon:["fas","solar-panel"]}),s(" "+W(n.name),1)]),default:r(()=>[i(p,{title:"Maximale Ausgangsleistung des Wechselrichters",min:0,step:.1,unit:"kW","model-value":e.$store.state.mqtt["openWB/pv/"+n.id+"/config/max_ac_out"]/1e3,"onUpdate:modelValue":a=>e.updateState("openWB/pv/"+n.id+"/config/max_ac_out",a*1e3)},{help:r(()=>[s(" Relevant bei Hybrid-Systemen mit DC-Speicher. ")]),_:2},1032,["model-value","onUpdate:modelValue"])]),_:2},1024))),128))]))]),_:1}),i(g,{title:"Struktur",collapsible:!0,collapsed:!0},{default:r(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(u(),d("div",N,[i(h,{subtype:"info"},{default:r(()=>[s(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(u(),d("div",P,[i(y,{title:"Anordnung der Komponenten","model-value":e.$store.state.mqtt["openWB/counter/get/hierarchy"],"onUpdate:modelValue":t[2]||(t[2]=n=>e.updateState("openWB/counter/get/hierarchy",n)),labels:c.hierarchyLabels},{help:r(()=>[s(" Durch die Anordnung der Komponenten werden Abhängigkeiten abgebildet."),T,s(" An erster Stelle muss eine Zählerkomponente stehen, die den Netzanschlusspunkt erfasst. Dafür kann auch ein virtueller Zähler genutzt werden."),H,s(" Die weiteren Komponenten müssen hierarchisch so angeordnet werden, wie sie auch physisch im Stromnetz angeschlossen werden."),j,s(" Bei DC-gekoppelten Speichern sind diese hinter dem zugehörigen Wechselrichter zu platzieren, damit die Abhängigkeit in der Regelung berücksichtigt werden kann. ")]),_:1},8,["model-value","labels"])]))]),_:1}),i(S,{formName:"loadManagementConfigForm",onSave:t[3]||(t[3]=n=>e.$emit("save")),onReset:t[4]||(t[4]=n=>e.$emit("reset")),onDefaults:t[5]||(t[5]=n=>e.$emit("defaults"))})])])}const oe=M(Z,[["render",I],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/LoadManagementConfig.vue"]]);export{oe as default};