(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["BatteryMonitor"],{"2c4b":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cube-tab-bar",{attrs:{"show-slider":""},on:{change:t.cubeTabClick},model:{value:t.defaultlabel,callback:function(e){t.defaultlabel=e},expression:"defaultlabel"}},t._l(t.tabs,function(e){return n("cube-tab",{key:e.label,attrs:{label:e.link}},[e.icon?n("i",{staticClass:"tabIcon iconfont",class:e.icon,attrs:{slot:"icon"},slot:"icon"}):t._e(),n("span",{staticClass:"tabText"},[t._v(t._s(e.label))])])}),1)},o=[],i=(n("b7ad"),n("ba4a"),{name:"",props:{isSubTab:{type:Boolean,default:!1},tabs:{type:Array,default:function(){return[]}},defaultValue:{type:String,required:!0}},data:function(){return{defaultlabel:this.defaultValue}},watch:{defaultValue:{handler:function(t){console.log("footer defaultValue",t),this.defaultlabel=t}}},mounted:function(){},methods:{getTabIndex:function(t){var e=this.tabs.findIndex(function(e){return e.link===t});return e<0&&(e=0),e},cubeTabClick:function(t){this.isSubTab||this.$router.push({name:t});var e=this.getTabIndex(t);this.$emit("tabIndex",e)}}}),r=i,u=(n("7922"),n("25c1")),s=Object(u["a"])(r,a,o,!1,null,"336ceceb",null);s.options.__file="footer.vue";e["a"]=s.exports},7922:function(t,e,n){"use strict";var a=n("d97a"),o=n.n(a);o.a},"79ff":function(t,e,n){},"942b":function(t,e,n){var a=n("ac1b"),o=n("e96b"),i=n("346b"),r=/"/g,u=function(t,e,n,a){var o=String(i(t)),u="<"+e;return""!==n&&(u+=" "+n+'="'+String(a).replace(r,"&quot;")+'"'),u+">"+o+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(u),a(a.P+a.F*o(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},b7ad:function(t,e,n){"use strict";n("942b")("link",function(t){return function(e){return t(this,"a","href",e)}})},c546:function(t,e,n){"use strict";var a=n("79ff"),o=n.n(a);o.a},d2ab:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"monitorProject"},[n("div",{staticClass:"homeBody"},[n("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[n("router-view")],1)],1),n("div",{staticClass:"footerBar"},[n("footer-bar",{attrs:{defaultValue:t.defaultLable,tabs:t.footerBarTabs},on:{tabIndex:t.tabIndex}})],1)])},o=[],i=(n("b7ad"),n("de57")),r=n("2c4b"),u=n("52c1"),s=n("eaab"),c={components:{footerBar:r["a"]},mixins:[s["a"]],computed:Object(i["a"])({},Object(u["b"])({footerBarTabs:"getMonitorMainTabBar",routerIndex:"getRouterIndex"})),data:function(){return{}},mounted:function(){this.defaultLable=this.footerBarTabs[this.routerIndex].link},methods:{tabIndex:function(t){this.$store.commit("setRouterIndex",t)}}},l=c,f=(n("c546"),n("25c1")),b=Object(f["a"])(l,a,o,!1,null,"fb45d64e",null);b.options.__file="index.vue";e["default"]=b.exports},d97a:function(t,e,n){},eaab:function(t,e,n){"use strict";var a,o,i=n("a017"),r={name:"mixins",data:function(){return{defaultLable:""}},mounted:function(){},methods:{goBackToHome:function(){this.$store.commit("setRouterIndex",0),this.$router.push("/home"),this.$store.commit("setMainTabBar",Object(i["b"])())},getOffsetHeight:function(t){return this.$refs[t].offsetHeight},goBack:function(){this.$store.commit("setRouterIndex",0),this.$router.push("/monitor")}}},u=r,s=n("25c1"),c=Object(s["a"])(u,a,o,!1,null,null,null);c.options.__file="monitor-mixin.vue";e["a"]=c.exports}}]);
//# sourceMappingURL=BatteryMonitor.88c630e9.js.map