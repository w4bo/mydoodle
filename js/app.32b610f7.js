(function(e){function t(t){for(var c,r,o=t[0],l=t[1],b=t[2],d=0,j=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&j.push(n[r][0]),n[r]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);i&&i(t);while(j.length)j.shift()();return a.push.apply(a,b||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],c=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(c=!1)}c&&(a.splice(t--,1),e=r(r.s=s[0]))}return e}var c={},n={app:0},a=[];function r(t){if(c[t])return c[t].exports;var s=c[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=c,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(s,c,function(t){return e[t]}.bind(null,c));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var b=0;b<o.length;b++)t(o[b]);var i=l;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("cd49")},4420:function(e,t,s){},4678:function(e,t,s){var c={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=a(e);return s(t)}function a(e){if(!s.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}n.keys=function(){return Object.keys(c)},n.resolve=a,e.exports=n,n.id="4678"},"6c7b":function(e,t,s){"use strict";s("4420")},cd49:function(e,t,s){"use strict";s.r(t);var c=s("7a23");const n={id:"app",class:"d-flex flex-column h-100"},a={class:"flex-grow-1"},r={class:"mt-5"};function o(e,t,s,o,l,b){const i=Object(c["y"])("nav-bar"),d=Object(c["y"])("error"),j=Object(c["y"])("router-view");return Object(c["s"])(),Object(c["e"])("div",n,[Object(c["h"])(i),Object(c["f"])("div",a,[Object(c["h"])(d),Object(c["f"])("div",r,[Object(c["h"])(j)])])])}const l={class:"nav-container mb-3"},b={class:"navbar navbar-expand-md navbar-light bg-light",style:{width:"100%",height:"65px",position:"fixed"}},i={class:"container"},d=Object(c["f"])("div",{class:"navbar-brand logo"},null,-1),j=Object(c["f"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["f"])("span",{class:"navbar-toggler-icon"})],-1),f={class:"collapse navbar-collapse",id:"navbarNav"},u={class:"navbar-nav mr-auto"},p={class:"nav-item"},h=Object(c["g"])("Home"),O={class:"navbar-nav d-none d-md-block"},m={key:0,class:"nav-item"},g={key:1,class:"nav-item dropdown"},v={class:"nav-link dropdown-toggle",href:"#",id:"profileDropDown","data-toggle":"dropdown"},k=["src"],y={class:"dropdown-menu dropdown-menu-right"},w={class:"dropdown-header"},x=Object(c["g"])("Profile "),z=Object(c["g"])("Log out "),A={key:0,class:"navbar-nav d-md-none"},L={key:1,id:"mobileAuthNavBar",class:"navbar-nav d-md-none d-flex"},B={class:"nav-item"},C={class:"user-info"},_=["src"],E={class:"d-inline-block"},M=Object(c["g"])("Profile");function D(e,t,s,n,a,r){const o=Object(c["y"])("router-link"),D=Object(c["y"])("font-awesome-icon");return Object(c["s"])(),Object(c["e"])("div",l,[Object(c["f"])("nav",b,[Object(c["f"])("div",i,[d,j,Object(c["f"])("div",f,[Object(c["f"])("ul",u,[Object(c["f"])("li",p,[Object(c["h"])(o,{to:"/",class:"nav-link"},{default:Object(c["E"])(()=>[h]),_:1})])]),Object(c["f"])("ul",O,[n.isAuthenticated||n.isLoading?Object(c["d"])("",!0):(Object(c["s"])(),Object(c["e"])("li",m,[Object(c["f"])("button",{id:"qsLoginBtn",class:"btn btn-primary btn-margin",onClick:t[0]||(t[0]=Object(c["F"])((...e)=>n.login&&n.login(...e),["prevent"]))},"Login")])),n.isAuthenticated?(Object(c["s"])(),Object(c["e"])("li",g,[Object(c["f"])("a",v,[Object(c["f"])("img",{src:n.user.picture,alt:"User's profile picture",class:"nav-user-profile rounded-circle",width:"50"},null,8,k)]),Object(c["f"])("div",y,[Object(c["f"])("div",w,Object(c["A"])(n.user.name),1),Object(c["h"])(o,{to:"/profile",class:"dropdown-item dropdown-profile"},{default:Object(c["E"])(()=>[Object(c["h"])(D,{class:"mr-3",icon:"user"}),x]),_:1}),Object(c["f"])("a",{id:"qsLogoutBtn",href:"#",class:"dropdown-item",onClick:t[1]||(t[1]=Object(c["F"])((...e)=>n.logout&&n.logout(...e),["prevent"]))},[Object(c["h"])(D,{class:"mr-3",icon:"power-off"}),z])])])):Object(c["d"])("",!0)]),n.isAuthenticated||n.isLoading?Object(c["d"])("",!0):(Object(c["s"])(),Object(c["e"])("ul",A,[Object(c["f"])("button",{id:"qsLoginBtn",class:"btn btn-primary btn-block",onClick:t[2]||(t[2]=(...e)=>n.login&&n.login(...e))},"Log in")])),n.isAuthenticated?(Object(c["s"])(),Object(c["e"])("ul",L,[Object(c["f"])("li",B,[Object(c["f"])("span",C,[Object(c["f"])("img",{src:n.user.picture,alt:"User's profile picture",class:"nav-user-profile d-inline-block rounded-circle mr-3",width:"50"},null,8,_),Object(c["f"])("h6",E,Object(c["A"])(n.user.name),1)])]),Object(c["f"])("li",null,[Object(c["h"])(D,{icon:"user",class:"mr-3"}),Object(c["h"])(o,{to:"/profile"},{default:Object(c["E"])(()=>[M]),_:1})]),Object(c["f"])("li",null,[Object(c["h"])(D,{icon:"power-off",class:"mr-3"}),Object(c["f"])("a",{id:"qsLogoutBtn",href:"#",class:"",onClick:t[3]||(t[3]=Object(c["F"])((...e)=>n.logout&&n.logout(...e),["prevent"]))},"Log out")])])):Object(c["d"])("",!0)])])])])}var N=s("f24d"),P={name:"NavBar",setup(){const e=Object(N["c"])();return{isAuthenticated:e.isAuthenticated,isLoading:e.isLoading,user:e.user,login(){e.loginWithRedirect()},logout(){e.logout({returnTo:window.location.origin})}}}},q=(s("6c7b"),s("6b0d")),S=s.n(q);const T=S()(P,[["render",D]]);var U=T;const H={key:0,class:"alert alert-danger alert-dismissible"},F=Object(c["f"])("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close"},[Object(c["f"])("span",{"aria-hidden":"true"},"×")],-1);function I(e,t,s,n,a,r){return r.msg?(Object(c["s"])(),Object(c["e"])("div",H,[Object(c["g"])(Object(c["A"])(r.msg)+" ",1),F])):Object(c["d"])("",!0)}var W={name:"Error",computed:{msg(){return this.$auth0.error.value}}};const J=S()(W,[["render",I]]);var R=J,K={components:{NavBar:U,Error:R}};const X=S()(K,[["render",o]]);var $=X,G=s("6605");const Q={class:"d-flex justify-content-center"},V={class:"row",style:{"max-width":"95%"}},Y={class:"d-flex"},Z=Object(c["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-left-circle",viewBox:"0 0 16 16"},[Object(c["f"])("path",{"fill-rule":"evenodd",d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"})],-1),ee=[Z],te={class:"overflow-auto"},se={class:"table table-striped table-bordered",style:{"margin-top":"15px"}},ce=Object(c["f"])("th",null,null,-1),ne={key:0},ae={key:0},re=["disabled","onClick"],oe=Object(c["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-right-circle",viewBox:"0 0 16 16"},[Object(c["f"])("path",{"fill-rule":"evenodd",d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"})],-1),le=[oe],be={class:"d-flex justify-content-center",style:{position:"fixed",width:"100%",left:"0px",bottom:"0",height:"40px","background-color":"#ddd"}},ie=Object(c["f"])("br",null,null,-1),de=Object(c["f"])("br",null,null,-1);function je(e,t,s,n,a,r){return Object(c["s"])(),Object(c["e"])("div",Q,[Object(c["f"])("div",V,[Object(c["f"])("div",Y,[Object(c["f"])("button",{type:"button",class:"btn btn-light",onClick:t[0]||(t[0]=e=>a.week=a.week-1)},ee),Object(c["f"])("div",te,[Object(c["f"])("table",se,[Object(c["f"])("thead",null,[ce,(Object(c["s"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(Object.entries(r.header(a.turni)),([e,t])=>(Object(c["s"])(),Object(c["e"])(c["a"],{key:t},[parseInt(""+t.weekyear)===parseInt(""+a.week)?(Object(c["s"])(),Object(c["e"])("th",ne,Object(c["A"])(e),1)):Object(c["d"])("",!0)],64))),128))]),Object(c["f"])("tbody",null,[(Object(c["s"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(a.piv,e=>(Object(c["s"])(),Object(c["e"])("tr",{key:e.id},[(Object(c["s"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(e,e=>(Object(c["s"])(),Object(c["e"])(c["a"],{key:e},[parseInt(""+e.weekyear)===parseInt(""+a.week)?(Object(c["s"])(),Object(c["e"])("td",{key:0,style:Object(c["o"])(n.user.name==e.id?"background-color:  #f7dc6f":"")},["undefined"===typeof e.checked?(Object(c["s"])(),Object(c["e"])("div",ae,Object(c["A"])(e.id),1)):Object(c["d"])("",!0),"undefined"!==typeof e.checked?(Object(c["s"])(),Object(c["e"])("button",{key:1,type:"button",class:Object(c["n"])(["btn",{"btn-danger":"false"===e.checked||!1===e.checked,"btn-success":"true"===e.checked||!0===e.checked}]),disabled:n.user.name!==e.id,onClick:t=>{e.modified=!0,e.checked=r.toggle(e.checked)}},Object(c["A"])("true"===e.checked||!0===e.checked?"✓":"-"),11,re)):Object(c["d"])("",!0)],4)):Object(c["d"])("",!0)],64))),128))]))),128))])])]),Object(c["f"])("button",{type:"button",class:"btn btn-light",onClick:t[1]||(t[1]=e=>a.week=a.week+1)},le)]),Object(c["f"])("div",be,[ie,de,Object(c["f"])("button",{type:"button",class:"btn btn-primary",style:{align:"center",position:"fixed",bottom:"2px",right:"2px",height:"35px"},onClick:t[2]||(t[2]=e=>r.update())}," Save ")])])])}var fe=s("c1df"),ue=s.n(fe),pe=s("bc3a"),he=s.n(pe),Oe=s("ed18"),me=s.n(Oe);me.a.config();var ge={modified:!1,name:"profile",setup(){const e=Object(N["c"])();return{user:e.user}},methods:{print(e){return!0},pivot(e){let t={};const s=this.user;e.forEach((function(e){const c=(e.id===s.name?"---":"")+e.id+" "+e.weekyear;t[c]=(t[c]?t[c]:[{id:e.id,weekyear:e.weekyear}]).concat([{slotdate:e.slotdate,slotbin:e.slotbin,slotwhere:e.slotwhere,checked:e.checked,weekyear:e.weekyear,modified:!1,id:e.id}])}));const c=Object.keys(t).sort().reduce((e,s)=>(e[s]=t[s],e),{});return c},update(e){let t=[];for(let c in this.piv)for(let e in this.piv[c]){let s=this.piv[c][e];s.modified&&t.push({id:s["id"],slotdate:s["slotdate"],slotbin:s["slotbin"],slotwhere:s["slotwhere"],checked:s["checked"]})}let s=JSON.stringify(t).replaceAll("@","%40").replaceAll("[","%5B").replaceAll("]","%5D").replaceAll("{","%7B").replaceAll("}","%7D");he.a.post("https://mydoodle.herokuapp.com/MyDoodle?cmd=update&turni="+s).then(t=>{e&&e()})},toggle(e){return!0!==e&&"true"!==e},addUser(e){he.a.post("https://mydoodle.herokuapp.com/MyDoodle?cmd=adduser&id="+this.user.name+"&firstname=foo&lastname=bar").then(t=>{e&&e()})},getTurni(){he.a.get("https://mydoodle.herokuapp.com/MyDoodle").then(e=>{this.turni=e["data"],this.piv=this.pivot(this.turni)})},header:function(e){let t={};return e.forEach((function(e){t[e.slotdate+" "+e.slotwhere+" "+e.slotbin]={weekyear:e.weekyear}})),t}},data(){return{popupattivo:!1,week:ue()().week(),turni:[],piv:[]}},mounted(){this.addUser(this.getTurni)}};const ve=S()(ge,[["render",je]]);var ke=ve;function ye(e){return Object(G["a"])({routes:[{path:"/",name:"home",component:ke,beforeEnter:Object(N["b"])(e)},{path:"/profile",name:"profile",component:ke,beforeEnter:Object(N["b"])(e)}],history:Object(G["b"])()})}var we=s("85bd"),xe=(s("2c43"),s("ecee")),ze=s("c074"),Ae=s("ad3d");me.a.config();const Le="dev-2hg961hp.eu.auth0.com",Be="3ibWWkxAkgDoXu7jqlaBWtigKNH9BmaR",Ce="https://w4bo.github.io/mydoodle-client",_e=Object(c["c"])($);xe["c"].add(ze["a"],ze["c"],ze["b"]),_e.use(we["a"]).use(ye(_e)).use(Object(N["a"])({domain:Le,client_id:Be,redirect_uri:Ce})).component("font-awesome-icon",Ae["a"]).mount("#app")}});
//# sourceMappingURL=app.32b610f7.js.map