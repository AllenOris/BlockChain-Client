(function(e){function t(t){for(var r,l,i=t[0],o=t[1],c=t[2],m=0,d=[];m<i.length;m++)l=i[m],n[l]&&d.push(n[l][0]),n[l]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(r=!1)}r&&(s.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},n={app:0},s=[];function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("27fb"),n=a.n(r);n.a},"0358":function(e,t,a){"use strict";var r=a("c9c9"),n=a.n(r);n.a},"0769":function(e,t,a){},"0857":function(e,t,a){},"1a59":function(e,t,a){},"27fb":function(e,t,a){},"29b3":function(e,t,a){"use strict";var r=a("324c"),n=a.n(r);n.a},3195:function(e,t,a){"use strict";var r=a("65de"),n=a.n(r);n.a},"324c":function(e,t,a){},3528:function(e,t,a){},4178:function(e,t,a){},"463f":function(e,t,a){e.exports=a.p+"assets/img/404.6b8ae1d0.gif"},"547d":function(e,t,a){"use strict";var r=a("6105"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("7f7f"),a("cadf"),a("551c"),a("f751"),a("097d");var r=a("a026"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],l=(a("4f37"),a("ac6a"),a("456d"),a("7618")),i=a("04e1"),o=a.n(i),c={name:"app",data:function(){return{isRouterAlive:!0}},mounted:function(){},created:function(){if(localStorage.eleToken){var e=o()(localStorage.eleToken);this.$store.dispatch("setIsAutnenticated",!this.isEmpty(e)),this.$store.dispatch("setUser",e)}},provide:function(){return{reload:this.reload}},methods:{isEmpty:function(e){return void 0===e||null===e||"object"===Object(l["a"])(e)&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},reload:function(){this.isRouterAlive=!1,this.$nextTick(function(){this.isRouterAlive=!0})}}},u=c,m=(a("034f"),a("2877")),d=Object(m["a"])(u,n,s,!1,null,null,null),f=d.exports,p=a("8c4f"),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"index"},[a("HeadNav"),a("div",{staticClass:"rightContainer"},[a("router-view")],1)],1)},b=[],h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"header-nav"},[a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[a("el-menu-item",{attrs:{index:"0"}},[a("span",{staticClass:"title"},[e._v("区块链Demo")])]),a("el-menu-item",{staticStyle:{float:"left"},attrs:{index:"1"}},[e._v(e._s(e.Head))]),a("el-menu-item",{staticStyle:{float:"right"},attrs:{index:"3"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-user-solid"},on:{click:e.logout}},[e._v("退出登陆")])],1)],1)],1),a("div",[a("el-row",{staticClass:"menu_page"},[a("el-col",[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{mode:"vertical","background-color":"#324057","text-color":"#fff","active-text-color":"#409eff"}},[0===e.userType?a("div",e._l(e.leftBarMenu,function(t){return a("router-link",{attrs:{to:t.link}},[a("el-menu-item",{attrs:{index:"index"}},[a("i",{class:t.icon}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))])])],1)}),1):1===e.userType?a("div",e._l(e.leftBarMenu2,function(t){return a("router-link",{attrs:{to:t.link}},[a("el-menu-item",{attrs:{index:"index"}},[a("i",{class:t.icon}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))])])],1)}),1):2===e.userType?a("div",e._l(e.leftBarMenu3,function(t){return a("router-link",{attrs:{to:t.link}},[a("el-menu-item",{attrs:{index:"index"}},[a("i",{class:t.icon}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))])])],1)}),1):e._e()])],1)],1)],1)])},v=[],y={name:"head-nav",data:function(){return{Head:"",activeIndex:"1",permission:2,userType:0,leftBarMenu:[{name:"我的借贷平台",link:"my-platform",icon:"el-icon-time"},{name:"我的个人信息",link:"my-info",icon:"el-icon-suitcase"},{name:"信息被查询记录",link:"my-queried",icon:"el-icon-document"}],leftBarMenu2:[{name:"我的客户",link:"my-client",icon:"el-icon-time"},{name:"给我注资的商户",link:"my-merchant",icon:"el-icon-suitcase"}],leftBarMenu3:[{name:"我注资的平台",link:"my-own-platform",icon:"el-icon-suitcase"}]}},created:function(){this.userType=1*localStorage.getItem("userType"),this.Head=0===this.userType?"借贷方":1===this.userType?"平台方":"商户方"},methods:{handleSelect:function(e,t){},logout:function(){localStorage.setItem("eleToken",""),this.$message({message:"退出成功",type:"success"}),this.$router.push("/login")}}},_=y,S=(a("3195"),Object(m["a"])(_,h,v,!1,null,"82500ade",null)),w=S.exports,x={name:"index",components:{HeadNav:w},created:function(){}},k=x,D=(a("547d"),Object(m["a"])(k,g,b,!1,null,"7645e11c",null)),T=D.exports,$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},I=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"nofind"},[r("img",{attrs:{src:a("463f"),alt:""}})])}],C=(a("a321"),{}),E=Object(m["a"])(C,$,I,!1,null,"245c3bc2",null),P=E.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("section",{staticClass:"form_container"},[e._m(0),a("el-form",{ref:"loginForm",staticClass:"loginForm",attrs:{model:e.loginUser,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"用户ID",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.loginUser.name,callback:function(t){e.$set(e.loginUser,"name",t)},expression:"loginUser.name"}})],1),a("el-form-item",{attrs:{label:"密码",prop:"password"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm("loginForm")}}},[a("el-input",{attrs:{placeholder:"请输入密码",type:"password"},model:{value:e.loginUser.password,callback:function(t){e.$set(e.loginUser,"password",t)},expression:"loginUser.password"}})],1),a("el-form-item",{attrs:{label:"用户类型",prop:"userType"}},[a("el-select",{attrs:{placeholder:"借贷方"},model:{value:e.loginUser.userType,callback:function(t){e.$set(e.loginUser,"userType",t)},expression:"loginUser.userType"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-form-item",[a("el-button",{staticClass:"submit_btn",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("loginForm")}}},[e._v("登 录")])],1)],1)],1)])},U=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"manage_tip"},[a("span",{staticClass:"title"},[e._v("区块链借贷系统")])])}],M=(a("4328"),{name:"login",data:function(){return{loginUser:{name:"",password:"",userType:"0"},rules:{name:[{required:!0,message:"用户名格式不正确",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:4,max:30,message:"长度在 4 到 30 个字符",trigger:"blur"}],userType:[{required:!0,message:"不能为空",trigger:"blur"}]},options:[{value:"0",label:"借贷方"},{value:"1",label:"平台方"},{value:"2",label:"资金方"}],beginTime:"",endTime:""}},created:function(){var e=1*localStorage.needLogin;console.log(e),1===e&&this.$message.error("请先登录"),this.$notify({title:"测试账户1(借贷方)",dangerouslyUseHTMLString:!0,message:"ID : 1042120<br>密码 : u0IPNY",duration:15e3,type:"warning"}),this.$notify({title:"测试账户2(平台方)",dangerouslyUseHTMLString:!0,message:"ID : 1105965<br>密码 : dLO21D",duration:15e3,type:"success",offset:100}),this.$notify({title:"测试账户3(资金方)",dangerouslyUseHTMLString:!0,message:"ID : 1052596<br>密码 : hGc318",duration:15e3,type:"info",offset:200})},methods:{submitForm:function(e){var t=this;localStorage.removeItem("eleToken");var a=this.loginUser.name,r=this.loginUser.password;console.log(this.loginUser,a,r),this.beginTime=+new Date,this.$refs[e].validate(function(e){if(!e)return t.$message.error("error submit!!"),!1;var a={id:t.loginUser.name,password:t.loginUser.password};console.log(t.loginUser),localStorage.setItem("userType",t.loginUser.userType),1*t.loginUser.userType===0?t.$axios.post("/borrowers/login",a).then(function(e){if(1*e.data.code===0){t.endTime=+new Date;var a=e.data.data["access-token"];console.log("res:",e.data,a),localStorage.setItem("eleToken",a),console.log("storage:",localStorage),t.$message({message:"登陆成功",type:"success"}),t.$router.push("/my-platform")}else t.$message.error(e.data.msg)},function(e){t.$message.error(e.message)}):1*t.loginUser.userType===1?t.$axios.post("/platforms/login",a).then(function(e){if(1*e.data.code===0){var a=e.data.data["access-token"];console.log("res:",e.data,a),localStorage.setItem("eleToken",a),console.log("storage:",localStorage),t.$message({message:"登陆成功",type:"success"}),t.$router.push("/my-client")}else t.$message.error(e.data.msg)},function(e){t.$message.error(e.message)}):t.$axios.post("/merchants/login",a).then(function(e){if(1*e.data.code===0){var a=e.data.data["access-token"];console.log("res:",e.data,a),localStorage.setItem("eleToken",a),console.log("storage:",localStorage),t.$message({message:"登陆成功",type:"success"}),t.$router.push("/my-own-platform")}else t.$message.error(e.data.msg)},function(e){t.$message.error(e.message)})},function(e){return t.$message.error(e),!1})},isEmpty:function(e){return void 0===e||null===e||"object"===Object(l["a"])(e)&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},refresh:function(){this.getProfile()}}}),j=M,A=(a("ed29"),Object(m["a"])(j,O,U,!1,null,"3b4345b0",null)),V=A.exports,q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},L=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[e._v("IBM区块链借贷系统")]),a("p",{staticClass:"lead"},[e._v(" Demo ")])])])}],N=(a("0358"),{}),R=Object(m["a"])(N,q,L,!1,null,"32bd4c80",null),F=R.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fillcontain"},[a("div",{staticStyle:{margin:"20px"}},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("平台方")]),a("el-breadcrumb-item",[e._v("我的客户")])],1)],1),a("div",{staticStyle:{margin:"20px 0"}}),a("el-card",{staticStyle:{margin:"20px",width:"100%"}},[a("el-button",{on:{click:e.refresh}},[e._v("刷新")]),a("div",{staticStyle:{margin:"20px 0"}}),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"id",label:"客户ID",sortable:""}}),a("el-table-column",{attrs:{prop:"name",label:"客户姓名",sortable:""}}),a("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleCheck(t.row)}}},[e._v("查看详情")])]}}])})],1)],1),a("el-dialog",{attrs:{title:"警告",visible:e.dialogVisible1,width:"30%"},on:{"update:visible":function(t){e.dialogVisible1=t}}},[a("p",{staticClass:"big"},[e._v("您将要查询"+e._s(e.wantID)+"用户的个人隐私信息,您的行为将会计入区块链中"),a("br"),e._v("是否继续?")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible1=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.handleClickDialog1}},[e._v("继 续")])],1)]),a("el-dialog",{attrs:{title:"查询目的",visible:e.dialogVisible2},on:{"update:visible":function(t){e.dialogVisible2=t}}},[a("el-form",{attrs:{model:e.form}},[a("el-form-item",{attrs:{label:"请填写查询目的",rules:e.rules,"label-width":"30%"}},[a("el-autocomplete",{staticClass:"inline-input",staticStyle:{width:"80%"},attrs:{type:"textarea","fetch-suggestions":e.querySearch,autosize:{minRows:3,maxRows:30},placeholder:"",maxlength:100,"show-word-limit":"",clearable:""},on:{select:e.handleSelect},model:{value:e.form.aim,callback:function(t){e.$set(e.form,"aim",t)},expression:"form.aim"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible2=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.handleClick}},[e._v("查 询")])],1)],1)],1)},B=[],z=(a("57e7"),a("d25f"),{name:"MyClient",data:function(){return{dialogVisible1:!1,dialogVisible2:!1,tableData:[],wantID:"",form:{aim:""},rules:{aim:[{required:!0,message:"不能为空",trigger:"blur"}]},models:[],sql:"",row:[]}},created:function(){this.getProfile()},methods:{handleCheck:function(e){this.wantID=e.id,this.dialogVisible1=!0},handleClick:function(){this.$message("查询中"),this.dialogVisible2=!1,localStorage.setItem("wantID",this.wantID),localStorage.setItem("aim",this.form.aim),this.$router.push("/query")},handleClickDialog1:function(){this.dialogVisible1=!1,this.dialogVisible2=!0},getProfile:function(){var e=this,t={};this.$axios.post("/platforms/search-borrower",t,{params:{access_token:localStorage.getItem("eleToken")}}).then(function(t){if(1*t.data.code===0){e.$message({message:"查询成功",type:"success"}),console.log(t.data),e.tableData=[];for(var a=0;a<t.data.data.length;++a)e.tableData.push({id:t.data.data[a].id,name:t.data.data[a].name})}else e.$message.error(t.data.msg)},function(t){e.$message.error(t.message)})},querySearch:function(e,t){var a=this.models,r=e?a.filter(this.createFilter(e)):a;t(r)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},loadAll:function(){return[{value:"信用评估"},{value:"贷前认证"},{value:"贷后清算"}]},handleSelect:function(e){},refresh:function(){this.getProfile()}},mounted:function(){this.models=this.loadAll()}}),Q=z,J=(a("cc63"),Object(m["a"])(Q,H,B,!1,null,"625526c8",null)),G=J.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fillcontain"},[a("div",{staticStyle:{margin:"20px"}},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("借贷方")]),a("el-breadcrumb-item",[e._v("我的个人信息")])],1)],1),a("div",{staticStyle:{margin:"20px 0"}}),a("el-card",{staticStyle:{margin:"20px",width:"100%"}},[a("el-button",{on:{click:e.refresh}},[e._v("刷新")]),a("div",{staticStyle:{margin:"20px 0"}}),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"name",label:"Name",sortable:""}}),a("el-table-column",{attrs:{prop:"value",label:"Value",sortable:""}})],1)],1)],1)},K=[],W={name:"MyInfo",data:function(){return{tableData:[]}},created:function(){this.getProfile()},methods:{getProfile:function(){var e=this,t={};this.$axios.post("/borrowers/search-specific",t,{params:{access_token:localStorage.getItem("eleToken")}}).then(function(t){if(console.log(t.data),1*t.data.code===0){e.tableData.value=[],e.$message({message:"查询成功",type:"success"});var a=t.data.data;e.tableData.push({name:"系统编号",value:a.id}),e.tableData.push({name:"姓名",value:a.name}),e.tableData.push({name:"身份证号",value:a.ID_card}),e.tableData.push({name:"性别",value:"male"===a.gender?"男":"女"}),e.tableData.push({name:"出生日期",value:a.birth_date}),e.tableData.push({name:"地址",value:a.address}),e.tableData.push({name:"手机号",value:a.phone}),e.tableData.push({name:"银行卡号",value:a.card_number}),console.log(e.tableData)}else e.$message.error(t.data.msg)},function(t){e.$message.error(t.message)})},refresh:function(){this.getProfile()}}},X=W,Z=(a("c496"),Object(m["a"])(X,Y,K,!1,null,"20dd4ced",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fillcontain"},[a("div",{staticStyle:{margin:"20px"}},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("资金方")]),a("el-breadcrumb-item",[e._v("我注资的平台")])],1)],1),a("div",{staticStyle:{margin:"20px 0"}}),a("el-card",{staticStyle:{margin:"20px",width:"100%"}},[a("el-button",{on:{click:e.refresh}},[e._v("刷新")]),a("div",{staticStyle:{margin:"20px 0"}}),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"name",label:"平台ID",sortable:""}}),a("el-table-column",{attrs:{prop:"name",label:"名称",sortable:""}}),a("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleCheck(t.row)}}},[e._v("查看平台用户")])]}}])})],1)],1)],1)},ae=[],re={name:"MyOwnPlatform",data:function(){return{tableData:[]}},created:function(){this.getProfile()},methods:{handleCheck:function(e){localStorage.setItem("wantPlatform",e.id),this.$router.push("/my-own-platform/client")},getProfile:function(){var e=this,t={};this.$axios.post("/merchants/search-platform",t,{params:{access_token:localStorage.getItem("eleToken")}}).then(function(t){if(1*t.data.code===0){e.tableData=[],e.$message({message:"查询成功",type:"success"}),console.log(t.data);for(var a=0;a<t.data.data.length;++a)e.tableData.push({id:t.data.data[a].id,name:t.data.data[a].name})}else e.$message.error(t.data.msg)},function(t){e.$message.error(t.message)})},refresh:function(){this.getProfile()}}},ne=re,se=(a("29b3"),Object(m["a"])(ne,te,ae,!1,null,"5cf17eb0",null)),le=se.exports,ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fillcontain"},[a("div",{staticStyle:{margin:"20px"}},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[e._v("首页")]),a("el-breadcrumb-item",{attrs:{to:{path:"/my-own-platform"}}},[e._v("资金方")]),a("el-breadcrumb-item",{attrs:{to:{path:"/my-own-platform"}}},[e._v("我注资的平台")]),a("el-breadcrumb-item",[e._v("平台客户")])],1)],1),a("div",{staticStyle:{margin:"20px 0"}}),a("el-card",{staticStyle:{margin:"20px",width:"100%"}},[a("el-button",{on:{click:e.refresh}},[e._v("刷新")]),a("div",{staticStyle:{margin:"20px 0"}}),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"id",label:"客户ID",sortable:""}}),a("el-table-column",{attrs:{prop:"name",label:"客户姓名",sortable:""}}),a("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleCheck(t.row)}}},[e._v("查看详情")])]}}])})],1)],1),a("el-dialog",{attrs:{title:"警告",visible:e.dialogVisible1,width:"30%"},on:{"update:visible":function(t){e.dialogVisible1=t}}},[a("p",{staticClass:"big"},[e._v("您将要查询"+e._s(e.wantID)+"用户的个人隐私信息,您的行为将会计入区块链中"),a("br"),e._v("是否继续?")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible1=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.handleClickDialog1}},[e._v("继 续")])],1)]),a("el-dialog",{attrs:{title:"查询目的",visible:e.dialogVisible2},on:{"update:visible":function(t){e.dialogVisible2=t}}},[a("el-form",{attrs:{model:e.form}},[a("el-form-item",{attrs:{label:"请填写查询目的",rules:e.rules,"label-width":"30%"}},[a("el-autocomplete",{staticClass:"inline-input",staticStyle:{width:"80%"},attrs:{type:"textarea","fetch-suggestions":e.querySearch,autosize:{minRows:3,maxRows:30},placeholder:"",maxlength:100,"show-word-limit":"",clearable:""},on:{select:e.handleSelect},model:{value:e.form.aim,callback:function(t){e.$set(e.form,"aim",t)},expression:"form.aim"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible2=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.handleClick}},[e._v("查 询")])],1)],1)],1)},oe=[],ce={name:"MyOwnClient",data:function(){return{dialogVisible1:!1,dialogVisible2:!1,tableData:[],platform_id:"",wantID:"",form:{aim:""},rules:{aim:[{required:!0,message:"不能为空",trigger:"blur"}]},models:[],sql:"",row:[]}},created:function(){this.platform_id=localStorage.getItem("wantPlatform"),this.getProfile()},methods:{handleCheck:function(e){this.wantID=e.id,this.dialogVisible1=!0},handleClick:function(){this.$message("查询中"),this.dialogVisible2=!1,localStorage.setItem("wantID",this.wantID),localStorage.setItem("aim",this.form.aim),this.$router.push("/query")},handleClickDialog1:function(){this.dialogVisible1=!1,this.dialogVisible2=!0},getProfile:function(){var e=this,t={platform_id:this.platform_id};this.$axios.post("/merchants/search-borrower",t,{params:{access_token:localStorage.getItem("eleToken")}}).then(function(t){if(1*t.data.code===0){e.$message({message:"查询成功",type:"success"}),console.log(t.data),e.tableData=[];for(var a=0;a<t.data.data.length;++a)e.tableData.push({id:t.data.data[a].id,name:t.data.data[a].name})}else e.$message.error(t.data.msg)},function(t){e.$message.error(t.message)})},querySearch:function(e,t){var a=this.models,r=e?a.filter(this.createFilter(e)):a;t(r)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},loadAll:function(){return[{value:"信用评估"},{value:"贷前认证"},{value:"贷后清算"}]},handleSelect:function(e){},refresh:function(){this.getProfile()}},mounted:function(){this.models=this.loadAll()}},ue=ce,me=(a("8ef1"),Object(m["a"])(ue,ie,oe,!1,null,"2febd35e",null)),de=me.exports,fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fillcontain"},[a("div",{staticStyle:{margin:"20px"}},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("借贷方")]),a("el-breadcrumb-item",[e._v("我注册的平台")])],1)],1),a("div",{staticStyle:{margin:"20px 0"}}),a("el-card",{staticStyle:{margin:"20px",width:"100%"}},[a("el-button",{on:{click:e.refresh}},[e._v("刷新")]),a("div",{staticStyle:{margin:"20px 0"}}),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"name",label:"平台ID",sortable:""}}),a("el-table-column",{attrs:{prop:"name",label:"名称",sortable:""}})],1)],1)],1)},pe=[],ge={name:"MyPlatform",data:function(){return{tableData:[]}},created:function(){this.getProfile()},methods:{getProfile:function(){var e=this,t={};this.$axios.post("/borrowers/search-platform",t,{params:{access_token:localStorage.getItem("eleToken")}}).then(function(t){if(console.log("data:",t.data),1*t.data.code===0){e.tableData=[],e.$message({message:"查询成功",type:"success"});for(var a=0;a<t.data.data.length;++a)e.tableData.push({id:t.data.data[a].id,name:t.data.data[a].name})}else e.$message.error(t.data.msg)},function(t){e.$message.error(t.message)})},refresh:function(){this.getProfile()}}},be=ge,he=(a("9d8b"),Object(m["a"])(be,fe,pe,!1,null,"23aa593f",null)),ve=he.exports,ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fillcontain"},[a("div",{staticStyle:{margin:"20px"}},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("借贷方")]),a("el-breadcrumb-item",[e._v("我被查询记录(区块链)")])],1)],1),a("div",{staticStyle:{margin:"20px 0"}}),a("el-card",{staticStyle:{margin:"20px",width:"100%"}},[a("el-button",{on:{click:e.refresh}},[e._v("刷新")]),a("div",{staticStyle:{margin:"20px 0"}}),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"time",label:"查询时间",sortable:""}}),a("el-table-column",{attrs:{prop:"id",label:"查询者ID",sortable:""}}),a("el-table-column",{attrs:{prop:"name",label:"查询名称",sortable:""}}),a("el-table-column",{attrs:{prop:"type",label:"查询者类型",sortable:""}}),a("el-table-column",{attrs:{prop:"aim",label:"查询者目的",sortable:""}})],1)],1)],1)},_e=[],Se={name:"MyQueried",data:function(){return{tableData:[],beginTime:"",endTime:""}},created:function(){this.getProfile()},methods:{getProfile:function(){var e=this,t={};this.beginTime=+new Date,this.$axios.post("/borrowers/search-query",t,{params:{access_token:localStorage.getItem("eleToken")}}).then(function(t){if(1*t.data.code===0){e.endTime=+new Date,e.$notify({title:"区块链时间",dangerouslyUseHTMLString:!0,message:(e.endTime-e.beginTime)/1e3+"s",duration:15e3,type:"info",offset:400}),e.$message({message:"查询成功",type:"success"}),console.log(t.data),e.tableData=[];for(var a=0;a<t.data.data.length;++a)e.tableData.push({id:t.data.data[a].id,name:t.data.data[a].name,time:t.data.data[a].time,type:t.data.data[a].category?"平台方":"资金方",aim:t.data.data[a].aim})}else e.$message.error(t.data.msg)},function(t){e.$message.error(t.message)})},refresh:function(){this.getProfile()}}},we=Se,xe=(a("7b91"),Object(m["a"])(we,ye,_e,!1,null,"08c0cc93",null)),ke=xe.exports,De=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fillcontain"},[a("div",{staticStyle:{margin:"20px"}},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v(e._s(e.userTypeName))]),a("el-breadcrumb-item",[e._v("查询信息")])],1)],1),a("div",{staticStyle:{margin:"20px 0"}}),a("el-card",{staticStyle:{margin:"20px",width:"100%"}},[a("el-button",{on:{click:e.refresh}},[e._v("刷新")]),a("div",{staticStyle:{margin:"20px 0"}}),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"name",label:"Name",sortable:""}}),a("el-table-column",{attrs:{prop:"value",label:"Value",sortable:""}})],1)],1)],1)},Te=[],$e={name:"Query",data:function(){return{tableData:[],userTypeName:"",beginTime:"",endTime:""}},created:function(){this.getProfile()},methods:{getProfile:function(){var e=this,t=1*localStorage.getItem("userType");this.userTypeName=0===this.userType?"借贷方":1===this.userType?"平台方":"资金方";var a=localStorage.getItem("wantID"),r=localStorage.getItem("aim"),n={id:a,aim:r,platform_id:localStorage.getItem("wantPlatform")};console.log(n),this.beginTime=+new Date,1===t?this.$axios.post("/platforms/search-specific",n,{params:{access_token:localStorage.getItem("eleToken")}}).then(function(t){if(1*t.data.code===0){e.endTime=+new Date,e.$notify({title:"区块链时间",dangerouslyUseHTMLString:!0,message:(e.endTime-e.beginTime)/1e3+"s",duration:15e3,type:"info",offset:400}),e.tableData=[],e.$message({message:"查询成功",type:"success"});var a=t.data.data;e.tableData.push({name:"系统编号",value:a.id}),e.tableData.push({name:"姓名",value:a.name}),e.tableData.push({name:"身份证号",value:a.ID_card}),e.tableData.push({name:"性别",value:"male"===a.gender?"男":"女"}),e.tableData.push({name:"出生日期",value:a.birth_date}),e.tableData.push({name:"地址",value:a.address}),e.tableData.push({name:"手机号",value:a.phone}),e.tableData.push({name:"银行卡号",value:a.card_number}),e.$message("查询成功,您的查询行为已被记入区块链网络")}else e.$message.error(t.data.msg)},function(t){e.$message.error(t.message)}):2===t&&this.$axios.post("/merchants/search-specific",n,{params:{access_token:localStorage.getItem("eleToken")}}).then(function(t){if(console.log(t),1*t.data.code===0){e.endTime=+new Date,e.$notify({title:"区块链查询时间",dangerouslyUseHTMLString:!0,message:(e.endTime-e.beginTime)/1e3+"s",duration:15e3,type:"info",offset:400}),e.tableData=[],e.$message({message:"查询成功",type:"success"});var a=t.data.data;e.tableData.push({name:"系统编号",value:a.id}),e.tableData.push({name:"姓名",value:a.name}),e.tableData.push({name:"身份证号",value:a.ID_card}),e.tableData.push({name:"性别",value:"male"===a.gender?"男":"女"}),e.tableData.push({name:"出生日期",value:a.birth_date}),e.tableData.push({name:"地址",value:a.address}),e.tableData.push({name:"手机号",value:a.phone}),e.tableData.push({name:"银行卡号",value:a.card_number}),e.$message("查询成功,您的查询行为已被记入区块链网络")}else e.$message.error(t.data.msg)},function(t){e.$message.error(t.message)})},refresh:function(){this.getProfile()}}},Ie=$e,Ce=(a("ddd5"),Object(m["a"])(Ie,De,Te,!1,null,"68cdf1ea",null)),Ee=Ce.exports,Pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fillcontain"},[a("div",{staticStyle:{margin:"20px"}},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("平台方")]),a("el-breadcrumb-item",[e._v("给我注资的资金方")])],1)],1),a("div",{staticStyle:{margin:"20px 0"}}),a("el-card",{staticStyle:{margin:"20px",width:"100%"}},[a("el-button",{on:{click:e.refresh}},[e._v("刷新")]),a("div",{staticStyle:{margin:"20px 0"}}),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"name",label:"资金方ID",sortable:""}}),a("el-table-column",{attrs:{prop:"name",label:"名称",sortable:""}})],1)],1)],1)},Oe=[],Ue={name:"MyMerchant",data:function(){return{tableData:[]}},created:function(){this.getProfile()},methods:{getProfile:function(){var e=this,t={};this.$axios.post("/platforms/search-merchant",t,{params:{access_token:localStorage.getItem("eleToken")}}).then(function(t){if(1*t.data.code===0){e.$message({message:"查询成功",type:"success"}),console.log(t.data),e.tableData=[];for(var a=0;a<t.data.data.length;++a)e.tableData.push({id:t.data.data[a].id,name:t.data.data[a].name})}else e.$message.error(t.data.msg)},function(t){e.$message.error(t.message)})},refresh:function(){this.getProfile()}}},Me=Ue,je=(a("b5a6"),Object(m["a"])(Me,Pe,Oe,!1,null,"674a6b45",null)),Ae=je.exports,Ve=a("5c96"),qe=a.n(Ve);r["default"].use(qe.a),r["default"].use(p["a"]);var Le=new p["a"]({mode:"history",base:"/",routes:[{path:"*",name:"/404",component:P},{path:"/",redirect:"/login"},{path:"/login",name:"login",component:V},{path:"/index",name:"index",component:T,children:[{path:"",component:F},{path:"/home",name:"home",component:F},{path:"/my-client",name:"MyClient",component:G},{path:"/my-info",name:"MyInfo",component:ee},{path:"/my-own-platform",name:"MyOwnPlatform",component:le},{path:"/my-platform",name:"MyPlatform",component:ve},{path:"/my-queried",name:"MyQueried",component:ke},{path:"/query",name:"Query",component:Ee},{path:"/my-merchant",name:"MyMerchant",component:Ae},{path:"/my-own-platform/client",name:"MyOwnClient",component:de}]}]});Le.beforeEach(function(e,t,a){var r=!!localStorage.eleToken;1*localStorage.getItem("im")===1?localStorage.setItem("im","0"):localStorage.setItem("needLogin","0"),"/login"==e.path||"/register"==e.path?a():r?a():(localStorage.setItem("needLogin","1"),localStorage.setItem("im","1"),a("/login"))});var Ne,Re=Le,Fe=a("bd86"),He=a("2f62");r["default"].use(He["a"]);var Be,ze={SET_IS_AUTNENTIATED:"SET_IS_AUTNENTIATED",SET_USER:"SET_USER"},Qe={isAutnenticated:!1,user:{}},Je={isAutnenticated:function(e){return e.isAutnenticated},user:function(e){return e.user}},Ge=(Ne={},Object(Fe["a"])(Ne,ze.SET_IS_AUTNENTIATED,function(e,t){e.isAutnenticated=t||!1}),Object(Fe["a"])(Ne,ze.SET_USER,function(e,t){e.user=t||{}}),Ne),Ye={setIsAutnenticated:function(e,t){var a=e.commit;a(ze.SET_IS_AUTNENTIATED,t)},setUser:function(e,t){var a=e.commit;a(ze.SET_USER,t)},clearCurrentState:function(e){var t=e.commit;t(ze.SET_IS_AUTNENTIATED,!1),t(ze.SET_USER,null)}},Ke=new He["a"].Store({state:Qe,getters:Je,mutations:Ge,actions:Ye}),We=(a("0fae"),a("bc3a")),Xe=a.n(We);function Ze(){Be=Ve["Loading"].service({lock:!0,text:"加载中...",background:"rgba(0, 0, 0, 0.7)"})}function et(){Be.close()}Xe.a.interceptors.request.use(function(e){return"blob"!==e.responseType&&Ze(),localStorage.eleToken&&(e.headers.Authorization=localStorage.eleToken),e},function(e){return Promise.reject(e)}),Xe.a.interceptors.response.use(function(e){return et(),e},function(e){et(),Ve["Message"].error(e.response.data);var t=e.response.status;return 401===t&&(Ve["Message"].error("token值无效，请重新登录"),localStorage.removeItem("eleToken"),Re.push("/login")),Promise.reject(e)}),Xe.a.defaults.baseURL="http://129.204.27.224/blockchain-backend/api/web",Xe.a.defaults.headers.post["Content-Type"]="application/form-data",Xe.a.defaults.withCredentials=!1,Xe.a.defaults.headers.post["Access-Control-Allow-Origin"]="http://loacalhost:8080";var tt=Xe.a;r["default"].use(p["a"]),r["default"].prototype.$axios=tt,r["default"].prototype.$http=tt,r["default"].prototype.$left=1,r["default"].prototype.download=function(e){var t=this,a=new FormData;a.append("fileID",e.fileID);var r=this.$notify({title:"消息",message:"正在拼命加载".concat(e.name,"中，请稍等..."),duration:0,offset:35});this.$axios({url:"/api/user/download",method:"POST",responseType:"blob",data:a}).then(function(t){r.close();var a=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a");n.href=a,n.setAttribute("download",e.name),document.body.appendChild(n),n.click()},function(e){t.$message.error("download fail")})},r["default"].config.productionTip=!1,new r["default"]({router:Re,store:Ke,render:function(e){return e(f)}}).$mount("#app")},6105:function(e,t,a){},"65de":function(e,t,a){},"7b91":function(e,t,a){"use strict";var r=a("1a59"),n=a.n(r);n.a},"8ef1":function(e,t,a){"use strict";var r=a("fc8c"),n=a.n(r);n.a},"9d8b":function(e,t,a){"use strict";var r=a("3528"),n=a.n(r);n.a},a321:function(e,t,a){"use strict";var r=a("4178"),n=a.n(r);n.a},a7be:function(e,t,a){},b5a6:function(e,t,a){"use strict";var r=a("d4e7"),n=a.n(r);n.a},c496:function(e,t,a){"use strict";var r=a("0857"),n=a.n(r);n.a},c70d:function(e,t,a){},c9c9:function(e,t,a){},cc63:function(e,t,a){"use strict";var r=a("a7be"),n=a.n(r);n.a},d4e7:function(e,t,a){},ddd5:function(e,t,a){"use strict";var r=a("c70d"),n=a.n(r);n.a},ed29:function(e,t,a){"use strict";var r=a("0769"),n=a.n(r);n.a},fc8c:function(e,t,a){}});
//# sourceMappingURL=app.0cc524bf.js.map