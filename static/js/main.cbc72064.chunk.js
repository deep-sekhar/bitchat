(this.webpackJsonpbitchat=this.webpackJsonpbitchat||[]).push([[0],{34:function(e,t,s){},38:function(e,t,s){},50:function(e,t,s){},58:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),c=s(18),i=s.n(c),r=(s(50),s(44)),l=s(6),o=s.p+"static/media/newlogo.b3743e51.png",d=s(21),j=s(1),b=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark ",style:{backgroundColor:"rgb(34, 194, 42)"},children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("img",{src:o,className:" img-responsive mx-3 my-0.5",style:{height:"45px"}}),Object(j.jsx)(d.b,{className:"navbar-brand",to:"#",children:"Bit-Chat"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0 ",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/",children:Object(j.jsx)("h5",{children:"Dashboard"})})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(d.b,{className:"nav-link active",to:"/Aboutus",children:Object(j.jsx)("h5",{children:"About Us"})})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("h5",{className:"nav-link active","aria-disabled":"true",onClick:function(){e.signInChanger(!1)},style:{cursor:"pointer"},children:"Sign-out"})})]})})]})})})},m=s.p+"static/media/newlogo1.b777a8b1.png",h=(s(34),s(64)),u=s(66),x=function(e){var t=Object(a.useState)(""),s=Object(l.a)(t,2),n=s[0],c=s[1],i=Object(a.useState)(""),r=Object(l.a)(i,2),o=r[0],d=r[1],b=Object(a.useState)(""),m=Object(l.a)(b,2),x=m[0],O=m[1],p=Object(a.useState)(""),g=Object(l.a)(p,2),f=g[0],v=g[1],y=Object(a.useState)(""),N=Object(l.a)(y,2),S=N[0],k=N[1],w=Object(a.useState)(!1),C=Object(l.a)(w,2),P=C[0],I=C[1],T=function(){return I(!1)};return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsxs)(h.a,{show:P,onHide:T,centered:!0,children:[Object(j.jsx)(h.a.Header,{children:Object(j.jsx)(h.a.Title,{children:"Sign Up Error"})}),Object(j.jsx)(h.a.Body,{children:"Pls fill all boxes properly"}),Object(j.jsx)(h.a.Footer,{children:Object(j.jsx)(u.a,{variant:"success",onClick:T,children:"Close"})})]})}),Object(j.jsx)("div",{className:"conatiner my-5",children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n&&o&&f&&x&&S==o?e.signInChanger(!e.signedIn):I(!0)},children:[Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"UserName",className:"form-label",children:"Username"}),Object(j.jsx)("input",{value:f,onChange:function(e){return v(e.target.value)},className:"form-control SignInItems",type:"text","aria-label":"default input example",id:"UserName"})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(j.jsx)("input",{value:n,onChange:function(e){return c(e.target.value)},pattern:"([a-zA-z0-9]){1,25}@([a-zA-z]){1,30}\\.{1}([a-zA-z]){1,30}",placeholder:"Eg: Tony@gmail.com",type:"email",className:"form-control SignInItems",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(j.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"UserNumber",className:"form-label",children:"Phone Number"}),Object(j.jsx)("input",{value:x,onChange:function(e){return O(e.target.value)},className:"form-control SignInItems",type:"text",pattern:"[0-9]{9}","aria-label":"default input example",id:"UserNumber",placeholder:"Ex-9345959599"})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{for:"inputPassword5",className:"form-label",children:"Password"}),Object(j.jsx)("input",{value:o,pattern:"([a-zA-z0-9]){8,20}",onChange:function(e){return d(e.target.value)},type:"password",id:"inputPassword5",className:"form-control SignInItems","aria-describedby":"passwordHelpBlock"}),Object(j.jsx)("div",{id:"passwordHelpBlock",class:"form-text",children:"Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji."})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{for:"inputPassword6",className:"form-label",children:"Confirm Password"}),Object(j.jsx)("input",{value:S,onChange:function(e){return k(e.target.value)},type:"password",id:"inputPassword6",className:"form-control SignInItems","aria-describedby":"passwordHelpBlock"})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-success rounded-pill",children:"Create Account"}),Object(j.jsx)("div",{className:"my-4",children:Object(j.jsx)("button",{id:"NewUser",onClick:function(){return e.UserStateChanger(!0)},type:"button",children:"ExistingUser? Sign-in here"})})]})})]})},O=function(e){var t=Object(a.useState)(""),s=Object(l.a)(t,2),n=s[0],c=s[1],i=Object(a.useState)(""),r=Object(l.a)(i,2),o=r[0],d=r[1],b=Object(a.useState)(!1),m=Object(l.a)(b,2),x=m[0],O=m[1],p=function(){return O(!1)};return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsxs)(h.a,{show:x,onHide:p,centered:!0,children:[Object(j.jsx)(h.a.Header,{children:Object(j.jsx)(h.a.Title,{children:"Sign In Error"})}),Object(j.jsx)(h.a.Body,{children:"Pls Check all details properly"}),Object(j.jsx)(h.a.Footer,{children:Object(j.jsx)(u.a,{variant:"success",onClick:p,children:"Close"})})]})}),Object(j.jsx)("div",{className:"container my-5",children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n&&o?e.signInChanger(!e.signedIn):O(!0)},children:[Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email"}),Object(j.jsx)("input",{pattern:"([a-zA-z0-9]){1,25}@([a-zA-z]){1,30}\\.{1}([a-zA-z]){1,30}",placeholder:"Eg: Tony@gmail.com",type:"text",className:"form-control SignInItems",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(j.jsx)("input",{type:"password",className:"form-control SignInItems",id:"exampleInputPassword1",value:o,onChange:function(e){return d(e.target.value)}})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-success rounded-pill",children:"Sign In"}),Object(j.jsx)("div",{className:"my-4",children:Object(j.jsx)("button",{id:"NewUser",onClick:function(){return e.UserStateChanger(!e.ExistingUser)},type:"button",children:"New User? Sign-up here"})})]})})]})},p=function(e){var t=Object(a.useState)(!0),s=Object(l.a)(t,2),n=s[0],c=s[1],i=function(e){c(e)};return Object(j.jsx)("div",{className:"container",style:{height:"100vh"},id:"MyInputForm",children:Object(j.jsxs)("div",{className:"row row-fluid ",id:"MyInputFormItems",children:[Object(j.jsxs)("div",{className:"col-xs-3 col-sm-6",children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:m,alt:"Bit-Chat logo",className:"img img-fluid my-5 rounded-pill mx-3 ",style:{width:"45%"}})}),Object(j.jsx)("div",{children:Object(j.jsx)("h2",{className:"text-dark",children:"Be simple, Be social"})})]}),Object(j.jsx)("div",{className:"col-xs-7 col-sm-4",children:n?Object(j.jsx)(O,{signInChanger:e.signInChanger,UserStateChanger:i,ExistingUser:n}):Object(j.jsx)(x,{signInChanger:e.signInChanger,UserStateChanger:i,ExistingUser:n})})]})})},g=s(65),f=s.p+"static/media/Like.a5a43f39.png",v=s.p+"static/media/Unlike.7647eb85.png",y=(s(58),function(e){return Object(j.jsx)("div",{className:"container MyPostsTobeShown",children:Object(j.jsxs)(g.a,{className:"text-center PostStyles container my-4 ",children:[Object(j.jsx)(g.a.Header,{children:e.mytime}),Object(j.jsxs)(g.a.Body,{children:[Object(j.jsx)(g.a.Title,{children:e.title}),Object(j.jsx)(g.a.Text,{children:e.desc})]}),Object(j.jsxs)(g.a.Footer,{className:"text-muted d-flex",children:[Object(j.jsxs)("di",{className:"p-1",children:[Object(j.jsx)(u.a,{variant:"primary",className:"mx-2 MyPostsTobeShown",onClick:function(){e.SetEditedItems(e.title,e.desc),e.DelThePost(e.post)},children:"Edit"}),Object(j.jsx)(u.a,{variant:"danger",className:"MyPostsTobeShown",onClick:function(){e.DelThePost(e.post)},children:"Delete"})]}),Object(j.jsxs)("div",{className:"ms-auto p-2 bd-highlight d-flex",children:[Object(j.jsx)("div",{onClick:function(){e.AddLikes(e.post)},className:"mx-2",children:Object(j.jsx)("img",{src:f,alt:"like",className:"Postimage"})}),Object(j.jsx)("div",{children:e.post.likes}),Object(j.jsx)("div",{onClick:function(){e.AdddisLikes(e.post)},className:"mx-2",children:Object(j.jsx)("img",{src:v,alt:"like",className:"Postimage"})}),Object(j.jsx)("div",{children:e.post.dislikes})]})]})]})})}),N=(s(38),s(62)),S=function(e){var t=Object(a.useState)(""),s=Object(l.a)(t,2),n=s[0],c=s[1],i=Object(a.useState)(""),r=Object(l.a)(i,2),o=r[0],d=r[1],b=Object(a.useState)(!1),m=Object(l.a)(b,2),x=m[0],O=m[1],p=function(){return O(!1)},g=Object(a.useState)(!1),f=Object(l.a)(g,2),v=f[0],y=f[1];return Object(j.jsxs)("div",{className:"MypostHeaders position-relative my-3 container",children:[Object(j.jsx)("div",{children:Object(j.jsxs)(h.a,{show:x,onHide:p,centered:!0,children:[Object(j.jsx)(h.a.Header,{children:Object(j.jsx)(h.a.Title,{children:"Post Error"})}),Object(j.jsx)(h.a.Body,{children:"Post not filled properly"}),Object(j.jsx)(h.a.Footer,{children:Object(j.jsx)(u.a,{variant:"success",onClick:p,children:"Close"})})]})}),Object(j.jsx)("div",{className:"my-3 d-flex justify-content-start mx-3",children:Object(j.jsx)(u.a,{onClick:function(){return y(!v)},"aria-controls":"example-collapse-text","aria-expanded":v,className:"MyPostsTobeShown position-relative left-0 PostButton",variant:"success",children:Object(j.jsx)("h4",{children:"New Post"})})}),Object(j.jsx)(N.a,{in:v,className:" MyPostsTobeShown container",children:Object(j.jsx)("div",{className:"card card-body MyPostsTobeShown container",style:{backgroundColor:"rgb(48, 228, 24,0.3)"},children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n&&o?(e.AddToPost(n,o),c(""),d(""),y(!1)):O(!0)},children:[Object(j.jsx)("div",{children:Object(j.jsx)("input",{value:n,onChange:function(e){return c(e.target.value)},className:"form-control form-control-lg MyPostsTobeShown",type:"text",placeholder:"post title"})}),Object(j.jsx)("div",{className:"my-3",children:Object(j.jsx)("textarea",{value:o,onChange:function(e){return d(e.target.value)},className:"form-control form-control-lg MyPostsTobeShown",id:"exampleFormControlTextarea1",rows:"3",placeholder:"post"})}),Object(j.jsx)("button",{type:"submit",className:"btn btn-success PostButton MyPostsTobeShown container d-flex justify-content-around","data-bs-toggle":"collapse","data-bs-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample",style:{width:"70px"},children:"Post"})]})})})]})},k=function(e){var t=Object(a.useState)(e.EditTitle),s=Object(l.a)(t,2),n=s[0],c=s[1],i=Object(a.useState)(e.EditDesc),r=Object(l.a)(i,2),o=r[0],d=r[1],b=Object(a.useState)(!1),m=Object(l.a)(b,2),x=m[0],O=m[1],p=function(){return O(!1)},g=Object(a.useState)(!0),f=Object(l.a)(g,2),v=f[0],y=f[1];return Object(j.jsxs)("div",{className:"MypostHeaders position-relative my-3 container",children:[Object(j.jsx)("div",{children:Object(j.jsxs)(h.a,{show:x,onHide:p,centered:!0,children:[Object(j.jsx)(h.a.Header,{children:Object(j.jsx)(h.a.Title,{children:"Post Error"})}),Object(j.jsx)(h.a.Body,{children:"Post not filled properly"}),Object(j.jsx)(h.a.Footer,{children:Object(j.jsx)(u.a,{variant:"success",onClick:p,children:"Close"})})]})}),Object(j.jsx)("div",{className:"my-3 d-flex justify-content-start mx-5",children:Object(j.jsx)(u.a,{onClick:function(){return y(!v)},"aria-controls":"example-collapse-text","aria-expanded":v,className:"MyPostsTobeShown position-relative left-0 PostButton",variant:"success",children:Object(j.jsx)("h4",{children:"New Post"})})}),Object(j.jsx)(N.a,{in:v,className:" MyPostsTobeShown container",children:Object(j.jsx)("div",{className:"card card-body MyPostsTobeShown container",style:{backgroundColor:"rgb(48, 228, 24,0.3)"},children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n&&o?(e.AddToPost(n,o),c(""),d(""),y(!1)):O(!0)},children:[Object(j.jsx)("div",{children:Object(j.jsx)("input",{value:n,onChange:function(e){return c(e.target.value)},className:"form-control form-control-lg MyPostsTobeShown",type:"text",placeholder:"post title"})}),Object(j.jsx)("div",{className:"my-3",children:Object(j.jsx)("textarea",{value:o,onChange:function(e){return d(e.target.value)},className:"form-control form-control-lg MyPostsTobeShown",id:"exampleFormControlTextarea1",rows:"3",placeholder:"post"})}),Object(j.jsx)("button",{type:"submit",className:"btn btn-success PostButton MyPostsTobeShown container d-flex justify-content-around","data-bs-toggle":"collapse","data-bs-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample",style:{width:"70px"},children:"Post"})]})})})]})},w=s(41),C=s(42),P=s(45),I=s(43),T=(s(59),s(63)),E=function(e){Object(P.a)(s,e);var t=Object(I.a)(s);function s(){return Object(w.a)(this,s),t.apply(this,arguments)}return Object(C.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:" text-center",id:"dpback",children:[Object(j.jsx)("div",{className:"container d-flex justify-content-around moving-glow rounded dp-bgm",children:Object(j.jsx)(T.a,{src:"https://github.com/deep-sekhar/Web-Dev-Projects/blob/master/pro2.png?raw=true",roundedCircle:!0,id:"dp"})}),Object(j.jsxs)("div",{className:"container profile-text",children:[Object(j.jsxs)("h5",{className:"my-2",children:["Hi, it's Deep here. Hope you liked this fronted project in React.",Object(j.jsx)("br",{}),"The source code is available in my git repository."]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("h6",{className:"my-2",children:"Don't forget to share your reviews."})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"Follow me on:"}),Object(j.jsx)("span",{class:"footlogo  mx-2",children:Object(j.jsx)("a",{href:"https://www.instagram.com/sekhharr/",target:"_blank",children:Object(j.jsx)("i",{class:"fab fa-instagram-square fa-2x footerlogo"})})}),Object(j.jsx)("span",{class:"footlogo mx-2",children:Object(j.jsx)("a",{href:"https://www.facebook.com/Sekhharr/",target:"_blank",children:Object(j.jsx)("i",{class:"fab fa-facebook-square fa-2x footerlogo"})})}),Object(j.jsxs)("span",{class:"footlogo mx-2",children:[Object(j.jsx)("a",{href:"https://discord.com/channels/787387160101650452/787387162441678890",target:"_blank"}),Object(j.jsx)("i",{class:"fab fa-discord fa-2x footerlogo"})]}),Object(j.jsx)("span",{class:"footlogo mx-2",children:Object(j.jsx)("a",{href:"https://github.com/deep-sekhar",target:"_blank",children:Object(j.jsx)("i",{class:"fab fa-github fa-2x footerlogo"})})}),Object(j.jsx)("span",{class:"footlogo mx-2",children:Object(j.jsx)("a",{href:"https://in.linkedin.com/in/deep-sekhar-ghosh-23478b208",target:"_blank",children:Object(j.jsx)("i",{class:"fab fa-linkedin fa-2x footerlogo"})})})]})]})}}]),s}(a.Component),M=s(7);var A=function(){var e;e=null!==localStorage.getItem("SignInval")&&JSON.parse(localStorage.getItem("SignInval"));var t=Object(a.useState)(e),s=Object(l.a)(t,2),n=s[0],c=s[1],i=function(e){c(e)};Object(a.useEffect)((function(){localStorage.setItem("SignInval",JSON.stringify(n))}),[n]);var o=function(e,t){var s=x(),a={id:0==F.length?1:F[F.length-1]+1,title:e,desc:t,mytime:s,likes:0,dislikes:0};U([].concat(Object(r.a)(F),[a])),N(""),I("")},m=function(e){U(F.filter((function(t){return t!==e})))},h=function(e){U(F.map((function(t){return t===e&&(t.likes=t.likes+1),t})))},u=function(e){U(F.map((function(t){return t===e&&(t.dislikes=t.dislikes+1),t})))};function x(){var e=new Date,t=e.getMonth()+1,s=e.getFullYear(),a=e.getHours(),n=e.getMinutes(),c="AM";return a>12&&(c="PM",a%=12),n<10&&(n="0"+n),a+":"+n+c+"\xa0\xa0\xa0\xa0\xa0"+t+"/"+s}var O,g=Object(a.useState)(""),f=Object(l.a)(g,2),v=f[0],N=f[1],w=Object(a.useState)(""),C=Object(l.a)(w,2),P=C[0],I=C[1],T=function(e,t){N(e),I(t)};O=null==localStorage.getItem("posts")?[{id:1,title:"Hi there!",desc:"My Name is Deep Sekhar Ghosh. This is a sample post",mytime:"3:03PM\xa0\xa0\xa0\xa0\xa07/2021",likes:10,dislikes:1},{id:2,title:"Visit different sections",desc:"Try pressing on the different buttons available here",mytime:"4:03PM\xa0\xa0\xa0\xa0\xa07/2021",likes:43,dislikes:2},{id:3,title:"Any Reviews?",desc:"Explore it a bit and feel free to share your review",mytime:x(),likes:12,dislikes:0}]:JSON.parse(localStorage.getItem("posts"));var A=Object(a.useState)(O),H=Object(l.a)(A,2),F=H[0],U=H[1],B=F.map((function(e){return Object(j.jsx)(y,{title:e.title,desc:e.desc,mytime:e.mytime,DelThePost:m,post:e,SetEditedItems:T,AddLikes:h,AdddisLikes:u},e.id)}));return Object(a.useEffect)((function(){localStorage.setItem("posts",JSON.stringify(F))}),[F]),Object(j.jsxs)(d.a,{children:[Object(j.jsx)(b,{signedIn:n,signInChanger:i}),Object(j.jsxs)(M.c,{children:[Object(j.jsx)(M.a,{exact:!0,path:"/",children:n?Object(j.jsxs)("div",{children:[0==v.length&&0==P.length?Object(j.jsx)(S,{AddToPost:o}):Object(j.jsx)(k,{AddToPost:o,EditTitle:v,EditDesc:P}),B]}):Object(j.jsx)("div",{children:Object(j.jsx)(p,{signedIn:n,signInChanger:i})})}),Object(j.jsx)(M.a,{path:"/Aboutus",children:n?Object(j.jsx)(E,{}):Object(j.jsx)(p,{signedIn:n,signInChanger:i})})]})]})},H=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,67)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root")),H()}},[[60,1,2]]]);
//# sourceMappingURL=main.cbc72064.chunk.js.map