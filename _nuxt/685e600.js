(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{154:function(t,o,n){"use strict";n.r(o);var e=n(17),r=(n(53),n(201)),f=n.n(r),c=n(299),l=n.n(c),d=n(202),m=n.n(d),h=n(300),v=n.n(h),w=n(203),x=n.n(w),y=n(301),A=n.n(y),k={props:{baseUrl:{type:String,default:function(){return""}}},data:function(){return{icons:{cordaria:{url:f.a,altText:"Logotipo do Cordaria",enabled:l.a,disabled:f.a},email:{href:"mailto:japraticouhoje@cordaria.com.br",url:m.a,altText:"Ícone contato",enabled:v.a,disabled:m.a},insta:{url:x.a,altText:"Ícone Instagram",enabled:A.a,disabled:x.a}},currentUrl:this.baseUrl,isActiveTheProject:!1,isActiveTheResearch:!1,isActiveThePratice:!1,isActiveTheTutorial:!1,isActiveClues:!1,isOverIconMenu:!1,isOverIcontEmail:!1,isOverIconInstagram:!1,isCollapse:!0}},watch:{$route:function(){this.iniciateActive()}},mounted:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.getUrl();case 2:t.currentUrl=o.sent,t.iniciateActive();case 4:case"end":return o.stop()}}),o)})))()},methods:{getUrl:function(){return window.location.href},imageMouseOver:function(img){return img.enabled},imageMouseLeave:function(img){return img.disabled},showMenu:function(){this.isCollapse=!this.isCollapse},removeAllActive:function(){this.isActiveTheProject=!1,this.isActiveTheResearch=!1,this.isActiveThePratice=!1,this.isActiveTheTutorial=!1,this.isActiveClues=!1,this.isOverIconMenu=!1},iniciateActive:function(){switch(this.removeAllActive(),window.location.href){case"".concat(this.baseUrl):this.isActiveTheProject=!0;break;case"".concat(this.baseUrl,"a-pesquisa"):this.isActiveTheResearch=!0;break;case"".concat(this.baseUrl,"a-pratica"):this.isActiveThePratice=!0;break;case"".concat(this.baseUrl,"o-tutorial"):this.isActiveTheTutorial=!0;break;case"".concat(this.baseUrl,"dicas"):this.isActiveClues=!0}}}},S=(n(394),n(64)),component=Object(S.a)(k,(function(){var t=this,o=t._self._c;return o("nav",{staticClass:"nav navbar navbar-expand-lg align-content-center"},[o("div",{staticClass:"container-fluid"},[o("nuxt-link",{staticClass:"navbar-brand logo-cordaria",class:{active:t.isActiveTheProject},attrs:{id:"link-principal",to:"/","aria-current":"page"}},[o("img",{staticClass:"img img-fluid",attrs:{src:t.icons.cordaria.url,alt:t.icons.cordaria.altText},on:{mouseover:function(o){t.icons.cordaria.url=t.imageMouseOver(t.icons.cordaria)},mouseleave:function(o){t.icons.cordaria.url=t.imageMouseLeave(t.icons.cordaria)}}})]),t._v(" "),o("button",{staticClass:"navbar-dark navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:function(o){return t.showMenu()}}},[o("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),o("div",{staticClass:"navbar-collapse",class:{collapse:t.isCollapse},attrs:{id:"navbarSupportedContent"}},[o("div",{staticClass:"container-fluid justify-content-end"},[o("ul",{staticClass:"navbar-nav",class:{collapseColor:!t.isCollapse}},[o("li",{staticClass:"nav-item"},[o("nuxt-link",{staticClass:"nav-link the-project-link",class:{theProjectLinkActive:t.isActiveTheProject},attrs:{to:"/","aria-current":"page"}},[o("span",[t._v("O Projeto")])])],1),t._v(" "),o("li",{staticClass:"nav-item"},[o("nuxt-link",{staticClass:"nav-link the-research-link",class:{theResearchLinkActive:t.isActiveTheResearch},attrs:{to:"/a-pesquisa","aria-current":"page"}},[o("span",[t._v("A Pesquisa")])])],1),t._v(" "),o("li",{staticClass:"nav-item"},[o("nuxt-link",{staticClass:"nav-link the-pratice-link",class:{thePraticeLinkActive:t.isActiveThePratice},attrs:{to:"/a-pratica"}},[o("span",[t._v("A Prática")])])],1),t._v(" "),o("li",{staticClass:"nav-item"},[o("nuxt-link",{staticClass:"nav-link the-tutorial-link",class:{theTutorialLinkActive:t.isActiveTheTutorial},attrs:{to:"/o-tutorial"}},[o("span",[t._v("O Tutorial")])])],1),t._v(" "),o("li",{staticClass:"nav-item"},[o("nuxt-link",{staticClass:"nav-link clues-link",class:{cluesLinkActive:t.isActiveClues},attrs:{to:"/dicas"}},[o("span",[t._v("Dicas")])])],1),t._v(" "),o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link email-link",attrs:{href:t.icons.email.href}},[o("img",{staticClass:"img img-fluid",attrs:{src:t.icons.email.url,alt:t.icons.email.altText},on:{mouseover:function(o){t.icons.email.url=t.imageMouseOver(t.icons.email)},mouseleave:function(o){t.icons.email.url=t.imageMouseLeave(t.icons.email)}}})])]),t._v(" "),o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link insta-link",attrs:{href:"https://instagram.com/cordaria.app",target:"_blank"}},[o("img",{staticClass:"img img-fluid",attrs:{src:t.icons.insta.url,alt:t.icons.insta.altText},on:{mouseover:function(o){t.icons.insta.url=t.imageMouseOver(t.icons.insta)},mouseleave:function(o){t.icons.insta.url=t.imageMouseLeave(t.icons.insta)}}})])])])])])],1)])}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{Nav:n(154).default})},201:function(t,o,n){t.exports=n.p+"img/logo-cordaria-disabled.c9af4f0.png"},202:function(t,o,n){t.exports=n.p+"img/email-icon-disabled.9f59cc4.png"},203:function(t,o,n){t.exports=n.p+"img/logo-insta-disabled.5e54067.png"},206:function(t,o,n){"use strict";var e=n(8),r=n(209),f=n.n(r);e.default.component("VueSlickCarousel",f.a)},207:function(t,o,n){"use strict";var e=n(8),r=n(160);n(262),n(263);e.default.use(r.a)},264:function(t,o,n){var content=n(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("e49cdde0",content,!0,{sourceMap:!1})},265:function(t,o,n){var content=n(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("3d903e04",content,!0,{sourceMap:!1})},266:function(t,o,n){var content=n(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("4c0ff95c",content,!0,{sourceMap:!1})},299:function(t,o,n){t.exports=n.p+"img/logo-cordaria-enabled.78de459.png"},300:function(t,o){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAASCAYAAACuLnWgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXhJREFUeNq0Ve1xgkAUPJj8xw40FWAHIR1oBWIFUkBGwaQAUkGgA1NBSAXRDrQDrIDsZpYZwhxJDHgzT8d7H/t2393pVFVlnrbbmTFmaoZf5cN6nTqPSRLix4u53spdfEzMdVdJkAx2C3sfuPgBdg+LCbInG2gX4HsJO/cszvwE9TjjkvUJ4sHeMPwYjkzy5f8EoBpT1IlRj7MuYGO3EbCBg5sGQaGoni7ofi41StTJdJhIwLit4DvYEUHspoCRVfILwLPk3jFP3S+aAa4liegfSIjEKu44GF+DhT+ClbprBPDbBXlPqh8kIKNjvSGdCZoJvN4fUYFanktAlkqkviHlawdIHvpTndLCBtQFwjnsWkmvAivVOZmsGjlz2Mj2ethAchXYW7o6q3PqP7b4Avk2TceNZZhRF23trTrk9ZQX6K4tbKfroADrCfnj8sQ0Ur1vIKQaaoB+z2fFV6OzGshtMAjbl6gnUKyaJ0d/WhPRHHqlfAk+BRgAZoaPxFVrRWQAAAAASUVORK5CYII="},301:function(t,o,n){t.exports=n.p+"img/logo-insta-enabled.83acb79.png"},302:function(t,o,n){t.exports=n.p+"img/public-agencies-horizontal-logo.fac1f52.png"},308:function(t,o,n){"use strict";n(1);var e=n(154),r={name:"DefaultLayout",components:{Footer:n(309).default,Nav:e.default},data:function(){return{baseUrl:"https://beta.cordaria.com.br/",isIndex:!1,indexed:{hid:"null",name:"robots",content:"all"},noIndexed:{hid:"null",name:"robots",content:"noindex"},metaIndexed:{}}},head:function(){return this.isIndex?this.metaIndexed=this.indexed:this.metaIndexed=this.noIndexed,{meta:[{charset:"utf-8"},{httpEquiv:"content-language",content:"pt-br"},{httpEquiv:"content-type",content:"text/html"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"format-detection",content:"telephone=no"},{name:"author",content:"Lu Sacramento"},{name:"copyright",content:"Copyright © 2021. Cordaria. Todos Diretos Reservados. Feito por Lu Sacramento"},{name:"generator",content:"Nuxt v.2.15.7"},{name:"rating",content:"general"}],link:[{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",crossorigin:"anonymous"},this.metaIndexed]}}},f=(n(398),n(64)),component=Object(f.a)(r,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"app container-fluid",attrs:{id:"app"}},[o("div",{staticClass:"d-flex justify-content-center",attrs:{id:"nav"}},[o("Nav",{attrs:{"base-url":t.baseUrl}})],1),t._v(" "),o("main",{staticClass:"router-view",attrs:{id:"main"}},[o("Nuxt")],1),t._v(" "),o("div",{attrs:{id:"footer"}},[o("Footer")],1)])}),[],!1,null,null,null);o.a=component.exports;installComponents(component,{Nav:n(154).default})},309:function(t,o,n){"use strict";n.r(o);n(188),n(25);var e=n(302),r=n.n(e),f={data:function(){return{logoAldirBlanc:{link:r.a,altText:"logos orgãos culturais públicos"},team:{author:{name:"Lu Sacramento",link:"https://lusacramento.com.br"},design:{name:"Gabriel Barreto",link:"https://mixeldesign.com.br/"}},isDisabledfoot:!1,version:"beta 2.0.0 - 2022"}}},c=(n(396),n(64)),component=Object(c.a)(f,(function(){var t=this,o=t._self._c;return o("div",[o("footer",{staticClass:"footer container-fluid d-flex justify-content-center"},[o("div",{staticClass:"row align-items-center d-flex justify-content-center"},[o("div",{staticClass:"col-sm-3 credits"},[o("div",{attrs:{id:"credits"}},[o("p",{staticClass:"d-block"},[t._v("\n            Developer:\n            "),o("a",{attrs:{href:t.team.author.link,rel:"nofollow",target:"_blank"}},[t._v(t._s(t.team.author.name))]),t._v(" "),o("br"),t._v("\n            Designer:  \n            "),o("a",{attrs:{href:t.team.design.link,rel:"nofollow",target:"_blank"}},[t._v(t._s(t.team.design.name))])])])]),t._v(" "),o("div",{staticClass:"col-sm-3"},[o("div",{staticClass:"copyright text-center"},[o("p",[t._v("\n            Todos os Direitos Reservados\n            "),o("br"),t._v("\n            Versão "+t._s(t.version)+"\n          ")])])]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("div",{staticClass:"financied"},[o("img",{staticClass:"figure figure-img img-fluid",attrs:{id:"publics-logo",src:t.logoAldirBlanc.link,alt:t.logoAldirBlanc.altText}})])])])])])}),[],!1,null,null,null);o.default=component.exports},314:function(t,o,n){n(315),t.exports=n(316)},359:function(t,o,n){var content=n(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("6943c2ac",content,!0,{sourceMap:!1})},360:function(t,o,n){var e=n(62)((function(i){return i[1]}));e.push([t.i,'h1{font-family:"Encode Sans"}',""]),e.locals={},t.exports=e},364:function(t,o,n){var content=n(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("2ec07acc",content,!0,{sourceMap:!1})},365:function(t,o,n){var e=n(62),r=n(366),f=n(367),c=n(368),l=n(369),d=n(370),m=n(371),h=n(372),v=n(373),w=n(374),x=n(375),y=n(376),A=n(377),k=n(378),S=n(379),_=n(380),E=n(381),C=n(382),T=n(383),j=n(384),z=n(385),P=n(386),I=n(387),L=n(388),M=n(389),R=n(390),U=n(391),O=n(392),B=n(393),F=e((function(i){return i[1]})),D=r(f),N=r(c),G=r(l),J=r(d),V=r(m),Z=r(h),Q=r(v),H=r(w),W=r(x),Y=r(y),X=r(A),K=r(k),$=r(S),tt=r(_),at=r(E),ot=r(C),nt=r(T),et=r(j),it=r(z),st=r(P),ft=r(I),ct=r(L),ut=r(M),lt=r(R),pt=r(U),mt=r(O),ht=r(B);F.push([t.i,'@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:100;src:url('+D+') format("woff2");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+1ea0-1ef9,u+20ab}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:100;src:url('+N+') format("woff2");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:100;src:url('+G+') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:200;src:url('+J+') format("woff2");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+1ea0-1ef9,u+20ab}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:200;src:url('+V+') format("woff2");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:200;src:url('+Z+') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:300;src:url('+Q+') format("woff2");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+1ea0-1ef9,u+20ab}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:300;src:url('+H+') format("woff2");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:300;src:url('+W+') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:400;src:url('+Y+') format("woff2");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+1ea0-1ef9,u+20ab}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:400;src:url('+X+') format("woff2");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:400;src:url('+K+') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:500;src:url('+$+') format("woff2");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+1ea0-1ef9,u+20ab}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:500;src:url('+tt+') format("woff2");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:500;src:url('+at+') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:600;src:url('+ot+') format("woff2");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+1ea0-1ef9,u+20ab}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:600;src:url('+nt+') format("woff2");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:600;src:url('+et+') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:700;src:url('+it+') format("woff2");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+1ea0-1ef9,u+20ab}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:700;src:url('+st+') format("woff2");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:700;src:url('+ft+') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:800;src:url('+ct+') format("woff2");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+1ea0-1ef9,u+20ab}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:800;src:url('+ut+') format("woff2");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:800;src:url('+lt+') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:900;src:url('+pt+') format("woff2");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+1ea0-1ef9,u+20ab}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:900;src:url('+mt+') format("woff2");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:"Encode Sans";font-stretch:100%;font-style:normal;font-weight:900;src:url('+ht+') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}',""]),F.locals={},t.exports=F},367:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-100-vietnamese1.a59e38a.woff2"},368:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-100-latin-ext2.f3918ba.woff2"},369:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-100-latin3.910f9f9.woff2"},370:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-200-vietnamese4.a59e38a.woff2"},371:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-200-latin-ext5.f3918ba.woff2"},372:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-200-latin6.910f9f9.woff2"},373:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-300-vietnamese7.a59e38a.woff2"},374:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-300-latin-ext8.f3918ba.woff2"},375:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-300-latin9.910f9f9.woff2"},376:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-400-vietnamese10.a59e38a.woff2"},377:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-400-latin-ext11.f3918ba.woff2"},378:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-400-latin12.910f9f9.woff2"},379:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-500-vietnamese13.a59e38a.woff2"},380:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-500-latin-ext14.f3918ba.woff2"},381:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-500-latin15.910f9f9.woff2"},382:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-600-vietnamese16.a59e38a.woff2"},383:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-600-latin-ext17.f3918ba.woff2"},384:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-600-latin18.910f9f9.woff2"},385:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-700-vietnamese19.a59e38a.woff2"},386:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-700-latin-ext20.f3918ba.woff2"},387:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-700-latin21.910f9f9.woff2"},388:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-800-vietnamese22.a59e38a.woff2"},389:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-800-latin-ext23.f3918ba.woff2"},390:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-800-latin24.910f9f9.woff2"},391:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-900-vietnamese25.a59e38a.woff2"},392:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-900-latin-ext26.f3918ba.woff2"},393:function(t,o,n){t.exports=n.p+"fonts/Encode_Sans-900-latin27.910f9f9.woff2"},394:function(t,o,n){"use strict";n(264)},395:function(t,o,n){var e=n(62)((function(i){return i[1]}));e.push([t.i,".nav{font-family:var(--font-semibold);font-size:var(--font-size-nav);margin-left:5px;margin-right:5px}.collapseColor{background-color:var(--bg-nav-collapse)!important;border-radius:15pt;color:#fff!important;display:block;padding:10px;width:200px!important}.nav-link{color:var(--font-color-nav)!important;margin:0 10px}.the-project-link:hover,.theProjectLinkActive{color:var(--the-project-color)!important}.the-research-link:hover,.theResearchLinkActive{color:var(--the-research-color)!important}.the-pratice-link:hover,.thePraticeLinkActive{color:var(--the-pratice-color)!important}.the-tutorial-link:hover,.theTutorialLinkActive{color:var(--the-tutorial-color)!important}.clues-link:hover,.cluesLinkActive{color:var(--clues-color)!important}button:hover{background-color:hsla(0,0%,100%,.089)}@media (min-width:991.98px){.logo-cordaria{margin-left:115px}}@media (max-width:576px){.logo-cordaria{margin-left:28px}}",""]),e.locals={},t.exports=e},396:function(t,o,n){"use strict";n(265)},397:function(t,o,n){var e=n(62)((function(i){return i[1]}));e.push([t.i,'.footer{border-top:2px solid hsla(0,0%,100%,.3)}.copyright,.credits{font-family:"Encode Sans";font-weight:var(--font-light)}.credits{font-size:.8em}.copyright{font-size:.7em}.disable-footer{display:none}@media (min-width:991.96px){.footer{width:80%!important}}@media (max-width:991.98px){.credits{text-align:center!important}}',""]),e.locals={},t.exports=e},398:function(t,o,n){"use strict";n(266)},399:function(t,o,n){var e=n(62)((function(i){return i[1]}));e.push([t.i,':root{--the-project-color:rgba(173,0,225,.7);--the-project-inbox:#520a6c;--the-project-outbox:#44155a;--the-research-color:rgba(223,2,154,.7);--the-research-inbox:rgba(223,2,154,.5);--the-research-outbox:rgba(223,2,154,.5);--the-pratice-color:rgba(240,2,14,.7);--the-pratice-degrade:rgba(240,2,14,.5);--the-pratice-inbox:rgba(240,2,14,.7);--the-pratice-outbox:rgba(240,2,14,.4);--the-tutorial-color:rgba(253,91,0,.7);--the-tutorial-inbox:#c84f0d;--the-tutorial-outbox:#93431b;--clues-color:rgba(255,139,0,.7);--clues-degrade:rgba(255,139,0,.5);--clues-border:2px solid rgba(255,139,0,.7);--clues-border-nav:2px solid hsla(0,0%,50%,.5);--clues-border-estudo:1px solid rgba(255,139,0,.7);--bg-app:#1c1f26;--bg-nav:#1d1e28;--bg-nav-collapse:rgba(29,30,40,.855);--borders-nav:15px solid #1a1b24;--border-main:1px solid #8e8f94;--bg-layer-top:#282a36;--bg-layer-center:#282a36;--bg-degrade-layer-center:linear-gradient(180deg,#282a36 37%,#1d1e28 77%);--font-thin:100;--font-extra-light:200;--font-light:300;--font-regular:400;--font-medium:500;--font-semi-bold:600;--font-bold:700;--font-extra-bold:800;--font-black:900;--font-size-nav:1.2em;--font-size-h1:2.4em;--font-size-h2:1.5em;--font-size-h3:0.8em;--font-size-h4:1em;--font-size-p:0.9em;--font-size-light:0.9em;--font-color-nav:#7d7d7d;--font-color-h1:#5d5e63;--font-color-p:hsla(0,0%,100%,.5);--font-color-h2:hsla(0,0%,100%,.5);--font-color-link:hsla(0,0%,100%,.5);--font-color-hover:hsla(0,0%,100%,.7)}.title{color:#5d5e63!important;color:var(--font-color-h1)!important;font-family:"Encode Sans";font-size:2.4em;font-size:var(--font-size-h1);font-weight:900;font-weight:var(--font-black)}p{color:hsla(0,0%,100%,.5)!important;color:var(--font-color-p)!important;font-family:"Encode Sans";font-size:.9em;font-size:var(--font-size-p);font-weight:400;font-weight:var(--font-regular)}.large-line-height{line-height:1.7}a{color:hsla(0,0%,100%,.5)!important;color:var(--font-color-link)!important;font-family:"Encode Sans";font-weight:600;font-weight:var(--font-semi-bold)}a:hover{color:hsla(0,0%,100%,.7)!important;color:var(--font-color-hover)!important}strong{font-family:"Encode sans";font-weight:600;font-weight:var(--font-semi-bold)}b,strong{color:hsla(0,0%,100%,.7)!important}b{font-family:"Encode sans";font-weight:700;font-weight:var(--font-bold)}h2{color:hsla(0,0%,100%,.5);color:var(--font-color-h2);font-family:"Encode Sans";font-size:1.5em!important;font-size:var(--font-size-h2)!important;font-weight:600;font-weight:var(--font-semi-bold)}h3{font-family:"Encode Sans";font-size:.8em!important;font-size:var(--font-size-h3)!important;font-weight:600;font-weight:var(--font-semi-bold)}h4{font-family:"Encode Sans";font-size:1em!important;font-size:var(--font-size-h4)!important;font-weight:600;font-weight:var(--font-semi-bold)}html{background-color:#1c1f26;background-color:var(--bg-app)}@media (min-width:991.98px){div.app{grid-template-rows:17vh 70vh 11vh}}div.app{background-color:#1c1f26;background-color:var(--bg-app);color:#fff;display:grid;grid-template-areas:"nav" "main" "foot";margin:0;padding:0}#nav{background-color:#1d1e28;background-color:var(--bg-nav);border-bottom:15px solid #1a1b24;border-bottom:var(--borders-nav);border-top:15px solid #1a1b24;border-top:var(--borders-nav);grid-area:nav}#main{border-top:1px solid #8e8f94;border-top:var(--border-main);grid-area:main}#footer{background-color:#1c1f26!important;background-color:var(--bg-app)!important;grid-area:foot}.hideFooter{display:none}.layer-top{background-color:#282a36;background-color:var(--bg-layer-top)}.layer-center{background:#282a36;background:var(--bg-layer-center);background:linear-gradient(180deg,#282a36 37%,#1d1e28 77%);background:var(--bg-degrade-layer-center);width:80%!important}.justify{text-align:justify}.no-text-decoration{-webkit-text-decoration:none;text-decoration:none}',""]),e.locals={},t.exports=e},84:function(t,o,n){"use strict";var e={layout:"error"},r=n(64),component=Object(r.a)(e,(function(){var t=this,o=t._self._c;return o("div",[404===t.error.statusCode?o("h1",[t._v("Página não encontrada")]):o("h1",[t._v("Ocorreu um erro")]),t._v(" "),o("NuxtLink",{attrs:{to:"/"}},[t._v("Página Inicial")])],1)}),[],!1,null,null,null);o.a=component.exports}},[[314,17,4,18]]]);