(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MonitorBatteryDetail"],{"0be3":function(t,e,i){"use strict";var a=i("4752"),s=i.n(a);s.a},"3b29":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("top-header",{attrs:{fixed:""}},[i("div",{staticClass:"backIcon",attrs:{slot:"left"},on:{click:t.back},slot:"left"},[i("i",{staticClass:"backIcon iconfont icon-back1"})]),i("div",{staticClass:"searchWarper",attrs:{slot:"mainTab"},slot:"mainTab"},[t._v("电池详情")]),i("div",{staticClass:"CloseIcon",attrs:{slot:"right"},slot:"right"},[i("span",[t._v("编辑")])])]),i("div",{staticClass:"batteryItem"},[i("cube-scroll",{ref:"scroll",staticClass:"batteryList"},[i("ul",{staticClass:"detailWraper"},[i("li",[i("div",{staticClass:"tit"},[t._v("电池编号")]),i("div",{staticClass:"inputContent"},[i("cube-input",{attrs:{placeholder:"请输入电池编号"},model:{value:t.detailForm.batteryCode,callback:function(e){t.$set(t.detailForm,"batteryCode",e)},expression:"detailForm.batteryCode"}})],1)]),i("li",[i("div",{staticClass:"tit"},[t._v("额定电压")]),i("div",{staticClass:"inputContent"},[i("cube-input",{attrs:{placeholder:"请输入额定电压"},model:{value:t.detailForm.voltage,callback:function(e){t.$set(t.detailForm,"voltage",e)},expression:"detailForm.voltage"}})],1)]),i("li",[i("div",{staticClass:"tit"},[t._v("额定容量")]),i("div",{staticClass:"inputContent"},[i("cube-input",{attrs:{placeholder:"请输入额定容量"},model:{value:t.detailForm.capacity,callback:function(e){t.$set(t.detailForm,"capacity",e)},expression:"detailForm.capacity"}})],1)]),i("li",[i("div",{staticClass:"tit"},[t._v("生产企业")]),i("div",{staticClass:"inputContent"},[i("cube-select",{attrs:{title:"请选择生产企业",options:t.selectComponentOption.production},model:{value:t.detailForm.production,callback:function(e){t.$set(t.detailForm,"production",e)},expression:"detailForm.production"}})],1)]),i("li",[i("div",{staticClass:"tit"},[t._v("客户企业")]),i("div",{staticClass:"inputContent"},[i("cube-select",{attrs:{title:"请选择客户企业",options:t.selectComponentOption.customer},model:{value:t.detailForm.customer,callback:function(e){t.$set(t.detailForm,"customer",e)},expression:"detailForm.customer"}})],1)]),i("li",[i("div",{staticClass:"tit"},[t._v("电池型号")]),i("div",{staticClass:"inputContent"},[i("cube-select",{attrs:{title:"请选择电池型号",options:t.selectComponentOption.model},model:{value:t.detailForm.model,callback:function(e){t.$set(t.detailForm,"model",e)},expression:"detailForm.model"}})],1)]),i("li",[i("div",{staticClass:"tit"},[t._v("电池规格")]),i("div",{staticClass:"inputContent"},[i("cube-select",{attrs:{title:"请选择电池规格",options:t.selectComponentOption.specifications},model:{value:t.detailForm.specifications,callback:function(e){t.$set(t.detailForm,"specifications",e)},expression:"detailForm.specifications"}})],1)]),i("li",[i("div",{staticClass:"tit"},[t._v("单体型号")]),i("div",{staticClass:"inputContent"},[i("cube-select",{attrs:{title:"请选择单体型号",options:t.selectComponentOption.singleModel},model:{value:t.detailForm.singleModel,callback:function(e){t.$set(t.detailForm,"singleModel",e)},expression:"detailForm.singleModel"}})],1)]),i("li",[i("div",{staticClass:"tit"},[t._v("生产日期")]),i("div",{staticClass:"inputContent"},[i("cube-select",{attrs:{title:"请选择生产日期",options:t.selectComponentOption.productionDate},model:{value:t.detailForm.productionDate,callback:function(e){t.$set(t.detailForm,"productionDate",e)},expression:"detailForm.productionDate"}})],1)]),i("li",[i("div",{staticClass:"tit"},[t._v("出厂日期")]),i("div",{staticClass:"inputContent"},[i("cube-select",{attrs:{title:"请选择出厂日期",options:t.selectComponentOption.factoryDate},model:{value:t.detailForm.factoryDate,callback:function(e){t.$set(t.detailForm,"factoryDate",e)},expression:"detailForm.factoryDate"}})],1)]),i("li",[i("div",{staticClass:"tit"},[t._v("质保期")]),i("div",{staticClass:"inputContent"},[i("cube-select",{attrs:{title:"请选择质保期",options:t.selectComponentOption.warranty},model:{value:t.detailForm.warranty,callback:function(e){t.$set(t.detailForm,"warranty",e)},expression:"detailForm.warranty"}})],1)])])])],1)],1)},s=[],o=i("f392"),l={data:function(){return{detailForm:{},selectComponentOption:{}}},components:{topHeader:o["a"]},mounted:function(){},methods:{back:function(){this.$router.push({name:"MonitorBattery"})}}},n=l,c=(i("51c7"),i("048f")),r=Object(c["a"])(n,a,s,!1,null,"c48947c4",null);r.options.__file="batteryDetail.vue";e["default"]=r.exports},4752:function(t,e,i){},"51c7":function(t,e,i){"use strict";var a=i("af8d"),s=i.n(a);s.a},af8d:function(t,e,i){},f392:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"mint-header",class:{"is-fixed":t.fixed}},[i("div",{staticClass:"header-button is-left"},[t._t("left")],2),i("div",{staticClass:"header-title"},[t._t("mainTab")],2),i("div",{staticClass:"header-button is-right"},[t._t("right")],2)])},s=[],o={name:"top-header",props:{fixed:Boolean,title:String}},l=o,n=(i("0be3"),i("048f")),c=Object(n["a"])(l,a,s,!1,null,"27adf9d8",null);c.options.__file="header.vue";e["a"]=c.exports}}]);
//# sourceMappingURL=MonitorBatteryDetail.a0dcde84.js.map