(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["UserList"],{"12e8":function(e,t,n){},4160:function(e,t,n){"use strict";var s=n("12e8"),o=n.n(s);o.a},"905e":function(e,t,n){},"91da":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.showThisComponent,expression:"showThisComponent"}],staticClass:"mask",on:{click:e.closeThis}},[n("div",{staticClass:"wraper"},[e._m(0),e._t("options")],2)])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"icon"},[n("span",{staticClass:"iconfont"})])}],a={name:"",props:["showComponent"],data:function(){return{showOrhide:this.showComponent}},computed:{showThisComponent:function(){return this.showOrhide}},watch:{showComponent:{handler:function(e){this.showOrhide=e}}},components:{},mounted:function(){},methods:{closeThis:function(){this.$emit("onchange",{showOrhide:!1})}}},i=a,r=(n("ca56"),n("25c1")),c=Object(r["a"])(i,s,o,!1,null,"45eff536",null);c.options.__file="moreOptions.vue";t["a"]=c.exports},"9d39":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-wrapper"},[n("top-header",[n("div",{attrs:{slot:"mainTab"},slot:"mainTab"},[n("div",{staticClass:"userTab"},[n("cube-tab-bar",{on:{click:e.clickHandler},model:{value:e.selectedLabelDefault,callback:function(t){e.selectedLabelDefault=t},expression:"selectedLabelDefault"}},e._l(e.tabs,function(t){return n("cube-tab",{key:t.label,staticClass:"userSetClass",attrs:{label:t.label}},[e._v("\n            "+e._s(t.name)+"\n          ")])}),1)],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:"User"===e.showComponent,expression:"showComponent === 'User'"}],staticClass:"addUser",attrs:{slot:"right"},on:{click:e.showAddOptions},slot:"right"},[n("i",{staticClass:"iconfont icon-create_customer"})])]),n("div",{staticClass:"slide-wrapper"},[n(e.showComponent,{tag:"component"})],1),n("moreOptions",{attrs:{showComponent:e.showMore},on:{onchange:e.changeHandle}},[n("div",{attrs:{slot:"options"},slot:"options"},[n("ul",{staticClass:"moreOptionWraper"},e._l(e.moreOptions,function(t){return n("li",{key:t.id,on:{click:function(n){n.stopPropagation(),e.toAddUser(t)}}},[e._v(e._s(t.name))])}),0)])])],1)},o=[],a=n("f392"),i=n("91da"),r={data:function(){return{selectedLabelDefault:"User",showComponent:"User",showMore:!1,tabs:[{label:"User",name:"用户管理"},{label:"Company",name:"企业管理"}],initialIndex:0,moreOptions:[{id:"productAdmin",name:"生产企业管理员",path:"CreateAdmin"},{id:"customer",name:"采购企业管理员",path:"CreateAdmin"},{id:"user",name:"创建本企业用户",path:"CreateUser"}]}},components:{topHeader:a["a"],moreOptions:i["a"],User:function(){return n.e("chunk-5ab0c304").then(n.bind(null,"1a66"))},Company:function(){return n.e("chunk-f7fc5ad8").then(n.bind(null,"933d"))}},mounted:function(){},methods:{showAddOptions:function(){this.showMore=!this.showMore},clickHandler:function(e){this.showComponent=e},changeHandle:function(e){var t=e.showOrhide;this.showMore=t},toAddUser:function(e){this.showMore=!1,this.$router.push({name:e.path})},toUserManager:function(){this.userManager=!0,this.$router.push({name:"HomeUser"})},toCompanyManager:function(){this.userManager=!1,this.$router.push({name:"companyManager"})}}},c=r,l=(n("4160"),n("25c1")),u=Object(l["a"])(c,s,o,!1,null,"6d4b83a8",null);u.options.__file="user-manager.vue";t["default"]=u.exports},ac8d:function(e,t,n){"use strict";var s=n("c9ca"),o=n.n(s);o.a},c9ca:function(e,t,n){},ca56:function(e,t,n){"use strict";var s=n("905e"),o=n.n(s);o.a},f392:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"mint-header",class:{"is-fixed":e.fixed}},[n("div",{staticClass:"header-button is-left"},[e._t("left")],2),n("div",{staticClass:"header-title"},[e._t("mainTab")],2),n("div",{staticClass:"header-button is-right"},[e._t("right")],2)])},o=[],a={name:"top-header",props:{fixed:Boolean,title:String}},i=a,r=(n("ac8d"),n("25c1")),c=Object(r["a"])(i,s,o,!1,null,"d9229064",null);c.options.__file="header.vue";t["a"]=c.exports}}]);
//# sourceMappingURL=UserList.e0b2201e.js.map