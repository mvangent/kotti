(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{480:function(t,l,e){"use strict";e.r(l);var n={name:"KtInputDoc",data:function(){return{v1:"Jony One O",v2:"",v3:"Jony Three O",v4:4,v5:"email@example.com",dialog:{enabled:!0,message:"Help Message",position:"right",html:""}}}},v=e(0),component=Object(v.a)(n,function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("section",[e("h1",[t._v("Inputs")]),t._v(" "),e("h2",[t._v("Label")]),t._v(" "),e("div",{staticClass:"element-example"},[e("KtInput",{attrs:{label:"Name",labelFor:"Name",placeholder:"Add your name"},model:{value:t.v1,callback:function(l){t.v1=l},expression:"v1"}}),t._v(" "),e("KtInput",{attrs:{placeholder:"Add your name"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("h2",[t._v("Icon")]),t._v(" "),e("div",{staticClass:"element-example"},[e("KtInput",{attrs:{placeholder:"Add your name",icon:"user"},model:{value:t.v3,callback:function(l){t.v3=l},expression:"v3"}}),t._v(" "),e("KtInput",{attrs:{iconPosition:"right",placeholder:"Add your name",icon:"user"},model:{value:t.v3,callback:function(l){t.v3=l},expression:"v3"}})],1),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("h2",[t._v("Icon Dialog")]),t._v(" "),e("div",{staticClass:"element-example"},[e("KtInput",{attrs:{placeholder:"Serach your name",icon:"circle_question",iconPosition:"right",dialog:"Available"},model:{value:t.v3,callback:function(l){t.v3=l},expression:"v3"}}),t._v(" "),e("KtInput",{attrs:{placeholder:"Serach your name",icon:"check",iconPosition:"right"},model:{value:t.v3,callback:function(l){t.v3=l},expression:"v3"}},[e("div",{attrs:{slot:"dialog"},slot:"dialog"},[e("h4",[t._v("Availabe")]),t._v(" "),e("span",[t._v("This user name is availabe")])])])],1),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("h2",[t._v("Addon Text")]),t._v(" "),e("div",{staticClass:"element-example"},[e("KtInput",{attrs:{label:"Name",placeholder:"Add your name",addonText:"User Name"},model:{value:t.v3,callback:function(l){t.v3=l},expression:"v3"}})],1),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("h2",[t._v("Type")]),t._v(" "),e("div",{staticClass:"element-example"},[e("KtInput",{attrs:{type:"number",label:"Number",step:"0.1",placeholder:"Add your name"},model:{value:t.v4,callback:function(l){t.v4=l},expression:"v4"}}),t._v(" "),e("KtInput",{attrs:{type:"email",label:"Email"},model:{value:t.v5,callback:function(l){t.v5=l},expression:"v5"}})],1),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),e("h2",[t._v("Disabled")]),t._v(" "),e("div",{staticClass:"element-example white"},[e("KtInput",{attrs:{label:"Disabled Input",placeholder:t.v5,disabled:""}})],1),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),e("h2",[t._v("Validate")]),t._v(" "),e("div",{staticClass:"element-example"},[e("KtInput",{attrs:{label:"Success Input",placeholder:t.v5,validate:"success",validateText:"Your user name is availabe"}}),t._v(" "),e("KtInput",{attrs:{label:"Error Input",placeholder:t.v5,validate:"error",validateText:"Your input is invalid"}}),t._v(" "),e("KtInput",{attrs:{label:"Warning Input",placeholder:t.v5,validate:"warning",validateText:"Your input is wrong"}})],1),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),e("h2",[t._v("Required")]),t._v(" "),e("div",{staticClass:"element-example"},[e("KtInput",{attrs:{placeholder:t.v5,label:"Required Input",required:""}})],1),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),e("h2",[t._v("Compact")]),t._v(" "),e("p",[t._v("In order to save vertical space on the page when many inputs need, and icon only input can not deliver clear information,\nyou can choose compact input style.")]),t._v(" "),t._m(17),t._v(" "),e("div",{staticClass:"element-example"},[e("KtInput",{attrs:{label:"Full Name",placeholder:"Your first name and last name",isCompact:""}}),t._v(" "),e("KtInput",{attrs:{label:"Address",isCompact:""}}),t._v(" "),e("KtInput",{attrs:{label:"Company",isCompact:""}})],1),t._v(" "),t._m(18),t._v(" "),t._m(19)])},[function(){var t=this.$createElement,l=this._self._c||t;return l("p",[l("code",[this._v("label")]),this._v(" props accept "),l("code",[this._v("String")]),this._v(" and show on the top of "),l("code",[this._v("input")]),this._v(".")])},function(){var t=this.$createElement,l=this._self._c||t;return l("p",[l("code",[this._v("labelFor")]),this._v(" define the "),l("code",[this._v("for")]),this._v(" attributes in "),l("code",[this._v("label")]),this._v(".")])},function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("pre",[e("code",{staticClass:"language-html"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"v1"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Name"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("labelFor")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Name"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Add your name"')]),t._v("/>")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Add your name"')]),t._v("/>")]),t._v("\n")])])},function(){var t=this.$createElement,l=this._self._c||t;return l("p",[l("code",[this._v("icon")]),this._v(" accepts any "),l("code",[this._v("String")]),this._v(" from yoco, the default location of icon is "),l("code",[this._v("left")]),this._v(",\nto change the location, set "),l("code",[this._v('iconPosition="right"')])])},function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("pre",[e("code",{staticClass:"language-html"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"v3"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Add your name"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("icon")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"user"')]),t._v("/>")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"v2"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Serach your name"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("iconPosition")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"right"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("icon")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"search"')]),t._v("/>")]),t._v("\n")])])},function(){var t=this.$createElement,l=this._self._c||t;return l("p",[this._v("If you want show addition information of the input field, "),l("code",[this._v("dialog")]),this._v(" accepts "),l("code",[this._v("String")]),this._v(" text or "),l("code",[this._v("dialog")]),this._v(" slot for HTML template.")])},function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("pre",[e("code",{staticClass:"language-html"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v("\n\t\t"),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"v3"')]),t._v("\n\t\t"),e("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Serach your name"')]),t._v("\n\t\t"),e("span",{staticClass:"hljs-attr"},[t._v("icon")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"circle_question"')]),t._v("\n\t\t"),e("span",{staticClass:"hljs-attr"},[t._v("iconPosition")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"right"')]),t._v("\n\t\t"),e("span",{staticClass:"hljs-attr"},[t._v("dialog")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Available"')]),t._v("\n\t\t/>")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v("\n\t"),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"v3"')]),t._v("\n\t"),e("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Serach your name"')]),t._v("\n\t"),e("span",{staticClass:"hljs-attr"},[t._v("icon")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"check"')]),t._v("\n\t"),e("span",{staticClass:"hljs-attr"},[t._v("iconPosition")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"right"')]),t._v("\n\t>")]),t._v("\n\t"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"dialog"')]),t._v(">")]),t._v("\n\t\t"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("h4")]),t._v(">")]),t._v("Availabe"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("h4")]),t._v(">")]),t._v("\n\t\t"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("span")]),t._v(">")]),t._v("This user name is availabe"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("span")]),t._v(">")]),t._v("\n\t"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(">")]),t._v("\n")])])},function(){var t=this.$createElement,l=this._self._c||t;return l("p",[this._v("When an value needs a fixed prefix or suffix,\nin order to make sure user doesn't put it in input field,\nuse an "),l("code",[this._v("addonText")]),this._v(" to indicate that system has already pre-input this value.")])},function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("pre",[e("code",{staticClass:"language-html"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"v3"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Name"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Add your name"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("addonText")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"User Name"')]),t._v("/>")]),t._v("\n")])])},function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("p",[t._v("For input field it accept types "),e("code",[t._v("Number")]),t._v(", "),e("code",[t._v("text")]),t._v(" and "),e("code",[t._v("email")]),t._v(".\nUsing "),e("code",[t._v("step")]),t._v(" to define the precision.\nIf you want to use "),e("code",[t._v("checkbox")]),t._v(", "),e("code",[t._v("radio")]),t._v(" type, using "),e("code",[t._v("KtCheckbox")]),t._v(" and "),e("code",[t._v("KtRadio")]),t._v(".")])},function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("pre",[e("code",{staticClass:"language-html"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"v4"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"number"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Number"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("step")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"0.1"')]),t._v("/>")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"v5"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"email"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Email"')]),t._v(" />")]),t._v("\n")])])},function(){var t=this.$createElement,l=this._self._c||t;return l("p",[this._v("Add "),l("code",[this._v("disabled")]),this._v(" to "),l("code",[this._v("KtInput")]),this._v(" to make input not editable.")])},function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("pre",[e("code",{staticClass:"language-html"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Disabled Input"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":placeholder")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"v5"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("disabled")]),t._v(" />")]),t._v("\n")])])},function(){var t=this.$createElement,l=this._self._c||t;return l("p",[l("code",[this._v("validate")]),this._v(" props accepts three validation: "),l("code",[this._v("success")]),this._v(", "),l("code",[this._v("error")]),this._v(", and "),l("code",[this._v("warning")])])},function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("pre",[e("code",{staticClass:"language-html"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Success Input"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":placeholder")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"v5"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("validate")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"success"')]),t._v(" />")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Error Input"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":placeholder")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"v5"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("validate")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"error"')]),t._v(" />")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Warning Input"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":placeholder")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"v5"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("validate")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"warning"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("validateText")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Your input is wrong"')]),t._v("/>")]),t._v("\n")])])},function(){var t=this.$createElement,l=this._self._c||t;return l("p",[l("code",[this._v("required")]),this._v(" marks a field as non-optional. Browsers will also refuse sending the form until the field is filled.")])},function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("pre",[e("code",{staticClass:"language-html"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"email@example.com"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Required Input"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("required")]),t._v("/>")]),t._v("\n")])])},function(){var t=this.$createElement,l=this._self._c||t;return l("p",[this._v("Note that "),l("strong",[l("code",[this._v("isCompact")]),this._v(" is incompatible with "),l("code",[this._v("addonText")])]),this._v(", and won’t be applied if both are passed.")])},function(){var t=this.$createElement,l=this._self._c||t;return l("p",[this._v("Using "),l("code",[this._v("isCompact")]),this._v(" to enable compact style.")])},function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("pre",[e("code",{staticClass:"language-html"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Full Name"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Your first name and last name"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("isCompact")]),t._v("/>")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Address"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("isCompact")]),t._v("/>")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtInput")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Company"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("isCompact")]),t._v("/>")]),t._v("\n")])])}],!1,null,null,null);l.default=component.exports}}]);