(window.webpackJsonp=window.webpackJsonp||[]).push([[13,8,9,10,11],{491:function(t,e,r){var content=r(502);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("3b74e209",content,!0,{sourceMap:!1})},492:function(t,e,r){var content=r(505);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("1991bc2a",content,!0,{sourceMap:!1})},494:function(t,e,r){var content=r(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("33d43939",content,!0,{sourceMap:!1})},495:function(t,e,r){var content=r(513);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("538f59b6",content,!0,{sourceMap:!1})},501:function(t,e,r){"use strict";r(491)},502:function(t,e,r){var n=r(62)((function(i){return i[1]}));n.push([t.i,'h1.title-tips{color:var(--the-pratice-color);font-family:"Encode Sans";font-weight:var(--font-semi-bold)}p.text-tips{color:grey;font-size:1.2em;font-weight:var(--font-regular);padding:30px 0 0;text-align:center}p.close-tips,p.text-tips{font-family:"Encode Sans"}p.close-tips{font-size:.7em;font-weight:var(--font-light);padding:40px 0 0;text-align:right}.swal2-select{display:none!important}',""]),n.locals={},t.exports=n},504:function(t,e,r){"use strict";r(492)},505:function(t,e,r){var n=r(62)((function(i){return i[1]}));n.push([t.i,'form.form{width:80%}input:disabled,select:disabled{background-color:rgba(0,0,0,.1)!important;color:hsla(0,0%,100%,.5)!important}label{font-family:"Encode Sans";font-size:.9em;font-weight:var(--font-regular)}input.form-number,select.controls{background-color:#1a1b24;border:none;color:#f0f8ff;font-family:"Encode Sans";font-size:.8em;font-weight:var(--font-semi-bold);height:30px;width:120px}.btn-controls{height:30px;width:30px}.fa{font-size:.6em}input.slider{-webkit-appearance:none;width:120px}input.slider::-webkit-slider-runnable-track{background:#1a1b24;border:none;border-radius:3px;height:5px;width:120px}input.slider::-webkit-slider-thumb{-webkit-appearance:none;background:#7d7d7d;border:none;border-radius:50%;height:16px;margin-top:-4px;width:16px}input.slider:focus{outline:none}input.slider:focus::-webkit-slider-runnable-track{background:#ccc}input.slider::-moz-range-track{background:#ddd;border:none;border-radius:3px;height:5px;width:120px}input.slider::-moz-range-thumb{background:#7d7d7d;border:none;border-radius:50%;height:16px;width:16px}input.slider:-moz-focusring{outline:1px solid #fff;outline-offset:-1px}input.slider::-ms-track{background:transparent;border-color:transparent;border-width:6px 0;color:transparent;height:5px;width:120px}input.slider::-ms-fill-lower{background:#777;border-radius:10px}input.slider::-ms-fill-upper{background:#ddd;border-radius:10px}input.slider::-ms-thumb{background:#7d7d7d;border:none;border-radius:50%;height:16px;width:16px}input.slider:focus::-ms-fill-lower{background:#888}input.slider:focus::-ms-fill-upper{background:#ccc}',""]),n.locals={},t.exports=n},510:function(t,e,r){"use strict";r(494)},511:function(t,e,r){var n=r(62)((function(i){return i[1]}));n.push([t.i,"@media (min-width:992px){.exercise-screen{height:60vh}}",""]),n.locals={},t.exports=n},512:function(t,e,r){"use strict";r(495)},513:function(t,e,r){var n=r(62)((function(i){return i[1]}));n.push([t.i,'div.score{color:var(--font-color-hover);font-family:"Encode Sans";font-size:.8em;font-weight:var(--font-semi-bold);padding:0 20px}',""]),n.locals={},t.exports=n},527:function(t,e,r){var content=r(549);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("9a9deda6",content,!0,{sourceMap:!1})},531:function(t,e,r){"use strict";r.r(e);var n=r(17),o=(r(53),r(15),r(43),r(525)),c=r.n(o),l={name:"TipsBox",props:{tips:{type:Array,default:function(){return[]}}},data:function(){return{tip:null,timerEstimed:5,timerInterval:5}},watch:{timerEstimed:function(t){return t}},mounted:function(){var t=this.sortIndex(this.tips.length);this.tip=this.tips[t],this.showAlert()},methods:{showAlert:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.fire({title:'<h1 class="title-tips">Pulo do gato '.concat(t.tip.id,"</h1>"),icon:"info",html:'<p class="text-tips">'.concat(t.tip.message,'</p>\n        <p class="close-tips">Fechando em ').concat(t.timerEstimed," segundos.</p>"),showCloseButton:!0,showConfirmButton:!1,timer:5e3,background:"#000000b8",timerProgressBar:!0,didOpen:function(){c.a.showLoading(),t.timerInterval=setInterval((function(){t.timerEstimed=Math.round(c.a.getTimerLeft()/1e3),c.a.update({html:'<p class="text-tips">'.concat(t.tip.message,'</p><p class="close-tips">Fechando em ').concat(t.timerEstimed," segundos.</p>")})}),100)},willClose:function(){clearInterval(t.timerInterval)}});case 2:case"end":return e.stop()}}),e)})))()},sortIndex:function(t){var e=Math.ceil(0);return t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}}},d=(r(501),r(64)),component=Object(d.a)(l,(function(){return(0,this._self._c)("div",{staticClass:"tip",attrs:{id:"tip-box"}})}),[],!1,null,null,null);e.default=component.exports},532:function(t,e,r){"use strict";r.r(e);r(16),r(2),r(1),r(25);var n=r(61),o=r(503),c=r(153);n.c.add([o.a]);var l={name:"ExerciseNav",components:{FontAwesomeIcon:c.a},props:{isVisibleButtonPlay:Boolean,isVisibleButtonStop:Boolean,lessons:{type:Array,default:function(){return[]}},set:{type:Object,default:function(){return{}}},stop:{type:Function,default:function(){return{}}}},data:function(){return{instrument:"acoustic-guitar",view:"mobile",iconPlay:"play",lesson:1,firstFinger:0,stringNumber:1,bpm:40,loadActiveThePratice:!0,isReadtoLoad:!0,isEnabledMenu:!1,data:{guitars:{acoustic:{name:"acoutic guitar"},eletric:{name:"eletric guitar"}}}}},watch:{lesson:function(t){return this.firstFinger=this.lessons[t].firstFinger,this.stringNumber=this.lessons[t].stringNumber,this.bpm=this.lessons[t].bpm,this.isReadtoLoad=0!==t,t},firstFinger:function(t){return t},stringNumber:function(t){return t},bpm:function(t){return t}},methods:{sendProps:function(){this.$emit("props",{lesson:this.lesson,firstFinger:this.firstFinger,stringNumber:this.stringNumber,bpm:this.bpm,view:this.view,loadActiveThePratice:this.loadActiveThePratice,instrument:this.instrument,isEnabledMenu:this.isEnabledMenu})}}},d=(r(504),r(64)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("form",{staticClass:"container-fluid form-row justify-content-center"},[e("div",{staticClass:"form-group col-6 col-lg-12 justify-self-center justify-content-center select-instrument"},[e("label",{staticClass:"form-label",attrs:{for:"select-instrument-mode"}},[t._v("Instrumento\n    ")]),t._v(" "),e("br"),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.instrument,expression:"instrument"}],staticClass:"controls justify-self-center",attrs:{id:"select-instrument-mode"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.instrument=e.target.multiple?r:r[0]}}},[e("option",{domProps:{value:t.set.guitars.acoustic.name}},[t._v("\n        "+t._s(t.set.guitars.acoustic.label)+"\n      ")]),t._v(" "),e("option",{domProps:{value:t.set.cavaco.name}},[t._v(t._s(t.set.cavaco.label))]),t._v(" "),e("option",{domProps:{value:t.set.guitars.electric.name}},[t._v("\n        "+t._s(t.set.guitars.electric.label)+"\n      ")]),t._v(" "),e("option",{domProps:{value:t.set.bass.name}},[t._v(t._s(t.set.bass.label))])])]),t._v(" "),e("div",{staticClass:"form-group col-6 col-lg-12 col-6 col-lg-12 select-screen"},[e("label",{staticClass:"form-label",attrs:{for:"select-screen-mode"}},[t._v("Visualização ")]),t._v(" "),e("br"),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.view,expression:"view"}],staticClass:"controls",attrs:{id:"select-screen-mode"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.view=e.target.multiple?r:r[0]}}},[e("option",{attrs:{value:"mobile"}},[t._v("3 cartas")]),t._v(" "),e("option",{attrs:{value:"desktop"}},[t._v("Todas as cartas")])])]),t._v(" "),e("div",{staticClass:"form-group col-6 col-lg-12 select-lesson"},[e("label",{staticClass:"form-label",attrs:{for:"select-lesson"}},[t._v("Lições")]),e("br"),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.lesson,expression:"lesson"}],staticClass:"controls",attrs:{id:"select-lesson"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.lesson=e.target.multiple?r:r[0]}}},t._l(t.lessons,(function(r){return e("option",{key:r.id,domProps:{value:r.id}},[t._v("\n        "+t._s(r.name)+"\n      ")])})),0)]),t._v(" "),e("div",{staticClass:"form-group col-6 col-lg-12 select-first-finger"},[e("label",{staticClass:"form-label",attrs:{for:"select-first-finger"}},[t._v("Primeiro Dedo")]),t._v(" "),e("br"),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.firstFinger,expression:"firstFinger"}],staticClass:"controls disabled",attrs:{id:"select-first-finger",disabled:t.isReadtoLoad},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.firstFinger=e.target.multiple?r:r[0]}}},t._l(t.set.firstFingers,(function(r){return e("option",{key:r.firstFinger,domProps:{value:r.firstFinger}},[t._v("\n        "+t._s(r.firstFinger)+"\n      ")])})),0)]),t._v(" "),e("div",{staticClass:"form-group col-6 col-lg-12 select-string"},[e("label",{staticClass:"form-label",attrs:{for:"select-string"}},[t._v(" Corda")]),t._v(" "),e("br"),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.stringNumber,expression:"stringNumber"}],staticClass:"controls",attrs:{id:"select-string",disabled:t.isReadtoLoad},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.stringNumber=e.target.multiple?r:r[0]}}},["acoustic-guitar"===t.instrument||"eletric-guitar"===t.instrument?t._l(t.set.guitars.strings,(function(r){return e("option",{key:r.string,domProps:{value:r.string}},[t._v("\n          "+t._s(r.label)+"\n        ")])})):"cavaco"===t.instrument?t._l(t.set.cavaco.strings,(function(r){return e("option",{key:r.string,domProps:{value:r.string}},[t._v("\n          "+t._s(r.label)+"\n        ")])})):"bass"===t.instrument?t._l(t.set.bass.strings,(function(r){return e("option",{key:r.string,domProps:{value:r.string}},[t._v("\n          "+t._s(r.label)+"\n        ")])})):t._e()],2)]),t._v(" "),e("div",{staticClass:"form-group col-6 col-lg-12"},[e("div",{staticClass:"select-andamento form-group"},[e("label",{staticClass:"form-label",attrs:{for:"tempo"}},[t._v("Andamento")]),t._v(" "),e("br"),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.bpm,expression:"bpm"}],staticClass:"tempo form-number",attrs:{id:"tempo-number",type:"number",min:"30",max:"200","aria-required":"true","aria-invalid":"false",disabled:t.isReadtoLoad,step:"2"},domProps:{value:t.bpm},on:{input:function(e){e.target.composing||(t.bpm=e.target.value)}}}),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"slidecontainer"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.bpm,expression:"bpm"}],staticClass:"tempo form-range slider",attrs:{id:"tempo-range",type:"range",min:"30",max:"200",disabled:t.isReadtoLoad,step:"2"},domProps:{value:t.bpm},on:{__r:function(e){t.bpm=e.target.value}}})])])]),t._v(" "),e("div",{staticClass:"col-12"},[e("div",{staticClass:"buttons pt-1 d-flex justify-content-center"},[t.isVisibleButtonPlay?e("button",{staticClass:"btn btn-success btn-controls d-flex align-items-center justify-content-center",attrs:{type:"button"},on:{click:t.sendProps}},[e("font-awesome-icon",{staticClass:"fa fa-code",attrs:{icon:t.iconPlay}})],1):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},533:function(t,e,r){"use strict";r.r(e);r(1),r(32);var n={components:{Card:r(534).default},props:{suffledDeck:{type:Array,default:function(){return[]}},card:{type:Object,default:function(){return{}}},isMobile:{type:Boolean},showExercise:Boolean}},o=(r(510),r(64)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"exercise-screen .layer-center mt-2 mb-4"},[e("div",{staticClass:"container-fluid mt-3"},[t.isMobile?e("div",[e("div",{staticClass:"row mt-4 d-flex align-items-center justify-content-around"},[e("Card",{key:"999",attrs:{id:"prev-card",card:t.card.prev}}),t._v(" "),e("Card",{key:"998",attrs:{id:"current-card",card:t.card.current}}),t._v(" "),e("Card",{key:"997",attrs:{id:"next-card",card:t.card.next}})],1)]):t._e(),t._v(" "),t.isMobile?t._e():e("div",[e("div",{staticClass:"row align-items-center"},t._l(t.suffledDeck,(function(t,i){return e("Card",{key:t+" "+i,staticClass:"card cardView",attrs:{id:t.id.toString(),card:t}})})),1)])])])}),[],!1,null,null,null);e.default=component.exports},536:function(t,e,r){"use strict";r.r(e);var n={name:"ScoreTerminal",props:{score:{type:String,default:function(){return""}}}},o=(r(512),r(64)),component=Object(o.a)(n,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"score",attrs:{id:"score-terminal"},domProps:{innerHTML:t._s(t.score)}})}),[],!1,null,null,null);e.default=component.exports},548:function(t,e,r){"use strict";r(527)},549:function(t,e,r){var n=r(62)((function(i){return i[1]}));n.push([t.i,'b-button{height:45px;width:45px}.bg-exercise-screen{background-color:var(--bg-nav)}#sidebar-menu{background-color:rgba(0,0,0,.7)!important;font-family:"Encode Sans";font-weight:var(--font-semi-bold)}#menu-button{color:var(--font-color-p)}#menu-button:hover{color:hsla(0,0%,100%,.7)}.exercise-nav{background-color:hsla(0,0%,100%,.1)}.exercise-screen{justify-content:center}.sidebar-menu-enabled{display:flex!important}.sidebarMenuDisabled{display:none!important}.b-sidebar-body{align-items:center!important;display:flex!important}.close{color:#fff}.close:hover{background-color:hsla(0,0%,100%,.8)}',""]),n.locals={},t.exports=n},563:function(t,e,r){"use strict";r.r(e);var n=r(17),o=(r(43),r(53),r(153)),c=r(61),l=r(503),d=(r(539),r(1),r(3),r(32),r(18),r(208),r(2),r(561)),f={convertBpmToMs:function(t){return 6e4/t},calculateRelease:function(t){return t/1e3*1.1},sortIndex:function(t){var e=Math.ceil(0);return t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},selectInstrument:function(t,e){var r={};switch(t){case"acoustic-guitar":r=e.acousticGuitar;break;case"eletric-guitar":r=e.eletricGuitar;break;case"cavaco":r=e.cavaco;break;case"bass":r=e.bass}return r},getAudios:function(t){var e=this;"running"!==d.d.state&&d.d.resume();var r={};for(var n in t){t[n].forEach((function(element){r[element.note]="".concat(element.tablature,".mp3")}))}var o=t[0][0].baseUrl;return new d.a({urls:r,baseUrl:o,onload:function(){e.isLoaded=!0}}).toDestination()},getData:function(t,e,r){if("mobile"===t.view?e.isMobile=!0:e.isMobile=!1,e.lesson=t.lesson,0!==t.lesson){var n=t.lesson.toString();e.firstFinger=r[n].firstFinger,e.stringNumber=r[n].stringNumber,e.bpm=r[n].bpm}else e.firstFinger=t.firstFinger,e.stringNumber=t.stringNumber,e.bpm=t.bpm;return e},configAllStrings:function(t,e){switch(t.stringNumber){case"fromBassToTreble":t.stringNumber=e,t.direction="down";break;case"fromTrebleToBass":t.stringNumber=1,t.direction="up"}return t},changingString:function(t,e){return"down"===t.direction?t.stringNumber--:t.stringNumber++,(1===t.stringNumber&&4===e||1===t.stringNumber&&6===e)&&(t.direction="up"),(4===t.stringNumber&&4===e||6===t.stringNumber&&6===e)&&(t.direction="down"),t},generateSequence:function(t,e,r,n){var o=this,c=r[0][0].stringsNumber;"fromBassToTreble"!==t.stringNumber&&"fromTrebleToBass"!==t.stringNumber||(t.allStrings=!0,t=this.configAllStrings(t,c));var l=["C1","C0","C0","C0","C0"];e.forEach((function(e){t.allStrings?(e.fragments.forEach((function(e){var n=e.fragment,c=o.getNotes(n,r,t);l.push(c)})),t=o.changingString(t,c)):e.fragments.forEach((function(e){var n=e.fragment;l.push(o.getNotes(n,r,t))}))}));var f=new d.b((function(time,e){n.triggerAttackRelease(e,t.release,time)}),l,"4n");return f.loop=!1,d.c.bpm.value=t.bpm,d.c.start(),f},getNotes:function(t,e,r){var n=t,o=e[r.stringNumber],c=r.stringNumber+n;return o[n][c]},filterFinger:function(t){return function(e){var r=e.value[0].toString(),filter=t.toString();return r===filter}},generateExercise:function(t,e){for(var r=t.slice(),i=r.length;i>0;i--){var n=this.sortIndex(i),o=r[n];r.push(o),r.splice(n,1)}return r=r.filter(this.filterFinger(e))}},m=function(t,e,r,n){var o=++t+1;return e.prev=e.current,e.current=e.next,e.next=o<n?r[o]:{},r[t-1].isPastCard=!0,r[t-1].isCurrentCard=!1,t},h=function(t,e,r,n,o,c,l){if(e!==r){o[e].isFutureCard=!1,o[e].isCurrentCard=!0;var d=n.current.fragments[t];if(e>0&&0===t){var f=n.prev.width-1;n.prev.fragments[f],n.prev.fragments[f].isHighlight=!1}return 0!==t&&(n.current.fragments[t-1].isHighlight=!1),d.isHighlight=!0,++t}var m=n.prev.width-1;n.prev.fragments[m].isHighlight=!1,l()},v=r(531),x=r(532),_=r(533),C=r(536);c.c.add([l.b]);var w={name:"APratica",components:{FontAwesomeIcon:o.a,CatJump:v.default,ExerciseNav:x.default,ExerciseScreen:_.default,ScoreTerminal:C.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l,d,f,m,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$http,e.next=3,r.$get("./Cordaria/json/tips.json");case 3:return n=e.sent,e.next=6,r.$get("./Cordaria/json/lessons.json");case 6:return o=e.sent,e.next=9,r.$get("./Cordaria/json/deck.json");case 9:return c=e.sent,e.next=12,r.$get("./Cordaria/json/acoustic-guitar.json");case 12:return l=e.sent,e.next=15,r.$get("./Cordaria/json/eletric-guitar.json");case 15:return d=e.sent,e.next=18,r.$get("./Cordaria/json/cavaco.json");case 18:return f=e.sent,e.next=21,r.$get("./Cordaria/json/bass.json");case 21:return m=e.sent,e.next=24,r.$get("./Cordaria/json/instrument-settings.json");case 24:return h=e.sent,e.abrupt("return",{lessons:o.lessons,setNav:h.settings,deck:c.deck,instruments:{acousticGuitar:l.guitarMap,eletricGuitar:d.guitarMap,cavaco:f.cavacoMap,bass:m.bassMap},instrumentMap:null,tips:n.tips,suffledDeck:null,settings:{isMobile:!0,lesson:1,firstFinger:0,stringNumber:"1",bpm:40,allStrings:!1,direction:"down",release:1},instrument:null,sequence:null,card:{prev:{},current:{},next:{}},i:{preCount:4,cardValue:0},lengthSuffledDeck:0,iCard:0,swapCard:!1,isVisibleButtonPlay:!1,isVisibleStopButton:!1,iconStop:"stop",tempo:null,score:"Aguardando<br />para iniciar",fadeOutValue:10,isEnabledMenu:!0});case 26:case"end":return e.stop()}}),e)})))()},data:function(){return{title:"A PRÁTICA"}},head:function(){return{title:"Cordaria - Pratique agora!",meta:[{hid:"titlepratica",name:"title",content:"Já Praticou Hoje? Inicie agora mesmo seu treinamento!"},{hid:"pratica",name:"description",content:"Inicie agora mesmo seu treinamento musical. Bons Estudos!"},{hid:"particakeys",name:"keywords",content:"Treinamento, Método, Violão, Guitarra, Dedilhado"}],link:[{rel:"canonical",href:"https://cordaria.com.br/a-pratica"}]}},watch:{i:function(t){return t},score:function(t){return t},suffledDeck:function(t){return t},card:function(t){return t},tempo:function(t){return t}},created:function(){this.sendPropsHideFooter()},mounted:function(){this.isVisibleButtonPlay=!0},destroyed:function(){this.stop(!0)},methods:{load:function(t){this.isEnabledMenu=t.isEnabledMenu,this.isVisibleButtonPlay=!1,this.score="Carregando<br>...",this.instrument=t.instrument,this.instrumentMap=f.selectInstrument(this.instrument,this.instruments),this.sampler=f.getAudios(this.instrumentMap),this.settings=f.getData(t,this.settings,this.lessons),this.startTraining()},startTraining:function(){this.suffledDeck=f.generateExercise(this.deck,this.settings.firstFinger),this.tempo=f.convertBpmToMs(this.settings.bpm),this.settings.release=f.calculateRelease(this.tempo),this.sequence=f.generateSequence(this.settings,this.suffledDeck,this.instrumentMap,this.sampler),this.card.current=this.suffledDeck[0],this.card.next=this.suffledDeck[1],this.lengthSuffledDeck=this.suffledDeck.length,this.i.preCount=this.card.current.fragments.length,this.timer=setInterval(this.practice,this.tempo),this.isVisibleStopButton=!1},practice:function(){var t=this.card.current.value.length-1;this.sendSequence(),this.sequence.start(),this.isVisibleStopButton=!0,this.i.preCount>0?(this.score="Iniciando em <br /><b>".concat(this.i.preCount,"!</b>"),this.i.preCount=this.i.preCount-1):this.iCard<=this.lengthSuffledDeck&&(this.score="<b>Executando<br /></b>...",this.swapCard&&(this.iCard=m(this.iCard,this.card,this.suffledDeck,this.lengthSuffledDeck),this.i.cardValue=0),this.i.cardValue=h(this.i.cardValue,this.iCard,this.lengthSuffledDeck,this.card,this.suffledDeck,this.score,this.finish),this.i.cardValue>t?this.swapCard=!0:this.swapCard=!1)},sendSequence:function(){this.$emit("sequence",this.sequence)},finish:function(){clearInterval(this.timer),this.score="Parabéns!<br />Treinamento concluído."},stop:function(t){null!=this.sequence&&(clearInterval(this.timer),this.sequence.stop(),this.isVisibleStopButton=!1,this.score="Aguardando<br />...",this.card.prev={},this.card.current={},this.card.next={},this.suffledDeck.length=0,this.isVisibleButtonPlay=!0),t&&this.$router.go()},sendPropsHideFooter:function(){this.$emit("props",{hideFooter:!0})}}},y=(r(548),r(64)),component=Object(y.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"cordaria",attrs:{id:"the-pratice"}},[e("div",{staticClass:"exercise-nav container-fluid"},[e("div",{staticClass:"row text-center layer-top align-items-center"},[e("div",{staticClass:"col-12 col-lg-4"},[e("b-sidebar",{staticClass:"menu-button",attrs:{id:"sidebar-menu",title:"Menu",shadow:"","bg-variant":"dark","text-variant":"",visible:t.isEnabledMenu}},[e("div",{staticClass:"exercises-nav-layer d-flex flex-column align-items-center"},[e("ExerciseNav",{attrs:{lessons:t.lessons,set:t.setNav,"is-visible-button-play":t.isVisibleButtonPlay,"is-visible-button-stop":t.isVisibleStopButton,stop:t.stop,score:t.score},on:{props:t.load}})],1)]),t._v(" "),e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-menu",modifiers:{"sidebar-menu":!0}}],attrs:{id:"menu-button",variant:"dark"}},[t._v("Menu")])],1),t._v(" "),e("div",{staticClass:"col-12 col-lg-4"},[e("h1",{staticClass:"title mt-3 mb-4"},[t._v(t._s(t.title))])]),t._v(" "),e("div",{staticClass:"col-12 col-lg-4 d-flex justify-content-center"},[e("ScoreTerminal",{attrs:{score:t.score}}),t._v(" "),t.isVisibleStopButton?e("button",{staticClass:"btn btn-danger btn-controls d-flex align-items-center justify-content-center",attrs:{type:"button"},on:{click:function(e){return t.stop(!0)}}},[e("font-awesome-icon",{staticClass:"fa fa-code stop",attrs:{icon:t.iconStop}})],1):t._e()],1)])]),t._v(" "),e("div",{staticClass:"row justify-content-center bg-exercise-screen"},[e("div",{staticClass:"col-lg-10 layer-center"},[e("div",{staticClass:"exercise-screen"},[e("ExerciseScreen",{attrs:{card:t.card,"suffled-deck":t.suffledDeck,"is-mobile":t.settings.isMobile}})],1)])]),t._v(" "),e("div",{staticClass:"tips"},[e("CatJump",{attrs:{tips:t.tips}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);