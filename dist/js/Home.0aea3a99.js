(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Home"],{"1e4b":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"banner"},[a("cube-slide",{attrs:{data:e.items}})],1),a("div",{staticClass:"body"},[a("div",{staticClass:"tab-menu"},[e._v("电池检测")]),a("div",{staticClass:"tab-menu"},[e._v("电池追踪")]),a("div",[a("video",{ref:"video",staticStyle:{width:"320px",height:"140px"},attrs:{id:"video",autoplay:""}}),a("button",{attrs:{id:"picture"},on:{click:e.getMedia}},[e._v("PICTURE")]),a("canvas",{ref:"canvas",attrs:{id:"canvas",width:"320",height:"140"}})])]),a("div",{staticClass:"footerBar"},[a("cube-tab-bar",{attrs:{data:e.tabs,"show-slider":""},on:{click:e.clickHandler,change:e.changeHandler},model:{value:e.selectedLabelDefault,callback:function(t){e.selectedLabelDefault=t},expression:"selectedLabelDefault"}})],1)])},c=[],n={name:"home",data:function(){return{selectedLabelDefault:"Home",tabs:[{label:"Home",icon:"cubeic-home"},{label:"News",icon:"cubeic-like"},{label:"User",icon:"cubeic-vip"},{label:"Me",icon:"cubeic-person"}],items:[{image:a("38f3")},{image:a("ab86")}]}},methods:{clickHandler:function(){},changeHandler:function(){},getMedia:function(){var e=this.$refs.video,t=this.$refs.canvas.getContext("2d");navigator.getUserMedia?navigator.getUserMedia({video:!0},function(t){e.src=t,e.play()},this.errocb):navigator.webkitGetUserMedia&&navigator.webkitGetUserMedia({video:!0},function(t){e.src=window.webkitURL.createObjectURL(t),e.play()},this.errocb),t.drawImage(e,0,0,320,140)},errocb:function(){console.log("sth wrong")}}},s=n,o=(a("4dbe"),a("048f")),r=Object(o["a"])(s,i,c,!1,null,"445fa272",null);r.options.__file="index.vue";t["default"]=r.exports},"38f3":function(e,t,a){e.exports=a.p+"img/1.31ef9c63.jpg"},"4a00":function(e,t,a){},"4dbe":function(e,t,a){"use strict";var i=a("4a00"),c=a.n(i);c.a},ab86:function(e,t,a){e.exports=a.p+"img/4.953b99f5.jpg"}}]);
//# sourceMappingURL=Home.0aea3a99.js.map