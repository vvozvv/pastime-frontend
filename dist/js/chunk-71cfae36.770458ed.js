(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71cfae36"],{"150f":function(t,e,s){},"24b7":function(t,e,s){"use strict";s("b4e6")},"2fef":function(t,e,s){"use strict";s.r(e);var i=s("7a23"),a=Object(i["L"])("data-v-01827e4e");Object(i["u"])("data-v-01827e4e");var r={class:"auth"},c=Object(i["i"])("div",{class:"auth__ball"},null,-1),n={class:"auth__content"},o=Object(i["i"])("h1",{class:"auth__title"}," pastime.",-1),l={class:"auth__header"};Object(i["s"])();var u=a((function(t,e,s,a,u,d){var p=Object(i["A"])("login"),b=Object(i["A"])("register");return Object(i["r"])(),Object(i["e"])("div",r,[c,Object(i["i"])("div",n,[o,Object(i["i"])("div",l,[Object(i["i"])("button",{class:["auth__btn",{active:d.isActive("login")}],onClick:e[1]||(e[1]=Object(i["K"])((function(t){return d.setActive("login")}),["prevent"]))}," Авторизация ",2),Object(i["i"])("button",{class:["auth__btn",{active:d.isActive("register")}],onClick:e[2]||(e[2]=Object(i["K"])((function(t){return d.setActive("register")}),["prevent"]))}," Регистрация ",2)]),Object(i["i"])("div",{class:["auth__tab",{active:d.isActive("login")}]},[Object(i["i"])(p)],2),Object(i["i"])("div",{class:["auth__tab",{active:d.isActive("register")}]},[Object(i["i"])(b)],2)])])})),d=Object(i["L"])("data-v-5980f6f1");Object(i["u"])("data-v-5980f6f1");var p={class:"form__box"},b=Object(i["i"])("label",null,"Никнейм",-1),f={class:"form__box"},h=Object(i["i"])("label",null,"Пароль",-1),m=Object(i["i"])("button",{type:"submit",class:"btn btn--accent"},"Войти",-1);Object(i["s"])();var _=d((function(t,e,s,a,r,c){return Object(i["r"])(),Object(i["e"])("div",null,[Object(i["i"])("form",{class:"login form",onSubmit:e[3]||(e[3]=Object(i["K"])((function(){return c.login&&c.login.apply(c,arguments)}),["prevent"]))},[Object(i["i"])("div",p,[b,Object(i["J"])(Object(i["i"])("input",{required:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.username=t}),type:"text",placeholder:"Ваш никнейм",class:"form-controll"},null,512),[[i["F"],r.username]])]),Object(i["i"])("div",f,[h,Object(i["J"])(Object(i["i"])("input",{required:"","onUpdate:modelValue":e[2]||(e[2]=function(t){return r.password=t}),type:"password",placeholder:"Пароль",class:"form-controll"},null,512),[[i["F"],r.password]])]),m],32)])})),v=s("5530"),j=s("5502"),O={data:function(){return{username:null,password:null,show_label:!1}},methods:{login:function(){var t=this;this.$store.dispatch("getUser",{email:this.username,password:this.password}).then((function(){console.log("Успех"),t.$router.push("/games")})).catch((function(e){t.$toast.error("Неверный логин или пароль!",{duration:4e3,position:"top"})}))}},computed:Object(v["a"])({},Object(j["c"])(["user","isLoggedIn","token"]))};s("b485");O.render=_,O.__scopeId="data-v-5980f6f1";var w=O,g=Object(i["L"])("data-v-2a44fa70");Object(i["u"])("data-v-2a44fa70");var y={class:"form__box"},A=Object(i["i"])("label",{class:"form__title"},"Почта",-1),k={class:"form__box"},U=Object(i["i"])("label",{class:"form__title"},"Пароль",-1),V={class:"form__box"},C=Object(i["i"])("label",{class:"form__title"},"Повторите пароль",-1),x={class:"form__box"},F=Object(i["i"])("label",{class:"form__title"},"Никнейм",-1),J={class:"form__list"},$=Object(i["i"])("button",{type:"submit",class:"btn btn--accent"},"Зарегистрироваться",-1);Object(i["s"])();var q=g((function(t,e,s,a,r,c){return Object(i["r"])(),Object(i["e"])("div",null,[Object(i["i"])("form",{class:["login form",{focused:t.focused}],onSubmit:e[7]||(e[7]=Object(i["K"])((function(){return c.login&&c.login.apply(c,arguments)}),["prevent"]))},[Object(i["i"])("div",y,[A,Object(i["J"])(Object(i["i"])("input",{required:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.email=t}),type:"text",placeholder:"yourmail@mail.ru",class:["form-controll",c.isEmailValid],autocomplete:"off"},null,2),[[i["F"],r.email]])]),Object(i["i"])("div",k,[U,Object(i["J"])(Object(i["i"])("input",{required:"",class:[{valid:r.valid_password},"form-controll"],"onUpdate:modelValue":e[2]||(e[2]=function(t){return r.password=t}),type:"password",placeholder:"Пароль",onInput:e[3]||(e[3]=function(){return c.checkPassword&&c.checkPassword.apply(c,arguments)}),autocomplete:"off"},null,34),[[i["F"],r.password]])]),Object(i["i"])("div",V,[C,Object(i["J"])(Object(i["i"])("input",{required:"",class:[{valid:r.valid_password},"form-controll"],"onUpdate:modelValue":e[4]||(e[4]=function(t){return r.passwordConfirm=t}),type:"password",placeholder:"Повторите пароль",onInput:e[5]||(e[5]=function(){return c.checkPassword&&c.checkPassword.apply(c,arguments)}),autocomplete:"off"},null,34),[[i["F"],r.passwordConfirm]])]),Object(i["i"])("div",x,[F,Object(i["J"])(Object(i["i"])("input",{required:"","onUpdate:modelValue":e[6]||(e[6]=function(t){return r.username=t}),type:"text",placeholder:"superplayer",class:["form-controll",c.isUsernameValid]},null,2),[[i["F"],r.username]])]),Object(i["i"])("ul",J,[Object(i["i"])("li",{class:["form__item",{is_valid:r.contains_eight_characters}]},"8 символов",2),Object(i["i"])("li",{class:["form__item",{is_valid:r.contains_number}]},"Используйте цифры",2),Object(i["i"])("li",{class:["form__item",{is_valid:r.contains_uppercase}]},"Используйте заглавные буквы",2),Object(i["i"])("li",{class:["form__item",{is_valid:r.contains_special_character}]},"Используйте специальные символы",2),Object(i["i"])("li",{class:["form__item",{is_valid:r.confirm_password}]},"Пароли не совпадают",2)]),$],34)])})),I={data:function(){return{email:"",reg:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,password:"",username:"",passwordConfirm:!1,password_length:0,contains_eight_characters:!1,contains_number:!1,contains_uppercase:!1,contains_special_character:!1,valid_password:!1,confirm_password:!1,error:[]}},methods:Object(v["a"])(Object(v["a"])({},Object(j["b"])(["registerUser"])),{},{login:function(){var t=this;this.checkCompleteForm?this.registerUser({email:this.username,password:this.password,username:this.username}).then((function(){t.$router.push("/games")})).catch((function(e){t.$toast.error("Пользователь с таким никнеймом уже есть!",{duration:4e3})})):this.$toast.warning("Форма не валидна. Заполните верно!",{duration:4e3})},checkPassword:function(){this.password_length=this.password.length;var t=/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;this.contains_eight_characters=this.password_length>8,this.contains_number=/\d/.test(this.password),this.contains_uppercase=/[A-Z]/.test(this.password),this.contains_special_character=t.test(this.password),this.confirm_password=this.password===this.passwordConfirm,!0===this.contains_eight_characters&&!0===this.contains_special_character&&!0===this.contains_uppercase&&!0===this.confirm_password&&!0===this.contains_number?this.valid_password=!0:this.valid_password=!1}}),watch:{passwordConfirm:function(){this.password===this.passwordConfirm?this.error=[]:console.log("Пароли не совпадают")}},computed:{isEmailValid:function(){return""==this.email?"":this.reg.test(this.email)?"valid":"error"},isUsernameValid:function(){return this.username.length>5?"valid":"error"},checkCompleteForm:function(){return 1==this.valid_password&&"valid"==this.isEmailValid&&"valid"==this.isUsernameValid}}};s("a635");I.render=q,I.__scopeId="data-v-2a44fa70";var L=I,P={components:{Login:w,Register:L},props:{route:{type:String,default:"login"}},data:function(){return{tab:!0,activeMenu:"login"}},mounted:function(){this.isActive(this.route),this.setActive(this.route)},methods:{isActive:function(t){return this.activeMenu===t},setActive:function(t){this.activeMenu=t}}};s("24b7");P.render=u,P.__scopeId="data-v-01827e4e";e["default"]=P},a635:function(t,e,s){"use strict";s("f6fb")},b485:function(t,e,s){"use strict";s("150f")},b4e6:function(t,e,s){},f6fb:function(t,e,s){}}]);
//# sourceMappingURL=chunk-71cfae36.770458ed.js.map