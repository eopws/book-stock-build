(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Bhjy:function(t,e,a){"use strict";a.r(e),function(t,r){function n(t,e,a,r,n,c,i){try{var o=t[c](i),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(r,n)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==a)return;var r,n,c=[],i=!0,o=!1;try{for(a=a.call(t);!(i=(r=a.next()).done)&&(c.push(r.value),!e||c.length!==e);i=!0);}catch(t){o=!0,n=t}finally{try{i||null==a.return||a.return()}finally{if(o)throw n}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}var o=a("QRet"),l=a("SKo0"),u=a("xkrW"),s=a("Tf6/"),_=a("QU/D"),f=a("OaEI"),d=a("Y3FI");e.default=function(e){var a=e.id,i=c(Object(o.l)(null),2),p=i[0],m=i[1];if(Object(o.d)((function(){var t=function(){var t,e=(t=function*(){m(yield Object(u.b)(a))},function(){var e=this,a=arguments;return new Promise((function(r,c){function i(t){n(l,r,c,i,o,"next",t)}function o(t){n(l,r,c,i,o,"throw",t)}var l=t.apply(e,a);i(void 0)}))});return function(){return e.apply(this,arguments)}}();t()}),[]),!p)return t(r,null,"loading...");for(var v=[],y=0;y<5;y++)v.push(t("i",p.rating>y?{class:"icon-star ".concat(l.a.metaField__star)}:{class:"icon-star-empty ".concat(l.a.metaField__star," ").concat(l.a["metaField__star--empty"])}));var b=t(r,null,t("p",null,p.description.slice(0,300)),t("p",null,p.description.slice(300,700)),t("p",null,p.description.slice(700))),h=Object(_.a)(p),g=Object(o.a)((function(){return h((function(){return Object(d.route)("/cart")}))}),[]);return t("main",{class:l.a.page},t("div",{class:"".concat(l.a.page__blackout," _blackout _blackout--visible")}),t("div",{class:"".concat(l.a.page__background," _ibg"),style:{backgroundImage:"url(/".concat(p.bgImg,")")}}),t("div",{class:"".concat(l.a.page__content," ").concat(l.a.article," _container")},t("div",{class:l.a.articleMeta},t("div",{class:"".concat(l.a.articleMeta__img," _ibg"),style:{backgroundImage:"url(/".concat(p.img,")")}}),t("div",{class:"".concat(l.a.articleMeta__info," ").concat(l.a.articleMetaInfo)},t("div",{class:l.a.metaField},t("span",{class:l.a.metaField__key},"Название :"),t("span",{class:l.a.metaField__value},p.name)),t("div",{class:l.a.metaField},t("span",{class:l.a.metaField__key},"Автор :"),t("span",{class:l.a.metaField__value},p.author)),t("div",{class:l.a.metaField},t("span",{class:l.a.metaField__key},"Год :"),t("span",{class:l.a.metaField__value},p.year)),t("div",{class:l.a.metaField},t("span",{class:l.a.metaField__key},"Рейтинг :"),t("div",{class:l.a.metaField__value},t("div",{class:l.a.metaField__starWrapper},v.map((function(t){return t}))),t("span",{class:"rating-number"},p.ratingNumber))),t("div",{class:l.a.articleMetaInfo__footer},t(s.a,{onClick:g},"Купить"),t("span",{class:"".concat(l.a.articleMetaInfo__price," ").concat(p.salePrice&&l.a["articleMetaInfo__price--sale"])},p.price," Р"),p.salePrice?t("span",{class:l.a.articleMetaInfo__salePrice},p.salePrice," Р"):"",t(f.a,{className:l.a.articleMetaInfo__heart,book:p})))),t("div",{class:l.a.article__textWrapper},t("h3",{class:l.a.article__textTitle},"Описание :"),t("div",{class:l.a.article__text},b))))}}.call(this,a("hosL").h,a("hosL").Fragment)},OaEI:function(t,e,a){"use strict";(function(t){var r=a("QU/D");e.a=function(e){var a=e.className,n=e.checked,c=e.book,i=Object(r.a)(c);return t("button",{class:"".concat(a," ").concat(n?"icon-heart":"icon-heart-empty"),onClick:i})}}).call(this,a("hosL").h)},"QU/D":function(t,e,a){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==a)return;var r,n,c=[],i=!0,o=!1;try{for(a=a.call(t);!(i=(r=a.next()).done)&&(c.push(r.value),!e||c.length!==e);i=!0);}catch(t){o=!0,n=t}finally{try{i||null==a.return||a.return()}finally{if(o)throw n}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}var c=a("QRet"),i=a("/m4v"),o=a("lCHH"),l=a("6ZK8");e.a=function(t){var e=Object(i.c)((function(t){return t.authReducer})),a=Object(i.b)(),n=r(Object(c.l)(!1),2),u=n[0],s=n[1],_=Object(c.a)((function(r){e.isAuthenticated?(a(Object(l.a)(t)),r()):(a(Object(o.c)(!0)),s(!0))}),[e.isAuthenticated,t]);return Object(c.d)((function(){u&&(a(Object(l.a)(t)),s(!1))}),[e.isAuthenticated]),Object(c.d)((function(){e.isAuthPopupOpen||s(!1)}),[e.isAuthPopupOpen]),_}},SKo0:function(t,e){"use strict";e.a={page:"page__wdGtf",page__blackout:"page__blackout__3al1U",page__background:"page__background__f49gZ",page__content:"page__content__F0c1j",article__textWrapper:"article__textWrapper__Btcdo",article__textTitle:"article__textTitle__MXrRG",article__text:"article__text__n2mnt",articleMeta:"articleMeta__yEpYW",articleMeta__img:"articleMeta__img__PH1I+",articleMeta__info:"articleMeta__info__J0dNi",articleMetaInfo__footer:"articleMetaInfo__footer__88aAm",articleMetaInfo__price:"articleMetaInfo__price__ugF5l","articleMetaInfo__price--sale":"articleMetaInfo__price--sale__t2Aa-",articleMetaInfo__salePrice:"articleMetaInfo__salePrice__uEhl-",articleMetaInfo__heart:"articleMetaInfo__heart__gLJR8",metaField:"metaField__BbVMf",metaField__key:"metaField__key__GKDHd",metaField__value:"metaField__value__BBuyN",metaField__starWrapper:"metaField__starWrapper__4R88S",metaField__star:"metaField__star__A5ajA","metaField__star--empty":"metaField__star--empty__yeMpK"}},xkrW:function(t,e,a){"use strict";function r(t,e,a,r,n,c,i){try{var o=t[c](i),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(r,n)}function n(t){return function(){var e=this,a=arguments;return new Promise((function(n,c){function i(t){r(l,n,c,i,o,"next",t)}function o(t){r(l,n,c,i,o,"throw",t)}var l=t.apply(e,a);i(void 0)}))}}a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return o}));var c=a("czhI"),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.search,a=void 0!==e&&e,r=t.sortType,i=void 0!==r&&r,o=t.filters,l=void 0===o?{}:o,u=t.pagination,s=void 0===u?{}:u,_=t.onSale,f=void 0!==_&&_;return new Promise((function(t){setTimeout(n((function*(){var e="?";for(var r in e+=a?"search=".concat(a,"&"):"",e+=i?"sortType=".concat(i,"&"):"",e+=f?"onSale=true&":"",e+=s?"page=".concat(s.page,"&perPage=").concat(s.perPage,"&"):"",l){var n=l[r];n!==Object(n)?e+="".concat(r,"=").concat(n,"&"):Array.isArray(n)&&(e+="".concat(r,"=").concat(n.join(),"&"))}e=e.slice(0,-1);var o=yield c.a.get("/api/books".concat(e));t(o.data)})),0)}))},o=function(t){return new Promise((function(e){setTimeout(n((function*(){var a=yield c.a.get("/api/book/".concat(t));e(a.data)})),1e3)}))}}}]);
//# sourceMappingURL=route-book.chunk.edefa.js.map