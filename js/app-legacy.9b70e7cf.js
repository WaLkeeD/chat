(function(){"use strict";var e={5488:function(e,n,s){s(6992),s(8674),s(9601),s(7727);var t=s(5010),o=s(3396),a={class:"messages"},i={class:"messages__window"},r={class:"messages__window"};function u(e,n,s,t,u,c){var l=(0,o.up)("Header"),d=(0,o.up)("Main"),m=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",i,[(0,o.Wm)(l,{src:"alex",name:"Александр",status:"Онлайн"}),(0,o.Wm)(d,{sendId:2,message:u.message},null,8,["message"]),(0,o.Wm)(m,{sendId:2,onNewMess:c.newMess},null,8,["onNewMess"])]),(0,o._)("div",r,[(0,o.Wm)(l,{src:"jane",name:"Евгений",status:"Онлайн"}),(0,o.Wm)(d,{sendId:1,message:u.message},null,8,["message"]),(0,o.Wm)(m,{sendId:1,onNewMess:c.newMess},null,8,["onNewMess"])])])}s(7658),s(8862),s(8309);var c=s(7139),l={class:"messages__window-header"},d=["src"],m={class:"messages__window-info"},f={class:"messages__window-name"},w={class:"messages__window-status"};function g(e,n,s,t,a,i){return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("img",{src:a.ava[s.src],alt:"",class:"messages__window-avatar"},null,8,d),(0,o._)("div",m,[(0,o._)("h2",f,(0,c.zw)(s.name),1),(0,o._)("p",w,(0,c.zw)(s.status),1)])])}var p={props:["src","name","status"],data:function(){return{ava:{alex:s(38),jane:s(8699)}}}},_=s(89);const h=(0,_.Z)(p,[["render",g]]);var v=h,b={class:"main"},y={class:"main__chatitem-time"},M={class:"main__chatitem-text"},k=["src"];function D(e,n,s,a,i,r){return(0,o.wg)(),(0,o.iD)("main",b,[(0,o.Wm)(t.W3,{name:"list"},{default:(0,o.w5)((function(){return[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.message,(function(e,n){var t;return(0,o.wg)(),(0,o.iD)("div",{class:"main__chatitem",key:n},[(0,o._)("div",{class:(0,c.C_)(["main__chatitem-body",{send:e.sendId==s.sendId,get:e.sendId!=s.sendId}])},[(0,o._)("span",y,(0,c.zw)(e.time),1),(0,o._)("div",M,[(null===(t=e.photo)||void 0===t?void 0:t.length)>0?((0,o.wg)(),(0,o.iD)("img",{key:0,src:e.photo,alt:""},null,8,k)):(0,o.kq)("",!0),(0,o._)("p",null,(0,c.zw)(e.body),1)])],2)])})),128))]})),_:1})])}s(9653);var I={props:{message:Array,sendId:Number}};const x=(0,_.Z)(I,[["render",D]]);var O=x,C=s.p+"img/photo-icon.b753f0f8.svg",j=s.p+"img/send-icon.e8776971.svg",W={class:"footer"},N=(0,o._)("img",{src:C,alt:""},null,-1),P=[N],H=(0,o._)("img",{src:j,alt:""},null,-1),S=[H],z=(0,o._)("h2",{class:"window__title"},"Отправить картинку",-1),U={class:"window__form"},Z=(0,o._)("span",null,"URL",-1),F=(0,o._)("span",null,"Комментарий",-1),V={class:"window__footer"},q=["keyup"];function J(e,n,s,a,i,r){return(0,o.wg)(),(0,o.iD)("footer",W,[(0,o.wy)((0,o._)("textarea",{onKeyup:n[0]||(n[0]=(0,t.D2)((function(){return r.sendMess&&r.sendMess.apply(r,arguments)}),["enter"])),"onUpdate:modelValue":n[1]||(n[1]=function(e){return i.message=e}),class:"footer__edit",placeholder:"Написать сообщение...",rows:"1"},"\r\n      ",544),[[t.nr,i.message]]),0==i.message.length?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:n[2]||(n[2]=function(e){return i.window=!0}),class:"footer__btn"},P)):((0,o.wg)(),(0,o.iD)("button",{key:1,class:"footer__btn",onClick:n[3]||(n[3]=function(){return r.sendMess&&r.sendMess.apply(r,arguments)})},S)),i.window?((0,o.wg)(),(0,o.iD)("div",{key:2,class:"window",onClick:n[9]||(n[9]=function(e){return i.window=!1})},[(0,o._)("div",{class:"window__body",onClick:n[8]||(n[8]=(0,t.iM)((function(){}),["stop","prevent"]))},[z,(0,o._)("div",U,[(0,o._)("label",null,[Z,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":n[4]||(n[4]=function(e){return i.photo=e}),type:"text"},null,512),[[t.nr,i.photo]])]),(0,o._)("label",null,[F,(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":n[5]||(n[5]=function(e){return i.comment=e})},null,512),[[t.nr,i.comment]])])]),(0,o._)("div",V,[(0,o._)("button",{onClick:n[6]||(n[6]=function(e){return i.window=!1}),class:"btn"},"Отмена"),(0,o._)("button",{keyup:r.sendMessPhoto,onClick:n[7]||(n[7]=function(){return r.sendMessPhoto&&r.sendMessPhoto.apply(r,arguments)}),class:"btn"},"ОТПРАВИТЬ",8,q)])])])):(0,o.kq)("",!0)])}s(2222),s(3210);var K={props:["sendId"],data:function(){return{message:"",window:!1,photo:"",comment:""}},methods:{sendMess:function(){var e="".concat((new Date).getHours(),":").concat((new Date).getMinutes());if(this.message.length>0){var n={};n.body=this.message.trim(),n.sendId=this.sendId,n.time=e,this.$emit("newMess",n),this.message=""}},sendMessPhoto:function(){var e="".concat((new Date).getHours(),":").concat((new Date).getMinutes());if(this.photo.length>0){var n={};n.body=this.comment.trim(),n.sendId=this.sendId,n.photo=this.photo.trim(),n.time=e,this.$emit("newMess",n),this.comment=this.photo="",this.window=!1}}}};const T=(0,_.Z)(K,[["render",J]]);var $=T,A={components:{Header:v,Main:O,Footer:$},data:function(){return{message:[]}},methods:{newMess:function(e){this.message.push(e),localStorage.message=JSON.stringify(this.message)}},created:function(){var e=localStorage.message?JSON.parse(localStorage.message):[];this.message=e}};const E=(0,_.Z)(A,[["render",u]]);var L=E;(0,t.ri)(L).mount("#app")},38:function(e,n,s){e.exports=s.p+"img/alexandr.1b994f55.svg"},8699:function(e,n,s){e.exports=s.p+"img/eugene.4d2a191f.svg"}},n={};function s(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={exports:{}};return e[t](a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(n,t,o,a){if(!t){var i=1/0;for(l=0;l<e.length;l++){t=e[l][0],o=e[l][1],a=e[l][2];for(var r=!0,u=0;u<t.length;u++)(!1&a||i>=a)&&Object.keys(s.O).every((function(e){return s.O[e](t[u])}))?t.splice(u--,1):(r=!1,a<i&&(i=a));if(r){e.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[t,o,a]}}(),function(){s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,{a:n}),n}}(),function(){s.d=function(e,n){for(var t in n)s.o(n,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){s.p="/chat/"}(),function(){var e={143:0};s.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,a,i=t[0],r=t[1],u=t[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(o in r)s.o(r,o)&&(s.m[o]=r[o]);if(u)var l=u(s)}for(n&&n(t);c<i.length;c++)a=i[c],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(l)},t=self["webpackChunkchat"]=self["webpackChunkchat"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=s.O(void 0,[998],(function(){return s(5488)}));t=s.O(t)})();
//# sourceMappingURL=app-legacy.9b70e7cf.js.map