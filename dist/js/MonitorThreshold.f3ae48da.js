(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MonitorThreshold"],{"0be3":function(t,e,a){"use strict";var s=a("4752"),o=a.n(s);o.a},"0ff0":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"noticeCenter"},[a("top-header",{attrs:{fixed:""}},[a("div",{staticClass:"backIcon",attrs:{slot:"left"},slot:"left"},[a("i",{staticClass:"backIcon iconfont icon-back1",on:{click:t.goBack}})]),a("div",{staticClass:"searchWarper",attrs:{slot:"mainTab"},slot:"mainTab"},[a("div",{staticClass:"active"},[t._v("未添加")]),a("div",[t._v("已添加")])]),a("div",{staticClass:"CloseIcon",attrs:{slot:"right"},slot:"right"},[a("i",{staticClass:"iconfont icon-Close",on:{click:t.goBackToHome}})])]),t._m(0),a("div",{staticClass:"noticeWraper"},[a("cube-scroll",{staticClass:"cubeScrollWraper",attrs:{options:t.options},on:{"pulling-up":t.pullingUp}},t._l(t.randerArr,function(e){return a("div",{key:e.id,staticClass:"noticeInfo"},[a("div",{staticClass:"noticePersion"},[a("span",[t._v("用户名："+t._s(e.user))]),a("span",[t._v("账户身份："+t._s(e.role))])]),a("div",{staticClass:"noticePersionInfo"},[a("div",{staticClass:"top"},[a("p",{staticClass:"phone"},[a("span",[t._v("手机号："+t._s(e.phone))]),a("span",[t._v("状态："+t._s(e.state))])]),a("p",{staticClass:"createTime"},[a("span",[t._v("创建时间: "+t._s(e.time))])])]),a("div",{staticClass:"btn"},[a("p",[t._v("添加")])])])])}),0)],1),a("div",{staticClass:"pb"},[t._v(" 外部接收 ")])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"noticeSearch"},[a("input",{attrs:{placeholder:"请输入内容",type:"text"}})])}],i=a("f392"),n={data:function(){return{pullDownRefreshObj:{threshold:500,stop:20},pullUpLoadObj:{threshold:50},randerArr:[{id:Math.random(),user:"张王李赵",role:"管理员",state:"状态：未添加",time:"2019-01-01 12:12:12",phone:"15899663300"},{id:Math.random(),user:"张王李赵",role:"管理员",state:"状态：未添加",time:"2019-01-01 12:12:12",phone:"15899663300"},{id:Math.random(),user:"张王李赵",role:"管理员",state:"状态：未添加",time:"2019-01-01 12:12:12",phone:"15899663300"},{id:Math.random(),user:"张王李赵",role:"管理员",state:"状态：未添加",time:"2019-01-01 12:12:12",phone:"15899663300"},{id:Math.random(),user:"张王李赵",role:"管理员",state:"状态：未添加",time:"2019-01-01 12:12:12",phone:"15899663300"},{id:Math.random(),user:"张王李赵",role:"管理员",state:"状态：未添加",time:"2019-01-01 12:12:12",phone:"15899663300"},{id:Math.random(),user:"张王李赵",role:"管理员",state:"状态：未添加",time:"2019-01-01 12:12:12",phone:"15899663300"},{id:Math.random(),user:"张王李赵",role:"管理员",state:"状态：未添加",time:"2019-01-01 12:12:12",phone:"15899663300"},{id:Math.random(),user:"张王李赵",role:"管理员",state:"状态：未添加",time:"2019-01-01 12:12:12",phone:"15899663300"},{id:Math.random(),user:"张王李赵",role:"管理员",state:"状态：未添加",time:"2019-01-01 12:12:12",phone:"15899663300"},{id:Math.random(),user:"张王李赵",role:"管理员",state:"状态：未添加",time:"2019-01-01 12:12:12",phone:"15899663300"},{id:Math.random(),user:"张王李赵",role:"管理员",state:"状态：未添加",time:"2019-01-01 12:12:12",phone:"15899663300"},{id:Math.random(),user:"张王李赵",role:"管理员",state:"状态：未添加",time:"2019-01-01 12:12:12",phone:"15899663300"},{id:Math.random(),user:"张王李赵",role:"管理员",state:"状态：未添加",time:"2019-01-01 12:12:12",phone:"15899663300"},{id:Math.random(),user:"张王李赵",role:"管理员",state:"状态：未添加",time:"2019-01-01 12:12:12",phone:"15899663300"}]}},computed:{options:function(){return{pullDownRefresh:this.pullDownRefreshObj,pullUpLoad:this.pullUpLoadObj,scrollbar:!1,click:!0}}},components:{topHeader:i["a"]},mounted:function(){},methods:{pullingUp:function(){console.log("pullingUp")},goBackToHome:function(){},goBack:function(){this.$router.push({name:"Monitor"})}}},r=n,l=(a("c4be"),a("048f")),c=Object(l["a"])(r,s,o,!1,null,"451073c5",null);c.options.__file="notice.vue";e["default"]=c.exports},"1b73":function(t,e,a){"use strict";var s=a("96bc"),o=a.n(s);o.a},"37ce":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"thresholdCenter"},[a("top-header",{attrs:{fixed:""}},[a("div",{staticClass:"backIcon",attrs:{slot:"left"},slot:"left"},[a("i",{staticClass:"backIcon iconfont icon-back1",on:{click:t.goBack}})]),a("div",{staticClass:"thresholdHeader",attrs:{slot:"mainTab"},slot:"mainTab"},[a("div",{staticClass:"searchWarper"},[a("div",{class:{active:t.activeByModel},on:{click:t.selectByModel}},[t._v("电池型号分类")]),a("div",{class:{active:!t.activeByModel},on:{click:t.selectByCompany}},[t._v("企业全局分类")])]),a("div",{staticClass:"batteryModel",on:{click:t.selectBatteryCode}},[t._v("电池型号 "),a("i",{staticClass:"iconfont icon-downarrow1"})])]),a("div",{staticClass:"CloseIcon",attrs:{slot:"right"},slot:"right"},[a("i",{staticClass:"iconfont icon-Close",on:{click:t.goBackToHome}})])]),a("div",{staticClass:"thresholdWraper"},[a("cube-scroll",{attrs:{options:t.options}},[a("ul",{staticClass:"thresholdInfo"},t._l(t.thresholdArr,function(e){return a("li",{key:e.id},[a("div",{staticClass:"tit"},[t._v(t._s(e.name))]),a("div",{staticClass:"inputContent"},[a("cube-input",{attrs:{placeholder:"请输入电池编号",type:"number"},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"item.value"}})],1)])}),0)])],1),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottomBtn"},[a("div",{staticClass:"active"},[t._v("修改阈值")]),a("div",[t._v("恢复全局")])])}],i=a("f392"),n=[{text:"Text12346",value:"123456"},{text:"Text12346",value:"aad"},{text:"Text12346",value:"ddeef"},{text:"Text12346",value:"gdfg"},{text:"Text12346",value:"fgh"},{text:"Text12346",value:"ddeghjef"}],r={name:"",props:[""],data:function(){return{activeByModel:!0,regForm:{},thresholdArr:[{id:Math.random(),name:"单体充电电压上限阈值(V)",value:"20"},{id:Math.random(),name:"单体放电电压下限阈值(V)",value:"20"},{id:Math.random(),name:"整组充电电压上限阈值(V)",value:"20"},{id:Math.random(),name:"整组放电电压下限阈值(V)",value:"20"},{id:Math.random(),name:"充电电流上限阈值系数",value:"20"},{id:Math.random(),name:"放电电流上限阈值系数",value:"20"},{id:Math.random(),name:"充电温度上限阈值(℃)",value:"20"},{id:Math.random(),name:"充电温度下限阈值(℃)",value:"20"},{id:Math.random(),name:"放电温度上限阈值(℃)",value:"20"},{id:Math.random(),name:"放电温度下限阈值(℃)",value:"20"},{id:Math.random(),name:"补水超限天数",value:"20"},{id:Math.random(),name:"充电容量上限阈值系数",value:"20"},{id:Math.random(),name:"充电容量下限阈值系数",value:"20"}]}},computed:{options:function(){return{scrollbar:!1,click:!0}}},components:{topHeader:i["a"]},mounted:function(){},methods:{goBack:function(){this.$router.push({name:"Monitor"})},selectByModel:function(){this.activeByModel=!0},selectByCompany:function(){this.activeByModel=!1},goBackToHome:function(){},selectBatteryCode:function(){this.picker||(this.picker=this.$createPicker({title:"电池型号",data:[n],onSelect:this.selectHandle,onCancel:this.cancelHandle})),this.picker.show()}}},l=r,c=(a("1b73"),a("048f")),d=Object(c["a"])(l,s,o,!1,null,"095f086e",null);d.options.__file="threshold.vue";e["default"]=d.exports},4752:function(t,e,a){},"96bc":function(t,e,a){},b7e8:function(t,e,a){},c4be:function(t,e,a){"use strict";var s=a("b7e8"),o=a.n(s);o.a},f392:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"mint-header",class:{"is-fixed":t.fixed}},[a("div",{staticClass:"header-button is-left"},[t._t("left")],2),a("div",{staticClass:"header-title"},[t._t("mainTab")],2),a("div",{staticClass:"header-button is-right"},[t._t("right")],2)])},o=[],i={name:"top-header",props:{fixed:Boolean,title:String}},n=i,r=(a("0be3"),a("048f")),l=Object(r["a"])(n,s,o,!1,null,"27adf9d8",null);l.options.__file="header.vue";e["a"]=l.exports}}]);
//# sourceMappingURL=MonitorThreshold.f3ae48da.js.map