(function(e){function t(t){for(var a,n,r=t[0],c=t[1],s=t[2],u=0,d=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&d.push(l[n][0]),l[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);v&&v(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],a=!0,n=1;n<o.length;n++){var r=o[n];0!==l[r]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=o[0]))}return e}var a={},n={app:0},l={app:0},i=[];function r(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9f2ac5e1","chunk-7f841b34":"338f47c3","chunk-b91d8136":"a21b1149"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var t=[],o={"chunk-b91d8136":1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=new Promise((function(t,o){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-7f841b34":"31d6cfe0","chunk-b91d8136":"9a9cc1b2"}[e]+".css",l=c.p+a,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var s=i[r],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===a||u===l))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){s=d[r],u=s.getAttribute("data-href");if(u===a||u===l)return t()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=t,v.onerror=function(t){var a=t&&t.target&&t.target.src||l,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete n[e],v.parentNode.removeChild(v),o(i)},v.href=l;var b=document.getElementsByTagName("head")[0];b.appendChild(v)})).then((function(){n[e]=0})));var a=l[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,o){a=l[e]=[t,o]}));t.push(a[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(e);var d=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(v);var o=l[e];if(0!==o){if(o){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,o[1](d)}l[e]=void 0}};var v=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(o,a,function(t){return e[t]}.bind(null,a));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var v=u;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},4678:function(e,t,o){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=l(e);return o(t)}function l(e){if(!o.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=l,e.exports=n,n.id="4678"},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[o("v-list",{attrs:{dense:""}},[o("v-list-item",{attrs:{link:"",to:"/"}},[o("v-list-item-action",[o("v-icon",[e._v("mdi-home")])],1),o("v-list-item-content",[o("v-list-item-title",[e._v("Home")])],1)],1),o("v-list-item",{attrs:{link:"",to:"/impressum"}},[o("v-list-item-action",[o("v-icon",[e._v("mdi-bookshelf")])],1),o("v-list-item-content",[o("v-list-item-title",[e._v("Impressum")])],1)],1)],1)],1),o("v-app-bar",{attrs:{app:"",color:"light-green darken-2",dark:""}},[o("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),o("v-toolbar-title",{attrs:{link:"",to:"/"}},[e._v("Porto Elia - Reservierung")])],1),o("v-main",[o("v-container",{attrs:{fluid:""}},[o("router-view")],1)],1),o("v-footer",{attrs:{absolute:"",color:e.brandColor,app:""}},[o("span",{staticClass:"white--text"},[e._v("© "+e._s((new Date).getFullYear()))])])],1)},l=[],i={data:function(){return{drawer:null,brandColor:"light-green darken-2"}}},r=i,c=o("2877"),s=o("6544"),u=o.n(s),d=o("7496"),v=o("40dc"),b=o("5bc1"),m=o("a523"),f=o("553a"),A=o("132d"),E=o("8860"),p=o("da13"),T=o("1800"),j=o("5d23"),h=o("f6c4"),R=o("f774"),N=o("2a7f"),g=Object(c["a"])(r,n,l,!1,null,null,null),V=g.exports;u()(g,{VApp:d["a"],VAppBar:v["a"],VAppBarNavIcon:b["a"],VContainer:m["a"],VFooter:f["a"],VIcon:A["a"],VList:E["a"],VListItem:p["a"],VListItemAction:T["a"],VListItemContent:j["a"],VListItemTitle:j["c"],VMain:h["a"],VNavigationDrawer:R["a"],VToolbarTitle:N["a"]});var k=o("f309");a["a"].use(k["a"]);var y=new k["a"]({}),w=(o("d3b7"),o("8c4f")),O=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("ReservationForm")],1)},_=[],S=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("CoronaInfo",{directives:[{name:"show",rawName:"v-show",value:e.corona,expression:"corona"}]}),o("v-row",{directives:[{name:"show",rawName:"v-show",value:!e.corona,expression:"!corona"}]},[o("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[o("div",[o("v-icon",[e._v("mdi-map-marker-radius")]),o("span",{staticClass:"clock"},[e._v("Restaurant auswählen")])],1),o("v-container",[o("v-row",{attrs:{dense:""}},[o("v-col",{attrs:{cols:"12"}},[o("v-card",{attrs:{color:"RESTAURANT"===this.location?e.brandColor:e.defaultColor,dark:"RESTAURANT"===this.location},on:{click:function(t){return e.setLocation("RESTAURANT")}}},[o("div",[o("v-list-item",{attrs:{"three-line":""}},[o("v-list-item-content",[o("div",{staticClass:"text-overline mb-4"},[e._v("Restaurant")]),o("v-list-item-title",{staticClass:"text-h6 mb-1"},[e._v(" Porto Elia "),o("span",["RESTAURANT"===this.location?o("v-icon",{attrs:{"x-large":""}},[e._v(" mdi-check ")]):e._e()],1)]),o("v-list-item-subtitle",[e._v(e._s(e.locations[0].address))])],1)],1)],1)]),o("br"),o("v-card",{attrs:{color:"TAVERNE"===this.location?e.brandColor:e.defaultColor,dark:"TAVERNE"===this.location},on:{click:function(t){return e.setLocation("TAVERNE")}}},[o("div",[o("v-list-item",{attrs:{"three-line":""}},[o("v-list-item-content",[o("div",{staticClass:"text-overline mb-4"},[e._v(" Taverne "),o("span",[o("v-chip",{staticClass:"ma-2",attrs:{color:"amber","text-color":"white"}},[o("i",[e._v("++ NEU ++")])])],1)]),o("v-list-item-title",{staticClass:"text-h6 mb-1"},[e._v(" Porto Elia "),o("span",{staticClass:"text-subtitle-1"},[e._v(" - "+e._s(e.locations[1].title))]),o("span",["TAVERNE"===this.location?o("v-icon",{attrs:{"x-large":""}},[e._v(" mdi-check ")]):e._e()],1)]),o("v-list-item-subtitle",[e._v(e._s(e.locations[1].address))]),o("br"),o("v-alert",{attrs:{dense:"",type:"info"}},[e._v(" Reservierungen ab "),o("strong",[e._v("Freitag 31.03.2023")]),e._v(" möglich ")])],1)],1)],1)])],1)],1)],1)],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[o("v-select",{attrs:{label:"Anzahl der Personen auswählen",items:e.quantityOptions,value:e.quantity,"item-color":e.brandColor,color:e.brandColor,"prepend-icon":"mdi-account-multiple"},on:{input:e.setQuantity}}),e.computedHideForm?e._e():o("v-alert",{attrs:{text:"",dense:"",color:"teal",icon:"mdi-phone",border:"left"}},[e._v(" Bei Reservierungen über 8 Personen kontaktieren Sie uns bitte telefonisch oder per WhatsApp unter der Nummer "),o("a",{staticClass:"font-weight-bold",attrs:{href:"tel:+491785272501"}},[e._v("+491785272501")])])],1),e.computedHideForm?o("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[o("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.date,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,n=t.attrs;return[o("v-text-field",e._g(e._b({attrs:{label:"Datum auswählen",color:e.brandColor,"prepend-icon":"mdi-calendar",readonly:""},model:{value:e.getDateFormatted,callback:function(t){e.getDateFormatted=t},expression:"getDateFormatted"}},"v-text-field",n,!1),a))]}}],null,!1,2414343229),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[o("v-date-picker",{attrs:{min:e.startDate,max:e.getEndDate,"allowed-dates":e.allowedDates,color:e.brandColor,"first-day-of-week":"1",locale:"de-de","no-title":""},on:{click:function(t){e.menu=!1},input:function(t){return e.$refs.menu.save(e.date)}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1):e._e(),e.computedHideForm?o("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[o("div",[o("v-icon",[e._v("mdi-clock")]),o("span",{staticClass:"clock"},[e._v("Uhrzeit auswählen: "+e._s(e.time))])],1),o("div",{staticClass:"text-center"},e._l(e.timeOptions,(function(t,a){return o("span",{key:a},[o("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.location===e.location,expression:"timeOption.location === location"}],staticClass:"time-btn",attrs:{color:t.color,outlined:t.outlined,dark:"",rounded:""},on:{click:function(o){return e.updateTime(t)}}},[e._v(e._s(t.label))])],1)})),0)]):e._e()],1),e.computedHideForm?o("v-row",{directives:[{name:"show",rawName:"v-show",value:!e.corona,expression:"!corona"}]},[o("v-col",{attrs:{align:"center"}},[o("v-btn",{attrs:{color:e.brandColor,"x-large":"",dark:""},on:{click:function(t){return e.customerPage()}}},[e._v(" Weiter "),o("v-icon",{attrs:{right:""}},[e._v("mdi-arrow-right")])],1)],1)],1):e._e()],1)},C=[],x=o("5530"),U=o("2f62"),D=o("c1df"),F=o.n(D),z=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-row",{attrs:{align:"center"}},[o("v-col",{staticClass:"grow"},[o("v-alert",{attrs:{prominent:"",type:"info"}},[o("h2",[e._v("Information")]),o("span",[e._v(" Aufgrund der "),o("a",{staticClass:"grey--text text--lighten-5 font-weight-bold",attrs:{href:"https://www.baden-wuerttemberg.de/de/service/aktuelle-infos-zu-corona/aktuelle-corona-verordnung-des-landes-baden-wuerttemberg/"}},[e._v("Corona Verordnung Baden-Württemberg")]),e._v(" sind Reservierungen derzeit nicht möglich. ")])])],1)],1)},L=[],P=o("0798"),I=o("62ad"),M=o("0fd9"),H={},q=Object(c["a"])(H,z,L,!1,null,null,null),Y=q.exports;u()(q,{VAlert:P["a"],VCol:I["a"],VRow:M["a"]});var B=o("6df8"),$={name:"ReservationForm",components:{CoronaInfo:Y},data:function(){return{timeColor:"grey",timeOutlined:!0,brandColor:B["c"],defaultColor:"white",locations:B["f"],quantityOptions:B["g"],menu:!1,availableDates:[],corona:!1}},methods:Object(x["a"])(Object(x["a"])({},Object(U["b"])(["setLocationAction","setQuantityAction","setDateAction","setTimeAction","setTimeOptionsAction","updateTimeOptionsAction","setCustomerFormAction"])),{},{setLocation:function(e){this.setLocationAction(e)},setQuantity:function(e){this.setQuantityAction(e),"more"===this.quantity&&this.setCustomerFormAction(!1)},allowedDates:function(e){return"RESTAURANT"===this.location?1!==F()(e).day()?F()(e).format("D"):0:F()(e).format("D")},updateTime:function(e){this.setTimeAction(e.value),this.updateTimeOptionsAction(e)},customerPage:function(){this.setCustomerFormAction(!0),this.$router.push({name:"Reservation"})}}),computed:Object(x["a"])(Object(x["a"])(Object(x["a"])({},Object(U["d"])(["location","quantity","startDate","time","timeOptions","customerForm"])),Object(U["c"])(["getDateFormatted","getEndDate"])),{},{date:{get:function(){return this.$store.state.date},set:function(e){this.$store.state.date!==e&&(this.setDateAction(e),this.setTimeOptionsAction())}},computedHideForm:function(){return"more"!==this.quantity}})},Q=$,K=(o("9838"),o("8336")),W=o("b0af"),J=o("cc20"),Z=o("2e4b"),G=o("e449"),X=o("b974"),ee=o("8654"),te=Object(c["a"])(Q,S,C,!1,null,"681c37a4",null),oe=te.exports;u()(te,{VAlert:P["a"],VBtn:K["a"],VCard:W["a"],VChip:J["a"],VCol:I["a"],VContainer:m["a"],VDatePicker:Z["a"],VIcon:A["a"],VListItem:p["a"],VListItemContent:j["a"],VListItemSubtitle:j["b"],VListItemTitle:j["c"],VMenu:G["a"],VRow:M["a"],VSelect:X["a"],VTextField:ee["a"]});var ae={name:"Home",components:{ReservationForm:oe}},ne=ae,le=Object(c["a"])(ne,O,_,!1,null,null,null),ie=le.exports;u()(le,{VContainer:m["a"]});o("d81d");var re,ce=o("ade3"),se=o("2909"),ue="setLocation",de="setQuantity",ve="setDate",be="setTime",me="setTimeOptions",fe="updateTimeOptions",Ae="setCustomerForm",Ee="setConfirmationPage",pe="setSalutation",Te="setFirstname",je="setLastname",he="setTelephone",Re="setEmail",Ne="setComment";a["a"].use(U["a"]);var ge={location:"RESTAURANT",quantity:"2",startDate:Oe(),date:Oe(),time:_e(Se(Oe())),timeOptions:Se(Oe()),customerForm:!1,confirmationPage:!1,salutation:"Herr",firstname:"",lastname:"",telephone:"",email:"",comment:""},Ve=(re={},Object(ce["a"])(re,ue,(function(e,t){e.location=t})),Object(ce["a"])(re,de,(function(e,t){e.quantity=t})),Object(ce["a"])(re,ve,(function(e,t){e.date=t})),Object(ce["a"])(re,be,(function(e,t){e.time=t})),Object(ce["a"])(re,me,(function(e){var t=F()(e.date).day(),o={};switch(t){case 6:e.timeOptions=Object(se["a"])(B["a"].saturday),o=B["a"].saturday[0],we(e,o),e.time=o.value;break;case 0:e.timeOptions=Object(se["a"])(B["a"].sunday),o=B["a"].sunday[0],we(e,o),e.time=o.value;break;default:e.timeOptions=Object(se["a"])(B["a"].default),o=B["a"].default[0],we(e,o),e.time=o.value;break}})),Object(ce["a"])(re,fe,(function(e,t){e.timeOptions.map((function(e){e.value===t.value?(e.color=B["b"],e.outlined=!1):(e.color=B["e"],e.outlined=!0)}))})),Object(ce["a"])(re,Ae,(function(e,t){e.customerForm=t})),Object(ce["a"])(re,Ee,(function(e,t){e.confirmationPage=t})),Object(ce["a"])(re,pe,(function(e,t){e.salutation=t})),Object(ce["a"])(re,Te,(function(e,t){e.firstname=t})),Object(ce["a"])(re,je,(function(e,t){e.lastname=t})),Object(ce["a"])(re,he,(function(e,t){e.telephone=t})),Object(ce["a"])(re,Re,(function(e,t){e.email=t})),Object(ce["a"])(re,Ne,(function(e,t){e.comment=t})),re),ke={setLocationAction:function(e,t){var o=e.commit;o(ue,t)},setQuantityAction:function(e,t){var o=e.commit;o(de,t)},setDateAction:function(e,t){var o=e.commit;o(ve,t)},setTimeAction:function(e,t){var o=e.commit;o(be,t)},setTimeOptionsAction:function(e){var t=e.commit;t(me)},updateTimeOptionsAction:function(e,t){var o=e.commit;o(fe,t)},setCustomerFormAction:function(e,t){var o=e.commit;o(Ae,t)},setConfirmationPageAction:function(e,t){var o=e.commit;o(Ee,t)},setSalutationAction:function(e,t){var o=e.commit;o(pe,t)},setFirstnameAction:function(e,t){var o=e.commit;o(Te,t)},setLastnameAction:function(e,t){var o=e.commit;o(je,t)},setTelephoneAction:function(e,t){var o=e.commit;o(he,t)},setEmailAction:function(e,t){var o=e.commit;o(Re,t)},setCommentAction:function(e,t){var o=e.commit;o(Ne,t)}},ye={getEndDate:function(e){return F()(e.startDate).add(3,"M").format(B["d"])},getDateFormatted:function(e){return F()(e.date).format("DD.MM.YYYY")}};function we(e,t){e.timeOptions.map((function(e){e.value===t.value?(e.color=B["b"],e.outlined=!1):(e.color=B["e"],e.outlined=!0)}))}function Oe(){var e=F()().add(1,"d").format(B["d"]),t=F()(e).day();return 1===t&&(e=F()(e).add(1,"d").format(B["d"])),e}function _e(e){return e[0].value}function Se(e){var t=[],o=F()(e).day();switch(o){case 6:t=B["a"].saturday;break;case 0:t=B["a"].sunday;break;default:t=B["a"].default;break}return t}var Ce=new U["a"].Store({strict:!1,state:ge,mutations:Ve,actions:ke,getters:ye});a["a"].use(w["a"]);var xe=[{path:"/",name:"Home",component:ie},{path:"/reservation",name:"Reservation",component:function(){return o.e("chunk-b91d8136").then(o.bind(null,"2b83"))},beforeEnter:function(e,t,o){Ce.state.customerForm?o():o({name:"Home"})}},{path:"/confirmation",name:"Confirmation",component:function(){return o.e("chunk-7f841b34").then(o.bind(null,"3171"))},beforeEnter:function(e,t,o){Ce.state.confirmationPage?o():o({name:"Home"})}},{path:"/impressum",name:"Impressum",component:function(){return o.e("about").then(o.bind(null,"761a"))}}],Ue=new w["a"]({routes:xe}),De=Ue,Fe=o("760d");a["a"].use(Fe["VueReCaptcha"],{siteKey:"6LdeAL0ZAAAAAPYs19LzoQfdhOPlaChbSXRZKghl",loaderOptions:{autoHideBadge:!0}}),a["a"].config.productionTip=!1,new a["a"]({vuetify:y,router:De,store:Ce,render:function(e){return e(V)}}).$mount("#app")},"6df8":function(e,t,o){"use strict";o.d(t,"c",(function(){return a})),o.d(t,"b",(function(){return n})),o.d(t,"e",(function(){return l})),o.d(t,"d",(function(){return i})),o.d(t,"a",(function(){return s})),o.d(t,"g",(function(){return c})),o.d(t,"f",(function(){return r}));var a="light-green darken-2",n="light-green darken-1",l="grey darken-1",i="YYYY-MM-DD",r=[{title:"Mediterrane Küche",address:"Obere Waiblingerstr. 153, 70374 Stuttgart",value:"RESTAURANT"},{title:"Meat & Greek",address:"Deckerstr. 51, 70372 Stuttgart",value:"TAVERNE"}],c=[{text:"1",value:"1"},{text:"2",value:"2"},{text:"3",value:"3"},{text:"4",value:"4"},{text:"5",value:"5"},{text:"6",value:"6"},{text:"7",value:"7"},{text:"8",value:"8"},{text:"mehr",value:"more"}],s={saturday:[{label:"17:00",value:"17:00",outlined:!1,color:n,location:"RESTAURANT"},{label:"17:30",value:"17:30",outlined:!0,color:l,location:"RESTAURANT"},{label:"18:00",value:"18:00",outlined:!0,color:l,location:"RESTAURANT"},{label:"18:30",value:"18:30",outlined:!0,color:l,location:"RESTAURANT"},{label:"19:00",value:"19:00",outlined:!0,color:l,location:"RESTAURANT"},{label:"19:30",value:"19:30",outlined:!0,color:l,location:"RESTAURANT"},{label:"20:00",value:"20:00",outlined:!0,color:l,location:"RESTAURANT"},{label:"20:30",value:"20:30",outlined:!0,color:l,location:"RESTAURANT"},{label:"21:00",value:"21:00",outlined:!0,color:l,location:"RESTAURANT"},{label:"11:30",value:"11:30",outlined:!1,color:n,location:"TAVERNE"},{label:"12:00",value:"12:00",outlined:!0,color:l,location:"TAVERNE"},{label:"12:30",value:"12:30",outlined:!0,color:l,location:"TAVERNE"},{label:"13:00",value:"13:00",outlined:!0,color:l,location:"TAVERNE"},{label:"13:30",value:"13:30",outlined:!0,color:l,location:"TAVERNE"},{label:"14:00",value:"14:00",outlined:!0,color:l,location:"TAVERNE"},{label:"14:30",value:"14:30",outlined:!0,color:l,location:"TAVERNE"},{label:"15:00",value:"15:00",outlined:!0,color:l,location:"TAVERNE"},{label:"15:30",value:"15:30",outlined:!0,color:l,location:"TAVERNE"},{label:"16:00",value:"16:00",outlined:!0,color:l,location:"TAVERNE"},{label:"16:30",value:"16:30",outlined:!0,color:l,location:"TAVERNE"},{label:"17:00",value:"17:00",outlined:!0,color:l,location:"TAVERNE"},{label:"17:30",value:"17:30",outlined:!0,color:l,location:"TAVERNE"},{label:"18:00",value:"18:00",outlined:!0,color:l,location:"TAVERNE"},{label:"18:30",value:"18:30",outlined:!0,color:l,location:"TAVERNE"},{label:"19:00",value:"19:00",outlined:!0,color:l,location:"TAVERNE"},{label:"19:30",value:"19:30",outlined:!0,color:l,location:"TAVERNE"},{label:"20:00",value:"20:00",outlined:!0,color:l,location:"TAVERNE"},{label:"20:30",value:"20:30",outlined:!0,color:l,location:"TAVERNE"},{label:"21:00",value:"21:00",outlined:!0,color:l,location:"TAVERNE"}],sunday:[{label:"12:00",value:"12:00",outlined:!1,color:n,location:"RESTAURANT"},{label:"12:30",value:"12:30",outlined:!0,color:l,location:"RESTAURANT"},{label:"13:00",value:"13:00",outlined:!0,color:l,location:"RESTAURANT"},{label:"13:30",value:"13:30",outlined:!0,color:l,location:"RESTAURANT"},{label:"14:00",value:"14:00",outlined:!0,color:l,location:"RESTAURANT"},{label:"14:30",value:"14:30",outlined:!0,color:l,location:"RESTAURANT"},{label:"15:00",value:"15:00",outlined:!0,color:l,location:"RESTAURANT"},{label:"15:30",value:"15:30",outlined:!0,color:l,location:"RESTAURANT"},{label:"16:00",value:"16:00",outlined:!0,color:l,location:"RESTAURANT"},{label:"16:30",value:"16:30",outlined:!0,color:l,location:"RESTAURANT"},{label:"17:00",value:"17:00",outlined:!0,color:l,location:"RESTAURANT"},{label:"17:30",value:"17:30",outlined:!0,color:l,location:"RESTAURANT"},{label:"18:00",value:"18:00",outlined:!0,color:l,location:"RESTAURANT"},{label:"18:30",value:"18:30",outlined:!0,color:l,location:"RESTAURANT"},{label:"19:00",value:"19:00",outlined:!0,color:l,location:"RESTAURANT"},{label:"19:30",value:"19:30",outlined:!0,color:l,location:"RESTAURANT"},{label:"20:00",value:"20:00",outlined:!0,color:l,location:"RESTAURANT"},{label:"20:30",value:"20:30",outlined:!0,color:l,location:"RESTAURANT"},{label:"21:00",value:"21:00",outlined:!0,color:l,location:"RESTAURANT"},{label:"11:30",value:"11:30",outlined:!1,color:n,location:"TAVERNE"},{label:"12:00",value:"12:00",outlined:!0,color:l,location:"TAVERNE"},{label:"12:30",value:"12:30",outlined:!0,color:l,location:"TAVERNE"},{label:"13:00",value:"13:00",outlined:!0,color:l,location:"TAVERNE"},{label:"13:30",value:"13:30",outlined:!0,color:l,location:"TAVERNE"},{label:"14:00",value:"14:00",outlined:!0,color:l,location:"TAVERNE"},{label:"14:30",value:"14:30",outlined:!0,color:l,location:"TAVERNE"},{label:"15:00",value:"15:00",outlined:!0,color:l,location:"TAVERNE"},{label:"15:30",value:"15:30",outlined:!0,color:l,location:"TAVERNE"},{label:"16:00",value:"16:00",outlined:!0,color:l,location:"TAVERNE"},{label:"16:30",value:"16:30",outlined:!0,color:l,location:"TAVERNE"},{label:"17:00",value:"17:00",outlined:!0,color:l,location:"TAVERNE"},{label:"17:30",value:"17:30",outlined:!0,color:l,location:"TAVERNE"},{label:"18:00",value:"18:00",outlined:!0,color:l,location:"TAVERNE"},{label:"18:30",value:"18:30",outlined:!0,color:l,location:"TAVERNE"},{label:"19:00",value:"19:00",outlined:!0,color:l,location:"TAVERNE"},{label:"19:30",value:"19:30",outlined:!0,color:l,location:"TAVERNE"},{label:"20:00",value:"20:00",outlined:!0,color:l,location:"TAVERNE"},{label:"20:30",value:"20:30",outlined:!0,color:l,location:"TAVERNE"},{label:"21:00",value:"21:00",outlined:!0,color:l,location:"TAVERNE"}],default:[{label:"17:00",value:"17:00",outlined:!1,color:n,location:"RESTAURANT"},{label:"17:30",value:"17:30",outlined:!0,color:l,location:"RESTAURANT"},{label:"18:00",value:"18:00",outlined:!0,color:l,location:"RESTAURANT"},{label:"18:30",value:"18:30",outlined:!0,color:l,location:"RESTAURANT"},{label:"19:00",value:"19:00",outlined:!0,color:l,location:"RESTAURANT"},{label:"19:30",value:"19:30",outlined:!0,color:l,location:"RESTAURANT"},{label:"20:00",value:"20:00",outlined:!0,color:l,location:"RESTAURANT"},{label:"20:30",value:"20:30",outlined:!0,color:l,location:"RESTAURANT"},{label:"21:00",value:"21:00",outlined:!0,color:l,location:"RESTAURANT"},{label:"11:30",value:"11:30",outlined:!1,color:n,location:"TAVERNE"},{label:"12:00",value:"12:00",outlined:!0,color:l,location:"TAVERNE"},{label:"12:30",value:"12:30",outlined:!0,color:l,location:"TAVERNE"},{label:"13:00",value:"13:00",outlined:!0,color:l,location:"TAVERNE"},{label:"13:30",value:"13:30",outlined:!0,color:l,location:"TAVERNE"},{label:"14:00",value:"14:00",outlined:!0,color:l,location:"TAVERNE"},{label:"14:30",value:"14:30",outlined:!0,color:l,location:"TAVERNE"},{label:"15:00",value:"15:00",outlined:!0,color:l,location:"TAVERNE"},{label:"15:30",value:"15:30",outlined:!0,color:l,location:"TAVERNE"},{label:"16:00",value:"16:00",outlined:!0,color:l,location:"TAVERNE"},{label:"16:30",value:"16:30",outlined:!0,color:l,location:"TAVERNE"},{label:"17:00",value:"17:00",outlined:!0,color:l,location:"TAVERNE"},{label:"17:30",value:"17:30",outlined:!0,color:l,location:"TAVERNE"},{label:"18:00",value:"18:00",outlined:!0,color:l,location:"TAVERNE"},{label:"18:30",value:"18:30",outlined:!0,color:l,location:"TAVERNE"},{label:"19:00",value:"19:00",outlined:!0,color:l,location:"TAVERNE"},{label:"19:30",value:"19:30",outlined:!0,color:l,location:"TAVERNE"},{label:"20:00",value:"20:00",outlined:!0,color:l,location:"TAVERNE"},{label:"20:30",value:"20:30",outlined:!0,color:l,location:"TAVERNE"},{label:"21:00",value:"21:00",outlined:!0,color:l,location:"TAVERNE"}]}},9838:function(e,t,o){"use strict";var a=o("df19"),n=o.n(a);n.a},df19:function(e,t,o){}});
//# sourceMappingURL=app.bcd3c6cd.js.map