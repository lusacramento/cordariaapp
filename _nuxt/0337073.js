(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{484:function(o,t,e){var content=e(489);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(63).default)("ebf35360",content,!0,{sourceMap:!1})},485:function(o,t,e){"use strict";e.r(t);var r=e(486),n=e.n(r),c=e(487),l=e.n(c),d={props:{titleText:{type:String,default:function(){return""}},schema:{type:String,default:function(){return""}},leftLogo:Boolean,rightLogo:Boolean},data:function(){return{inboxColor:"",outboxColor:"",icon:{url:l.a,altText:"Inicie agora",enabled:n.a,disabled:l.a}}},mounted:function(){this.applySchema()},methods:{applySchema:function(){switch(this.schema){case"the-project":this.inboxColor="inbox-project",this.outboxColor="outbox-project";break;case"the-tutorial":this.inboxColor="inbox-tutorial",this.outboxColor="outbox-tutorial";break;case"the-research":this.inboxColor="inbox-research",this.outboxColor="outbox-research"}},imageMouseOver:function(img){return img.enabled},imageMouseLeave:function(img){return img.disabled}}},x=(e(488),e(64)),component=Object(x.a)(d,(function(){var o=this,t=o._self._c;return t("div",{staticClass:"box-title container-fluid d-flex justify-content-center mb-4"},[t("div",{staticClass:"row text-center justify-content-center align-items-center",class:o.outboxColor},[t("div",{staticClass:"boxes outbox",on:{mouseover:function(t){o.icon.url=o.imageMouseOver(o.icon)},mouseleave:function(t){o.icon.url=o.imageMouseLeave(o.icon)}}},[t("div",{staticClass:"boxes inbox d-flex align-items-center",class:o.inboxColor},[o.leftLogo?t("div",{staticClass:"px-1"},[t("img",{staticClass:"img img-fluid icon",attrs:{src:o.icon.url,alt:o.icon.altText}})]):o._e(),o._v(" "),t("div",{domProps:{innerHTML:o._s(o.titleText)}}),o._v(" "),o.rightLogo?t("div",{staticClass:"px-1"},[t("img",{staticClass:"img img-fluid icon",attrs:{src:o.icon.url,alt:o.icon.altText}})]):o._e()])])])])}),[],!1,null,"4c87af40",null);t.default=component.exports},486:function(o,t,e){o.exports=e.p+"img/icone-cordaria-enabled.b2e1ef4.png"},487:function(o,t,e){o.exports=e.p+"img/icone-cordaria-disabled.cb1497f.png"},488:function(o,t,e){"use strict";e(484)},489:function(o,t,e){var r=e(62)((function(i){return i[1]}));r.push([o.i,"a[data-v-4c87af40]{font-size:1.5em!important}.inbox[data-v-4c87af40]{color:var(--font-color-h2)!important;padding:4px 25px}.inbox[data-v-4c87af40]:hover{background-color:rgba(0,0,0,.05);color:var(--font-color-hover)!important}.outbox[data-v-4c87af40]{padding:0 10px}.inbox-project[data-v-4c87af40]{background-color:var(--the-project-inbox);border-radius:10px}.outbox-project[data-v-4c87af40]{background-color:var(--the-project-outbox);border-radius:10px}.inbox-tutorial[data-v-4c87af40]{background-color:var(--the-tutorial-inbox);border-radius:10px}.outbox-tutorial[data-v-4c87af40]{background-color:var(--the-tutorial-outbox);border-radius:10px}.inbox-research[data-v-4c87af40]{background-color:var(--the-research-inbox);border-radius:10px}.outbox-research[data-v-4c87af40]{background-color:var(--the-research-outbox);border-radius:10px}",""]),r.locals={},o.exports=r}}]);