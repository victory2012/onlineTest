(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MonitorBattery"],{"203a":function(t,e,n){"use strict";var a=n("4c13"),o=n.n(a);o.a},"24dc":function(t,e,n){},"2c4b":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cube-tab-bar",{attrs:{"show-slider":""},on:{change:t.cubeTabClick},model:{value:t.defaultlabel,callback:function(e){t.defaultlabel=e},expression:"defaultlabel"}},t._l(t.tabs,function(e){return n("cube-tab",{key:e.label,attrs:{label:e.link}},[e.icon?n("i",{staticClass:"tabIcon iconfont",class:e.icon,attrs:{slot:"icon"},slot:"icon"}):t._e(),n("span",{staticClass:"tabText"},[t._v(t._s(e.label))])])}),1)},o=[],l=(n("d197"),n("d49d"),{name:"",props:{isSubTab:{type:Boolean,default:!1},tabs:{type:Array,default:function(){return[]}},defaultValue:{type:String,required:!0}},data:function(){return{defaultlabel:this.defaultValue}},watch:{defaultValue:{handler:function(t){console.log("footer defaultValue",t),this.defaultlabel=t}}},mounted:function(){},methods:{getTabIndex:function(t){var e=this.tabs.findIndex(function(e){return e.link===t});return e<0&&(e=0),e},cubeTabClick:function(t){this.isSubTab||this.$router.push({name:t});var e=this.getTabIndex(t);this.$emit("tabIndex",e)}}}),i=l,u=(n("203a"),n("048f")),s=Object(u["a"])(i,a,o,!1,null,"12c56c85",null);s.options.__file="footer.vue";e["a"]=s.exports},"4c13":function(t,e,n){},"802c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view"),n("div",{staticClass:"footerBar"},[n("batteryFooter",{attrs:{tabs:t.tabs,defaultValue:t.selectedLabelDefault},on:{tabIndex:t.tabIndex}})],1)],1)},o=[],l=(n("d197"),n("7ea5")),i=n("f2de"),u=n("2c4b"),s={data:function(){return{selectedLabelDefault:""}},computed:Object(l["a"])({},Object(i["b"])({initialIndex:"getMonitorBatteryIndex",tabs:"getMonitorBatteryFooter"})),components:{batteryFooter:u["a"]},mounted:function(){console.log("name",this.$route.name),this.selectedLabelDefault=this.$route.name},methods:{clickHandler:function(){},tabIndex:function(t){console.log(t),this.$store.commit("setMinitorBatteryIndex",t)},slideChange:function(t){console.log(t),this.selectedLabelDefault=this.tabs[t].link}}},c=s,r=(n("9641"),n("048f")),d=Object(r["a"])(c,a,o,!1,null,"54d2e235",null);d.options.__file="battery.vue";e["default"]=d.exports},9641:function(t,e,n){"use strict";var a=n("24dc"),o=n.n(a);o.a},d197:function(t,e,n){"use strict";n("eede")("link",function(t){return function(e){return t(this,"a","href",e)}})}}]);
//# sourceMappingURL=MonitorBattery.25aedb0b.js.map