(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MonitorHome"],{"397e":function(t,e,n){"use strict";n("d49d"),n("d197"),n("0be8");var i=n("7d86");function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){Object(i["a"])(t,e,n[e])})}return t}var a,r,s=n("f2de"),c=n("a017"),u={name:"mixins",data:function(){return{routerIndex:0}},computed:o({},Object(s["b"])({footerBar:"getMainTabBar"})),created:function(){var t=this.$route.fullPath.split("/")[1];console.log("current =>>",t),"home"===t&&this.$store.commit("setMainTabBar",Object(c["a"])()),"monitor"===t&&this.$store.commit("setMainTabBar",Object(c["b"])()),this.defaultLable=this.footerBar[0].link,this.getTabIndex(this.$route.name)},methods:{tabIndex:function(t){this.routerIndex=t},getTabIndex:function(t){var e=this.footerBar.findIndex(function(e){return e.link===t});e<0&&(e=0),this.routerIndex=e,this.defaultLable=this.footerBar[e].link},touchstart:function(t){this.touchPointerX=t.touches[0].pageX,this.touchPointerY=t.touches[0].pageY},touchend:function(t){this.touchendPointerX=t.changedTouches[0].pageX,this.touchendPointerY=t.changedTouches[0].pageY;var e=Math.abs(this.touchendPointerY-this.touchPointerY),n=Math.abs(this.touchendPointerX-this.touchPointerX),i=this.footerBar.length;if(!(e>n+10)){this.touchendPointerX-this.touchPointerX<-80&&(this.routerIndex++,this.routerIndex===i&&(this.routerIndex=i-1)),this.touchendPointerX-this.touchPointerX>80&&(this.routerIndex--,this.routerIndex<0&&(this.routerIndex=0));var o=this.footerBar[this.routerIndex].link;this.$router.push({name:o}),this.defaultLable=o}},goBackToHome:function(){this.$router.push("/home"),this.$store.commit("setMainTabBar",Object(c["a"])())}}},l=u,h=n("048f"),d=Object(h["a"])(l,a,r,!1,null,null,null);d.options.__file="mixins.vue";e["a"]=d.exports},"39b5":function(t,e,n){"use strict";var i=n("eaa75"),o=n.n(i);o.a},"92f5":function(t,e,n){},bab3:function(t,e,n){"use strict";var i=n("92f5"),o=n.n(i);o.a},bea0:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("top-header",{attrs:{fixed:""}},[n("div",{attrs:{slot:"mainTab"},slot:"mainTab"},[n("div",{staticClass:"userTab"},[n("cube-tab-bar",{on:{click:t.clickHandler},model:{value:t.selectedLabelDefault,callback:function(e){t.selectedLabelDefault=e},expression:"selectedLabelDefault"}},t._l(t.tabs,function(e){return n("cube-tab",{key:e.label,staticClass:"userSetClass",attrs:{label:e.label}},[t._v("\n            "+t._s(e.name)+"\n          ")])}),1)],1)]),n("div",{staticClass:"CloseIcon",attrs:{slot:"right"},slot:"right"},[n("i",{staticClass:"iconfont icon-Close",on:{click:t.goBackToHome}})])]),n("div",{staticClass:"slide-wrapper"},[n(t.componentId,{tag:"component"})],1)],1)},o=[],a=n("397e"),r=n("f392"),s={data:function(){return{selectedLabelDefault:"overview",componentId:"overview",tabs:[{label:"overview",name:"概览"},{label:"mainMap",name:"地图"}],initialIndex:0}},mixins:[a["a"]],components:{topHeader:r["a"],overview:function(){return n.e("chunk-13ce0eae").then(n.bind(null,"d9e4"))},mainMap:function(){return n.e("chunk-10f72349").then(n.bind(null,"29af"))}},mounted:function(){},methods:{clickHandler:function(t){this.componentId=t}}},c=s,u=(n("39b5"),n("048f")),l=Object(u["a"])(c,i,o,!1,null,"77f445e2",null);l.options.__file="home.vue";e["default"]=l.exports},d197:function(t,e,n){"use strict";n("eede")("link",function(t){return function(e){return t(this,"a","href",e)}})},eaa75:function(t,e,n){},f392:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"mint-header",class:{"is-fixed":t.fixed}},[n("div",{staticClass:"header-button is-left"},[t._t("left")],2),n("div",{staticClass:"header-title"},[t._t("mainTab")],2),n("div",{staticClass:"header-button is-right"},[t._t("right")],2)])},o=[],a={name:"top-header",props:{fixed:Boolean,title:String}},r=a,s=(n("bab3"),n("048f")),c=Object(s["a"])(r,i,o,!1,null,"48d72850",null);c.options.__file="header.vue";e["a"]=c.exports}}]);
//# sourceMappingURL=MonitorHome.5775c872.js.map