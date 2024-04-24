/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
!function(){"use strict";function e(e){function t(t,i){var l,h,k=t==window,y=i&&void 0!==i.message?i.message:void 0;if(i=e.extend({},e.blockUI.defaults,i||{}),!i.ignoreIfBlocked||!e(t).data("blockUI.isBlocked")){if(i.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,i.overlayCSS||{}),l=e.extend({},e.blockUI.defaults.css,i.css||{}),i.onOverlayClick&&(i.overlayCSS.cursor="pointer"),h=e.extend({},e.blockUI.defaults.themedCSS,i.themedCSS||{}),y=void 0===y?i.message:y,k&&p&&o(window,{fadeOut:0}),y&&"string"!=typeof y&&(y.parentNode||y.jquery)){var v=y.jquery?y[0]:y,g={};e(t).data("blockUI.history",g),g.el=v,g.parent=v.parentNode,g.display=v.style.display,g.position=v.style.position,g.parent&&g.parent.removeChild(v)}e(t).data("blockUI.onUnblock",i.onUnblock);var m,I,w,U,x=i.baseZ;m=e(r||i.forceIframe?'<iframe class="blockUI" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+i.iframeSrc+'"></iframe>':'<div class="blockUI" style="display:none"></div>'),I=e(i.theme?'<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+x++ +';display:none"></div>':'<div class="blockUI blockOverlay" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),i.theme&&k?(U='<div class="blockUI '+i.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:fixed">',i.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(i.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):i.theme?(U='<div class="blockUI '+i.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:absolute">',i.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(i.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):U=k?'<div class="blockUI '+i.blockMsgClass+' blockPage" style="z-index:'+(x+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+i.blockMsgClass+' blockElement" style="z-index:'+(x+10)+';display:none;position:absolute"></div>',w=e(U),y&&(i.theme?(w.css(h),w.addClass("ui-widget-content")):w.css(l)),i.theme||I.css(i.overlayCSS),I.css("position",k?"fixed":"absolute"),(r||i.forceIframe)&&m.css("opacity",0);var C=[m,I,w],S=e(k?"body":t);e.each(C,function(){this.appendTo(S)}),i.theme&&i.draggable&&e.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var O=f&&(!e.support.boxModel||e("object,embed",k?null:t).length>0);if(u||O){if(k&&i.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(u||!e.support.boxModel)&&!k)var E=d(t,"borderTopWidth"),T=d(t,"borderLeftWidth"),M=E?"(0 - "+E+")":0,B=T?"(0 - "+T+")":0;e.each(C,function(e,t){var o=t[0].style;if(o.position="absolute",2>e)k?o.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+i.quirksmodeOffsetHack+') + "px"'):o.setExpression("height",'this.parentNode.offsetHeight + "px"'),k?o.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):o.setExpression("width",'this.parentNode.offsetWidth + "px"'),B&&o.setExpression("left",B),M&&o.setExpression("top",M);else if(i.centerY)k&&o.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),o.marginTop=0;else if(!i.centerY&&k){var n=i.css&&i.css.top?parseInt(i.css.top,10):0,l="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+n+') + "px"';o.setExpression("top",l)}})}if(y&&(i.theme?w.find(".ui-widget-content").append(y):w.append(y),(y.jquery||y.nodeType)&&e(y).show()),(r||i.forceIframe)&&i.showOverlay&&m.show(),i.fadeIn){var j=i.onBlock?i.onBlock:c,H=i.showOverlay&&!y?j:c,z=y?j:c;i.showOverlay&&I._fadeIn(i.fadeIn,H),y&&w._fadeIn(i.fadeIn,z)}else i.showOverlay&&I.show(),y&&w.show(),i.onBlock&&i.onBlock();if(n(1,t,i),k?(p=w[0],b=e(":input:enabled:visible",p),i.focusInput&&setTimeout(s,20)):a(w[0],i.centerX,i.centerY),i.timeout){var W=setTimeout(function(){k?e.unblockUI(i):e(t).unblock(i)},i.timeout);e(t).data("blockUI.timeout",W)}}}function o(t,o){var l=t==window,s=e(t),a=s.data("blockUI.history"),d=s.data("blockUI.timeout");d&&(clearTimeout(d),s.removeData("blockUI.timeout")),o=e.extend({},e.blockUI.defaults,o||{}),n(0,t,o),null===o.onUnblock&&(o.onUnblock=s.data("blockUI.onUnblock"),s.removeData("blockUI.onUnblock"));var c;c=l?e("body").children().filter(".blockUI").add("body > .blockUI"):s.find(">.blockUI"),o.cursorReset&&(c.length>1&&(c[1].style.cursor=o.cursorReset),c.length>2&&(c[2].style.cursor=o.cursorReset)),l&&(p=b=null),o.fadeOut?(c.fadeOut(o.fadeOut),setTimeout(function(){i(c,a,o,t)},o.fadeOut)):i(c,a,o,t)}function i(t,o,i,n){var l=e(n);t.each(function(){this.parentNode&&this.parentNode.removeChild(this)}),o&&o.el&&(o.el.style.display=o.display,o.el.style.position=o.position,o.parent&&o.parent.appendChild(o.el),l.removeData("blockUI.history")),l.data("blockUI.static")&&l.css("position","static"),"function"==typeof i.onUnblock&&i.onUnblock(n,i);var s=e(document.body),a=s.width(),d=s[0].style.width;s.width(a-1).width(a),s[0].style.width=d}function n(t,o,i){var n=o==window,s=e(o);if((t||(!n||p)&&(n||s.data("blockUI.isBlocked")))&&(s.data("blockUI.isBlocked",t),i.bindEvents&&(!t||i.showOverlay))){var a="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).bind(a,i,l):e(document).unbind(a,l)}}function l(t){if(t.keyCode&&9==t.keyCode&&p&&t.data.constrainTabKey){var o=b,i=!t.shiftKey&&t.target===o[o.length-1],n=t.shiftKey&&t.target===o[0];if(i||n)return setTimeout(function(){s(n)},10),!1}var l=t.data,a=e(t.target);return a.hasClass("blockOverlay")&&l.onOverlayClick&&l.onOverlayClick(),a.parents("div."+l.blockMsgClass).length>0?!0:0===a.parents().children().filter("div.blockUI").length}function s(e){if(b){var t=b[e===!0?b.length-1:0];t&&t.focus()}}function a(e,t,o){var i=e.parentNode,n=e.style,l=(i.offsetWidth-e.offsetWidth)/2-d(i,"borderLeftWidth"),s=(i.offsetHeight-e.offsetHeight)/2-d(i,"borderTopWidth");t&&(n.left=l>0?l+"px":"0"),o&&(n.top=s>0?s+"px":"0")}function d(t,o){return parseInt(e.css(t,o),10)||0}e.fn._fadeIn=e.fn.fadeIn;var c=e.noop||function(){},r=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),f=(document.documentMode||0,e.isFunction(document.createElement("div").style.setExpression));e.blockUI=function(e){t(window,e)},e.unblockUI=function(e){o(window,e)},e.growlUI=function(t,o,i,n){var l=e('<div class="growlUI"></div>');t&&l.append("<h1>"+t+"</h1>"),o&&l.append("<h2>"+o+"</h2>"),void 0===i&&(i=3e3),e.blockUI({message:l,fadeIn:700,fadeOut:1e3,centerY:!1,timeout:i,showOverlay:!1,onUnblock:n,css:e.blockUI.defaults.growlCSS})},e.fn.block=function(o){var i=e.extend({},e.blockUI.defaults,o||{});return this.each(function(){var t=e(this);i.ignoreIfBlocked&&t.data("blockUI.isBlocked")||t.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,t(this,o)})},e.fn.unblock=function(e){return this.each(function(){o(this,e)})},e.blockUI.version=2.56,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"100%",top:"40%",left:"55%",paddingLeft:"40%",paddingTop:"20%",textAlign:"left",color:"#000",backgroundColor:"none",cursor:"default","float":"right"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"default"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var p=null,b=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});

function backButtonOverride()
{
  // Work around a Safari bug
  // that sometimes produces a blank page
  setTimeout("backButtonOverrideBody()", 1);

}

function backButtonOverrideBody()
{
  var currentLocation = window.location;
  history.pushState(null, null, currentLocation);
  window.addEventListener('popstate', function(event) {
    history.pushState(null, null, currentLocation);
  });
}

	
/**
 *
 * Al incluir el archivo prohibe ingresar caracteres prohibidos en los
 * input de la p�gina
 *
 * Dependencias:
 *				event.js
 *
 */

var RevokeChars = {
	/**
	 * String que contiene los caracteres que se deben rechazar
	 * (en �ste caso los peligrosos ante posibles ataques XSS)
	 */
	RVKC_BANNED_CHARS: "aabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-_",

	/**
	 * Nombre del tag "input"
	 */
	RVKC_TAG_NAME_INPUT: "input",

	/**
	 * Nombre del tag "textarea"
	 */
	RVKC_TAG_NAME_TEXT_AREA: "textarea",

	/**
	 * Nombre del atributo "type" del tag "input"
	 */
	RVKC_ATTR_NAME_TYPE: "type",

	/**
	 * Valor del atributo "type" que especifica que un input es un campo de texto ("text")
	 */
	RVKC_ATTR_VALUE_TYPE_TEXT: "text",
	
	RVKC_ATTR_VALUE_CLASS_TEXT_INTEGER: "integer",
	
	RVKC_ALLOW_INTEGER: "0123456789",

	/**
     * Instancia de RevokeChars (para emular singleton)
     */
    that: false,

	/**
	 * Inicializa RevokeChars, recorriendo el documento en busca de
	 * campos de texto para agregar un evento de manejo de teclas presionadas
	 */
	init: function(){
        if (!document.getElementsByTagName)
            return;
        inputs = document.getElementsByTagName(this.RVKC_TAG_NAME_INPUT);
		var i = 0;
		for (i = 0; i < inputs.length; i++) {
            input = inputs[i];
            //Si es de tipo texto se agrega la funcionalidad
            /*En el caso que falle que use lo anterior*/
            try{
            	if (input.classList.contains(this.RVKC_ATTR_VALUE_CLASS_TEXT_INTEGER)){
            		this.makeRevokeNotInteger(input);
            	} else {
            		if ((input.getAttribute(this.RVKC_ATTR_NAME_TYPE)==this.RVKC_ATTR_VALUE_TYPE_TEXT)||
            				(input.type==this.RVKC_ATTR_VALUE_TYPE_TEXT))
            			this.makeRevokeChars(input);
            	}
            } catch(e) {
            	if ((input.getAttribute(this.RVKC_ATTR_NAME_TYPE)==this.RVKC_ATTR_VALUE_TYPE_TEXT)||
        				(input.type==this.RVKC_ATTR_VALUE_TYPE_TEXT))
        			this.makeRevokeChars(input);
            }
        }
        textAreas = document.getElementsByTagName(this.RVKC_TAG_NAME_TEXT_AREA);
        var j=0;
		for  (j = 0; j < textAreas.length; j++)	{
			textArea = textAreas[j];
			this.makeRevokeChars(textArea)
		}
        this.that = this;
    },

    /**
     * Le agrega el evento para el manejo del rechazo de teclas al inputText
     * @param inputText objeto input de tipo text al que se le agrega la funcionalidad
     */
    makeRevokeChars: function(inputText){
		addEvent(inputText, "keypress", this.revokeBannedChars);
		addEvent(inputText, "change", this.revokeCopyBannedChars);
//		addEvent(inputText, "keydown", this.revokeCopyBannedChars);
    },
    
    makeRevokeNotInteger: function(inputText){
    	addEvent(inputText, "keypress", this.revokeNotInteger);
		addEvent(inputText, "change", this.revokeCopyNotInteger);
    },

    /**
     * Maneja el evento onkeyup para rechazar los caracteres prohibidos
     * @param e evento lanzado por el browser
     */
    revokeBannedChars: function(e){
    	var that = RevokeChars.that; //Instancia de RevokeChars
		if (!e) {
			e = window.event;
		}
		input = getEventTarget(e);
		if(window.event){ // IE
			key = e.keyCode;
		}else if(e.which){ // Netscape/Firefox/Opera
			key = e.which;
		}
	    if(key == 13 || key == 8){
	    	return true;
	    }
		var chr = String.fromCharCode(key);

		if(that.RVKC_BANNED_CHARS.indexOf(chr) < 0){
			if (e && e.stopPropagation)
				e.stopPropagation();
			else if (window.event) {
				window.event.cancelBubble = true;
				window.event.returnValue = false;
			}
			if (e && e.preventDefault)
				
				e.preventDefault(); //Para Mozilla Firefox
		}
		//Si es ie
		if((window.event)&&(input.onkeypress!=null)&&(that.RVKC_BANNED_CHARS.indexOf(chr) >0)){
			return input.onkeypress();
		}
		return that.RVKC_BANNED_CHARS.indexOf(chr) <0;
	  
    },
    
    revokeCopyBannedChars: function(e){
    	var that = RevokeChars.that; //Instancia de RevokeChars
		if (!e) {
			e = window.event;
		}
		input = getEventTarget(e);
		var sText = "";
		try {
			sText = input.value;
			sNewText = "";
			for (i = 0; i < sText.length; i++) {
				if(that.RVKC_BANNED_CHARS.indexOf(sText[i]) >=0){
					sNewText+=sText[i];
				}
			}
			input.value = sNewText.trim(); 
		} catch(e){
			//solo para que no falle por esta validacion
		}
		return true;
    },
    
    revokeCopyNotInteger: function(e){
    	var that = RevokeChars.that; //Instancia de RevokeChars
		if (!e) {
			e = window.event;
		}
		input = getEventTarget(e);
		var sText = "";
		try {
			sText = input.value;
			sNewText = "";
			for (i = 0; i < sText.length; i++) {
				if(that.RVKC_ALLOW_INTEGER.indexOf(sText[i]) >= 0){
					sNewText+=sText[i];
				}
			}
			input.value = sNewText; 
		} catch(e){
			//solo para que no falle por esta validacion
		}
		return true;
    },
    
    revokeNotInteger: function(e){
    	var that = RevokeChars.that; //Instancia de RevokeChars
		if (!e) {
			e = window.event;
		}
		input = getEventTarget(e);
		var key = "";
		if(window.event){ // IE
			key = e.keyCode;
		}else if(e.which){ // Netscape/Firefox/Opera
			key = e.which;
		}
		//no bloquea teclas de control
		if(key==8 || key==""){
			return true;
		}
		
		try {
			var chr = String.fromCharCode(key);
			if(that.RVKC_ALLOW_INTEGER.indexOf(chr) < 0){
				if (e && e.stopPropagation)
					e.stopPropagation();
				else if (window.event) {
					window.event.cancelBubble = true;
					window.event.returnValue = false;
				}
				if (e && e.preventDefault)
					e.preventDefault(); //Para Mozilla Firefox
			}
			//Si es ie
			if((window.event)&&(input.onkeypress!=null)&&(that.RVKC_ALLOW_INTEGER.indexOf(chr) >= 0)){
				return input.onkeypress();
			}
		} catch(e){
			console.log(e);
		}
		return that.RVKC_ALLOW_INTEGER.indexOf(chr) >= 0;
    }
}

/**
 * Inicializa la funcionalidad en el documento
 */
function RevokeCharsInit(){
    RevokeChars.init();
}

//Agrega la funcionalidad al documento
addEvent(window, "load", RevokeCharsInit);
/**
 * Agrega un evento al dom
 * @param {Object} elm
 * @param {Object} evType
 * @param {Object} fn
 * @param {Object} useCapture
 */
function addEvent(elm, evType, fn, useCapture){
  if (elm.addEventListener){
    elm.addEventListener(evType, fn, useCapture);
    return true;
  } else if (elm.attachEvent){
    var r = elm.attachEvent("on"+evType, fn);
    return r;
  } else {
    alert("ERROR");
  }
}

/**
 * Obtiene el target de un evento (IE, MOZILLA)
 * @param {Object} e
 */
function getEventTarget(e) {
	var targ;
	if (!e) {
		e = window.event;
	}
	if (e.target) {
		targ = e.target;
	} else if (e.srcElement) {
		targ = e.srcElement;
	}
	if (targ.nodeType == 3) { //Safari bug
		targ = targ.parentNode;
	}

	return targ;
}

/**
 * jBox is a jQuery plugin that makes it easy to create customizable tooltips, modal windows, image galleries and more.
 *
 * Author: Stephan Wagner <stephanwagner.me@gmail.com> (https://stephanwagner.me)
 *
 * License: MIT (https://opensource.org/licenses/MIT)
 *
 * Requires: jQuery 3.4.1 (https://code.jquery.com/jquery-3.4.1.min.js)
 *
 * Documentation: https://stephanwagner.me/jBox/documentation
 *
 * Demos: https://stephanwagner.me/jBox/demos
 */

function jBoxWrapper(jQuery) {


  var jBox = function jBox(type, options) {


    // Options (https://stephanwagner.me/jBox/options)

    this.options = {

      // jBox ID
      id: null,                    // Choose a unique id, otherwise jBox will set one for you (jBox1, jBox2, ...)

      // Dimensions
      width: 'auto',               // The width of the content area, e.g. 'auto', 200, '80%'
      height: 'auto',              // The height of the content area
      minWidth: null,              // Minimal width
      minHeight: null,             // Minimal height
      maxWidth: null,              // Maximal width
      maxHeight: null,             // Maximal height

      // Responsive dimensions
      responsiveWidth: true,       // Adjusts the width to fit the viewport
      responsiveHeight: true,      // Adjusts the height to fit the viewport
      responsiveMinWidth: 100,     // Don't adjust width below this value (in pixel)
      responsiveMinHeight: 100,    // Don't adjust height below this value (in pixel)

      // Attach
      attach: null,                // A jQuery selector to elements that will open and close your jBox, e.g. '.tooltip'
      trigger: 'click',            // The event to open or close your jBox, use 'click', 'touchclick' or 'mouseenter'
      preventDefault: false,       // Prevent the default event when opening jBox, e.g. don't follow the href in a link

      // Content
      content: null,               // You can use HTML or a jQuery element, e.g. jQuery('#jBox-content'). The elements will be appended to the content element and then made visible, so hide them with style="display: none" beforehand
      getContent: null,            // Get the content from an attribute when jBox opens, e.g. getContent: 'data-content'. Use 'html' to get the attached elements HTML as content
      title: null,                 // Adds a title to your jBox
      getTitle: null,              // Get the title from an attribute when jBox opens, e.g. getTitle: 'data-title'
      footer: null,                // Adds a footer to your jBox
      isolateScroll: true,         // Isolates scrolling to the content container

      // AJAX
      ajax: {                      // Setting an URL will make an AJAX request when jBox opens. Optional you can add any jQuery AJAX option (http://api.jquery.com/jquery.ajax/)
        url: null,                 // The URL to send the AJAX request to
        data: '',                  // Data to send with your AJAX request, e.g. {id: 82, limit: 10}
        reload: false,             // Resend the AJAX request when jBox opens. Use true to send the AJAX request only once for every attached element or 'strict' to resend every time jBox opens
        getURL: 'data-url',        // The attribute in the source element where the AJAX request will look for the URL, e.g. data-url="https://reqres.in/api/users"
        getData: 'data-ajax',      // The attribute in the source element where the AJAX request will look for the data, e.g. data-ajax="id=82&limit=10"
        setContent: true,          // Automatically set the response as new content when the AJAX request is finished
        loadingClass: true,        // Add a class to the wrapper when jBox is loading, set to class name or true to use the default class name 'jBox-loading'
        spinner: true,             // Hides the current content and adds a spinner while loading. You can pass HTML content to add your own spinner, e.g. spinner: '<div class="mySpinner"></div>'
        spinnerDelay: 300,         // Milliseconds to wait until spinner appears
        spinnerReposition: true    // Repositions jBox when the spinner is added or removed
      },
      cancelAjaxOnClose: true,     // Cancels the ajax call when jBox closes and it hasn't finished loading yet

      // Position
      target: null,                // The jQuery selector to the target element where jBox will be opened. If no element is found, jBox will use the attached element as target
      position: {
        x: 'center',               // Horizontal position, use a number, 'left', 'right' or 'center'
        y: 'center'                // Vertical position, use a number, 'top', 'bottom' or 'center'
      },
      outside: null,               // Use 'x', 'y', or 'xy' to move your jBox outside of the target element
      offset: 0,                   // Offset to final position, you can set different values for x and y with an object, e.g. {x: 20, y: 10}
      attributes: {                // Note that attributes can only be 'left' or 'right' when using numbers for position, e.g. {x: 300, y: 20}
        x: 'left',                 // Horizontal position, use 'left' or 'right'
        y: 'top'                   // Vertical position, use 'top' or 'bottom'
      },
      fixed: false,                // Your jBox will stay on position when scrolling
      adjustPosition: true,        // Adjusts your jBoxes position if there is not enough space, use 'flip', 'move' or true for both. This option overrides the reposition options
      adjustTracker: false,        // By default jBox adjusts its position when it opens or when the window size changes, set to true to also adjust when scrolling
      adjustDistance: 5,           // The minimal distance to the viewport edge while adjusting. Use an object to set different values, e.g. {top: 50, right: 5, bottom: 20, left: 5}
      reposition: true,            // Calculates new position when the window-size changes
      repositionOnOpen: true,      // Calculates new position each time jBox opens (rather than only when it opens the first time)
      repositionOnContent: true,   // Calculates new position when the content changes with .setContent() or .setTitle()
      holdPosition: true,          // Keeps current position if space permits. Applies only to 'Modal' type.

      // Pointer
      pointer: false,              // Your pointer will always point towards the target element, so the option outside needs to be 'x' or 'y'. By default the pointer is centered, set a position to move it to any side. You can also add an offset, e.g. 'left:30' or 'center:-20'
      pointTo: 'target',           // Setting something else than 'target' will add a pointer even if there is no target element set or found. Use 'top', 'right', 'bottom' or 'left'

      // Animations
      fade: 180,                   // Fade duration in ms, set to 0 or false to disable
      animation: null,             // Animation when opening or closing, use 'pulse', 'zoomIn', 'zoomOut', 'move', 'slide', 'flip', 'tada' (CSS inspired from Daniel Edens Animate.css: http://daneden.me/animate)

      // Appearance
      theme: 'Default',            // Set a jBox theme class
      addClass: null,              // Adds classes to the wrapper
      overlay: false,              // Adds an overlay to hide page content when jBox opens (adjust color and opacity with CSS)
      overlayClass: null,          // Add a class name to the overlay
      zIndex: 10000,               // Use a high z-index, or set to 'auto' to bring to front on open

      // Delays
      delayOpen: 0,                // Delay opening in ms. Note that the delay will be ignored if your jBox didn't finish closing
      delayClose: 0,               // Delay closing in ms. Nnote that there is always a closing delay of at least 10ms to ensure jBox won't be closed when opening right away

      // Closing
      closeOnEsc: false,           // Close jBox when pressing [esc] key
      closeOnClick: false,         // Close jBox with mouseclick. Use true (click anywhere), 'box' (click on jBox itself), 'overlay' (click on the overlay), 'body' (click anywhere but jBox)
      closeOnMouseleave: false,    // Close jBox when the mouse leaves the jBox area or the area of the attached element
      closeButton: false,          // Adds a close button to your jBox. Use 'title', 'box', 'overlay' or true (true will add the button to the overlay, title or the jBox itself, in that order if any of those elements can be found)

      // Other options
      appendTo: jQuery('body'),    // The element your jBox will be appended to. Any other element than jQuery('body') is only useful for fixed positions or when position values are numbers
      createOnInit: false,         // Creates jBox and makes it available in DOM when it's being initialized, otherwise it will be created when it opens for the first time
      blockScroll: false,          // Blocks scrolling when jBox is open
      blockScrollAdjust: true,     // Adjust page elements to avoid content jumps when scrolling is blocked. See more here: https://github.com/StephanWagner/unscroll
      draggable: false,            // Make your jBox draggable (use 'true', 'title' or provide an element as handle) (inspired from Chris Coyiers CSS-Tricks http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/)
      dragOver: true,              // When you have multiple draggable jBoxes, the one you select will always move over the other ones
      autoClose: false,            // Time in ms when jBox will close automatically after it was opened
      delayOnHover: false,         // Delay auto-closing while mouse is hovered
      showCountdown: false,        // Display a nice progress-indicator when autoClose is enabled

      // Audio                     // You can use the integrated audio function whenever you'd like to play an audio file, e.g. onInit: function () { this.audio('url_to_audio_file_without_file_extension', 75); }
      preloadAudio: true,          // Preloads the audio files set in option audio. You can also preload other audio files, e.g. ['src_to_file.mp3', 'src_to_file.ogg']
      audio: null,                 // The URL to an audio file to play when jBox opens. Set the URL without file extension, jBox will look for an .mp3 and .ogg file. To play audio when jBox closes, use an object, e.g. {open: 'src_to_audio1', close: 'src_to_audio2'}
      volume: 100,                 // The volume in percent. To have different volumes for opening and closeing, use an object, e.g. {open: 75, close: 100}

      // Events                    // Note that you can use 'this' in all event functions, it refers to your jBox object (e.g. onInit: function () { this.open(); })
      onInit: null,                // Fired when jBox is initialized
      onAttach: null,              // Fired when jBox attached itself to elements, the attached element will be passed as a parameter, e.g. onAttach: function (element) { element.css({color: 'red'}); }
      onPosition: null,            // Fired when jBox is positioned
      onCreated: null,             // Fired when jBox is created and availible in DOM
      onOpen: null,                // Fired when jBox opens
      onClose: null,               // Fired when jBox closes
      onCloseComplete: null,       // Fired when jBox is completely closed (when fading is finished)
      onDragStart: null,           // Fired when dragging starts
      onDragEnd: null              // Fired when dragging finished
    };


    // Default plugin options

    this._pluginOptions = {

      // Default options for tooltips
      'Tooltip': {
        getContent: 'title',
        trigger: 'mouseenter',
        position: {
          x: 'center',
          y: 'top'
        },
        outside: 'y',
        pointer: true
      },

      // Default options for mouse tooltips
      'Mouse': {
        responsiveWidth: false,
        responsiveHeight: false,
        adjustPosition: 'flip',
        target: 'mouse',
        trigger: 'mouseenter',
        position: {
          x: 'right',
          y: 'bottom'
        },
        outside: 'xy',
        offset: 5
      },

      // Default options for modal windows
      'Modal': {
        target: jQuery(window),
        fixed: true,
        blockScroll: true,
        closeOnEsc: true,
        closeOnClick: 'overlay',
        closeButton: true,
        overlay: true,
        animation: 'zoomIn'
      },
    };


    // Merge options

    this.options = jQuery.extend(true, this.options, this._pluginOptions[type] ? this._pluginOptions[type] : jBox._pluginOptions[type], options);


    // Set the jBox type

    jQuery.type(type) == 'string' && (this.type = type);


    // Checks if the user is on a touch device, borrowed from https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js

    this.isTouchDevice = (function () {
      var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
      var mq = function (query) {
        return window.matchMedia(query).matches;
      }

      if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
      }

      var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
      return mq(query);
    })();


    // Add close event for body click when we are on touch device and jBox triggers on mouseenter

    if (this.isTouchDevice && this.options.trigger === 'mouseenter' && this.options.closeOnClick === false) {
      this.options.closeOnClick = 'body';
    }


    // Local function to fire events

    this._fireEvent = function (event, pass)
    {
      this.options['_' + event] && (this.options['_' + event].bind(this))(pass);
      this.options[event] && (this.options[event].bind(this))(pass);
    };


    // Get a unique jBox ID

    this.options.id === null && (this.options.id = 'jBox' + jBox._getUniqueID());
    this.id = this.options.id;


    // Correct impossible options

    ((this.options.position.x == 'center' && this.options.outside == 'x') || (this.options.position.y == 'center' && this.options.outside == 'y')) && (this.options.outside = null);
    this.options.pointTo == 'target' && (!this.options.outside || this.options.outside == 'xy') && (this.options.pointer = false);


    // Correct multiple choice options

    jQuery.type(this.options.offset) != 'object' ? (this.options.offset = {x: this.options.offset, y: this.options.offset}) : (this.options.offset = jQuery.extend({x: 0, y: 0}, this.options.offset));
    jQuery.type(this.options.adjustDistance) != 'object' ? (this.options.adjustDistance = {top: this.options.adjustDistance, right: this.options.adjustDistance, bottom: this.options.adjustDistance, left: this.options.adjustDistance}) : (this.options.adjustDistance = jQuery.extend({top: 5, left: 5, right: 5, bottom: 5}, this.options.adjustDistance));


    // Save default outside position

    this.outside = this.options.outside && this.options.outside != 'xy' ? this.options.position[this.options.outside] : false;


    // Save where the jBox is aligned to

    this.align = this.outside ? this.outside : (this.options.position.y != 'center' && jQuery.type(this.options.position.y) != 'number' ? this.options.position.x : (this.options.position.x != 'center' && jQuery.type(this.options.position.x) != 'number' ? this.options.position.y : this.options.attributes.x));


    // Adjust option zIndex

    jBox.zIndexMax = Math.max(jBox.zIndexMax || 0, this.options.zIndex === 'auto' ? 10000 : this.options.zIndex);
    if (this.options.zIndex === 'auto') {
      this.adjustZIndexOnOpen = true;
      jBox.zIndexMax += 2;
      this.options.zIndex = jBox.zIndexMax;
      this.trueModal = this.options.overlay;
    }

    // Internal positioning functions

    this._getOpp = function (opp) { return {left: 'right', right: 'left', top: 'bottom', bottom: 'top', x: 'y', y: 'x'}[opp]; };
    this._getXY = function (xy) { return {left: 'x', right: 'x', top: 'y', bottom: 'y', center: 'x'}[xy]; };
    this._getTL = function (tl) { return {left: 'left', right: 'left', top: 'top', bottom: 'top', center: 'left', x: 'left', y: 'top'}[tl]; };


    // Get a dimension value in integer pixel dependent on appended element

    this._getInt = function (value, dimension) {
      if (value == 'auto') return 'auto';
      if (value && jQuery.type(value) == 'string' && value.slice(-1) == '%') {
        return jQuery(window)[dimension == 'height' ? 'innerHeight' : 'innerWidth']() * parseInt(value.replace('%', '')) / 100;
      }
      return value;
    };


    // Create an svg element

    this._createSVG = function (type, options)
    {
      var svg = document.createElementNS('http://www.w3.org/2000/svg', type);
      jQuery.each(options, function (index, item) {
        svg.setAttribute(item[0], (item[1] || ''));
      });
      return svg;
    };


    // Isolate scrolling in a container

    this._isolateScroll = function (el)
    {
      // Abort if element not found
      if (!el || !el.length) return;

      el.on('DOMMouseScroll.jBoxIsolateScroll mousewheel.jBoxIsolateScroll', function (ev) {
        var delta = ev.wheelDelta || (ev.originalEvent && ev.originalEvent.wheelDelta) || -ev.detail;
        var overflowBottom = this.scrollTop + el.outerHeight() - this.scrollHeight >= 0;
        var overflowTop = this.scrollTop <= 0;
        ((delta < 0 && overflowBottom) || (delta > 0 && overflowTop)) && ev.preventDefault();
      });
    };


    // Set the title width to content width

    this._setTitleWidth = function ()
    {
      // Abort if there is no title or width of content is auto
      if (!this.titleContainer || (this.content[0].style.width == 'auto' && !this.content[0].style.maxWidth)) return null;

      // Expose wrapper to get actual width
      if (this.wrapper.css('display') == 'none') {
        this.wrapper.css('display', 'block');
        var contentWidth = this.content.outerWidth();
        this.wrapper.css('display', 'none');
      } else {
        var contentWidth = this.content.outerWidth();
      }

      // Set max-width only
      this.titleContainer.css({maxWidth: (Math.max(contentWidth, parseInt(this.content[0].style.maxWidth)) || null)});
    }


    // Make jBox draggable

    this._draggable = function ()
    {
      // Abort if jBox is not draggable
      if (!this.options.draggable) return false;

      // Get the handle where jBox will be dragged with
      var handle = this.options.draggable == 'title' ? this.titleContainer : (this.options.draggable instanceof jQuery ? this.options.draggable : (jQuery.type(this.options.draggable) == 'string' ? jQuery(this.options.draggable) : this.wrapper));

      // Abort if no handle or if draggable was set already
      if (!handle || !(handle instanceof jQuery) || !handle.length || handle.data('jBox-draggable')) return false;

      // Add mouse events
      handle.addClass('jBox-draggable').data('jBox-draggable', true).on('touchstart mousedown', function (ev)
      {
        if (ev.button == 2 || jQuery(ev.target).hasClass('jBox-noDrag') || jQuery(ev.target).parents('.jBox-noDrag').length) return;

        // Store current mouse position
        this.draggingStartX = ev.pageX;
        this.draggingStartY = ev.pageY;

        // Adjust z-index when dragging jBox over another draggable jBox
        if (this.options.dragOver && !this.trueModal && parseInt(this.wrapper.css('zIndex'), 10) <= jBox.zIndexMaxDragover) {
          jBox.zIndexMaxDragover += 1;
          this.wrapper.css('zIndex', jBox.zIndexMaxDragover);
        }

        var drg_h = this.wrapper.outerHeight();
        var drg_w = this.wrapper.outerWidth();
        var pos_y = this.wrapper.offset().top + drg_h - ev.pageY;
        var pos_x = this.wrapper.offset().left + drg_w - ev.pageX;

        jQuery(document).on('touchmove.jBox-draggable-' + this.id + ' mousemove.jBox-draggable-' + this.id, function (ev) {
          // Fire onDragStart event when jBox moves
          if (!this.dragging && this.draggingStartX != ev.pageX && this.draggingStartY != ev.pageY) {
            this._fireEvent('onDragStart');
            this.dragging = true;
          }

          // Adjust position
          this.wrapper.offset({
            top: ev.pageY + pos_y - drg_h,
            left: ev.pageX + pos_x - drg_w
          });
        }.bind(this));
        ev.preventDefault();

      }.bind(this)).on('touchend mouseup', function () {
        // Remove drag event
        jQuery(document).off('touchmove.jBox-draggable-' + this.id + ' mousemove.jBox-draggable-' + this.id);

        // Fire onDragEnd event
        this.dragging && this._fireEvent('onDragEnd');

        // Reset dragging reference
        this.dragging = false;

        if ((this.type == 'Modal' || this.type == 'Confirm') && this.options.holdPosition) {
          // Drag end captures new position
          var jBoxOffset = jQuery('#' + this.id).offset(),
            pos = {
              x: jBoxOffset.left - jQuery(document).scrollLeft(),
              y: jBoxOffset.top - jQuery(document).scrollTop()
            };
          this.position({position: pos, offset: {x: 0, y: 0}});
        }
      }.bind(this));

      // Get highest z-index
      if (!this.trueModal) {
        jBox.zIndexMaxDragover = !jBox.zIndexMaxDragover ? this.options.zIndex : Math.max(jBox.zIndexMaxDragover, this.options.zIndex);
      }

      return this;
    };

    // Create jBox

    this._create = function ()
    {
      // Abort if jBox was created already
      if (this.wrapper) return;

      // Create wrapper
      this.wrapper = jQuery('<div/>', {
        id: this.id,
        'class': 'jBox-wrapper' + (this.type ? ' jBox-' + this.type : '') + (this.options.theme ? ' jBox-' + this.options.theme : '') + (this.options.addClass ? ' ' + this.options.addClass : '')
      }).css({
        position: (this.options.fixed ? 'fixed' : 'absolute'),
        display: 'none',
        opacity: 0,
        zIndex: this.options.zIndex

        // Save the jBox instance in the wrapper, so you can get access to your jBox when you only have the element
      }).data('jBox', this);

      // Add mouseleave event, only close jBox when the new target is not the source element
      this.options.closeOnMouseleave && this.wrapper.on('mouseleave', function (ev) {
        !this.source || !(ev.relatedTarget == this.source[0] || jQuery.inArray(this.source[0], jQuery(ev.relatedTarget).parents('*')) !== -1) && this.close();
      }.bind(this));

      // Add closeOnClick: 'box' events
      (this.options.closeOnClick == 'box') && this.wrapper.on('click', function () { this.close({ignoreDelay: true}); }.bind(this));

      // Create container
      this.container = jQuery('<div class="jBox-container"/>').appendTo(this.wrapper);

      // Create content
      this.content = jQuery('<div class="jBox-content"/>').appendTo(this.container);

      // Create footer
      this.options.footer && (this.footer = jQuery('<div class="jBox-footer"/>').append(this.options.footer).appendTo(this.container));

      // Isolate scrolling
      this.options.isolateScroll && this._isolateScroll(this.content);

      // Create close button
      if (this.options.closeButton) {
        var closeButtonSVG = this._createSVG('svg', [['viewBox', '0 0 24 24']]);
        closeButtonSVG.appendChild(this._createSVG('path', [['d', 'M22.2,4c0,0,0.5,0.6,0,1.1l-6.8,6.8l6.9,6.9c0.5,0.5,0,1.1,0,1.1L20,22.3c0,0-0.6,0.5-1.1,0L12,15.4l-6.9,6.9c-0.5,0.5-1.1,0-1.1,0L1.7,20c0,0-0.5-0.6,0-1.1L8.6,12L1.7,5.1C1.2,4.6,1.7,4,1.7,4L4,1.7c0,0,0.6-0.5,1.1,0L12,8.5l6.8-6.8c0.5-0.5,1.1,0,1.1,0L22.2,4z']]));
        this.closeButton = jQuery('<div class="jBox-closeButton jBox-noDrag"/>').on('click', function (ev) { this.close({ignoreDelay: true}); }.bind(this)).append(closeButtonSVG);

        // Add close button to jBox container
        if (this.options.closeButton == 'box' || (this.options.closeButton === true && !this.options.overlay && !this.options.title && !this.options.getTitle)) {
          this.wrapper.addClass('jBox-closeButton-box');
          this.closeButton.appendTo(this.container);
        }
      }

      // Append jBox to DOM
      this.wrapper.appendTo(this.options.appendTo);

      // Fix adjustDistance if there is a close button in the box
      this.wrapper.find('.jBox-closeButton').length &&  jQuery.each(['top', 'right', 'bottom', 'left'], function (index, pos) {
        this.wrapper.find('.jBox-closeButton').css(pos) && this.wrapper.find('.jBox-closeButton').css(pos) != 'auto' && (this.options.adjustDistance[pos] = Math.max(this.options.adjustDistance[pos], this.options.adjustDistance[pos] + (((parseInt(this.wrapper.find('.jBox-closeButton').css(pos)) || 0) + (parseInt(this.container.css('border-' + pos + '-width')) || 0)) * -1)));
      }.bind(this));

      // Create pointer
      if (this.options.pointer) {

        // Get pointer vars and save globally
        this.pointer = {
          position: (this.options.pointTo != 'target') ? this.options.pointTo : this._getOpp(this.outside),
          xy: (this.options.pointTo != 'target') ? this._getXY(this.options.pointTo) : this._getXY(this.outside),
          align: 'center',
          offset: 0
        };

        this.pointer.element = jQuery('<div class="jBox-pointer jBox-pointer-' + this.pointer.position + '"/>').appendTo(this.wrapper);
        this.pointer.dimensions = {
          x: this.pointer.element.outerWidth(),
          y: this.pointer.element.outerHeight()
        };

        if (jQuery.type(this.options.pointer) == 'string') {
          var split = this.options.pointer.split(':');
          split[0] && (this.pointer.align = split[0]);
          split[1] && (this.pointer.offset = parseInt(split[1]));
        }
        this.pointer.alignAttribute = (this.pointer.xy == 'x' ? (this.pointer.align == 'bottom' ? 'bottom' : 'top') : (this.pointer.align == 'right' ? 'right' : 'left'));

        // Set wrapper CSS
        this.wrapper.css('padding-' + this.pointer.position, this.pointer.dimensions[this.pointer.xy]);

        // Set pointer CSS
        this.pointer.element.css(this.pointer.alignAttribute, (this.pointer.align == 'center' ? '50%' : 0)).css('margin-' + this.pointer.alignAttribute, this.pointer.offset);
        this.pointer.margin = {};
        this.pointer.margin['margin-' + this.pointer.alignAttribute] = this.pointer.offset;

        // Add a transform to fix centered position
        (this.pointer.align == 'center') && this.pointer.element.css('transform', 'translate(' + (this.pointer.xy == 'y' ? (this.pointer.dimensions.x * -0.5 + 'px') : 0) + ', ' + (this.pointer.xy == 'x' ? (this.pointer.dimensions.y * -0.5 + 'px') : 0) + ')');

        this.pointer.element.css((this.pointer.xy == 'x' ? 'width' : 'height'), parseInt(this.pointer.dimensions[this.pointer.xy]) + parseInt(this.container.css('border-' + this.pointer.alignAttribute + '-width')));

        // Add class to wrapper for CSS access
        this.wrapper.addClass('jBox-pointerPosition-' + this.pointer.position);
      }

      // Set title and content
      this.setContent(this.options.content, true);
      this.setTitle(this.options.title, true);

      this.options.draggable && this._draggable();

      // Fire onCreated event
      this._fireEvent('onCreated');
    };


    // Create jBox onInit

    this.options.createOnInit && this._create();


    // Attach jBox

    this.options.attach && this.attach();


    // Attach document and window events

    this._attachEvents = function ()
    {
      // Cancel countdown on mouseenter if delayOnHover
      this.options.delayOnHover && jQuery('#' + this.id).on('mouseenter', function (ev) { this.isHovered = true; }.bind(this));

      // Resume countdown on mouseleave if delayOnHover
      this.options.delayOnHover && jQuery('#' + this.id).on('mouseleave', function (ev) { this.isHovered = false; }.bind(this));

      // Positioning events
      if ((this.options.adjustPosition || this.options.reposition) && !this.fixed && this.outside) {

        // Trigger position events when scrolling
        this.options.adjustTracker && jQuery(window).on('scroll.jBox-' + this.id, function (ev) { this.position(); }.bind(this));

        // Trigger position events when resizing
        (this.options.adjustPosition || this.options.reposition) && jQuery(window).on('resize.jBox-' + this.id, function (ev) { this.position(); }.bind(this));
      }

      // Mousemove events
      this.options.target == 'mouse' && jQuery('body').on('mousemove.jBox-' + this.id, function (ev) { this.position({mouseTarget: {top: ev.pageY, left: ev.pageX}}); }.bind(this));
    };


    // Detach document and window events

    this._detachEvents = function ()
    {
      // Closing event: closeOnEsc
      this.options.closeOnEsc && jQuery(document).off('keyup.jBox-' + this.id);

      // Closing event: closeOnClick
      (this.options.closeOnClick === true || this.options.closeOnClick == 'body') && jQuery(document).off('click.jBox-' + this.id);

      // Positioning events
      this.options.adjustTracker && jQuery(window).off('scroll.jBox-' + this.id);
      (this.options.adjustPosition || this.options.reposition) && jQuery(window).off('resize.jBox-' + this.id);

      // Mousemove events
      this.options.target == 'mouse' && jQuery('body').off('mousemove.jBox-' + this.id);
    };


    // Show overlay

    this._showOverlay = function ()
    {
      // Create the overlay if wasn't created already
      if (!this.overlay) {

        // Create element and append to the element where jBox is appended to
        this.overlay = jQuery('<div id="' + this.id + '-overlay"/>').addClass('jBox-overlay' + (this.type ? ' jBox-overlay-' + this.type : '')).css({
          display: 'none',
          opacity: 0,
          zIndex: this.options.zIndex - 1
        }).appendTo(this.options.appendTo);

        // Add a class name to the overlay
        this.options.overlayClass && this.overlay.addClass(this.options.overlayClass);

        // Add close button to overlay
        (this.options.closeButton == 'overlay' || this.options.closeButton === true) && this.overlay.append(this.closeButton);

        // Add closeOnClick: 'overlay' events
        this.options.closeOnClick == 'overlay' && this.overlay.on('click', function () { this.close({ignoreDelay: true}); }.bind(this));

        // Adjust option adjustDistance if there is a close button in the overlay
        jQuery('#' + this.id + '-overlay .jBox-closeButton').length && (this.options.adjustDistance.top = Math.max(jQuery('#' + this.id + '-overlay .jBox-closeButton').outerHeight(), this.options.adjustDistance.top));
      }

      // Adjust zIndex
      if (this.adjustZIndexOnOpen === true) {
        this.overlay.css('zIndex', parseInt(this.wrapper.css('zIndex'), 10) - 1);
      }

      // Abort if overlay is already visible
      if (this.overlay.css('display') == 'block') return;

      // Show overlay
      this.options.fade ? (this.overlay.stop() && this.overlay.animate({opacity: 1}, {
        queue: false,
        duration: this.options.fade,
        start: function () { this.overlay.css({display: 'block'}); }.bind(this)
      })) : this.overlay.css({display: 'block', opacity: 1});
    };


    // Hide overlay

    this._hideOverlay = function ()
    {
      // Abort if the overlay wasn't created yet
      if (!this.overlay) return;

      // Hide overlay if no other jBox needs it
      this.options.fade ? (this.overlay.stop() && this.overlay.animate({opacity: 0}, {
        queue: false,
        duration: this.options.fade,
        complete: function () { this.overlay.css({display: 'none'}); }.bind(this)
      })) : this.overlay.css({display: 'none', opacity: 0});
    };


    // Get the correct jBox dimensions by moving jBox out of viewport

    this._exposeDimensions = function ()
    {
      // Move wrapper out of viewport
      this.wrapper.css({
        top: -10000,
        left: -10000,
        right: 'auto',
        bottom: 'auto'
      });

      // Get jBox dimensions
      var jBoxDimensions = {
        x: this.wrapper.outerWidth(),
        y: this.wrapper.outerHeight()
      };

      // Reset position to viewport
      this.wrapper.css({
        top: 'auto',
        left: 'auto'
      });

      return jBoxDimensions;
    };


    // Generate CSS for animations and append to header

    this._generateAnimationCSS = function ()
    {
      // Get open and close animations if none provided
      (jQuery.type(this.options.animation) != 'object') && (this.options.animation = {
        pulse: {open: 'pulse', close: 'zoomOut'},
        zoomIn: {open: 'zoomIn', close: 'zoomIn'},
        zoomOut: {open: 'zoomOut', close: 'zoomOut'},
        move: {open: 'move', close: 'move'},
        slide: {open: 'slide', close: 'slide'},
        flip: {open: 'flip', close: 'flip'},
        tada: {open: 'tada', close: 'zoomOut'}
      }[this.options.animation]);

      // Abort if animation not found
      if (!this.options.animation) return null;

      // Get direction var
      this.options.animation.open && (this.options.animation.open = this.options.animation.open.split(':'));
      this.options.animation.close && (this.options.animation.close = this.options.animation.close.split(':'));
      this.options.animation.openDirection = this.options.animation.open[1] ? this.options.animation.open[1] : null;
      this.options.animation.closeDirection = this.options.animation.close[1] ? this.options.animation.close[1] : null;
      this.options.animation.open && (this.options.animation.open = this.options.animation.open[0]);
      this.options.animation.close && (this.options.animation.close = this.options.animation.close[0]);

      // Add 'Open' and 'Close' to animation names
      this.options.animation.open && (this.options.animation.open += 'Open');
      this.options.animation.close && (this.options.animation.close += 'Close');

      // All animations
      var animations = {
        pulse: {
          duration: 350,
          css: [['0%', 'scale(1)'], ['50%', 'scale(1.1)'], ['100%', 'scale(1)']]
        },
        zoomInOpen: {
          duration: (this.options.fade || 180),
          css: [['0%', 'scale(0.9)'], ['100%', 'scale(1)']]
        },
        zoomInClose: {
          duration: (this.options.fade || 180),
          css: [['0%', 'scale(1)'], ['100%', 'scale(0.9)']]
        },
        zoomOutOpen: {
          duration: (this.options.fade || 180),
          css: [['0%', 'scale(1.1)'], ['100%', 'scale(1)']]
        },
        zoomOutClose: {
          duration: (this.options.fade || 180),
          css: [['0%', 'scale(1)'], ['100%', 'scale(1.1)']]
        },
        moveOpen: {
          duration: (this.options.fade || 180),
          positions: {top: {'0%': -12}, right: {'0%': 12}, bottom: {'0%': 12}, left: {'0%': -12}},
          css: [['0%', 'translate%XY(%Vpx)'], ['100%', 'translate%XY(0px)']]
        },
        moveClose: {
          duration: (this.options.fade || 180),
          timing: 'ease-in',
          positions: {top: {'100%': -12}, right: {'100%': 12}, bottom: {'100%': 12}, left: {'100%': -12}},
          css: [['0%', 'translate%XY(0px)'], ['100%', 'translate%XY(%Vpx)']]
        },
        slideOpen: {
          duration: 400,
          positions: {top: {'0%': -400}, right: {'0%': 400}, bottom: {'0%': 400}, left: {'0%': -400}},
          css: [['0%', 'translate%XY(%Vpx)'], ['100%', 'translate%XY(0px)']]
        },
        slideClose: {
          duration: 400,
          timing: 'ease-in',
          positions: {top: {'100%': -400}, right: {'100%': 400}, bottom: {'100%': 400}, left: {'100%': -400}},
          css: [['0%', 'translate%XY(0px)'], ['100%', 'translate%XY(%Vpx)']]
        },
        flipOpen: {
          duration: 600,
          css: [['0%', 'perspective(400px) rotateX(90deg)'], ['40%', 'perspective(400px) rotateX(-15deg)'], ['70%', 'perspective(400px) rotateX(15deg)'], ['100%', 'perspective(400px) rotateX(0deg)']]
        },
        flipClose: {
          duration: (this.options.fade || 300),
          css: [['0%', 'perspective(400px) rotateX(0deg)'], ['100%', 'perspective(400px) rotateX(90deg)']]
        },
        tada: {
          duration: 800,
          css: [['0%', 'scale(1)'], ['10%, 20%', 'scale(0.9) rotate(-3deg)'], ['30%, 50%, 70%, 90%', 'scale(1.1) rotate(3deg)'], ['40%, 60%, 80%', 'scale(1.1) rotate(-3deg)'], ['100%', 'scale(1) rotate(0)']]
        }
      };

      // Set Open and Close names for standalone animations
      jQuery.each(['pulse', 'tada'], function (index, item) { animations[item + 'Open'] = animations[item + 'Close'] = animations[item]; });

      // Function to generate the CSS for the keyframes
      var generateKeyframeCSS = function (ev, position)
      {
        // Generate keyframes CSS
        keyframe_css = '@keyframes jBox-' + this.id + '-animation-' + this.options.animation[ev] + '-' + ev + (position ? '-' + position : '') + ' {';
        jQuery.each(animations[this.options.animation[ev]].css, function (index, item) {
          var translate = position ? item[1].replace('%XY', this._getXY(position).toUpperCase()) : item[1];
          animations[this.options.animation[ev]].positions && (translate = translate.replace('%V', animations[this.options.animation[ev]].positions[position][item[0]]));
          keyframe_css += item[0] + ' {transform:' + translate + ';}';
        }.bind(this));
        keyframe_css += '}';

        // Generate class CSS
        keyframe_css += '.jBox-' + this.id + '-animation-' + this.options.animation[ev] + '-' + ev + (position ? '-' + position : '') + ' {';
        keyframe_css += 'animation-duration: ' + animations[this.options.animation[ev]].duration + 'ms;';
        keyframe_css += 'animation-name: jBox-' + this.id + '-animation-' + this.options.animation[ev] + '-' + ev + (position ? '-' + position : '') + ';';
        keyframe_css += animations[this.options.animation[ev]].timing ? ('animation-timing-function: ' + animations[this.options.animation[ev]].timing + ';') : '';
        keyframe_css += '}';

        return keyframe_css;
      }.bind(this);

      // Generate css for each event and positions
      this._animationCSS = '';
      jQuery.each(['open', 'close'], function (index, ev)
      {
        // No CSS needed for closing with no fade
        if (!this.options.animation[ev] || !animations[this.options.animation[ev]] || (ev == 'close' && !this.options.fade)) return '';

        // Generate CSS
        animations[this.options.animation[ev]].positions ?
          jQuery.each(['top', 'right', 'bottom', 'left'], function (index2, position) { this._animationCSS += generateKeyframeCSS(ev, position); }.bind(this)) :
          this._animationCSS += generateKeyframeCSS(ev);
      }.bind(this));

    };


    // Add css for animations

    this.options.animation && this._generateAnimationCSS();


    // Block body clicks for 10ms to prevent extra event triggering

    this._blockBodyClick = function ()
    {
      this.blockBodyClick = true;
      setTimeout(function () { this.blockBodyClick = false; }.bind(this), 10);
    };


    // Animations

    this._animate = function (ev)
    {
      // The event which triggers the animation
      !ev && (ev = this.isOpen ? 'open' : 'close');

      // Don't animate when closing with no fade duration
      if (!this.options.fade && ev == 'close') return null;

      // Get the current position, use opposite if jBox is flipped
      var animationDirection = (this.options.animation[ev + 'Direction'] || ((this.align != 'center') ? this.align : this.options.attributes.x));
      this.flipped && this._getXY(animationDirection) == (this._getXY(this.align)) && (animationDirection = this._getOpp(animationDirection));

      // Add event and position classes
      var classnames = 'jBox-' + this.id + '-animation-' + this.options.animation[ev] + '-' + ev + ' jBox-' + this.id + '-animation-' + this.options.animation[ev] + '-' + ev + '-' + animationDirection;
      this.wrapper.addClass(classnames);

      // Get duration of animation
      var animationDuration = parseFloat(this.wrapper.css('animation-duration')) * 1000;
      ev == 'close' && (animationDuration = Math.min(animationDuration, this.options.fade));

      // Remove animation classes when animation is finished
      setTimeout(function () { this.wrapper.removeClass(classnames); }.bind(this), animationDuration);
    };


    // Abort an animation

    this._abortAnimation = function ()
    {
      // Remove all animation classes
      var classes = this.wrapper.attr('class').split(' ').filter(function (c) {
        return c.lastIndexOf('jBox-' + this.id + '-animation', 0) !== 0;
      }.bind(this));
      this.wrapper.attr('class', classes.join(' '));
    };


    // Adjust dimensions when browser is resized

    if (this.options.responsiveWidth || this.options.responsiveHeight)
    {
      // Responsive positioning overrides options adjustPosition and reposition
      // TODO: Only add this resize event when the other one from adjustPosition and reposition was not set
      jQuery(window).on('resize.responsivejBox-' + this.id, function (ev) { if (this.isOpen) { this.position(); } }.bind(this));
    }


    // Fix audio options

    jQuery.type(this.options.preloadAudio) === 'string' && (this.options.preloadAudio = [this.options.preloadAudio]);
    jQuery.type(this.options.audio) === 'string' && (this.options.audio = {open: this.options.audio});
    jQuery.type(this.options.volume) === 'number' && (this.options.volume = {open: this.options.volume, close: this.options.volume});

    if (this.options.preloadAudio === true && this.options.audio) {
      this.options.preloadAudio = [];
      jQuery.each(this.options.audio, function (index, url) {
        this.options.preloadAudio.push(url + '.mp3');
        this.options.preloadAudio.push(url + '.ogg');
      }.bind(this));
    }


    // Preload audio files

    this.options.preloadAudio.length && jQuery.each(this.options.preloadAudio, function (index, url) {
      var audio = new Audio();
      audio.src = url;
      audio.preload = 'auto';
    });


    // Fire onInit event

    this._fireEvent('onInit');


    return this;
  };


  // Attach jBox to elements

  jBox.prototype.attach = function (elements, trigger)
  {
    // Get elements from options if none passed
    !elements && (elements = this.options.attach);

    // Convert selectors to jQuery objects
    jQuery.type(elements) == 'string' && (elements = jQuery(elements));

    // Get trigger event from options if not passed
    !trigger && (trigger = this.options.trigger);

    // Loop through elements and attach jBox
    elements && elements.length && jQuery.each(elements, function (index, el) {
      el = jQuery(el);

      // Only attach if the element wasn't attached to this jBox already
      if (!el.data('jBox-attached-' + this.id)) {

        // Remove title attribute and store content on element
        (this.options.getContent == 'title' && el.attr('title') != undefined) && el.data('jBox-getContent', el.attr('title')).removeAttr('title');

        // Add Element to collection
        this.attachedElements || (this.attachedElements = []);
        this.attachedElements.push(el[0]);

        // Add click or mouseenter event, click events can prevent default as well
        el.on(trigger + '.jBox-attach-' + this.id, function (ev)
        {
          // Clear timer
          this.timer && clearTimeout(this.timer);

          // Block opening when jbox is open and the source element is triggering
          if (trigger == 'mouseenter' && this.isOpen && this.source[0] == el[0]) return;

          // Only close jBox if you click the current target element, otherwise open at new target
          if (this.isOpen && this.source && this.source[0] != el[0]) var forceOpen = true;

          // Set new source element
          this.source = el;

          // Set new target
          !this.options.target && (this.target = el);

          // Prevent default action on click
          trigger == 'click' && this.options.preventDefault && ev.preventDefault();

          // Toggle or open jBox
          this[trigger == 'click' && !forceOpen ? 'toggle' : 'open']();

        }.bind(this));

        // Add close event for trigger event mouseenter
        (this.options.trigger == 'mouseenter') && el.on('mouseleave', function (ev)
        {
          // Abort if jBox wasn't created yet
          if (!this.wrapper) return null;

          // If we have set closeOnMouseleave, do not close jBox when leaving attached element and mouse is over jBox
          if (!this.options.closeOnMouseleave || !(ev.relatedTarget == this.wrapper[0] || jQuery(ev.relatedTarget).parents('#' + this.id).length)) this.close();
        }.bind(this));

        // Store
        el.data('jBox-attached-' + this.id, trigger);

        // Fire onAttach event
        this._fireEvent('onAttach', el);
      }

    }.bind(this));

    return this;
  };


  // Detach jBox from elements

  jBox.prototype.detach = function (elements)
  {
    // Get elements from stores elements if none passed
    !elements && (elements = this.attachedElements || []);

    elements && elements.length && jQuery.each(elements, function (index, el) {
      el = jQuery(el);

      // Remove events
      if (el.data('jBox-attached-' + this.id)) {
        el.off(el.data('jBox-attached-' + this.id) + '.jBox-attach-' + this.id);
        el.data('jBox-attached-' + this.id, null);
      }
      // Remove element from collection
      this.attachedElements = jQuery.grep(this.attachedElements, function (value) {
        return value != el[0];
      });
    }.bind(this));

    return this;
  };


  // Set title

  jBox.prototype.setTitle = function (title, ignore_positioning)
  {
    // Abort if title to set
    if (title == null || title == undefined) return this;

    // Create jBox if it wasn't created already
    !this.wrapper && this._create();

    // Get the width and height of wrapper, only if they change we need to reposition
    var wrapperHeight = this.wrapper.outerHeight();
    var wrapperWidth = this.wrapper.outerWidth();

    // Create title elements if they weren't created already
    if (!this.title) {
      this.titleContainer = jQuery('<div class="jBox-title"/>');
      this.title = jQuery('<div/>').appendTo(this.titleContainer);
      if (this.options.closeButton == 'title' || (this.options.closeButton === true && !this.options.overlay)) {
        this.wrapper.addClass('jBox-closeButton-title');
        this.closeButton.appendTo(this.titleContainer);
      }
      this.titleContainer.insertBefore(this.content);
      this._setTitleWidth();
    }

    // Add or remove wrapper class
    this.wrapper[title ? 'addClass' : 'removeClass']('jBox-hasTitle');

    // Set title html
    this.title.html(title);

    // Adjust width of title
    wrapperWidth != this.wrapper.outerWidth() && this._setTitleWidth();

    // Make jBox draggable
    this.options.draggable && this._draggable();

    // Reposition if dimensions changed
    !ignore_positioning && this.options.repositionOnContent && (wrapperHeight != this.wrapper.outerHeight() || wrapperWidth != this.wrapper.outerWidth()) && this.position();

    return this;
  };


  // Set content

  jBox.prototype.setContent = function (content, ignore_positioning)
  {
    // Abort if no content to set
    if (content == null || content == undefined) return this;

    // Create jBox if it wasn't created already
    !this.wrapper && this._create();

    // Get the width and height of wrapper, only if they change we need to reposition
    var wrapperHeight = this.wrapper.outerHeight();
    var wrapperWidth = this.wrapper.outerWidth();

    // Move all appended containers to body
    this.content.children('[data-jbox-content-appended]').appendTo('body').css({display: 'none'});

    // Set the new content
    switch (jQuery.type(content)) {
      case 'string':
        this.content.html(content);
        break;
      case 'object':

        if(typeof $ === "undefined"){
          $=jQuery;
        }
        if(typeof $k === "undefined"){
          $k=jQuery;
        }


        if ((content instanceof jQuery)|| (content instanceof $) || (content instanceof $k)  ) {
          this.content.html('');
          content.attr('data-jbox-content-appended', 1).appendTo(this.content).css({display: 'block'});
        } else {
          this.content.html(JSON.stringify(content));
        }
        break;
     }

    // Adjust title width
    wrapperWidth != this.wrapper.outerWidth() && this._setTitleWidth();

    // Make jBox draggable
    this.options.draggable && this._draggable();

    // Reposition if dimensions changed
    !ignore_positioning && this.options.repositionOnContent && (wrapperHeight != this.wrapper.outerHeight() || wrapperWidth != this.wrapper.outerWidth()) && this.position();

    return this;
  };


  // Set jBox dimensions

  jBox.prototype.setDimensions = function (type, value, pos)
  {
    // Create jBox if it wasn't created already
    !this.wrapper && this._create();

    // Default value is 'auto'
    value == undefined && (value = 'auto');

    // Set CSS of content and title
    this.content.css(type, this._getInt(value));

    // Adjust title width
    type == 'width' && this._setTitleWidth();

    // Reposition by default
    (pos == undefined || pos) && this.position();
  };


  // Set jBox width or height

  jBox.prototype.setWidth = function (value, pos) { this.setDimensions('width', value, pos); };
  jBox.prototype.setHeight = function (value, pos) { this.setDimensions('height', value, pos); };


  // Position jBox

  jBox.prototype.position = function (options)
  {
    // Options are required
    !options && (options = {});

    // Combine passed options with jBox options
    options = jQuery.extend(true, this.options, options);

    // Get the target
    this.target = options.target || this.target || jQuery(window);

    // Make sure target is a jQuery element
    !(this.target instanceof jQuery || this.target == 'mouse') && (this.target = jQuery(this.target));

    // Abort if target is missing
    if (!this.target.length) return this;

    // Reset content css to get original dimensions
    this.content.css({
      width: this._getInt(options.width, 'width'),
      height: this._getInt(options.height, 'height'),
      minWidth: this._getInt(options.minWidth, 'width'),
      minHeight: this._getInt(options.minHeight, 'height'),
      maxWidth: this._getInt(options.maxWidth, 'width'),
      maxHeight: this._getInt(options.maxHeight, 'height'),
    });

    // Reset width of title
    this._setTitleWidth();

    // Get jBox dimensions
    var jBoxDimensions = this._exposeDimensions();

    // Check if target has fixed position, store in elements data
    this.target != 'mouse' && !this.target.data('jBox-' + this.id + '-fixed') && this.target.data('jBox-' + this.id + '-fixed', (this.target[0] != jQuery(window)[0] && (this.target.css('position') == 'fixed' || this.target.parents().filter(function () { return jQuery(this).css('position') == 'fixed'; }).length > 0)) ? 'fixed' : 'static');

    // Get the window dimensions
    var windowDimensions = {
      x: jQuery(window).outerWidth(),
      y: jQuery(window).outerHeight(),
      top: (options.fixed && this.target.data('jBox-' + this.id + '-fixed') ? 0 : jQuery(window).scrollTop()),
      left: (options.fixed && this.target.data('jBox-' + this.id + '-fixed') ? 0 : jQuery(window).scrollLeft())
    };
    windowDimensions.bottom = windowDimensions.top + windowDimensions.y;
    windowDimensions.right = windowDimensions.left + windowDimensions.x;

    // Get target offset
    try { var targetOffset = this.target.offset(); } catch (e) { var targetOffset = {top: 0, left: 0}; };

    // When the target is fixed and jBox is fixed, remove scroll offset
    if (this.target != 'mouse' && this.target.data('jBox-' + this.id + '-fixed') == 'fixed' && options.fixed) {
      targetOffset.top = targetOffset.top - jQuery(window).scrollTop();
      targetOffset.left = targetOffset.left - jQuery(window).scrollLeft();
    }

    // Get target dimensions
    var targetDimensions = {
      x: this.target == 'mouse' ? 12 : this.target.outerWidth(),
      y: this.target == 'mouse' ? 20 : this.target.outerHeight(),
      top: this.target == 'mouse' && options.mouseTarget ? options.mouseTarget.top : (targetOffset ? targetOffset.top : 0),
      left: this.target == 'mouse' && options.mouseTarget ? options.mouseTarget.left : (targetOffset ? targetOffset.left : 0)
    };

    // Check if jBox is outside
    var outside = options.outside && !(options.position.x == 'center' && options.position.y == 'center');

    // Get the available space on all sides
    var availableSpace = {
      x: windowDimensions.x - options.adjustDistance.left - options.adjustDistance.right, // TODO: substract position.x when they are numbers
      y: windowDimensions.y - options.adjustDistance.top - options.adjustDistance.bottom, // TODO: substract position.x when they are numbers
      left: !outside ? 0 : (targetDimensions.left - jQuery(window).scrollLeft() - options.adjustDistance.left),
      right: !outside ? 0 : (windowDimensions.x - targetDimensions.left + jQuery(window).scrollLeft() - targetDimensions.x - options.adjustDistance.right),
      top: !outside ? 0 : (targetDimensions.top - jQuery(window).scrollTop() - this.options.adjustDistance.top),
      bottom: !outside ? 0 : (windowDimensions.y - targetDimensions.top + jQuery(window).scrollTop() - targetDimensions.y - options.adjustDistance.bottom),
    };

    // Get the default outside position, check if box will be flipped
    var jBoxOutsidePosition = {
      x: (options.outside == 'x' || options.outside == 'xy') && jQuery.type(options.position.x) != 'number' ? options.position.x : null,
      y: (options.outside == 'y' || options.outside == 'xy') && jQuery.type(options.position.y) != 'number' ? options.position.y : null
    };
    var flip = {x: false, y: false};
    (jBoxOutsidePosition.x && jBoxDimensions.x > availableSpace[jBoxOutsidePosition.x] && availableSpace[this._getOpp(jBoxOutsidePosition.x)] > availableSpace[jBoxOutsidePosition.x]) && (jBoxOutsidePosition.x = this._getOpp(jBoxOutsidePosition.x)) && (flip.x = true);
    (jBoxOutsidePosition.y && jBoxDimensions.y > availableSpace[jBoxOutsidePosition.y] && availableSpace[this._getOpp(jBoxOutsidePosition.y)] > availableSpace[jBoxOutsidePosition.y]) && (jBoxOutsidePosition.y = this._getOpp(jBoxOutsidePosition.y)) && (flip.y = true);

    // Adjust responsive dimensions
    if (options.responsiveWidth || options.responsiveHeight) {

      // Adjust width and height according to default outside position
      var adjustResponsiveWidth = function ()
      {
        if (options.responsiveWidth && jBoxDimensions.x > availableSpace[jBoxOutsidePosition.x || 'x']) {
          var contentWidth = availableSpace[jBoxOutsidePosition.x || 'x'] - (this.pointer && outside && options.outside == 'x' ? this.pointer.dimensions.x : 0) - parseInt(this.container.css('border-left-width')) - parseInt(this.container.css('border-right-width'));
          this.content.css({
            width: contentWidth > this.options.responsiveMinWidth ? contentWidth : null,
            minWidth: contentWidth < parseInt(this.content.css('minWidth')) ? 0 : null
          });
          this._setTitleWidth();
        }
        jBoxDimensions = this._exposeDimensions();

      }.bind(this);
      options.responsiveWidth && adjustResponsiveWidth();

      // After adjusting width, check if jBox will be flipped for y
      options.responsiveWidth && !flip.y && (jBoxOutsidePosition.y && jBoxDimensions.y > availableSpace[jBoxOutsidePosition.y] && availableSpace[this._getOpp(jBoxOutsidePosition.y)] > availableSpace[jBoxOutsidePosition.y]) && (jBoxOutsidePosition.y = this._getOpp(jBoxOutsidePosition.y)) && (flip.y = true);

      // Adjust width and height according to default outside position
      var adjustResponsiveHeight = function ()
      {
        if (options.responsiveHeight && jBoxDimensions.y > availableSpace[jBoxOutsidePosition.y || 'y']) {

          // Expose wrapper to get correct title height
          var exposeTitleFooterHeight = function () {
            if (!this.titleContainer && !this.footer) return 0;
            if (this.wrapper.css('display') == 'none') {
              this.wrapper.css('display', 'block');
              var height = (this.titleContainer ? this.titleContainer.outerHeight() : 0) + (this.footer ? this.footer.outerHeight() : 0);
              this.wrapper.css('display', 'none');
            } else {
              var height = (this.titleContainer ? this.titleContainer.outerHeight() : 0) + (this.footer ? this.footer.outerHeight() : 0);
            }
            return height || 0;
          }.bind(this);

          var contentHeight = availableSpace[jBoxOutsidePosition.y || 'y'] - (this.pointer && outside && options.outside == 'y' ? this.pointer.dimensions.y : 0) - exposeTitleFooterHeight() - parseInt(this.container.css('border-top-width')) - parseInt(this.container.css('border-bottom-width'));
          this.content.css({height: contentHeight > this.options.responsiveMinHeight ? contentHeight : null});
          this._setTitleWidth();
        }
        jBoxDimensions = this._exposeDimensions();

      }.bind(this);
      options.responsiveHeight && adjustResponsiveHeight();

      // After adjusting height, check if jBox will be flipped for x
      options.responsiveHeight && !flip.x && (jBoxOutsidePosition.x && jBoxDimensions.x > availableSpace[jBoxOutsidePosition.x] && availableSpace[this._getOpp(jBoxOutsidePosition.x)] > availableSpace[jBoxOutsidePosition.x]) && (jBoxOutsidePosition.x = this._getOpp(jBoxOutsidePosition.x)) && (flip.x = true);

      // Adjust width and height if jBox will be flipped
      if (options.adjustPosition && options.adjustPosition != 'move') {
        flip.x && adjustResponsiveWidth();
        flip.y && adjustResponsiveHeight();
      }
    }

    // Store new positioning vars in local var
    var pos = {};

    // Calculate positions
    var setPosition = function (p)
    {
      // Set number positions
      if (jQuery.type(options.position[p]) == 'number') {
        pos[options.attributes[p]] = options.position[p];
        return;
      }

      // We have a target, so use 'left' or 'top' as attributes
      var a = options.attributes[p] = (p == 'x' ? 'left' : 'top');

      // Start at target position
      pos[a] = targetDimensions[a];

      // Set centered position
      if (options.position[p] == 'center') {
        pos[a] += Math.ceil((targetDimensions[p] - jBoxDimensions[p]) / 2);

        // If the target is the window, adjust centered position depending on adjustDistance
        (this.target != 'mouse' && this.target[0] && this.target[0] == jQuery(window)[0]) && (pos[a] += (options.adjustDistance[a] - options.adjustDistance[this._getOpp(a)]) * 0.5);
        return;
      }

      // Move inside
      (a != options.position[p]) && (pos[a] += targetDimensions[p] - jBoxDimensions[p]);

      // Move outside
      (options.outside == p || options.outside == 'xy') && (pos[a] += jBoxDimensions[p] * (a != options.position[p] ? 1 : -1));

    }.bind(this);

    // Set position including offset
    setPosition('x');
    setPosition('y');

    // Adjust position depending on pointer align
    if (this.pointer && options.pointTo == 'target' && jQuery.type(options.position.x) != 'number' && jQuery.type(options.position.y) != 'number') {

      var adjustWrapper = 0;

      // Where is the pointer aligned? Add or substract accordingly
      switch (this.pointer.align) {
        case 'center':
        if (options.position[this._getOpp(options.outside)] != 'center') {
          adjustWrapper += (jBoxDimensions[this._getOpp(options.outside)] / 2);
        }
        break;
        default:
        switch (options.position[this._getOpp(options.outside)]) {
          case 'center':
            adjustWrapper += ((jBoxDimensions[this._getOpp(options.outside)] / 2) - (this.pointer.dimensions[this._getOpp(options.outside)] / 2)) * (this.pointer.align == this._getTL(this.pointer.align) ? 1 : -1);
          break;
          default:
            adjustWrapper += (this.pointer.align != options.position[this._getOpp(options.outside)]) ?

            // If pointer align is different to position align
            (this.dimensions[this._getOpp(options.outside)] * (jQuery.inArray(this.pointer.align, ['top', 'left']) !== -1 ? 1 : -1)) + ((this.pointer.dimensions[this._getOpp(options.outside)] / 2) * (jQuery.inArray(this.pointer.align, ['top', 'left']) !== -1 ? -1 : 1)) :

            // If pointer align is same as position align
            (this.pointer.dimensions[this._getOpp(options.outside)] / 2) * (jQuery.inArray(this.pointer.align, ['top', 'left']) !== -1 ? 1 : -1);
          break;
        }
        break;
      }

      adjustWrapper *= (options.position[this._getOpp(options.outside)] == this.pointer.alignAttribute ? -1 : 1);
      adjustWrapper += this.pointer.offset * (this.pointer.align == this._getOpp(this._getTL(this.pointer.align)) ? 1 : -1);

      pos[this._getTL(this._getOpp(this.pointer.xy))] += adjustWrapper;
    }

    // Add final offset
    pos[options.attributes.x] += options.offset.x;
    pos[options.attributes.y] += options.offset.y;

    // Set CSS
    this.wrapper.css(pos);

    // Adjust position
    if (options.adjustPosition) {

      // Reset cached pointer position
      if (this.positionAdjusted) {
        this.pointer && this.wrapper.css('padding', 0).css('padding-' + this._getOpp(this.outside), this.pointer.dimensions[this._getXY(this.outside)]).removeClass('jBox-pointerPosition-' + this._getOpp(this.pointer.position)).addClass('jBox-pointerPosition-' + this.pointer.position);
        this.pointer && this.pointer.element.attr('class', 'jBox-pointer jBox-pointer-' + this._getOpp(this.outside)).css(this.pointer.margin);
        this.positionAdjusted = false;
        this.flipped = false;
      }

      // Find out where the jBox is out of view area
      var outYT = (windowDimensions.top > pos.top - (options.adjustDistance.top || 0)),
        outXR = (windowDimensions.right < pos.left + jBoxDimensions.x + (options.adjustDistance.right || 0)),
        outYB = (windowDimensions.bottom < pos.top + jBoxDimensions.y + (options.adjustDistance.bottom || 0)),
        outXL = (windowDimensions.left > pos.left - (options.adjustDistance.left || 0)),
        outX = outXL ? 'left' : (outXR ? 'right' : null),
        outY = outYT ? 'top' : (outYB ? 'bottom' : null),
        out = outX || outY;

      // Only continue if jBox is out of view area
      if (out) {

        if ((this.type == 'Modal' || this.type == 'Confirm')
          && jQuery.type(this.options.position.x) == 'number'
          && jQuery.type(this.options.position.y) == 'number'
        ) {
          var diffX = 0, diffY = 0;
          if (this.options.holdPosition) {

            // Adjust left or right
            if (outXL) {
              diffX = windowDimensions.left - (pos.left - (options.adjustDistance.left || 0));
            } else if (outXR) {
              diffX = windowDimensions.right - (pos.left + jBoxDimensions.x + (options.adjustDistance.right || 0));
            }

            // Adjust top or bottom
            if (outYT) {
              diffY = windowDimensions.top - (pos.top - (options.adjustDistance.top || 0));
            } else if (outYB) {
              diffY = windowDimensions.bottom - (pos.top + jBoxDimensions.y + (options.adjustDistance.bottom || 0));
            }

            this.options.position.x = Math.max(windowDimensions.top, this.options.position.x + diffX);
            this.options.position.y = Math.max(windowDimensions.left, this.options.position.y + diffY);

            setPosition('x');
            setPosition('y');
            this.wrapper.css(pos);
          }
          // Fire onPosition event
          this._fireEvent('onPosition');

          return this;
        }

        // Function to flip position
        if (options.adjustPosition === true || options.adjustPosition === 'flip') {
          var flipJBox = function (xy) {
            this.wrapper.css(this._getTL(xy), pos[this._getTL(xy)] + ((jBoxDimensions[this._getXY(xy)] + (options.offset[this._getXY(xy)] * (xy == 'top' || xy == 'left' ? -2 : 2)) + targetDimensions[this._getXY(xy)]) * (xy == 'top' || xy == 'left' ? 1 : -1)));
            this.pointer && this.wrapper.removeClass('jBox-pointerPosition-' + this.pointer.position).addClass('jBox-pointerPosition-' + this._getOpp(this.pointer.position)).css('padding', 0).css('padding-' + xy, this.pointer.dimensions[this._getXY(xy)]);
            this.pointer && this.pointer.element.attr('class', 'jBox-pointer jBox-pointer-' + xy);
            this.positionAdjusted = true;
            this.flipped = true;
          }.bind(this);

          // Flip jBox
          flip.x && flipJBox(this.options.position.x);
          flip.y && flipJBox(this.options.position.y);
        }

        // Move jBox (only possible with pointer)
        var outMove = (this._getXY(this.outside) == 'x') ? outY : outX;

        if (this.pointer && options.pointTo == 'target' && options.adjustPosition != 'flip' && this._getXY(outMove) == this._getOpp(this._getXY(this.outside))) {

          // Get the maximum space we have availible to adjust
          if (this.pointer.align == 'center') {
            var spaceAvail = (jBoxDimensions[this._getXY(outMove)] / 2) - (this.pointer.dimensions[this._getOpp(this.pointer.xy)] / 2) - (parseInt(this.pointer.element.css('margin-' + this.pointer.alignAttribute)) * (outMove != this._getTL(outMove) ? -1 : 1));
          } else {
            var spaceAvail = (outMove == this.pointer.alignAttribute) ?
              parseInt(this.pointer.element.css('margin-' + this.pointer.alignAttribute)) :
              jBoxDimensions[this._getXY(outMove)] - parseInt(this.pointer.element.css('margin-' + this.pointer.alignAttribute)) - this.pointer.dimensions[this._getXY(outMove)];
          }

          // Get the overlapping space
          var spaceDiff = (outMove == this._getTL(outMove)) ?
            windowDimensions[this._getTL(outMove)] - pos[this._getTL(outMove)] + options.adjustDistance[outMove] :
            (windowDimensions[this._getOpp(this._getTL(outMove))] - pos[this._getTL(outMove)] - options.adjustDistance[outMove] - jBoxDimensions[this._getXY(outMove)]) * -1;

          // Add overlapping space on left or top window edge
          if (outMove == this._getOpp(this._getTL(outMove)) && pos[this._getTL(outMove)] - spaceDiff < windowDimensions[this._getTL(outMove)] + options.adjustDistance[this._getTL(outMove)]) {
            spaceDiff -= windowDimensions[this._getTL(outMove)] + options.adjustDistance[this._getTL(outMove)] - (this.pos[this._getTL(outMove)] - spaceDiff);
          }

          // Only adjust the maximum availible
          spaceDiff = Math.min(spaceDiff, spaceAvail);

          // Move jBox
          if (spaceDiff <= spaceAvail && spaceDiff > 0) {
            this.pointer.element.css('margin-' + this.pointer.alignAttribute, parseInt(this.pointer.element.css('margin-' + this.pointer.alignAttribute)) - (spaceDiff * (outMove != this.pointer.alignAttribute ? -1 : 1)));
            this.wrapper.css(this._getTL(outMove), pos[this._getTL(outMove)] + (spaceDiff * (outMove != this._getTL(outMove) ? -1 : 1)));
            this.positionAdjusted = true;
          }
        }
      }
    }

    // Fire onPosition event
    this._fireEvent('onPosition');

    return this;
  };


  // Block scrolling
  // Borrowed from https://github.com/StephanWagner/unscroll

  jBox.prototype.unscroll = function (elements) {

    // Store reusable vars
    this.set = function (id, value) {
      if (!window.unscrollStore) {
        window.unscrollStore = {};
      }
      window.unscrollStore[id] = value;
    };

    // Get reusable vars
    this.get = function (id) {
      return window.unscrollStore ? window.unscrollStore[id] : null;
    };

    // Get the width of the scroll bar in pixel
    this.getScrollbarWidth = function () {
      if (this.get('scrollbarWidth')) {
        return this.get('scrollbarWidth') + 'px';
      }
      var scrollElement = document.createElement('div');
      scrollElement.style.width = '100px';
      scrollElement.style.height = '100px';
      scrollElement.style.overflow = 'scroll';
      scrollElement.style.position = 'absolute';
      scrollElement.style.top = '-10000';

      document.body.appendChild(scrollElement);
      var scrollbarWidth = scrollElement.offsetWidth - scrollElement.clientWidth;
      document.body.removeChild(scrollElement);

      this.set('scrollbarWidth', scrollbarWidth);
      return scrollbarWidth + 'px';
    }

    // Add unscroll class to head
    function addUnscrollClassName() {
      if (document.getElementById('unscroll-class-name')) {
        return;
      }
      var css = '.unscrollable { overflow: hidden !important; }',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');
      style.type = 'text/css';
      style.setAttribute('id', 'unscroll-class-name');
      style.appendChild(document.createTextNode(css));
      head.appendChild(style);
    }

    // Get the elements to adjust, force body element
    this.getElementsToAdjust = function (elements) {
      !elements && (elements = []);

      if (typeof elements === 'string') {
        elements = [
          [elements, 'padding-right']
        ];
      }

      elements.forEach(function (element, index) {
        if (typeof element === 'string') {
          elements[index] = [element, 'padding-right'];
        }
      });

      var bodyFound = false;
      for (var i = 0; i < elements.length; i++) {
        if (elements[i][0].indexOf('body') !== -1) {
          bodyFound = true;
        }
      };

      if (bodyFound === false) {
        elements.push(['body', 'padding-right']);
      }

      return elements;
    }

    this.pageHasScrollbar = function () {
      return this.getScrollbarWidth() && document.body.offsetHeight > window.innerHeight;
    }

    // Clean up elements
    if (this.pageHasScrollbar()) {
      elements = this.getElementsToAdjust(elements);

      // Loop through elements and adjust accordingly
      for (var i = 0; i < elements.length; i++) {
        var elementsDOM = document.querySelectorAll(elements[i][0]);
        for (var j = 0; j < elementsDOM.length; j++) {
          if (elementsDOM[j].getAttribute('data-unscroll')) {
            return;
          }
          var attribute = elements[i][1];
          var computedStyles = window.getComputedStyle(elementsDOM[j]);
          var computedStyle = computedStyles.getPropertyValue(attribute);
          elementsDOM[j].setAttribute('data-unscroll', attribute);
          if (!computedStyle) {
            computedStyle = '0px';
          }
          var operator = attribute == 'padding-right' || attribute == 'right' ? '+' : '-';
          elementsDOM[j].style[attribute] = 'calc(' + computedStyle + ' ' + operator + ' ' + this.getScrollbarWidth() + ')';
        }
      }
    }

    // Make the page unscrollable
    addUnscrollClassName();
    document.body.classList.add('unscrollable');
  }

  jBox.prototype.unscroll.reset = function () {
    var elements = document.querySelectorAll('[data-unscroll]');

    for (var i = 0; i < elements.length; i++) {
      var attribute = elements[i].getAttribute('data-unscroll');
      elements[i].style[attribute] = null;
      elements[i].removeAttribute('data-unscroll');
    }
    document.body.classList.remove('unscrollable');
  }


  // Open jBox

  jBox.prototype.open = function (options)
  {
    // Create blank options if none passed
    !options && (options = {});

    // Abort if jBox was destroyed
    if (this.isDestroyed) return this;

    // Construct jBox if not already constructed
    !this.wrapper && this._create();

    // Add css to header if not added already
    !this._styles && (this._styles = jQuery('<style/>').append(this._animationCSS).appendTo(jQuery('head')));

    // Abort any opening or closing timer
    this.timer && clearTimeout(this.timer);

    // Block body click for 10ms, so jBox can open on attached elements while closeOnClick = 'body'
    this._blockBodyClick();

    // Block opening
    if (this.isDisabled) return this;

    // Closing event: closeOnEsc
    this.options.closeOnEsc && jQuery(document).on('keyup.jBox-' + this.id, function (ev) { if (ev.keyCode == 27) { this.close({ignoreDelay: true}); }}.bind(this));

    // Closing event: closeOnClick
    if (this.options.closeOnClick === true || this.options.closeOnClick === 'body') {
      jQuery('body').on('click.jBox-' + this.id, function (ev) {
        if (this.blockBodyClick || (this.options.closeOnClick == 'body' && (ev.target == this.wrapper[0] || this.wrapper.has(ev.target).length))) return;
        this.close({ignoreDelay: true});
      }.bind(this));

      // Fix for iOS event bubbling issue
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      this.isTouchDevice && jQuery('body > *').on('click.jBox-' + this.id, function () {
        return true;
      });
    }

    // Opening function
    var open = function () {

      // Adjust zIndex
      if (this.adjustZIndexOnOpen === true) {
        jBox.zIndexMax = Math.max(
          parseInt(this.wrapper.css('zIndex'), 10),
          this.options.zIndex,
          jBox.zIndexMax || 0,
          jBox.zIndexMaxDragover || 0
        ) + 2;
        this.wrapper.css('zIndex', jBox.zIndexMax);
        this.options.zIndex = jBox.zIndexMax;
      }

      // Set title from source element
      this.source && this.options.getTitle && (this.source.attr(this.options.getTitle) && this.setTitle(this.source.attr(this.options.getTitle), true));

      // Set content from source element
      this.source && this.options.getContent && (this.source.data('jBox-getContent') ? this.setContent(this.source.data('jBox-getContent'), true) : (this.source.attr(this.options.getContent) ? this.setContent(this.source.attr(this.options.getContent), true) : (this.options.getContent == 'html' ? this.setContent(this.source.html(), true) : null)));

      // Fire onOpen event
      this._fireEvent('onOpen');

      // Get content from ajax
      if ((this.options.ajax && (this.options.ajax.url || (this.source && this.source.attr(this.options.ajax.getURL))) && (!this.ajaxLoaded || this.options.ajax.reload)) || (options.ajax && (options.ajax.url || options.ajax.data))) {
        // Send the content from stored data if there is any, otherwise load new data
        (this.options.ajax.reload != 'strict' && this.source && this.source.data('jBox-ajax-data') && !(options.ajax && (options.ajax.url || options.ajax.data))) ? this.setContent(this.source.data('jBox-ajax-data')) : this.ajax((options.ajax || null), true);
      }

      // Set position
      (!this.positionedOnOpen || this.options.repositionOnOpen) && this.position(options) && (this.positionedOnOpen = true);

      // Abort closing
      this.isClosing && this._abortAnimation();

      // Open functions to call when jBox is closed
      if (!this.isOpen) {

        // jBox is open now
        this.isOpen = true;

        // Automatically close jBox after some time
        this.options.autoClose && (this.options.delayClose = this.options.autoClose) && this.close();

        // Attach events
        this._attachEvents();

        // Block scrolling
        if (this.options.blockScroll) {
          if (this.options.blockScrollAdjust) {
            if (jBox.blockScrollScopes) {
              jBox.blockScrollScopes++;
            } else {
              jBox.blockScrollScopes = 1;
              this.unscroll(Array.isArray(this.options.blockScrollAdjust) || typeof this.options.blockScrollAdjust === 'string' ? this.options.blockScrollAdjust : null);
            }
          } else {
            jQuery('body').addClass('jBox-blockScroll-' + this.id);
          }
        }

        // Show overlay
        if (this.options.overlay) {
          this._showOverlay();

          // TODO Optimize: We have to position here again, because if the overlay has a close button, the upper adjustDistance will be wrong
          this.position();
        }

        // Only animate if jBox is completely closed
        this.options.animation && !this.isClosing && this._animate('open');

        // Play audio file
        this.options.audio && this.options.audio.open && this.audio(this.options.audio.open, this.options.volume.open);

        // Fading animation or show immediately
        if (this.options.fade) {
          this.wrapper.stop().animate({opacity: 1}, {
            queue: false,
            duration: this.options.fade,
            start: function () {
              this.isOpening = true;
              this.wrapper.css({display: 'block'});
            }.bind(this),
            always: function () {
              this.isOpening = false;

              // Delay positioning for ajax to prevent positioning during animation
              setTimeout(function () { this.positionOnFadeComplete && this.position() && (this.positionOnFadeComplete = false); }.bind(this), 10);
            }.bind(this)
          });
        } else {
          this.wrapper.css({display: 'block', opacity: 1});
          this.positionOnFadeComplete && this.position() && (this.positionOnFadeComplete = false);
        }
      }
    }.bind(this);

    // Open jBox
    this.options.delayOpen && !this.isOpen && !this.isClosing && !options.ignoreDelay ? (this.timer = setTimeout(open, this.options.delayOpen)) : open();

    return this;
  };


  // Close jBox

  jBox.prototype.close = function (options)
  {
    // Create blank options if none passed
    options || (options = {});

    // Remove close events
    jQuery('body').off('click.jBox-' + this.id);
    this.isTouchDevice && jQuery('body > *').off('click.jBox-' + this.id);

    // Abort if jBox was destroyed or is currently closing
    if (this.isDestroyed || this.isClosing) return this;

    // Abort opening
    this.timer && clearTimeout(this.timer);

    // Block body click for 10ms, so jBox can open on attached elements while closeOnClick = 'body' is true
    this._blockBodyClick();

    // Block closing
    if (this.isDisabled) return this;

    // Close function
    var close = function () {

      // Fire onClose event
      this._fireEvent('onClose');

      // Cancel the ajax call
      if (this.options.cancelAjaxOnClose) {
        this.cancelAjax();
      }

      // Only close if jBox is open
      if (this.isOpen) {

        // jBox is not open anymore
        this.isOpen = false;

        // Detach events
        this._detachEvents();

        // Unblock scrolling
        if (this.options.blockScroll) {
          if (this.options.blockScrollAdjust) {
            jBox.blockScrollScopes = jBox.blockScrollScopes ? --jBox.blockScrollScopes : 0;
            !jBox.blockScrollScopes && this.unscroll.reset();
          } else {
            jQuery('body').removeClass('jBox-blockScroll-' + this.id);
          }
        }

        // Hide overlay
        this.options.overlay && this._hideOverlay();

        // Only animate if jBox is compleately closed
        this.options.animation && !this.isOpening && this._animate('close');

        // Play audio file
        this.options.audio && this.options.audio.close && this.audio(this.options.audio.close, this.options.volume.close);

        // Get fade duration
        var fadeDuration = this.isTouchDevice && this.options.target == 'mouse' ? 0 : this.options.fade;

        // Fading animation or show immediately
        if (fadeDuration) {
          this.wrapper.stop().animate({opacity: 0}, {
            queue: false,
            duration: fadeDuration,
            start: function () {
              this.isClosing = true;
            }.bind(this),
            complete: function () {
              this.wrapper.css({display: 'none'});
              this._fireEvent('onCloseComplete');
            }.bind(this),
            always: function () {
              this.isClosing = false;
            }.bind(this)
          });
        } else {
          this.wrapper.css({display: 'none', opacity: 0});
          this._fireEvent('onCloseComplete');
        }
      }
    }.bind(this);

    // Close jBox
    if (options.ignoreDelay || (this.isTouchDevice && this.options.target == 'mouse')) {
      close();
    } else if ((this.options.delayOnHover || this.options.showCountdown) && this.options.delayClose > 10) {
      var self = this;
      var remaining = this.options.delayClose;
      var prevFrame = Date.now();
      if (this.options.showCountdown && !this.inner) {
        var outer = jQuery('<div class="jBox-countdown" />');
        this.inner = jQuery('<div class="jBox-countdown-inner" />');
        outer.prepend(this.inner);
        jQuery('#' + this.id).append(outer);
      }
      this.countdown = function(){
        var dateNow = Date.now();
        if (!self.isHovered) {
          remaining -= dateNow - prevFrame;
        }
        prevFrame = dateNow;
        if (remaining > 0) {
          if (self.options.showCountdown) {
            self.inner.css('width', (remaining * 100 / self.options.delayClose) + '%');
          }
          window.requestAnimationFrame(self.countdown);
        } else {
          close();
        }
      };
      window.requestAnimationFrame(this.countdown);
    } else {
      this.timer = setTimeout(close, Math.max(this.options.delayClose, 10));
    }

    return this;
  };


  // Open or close jBox

  jBox.prototype.toggle = function (options)
  {
    this[this.isOpen ? 'close' : 'open'](options);
    return this;
  };


  // Block opening and closing

  jBox.prototype.disable = function ()
  {
    this.isDisabled = true;
    return this;
  };


  // Unblock opening and closing

  jBox.prototype.enable = function ()
  {
    this.isDisabled = false;
    return this;
  };


  // Hide jBox

  jBox.prototype.hide = function ()
  {
    this.disable();
    this.wrapper && this.wrapper.css({display: 'none'});
    return this;
  };


  // Show jBox

  jBox.prototype.show = function ()
  {
    this.enable();
    this.wrapper && this.wrapper.css({display: 'block'});
    return this;
  };


  // Get content from ajax

  jBox.prototype.ajax = function (options, opening)
  {
    options || (options = {});

    // Add data or url from source element if none set in options
    jQuery.each([['getData', 'data'], ['getURL', 'url']], function (index, item) {
      (this.options.ajax[item[0]] && !options[item[1]] && this.source && this.source.attr(this.options.ajax[item[0]]) != undefined) && (options[item[1]] = this.source.attr(this.options.ajax[item[0]]) || '');
    }.bind(this));

    // Clone the system options
    var sysOptions = jQuery.extend(true, {}, this.options.ajax);

    // Abort running ajax call
    this.cancelAjax();

    // Extract events
    var beforeSend = options.beforeSend || sysOptions.beforeSend || function () {};
    var complete = options.complete || sysOptions.complete || function () {};
    var success = options.success || sysOptions.success || function () {};
    var error = options.error || sysOptions.error || function () {};

    // Merge options
    var userOptions = jQuery.extend(true, sysOptions, options);

    // Set new beforeSend event
    userOptions.beforeSend = function (xhr)
    {
      // jBox is loading
      userOptions.loadingClass && this.wrapper.addClass(userOptions.loadingClass === true ? 'jBox-loading' : userOptions.loadingClass);

      // Add loading spinner
      userOptions.spinner && (this.spinnerDelay = setTimeout(function ()
      {
        // Add class for loading spinner
        this.wrapper.addClass('jBox-loading-spinner');

        // Reposition jBox
        // TODO: Only reposition if dimensions change
        userOptions.spinnerReposition && (opening ? (this.positionOnFadeComplete = true) : this.position());

        // Add spinner to container
        this.spinner = jQuery(userOptions.spinner !== true ? userOptions.spinner : '<div class="jBox-spinner"></div>').appendTo(this.container);

        // Fix spinners position if there is a title
        this.titleContainer && this.spinner.css('position') == 'absolute' && this.spinner.css({transform: 'translateY(' + (this.titleContainer.outerHeight() * 0.5) + 'px)'});

      }.bind(this), (this.content.html() == '' ? 0 : (userOptions.spinnerDelay || 0))));

      // Fire users beforeSend event
      (beforeSend.bind(this))(xhr);

    }.bind(this);

    // Set up new complete event
    userOptions.complete = function (response)
    {
      // Abort spinner timeout
      this.spinnerDelay && clearTimeout(this.spinnerDelay);

      // jBox finished loading
      this.wrapper.removeClass('jBox-loading jBox-loading-spinner jBox-loading-spinner-delay');

      // Remove spinner
      this.spinner && this.spinner.length && this.spinner.remove() && userOptions.spinnerReposition && (opening ? (this.positionOnFadeComplete = true) : this.position());

      // Store that ajax loading finished
      this.ajaxLoaded = true;

      // Fire users complete event
      (complete.bind(this))(response);

    }.bind(this);

    // Set up new success event
    userOptions.success = function (response)
    {
      // Set content
      userOptions.setContent && this.setContent(response, true) && (opening ? (this.positionOnFadeComplete = true) : this.position());

      // Store content in source element
      userOptions.setContent && this.source && this.source.data('jBox-ajax-data', response);

      // Fire users success event
      (success.bind(this))(response);

    }.bind(this);

    // Add error event
    userOptions.error = function (response) { (error.bind(this))(response); }.bind(this);

    // Send new ajax request
    this.ajaxRequest = jQuery.ajax(userOptions);

    return this;
  };


  // Abort an ajax call

  jBox.prototype.cancelAjax = function () {
    if (this.ajaxRequest) {
      this.ajaxRequest.abort();
      this.ajaxLoaded = false;
    }
  };


  // Play an audio file

  jBox.prototype.audio = function (url, volume)
  {
    // URL is required
    if (!url) return this;

    // Create intern audio object if it wasn't created already
    !jBox._audio && (jBox._audio = {});

    // Create an audio element specific to this audio file if it doesn't exist already
    if (!jBox._audio[url]) {
      var audio = jQuery('<audio/>');
      jQuery('<source/>', {src: url + '.mp3'}).appendTo(audio);
      jQuery('<source/>', {src: url + '.ogg'}).appendTo(audio);
      jBox._audio[url] = audio[0];
    }

    // Set volume
    jBox._audio[url].volume = Math.min(((volume != undefined ? volume : 100) / 100), 1);

    // Try to pause current audio
    try {
      jBox._audio[url].pause();
      jBox._audio[url].currentTime = 0;
    } catch (e) {}

    // Play audio
    jBox._audio[url].play();

    return this;
  };


  // Apply custom animations to jBox

  jBox._animationSpeeds = {
    'tada': 1000,
    'tadaSmall': 1000,
    'flash': 500,
    'shake': 400,
    'pulseUp': 250,
    'pulseDown': 250,
    'popIn': 250,
    'popOut': 250,
    'fadeIn': 200,
    'fadeOut': 200,
    'slideUp': 400,
    'slideRight': 400,
    'slideLeft': 400,
    'slideDown': 400
  };

  jBox.prototype.animate = function (animation, options)
  {
    // Options are required
    !options && (options = {});

    // Timout needs to be an object
    !this.animationTimeout && (this.animationTimeout = {});

    // Use jBox wrapper by default
    !options.element && (options.element = this.wrapper);

    // Give the element an unique id
    !options.element.data('jBox-animating-id') && options.element.data('jBox-animating-id', jBox._getUniqueElementID());

    // Abort if element is animating
    if (options.element.data('jBox-animating')) {
      options.element.removeClass(options.element.data('jBox-animating')).data('jBox-animating', null);
      this.animationTimeout[options.element.data('jBox-animating-id')] && clearTimeout(this.animationTimeout[options.element.data('jBox-animating-id')]);
    }

    // Animate the element
    options.element.addClass('jBox-animated-' + animation).data('jBox-animating', 'jBox-animated-' + animation);
    this.animationTimeout[options.element.data('jBox-animating-id')] = setTimeout((function() { options.element.removeClass(options.element.data('jBox-animating')).data('jBox-animating', null); options.complete && options.complete(); }), jBox._animationSpeeds[animation]);
  };


  // Destroy jBox and remove it from DOM

  jBox.prototype.destroy = function ()
  {
    // Detach from attached elements
    this.detach();

    // If jBox is open, close without delay
    this.isOpen && this.close({ignoreDelay: true});

    // Remove wrapper
    this.wrapper && this.wrapper.remove();

    // Remove overlay
    this.overlay && this.overlay.remove();

    // Remove styles
    this._styles && this._styles.remove();

    // Tell the jBox instance it is destroyed
    this.isDestroyed = true;

    return this;
  };


  // Get a unique ID for jBoxes

  jBox._getUniqueID = (function ()
  {
    var i = 1;
    return function () { return i++; };
  }());


  // Get a unique ID for animating elements

  jBox._getUniqueElementID = (function ()
  {
    var i = 1;
    return function () { return i++; };
  }());


  // Function to create jBox plugins

  jBox._pluginOptions = {};
  jBox.plugin = function (type, options)
  {
    jBox._pluginOptions[type] = options;
  };


  // Make jBox usable with jQuery selectors

  jQuery.fn.jBox = function (type, options) {
    // Variables type and object are required
    !type && (type = {});
    !options && (options = {});

    // Return a new instance of jBox with the selector as attached element
    return new jBox(type, jQuery.extend(options, {
      attach: this
    }));
  };

  return jBox;

};

/**
 * jBox Confirm plugin: Add a confirm dialog to links, buttons, etc.
 *
 * Author: Stephan Wagner <stephanwagner.me@gmail.com> (https://stephanwagner.me)
 *
 * License: MIT (https://opensource.org/licenses/MIT)
 *
 * Requires: jBox (https://cdn.jsdelivr.net/gh/StephanWagner/jBox@latest/dist/jBox.min.js)
 */

function jBoxConfirmWrapper(jBox, jQuery) {

  new jBox.plugin('Confirm', {


    // Options (https://stephanwagner.me/jBox/options#options-confirm)

    confirmButton: 'Submit',  // Text for the submit button
    cancelButton: 'Cancel',   // Text for the cancel button
    confirm: null,            // Function to execute when clicking the submit button. By default jBox will use the onclick or href attribute in that order if found
    cancel: null,             // Function to execute when clicking the cancel button
    closeOnConfirm: true,     // Close jBox when the user clicks the confirm button
    target: window,
    fixed: true,
    attach: '[data-confirm]',
    getContent: 'data-confirm',
    content: 'Do you really want to do this?',
    minWidth: 360,
    maxWidth: 500,
    blockScroll: true,
    closeOnEsc: true,
    closeOnClick: false,
    closeButton: false,
    overlay: true,
    animation: 'zoomIn',
    preventDefault: true,


    // Triggered when jBox is attached to the element

    _onAttach: function (el)
    {
      // Extract the href or the onclick event if no submit event is passed
      if (!this.options.confirm) {
        var submit = el.attr('onclick') ? el.attr('onclick') : (
          el.attr('href') ? (
            el.attr('target') ? 'window.open("' + el.attr('href') + '", "' + el.attr('target') + '");'  : 'window.location.href = "' + el.attr('href') + '";'
          ) : '');
        el.prop('onclick', null).data('jBox-Confirm-submit', submit);
      }
    },


    // Triggered when jBox was created

    _onCreated: function ()
    {
      // Add modal class to mimic jBox modal
      this.wrapper.addClass('jBox-Modal');

      // Add a footer to the jBox container
      this.footer = jQuery('<div class="jBox-Confirm-footer"/>');

      jQuery('<div class="jBox-Confirm-button jBox-Confirm-button-cancel"/>')
        .html(this.options.cancelButton)
        .click(function () {
          this.options.cancel && this.options.cancel(this.source);
          this.close();
        }.bind(this))
        .appendTo(this.footer);

      this.submitButton = jQuery('<div class="jBox-Confirm-button jBox-Confirm-button-submit"/>')
        .html(this.options.confirmButton)
        .appendTo(this.footer);

      this.footer.appendTo(this.container);
    },


    // Triggered when jBox is opened

    _onOpen: function ()
    {
      // Set the new action for the submit button
      this.submitButton
        .off('click.jBox-Confirm' + this.id)
        .on('click.jBox-Confirm' + this.id, function () {
          this.options.confirm ? this.options.confirm(this.source) : eval(this.source.data('jBox-Confirm-submit'));
          this.options.closeOnConfirm && this.close();
        }.bind(this));
    }

  });

};

/**
 * jBox Image plugin: Adds a lightbox to your images
 *
 * Author: Stephan Wagner <stephanwagner.me@gmail.com> (https://stephanwagner.me)
 *
 * License: MIT (https://opensource.org/licenses/MIT)
 *
 * Requires: jBox (https://cdn.jsdelivr.net/gh/StephanWagner/jBox@latest/dist/jBox.min.js)
 */

function jBoxImageWrapper(jBox, jQuery) {

  new jBox.plugin('Image', {


    // Options (https://stephanwagner.me/jBox/options#options-image)

    src: 'href',                 // The attribute where jBox gets the image source from, e.g. href="/path_to_image/image.jpg"
    gallery: 'data-jbox-image',  // The attribute to set the galleries, e.g. data-jbox-image="gallery1"
    imageLabel: 'title',         // The attribute where jBox gets the image label from, e.g. title="My label"
    imageFade: 360,              // The fade duration for images in ms
    imageSize: 'contain',        // How to display the images. Use CSS background-position values, e.g. 'cover', 'contain', 'auto', 'initial', '50% 50%'
    imageCounter: false,         // Set to true to add an image counter, e.g. 4/20
    imageCounterSeparator: '/',  // HTML to separate the current image number from all image numbers, e.g. '/' or ' of '
    downloadButton: false,       // Adds a download button
    downloadButtonText: null,    // Text for the download button
    downloadButtonUrl: null,     // The attribute at the source element where to find the image to download, e.g. data-download="/path_to_image/image.jpg". If none provided, the currently active image will be downloaded
    mobileImageAttr: null,       // The attribute to look for an mobile version of the image
    mobileImageBreakpoint: null, // The upper breakpoint to load the mobile image
    preloadFirstImage: false,    // Preload the first image when page is loaded
    target: window,
    attach: '[data-jbox-image]',
    fixed: true,
    blockScroll: true,
    closeOnEsc: true,
    closeOnClick: 'button',
    closeButton: true,
    overlay: true,
    animation: 'zoomIn',
    preventDefault: true,
    width: '100%',
    height: '100%',
    adjustDistance: {
      top: 40,
      right: 5,
      bottom: 40,
      left: 5
    },


    // Triggered when jBox is initialized

    _onInit: function ()
    {
      // Initial images and z-index
      this.images = this.currentImage = {};
      this.imageZIndex = 1;

      this.initImage = function (item) {
        item = jQuery(item);

        // Abort if the item was added to a gallery already
        if (item.data('jBox-image-gallery')) return;

        // Get the image src
        var src = item.attr(this.options.src);

        // Update responsive image src
        if (this.options.mobileImageAttr && this.options.mobileImageBreakpoint && item.attr(this.options.mobileImageAttr)) {
          if (jQuery(window).width() <= this.options.mobileImageBreakpoint) {
            src = item.attr(this.options.mobileImageAttr);
          }
        }

        // Add item to a gallery
        var gallery = item.attr(this.options.gallery) || 'default';
        !this.images[gallery] && (this.images[gallery] = []);
        this.images[gallery].push({
          src: src,
          label: (item.attr(this.options.imageLabel) || ''),
          downloadUrl: this.options.downloadButtonUrl && item.attr(this.options.downloadButtonUrl) ? item.attr(this.options.downloadButtonUrl) : null
        });

        // Remove the title attribute so it won't show the browsers tooltip
        this.options.imageLabel == 'title' && item.removeAttr('title');

        // Store data in source element for easy access
        item.data('jBox-image-gallery', gallery);
        item.data('jBox-image-id', (this.images[gallery].length - 1));
      }.bind(this);

      // Loop through images, sort and save in global variable
      this.attachedElements && this.attachedElements.length && jQuery.each(this.attachedElements, function (index, item) {
        this.initImage(item);
      }.bind(this));

      // Helper to inject the image into content area
      var appendImage = function (gallery, id, show, instant) {
        // Abort if image was appended already
        if (jQuery('#jBox-image-' + gallery + '-' + id).length) {
          return;
        }

        // Create image container
        var image = jQuery('<div/>', {
          id: 'jBox-image-' + gallery + '-' + id,
          'class': 'jBox-image-container' + (show ? ' jBox-image-' + gallery + '-current' : '')
        }).css({
          backgroundSize: this.options.imageSize,
          opacity: (instant ? 1 : 0),
          zIndex: (show ? this.imageZIndex++ : 0)
        }).appendTo(this.content);

        // Create labels
        jQuery('<div/>', {
          id: 'jBox-image-label-' + gallery + '-' + id,
          'class': 'jBox-image-label' + (show ? ' active' : '')
        }).html(this.images[gallery][id].label).click(function () { jQuery(this).toggleClass('expanded'); }).appendTo(this.imageLabel);

        // Show image
        show && image.animate({opacity: 1}, instant ? 0 : this.options.imageFade);

        return image;
      }.bind(this);

      // Function to download an image
      this.downloadImage = function (imageUrl) {
        var link = document.createElement('a');
        link.href = imageUrl;
        link.setAttribute('download', imageUrl.substring(imageUrl.lastIndexOf('../../index.html')+1));
        document.body.appendChild(link);
        link.click();
      };

      // Helper to show new image label
      var showLabel = function (gallery, id) {
        jQuery('.jBox-image-label.active').removeClass('active expanded');
        jQuery('#jBox-image-label-' + gallery + '-' + id).addClass('active');
      };

      // Helper to load image
      var loadImage = function (gallery, id, show, instant) {
        var imageContainer = appendImage(gallery, id, show, instant);
        imageContainer.addClass('jBox-image-loading');

        jQuery('<img src="' + this.images[gallery][id].src + '" />').each(function () {
          var tmpImg = new Image();
          tmpImg.onload = function () {
            imageContainer.removeClass('jBox-image-loading');
            imageContainer.css({backgroundImage: 'url("' + this.images[gallery][id].src + '")'});
          }.bind(this);

          tmpImg.onerror = function () {
            imageContainer.removeClass('jBox-image-loading');
            imageContainer.addClass('jBox-image-not-found');
          }.bind(this);

          tmpImg.src = this.images[gallery][id].src;
        }.bind(this));
      }.bind(this);

      // Show images when they are loaded or load them if not
      this.showImage = function (img) {
        // Get the gallery and the image id from the next or the previous image
        if (img != 'open') {
          var gallery = this.currentImage.gallery;
          var id = this.currentImage.id + (1 * (img == 'prev') ? -1 : 1);
          id = id > (this.images[gallery].length - 1) ? 0 : (id < 0 ? (this.images[gallery].length - 1) : id);

        // Or get image data from source element
        } else {
          // Get gallery and image id from source element
          if (this.source) {
            var gallery = this.source.data('jBox-image-gallery');
            var id = this.source.data('jBox-image-id');

          // Get gallery and image id attached elements
          } else if (this.attachedElements && this.attachedElements.length) {
            var gallery = jQuery(this.attachedElements[0]).data('jBox-image-gallery');
            var id = jQuery(this.attachedElements[0]).data('jBox-image-id');
          } else {
            return;
          }

          // Remove or show the next and prev buttons
          jQuery('.jBox-image-pointer-prev, .jBox-image-pointer-next').css({display: (this.images[gallery].length > 1 ? 'block' : 'none')});
        }

        // If there is a current image already shown, hide it
        if (jQuery('.jBox-image-' + gallery + '-current').length) {
          jQuery('.jBox-image-' + gallery + '-current').removeClass('jBox-image-' + gallery + '-current').animate({opacity: 0}, (img == 'open') ? 0 : this.options.imageFade);
        }

        // Set new current image
        this.currentImage = {gallery: gallery, id: id};

        // Show image if it already exists
        if (jQuery('#jBox-image-' + gallery + '-' + id).length) {
          jQuery('#jBox-image-' + gallery + '-' + id).addClass('jBox-image-' + gallery + '-current').css({zIndex: this.imageZIndex++, opacity: 0}).animate({opacity: 1}, (img == 'open') ? 0 : this.options.imageFade);

        // Load image
        } else {
          loadImage(gallery, id, true, (img === 'open'));
        }

        // Show label
        showLabel(gallery, id);

        // Update the image counter numbers
        if (this.imageCounter) {
          if (this.images[gallery].length > 1) {
            this.wrapper.addClass('jBox-image-has-counter');
            this.imageCounter.find('.jBox-image-counter-all').html(this.images[gallery].length);
            this.imageCounter.find('.jBox-image-counter-current').html(id + 1);
          } else {
            this.wrapper.removeClass('jBox-image-has-counter');
          }
        }

        // Preload next image
        if (this.images[gallery].length - 1) {
	        var next_id = id + 1;
	        next_id = next_id > (this.images[gallery].length - 1) ? 0 : (next_id < 0 ? (this.images[gallery].length - 1) : next_id);

	        if (!jQuery('#jBox-image-' + gallery + '-' + next_id).length) {
            loadImage(gallery, next_id, false, false);
          }
	      }
      };

      // Preload image
      if (this.options.preloadFirstImage) {
        jQuery(window).on('load', function() {
          this.showImage('open');
        }.bind(this));
      }
    },


    // Triggered when jBox attaches a new element

    _onAttach: function (item) {
      this.initImage && this.initImage(item);
    },


    // Triggered when jBox was created

    _onCreated: function ()
    {
      // Append image label containers
      this.imageLabel = jQuery('<div/>', {'class': 'jBox-image-label-container'}).appendTo(this.wrapper);
      this.imageLabel.append(jQuery('<div/>', {'class': 'jBox-image-pointer-prev', click: function () { this.showImage('prev'); }.bind(this)})).append(jQuery('<div/>', {'class': 'jBox-image-pointer-next', click: function () { this.showImage('next'); }.bind(this)}));

      // Append the download button
      if (this.options.downloadButton) {
        this.downloadButton = jQuery('<div/>', {'class': 'jBox-image-download-button-wrapper'})
          .appendTo(this.wrapper)
          .append(
            this.options.downloadButtonText ? jQuery('<div/>', {'class': 'jBox-image-download-button-text'}).html(this.options.downloadButtonText) : null
          )
          .append(
            jQuery('<div/>', {'class': 'jBox-image-download-button-icon'})
          ).on('click touchdown', function () {
            if (this.images[this.currentImage.gallery][this.currentImage.id].downloadUrl) {
              var currentImageUrl = this.images[this.currentImage.gallery][this.currentImage.id].downloadUrl;
            } else {
              var currentImage = this.wrapper.find('.jBox-image-' + this.currentImage.gallery + '-current');
              var currentImageStyle = currentImage[0].style.backgroundImage;
              var currentImageUrl = currentImageStyle.slice(4, -1).replace(/["']/g, '');
            }
            this.downloadImage(currentImageUrl);
          }.bind(this));
      }

      // Creating the image counter containers
      if (this.options.imageCounter) {
        this.imageCounter = jQuery('<div/>', {'class': 'jBox-image-counter-container'}).appendTo(this.wrapper);
        this.imageCounter.append(jQuery('<span/>', {'class': 'jBox-image-counter-current'})).append(jQuery('<span/>').html(this.options.imageCounterSeparator)).append(jQuery('<span/>', {'class': 'jBox-image-counter-all'}));
      }
    },


    // Triggered when jBox opens

    _onOpen: function ()
    {
      // Add key events
      jQuery(document).on('keyup.jBox-Image-' + this.id, function (ev) {
        (ev.keyCode == 37) && this.showImage('prev');
        (ev.keyCode == 39) && this.showImage('next');
      }.bind(this));

      // Load the image from the attached element
      this.showImage('open');
    },


    // Triggered when jBox closes

    _onClose: function ()
    {
      // Remove key events
      jQuery(document).off('keyup.jBox-Image-' + this.id);
    },


    // Triggered when jBox finished closing

    _onCloseComplete: function ()
    {
      // Hide all image containers
      this.wrapper.find('.jBox-image-container').css('opacity', 0);
    }

  });

};

/**
 * jBox Notice plugin: Opens a popup notice
 *
 * Author: Stephan Wagner <stephanwagner.me@gmail.com> (https://stephanwagner.me)
 *
 * License: MIT (https://opensource.org/licenses/MIT)
 *
 * Requires: jBox (https://cdn.jsdelivr.net/gh/StephanWagner/jBox@latest/dist/jBox.min.js)
 */

function jBoxNoticeWrapper(jBox, jQuery) {

  new jBox.plugin('Notice', {


    // Options (https://stephanwagner.me/jBox/options#options-notice)

    color: null,      // Add a color to your notices, use 'gray' (default), 'black', 'red', 'green', 'blue' or 'yellow'
    stack: true,      // Set to false to disable notice-stacking
    stackSpacing: 10, // Spacing between notices when they stack
    autoClose: 6000,  // Time in ms after which the notice will disappear
    attributes: {     // Defines where the notice will pop up
      x: 'right',     // 'left' or 'right'
      y: 'top'        // 'top' or 'bottom'
    },
    position: {       // Defines the distance to the viewport boundary
      x: 15,
      y: 15
    },
    responsivePositions: {  // Responsive positions
      500: {                // The key defines the maximum width of the viewport, the values will replace the default position options
        x: 5,               // Start with the lowest viewport
        y: 5
      },
      768: {
        x: 10,
        y: 10
      }
    },
    target: window,
    fixed: true,
    animation: 'zoomIn',
    closeOnClick: 'box',
    zIndex: 12000,


    // Triggered when notice is initialized

    _onInit: function ()
    {
      // Cache position values
      this.defaultNoticePosition = jQuery.extend({}, this.options.position);

      // Type Notice has its own adjust position function
      this._adjustNoticePositon = function () {
        var win = jQuery(window);
        var windowDimensions = {
          x: win.width(),
          y: win.height()
        };

        // Reset default position
        this.options.position = jQuery.extend({}, this.defaultNoticePosition);

        // Adjust depending on viewport
        jQuery.each(this.options.responsivePositions, function (viewport, position) {
          if (windowDimensions.x <= viewport) {
            this.options.position = position;
            return false;
          }
        }.bind(this));

        // Set new padding options
        this.options.adjustDistance = {
          top: this.options.position.y,
          right: this.options.position.x,
          bottom: this.options.position.y,
          left: this.options.position.x
        };
      };

      // If jBox grabs an element as content, crab a clone instead
      this.options.content instanceof jQuery && (this.options.content = this.options.content.clone().attr('id', ''));

      // Adjust paddings when window resizes
      jQuery(window).on('resize.responsivejBoxNotice-' + this.id, function (ev) { if (this.isOpen) { this._adjustNoticePositon(); } }.bind(this));

      this.open();
    },


    // Triggered when notice was created

    _onCreated: function ()
    {
      // Add color class
      this.wrapper.addClass('jBox-Notice-color jBox-Notice-' + (this.options.color || 'gray'));

      // Store position in jBox wrapper
      this.wrapper.data('jBox-Notice-position', this.options.attributes.x + '-' + this.options.attributes.y);
    },


    // Triggered when notice opens

    _onOpen: function ()
    {
      // Bail if we're stacking
      if (this.options.stack) {
          return;
      }

      // Adjust position when opening
      this._adjustNoticePositon();

      // Loop through notices at same window corner destroy them
      jQuery.each(jQuery('.jBox-Notice'), function (index, el)
      {
        el = jQuery(el);

        // Abort if the element is this notice or when it's not at the same position
        if (el.attr('id') == this.id || el.data('jBox-Notice-position') != this.options.attributes.x + '-' + this.options.attributes.y) {
          return;
        }

        // Remove notice when we don't wont to stack them
        if (!this.options.stack) {
          el.data('jBox').close({ignoreDelay: true});
          return;
        }
      }.bind(this));
    },

    // Triggered when resizing window etc.

    _onPosition: function ()
    {
        var stacks = {};
        jQuery.each(jQuery('.jBox-Notice'), function (index, el)
        {
          el = jQuery(el);
          var pos = el.data('jBox-Notice-position');
          if (!stacks[pos]) {
              stacks[pos] = [];
          }
          stacks[pos].push(el);
        });
        for (var pos in stacks) {
            var position = pos.split('-');
            var direction = position[1];
            stacks[pos].reverse();
            var margin = 0;
            for (var i in stacks[pos]) {
                el = stacks[pos][i];
                el.css('margin-' + direction, margin);
                margin += el.outerHeight() + this.options.stackSpacing;
            }
        }
    },

    // Remove notice from DOM and reposition other notices when closing finishes

    _onCloseComplete: function ()
    {
        this.destroy();
        this.options._onPosition.bind(this).call();
    }

  });

};

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], function (jQuery) {
      return (root.jBox = factory(jQuery));
    });
  } else if (typeof module === 'object' && module.exports) {
    module.exports = (root.jBox = factory(require('jquery')));
  } else {
    root.jBox = factory(root.jQuery);
  }
}(this, function (jQuery) {

  var jBox = jBoxWrapper(jQuery);
  try { typeof jBoxConfirmWrapper !== 'undefined' && jBoxConfirmWrapper && jBoxConfirmWrapper(jBox, jQuery); } catch(e) { console.error(e); }
  try { typeof jBoxImageWrapper !== 'undefined' && jBoxImageWrapper && jBoxImageWrapper(jBox, jQuery); } catch(e) { console.error(e); }
  try { typeof jBoxNoticeWrapper !== 'undefined' && jBoxNoticeWrapper && jBoxNoticeWrapper(jBox, jQuery); } catch(e) { console.error(e); }
  return jBox;
}));

//# sourceMappingURL=jBox.all.js.map


var ctx = "/BOLI-ebanking";
var uri = "/BOLI-ebanking/WEB-INF/jsp/seguridad/login.jsp"
var url = "http://www.bancasinhorarios.com.ec/BOLI-ebanking/WEB-INF/jsp/seguridad/login.jsp"

    var ctx = "/BOLI-ebanking";

    var ctx = "/BOLI-ebanking";
/*! jQuery UI Virtual Keyboard v1.26.4 *//*
Author: Jeremy Satterfield
Maintained: Rob Garrison (Mottie on github)
Licensed under the MIT License

An on-screen virtual keyboard embedded within the browser window which
will popup when a specified entry field is focused. The user can then
type and preview their input before Accepting or Canceling.

This plugin adds default class names to match jQuery UI theme styling.
Bootstrap & custom themes may also be applied - See
https://github.com/Mottie/Keyboard#themes

Requires:
	jQuery v1.4.3+
	Caret plugin (included)
Optional:
	jQuery UI (position utility only) & CSS theme
	jQuery mousewheel

Setup/Usage:
	Please refer to https://github.com/Mottie/Keyboard/wiki

-----------------------------------------
Caret code modified from jquery.caret.1.02.js
Licensed under the MIT License:
http://www.opensource.org/licenses/mit-license.php
-----------------------------------------
*/
/*jshint browser:true, jquery:true, unused:false */
/*global require:false, define:false, module:false */
;(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = factory(require('jquery'));
	} else {
		factory(jQuery);
	}
}(function ($) {
	'use strict';
	var $keyboard = $.keyboard = function (el, options) {
	var o, base = this;

	base.version = '1.26.4';

	// Access to jQuery and DOM versions of element
	base.$el = $(el);
	base.el = el;

	// Add a reverse reference to the DOM object
	base.$el.data('keyboard', base);

	base.init = function () {
		var k, position, tmp,
			kbcss = $keyboard.css,
			kbevents = $keyboard.events;
		base.settings = options || {};
		// shallow copy position to prevent performance issues; see #357
		if (options && options.position) {
			position = $.extend({}, options.position);
			options.position = null;
		}
		base.options = o = $.extend(true, {}, $keyboard.defaultOptions, options);
		if (position) {
			o.position = position;
			options.position = position;
		}

		// keyboard is active (not destroyed);
		base.el.active = true;
		// unique keyboard namespace
		base.namespace = '.keyboard' + Math.random().toString(16).slice(2);
		// extension namespaces added here (to unbind listeners on base.$el upon destroy)
		base.extensionNamespace = [];
		// Shift and Alt key toggles, sets is true if a layout has more than one keyset
		// used for mousewheel message
		base.shiftActive = base.altActive = base.metaActive = base.sets = base.capsLock = false;
		// Class names of the basic key set - meta keysets are handled by the keyname
		base.rows = ['', '-shift', '-alt', '-alt-shift'];

		base.inPlaceholder = base.$el.attr('placeholder') || '';
		// html 5 placeholder/watermark
		base.watermark = $keyboard.watermark && base.inPlaceholder !== '';
		// convert mouse repeater rate (characters per second) into a time in milliseconds.
		base.repeatTime = 1000 / (o.repeatRate || 20);
		// delay in ms to prevent mousedown & touchstart from both firing events at the same time
		o.preventDoubleEventTime = o.preventDoubleEventTime || 100;
		// flag indication that a keyboard is open
		base.isOpen = false;
		// is mousewheel plugin loaded?
		base.wheel = $.isFunction($.fn.mousewheel);
		// special character in regex that need to be escaped
		base.escapeRegex = /[-\/\\^$*+?.()|[\]{}]/g;

		// keyCode of keys always allowed to be typed
		k = $keyboard.keyCodes;
		// base.alwaysAllowed = [20,33,34,35,36,37,38,39,40,45,46];
		base.alwaysAllowed = [
			k.capsLock,
			k.pageUp,
			k.pageDown,
			k.end,
			k.home,
			k.left,
			k.up,
			k.right,
			k.down,
			k.insert,
			k.delete
		];
		base.$keyboard = [];
		// keyboard enabled; set to false on destroy
		base.enabled = true;
		// make a copy of the original keyboard position
		if (!$.isEmptyObject(o.position)) {
			o.position.orig_at = o.position.at;
		}

		base.checkCaret = (o.lockInput || $keyboard.checkCaretSupport());

		base.last = {
			start: 0,
			end: 0,
			key: '',
			val: '',
			preVal: '',
			layout: '',
			virtual: true,
			keyset: [false, false, false], // [shift, alt, meta]
			wheel_$Keys: null,
			wheelIndex: 0,
			wheelLayers: []
		};
		// used when building the keyboard - [keyset element, row, index]
		base.temp = ['', 0, 0];

		// Callbacks
		$.each([
			kbevents.kbInit,
			kbevents.kbBeforeVisible,
			kbevents.kbVisible,
			kbevents.kbHidden,
			kbevents.inputCanceled,
			kbevents.inputAccepted,
			kbevents.kbBeforeClose,
			kbevents.inputRestricted
		], function (i, callback) {
			if ($.isFunction(o[callback])) {
				// bind callback functions within options to triggered events
				base.$el.bind(callback + base.namespace + 'callbacks', o[callback]);
			}
		});

		// Close with esc key & clicking outside
		if (o.alwaysOpen) {
			o.stayOpen = true;
		}

		tmp = $(document);
		if (base.el.ownerDocument !== document) {
			tmp = tmp.add(base.el.ownerDocument);
		}

		var bindings = 'keyup checkkeyboard mousedown touchstart ';
		if (o.closeByClickEvent) {
			bindings += 'click ';
		}
		tmp.bind(bindings.split(' ').join(base.namespace + ' '), base.checkClose);

		// Display keyboard on focus
		base.$el
			.addClass(kbcss.input + ' ' + o.css.input)
			.attr({
				'aria-haspopup': 'true',
				'role': 'textbox'
			});

		// set lockInput if the element is readonly; or make the element readonly if lockInput is set
		if (o.lockInput || base.el.readOnly) {
			o.lockInput = true;
			base.$el
				.addClass(kbcss.locked)
				.attr({
					'readonly': 'readonly'
				});
		}
		// add disabled/readonly class - dynamically updated on reveal
		if (base.$el.is(':disabled') || (base.$el.attr('readonly') &&
				!base.$el.hasClass(kbcss.locked))) {
			base.$el.addClass(kbcss.noKeyboard);
		}

		if (o.openOn) {
			base.bindFocus();
		}

		// Add placeholder if not supported by the browser
		if (!base.watermark && base.$el.val() === '' && base.inPlaceholder !== '' &&
			base.$el.attr('placeholder') !== '') {
			base.$el
				.addClass(kbcss.placeholder) // css watermark style (darker text)
				.val(base.inPlaceholder);
		}

		base.$el.trigger(kbevents.kbInit, [base, base.el]);

		// initialized with keyboard open
		if (o.alwaysOpen) {
			base.reveal();
		}

	};

	base.toggle = function () {
		var $toggle = base.$keyboard.find('.' + $keyboard.css.keyToggle),
			locked = !base.enabled;
		// prevent physical keyboard from working
		base.$preview.prop('readonly', locked || base.options.lockInput);
		// disable all buttons
		base.$keyboard
			.toggleClass($keyboard.css.keyDisabled, locked)
			.find('.' + $keyboard.css.keyButton)
			.not($toggle)
			.prop('disabled', locked)
			.attr('aria-disabled', locked);
		$toggle.toggleClass($keyboard.css.keyDisabled, locked);
		// stop auto typing
		if (locked && base.typing_options) {
			base.typing_options.text = '';
		}
	};

	base.setCurrent = function () {
		var kbcss = $keyboard.css,
			// close any "isCurrent" keyboard (just in case they are always open)
			$current = $('.' + kbcss.isCurrent),
			kb = $current.data('keyboard');
		// close keyboard, if not self
		if (!$.isEmptyObject(kb) && kb.el !== base.el) {
			kb.close(kb.options.autoAccept ? 'true' : false);
		}
		$current.removeClass(kbcss.isCurrent);
		// ui-keyboard-has-focus is applied in case multiple keyboards have
		// alwaysOpen = true and are stacked
		$('.' + kbcss.hasFocus).removeClass(kbcss.hasFocus);

		base.$el.addClass(kbcss.isCurrent);
		base.$keyboard.addClass(kbcss.hasFocus);
		base.isCurrent(true);
		base.isOpen = true;
	};

	base.isCurrent = function (set) {
		var cur = $keyboard.currentKeyboard || false;
		if (set) {
			cur = $keyboard.currentKeyboard = base.el;
		} else if (set === false && cur === base.el) {
			cur = $keyboard.currentKeyboard = '';
		}
		return cur === base.el;
	};

	base.isVisible = function () {
		return base.$keyboard && base.$keyboard.length ? base.$keyboard.is(':visible') : false;
	};

	base.focusOn = function () {
		if (!base && base.el.active) {
			// keyboard was destroyed
			return;
		}
		if (!base.isVisible()) {
			clearTimeout(base.timer);
			base.reveal();
		}
	};

	// add redraw method to make API more clear
	base.redraw = function () {
		// update keyboard after a layout change
		if (base.$keyboard.length) {

			base.last.preVal = '' + base.last.val;
			base.last.val = base.$preview && base.$preview.val() || base.$el.val();
			base.$el.val( base.last.val );

			base.removeKeyboard();
			base.shiftActive = base.altActive = base.metaActive = false;
		}
		base.isOpen = o.alwaysOpen;
		base.reveal(true);
	};

	base.reveal = function (redraw) {
		var alreadyOpen = base.isOpen,
			kbcss = $keyboard.css;
		base.opening = !alreadyOpen;
		// remove all 'extra' keyboards by calling close function
		$('.' + kbcss.keyboard).not('.' + kbcss.alwaysOpen).each(function(){
			var kb = $(this).data('keyboard');
			if (!$.isEmptyObject(kb)) {
				kb.close(kb.options.autoAccept && kb.options.autoAcceptOnEsc ? 'true' : false);
			}
		});

		// Don't open if disabled
		if (base.$el.is(':disabled') || (base.$el.attr('readonly') && !base.$el.hasClass(kbcss.locked))) {
			base.$el.addClass(kbcss.noKeyboard);
			return;
		} else {
			base.$el.removeClass(kbcss.noKeyboard);
		}

		// Unbind focus to prevent recursion - openOn may be empty if keyboard is opened externally
		if (o.openOn) {
			base.$el.unbind($.trim((o.openOn + ' ').split(/\s+/).join(base.namespace + ' ')));
		}

		// build keyboard if it doesn't exist; or attach keyboard if it was removed, but not cleared
		if (!base.$keyboard || base.$keyboard &&
			(!base.$keyboard.length || $.contains(document.body, base.$keyboard[0]))) {
			base.startup();
		}

		// clear watermark
		if (!base.watermark && base.el.value === base.inPlaceholder) {
			base.$el
				.removeClass(kbcss.placeholder)
				.val('');
		}
		// save starting content, in case we cancel
		base.originalContent = base.$el.val();
		base.$preview.val(base.originalContent);

		// disable/enable accept button
		if (o.acceptValid) {
			base.checkValid();
		}

		if (o.resetDefault) {
			base.shiftActive = base.altActive = base.metaActive = false;
		}
		base.showSet();

		// beforeVisible event
		if (!base.isVisible()) {
			base.$el.trigger($keyboard.events.kbBeforeVisible, [base, base.el]);
		}
		base.setCurrent();
		// update keyboard - enabled or disabled?
		base.toggle();

		// show keyboard
		base.$keyboard.show();

		// adjust keyboard preview window width - save width so IE won't keep expanding (fix issue #6)
		if (o.usePreview && $keyboard.msie) {
			if (typeof base.width === 'undefined') {
				base.$preview.hide(); // preview is 100% browser width in IE7, so hide the damn thing
				base.width = Math.ceil(base.$keyboard.width()); // set input width to match the widest keyboard row
				base.$preview.show();
			}
			base.$preview.width(base.width);
		}

		base.position = $.isEmptyObject(o.position) ? false : o.position;

		// position after keyboard is visible (required for UI position utility) and appropriately sized
		if ($.ui && $.ui.position && base.position) {
			// get single target position || target stored in element data (multiple targets) || default @ element
			base.position.of = base.position.of || base.$el.data('keyboardPosition') || base.$el;
			base.position.collision = base.position.collision || 'flipfit flipfit';
			o.position.at = o.usePreview ? o.position.orig_at : o.position.at2;
			base.$keyboard.position(base.position);
		}

		base.checkDecimal();

		// get preview area line height
		// add roughly 4px to get line height from font height, works well for font-sizes from 14-36px
		// needed for textareas
		base.lineHeight = parseInt(base.$preview.css('lineHeight'), 10) ||
			parseInt(base.$preview.css('font-size'), 10) + 4;

		if (o.caretToEnd) {
			base.saveCaret(base.originalContent.length, base.originalContent.length);
		}

		// IE caret haxx0rs
		if ($keyboard.allie) {
			// sometimes end = 0 while start is > 0
			if (base.last.end === 0 && base.last.start > 0) {
				base.last.end = base.last.start;
			}
			// IE will have start -1, end of 0 when not focused (see demo: https://jsfiddle.net/Mottie/fgryQ/3/)
			if (base.last.start < 0) {
				// ensure caret is at the end of the text (needed for IE)
				base.last.start = base.last.end = base.originalContent.length;
			}
		}

		if (alreadyOpen || redraw) {
			// restore caret position (userClosed)
			$keyboard.caret(base.$preview, base.last);
			return base;
		}

		// opening keyboard flag; delay allows switching between keyboards without immediately closing
		// the keyboard
		base.timer2 = setTimeout(function () {
			var undef;
			base.opening = false;
			// Number inputs don't support selectionStart and selectionEnd
			// Number/email inputs don't support selectionStart and selectionEnd
			if (!/(number|email)/i.test(base.el.type) && !o.caretToEnd) {
				// caret position is always 0,0 in webkit; and nothing is focused at this point... odd
				// save caret position in the input to transfer it to the preview
				// inside delay to get correct caret position
				base.saveCaret(undef, undef, base.$el);
			}
			if (o.initialFocus) {
				$keyboard.caret(base.$preview, base.last);
			}
			// save event time for keyboards with stayOpen: true
			base.last.eventTime = new Date().getTime();
			base.$el.trigger($keyboard.events.kbVisible, [base, base.el]);
			base.timer = setTimeout(function () {
				// get updated caret information after visible event - fixes #331
				if (base) { // Check if base exists, this is a case when destroy is called, before timers fire
					base.saveCaret();
				}
			}, 200);
		}, 10);
		// return base to allow chaining in typing extension
		return base;
	};

	base.updateLanguage = function () {
		// change language if layout is named something like 'french-azerty-1'
		var layouts = $keyboard.layouts,
			lang = o.language || layouts[o.layout] && layouts[o.layout].lang &&
				layouts[o.layout].lang || [o.language || 'en'],
			kblang = $keyboard.language;

		// some languages include a dash, e.g. 'en-gb' or 'fr-ca'
		// allow o.language to be a string or array...
		// array is for future expansion where a layout can be set for multiple languages
		lang = ($.isArray(lang) ? lang[0] : lang).split('-')[0];

		// set keyboard language
		o.display = $.extend(true, {},
			kblang.en.display,
			kblang[lang] && kblang[lang].display || {},
			base.settings.display
		);
		o.combos = $.extend(true, {},
			kblang.en.combos,
			kblang[lang] && kblang[lang].combos || {},
			base.settings.combos
		);
		o.wheelMessage = kblang[lang] && kblang[lang].wheelMessage || kblang.en.wheelMessage;
		// rtl can be in the layout or in the language definition; defaults to false
		o.rtl = layouts[o.layout] && layouts[o.layout].rtl || kblang[lang] && kblang[lang].rtl || false;

		// save default regex (in case loading another layout changes it)
		base.regex = kblang[lang] && kblang[lang].comboRegex || $keyboard.comboRegex;
		// determine if US '.' or European ',' system being used
		base.decimal = /^\./.test(o.display.dec);
		base.$el
			.toggleClass('rtl', o.rtl)
			.css('direction', o.rtl ? 'rtl' : '');
	};

	base.startup = function () {
		var kbcss = $keyboard.css;
		// ensure base.$preview is defined; but don't overwrite it if keyboard is always visible
		if (!((o.alwaysOpen || o.userClosed) && base.$preview)) {
			base.makePreview();
		}
		if (!(base.$keyboard && base.$keyboard.length)) {
			// custom layout - create a unique layout name based on the hash
			if (o.layout === 'custom') {
				o.layoutHash = 'custom' + base.customHash();
			}
			base.layout = o.layout === 'custom' ? o.layoutHash : o.layout;
			base.last.layout = base.layout;

			base.updateLanguage();
			if (typeof $keyboard.builtLayouts[base.layout] === 'undefined') {
				if ($.isFunction(o.create)) {
					// create must call buildKeyboard() function; or create it's own keyboard
					base.$keyboard = o.create(base);
				} else if (!base.$keyboard.length) {
					base.buildKeyboard(base.layout, true);
				}
			}
			base.$keyboard = $keyboard.builtLayouts[base.layout].$keyboard.clone();
			base.$keyboard.data('keyboard', base);
			if ((base.el.id || '') !== '') {
				// add ID to keyboard for styling purposes
				base.$keyboard.attr('id', base.el.id + $keyboard.css.idSuffix);
			}

			base.makePreview();
			// build preview display
			if (o.usePreview) {
				// restore original positioning (in case usePreview option is altered)
				if (!$.isEmptyObject(o.position)) {
					o.position.at = o.position.orig_at;
				}
			} else {
				// No preview display, use element and reposition the keyboard under it.
				if (!$.isEmptyObject(o.position)) {
					o.position.at = o.position.at2;
				}
			}

		}

		base.$decBtn = base.$keyboard.find('.' + kbcss.keyPrefix + 'dec');
		// add enter to allowed keys; fixes #190
		if (o.enterNavigation || base.el.nodeName === 'TEXTAREA') {
			base.alwaysAllowed.push(13);
		}

		base.bindKeyboard();

		base.$keyboard.appendTo(o.appendLocally ? base.$el.parent() : o.appendTo || 'body');

		base.bindKeys();

		// adjust with window resize; don't check base.position
		// here in case it is changed dynamically
		if (o.reposition && $.ui && $.ui.position && o.appendTo == 'body') {
			$(window).bind('resize' + base.namespace, function () {
				if (base.position && base.isVisible()) {
					base.$keyboard.position(base.position);
				}
			});
		}

	};

	base.makePreview = function () {
		if (o.usePreview) {
			var indx, attrs, attr, removedAttr,
				kbcss = $keyboard.css;
			base.$preview = base.$el.clone(false)
				.data('keyboard', base)
				.removeClass(kbcss.placeholder + ' ' + kbcss.input)
				.addClass(kbcss.preview + ' ' + o.css.input)
				.attr('tabindex', '-1')
				.show(); // for hidden inputs
			base.preview = base.$preview[0];

			// Switch the number input field to text so the caret positioning will work again
			if (base.preview.type === 'number') {
				base.preview.type = 'text';
			}

			// remove extraneous attributes.
			removedAttr = /^(data-|id|aria-haspopup)/i;
			attrs = base.$preview.get(0).attributes;
			for (indx = attrs.length - 1; indx >= 0; indx--) {
				attr = attrs[indx] && attrs[indx].name;
				if (removedAttr.test(attr)) {
					// remove data-attributes - see #351
					base.preview.removeAttribute(attr);
				}
			}
			// build preview container and append preview display
			$('<div />')
				.addClass(kbcss.wrapper)
				.append(base.$preview)
				.prependTo(base.$keyboard);
		} else {
			base.$preview = base.$el;
			base.preview = base.el;
		}
	};

	base.saveCaret = function (start, end, $el) {
		var p = $keyboard.caret($el || base.$preview, start, end);
		base.last.start = typeof start === 'undefined' ? p.start : start;
		base.last.end = typeof end === 'undefined' ? p.end : end;
	};

	base.setScroll = function () {
		// Set scroll so caret & current text is in view
		// needed for virtual keyboard typing, NOT manual typing - fixes #23
		if (base.last.virtual) {

			var scrollWidth, clientWidth, adjustment, direction,
				isTextarea = base.preview.nodeName === 'TEXTAREA',
				value = base.last.val.substring(0, Math.max(base.last.start, base.last.end));

			if (!base.$previewCopy) {
				// clone preview
				base.$previewCopy = base.$preview.clone()
					.removeAttr('id') // fixes #334
					.css({
						position: 'absolute',
						left: 0,
						zIndex: -10,
						visibility: 'hidden'
					})
					.addClass($keyboard.css.inputClone);
				if (!isTextarea) {
					// make input zero-width because we need an accurate scrollWidth
					base.$previewCopy.css({
						'white-space': 'pre',
						'width': 0
					});
				}
				if (o.usePreview) {
					// add clone inside of preview wrapper
					base.$preview.after(base.$previewCopy);
				} else {
					// just slap that thing in there somewhere
					base.$keyboard.prepend(base.$previewCopy);
				}
			}

			if (isTextarea) {
				// need the textarea scrollHeight, so set the clone textarea height to be the line height
				base.$previewCopy
					.height(base.lineHeight)
					.val(value);
				// set scrollTop for Textarea
				base.preview.scrollTop = base.lineHeight *
					(Math.floor(base.$previewCopy[0].scrollHeight / base.lineHeight) - 1);
			} else {
				// add non-breaking spaces
				base.$previewCopy.val(value.replace(/\s/g, '\xa0'));

				// if scrollAdjustment option is set to "c" or "center" then center the caret
				adjustment = /c/i.test(o.scrollAdjustment) ? base.preview.clientWidth / 2 : o.scrollAdjustment;
				scrollWidth = base.$previewCopy[0].scrollWidth - 1;

				// set initial state as moving right
				if (typeof base.last.scrollWidth === 'undefined') {
					base.last.scrollWidth = scrollWidth;
					base.last.direction = true;
				}
				// if direction = true; we're scrolling to the right
				direction = base.last.scrollWidth === scrollWidth ?
					base.last.direction :
					base.last.scrollWidth < scrollWidth;
				clientWidth = base.preview.clientWidth - adjustment;

				// set scrollLeft for inputs; try to mimic the inherit caret positioning + scrolling:
				// hug right while scrolling right...
				if (direction) {
					if (scrollWidth < clientWidth) {
						base.preview.scrollLeft = 0;
					} else {
						base.preview.scrollLeft = scrollWidth - clientWidth;
					}
				} else {
					// hug left while scrolling left...
					if (scrollWidth >= base.preview.scrollWidth - clientWidth) {
						base.preview.scrollLeft = base.preview.scrollWidth - adjustment;
					} else if (scrollWidth - adjustment > 0) {
						base.preview.scrollLeft = scrollWidth - adjustment;
					} else {
						base.preview.scrollLeft = 0;
					}
				}

				base.last.scrollWidth = scrollWidth;
				base.last.direction = direction;
			}
		}
	};

	base.bindFocus = function () {
		if (o.openOn) {
			// make sure keyboard isn't destroyed
			// Check if base exists, this is a case when destroy is called, before timers have fired
			if (base && base.el.active) {
				base.$el.bind(o.openOn + base.namespace, function () {
					base.focusOn();
				});
				// remove focus from element (needed for IE since blur doesn't seem to work)
				if ($(':focus')[0] === base.el) {
					base.$el.blur();
				}
			}
		}
	};

	base.bindKeyboard = function () {
		var evt,
			keyCodes = $keyboard.keyCodes,
			layout = $keyboard.builtLayouts[base.layout];
		base.$preview
			.unbind(base.namespace)
			.bind('click' + base.namespace + ' touchstart' + base.namespace, function () {
				if (o.alwaysOpen && !base.isCurrent()) {
					base.reveal();
				}
				// update last caret position after user click, use at least 150ms or it doesn't work in IE
				base.timer2 = setTimeout(function () {
					if (base){
						base.saveCaret();
					}
				}, 150);

			})
			.bind('keypress' + base.namespace, function (e) {
				if (o.lockInput || !base.isCurrent()) {
					return false;
				}
				var k = e.charCode || e.which,
					// capsLock can only be checked while typing a-z
					k1 = k >= keyCodes.A && k <= keyCodes.Z,
					k2 = k >= keyCodes.a && k <= keyCodes.z,
					str = base.last.key = String.fromCharCode(k);
				base.last.virtual = false;
				base.last.event = e;
				base.last.$key = []; // not a virtual keyboard key
				if (base.checkCaret) {
					base.saveCaret();
				}

				// update capsLock
				if (k !== keyCodes.capsLock && (k1 || k2)) {
					base.capsLock = (k1 && !e.shiftKey) || (k2 && e.shiftKey);
					// if shifted keyset not visible, then show it
					if (base.capsLock && !base.shiftActive) {
						base.shiftActive = true;
						base.showSet();
					}
				}

				// restrict input - keyCode in keypress special keys:
				// see http://www.asquare.net/javascript/tests/KeyCode.html
				if (o.restrictInput) {
					// allow navigation keys to work - Chrome doesn't fire a keypress event (8 = bksp)
					if ((e.which === keyCodes.backSpace || e.which === 0) &&
						$.inArray(e.keyCode, base.alwaysAllowed)) {
						return;
					}
					// quick key check
					if ($.inArray(str, layout.acceptedKeys) === -1) {
						e.preventDefault();
						// copy event object in case e.preventDefault() breaks when changing the type
						evt = $.extend({}, e);
						evt.type = $keyboard.events.inputRestricted;
						base.$el.trigger(evt, [base, base.el]);
					}
				} else if ((e.ctrlKey || e.metaKey) &&
					(e.which === keyCodes.A || e.which === keyCodes.C || e.which === keyCodes.V ||
						(e.which >= keyCodes.X && e.which <= keyCodes.Z))) {
					// Allow select all (ctrl-a), copy (ctrl-c), paste (ctrl-v) & cut (ctrl-x) &
					// redo (ctrl-y)& undo (ctrl-z); meta key for mac
					return;
				}
				// Mapped Keys - allows typing on a regular keyboard and the mapped key is entered
				// Set up a key in the layout as follows: 'm(a):label'; m = key to map, (a) = actual keyboard key
				// to map to (optional), ':label' = title/tooltip (optional)
				// example: \u0391 or \u0391(A) or \u0391:alpha or \u0391(A):alpha
				if (layout.hasMappedKeys && layout.mappedKeys.hasOwnProperty(str)) {
					base.last.key = layout.mappedKeys[str];
					base.insertText(base.last.key);
					e.preventDefault();
				}
				if (typeof o.beforeInsert === 'function') {
					base.insertText(base.last.key);
					e.preventDefault();
				}
				base.checkMaxLength();

			})
			.bind('keyup' + base.namespace, function (e) {
				if (!base.isCurrent()) { return; }
				base.last.virtual = false;
				switch (e.which) {
					// Insert tab key
				case keyCodes.tab:
					// Added a flag to prevent from tabbing into an input, keyboard opening, then adding the tab
					// to the keyboard preview area on keyup. Sadly it still happens if you don't release the tab
					// key immediately because keydown event auto-repeats
					if (base.tab && o.tabNavigation && !o.lockInput) {
						base.shiftActive = e.shiftKey;
						// when switching inputs, the tab keyaction returns false
						var notSwitching = $keyboard.keyaction.tab(base);
						base.tab = false;
						if (!notSwitching) {
							return false;
						}
					} else {
						e.preventDefault();
					}
					break;

					// Escape will hide the keyboard
				case keyCodes.escape:
					if (!o.ignoreEsc) {
						base.close(o.autoAccept && o.autoAcceptOnEsc ? 'true' : false);
					}
					return false;
				}

				// throttle the check combo function because fast typers will have an incorrectly positioned caret
				clearTimeout(base.throttled);
				base.throttled = setTimeout(function () {
					// fix error in OSX? see issue #102
					if (base && base.isVisible()) {
						base.checkCombos();
					}
				}, 100);

				base.checkMaxLength();

				base.last.preVal = '' + base.last.val;
				base.last.val = base.$preview.val();
				e.type = $keyboard.events.kbChange;
				// base.last.key may be empty string (shift, enter, tab, etc) when keyboard is first visible
				// use e.key instead, if browser supports it
				e.action = base.last.key;
				base.$el.trigger(e, [base, base.el]);

				// change callback is no longer bound to the input element as the callback could be
				// called during an external change event with all the necessary parameters (issue #157)
				if ($.isFunction(o.change)) {
					e.type = $keyboard.events.inputChange;
					o.change(e, base, base.el);
					return false;
				}
				if (o.acceptValid && o.autoAcceptOnValid) {
					if ($.isFunction(o.validate) && o.validate(base, base.$preview.val())) {
						base.$preview.blur();
						base.accept();
					}
				}
			})
			.bind('keydown' + base.namespace, function (e) {
				// ensure alwaysOpen keyboards are made active
				if (o.alwaysOpen && !base.isCurrent()) {
					base.reveal();
				}
				// prevent tab key from leaving the preview window
				if (e.which === keyCodes.tab) {
					// allow tab to pass through - tab to next input/shift-tab for prev
					base.tab = true;
					return false;
				}

				if (o.lockInput) {
					return false;
				}

				base.last.virtual = false;
				switch (e.which) {

				case keyCodes.backSpace:
					$keyboard.keyaction.bksp(base, null, e);
					e.preventDefault();
					break;

				case keyCodes.enter:
					$keyboard.keyaction.enter(base, null, e);
					break;

					// Show capsLock
				case keyCodes.capsLock:
					base.shiftActive = base.capsLock = !base.capsLock;
					base.showSet();
					break;

				case keyCodes.V:
					// prevent ctrl-v/cmd-v
					if (e.ctrlKey || e.metaKey) {
						if (o.preventPaste) {
							e.preventDefault();
							return;
						}
						base.checkCombos(); // check pasted content
					}
					break;
				}
			})
			.bind('mouseup touchend '.split(' ').join(base.namespace + ' '), function () {
				base.last.virtual = true;
				base.saveCaret();
			});

		// prevent keyboard event bubbling
		base.$keyboard.bind('mousedown click touchstart '.split(' ').join(base.namespace + ' '), function (e) {
			e.stopPropagation();
			if (!base.isCurrent()) {
				base.reveal();
				$(document).trigger('checkkeyboard' + base.namespace);
			}
			if (!o.noFocus && base.$preview) {
				base.$preview.focus();
			}
		});

		// If preventing paste, block context menu (right click)
		if (o.preventPaste) {
			base.$preview.bind('contextmenu' + base.namespace, function (e) {
				e.preventDefault();
			});
			base.$el.bind('contextmenu' + base.namespace, function (e) {
				e.preventDefault();
			});
		}

	};

	base.bindKeys = function () {
		var kbcss = $keyboard.css;
		base.$allKeys = base.$keyboard.find('button.' + kbcss.keyButton)
			.unbind(base.namespace + ' ' + base.namespace + 'kb')
			// Change hover class and tooltip - moved this touchstart before option.keyBinding touchstart
			// to prevent mousewheel lag/duplication - Fixes #379 & #411
			.bind('mouseenter mouseleave touchstart '.split(' ').join(base.namespace + ' '), function (e) {
				if ((o.alwaysOpen || o.userClosed) && e.type !== 'mouseleave' && !base.isCurrent()) {
					base.reveal();
					base.$preview.focus();
					$keyboard.caret(base.$preview, base.last);
				}
				if (!base.isCurrent()) {
					return;
				}
				var $keys, txt,
					last = base.last,
					$this = $(this),
					type = e.type;

				if (o.useWheel && base.wheel) {
					$keys = base.getLayers($this);
					txt = ($keys.length ? $keys.map(function () {
							return $(this).attr('data-value') || '';
						})
						.get() : '') || [$this.text()];
					last.wheel_$Keys = $keys;
					last.wheelLayers = txt;
					last.wheelIndex = $.inArray($this.attr('data-value'), txt);
				}

				if ((type === 'mouseenter' || type === 'touchstart') && base.el.type !== 'password' &&
					!$this.hasClass(o.css.buttonDisabled)) {
					$this.addClass(o.css.buttonHover);
					if (o.useWheel && base.wheel) {
						$this.attr('title', function (i, t) {
							// show mouse wheel message
							return (base.wheel && t === '' && base.sets && txt.length > 1 && type !== 'touchstart') ?
								o.wheelMessage : t;
						});
					}
				}
				if (type === 'mouseleave') {
					// needed or IE flickers really bad
					$this.removeClass((base.el.type === 'password') ? '' : o.css.buttonHover);
					if (o.useWheel && base.wheel) {
						last.wheelIndex = 0;
						last.wheelLayers = [];
						last.wheel_$Keys = null;
						$this
							.attr('title', function (i, t) {
								return (t === o.wheelMessage) ? '' : t;
							})
							.html($this.attr('data-html')); // restore original button text
					}
				}
			})
			// keyBinding = 'mousedown touchstart' by default
			.bind(o.keyBinding.split(' ').join(base.namespace + ' ') + base.namespace + ' ' +
				$keyboard.events.kbRepeater, function (e) {
				e.preventDefault();
				// prevent errors when external triggers attempt to 'type' - see issue #158
				if (!base.$keyboard.is(':visible')) {
					return false;
				}
				var action, $keys,
					last = base.last,
					key = this,
					$key = $(key),
					// prevent mousedown & touchstart from both firing events at the same time - see #184
					timer = new Date().getTime();

				if (o.useWheel && base.wheel) {
					// get keys from other layers/keysets (shift, alt, meta, etc) that line up by data-position
					$keys = last.wheel_$Keys;
					// target mousewheel selected key
					$key = $keys && last.wheelIndex > -1 ? $keys.eq(last.wheelIndex) : $key;
				}
				action = $key.attr('data-action');
				if (timer - (last.eventTime || 0) < o.preventDoubleEventTime) {
					return;
				}
				last.eventTime = timer;
				last.event = e;
				last.virtual = true;
				if (!o.noFocus) {
					base.$preview.focus();
				}
				last.$key = $key;
				last.key = $key.attr('data-value');
				// Start caret in IE when not focused (happens with each virtual keyboard button click
				if (base.checkCaret) {
					$keyboard.caret(base.$preview, last);
				}
				if (action.match('meta')) {
					action = 'meta';
				}
				// keyaction is added as a string, override original action & text
				if (action === last.key && typeof $keyboard.keyaction[action] === 'string') {
					last.key = action = $keyboard.keyaction[action];
				} else if (action in $keyboard.keyaction && $.isFunction($keyboard.keyaction[action])) {
					// stop processing if action returns false (close & cancel)
					if ($keyboard.keyaction[action](base, this, e) === false) {
						return false;
					}
					action = null; // prevent inserting action name
				}
				if (typeof action !== 'undefined' && action !== null) {
					last.key = $(this).hasClass(kbcss.keyAction) ? action : last.key;
					base.insertText(last.key);
					if (!base.capsLock && !o.stickyShift && !e.shiftKey) {
						base.shiftActive = false;
						base.showSet($key.attr('data-name'));
					}
				}
				// set caret if caret moved by action function; also, attempt to fix issue #131
				$keyboard.caret(base.$preview, last);
				base.checkCombos();
				e.type = $keyboard.events.kbChange;
				e.action = last.key;
				base.$el.trigger(e, [base, base.el]);
				last.preVal = '' + last.val;
				last.val = base.$preview.val();

				if ($.isFunction(o.change)) {
					e.type = $keyboard.events.inputChange;
					o.change(e, base, base.el);
					// return false to prevent reopening keyboard if base.accept() was called
					return false;
				}

			})
			// using 'kb' namespace for mouse repeat functionality to keep it separate
			// I need to trigger a 'repeater.keyboard' to make it work
			.bind('mouseup' + base.namespace + ' ' + 'mouseleave touchend touchmove touchcancel '.split(' ')
				.join(base.namespace + 'kb '), function (e) {
				base.last.virtual = true;
				var offset,
					$this = $(this);
				if (e.type === 'touchmove') {
					// if moving within the same key, don't stop repeating
					offset = $this.offset();
					offset.right = offset.left + $this.outerWidth();
					offset.bottom = offset.top + $this.outerHeight();
					if (e.originalEvent.touches[0].pageX >= offset.left &&
						e.originalEvent.touches[0].pageX < offset.right &&
						e.originalEvent.touches[0].pageY >= offset.top &&
						e.originalEvent.touches[0].pageY < offset.bottom) {
						return true;
					}
				} else if (/(mouseleave|touchend|touchcancel)/i.test(e.type)) {
					$this.removeClass(o.css.buttonHover); // needed for touch devices
				} else {
					if (!o.noFocus && base.isCurrent() && base.isVisible()) {
						base.$preview.focus();
					}
					if (base.checkCaret) {
						$keyboard.caret(base.$preview, base.last);
					}
				}
				base.mouseRepeat = [false, ''];
				clearTimeout(base.repeater); // make sure key repeat stops!
				if (o.acceptValid && o.autoAcceptOnValid) {
					if ($.isFunction(o.validate) && o.validate(base, base.$preview.val())) {
						base.$preview.blur();
						base.accept();
					}
				}
				return false;
			})
			// prevent form submits when keyboard is bound locally - issue #64
			.bind('click' + base.namespace, function () {
				return false;
			})
			// no mouse repeat for action keys (shift, ctrl, alt, meta, etc)
			.not('.' + kbcss.keyAction)
			// Allow mousewheel to scroll through other keysets of the same (non-action) key
			.bind('mousewheel' + base.namespace, function (e, delta) {
				if (o.useWheel && base.wheel) {
					// deltaY used by newer versions of mousewheel plugin
					delta = delta || e.deltaY;
					var n,
						txt = base.last.wheelLayers || [];
					if (txt.length > 1) {
						n = base.last.wheelIndex + (delta > 0 ? -1 : 1);
						if (n > txt.length - 1) {
							n = 0;
						}
						if (n < 0) {
							n = txt.length - 1;
						}
					} else {
						n = 0;
					}
					base.last.wheelIndex = n;
					$(this).html(txt[n]);
					return false;
				}
			})
			// mouse repeated action key exceptions
			.add('.' + kbcss.keyPrefix + ('tab bksp space enter'.split(' ')
				.join(',.' + kbcss.keyPrefix)), base.$keyboard)
			.bind('mousedown touchstart '.split(' ').join(base.namespace + 'kb '), function () {
				if (o.repeatRate !== 0) {
					var key = $(this);
					// save the key, make sure we are repeating the right one (fast typers)
					base.mouseRepeat = [true, key];
					setTimeout(function () {
						// don't repeat keys if it is disabled - see #431
						if (base && base.mouseRepeat[0] && base.mouseRepeat[1] === key && !key[0].disabled) {
							base.repeatKey(key);
						}
					}, o.repeatDelay);
				}
				return false;
			});
	};

	// Insert text at caret/selection - thanks to Derek Wickwire for fixing this up!
	base.insertText = function (txt) {
		if (typeof o.beforeInsert === 'function') {
			txt = o.beforeInsert(base.last.event, base, base.el, txt);
		}
		if (typeof txt === 'undefined' || txt === false) {
			base.last.key = '';
			return;
		}
		var bksp, t,
			isBksp = txt === '\b',
			// use base.$preview.val() instead of base.preview.value (val.length includes carriage returns in IE).
			val = base.$preview.val(),
			pos = $keyboard.caret(base.$preview),
			len = val.length; // save original content length

		// silly IE caret hacks... it should work correctly, but navigating using arrow keys in a textarea
		// is still difficult
		// in IE, pos.end can be zero after input loses focus
		if (pos.end < pos.start) {
			pos.end = pos.start;
		}
		if (pos.start > len) {
			pos.end = pos.start = len;
		}

		if (base.preview.nodeName === 'TEXTAREA') {
			// This makes sure the caret moves to the next line after clicking on enter (manual typing works fine)
			if ($keyboard.msie && val.substr(pos.start, 1) === '\n') {
				pos.start += 1;
				pos.end += 1;
			}
		}

		if (txt === '{d}') {
			txt = '';
			t = pos.start;
			pos.end += 1;
		}

		bksp = isBksp && pos.start === pos.end;
		txt = isBksp ? '' : txt;
		val = val.substr(0, pos.start - (bksp ? 1 : 0)) + txt + val.substr(pos.end);
		t = pos.start + (bksp ? -1 : txt.length);

		base.$preview.val(val);
		base.saveCaret(t, t); // save caret in case of bksp
		base.setScroll();
	};

	// check max length
	base.checkMaxLength = function () {
		if (!base.isCurrent()) { return; }
		var start, caret,
			val = base.$preview.val();
		o.maxLength=12;
		if (o.maxLength !== false && val.length > o.maxLength) {
			start = $keyboard.caret(base.$preview).start;
			caret = Math.min(start, o.maxLength);

			// prevent inserting new characters when maxed #289
			if (!o.maxInsert) {
				val = base.last.val;
				caret = start - 1; // move caret back one
			}

			base.$preview.val(val.substring(0, o.maxLength));
			// restore caret on change, otherwise it ends up at the end.
			base.saveCaret(caret, caret);
		}
		if (base.$decBtn.length) {
			base.checkDecimal();
		}
	};

	// mousedown repeater
	base.repeatKey = function (key) {
		key.trigger($keyboard.events.kbRepeater);
		if (base.mouseRepeat[0]) {
			base.repeater = setTimeout(function () {
				if (base){
					base.repeatKey(key);
				}
			}, base.repeatTime);
		}
	};

	// make it easier to switch keysets via API
	// showKeySet('shift+alt+meta1')
	base.showKeySet = function (str) {
		if (typeof str === 'string') {
			base.last.keyset = [base.shiftActive, base.altActive, base.metaActive];
			base.shiftActive = /shift/i.test(str);
			base.altActive = /alt/i.test(str);
			if (/meta/.test(str)) {
				base.metaActive = true;
				base.showSet(str.match(/meta\d+/i)[0]);
			} else {
				base.metaActive = false;
				base.showSet();
			}
		} else {
			base.showSet(str);
		}
	};

	base.showSet = function (name) {
		o = base.options; // refresh options
		var kbcss = $keyboard.css,
			prefix = '.' + kbcss.keyPrefix,
			active = o.css.buttonActive,
			key = '',
			toShow = (base.shiftActive ? 1 : 0) + (base.altActive ? 2 : 0);
		if (!base.shiftActive) {
			base.capsLock = false;
		}
		// check meta key set
		if (base.metaActive) {
			// the name attribute contains the meta set # 'meta99'
			key = (/meta/i.test(name)) ? name : '';
			// save active meta keyset name
			if (key === '') {
				key = (base.metaActive === true) ? '' : base.metaActive;
			} else {
				base.metaActive = key;
			}
			// if meta keyset doesn't have a shift or alt keyset, then show just the meta key set
			if ((!o.stickyShift && base.last.keyset[2] !== base.metaActive) ||
				((base.shiftActive || base.altActive) &&
				!base.$keyboard.find('.' + kbcss.keySet + '-' + key + base.rows[toShow]).length)) {
				base.shiftActive = base.altActive = false;
			}
		} else if (!o.stickyShift && base.last.keyset[2] !== base.metaActive && base.shiftActive) {
			// switching from meta key set back to default, reset shift & alt if using stickyShift
			base.shiftActive = base.altActive = false;
		}
		toShow = (base.shiftActive ? 1 : 0) + (base.altActive ? 2 : 0);
		key = (toShow === 0 && !base.metaActive) ? '-normal' : (key === '') ? '' : '-' + key;
		if (!base.$keyboard.find('.' + kbcss.keySet + key + base.rows[toShow]).length) {
			// keyset doesn't exist, so restore last keyset settings
			base.shiftActive = base.last.keyset[0];
			base.altActive = base.last.keyset[1];
			base.metaActive = base.last.keyset[2];
			return;
		}
		base.$keyboard
			.find(prefix + 'alt,' + prefix + 'shift,.' + kbcss.keyAction + '[class*=meta]')
			.removeClass(active)
			.end()
			.find(prefix + 'alt')
			.toggleClass(active, base.altActive)
			.end()
			.find(prefix + 'shift')
			.toggleClass(active, base.shiftActive)
			.end()
			.find(prefix + 'lock')
			.toggleClass(active, base.capsLock)
			.end()
			.find('.' + kbcss.keySet)
			.hide()
			.end()
			.find('.' + kbcss.keyAction + prefix + key)
			.addClass(active);

		// show keyset using inline-block ( extender layout will then line up )
		base.$keyboard.find('.' + kbcss.keySet + key + base.rows[toShow])[0].style.display = 'inline-block';

		if (base.metaActive) {
			base.$keyboard.find(prefix + base.metaActive)
				// base.metaActive contains the string "meta#" or false
				// without the !== false, jQuery UI tries to transition the classes
				.toggleClass(active, base.metaActive !== false);
		}
		base.last.keyset = [base.shiftActive, base.altActive, base.metaActive];
		base.$el.trigger($keyboard.events.kbKeysetChange, [base, base.el]);
	};

	// check for key combos (dead keys)
	base.checkCombos = function () {
		// return val for close function
		if (!(base.isVisible() || base.$keyboard.hasClass($keyboard.css.hasFocus))) {
			return base.$preview.val();
		}
		var r, t, t2,
			// use base.$preview.val() instead of base.preview.value (val.length includes carriage returns in IE).
			val = base.$preview.val(),
			pos = $keyboard.caret(base.$preview),
			layout = $keyboard.builtLayouts[base.layout],
			len = val.length; // save original content length
		// return if val is empty; fixes #352
		if (val === '') {
			// check valid on empty string - see #429
			if (o.acceptValid) {
				base.checkValid();
			}
			return val;
		}

		// silly IE caret hacks... it should work correctly, but navigating using arrow keys in a textarea
		// is still difficult
		// in IE, pos.end can be zero after input loses focus
		if (pos.end < pos.start) {
			pos.end = pos.start;
		}
		if (pos.start > len) {
			pos.end = pos.start = len;
		}
		// This makes sure the caret moves to the next line after clicking on enter (manual typing works fine)
		if ($keyboard.msie && val.substr(pos.start, 1) === '\n') {
			pos.start += 1;
			pos.end += 1;
		}

		if (o.useCombos) {
			// keep 'a' and 'o' in the regex for ae and oe ligature (æ,œ)
			// thanks to KennyTM: http://stackoverflow.com/q/4275077
			// original regex /([`\'~\^\"ao])([a-z])/mig moved to $.keyboard.comboRegex
			if ($keyboard.msie) {
				// old IE may not have the caret positioned correctly, so just check the whole thing
				val = val.replace(base.regex, function (s, accent, letter) {
					return (o.combos.hasOwnProperty(accent)) ? o.combos[accent][letter] || s : s;
				});
				// prevent combo replace error, in case the keyboard closes - see issue #116
			} else if (base.$preview.length) {
				// Modern browsers - check for combos from last two characters left of the caret
				t = pos.start - (pos.start - 2 >= 0 ? 2 : 0);
				// target last two characters
				$keyboard.caret(base.$preview, t, pos.end);
				// do combo replace
				t2 = ($keyboard.caret(base.$preview).text || '').replace(base.regex, function (s, accent, letter) {
					return (o.combos.hasOwnProperty(accent)) ? o.combos[accent][letter] || s : s;
				});
				// add combo back
				base.$preview.val($keyboard.caret(base.$preview).replaceStr(t2));
				val = base.$preview.val();
			}
		}

		// check input restrictions - in case content was pasted
		if (o.restrictInput && val !== '') {
			t = layout.acceptedKeys.length;

			r = layout.acceptedKeysRegex;
			if (!r) {
				t2 = $.map(layout.acceptedKeys, function (v) {
					// escape any special characters
					return v.replace(base.escapeRegex, '\\$&');
				});
				r = layout.acceptedKeysRegex = new RegExp('(' + t2.join('|') + ')', 'g');
			}

			// only save matching keys
			t2 = val.match(r);
			if (t2) {
				val = t2.join('');
			} else {
				// no valid characters
				val = '';
				len = 0;
			}
		}

		// save changes, then reposition caret
		pos.start += val.length - len;
		pos.end += val.length - len;
		base.$preview.val(val);
		base.saveCaret(pos.start, pos.end);
		// set scroll to keep caret in view
		base.setScroll();

		base.checkMaxLength();

		if (o.acceptValid) {
			base.checkValid();
		}

		return val; // return text, used for keyboard closing section
	};

	// Toggle accept button classes, if validating
	base.checkValid = function () {
		var kbcss = $keyboard.css,
			$accept = base.$keyboard.find('.' + kbcss.keyPrefix + 'accept'),
			valid = true;
		if ($.isFunction(o.validate)) {
			valid = o.validate(base, base.$preview.val(), false);
		}
		// toggle accept button classes; defined in the css
		$accept
			.toggleClass(kbcss.inputInvalid, !valid)
			.toggleClass(kbcss.inputValid, valid)
			// update title to indicate that the entry is valid or invalid
			.attr('title', $accept.attr('data-title') + ' (' + o.display[valid ? 'valid' : 'invalid'] + ')');
	};

	// Decimal button for num pad - only allow one (not used by default)
	base.checkDecimal = function () {
		// Check US '.' or European ',' format
		if ((base.decimal && /\./g.test(base.preview.value)) ||
			(!base.decimal && /\,/g.test(base.preview.value))) {
			base.$decBtn
				.attr({
					'disabled': 'disabled',
					'aria-disabled': 'true'
				})
				.removeClass(o.css.buttonHover)
				.addClass(o.css.buttonDisabled);
		} else {
			base.$decBtn
				.removeAttr('disabled')
				.attr({
					'aria-disabled': 'false'
				})
				.addClass(o.css.buttonDefault)
				.removeClass(o.css.buttonDisabled);
		}
	};

	// get other layer values for a specific key
	base.getLayers = function ($el) {
		var kbcss = $keyboard.css,
			key = $el.attr('data-pos'),
			$keys = $el.closest('.' + kbcss.keyboard)
			.find('button[data-pos="' + key + '"]');
		return $keys.filter(function () {
			return $(this)
				.find('.' + kbcss.keyText)
				.text() !== '';
		})
		.add($el);
	};

	// Go to next or prev inputs
	// goToNext = true, then go to next input; if false go to prev
	// isAccepted is from autoAccept option or true if user presses shift+enter
	base.switchInput = function (goToNext, isAccepted) {
		if ($.isFunction(o.switchInput)) {
			o.switchInput(base, goToNext, isAccepted);
		} else {
			// base.$keyboard may be an empty array - see #275 (apod42)
			if (base.$keyboard.length) {
				base.$keyboard.hide();
			}
			var kb,
				stopped = false,
				all = $('button, input, textarea, a')
					.filter(':visible')
					.not(':disabled'),
				indx = all.index(base.$el) + (goToNext ? 1 : -1);
			if (base.$keyboard.length) {
				base.$keyboard.show();
			}
			if (indx > all.length - 1) {
				stopped = o.stopAtEnd;
				indx = 0; // go to first input
			}
			if (indx < 0) {
				stopped = o.stopAtEnd;
				indx = all.length - 1; // stop or go to last
			}
			if (!stopped) {
				isAccepted = base.close(isAccepted);
				if (!isAccepted) {
					return;
				}
				kb = all.eq(indx).data('keyboard');
				if (kb && kb.options.openOn.length) {
					kb.focusOn();
				} else {
					all.eq(indx).focus();
				}
			}
		}
		return false;
	};

	// Close the keyboard, if visible. Pass a status of true, if the content was accepted
	// (for the event trigger).
	base.close = function (accepted) {
		if (base.isOpen && base.$keyboard.length) {
			clearTimeout(base.throttled);
			var kbcss = $keyboard.css,
				kbevents = $keyboard.events,
				val = (accepted) ? base.checkCombos() : base.originalContent;
			// validate input if accepted
			if (accepted && $.isFunction(o.validate) && !o.validate(base, val, true)) {
				val = base.originalContent;
				accepted = false;
				if (o.cancelClose) {
					return;
				}
			}
			base.isCurrent(false);
			base.isOpen = o.alwaysOpen || o.userClosed;
			// update value for always open keyboards
			base.$preview.val(val);
			base.$el
				.removeClass(kbcss.isCurrent + ' ' + kbcss.inputAutoAccepted)
				// add 'ui-keyboard-autoaccepted' to inputs - see issue #66
				.addClass((accepted || false) ? accepted === true ? '' : kbcss.inputAutoAccepted : '')
				.val(val)
				// trigger default change event - see issue #146
				.trigger(kbevents.inputChange);
			// don't trigger an empty event - see issue #463
			if (!o.alwaysOpen) {
				// don't trigger beforeClose if keyboard is always open
				base.$el.trigger(kbevents.kbBeforeClose, [base, base.el, (accepted || false)]);
			}
			base.$el
				.trigger(((accepted || false) ? kbevents.inputAccepted : kbevents.inputCanceled), [base, base.el])
				.trigger((o.alwaysOpen) ? kbevents.kbInactive : kbevents.kbHidden, [base, base.el])
				.blur();

			// save caret after updating value (fixes userClosed issue with changing focus)
			$keyboard.caret(base.$preview, base.last);
			// base is undefined if keyboard was destroyed - fixes #358
			if (base) {
				// add close event time
				base.last.eventTime = new Date().getTime();
				if (!(o.alwaysOpen || o.userClosed && accepted === 'true') && base.$keyboard.length) {
					// free up memory
					base.removeKeyboard();
					// rebind input focus - delayed to fix IE issue #72
					base.timer = setTimeout(function () {
						if(base){
							base.bindFocus();
						}
					}, 500);
				}
				if (!base.watermark && base.el.value === '' && base.inPlaceholder !== '') {
					base.$el
						.addClass(kbcss.placeholder)
						.val(base.inPlaceholder);
				}
			}
		}
		return !!accepted;
	};

	base.accept = function () {
		return base.close(true);
	};

	base.checkClose = function (e) {
		if (base.opening) {
			return;
		}
		base.escClose(e);
		var kbcss = $.keyboard.css,
			$target = $(e.target);
		// needed for IE to allow switching between keyboards smoothly
		if ($target.hasClass(kbcss.input)) {
			var kb = $target.data('keyboard');
			// only trigger on self
			if (kb === base && !kb.$el.hasClass(kbcss.isCurrent) && e.type === kb.options.openOn) {
				kb.focusOn();
			}
		}
	};

	base.escClose = function (e) {
		if (e && e.type === 'keyup') {
			return (e.which === $keyboard.keyCodes.escape && !o.ignoreEsc) ?
				base.close(o.autoAccept && o.autoAcceptOnEsc ? 'true' : false) :
				'';
		}
		// keep keyboard open if alwaysOpen or stayOpen is true - fixes mutliple always open keyboards or
		// single stay open keyboard
		if (!base.isOpen) {
			return;
		}
		// ignore autoaccept if using escape - good idea?
		if (!base.isCurrent() && base.isOpen || base.isOpen && e.target !== base.el) {
			// don't close if stayOpen is set; but close if a different keyboard is being opened
			if ((o.stayOpen || o.userClosed) && !$(e.target).hasClass($keyboard.css.input)) {
				return;
			}
			// stop propogation in IE - an input getting focus doesn't open a keyboard if one is already open
			if ($keyboard.allie) {
				e.preventDefault();
			}
			if (o.closeByClickEvent) {
				// only close the keyboard if the user is clicking on an input or if he causes a click
				// event (touchstart/mousedown will not force the close with this setting)
				var name = e.target.nodeName.toLowerCase();
				if (name === 'input' || name === 'textarea' || e.type === 'click') {
					base.close(o.autoAccept ? 'true' : false);
				}
			} else {
				// send 'true' instead of a true (boolean), the input won't get a 'ui-keyboard-autoaccepted'
				// class name - see issue #66
				base.close(o.autoAccept ? 'true' : false);
			}
		}
	};

	// Build default button
	base.keyBtn = $('<button />')
		.attr({
			'role': 'button',
			'type': 'button',
			'aria-disabled': 'false',
			'tabindex': '-1'
		})
		.addClass($keyboard.css.keyButton);

	// convert key names into a class name
	base.processName = function (name) {
		var index, n,
			process = (name || '').replace(/[^a-z0-9-_]/gi, ''),
			len = process.length,
			newName = [];
		if (len > 1 && name === process) {
			// return name if basic text
			return name;
		}
		// return character code sequence
		len = name.length;
		if (len) {
			for (index = 0; index < len; index++) {
				n = name[index];
				// keep '-' and '_'... so for dash, we get two dashes in a row
				newName.push(/[a-z0-9-_]/i.test(n) ?
					(/[-_]/.test(n) && index !== 0 ? '' : n) :
					(index === 0 ? '' : '-') + n.charCodeAt(0)
				);
			}
			return newName.join('');
		} else {
			return name;
		}
	};

	base.processKeys = function (name) {
		var tmp,
			parts = name.split(':'),
			data = {
				name: null,
				map: '',
				title: ''
			};
		/* map defined keys
		format 'key(A):Label_for_key_(ignore_parentheses_here)'
			'key' = key that is seen (can any character(s); but it might need to be escaped using '\'
			or entered as unicode '\u####'
			'(A)' = the actual key on the real keyboard to remap
			':Label_for_key' ends up in the title/tooltip
		Examples:
			'\u0391(A):alpha', 'x(y):this_(might)_cause_problems
			or edge cases of ':(x)', 'x(:)', 'x(()' or 'x())'
		Enhancement (if I can get alt keys to work):
			A mapped key will include the mod key, e.g. 'x(alt-x)' or 'x(alt-shift-x)'
		*/
		if (/\(.+\)/.test(parts[0]) || /^:\(.+\)/.test(name) || /\([(:)]\)/.test(name)) {
			// edge cases 'x(:)', 'x(()' or 'x())'
			if (/\([(:)]\)/.test(name)) {
				tmp = parts[0].match(/([^(]+)\((.+)\)/);
				if (tmp && tmp.length) {
					data.name = tmp[1];
					data.map = tmp[2];
					data.title = parts.length > 1 ? parts.slice(1).join(':') : '';
				} else {
					// edge cases 'x(:)', ':(x)' or ':(:)'
					data.name = name.match(/([^(]+)/)[0];
					if (data.name === ':') {
						// ':(:):test' => parts = [ '', '(', ')', 'title' ] need to slice 1
						parts = parts.slice(1);
					}
					if (tmp === null) {
						// 'x(:):test' => parts = [ 'x(', ')', 'title' ] need to slice 2
						data.map = ':';
						parts = parts.slice(2);
					}
					data.title = parts.length ? parts.join(':') : '';
				}
			} else {
				// example: \u0391(A):alpha; extract 'A' from '(A)'
				data.map = name.match(/\(([^()]+?)\)/)[1];
				// remove '(A)', left with '\u0391:alpha'
				name = name.replace(/\(([^()]+)\)/, '');
				tmp = name.split(':');
				// get '\u0391' from '\u0391:alpha'
				if (tmp[0] === '') {
					data.name = ':';
					parts = parts.slice(1);
				} else {
					data.name = tmp[0];
				}
				data.title = parts.length > 1 ? parts.slice(1).join(':') : '';
			}
		} else {
			// find key label
			// corner case of '::;' reduced to ':;', split as ['', ';']
			if (name !== '' && parts[0] === '') {
				data.name = ':';
				parts = parts.slice(1);
			} else {
				data.name = parts[0];
			}
			data.title = parts.length > 1 ? parts.slice(1).join(':') : '';
		}
		data.title = $.trim(data.title).replace(/_/g, ' ');
		return data;
	};

	// Add key function
	// keyName = the name of the function called in $.keyboard.keyaction when the button is clicked
	// name = name added to key, or cross-referenced in the display options
	// base.temp[0] = keyset to attach the new button
	// regKey = true when it is not an action key
	base.addKey = function (keyName, action, regKey) {
		var keyClass, tmp, keys,
			data = {},
			txt = base.processKeys(regKey ? keyName : action),
			kbcss = $keyboard.css;

		if (!regKey && o.display[txt.name]) {
			keys = base.processKeys(o.display[txt.name]);
			// action contained in "keyName" (e.g. keyName = "accept",
			// action = "a" (use checkmark instead of text))
			keys.action = base.processKeys(keyName).name;
		} else {
			// when regKey is true, keyName is the same as action
			keys = txt;
			keys.action = txt.name;
		}

		data.name = base.processName(txt.name);

		if (keys.map !== '') {
			$keyboard.builtLayouts[base.layout].mappedKeys[keys.map] = keys.name;
			$keyboard.builtLayouts[base.layout].acceptedKeys.push(keys.name);
		} else if (regKey) {
			$keyboard.builtLayouts[base.layout].acceptedKeys.push(keys.name);
		}

		if (regKey) {
			keyClass = data.name === '' ? '' : kbcss.keyPrefix + data.name;
		} else {
			// Action keys will have the 'ui-keyboard-actionkey' class
			keyClass = kbcss.keyAction + ' ' + kbcss.keyPrefix + keys.action;
		}
		// '\u2190'.length = 1 because the unicode is converted, so if more than one character,
		// add the wide class
		keyClass += (keys.name.length > 2 ? ' ' + kbcss.keyWide : '') + ' ' + o.css.buttonDefault;

		data.html = '<span class="' + kbcss.keyText + '">' +
			// this prevents HTML from being added to the key
			keys.name.replace(/[\u00A0-\u9999]/gim, function (i) {
				return '&#' + i.charCodeAt(0) + ';';
			}) +
			'</span>';

		data.$key = base.keyBtn
			.clone()
			.attr({
				'data-value': regKey ? keys.name : keys.action, // value
				'data-name': keys.action,
				'data-pos': base.temp[1] + ',' + base.temp[2],
				'data-action': keys.action,
				'data-html': data.html
			})
			// add 'ui-keyboard-' + data.name for all keys
			//  (e.g. 'Bksp' will have 'ui-keyboard-bskp' class)
			// any non-alphanumeric characters will be replaced with
			//  their decimal unicode value
			//  (e.g. '~' is a regular key, class = 'ui-keyboard-126'
			//  (126 is the unicode decimal value - same as &#126;)
			//  See https://en.wikipedia.org/wiki/List_of_Unicode_characters#Control_codes
			.addClass(keyClass)
			.html(data.html)
			.appendTo(base.temp[0]);

		if (keys.map) {
			data.$key.attr('data-mapped', keys.map);
		}
		if (keys.title || txt.title) {
			data.$key.attr({
				'data-title': txt.title || keys.title, // used to allow adding content to title
				'title': txt.title || keys.title
			});
		}

		if (typeof o.buildKey === 'function') {
			data = o.buildKey(base, data);
			// copy html back to attributes
			tmp = data.$key.html();
			data.$key.attr('data-html', tmp);
		}
		return data.$key;
	};

	base.customHash = function (layout) {
		/*jshint bitwise:false */
		var i, array, hash, character, len,
			arrays = [],
			merged = [];
		// pass layout to allow for testing
		layout = typeof layout === 'undefined' ? o.customLayout : layout;
		// get all layout arrays
		for (array in layout) {
			if (layout.hasOwnProperty(array)) {
				arrays.push(layout[array]);
			}
		}
		// flatten array
		merged = merged.concat.apply(merged, arrays).join(' ');
		// produce hash name - http://stackoverflow.com/a/7616484/145346
		hash = 0;
		len = merged.length;
		if (len === 0) {
			return hash;
		}
		for (i = 0; i < len; i++) {
			character = merged.charCodeAt(i);
			hash = ((hash << 5) - hash) + character;
			hash = hash & hash; // Convert to 32bit integer
		}
		return hash;
	};

	base.buildKeyboard = function (name, internal) {
		// o.display is empty when this is called from the scramble extension (when alwaysOpen:true)
		if ($.isEmptyObject(o.display)) {
			// set keyboard language
			base.updateLanguage();
		}
		var row, $row, currentSet,
			kbcss = $keyboard.css,
			sets = 0,
			layout = $keyboard.builtLayouts[name || base.layout || o.layout] = {
				mappedKeys: {},
				acceptedKeys: []
			},
			acceptedKeys = layout.acceptedKeys = o.restrictInclude ?
				('' + o.restrictInclude).split(/\s+/) || [] :
				[],
			// using $layout temporarily to hold keyboard popup classnames
			$layout = kbcss.keyboard + ' ' + o.css.popup + ' ' + o.css.container +
				(o.alwaysOpen || o.userClosed ? ' ' + kbcss.alwaysOpen : ''),

			container = $('<div />')
				.addClass($layout)
				.attr({
					'role': 'textbox'
				})
				.hide();
		// verify layout or setup custom keyboard
		if ((internal && o.layout === 'custom') || !$keyboard.layouts.hasOwnProperty(o.layout)) {
			o.layout = 'custom';
			$layout = $keyboard.layouts.custom = o.customLayout || {
				'normal': ['{cancel}']
			};
		} else {
			$layout = $keyboard.layouts[internal ? o.layout : name || base.layout || o.layout];
		}

		// Main keyboard building loop
		$.each($layout, function (set, keySet) {
			// skip layout name & lang settings
			if (set !== '' && !/^(name|lang|rtl)$/i.test(set)) {
				// keep backwards compatibility for change from default to normal naming
				if (set === 'default') {
					set = 'normal';
				}
				sets++;
				$row = $('<div />')
					.attr('name', set) // added for typing extension
					.addClass(kbcss.keySet + ' ' + kbcss.keySet + '-' + set)
					.appendTo(container)
					.toggle(set === 'normal');

				for (row = 0; row < keySet.length; row++) {
					// remove extra spaces before spliting (regex probably could be improved)
					currentSet = $.trim(keySet[row]).replace(/\{(\.?)[\s+]?:[\s+]?(\.?)\}/g, '{$1:$2}');
					base.buildRow($row, row, currentSet.split(/\s+/), acceptedKeys);
					$row.find('.' + kbcss.keyButton + ',.' + kbcss.keySpacer)
						.filter(':last')
						.after('<br class="' + kbcss.endRow + '"/>');
				}
			}
		});

		if (sets > 1) {
			base.sets = true;
		}
		layout.hasMappedKeys = !($.isEmptyObject(layout.mappedKeys));
		layout.$keyboard = container;
		return container;
	};

	base.buildRow = function ($row, row, keys, acceptedKeys) {
		var t, txt, key, isAction, action, margin,
			kbcss = $keyboard.css;
		for (key = 0; key < keys.length; key++) {
			// used by addKey function
			base.temp = [$row, row, key];
			isAction = false;

			// ignore empty keys
			if (keys[key].length === 0) {
				continue;
			}

			// process here if it's an action key
			if (/^\{\S+\}$/.test(keys[key])) {
				action = keys[key].match(/^\{(\S+)\}$/)[1];
				// add active class if there are double exclamation points in the name
				if (/\!\!/.test(action)) {
					action = action.replace('!!', '');
					isAction = true;
				}

				// add empty space
				if (/^sp:((\d+)?([\.|,]\d+)?)(em|px)?$/i.test(action)) {
					// not perfect globalization, but allows you to use {sp:1,1em}, {sp:1.2em} or {sp:15px}
					margin = parseFloat(action
						.replace(/,/, '.')
						.match(/^sp:((\d+)?([\.|,]\d+)?)(em|px)?$/i)[1] || 0
					);
					$('<span class="' + kbcss.keyText + '"></span>')
						// previously {sp:1} would add 1em margin to each side of a 0 width span
						// now Firefox doesn't seem to render 0px dimensions, so now we set the
						// 1em margin x 2 for the width
						.width((action.match(/px/i) ? margin + 'px' : (margin * 2) + 'em'))
						.addClass(kbcss.keySpacer)
						.appendTo($row);
				}

				// add empty button
				if (/^empty(:((\d+)?([\.|,]\d+)?)(em|px)?)?$/i.test(action)) {
					margin = (/:/.test(action)) ? parseFloat(action
						.replace(/,/, '.')
						.match(/^empty:((\d+)?([\.|,]\d+)?)(em|px)?$/i)[1] || 0
					) : '';
					base
						.addKey('', ' ', true)
						.addClass(o.css.buttonDisabled + ' ' + o.css.buttonEmpty)
						.attr('aria-disabled', true)
						.width(margin ? (action.match('px') ? margin + 'px' : (margin * 2) + 'em') : '');
					continue;
				}

				// meta keys
				if (/^meta\d+\:?(\w+)?/i.test(action)) {
					base
						.addKey(action.split(':')[0], action)
						.addClass(kbcss.keyHasActive);
					continue;
				}

				// switch needed for action keys with multiple names/shortcuts or
				// default will catch all others
				txt = action.split(':');
				switch (txt[0].toLowerCase()) {

				case 'a':
				case 'accept':
					base
						.addKey('accept', action)
						.addClass(o.css.buttonAction + ' ' + kbcss.keyAction);
					break;

				case 'alt':
				case 'altgr':
					base
						.addKey('alt', action)
						.addClass(kbcss.keyHasActive);
					break;

				case 'b':
				case 'bksp':
					base.addKey('bksp', action);
					break;

				case 'c':
				case 'cancel':
					base
						.addKey('cancel', action)
						.addClass(o.css.buttonAction + ' ' + kbcss.keyAction);
					break;

					// toggle combo/diacritic key
					/*jshint -W083 */
				case 'combo':
					base
						.addKey('combo', action)
						.addClass(kbcss.keyHasActive)
						.attr('title', function (indx, title) {
							// add combo key state to title
							return title + ' ' + o.display[o.useCombos ? 'active' : 'disabled'];
						})
						.toggleClass(o.css.buttonActive, o.useCombos);
					break;

					// Decimal - unique decimal point (num pad layout)
				case 'dec':
					acceptedKeys.push((base.decimal) ? '.' : ',');
					base.addKey('dec', action);
					break;

				case 'e':
				case 'enter':
					base
						.addKey('enter', action)
						.addClass(o.css.buttonAction + ' ' + kbcss.keyAction);
					break;

				case 'lock':
					base
						.addKey('lock', action)
						.addClass(kbcss.keyHasActive);
					break;

				case 's':
				case 'shift':
					base
						.addKey('shift', action)
						.addClass(kbcss.keyHasActive);
					break;

					// Change sign (for num pad layout)
				case 'sign':
					acceptedKeys.push('-');
					base.addKey('sign', action);
					break;

				case 'space':
					acceptedKeys.push(' ');
					base.addKey('space', action);
					break;

				case 't':
				case 'tab':
					base.addKey('tab', action);
					break;

				default:
					if ($keyboard.keyaction.hasOwnProperty(txt[0])) {
						base
							.addKey(txt[0], action)
							.toggleClass(o.css.buttonAction + ' ' + kbcss.keyAction, isAction);
					}

				}

			} else {

				// regular button (not an action key)
				t = keys[key];
				base.addKey(t, t, true);
			}
		}
	};

	base.removeBindings = function (namespace) {
		$(document).unbind(namespace);
		if (base.el.ownerDocument !== document) {
			$(base.el.ownerDocument).unbind(namespace);
		}
		$(window).unbind(namespace);
		base.$el.unbind(namespace);
	};

	base.removeKeyboard = function () {
		base.$allKeys = null;
		base.$decBtn = null;
		// base.$preview === base.$el when o.usePreview is false - fixes #442
		if (o.usePreview) {
			base.$preview.removeData('keyboard');
		}
		base.preview = null;
		base.$preview = null;
		base.$previewCopy = null;
		base.$keyboard.removeData('keyboard');
		base.$keyboard.remove();
		base.$keyboard = [];
		base.isOpen = false;
		base.isCurrent(false);
	};

	base.destroy = function (callback) {
		var index,
			kbcss = $keyboard.css,
			len = base.extensionNamespace.length,
			tmp = [
				kbcss.input,
				kbcss.locked,
				kbcss.placeholder,
				kbcss.noKeyboard,
				kbcss.alwaysOpen,
				o.css.input,
				kbcss.isCurrent
			].join(' ');
		clearTimeout(base.timer);
		clearTimeout(base.timer2);
		if (base.$keyboard.length) {
			base.removeKeyboard();
		}
		base.removeBindings(base.namespace);
		base.removeBindings(base.namespace + 'callbacks');
		for (index = 0; index < len; index++) {
			base.removeBindings(base.extensionNamespace[index]);
		}
		base.el.active = false;

		base.$el
			.removeClass(tmp)
			.removeAttr('aria-haspopup')
			.removeAttr('role')
			.removeData('keyboard');
		base = null;

		if (typeof callback === 'function') {
			callback();
		}
	};

	// Run initializer
	base.init();

	}; // end $.keyboard definition

	// event.which & ASCII values
	$keyboard.keyCodes = {
		backSpace: 8,
		tab: 9,
		enter: 13,
		capsLock: 20,
		escape: 27,
		space: 32,
		pageUp: 33,
		pageDown: 34,
		end: 35,
		home: 36,
		left: 37,
		up: 38,
		right: 39,
		down: 40,
		insert: 45,
		delete: 46,
		// event.which keyCodes (uppercase letters)
		A: 65,
		Z: 90,
		V: 86,
		C: 67,
		X: 88,

		// ASCII lowercase a & z
		a: 97,
		z: 122
	};

	$keyboard.css = {
		// keyboard id suffix
		idSuffix: '_keyboard',
		// element class names
		input: 'ui-keyboard-input',
		inputClone: 'ui-keyboard-preview-clone',
		wrapper: 'ui-keyboard-preview-wrapper',
		preview: 'ui-keyboard-preview',
		keyboard: 'ui-keyboard',
		keySet: 'ui-keyboard-keyset',
		keyButton: 'ui-keyboard-button',
		keyWide: 'ui-keyboard-widekey',
		keyPrefix: 'ui-keyboard-',
		keyText: 'ui-keyboard-text', // span with button text
		keyHasActive: 'ui-keyboard-hasactivestate',
		keyAction: 'ui-keyboard-actionkey',
		keySpacer: 'ui-keyboard-spacer', // empty keys
		keyToggle: 'ui-keyboard-toggle',
		keyDisabled: 'ui-keyboard-disabled',
		// states
		locked: 'ui-keyboard-lockedinput',
		alwaysOpen: 'ui-keyboard-always-open',
		noKeyboard: 'ui-keyboard-nokeyboard',
		placeholder: 'ui-keyboard-placeholder',
		hasFocus: 'ui-keyboard-has-focus',
		isCurrent: 'ui-keyboard-input-current',
		// validation & autoaccept
		inputValid: 'ui-keyboard-valid-input',
		inputInvalid: 'ui-keyboard-invalid-input',
		inputAutoAccepted: 'ui-keyboard-autoaccepted',
		endRow: 'ui-keyboard-button-endrow' // class added to <br>
	};

	$keyboard.events = {
		// keyboard events
		kbChange: 'keyboardChange',
		kbBeforeClose: 'beforeClose',
		kbBeforeVisible: 'beforeVisible',
		kbVisible: 'visible',
		kbInit: 'initialized',
		kbInactive: 'inactive',
		kbHidden: 'hidden',
		kbRepeater: 'repeater',
		kbKeysetChange: 'keysetChange',
		// input events
		inputAccepted: 'accepted',
		inputCanceled: 'canceled',
		inputChange: 'change',
		inputRestricted: 'restricted'
	};

	// Action key function list
	$keyboard.keyaction = {
		accept: function (base) {
			base.close(true); // same as base.accept();
			return false; // return false prevents further processing
		},
		alt: function (base) {
			base.altActive = !base.altActive;
			base.showSet();
		},
		bksp: function (base) {
			// the script looks for the '\b' string and initiates a backspace
			base.insertText('\b');
		},
		cancel: function (base) {
			base.close();
			return false; // return false prevents further processing
		},
		clear: function (base) {
			base.$preview.val('');
			if (base.$decBtn.length) {
				base.checkDecimal();
			}
		},
		combo: function (base) {
			var o = base.options,
				c = !o.useCombos,
				$combo = base.$keyboard.find('.' + $keyboard.css.keyPrefix + 'combo');
			o.useCombos = c;
			$combo
				.toggleClass(o.css.buttonActive, c)
				// update combo key state
				.attr('title', $combo.attr('data-title') + ' (' + o.display[c ? 'active' : 'disabled'] + ')');
			if (c) {
				base.checkCombos();
			}
			return false;
		},
		dec: function (base) {
			base.insertText((base.decimal) ? '.' : ',');
		},
		del: function (base) {
			// the script looks for the '{d}' string and initiates a delete
			base.insertText('{d}');
		},
		// resets to base keyset (deprecated because "default" is a reserved word)
		'default': function (base) {
			base.shiftActive = base.altActive = base.metaActive = false;
			base.showSet();
		},
		// el is the pressed key (button) object; it is null when the real keyboard enter is pressed
		enter: function (base, el, e) {
			var tag = base.el.nodeName,
				o = base.options;
			// shift+enter in textareas
			if (e.shiftKey) {
				// textarea & input - enterMod + shift + enter = accept, then go to prev;
				//  base.switchInput(goToNext, autoAccept)
				// textarea & input - shift + enter = accept (no navigation)
				return (o.enterNavigation) ? base.switchInput(!e[o.enterMod], true) : base.close(true);
			}
			// input only - enterMod + enter to navigate
			if (o.enterNavigation && (tag !== 'TEXTAREA' || e[o.enterMod])) {
				return base.switchInput(!e[o.enterMod], o.autoAccept ? 'true' : false);
			}
			// pressing virtual enter button inside of a textarea - add a carriage return
			// e.target is span when clicking on text and button at other times
			if (tag === 'TEXTAREA' && $(e.target).closest('button').length) {
				// IE8 fix (space + \n) - fixes #71 thanks Blookie!
				base.insertText(($keyboard.msie ? ' ' : '') + '\n');
			}
		},
		// caps lock key
		lock: function (base) {
			base.last.keyset[0] = base.shiftActive = base.capsLock = !base.capsLock;
			base.showSet();
		},
		left: function (base) {
			var p = $keyboard.caret(base.$preview);
			if (p.start - 1 >= 0) {
				// move both start and end of caret (prevents text selection) & save caret position
				base.last.start = base.last.end = p.start - 1;
				$keyboard.caret(base.$preview, base.last);
				base.setScroll();
			}
		},
		meta: function (base, el) {
			var $el = $(el);
			base.metaActive = !$el.hasClass(base.options.css.buttonActive);
			base.showSet($el.attr('data-name'));
		},
		next: function (base) {
			base.switchInput(true, base.options.autoAccept);
			return false;
		},
		// same as 'default' - resets to base keyset
		normal: function (base) {
			base.shiftActive = base.altActive = base.metaActive = false;
			base.showSet();
		},
		prev: function (base) {
			base.switchInput(false, base.options.autoAccept);
			return false;
		},
		right: function (base) {
			var p = $keyboard.caret(base.$preview);
			if (p.start + 1 <= base.$preview.val().length) {
				// move both start and end of caret (prevents text selection) && save caret position
				base.last.start = base.last.end = p.start + 1;
				$keyboard.caret(base.$preview, base.last);
				base.setScroll();
			}
		},
		shift: function (base) {
			base.last.keyset[0] = base.shiftActive = !base.shiftActive;
			base.showSet();
		},
		sign: function (base) {
			if (/^\-?\d*\.?\d*$/.test(base.$preview.val())) {
				base.$preview.val((base.$preview.val() * -1));
			}
		},
		space: function (base) {
			base.insertText(' ');
		},
		tab: function (base) {
			var tag = base.el.nodeName,
				o = base.options;
			if (tag === 'INPUT') {
				if (o.tabNavigation) {
					return base.switchInput(!base.shiftActive, true);
				} else {
					// ignore tab key in input
					return false;
				}
			}
			base.insertText('\t');
		},
		toggle: function (base) {
			base.enabled = !base.enabled;
			base.toggle();
		},
		// *** Special action keys: NBSP & zero-width characters ***
		// Non-breaking space
		NBSP: '\u00a0',
		// zero width space
		ZWSP: '\u200b',
		// Zero width non-joiner
		ZWNJ: '\u200c',
		// Zero width joiner
		ZWJ: '\u200d',
		// Left-to-right Mark
		LRM: '\u200e',
		// Right-to-left Mark
		RLM: '\u200f'
	};

	// Default keyboard layouts
	$keyboard.builtLayouts = {};
	$keyboard.layouts = {
		'alpha': {
			'normal': [
				'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
				'{tab} a b c d e f g h i j [ ] \\',
				'k l m n o p q r s ; \' {enter}',
				'{shift} t u v w x y z , . / {shift}',
				'{accept} {space} {cancel}'
			],
			'shift': [
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
				'{tab} A B C D E F G H I J { } |',
				'K L M N O P Q R S : " {enter}',
				'{shift} T U V W X Y Z < > ? {shift}',
				'{accept} {space} {cancel}'
			]
		},
		'qwerty': {
			'normal': [
				'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
				'{tab} q w e r t y u i o p [ ] \\',
				'a s d f g h j k l ; \' {enter}',
				'{shift} z x c v b n m , . / {shift}',
				'{accept} {space} {cancel}'
			],
			'shift': [
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
				'{tab} Q W E R T Y U I O P { } |',
				'A S D F G H J K L : " {enter}',
				'{shift} Z X C V B N M < > ? {shift}',
				'{accept} {space} {cancel}'
			]
		},
		'international': {
			'normal': [
				'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
				'{tab} q w e r t y u i o p [ ] \\',
				'a s d f g h j k l ; \' {enter}',
				'{shift} z x c v b n m , . / {shift}',
				'{accept} {alt} {space} {alt} {cancel}'
			],
			'shift': [
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
				'{tab} Q W E R T Y U I O P { } |',
				'A S D F G H J K L : " {enter}',
				'{shift} Z X C V B N M < > ? {shift}',
				'{accept} {alt} {space} {alt} {cancel}'
			],
			'alt': [
				'~ \u00a1 \u00b2 \u00b3 \u00a4 \u20ac \u00bc \u00bd \u00be \u2018 \u2019 \u00a5 \u00d7 {bksp}',
				'{tab} \u00e4 \u00e5 \u00e9 \u00ae \u00fe \u00fc \u00fa \u00ed \u00f3 \u00f6 \u00ab \u00bb \u00ac',
				'\u00e1 \u00df \u00f0 f g h j k \u00f8 \u00b6 \u00b4 {enter}',
				'{shift} \u00e6 x \u00a9 v b \u00f1 \u00b5 \u00e7 > \u00bf {shift}',
				'{accept} {alt} {space} {alt} {cancel}'
			],
			'alt-shift': [
				'~ \u00b9 \u00b2 \u00b3 \u00a3 \u20ac \u00bc \u00bd \u00be \u2018 \u2019 \u00a5 \u00f7 {bksp}',
				'{tab} \u00c4 \u00c5 \u00c9 \u00ae \u00de \u00dc \u00da \u00cd \u00d3 \u00d6 \u00ab \u00bb \u00a6',
				'\u00c4 \u00a7 \u00d0 F G H J K \u00d8 \u00b0 \u00a8 {enter}',
				'{shift} \u00c6 X \u00a2 V B \u00d1 \u00b5 \u00c7 . \u00bf {shift}',
				'{accept} {alt} {space} {alt} {cancel}'
			]
		},
		'colemak': {
			'normal': [
				'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
				'{tab} q w f p g j l u y ; [ ] \\',
				'{bksp} a r s t d h n e i o \' {enter}',
				'{shift} z x c v b k m , . / {shift}',
				'{accept} {space} {cancel}'
			],
			'shift': [
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
				'{tab} Q W F P G J L U Y : { } |',
				'{bksp} A R S T D H N E I O " {enter}',
				'{shift} Z X C V B K M < > ? {shift}',
				'{accept} {space} {cancel}'
			]
		},
		'dvorak': {
			'normal': [
				'` 1 2 3 4 5 6 7 8 9 0 [ ] {bksp}',
				'{tab} \' , . p y f g c r l / = \\',
				'a o e u i d h t n s - {enter}',
				'{shift} ; q j k x b m w v z {shift}',
				'{accept} {space} {cancel}'
			],
			'shift': [
				'~ ! @ # $ % ^ & * ( ) { } {bksp}',
				'{tab} " < > P Y F G C R L ? + |',
				'A O E U I D H T N S _ {enter}',
				'{shift} : Q J K X B M W V Z {shift}',
				'{accept} {space} {cancel}'
			]
		},
		'num': {
			'normal': [
				'= ( ) {b}',
				'{clear} / * -',
				'7 8 9 +',
				'4 5 6 {sign}',
				'1 2 3 %',
				'0 {dec} {a} {c}'
			]
		}
	};

	$keyboard.language = {
		en: {
			display: {
				// check mark - same action as accept
				'a': '\u2714:Accept (Shift+Enter)',
				'accept': 'Accept:Accept (Shift+Enter)',
				// other alternatives \u2311
				'alt': 'Alt:\u2325 AltGr',
				// Left arrow (same as &larr;)
				'b': '\u232b:Backspace',
				'bksp': 'Bksp:Backspace',
				// big X, close - same action as cancel
				'c': '\u2716:Cancel (Esc)',
				'cancel': 'Cancel:Cancel (Esc)',
				// clear num pad
				'clear': 'C:Clear',
				'combo': '\u00f6:Toggle Combo Keys',
				// decimal point for num pad (optional), change '.' to ',' for European format
				'dec': '.:Decimal',
				// down, then left arrow - enter symbol
				'e': '\u23ce:Enter',
				'empty': '\u00a0',
				'enter': 'Enter:Enter \u23ce',
				// left arrow (move caret)
				'left': '\u2190',
				// caps lock
				'lock': 'Lock:\u21ea Caps Lock',
				'next': 'Next \u21e8',
				'prev': '\u21e6 Prev',
				// right arrow (move caret)
				'right': '\u2192',
				// thick hollow up arrow
				's': '\u21e7:Shift',
				'shift': 'Shift:Shift',
				// +/- sign for num pad
				'sign': '\u00b1:Change Sign',
				'space': '\u00a0:Space',
				// right arrow to bar (used since this virtual keyboard works with one directional tabs)
				't': '\u21e5:Tab',
				// \u21b9 is the true tab symbol (left & right arrows)
				'tab': '\u21e5 Tab:Tab',
				// replaced by an image
				'toggle': ' ',

				// added to titles of keys
				// accept key status when acceptValid:true
				'valid': 'valid',
				'invalid': 'invalid',
				// combo key states
				'active': 'active',
				'disabled': 'disabled'
			},

			// Message added to the key title while hovering, if the mousewheel plugin exists
			wheelMessage: 'Use mousewheel to see other keys',

			comboRegex: /([`\'~\^\"ao])([a-z])/mig,
			combos: {
				// grave
				'`': { a: '\u00e0', A: '\u00c0', e: '\u00e8', E: '\u00c8', i: '\u00ec', I: '\u00cc', o: '\u00f2',
						O: '\u00d2', u: '\u00f9', U: '\u00d9', y: '\u1ef3', Y: '\u1ef2' },
				// acute & cedilla
				"'": { a: '\u00e1', A: '\u00c1', e: '\u00e9', E: '\u00c9', i: '\u00ed', I: '\u00cd', o: '\u00f3',
						O: '\u00d3', u: '\u00fa', U: '\u00da', y: '\u00fd', Y: '\u00dd' },
				// umlaut/trema
				'"': { a: '\u00e4', A: '\u00c4', e: '\u00eb', E: '\u00cb', i: '\u00ef', I: '\u00cf', o: '\u00f6',
						O: '\u00d6', u: '\u00fc', U: '\u00dc', y: '\u00ff', Y: '\u0178' },
				// circumflex
				'^': { a: '\u00e2', A: '\u00c2', e: '\u00ea', E: '\u00ca', i: '\u00ee', I: '\u00ce', o: '\u00f4',
						O: '\u00d4', u: '\u00fb', U: '\u00db', y: '\u0177', Y: '\u0176' },
				// tilde
				'~': { a: '\u00e3', A: '\u00c3', e: '\u1ebd', E: '\u1ebc', i: '\u0129', I: '\u0128', o: '\u00f5',
						O: '\u00d5', u: '\u0169', U: '\u0168', y: '\u1ef9', Y: '\u1ef8', n: '\u00f1', N: '\u00d1' }
			}
		}
	};

	$keyboard.defaultOptions = {
		// set this to ISO 639-1 language code to override language set by the layout
		// http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		// language defaults to 'en' if not found
		language: null,
		rtl: false,

		// *** choose layout & positioning ***
		layout: 'qwerty',
		customLayout: null,

		position: {
			// optional - null (attach to input/textarea) or a jQuery object (attach elsewhere)
			of: null,
			my: 'center top',
			at: 'center top',
			// used when 'usePreview' is false (centers the keyboard at the bottom of the input/textarea)
			at2: 'center bottom'
		},

		// allow jQuery position utility to reposition the keyboard on window resize
		reposition: true,

		// preview added above keyboard if true, original input/textarea used if false
		usePreview: true,

		// if true, the keyboard will always be visible
		alwaysOpen: false,

		// give the preview initial focus when the keyboard becomes visible
		initialFocus: true,

		// avoid changing the focus (hardware keyboard probably won't work)
		noFocus: false,

		// if true, keyboard will remain open even if the input loses focus, but closes on escape
		// or when another keyboard opens.
		stayOpen: false,

		// Prevents the keyboard from closing when the user clicks or presses outside the keyboard
		// the `autoAccept` option must also be set to true when this option is true or changes are lost
		userClosed: false,

		// if true, keyboard will not close if you press escape.
		ignoreEsc: false,

		// if true, keyboard will only closed on click event instead of mousedown and touchstart
		closeByClickEvent: false,

		css: {
			// input & preview
			input: 'ui-widget-content ui-corner-all',
			// keyboard container
			container: 'ui-widget-content ui-widget ui-corner-all ui-helper-clearfix',
			// keyboard container extra class (same as container, but separate)
			popup: '',
			// default state
			buttonDefault: 'ui-state-default ui-corner-all',
			// hovered button
			buttonHover: 'ui-state-hover',
			// Action keys (e.g. Accept, Cancel, Tab, etc); this replaces 'actionClass' option
			buttonAction: 'ui-state-active',
			// Active keys (e.g. shift down, meta keyset active, combo keys active)
			buttonActive: 'ui-state-active',
			// used when disabling the decimal button {dec} when a decimal exists in the input area
			buttonDisabled: 'ui-state-disabled',
			buttonEmpty: 'ui-keyboard-empty'
		},

		// *** Useability ***
		// Auto-accept content when clicking outside the keyboard (popup will close)
		autoAccept: false,
		// Auto-accept content even if the user presses escape (only works if `autoAccept` is `true`)
		autoAcceptOnEsc: false,

		// Prevents direct input in the preview window when true
		lockInput: false,

		// Prevent keys not in the displayed keyboard from being typed in
		restrictInput: false,
		// Additional allowed characters while restrictInput is true
		restrictInclude: '', // e.g. 'a b foo \ud83d\ude38'

		// Check input against validate function, if valid the accept button gets a class name of
		// 'ui-keyboard-valid-input'. If invalid, the accept button gets a class name of
		// 'ui-keyboard-invalid-input'
		acceptValid: false,
		// Auto-accept when input is valid; requires `acceptValid` set `true` & validate callback
		autoAcceptOnValid: false,

		// if acceptValid is true & the validate function returns a false, this option will cancel
		// a keyboard close only after the accept button is pressed
		cancelClose: true,

		// tab to go to next, shift-tab for previous (default behavior)
		tabNavigation: false,

		// enter for next input; shift+enter accepts content & goes to next
		// shift + 'enterMod' + enter ('enterMod' is the alt as set below) will accept content and go
		// to previous in a textarea
		enterNavigation: false,
		// mod key options: 'ctrlKey', 'shiftKey', 'altKey', 'metaKey' (MAC only)
		enterMod: 'altKey', // alt-enter to go to previous; shift-alt-enter to accept & go to previous

		// if true, the next button will stop on the last keyboard input/textarea; prev button stops at first
		// if false, the next button will wrap to target the first input/textarea; prev will go to the last
		stopAtEnd: true,

		// Set this to append the keyboard after the input/textarea (appended to the input/textarea parent).
		// This option works best when the input container doesn't have a set width & when the 'tabNavigation'
		// option is true.
		appendLocally: false,
		// When appendLocally is false, the keyboard will be appended to this object
		appendTo: 'body',

		// If false, the shift key will remain active until the next key is (mouse) clicked on; if true it will
		// stay active until pressed again
		stickyShift: true,

		// Prevent pasting content into the area
		preventPaste: false,

		// caret placed at the end of any text when keyboard becomes visible
		caretToEnd: false,

		// caret stays this many pixels from the edge of the input while scrolling left/right;
		// use "c" or "center" to center the caret while scrolling
		scrollAdjustment: 10,

		// Set the max number of characters allowed in the input, setting it to false disables this option
		maxLength: false,
		// allow inserting characters @ caret when maxLength is set
		maxInsert: true,

		// Mouse repeat delay - when clicking/touching a virtual keyboard key, after this delay the key will
		// start repeating
		repeatDelay: 500,

		// Mouse repeat rate - after the repeatDelay, this is the rate (characters per second) at which the
		// key is repeated Added to simulate holding down a real keyboard key and having it repeat. I haven't
		// calculated the upper limit of this rate, but it is limited to how fast the javascript can process
		// the keys. And for me, in Firefox, it's around 20.
		repeatRate: 20,

		// resets the keyboard to the default keyset when visible
		resetDefault: true,

		// Event (namespaced) on the input to reveal the keyboard. To disable it, just set it to ''.
		openOn: 'focus',

		// Event (namepaced) for when the character is added to the input (clicking on the keyboard)
		keyBinding: 'mousedown touchstart',

		// enable/disable mousewheel functionality
		// enabling still depends on the mousewheel plugin
		useWheel: true,

		// combos (emulate dead keys : http://en.wikipedia.org/wiki/Keyboard_layout#US-International)
		// if user inputs `a the script converts it to à, ^o becomes ô, etc.
		useCombos: true,

		/*
			// *** Methods ***
			// commenting these out to reduce the size of the minified version
			// Callbacks - attach a function to any of these callbacks as desired
			initialized   : function(e, keyboard, el) {},
			beforeVisible : function(e, keyboard, el) {},
			visible       : function(e, keyboard, el) {},
			beforeInsert  : function(e, keyboard, el, textToAdd) { return textToAdd; },
			change        : function(e, keyboard, el) {},
			beforeClose   : function(e, keyboard, el, accepted) {},
			accepted      : function(e, keyboard, el) {},
			canceled      : function(e, keyboard, el) {},
			restricted    : function(e, keyboard, el) {},
			hidden        : function(e, keyboard, el) {},
			// called instead of base.switchInput
			switchInput   : function(keyboard, goToNext, isAccepted) {},
			// used if you want to create a custom layout or modify the built-in keyboard
			create        : function(keyboard) { return keyboard.buildKeyboard(); },

			// build key callback
			buildKey : function( keyboard, data ) {
				/ *
				data = {
				// READ ONLY
				isAction : [boolean] true if key is an action key
				name     : [string]  key class name suffix ( prefix = 'ui-keyboard-' );
				                     may include decimal ascii value of character
				value    : [string]  text inserted (non-action keys)
				title    : [string]  title attribute of key
				action   : [string]  keyaction name
				html     : [string]  HTML of the key; it includes a <span> wrapping the text
				// use to modify key HTML
				$key     : [object]  jQuery selector of key which is already appended to keyboard
				}
				* /
				return data;
			},
		*/

		// this callback is called, if the acceptValid is true, and just before the 'beforeClose' to check
		// the value if the value is valid, return true and the keyboard will continue as it should
		// (close if not always open, etc). If the value is not valid, return false and clear the keyboard
		// value ( like this "keyboard.$preview.val('');" ), if desired. The validate function is called after
		// each input, the 'isClosing' value will be false; when the accept button is clicked,
		// 'isClosing' is true
		validate: function (keyboard, value, isClosing) {
			return true;
		}

	};

	// for checking combos
	$keyboard.comboRegex = /([`\'~\^\"ao])([a-z])/mig;

	// store current keyboard element; used by base.isCurrent()
	$keyboard.currentKeyboard = '';

	$('<!--[if lte IE 8]><script>jQuery("body").addClass("oldie");</script><![endif]--><!--[if IE]>' +
			'<script>jQuery("body").addClass("ie");</script><![endif]-->')
		.appendTo('body')
		.remove();
	$keyboard.msie = $('body').hasClass('oldie'); // Old IE flag, used for caret positioning
	$keyboard.allie = $('body').hasClass('ie');

	$keyboard.watermark = (typeof (document.createElement('input').placeholder) !== 'undefined');

	$keyboard.checkCaretSupport = function () {
		if (typeof $keyboard.checkCaret !== 'boolean') {
			// Check if caret position is saved when input is hidden or loses focus
			// (*cough* all versions of IE and I think Opera has/had an issue as well
			var $temp = $('<div style="height:0px;width:0px;overflow:hidden;position:fixed;top:0;left:-100px;">' +
				'<input type="text" value="testing"/></div>').prependTo('body'); // stop page scrolling
			$keyboard.caret($temp.find('input'), 3, 3);
			// Also save caret position of the input if it is locked
			$keyboard.checkCaret = $keyboard.caret($temp.find('input').hide().show()).start !== 3;
			$temp.remove();
		}
		return $keyboard.checkCaret;
	};

	$keyboard.caret = function ($el, param1, param2) {
		if (!$el || !$el.length || $el.is(':hidden') || $el.css('visibility') === 'hidden') {
			return {};
		}
		var start, end, txt, pos,
			kb = $el.data('keyboard'),
			noFocus = kb && kb.options.noFocus;
		if (!noFocus) {
			$el.focus();
		}
		// set caret position
		if (typeof param1 !== 'undefined') {
			// allow setting caret using ( $el, { start: x, end: y } )
			if (typeof param1 === 'object' && 'start' in param1 && 'end' in param1) {
				start = param1.start;
				end = param1.end;
			} else if (typeof param2 === 'undefined') {
				param2 = param1; // set caret using start position
			}
			// set caret using ( $el, start, end );
			if (typeof param1 === 'number' && typeof param2 === 'number') {
				start = param1;
				end = param2;
			} else if (param1 === 'start') {
				start = end = 0;
			} else if (typeof param1 === 'string') {
				// unknown string setting, move caret to end
				start = end = $el.val().length;
			}

			// *** SET CARET POSITION ***
			// modify the line below to adapt to other caret plugins
			return $el.caret(start, end, noFocus);
		}
		// *** GET CARET POSITION ***
		// modify the line below to adapt to other caret plugins
		pos = $el.caret();
		start = pos.start;
		end = pos.end;

		// *** utilities ***
		txt = ($el[0].value || $el.text() || '');
		return {
			start: start,
			end: end,
			// return selected text
			text: txt.substring(start, end),
			// return a replace selected string method
			replaceStr: function (str) {
				return txt.substring(0, start) + str + txt.substring(end, txt.length);
			}
		};
	};

	$.fn.keyboard = function (options) {
		return this.each(function () {
			if (!$(this).data('keyboard')) {
				/*jshint nonew:false */
				(new $.keyboard(this, options));
			}
		});
	};

	$.fn.getkeyboard = function () {
		return this.data('keyboard');
	};

	/* Copyright (c) 2010 C. F., Wong (<a href="http://cloudgen.w0ng.hk">Cloudgen Examplet Store</a>)
	 * Licensed under the MIT License:
	 * http://www.opensource.org/licenses/mit-license.php
	 * Highly modified from the original
	 */

	$.fn.caret = function (start, end, noFocus) {
		if (typeof this[0] === 'undefined' || this.is(':hidden') || this.css('visibility') === 'hidden') {
			return this;
		}
		var selRange, range, stored_range, txt, val,
			selection = document.selection,
			$el = this,
			el = $el[0],
			sTop = el.scrollTop,
			ss = false,
			supportCaret = true;
		try {
			ss = 'selectionStart' in el;
		} catch (err) {
			supportCaret = false;
		}
		if (supportCaret && typeof start !== 'undefined') {
			if (!/(email|number)/i.test(el.type)) {
				if (ss) {
					el.selectionStart = start;
					el.selectionEnd = end;
				} else {
					selRange = el.createTextRange();
					selRange.collapse(true);
					selRange.moveStart('character', start);
					selRange.moveEnd('character', end - start);
					selRange.select();
				}
			}
			// must be visible or IE8 crashes; IE9 in compatibility mode works fine - issue #56
			if (!noFocus && ($el.is(':visible') || $el.css('visibility') !== 'hidden')) {
				el.focus();
			}
			el.scrollTop = sTop;
			return this;
		} else {
			if (/(email|number)/i.test(el.type)) {
				// fix suggested by raduanastase (https://github.com/Mottie/Keyboard/issues/105#issuecomment-40456535)
				start = end = $el.val().length;
			} else if (ss) {
				start = el.selectionStart;
				end = el.selectionEnd;
			} else if (selection) {
				if (el.nodeName === 'TEXTAREA') {
					val = $el.val();
					range = selection.createRange();
					stored_range = range.duplicate();
					stored_range.moveToElementText(el);
					stored_range.setEndPoint('EndToEnd', range);
					// thanks to the awesome comments in the rangy plugin
					start = stored_range.text.replace(/\r/g, '\n').length;
					end = start + range.text.replace(/\r/g, '\n').length;
				} else {
					val = $el.val().replace(/\r/g, '\n');
					range = selection.createRange().duplicate();
					range.moveEnd('character', val.length);
					start = (range.text === '' ? val.length : val.lastIndexOf(range.text));
					range = selection.createRange().duplicate();
					range.moveStart('character', -val.length);
					end = range.text.length;
				}
			} else {
				// caret positioning not supported
				start = end = (el.value || '').length;
			}
			txt = (el.value || '');
			return {
				start: start,
				end: end,
				text: txt.substring(start, end),
				replace: function (str) {
					return txt.substring(0, start) + str + txt.substring(end, txt.length);
				}
			};
		}
	};

	return $keyboard;

}));

/**
 * Usa jquery UI Keyboard plugin. 
 */
var CHARS = "aabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-_";
var CHARSNUMERODOCUMENO = "aabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
function activadorDeDom(idElemActivador) {
	var jqElemActivador = jQuery("#" + idElemActivador);
	
	// Devuelve un activador.
	return {
		controlar: function(activable) {
			if (jqElemActivador.is(':checkbox')) {
				jqElemActivador.change(function() {
					return (jqElemActivador.is(":checked")) 
							? activable.activar()
							: activable.desactivar();
				});
			} else if (jqElemActivador.is('a')) {
				jqElemActivador.click(function() {
					return activable.activar();
				});
			} else {
				throw "Tipo de elemento no soportado como activador: id=" + idElemActivador; 
			}
		}
	};
}

function tecladoVirtualDeDom(idElemInput) {
	var jqElem = jQuery("#" + idElemInput);
	
	jqElem.keyboard(defaultConfig()).addScramble({
		byRow         : true,     // randomize by row, otherwise randomize all keys
		randomizeOnce : false     // if false, randomize every time the keyboard opens
	});
	jqElem.keyboard(defaultConfig());

	// privada
	var keyboard = jqElem.getkeyboard();
	
	// Devolver un un activable
	return {
		activar: function() {
			keyboard.reveal();
		},
		
		desactivar: function() {
			keyboard.close();
		}
	}
	
	// private
	
	function defaultConfig() {
		return {
			// *** choose layout ***
			layout: 'qwerty',
			
			position: {
				of:null, // optional - null (attach to input/textarea) or a jQuery object (attach elsewhere)
				//my: 'right middle',
			    my : 'center top',
			    at : 'center top',
			    at2: 'center bottom'
				//at2: 'left middle' // used when "usePreview" is false (centers keyboard at bottom of the input/textarea)
			},
			
			// preview added above keyboard if true, original input/textarea used if false
			usePreview: true,
			
			// if true, the keyboard will always be visible
			alwaysOpen: false,
			
			// give the preview initial focus when the keyboard becomes visible
			initialFocus: true,
			
			// if true, keyboard will remain open even if the input loses focus.
			stayOpen: true,
			
			// *** change keyboard language & look ***
			display: {
				'a': '\u2714:Accept (Shift-Enter)', // check mark - same action as accept
				'accept': 'Aceptar:Aceptar (Shift-Enter)',
				'alt': 'AltGr:Alternate Graphemes',
				'b': '\u2190:Backspace',    // Left arrow (same as &larr;)
				'bksp': 'Bksp:Backspace',
				'c': '\u2716:Cancel (Esc)', // big X, close - same action as cancel
				'cancel': 'Cerrar:Cerrar (Esc)',
				'clear': 'C:Clear',             // clear num pad
				'combo': '\u00f6:Toggle Combo Keys',
				'dec': '.:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
				'e': '\u21b5:Enter',        // down, then left arrow - enter symbol
				'enter': 'Enter:Enter',
				'lock': '\u21ea Lock:Caps Lock', // caps lock
				'next': 'Next',
				'prev': 'Prev',
				's': '\u21e7:Shift',        // thick hollow up arrow
				'shift': 'Shift:Shift',
				'sign': '\u00b1:Change Sign',  // +/- sign for num pad
				'space': '&nbsp;:Space',
				't': '\u21e5:Tab', // right arrow to bar (used since this virtual keyboard works with one
							// directional tabs)
				'tab': '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
			},
			
			// Message added to the key title while hovering, if the mousewheel plugin exists
			wheelMessage: 'Use mousewheel to see other keys',
			
			css: {
				input: '', // input & preview
				container: '', // keyboard container
				buttonDefault: '', // default state
				buttonHover: '',  // hovered button
				buttonAction: '', // Action keys (e.g. Accept, Cancel, Tab, etc); replaces "actionClass"
				buttonDisabled: '' // used when disabling the decimal button {dec}
			},
			
			// *** Useability ***
			// Auto-accept content when clicking outside the keyboard (popup will close)
			autoAccept: true,
			
			// Prevents direct input in the preview window when true
			lockInput: false,
			
			// Prevent keys not in the displayed keyboard from being typed in
			restrictInput: false,
			
			// Check input against validate function, if valid the accept button is clickable;
			// if invalid, the accept button is disabled.
			acceptValid: true,
			
			// Use tab to navigate between input fields
			tabNavigation: false,
			
			// press enter (shift-enter in textarea) to go to the next input field
			enterNavigation: true,
			// mod key options: 'ctrlKey', 'shiftKey', 'altKey', 'metaKey' (MAC only)
			enterMod: 'altKey', // alt-enter to go to previous; shift-alt-enter to accept & go to previous
			
			// if true, the next button will stop on the last keyboard input/textarea; prev button stops at first
			// if false, the next button will wrap to target the first input/textarea; prev will go to the last
			stopAtEnd: true,
			
			// Set this to append the keyboard immediately after the input/textarea it is attached to.
			// This option works best when the input container doesn't have a set width and when the
			// "tabNavigation" option is true
			appendLocally: false,
			
			// If false, the shift key will remain active until the next key is (mouse) clicked on;
			// if true it will stay active until pressed again
			stickyShift: true,
			
			// Prevent pasting content into the area
			preventPaste: true,
			
			// Set the max number of characters allowed in the input, setting it to false disables this option
			maxLength: 16,
			
			// Mouse repeat delay - when clicking/touching a virtual keyboard key, after this delay the key
			// will start repeating
			repeatDelay: 500,
			
			// Mouse repeat rate - after the repeatDelay, this is the rate (characters per second) at which the
			// key is repeated. Added to simulate holding down a real keyboard key and having it repeat. I haven't
			// calculated the upper limit of this rate, but it is limited to how fast the javascript can process
			// the keys. And for me, in Firefox, it's around 20.
			repeatRate: 20,
			
			// resets the keyboard to the default keyset when visible
			resetDefault: false,
			
			// Event (namespaced) on the input to reveal the keyboard. To disable it, just set it to ''.
			openOn: '',
			
			// When the character is added to the input
			keyBinding: 'mousedown',
			
			// combos (emulate dead keys: http://en.wikipedia.org/wiki/Keyboard_layout#US-International)
			// if user inputs `a the script converts it to Ã , ^o becomes Ã´, etc.
			useCombos: true,
			
			// *** Methods ***
			// Callbacks - add code inside any of these callback functions as desired
			initialized: function(e, keyboard, el) {},
			visible: function(e, keyboard, el) {
				jqElem.prop("readonly", true);
			},
			change: function(e, keyboard, el) {
			
			},
			beforeClose: function(e, keyboard, el, accepted) {
				jqElem.prop("readonly", false);
			},
			accepted: function(e, keyboard, el) {
			 if(el.type != "password"){
				 if(el.name === "numDocumento"){
						
						try {
							sText = el.value;
							sNewText = "";
							for (i = 0; i < sText.length; i++) {
								if(CHARSNUMERODOCUMENO.indexOf(sText[i]) >=0){
									sNewText+=sText[i];
								}
							}
							el.value = sNewText.trim(); 
						} catch(e){
							//solo para que no falle por esta validacion
						}
				 }else{
				 try {
					sText = el.value;
					sNewText = "";
					for (i = 0; i < sText.length; i++) {
						if(CHARS.indexOf(sText[i]) >=0){
							sNewText+=sText[i];
						}
					}
					el.value = sNewText.trim(); 
				} catch(e){
					//solo para que no falle por esta validacion
				}
			 }
			 }
			},
			canceled: function(e, keyboard, el) {},
			hidden: function(e, keyboard, el) {
				
			},
			
			switchInput: null, // called instead of base.switchInput
			
			// this callback is called just before the "beforeClose" to check the value
			// if the value is valid, return true and the keyboard will continue as it should
			// (close if not always open, etc)
			// if the value is not value, return false and the clear the keyboard value
			// ( like this "keyboard.$preview.val('');" ), if desired
			// The validate function is called after each input, the "isClosing" value will be false;
			// when the accept button is clicked, "isClosing" is true
			validate: function(keyboard, value, isClosing) { return true; }
		};
	}
	
	
}


//MISMO METODO CON PARAMETROS

function tecladoVirtualDeDom(idElemInput, maxLen) {
	var jqElem = jQuery("#" + idElemInput);
	
	jqElem.keyboard(defaultConfig()).addScramble({
		byRow         : true,     // randomize by row, otherwise randomize all keys
		randomizeOnce : false     // if false, randomize every time the keyboard opens
	});
	jqElem.keyboard(defaultConfig());

	// privada
	var keyboard = jqElem.getkeyboard();
	
	// Devolver un un activable
	return {
		activar: function() {
			keyboard.reveal();
		},
		
		desactivar: function() {
			keyboard.close();
		}
	}
	
	// private
	
	function defaultConfig() {
		return {
			// *** choose layout ***
			layout: 'qwerty',
			
			position: {
				of:null, // optional - null (attach to input/textarea) or a jQuery object (attach elsewhere)
				//my: 'right middle',
			    my : 'center top',
			    at : 'center top',
			    at2: 'center bottom'
				//at2: 'left middle' // used when "usePreview" is false (centers keyboard at bottom of the input/textarea)
			},
			
			// preview added above keyboard if true, original input/textarea used if false
			usePreview: true,
			
			// if true, the keyboard will always be visible
			alwaysOpen: false,
			
			// give the preview initial focus when the keyboard becomes visible
			initialFocus: true,
			
			// if true, keyboard will remain open even if the input loses focus.
			stayOpen: true,
			
			// *** change keyboard language & look ***
			display: {
				'a': '\u2714:Accept (Shift-Enter)', // check mark - same action as accept
				'accept': 'Aceptar:Aceptar (Shift-Enter)',
				'alt': 'AltGr:Alternate Graphemes',
				'b': '\u2190:Backspace',    // Left arrow (same as &larr;)
				'bksp': 'Bksp:Backspace',
				'c': '\u2716:Cancel (Esc)', // big X, close - same action as cancel
				'cancel': 'Cerrar:Cerrar (Esc)',
				'clear': 'C:Clear',             // clear num pad
				'combo': '\u00f6:Toggle Combo Keys',
				'dec': '.:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
				'e': '\u21b5:Enter',        // down, then left arrow - enter symbol
				'enter': 'Enter:Enter',
				'lock': '\u21ea Lock:Caps Lock', // caps lock
				'next': 'Next',
				'prev': 'Prev',
				's': '\u21e7:Shift',        // thick hollow up arrow
				'shift': 'Shift:Shift',
				'sign': '\u00b1:Change Sign',  // +/- sign for num pad
				'space': '&nbsp;:Space',
				't': '\u21e5:Tab', // right arrow to bar (used since this virtual keyboard works with one
							// directional tabs)
				'tab': '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
			},
			
			// Message added to the key title while hovering, if the mousewheel plugin exists
			wheelMessage: 'Use mousewheel to see other keys',
			
			css: {
				input: '', // input & preview
				container: '', // keyboard container
				buttonDefault: '', // default state
				buttonHover: '',  // hovered button
				buttonAction: '', // Action keys (e.g. Accept, Cancel, Tab, etc); replaces "actionClass"
				buttonDisabled: '' // used when disabling the decimal button {dec}
			},
			
			// *** Useability ***
			// Auto-accept content when clicking outside the keyboard (popup will close)
			autoAccept: true,
			
			// Prevents direct input in the preview window when true
			lockInput: false,
			
			// Prevent keys not in the displayed keyboard from being typed in
			restrictInput: false,
			
			// Check input against validate function, if valid the accept button is clickable;
			// if invalid, the accept button is disabled.
			acceptValid: true,
			
			// Use tab to navigate between input fields
			tabNavigation: false,
			
			// press enter (shift-enter in textarea) to go to the next input field
			enterNavigation: true,
			// mod key options: 'ctrlKey', 'shiftKey', 'altKey', 'metaKey' (MAC only)
			enterMod: 'altKey', // alt-enter to go to previous; shift-alt-enter to accept & go to previous
			
			// if true, the next button will stop on the last keyboard input/textarea; prev button stops at first
			// if false, the next button will wrap to target the first input/textarea; prev will go to the last
			stopAtEnd: true,
			
			// Set this to append the keyboard immediately after the input/textarea it is attached to.
			// This option works best when the input container doesn't have a set width and when the
			// "tabNavigation" option is true
			appendLocally: false,
			
			// If false, the shift key will remain active until the next key is (mouse) clicked on;
			// if true it will stay active until pressed again
			stickyShift: true,
			
			// Prevent pasting content into the area
			preventPaste: true,
			
			// Set the max number of characters allowed in the input, setting it to false disables this option
			maxLength: maxLen,
			
			// Mouse repeat delay - when clicking/touching a virtual keyboard key, after this delay the key
			// will start repeating
			repeatDelay: 500,
			
			// Mouse repeat rate - after the repeatDelay, this is the rate (characters per second) at which the
			// key is repeated. Added to simulate holding down a real keyboard key and having it repeat. I haven't
			// calculated the upper limit of this rate, but it is limited to how fast the javascript can process
			// the keys. And for me, in Firefox, it's around 20.
			repeatRate: 20,
			
			// resets the keyboard to the default keyset when visible
			resetDefault: false,
			
			// Event (namespaced) on the input to reveal the keyboard. To disable it, just set it to ''.
			openOn: '',
			
			// When the character is added to the input
			keyBinding: 'mousedown',
			
			// combos (emulate dead keys: http://en.wikipedia.org/wiki/Keyboard_layout#US-International)
			// if user inputs `a the script converts it to Ã , ^o becomes Ã´, etc.
			useCombos: true,
			
			// *** Methods ***
			// Callbacks - add code inside any of these callback functions as desired
			initialized: function(e, keyboard, el) {},
			visible: function(e, keyboard, el) {
				jqElem.prop("readonly", true);
			},
			change: function(e, keyboard, el) {
			
			},
			beforeClose: function(e, keyboard, el, accepted) {
				jqElem.prop("readonly", false);
			},
			accepted: function(e, keyboard, el) {
			 if(el.type != "password"){
				 if(el.name === "numDocumento"){
						
						try {
							sText = el.value;
							sNewText = "";
							for (i = 0; i < sText.length; i++) {
								if(CHARSNUMERODOCUMENO.indexOf(sText[i]) >=0){
									sNewText+=sText[i];
								}
							}
							el.value = sNewText.trim(); 
						} catch(e){
							//solo para que no falle por esta validacion
						}
				 }else{
				 try {
					sText = el.value;
					sNewText = "";
					for (i = 0; i < sText.length; i++) {
						if(CHARS.indexOf(sText[i]) >=0){
							sNewText+=sText[i];
						}
					}
					el.value = sNewText.trim(); 
				} catch(e){
					//solo para que no falle por esta validacion
				}
			 }
			 }
			},
			canceled: function(e, keyboard, el) {},
			hidden: function(e, keyboard, el) {
				
			},
			
			switchInput: null, // called instead of base.switchInput
			
			// this callback is called just before the "beforeClose" to check the value
			// if the value is valid, return true and the keyboard will continue as it should
			// (close if not always open, etc)
			// if the value is not value, return false and the clear the keyboard value
			// ( like this "keyboard.$preview.val('');" ), if desired
			// The validate function is called after each input, the "isClosing" value will be false;
			// when the accept button is clicked, "isClosing" is true
			validate: function(keyboard, value, isClosing) { return true; }
		};
	}
	
	
}
/* Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */
/*! Mousewheel version: 3.1.12 * (c) 2014 Brandon Aaron * MIT License */
(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));

/*
 * jQuery UI Virtual Keyboard Scramble Extension v1.6.2 for Keyboard v1.18+ (updated 2/1/2016)
 *
 * By Rob Garrison (aka Mottie & Fudgey)
 * Licensed under the MIT License
 *
 * Use this extension with the Virtual Keyboard to scramble the
 * specified keyboard keys
 *
 * Requires:
 *  jQuery v1.4.4+
 *  Keyboard v1.17.14+ - https://github.com/Mottie/Keyboard
 *
 * Setup:
 *  $('.ui-keyboard-input')
 *   .keyboard(options)
 *   .addScramble();
 *
 *  // or if targeting a specific keyboard
 *  $('#keyboard1')
 *   .keyboard(options) // keyboard plugin
 *   .addScramble();    // this keyboard extension
 *
 */
/*jshint browser:true, jquery:true, unused:false */
/*global require:false, define:false, module:false */
;(function(factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = factory(require('jquery'));
	} else {
		factory(jQuery);
	}
}(function($) {
'use strict';
$.keyboard = $.keyboard || {};

	$.fn.addScramble = function(options) {
		//Set the default values, use comma to separate the settings, example:
		var defaults = {
			targetKeys    : /[a-z\d]/i, // keys to randomize
			byRow         : true,  // randomize by row, otherwise randomize all keys
			byKeySet      : false, // if true, randomize one keyset & duplicate
			randomizeOnce : true,  // if true, randomize only once on keyboard visible
			sameForAll    : false, // use the same scrambled keyboard for all targetted keyboards - not fully implemented!
			init          : null   // function(keyboard){}
		};
		return this.each(function() {
			// make sure a keyboard is attached
			var o,
				base = $(this).data('keyboard'),
				namespace = base.namespace + 'Scramble',
				opts = base.options;

			if (!base || base.scramble_options) { return; }
			o = base.scramble_options = $.extend({}, defaults, options);
			base.extensionNamespace.push( namespace );

			// save create callback
			o.orig_create = opts.create;

			base.scramble_setup = function($keyboard) {
				var $sets, set, $keys, key, index, tmp,
					rowIndex, keyboardmap, map, keyboard, row;
				$sets = $keyboard.find('.' + $.keyboard.css.keySet);
				if ($keyboard.length) {
					if (o.byKeySet) {
						$sets = $sets.eq(0);
					}
					for (set = 0; set < $sets.length; set++) {
						/*jshint loopfunc:true */
						$keys = $sets.eq(set);
						rowIndex = 0;
						row = [];
						map = [];
						keyboardmap = [];
						keyboard = [];
						$keys.children('button, span, br').each(function() {
							if (this.tagName === 'BR') {
								if (o.byRow) {
									row.push(this);
									map.push(false);
									keyboard[rowIndex] = row;
									keyboardmap[rowIndex] = map;
									row = [];
									map = [];
									rowIndex++;
								} else {
									keyboard[rowIndex] = this;
									keyboardmap[rowIndex] = false;
									rowIndex++;
								}
							} else {
								tmp = $(this).attr('data-value') || '';
								tmp = tmp.length === 1 && o.targetKeys.test(tmp) ? tmp : false;
								if (o.byRow) {
									row.push(this);
									map.push (tmp);
								} else {
									keyboard[rowIndex] = this;
									keyboardmap[rowIndex] = tmp;
									rowIndex++;
								}
							}
						});
						// remove original <br> elements
						$keys.find('.' + $.keyboard.css.endRow).remove();
						// re-map keys
						if (!o.byRow) {
							row = base.shuffle( keyboard, keyboardmap );
							for (key = 0; key < row.length; key++) {
								$keys.append(row[key]);
							}
						} else {
							for (index = 0; index < keyboard.length; index++) {
								row = base.shuffle( keyboard[index], keyboardmap[index] );
								for (key = 0; key < row.length; key++) {
									$keys.append(row[key]);
								}
							}
						}
					}
					if (o.byKeySet) {
						$keyboard = base.realign($keyboard);
					}
					return $keyboard;
				}
			};

			// modified from Fisher-Yates shuffle ( http://bost.ocks.org/mike/shuffle/ )
			// to allow not shuffling specifically mapped array elements
			base.shuffle = function(array, map) {
				var swap, random,
					index = array.length;
				// While there remain elements to shuffle...
				while (index > 0) {
					// Pick a remaining element...
					random = Math.floor(Math.random() * index);
					if (map[index - 1] === false) {
						index--;
					}
					// skip elements that are mapped to false
					if (map[index - 1] !== false && map[random] !== false) {
						// And swap it with the current element
						index--;
						swap = array[index];
						array[index] = array[random];
						array[random] = swap;
					}
				}
				return array;
			};

			// make other keysets "line-up" with scrambled keyset
			base.realign = function($keyboard) {
				var selector, typ, pos,
					$sets = $keyboard.find('.' + $.keyboard.css.keySet),
					$orig = $sets.eq(0);
				$sets = $sets.filter(':gt(0)');
				$orig.children().each(function(i, cell) {
					typ = cell.tagName === 'BR';
					pos = $(cell).attr('data-pos');
					/*jshint loopfunc:true */
					$sets.each(function(j, k) {
						selector = typ ? 'br:first' : 'button[data-pos="' + pos + '"]';
						$(k).find(selector).appendTo( k );
					});
				});
				return $keyboard;
			};

			base.setScrambleLayout = function() {
				// scrambled layout already initialized
				if (!/^scrambled/.test(opts.layout)) {
					base.orig_layout = opts.layout;
					var savedLayout = savedLayout || 'scrambled' + Math.round(Math.random() * 10000);
					opts.layout = o.sameForAll ? savedLayout : 'scrambled' + Math.round(Math.random() * 10000);
				}
			};

			// create scrambled keyboard layout
			opts.create = function() {
				var layout = opts.layout;
				$.keyboard.builtLayouts[layout] = {
					mappedKeys   : {},
					acceptedKeys : [],
					$keyboard    : null
				};
				if ( typeof $.keyboard.builtLayouts[base.orig_layout] === 'undefined' ) {
					base.layout = opts.layout = base.orig_layout;
					// build original layout, if not already built, e.g. "qwerty"
					base.buildKeyboard( base.layout, true );
					base.layout = opts.layout = layout;
				}
				// clone, scramble then save layout
				$.keyboard.builtLayouts[layout] = $.extend(true, {}, $.keyboard.builtLayouts[base.orig_layout]);
				if (o.randomizeOnce) {
					$.keyboard.builtLayouts[layout].$keyboard =
						base.scramble_setup( $.keyboard.builtLayouts[base.orig_layout].$keyboard.clone() );
				}
				base.$keyboard = $.keyboard.builtLayouts[layout].$keyboard;
				if ( !o.randomizeOnce ) {
					base.$el
						.unbind($.keyboard.events.kbBeforeVisible + namespace)
						.bind($.keyboard.events.kbBeforeVisible + namespace, function(e, kb) {
							kb.$keyboard = kb.scramble_setup(kb.$keyboard);
						});
				}
				if ( $.isFunction( o.orig_create ) ) {
					o.orig_create( base );
				}
			};

			base.setScrambleLayout();

			// special case when keyboard is set to always be open
			if (opts.alwaysOpen && base.$keyboard.length) {
				setTimeout(function() {
					var built = $.keyboard.builtLayouts;
					base.$keyboard = base.scramble_setup(base.$keyboard);
					base.setScrambleLayout();
					if (typeof built[opts.layout] === 'undefined') {
						built[opts.layout] = {
							mappedKeys   : $.extend({}, built[base.layout].mappedKeys),
							acceptedKeys : $.extend([], built[base.layout].acceptedKeys),
							$keyboard    : base.$keyboard.clone()
						};
					}
					if ($.isFunction(o.init)) {
						o.init(base);
					}
				}, 0);
			} else {
				if ($.isFunction(o.init)) {
					o.init(base);
				}
			}

		});
	};

}));

var MPFingerprint=function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function r(i,o){try{var u=e[i](o),a=u.value}catch(t){return void n(t)}return u.done?void t(a):Promise.resolve(a).then(function(t){r("next",t)},function(t){r("throw",t)})}return r("next")})}}function o(){(0,ae.verifyUUIDInTheLocalStorage)(),(0,ue.checkCookie)()}n(1),n(327);var u=n(328),a=r(u),c=n(334),s=r(c),f=n(335),l=r(f),h=n(336),d=r(h),p=n(337),v=r(p),y=n(338),b=r(y),g=n(339),w=r(g),m=n(340),_=r(m),x=n(341),S=r(x),O=n(342),E=r(O),P=n(343),M=r(P),A=n(344),k=r(A),j=n(345),I=r(j),T=n(346),F=r(T),N=n(347),R=r(N),C=n(348),L=r(C),B=n(349),D=r(B),U=n(350),G=r(U),W=n(351),V=r(W),z=n(352),q=r(z),H=n(353),J=r(H),K=n(354),Y=r(K),X=n(355),$=r(X),Z=n(356),Q=r(Z),tt=n(357),et=r(tt),nt=n(358),rt=r(nt),it=n(359),ot=r(it),ut=n(360),at=r(ut),ct=n(361),st=r(ct),ft=n(362),lt=r(ft),ht=n(363),dt=r(ht),pt=n(364),vt=r(pt),yt=n(365),bt=r(yt),gt=n(366),wt=r(gt),mt=n(367),_t=r(mt),xt=n(368),St=r(xt),Ot=n(369),Et=r(Ot),Pt=n(370),Mt=r(Pt),At=n(371),kt=r(At),jt=n(372),It=r(jt),Tt=n(373),Ft=r(Tt),Nt=n(374),Rt=r(Nt),Ct=n(375),Lt=r(Ct),Bt=n(376),Dt=r(Bt),Ut=n(377),Gt=r(Ut),Wt=n(378),Vt=r(Wt),zt=n(379),qt=r(zt),Ht=n(380),Jt=r(Ht),Kt=n(381),Yt=r(Kt),Xt=n(382),$t=r(Xt),Zt=n(383),Qt=r(Zt),te=n(384),ee=r(te),ne=n(385),re=r(ne),ie=n(386),oe=r(ie),ue=n(387),ae=n(390),ce=n(389);o();var se={Browser:{userAgent:(0,a.default)(),browserName:(0,s.default)(),browserVersion:(0,l.default)(),browserMajor:(0,d.default)(),browserEngineName:(0,v.default)(),browserEngineVersion:(0,b.default)(),osName:(0,w.default)(),osVersion:(0,_.default)(),deviceVendor:(0,S.default)(),deviceModel:(0,E.default)(),deviceType:(0,M.default)(),cpuArchitecture:(0,k.default)(),isPrivateMode:""},General:{fingerprintVersion:"3.1.1",language:(0,R.default)(),colorDepth:(0,L.default)(),deviceMemory:(0,D.default)(),hardwareConcurrency:(0,G.default)(),resolution:(0,V.default)(),availableResolution:(0,q.default)(),timezoneOffset:(0,J.default)(),sessionStorage:(0,Y.default)(),cookieEnabled:(0,$.default)(),localStorage:(0,Q.default)(),indexedDb:(0,et.default)(),cpuClass:(0,rt.default)(),openDatabase:(0,ot.default)(),navigatorPlatform:(0,at.default)(),vendorWebGL:"1",rendererVideo:(0,lt.default)(),timeZone:(0,dt.default)(),zone:(0,bt.default)(),UTC:(0,vt.default)(),ram:(0,wt.default)(),processorCount:(0,_t.default)(),videoInput:"",audio:"",canvas:(0,Mt.default)()},Personalization:{numberPlugins:(0,kt.default)(),numberFonts:(0,It.default)()},Alterations:{adblock:(0,Ft.default)(),hasLiedLanguages:(0,Rt.default)(),hasLiedResolution:(0,Lt.default)(),hasLiedOs:(0,Dt.default)(),hasLiedBrowser:(0,Gt.default)(),touchSupport:(0,Vt.default)()},Network:{publicIp:"",localIp:""},Site:{host:(0,Jt.default)(),hostName:(0,Yt.default)(),href:(0,$t.default)(),origin:(0,Qt.default)(),pathname:(0,ee.default)(),port:(0,re.default)(),protocol:(0,oe.default)()},Identifiers:{cookie:"",localStorageValue:"",unanimity1:(0,ce.sha256)((0,F.default)()+(0,s.default)()+(0,v.default)()+(0,V.default)()+(0,at.default)()+(0,w.default)()+(0,S.default)()+(0,E.default)()+(0,M.default)()),unanimity2:(0,k.default)()+(0,R.default)()+(0,L.default)()+(0,D.default)()+(0,G.default)()+(0,lt.default)()+(0,kt.default)()+(0,It.default)(),unanimity3:(0,ce.sha256)((0,ue.getDataCookie)()+(0,ae.getDataLocalStorage)()),unanimity4:"",unanimity5:""}};t.exports={getData:function(){function t(t,n){return e.apply(this,arguments)}var e=i(regeneratorRuntime.mark(function t(e,n){var r,i,o,u,a,c,s,f,l,h,d,p,v,y,b,g,w,m,_,x;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=se,e===!0?r.Identifiers.cookie=(0,ue.getDataCookie)():r.Identifiers.cookie="Disabled",n===!0?r.Identifiers.localStorageValue=(0,ae.getDataLocalStorage)():r.Identifiers.localStorageValue="Disabled",(0,st.default)()===!0?se.General.vendorWebGL="1":se.General.vendorWebGL="0",t.prev=4,t.next=7,(0,qt.default)();case 7:i=t.sent,r.Network.localIp=i,t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),r.Network.localIp="";case 14:return t.prev=14,t.next=17,(0,Et.default)();case 17:r.General.audio=t.sent,t.next=23;break;case 20:t.prev=20,t.t1=t.catch(14),r.General.audio="0";case 23:return t.prev=23,t.next=26,(0,St.default)();case 26:r.General.videoInput=t.sent,t.next=32;break;case 29:t.prev=29,t.t2=t.catch(23),r.General.videoInput="0";case 32:return r.Identifiers.unanimity2=(0,ce.sha256)(r.Identifiers.unanimity2+r.General.videoInput),r.Identifiers.unanimity4=(0,ce.sha256)(r.General.audio+r.General.canvas),r.Identifiers.unanimity5=(0,ce.sha256)(r.Identifiers.unanimity1+r.Identifiers.unanimity2+r.Identifiers.unanimity4),t.next=37,(0,I.default)();case 37:return o=t.sent,r.Browser.isPrivateMode=o,u=Object.keys(r.Browser).length,a=Object.keys(r.General).length,c=Object.keys(r.Personalization).length,s=Object.keys(r.Alterations).length,f=Object.keys(r.Site).length,l=u+a+c+s+f,h=r.Browser.userAgent.length+r.Browser.browserName.length+r.Browser.browserVersion.length+r.Browser.browserMajor.length+r.Browser.browserEngineName.length+r.Browser.browserEngineVersion.length+r.Browser.osName.length+r.Browser.osVersion.length+r.Browser.deviceVendor.length+r.Browser.deviceModel.length+r.Browser.deviceType.length+r.Browser.cpuArchitecture.length+r.Browser.isPrivateMode.toString().length,d=r.General.language.length+r.General.colorDepth.length+r.General.deviceMemory.length+r.General.hardwareConcurrency.length+r.General.resolution.length+r.General.availableResolution.length+r.General.timezoneOffset.length+r.General.sessionStorage.length+r.General.cookieEnabled.length+r.General.localStorage.length+r.General.indexedDb.length+r.General.cpuClass.length+r.General.openDatabase.length+r.General.navigatorPlatform.length,p=r.Personalization.numberPlugins.toString().length+r.Personalization.numberFonts.toString().length,v=r.Alterations.adblock.toString().length+r.Alterations.hasLiedLanguages.toString().length+r.Alterations.hasLiedResolution.toString().length+r.Alterations.hasLiedOs.toString().length+r.Alterations.hasLiedBrowser.toString().length+r.Alterations.touchSupport.toString().length,y=r.Site.host.length+r.Site.hostName.length+r.Site.href.length+r.Site.origin.length+r.Site.pathname.length+r.Site.port.toString().length+r.Site.protocol.length,b=h+d+p+v+y,g=r.Browser.browserName+r.Browser.osName+r.General.hardwareConcurrency+r.General.resolution+r.Alterations.hasLiedResolution.toString()+r.Alterations.hasLiedOs.toString()+r.Site.host+r.Site.href+r.Identifiers.cookie,w=(0,ce.sha256)(b.toString()).toUpperCase(),m=(0,ce.sha256)(g).toUpperCase(),_=w.substring(0,16)+"."+m.substring(0,16)+"."+l,x=_,r.Identifiers.hash=x,t.abrupt("return",r);case 58:case"end":return t.stop()}},t,this,[[4,11],[14,20],[23,29]])}));return t}(),clean:function(){return console.log("clean function"),"clean function"}}},function(t,e,n){"use strict";function r(t,e,n){t[e]||Object[i](t,e,{writable:!0,configurable:!0,value:n})}if(n(2),n(323),n(324),global._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");global._babelPolyfill=!0;var i="defineProperty";r(String.prototype,"padLeft","".padStart),r(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(t){[][t]&&r(Array,t,Function.call.bind([][t]))})},function(t,e,n){n(3),n(51),n(52),n(53),n(54),n(56),n(59),n(60),n(61),n(62),n(63),n(64),n(65),n(66),n(67),n(69),n(71),n(73),n(75),n(78),n(79),n(80),n(84),n(86),n(88),n(91),n(92),n(93),n(94),n(96),n(97),n(98),n(99),n(100),n(101),n(102),n(104),n(105),n(106),n(108),n(109),n(110),n(112),n(114),n(115),n(116),n(117),n(118),n(119),n(120),n(121),n(122),n(123),n(124),n(125),n(126),n(131),n(132),n(136),n(137),n(138),n(139),n(141),n(142),n(143),n(144),n(145),n(146),n(147),n(148),n(149),n(150),n(151),n(152),n(153),n(154),n(155),n(157),n(158),n(160),n(161),n(167),n(168),n(170),n(171),n(172),n(176),n(177),n(178),n(179),n(180),n(182),n(183),n(184),n(185),n(188),n(190),n(191),n(192),n(194),n(196),n(198),n(199),n(200),n(202),n(203),n(204),n(205),n(216),n(220),n(221),n(223),n(224),n(228),n(229),n(231),n(232),n(233),n(234),n(235),n(236),n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(251),n(252),n(253),n(254),n(255),n(257),n(258),n(259),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(270),n(271),n(273),n(274),n(275),n(276),n(279),n(280),n(282),n(283),n(284),n(285),n(287),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),t.exports=n(9)},function(t,e,n){"use strict";var r=n(4),i=n(5),o=n(6),u=n(8),a=n(18),c=n(22).KEY,s=n(7),f=n(23),l=n(25),h=n(19),d=n(26),p=n(27),v=n(28),y=n(29),b=n(44),g=n(12),w=n(13),m=n(32),_=n(16),x=n(17),S=n(45),O=n(48),E=n(50),P=n(11),M=n(30),A=E.f,k=P.f,j=O.f,I=r.Symbol,T=r.JSON,F=T&&T.stringify,N="prototype",R=d("_hidden"),C=d("toPrimitive"),L={}.propertyIsEnumerable,B=f("symbol-registry"),D=f("symbols"),U=f("op-symbols"),G=Object[N],W="function"==typeof I,V=r.QObject,z=!V||!V[N]||!V[N].findChild,q=o&&s(function(){return 7!=S(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=A(G,e);r&&delete G[e],k(t,e,n),r&&t!==G&&k(G,e,r)}:k,H=function(t){var e=D[t]=S(I[N]);return e._k=t,e},J=W&&"symbol"==typeof I.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof I},K=function(t,e,n){return t===G&&K(U,e,n),g(t),e=_(e,!0),g(n),i(D,e)?(n.enumerable?(i(t,R)&&t[R][e]&&(t[R][e]=!1),n=S(n,{enumerable:x(0,!1)})):(i(t,R)||k(t,R,x(1,{})),t[R][e]=!0),q(t,e,n)):k(t,e,n)},Y=function(t,e){g(t);for(var n,r=y(e=m(e)),i=0,o=r.length;o>i;)K(t,n=r[i++],e[n]);return t},X=function(t,e){return void 0===e?S(t):Y(S(t),e)},$=function(t){var e=L.call(this,t=_(t,!0));return!(this===G&&i(D,t)&&!i(U,t))&&(!(e||!i(this,t)||!i(D,t)||i(this,R)&&this[R][t])||e)},Z=function(t,e){if(t=m(t),e=_(e,!0),t!==G||!i(D,e)||i(U,e)){var n=A(t,e);return!n||!i(D,e)||i(t,R)&&t[R][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=j(m(t)),r=[],o=0;n.length>o;)i(D,e=n[o++])||e==R||e==c||r.push(e);return r},tt=function(t){for(var e,n=t===G,r=j(n?U:m(t)),o=[],u=0;r.length>u;)!i(D,e=r[u++])||n&&!i(G,e)||o.push(D[e]);return o};W||(I=function(){if(this instanceof I)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(n){this===G&&e.call(U,n),i(this,R)&&i(this[R],t)&&(this[R][t]=!1),q(this,t,x(1,n))};return o&&z&&q(G,t,{configurable:!0,set:e}),H(t)},a(I[N],"toString",function(){return this._k}),E.f=Z,P.f=K,n(49).f=O.f=Q,n(43).f=$,n(42).f=tt,o&&!n(24)&&a(G,"propertyIsEnumerable",$,!0),p.f=function(t){return H(d(t))}),u(u.G+u.W+u.F*!W,{Symbol:I});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)d(et[nt++]);for(var rt=M(d.store),it=0;rt.length>it;)v(rt[it++]);u(u.S+u.F*!W,"Symbol",{for:function(t){return i(B,t+="")?B[t]:B[t]=I(t)},keyFor:function(t){if(!J(t))throw TypeError(t+" is not a symbol!");for(var e in B)if(B[e]===t)return e},useSetter:function(){z=!0},useSimple:function(){z=!1}}),u(u.S+u.F*!W,"Object",{create:X,defineProperty:K,defineProperties:Y,getOwnPropertyDescriptor:Z,getOwnPropertyNames:Q,getOwnPropertySymbols:tt}),T&&u(u.S+u.F*(!W||s(function(){var t=I();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=e=r[1],(w(e)||void 0!==t)&&!J(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!J(e))return e}),r[1]=e,F.apply(T,r)}}),I[N][C]||n(10)(I[N],C,I[N].valueOf),l(I,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){t.exports=!n(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(4),i=n(9),o=n(10),u=n(18),a=n(20),c="prototype",s=function(t,e,n){var f,l,h,d,p=t&s.F,v=t&s.G,y=t&s.S,b=t&s.P,g=t&s.B,w=v?r:y?r[e]||(r[e]={}):(r[e]||{})[c],m=v?i:i[e]||(i[e]={}),_=m[c]||(m[c]={});v&&(n=e);for(f in n)l=!p&&w&&void 0!==w[f],h=(l?w:n)[f],d=g&&l?a(h,r):b&&"function"==typeof h?a(Function.call,h):h,w&&u(w,f,h,t&s.U),m[f]!=h&&o(m,f,d),b&&_[f]!=h&&(_[f]=h)};r.core=i,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(11),i=n(17);t.exports=n(6)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(12),i=n(14),o=n(16),u=Object.defineProperty;e.f=n(6)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(13);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(6)&&!n(7)(function(){return 7!=Object.defineProperty(n(15)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(13),i=n(4).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,n){var r=n(13);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(4),i=n(10),o=n(5),u=n(19)("src"),a="toString",c=Function[a],s=(""+c).split(a);n(9).inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,n,a){var c="function"==typeof n;c&&(o(n,"name")||i(n,"name",e)),t[e]!==n&&(c&&(o(n,u)||i(n,u,t[e]?""+t[e]:s.join(String(e)))),t===r?t[e]=n:a?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,a,function(){return"function"==typeof this&&this[u]||c.call(this)})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(21);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(19)("meta"),i=n(13),o=n(5),u=n(11).f,a=0,c=Object.isExtensible||function(){return!0},s=!n(7)(function(){return c(Object.preventExtensions({}))}),f=function(t){u(t,r,{value:{i:"O"+ ++a,w:{}}})},l=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!c(t))return"F";if(!e)return"E";f(t)}return t[r].i},h=function(t,e){if(!o(t,r)){if(!c(t))return!0;if(!e)return!1;f(t)}return t[r].w},d=function(t){return s&&p.NEED&&c(t)&&!o(t,r)&&f(t),t},p=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:h,onFreeze:d}},function(t,e,n){var r=n(9),i=n(4),o="__core-js_shared__",u=i[o]||(i[o]={});(t.exports=function(t,e){return u[t]||(u[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(24)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!1},function(t,e,n){var r=n(11).f,i=n(5),o=n(26)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(23)("wks"),i=n(19),o=n(4).Symbol,u="function"==typeof o,a=t.exports=function(t){return r[t]||(r[t]=u&&o[t]||(u?o:i)("Symbol."+t))};a.store=r},function(t,e,n){e.f=n(26)},function(t,e,n){var r=n(4),i=n(9),o=n(24),u=n(27),a=n(11).f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:u.f(t)})}},function(t,e,n){var r=n(30),i=n(42),o=n(43);t.exports=function(t){var e=r(t),n=i.f;if(n)for(var u,a=n(t),c=o.f,s=0;a.length>s;)c.call(t,u=a[s++])&&e.push(u);return e}},function(t,e,n){var r=n(31),i=n(41);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(5),i=n(32),o=n(36)(!1),u=n(40)("IE_PROTO");t.exports=function(t,e){var n,a=i(t),c=0,s=[];for(n in a)n!=u&&r(a,n)&&s.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~o(s,n)||s.push(n));return s}},function(t,e,n){var r=n(33),i=n(35);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(34);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(32),i=n(37),o=n(39);t.exports=function(t){return function(e,n,u){var a,c=r(e),s=i(c.length),f=o(u,s);if(t&&n!=n){for(;s>f;)if(a=c[f++],a!=a)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(38),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(38),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(23)("keys"),i=n(19);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(34);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(12),i=n(46),o=n(41),u=n(40)("IE_PROTO"),a=function(){},c="prototype",s=function(){var t,e=n(15)("iframe"),r=o.length,i="<",u=">";for(e.style.display="none",n(47).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(i+"script"+u+"document.F=Object"+i+"/script"+u),t.close(),s=t.F;r--;)delete s[c][o[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[c]=r(t),n=new a,a[c]=null,n[u]=t):n=s(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(11),i=n(12),o=n(30);t.exports=n(6)?Object.defineProperties:function(t,e){i(t);for(var n,u=o(e),a=u.length,c=0;a>c;)r.f(t,n=u[c++],e[n]);return t}},function(t,e,n){var r=n(4).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(32),i=n(49).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==o.call(t)?a(t):i(r(t))}},function(t,e,n){var r=n(31),i=n(41).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e,n){var r=n(43),i=n(17),o=n(32),u=n(16),a=n(5),c=n(14),s=Object.getOwnPropertyDescriptor;e.f=n(6)?s:function(t,e){if(t=o(t),e=u(e,!0),c)try{return s(t,e)}catch(t){}if(a(t,e))return i(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(8);r(r.S,"Object",{create:n(45)})},function(t,e,n){var r=n(8);r(r.S+r.F*!n(6),"Object",{defineProperty:n(11).f})},function(t,e,n){var r=n(8);r(r.S+r.F*!n(6),"Object",{defineProperties:n(46)})},function(t,e,n){var r=n(32),i=n(50).f;n(55)("getOwnPropertyDescriptor",function(){return function(t,e){return i(r(t),e)}})},function(t,e,n){var r=n(8),i=n(9),o=n(7);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",u)}},function(t,e,n){var r=n(57),i=n(58);n(55)("getPrototypeOf",function(){return function(t){return i(r(t))}})},function(t,e,n){var r=n(35);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(5),i=n(57),o=n(40)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(57),i=n(30);n(55)("keys",function(){return function(t){return i(r(t))}})},function(t,e,n){n(55)("getOwnPropertyNames",function(){return n(48).f})},function(t,e,n){var r=n(13),i=n(22).onFreeze;n(55)("freeze",function(t){return function(e){return t&&r(e)?t(i(e)):e}})},function(t,e,n){var r=n(13),i=n(22).onFreeze;n(55)("seal",function(t){return function(e){return t&&r(e)?t(i(e)):e}})},function(t,e,n){var r=n(13),i=n(22).onFreeze;n(55)("preventExtensions",function(t){return function(e){return t&&r(e)?t(i(e)):e}})},function(t,e,n){var r=n(13);n(55)("isFrozen",function(t){return function(e){return!r(e)||!!t&&t(e)}})},function(t,e,n){var r=n(13);n(55)("isSealed",function(t){return function(e){return!r(e)||!!t&&t(e)}})},function(t,e,n){var r=n(13);n(55)("isExtensible",function(t){return function(e){return!!r(e)&&(!t||t(e))}})},function(t,e,n){var r=n(8);r(r.S+r.F,"Object",{assign:n(68)})},function(t,e,n){"use strict";var r=n(30),i=n(42),o=n(43),u=n(57),a=n(33),c=Object.assign;t.exports=!c||n(7)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=u(t),c=arguments.length,s=1,f=i.f,l=o.f;c>s;)for(var h,d=a(arguments[s++]),p=f?r(d).concat(f(d)):r(d),v=p.length,y=0;v>y;)l.call(d,h=p[y++])&&(n[h]=d[h]);return n}:c},function(t,e,n){var r=n(8);r(r.S,"Object",{is:n(70)})},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},function(t,e,n){var r=n(8);r(r.S,"Object",{setPrototypeOf:n(72).set})},function(t,e,n){var r=n(13),i=n(12),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(20)(Function.call,n(50).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},function(t,e,n){"use strict";var r=n(74),i={};i[n(26)("toStringTag")]="z",i+""!="[object z]"&&n(18)(Object.prototype,"toString",function(){return"[object "+r(this)+"]"},!0)},function(t,e,n){var r=n(34),i=n(26)("toStringTag"),o="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),i))?n:o?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){var r=n(8);r(r.P,"Function",{bind:n(76)})},function(t,e,n){"use strict";var r=n(21),i=n(13),o=n(77),u=[].slice,a={},c=function(t,e,n){if(!(e in a)){for(var r=[],i=0;i<e;i++)r[i]="a["+i+"]";a[e]=Function("F,a","return new F("+r.join(",")+")")}return a[e](t,n)};t.exports=Function.bind||function(t){var e=r(this),n=u.call(arguments,1),a=function(){var r=n.concat(u.call(arguments));return this instanceof a?c(e,r.length,r):o(e,r,t)};return i(e.prototype)&&(a.prototype=e.prototype),a}},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(11).f,i=Function.prototype,o=/^\s*function ([^ (]*)/,u="name";u in i||n(6)&&r(i,u,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},function(t,e,n){"use strict";var r=n(13),i=n(58),o=n(26)("hasInstance"),u=Function.prototype;o in u||n(11).f(u,o,{value:function(t){if("function"!=typeof this||!r(t))return!1;if(!r(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,e,n){var r=n(8),i=n(81);r(r.G+r.F*(parseInt!=i),{parseInt:i})},function(t,e,n){var r=n(4).parseInt,i=n(82).trim,o=n(83),u=/^[-+]?0[xX]/;t.exports=8!==r(o+"08")||22!==r(o+"0x16")?function(t,e){var n=i(String(t),3);return r(n,e>>>0||(u.test(n)?16:10))}:r},function(t,e,n){var r=n(8),i=n(35),o=n(7),u=n(83),a="["+u+"]",c="​",s=RegExp("^"+a+a+"*"),f=RegExp(a+a+"*$"),l=function(t,e,n){var i={},a=o(function(){return!!u[t]()||c[t]()!=c}),s=i[t]=a?e(h):u[t];n&&(i[n]=s),r(r.P+r.F*a,"String",i)},h=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(s,"")),2&e&&(t=t.replace(f,"")),t};t.exports=l},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){var r=n(8),i=n(85);r(r.G+r.F*(parseFloat!=i),{parseFloat:i})},function(t,e,n){var r=n(4).parseFloat,i=n(82).trim;t.exports=1/r(n(83)+"-0")!==-(1/0)?function(t){var e=i(String(t),3),n=r(e);return 0===n&&"-"==e.charAt(0)?-0:n}:r},function(t,e,n){"use strict";var r=n(4),i=n(5),o=n(34),u=n(87),a=n(16),c=n(7),s=n(49).f,f=n(50).f,l=n(11).f,h=n(82).trim,d="Number",p=r[d],v=p,y=p.prototype,b=o(n(45)(y))==d,g="trim"in String.prototype,w=function(t){var e=a(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():h(e,3);var n,r,i,o=e.charCodeAt(0);if(43===o||45===o){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var u,c=e.slice(2),s=0,f=c.length;s<f;s++)if(u=c.charCodeAt(s),u<48||u>i)return NaN;return parseInt(c,r)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(b?c(function(){y.valueOf.call(n)}):o(n)!=d)?u(new v(w(e)),n,p):w(e)};for(var m,_=n(6)?s(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;_.length>x;x++)i(v,m=_[x])&&!i(p,m)&&l(p,m,f(v,m));p.prototype=y,y.constructor=p,n(18)(r,d,p)}},function(t,e,n){var r=n(13),i=n(72).set;t.exports=function(t,e,n){var o,u=e.constructor;return u!==n&&"function"==typeof u&&(o=u.prototype)!==n.prototype&&r(o)&&i&&i(t,o),t}},function(t,e,n){"use strict";var r=n(8),i=n(38),o=n(89),u=n(90),a=1..toFixed,c=Math.floor,s=[0,0,0,0,0,0],f="Number.toFixed: incorrect invocation!",l="0",h=function(t,e){for(var n=-1,r=e;++n<6;)r+=t*s[n],s[n]=r%1e7,r=c(r/1e7)},d=function(t){for(var e=6,n=0;--e>=0;)n+=s[e],s[e]=c(n/t),n=n%t*1e7},p=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==s[t]){var n=String(s[t]);e=""===e?n:e+u.call(l,7-n.length)+n}return e},v=function(t,e,n){return 0===e?n:e%2===1?v(t,e-1,n*t):v(t*t,e/2,n)},y=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e};r(r.P+r.F*(!!a&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n(7)(function(){a.call({})})),"Number",{toFixed:function(t){var e,n,r,a,c=o(this,f),s=i(t),b="",g=l;if(s<0||s>20)throw RangeError(f);if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(b="-",c=-c),c>1e-21)if(e=y(c*v(2,69,1))-69,n=e<0?c*v(2,-e,1):c/v(2,e,1),n*=4503599627370496,e=52-e,e>0){for(h(0,n),r=s;r>=7;)h(1e7,0),r-=7;for(h(v(10,r,1),0),r=e-1;r>=23;)d(1<<23),r-=23;d(1<<r),h(1,1),d(2),g=p()}else h(0,n),h(1<<-e,0),g=p()+u.call(l,s);return s>0?(a=g.length,g=b+(a<=s?"0."+u.call(l,s-a)+g:g.slice(0,a-s)+"."+g.slice(a-s))):g=b+g,g}})},function(t,e,n){var r=n(34);t.exports=function(t,e){if("number"!=typeof t&&"Number"!=r(t))throw TypeError(e);return+t}},function(t,e,n){"use strict";var r=n(38),i=n(35);t.exports=function(t){var e=String(i(this)),n="",o=r(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(n+=e);return n}},function(t,e,n){"use strict";var r=n(8),i=n(7),o=n(89),u=1..toPrecision;r(r.P+r.F*(i(function(){return"1"!==u.call(1,void 0)})||!i(function(){u.call({})})),"Number",{toPrecision:function(t){var e=o(this,"Number#toPrecision: incorrect invocation!");return void 0===t?u.call(e):u.call(e,t)}})},function(t,e,n){var r=n(8);r(r.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,e,n){var r=n(8),i=n(4).isFinite;r(r.S,"Number",{isFinite:function(t){return"number"==typeof t&&i(t)}})},function(t,e,n){var r=n(8);r(r.S,"Number",{isInteger:n(95)})},function(t,e,n){var r=n(13),i=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&i(t)===t}},function(t,e,n){var r=n(8);r(r.S,"Number",{isNaN:function(t){return t!=t}})},function(t,e,n){var r=n(8),i=n(95),o=Math.abs;r(r.S,"Number",{isSafeInteger:function(t){return i(t)&&o(t)<=9007199254740991}})},function(t,e,n){var r=n(8);r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,e,n){var r=n(8);r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,e,n){var r=n(8),i=n(85);r(r.S+r.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},function(t,e,n){var r=n(8),i=n(81);r(r.S+r.F*(Number.parseInt!=i),"Number",{parseInt:i})},function(t,e,n){var r=n(8),i=n(103),o=Math.sqrt,u=Math.acosh;r(r.S+r.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))&&u(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},function(t,e){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,e,n){function r(t){return isFinite(t=+t)&&0!=t?t<0?-r(-t):Math.log(t+Math.sqrt(t*t+1)):t}var i=n(8),o=Math.asinh;i(i.S+i.F*!(o&&1/o(0)>0),"Math",{asinh:r})},function(t,e,n){var r=n(8),i=Math.atanh;r(r.S+r.F*!(i&&1/i(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,e,n){var r=n(8),i=n(107);r(r.S,"Math",{cbrt:function(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,e,n){var r=n(8);r(r.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,e,n){var r=n(8),i=Math.exp;r(r.S,"Math",{cosh:function(t){return(i(t=+t)+i(-t))/2}})},function(t,e,n){var r=n(8),i=n(111);r(r.S+r.F*(i!=Math.expm1),"Math",{expm1:i})},function(t,e){var n=Math.expm1;t.exports=!n||n(10)>22025.465794806718||n(10)<22025.465794806718||n(-2e-17)!=-2e-17?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:n},function(t,e,n){var r=n(8);r(r.S,"Math",{fround:n(113)})},function(t,e,n){var r=n(107),i=Math.pow,o=i(2,-52),u=i(2,-23),a=i(2,127)*(2-u),c=i(2,-126),s=function(t){return t+1/o-1/o};t.exports=Math.fround||function(t){var e,n,i=Math.abs(t),f=r(t);return i<c?f*s(i/c/u)*c*u:(e=(1+u/o)*i,n=e-(e-i),n>a||n!=n?f*(1/0):f*n)}},function(t,e,n){var r=n(8),i=Math.abs;r(r.S,"Math",{hypot:function(t,e){for(var n,r,o=0,u=0,a=arguments.length,c=0;u<a;)n=i(arguments[u++]),c<n?(r=c/n,o=o*r*r+1,c=n):n>0?(r=n/c,o+=r*r):o+=n;return c===1/0?1/0:c*Math.sqrt(o)}})},function(t,e,n){var r=n(8),i=Math.imul;r(r.S+r.F*n(7)(function(){return i(4294967295,5)!=-5||2!=i.length}),"Math",{imul:function(t,e){var n=65535,r=+t,i=+e,o=n&r,u=n&i;return 0|o*u+((n&r>>>16)*u+o*(n&i>>>16)<<16>>>0)}})},function(t,e,n){
var r=n(8);r(r.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},function(t,e,n){var r=n(8);r(r.S,"Math",{log1p:n(103)})},function(t,e,n){var r=n(8);r(r.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},function(t,e,n){var r=n(8);r(r.S,"Math",{sign:n(107)})},function(t,e,n){var r=n(8),i=n(111),o=Math.exp;r(r.S+r.F*n(7)(function(){return!Math.sinh(-2e-17)!=-2e-17}),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},function(t,e,n){var r=n(8),i=n(111),o=Math.exp;r(r.S,"Math",{tanh:function(t){var e=i(t=+t),n=i(-t);return e==1/0?1:n==1/0?-1:(e-n)/(o(t)+o(-t))}})},function(t,e,n){var r=n(8);r(r.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},function(t,e,n){var r=n(8),i=n(39),o=String.fromCharCode,u=String.fromCodePoint;r(r.S+r.F*(!!u&&1!=u.length),"String",{fromCodePoint:function(t){for(var e,n=[],r=arguments.length,u=0;r>u;){if(e=+arguments[u++],i(e,1114111)!==e)throw RangeError(e+" is not a valid code point");n.push(e<65536?o(e):o(((e-=65536)>>10)+55296,e%1024+56320))}return n.join("")}})},function(t,e,n){var r=n(8),i=n(32),o=n(37);r(r.S,"String",{raw:function(t){for(var e=i(t.raw),n=o(e.length),r=arguments.length,u=[],a=0;n>a;)u.push(String(e[a++])),a<r&&u.push(String(arguments[a]));return u.join("")}})},function(t,e,n){"use strict";n(82)("trim",function(t){return function(){return t(this,3)}})},function(t,e,n){"use strict";var r=n(127)(!0);n(128)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(38),i=n(35);t.exports=function(t){return function(e,n){var o,u,a=String(i(e)),c=r(n),s=a.length;return c<0||c>=s?t?"":void 0:(o=a.charCodeAt(c),o<55296||o>56319||c+1===s||(u=a.charCodeAt(c+1))<56320||u>57343?t?a.charAt(c):o:t?a.slice(c,c+2):(o-55296<<10)+(u-56320)+65536)}}},function(t,e,n){"use strict";var r=n(24),i=n(8),o=n(18),u=n(10),a=n(129),c=n(130),s=n(25),f=n(58),l=n(26)("iterator"),h=!([].keys&&"next"in[].keys()),d="@@iterator",p="keys",v="values",y=function(){return this};t.exports=function(t,e,n,b,g,w,m){c(n,e,b);var _,x,S,O=function(t){if(!h&&t in A)return A[t];switch(t){case p:return function(){return new n(this,t)};case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},E=e+" Iterator",P=g==v,M=!1,A=t.prototype,k=A[l]||A[d]||g&&A[g],j=k||O(g),I=g?P?O("entries"):j:void 0,T="Array"==e?A.entries||k:k;if(T&&(S=f(T.call(new t)),S!==Object.prototype&&S.next&&(s(S,E,!0),r||"function"==typeof S[l]||u(S,l,y))),P&&k&&k.name!==v&&(M=!0,j=function(){return k.call(this)}),r&&!m||!h&&!M&&A[l]||u(A,l,j),a[e]=j,a[E]=y,g)if(_={values:P?j:O(v),keys:w?j:O(p),entries:I},m)for(x in _)x in A||o(A,x,_[x]);else i(i.P+i.F*(h||M),e,_);return _}},function(t,e){t.exports={}},function(t,e,n){"use strict";var r=n(45),i=n(17),o=n(25),u={};n(10)(u,n(26)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){"use strict";var r=n(8),i=n(127)(!1);r(r.P,"String",{codePointAt:function(t){return i(this,t)}})},function(t,e,n){"use strict";var r=n(8),i=n(37),o=n(133),u="endsWith",a=""[u];r(r.P+r.F*n(135)(u),"String",{endsWith:function(t){var e=o(this,t,u),n=arguments.length>1?arguments[1]:void 0,r=i(e.length),c=void 0===n?r:Math.min(i(n),r),s=String(t);return a?a.call(e,s,c):e.slice(c-s.length,c)===s}})},function(t,e,n){var r=n(134),i=n(35);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},function(t,e,n){var r=n(13),i=n(34),o=n(26)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},function(t,e,n){var r=n(26)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(t){}}return!0}},function(t,e,n){"use strict";var r=n(8),i=n(133),o="includes";r(r.P+r.F*n(135)(o),"String",{includes:function(t){return!!~i(this,t,o).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var r=n(8);r(r.P,"String",{repeat:n(90)})},function(t,e,n){"use strict";var r=n(8),i=n(37),o=n(133),u="startsWith",a=""[u];r(r.P+r.F*n(135)(u),"String",{startsWith:function(t){var e=o(this,t,u),n=i(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return a?a.call(e,r,n):e.slice(n,n+r.length)===r}})},function(t,e,n){"use strict";n(140)("anchor",function(t){return function(e){return t(this,"a","name",e)}})},function(t,e,n){var r=n(8),i=n(7),o=n(35),u=/"/g,a=function(t,e,n,r){var i=String(o(t)),a="<"+e;return""!==n&&(a+=" "+n+'="'+String(r).replace(u,"&quot;")+'"'),a+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(a),r(r.P+r.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},function(t,e,n){"use strict";n(140)("big",function(t){return function(){return t(this,"big","","")}})},function(t,e,n){"use strict";n(140)("blink",function(t){return function(){return t(this,"blink","","")}})},function(t,e,n){"use strict";n(140)("bold",function(t){return function(){return t(this,"b","","")}})},function(t,e,n){"use strict";n(140)("fixed",function(t){return function(){return t(this,"tt","","")}})},function(t,e,n){"use strict";n(140)("fontcolor",function(t){return function(e){return t(this,"font","color",e)}})},function(t,e,n){"use strict";n(140)("fontsize",function(t){return function(e){return t(this,"font","size",e)}})},function(t,e,n){"use strict";n(140)("italics",function(t){return function(){return t(this,"i","","")}})},function(t,e,n){"use strict";n(140)("link",function(t){return function(e){return t(this,"a","href",e)}})},function(t,e,n){"use strict";n(140)("small",function(t){return function(){return t(this,"small","","")}})},function(t,e,n){"use strict";n(140)("strike",function(t){return function(){return t(this,"strike","","")}})},function(t,e,n){"use strict";n(140)("sub",function(t){return function(){return t(this,"sub","","")}})},function(t,e,n){"use strict";n(140)("sup",function(t){return function(){return t(this,"sup","","")}})},function(t,e,n){var r=n(8);r(r.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,e,n){"use strict";var r=n(8),i=n(57),o=n(16);r(r.P+r.F*n(7)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function(t){var e=i(this),n=o(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},function(t,e,n){var r=n(8),i=n(156);r(r.P+r.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},function(t,e,n){"use strict";var r=n(7),i=Date.prototype.getTime,o=Date.prototype.toISOString,u=function(t){return t>9?t:"0"+t};t.exports=r(function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))})||!r(function(){o.call(new Date(NaN))})?function(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),n=t.getUTCMilliseconds(),r=e<0?"-":e>9999?"+":"";return r+("00000"+Math.abs(e)).slice(r?-6:-4)+"-"+u(t.getUTCMonth()+1)+"-"+u(t.getUTCDate())+"T"+u(t.getUTCHours())+":"+u(t.getUTCMinutes())+":"+u(t.getUTCSeconds())+"."+(n>99?n:"0"+u(n))+"Z"}:o},function(t,e,n){var r=Date.prototype,i="Invalid Date",o="toString",u=r[o],a=r.getTime;new Date(NaN)+""!=i&&n(18)(r,o,function(){var t=a.call(this);return t===t?u.call(this):i})},function(t,e,n){var r=n(26)("toPrimitive"),i=Date.prototype;r in i||n(10)(i,r,n(159))},function(t,e,n){"use strict";var r=n(12),i=n(16),o="number";t.exports=function(t){if("string"!==t&&t!==o&&"default"!==t)throw TypeError("Incorrect hint");return i(r(this),t!=o)}},function(t,e,n){var r=n(8);r(r.S,"Array",{isArray:n(44)})},function(t,e,n){"use strict";var r=n(20),i=n(8),o=n(57),u=n(162),a=n(163),c=n(37),s=n(164),f=n(165);i(i.S+i.F*!n(166)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,l,h=o(t),d="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,y=void 0!==v,b=0,g=f(h);if(y&&(v=r(v,p>2?arguments[2]:void 0,2)),void 0==g||d==Array&&a(g))for(e=c(h.length),n=new d(e);e>b;b++)s(n,b,y?v(h[b],b):h[b]);else for(l=g.call(h),n=new d;!(i=l.next()).done;b++)s(n,b,y?u(l,v,[i.value,b],!0):i.value);return n.length=b,n}})},function(t,e,n){var r=n(12);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}}},function(t,e,n){var r=n(129),i=n(26)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,e,n){"use strict";var r=n(11),i=n(17);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},function(t,e,n){var r=n(74),i=n(26)("iterator"),o=n(129);t.exports=n(9).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(26)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],u=o[r]();u.next=function(){return{done:n=!0}},o[r]=function(){return u},t(o)}catch(t){}return n}},function(t,e,n){"use strict";var r=n(8),i=n(164);r(r.S+r.F*n(7)(function(){function t(){}return!(Array.of.call(t)instanceof t)}),"Array",{of:function(){for(var t=0,e=arguments.length,n=new("function"==typeof this?this:Array)(e);e>t;)i(n,t,arguments[t++]);return n.length=e,n}})},function(t,e,n){"use strict";var r=n(8),i=n(32),o=[].join;r(r.P+r.F*(n(33)!=Object||!n(169)(o)),"Array",{join:function(t){return o.call(i(this),void 0===t?",":t)}})},function(t,e,n){"use strict";var r=n(7);t.exports=function(t,e){return!!t&&r(function(){e?t.call(null,function(){},1):t.call(null)})}},function(t,e,n){"use strict";var r=n(8),i=n(47),o=n(34),u=n(39),a=n(37),c=[].slice;r(r.P+r.F*n(7)(function(){i&&c.call(i)}),"Array",{slice:function(t,e){var n=a(this.length),r=o(this);if(e=void 0===e?n:e,"Array"==r)return c.call(this,t,e);for(var i=u(t,n),s=u(e,n),f=a(s-i),l=new Array(f),h=0;h<f;h++)l[h]="String"==r?this.charAt(i+h):this[i+h];return l}})},function(t,e,n){"use strict";var r=n(8),i=n(21),o=n(57),u=n(7),a=[].sort,c=[1,2,3];r(r.P+r.F*(u(function(){c.sort(void 0)})||!u(function(){c.sort(null)})||!n(169)(a)),"Array",{sort:function(t){return void 0===t?a.call(o(this)):a.call(o(this),i(t))}})},function(t,e,n){"use strict";var r=n(8),i=n(173)(0),o=n(169)([].forEach,!0);r(r.P+r.F*!o,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},function(t,e,n){var r=n(20),i=n(33),o=n(57),u=n(37),a=n(174);t.exports=function(t,e){var n=1==t,c=2==t,s=3==t,f=4==t,l=6==t,h=5==t||l,d=e||a;return function(e,a,p){for(var v,y,b=o(e),g=i(b),w=r(a,p,3),m=u(g.length),_=0,x=n?d(e,m):c?d(e,0):void 0;m>_;_++)if((h||_ in g)&&(v=g[_],y=w(v,_,b),t))if(n)x[_]=y;else if(y)switch(t){case 3:return!0;case 5:return v;case 6:return _;case 2:x.push(v)}else if(f)return!1;return l?-1:s||f?f:x}}},function(t,e,n){var r=n(175);t.exports=function(t,e){return new(r(t))(e)}},function(t,e,n){var r=n(13),i=n(44),o=n(26)("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&(e=e[o],null===e&&(e=void 0))),void 0===e?Array:e}},function(t,e,n){"use strict";var r=n(8),i=n(173)(1);r(r.P+r.F*!n(169)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(8),i=n(173)(2);r(r.P+r.F*!n(169)([].filter,!0),"Array",{filter:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(8),i=n(173)(3);r(r.P+r.F*!n(169)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(8),i=n(173)(4);r(r.P+r.F*!n(169)([].every,!0),"Array",{every:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(8),i=n(181);r(r.P+r.F*!n(169)([].reduce,!0),"Array",{reduce:function(t){return i(this,t,arguments.length,arguments[1],!1)}})},function(t,e,n){var r=n(21),i=n(57),o=n(33),u=n(37);t.exports=function(t,e,n,a,c){r(e);var s=i(t),f=o(s),l=u(s.length),h=c?l-1:0,d=c?-1:1;if(n<2)for(;;){if(h in f){a=f[h],h+=d;break}if(h+=d,c?h<0:l<=h)throw TypeError("Reduce of empty array with no initial value")}for(;c?h>=0:l>h;h+=d)h in f&&(a=e(a,f[h],h,s));return a}},function(t,e,n){"use strict";var r=n(8),i=n(181);r(r.P+r.F*!n(169)([].reduceRight,!0),"Array",{reduceRight:function(t){return i(this,t,arguments.length,arguments[1],!0)}})},function(t,e,n){"use strict";var r=n(8),i=n(36)(!1),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(u||!n(169)(o)),"Array",{indexOf:function(t){return u?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(8),i=n(32),o=n(38),u=n(37),a=[].lastIndexOf,c=!!a&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(c||!n(169)(a)),"Array",{lastIndexOf:function(t){if(c)return a.apply(this,arguments)||0;var e=i(this),n=u(e.length),r=n-1;for(arguments.length>1&&(r=Math.min(r,o(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in e&&e[r]===t)return r||0;return-1}})},function(t,e,n){var r=n(8);r(r.P,"Array",{copyWithin:n(186)}),n(187)("copyWithin")},function(t,e,n){"use strict";var r=n(57),i=n(39),o=n(37);t.exports=[].copyWithin||function(t,e){var n=r(this),u=o(n.length),a=i(t,u),c=i(e,u),s=arguments.length>2?arguments[2]:void 0,f=Math.min((void 0===s?u:i(s,u))-c,u-a),l=1;for(c<a&&a<c+f&&(l=-1,c+=f-1,a+=f-1);f-- >0;)c in n?n[a]=n[c]:delete n[a],a+=l,c+=l;return n}},function(t,e,n){var r=n(26)("unscopables"),i=Array.prototype;void 0==i[r]&&n(10)(i,r,{}),t.exports=function(t){i[r][t]=!0}},function(t,e,n){var r=n(8);r(r.P,"Array",{fill:n(189)}),n(187)("fill")},function(t,e,n){"use strict";var r=n(57),i=n(39),o=n(37);t.exports=function(t){for(var e=r(this),n=o(e.length),u=arguments.length,a=i(u>1?arguments[1]:void 0,n),c=u>2?arguments[2]:void 0,s=void 0===c?n:i(c,n);s>a;)e[a++]=t;return e}},function(t,e,n){"use strict";var r=n(8),i=n(173)(5),o="find",u=!0;o in[]&&Array(1)[o](function(){u=!1}),r(r.P+r.F*u,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(187)(o)},function(t,e,n){"use strict";var r=n(8),i=n(173)(6),o="findIndex",u=!0;o in[]&&Array(1)[o](function(){u=!1}),r(r.P+r.F*u,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(187)(o)},function(t,e,n){n(193)("Array")},function(t,e,n){"use strict";var r=n(4),i=n(11),o=n(6),u=n(26)("species");t.exports=function(t){var e=r[t];o&&e&&!e[u]&&i.f(e,u,{configurable:!0,get:function(){return this}})}},function(t,e,n){"use strict";var r=n(187),i=n(195),o=n(129),u=n(32);t.exports=n(128)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):"keys"==e?i(0,n):"values"==e?i(0,t[n]):i(0,[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(4),i=n(87),o=n(11).f,u=n(49).f,a=n(134),c=n(197),s=r.RegExp,f=s,l=s.prototype,h=/a/g,d=/a/g,p=new s(h)!==h;if(n(6)&&(!p||n(7)(function(){return d[n(26)("match")]=!1,s(h)!=h||s(d)==d||"/a/i"!=s(h,"i")}))){s=function(t,e){var n=this instanceof s,r=a(t),o=void 0===e;return!n&&r&&t.constructor===s&&o?t:i(p?new f(r&&!o?t.source:t,e):f((r=t instanceof s)?t.source:t,r&&o?c.call(t):e),n?this:l,s)};for(var v=(function(t){t in s||o(s,t,{configurable:!0,get:function(){return f[t]},set:function(e){f[t]=e}})}),y=u(f),b=0;y.length>b;)v(y[b++]);l.constructor=s,s.prototype=l,n(18)(r,"RegExp",s)}n(193)("RegExp")},function(t,e,n){"use strict";var r=n(12);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";n(199);var r=n(12),i=n(197),o=n(6),u="toString",a=/./[u],c=function(t){n(18)(RegExp.prototype,u,t,!0)};n(7)(function(){return"/a/b"!=a.call({source:"a",flags:"b"})})?c(function(){var t=r(this);return"/".concat(t.source,"../../index.html","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):a.name!=u&&c(function(){return a.call(this)})},function(t,e,n){n(6)&&"g"!=/./g.flags&&n(11).f(RegExp.prototype,"flags",{configurable:!0,get:n(197)})},function(t,e,n){n(201)("match",1,function(t,e,n){return[function(n){"use strict";var r=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},n]})},function(t,e,n){"use strict";var r=n(10),i=n(18),o=n(7),u=n(35),a=n(26);t.exports=function(t,e,n){var c=a(t),s=n(u,c,""[t]),f=s[0],l=s[1];o(function(){var e={};return e[c]=function(){return 7},7!=""[t](e)})&&(i(String.prototype,t,f),r(RegExp.prototype,c,2==e?function(t,e){return l.call(t,this,e)}:function(t){return l.call(t,this)}))}},function(t,e,n){n(201)("replace",2,function(t,e,n){return[function(r,i){"use strict";var o=t(this),u=void 0==r?void 0:r[e];return void 0!==u?u.call(r,o,i):n.call(String(o),r,i)},n]})},function(t,e,n){n(201)("search",1,function(t,e,n){return[function(n){"use strict";var r=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},n]})},function(t,e,n){n(201)("split",2,function(t,e,r){"use strict";var i=n(134),o=r,u=[].push,a="split",c="length",s="lastIndex";if("c"=="abbc"[a](/(b)*/)[1]||4!="test"[a](/(?:)/,-1)[c]||2!="ab"[a](/(?:ab)*/)[c]||4!="."[a](/(.?)(.?)/)[c]||"."[a](/()()/)[c]>1||""[a](/.?/)[c]){var f=void 0===/()??/.exec("")[1];r=function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!i(t))return o.call(n,t,e);var r,a,l,h,d,p=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),y=0,b=void 0===e?4294967295:e>>>0,g=new RegExp(t.source,v+"g");for(f||(r=new RegExp("^"+g.source+"$(?!\\s)",v));(a=g.exec(n))&&(l=a.index+a[0][c],!(l>y&&(p.push(n.slice(y,a.index)),!f&&a[c]>1&&a[0].replace(r,function(){for(d=1;d<arguments[c]-2;d++)void 0===arguments[d]&&(a[d]=void 0)}),a[c]>1&&a.index<n[c]&&u.apply(p,a.slice(1)),h=a[0][c],y=l,p[c]>=b)));)g[s]===a.index&&g[s]++;return y===n[c]?!h&&g.test("")||p.push(""):p.push(n.slice(y)),p[c]>b?p.slice(0,b):p}}else"0"[a](void 0,0)[c]&&(r=function(t,e){return void 0===t&&0===e?[]:o.call(this,t,e)});return[function(n,i){var o=t(this),u=void 0==n?void 0:n[e];return void 0!==u?u.call(n,o,i):r.call(String(o),n,i)},r]})},function(t,e,n){"use strict";var r,i,o,u,a=n(24),c=n(4),s=n(20),f=n(74),l=n(8),h=n(13),d=n(21),p=n(206),v=n(207),y=n(208),b=n(209).set,g=n(210)(),w=n(211),m=n(212),_=n(213),x=n(214),S="Promise",O=c.TypeError,E=c.process,P=E&&E.versions,M=P&&P.v8||"",A=c[S],k="process"==f(E),j=function(){},I=i=w.f,T=!!function(){try{var t=A.resolve(1),e=(t.constructor={})[n(26)("species")]=function(t){t(j,j)};return(k||"function"==typeof PromiseRejectionEvent)&&t.then(j)instanceof e&&0!==M.indexOf("6.6")&&_.indexOf("Chrome/66")===-1}catch(t){}}(),F=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},N=function(t,e){if(!t._n){t._n=!0;var n=t._c;g(function(){for(var r=t._v,i=1==t._s,o=0,u=function(e){var n,o,u,a=i?e.ok:e.fail,c=e.resolve,s=e.reject,f=e.domain;try{a?(i||(2==t._h&&L(t),t._h=1),a===!0?n=r:(f&&f.enter(),n=a(r),f&&(f.exit(),u=!0)),n===e.promise?s(O("Promise-chain cycle")):(o=F(n))?o.call(n,c,s):c(n)):s(r)}catch(t){f&&!u&&f.exit(),s(t)}};n.length>o;)u(n[o++]);t._c=[],t._n=!1,e&&!t._h&&R(t)})}},R=function(t){b.call(c,function(){var e,n,r,i=t._v,o=C(t);if(o&&(e=m(function(){k?E.emit("unhandledRejection",i,t):(n=c.onunhandledrejection)?n({promise:t,reason:i}):(r=c.console)&&r.error&&r.error("Unhandled promise rejection",i)}),t._h=k||C(t)?2:1),t._a=void 0,o&&e.e)throw e.v})},C=function(t){return 1!==t._h&&0===(t._a||t._c).length},L=function(t){b.call(c,function(){var e;k?E.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})})},B=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),N(e,!0))},D=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw O("Promise can't be resolved itself");(e=F(t))?g(function(){var r={_w:n,_d:!1};try{e.call(t,s(D,r,1),s(B,r,1))}catch(t){B.call(r,t)}}):(n._v=t,n._s=1,N(n,!1))}catch(t){B.call({_w:n,_d:!1},t)}}};T||(A=function(t){p(this,A,S,"_h"),d(t),r.call(this);try{t(s(D,this,1),s(B,this,1))}catch(t){B.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n(215)(A.prototype,{then:function(t,e){var n=I(y(this,A));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=k?E.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&N(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=s(D,t,1),this.reject=s(B,t,1)},w.f=I=function(t){return t===A||t===u?new o(t):i(t)}),l(l.G+l.W+l.F*!T,{Promise:A}),n(25)(A,S),n(193)(S),u=n(9)[S],l(l.S+l.F*!T,S,{reject:function(t){var e=I(this),n=e.reject;return n(t),e.promise}}),l(l.S+l.F*(a||!T),S,{resolve:function(t){return x(a&&this===u?A:this,t)}}),l(l.S+l.F*!(T&&n(166)(function(t){A.all(t).catch(j)})),S,{all:function(t){var e=this,n=I(e),r=n.resolve,i=n.reject,o=m(function(){var n=[],o=0,u=1;v(t,!1,function(t){var a=o++,c=!1;n.push(void 0),u++,e.resolve(t).then(function(t){c||(c=!0,n[a]=t,--u||r(n))},i)}),--u||r(n)});return o.e&&i(o.v),n.promise},race:function(t){var e=this,n=I(e),r=n.reject,i=m(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return i.e&&r(i.v),n.promise}})},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(20),i=n(162),o=n(163),u=n(12),a=n(37),c=n(165),s={},f={},e=t.exports=function(t,e,n,l,h){var d,p,v,y,b=h?function(){return t}:c(t),g=r(n,l,e?2:1),w=0;if("function"!=typeof b)throw TypeError(t+" is not iterable!");if(o(b)){for(d=a(t.length);d>w;w++)if(y=e?g(u(p=t[w])[0],p[1]):g(t[w]),y===s||y===f)return y}else for(v=b.call(t);!(p=v.next()).done;)if(y=i(v,g,p.value,e),y===s||y===f)return y};e.BREAK=s,e.RETURN=f},function(t,e,n){var r=n(12),i=n(21),o=n(26)("species");t.exports=function(t,e){var n,u=r(t).constructor;return void 0===u||void 0==(n=r(u)[o])?e:i(n)}},function(t,e,n){var r,i,o,u=n(20),a=n(77),c=n(47),s=n(15),f=n(4),l=f.process,h=f.setImmediate,d=f.clearImmediate,p=f.MessageChannel,v=f.Dispatch,y=0,b={},g="onreadystatechange",w=function(){var t=+this;if(b.hasOwnProperty(t)){var e=b[t];delete b[t],e()}},m=function(t){w.call(t.data)};h&&d||(h=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return b[++y]=function(){a("function"==typeof t?t:Function(t),e)},r(y),y},d=function(t){delete b[t]},"process"==n(34)(l)?r=function(t){l.nextTick(u(w,t,1))}:v&&v.now?r=function(t){v.now(u(w,t,1))}:p?(i=new p,o=i.port2,i.port1.onmessage=m,r=u(o.postMessage,o,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",m,!1)):r=g in s("script")?function(t){c.appendChild(s("script"))[g]=function(){c.removeChild(this),w.call(t)}}:function(t){setTimeout(u(w,t,1),0)}),t.exports={set:h,clear:d}},function(t,e,n){var r=n(4),i=n(209).set,o=r.MutationObserver||r.WebKitMutationObserver,u=r.process,a=r.Promise,c="process"==n(34)(u);t.exports=function(){var t,e,n,s=function(){var r,i;for(c&&(r=u.domain)&&r.exit();t;){i=t.fn,t=t.next;try{i()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(c)n=function(){u.nextTick(s)};else if(!o||r.navigator&&r.navigator.standalone)if(a&&a.resolve){var f=a.resolve(void 0);n=function(){f.then(s)}}else n=function(){i.call(r,s)};else{var l=!0,h=document.createTextNode("");new o(s).observe(h,{characterData:!0}),n=function(){h.data=l=!l}}return function(r){var i={fn:r,next:void 0};e&&(e.next=i),t||(t=i,n()),e=i}}},function(t,e,n){"use strict";function r(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=i(e),this.reject=i(n)}var i=n(21);t.exports.f=function(t){return new r(t)}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(4),i=r.navigator;t.exports=i&&i.userAgent||""},function(t,e,n){var r=n(12),i=n(13),o=n(211);t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t),u=n.resolve;return u(e),n.promise}},function(t,e,n){var r=n(18);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},function(t,e,n){"use strict";var r=n(217),i=n(218),o="Map";t.exports=n(219)(o,function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=r.getEntry(i(this,o),t);return e&&e.v},set:function(t,e){return r.def(i(this,o),0===t?0:t,e)}},r,!0)},function(t,e,n){"use strict";var r=n(11).f,i=n(45),o=n(215),u=n(20),a=n(206),c=n(207),s=n(128),f=n(195),l=n(193),h=n(6),d=n(22).fastKey,p=n(218),v=h?"_s":"size",y=function(t,e){var n,r=d(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,s){var f=t(function(t,r){a(t,f,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[v]=0,void 0!=r&&c(r,n,t[s],t)});return o(f.prototype,{clear:function(){for(var t=p(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var n=p(this,e),r=y(n,t);if(r){var i=r.n,o=r.p;delete n._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),n._f==r&&(n._f=i),n._l==r&&(n._l=o),n[v]--}return!!r},forEach:function(t){p(this,e);for(var n,r=u(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!y(p(this,e),t)}}),h&&r(f.prototype,"size",{get:function(){return p(this,e)[v]}}),f},def:function(t,e,n){var r,i,o=y(t,e);return o?o.v=n:(t._l=o={i:i=d(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[v]++,"F"!==i&&(t._i[i]=o)),t},getEntry:y,setStrong:function(t,e,n){s(t,e,function(t,n){this._t=p(t,e),this._k=n,this._l=void 0},function(){for(var t=this,e=t._k,n=t._l;n&&n.r;)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?"keys"==e?f(0,n.k):"values"==e?f(0,n.v):f(0,[n.k,n.v]):(t._t=void 0,f(1))},n?"entries":"values",!n,!0),l(e)}}},function(t,e,n){var r=n(13);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},function(t,e,n){"use strict";var r=n(4),i=n(8),o=n(18),u=n(215),a=n(22),c=n(207),s=n(206),f=n(13),l=n(7),h=n(166),d=n(25),p=n(87);t.exports=function(t,e,n,v,y,b){var g=r[t],w=g,m=y?"set":"add",_=w&&w.prototype,x={},S=function(t){var e=_[t];o(_,t,"delete"==t?function(t){return!(b&&!f(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(b&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return b&&!f(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof w&&(b||_.forEach&&!l(function(){(new w).entries().next()}))){var O=new w,E=O[m](b?{}:-0,1)!=O,P=l(function(){O.has(1)}),M=h(function(t){new w(t)}),A=!b&&l(function(){for(var t=new w,e=5;e--;)t[m](e,e);return!t.has(-0)});M||(w=e(function(e,n){s(e,w,t);var r=p(new g,e,w);return void 0!=n&&c(n,y,r[m],r),r}),w.prototype=_,_.constructor=w),(P||A)&&(S("delete"),S("has"),y&&S("get")),(A||E)&&S(m),b&&_.clear&&delete _.clear}else w=v.getConstructor(e,t,y,m),u(w.prototype,n),a.NEED=!0;return d(w,t),x[t]=w,i(i.G+i.W+i.F*(w!=g),x),b||v.setStrong(w,t,y),w}},function(t,e,n){"use strict";var r=n(217),i=n(218),o="Set";t.exports=n(219)(o,function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(i(this,o),t=0===t?0:t,t)}},r)},function(t,e,n){"use strict";var r,i=n(173)(0),o=n(18),u=n(22),a=n(68),c=n(222),s=n(13),f=n(7),l=n(218),h="WeakMap",d=u.getWeak,p=Object.isExtensible,v=c.ufstore,y={},b=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},g={get:function(t){if(s(t)){var e=d(t);return e===!0?v(l(this,h)).get(t):e?e[this._i]:void 0}},set:function(t,e){return c.def(l(this,h),t,e)}},w=t.exports=n(219)(h,b,g,c,!0,!0);f(function(){return 7!=(new w).set((Object.freeze||Object)(y),7).get(y)})&&(r=c.getConstructor(b,h),a(r.prototype,g),u.NEED=!0,i(["delete","has","get","set"],function(t){var e=w.prototype,n=e[t];o(e,t,function(e,i){if(s(e)&&!p(e)){this._f||(this._f=new r);var o=this._f[t](e,i);return"set"==t?this:o}return n.call(this,e,i)})}))},function(t,e,n){"use strict";var r=n(215),i=n(22).getWeak,o=n(12),u=n(13),a=n(206),c=n(207),s=n(173),f=n(5),l=n(218),h=s(5),d=s(6),p=0,v=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},b=function(t,e){return h(t.a,function(t){return t[0]===e})};y.prototype={get:function(t){var e=b(this,t);if(e)return e[1]},has:function(t){return!!b(this,t)},set:function(t,e){var n=b(this,t);n?n[1]=e:this.a.push([t,e])},delete:function(t){var e=d(this.a,function(e){return e[0]===t});return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,o){var s=t(function(t,r){a(t,s,e,"_i"),t._t=e,t._i=p++,t._l=void 0,void 0!=r&&c(r,n,t[o],t)});return r(s.prototype,{delete:function(t){if(!u(t))return!1;var n=i(t);return n===!0?v(l(this,e)).delete(t):n&&f(n,this._i)&&delete n[this._i]},has:function(t){if(!u(t))return!1;var n=i(t);return n===!0?v(l(this,e)).has(t):n&&f(n,this._i)}}),s},def:function(t,e,n){var r=i(o(e),!0);return r===!0?v(t).set(e,n):r[t._i]=n,t},ufstore:v}},function(t,e,n){"use strict";var r=n(222),i=n(218),o="WeakSet";n(219)(o,function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(i(this,o),t,!0)}},r,!1,!0)},function(t,e,n){"use strict";var r=n(8),i=n(225),o=n(226),u=n(12),a=n(39),c=n(37),s=n(13),f=n(4).ArrayBuffer,l=n(208),h=o.ArrayBuffer,d=o.DataView,p=i.ABV&&f.isView,v=h.prototype.slice,y=i.VIEW,b="ArrayBuffer";r(r.G+r.W+r.F*(f!==h),{ArrayBuffer:h}),r(r.S+r.F*!i.CONSTR,b,{isView:function(t){return p&&p(t)||s(t)&&y in t}}),r(r.P+r.U+r.F*n(7)(function(){return!new h(2).slice(1,void 0).byteLength}),b,{slice:function(t,e){if(void 0!==v&&void 0===e)return v.call(u(this),t);for(var n=u(this).byteLength,r=a(t,n),i=a(void 0===e?n:e,n),o=new(l(this,h))(c(i-r)),s=new d(this),f=new d(o),p=0;r<i;)f.setUint8(p++,s.getUint8(r++));return o}}),n(193)(b)},function(t,e,n){for(var r,i=n(4),o=n(10),u=n(19),a=u("typed_array"),c=u("view"),s=!(!i.ArrayBuffer||!i.DataView),f=s,l=0,h=9,d="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<h;)(r=i[d[l++]])?(o(r.prototype,a,!0),o(r.prototype,c,!0)):f=!1;t.exports={ABV:s,CONSTR:f,TYPED:a,VIEW:c}},function(t,e,n){"use strict";function r(t,e,n){var r,i,o,u=new Array(n),a=8*n-e-1,c=(1<<a)-1,s=c>>1,f=23===e?G(2,-24)-G(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for(t=U(t),t!=t||t===B?(i=t!=t?1:0,r=c):(r=W(V(t)/z),t*(o=G(2,-r))<1&&(r--,o*=2),t+=r+s>=1?f/o:f*G(2,1-s),t*o>=2&&(r++,o/=2),r+s>=c?(i=0,r=c):r+s>=1?(i=(t*o-1)*G(2,e),r+=s):(i=t*G(2,s-1)*G(2,e),r=0));e>=8;u[l++]=255&i,i/=256,e-=8);for(r=r<<e|i,a+=e;a>0;u[l++]=255&r,r/=256,a-=8);return u[--l]|=128*h,u}function i(t,e,n){var r,i=8*n-e-1,o=(1<<i)-1,u=o>>1,a=i-7,c=n-1,s=t[c--],f=127&s;for(s>>=7;a>0;f=256*f+t[c],c--,a-=8);for(r=f&(1<<-a)-1,f>>=-a,a+=e;a>0;r=256*r+t[c],c--,a-=8);if(0===f)f=1-u;else{if(f===o)return r?NaN:s?-B:B;r+=G(2,e),f-=u}return(s?-1:1)*r*G(2,f-e)}function o(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function u(t){return[255&t]}function a(t){return[255&t,t>>8&255]}function c(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function s(t){return r(t,52,8)}function f(t){return r(t,23,4)}function l(t,e,n){P(t[I],e,{get:function(){return this[n]}})}function h(t,e,n,r){var i=+n,o=O(i);if(o+e>t[Y])throw L(F);var u=t[K]._b,a=o+t[X],c=u.slice(a,a+e);return r?c:c.reverse()}function d(t,e,n,r,i,o){var u=+n,a=O(u);if(a+e>t[Y])throw L(F);for(var c=t[K]._b,s=a+t[X],f=r(+i),l=0;l<e;l++)c[s+l]=f[o?l:e-l-1]}var p=n(4),v=n(6),y=n(24),b=n(225),g=n(10),w=n(215),m=n(7),_=n(206),x=n(38),S=n(37),O=n(227),E=n(49).f,P=n(11).f,M=n(189),A=n(25),k="ArrayBuffer",j="DataView",I="prototype",T="Wrong length!",F="Wrong index!",N=p[k],R=p[j],C=p.Math,L=p.RangeError,B=p.Infinity,D=N,U=C.abs,G=C.pow,W=C.floor,V=C.log,z=C.LN2,q="buffer",H="byteLength",J="byteOffset",K=v?"_b":q,Y=v?"_l":H,X=v?"_o":J;
if(b.ABV){if(!m(function(){N(1)})||!m(function(){new N(-1)})||m(function(){return new N,new N(1.5),new N(NaN),N.name!=k})){N=function(t){return _(this,N),new D(O(t))};for(var $,Z=N[I]=D[I],Q=E(D),tt=0;Q.length>tt;)($=Q[tt++])in N||g(N,$,D[$]);y||(Z.constructor=N)}var et=new R(new N(2)),nt=R[I].setInt8;et.setInt8(0,2147483648),et.setInt8(1,2147483649),!et.getInt8(0)&&et.getInt8(1)||w(R[I],{setInt8:function(t,e){nt.call(this,t,e<<24>>24)},setUint8:function(t,e){nt.call(this,t,e<<24>>24)}},!0)}else N=function(t){_(this,N,k);var e=O(t);this._b=M.call(new Array(e),0),this[Y]=e},R=function(t,e,n){_(this,R,j),_(t,N,j);var r=t[Y],i=x(e);if(i<0||i>r)throw L("Wrong offset!");if(n=void 0===n?r-i:S(n),i+n>r)throw L(T);this[K]=t,this[X]=i,this[Y]=n},v&&(l(N,H,"_l"),l(R,q,"_b"),l(R,H,"_l"),l(R,J,"_o")),w(R[I],{getInt8:function(t){return h(this,1,t)[0]<<24>>24},getUint8:function(t){return h(this,1,t)[0]},getInt16:function(t){var e=h(this,2,t,arguments[1]);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=h(this,2,t,arguments[1]);return e[1]<<8|e[0]},getInt32:function(t){return o(h(this,4,t,arguments[1]))},getUint32:function(t){return o(h(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return i(h(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return i(h(this,8,t,arguments[1]),52,8)},setInt8:function(t,e){d(this,1,t,u,e)},setUint8:function(t,e){d(this,1,t,u,e)},setInt16:function(t,e){d(this,2,t,a,e,arguments[2])},setUint16:function(t,e){d(this,2,t,a,e,arguments[2])},setInt32:function(t,e){d(this,4,t,c,e,arguments[2])},setUint32:function(t,e){d(this,4,t,c,e,arguments[2])},setFloat32:function(t,e){d(this,4,t,f,e,arguments[2])},setFloat64:function(t,e){d(this,8,t,s,e,arguments[2])}});A(N,k),A(R,j),g(R[I],b.VIEW,!0),e[k]=N,e[j]=R},function(t,e,n){var r=n(38),i=n(37);t.exports=function(t){if(void 0===t)return 0;var e=r(t),n=i(e);if(e!==n)throw RangeError("Wrong length!");return n}},function(t,e,n){var r=n(8);r(r.G+r.W+r.F*!n(225).ABV,{DataView:n(226).DataView})},function(t,e,n){n(230)("Int8",1,function(t){return function(e,n,r){return t(this,e,n,r)}})},function(t,e,n){"use strict";if(n(6)){var r=n(24),i=n(4),o=n(7),u=n(8),a=n(225),c=n(226),s=n(20),f=n(206),l=n(17),h=n(10),d=n(215),p=n(38),v=n(37),y=n(227),b=n(39),g=n(16),w=n(5),m=n(74),_=n(13),x=n(57),S=n(163),O=n(45),E=n(58),P=n(49).f,M=n(165),A=n(19),k=n(26),j=n(173),I=n(36),T=n(208),F=n(194),N=n(129),R=n(166),C=n(193),L=n(189),B=n(186),D=n(11),U=n(50),G=D.f,W=U.f,V=i.RangeError,z=i.TypeError,q=i.Uint8Array,H="ArrayBuffer",J="Shared"+H,K="BYTES_PER_ELEMENT",Y="prototype",X=Array[Y],$=c.ArrayBuffer,Z=c.DataView,Q=j(0),tt=j(2),et=j(3),nt=j(4),rt=j(5),it=j(6),ot=I(!0),ut=I(!1),at=F.values,ct=F.keys,st=F.entries,ft=X.lastIndexOf,lt=X.reduce,ht=X.reduceRight,dt=X.join,pt=X.sort,vt=X.slice,yt=X.toString,bt=X.toLocaleString,gt=k("iterator"),wt=k("toStringTag"),mt=A("typed_constructor"),_t=A("def_constructor"),xt=a.CONSTR,St=a.TYPED,Ot=a.VIEW,Et="Wrong length!",Pt=j(1,function(t,e){return It(T(t,t[_t]),e)}),Mt=o(function(){return 1===new q(new Uint16Array([1]).buffer)[0]}),At=!!q&&!!q[Y].set&&o(function(){new q(1).set({})}),kt=function(t,e){var n=p(t);if(n<0||n%e)throw V("Wrong offset!");return n},jt=function(t){if(_(t)&&St in t)return t;throw z(t+" is not a typed array!")},It=function(t,e){if(!(_(t)&&mt in t))throw z("It is not a typed array constructor!");return new t(e)},Tt=function(t,e){return Ft(T(t,t[_t]),e)},Ft=function(t,e){for(var n=0,r=e.length,i=It(t,r);r>n;)i[n]=e[n++];return i},Nt=function(t,e,n){G(t,e,{get:function(){return this._d[n]}})},Rt=function(t){var e,n,r,i,o,u,a=x(t),c=arguments.length,f=c>1?arguments[1]:void 0,l=void 0!==f,h=M(a);if(void 0!=h&&!S(h)){for(u=h.call(a),r=[],e=0;!(o=u.next()).done;e++)r.push(o.value);a=r}for(l&&c>2&&(f=s(f,arguments[2],2)),e=0,n=v(a.length),i=It(this,n);n>e;e++)i[e]=l?f(a[e],e):a[e];return i},Ct=function(){for(var t=0,e=arguments.length,n=It(this,e);e>t;)n[t]=arguments[t++];return n},Lt=!!q&&o(function(){bt.call(new q(1))}),Bt=function(){return bt.apply(Lt?vt.call(jt(this)):jt(this),arguments)},Dt={copyWithin:function(t,e){return B.call(jt(this),t,e,arguments.length>2?arguments[2]:void 0)},every:function(t){return nt(jt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return L.apply(jt(this),arguments)},filter:function(t){return Tt(this,tt(jt(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return rt(jt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return it(jt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){Q(jt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return ut(jt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return ot(jt(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return dt.apply(jt(this),arguments)},lastIndexOf:function(t){return ft.apply(jt(this),arguments)},map:function(t){return Pt(jt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return lt.apply(jt(this),arguments)},reduceRight:function(t){return ht.apply(jt(this),arguments)},reverse:function(){for(var t,e=this,n=jt(e).length,r=Math.floor(n/2),i=0;i<r;)t=e[i],e[i++]=e[--n],e[n]=t;return e},some:function(t){return et(jt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return pt.call(jt(this),t)},subarray:function(t,e){var n=jt(this),r=n.length,i=b(t,r);return new(T(n,n[_t]))(n.buffer,n.byteOffset+i*n.BYTES_PER_ELEMENT,v((void 0===e?r:b(e,r))-i))}},Ut=function(t,e){return Tt(this,vt.call(jt(this),t,e))},Gt=function(t){jt(this);var e=kt(arguments[1],1),n=this.length,r=x(t),i=v(r.length),o=0;if(i+e>n)throw V(Et);for(;o<i;)this[e+o]=r[o++]},Wt={entries:function(){return st.call(jt(this))},keys:function(){return ct.call(jt(this))},values:function(){return at.call(jt(this))}},Vt=function(t,e){return _(t)&&t[St]&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},zt=function(t,e){return Vt(t,e=g(e,!0))?l(2,t[e]):W(t,e)},qt=function(t,e,n){return!(Vt(t,e=g(e,!0))&&_(n)&&w(n,"value"))||w(n,"get")||w(n,"set")||n.configurable||w(n,"writable")&&!n.writable||w(n,"enumerable")&&!n.enumerable?G(t,e,n):(t[e]=n.value,t)};xt||(U.f=zt,D.f=qt),u(u.S+u.F*!xt,"Object",{getOwnPropertyDescriptor:zt,defineProperty:qt}),o(function(){yt.call({})})&&(yt=bt=function(){return dt.call(this)});var Ht=d({},Dt);d(Ht,Wt),h(Ht,gt,Wt.values),d(Ht,{slice:Ut,set:Gt,constructor:function(){},toString:yt,toLocaleString:Bt}),Nt(Ht,"buffer","b"),Nt(Ht,"byteOffset","o"),Nt(Ht,"byteLength","l"),Nt(Ht,"length","e"),G(Ht,wt,{get:function(){return this[St]}}),t.exports=function(t,e,n,c){c=!!c;var s=t+(c?"Clamped":"")+"Array",l="get"+t,d="set"+t,p=i[s],b=p||{},g=p&&E(p),w=!p||!a.ABV,x={},S=p&&p[Y],M=function(t,n){var r=t._d;return r.v[l](n*e+r.o,Mt)},A=function(t,n,r){var i=t._d;c&&(r=(r=Math.round(r))<0?0:r>255?255:255&r),i.v[d](n*e+i.o,r,Mt)},k=function(t,e){G(t,e,{get:function(){return M(this,e)},set:function(t){return A(this,e,t)},enumerable:!0})};w?(p=n(function(t,n,r,i){f(t,p,s,"_d");var o,u,a,c,l=0,d=0;if(_(n)){if(!(n instanceof $||(c=m(n))==H||c==J))return St in n?Ft(p,n):Rt.call(p,n);o=n,d=kt(r,e);var b=n.byteLength;if(void 0===i){if(b%e)throw V(Et);if(u=b-d,u<0)throw V(Et)}else if(u=v(i)*e,u+d>b)throw V(Et);a=u/e}else a=y(n),u=a*e,o=new $(u);for(h(t,"_d",{b:o,o:d,l:u,e:a,v:new Z(o)});l<a;)k(t,l++)}),S=p[Y]=O(Ht),h(S,"constructor",p)):o(function(){p(1)})&&o(function(){new p(-1)})&&R(function(t){new p,new p(null),new p(1.5),new p(t)},!0)||(p=n(function(t,n,r,i){f(t,p,s);var o;return _(n)?n instanceof $||(o=m(n))==H||o==J?void 0!==i?new b(n,kt(r,e),i):void 0!==r?new b(n,kt(r,e)):new b(n):St in n?Ft(p,n):Rt.call(p,n):new b(y(n))}),Q(g!==Function.prototype?P(b).concat(P(g)):P(b),function(t){t in p||h(p,t,b[t])}),p[Y]=S,r||(S.constructor=p));var j=S[gt],I=!!j&&("values"==j.name||void 0==j.name),T=Wt.values;h(p,mt,!0),h(S,St,s),h(S,Ot,!0),h(S,_t,p),(c?new p(1)[wt]==s:wt in S)||G(S,wt,{get:function(){return s}}),x[s]=p,u(u.G+u.W+u.F*(p!=b),x),u(u.S,s,{BYTES_PER_ELEMENT:e}),u(u.S+u.F*o(function(){b.of.call(p,1)}),s,{from:Rt,of:Ct}),K in S||h(S,K,e),u(u.P,s,Dt),C(s),u(u.P+u.F*At,s,{set:Gt}),u(u.P+u.F*!I,s,Wt),r||S.toString==yt||(S.toString=yt),u(u.P+u.F*o(function(){new p(1).slice()}),s,{slice:Ut}),u(u.P+u.F*(o(function(){return[1,2].toLocaleString()!=new p([1,2]).toLocaleString()})||!o(function(){S.toLocaleString.call([1,2])})),s,{toLocaleString:Bt}),N[s]=I?j:T,r||I||h(S,gt,T)}}else t.exports=function(){}},function(t,e,n){n(230)("Uint8",1,function(t){return function(e,n,r){return t(this,e,n,r)}})},function(t,e,n){n(230)("Uint8",1,function(t){return function(e,n,r){return t(this,e,n,r)}},!0)},function(t,e,n){n(230)("Int16",2,function(t){return function(e,n,r){return t(this,e,n,r)}})},function(t,e,n){n(230)("Uint16",2,function(t){return function(e,n,r){return t(this,e,n,r)}})},function(t,e,n){n(230)("Int32",4,function(t){return function(e,n,r){return t(this,e,n,r)}})},function(t,e,n){n(230)("Uint32",4,function(t){return function(e,n,r){return t(this,e,n,r)}})},function(t,e,n){n(230)("Float32",4,function(t){return function(e,n,r){return t(this,e,n,r)}})},function(t,e,n){n(230)("Float64",8,function(t){return function(e,n,r){return t(this,e,n,r)}})},function(t,e,n){var r=n(8),i=n(21),o=n(12),u=(n(4).Reflect||{}).apply,a=Function.apply;r(r.S+r.F*!n(7)(function(){u(function(){})}),"Reflect",{apply:function(t,e,n){var r=i(t),c=o(n);return u?u(r,e,c):a.call(r,e,c)}})},function(t,e,n){var r=n(8),i=n(45),o=n(21),u=n(12),a=n(13),c=n(7),s=n(76),f=(n(4).Reflect||{}).construct,l=c(function(){function t(){}return!(f(function(){},[],t)instanceof t)}),h=!c(function(){f(function(){})});r(r.S+r.F*(l||h),"Reflect",{construct:function(t,e){o(t),u(e);var n=arguments.length<3?t:o(arguments[2]);if(h&&!l)return f(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(s.apply(t,r))}var c=n.prototype,d=i(a(c)?c:Object.prototype),p=Function.apply.call(t,d,e);return a(p)?p:d}})},function(t,e,n){var r=n(11),i=n(8),o=n(12),u=n(16);i(i.S+i.F*n(7)(function(){Reflect.defineProperty(r.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(t,e,n){o(t),e=u(e,!0),o(n);try{return r.f(t,e,n),!0}catch(t){return!1}}})},function(t,e,n){var r=n(8),i=n(50).f,o=n(12);r(r.S,"Reflect",{deleteProperty:function(t,e){var n=i(o(t),e);return!(n&&!n.configurable)&&delete t[e]}})},function(t,e,n){"use strict";var r=n(8),i=n(12),o=function(t){this._t=i(t),this._i=0;var e,n=this._k=[];for(e in t)n.push(e)};n(130)(o,"Object",function(){var t,e=this,n=e._k;do if(e._i>=n.length)return{value:void 0,done:!0};while(!((t=n[e._i++])in e._t));return{value:t,done:!1}}),r(r.S,"Reflect",{enumerate:function(t){return new o(t)}})},function(t,e,n){function r(t,e){var n,a,f=arguments.length<3?t:arguments[2];return s(t)===f?t[e]:(n=i.f(t,e))?u(n,"value")?n.value:void 0!==n.get?n.get.call(f):void 0:c(a=o(t))?r(a,e,f):void 0}var i=n(50),o=n(58),u=n(5),a=n(8),c=n(13),s=n(12);a(a.S,"Reflect",{get:r})},function(t,e,n){var r=n(50),i=n(8),o=n(12);i(i.S,"Reflect",{getOwnPropertyDescriptor:function(t,e){return r.f(o(t),e)}})},function(t,e,n){var r=n(8),i=n(58),o=n(12);r(r.S,"Reflect",{getPrototypeOf:function(t){return i(o(t))}})},function(t,e,n){var r=n(8);r(r.S,"Reflect",{has:function(t,e){return e in t}})},function(t,e,n){var r=n(8),i=n(12),o=Object.isExtensible;r(r.S,"Reflect",{isExtensible:function(t){return i(t),!o||o(t)}})},function(t,e,n){var r=n(8);r(r.S,"Reflect",{ownKeys:n(250)})},function(t,e,n){var r=n(49),i=n(42),o=n(12),u=n(4).Reflect;t.exports=u&&u.ownKeys||function(t){var e=r.f(o(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(8),i=n(12),o=Object.preventExtensions;r(r.S,"Reflect",{preventExtensions:function(t){i(t);try{return o&&o(t),!0}catch(t){return!1}}})},function(t,e,n){function r(t,e,n){var c,h,d=arguments.length<4?t:arguments[3],p=o.f(f(t),e);if(!p){if(l(h=u(t)))return r(h,e,n,d);p=s(0)}if(a(p,"value")){if(p.writable===!1||!l(d))return!1;if(c=o.f(d,e)){if(c.get||c.set||c.writable===!1)return!1;c.value=n,i.f(d,e,c)}else i.f(d,e,s(0,n));return!0}return void 0!==p.set&&(p.set.call(d,n),!0)}var i=n(11),o=n(50),u=n(58),a=n(5),c=n(8),s=n(17),f=n(12),l=n(13);c(c.S,"Reflect",{set:r})},function(t,e,n){var r=n(8),i=n(72);i&&r(r.S,"Reflect",{setPrototypeOf:function(t,e){i.check(t,e);try{return i.set(t,e),!0}catch(t){return!1}}})},function(t,e,n){"use strict";var r=n(8),i=n(36)(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(187)("includes")},function(t,e,n){"use strict";var r=n(8),i=n(256),o=n(57),u=n(37),a=n(21),c=n(174);r(r.P,"Array",{flatMap:function(t){var e,n,r=o(this);return a(t),e=u(r.length),n=c(r,0),i(n,r,r,e,0,1,t,arguments[1]),n}}),n(187)("flatMap")},function(t,e,n){"use strict";function r(t,e,n,s,f,l,h,d){for(var p,v,y=f,b=0,g=!!h&&a(h,d,3);b<s;){if(b in n){if(p=g?g(n[b],b,e):n[b],v=!1,o(p)&&(v=p[c],v=void 0!==v?!!v:i(p)),v&&l>0)y=r(t,e,p,u(p.length),y,l-1)-1;else{if(y>=9007199254740991)throw TypeError();t[y]=p}y++}b++}return y}var i=n(44),o=n(13),u=n(37),a=n(20),c=n(26)("isConcatSpreadable");t.exports=r},function(t,e,n){"use strict";var r=n(8),i=n(256),o=n(57),u=n(37),a=n(38),c=n(174);r(r.P,"Array",{flatten:function(){var t=arguments[0],e=o(this),n=u(e.length),r=c(e,0);return i(r,e,e,n,0,void 0===t?1:a(t)),r}}),n(187)("flatten")},function(t,e,n){"use strict";var r=n(8),i=n(127)(!0);r(r.P,"String",{at:function(t){return i(this,t)}})},function(t,e,n){"use strict";var r=n(8),i=n(260),o=n(213);r(r.P+r.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(o),"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},function(t,e,n){var r=n(37),i=n(90),o=n(35);t.exports=function(t,e,n,u){var a=String(o(t)),c=a.length,s=void 0===n?" ":String(n),f=r(e);if(f<=c||""==s)return a;var l=f-c,h=i.call(s,Math.ceil(l/s.length));return h.length>l&&(h=h.slice(0,l)),u?h+a:a+h}},function(t,e,n){"use strict";var r=n(8),i=n(260),o=n(213);r(r.P+r.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(o),"String",{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},function(t,e,n){"use strict";n(82)("trimLeft",function(t){return function(){return t(this,1)}},"trimStart")},function(t,e,n){"use strict";n(82)("trimRight",function(t){return function(){return t(this,2)}},"trimEnd")},function(t,e,n){"use strict";var r=n(8),i=n(35),o=n(37),u=n(134),a=n(197),c=RegExp.prototype,s=function(t,e){this._r=t,this._s=e};n(130)(s,"RegExp String",function(){var t=this._r.exec(this._s);return{value:t,done:null===t}}),r(r.P,"String",{matchAll:function(t){if(i(this),!u(t))throw TypeError(t+" is not a regexp!");var e=String(this),n="flags"in c?String(t.flags):a.call(t),r=new RegExp(t.source,~n.indexOf("g")?n:"g"+n);return r.lastIndex=o(t.lastIndex),new s(r,e)}})},function(t,e,n){n(28)("asyncIterator")},function(t,e,n){n(28)("observable")},function(t,e,n){var r=n(8),i=n(250),o=n(32),u=n(50),a=n(164);r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,r=o(t),c=u.f,s=i(r),f={},l=0;s.length>l;)n=c(r,e=s[l++]),void 0!==n&&a(f,e,n);return f}})},function(t,e,n){var r=n(8),i=n(269)(!1);r(r.S,"Object",{values:function(t){return i(t)}})},function(t,e,n){var r=n(30),i=n(32),o=n(43).f;t.exports=function(t){return function(e){for(var n,u=i(e),a=r(u),c=a.length,s=0,f=[];c>s;)o.call(u,n=a[s++])&&f.push(t?[n,u[n]]:u[n]);return f}}},function(t,e,n){var r=n(8),i=n(269)(!0);r(r.S,"Object",{entries:function(t){return i(t)}})},function(t,e,n){"use strict";var r=n(8),i=n(57),o=n(21),u=n(11);n(6)&&r(r.P+n(272),"Object",{__defineGetter__:function(t,e){u.f(i(this),t,{get:o(e),enumerable:!0,configurable:!0})}})},function(t,e,n){"use strict";t.exports=n(24)||!n(7)(function(){var t=Math.random();__defineSetter__.call(null,t,function(){}),delete n(4)[t]})},function(t,e,n){"use strict";var r=n(8),i=n(57),o=n(21),u=n(11);n(6)&&r(r.P+n(272),"Object",{__defineSetter__:function(t,e){u.f(i(this),t,{set:o(e),enumerable:!0,configurable:!0})}})},function(t,e,n){"use strict";var r=n(8),i=n(57),o=n(16),u=n(58),a=n(50).f;n(6)&&r(r.P+n(272),"Object",{__lookupGetter__:function(t){var e,n=i(this),r=o(t,!0);do if(e=a(n,r))return e.get;while(n=u(n))}})},function(t,e,n){"use strict";var r=n(8),i=n(57),o=n(16),u=n(58),a=n(50).f;n(6)&&r(r.P+n(272),"Object",{__lookupSetter__:function(t){var e,n=i(this),r=o(t,!0);do if(e=a(n,r))return e.set;while(n=u(n))}})},function(t,e,n){var r=n(8);r(r.P+r.R,"Map",{toJSON:n(277)("Map")})},function(t,e,n){var r=n(74),i=n(278);t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},function(t,e,n){var r=n(207);t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},function(t,e,n){var r=n(8);r(r.P+r.R,"Set",{toJSON:n(277)("Set")})},function(t,e,n){n(281)("Map")},function(t,e,n){"use strict";var r=n(8);t.exports=function(t){r(r.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},function(t,e,n){n(281)("Set")},function(t,e,n){n(281)("WeakMap")},function(t,e,n){n(281)("WeakSet")},function(t,e,n){n(286)("Map")},function(t,e,n){"use strict";var r=n(8),i=n(21),o=n(20),u=n(207);t.exports=function(t){r(r.S,t,{from:function(t){var e,n,r,a,c=arguments[1];return i(this),e=void 0!==c,e&&i(c),void 0==t?new this:(n=[],e?(r=0,a=o(c,arguments[2],2),u(t,!1,function(t){n.push(a(t,r++))})):u(t,!1,n.push,n),new this(n))}})}},function(t,e,n){n(286)("Set")},function(t,e,n){n(286)("WeakMap")},function(t,e,n){n(286)("WeakSet")},function(t,e,n){var r=n(8);r(r.G,{global:n(4)})},function(t,e,n){var r=n(8);r(r.S,"System",{global:n(4)})},function(t,e,n){var r=n(8),i=n(34);r(r.S,"Error",{isError:function(t){return"Error"===i(t)}})},function(t,e,n){var r=n(8);r(r.S,"Math",{clamp:function(t,e,n){return Math.min(n,Math.max(e,t))}})},function(t,e,n){var r=n(8);r(r.S,"Math",{DEG_PER_RAD:Math.PI/180})},function(t,e,n){var r=n(8),i=180/Math.PI;r(r.S,"Math",{degrees:function(t){return t*i}})},function(t,e,n){var r=n(8),i=n(297),o=n(113);r(r.S,"Math",{fscale:function(t,e,n,r,u){return o(i(t,e,n,r,u))}})},function(t,e){t.exports=Math.scale||function(t,e,n,r,i){return 0===arguments.length||t!=t||e!=e||n!=n||r!=r||i!=i?NaN:t===1/0||t===-(1/0)?t:(t-e)*(i-r)/(n-e)+r}},function(t,e,n){var r=n(8);r(r.S,"Math",{iaddh:function(t,e,n,r){var i=t>>>0,o=e>>>0,u=n>>>0;return o+(r>>>0)+((i&u|(i|u)&~(i+u>>>0))>>>31)|0}})},function(t,e,n){var r=n(8);r(r.S,"Math",{isubh:function(t,e,n,r){var i=t>>>0,o=e>>>0,u=n>>>0;return o-(r>>>0)-((~i&u|~(i^u)&i-u>>>0)>>>31)|0}})},function(t,e,n){var r=n(8);r(r.S,"Math",{imulh:function(t,e){var n=65535,r=+t,i=+e,o=r&n,u=i&n,a=r>>16,c=i>>16,s=(a*u>>>0)+(o*u>>>16);return a*c+(s>>16)+((o*c>>>0)+(s&n)>>16)}})},function(t,e,n){var r=n(8);r(r.S,"Math",{RAD_PER_DEG:180/Math.PI})},function(t,e,n){var r=n(8),i=Math.PI/180;r(r.S,"Math",{radians:function(t){return t*i}})},function(t,e,n){var r=n(8);r(r.S,"Math",{scale:n(297)})},function(t,e,n){var r=n(8);r(r.S,"Math",{umulh:function(t,e){var n=65535,r=+t,i=+e,o=r&n,u=i&n,a=r>>>16,c=i>>>16,s=(a*u>>>0)+(o*u>>>16);return a*c+(s>>>16)+((o*c>>>0)+(s&n)>>>16)}})},function(t,e,n){var r=n(8);r(r.S,"Math",{signbit:function(t){return(t=+t)!=t?t:0==t?1/t==1/0:t>0}})},function(t,e,n){"use strict";var r=n(8),i=n(9),o=n(4),u=n(208),a=n(214);r(r.P+r.R,"Promise",{finally:function(t){var e=u(this,i.Promise||o.Promise),n="function"==typeof t;return this.then(n?function(n){return a(e,t()).then(function(){return n})}:t,n?function(n){return a(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";var r=n(8),i=n(211),o=n(212);r(r.S,"Promise",{try:function(t){var e=i.f(this),n=o(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},function(t,e,n){var r=n(309),i=n(12),o=r.key,u=r.set;r.exp({defineMetadata:function(t,e,n,r){u(t,e,i(n),o(r))}})},function(t,e,n){var r=n(216),i=n(8),o=n(23)("metadata"),u=o.store||(o.store=new(n(221))),a=function(t,e,n){var i=u.get(t);if(!i){if(!n)return;u.set(t,i=new r)}var o=i.get(e);if(!o){if(!n)return;i.set(e,o=new r)}return o},c=function(t,e,n){var r=a(e,n,!1);return void 0!==r&&r.has(t)},s=function(t,e,n){var r=a(e,n,!1);return void 0===r?void 0:r.get(t)},f=function(t,e,n,r){a(n,r,!0).set(t,e)},l=function(t,e){var n=a(t,e,!1),r=[];return n&&n.forEach(function(t,e){r.push(e)}),r},h=function(t){return void 0===t||"symbol"==typeof t?t:String(t)},d=function(t){i(i.S,"Reflect",t)};t.exports={store:u,map:a,has:c,get:s,set:f,keys:l,key:h,exp:d}},function(t,e,n){var r=n(309),i=n(12),o=r.key,u=r.map,a=r.store;r.exp({deleteMetadata:function(t,e){var n=arguments.length<3?void 0:o(arguments[2]),r=u(i(e),n,!1);if(void 0===r||!r.delete(t))return!1;if(r.size)return!0;var c=a.get(e);return c.delete(n),!!c.size||a.delete(e)}})},function(t,e,n){var r=n(309),i=n(12),o=n(58),u=r.has,a=r.get,c=r.key,s=function(t,e,n){var r=u(t,e,n);if(r)return a(t,e,n);var i=o(e);return null!==i?s(t,i,n):void 0};r.exp({getMetadata:function(t,e){return s(t,i(e),arguments.length<3?void 0:c(arguments[2]))}})},function(t,e,n){var r=n(220),i=n(278),o=n(309),u=n(12),a=n(58),c=o.keys,s=o.key,f=function(t,e){var n=c(t,e),o=a(t);if(null===o)return n;var u=f(o,e);return u.length?n.length?i(new r(n.concat(u))):u:n};o.exp({getMetadataKeys:function(t){return f(u(t),arguments.length<2?void 0:s(arguments[1]))}})},function(t,e,n){var r=n(309),i=n(12),o=r.get,u=r.key;r.exp({getOwnMetadata:function(t,e){return o(t,i(e),arguments.length<3?void 0:u(arguments[2]))}})},function(t,e,n){var r=n(309),i=n(12),o=r.keys,u=r.key;r.exp({getOwnMetadataKeys:function(t){return o(i(t),arguments.length<2?void 0:u(arguments[1]))}})},function(t,e,n){var r=n(309),i=n(12),o=n(58),u=r.has,a=r.key,c=function(t,e,n){var r=u(t,e,n);if(r)return!0;var i=o(e);return null!==i&&c(t,i,n)};r.exp({hasMetadata:function(t,e){return c(t,i(e),arguments.length<3?void 0:a(arguments[2]))}})},function(t,e,n){var r=n(309),i=n(12),o=r.has,u=r.key;r.exp({hasOwnMetadata:function(t,e){return o(t,i(e),arguments.length<3?void 0:u(arguments[2]))}})},function(t,e,n){var r=n(309),i=n(12),o=n(21),u=r.key,a=r.set;r.exp({metadata:function(t,e){return function(n,r){a(t,e,(void 0!==r?i:o)(n),u(r))}}})},function(t,e,n){var r=n(8),i=n(210)(),o=n(4).process,u="process"==n(34)(o);r(r.G,{asap:function(t){var e=u&&o.domain;i(e?e.bind(t):t)}})},function(t,e,n){"use strict";var r=n(8),i=n(4),o=n(9),u=n(210)(),a=n(26)("observable"),c=n(21),s=n(12),f=n(206),l=n(215),h=n(10),d=n(207),p=d.RETURN,v=function(t){return null==t?void 0:c(t)},y=function(t){var e=t._c;e&&(t._c=void 0,e())},b=function(t){return void 0===t._o},g=function(t){b(t)||(t._o=void 0,y(t))},w=function(t,e){s(t),this._c=void 0,this._o=t,t=new m(this);try{var n=e(t),r=n;null!=n&&("function"==typeof n.unsubscribe?n=function(){r.unsubscribe()}:c(n),this._c=n)}catch(e){return void t.error(e)}b(this)&&y(this)};w.prototype=l({},{unsubscribe:function(){g(this)}});var m=function(t){this._s=t};m.prototype=l({},{next:function(t){var e=this._s;if(!b(e)){var n=e._o;try{var r=v(n.next);if(r)return r.call(n,t)}catch(t){try{g(e)}finally{throw t}}}},error:function(t){var e=this._s;if(b(e))throw t;var n=e._o;e._o=void 0;try{var r=v(n.error);if(!r)throw t;t=r.call(n,t)}catch(t){try{y(e)}finally{throw t}}return y(e),t},complete:function(t){var e=this._s;if(!b(e)){var n=e._o;e._o=void 0;try{var r=v(n.complete);t=r?r.call(n,t):void 0}catch(t){try{y(e)}finally{throw t}}return y(e),t}}});var _=function(t){f(this,_,"Observable","_f")._f=c(t)};l(_.prototype,{subscribe:function(t){return new w(t,this._f)},forEach:function(t){var e=this;return new(o.Promise||i.Promise)(function(n,r){c(t);var i=e.subscribe({next:function(e){try{return t(e)}catch(t){r(t),i.unsubscribe()}},error:r,complete:n})})}}),l(_,{from:function(t){var e="function"==typeof this?this:_,n=v(s(t)[a]);if(n){var r=s(n.call(t));return r.constructor===e?r:new e(function(t){return r.subscribe(t)})}return new e(function(e){var n=!1;return u(function(){if(!n){try{if(d(t,!1,function(t){if(e.next(t),n)return p})===p)return}catch(t){if(n)throw t;return void e.error(t)}e.complete()}}),function(){n=!0}})},of:function(){for(var t=0,e=arguments.length,n=new Array(e);t<e;)n[t]=arguments[t++];return new("function"==typeof this?this:_)(function(t){var e=!1;return u(function(){if(!e){for(var r=0;r<n.length;++r)if(t.next(n[r]),e)return;t.complete()}}),function(){e=!0}})}}),h(_.prototype,a,function(){return this}),r(r.G,{Observable:_}),n(193)("Observable")},function(t,e,n){var r=n(4),i=n(8),o=n(213),u=[].slice,a=/MSIE .\./.test(o),c=function(t){return function(e,n){var r=arguments.length>2,i=!!r&&u.call(arguments,2);return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,i)}:e,n)}};i(i.G+i.B+i.F*a,{setTimeout:c(r.setTimeout),setInterval:c(r.setInterval)})},function(t,e,n){var r=n(8),i=n(209);r(r.G+r.B,{setImmediate:i.set,clearImmediate:i.clear})},function(t,e,n){for(var r=n(194),i=n(30),o=n(18),u=n(4),a=n(10),c=n(129),s=n(26),f=s("iterator"),l=s("toStringTag"),h=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(d),v=0;v<p.length;v++){var y,b=p[v],g=d[b],w=u[b],m=w&&w.prototype;if(m&&(m[f]||a(m,f,h),m[l]||a(m,l,b),c[b]=h,g))for(y in r)m[y]||o(m,y,r[y],!0)}},function(t,e){!function(e){"use strict";function n(t,e,n,r){var o=e&&e.prototype instanceof i?e:i,u=Object.create(o.prototype),a=new d(r||[]);return u._invoke=s(t,n,a),u}function r(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function i(){}function o(){}function u(){}function a(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function n(e,i,o,u){var a=r(t[e],t,i);if("throw"!==a.type){var c=a.arg,s=c.value;return s&&"object"==typeof s&&g.call(s,"__await")?Promise.resolve(s.__await).then(function(t){n("next",t,o,u)},function(t){n("throw",t,o,u)}):Promise.resolve(s).then(function(t){c.value=t,o(c)},u)}u(a.arg)}function i(t,e){function r(){return new Promise(function(r,i){n(t,e,r,i)})}return o=o?o.then(r,r):r()}"object"==typeof e.process&&e.process.domain&&(n=e.process.domain.bind(n));var o;this._invoke=i}function s(t,e,n){var i=E;return function(o,u){if(i===M)throw new Error("Generator is already running");if(i===A){if("throw"===o)throw u;return v()}for(n.method=o,n.arg=u;;){var a=n.delegate;if(a){var c=f(a,n);if(c){if(c===k)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===E)throw i=A,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=M;var s=r(t,e,n);if("normal"===s.type){if(i=n.done?A:P,s.arg===k)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(i=A,n.method="throw",n.arg=s.arg)}}}function f(t,e){var n=t.iterator[e.method];if(n===y){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=y,f(t,e),"throw"===e.method))return k;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return k}var i=r(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,k;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=y),e.delegate=null,k):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,k)}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function h(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function p(t){if(t){var e=t[m];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(g.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=y,e.done=!0,e};return r.next=r}}return{next:v}}function v(){return{value:y,done:!0}}var y,b=Object.prototype,g=b.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},m=w.iterator||"@@iterator",_=w.asyncIterator||"@@asyncIterator",x=w.toStringTag||"@@toStringTag",S="object"==typeof t,O=e.regeneratorRuntime;if(O)return void(S&&(t.exports=O));O=e.regeneratorRuntime=S?t.exports:{},O.wrap=n;var E="suspendedStart",P="suspendedYield",M="executing",A="completed",k={},j={};j[m]=function(){return this};var I=Object.getPrototypeOf,T=I&&I(I(p([])));T&&T!==b&&g.call(T,m)&&(j=T);var F=u.prototype=i.prototype=Object.create(j);o.prototype=F.constructor=u,u.constructor=o,u[x]=o.displayName="GeneratorFunction",O.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===o||"GeneratorFunction"===(e.displayName||e.name))},O.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,x in t||(t[x]="GeneratorFunction")),t.prototype=Object.create(F),t},O.awrap=function(t){return{__await:t}},a(c.prototype),c.prototype[_]=function(){return this},O.AsyncIterator=c,O.async=function(t,e,r,i){var o=new c(n(t,e,r,i));return O.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},a(F),F[x]="Generator",F[m]=function(){return this},F.toString=function(){return"[object Generator]"},O.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},O.values=p,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(h),!t)for(var e in this)"t"===e.charAt(0)&&g.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return o.type="throw",o.arg=t,n.next=e,r&&(n.method="next",n.arg=y),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var u=g.call(i,"catchLoc"),a=g.call(i,"finallyLoc");if(u&&a){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&g.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,k):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),k},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),h(n),k}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;h(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:p(t),resultName:e,nextLoc:n
},"next"===this.method&&(this.arg=y),k}}}("object"==typeof global?global:"object"==typeof window?window:"object"==typeof self?self:this)},function(t,e,n){n(325),t.exports=n(9).RegExp.escape},function(t,e,n){var r=n(8),i=n(326)(/[\\^$*+?.()|[\]{}]/g,"\\$&");r(r.S,"RegExp",{escape:function(t){return i(t)}})},function(t,e){t.exports=function(t,e){var n=e===Object(e)?function(t){return e[t]}:e;return function(e){return String(e).replace(t,n)}}},function(t,e){!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function n(t){return"string"!=typeof t&&(t=String(t)),t}function r(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return b.iterable&&(e[Symbol.iterator]=function(){return e}),e}function i(t){this.map={},t instanceof i?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function o(t){return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function u(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function a(t){var e=new FileReader,n=u(e);return e.readAsArrayBuffer(t),n}function c(t){var e=new FileReader,n=u(e);return e.readAsText(t),n}function s(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}function f(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(b.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(b.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(b.arrayBuffer&&b.blob&&w(t))this._bodyArrayBuffer=f(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!b.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!m(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var t=o(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?o(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var t=o(this);if(t)return t;if(this._bodyBlob)return c(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(s(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function h(t){var e=t.toUpperCase();return _.indexOf(e)>-1?e:t}function d(t,e){e=e||{};var n=e.body;if(t instanceof d){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new i(t.headers)),this.method=t.method,this.mode=t.mode,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new i(e.headers)),this.method=h(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function p(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),i=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(i))}}),e}function v(t){var e=new i,n=t.replace(/\r?\n[\t ]+/g," ");return n.split(/\r?\n/).forEach(function(t){var n=t.split(":"),r=n.shift().trim();if(r){var i=n.join(":").trim();e.append(r,i)}}),e}function y(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new i(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var b={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(b.arrayBuffer)var g=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],w=function(t){return t&&DataView.prototype.isPrototypeOf(t)},m=ArrayBuffer.isView||function(t){return t&&g.indexOf(Object.prototype.toString.call(t))>-1};i.prototype.append=function(t,r){t=e(t),r=n(r);var i=this.map[t];this.map[t]=i?i+","+r:r},i.prototype.delete=function(t){delete this.map[e(t)]},i.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},i.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},i.prototype.set=function(t,r){this.map[e(t)]=n(r)},i.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},i.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),r(t)},i.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),r(t)},i.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),r(t)},b.iterable&&(i.prototype[Symbol.iterator]=i.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];d.prototype.clone=function(){return new d(this,{body:this._bodyInit})},l.call(d.prototype),l.call(y.prototype),y.prototype.clone=function(){return new y(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new i(this.headers),url:this.url})},y.error=function(){var t=new y(null,{status:0,statusText:""});return t.type="error",t};var x=[301,302,303,307,308];y.redirect=function(t,e){if(x.indexOf(e)===-1)throw new RangeError("Invalid status code");return new y(null,{status:e,headers:{location:t}})},t.Headers=i,t.Request=d,t.Response=y,t.fetch=function(t,e){return new Promise(function(n,r){var i=new d(t,e),o=new XMLHttpRequest;o.onload=function(){var t={status:o.status,statusText:o.statusText,headers:v(o.getAllResponseHeaders()||"")};t.url="responseURL"in o?o.responseURL:t.headers.get("X-Request-URL");var e="response"in o?o.response:o.responseText;n(new y(e,t))},o.onerror=function(){r(new TypeError("Network request failed"))},o.ontimeout=function(){r(new TypeError("Network request failed"))},o.open(i.method,i.url,!0),"include"===i.credentials?o.withCredentials=!0:"omit"===i.credentials&&(o.withCredentials=!1),"responseType"in o&&b.blob&&(o.responseType="blob"),i.headers.forEach(function(t,e){o.setRequestHeader(e,t)}),o.send("undefined"==typeof i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(){var t=(0,u.default)((0,c.default)());try{return void 0===t.ua?"":t.ua}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=n(329),u=r(o),a=n(333),c=r(a)},function(t,e,n){var r;(function(t){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(o,u){var a="0.7.31",c="",s="?",f="function",l="undefined",h="object",d="string",p="major",v="model",y="name",b="type",g="vendor",w="version",m="architecture",_="console",x="mobile",S="tablet",O="smarttv",E="wearable",P="embedded",M=350,A="Amazon",k="Apple",j="ASUS",I="BlackBerry",T="Browser",F="Chrome",N="Edge",R="Firefox",C="Google",L="Huawei",B="LG",D="Microsoft",U="Motorola",G="Opera",W="Samsung",V="Sony",z="Xiaomi",q="Zebra",H="Facebook",J=function(t,e){var n={};for(var r in t)e[r]&&e[r].length%2===0?n[r]=e[r].concat(t[r]):n[r]=t[r];return n},K=function(t){for(var e={},n=0;n<t.length;n++)e[t[n].toUpperCase()]=t[n];return e},Y=function(t,e){return("undefined"==typeof t?"undefined":i(t))===d&&X(e).indexOf(X(t))!==-1},X=function(t){return t.toLowerCase()},$=function(t){return("undefined"==typeof t?"undefined":i(t))===d?t.replace(/[^\d\.]/g,c).split(".")[0]:u},Z=function(t,e){if(("undefined"==typeof t?"undefined":i(t))===d)return t=t.replace(/^\s\s*/,c).replace(/\s\s*$/,c),("undefined"==typeof e?"undefined":i(e))===l?t:t.substring(0,M)},Q=function(t,e){for(var n,r,o,a,c,s,l=0;l<e.length&&!c;){var d=e[l],p=e[l+1];for(n=r=0;n<d.length&&!c;)if(c=d[n++].exec(t))for(o=0;o<p.length;o++)s=c[++r],a=p[o],("undefined"==typeof a?"undefined":i(a))===h&&a.length>0?2===a.length?i(a[1])==f?this[a[0]]=a[1].call(this,s):this[a[0]]=a[1]:3===a.length?i(a[1])!==f||a[1].exec&&a[1].test?this[a[0]]=s?s.replace(a[1],a[2]):u:this[a[0]]=s?a[1].call(this,s,a[2]):u:4===a.length&&(this[a[0]]=s?a[3].call(this,s.replace(a[1],a[2])):u):this[a]=s?s:u;l+=2}},tt=function(t,e){for(var n in e)if(i(e[n])===h&&e[n].length>0){for(var r=0;r<e[n].length;r++)if(Y(e[n][r],t))return n===s?u:n}else if(Y(e[n],t))return n===s?u:n;return t},et={"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},nt={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},rt={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[w,[y,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[w,[y,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[y,w],[/opios[\/ ]+([\w\.]+)/i],[w,[y,G+" Mini"]],[/\bopr\/([\w\.]+)/i],[w,[y,G]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[y,w],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[w,[y,"UC"+T]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[w,[y,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[w,[y,"WeChat"]],[/konqueror\/([\w\.]+)/i],[w,[y,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[w,[y,"IE"]],[/yabrowser\/([\w\.]+)/i],[w,[y,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[y,/(.+)/,"$1 Secure "+T],w],[/\bfocus\/([\w\.]+)/i],[w,[y,R+" Focus"]],[/\bopt\/([\w\.]+)/i],[w,[y,G+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[w,[y,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[w,[y,"Dolphin"]],[/coast\/([\w\.]+)/i],[w,[y,G+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[w,[y,"MIUI "+T]],[/fxios\/([-\w\.]+)/i],[w,[y,R]],[/\bqihu|(qi?ho?o?|360)browser/i],[[y,"360 "+T]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[y,/(.+)/,"$1 "+T],w],[/(comodo_dragon)\/([\w\.]+)/i],[[y,/_/g," "],w],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[y,w],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[y],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[y,H],w],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[y,w],[/\bgsa\/([\w\.]+) .*safari\//i],[w,[y,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[w,[y,F+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[y,F+" WebView"],w],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[w,[y,"Android "+T]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[y,w],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[w,[y,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[w,y],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[y,[w,tt,et]],[/(webkit|khtml)\/([\w\.]+)/i],[y,w],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[y,"Netscape"],w],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[w,[y,R+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[y,w]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[m,"amd64"]],[/(ia32(?=;))/i],[[m,X]],[/((?:i[346]|x)86)[;\)]/i],[[m,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[m,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[m,"armhf"]],[/windows (ce|mobile); ppc;/i],[[m,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[m,/ower/,c,X]],[/(sun4\w)[;\)]/i],[[m,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[m,X]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[v,[g,W],[b,S]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[v,[g,W],[b,x]],[/\((ip(?:hone|od)[\w ]*);/i],[v,[g,k],[b,x]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[v,[g,k],[b,S]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[v,[g,L],[b,S]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[v,[g,L],[b,x]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[v,/_/g," "],[g,z],[b,x]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[v,/_/g," "],[g,z],[b,S]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[v,[g,"OPPO"],[b,x]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[v,[g,"Vivo"],[b,x]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[v,[g,"Realme"],[b,x]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[v,[g,U],[b,x]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[v,[g,U],[b,S]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[v,[g,B],[b,S]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[v,[g,B],[b,x]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[v,[g,"Lenovo"],[b,S]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[v,/_/g," "],[g,"Nokia"],[b,x]],[/(pixel c)\b/i],[v,[g,C],[b,S]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[v,[g,C],[b,x]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[v,[g,V],[b,x]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[v,"Xperia Tablet"],[g,V],[b,S]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[v,[g,"OnePlus"],[b,x]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[v,[g,A],[b,S]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[v,/(.+)/g,"Fire Phone $1"],[g,A],[b,x]],[/(playbook);[-\w\),; ]+(rim)/i],[v,g,[b,S]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[v,[g,I],[b,x]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[v,[g,j],[b,S]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[v,[g,j],[b,x]],[/(nexus 9)/i],[v,[g,"HTC"],[b,S]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],[g,[v,/_/g," "],[b,x]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[v,[g,"Acer"],[b,S]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[v,[g,"Meizu"],[b,x]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[v,[g,"Sharp"],[b,x]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[g,v,[b,x]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[g,v,[b,S]],[/(surface duo)/i],[v,[g,D],[b,S]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[v,[g,"Fairphone"],[b,x]],[/(u304aa)/i],[v,[g,"AT&T"],[b,x]],[/\bsie-(\w*)/i],[v,[g,"Siemens"],[b,x]],[/\b(rct\w+) b/i],[v,[g,"RCA"],[b,S]],[/\b(venue[\d ]{2,7}) b/i],[v,[g,"Dell"],[b,S]],[/\b(q(?:mv|ta)\w+) b/i],[v,[g,"Verizon"],[b,S]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[v,[g,"Barnes & Noble"],[b,S]],[/\b(tm\d{3}\w+) b/i],[v,[g,"NuVision"],[b,S]],[/\b(k88) b/i],[v,[g,"ZTE"],[b,S]],[/\b(nx\d{3}j) b/i],[v,[g,"ZTE"],[b,x]],[/\b(gen\d{3}) b.+49h/i],[v,[g,"Swiss"],[b,x]],[/\b(zur\d{3}) b/i],[v,[g,"Swiss"],[b,S]],[/\b((zeki)?tb.*\b) b/i],[v,[g,"Zeki"],[b,S]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[g,"Dragon Touch"],v,[b,S]],[/\b(ns-?\w{0,9}) b/i],[v,[g,"Insignia"],[b,S]],[/\b((nxa|next)-?\w{0,9}) b/i],[v,[g,"NextBook"],[b,S]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[g,"Voice"],v,[b,x]],[/\b(lvtel\-)?(v1[12]) b/i],[[g,"LvTel"],v,[b,x]],[/\b(ph-1) /i],[v,[g,"Essential"],[b,x]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[v,[g,"Envizen"],[b,S]],[/\b(trio[-\w\. ]+) b/i],[v,[g,"MachSpeed"],[b,S]],[/\btu_(1491) b/i],[v,[g,"Rotor"],[b,S]],[/(shield[\w ]+) b/i],[v,[g,"Nvidia"],[b,S]],[/(sprint) (\w+)/i],[g,v,[b,x]],[/(kin\.[onetw]{3})/i],[[v,/\./g," "],[g,D],[b,x]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[v,[g,q],[b,S]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[v,[g,q],[b,x]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[g,v,[b,_]],[/droid.+; (shield) bui/i],[v,[g,"Nvidia"],[b,_]],[/(playstation [345portablevi]+)/i],[v,[g,V],[b,_]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[v,[g,D],[b,_]],[/smart-tv.+(samsung)/i],[g,[b,O]],[/hbbtv.+maple;(\d+)/i],[[v,/^/,"SmartTV"],[g,W],[b,O]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[g,B],[b,O]],[/(apple) ?tv/i],[g,[v,k+" TV"],[b,O]],[/crkey/i],[[v,F+"cast"],[g,C],[b,O]],[/droid.+aft(\w)( bui|\))/i],[v,[g,A],[b,O]],[/\(dtv[\);].+(aquos)/i],[v,[g,"Sharp"],[b,O]],[/(bravia[\w- ]+) bui/i],[v,[g,V],[b,O]],[/(mitv-\w{5}) bui/i],[v,[g,z],[b,O]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[g,Z],[v,Z],[b,O]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[b,O]],[/((pebble))app/i],[g,v,[b,E]],[/droid.+; (glass) \d/i],[v,[g,C],[b,E]],[/droid.+; (wt63?0{2,3})\)/i],[v,[g,q],[b,E]],[/(quest( 2)?)/i],[v,[g,H],[b,E]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[g,[b,P]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[v,[b,x]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[v,[b,S]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[b,S]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[b,x]],[/(android[-\w\. ]{0,9});.+buil/i],[v,[g,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[w,[y,N+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[w,[y,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[y,w],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[w,y]],os:[[/microsoft (windows) (vista|xp)/i],[y,w],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[y,[w,tt,nt]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[y,"Windows"],[w,tt,nt]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[w,/_/g,"."],[y,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[y,"Mac OS"],[w,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[w,y],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[y,w],[/\(bb(10);/i],[w,[y,I]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[w,[y,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[w,[y,R+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[w,[y,"webOS"]],[/crkey\/([\d\.]+)/i],[w,[y,F+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[y,"Chromium OS"],w],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[y,w],[/(sunos) ?([\w\.\d]*)/i],[[y,"Solaris"],w],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[y,w]]},it=function t(e,n){if(("undefined"==typeof e?"undefined":i(e))===h&&(n=e,e=u),!(this instanceof t))return new t(e,n).getResult();var r=e||(("undefined"==typeof o?"undefined":i(o))!==l&&o.navigator&&o.navigator.userAgent?o.navigator.userAgent:c),a=n?J(rt,n):rt;return this.getBrowser=function(){var t={};return t[y]=u,t[w]=u,Q.call(t,r,a.browser),t.major=$(t.version),t},this.getCPU=function(){var t={};return t[m]=u,Q.call(t,r,a.cpu),t},this.getDevice=function(){var t={};return t[g]=u,t[v]=u,t[b]=u,Q.call(t,r,a.device),t},this.getEngine=function(){var t={};return t[y]=u,t[w]=u,Q.call(t,r,a.engine),t},this.getOS=function(){var t={};return t[y]=u,t[w]=u,Q.call(t,r,a.os),t},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(t){return r=("undefined"==typeof t?"undefined":i(t))===d&&t.length>M?Z(t,M):t,this},this.setUA(r),this};it.VERSION=a,it.BROWSER=K([y,w,p]),it.CPU=K([m]),it.DEVICE=K([v,g,b,_,x,O,S,E,P]),it.ENGINE=it.OS=K([y,w]),i(e)!==l?(i(t)!==l&&t.exports&&(e=t.exports=it),e.UAParser=it):i(n(331))===f&&n(332)?(r=function(){return it}.call(e,n,e,t),!(r!==u&&(t.exports=r))):("undefined"==typeof o?"undefined":i(o))!==l&&(o.UAParser=it);var ot=("undefined"==typeof o?"undefined":i(o))!==l&&(o.jQuery||o.Zepto);if(ot&&!ot.ua){var ut=new it;ot.ua=ut.getResult(),ot.ua.get=function(){return ut.getUA()},ot.ua.set=function(t){ut.setUA(t);var e=ut.getResult();for(var n in e)ot.ua[n]=e[n]}}}("object"===("undefined"==typeof window?"undefined":i(window))?window:void 0)}).call(e,n(330)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},function(t,e){(function(e){t.exports=e}).call(e,{})},function(t,e){"use strict";function n(){try{var t=navigator.userAgent;return t}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(){var t=(0,u.default)((0,c.default)());try{return void 0===t.browser.name?"":t.browser.name}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=n(329),u=r(o),a=n(333),c=r(a)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(){var t=(0,u.default)((0,c.default)());try{return void 0===t.browser.version?"":t.browser.version}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=n(329),u=r(o),a=n(333),c=r(a)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(){var t=(0,u.default)((0,c.default)());try{return void 0===t.browser.major?"":t.browser.major}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=n(329),u=r(o),a=n(333),c=r(a)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(){var t=(0,u.default)((0,c.default)());try{return void 0===t.engine.name?"":t.engine.name}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=n(329),u=r(o),a=n(333),c=r(a)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(){var t=(0,u.default)((0,c.default)());try{return void 0===t.engine.version?"":t.engine.version}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=n(329),u=r(o),a=n(333),c=r(a)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(){var t=(0,u.default)((0,c.default)());try{return void 0===t.os.name?"":t.os.name}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=n(329),u=r(o),a=n(333),c=r(a)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(){var t=(0,u.default)((0,c.default)());try{return void 0===t.os.version?"":t.os.version}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=n(329),u=r(o),a=n(333),c=r(a)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(){var t=(0,u.default)((0,c.default)());try{return void 0===t.device.vendor?"":t.device.vendor}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=n(329),u=r(o),a=n(333),c=r(a)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(){var t=window.screen.height,e=window.screen.width;return t<=480?"2/3":320===e&&480===t?"4":320===e&&568===t?"5/SE":375===e&&667===t?"6/7/8":414===e&&736===t?"6+/7+/8+":375===e&&812===t?"X":""}function o(){var t=(0,a.default)((0,s.default)());try{return void 0===t.device.model?"":t.device.model.match("iPhone")?t.device.model+" "+i():t.device.model}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var u=n(329),a=r(u),c=n(333),s=r(c)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(){var t=(0,u.default)((0,c.default)());try{return void 0===t.device.type?"":t.device.type}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=n(329),u=r(o),a=n(333),c=r(a)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(){var t=(0,u.default)((0,c.default)());try{return void 0===t.cpu.architecture?"":t.cpu.architecture}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=n(329),u=r(o),a=n(333),c=r(a)},function(t,e){"use strict";function n(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function r(i,o){try{var u=e[i](o),a=u.value}catch(t){return void n(t)}return u.done?void t(a):Promise.resolve(a).then(function(t){r("next",t)},function(t){r("throw",t)})}return r("next")})}}function r(){var t,e=navigator.userAgent,n=e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(n[1])?(t=/\brv[ :]+(\d+)/g.exec(e)||[],"IE "+(t[1]||"")):"Chrome"===n[1]&&(t=e.match(/\b(OPR|Edge)\/(\d+)/),null!=t)?t.slice(1).join(" ").replace("OPR","Opera"):(n=n[2]?[n[1],n[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(t=e.match(/version\/(\d+)/i))&&n.splice(1,1,t[1]),n.join(" "))}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var t=n(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!("storage"in navigator&&"estimate"in navigator.storage)){t.next=26;break}return t.next=3,navigator.storage.estimate();case 3:if(e=t.sent,n=e.quota,!(n<12e8)){t.next=9;break}return t.abrupt("return",1);case 9:if(!(n<12e7)){t.next=13;break}return t.abrupt("return",1);case 13:if(!(n<12e6)){t.next=17;break}return t.abrupt("return",1);case 17:if(!(n<12e5)){t.next=21;break}return t.abrupt("return",1);case 21:if(!(n<12e4)){t.next=25;break}return t.abrupt("return",1);case 25:return t.abrupt("return",0);case 26:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),o=r().toUpperCase();e.default=function(){function t(){return e.apply(this,arguments)}var e=n(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(t){var e=function(){return t("1")},n=function(){return t("0")},r=function(){try{localStorage.length?n():(localStorage.x=1,localStorage.removeItem("x"),n())}catch(t){navigator.cookieEnabled?e():n()}};if(o.match("CHROME"))return i().then(function(t){return 1===t?e():n()});if("MozAppearance"in document.documentElement.style){var u=indexedDB.open("test");return u.onerror=e,void(u.onsuccess=n)}return/constructor/i.test(window.HTMLElement)?r():window.indexedDB||!window.PointerEvent&&!window.MSPointerEvent?n():e()}));case 1:case"end":return t.stop()}},t,this)}));return t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(){var t=(0,u.default)((0,c.default)());try{if(void 0===t.os.version||void 0===t.os.name)return"";var e=t.os.version.split(".")[0];return t.os.name+" "+e}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=n(329),u=r(o),a=n(333),c=r(a)},function(t,e){"use strict";function n(){try{var t=navigator.language||navigator.userLanguage;return t}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){var t=window.screen.colorDepth;try{return void 0===t?"":t.toString()}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){var t=navigator.deviceMemory;try{return void 0===navigator.deviceMemory?"":t.toString()}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){try{var t=navigator.hardwareConcurrency;return t.toString()}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){try{var t=window.screen.width+"x"+window.screen.height;return t}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){try{var t=window.screen.availWidth+"x"+window.screen.availHeight;
return t}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){try{var t=new Date,e=t.getTimezoneOffset();return e.toString()}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){try{return window.sessionStorage?"0":"1"}catch(t){return"1"}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){try{return navigator.cookieEnabled?"1":"0"}catch(t){return"0"}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){var t="test";try{return localStorage.setItem(t,t),localStorage.removeItem(t),"1"}catch(t){return"0"}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){try{return window.indexedDB?"0":"1"}catch(t){return"1"}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){try{return void 0===navigator.cpuClass?"":navigator.cpuClass}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){try{return window.openDatabase?"1":"0"}catch(t){return"0"}};e.default=n},function(t,e){"use strict";function n(){try{return navigator.platform}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){return!!window.WebGLRenderingContext&&!!document.createElement("canvas").getContext("experimental-webgl",{antialias:!1})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){var t,e,n,r=document.createElement("canvas");try{t=r.getContext("webgl")||r.getContext("experimental-webgl")}catch(t){}return t?(e=t.getExtension("WEBGL_debug_renderer_info"),n=t.getParameter(e.UNMASKED_RENDERER_WEBGL),void 0===n?"":n):""}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){try{var t=(new Date).toTimeString().slice(9);return t}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){try{var t=(new Date).getTimezoneOffset()/-60;return t}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){try{var t=Intl.DateTimeFormat().resolvedOptions().timeZone;return t}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){try{var t=navigator.deviceMemory;return t.toString()}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){try{for(var t=0,e=0;e<navigator.hardwareConcurrency;e++)t++;return t.toString()}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function r(i,o){try{var u=e[i](o),a=u.value}catch(t){return void n(t)}return u.done?void t(a):Promise.resolve(a).then(function(t){r("next",t)},function(t){r("throw",t)})}return r("next")})}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){function t(){return e.apply(this,arguments)}var e=n(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=navigator.mediaDevices,e&&e.enumerateDevices){t.next=3;break}return t.abrupt("return","0");case 3:return t.next=5,e.enumerateDevices();case 5:return n=t.sent,t.abrupt("return",n.some(function(t){return"videoinput"===t.kind})?"1":"0");case 7:case"end":return t.stop()}},t,this)}));return t}()},function(t,e){"use strict";function n(){r(),s=c.currentTime,i(),o()}function r(){var t=window.OfflineAudioContext||window.webkitOfflineAudioContext;c=new t(1,44100,44100)}function i(){f=c.createOscillator(),f.type="triangle",f.frequency.setValueAtTime(1e4,s)}function o(){l=c.createDynamicsCompressor(),u("threshold",-50),u("knee",40),u("ratio",12),u("reduction",-20),u("attack",0),u("release",.25)}function u(t,e){void 0!==l[t]&&"function"==typeof l[t].setValueAtTime&&l[t].setValueAtTime(e,c.currentTime)}function a(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise(function(e,r){try{n(),f.connect(l),l.connect(c.destination),f.start(0),c.startRendering(),c.oncomplete=function(t){l.disconnect();for(var n=null,r=4500;5e3>r;r++){var i=t.renderedBuffer.getChannelData(0)[r];n+=Math.abs(i)}h=n.toString(),e(h)}}catch(e){if(r(e),t)throw e}})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var c=null,s=null,f=null,l=null,h=null},function(t,e){"use strict";function n(){try{var t=document.createElement("canvas");t.hidden=!0;var e=t.getContext("2d"),n="i9asdm..$#po((^@KbXrww!~cz";e.textBaseline="top",e.font="16px 'Arial'",e.textBaseline="alphabetic",e.rotate(0),e.fillStyle="#f60",e.fillRect(125,1,62,20),e.fillStyle="#069",e.fillText(n,2,15),e.fillStyle="rgba(102, 200, 0, 0.7)",e.fillText(n,4,17),e.shadowBlur=10,e.shadowColor="blue",e.fillRect(-20,10,234,5);var r=t.toDataURL();document.body.appendChild(t);var i=0;if(0==r.length)return"";for(var o=0;o<r.length;o++){var u=r.charCodeAt(o);i=(i<<5)-i+u,i&=i}return i}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){try{return navigator.plugins.length.toString()}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){try{var t=["monospace","sans-serif","serif"],e=["Andale Mono","Arial","Arial Black","Arial Hebrew","Arial MT","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Bitstream Vera Sans Mono","Book Antiqua","Bookman Old Style","Calibri","Cambria","Cambria Math","Century","Century Gothic","Century Schoolbook","Comic Sans","Comic Sans MS","Consolas","Courier","Courier New","Geneva","Georgia","Helvetica","Helvetica Neue","Impact","Lucida Bright","Lucida Calligraphy","Lucida Console","Lucida Fax","LUCIDA GRANDE","Lucida Handwriting","Lucida Sans","Lucida Sans Typewriter","Lucida Sans Unicode","Microsoft Sans Serif","Monaco","Monotype Corsiva","MS Gothic","MS Outlook","MS PGothic","MS Reference Sans Serif","MS Sans Serif","MS Serif","MYRIAD","MYRIAD PRO","Palatino","Palatino Linotype","Segoe Print","Segoe Script","Segoe UI","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Tahoma","Times","Times New Roman","Times New Roman PS","Trebuchet MS","Verdana","Wingdings","Wingdings 2","Wingdings 3"];e=e.filter(function(t,n){return e.indexOf(t)===n});var n="mmmmmmmmmmlli",r="72px",i=document.getElementsByTagName("body")[0],o=document.createElement("div"),u=document.createElement("div"),a={},c={},s=function(){var t=document.createElement("span");return t.style.position="absolute",t.style.left="-9999px",t.style.fontSize=r,t.style.fontStyle="normal",t.style.fontWeight="normal",t.style.letterSpacing="normal",t.style.lineBreak="auto",t.style.lineHeight="normal",t.style.textTransform="none",t.style.textAlign="left",t.style.textDecoration="none",t.style.textShadow="none",t.style.whiteSpace="normal",t.style.wordBreak="normal",t.style.wordSpacing="normal",t.innerHTML=n,t},f=function(t,e){var n=s();return n.style.fontFamily="'"+t+"',"+e,n},l=function(){for(var e=[],n=0,r=t.length;n<r;n++){var i=s();i.style.fontFamily=t[n],o.appendChild(i),e.push(i)}return e},h=function(){for(var n={},r=0,i=e.length;r<i;r++){for(var o=[],a=0,c=t.length;a<c;a++){var s=f(e[r],t[a]);u.appendChild(s),o.push(s)}n[e[r]]=o}return n},d=function(e){for(var n=!1,r=0;r<t.length;r++)if(n=e[r].offsetWidth!==a[t[r]]||e[r].offsetHeight!==c[t[r]])return n;return n},p=l();i.appendChild(o);for(var v=0,y=t.length;v<y;v++)a[t[v]]=p[v].offsetWidth,c[t[v]]=p[v].offsetHeight;var b=h();i.appendChild(u);for(var g=[],w=0,m=e.length;w<m;w++)d(b[e[w]])&&g.push(e[w]);return i.removeChild(u),i.removeChild(o),g.length.toString()}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){var t=document.createElement("div");t.innerHTML="&nbsp;",t.className="adsbox";var e="0";try{document.body.appendChild(t),e=0===document.getElementsByClassName("adsbox")[0].offsetHeight,document.body.removeChild(t),e=e?"1":"0"}catch(t){e="0"}return e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){if("undefined"!=typeof navigator.languages)try{var t=navigator.languages[0].substr(0,2);if(t!==navigator.language.substr(0,2))return"1"}catch(t){return"1"}return"0"}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){try{return window.screen.width<window.screen.availWidth?"1":window.screen.height<window.screen.availHeight?"1":"0"}catch(t){return"0"}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){try{var t,e=navigator.userAgent.toLowerCase(),n=navigator.oscpu,r=navigator.platform.toLowerCase();t=e.indexOf("windows phone")>=0?"Windows Phone":e.indexOf("win")>=0?"Windows":e.indexOf("android")>=0?"Android":e.indexOf("linux")>=0?"Linux":e.indexOf("iphone")>=0||e.indexOf("ipad")>=0?"iOS":e.indexOf("mac")>=0?"Mac":"Other";var i;if(i="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,i&&"Windows Phone"!==t&&"Android"!==t&&"iOS"!==t&&"Other"!==t)return"1";if("undefined"!=typeof n){if(n=n.toLowerCase(),n.indexOf("win")>=0&&"Windows"!==t&&"Windows Phone"!==t)return"1";if(n.indexOf("linux")>=0&&"Linux"!==t&&"Android"!==t)return"1";if(n.indexOf("mac")>=0&&"Mac"!==t&&"iOS"!==t)return"1";if((n.indexOf("win")===-1&&n.indexOf("linux")===-1&&n.indexOf("mac")===-1)!=("Other"===t))return"1"}return r.indexOf("win")>=0&&"Windows"!==t&&"Windows Phone"!==t?"1":(r.indexOf("linux")>=0||r.indexOf("android")>=0||r.indexOf("pike")>=0)&&"Linux"!==t&&"Android"!==t?"1":(r.indexOf("mac")>=0||r.indexOf("ipad")>=0||r.indexOf("ipod")>=0||r.indexOf("iphone")>=0)&&"Mac"!==t&&"iOS"!==t?"1":(r.indexOf("win")===-1&&r.indexOf("linux")===-1&&r.indexOf("mac")===-1)!=("Other"===t)?"1":"undefined"==typeof navigator.plugins&&"Windows"!==t&&"Windows Phone"!==t?"1":"0"}catch(t){return"0"}};e.default=n},function(t,e){"use strict";function n(){try{var t,e=navigator.userAgent.toLowerCase(),n=navigator.productSub;if(t=e.indexOf("firefox")>=0?"Firefox":e.indexOf("opera")>=0||e.indexOf("opr")>=0?"Opera":e.indexOf("chrome")>=0?"Chrome":e.indexOf("safari")>=0?"Safari":e.indexOf("trident")>=0?"Internet Explorer":"Other",("Chrome"===t||"Safari"===t||"Opera"===t)&&"20030107"!==n)return"1";var r=eval.toString().length;if(37===r&&"Safari"!==t&&"Firefox"!==t&&"Other"!==t)return"1";if(39===r&&"Internet Explorer"!==t&&"Other"!==t)return"1";if(33===r&&"Chrome"!==t&&"Opera"!==t&&"Other"!==t)return"1";var i;try{throw"a"}catch(t){try{t.toSource(),i=!0}catch(t){i=!1}}return i&&"Firefox"!==t&&"Other"!==t?"1":"0"}catch(t){return"0"}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){try{return document.createEvent("TouchEvent"),"1"}catch(t){return"0"}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(){var t,e=navigator.userAgent,n=e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(n[1])?(t=/\brv[ :]+(\d+)/g.exec(e)||[],"IE "+(t[1]||"")):"Chrome"===n[1]&&(t=e.match(/\b(OPR|Edge)\/(\d+)/),null!=t)?t.slice(1).join(" ").replace("OPR","Opera"):(n=n[2]?[n[1],n[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(t=e.match(/version\/(\d+)/i))&&n.splice(1,1,t[1]),n.join(" "))}function r(){if(i.match("CHROME")||i.match("FIREFOX")||i.match("OPERA")){var t=new Promise(function(t){var e=window,n=new(e.RTCPeerConnection||e.mozRTCPeerConnection||e.webkitRTCPeerConnection)({iceServers:[]}),r=function(){};n.createDataChannel(""),n.createOffer(function(t){return n.setLocalDescription(t,r,r)},r),n.onicecandidate=function(e){try{e.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(t)}catch(t){}}});return new Promise(function(e,n){var r=setTimeout(function(){n(new Error("Promise timeout!"))},500);t.then(function(t){clearTimeout(r),e(t)}).catch(function(t){clearTimeout(r),n(t)})})}return""}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var i=n().toUpperCase()},function(t,e){"use strict";function n(){try{return void 0===r(window.location.host)||null===window.location.host?"":window.location.host}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=n},function(t,e){"use strict";function n(){try{return void 0===r(window.location.hostname)||null===window.location.hostname?"":window.location.hostname}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=n},function(t,e){"use strict";function n(){try{return void 0===r(window.location.href)||null===window.location.href?"":window.location.href}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=n},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){try{return void 0===n(document.referrer)||null===document.referrer?"":document.referrer}catch(t){return""}};e.default=r},function(t,e){"use strict";function n(){try{return void 0===r(window.location.pathname)||null===window.location.pathname?"":window.location.pathname}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=n},function(t,e){"use strict";function n(){try{return void 0===r(window.location.port)||null===window.location.port?"":window.location.port}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=n},function(t,e){"use strict";function n(){try{return void 0===r(window.location.protocolt)||null===window.location.protocol?"":window.location.protocol}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n){try{var r=new Date;r.setTime(r.getTime()+3600*n*1e3*24*365);var i="expires="+r.toUTCString();document.cookie=t+"="+e+";"+i+";path=/"}catch(t){}}function o(t){try{for(var e=t+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var i=n[r];" "===i.charAt(0);)i=i.substring(1);if(0===i.indexOf(e))return i.substring(e.length,i.length)}return""}catch(t){return""}}Object.defineProperty(e,"__esModule",{value:!0}),e.checkCookie=e.getDataCookie=void 0;var u=n(388),a=r(u),c=function(){return o("UUID")},s=function(){var t=o("UUID");""!==t||(t=(0,a.default)(1),""!==t&&null!==t&&i("UUID",t,10))};e.getDataCookie=c,e.checkCookie=s},function(t,e,n){"use strict";function r(t){var e=new Uint32Array(t),n=window.crypto||window.msCrypto;n.getRandomValues(e);for(var r=0,o=0;o<e.length;o++)r+=e[o];return(0,i.sha256)(r.toString()).substr(0,32)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var i=n(389)},function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;(function(module){"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function t(t,e){e?(d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=t}function i(e,n,r){var i,o="undefined"==typeof e?"undefined":_typeof(e);if("string"===o){var u,a=[],c=e.length,s=0;for(i=0;i<c;++i)(u=e.charCodeAt(i))<128?a[s++]=u:u<2048?(a[s++]=192|u>>6,a[s++]=128|63&u):u<55296||u>=57344?(a[s++]=224|u>>12,a[s++]=128|u>>6&63,a[s++]=128|63&u):(u=65536+((1023&u)<<10|1023&e.charCodeAt(++i)),a[s++]=240|u>>18,a[s++]=128|u>>12&63,a[s++]=128|u>>6&63,a[s++]=128|63&u);e=a}else{if("object"!==o)throw new Error(h);if(null===e)throw new Error(h);if(f&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||f&&ArrayBuffer.isView(e)))throw new Error(h)}e.length>64&&(e=new t(n,!0).update(e).array());var l=[],d=[];for(i=0;i<64;++i){var p=e[i]||0;l[i]=92^p,d[i]=54^p}t.call(this,n,r),this.update(d),this.oKeyPad=l,this.inner=!0,this.sharedMemory=r}var h="input is invalid type",r="object"==("undefined"==typeof window?"undefined":_typeof(window)),s=r?window:{};s.JS_SHA256_NO_WINDOW&&(r=!1);var e=!r&&"object"==("undefined"==typeof self?"undefined":_typeof(self)),n=!s.JS_SHA256_NO_NODE_JS&&"object"==("undefined"==typeof process?"undefined":_typeof(process))&&process.versions&&process.versions.node;n?s=global:e&&(s=self);var o=!s.JS_SHA256_NO_COMMON_JS&&"object"==_typeof(module)&&module.exports,a=__webpack_require__(332),f=!s.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,u="0123456789abcdef".split(""),c=[-2147483648,8388608,32768,128],y=[24,16,8,0],p=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],l=["hex","array","digest","arrayBuffer"],d=[];!s.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!f||!s.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==("undefined"==typeof t?"undefined":_typeof(t))&&t.buffer&&t.buffer.constructor===ArrayBuffer});var A=function(e,n){return function(r){return new t(n,!0).update(r)[e]()}},w=function(e){var r=A("hex",e);n&&(r=b(r,e)),r.create=function(){return new t(e)},r.update=function(t){return r.create().update(t)};for(var i=0;i<l.length;++i){var o=l[i];r[o]=A(o,e)}return r},b=function b(t,i){var r=eval("require('crypto')"),s=eval("require('buffer').Buffer"),e=i?"sha224":"sha256",n=function(n){if("string"==typeof n)return r.createHash(e).update(n,"utf8").digest("hex");if(null===n||void 0===n)throw new Error(h);return n.constructor===ArrayBuffer&&(n=new Uint8Array(n)),Array.isArray(n)||ArrayBuffer.isView(n)||n.constructor===s?r.createHash(e).update(new s(n)).digest("hex"):t(n)};return n},v=function(t,e){return function(n,r){return new i(n,e,!0).update(r)[t]()}},_=function(t){var e=v("hex",t);e.create=function(e){return new i(e,t)},e.update=function(t,n){return e.create(t).update(n)};for(var n=0;n<l.length;++n){var r=l[n];e[r]=v(r,t)}return e};t.prototype.update=function(t){if(!this.finalized){var e,n="undefined"==typeof t?"undefined":_typeof(t);if("string"!==n){if("object"!==n)throw new Error(h);if(null===t)throw new Error(h);if(f&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||f&&ArrayBuffer.isView(t)))throw new Error(h);e=!0}for(var r,i,o=0,u=t.length,a=this.blocks;o<u;){if(this.hashed&&(this.hashed=!1,a[0]=this.block,a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),e)for(i=this.start;o<u&&i<64;++o)a[i>>2]|=t[o]<<y[3&i++];else for(i=this.start;o<u&&i<64;++o)(r=t.charCodeAt(o))<128?a[i>>2]|=r<<y[3&i++]:r<2048?(a[i>>2]|=(192|r>>6)<<y[3&i++],a[i>>2]|=(128|63&r)<<y[3&i++]):r<55296||r>=57344?(a[i>>2]|=(224|r>>12)<<y[3&i++],a[i>>2]|=(128|r>>6&63)<<y[3&i++],a[i>>2]|=(128|63&r)<<y[3&i++]):(r=65536+((1023&r)<<10|1023&t.charCodeAt(++o)),a[i>>2]|=(240|r>>18)<<y[3&i++],a[i>>2]|=(128|r>>12&63)<<y[3&i++],a[i>>2]|=(128|r>>6&63)<<y[3&i++],a[i>>2]|=(128|63&r)<<y[3&i++]);this.lastByteIndex=i,this.bytes+=i-this.start,i>=64?(this.block=a[16],this.start=i-64,this.hash(),this.hashed=!0):this.start=i}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[16]=this.block,t[e>>2]|=c[3&e],this.block=t[16],e>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},t.prototype.hash=function(){var t,e,n,r,i,o,u,a,c,s=this.h0,f=this.h1,l=this.h2,h=this.h3,d=this.h4,v=this.h5,y=this.h6,b=this.h7,g=this.blocks;for(t=16;t<64;++t)e=((i=g[t-15])>>>7|i<<25)^(i>>>18|i<<14)^i>>>3,n=((i=g[t-2])>>>17|i<<15)^(i>>>19|i<<13)^i>>>10,g[t]=g[t-16]+e+g[t-7]+n<<0;for(c=f&l,t=0;t<64;t+=4)this.first?(this.is224?(o=300032,b=(i=g[0]-1413257819)-150054599<<0,h=i+24177077<<0):(o=704751109,b=(i=g[0]-210244248)-1521486534<<0,h=i+143694565<<0),this.first=!1):(e=(s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10),r=(o=s&f)^s&l^c,b=h+(i=b+(n=(d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+(d&v^~d&y)+p[t]+g[t])<<0,h=i+(e+r)<<0),e=(h>>>2|h<<30)^(h>>>13|h<<19)^(h>>>22|h<<10),r=(u=h&s)^h&f^o,y=l+(i=y+(n=(b>>>6|b<<26)^(b>>>11|b<<21)^(b>>>25|b<<7))+(b&d^~b&v)+p[t+1]+g[t+1])<<0,e=((l=i+(e+r)<<0)>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10),r=(a=l&h)^l&s^u,v=f+(i=v+(n=(y>>>6|y<<26)^(y>>>11|y<<21)^(y>>>25|y<<7))+(y&b^~y&d)+p[t+2]+g[t+2])<<0,e=((f=i+(e+r)<<0)>>>2|f<<30)^(f>>>13|f<<19)^(f>>>22|f<<10),r=(c=f&l)^f&h^a,d=s+(i=d+(n=(v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+(v&y^~v&b)+p[t+3]+g[t+3])<<0,s=i+(e+r)<<0;this.h0=this.h0+s<<0,this.h1=this.h1+f<<0,this.h2=this.h2+l<<0,this.h3=this.h3+h<<0,this.h4=this.h4+d<<0,this.h5=this.h5+v<<0,this.h6=this.h6+y<<0,this.h7=this.h7+b<<0},t.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,n=this.h2,r=this.h3,i=this.h4,o=this.h5,a=this.h6,c=this.h7,s=u[t>>28&15]+u[t>>24&15]+u[t>>20&15]+u[t>>16&15]+u[t>>12&15]+u[t>>8&15]+u[t>>4&15]+u[15&t]+u[e>>28&15]+u[e>>24&15]+u[e>>20&15]+u[e>>16&15]+u[e>>12&15]+u[e>>8&15]+u[e>>4&15]+u[15&e]+u[n>>28&15]+u[n>>24&15]+u[n>>20&15]+u[n>>16&15]+u[n>>12&15]+u[n>>8&15]+u[n>>4&15]+u[15&n]+u[r>>28&15]+u[r>>24&15]+u[r>>20&15]+u[r>>16&15]+u[r>>12&15]+u[r>>8&15]+u[r>>4&15]+u[15&r]+u[i>>28&15]+u[i>>24&15]+u[i>>20&15]+u[i>>16&15]+u[i>>12&15]+u[i>>8&15]+u[i>>4&15]+u[15&i]+u[o>>28&15]+u[o>>24&15]+u[o>>20&15]+u[o>>16&15]+u[o>>12&15]+u[o>>8&15]+u[o>>4&15]+u[15&o]+u[a>>28&15]+u[a>>24&15]+u[a>>20&15]+u[a>>16&15]+u[a>>12&15]+u[a>>8&15]+u[a>>4&15]+u[15&a];return this.is224||(s+=u[c>>28&15]+u[c>>24&15]+u[c>>20&15]+u[c>>16&15]+u[c>>12&15]+u[c>>8&15]+u[c>>4&15]+u[15&c]),s},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,n=this.h2,r=this.h3,i=this.h4,o=this.h5,u=this.h6,a=this.h7,c=[t>>24&255,t>>16&255,t>>8&255,255&t,e>>24&255,e>>16&255,e>>8&255,255&e,n>>24&255,n>>16&255,n>>8&255,255&n,r>>24&255,r>>16&255,r>>8&255,255&r,i>>24&255,i>>16&255,i>>8&255,255&i,o>>24&255,o>>16&255,o>>8&255,255&o,u>>24&255,u>>16&255,u>>8&255,255&u];return this.is224||c.push(a>>24&255,a>>16&255,a>>8&255,255&a),c},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(this.is224?28:32),e=new DataView(t);return e.setUint32(0,this.h0),e.setUint32(4,this.h1),e.setUint32(8,this.h2),e.setUint32(12,this.h3),e.setUint32(16,this.h4),e.setUint32(20,this.h5),e.setUint32(24,this.h6),this.is224||e.setUint32(28,this.h7),t},i.prototype=new t,i.prototype.finalize=function(){if(t.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();t.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),t.prototype.finalize.call(this)}};var B=w();B.sha256=B,B.sha224=w(!0),B.sha256.hmac=_(),B.sha224.hmac=_(!0),o?module.exports=B:(s.sha256=B.sha256,s.sha224=B.sha224,a&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return B}.call(exports,__webpack_require__,exports,module),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))))}()}).call(exports,__webpack_require__(330)(module))},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t){window.localStorage.setItem("UUID",t)}Object.defineProperty(e,"__esModule",{value:!0}),e.verifyUUIDInTheLocalStorage=e.getDataLocalStorage=void 0;var o=n(388),u=r(o),a=function(){return localStorage.getItem("UUID")},c=function(){if(" "===window.localStorage.getItem("UUID")||null==window.localStorage.getItem("UUID")){var t=(0,u.default)(1);i(t)}};e.getDataLocalStorage=a,e.verifyUUIDInTheLocalStorage=c}]);

/*
 * Scripting para login.jsp.
 * @author trossi
 * 
 * Requiere: 
 *   flow-1.0.0.js
 *   jQuery 1.9.0 o superior
 *   jQuery plugin: BlockUI 2.56.0 o superior
 *   api-teclado.js
 */
 function bloquearUi() { 
		jQuery.blockUI({ 
			message: jQuery("#modalProcesando"),
			css: {
				left: '40%',
				paddingLeft: '0%',
				paddingTop : '0%'
			}
		}); 
	}
 
 
jQuery(document).ready(function() {

	desbloquearUi();

	if (jQuery("#pedirUsernameBox").is(":visible")){
		activadorDeDom("activarTecladoVirtualUsername").controlar(tecladoVirtualDeDom("username",maxlengthUsername));
		jQuery("#username").focus();
	}
		
	
	if (jQuery("#pedirPasswordBox").is(":visible")){
		activadorDeDom("activarTecladoVirtualPassword").controlar(tecladoVirtualDeDom("password",maxlengthPassword));
		jQuery("#tituloIngreseUsername").hide();
		jQuery("#tituloIngresePassword").show();
		jQuery("#password").focus();
		
	}

	// Auxiliares
	function isEmptyString(s) {	return s.length === 0; }
	function isBlankString(s) {	return !jQuery.trim(s);	}
	function userInput(q) { return jQuery(q).val(); }
	
	function cleanErrors() {
		jQuery("#errorBox").css("visibility","hidden");
		jQuery("#errorPlaceholder").css("visibility","hidden").show();
		jQuery("#errorBox > .value").hide();
	}
	
	function showError(id) { 
		cleanErrors();
		jQuery("#" + id).show();
		jQuery("#errorPlaceholder").hide();
		jQuery("#errorBox").css("opacity","0").css("visibility","visible").clearQueue().animate({opacity: 1});
	}
	
	function bloquearUi() { 
		jQuery.blockUI({ 
			message: jQuery("#modalProcesando"),
			css: {
				left: '40%',
				paddingLeft: '0%',
				paddingTop : '0%'
			}
		}); 
	}
	
	function desbloquearUi(uh) { jQuery.unblockUI({onUnblock: uh}); }
	
	
	
	function botonSiguienteEventHandler(e) {
		return true;
	}
	
	
	
	jQuery(".botonSiguiente").click(function(e) {
		return botonSiguienteEventHandler(e);
	});

	jQuery(document).keydown(function(e) {
		if (e.keyCode == "13") {
			return botonSiguienteEventHandler(e);
		}
	});
	

	
	
	
	var usernameField = jQuery("#username");
	
	usernameField.focusout(function() {
		if (isBlankString(usernameField.val())) {
			usernameField.addClass("placeholder");
		}
	});
	
	usernameField.focusin(function() {
		usernameField.removeClass("placeholder");
		if (isBlankString(usernameField.val())) {
			usernameField.val("");
		}
	});
	
	
	if (jQuery("#pedirUsernameBox").is(":visible"))
		window.setTimeout(function(){ usernameField.focus(); }, 50);
	 if (jQuery("#pedirPasswordBox").is(":visible"))
	 	window.setTimeout(function(){ jQuery("#password").focus(); }, 50);
	
	
});

function mostrarPassword(){
	var contenido = document.getElementById("password");
	var atributo = contenido.getAttribute("type");
			
	if(atributo === "text"){
		contenido.setAttribute("type","password");
		jQuery(".myImage").attr('src',"../images/login/showpass.png");
// 		document.getElementById("botonMostrar").textContent= "mostrar";
	}else{
		contenido.setAttribute("type","text");
		jQuery(".myImage").attr('src',"../images/login/hiddenpass.png");
// 		document.getElementById("botonMostrar").textContent= "ocultar";
	}
}

(function (global) {

    if (typeof (global) === "undefined") {
        throw new Error("window is undefined");
    }

    var _hash = "!";
    var noBackPlease = function () {
        global.location.href += "#";
        // making sure we have the fruit available for juice....
        // 50 milliseconds for just once do not cost much (^__^)
        global.setTimeout(function () {
            global.location.href += "!";
        }, 50);
    };

    // Earlier we had setInerval here....
    global.onhashchange = function () {
        if (global.location.hash !== _hash) {
            global.location.hash = _hash;
        }
    };

    global.onload = function () {
        noBackPlease();
        // disables backspace on page except on input fields and textarea..
        document.body.onkeydown = function (e) {
            var elm = e.target.nodeName.toLowerCase();
            if (e.which === 8 && (elm !== 'input' && elm !== 'textarea')) {
                e.preventDefault();
            }
            // stopping event bubbling up the DOM tree..
            e.stopPropagation();
        };
    };

})(window);

// function tog(v){return v?'addClass':'removeClass';} 
// jQuery(document).on('input', '.clearable', function(){
// 	jQuery(this)[tog(this.value)]('x');
// // }).on('mousemove', '.x', function( e ){
// // 	jQuery(this)[tog(this.offsetWidth-18 < e.clientX-this.getBoundingClientRect().left)]('onX');
// }).on('touchstart click', '.onX', function( ev ){
// 	mostrarPassword();
// //     jQuery(this).removeClass('x onX').val('').change();
// });


// .on('input', '.clearable', function(){
// 	jQuery(this)[tog(this.value)]('x');
// }).on('mousemove', '.x', function( e ){
// 	jQuery(this)[tog(this.offsetWidth-18 < e.clientX-this.getBoundingClientRect().left)]('onX');
// })




//para poder obtenerlas desde login.js.jsp
var maxlengthUsername = '16';
var maxlengthPassword = '12';

try {
	localStorage.removeItem("nameUserLogout");
	localStorage.removeItem("showModalSplash");
	localStorage.removeItem("showButtonQuiz2");
	localStorage.removeItem("buttonQuizViewed");
}catch (e) {}

			var $k = jQuery.noConflict();
			$k(window).on("load",function(){
					var rdm = Math.floor(Math.random()*1);
					var img=1;
					switch(rdm){
					case 0:
						img='outer1';
						break;
					case 1:
						img='outer2';
						break;
					case 2:
						img='outer3';
						break;
					}					
					$k('.outerDiv_').attr("id",img);	
				});
				