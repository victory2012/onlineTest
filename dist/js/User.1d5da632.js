(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["User"],{"0be3":function(e,t,a){"use strict";var n=a("44e5"),s=a.n(n);s.a},"44e5":function(e,t,a){},"62b0":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-wrapper"},[a("top-header",[a("div",{attrs:{slot:"mainTab"},slot:"mainTab"},[a("div",{staticClass:"userTab"},[a("cube-tab-bar",{on:{click:e.clickHandler},model:{value:e.selectedLabelDefault,callback:function(t){e.selectedLabelDefault=t},expression:"selectedLabelDefault"}},e._l(e.tabs,function(t){return a("cube-tab",{key:t.label,staticClass:"userSetClass",attrs:{label:t.label}},[e._v("\n            "+e._s(t.name)+"\n          ")])}),1)],1)])]),a("div",{staticClass:"slide-wrapper"},[a(e.showComponent,{tag:"component"})],1)],1)},s=[],i=a("f392"),l={data:function(){return{selectedLabelDefault:"User",showComponent:"User",tabs:[{label:"User",name:"用户管理"},{label:"Company",name:"企业管理"}],initialIndex:0}},components:{topHeader:i["a"],User:function(){return a.e("chunk-156e28ab").then(a.bind(null,"9d39"))},Company:function(){return a.e("chunk-6f8ae336").then(a.bind(null,"5a97"))}},mounted:function(){},methods:{clickHandler:function(e){console.log("clickHandler name",e),this.showComponent=e},toUserManager:function(){this.userManager=!0,this.$router.push({name:"HomeUser"})},toCompanyManager:function(){this.userManager=!1,this.$router.push({name:"companyManager"})}}},r=l,o=(a("e062"),a("25c1")),c=Object(o["a"])(r,n,s,!1,null,"2b156b2e",null);c.options.__file="user.vue";t["default"]=c.exports},6818:function(e,t,a){},e062:function(e,t,a){"use strict";var n=a("6818"),s=a.n(n);s.a},f392:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"mint-header",class:{"is-fixed":e.fixed}},[a("div",{staticClass:"header-button is-left"},[e._t("left")],2),a("div",{staticClass:"header-title"},[e._t("mainTab")],2),a("div",{staticClass:"header-button is-right"},[e._t("right")],2)])},s=[],i={name:"top-header",props:{fixed:Boolean,title:String}},l=i,r=(a("0be3"),a("25c1")),o=Object(r["a"])(l,n,s,!1,null,"27adf9d8",null);o.options.__file="header.vue";t["a"]=o.exports}}]);
//# sourceMappingURL=User.1d5da632.js.map