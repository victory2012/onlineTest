(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MonitorHome"],{"0be3":function(t,e,n){"use strict";var i=n("44e5"),a=n.n(i);a.a},"397e":function(t,e,n){"use strict";n("ba4a"),n("b7ad"),n("af3c");var i,a,o=n("de57"),s=n("f2de"),r=n("a017"),c={name:"mixins",data:function(){return{routerIndex:0}},computed:Object(o["a"])({},Object(s["b"])({footerBar:"getMainTabBar"})),created:function(){var t=this.$route.fullPath.split("/")[1];console.log("current =>>",t),"home"===t&&this.$store.commit("setMainTabBar",Object(r["a"])()),"monitor"===t&&this.$store.commit("setMainTabBar",Object(r["d"])()),this.defaultLable=this.footerBar[0].link,this.getTabIndex(this.$route.name)},methods:{tabIndex:function(t){this.routerIndex=t},getTabIndex:function(t){var e=this.footerBar.findIndex(function(e){return e.link===t});e<0&&(e=0),this.routerIndex=e,this.defaultLable=this.footerBar[e].link},touchstart:function(t){this.touchPointerX=t.touches[0].pageX,this.touchPointerY=t.touches[0].pageY},touchend:function(t){this.touchendPointerX=t.changedTouches[0].pageX,this.touchendPointerY=t.changedTouches[0].pageY;var e=Math.abs(this.touchendPointerY-this.touchPointerY),n=Math.abs(this.touchendPointerX-this.touchPointerX),i=this.footerBar.length;if(!(e>n+10)){this.touchendPointerX-this.touchPointerX<-80&&(this.routerIndex++,this.routerIndex===i&&(this.routerIndex=i-1)),this.touchendPointerX-this.touchPointerX>80&&(this.routerIndex--,this.routerIndex<0&&(this.routerIndex=0));var a=this.footerBar[this.routerIndex].link;this.$router.push({name:a}),this.defaultLable=a}},goBackToHome:function(){this.$router.push("/home"),this.$store.commit("setMainTabBar",Object(r["a"])())}}},u=c,l=n("25c1"),h=Object(l["a"])(u,i,a,!1,null,null,null);h.options.__file="mixins.vue";e["a"]=h.exports},"44e5":function(t,e,n){},"6e66":function(t,e,n){"use strict";var i=n("82d7"),a=n.n(i);a.a},"82d7":function(t,e,n){},b7ad:function(t,e,n){"use strict";n("942b")("link",function(t){return function(e){return t(this,"a","href",e)}})},bea0:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("top-header",{attrs:{fixed:""}},[n("div",{attrs:{slot:"mainTab"},slot:"mainTab"},[n("div",{staticClass:"userTab"},[n("cube-tab-bar",{on:{click:t.clickHandler},model:{value:t.selectedLabelDefault,callback:function(e){t.selectedLabelDefault=e},expression:"selectedLabelDefault"}},t._l(t.tabs,function(e){return n("cube-tab",{key:e.label,staticClass:"userSetClass",attrs:{label:e.label}},[t._v("\n            "+t._s(e.name)+"\n          ")])}),1)],1)]),n("div",{staticClass:"CloseIcon",attrs:{slot:"right"},slot:"right"},[n("i",{staticClass:"iconfont icon-Close",on:{click:t.goBackToHome}})])]),n("div",{staticClass:"slide-wrapper"},[n(t.componentId,{tag:"component"})],1)],1)},a=[],o=(n("175c"),n("bc97"),n("a5be"),n("397e")),s=n("f392"),r={data:function(){return{selectedLabelDefault:"overview",componentId:"overview",tabs:[{label:"overview",name:"概览"},{label:"mainMap",name:"地图"}],initialIndex:0}},mixins:[o["a"]],components:{topHeader:s["a"],overview:function(){return n.e("chunk-f98b91ca").then(n.bind(null,"d9e4"))},mainMap:function(){return n.e("chunk-4ad13b6f").then(n.bind(null,"29af"))}},mounted:function(){},methods:{clickHandler:function(t){this.componentId=t}}},c=r,u=(n("6e66"),n("25c1")),l=Object(u["a"])(c,i,a,!1,null,"f8a176b0",null);l.options.__file="home.vue";e["default"]=l.exports},f392:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"mint-header",class:{"is-fixed":t.fixed}},[n("div",{staticClass:"header-button is-left"},[t._t("left")],2),n("div",{staticClass:"header-title"},[t._t("mainTab")],2),n("div",{staticClass:"header-button is-right"},[t._t("right")],2)])},a=[],o={name:"top-header",props:{fixed:Boolean,title:String}},s=o,r=(n("0be3"),n("25c1")),c=Object(r["a"])(s,i,a,!1,null,"27adf9d8",null);c.options.__file="header.vue";e["a"]=c.exports}}]);
//# sourceMappingURL=MonitorHome.be75e982.js.map