(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-83e55230"],{"431e":function(t,n,o){},"5a97":function(t,n,o){"use strict";o.r(n);var s=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("cube-scroll",{ref:"scroll",staticClass:"companyList",attrs:{options:t.options},on:{"pulling-down":t.pullingDown,"pulling-up":t.pullingUp}},[s("div",{staticClass:"companyItem",on:{click:function(n){return n.stopPropagation(),t.stopPropagation(n)}}},[s("div",{staticClass:"company"},[s("img",{attrs:{src:o("d356"),alt:"",srcset:""}}),s("div",{staticClass:"companyInfo"},[s("p",{staticClass:"companyName"},[t._v("上海摩融信息科技有限公司")]),s("p",{staticClass:"address"},[t._v("地址："),s("span",[t._v("上海市世纪大道1777号")])])])]),s("div",{staticClass:"companyPhone"},[s("div",{staticClass:"phone"},[s("span",{staticClass:"tit"},[t._v("电话：")]),s("span",[t._v("15666558899")])]),s("div",{staticClass:"detailBtn"},[t._v("详情")])])])]),s("div",{staticClass:"pb",class:{animation:t.activeBtn},on:{click:t.addCompany}},[t._v("\n    添加公司\n  ")])],1)},a=[],i={name:"",props:[""],data:function(){return{activeBtn:!1,threshold:20,pullUpLoad:!0,testObj:{},pullDownRefreshObj:{threshold:50,stop:20},pullUpLoadObj:{threshold:50}}},computed:{options:function(){return{pullDownRefresh:this.pullDownRefreshObj,pullUpLoad:this.pullUpLoadObj,scrollbar:!0}}},components:{},mounted:function(){},methods:{onFetch:function(){var t=[];return new Promise(function(n){setTimeout(function(){for(var o=0;o<20;o++)t.push({id:o,avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg",msg:"123",time:"Thu Oct 25 2018 15:02:12 GMT+0800 (中国标准时间)"});n(t)},1e3)})},pullingDown:function(){console.log("pullDownRefreshObj")},pullingUp:function(){console.log("pullUpLoadObj")},addCompany:function(){console.log("addCompany")}}},l=i,e=(o("c459"),o("048f")),c=Object(e["a"])(l,s,a,!1,null,"3dcdd5e6",null);c.options.__file="company-manager.vue";n["default"]=c.exports},c459:function(t,n,o){"use strict";var s=o("431e"),a=o.n(s);a.a},d356:function(t,n,o){t.exports=o.p+"img/default_avatar.5a5e2561.png"}}]);
//# sourceMappingURL=chunk-83e55230.4a8e4289.js.map