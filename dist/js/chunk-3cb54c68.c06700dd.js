(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cb54c68"],{"555f":function(e,t,a){"use strict";var c=a("7a23"),s=Object(c["L"])("data-v-8338cd0e");Object(c["u"])("data-v-8338cd0e");var r={class:"loader"},n=Object(c["i"])("svg",{id:"loader-1",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50",style:{"enable-background":"new 0 0 50 50"},"xml:space":"preserve"},[Object(c["i"])("path",{fill:"#8F7CFF",d:"M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"},[Object(c["i"])("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})])],-1);Object(c["s"])();var l=s((function(e,t,a,s,l,o){return Object(c["J"])((Object(c["r"])(),Object(c["e"])("div",r,[n],512)),[[c["G"],a.loader]])})),o={props:{loader:Boolean},date:function(){return{loader:this.props.loader}}};a("df6f");o.render=l,o.__scopeId="data-v-8338cd0e";t["a"]=o},d7bd:function(e,t,a){},dbb5:function(e,t,a){},ddbb:function(e,t,a){"use strict";a.r(t);var c=a("7a23"),s=Object(c["L"])("data-v-211451b2");Object(c["u"])("data-v-211451b2");var r={class:"box"},n=Object(c["i"])("div",{class:"box__header"},[Object(c["i"])("h2",{class:"box__title"},"Последние игры")],-1),l={class:"last-game"},o=Object(c["i"])("div",{class:"last-game__icon"},null,-1),i={class:"last-game__box"},d={class:"last-game__username"},b={class:"last-game__footer"},u={class:"last-game__desc last-game__desc--dot"},O={key:0,class:"last-game__desc last-game__desc--win"},j={key:1,class:"last-game__desc last-game__desc--lose"};Object(c["s"])();var m=s((function(e,t,a,s,m,_){var p=Object(c["A"])("loader");return Object(c["r"])(),Object(c["e"])("div",r,[Object(c["i"])(p,{loader:m.loader},null,8,["loader"]),n,Object(c["i"])("ul",l,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["y"])(e.lastOperation,(function(e){return Object(c["r"])(),Object(c["e"])("li",{key:e._id,class:"last-game__item"},[o,Object(c["i"])("div",i,[Object(c["i"])("h3",d,Object(c["C"])(_.getUsername(e.user_id)),1),Object(c["i"])("div",b,[Object(c["i"])("small",u,Object(c["C"])(e.title),1),e.result?(Object(c["r"])(),Object(c["e"])("small",O,"+"+Object(c["C"])(e.total),1)):(Object(c["r"])(),Object(c["e"])("small",j,"-"+Object(c["C"])(e.total),1))])])])})),128))])])})),_=a("2909"),p=a("5530"),f=(a("99af"),a("5502")),g=a("555f"),v={components:{Loader:g["a"]},data:function(){return{loader:!0}},computed:Object(p["a"])({},Object(f["c"])(["lastOperation"])),created:function(){this.getLastGames()},methods:{toggleLoader:function(){this.loader=!this.loader},getLastGames:function(){var e=this;this.$store.dispatch("getLastOperation").then((function(){e.toggleLoader()}))},getUsername:function(e){return Object.assign.apply(Object,[{}].concat(Object(_["a"])(e))).username}}};a("ec26");v.render=m,v.__scopeId="data-v-211451b2";t["default"]=v},df6f:function(e,t,a){"use strict";a("d7bd")},ec26:function(e,t,a){"use strict";a("dbb5")}}]);
//# sourceMappingURL=chunk-3cb54c68.c06700dd.js.map