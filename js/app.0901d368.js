(function(e){function t(t){for(var n,o,i=t[0],s=t[1],c=t[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);m&&m(t);while(d.length)d.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,o=1;o<a.length;o++){var i=a[o];0!==r[i]&&(n=!1)}n&&(l.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},o={app:0},r={app:0},l=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"82133ee4","chunk-2d0b8eae":"320f4bc6","chunk-b91d8136":"122563d2"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={"chunk-b91d8136":1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-2d0b8eae":"31d6cfe0","chunk-b91d8136":"9a9cc1b2"}[e]+".css",r=s.p+n,l=document.getElementsByTagName("link"),i=0;i<l.length;i++){var c=l[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],u=c.getAttribute("data-href");if(u===n||u===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||r,l=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=n,delete o[e],m.parentNode.removeChild(m),a(l)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var l=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=l);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(m);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,a[1](d)}r[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var m=u;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1721:function(e,t,a){"use strict";var n=a("9457"),o=a.n(n);o.a},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{link:"",to:"/"}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-home")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Home")])],1)],1),a("v-list-item",{attrs:{link:"",to:"/impressum"}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-bookshelf")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Impressum")])],1)],1)],1)],1),a("v-app-bar",{attrs:{app:"",color:"light-green darken-2",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",{attrs:{link:"",to:"/"}},[e._v("Porto Elia - Reservierung")])],1),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1),a("v-footer",{attrs:{absolute:"",color:e.brandColor,app:""}},[a("span",{staticClass:"white--text"},[e._v("© "+e._s((new Date).getFullYear()))])])],1)},r=[],l={data:function(){return{drawer:null,brandColor:"light-green darken-2"}}},i=l,s=a("2877"),c=a("6544"),u=a.n(c),d=a("7496"),m=a("40dc"),f=a("5bc1"),b=a("a523"),v=a("553a"),p=a("132d"),j=a("8860"),h=a("da13"),g=a("1800"),y=a("5d23"),k=a("f6c4"),w=a("f774"),O=a("2a7f"),A=Object(s["a"])(i,o,r,!1,null,null,null),_=A.exports;u()(A,{VApp:d["a"],VAppBar:m["a"],VAppBarNavIcon:f["a"],VContainer:b["a"],VFooter:v["a"],VIcon:p["a"],VList:j["a"],VListItem:h["a"],VListItemAction:g["a"],VListItemContent:y["a"],VListItemTitle:y["b"],VMain:k["a"],VNavigationDrawer:w["a"],VToolbarTitle:O["a"]});var C=a("f309");n["a"].use(C["a"]);var x=new C["a"]({}),D=(a("d3b7"),a("8c4f")),V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("ReservationForm")],1)},z=[],F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("CoronaInfo",{directives:[{name:"show",rawName:"v-show",value:e.corona,expression:"corona"}]}),a("v-row",{directives:[{name:"show",rawName:"v-show",value:!e.corona,expression:"!corona"}]},[a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("v-select",{attrs:{label:"Anzahl der Personen auswählen",items:e.quantityOptions,value:e.quantity,"item-color":e.brandColor,color:e.brandColor,"prepend-icon":"mdi-account-multiple"},on:{input:e.setQuantity}}),e.computedHideForm?e._e():a("v-alert",{attrs:{text:"",dense:"",color:"teal",icon:"mdi-phone",border:"left"}},[e._v(" Bei Reservierungen über 8 Personen kontaktieren Sie uns bitte telefonisch oder per WhatsApp unter der Nummer "),a("a",{staticClass:"font-weight-bold",attrs:{href:"tel:+491785272501"}},[e._v("+491785272501")])])],1),e.computedHideForm?a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.date,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{label:"Datum auswählen",color:e.brandColor,"prepend-icon":"mdi-calendar",readonly:""},model:{value:e.getDateFormatted,callback:function(t){e.getDateFormatted=t},expression:"getDateFormatted"}},"v-text-field",o,!1),n))]}}],null,!1,2414343229),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("v-date-picker",{attrs:{min:e.startDate,max:e.getEndDate,"allowed-dates":e.allowedDates,color:e.brandColor,"first-day-of-week":"1",locale:"de-de","no-title":""},on:{click:function(t){e.menu=!1},input:function(t){return e.$refs.menu.save(e.date)}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1):e._e(),e.computedHideForm?a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("div",[a("v-icon",[e._v("mdi-clock")]),a("span",{staticClass:"clock"},[e._v("Uhrzeit auswählen: "+e._s(e.time))])],1),a("div",{staticClass:"text-center"},e._l(e.timeOptions,(function(t){return a("span",{key:t.value},[a("v-btn",{staticClass:"time-btn",attrs:{color:t.color,outlined:t.outlined,dark:"",rounded:""},on:{click:function(a){return e.updateTime(t)}}},[e._v(e._s(t.label))])],1)})),0)]):e._e()],1),e.computedHideForm?a("v-row",{directives:[{name:"show",rawName:"v-show",value:!e.corona,expression:"!corona"}]},[a("v-col",{attrs:{align:"center"}},[a("v-btn",{attrs:{color:e.brandColor,"x-large":"",dark:""},on:{click:function(t){return e.customerPage()}}},[e._v(" Weiter "),a("v-icon",{attrs:{right:""}},[e._v("mdi-arrow-right")])],1)],1)],1):e._e()],1)},T=[],P=a("5530"),E=a("2f62"),L=a("c1df"),S=a.n(L),H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"grow"},[a("v-alert",{attrs:{prominent:"",type:"info"}},[a("h2",[e._v("Information")]),a("span",[e._v(" Aufgrund der "),a("a",{staticClass:"grey--text text--lighten-5 font-weight-bold",attrs:{href:"https://www.baden-wuerttemberg.de/de/service/aktuelle-infos-zu-corona/aktuelle-corona-verordnung-des-landes-baden-wuerttemberg/"}},[e._v("Corona Verordnung Baden-Württemberg")]),e._v(" sind Reservierungen derzeit nicht möglich. ")])])],1)],1)},I=[],N=a("0798"),q=a("62ad"),M=a("0fd9"),R={},Y=Object(s["a"])(R,H,I,!1,null,null,null),B=Y.exports;u()(Y,{VAlert:N["a"],VCol:q["a"],VRow:M["a"]});var $=a("6df8"),Q={name:"ReservationForm",components:{CoronaInfo:B},data:function(){return{timeColor:"grey",timeOutlined:!0,brandColor:$["c"],quantityOptions:$["f"],menu:!1,availableDates:[],corona:!1}},methods:Object(P["a"])(Object(P["a"])({},Object(E["b"])(["setQuantityAction","setDateAction","setTimeAction","setTimeOptionsAction","updateTimeOptionsAction","setCustomerFormAction"])),{},{setQuantity:function(e){this.setQuantityAction(e),"more"===this.quantity&&this.setCustomerFormAction(!1)},allowedDates:function(e){return 1!==S()(e).day()?S()(e).format("D"):0},updateTime:function(e){this.setTimeAction(e.value),this.updateTimeOptionsAction(e)},customerPage:function(){this.setCustomerFormAction(!0),this.$router.push({name:"Reservation"})}}),computed:Object(P["a"])(Object(P["a"])(Object(P["a"])({},Object(E["d"])(["quantity","startDate","time","timeOptions","customerForm"])),Object(E["c"])(["getDateFormatted","getEndDate"])),{},{date:{get:function(){return this.$store.state.date},set:function(e){this.$store.state.date!==e&&(this.setDateAction(e),this.setTimeOptionsAction())}},computedHideForm:function(){return"more"!==this.quantity}})},U=Q,K=(a("1721"),a("8336")),W=a("2e4b"),J=a("e449"),Z=a("b974"),X=a("8654"),G=Object(s["a"])(U,F,T,!1,null,"dc43cd5c",null),ee=G.exports;u()(G,{VAlert:N["a"],VBtn:K["a"],VCol:q["a"],VDatePicker:W["a"],VIcon:p["a"],VMenu:J["a"],VRow:M["a"],VSelect:Z["a"],VTextField:X["a"]});var te={name:"Home",components:{ReservationForm:ee}},ae=te,ne=Object(s["a"])(ae,V,z,!1,null,null,null),oe=ne.exports;u()(ne,{VContainer:b["a"]});a("d81d");var re,le=a("ade3"),ie=a("2909"),se="setQuantity",ce="setDate",ue="setTime",de="setTimeOptions",me="updateTimeOptions",fe="setCustomerForm",be="setConfirmationPage",ve="setSalutation",pe="setFirstname",je="setLastname",he="setTelephone",ge="setEmail",ye="setComment";n["a"].use(E["a"]);var ke={quantity:"2",startDate:Ce(),date:Ce(),time:xe(De(Ce())),timeOptions:De(Ce()),customerForm:!1,confirmationPage:!1,salutation:"Herr",firstname:"",lastname:"",telephone:"",email:"",comment:""},we=(re={},Object(le["a"])(re,se,(function(e,t){e.quantity=t})),Object(le["a"])(re,ce,(function(e,t){e.date=t})),Object(le["a"])(re,ue,(function(e,t){e.time=t})),Object(le["a"])(re,de,(function(e){var t=S()(e.date).day(),a={};switch(t){case 6:e.timeOptions=Object(ie["a"])($["a"].saturday),a=$["a"].saturday[0],_e(e,a),e.time=a.value;break;case 0:e.timeOptions=Object(ie["a"])($["a"].sunday),a=$["a"].sunday[0],_e(e,a),e.time=a.value;break;default:e.timeOptions=Object(ie["a"])($["a"].default),a=$["a"].default[0],_e(e,a),e.time=a.value;break}})),Object(le["a"])(re,me,(function(e,t){e.timeOptions.map((function(e){e.value===t.value?(e.color=$["b"],e.outlined=!1):(e.color=$["e"],e.outlined=!0)}))})),Object(le["a"])(re,fe,(function(e,t){e.customerForm=t})),Object(le["a"])(re,be,(function(e,t){e.confirmationPage=t})),Object(le["a"])(re,ve,(function(e,t){e.salutation=t})),Object(le["a"])(re,pe,(function(e,t){e.firstname=t})),Object(le["a"])(re,je,(function(e,t){e.lastname=t})),Object(le["a"])(re,he,(function(e,t){e.telephone=t})),Object(le["a"])(re,ge,(function(e,t){e.email=t})),Object(le["a"])(re,ye,(function(e,t){e.comment=t})),re),Oe={setQuantityAction:function(e,t){var a=e.commit;a(se,t)},setDateAction:function(e,t){var a=e.commit;a(ce,t)},setTimeAction:function(e,t){var a=e.commit;a(ue,t)},setTimeOptionsAction:function(e){var t=e.commit;t(de)},updateTimeOptionsAction:function(e,t){var a=e.commit;a(me,t)},setCustomerFormAction:function(e,t){var a=e.commit;a(fe,t)},setConfirmationPageAction:function(e,t){var a=e.commit;a(be,t)},setSalutationAction:function(e,t){var a=e.commit;a(ve,t)},setFirstnameAction:function(e,t){var a=e.commit;a(pe,t)},setLastnameAction:function(e,t){var a=e.commit;a(je,t)},setTelephoneAction:function(e,t){var a=e.commit;a(he,t)},setEmailAction:function(e,t){var a=e.commit;a(ge,t)},setCommentAction:function(e,t){var a=e.commit;a(ye,t)}},Ae={getEndDate:function(e){return S()(e.startDate).add(3,"M").format($["d"])},getDateFormatted:function(e){return S()(e.date).format("DD.MM.YYYY")}};function _e(e,t){e.timeOptions.map((function(e){e.value===t.value?(e.color=$["b"],e.outlined=!1):(e.color=$["e"],e.outlined=!0)}))}function Ce(){var e=S()().add(1,"d").format($["d"]),t=S()(e).day();return 1===t&&(e=S()(e).add(1,"d").format($["d"])),e}function xe(e){return e[0].value}function De(e){var t=[],a=S()(e).day();switch(a){case 6:t=$["a"].saturday;break;case 0:t=$["a"].sunday;break;default:t=$["a"].default;break}return t}var Ve=new E["a"].Store({strict:!1,state:ke,mutations:we,actions:Oe,getters:Ae});n["a"].use(D["a"]);var ze=[{path:"/",name:"Home",component:oe},{path:"/reservation",name:"Reservation",component:function(){return a.e("chunk-b91d8136").then(a.bind(null,"2b83"))},beforeEnter:function(e,t,a){Ve.state.customerForm?a():a({name:"Home"})}},{path:"/confirmation",name:"Confirmation",component:function(){return a.e("chunk-2d0b8eae").then(a.bind(null,"3171"))},beforeEnter:function(e,t,a){Ve.state.confirmationPage?a():a({name:"Home"})}},{path:"/impressum",name:"Impressum",component:function(){return a.e("about").then(a.bind(null,"761a"))}}],Fe=new D["a"]({routes:ze}),Te=Fe,Pe=a("760d");n["a"].use(Pe["VueReCaptcha"],{siteKey:"6LdeAL0ZAAAAAPYs19LzoQfdhOPlaChbSXRZKghl",loaderOptions:{autoHideBadge:!0}}),n["a"].config.productionTip=!1,new n["a"]({vuetify:x,router:Te,store:Ve,render:function(e){return e(_)}}).$mount("#app")},"6df8":function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return o})),a.d(t,"e",(function(){return r})),a.d(t,"d",(function(){return l})),a.d(t,"a",(function(){return s})),a.d(t,"f",(function(){return i}));var n="light-green darken-2",o="light-green darken-1",r="grey darken-1",l="YYYY-MM-DD",i=[{text:"1",value:"1"},{text:"2",value:"2"},{text:"3",value:"3"},{text:"4",value:"4"},{text:"5",value:"5"},{text:"6",value:"6"},{text:"7",value:"7"},{text:"8",value:"8"},{text:"mehr",value:"more"}],s={saturday:[{label:"16:00",value:"16:00",outlined:!1,color:o},{label:"16:30",value:"16:30",outlined:!0,color:r},{label:"17:00",value:"17:00",outlined:!0,color:r},{label:"17:30",value:"17:30",outlined:!0,color:r},{label:"18:00",value:"18:00",outlined:!0,color:r},{label:"18:30",value:"18:30",outlined:!0,color:r},{label:"19:00",value:"19:00",outlined:!0,color:r},{label:"19:30",value:"19:30",outlined:!0,color:r},{label:"20:00",value:"20:00",outlined:!0,color:r},{label:"20:30",value:"20:30",outlined:!0,color:r},{label:"21:00",value:"21:00",outlined:!0,color:r},{label:"21:30",value:"21:30",outlined:!0,color:r},{label:"22:00",value:"22:00",outlined:!0,color:r}],sunday:[{label:"12:00",value:"12:00",outlined:!1,color:o},{label:"12:30",value:"12:30",outlined:!0,color:r},{label:"13:00",value:"13:00",outlined:!0,color:r},{label:"13:30",value:"13:30",outlined:!0,color:r},{label:"14:00",value:"14:00",outlined:!0,color:r},{label:"14:30",value:"14:30",outlined:!0,color:r},{label:"15:00",value:"15:00",outlined:!0,color:r},{label:"15:30",value:"15:30",outlined:!0,color:r},{label:"16:00",value:"16:00",outlined:!0,color:r},{label:"16:30",value:"16:30",outlined:!0,color:r},{label:"17:00",value:"17:00",outlined:!0,color:r},{label:"17:30",value:"17:30",outlined:!0,color:r},{label:"18:00",value:"18:00",outlined:!0,color:r},{label:"18:30",value:"18:30",outlined:!0,color:r},{label:"19:00",value:"19:00",outlined:!0,color:r},{label:"19:30",value:"19:30",outlined:!0,color:r},{label:"20:00",value:"20:00",outlined:!0,color:r},{label:"20:30",value:"20:30",outlined:!0,color:r},{label:"21:00",value:"21:00",outlined:!0,color:r},{label:"21:30",value:"21:30",outlined:!0,color:r},{label:"22:00",value:"22:00",outlined:!0,color:r}],default:[{label:"17:00",value:"17:00",outlined:!0,color:o},{label:"17:30",value:"17:30",outlined:!0,color:r},{label:"18:00",value:"18:00",outlined:!0,color:r},{label:"18:30",value:"18:30",outlined:!0,color:r},{label:"19:00",value:"19:00",outlined:!0,color:r},{label:"19:30",value:"19:30",outlined:!0,color:r},{label:"20:00",value:"20:00",outlined:!0,color:r},{label:"20:30",value:"20:30",outlined:!0,color:r},{label:"21:00",value:"21:00",outlined:!0,color:r},{label:"21:30",value:"21:30",outlined:!0,color:r},{label:"22:00",value:"22:00",outlined:!0,color:r}]}},9457:function(e,t,a){}});
//# sourceMappingURL=app.0901d368.js.map