(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40f206ca"],{"3d16":function(t,e,n){},6828:function(t,e,n){"use strict";n("3d16")},"9ff5":function(t,e,n){"use strict";n.r(e);var c=n("7a23"),r=Object(c["L"])("data-v-dfc25d92");Object(c["u"])("data-v-dfc25d92");var l=Object(c["i"])("button",{class:"btn"},"Создать меню",-1);Object(c["s"])();var u=r((function(t,e,n,r,u,o){return Object(c["r"])(),Object(c["e"])("form",{action:"",class:"form",onSubmit:e[3]||(e[3]=Object(c["K"])((function(){return o.createNewItem&&o.createNewItem.apply(o,arguments)}),["prevent"]))},[Object(c["J"])(Object(c["i"])("input",{type:"text",placeholder:"Введите название меню","onUpdate:modelValue":e[1]||(e[1]=function(t){return u.title=t}),class:"form-controll"},null,512),[[c["F"],u.title]]),Object(c["J"])(Object(c["i"])("input",{type:"text",placeholder:"Введите /url","onUpdate:modelValue":e[2]||(e[2]=function(t){return u.url=t}),class:"form-controll"},null,512),[[c["F"],u.url]]),l],32)})),o={data:function(){return{title:null,url:null}},methods:{createNewItem:function(){var t=this,e={title:this.title,url:this.url};this.$store.dispatch("createNewItem",e).then((function(){t.clearForm()}))},clearForm:function(){this.title="",this.url=""}}};n("6828");o.render=u,o.__scopeId="data-v-dfc25d92";e["default"]=o}}]);
//# sourceMappingURL=chunk-40f206ca.e477d0ff.js.map