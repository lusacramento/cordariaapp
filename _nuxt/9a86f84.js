(window.webpackJsonp=window.webpackJsonp||[]).push([[16,5,6],{484:function(t,o,e){var content=e(489);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(63).default)("ebf35360",content,!0,{sourceMap:!1})},485:function(t,o,e){"use strict";e.r(o);var r=e(486),n=e.n(r),l=e(487),c=e.n(l),A={props:{titleText:{type:String,default:function(){return""}},schema:{type:String,default:function(){return""}},leftLogo:Boolean,rightLogo:Boolean},data:function(){return{inboxColor:"",outboxColor:"",icon:{url:c.a,altText:"Inicie agora",enabled:n.a,disabled:c.a}}},mounted:function(){this.applySchema()},methods:{applySchema:function(){switch(this.schema){case"the-project":this.inboxColor="inbox-project",this.outboxColor="outbox-project";break;case"the-tutorial":this.inboxColor="inbox-tutorial",this.outboxColor="outbox-tutorial";break;case"the-research":this.inboxColor="inbox-research",this.outboxColor="outbox-research"}},imageMouseOver:function(img){return img.enabled},imageMouseLeave:function(img){return img.disabled}}},d=(e(488),e(64)),component=Object(d.a)(A,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"box-title container-fluid d-flex justify-content-center mb-4"},[o("div",{staticClass:"row text-center justify-content-center align-items-center",class:t.outboxColor},[o("div",{staticClass:"boxes outbox",on:{mouseover:function(o){t.icon.url=t.imageMouseOver(t.icon)},mouseleave:function(o){t.icon.url=t.imageMouseLeave(t.icon)}}},[o("div",{staticClass:"boxes inbox d-flex align-items-center",class:t.inboxColor},[t.leftLogo?o("div",{staticClass:"px-1"},[o("img",{staticClass:"img img-fluid icon",attrs:{src:t.icon.url,alt:t.icon.altText}})]):t._e(),t._v(" "),o("div",{domProps:{innerHTML:t._s(t.titleText)}}),t._v(" "),t.rightLogo?o("div",{staticClass:"px-1"},[o("img",{staticClass:"img img-fluid icon",attrs:{src:t.icon.url,alt:t.icon.altText}})]):t._e()])])])])}),[],!1,null,"4c87af40",null);o.default=component.exports},486:function(t,o,e){t.exports=e.p+"img/icone-cordaria-enabled.b2e1ef4.png"},487:function(t,o,e){t.exports=e.p+"img/icone-cordaria-disabled.cb1497f.png"},488:function(t,o,e){"use strict";e(484)},489:function(t,o,e){var r=e(62)((function(i){return i[1]}));r.push([t.i,"a[data-v-4c87af40]{font-size:1.5em!important}.inbox[data-v-4c87af40]{color:var(--font-color-h2)!important;padding:4px 25px}.inbox[data-v-4c87af40]:hover{background-color:rgba(0,0,0,.05);color:var(--font-color-hover)!important}.outbox[data-v-4c87af40]{padding:0 10px}.inbox-project[data-v-4c87af40]{background-color:var(--the-project-inbox);border-radius:10px}.outbox-project[data-v-4c87af40]{background-color:var(--the-project-outbox);border-radius:10px}.inbox-tutorial[data-v-4c87af40]{background-color:var(--the-tutorial-inbox);border-radius:10px}.outbox-tutorial[data-v-4c87af40]{background-color:var(--the-tutorial-outbox);border-radius:10px}.inbox-research[data-v-4c87af40]{background-color:var(--the-research-inbox);border-radius:10px}.outbox-research[data-v-4c87af40]{background-color:var(--the-research-outbox);border-radius:10px}",""]),r.locals={},t.exports=r},496:function(t,o,e){var content=e(521);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(63).default)("7b2343ac",content,!0,{sourceMap:!1})},514:function(t,o,e){var content=e(515);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(63).default)("fd5479ae",content,!0,{sourceMap:!1})},515:function(t,o,e){var r=e(62)((function(i){return i[1]}));r.push([t.i,'@charset "UTF-8";@font-face{font-family:"slick";src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAATsAA0AAAAAB2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAE0AAAABoAAAAcdIcYB0dERUYAAAS0AAAAHAAAAB4AJwANT1MvMgAAAZwAAABRAAAAYFAQ/45jbWFwAAACAAAAAFcAAAFiIhFFt2dhc3AAAASsAAAACAAAAAj//wADZ2x5ZgAAAmgAAAE1AAACLD+btmBoZWFkAAABMAAAAC8AAAA2AAEx+2hoZWEAAAFgAAAAHAAAACQD5QIFaG10eAAAAfAAAAAQAAAAFgZKAEpsb2NhAAACWAAAABAAAAAQATYBoG1heHAAAAF8AAAAHQAAACAASwBHbmFtZQAAA6AAAADcAAABbgUngcJwb3N0AAAEfAAAAC4AAABFOXjBpHjaY2BkYGAA4vMGfuHx/DZfGbiZGEDgfGFFPZxWZVBlvM14G8jlYABLAwAT1QnNAHjaY2BkYGC8zcDAoMfEAAJANiMDKmABADBkAe942mNgZGBgYGdwYWBiAAEQycgAEnMA8xkACcgAkwAAAHjaY2BmYmCcwMDKwMDow5jGwMDgDqW/MkgytDAwMDGwcjKAQQNQCZBSYICCgDTXFAYHhkTFSYwP/j9g0GO8/f82A0QNA+NtsBIFBkYANHMN4wAAAHjaY2KAACYIVoVAAALCAJt42mNgYGBmgGAZBkYGEIgB8hjBfBYGByDNw8DBwARkMzAkKigpTlCc9P8/WB0S7/+i+4/uld4rgZoAB4xsDHAhRiYgwcSApoCBcsBMBTNYGGgGAEdEDyUAAAAAAAAAAAAAZgCKANABFnjadZBdToNAEMd3CrtAl5TQLtS0LCoN0A8SGkBI+mAfPET75B1896HppfQcvnII4w3cLYpW6k4ymdn9z8xvBwEKUQg11OgBIXAYWUEQR1uIZoFGpLGxKy3PqrIq8+waXIfJ+5mQSSvkvXwRqqocu1D39QMl2JgvN9zzhsyk1GRDz+OBfzMioCqx0rtdLYo0SiZTZttsOkmidBkveKibFF4Oep9SI46bqk3Twhp4iihUemrMWFPy2NRbthfqKkHi/PxlJLITZdAiSj6ouZ+tn9eZz78DuD9LZYB6bZ8rlCAUVuVdkULjxV4sIEysIc/KSyPmnJDdjhCOdQ0fCTliTX/tjH3ysWao+71qaNjHQjcQwrcuyl+WLZQthCMotJP/h+Xjazz+hfTeRWmG4zOiSyif/q1OtAAAAHjabY49asNAEIU/2ZJDfkiRIvXapUFCEqpcptABUrg3ZhEiQoKVfY9UqVLlGDlADpAT5e16IUWysMz3hjfzBrjjjQT/EjKpCy+4YhN5yZoxcirPe+SMWz4jr6S+5UzSa3VuwpTnBfc8RF7yxDZyKs9r5IxHPiKv1P9iZqDnyAvMQ39UecbScVb/gJO03Xk4CFom3XYK1clhMdQUlKo7/d9NF13RkIdfy+MV7TSe2sl11tRFaXYmJKpWTd7kdVnJ8veevZKc+n3I93t9Jnvr5n4aTVWU/0z9AI2qMkV42mNgYkAGjAzogB0sysTgwtDOyMTIzJlYVJRfnpOaVsIFZhVlpmeUAABuKQkSAAAAAAAB//8AAnjaY2BkYGDgAWIxIGZiYARCNiBmAfMYAAPgADV42mNgYGBkAIKrS9Q5QPT5wop6GA0APf8GGAAA) format("woff")}.slick-next,.slick-prev{border:none;cursor:pointer;display:block;font-size:0;height:20px;line-height:0;padding:0;position:absolute;top:50%;transform:translateY(-50%);width:20px}.slick-next,.slick-next:focus,.slick-next:hover,.slick-prev,.slick-prev:focus,.slick-prev:hover{background:transparent;color:transparent;outline:none}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#fff;font-family:"slick";font-size:20px;line-height:1;opacity:.75}.slick-prev{left:-25px}[dir=rtl] .slick-prev{left:auto;right:-25px}.slick-prev:before{content:"←"}[dir=rtl] .slick-prev:before{content:"→"}.slick-next{right:-25px}[dir=rtl] .slick-next{left:-25px;right:auto}.slick-next:before{content:"→"}[dir=rtl] .slick-next:before{content:"←"}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{bottom:-25px;display:block;list-style:none;margin:0;padding:0;position:absolute;text-align:center;width:100%}.slick-dots li{display:inline-block;margin:0 5px;padding:0;position:relative}.slick-dots li,.slick-dots li button{cursor:pointer;height:20px;width:20px}.slick-dots li button{background:transparent;border:0;color:transparent;display:block;font-size:0;line-height:0;outline:none;padding:5px}.slick-dots li button:focus,.slick-dots li button:hover{outline:none}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#000;content:"•";font-family:"slick";font-size:6px;height:20px;left:0;line-height:20px;opacity:.25;position:absolute;text-align:center;top:0;width:20px}.slick-dots li.slick-active button:before{color:#000;opacity:.75}',""]),r.locals={},t.exports=r},516:function(t,o,e){t.exports=e.p+"img/tutorial-cordaria-passo-1.9bfa759.gif"},517:function(t,o,e){t.exports=e.p+"img/tutorial-cordaria-passo-2.6cf223c.gif"},518:function(t,o,e){t.exports=e.p+"img/tutorial-cordaria-passo-3.0f928b5.png"},519:function(t,o,e){t.exports=e.p+"videos/tutorial-cordaria-passo-4.c0f1454.mp4"},520:function(t,o,e){"use strict";e(496)},521:function(t,o,e){var r=e(62)((function(i){return i[1]}));r.push([t.i,"",""]),r.locals={},t.exports=r},522:function(t,o,e){"use strict";e.r(o);var r=e(209),n=e.n(r),l=(e(312),e(514),e(516)),c=e.n(l),A=e(517),d=e.n(A),f=e(518),x=e.n(f),m=e(519),h=e.n(m),v={components:{VueSlickCarousel:n.a},data:function(){return{slickOptions:{infinite:!1,vertical:!1,responsive:[{breakpoint:576,settings:{vertical:!0,slidesToShow:2,slidesToScroll:2}}]},slides:[{id:0,isImage:!0,isVideo:!1,img:c.a,altText:"Tutorial Passo 1",text:"<p>Entrar no link <strong>A prática</strong>;<br />\n          Selecione o modo de <strong>visualização</strong> de sua preferência:<br />\n          3 Cartas: modo  dinâmico; Todas as Cartas: modo clássico."},{id:1,isImage:!0,isVideo:!1,img:d.a,altText:"Tutorial Passo 2",text:"<p>\n           Selecione uma lição pré-determinada ou personalizada.<br />\n           Para lições personalizadas, selecione o <strong>primeiro dedo</strong>, \n           a <strong>corda</strong>\n           e o <strong>andamento</strong> de acordo com seu ritmo.<p />"},{id:2,isImage:!0,isVideo:!1,img:x.a,altText:"Tutorial Passo 3",text:"<p>Aperte o botão <strong>play</strong>. Aproveite o tempo da pré-contagem para se posicionar:\n            Alinhe os dedos <strong>1, 2, 3 e 4</strong> nas respectivas casas\n            da corda selecionada.</p>"},{id:3,isImage:!1,isVideo:!0,src:h.a,title:"Cordaria - Tutorial",description:"Passo 4",text:"<p>Toque as notas realçadas apresentadas na carta amarela no <strong>momento informado</strong>.</p>"}]}}},k=(e(520),e(64)),component=Object(k.a)(v,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"carousel-wrapper"},[o("VueSlickCarousel",t._b({},"VueSlickCarousel",t.slickOptions,!1),t._l(t.slides,(function(e){return o("div",{key:e.id},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.isImage,expression:"slide.isImage"}]},[e.isImage?o("img",{staticClass:"img img-fluid",attrs:{src:e.img,alt:e.altText}}):t._e()]),t._v(" "),e.isVideo?o("div",[o("video",{staticClass:"video img img-fluid",attrs:{controls:"",preload:"auto"}},[o("source",{staticClass:"img img-fluid",attrs:{src:e.src,type:"video/mp4"}})])]):t._e(),t._v(" "),o("div",{domProps:{innerHTML:t._s(e.text)}})])})),0)],1)}),[],!1,null,null,null);o.default=component.exports},529:function(t,o,e){var content=e(553);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(63).default)("237ccdd0",content,!0,{sourceMap:!1})},552:function(t,o,e){"use strict";e(529)},553:function(t,o,e){var r=e(62)((function(i){return i[1]}));r.push([t.i,"#the-tutorial{text-align:center}",""]),r.locals={},t.exports=r},566:function(t,o,e){"use strict";e.r(o);var r={components:{CarouselClues:e(522).default},data:function(){return{title:"O TUTORIAL",boxes:{how:{text:"<h2>Como Funciona o app?</h2>",schema:"the-tutorial",leftLogo:!1,rightLogo:!1},steps:{text:"<h2>Passo-a-passo</h2>",schema:"the-tutorial",leftLogo:!1,rightLogo:!1},callInAction:{text:'<main><a style="font-size:1.5em" class="no-text-decoration" href="/a-pratica">Inicie agora seu treinamento!</a></main>',schema:"the-tutorial",leftLogo:!0,rightLogo:!1}}}},head:function(){return{title:"Cordaria - O Tutorial",meta:[{hid:"titletutorial",name:"title",content:"Cordaria - Tutorial simples e prático de nossa aplicação"},{hid:"tutorial",name:"description",content:"Aprenda como usar o cordaria neste tutorial simples e prático."},{hid:"tutorialkeys",name:"keywords",content:"Tutorial, Treinamento, Passo-a-Passo, Instrumento, Cordas, Digitação"}],link:[{rel:"canonical",href:"https://cordaria.com.br/o-tutorial"}]}}},n=(e(552),e(64)),component=Object(n.a)(r,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"the-tutorial",attrs:{id:"the-tutorial"}},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row text-center layer-top align-items-around"},[o("div",{staticClass:"col"},[o("h1",{staticClass:"title mt-3 mb-4"},[t._v(t._s(t.title))])])])]),t._v(" "),o("div",{staticClass:"container layer-center"},[o("div",{staticClass:"row justify-content-around"},[o("section",{staticClass:"col-md-6 col"},[o("div",{staticClass:"row justify-content-center d-flex mb-1"},[o("Box",{attrs:{"title-text":t.boxes.how.text,schema:t.boxes.how.schema,"left-logo":t.boxes.how.leftLogo,"right-logo":t.boxes.how.rightLogo}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),o("aside",{staticClass:"mt-4 mb-3"},[o("Box",{staticClass:"mt-4",attrs:{"title-text":t.boxes.callInAction.text,schema:t.boxes.callInAction.schema,"left-logo":t.boxes.callInAction.leftLogo,"right-logo":t.boxes.callInAction.rightLogo}})],1)]),t._v(" "),o("div",{staticClass:"col-md-5 col-sm-12"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("Box",{attrs:{"title-text":t.boxes.steps.text,schema:t.boxes.steps.schema,"left-logo":t.boxes.steps.leftLogo,"right-logo":t.boxes.steps.rightLogo}})],1)]),t._v(" "),o("div",{staticClass:"row d-flex justify-content-center"},[o("div",{staticClass:"col-sm-12 mb-3"},[o("CarouselClues")],1)])])])])])}),[function(){var t=this,o=t._self._c;return o("p",{staticClass:"text-center"},[t._v("\n          O aplicativo ficará responsável por lhe informar o\n          "),o("strong",[t._v("momento instantâneo")]),t._v(" da nota a ser tocada acompanhado da\n          "),o("b",[t._v("execução do áudio")]),t._v(" em um andamento pré-determinado.\n        ")])},function(){var t=this,o=t._self._c;return o("p",{staticClass:"text-center"},[t._v("\n          Cada dígito representa qual "),o("strong",[t._v("dedo")]),t._v(" será precionado e em qual\n          "),o("strong",[t._v("casa")]),t._v(", para gerar a nota exigida pelo exercício. No caso do\n          dígito for igual a 0, a nota será dada pela corda solta.\n        ")])},function(){var t=this,o=t._self._c;return o("p",{staticClass:"text-center mb-2"},[t._v("\n          Dessa forma, o aluno poderá praticar junto ao auxílio de um\n          "),o("b",[t._v('"correpetidor" virtual')]),t._v(", em qualquer momento e lugar!\n        ")])}],!1,null,null,null);o.default=component.exports;installComponents(component,{Box:e(485).default,CarouselClues:e(522).default})}}]);