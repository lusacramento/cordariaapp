(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5],{484:function(e,o,t){var content=t(489);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(63).default)("ebf35360",content,!0,{sourceMap:!1})},485:function(e,o,t){"use strict";t.r(o);var n=t(486),r=t.n(n),c=t(487),l=t.n(c),d={props:{titleText:{type:String,default:function(){return""}},schema:{type:String,default:function(){return""}},leftLogo:Boolean,rightLogo:Boolean},data:function(){return{inboxColor:"",outboxColor:"",icon:{url:l.a,altText:"Inicie agora",enabled:r.a,disabled:l.a}}},mounted:function(){this.applySchema()},methods:{applySchema:function(){switch(this.schema){case"the-project":this.inboxColor="inbox-project",this.outboxColor="outbox-project";break;case"the-tutorial":this.inboxColor="inbox-tutorial",this.outboxColor="outbox-tutorial";break;case"the-research":this.inboxColor="inbox-research",this.outboxColor="outbox-research"}},imageMouseOver:function(img){return img.enabled},imageMouseLeave:function(img){return img.disabled}}},f=(t(488),t(64)),component=Object(f.a)(d,(function(){var e=this,o=e._self._c;return o("div",{staticClass:"box-title container-fluid d-flex justify-content-center mb-4"},[o("div",{staticClass:"row text-center justify-content-center align-items-center",class:e.outboxColor},[o("div",{staticClass:"boxes outbox",on:{mouseover:function(o){e.icon.url=e.imageMouseOver(e.icon)},mouseleave:function(o){e.icon.url=e.imageMouseLeave(e.icon)}}},[o("div",{staticClass:"boxes inbox d-flex align-items-center",class:e.inboxColor},[e.leftLogo?o("div",{staticClass:"px-1"},[o("img",{staticClass:"img img-fluid icon",attrs:{src:e.icon.url,alt:e.icon.altText}})]):e._e(),e._v(" "),o("div",{domProps:{innerHTML:e._s(e.titleText)}}),e._v(" "),e.rightLogo?o("div",{staticClass:"px-1"},[o("img",{staticClass:"img img-fluid icon",attrs:{src:e.icon.url,alt:e.icon.altText}})]):e._e()])])])])}),[],!1,null,"4c87af40",null);o.default=component.exports},486:function(e,o,t){e.exports=t.p+"img/icone-cordaria-enabled.b2e1ef4.png"},487:function(e,o,t){e.exports=t.p+"img/icone-cordaria-disabled.cb1497f.png"},488:function(e,o,t){"use strict";t(484)},489:function(e,o,t){var n=t(62)((function(i){return i[1]}));n.push([e.i,"a[data-v-4c87af40]{font-size:1.5em!important}.inbox[data-v-4c87af40]{color:var(--font-color-h2)!important;padding:4px 25px}.inbox[data-v-4c87af40]:hover{background-color:rgba(0,0,0,.05);color:var(--font-color-hover)!important}.outbox[data-v-4c87af40]{padding:0 10px}.inbox-project[data-v-4c87af40]{background-color:var(--the-project-inbox);border-radius:10px}.outbox-project[data-v-4c87af40]{background-color:var(--the-project-outbox);border-radius:10px}.inbox-tutorial[data-v-4c87af40]{background-color:var(--the-tutorial-inbox);border-radius:10px}.outbox-tutorial[data-v-4c87af40]{background-color:var(--the-tutorial-outbox);border-radius:10px}.inbox-research[data-v-4c87af40]{background-color:var(--the-research-inbox);border-radius:10px}.outbox-research[data-v-4c87af40]{background-color:var(--the-research-outbox);border-radius:10px}",""]),n.locals={},e.exports=n},523:function(e,o,t){var content=t(538);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(63).default)("21ff201a",content,!0,{sourceMap:!1})},537:function(e,o,t){"use strict";t(523)},538:function(e,o,t){var n=t(62)((function(i){return i[1]}));n.push([e.i,'#credit-text{font-family:var(--font-light);font-size:var(--font-size-light)!important}.the-research p{font-size:.83em}#credit-text{font-family:"Encode Sans";font-size:.67em!important;font-weight:var(--font-light)}.download-research{font-family:"Encode Sans";font-size:.95em;font-weight:var(--font-regular)}.font-bold{font-family:"Encode Sans";font-weight:var(--font-bold)}.small-line-height{line-height:1.3}',""]),n.locals={},e.exports=n},564:function(e,o,t){"use strict";t.r(o);var n={components:{Box:t(485).default},data:function(){return{title:"A PESQUISA",boxes:{aboutResearch:{text:"<h2>Como surgiu?</h2>",schema:"the-research",leftLogo:!1,rightLogo:!1},downloadResearch:{text:'\n                           <div\n                    class="\n                      col\n                      download-research\n                      d-flex\n                      align-items-center\n                      justify-content-around\n                      small-line-height\n                      text-center\n                    "\n                  >\n                    <div>A Pesquisa<br />Na íntegra</div>\n                    <div>&nbsp;|&nbsp;<br />&nbsp;|&nbsp;</div>\n                    <div>Baixe<br /><span class="font-bold">Aqui</span></div>\n                    <div>\n                      \n                        <img\n                          @mouseover="icon.url = imageMouseOver(icon)"\n                          @mouseleave="icon.url = imageMouseLeave(icon)"\n                          class="img img-fluid icon"\n                          :src="icon.url"\n                          :alt="icon.altText"\n                        />\n                    </div>\n                  </div>\n                ',schema:"the-research",leftLogo:!1,rightLogo:!0}},researchUrl:"/files/pdf/pesquisa.pdf"}},head:function(){return{title:"Cordaria - A Pesquisa",meta:[{hid:"titlepesquisa",name:"title",content:"Cordaria - Desenvolvimento de Aplicação Web para Iniciação à Prática do Violão e Guitarra"},{hid:"pesquisa",name:"description",content:"Cordaria pretende ampliar as possibilidades metodológicas do ensino prático num cenário EAD e oferecer uma oportunidade diferente para iniciação da arte."},{hid:"pesquisakeys",name:"keywords",content:"Pesquisa, Prática, Musical, Desafios, EAD"}],link:[{href:"https://cordaria.com.br/a-pesquisa.pdf",rel:"canonical"}]}}},r=(t(537),t(64)),component=Object(r.a)(n,(function(){var e=this,o=e._self._c;return o("div",{staticClass:"the-research",attrs:{id:"the-research"}},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row text-center layer-top align-items-center"},[o("div",{staticClass:"col"},[o("h1",{staticClass:"title mt-3 mb-4"},[e._v(e._s(e.title))])])])]),e._v(" "),o("div",{staticClass:"container layer-center"},[o("div",{staticClass:"row justify-content-around"},[o("section",{staticClass:"col-md-5"},[o("Box",{attrs:{"title-text":e.boxes.aboutResearch.text,schema:e.boxes.aboutResearch.schema,"is-logo":e.boxes.aboutResearch.isLogo}}),e._v(" "),e._m(0)],1),e._v(" "),o("div",{staticClass:"col-md-5"},[o("aside",{staticClass:"row justify-content-center"},[o("a",{attrs:{href:"/a-pesquisa/pdf/SACRAMENTO-Luciano-Cordaria-desenvolvimento-de-aplicacao-web-para-violao-e-guitarra.pdf",target:"_blank"}},[o("Box",{attrs:{"title-text":e.boxes.downloadResearch.text,schema:e.boxes.downloadResearch.schema,"left-logo":e.boxes.downloadResearch.leftLogo,"right-logo":e.boxes.downloadResearch.rightLogo}})],1)]),e._v(" "),e._m(1)])])]),e._v(" "),e._m(2)])}),[function(){var e=this,o=e._self._c;return o("p",{staticClass:"justify"},[e._v("\n          A pesquisa\n          "),o("strong",[e._v("\n            “Cordaria – Desenvolvimento de aplicação web para iniciação à prática do\n            violão e guitarra”\n          ")]),e._v("\n          surge em um momento delicado da história mundial: a pandemia do Coronavírus –\n          COVID 19. Compelidos a este problema, os profissionais da área da educação,\n          sobre tudo com atuação na área da música enfrentam grandes desafios para\n          conseguir adequar suas atividades para o ensino a distância. Parte deste\n          desafio é devido a escassez de recursos tecnológicos que fogem da metodologia\n          tradicional de ensino, muito das vezes, limitado a vídeos, textos, imagens e\n          de forma repetida. Os problemas se amplificam com usuários oriundos da classe\n          baixa, que tem uma limitação considerável de hardware e/ou baixa conexão de\n          internet.\n        ")])},function(){var e=this,o=e._self._c;return o("section",{staticClass:"row"},[o("div",{staticClass:"col"},[o("p",{staticClass:"justify large-line-height"},[e._v("\n              Utilizando meus conhecimentos de uma década como professor e alguns anos\n              de desenvolvedor web, implementei uma aplicação para prática de exercícios\n              básicos de violão e guitarra baseada em alguns métodos já experienciados\n              por mim enquanto discente e docente. Com isso, Cordaria pretende\n              "),o("strong",[e._v("ampliar as possibilidades metodológicas do ensino prático")]),e._v("\n              destes instrumentos num cenário EAD e oferecer uma oportunidade diferente\n              para iniciação da arte do fazer musical, além de incentivar programadores\n              e professores a pensar novas formas de aprendizagem.\n            ")])])])},function(){var e=this._self._c;return e("aside",{staticClass:"row justify-content-center mt-3 m-3"},[e("div",{staticClass:"col-9"},[e("p",{staticClass:"text-center",attrs:{id:"credit-text"}},[this._v("\n        Esta pesquisa foi possível devido ao apoio da Lei Emergencial de Incentivo à\n        Cultura – Lei Aldir Blanc, Governo Federal, Ministério do Turismo e Secretaria\n        Especial de Cultura, através da aprovação no Edital LAB no 14/2020 – “Seleção de\n        Bolsistas para as Áreas Artísticas Técnicas e de Produção Cultural” promovido\n        pela Secretaria de Cultura e Turismo de Minas Gerais – SECULT.\n      ")])])])}],!1,null,null,null);o.default=component.exports;installComponents(component,{Box:t(485).default})}}]);