(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["loading"],{"0bb4":function(t,s,e){},"195b":function(t,s,e){"use strict";var n=e("0bb4"),o=e.n(n);o.a},"4ffd":function(t,s,e){t.exports=e.p+"img/logo.f3bcb14b.png"},6553:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"wraper"},[e("transition",{attrs:{name:"slide-fade"}},[e("div",{staticClass:"card ad"},[e("img",{attrs:{src:t.LogoSrc,alt:""}}),t._v("\n      电池智能监控\n      ")])])],1)},o=[],i=(e("ff66"),e("ea23"),e("dbff"),{name:"",props:[""],data:function(){return{LogoSrc:e("4ffd")}},components:{},mounted:function(){var t=this;setTimeout(function(){t.$router.push({name:"login"})},3e3)},methods:{doAccountLogin:function(t){var s=this;this.$api.login(t).then(function(e){var n=e.data;if(0===n.code){localStorage.setItem("accPwd",JSON.stringify(t)),sessionStorage.setItem("token",e.headers.token),sessionStorage.setItem("loginData",JSON.stringify(n.data)),s.$store.commit("setUserLoginData",n.data);var o=n.data,i=o.companyId,a=o.id;s.getCompanyPermissions(i,a)}})},getCompanyPermissions:function(t,s){var e=this;this.$api.getCompanyRole(t).then(function(t){var n=t.data;console.log("CompanyPermissions",n),0===n.code&&(sessionStorage.setItem("CompanyPermissions",n.data),e.getUserPermissions(s))})},getUserPermissions:function(t){var s=this;this.$api.permissions(t).then(function(t){var e=t.data;console.log("UserPermissions",e),0===e.code&&(sessionStorage.setItem("UserPermissions",e.data),s.$router.push({name:"Home"}))})}}}),a=i,r=(e("195b"),e("048f")),c=Object(r["a"])(a,n,o,!1,null,"4868da60",null);c.options.__file="loading.vue";s["default"]=c.exports}}]);
//# sourceMappingURL=loading.7f1157c6.js.map