!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="./src/index.js")}({"./node_modules/redux-thunk/dist/redux-thunk.min.js":function(e,t,n){!function(t,n){e.exports=n()}(0,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t){"use strict";function n(e){return function(t){var n=t.dispatch,i=t.getState;return function(t){return function(r){return"function"==typeof r?r(n,i,e):t(r)}}}}t.__esModule=!0;var i=n();i.withExtraArgument=n,t.default=i}])})},"./node_modules/redux/dist/redux.min.js":function(e,t,n){!function(t,n){e.exports=n()}(0,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.compose=t.applyMiddleware=t.bindActionCreators=t.combineReducers=t.createStore=void 0;var r=n(2),o=i(r),a=n(7),s=i(a),u=n(6),c=i(u),p=n(5),l=i(p),d=n(1),f=i(d);i(n(3)),t.createStore=o.default,t.combineReducers=s.default,t.bindActionCreators=c.default,t.applyMiddleware=l.default,t.compose=f.default},function(e,t){"use strict";function n(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];if(0===t.length)return function(e){return e};if(1===t.length)return t[0];var i=t[t.length-1],r=t.slice(0,-1);return function(){return r.reduceRight(function(e,t){return t(e)},i.apply(void 0,arguments))}}t.__esModule=!0,t.default=n},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){function i(){w===h&&(w=h.slice())}function o(){return v}function s(e){if("function"!=typeof e)throw Error("Expected listener to be a function.");var t=!0;return i(),w.push(e),function(){if(t){t=!1,i();var n=w.indexOf(e);w.splice(n,1)}}}function p(e){if(!(0,a.default)(e))throw Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(m)throw Error("Reducers may not dispatch actions.");try{m=!0,v=g(v,e)}finally{m=!1}for(var t=h=w,n=0;t.length>n;n++)t[n]();return e}function l(e){if("function"!=typeof e)throw Error("Expected the nextReducer to be a function.");g=e,p({type:c.INIT})}function d(){var e,t=s;return e={subscribe:function(e){function n(){e.next&&e.next(o())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");return n(),{unsubscribe:t(n)}}},e[u.default]=function(){return this},e}var f;if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw Error("Expected the enhancer to be a function.");return n(r)(e,t)}if("function"!=typeof e)throw Error("Expected the reducer to be a function.");var g=e,v=t,h=[],w=h,m=!1;return p({type:c.INIT}),f={dispatch:p,subscribe:s,getState:o,replaceReducer:l},f[u.default]=d,f}t.__esModule=!0,t.ActionTypes=void 0,t.default=r;var o=n(4),a=i(o),s=n(12),u=i(s),c=t.ActionTypes={INIT:"@@redux/INIT"}},function(e,t){"use strict";function n(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw Error(e)}catch(e){}}t.__esModule=!0,t.default=n},function(e,t,n){function i(e){if(!a(e)||f.call(e)!=s||o(e))return!1;var t=r(e);if(null===t)return!0;var n=l.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&p.call(n)==d}var r=n(8),o=n(9),a=n(11),s="[object Object]",u=Function.prototype,c=Object.prototype,p=u.toString,l=c.hasOwnProperty,d=p.call(Object),f=c.toString;e.exports=i},function(e,t,n){"use strict";function i(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(e){return function(n,i,o){var s=e(n,i,o),u=s.dispatch,c=[],p={getState:s.getState,dispatch:function(e){return u(e)}};return c=t.map(function(e){return e(p)}),u=a.default.apply(void 0,c)(s.dispatch),r({},s,{dispatch:u})}}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=i;var o=n(1),a=function(e){return e&&e.__esModule?e:{default:e}}(o)},function(e,t){"use strict";function n(e,t){return function(){return t(e.apply(void 0,arguments))}}function i(e,t){if("function"==typeof e)return n(e,t);if("object"!=typeof e||null===e)throw Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var i=Object.keys(e),r={},o=0;i.length>o;o++){var a=i[o],s=e[a];"function"==typeof s&&(r[a]=n(s,t))}return r}t.__esModule=!0,t.default=i},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n=t&&t.type;return"Given action "+(n&&'"'+n+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function o(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:s.ActionTypes.INIT}))throw Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');if(void 0===n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+s.ActionTypes.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')})}function a(e){for(var t=Object.keys(e),n={},i=0;t.length>i;i++){var a=t[i];"function"==typeof e[a]&&(n[a]=e[a])}var s,u=Object.keys(n);try{o(n)}catch(e){s=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(s)throw s;for(var i=!1,o={},a=0;u.length>a;a++){var c=u[a],p=n[c],l=e[c],d=p(l,t);if(void 0===d){var f=r(c,t);throw Error(f)}o[c]=d,i=i||d!==l}return i?o:e}}t.__esModule=!0,t.default=a;var s=n(2);i((i(n(4)),n(3)))},function(e,t,n){var i=n(10),r=i(Object.getPrototypeOf,Object);e.exports=r},function(e,t){function n(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}e.exports=n},function(e,t){function n(e,t){return function(n){return e(t(n))}}e.exports=n},function(e,t){function n(e){return!!e&&"object"==typeof e}e.exports=n},function(e,t,n){e.exports=n(13)},function(e,t,n){(function(e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(14),r=function(e){return e&&e.__esModule?e:{default:e}}(i),o=void 0;void 0!==e?o=e:"undefined"!=typeof window&&(o=window);var a=(0,r.default)(o);t.default=a}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n}])})},"./src/actionTypes.js":function(e,t,n){"use strict";t.a={BOOT:"BOOT",LINK_DWELL:"LINK_DWELL",ABANDON_START:"ABANDON_START",ABANDON_END:"ABANDON_END",LINK_CLICK:"LINK_CLICK",FETCH_START:"FETCH_START",FETCH_END:"FETCH_END",FETCH_COMPLETE:"FETCH_COMPLETE",FETCH_FAILED:"FETCH_FAILED",PAGEVIEW_LOGGED:"PAGEVIEW_LOGGED",PREVIEW_DWELL:"PREVIEW_DWELL",PREVIEW_SHOW:"PREVIEW_SHOW",PREVIEW_CLICK:"PREVIEW_CLICK",PREVIEW_SEEN:"PREVIEW_SEEN",SETTINGS_SHOW:"SETTINGS_SHOW",SETTINGS_HIDE:"SETTINGS_HIDE",SETTINGS_CHANGE:"SETTINGS_CHANGE",EVENT_LOGGED:"EVENT_LOGGED",STATSV_LOGGED:"STATSV_LOGGED"}},"./src/actions.js":function(e,t,n){"use strict";function i(e){return e.timestamp=y.now(),e}function r(e,t,n,i,r){var o=r.get("wgUserEditCount"),a=n.getPreviewCount();return{type:w.a.BOOT,isEnabled:e,isNavPopupsEnabled:r.get("wgPopupsConflictsWithNavPopupGadget"),sessionToken:t.sessionId(),pageToken:i(),page:{title:r.get("wgTitle"),namespaceId:r.get("wgNamespaceNumber"),id:r.get("wgArticleId")},user:{isAnon:t.isAnon(),editCount:o,previewCount:a}}}function o(e,t,r,o){var a=t.getPrefixedDb(),s=t.namespace;return function(u){var c;return u(i({type:w.a.FETCH_START,el:r,title:a,namespaceId:s})),c=e.getPageSummary(a).then(function(e){return u(i({type:w.a.FETCH_END,el:r})),e}).catch(function(e){throw u({type:w.a.FETCH_FAILED,el:r}),e}),T.when(c,n.i(m.a)(k-b)).then(function(e){u({type:w.a.FETCH_COMPLETE,el:r,result:e,token:o})}).catch(function(e,i){i&&i.xhr&&0===i.xhr.readyState&&"error"===i.textStatus&&""===i.exception||u({type:w.a.FETCH_COMPLETE,el:r,result:n.i(E.a)(a,t.getUrl()),token:o})})}}function a(e,t,r,a,s){var u=s(),c=e.getPrefixedDb(),p=e.namespace;return function(s,l){function d(){return l().preview.activeToken===u}var f=i({type:w.a.LINK_DWELL,el:t,event:r,token:u,title:c,namespaceId:p});return s(f),d()?n.i(m.a)(b).then(function(){if(l().preview.enabled&&d())return s(o(a,e,t,u))}):T.Deferred().resolve().promise()}}function s(){return function(e,t){var r=t().preview.activeToken;return r?(e(i({type:w.a.ABANDON_START,token:r})),n.i(m.a)(x).then(function(){e({type:w.a.ABANDON_END,token:r})})):T.Deferred().resolve().promise()}}function u(e){return i({type:w.a.LINK_CLICK,el:e})}function c(){return{type:w.a.PREVIEW_DWELL}}function p(e){return function(t,r){return t(i({type:w.a.PREVIEW_SHOW,token:e})),n.i(m.a)(S).then(function(){var n=r(),i=n.preview,o=i&&i.fetchResponse,a=i&&i.activeToken;a&&a===e&&o&&"page"===o.type&&t({type:w.a.PREVIEW_SEEN,title:o.title,namespace:0})})}}function l(){return{type:w.a.PAGEVIEW_LOGGED}}function d(){return{type:w.a.SETTINGS_SHOW}}function f(){return{type:w.a.SETTINGS_HIDE}}function g(e){return function(t,n){t({type:w.a.SETTINGS_CHANGE,wasEnabled:n().preview.enabled,enabled:e})}}function v(e){return{type:w.a.EVENT_LOGGED,event:e}}function h(){return{type:w.a.STATSV_LOGGED}}Object.defineProperty(t,"__esModule",{value:!0}),t.boot=r,t.fetch=o,t.linkDwell=a,t.abandon=s,t.linkClick=u,t.previewDwell=c,t.previewShow=p,t.pageviewLogged=l,t.showSettings=d,t.hideSettings=f,t.saveSettings=g,t.eventLogged=v,t.statsvLogged=h;var w=n("./src/actionTypes.js"),m=n("./src/wait.js"),E=n("./src/preview/model.js"),T=jQuery,y=window.mediaWiki,b=150,S=1e3,k=500,x=300},"./src/changeListener.js":function(e,t,n){"use strict";function i(e,t){var n;e.subscribe(function(){var i=n;n=e.getState(),i!==n&&t(i,n)})}t.a=i},"./src/changeListeners/eventLogging.js":function(e,t,n){"use strict";function i(e,t,n){return function(i,o){var a=o.eventLogging,s=a.event;s&&(s=r.extend(!0,{},a.baseData,s,{timestamp:n()}),t("event.Popups",s),e.eventLogged(s))}}t.a=i;var r=jQuery},"./src/changeListeners/footerLink.js":function(e,t,n){"use strict";function i(){var e,t=a("<li>").append(a("<a>").attr("href","#").text(o.message("popups-settings-enable").text()));return t.hide(),e=a("#footer-places, #f-list"),0===e.length&&(e=a("#footer li").parent()),e.append(t),t}function r(e){var t;return function(n,r){void 0===t&&(t=i(),t.click(function(t){t.preventDefault(),e.showSettings()})),r.settings.shouldShowFooterLink?t.show():t.hide()}}t.a=r;var o=window.mediaWiki,a=jQuery},"./src/changeListeners/index.js":function(e,t,n){"use strict";var i=n("./src/changeListeners/footerLink.js"),r=n("./src/changeListeners/eventLogging.js"),o=n("./src/changeListeners/linkTitle.js"),a=n("./src/changeListeners/pageviews.js"),s=n("./src/changeListeners/render.js"),u=n("./src/changeListeners/settings.js"),c=n("./src/changeListeners/statsv.js"),p=n("./src/changeListeners/syncUserSettings.js");t.a={footerLink:i.a,eventLogging:r.a,linkTitle:o.a,pageviews:a.a,render:s.a,settings:u.a,statsv:c.a,syncUserSettings:p.a}},"./src/changeListeners/linkTitle.js":function(e,t,n){"use strict";function i(){function e(e){var t=r(e);n||(n=t.attr("title"),t.attr("title",""))}function t(e){r(e).attr("title",n),n=void 0}var n;return function(n,i){var r=n&&n.preview.activeLink;i.preview.enabled&&(r&&n.preview.activeLink!==i.preview.activeLink&&t(n.preview.activeLink),i.preview.activeLink&&e(i.preview.activeLink))}}t.a=i;var r=jQuery},"./src/changeListeners/pageviews.js":function(e,t,n){"use strict";function i(e,t,n){return function(i,r){r.pageviews&&r.pageviews.pageview&&(t("event.VirtualPageView",$.extend({},{referrer:n},r.pageviews.pageview)),e.pageviewLogged())}}t.a=i},"./src/changeListeners/render.js":function(e,t,n){"use strict";function i(e){var t;return function(n,i){i.preview.shouldShow&&!t?(t=r.b(i.preview.fetchResponse),t.show(i.preview.activeEvent,e,i.preview.activeToken)):!i.preview.shouldShow&&t&&(t.hide(),t=void 0)}}t.a=i;var r=n("./src/ui/renderer.js")},"./src/changeListeners/settings.js":function(e,t,n){"use strict";function i(e,t){var n;return function(i,r){i&&(!1===i.settings.shouldShow&&!0===r.settings.shouldShow?(n||(n=t(e),n.appendTo(document.body)),n.setEnabled(r.preview.enabled),n.show()):!0===i.settings.shouldShow&&!1===r.settings.shouldShow&&n.hide(),i.settings.showHelp!==r.settings.showHelp&&n.toggleHelp(r.settings.showHelp))}}t.a=i},"./src/changeListeners/statsv.js":function(e,t,n){"use strict";function i(e,t){return function(n,i){var r=i.statsv;r.action&&(t(r.action,r.data),e.statsvLogged())}}t.a=i},"./src/changeListeners/syncUserSettings.js":function(e,t,n){"use strict";function i(e){return function(t,n){o(t,n,"eventLogging","previewCount",e.setPreviewCount),o(t,n,"preview","enabled",e.setIsEnabled)}}function r(e,t,n){return e[t]&&e[t][n]}function o(e,t,n,i,o){var a=r(t,n,i);e&&r(e,n,i)!==a&&o(a)}t.a=i},"./src/constants.js":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=jQuery,r=i.bracketedDevicePixelRatio&&i.bracketedDevicePixelRatio()||1,o={off:"off",on:"on",control:"control"};t.b={THUMBNAIL_SIZE:320*r,EXTRACT_LENGTH:525}},"./src/counts.js":function(e,t){t.getEditCountBucket=function(e){var t;return 0===e?t="0":e>=1&&e<=4?t="1-4":e>=5&&e<=99?t="5-99":e>=100&&e<=999?t="100-999":e>=1e3&&(t="1000+"),t+" edits"},t.getPreviewCountBucket=function(e){var t;return 0===e?t="0":e>=1&&e<=4?t="1-4":e>=5&&e<=20?t="5-20":e>=21&&(t="21+"),void 0!==t?t+" previews":"unknown"}},"./src/experiments.js":function(e,t,n){"use strict";function i(e){return{weightedBoolean:function(t,n,i){return"true"===e.getBucket({enabled:!0,name:t,buckets:{true:n,false:1-n}},i)}}}t.a=i},"./src/formatter.js":function(e,t,n){"use strict";function i(e,t){var n=e;return void 0===e?[]:(n=a(n),n=o(n),0===n.length?[]:n=r(n,t))}function r(e,t){var n,i,r=[],o="<bi-"+Math.random()+">",a="<snip-"+Math.random()+">";return t=t.replace(/\s+/g," ").trim(),i=u.RegExp.escape(t),n=new RegExp("(^|\\s)("+i+")(|$)","i"),e=e.replace(/\s+/," "),e=e.replace(n,"$1"+a+o+"$2"+a+"$3"),e=e.split(a),s.each(e,function(e,t){0===t.indexOf(o)?r.push(s("<b>").text(t.substring(o.length))):r.push(document.createTextNode(t))}),r}function o(e){return e.replace(/\.\.\.$/,"")}function a(e){var t,n="",i=0,r=0;for(r;r<e.length;r++){if(")"===(t=e.charAt(r))&&0===i)return e;if("("!==t)if(")"!==t){if(0===i){if(" "===t&&"("===e.charAt(r+1))continue;n+=t}}else i--;else i++}return 0===i?n:e}t.c=i,t.a=o,t.b=a;var s=jQuery,u=window.mediaWiki},"./src/gateway/index.js":function(e,t,n){"use strict";function i(e){switch(e.get("wgPopupsGateway")){case"mwApiPlain":return n.i(o.a)(new u.Api,r.b);case"restbasePlain":return n.i(a.a)(c.ajax,r.b,s.a);case"restbaseHTML":return n.i(a.a)(c.ajax,r.b,s.b);default:throw new Error("Unknown gateway")}}t.a=i;var r=n("./src/constants.js"),o=n("./src/gateway/mediawiki.js"),a=n("./src/gateway/rest.js"),s=n("./src/gateway/restFormatters.js"),u=mediaWiki,c=jQuery},"./src/gateway/mediawiki.js":function(e,t,n){"use strict";function i(e,t){function n(n){return e.get({action:"query",prop:"info|extracts|pageimages|revisions|info",formatversion:2,redirects:!0,exintro:!0,exchars:t.EXTRACT_LENGTH,explaintext:!0,piprop:"thumbnail",pithumbsize:t.THUMBNAIL_SIZE,pilicense:"any",rvprop:"timestamp",inprop:"url",titles:n,smaxage:c,maxage:c,uselang:"content"},{headers:{"X-Analytics":"preview=1"}})}function i(e){return n(e).then(r).then(o).then(a)}return{fetch:n,extractPageFromResponse:r,convertPageToModel:a,getPageSummary:i,formatPlainTextExtract:o}}function r(e){if(e.query&&e.query.pages&&e.query.pages.length)return e.query.pages[0];throw new Error("API response `query.pages` is empty.")}function o(e){var t=p.extend({},e);return t.extract=u.c(e.extract,e.title),t}function a(e){return n.i(s.b)(e.title,e.canonicalurl,e.pagelanguagehtmlcode,e.pagelanguagedir,e.extract,e.thumbnail,e.pageid)}t.a=i;var s=n("./src/preview/model.js"),u=n("./src/formatter.js"),c=300,p=jQuery},"./src/gateway/rest.js":function(e,t,n){"use strict";function i(e,t,i){function r(t){return e({url:s+encodeURIComponent(t),headers:{Accept:'application/json; charset=utf-8; profile="'+u+'"'}})}function l(e){var s=p.Deferred();return r(e).then(function(n){n&&n.title||(n=p.extend(!0,n||{},{title:e})),void 0===n.extract&&(n.extract=""),s.resolve(o(n,t.THUMBNAIL_SIZE,i))},function(t,i,r){404===t.status?s.resolve(n.i(a.a)(e,new c.Title(e).getUrl())):s.reject("http",{xhr:t,textStatus:i,exception:r})}),s.promise()}return{fetch:r,convertPageToModel:o,getPageSummary:l}}function r(e,t,n){var i,r,o,a,s=e.source.split("/"),u=s[s.length-1];return-1===(r=u.indexOf("px-"))?t:(i=u.substr(r+3),e.width>e.height?(o=n,a=Math.floor(n/e.width*e.height)):(o=Math.floor(n/e.height*e.width),a=n),o>=t.width&&-1===i.indexOf(".svg")?t:(s[s.length-1]=o+"px-"+i,{source:s.join("/"),width:o,height:a}))}function o(e,t,i){return n.i(a.b)(e.title,new c.Title(e.title).getUrl(),e.lang,e.dir,i(e),e.thumbnail?r(e.thumbnail,e.originalimage,t):void 0,e.pageid)}t.a=i;var a=n("./src/preview/model.js"),s="/api/rest_v1/page/summary/",u="https://www.mediawiki.org/wiki/Specs/Summary/1.2.0",c=window.mediaWiki,p=jQuery},"./src/gateway/restFormatters.js":function(e,t,n){"use strict";function i(e){var t=e.extract_html;return t=o.a(t),t=o.b(t),0===t.length?[]:$.parseHTML(t)}function r(e){return o.c(e.extract,e.title)}t.b=i,t.a=r;var o=n("./src/formatter.js")},"./src/getUserBucket.js":function(e,t,n){"use strict";function i(e,t,n){var i=t/2;return t?e.getBucket({name:"ext.Popups.visibility",enabled:!0,buckets:{off:1-t,control:i,on:i}},n):"on"}t.a=i},"./src/index.js":function(e,t,n){"use strict";function i(e,t,i){return n.i(E.a)(e,t,i)?_.track:j.noop}function r(e){return e.get("wgPopupsVirtualPageViews")?_.track:j.noop}function o(e,t,i,r){return n.i(T.a)(e,t,i,r)?_.track:j.noop}function a(){return window.performance&&window.performance.now?Math.round(window.performance.now()):null}function s(e,t,i,r,o,a,s,u,c){n.i(g.a)(e,y.a.footerLink(t)),n.i(g.a)(e,y.a.linkTitle()),n.i(g.a)(e,y.a.render(o)),n.i(g.a)(e,y.a.statsv(t,a)),n.i(g.a)(e,y.a.syncUserSettings(i)),n.i(g.a)(e,y.a.settings(t,r)),n.i(g.a)(e,y.a.eventLogging(t,s,c)),n.i(g.a)(e,y.a.pageviews(t,u,window.location.href))}Object.defineProperty(t,"__esModule",{value:!0});var u=n("./node_modules/redux/dist/redux.min.js"),c=(n.n(u),n("./node_modules/redux-thunk/dist/redux-thunk.min.js")),p=(n.n(c),n("./src/gateway/index.js")),l=n("./src/userSettings.js"),d=n("./src/previewBehavior.js"),f=n("./src/ui/settingsDialog.js"),g=n("./src/changeListener.js"),v=n("./src/isEnabled.js"),h=n("./src/title.js"),w=n("./src/ui/renderer.js"),m=n("./src/experiments.js"),E=n("./src/instrumentation/statsv.js"),T=n("./src/instrumentation/eventLogging.js"),y=n("./src/changeListeners/index.js"),b=n("./src/actions.js"),S=n("./src/reducers/index.js"),k=n("./src/integrations/mwpopups.js"),x=n("./src/getUserBucket.js"),_=mediaWiki,j=jQuery,L=[".extiw",".image",".new",".internal",".external",".oo-ui-buttonedElement-button",".cancelLink a"];_.requestIdleCallback(function(){var e,t,g,E,T,y,j,I,A,P,N,C=u.compose,O=_.user.generateRandomSessionId,D=n.i(p.a)(_.config);e=n.i(x.a)(_.experiments,_.config.get("wgPopupsAnonsExperimentalGroupSize"),_.user.sessionId()),T=n.i(l.a)(_.storage),y=n.i(f.a)(),j=n.i(m.a)(_.experiments),I=i(_.user,_.config,j),E=r(_.config),A=o(_.user,_.config,e,window),P=n.i(v.a)(_.user,T,_.config,e),!0===_.config.get("debug")&&(C=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||C),t=u.createStore(u.combineReducers(S.a),C(u.applyMiddleware(c.default))),g=u.bindActionCreators(b,t.dispatch),N=n.i(d.a)(_.config,_.user,g),s(t,g,T,y,N,I,A,E,a),g.boot(P,_.user,T,O,_.config),_.popups=n.i(k.a)(t),_.hook("wikipage.content").add(function(e){var t=L.join(", "),i="a[href][title]:not("+t+")";n.i(w.a)(),e.on("mouseover keyup",i,function(e){var t=n.i(h.a)(this,_.config);t&&g.linkDwell(t,this,e,D,O)}).on("mouseout blur",i,function(){n.i(h.a)(this,_.config)&&g.abandon(this)}).on("click",i,function(){n.i(h.a)(this,_.config)&&g.linkClick(this)})})}),window.Redux=u,window.ReduxThunk=c},"./src/instrumentation/eventLogging.js":function(e,t,n){"use strict";function i(e,t,n,i){return!0===t.get("debug")||!!t.get("wgPopupsEventLogging")&&(!(!i.navigator||!$.isFunction(i.navigator.sendBeacon))&&(e.isAnon()&&n!==r.a.off))}t.a=i;var r=n("./src/constants.js")},"./src/instrumentation/statsv.js":function(e,t,n){"use strict";function i(e,t,n){var i=t.get("wgPopupsStatsvSamplingRate",0);return n.weightedBoolean("ext.Popups.statsv",i,e.sessionId())}t.a=i},"./src/integrations/mwpopups.js":function(e,t,n){"use strict";function i(e){return{isEnabled:function(){return e.getState().preview.enabled}}}t.a=i},"./src/isEnabled.js":function(e,t,n){"use strict";function i(e,t,n,i){return!n.get("wgPopupsConflictsWithNavPopupGadget")&&(e.isAnon()?!n.get("wgPopupsBetaFeature")&&(t.hasIsEnabled()?t.getIsEnabled():i===r.a.on):n.get("wgPopupsShouldSendModuleToUser"))}t.a=i;var r=n("./src/constants.js")},"./src/preview/model.js":function(e,t,n){"use strict";function i(e,t,n,i,r,u,c){var p=o(r);return{title:e,url:t,languageCode:n,languageDirection:i,extract:p,type:void 0===p?a:s,thumbnail:u,pageId:c}}function r(e,t){return i(e,t,"","",[],"")}function o(e){if(void 0!==e&&null!==e&&0!==e.length)return e}t.b=i,t.a=r;var a="generic",s="page"},"./src/previewBehavior.js":function(e,t,n){"use strict";function i(e,t,n){var i,a,s=e.get("wgPopupsBetaFeature"),u=o.noop;return t.isAnon()?u=function(e){e.preventDefault(),n.showSettings()}:(i="Special:Preferences#mw-prefsection-",i+=s?"betafeatures":"rendering",a=r.Title.newFromText(i).getUrl()),{settingsUrl:a,showSettings:u,previewDwell:n.previewDwell,previewAbandon:n.abandon,previewShow:n.previewShow,click:n.linkClick}}t.a=i;var r=window.mediaWiki,o=jQuery},"./src/reducers/eventLogging.js":function(e,t,n){"use strict";function i(e){var t={pageTitleSource:e.page.title,namespaceIdSource:e.page.namespaceId,pageIdSource:e.page.id,isAnon:e.user.isAnon,popupEnabled:e.isEnabled,pageToken:e.pageToken,sessionToken:e.sessionToken,previewCountBucket:c.getPreviewCountBucket(e.user.previewCount),hovercardsSuppressedByGadget:e.isNavPopupsEnabled};return e.user.isAnon||(t.editCountBucket=c.getEditCountBucket(e.user.editCount)),t}function r(e,t){return t.linkInteractionToken=e.token,t.pageTitleHover=e.title,t.namespaceIdHover=e.namespaceId,void 0!==e.timeToPreviewShow&&(t.previewType=e.previewType,t.perceivedWait=e.timeToPreviewShow),t}function o(e){var t={totalInteractionTime:Math.round(e.finished-e.started)};if(!e.finalized)return t.action=e.timeToPreviewShow?"dismissed":"dwelledButAbandoned",r(e,t)}function a(e,t){var a,p,l=[s.a.FETCH_COMPLETE,s.a.ABANDON_END,s.a.PREVIEW_SHOW];if(void 0===e&&(e={previewCount:void 0,baseData:{},interaction:void 0,event:void 0}),-1!==l.indexOf(t.type)&&(!e.interaction||t.token!==e.interaction.token))return e;if(!e.interaction&&t.type!==s.a.BOOT&&t.type!==s.a.LINK_DWELL&&t.type!==s.a.EVENT_LOGGED&&t.type!==s.a.SETTINGS_CHANGE)return e;switch(t.type){case s.a.BOOT:return n.i(u.a)(e,{previewCount:t.user.previewCount,baseData:i(t),event:{action:"pageLoaded"}});case s.a.EVENT_LOGGED:return p=n.i(u.a)(e,{event:void 0}),t.event.linkInteractionToken&&e.interaction&&t.event.linkInteractionToken===e.interaction.token&&(p.interaction=void 0),p;case s.a.FETCH_COMPLETE:return n.i(u.a)(e,{interaction:n.i(u.a)(e.interaction,{previewType:t.result.type})});case s.a.PREVIEW_SHOW:return a=e.previewCount+1,n.i(u.a)(e,{previewCount:a,baseData:n.i(u.a)(e.baseData,{previewCountBucket:c.getPreviewCountBucket(a)}),interaction:n.i(u.a)(e.interaction,{timeToPreviewShow:Math.round(t.timestamp-e.interaction.started)})});case s.a.LINK_DWELL:return e.interaction&&t.el===e.interaction.link?n.i(u.a)(e,{interaction:n.i(u.a)(e.interaction,{isUserDwelling:!0})}):n.i(u.a)(e,{interaction:{link:t.el,title:t.title,namespaceId:t.namespaceId,token:t.token,started:t.timestamp,isUserDwelling:!0},event:e.interaction?o(e.interaction):void 0});case s.a.PREVIEW_DWELL:return n.i(u.a)(e,{interaction:n.i(u.a)(e.interaction,{isUserDwelling:!0})});case s.a.LINK_CLICK:return n.i(u.a)(e,{interaction:n.i(u.a)(e.interaction,{finalized:!0}),event:r(e.interaction,{action:"opened",totalInteractionTime:Math.round(t.timestamp-e.interaction.started)})});case s.a.ABANDON_START:return n.i(u.a)(e,{interaction:n.i(u.a)(e.interaction,{finished:t.timestamp,isUserDwelling:!1})});case s.a.ABANDON_END:return e.interaction.isUserDwelling?e:n.i(u.a)(e,{interaction:void 0,event:o(e.interaction)});case s.a.SETTINGS_SHOW:return n.i(u.a)(e,{event:r(e.interaction,{action:"tapped settings cog"})});case s.a.SETTINGS_CHANGE:return t.wasEnabled&&!t.enabled?n.i(u.a)(e,{event:{action:"disabled",popupEnabled:!1}}):e;default:return e}}t.a=a;var s=n("./src/actionTypes.js"),u=n("./src/reducers/nextState.js"),c=n("./src/counts.js");n.n(c)},"./src/reducers/index.js":function(e,t,n){"use strict";var i=n("./src/reducers/eventLogging.js"),r=n("./src/reducers/pageviews.js"),o=n("./src/reducers/preview.js"),a=n("./src/reducers/settings.js"),s=n("./src/reducers/statsv.js");t.a={eventLogging:i.a,pageviews:r.a,preview:o.a,settings:a.a,statsv:s.a}},"./src/reducers/nextState.js":function(e,t,n){"use strict";function i(e,t){var n,i={};for(n in e)e.hasOwnProperty(n)&&!t.hasOwnProperty(n)&&(i[n]=e[n]);for(n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);return i}t.a=i},"./src/reducers/pageviews.js":function(e,t,n){"use strict";function i(e,t){switch(void 0===e&&(e={pageview:void 0}),t.type){case r.a.PAGEVIEW_LOGGED:return n.i(o.a)(e,{pageview:void 0});case r.a.PREVIEW_SEEN:return n.i(o.a)(e,{pageview:{title:t.title,namespace:t.namespace}});default:return e}}t.a=i;var r=n("./src/actionTypes.js"),o=n("./src/reducers/nextState.js")},"./src/reducers/preview.js":function(e,t,n){"use strict";function i(e,t){switch(void 0===e&&(e={enabled:void 0,activeLink:void 0,activeEvent:void 0,activeToken:"",shouldShow:!1,isUserDwelling:!1}),t.type){case r.a.BOOT:return n.i(o.a)(e,{enabled:t.isEnabled});case r.a.SETTINGS_CHANGE:return n.i(o.a)(e,{enabled:t.enabled});case r.a.LINK_DWELL:return t.el!==e.activeLink?n.i(o.a)(e,{activeLink:t.el,activeEvent:t.event,activeToken:t.token,shouldShow:!1,isUserDwelling:!0}):n.i(o.a)(e,{isUserDwelling:!0});case r.a.ABANDON_END:return t.token!==e.activeToken||e.isUserDwelling?e:n.i(o.a)(e,{activeLink:void 0,activeToken:void 0,activeEvent:void 0,fetchResponse:void 0,shouldShow:!1});case r.a.PREVIEW_DWELL:return n.i(o.a)(e,{isUserDwelling:!0});case r.a.ABANDON_START:return n.i(o.a)(e,{isUserDwelling:!1});case r.a.FETCH_START:return n.i(o.a)(e,{fetchResponse:void 0});case r.a.FETCH_COMPLETE:if(t.token===e.activeToken)return n.i(o.a)(e,{fetchResponse:t.result,shouldShow:e.isUserDwelling});default:return e}}t.a=i;var r=n("./src/actionTypes.js"),o=n("./src/reducers/nextState.js")},"./src/reducers/settings.js":function(e,t,n){"use strict";function i(e,t){switch(void 0===e&&(e={shouldShow:!1,showHelp:!1,shouldShowFooterLink:!1}),t.type){case r.a.SETTINGS_SHOW:return n.i(o.a)(e,{shouldShow:!0,showHelp:!1});case r.a.SETTINGS_HIDE:return n.i(o.a)(e,{shouldShow:!1,showHelp:!1});case r.a.SETTINGS_CHANGE:return t.wasEnabled===t.enabled?n.i(o.a)(e,{shouldShow:!1}):n.i(o.a)(e,{shouldShow:!t.enabled,showHelp:!t.enabled,shouldShowFooterLink:!t.enabled});case r.a.BOOT:return n.i(o.a)(e,{shouldShowFooterLink:t.user.isAnon&&!t.isEnabled});default:return e}}t.a=i;var r=n("./src/actionTypes.js"),o=n("./src/reducers/nextState.js")},"./src/reducers/statsv.js":function(e,t,n){"use strict";function i(e,t){switch(e=e||{},t.type){case r.a.FETCH_START:return n.i(o.a)(e,{fetchStartedAt:t.timestamp});case r.a.FETCH_END:return n.i(o.a)(e,{action:"timing.PagePreviewsApiResponse",data:t.timestamp-e.fetchStartedAt});case r.a.FETCH_FAILED:return n.i(o.a)(e,{action:"counter.PagePreviewsApiFailure",data:1});case r.a.LINK_DWELL:return n.i(o.a)(e,{linkDwellStartedAt:t.timestamp});case r.a.PREVIEW_SHOW:return n.i(o.a)(e,{action:"timing.PagePreviewsPreviewShow",data:t.timestamp-e.linkDwellStartedAt});case r.a.STATSV_LOGGED:return n.i(o.a)(e,{action:null,data:null});default:return e}}t.a=i;var r=n("./src/actionTypes.js"),o=n("./src/reducers/nextState.js")},"./src/title.js":function(e,t,n){"use strict";function i(e,t){var n,i,r,o=new RegExp(a.RegExp.escape(t.get("wgArticlePath")).replace("\\$1","(.+)"));try{n=new a.Uri(e)}catch(e){return}if(n.host===location.hostname)return r=Object.keys(n.query).length,r?1===r&&n.query.hasOwnProperty("title")?n.query.title:void 0:(i=o.exec(n.path),i?decodeURIComponent(i[1]):void 0)}function r(e,t){var n;return e?(n=a.Title.newFromText(e),n&&$.inArray(n.namespace,t)>=0?n:null):null}function o(e,t){return r(i(e.href,t),t.get("wgContentNamespaces"))}t.a=o;var a=window.mediaWiki},"./src/ui/renderer.js":function(e,t,n){"use strict";function i(e){E("<div>").attr("id","mwe-popups-svg").html('<svg width="0" height="0"><defs><clippath id="mwe-popups-mask"><polygon points="0 8, 10 8, 18 0, 26 8, 1000 8, 1000 1000, 0 1000"/></clippath><clippath id="mwe-popups-mask-flip"><polygon points="0 8, 274 8, 282 0, 290 8, 1000 8, 1000 1000, 0 1000"/></clippath><clippath id="mwe-popups-landscape-mask"><polygon points="0 8, 174 8, 182 0, 190 8, 1000 8, 1000 1000, 0 1000"/></clippath><clippath id="mwe-popups-landscape-mask-flip"><polygon points="0 0, 1000 0, 1000 242, 190 242, 182 250, 174 242, 0 242"/></clippath></defs></svg>').appendTo(e)}function r(){i(document.body)}function o(e){var t=void 0===e.extract?s(e):a(e);return{show:function(e,n,i){return u(t,e,E(e.target),n,i,document.body)},hide:function(){return p(t)}}}function a(e){var t,n,i=l(e.thumbnail),r=null!==i,o=e.extract;return t=E.extend({},e,{hasThumbnail:r}),n=m.template.get("ext.popups","preview.mustache").render(t),r&&n.find(".mwe-popups-discreet").append(i.el),o&&n.find(".mwe-popups-extract").append(o),{el:n,hasThumbnail:r,thumbnail:i,isTall:r&&i.isTall}}function s(e){var t,n;return t=E.extend({},e,{extractMsg:m.msg("popups-preview-no-preview"),readMsg:m.msg("popups-preview-footer-read")}),n=m.template.get("ext.popups","preview-empty.mustache").render(t),{el:n,hasThumbnail:!1,isTall:!1}}function u(e,t,i,r,o,a){var s=f(e.isTall,{pageX:t.pageX,pageY:t.pageY,clientY:t.clientY},{clientRects:i.get(0).getClientRects(),offset:i.offset(),width:i.width(),height:i.height()},{scrollTop:y.scrollTop(),width:y.width(),height:y.height()},T.pokeySize);return e.el.appendTo(a),v(e,s,g(e,s),T.landscapeImage.h,T.pokeySize),e.el.show(),n.i(w.a)(200).then(function(){c(e,r)}).then(function(){r.previewShow(o)})}function c(e,t){e.el.on("mouseenter",t.previewDwell).on("mouseleave",t.previewAbandon),e.el.click(t.click),e.el.find(".mwe-popups-settings-icon").attr("href",t.settingsUrl).click(function(e){e.stopPropagation(),t.showSettings(e)})}function p(e){var t,i;return t=e.el.hasClass("mwe-popups-fade-in-up")?"mwe-popups-fade-in-up":"mwe-popups-fade-in-down",i="mwe-popups-fade-in-up"===t?"mwe-popups-fade-out-down":"mwe-popups-fade-out-up",e.el.removeClass(t).addClass(i),n.i(w.a)(150).then(function(){e.el.remove()})}function l(e){var t,n,i,r,o,a,s,u,c=E.bracketedDevicePixelRatio();return e?(t=e.width<e.height,n=e.width/c,i=e.height/c,!t&&n<T.landscapeImage.w||t&&i<T.portraitImage.h||e.source.indexOf("\\")>-1||e.source.indexOf("'")>-1||e.source.indexOf('"')>-1?null:(t?(r=n>T.portraitImage.w?(n-T.portraitImage.w)/-2:T.portraitImage.w-n,o=i>T.portraitImage.h?(i-T.portraitImage.h)/-2:0,a=T.portraitImage.w,s=T.portraitImage.h):(r=0,o=i>T.landscapeImage.h?(i-T.landscapeImage.h)/-2:0,a=T.landscapeImage.w+3,s=i>T.landscapeImage.h?T.landscapeImage.h:i,u="mwe-popups-mask"),{el:d(t?"mwe-popups-is-tall":"mwe-popups-is-not-tall",e.source,r,o,n,i,a,s,u),isTall:t,width:n,height:i})):null}function d(e,t,n,i,r,o,a,s,u){var c,p="http://www.w3.org/2000/svg";return c=E(document.createElementNS(p,"image")),c[0].setAttributeNS("http://www.w3.org/1999/xlink","href",t),c.addClass(e).attr({x:n,y:i,width:r,height:o,"clip-path":"url(#"+u+")"}),E(document.createElementNS(p,"svg")).attr({xmlns:p,width:a,height:s}).append(c)}function f(e,t,n,i,r){var o=!1,a=!1,s=t.pageY?h(t.pageY-i.scrollTop,n.clientRects,!1)+i.scrollTop+r:n.offset.top+n.height+r,u=t.clientY?t.clientY:s,c=t.pageX?t.pageX:n.offset.left;return c>i.width/2&&(c+=t.pageX?0:n.width,c-=e?T.landscapePopupWidth:T.portraitPopupWidth,o=!0),t.pageX&&(c+=o?20:-20),u>i.height/2&&(a=!0,s=n.offset.top,t.pageY&&(s=h(t.pageY-i.scrollTop,n.clientRects,!0)+i.scrollTop),s-=r),{offset:{top:s,left:c},flippedX:o,flippedY:a}}function g(e,t){var n=[];return t.flippedY?n.push("mwe-popups-fade-in-down"):n.push("mwe-popups-fade-in-up"),t.flippedY&&t.flippedX&&n.push("flipped_x_y"),t.flippedY&&!t.flippedX&&n.push("flipped_y"),t.flippedX&&!t.flippedY&&n.push("flipped_x"),e.hasThumbnail&&!e.isTall||t.flippedY||n.push("mwe-popups-no-image-tri"),!e.hasThumbnail||e.isTall||t.flippedY||n.push("mwe-popups-image-tri"),e.isTall?n.push("mwe-popups-is-tall"):n.push("mwe-popups-is-not-tall"),n}function v(e,t,n,i,r){var o=e.el,a=e.isTall,s=e.hasThumbnail,u=e.thumbnail,c=t.flippedY,p=t.flippedX,l=t.offset.top;!c&&!a&&s&&u.height<i&&o.find(".mwe-popups-extract").css("margin-top",u.height-r),o.addClass(n.join(" ")),c&&(l-=o.outerHeight()),o.css({top:l,left:t.offset.left+"px"}),c&&s&&o.find("image")[0].removeAttribute("clip-path"),c&&p&&s&&a&&o.find("image")[0].setAttribute("clip-path","url(#mwe-popups-landscape-mask-flip)"),p&&!c&&s&&!a&&o.find("image")[0].setAttribute("clip-path","url(#mwe-popups-mask-flip)"),p&&!c&&s&&a&&o.removeClass("mwe-popups-no-image-tri").find("image")[0].setAttribute("clip-path","url(#mwe-popups-landscape-mask)")}function h(e,t,n){var i,r,o=null;return E.each(t,function(t,a){r=Math.abs(e-a.top+e-a.bottom),(null===o||o>r)&&(o=r,i=n?Math.floor(a.top):Math.ceil(a.bottom))}),i}t.a=r,t.b=o;var w=n("./src/wait.js"),m=window.mediaWiki,E=jQuery,T={portraitImage:{h:250,w:203},landscapeImage:{h:200,w:320},landscapePopupWidth:450,portraitPopupWidth:320,pokeySize:8},y=E(window)},"./src/ui/settingsDialog.js":function(e,t,n){"use strict";function i(){var e,t;return function(n){return e||(e=r(),t=c("<div>").addClass("mwe-popups-overlay"),e.find(".save").click(function(){var t=o(e),i="simple"===t;n.saveSettings(i)}),e.find(".close, .okay").click(n.hideSettings)),{appendTo:function(n){t.appendTo(n),e.appendTo(t)},show:function(){t.show()},hide:function(){t.hide()},toggleHelp:function(t){a(e,t)},setEnabled:function(t){var n="off";t?n="simple":s()&&(n="advanced"),e.find("#mwe-popups-settings-"+n).prop("checked",!0)}}}}function r(){var e=u.config.get("wgExtensionAssetsPath")+"/Popups/resources/ext.popups/images/",t=[{id:"simple",name:u.msg("popups-settings-option-simple"),description:u.msg("popups-settings-option-simple-description"),image:e+"hovercard.svg",isChecked:!0},{id:"advanced",name:u.msg("popups-settings-option-advanced"),description:u.msg("popups-settings-option-advanced-description"),image:e+"navpop.svg"},{id:"off",name:u.msg("popups-settings-option-off")}];return s()||t.splice(1,1),u.template.get("ext.popups","settings.mustache").render({heading:u.msg("popups-settings-title"),closeLabel:u.msg("popups-settings-cancel"),saveLabel:u.msg("popups-settings-save"),helpText:u.msg("popups-settings-help"),okLabel:u.msg("popups-settings-help-ok"),descriptionText:u.msg("popups-settings-description"),choices:t})}function o(e){return e.find("input[name=mwe-popups-setting]:checked, #mwe-popups-settings").val()}function a(e,t){var n=c("#mwe-popups-settings");t?(n.find("main, .save, .close").hide(),n.find(".mwe-popups-settings-help, .okay").show()):(n.find("main, .save, .close").show(),n.find(".mwe-popups-settings-help, .okay").hide())}function s(){return"undefined"!=typeof pg&&void 0!==pg.fn.disablePopups}t.a=i;var u=window.mediaWiki,c=jQuery},"./src/userSettings.js":function(e,t,n){"use strict";function i(e){return{getIsEnabled:function(){return"0"!==e.get(r)},setIsEnabled:function(t){e.set(r,t?"1":"0")},hasIsEnabled:function(){var t=e.get(r);return!1!==Boolean(t)},getPreviewCount:function(){var t,n=e.get(o);return!1===n?-1:null===n?0:(t=parseInt(n,10),isNaN(t)&&(t=0,this.setPreviewCount(t)),t)},setPreviewCount:function(t){e.set(o,t.toString())}}}t.a=i;var r="mwe-popups-enabled",o="ext.popups.core.previewCount"},"./src/wait.js":function(e,t,n){"use strict";function i(e){var t=r.Deferred();return setTimeout(function(){t.resolve()},e),t.promise()}t.a=i;var r=jQuery}});
//# sourceMappingURL=index.js.json