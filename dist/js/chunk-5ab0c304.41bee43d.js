(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ab0c304"],{1179:function(e,a,t){var n=t("e912"),c=t("2aa6");n(n.G+n.F*(parseInt!=c),{parseInt:c})},1457:function(e,a,t){"use strict";var n=t("847f"),c=t.n(n);c.a},"1a66":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("cube-scroll",{ref:"scroll",staticClass:"userList",attrs:{options:e.options},on:{"pulling-up":e.pullingUp}},e._l(e.tableData,function(a){return t("div",{key:a.id+Math.random(),staticClass:"userItem"},[t("div",{staticClass:"companyName"},[t("span",{staticClass:"tit"},[e._v("企业名称")]),t("span",[e._v(e._s(a.companyName))]),t("span",{staticClass:"userRole"},[e._v(e._s(a.role))]),t("span",[e._v(e._s(a.userName))])]),t("div",{staticClass:"companyRole"},[t("span",{staticClass:"tit"},[e._v("企业身份")]),t("span",[e._v(e._s(a.companyRole))]),t("span",[e._v(e._s(a.phone))]),t("span",[e._v("用户名")])]),t("div",{staticClass:"nikeName"},[t("span",{staticClass:"tit"},[e._v("昵称")]),t("span",[e._v(e._s(a.nickName))]),t("span",{staticClass:"tit"},[e._v("邮箱")]),t("span",[e._v(e._s(a.email))])]),t("div",{staticClass:"handle"},[t("p",[e._v("删除")]),e._v("|\n      "),t("p",{on:{click:e.changePermission}},[e._v("修改权限")])])])}),0)},c=[],o=(t("3c1b"),t("de57")),r=t("52c1"),m=(t("cfd2"),t("6636"),t("a6eb")),i=t.n(m),s=(t("94ec"),t("a2ba")),u=void 0,l=[[0],[31],[28],[31],[30],[31],[30],[31],[31],[30],[31],[30],[31]],p={accountType:function(e){var a=e.toString();switch(a){case"1":return Object(s["a"])("platform");case"2":return Object(s["a"])("administrator");case"3":return Object(s["a"])("adminIden");default:return""}},fomats:function(e){var a=e.substring(0,4),t=e.substring(4,6),n=e.substring(6,8),c=e.substring(8,10),o=e.substring(10,12),r=e.substring(12,14);return"".concat(a,"-").concat(t,"-").concat(n," ").concat(c,":").concat(o,":").concat(r)},dateFomat:function(e){var a=new Date(e),t=a.getFullYear(),n=a.getMonth()+1,c=a.getDate(),o=a.getHours(),r=a.getMinutes(),m=a.getSeconds();return n=n<10?"0".concat(n):n,c=c<10?"0".concat(c):c,o=o<10?"0".concat(o):o,r=r<10?"0".concat(r):r,m=m<10?"0".concat(m):m,"".concat(t,"/").concat(n,"/").concat(c," ").concat(o,":").concat(r,":").concat(m)},UTCTime:function(e){var a=e.substring(0,4),t=e.substring(4,6),n=e.substring(6,8),c=e.substring(8,10),o=e.substring(10,12),r=e.substring(12,14),m="".concat(a,"/").concat(t,"/").concat(n," ").concat(c,":").concat(o,":").concat(r," UTC"),i=new Date(m).getTime();return u.a.dateFomat(i)},Days:function(e){var a,t=i()(e/864e5,10),n=i()(e%864e5/36e5,10),c=i()(e%36e5/6e4,10),o=e%60;return t?a="".concat(t).concat(Object(s["a"])("time.day")," ").concat(n).concat(Object(s["a"])("time.hour")," ").concat(c).concat(Object(s["a"])("time.mins")," ").concat(o).concat(Object(s["a"])("time.sec")):(a="".concat(n).concat(Object(s["a"])("time.hour")," ").concat(c).concat(Object(s["a"])("time.mins")," ").concat(o).concat(Object(s["a"])("time.sec")),n||(a="".concat(c).concat(Object(s["a"])("time.mins")," ").concat(o).concat(Object(s["a"])("time.sec")),c||(a="".concat(o).concat(Object(s["a"])("time.sec"))))),a},setStorage:function(e,a){sessionStorage.setItem(e,a)},getStorage:function(e){return sessionStorage.getItem(e)},removeStorage:function(e){sessionStorage.removeItem(e)},removeStorageAll:function(){sessionStorage.clear()},setToken:function(e){sessionStorage.setItem("token",e)},dateFomats:function(e){var a=new Date(e),t=a.getFullYear(),n=a.getMonth()+1,c=a.getDate(),o=a.getHours(),r=a.getMinutes(),m=a.getSeconds();return n=n<10?"0".concat(n):n,c=c<10?"0".concat(c):c,o=o<10?"0".concat(o):o,r=r<10?"0".concat(m):m,m=m<10?"0".concat(m):m,"".concat(t,"/").concat(n,"/").concat(c," ").concat(o,":").concat(r,":").concat(m)},getNowTime:function(){var e=(new Date).getTime(),a=u.a.dateFomat(e);return u.a.toUTCTime(a)},getFourHours:function(){var e=(new Date).getTime(),a=e-144e5,t=u.a.dateFomat(a);return u.a.toUTCTime(t)},getWeek:function(){var e=(new Date).getTime(),a=new Date(e-6048e5);return a},getMouth:function(){var e=new Date,a=e.getFullYear(),t=e.getDate(),n=e.getMonth()+1;return a%4===0&&a%100!==0&&(l[2]=29),n-1===0?(a-=1,n=12):n-=1,t=l[n]>=t?t:l[n],n<10&&(n="0".concat(n)),t<10&&(t="0".concat(t)),"".concat(a,"-").concat(n,"-").concat(t)},getThreeMounth:function(){var e=new Date,a=e.getFullYear(),t=e.getDate(),n=e.getMonth()+1;return a%4===0&&a%100!==0&&(l[2]=29),n-3===0?(a-=1,n=12):n-3===-1?(a-=1,n=11):n-3===-2?(a-=1,n=10):n-=3,t=l[n]>=t?t:l[n],n<10&&(n="0".concat(n)),t<10&&(t="0".concat(t)),"".concat(a,"-").concat(n,"-").concat(t)},getSixMounth:function(){var e=new Date,a=e.getFullYear(),t=e.getDate(),n=e.getMonth()+1;return a%4===0&&a%100!==0&&(l[2]=29),n-6===0?(a-=1,n=12):n-6===-1?(a-=1,n=11):n-6===-2?(a-=1,n=10):n-6===-3?(a-=1,n=9):n-6===-4?(a-=1,n=8):n-6===-5?(a-=1,n=7):n-=6,t=l[n]>=t?t:l[n],n<10&&(n="0".concat(n)),t<10&&(t="0".concat(t)),"".concat(a,"-").concat(n,"-").concat(t)},getYear:function(){var e=new Date,a=e.getFullYear()-1,t=e.getDate(),n=e.getMonth()+1;return n<10&&(n="0".concat(n)),t<10&&(t="0".concat(t)),"".concat(a,"-").concat(n,"-").concat(t)},checkDate:function(e){var a=e.toString();return!(a.indexOf("年")>0||a.indexOf("月")>0||a.indexOf("日")>0||a.length<7||a.length>11)},yyyymmdd:function(e){var a=new Date(e),t=a.getFullYear(),n=a.getMonth()+1,c=a.getDate();return n=n<10?"0".concat(n):n,c=c<10?"0".concat(c):c,"".concat(t,"-").concat(n,"-").concat(c)},hhmmss:function(e){var a=new Date(e),t=a.getHours(),n=a.getMinutes(),c=a.getSeconds();return t=t<10?"0".concat(t):t,n=n<10?"0".concat(n):n,c=c<10?"0".concat(c):c,"".concat(t,":").concat(n,":").concat(c)},level:function(e){var a=Number(e);switch(a){case 1:return Object(s["a"])("group.high");case 2:return Object(s["a"])("group.mid");case 3:return Object(s["a"])("group.low");default:break}},item:function(e){switch(e){case"Voltage":return Object(s["a"])("realTime.voltage");case"Current":return Object(s["a"])("realTime.current");case"Temperature":return Object(s["a"])("realTime.temperature");case"Fluid":return Object(s["a"])("realTime.fluid");default:break}},year2year:function(e,a){var t=new Date(e),n=new Date(a),c=t.getFullYear()-1,o=t.getMonth()+1,r=t.getDate(),m=t.getHours(),i=t.getMinutes(),s=t.getSeconds();o=o<10?"0".concat(o):o,r=r<10?"0".concat(r):r,m=m<10?"0".concat(m):m,i=i<10?"0".concat(i):i,s=s<10?"0".concat(s):s;var l=n.getFullYear()-1,p=n.getMonth()+1,g=n.getDate(),d=t.getHours(),h=t.getMinutes(),N=t.getSeconds();p=p<10?"0".concat(p):p,g=g<10?"0".concat(g):g,d=d<10?"0".concat(d):d,h=h<10?"0".concat(h):h,N=N<10?"0".concat(N):N;var y="".concat(c,"/").concat(o,"/").concat(r," ").concat(m,":").concat(i,":").concat(s),f="".concat(l,"/").concat(p,"/").concat(g," ").concat(d,":").concat(h,":").concat(N);return{startTime:u.a.toUTCTime(y),endTime:u.a.toUTCTime(f)}},m2m:function(e,a){var t=a-e,n=e-t-864e5,c=e;return{startTime:u.a.toUTCTime(n),endTime:u.a.toUTCTime(c)}},sortTime:function(e){var a=new Date(e),t=a.getFullYear(),n=a.getMonth()+1,c=a.getDate();return n=n<10?"0".concat(n):n,c=c<10?"0".concat(c):c,"".concat(t).concat(n).concat(c)},sortTime2:function(e){var a=new Date(e),t=a.getFullYear(),n=a.getMonth()+1,c=a.getDate();return n=n<10?"0".concat(n):n,c=c<10?"0".concat(c):c,"".concat(t,"-").concat(n,"-").concat(c)},zoomTime:function(e,a){var t=new Date(e).getTime(),n=new Date(a).getTime(),c=n-t;return c},RexTime:function(e){var a=e.replace(/-/g,""),t=a.replace(/:/g,""),n=t.replace(/ /g,"");return n},toUTCTime:function(e){var a=new Date(e).toISOString(),t=a.replace(/-/g,""),n=t.replace(/T/g,""),c=n.replace(/:/g,"");return c.substr(0,14)},TimeSconds:function(e){var a=e.substring(0,4),t=e.substring(4,6),n=e.substring(6,8),c=e.substring(8,10),o=e.substring(10,12),r=e.substring(12,14),m="".concat(a,"/").concat(t,"/").concat(n," ").concat(c,":").concat(o,":").concat(r," UTC"),i=new Date(m).getTime();return i},DifferTime:function(e,a){var t=new Date(e).getTime(),n=new Date(a).getTime();return n-t},endTime:function(e){var a,t=new Date(e),n=t.getHours(),c=t.getFullYear(),o=t.getMonth()+1,r=t.getDate();if(o=o<10?"0".concat(o):o,r=r<10?"0".concat(r):r,n>0)a="".concat(c,"/").concat(o,"/").concat(r," 23:59:59");else{var m="".concat(c,"/").concat(o,"/").concat(r," 00:00:00");a=new Date(m).getTime()+864e5}return a},startTime:function(e){var a=new Date(e),t=a.getFullYear(),n=a.getMonth()+1,c=a.getDate();n=n<10?"0".concat(n):n,c=c<10?"0".concat(c):c;var o="".concat(t,"/").concat(n,"/").concat(c," 00:00:00"),r=new Date(o).getTime();return r},creatTimeEnd:function(e){var a=new Date(e).getTime()+864e5,t=new Date(a),n=t.getFullYear(),c=t.getMonth()+1,o=t.getDate(),r=t.getHours(),m=t.getMinutes(),i=t.getSeconds();return c=c<10?"0".concat(c):c,o=o<10?"0".concat(o):o,r=r<10?"0".concat(r):r,m=m<10?"0".concat(m):m,i=i<10?"0".concat(i):i,"".concat(n,"-").concat(c,"-").concat(o," ").concat(r,":").concat(m,":").concat(i)},trakTimeformat:function(e){var a=e.substring(0,2),t=e.substring(2,4),n=e.substring(4,6),c=e.substring(6,8),o=e.substring(8,10),r=e.substring(10,12);return"20".concat(a,"-").concat(t,"-").concat(n," ").concat(c,":").concat(o,":").concat(r)}},g={name:"",props:[""],data:function(){return{threshold:20,pullUpLoadObj:{threshold:50,txt:{more:"上拉加载更多",noMore:"没有更多数据"}},data:[{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"15866559988",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"158665118",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"15866559988",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"158665118",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"15866559988",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"158665118",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"15866559988",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"158665118",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"15866559988",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"158665118",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"15866559988",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"158665118",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"15866559988",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"158665118",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"15866559988",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"158665118",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"15866559988",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"158665118",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"15866559988",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"158665118",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"15866559988",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"158665118",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"15866559988",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"158665118",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"15866559988",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"158665118",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"15866559988",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"158665118",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"15866559988",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"158665118",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"15866559988",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"158665118",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"15866559988",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"158665118",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"15866559988",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"158665118",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"15866559988",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"158665118",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"15866559988",nikeName:"张王李赵",Email:"aaacc@126.com"},{id:Math.random(),companyName:"摩融科技",userRole:"管理员",userName:"某某人",companyRole:"生产企业",phone:"158665118",nikeName:"张王李赵",Email:"aaacc@126.com"}],tableData:[],currentPage:1}},computed:Object(o["a"])({},Object(r["b"])({storge:"getLoginData"}),{options:function(){return{pullUpLoad:this.pullUpLoadObj,scrollbar:!0}}}),mounted:function(){this.tableData=this.data},methods:{pullingUp:function(){this.currentPage++,this.currentPage>this.totalPage?this.$refs.scroll.forceUpdate():this.getUserList()},getUserList:function(){var e=this,a={pageSize:"15",pageNum:this.currentPage};this.loading.show(),this.$api.getUserList(a).then(function(a){if(e.loading.hide(),a.data&&0===a.data.code){var t=a.data;e.totalPage=t.data.totalPage,t.data.pageData.length>0&&t.data.pageData.forEach(function(a){a.role=p.accountType(a.type),a.email=a.email||"-",e.storge.companyId===a.companyId&&e.storge.type===a.type?(a.canNotDelete=!1,a.changePermison=!1):(a.changePermison=!1,a.canNotDelete=!1,"平台"===a.layerName&&(a.changePermison=!1,a.canNotDelete=!1),"平台"===e.storge.layerName&&2===a.type&&"生产企业"===a.layerName&&(a.canNotDelete=!0,a.changePermison=!1),2===e.storge.type&&"生产企业"===e.storge.layerName&&2===a.type&&"采购企业"===a.layerName&&(a.canNotDelete=!0,a.changePermison=!0),2===e.storge.type&&"生产企业"===e.storge.layerName&&3===a.type&&"生产企业"===a.layerName&&(a.canNotDelete=!0,a.changePermison=!0),2===e.storge.type&&"生产企业"===e.storge.layerName&&2===a.type&&"采购企业"===a.layerName&&(a.canNotDelete=!0,a.changePermison=!0),2===e.storge.type&&"采购企业"===e.storge.layerName&&3===a.type&&"采购企业"===a.layerName&&(a.changePermison=!0,a.canNotDelete=!0),3===e.storge.type&&"生产企业"!==e.storge.layerName&&3===a.type&&"采购企业"===a.layerName&&(a.changePermison=!1,a.canNotDelete=!1),3===e.storge.type&&"平台"!==e.storge.layerName&&(a.changePermison=!1,a.canNotDelete=!1)),e.tableData.push(a)})}})},changePermission:function(){this.$router.push({name:"Permission"})}}},d=g,h=(t("1457"),t("25c1")),N=Object(h["a"])(d,n,c,!1,null,"0f970fe6",null);N.options.__file="userList.vue";a["default"]=N.exports},"2aa6":function(e,a,t){var n=t("ca91").parseInt,c=t("6b99").trim,o=t("7298"),r=/^[-+]?0[xX]/;e.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(e,a){var t=c(String(e),3);return n(t,a>>>0||(r.test(t)?16:10))}:n},"6b99":function(e,a,t){var n=t("e912"),c=t("aedc"),o=t("6d03"),r=t("7298"),m="["+r+"]",i="​",s=RegExp("^"+m+m+"*"),u=RegExp(m+m+"*$"),l=function(e,a,t){var c={},m=o(function(){return!!r[e]()||i[e]()!=i}),s=c[e]=m?a(p):r[e];t&&(c[t]=s),n(n.P+n.F*m,"String",c)},p=l.trim=function(e,a){return e=String(c(e)),1&a&&(e=e.replace(s,"")),2&a&&(e=e.replace(u,"")),e};e.exports=l},7298:function(e,a){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"847f":function(e,a,t){},a6eb:function(e,a,t){e.exports=t("c2d4")},c2d4:function(e,a,t){t("1179"),e.exports=t("332a").parseInt}}]);
//# sourceMappingURL=chunk-5ab0c304.41bee43d.js.map