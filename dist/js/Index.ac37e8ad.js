(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Index"],{"1e4b":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"homeBody",on:{touchstart:t.touchstart,touchend:t.touchend}},[n("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[n("router-view")],1)],1),n("div",{staticClass:"footerBar"},[n("footer-bar",{attrs:{defaultValue:t.defaultLable,tabs:t.footerBar},on:{tabIndex:t.tabIndex}})],1)])},a=[],r=(n("d49d"),n("d197"),n("7d86"));function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){Object(r["a"])(t,e,n[e])})}return t}var u=n("f2de"),s=n("a017"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cube-tab-bar",{attrs:{"show-slider":""},on:{change:t.cubeTabClick},model:{value:t.defaultlabel,callback:function(e){t.defaultlabel=e},expression:"defaultlabel"}},t._l(t.tabs,function(e){return n("cube-tab",{key:e.label,attrs:{label:e.link}},[n("i",{staticClass:"tabIcon iconfont",class:e.icon,attrs:{slot:"icon"},slot:"icon"}),t._v("\n    "+t._s(e.label)+"\n    ")])}),1)},l=[],h={name:"",props:{tabs:{type:Array,default:function(){return[]}},defaultValue:{type:String,required:!0}},data:function(){return{defaultlabel:this.defaultValue}},watch:{defaultValue:{handler:function(t){this.defaultlabel=t}}},mounted:function(){},methods:{getTabIndex:function(t){var e=this.tabs.findIndex(function(e){return e.link===t});return e<0&&(e=0),e},cubeTabClick:function(t){console.log("tag",t),this.$router.push(t);var e=this.getTabIndex(t);this.$emit("tabIndex",e)}}},d=h,f=(n("f092"),n("048f")),b=Object(f["a"])(d,c,l,!1,null,"09a787d7",null);b.options.__file="footer.vue";var p=b.exports,x={name:"home",components:{footerBar:p},data:function(){return{routerIndex:0,tabs:[],defaultLable:""}},computed:i({},Object(u["b"])({footerBar:"getMainTabBar"})),watch:{"$route.name":{handler:function(t){"home"===t&&this.$store.commit("setMainTabBar",Object(s["a"])())}}},created:function(){this.defaultLable=this.footerBar[0].link,this.getTabIndex(this.$route.name)},methods:{tabIndex:function(t){this.routerIndex=t},getTabIndex:function(t){var e=this.footerBar.findIndex(function(e){return e.link===t});e<0&&(e=0),this.routerIndex=e,this.defaultLable=this.footerBar[e].link},touchstart:function(t){this.touchPointerX=t.touches[0].pageX,this.touchPointerY=t.touches[0].pageY},touchend:function(t){this.touchendPointerX=t.changedTouches[0].pageX,this.touchendPointerY=t.changedTouches[0].pageY;var e=Math.abs(this.touchendPointerY-this.touchPointerY),n=Math.abs(this.touchendPointerX-this.touchPointerX),o=this.footerBar.length;if(!(e>n+10)){this.touchendPointerX-this.touchPointerX<-50&&(this.routerIndex++,this.routerIndex===o&&(this.routerIndex=o-1)),this.touchendPointerX-this.touchPointerX>50&&(this.routerIndex--,this.routerIndex<0&&(this.routerIndex=0));var a=this.footerBar[this.routerIndex].link;this.$router.push(a),this.defaultLable=a}}}},m=x,v=(n("99a4"),Object(f["a"])(m,o,a,!1,null,"110fc1c7",null));v.options.__file="index.vue";e["default"]=v.exports},"41d9":function(t,e,n){},"783a":function(t,e,n){},"99a4":function(t,e,n){"use strict";var o=n("783a"),a=n.n(o);a.a},d197:function(t,e,n){"use strict";n("eede")("link",function(t){return function(e){return t(this,"a","href",e)}})},f092:function(t,e,n){"use strict";var o=n("41d9"),a=n.n(o);a.a}}]);
//# sourceMappingURL=Index.ac37e8ad.js.map