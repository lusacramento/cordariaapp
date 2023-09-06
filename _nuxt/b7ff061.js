(window.webpackJsonp=window.webpackJsonp||[]).push([[15,5],{484:function(t,o,e){var content=e(489);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(63).default)("ebf35360",content,!0,{sourceMap:!1})},485:function(t,o,e){"use strict";e.r(o);var r=e(486),n=e.n(r),c=e(487),l=e.n(c),d={props:{titleText:{type:String,default:function(){return""}},schema:{type:String,default:function(){return""}},leftLogo:Boolean,rightLogo:Boolean},data:function(){return{inboxColor:"",outboxColor:"",icon:{url:l.a,altText:"Inicie agora",enabled:n.a,disabled:l.a}}},mounted:function(){this.applySchema()},methods:{applySchema:function(){switch(this.schema){case"the-project":this.inboxColor="inbox-project",this.outboxColor="outbox-project";break;case"the-tutorial":this.inboxColor="inbox-tutorial",this.outboxColor="outbox-tutorial";break;case"the-research":this.inboxColor="inbox-research",this.outboxColor="outbox-research"}},imageMouseOver:function(img){return img.enabled},imageMouseLeave:function(img){return img.disabled}}},x=(e(488),e(64)),component=Object(x.a)(d,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"box-title container-fluid d-flex justify-content-center mb-4"},[o("div",{staticClass:"row text-center justify-content-center align-items-center",class:t.outboxColor},[o("div",{staticClass:"boxes outbox",on:{mouseover:function(o){t.icon.url=t.imageMouseOver(t.icon)},mouseleave:function(o){t.icon.url=t.imageMouseLeave(t.icon)}}},[o("div",{staticClass:"boxes inbox d-flex align-items-center",class:t.inboxColor},[t.leftLogo?o("div",{staticClass:"px-1"},[o("img",{staticClass:"img img-fluid icon",attrs:{src:t.icon.url,alt:t.icon.altText}})]):t._e(),t._v(" "),o("div",{domProps:{innerHTML:t._s(t.titleText)}}),t._v(" "),t.rightLogo?o("div",{staticClass:"px-1"},[o("img",{staticClass:"img img-fluid icon",attrs:{src:t.icon.url,alt:t.icon.altText}})]):t._e()])])])])}),[],!1,null,"4c87af40",null);o.default=component.exports},486:function(t,o,e){t.exports=e.p+"img/icone-cordaria-enabled.b2e1ef4.png"},487:function(t,o,e){t.exports=e.p+"img/icone-cordaria-disabled.cb1497f.png"},488:function(t,o,e){"use strict";e(484)},489:function(t,o,e){var r=e(62)((function(i){return i[1]}));r.push([t.i,"a[data-v-4c87af40]{font-size:1.5em!important}.inbox[data-v-4c87af40]{color:var(--font-color-h2)!important;padding:4px 25px}.inbox[data-v-4c87af40]:hover{background-color:rgba(0,0,0,.05);color:var(--font-color-hover)!important}.outbox[data-v-4c87af40]{padding:0 10px}.inbox-project[data-v-4c87af40]{background-color:var(--the-project-inbox);border-radius:10px}.outbox-project[data-v-4c87af40]{background-color:var(--the-project-outbox);border-radius:10px}.inbox-tutorial[data-v-4c87af40]{background-color:var(--the-tutorial-inbox);border-radius:10px}.outbox-tutorial[data-v-4c87af40]{background-color:var(--the-tutorial-outbox);border-radius:10px}.inbox-research[data-v-4c87af40]{background-color:var(--the-research-inbox);border-radius:10px}.outbox-research[data-v-4c87af40]{background-color:var(--the-research-outbox);border-radius:10px}",""]),r.locals={},t.exports=r},530:function(t,o,e){var content=e(555);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(63).default)("71c57ef8",content,!0,{sourceMap:!1})},554:function(t,o,e){"use strict";e(530)},555:function(t,o,e){var r=e(62)((function(i){return i[1]}));r.push([t.i,"a[data-v-3de357e0]{font-size:1.5em!important}#the-project[data-v-3de357e0]{text-align:center}.large-line-height[data-v-3de357e0]{line-height:1.7}",""]),r.locals={},t.exports=r},567:function(t,o,e){"use strict";e.r(o);var r={components:{Box:e(485).default},data:function(){return{title:"O PROJETO",boxes:{what:{text:"<h2>O que é?</h2>",schema:"the-project",leftLogo:!1,rightLogo:!1},doing:{text:"<h2>O que faz?</h2>",schema:"the-project",leftLogo:!1,rightLogo:!1},callInAction:{text:'<main><a style="font-size:1.5em" class="no-text-decoration" href="/a-pratica">Inicie agora seu treinamento!</a></main>',schema:"the-project",leftLogo:!0,rightLogo:!1}}}},head:function(){return{title:"Cordaria - O Projeto",meta:[{hid:"titleprojeto",name:"title",content:"Cordaria - Já praticou hoje?"},{hid:"projeto",name:"description",content:"O projeto Cordaria é resultado de uma pesquisa que vem para auxiliar, educandos e professores, a prática de violão e guitarra"},{hid:"projetokeys",name:"keywords",content:"pesquisa, prática, música, projeto, violão, guitarra, método"}],link:[{rel:"canonical",href:"https://cordaria.com.br"}]}}},n=(e(554),e(64)),component=Object(n.a)(r,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"the-project",attrs:{id:"the-project"}},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row text-center layer-top align-items-center"},[o("div",{staticClass:"col"},[o("h1",{staticClass:"title mt-3 mb-4"},[t._v(t._s(t.title))])])])]),t._v(" "),o("div",{staticClass:"container layer-center"},[o("div",{staticClass:"row justify-content-around"},[o("div",{staticClass:"col-md-4 col-12"},[o("Box",{attrs:{"title-text":t.boxes.what.text,schema:t.boxes.what.schema,"left-logo":t.boxes.what.leftLogo,"right-logo":t.boxes.what.rightLogo}}),t._v(" "),t._m(0),t._v(" "),t._m(1)],1),t._v(" "),o("div",{staticClass:"col-md-4 col-12"},[o("Box",{attrs:{"title-text":t.boxes.doing.text,schema:t.boxes.doing.schema,"left-logo":t.boxes.doing.leftLogo,"right-logo":t.boxes.doing.rightLogo}}),t._v(" "),t._m(2),t._v(" "),t._m(3)],1)]),t._v(" "),o("aside",{staticClass:"row d-flex justify-content-center mt-4"},[o("div",{staticClass:"col-lg-6 col-md-9 col-12"},[o("Box",{attrs:{"title-text":t.boxes.callInAction.text,schema:t.boxes.callInAction.schema,"left-logo":t.boxes.callInAction.leftLogo,"right-logo":t.boxes.callInAction.rightLogo}})],1)])])])}),[function(){var t=this,o=t._self._c;return o("p",{staticClass:"large-line-height"},[t._v("\n          Destinado à pessoas interessadas em iniciar o estudo do violão e guitarra e\n          professores dessa arte, o projeto\n          "),o("strong",[t._v("Cordaria")]),t._v("\n          é um aplicativo\n          "),o("i",[t._v("web")]),t._v("\n          com intuito de auxiliar a prática ao instrumento.\n        ")])},function(){var t=this,o=t._self._c;return o("p",{staticClass:"large-line-height"},[t._v("\n          Desenvolvido pelo músico e programador\n          "),o("strong",[t._v("Lu Sacramento")]),t._v(", o projeto é fruto de uma pesquisa sobre novas\n          metodologias e abordagens ao ensino à distância de música.\n        ")])},function(){var t=this,o=t._self._c;return o("p",[t._v("\n          Sua função é gerar exercícios básicos de digitação com foco na técnica. Tais\n          exercícios vem para\n          "),o("strong",[t._v("auxiliar o educando")]),t._v(" a executar as notas dadas através de uma\n          escrita de tablatura, cuja a linguagem é de fácil entendimento comparado a\n          escrita de partitura.\n        ")])},function(){var t=this,o=t._self._c;return o("p",[t._v("\n          Desta forma, o aluno poderá praticar junto ao auxílio de um\n          "),o("strong",[t._v("“correpetidor” virtual")]),t._v(", em qualquer momento e lugar!\n        ")])}],!1,null,"3de357e0",null);o.default=component.exports;installComponents(component,{Box:e(485).default})}}]);