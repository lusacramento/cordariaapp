(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{494:function(e,t,r){var content=r(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(63).default)("33d43939",content,!0,{sourceMap:!1})},510:function(e,t,r){"use strict";r(494)},511:function(e,t,r){var c=r(62)((function(i){return i[1]}));c.push([e.i,"@media (min-width:992px){.exercise-screen{height:60vh}}",""]),c.locals={},e.exports=c},533:function(e,t,r){"use strict";r.r(t);r(1),r(32);var c={components:{Card:r(534).default},props:{suffledDeck:{type:Array,default:function(){return[]}},card:{type:Object,default:function(){return{}}},isMobile:{type:Boolean},showExercise:Boolean}},n=(r(510),r(64)),component=Object(n.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"exercise-screen .layer-center mt-2 mb-4"},[t("div",{staticClass:"container-fluid mt-3"},[e.isMobile?t("div",[t("div",{staticClass:"row mt-4 d-flex align-items-center justify-content-around"},[t("Card",{key:"999",attrs:{id:"prev-card",card:e.card.prev}}),e._v(" "),t("Card",{key:"998",attrs:{id:"current-card",card:e.card.current}}),e._v(" "),t("Card",{key:"997",attrs:{id:"next-card",card:e.card.next}})],1)]):e._e(),e._v(" "),e.isMobile?e._e():t("div",[t("div",{staticClass:"row align-items-center"},e._l(e.suffledDeck,(function(e,i){return t("Card",{key:e+" "+i,staticClass:"card cardView",attrs:{id:e.id.toString(),card:e}})})),1)])])])}),[],!1,null,null,null);t.default=component.exports}}]);