(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[534],{6365:function(e,t,n){e.exports=function(){"use strict";var e="undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},t="Expected a function",a=NaN,r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,u=c||d||Function("return this")(),m=Object.prototype.toString,f=Math.max,p=Math.min,h=function(){return u.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return a;if(v(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=v(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var c=o.test(e);return c||s.test(e)?l(e.slice(2),c?2:8):i.test(e)?a:+e}var x=function(e,n,a){var r=!0,i=!0;if("function"!=typeof e)throw TypeError(t);return v(a)&&(r="leading"in a?!!a.leading:r,i="trailing"in a?!!a.trailing:i),function(e,n,a){var r,i,o,s,l,c,d=0,u=!1,m=!1,x=!0;if("function"!=typeof e)throw TypeError(t);function g(t){var n=r,a=i;return r=i=void 0,d=t,s=e.apply(a,n)}function y(e){var t=e-c;return void 0===c||t>=n||t<0||m&&e-d>=o}function w(){var e,t=h();if(y(t))return j(t);l=setTimeout(w,(e=n-(t-c),m?p(e,o-(t-d)):e))}function j(e){return l=void 0,x&&r?g(e):(r=i=void 0,s)}function N(){var e,t=h(),a=y(t);if(r=arguments,i=this,c=t,a){if(void 0===l)return d=e=c,l=setTimeout(w,n),u?g(e):s;if(m)return l=setTimeout(w,n),g(c)}return void 0===l&&(l=setTimeout(w,n)),s}return n=b(n)||0,v(a)&&(u=!!a.leading,o=(m="maxWait"in a)?f(b(a.maxWait)||0,n):o,x="trailing"in a?!!a.trailing:x),N.cancel=function(){void 0!==l&&clearTimeout(l),d=0,r=c=i=l=void 0},N.flush=function(){return void 0===l?s:j(h())},N}(e,n,{leading:r,maxWait:n,trailing:i})},g=NaN,y=/^\s+|\s+$/g,w=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,N=/^0o[0-7]+$/i,k=parseInt,O="object"==typeof e&&e&&e.Object===Object&&e,E="object"==typeof self&&self&&self.Object===Object&&self,_=O||E||Function("return this")(),C=Object.prototype.toString,S=Math.max,z=Math.min,L=function(){return _.Date.now()};function A(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function T(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==C.call(t))return g;if(A(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=A(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(y,"");var a=j.test(e);return a||N.test(e)?k(e.slice(2),a?2:8):w.test(e)?g:+e}var M=function(e,t,n){var a,r,i,o,s,l,c=0,d=!1,u=!1,m=!0;if("function"!=typeof e)throw TypeError("Expected a function");function f(t){var n=a,i=r;return a=r=void 0,c=t,o=e.apply(i,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=i}function h(){var e,n=L();if(p(n))return v(n);s=setTimeout(h,(e=t-(n-l),u?z(e,i-(n-c)):e))}function v(e){return s=void 0,m&&a?f(e):(a=r=void 0,o)}function b(){var e,n=L(),i=p(n);if(a=arguments,r=this,l=n,i){if(void 0===s)return c=e=l,s=setTimeout(h,t),d?f(e):o;if(u)return s=setTimeout(h,t),f(l)}return void 0===s&&(s=setTimeout(h,t)),o}return t=T(t)||0,A(n)&&(d=!!n.leading,i=(u="maxWait"in n)?S(T(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,a=l=r=s=void 0},b.flush=function(){return void 0===s?o:v(L())},b},q=function(){};function P(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,a=void 0;for(n=0;n<t.length;n+=1)if((a=t[n]).dataset&&a.dataset.aos||a.children&&e(a.children))return!0;return!1}(t.concat(n)))return q()})}function D(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var H={isSupported:function(){return!!D()},ready:function(e,t){var n=window.document,a=new(D())(P);q=t,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},B=function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")},I=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),$=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},W=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,F=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,R=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Y=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function V(){return navigator.userAgent||navigator.vendor||window.opera||""}var G=new(function(){function e(){B(this,e)}return I(e,[{key:"phone",value:function(){var e=V();return!(!W.test(e)&&!F.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=V();return!(!R.test(e)&&!Y.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),Z=function(e,t){var n=void 0;return G.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},U=function(e){return e.forEach(function(e,t){var n,a,r,i,o,s;return n=window.pageYOffset,a=e.options,r=e.position,i=e.node,e.data,o=function(){var t;e.animated&&((t=a.animatedClassNames)&&t.forEach(function(e){return i.classList.remove(e)}),Z("aos:out",i),e.options.id&&Z("aos:in:"+e.options.id,i),e.animated=!1)},void(a.mirror&&n>=r.out&&!a.once?o():n>=r.in?e.animated||((s=a.animatedClassNames)&&s.forEach(function(e){return i.classList.add(e)}),Z("aos:in",i),e.options.id&&Z("aos:in:"+e.options.id,i),e.animated=!0):e.animated&&!a.once&&o())})},K=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},J=function(e,t,n){var a=e.getAttribute("data-aos-"+t);if(void 0!==a){if("true"===a)return!0;if("false"===a)return!1}return a||n},Q=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},X=[],ee=!1,et={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},en=function(){return document.all&&!window.atob},ea=function(){var e,t;arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ee=!0),ee&&(e=X,t=et,e.forEach(function(e,n){var a,r,i,o,s,l=J(e.node,"mirror",t.mirror),c=J(e.node,"once",t.once),d=J(e.node,"id"),u=t.useClassNames&&e.node.getAttribute("data-aos"),m=[t.animatedClassName].concat(u?u.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var a=window.innerHeight,r=J(e,"anchor"),i=J(e,"anchor-placement"),o=Number(J(e,"offset",i?0:t)),s=e;r&&document.querySelectorAll(r)&&(s=document.querySelectorAll(r)[0]);var l=K(s).top-a;switch(i||n){case"top-bottom":break;case"center-bottom":l+=s.offsetHeight/2;break;case"bottom-bottom":l+=s.offsetHeight;break;case"top-center":l+=a/2;break;case"center-center":l+=a/2+s.offsetHeight/2;break;case"bottom-center":l+=a/2+s.offsetHeight;break;case"top-top":l+=a;break;case"bottom-top":l+=a+s.offsetHeight;break;case"center-top":l+=a+s.offsetHeight/2}return l+o}(e.node,t.offset,t.anchorPlacement),out:l&&(a=e.node,r=t.offset,window.innerHeight,i=J(a,"anchor"),o=J(a,"offset",r),s=a,i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]),K(s).top+s.offsetHeight-o)},e.options={once:c,mirror:l,animatedClassNames:m,id:d}}),U(X=e),window.addEventListener("scroll",x(function(){U(X,et.once)},et.throttleDelay)))},er=function(){if(X=Q(),eo(et.disable)||en())return ei();ea()},ei=function(){X.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),et.initClassName&&e.node.classList.remove(et.initClassName),et.animatedClassName&&e.node.classList.remove(et.animatedClassName)})},eo=function(e){return!0===e||"mobile"===e&&G.mobile()||"phone"===e&&G.phone()||"tablet"===e&&G.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return et=$(et,e),X=Q(),et.disableMutationObserver||H.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),et.disableMutationObserver=!0),et.disableMutationObserver||H.ready("[data-aos]",er),eo(et.disable)||en()?ei():(document.querySelector("body").setAttribute("data-aos-easing",et.easing),document.querySelector("body").setAttribute("data-aos-duration",et.duration),document.querySelector("body").setAttribute("data-aos-delay",et.delay),-1===["DOMContentLoaded","load"].indexOf(et.startEvent)?document.addEventListener(et.startEvent,function(){ea(!0)}):window.addEventListener("load",function(){ea(!0)}),"DOMContentLoaded"===et.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ea(!0),window.addEventListener("resize",M(ea,et.debounceDelay,!0)),window.addEventListener("orientationchange",M(ea,et.debounceDelay,!0)),X)},refresh:ea,refreshHard:er}}()},4859:function(e,t,n){Promise.resolve().then(n.bind(n,5377))},5377:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var a=n(7437),r=n(2265),i=n(6365),o=n.n(i);n(7002);var s=n(1396),l=n.n(s),c=n(6691),d=n.n(c),u=n(313);function m(){return(0,a.jsx)(l(),{href:"/",className:"inline-flex","aria-label":"Cruip",children:(0,a.jsx)(d(),{className:"bg-gray-900",src:u.default,width:40,height:40,alt:"Nano Banner"})})}function f(){let[e,t]=(0,r.useState)(!0),n=()=>{window.pageYOffset>10?t(!1):t(!0)};return(0,r.useEffect)(()=>(n(),window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)),[e]),(0,a.jsx)("header",{children:(0,a.jsx)("div",{className:"mx-auto max-w-6xl px-4 sm:px-6",children:(0,a.jsxs)("div",{className:"relative flex h-14 items-center",children:[(0,a.jsx)(m,{}),(0,a.jsxs)("nav",{className:"mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8","aria-label":"Global",children:[(0,a.jsx)("a",{href:"#nano_features",className:"text-sm font-semibold leading-6 text-nanoBlack mx-4",children:"Home"}),(0,a.jsx)("a",{href:"#nano_features",className:"text-sm font-semibold leading-6 text-nanoBlack mx-4",children:"Getting Started"}),(0,a.jsx)(l(),{href:"/documentation",className:"text-sm font-semibold leading-6 text-nanoBlack mx-4",children:"Documentation"}),(0,a.jsx)("a",{href:"#nano_features",className:"text-sm font-semibold leading-6 text-nanoBlack mx-4",children:"Features"}),(0,a.jsx)("a",{href:"#team-details",className:"text-sm font-semibold leading-6 text-nanoBlack mx-4",children:"About"}),(0,a.jsx)("a",{href:"#nano_features",className:"text-sm font-semibold leading-6 text-nanoBlack mx-4",children:"Community"})]})]})})})}function p(e){let{border:t=!1}=e;return(0,a.jsxs)("footer",{children:[(0,a.jsx)("div",{className:"mx-auto max-w-6xl px-4 sm:px-6",children:(0,a.jsxs)("div",{className:"grid gap-10 py-8 sm:grid-cols-12 md:py-12 ".concat(t?"border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]":""),children:[(0,a.jsxs)("div",{className:"space-y-2 sm:col-span-12 lg:col-span-4",children:[(0,a.jsx)("div",{children:(0,a.jsx)(m,{})}),(0,a.jsx)("div",{className:"text-sm text-gray-600",children:"\xa9 nanonative.org - All rights reserved."})]}),(0,a.jsxs)("div",{className:"space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2",children:[(0,a.jsx)("h3",{className:"text-sm font-medium",children:"Product"}),(0,a.jsxs)("ul",{className:"space-y-2 text-sm",children:[(0,a.jsx)("li",{children:(0,a.jsx)(l(),{className:"text-gray-600 transition hover:text-gray-900",href:"#0",children:"Features"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{className:"text-gray-600 transition hover:text-gray-900",href:"#0",children:"Integrations"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{className:"text-gray-600 transition hover:text-gray-900",href:"#0",children:"Pricing & Plans"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{className:"text-gray-600 transition hover:text-gray-900",href:"#0",children:"Changelog"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{className:"text-gray-600 transition hover:text-gray-900",href:"#0",children:"Our method"})})]})]}),(0,a.jsxs)("div",{className:"space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2",children:[(0,a.jsx)("h3",{className:"text-sm font-medium",children:"Company"}),(0,a.jsxs)("ul",{className:"space-y-2 text-sm",children:[(0,a.jsx)("li",{children:(0,a.jsx)(l(),{className:"text-gray-600 transition hover:text-gray-900",href:"#0",children:"About us"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{className:"text-gray-600 transition hover:text-gray-900",href:"#0",children:"Diversity & Inclusion"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{className:"text-gray-600 transition hover:text-gray-900",href:"#0",children:"Blog"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{className:"text-gray-600 transition hover:text-gray-900",href:"#0",children:"Careers"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{className:"text-gray-600 transition hover:text-gray-900",href:"#0",children:"Financial statements"})})]})]}),(0,a.jsxs)("div",{className:"space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2",children:[(0,a.jsx)("h3",{className:"text-sm font-medium",children:"Resources"}),(0,a.jsxs)("ul",{className:"space-y-2 text-sm",children:[(0,a.jsx)("li",{children:(0,a.jsx)(l(),{className:"text-gray-600 transition hover:text-gray-900",href:"#0",children:"Community"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{className:"text-gray-600 transition hover:text-gray-900",href:"#0",children:"Terms of service"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{className:"text-gray-600 transition hover:text-gray-900",href:"#0",children:"Report a vulnerability"})})]})]}),(0,a.jsxs)("div",{className:"space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2",children:[(0,a.jsx)("h3",{className:"text-sm font-medium",children:"Social"}),(0,a.jsxs)("ul",{className:"flex gap-1",children:[(0,a.jsx)("li",{children:(0,a.jsx)(l(),{className:"flex items-center justify-center text-blue-500 transition hover:text-blue-600",href:"#0","aria-label":"Twitter",children:(0,a.jsx)("svg",{className:"h-8 w-8 fill-current",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{className:"flex items-center justify-center text-blue-500 transition hover:text-blue-600",href:"#0","aria-label":"Medium",children:(0,a.jsx)("svg",{className:"h-8 w-8 fill-current",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M23 8H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V18.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241v-4.887l-2.41 6.131h-.329l-2.81-6.13V18.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472v-4.749a.416.416 0 0 0-.138-.351l-1-1.209v-.181H13.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{className:"flex items-center justify-center text-blue-500 transition hover:text-blue-600",href:"https://github.com/NanoNative/nano",target:"_blank",rel:"noreferrer","aria-label":"Github",children:(0,a.jsx)("svg",{className:"h-8 w-8 fill-current",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"})})})})]})]})]})}),(0,a.jsxs)("div",{className:"relative -mt-16 h-60 w-full","aria-hidden":"true",children:[(0,a.jsx)("div",{className:"pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Simple'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Simple'] after:[text-shadow:0_1px_0_white]"}),(0,a.jsx)("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3","aria-hidden":"true",children:(0,a.jsx)("div",{className:"h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"})})]})]})}function h(e){let{children:t}=e;return(0,r.useEffect)(()=>{o().init({once:!0,disable:"phone",duration:700,easing:"ease-out-cubic"})}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f,{}),(0,a.jsx)("main",{className:"grow",children:t}),(0,a.jsx)(p,{border:!0})]})}},7447:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{unstable_getImgProps:function(){return l},default:function(){return c}});let a=n(1024),r=n(8630),i=n(6184),o=n(1749),s=a._(n(536)),l=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,r.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/documentation/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},c=o.Image},7002:function(){},313:function(e,t,n){"use strict";n.r(t),t.default={src:"/documentation/_next/static/media/NanoApp.460eb8aa.svg",height:256,width:256,blurWidth:0,blurHeight:0}},622:function(e,t,n){"use strict";var a=n(2265),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,i={},c=null,d=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,a)&&!l.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:d,props:i,_owner:s.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},7437:function(e,t,n){"use strict";e.exports=n(622)},6691:function(e,t,n){e.exports=n(7447)},1396:function(e,t,n){e.exports=n(5250)}},function(e){e.O(0,[250,749,464,971,938,744],function(){return e(e.s=4859)}),_N_E=e.O()}]);