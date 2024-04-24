/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
/*! jQuery UI - v1.10.2 - 2013-04-05
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.datepicker.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
 * Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e, t) {
    function i(t, i) {
        var a, n, r, o = t.nodeName.toLowerCase();
        return "area" === o ? (a = t.parentNode, n = a.name, t.href && n && "map" === a.nodeName.toLowerCase() ? (r = e("img[usemap=#" + n + "]")[0], !!r && s(r)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && s(t)
    }

    function s(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    var a = 0,
        n = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.10.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        focus: function(t) {
            return function(i, s) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), s && s.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        scrollParent: function() {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(i) {
            if (i !== t) return this.css("zIndex", i);
            if (this.length)
                for (var s, a, n = e(this[0]); n.length && n[0] !== document;) {
                    if (s = n.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (a = parseInt(n.css("zIndex"), 10), !isNaN(a) && 0 !== a)) return a;
                    n = n.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++a)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                n.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t)
            }
        }) : function(t, i, s) {
            return !!e.data(t, s[3])
        },
        focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var s = e.attr(t, "tabindex"),
                a = isNaN(s);
            return (a || s >= 0) && i(t, !a)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(i, s) {
        function a(t, i, s, a) {
            return e.each(n, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }
        var n = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
            r = s.toLowerCase(),
            o = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + s] = function(i) {
            return i === t ? o["inner" + s].call(this) : this.each(function() {
                e(this).css(r, a(this, i) + "px")
            })
        }, e.fn["outer" + s] = function(t, i) {
            return "number" != typeof t ? o["outer" + s].call(this, t) : this.each(function() {
                e(this).css(r, a(this, t, !0, i) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function(t, i, s) {
                var a, n = e.ui[t].prototype;
                for (a in s) n.plugins[a] = n.plugins[a] || [], n.plugins[a].push([i, s[a]])
            },
            call: function(e, t, i) {
                var s, a = e.plugins[t];
                if (a && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
                    for (s = 0; a.length > s; s++) e.options[a[s][0]] && a[s][1].apply(e.element, i)
            }
        },
        hasScroll: function(t, i) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                a = !1;
            return t[s] > 0 ? !0 : (t[s] = 1, a = t[s] > 0, t[s] = 0, a)
        }
    })
})(jQuery);
(function(e, t) {
    var i = 0,
        s = Array.prototype.slice,
        n = e.cleanData;
    e.cleanData = function(t) {
        for (var i, s = 0; null != (i = t[s]); s++) try {
            e(i).triggerHandler("remove")
        } catch (a) {}
        n(t)
    }, e.widget = function(i, s, n) {
        var a, r, o, h, l = {},
            u = i.split(".")[0];
        i = i.split(".")[1], a = u + "-" + i, n || (n = s, s = e.Widget), e.expr[":"][a.toLowerCase()] = function(t) {
            return !!e.data(t, a)
        }, e[u] = e[u] || {}, r = e[u][i], o = e[u][i] = function(e, i) {
            return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new o(e, i)
        }, e.extend(o, r, {
            version: n.version,
            _proto: e.extend({}, n),
            _childConstructors: []
        }), h = new s, h.options = e.widget.extend({}, h.options), e.each(n, function(i, n) {
            return e.isFunction(n) ? (l[i] = function() {
                var e = function() {
                        return s.prototype[i].apply(this, arguments)
                    },
                    t = function(e) {
                        return s.prototype[i].apply(this, e)
                    };
                return function() {
                    var i, s = this._super,
                        a = this._superApply;
                    return this._super = e, this._superApply = t, i = n.apply(this, arguments), this._super = s, this._superApply = a, i
                }
            }(), t) : (l[i] = n, t)
        }), o.prototype = e.widget.extend(h, {
            widgetEventPrefix: r ? h.widgetEventPrefix : i
        }, l, {
            constructor: o,
            namespace: u,
            widgetName: i,
            widgetFullName: a
        }), r ? (e.each(r._childConstructors, function(t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete r._childConstructors) : s._childConstructors.push(o), e.widget.bridge(i, o)
    }, e.widget.extend = function(i) {
        for (var n, a, r = s.call(arguments, 1), o = 0, h = r.length; h > o; o++)
            for (n in r[o]) a = r[o][n], r[o].hasOwnProperty(n) && a !== t && (i[n] = e.isPlainObject(a) ? e.isPlainObject(i[n]) ? e.widget.extend({}, i[n], a) : e.widget.extend({}, a) : a);
        return i
    }, e.widget.bridge = function(i, n) {
        var a = n.prototype.widgetFullName || i;
        e.fn[i] = function(r) {
            var o = "string" == typeof r,
                h = s.call(arguments, 1),
                l = this;
            return r = !o && h.length ? e.widget.extend.apply(null, [r].concat(h)) : r, o ? this.each(function() {
                var s, n = e.data(this, a);
                return n ? e.isFunction(n[r]) && "_" !== r.charAt(0) ? (s = n[r].apply(n, h), s !== n && s !== t ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : t) : e.error("no such method '" + r + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + r + "'")
            }) : this.each(function() {
                var t = e.data(this, a);
                t ? t.option(r || {})._init() : e.data(this, a, new n(r, this))
            }), l
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, s) {
            s = e(s || this.defaultElement || this)[0], this.element = e(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), s !== this && (e.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === s && this.destroy()
                }
            }), this.document = e(s.style ? s.ownerDocument : s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(i, s) {
            var n, a, r, o = i;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (o = {}, n = i.split("."), i = n.shift(), n.length) {
                    for (a = o[i] = e.widget.extend({}, this.options[i]), r = 0; n.length - 1 > r; r++) a[n[r]] = a[n[r]] || {}, a = a[n[r]];
                    if (i = n.pop(), s === t) return a[i] === t ? null : a[i];
                    a[i] = s
                } else {
                    if (s === t) return this.options[i] === t ? null : this.options[i];
                    o[i] = s
                }
            return this._setOptions(o), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(i, s, n) {
            var a, r = this;
            "boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = a = e(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, a = this.widget()), e.each(n, function(n, o) {
                function h() {
                    return i || r.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : t
                }
                "string" != typeof o && (h.guid = o.guid = o.guid || h.guid || e.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/),
                    u = l[1] + r.eventNamespace,
                    c = l[2];
                c ? a.delegate(c, u, h) : s.bind(u, h)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, s) {
            var n, a, r = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                for (n in a) n in i || (i[n] = a[n]);
            return this.element.trigger(i, s), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, i) {
        e.Widget.prototype["_" + t] = function(s, n, a) {
            "string" == typeof n && (n = {
                effect: n
            });
            var r, o = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {}, "number" == typeof n && (n = {
                duration: n
            }), r = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), r && e.effects && e.effects.effect[o] ? s[t](n) : o !== t && s[o] ? s[o](n.duration, n.easing, a) : s.queue(function(i) {
                e(this)[t](), a && a.call(s[0]), i()
            })
        }
    })
})(jQuery);
(function(e) {
    var t = !1;
    e(document).mouseup(function() {
        t = !1
    }), e.widget("ui.mouse", {
        version: "1.10.2",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(i) {
                return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(i) {
            if (!t) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var s = this,
                    n = 1 === i.which,
                    a = "string" == typeof this.options.cancel && i.target.nodeName ? e(i.target).closest(this.options.cancel).length : !1;
                return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    s.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === e.data(i.target, this.widgetName + ".preventClickEvent") && e.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return s._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                    return s._mouseUp(e)
                }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)) : !0
            }
        },
        _mouseMove: function(t) {
            return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
})(jQuery);
(function(t, e) {
    function i(t, e, i) {
        return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
    }

    function s(e, i) {
        return parseInt(t.css(e, i), 10) || 0
    }

    function n(e) {
        var i = e[0];
        return 9 === i.nodeType ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : t.isWindow(i) ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: e.scrollTop(),
                left: e.scrollLeft()
            }
        } : i.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: i.pageY,
                left: i.pageX
            }
        } : {
            width: e.outerWidth(),
            height: e.outerHeight(),
            offset: e.offset()
        }
    }
    t.ui = t.ui || {};
    var a, o = Math.max,
        r = Math.abs,
        h = Math.round,
        l = /left|center|right/,
        c = /top|center|bottom/,
        u = /[\+\-]\d+(\.[\d]+)?%?/,
        d = /^\w+/,
        p = /%$/,
        f = t.fn.position;
    t.position = {
            scrollbarWidth: function() {
                if (a !== e) return a;
                var i, s, n = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    o = n.children()[0];
                return t("body").append(n), i = o.offsetWidth, n.css("overflow", "scroll"), s = o.offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), a = i - s
            },
            getScrollInfo: function(e) {
                var i = e.isWindow ? "" : e.element.css("overflow-x"),
                    s = e.isWindow ? "" : e.element.css("overflow-y"),
                    n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                    a = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
                return {
                    width: a ? t.position.scrollbarWidth() : 0,
                    height: n ? t.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(e) {
                var i = t(e || window),
                    s = t.isWindow(i[0]);
                return {
                    element: i,
                    isWindow: s,
                    offset: i.offset() || {
                        left: 300,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: s ? i.width() : i.outerWidth(),
                    height: s ? i.height() : i.outerHeight()
                }
            }
        }, t.fn.position = function(e) {
            if (!e || !e.of) return f.apply(this, arguments);
            e = t.extend({}, e);
            var a, p, m, g, v, _, b = t(e.of),
                y = t.position.getWithinInfo(e.within),
                w = t.position.getScrollInfo(y),
                x = (e.collision || "flip").split(" "),
                k = {};
            return _ = n(b), b[0].preventDefault && (e.at = "left top"), p = _.width, m = _.height, g = _.offset, v = t.extend({}, g), t.each(["my", "at"], function() {
                var t, i, s = (e[this] || "").split(" ");
                1 === s.length && (s = l.test(s[0]) ? s.concat(["center"]) : c.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = l.test(s[0]) ? s[0] : "center", s[1] = c.test(s[1]) ? s[1] : "center", t = u.exec(s[0]), i = u.exec(s[1]), k[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]
            }), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += m : "center" === e.at[1] && (v.top += m / 2), a = i(k.at, p, m), v.left += a[0], v.top += a[1], this.each(function() {
                var n, l, c = t(this),
                    u = c.outerWidth(),
                    d = c.outerHeight(),
                    f = s(this, "marginLeft"),
                    _ = s(this, "marginTop"),
                    D = u + f + s(this, "marginRight") + w.width,
                    T = d + _ + s(this, "marginBottom") + w.height,
                    C = t.extend({}, v),
                    M = i(k.my, c.outerWidth(), c.outerHeight());
                "right" === e.my[0] ? C.left -= u : "center" === e.my[0] && (C.left -= u / 2), "bottom" === e.my[1] ? C.top -= d : "center" === e.my[1] && (C.top -= d / 2), C.left += M[0], C.top += M[1], t.support.offsetFractions || (C.left = h(C.left), C.top = h(C.top)), n = {
                    marginLeft: f,
                    marginTop: _
                }, t.each(["left", "top"], function(i, s) {
                    t.ui.position[x[i]] && t.ui.position[x[i]][s](C, {
                        targetWidth: p,
                        targetHeight: m,
                        elemWidth: u,
                        elemHeight: d,
                        collisionPosition: n,
                        collisionWidth: D,
                        collisionHeight: T,
                        offset: [a[0] + M[0], a[1] + M[1]],
                        my: e.my,
                        at: e.at,
                        within: y,
                        elem: c
                    })
                }), e.using && (l = function(t) {
                    var i = g.left - C.left,
                        s = i + p - u,
                        n = g.top - C.top,
                        a = n + m - d,
                        h = {
                            target: {
                                element: b,
                                left: g.left,
                                top: g.top,
                                width: p,
                                height: m
                            },
                            element: {
                                element: c,
                                left: C.left,
                                top: C.top,
                                width: u,
                                height: d
                            },
                            horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
                            vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"
                        };
                    u > p && p > r(i + s) && (h.horizontal = "center"), d > m && m > r(n + a) && (h.vertical = "middle"), h.important = o(r(i), r(s)) > o(r(n), r(a)) ? "horizontal" : "vertical", e.using.call(this, t, h)
                }), c.offset(t.extend(C, {
                    using: l
                }))
            })
        }, t.ui.position = {
            fit: {
                left: function(t, e) {
                    var i, s = e.within,
                        n = s.isWindow ? s.scrollLeft : s.offset.left,
                        a = s.width,
                        r = t.left - e.collisionPosition.marginLeft,
                        h = n - r,
                        l = r + e.collisionWidth - a - n;
                    e.collisionWidth > a ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - a - n, t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left)
                },
                top: function(t, e) {
                    var i, s = e.within,
                        n = s.isWindow ? s.scrollTop : s.offset.top,
                        a = e.within.height,
                        r = t.top - e.collisionPosition.marginTop,
                        h = n - r,
                        l = r + e.collisionHeight - a - n;
                    e.collisionHeight > a ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - a - n, t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top)
                }
            },
            flip: {
                left: function(t, e) {
                    var i, s, n = e.within,
                        a = n.offset.left + n.scrollLeft,
                        o = n.width,
                        h = n.isWindow ? n.scrollLeft : n.offset.left,
                        l = t.left - e.collisionPosition.marginLeft,
                        c = l - h,
                        u = l + e.collisionWidth - o - h,
                        d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        f = -2 * e.offset[0];
                    0 > c ? (i = t.left + d + p + f + e.collisionWidth - o - a, (0 > i || r(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h, (s > 0 || u > r(s)) && (t.left += d + p + f))
                },
                top: function(t, e) {
                    var i, s, n = e.within,
                        a = n.offset.top + n.scrollTop,
                        o = n.height,
                        h = n.isWindow ? n.scrollTop : n.offset.top,
                        l = t.top - e.collisionPosition.marginTop,
                        c = l - h,
                        u = l + e.collisionHeight - o - h,
                        d = "top" === e.my[1],
                        p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        m = -2 * e.offset[1];
                    0 > c ? (s = t.top + p + f + m + e.collisionHeight - o - a, t.top + p + f + m > c && (0 > s || r(c) > s) && (t.top += p + f + m)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + m - h, t.top + p + f + m > u && (i > 0 || u > r(i)) && (t.top += p + f + m))
                }
            },
            flipfit: {
                left: function() {
                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                }
            }
        },
        function() {
            var e, i, s, n, a, o = document.getElementsByTagName("body")[0],
                r = document.createElement("div");
            e = document.createElement(o ? "div" : "body"), s = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, o && t.extend(s, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (a in s) e.style[a] = s[a];
            e.appendChild(r), i = o || document.documentElement, i.insertBefore(e, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = t(r).offset().left, t.support.offsetFractions = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e)
        }()
})(jQuery);
(function(e) {
    e.widget("ui.draggable", e.ui.mouse, {
        version: "1.10.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var i = this.options;
            return this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth +700+ "px",
                    height: this.offsetHeight +800+ "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function(t) {
            var i = this.options;
            return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), i.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function(t, i) {
            if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1;
                this.position = s.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function(t) {
            var i, s = this,
                n = !1,
                a = !1;
            for (e.ui.ddmanager && !this.options.dropBehaviour && (a = e.ui.ddmanager.drop(this, t)), this.dropped && (a = this.dropped, this.dropped = !1), i = this.element[0]; i && (i = i.parentNode);) i === document && (n = !0);
            return n || "original" !== this.options.helper ? ("invalid" === this.options.revert && !a || "valid" === this.options.revert && a || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, a) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                s._trigger("stop", t) !== !1 && s._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1) : !1
        },
        _mouseUp: function(t) {
            return e("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(t) {
            return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _createHelper: function(t) {
            var i = this.options,
                s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, i, s, n = this.options;
            if ("parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = ["document" === n.containment ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" === n.containment ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" === n.containment ? 0 : e(window).scrollLeft()) + e("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? 0 : e(window).scrollTop()) + (e("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || n.containment.constructor === Array) n.containment.constructor === Array && (this.containment = n.containment);
            else {
                if (i = e(n.containment), s = i[0], !s) return;
                t = "hidden" !== e(s).css("overflow"), this.containment = [(parseInt(e(s).css("borderLeftWidth"), 10) || 0) + (parseInt(e(s).css("paddingLeft"), 10) || 0), (parseInt(e(s).css("borderTopWidth"), 10) || 0) + (parseInt(e(s).css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(e(s).css("borderRightWidth"), 10) || 0) - (parseInt(e(s).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(e(s).css("borderBottomWidth"), 10) || 0) - (parseInt(e(s).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i
            }
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var s = "absolute" === t ? 1 : -1,
                n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                a = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function(t) {
            var i, s, n, a, o = this.options,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                h = /(html|body)/i.test(r[0].tagName),
                l = t.pageX,
                u = t.pageY;
            return this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (u = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (u = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((u - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, u = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, l = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a)), {
                top: u - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(t, i, s) {
            return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s]), "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, i, s)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, i) {
            var s = e(this).data("ui-draggable"),
                n = s.options,
                a = e.extend({}, i, {
                    item: s.element
                });
            s.sortables = [], e(n.connectToSortable).each(function() {
                var i = e.data(this, "ui-sortable");
                i && !i.options.disabled && (s.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", t, a))
            })
        },
        stop: function(t, i) {
            var s = e(this).data("ui-draggable"),
                n = e.extend({}, i, {
                    item: s.element
                });
            e.each(s.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, n))
            })
        },
        drag: function(t, i) {
            var s = e(this).data("ui-draggable"),
                n = this;
            e.each(s.sortables, function() {
                var a = !1,
                    o = this;
                this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (a = !0, e.each(s.sortables, function() {
                    return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (a = !1), a
                })), a ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return i.helper[0]
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", t), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", t), s.dropped = !1)
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var t = e("body"),
                i = e(this).data("ui-draggable").options;
            t.css("cursor") && (i._cursor = t.css("cursor")), t.css("cursor", i.cursor)
        },
        stop: function() {
            var t = e(this).data("ui-draggable").options;
            t._cursor && e("body").css("cursor", t._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function(t, i) {
            var s = e(i.helper),
                n = e(this).data("ui-draggable").options;
            s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
        },
        stop: function(t, i) {
            var s = e(this).data("ui-draggable").options;
            s._opacity && e(i.helper).css("opacity", s._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var t = e(this).data("ui-draggable");
            t.scrollParent[0] !== document && "HTML" !== t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
        },
        drag: function(t) {
            var i = e(this).data("ui-draggable"),
                s = i.options,
                n = !1;
            i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - t.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : t.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - t.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : t.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - e(document).scrollTop() < s.scrollSensitivity ? n = e(document).scrollTop(e(document).scrollTop() - s.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < s.scrollSensitivity && (n = e(document).scrollTop(e(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (t.pageX - e(document).scrollLeft() < s.scrollSensitivity ? n = e(document).scrollLeft(e(document).scrollLeft() - s.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < s.scrollSensitivity && (n = e(document).scrollLeft(e(document).scrollLeft() + s.scrollSpeed)))), n !== !1 && e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function() {
            var t = e(this).data("ui-draggable"),
                i = t.options;
            t.snapElements = [], e(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
                var i = e(this),
                    s = i.offset();
                this !== t.element[0] && t.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: s.top,
                    left: s.left
                })
            })
        },
        drag: function(t, i) {
            var s, n, a, o, r, h, l, u, c, d, p = e(this).data("ui-draggable"),
                f = p.options,
                m = f.snapTolerance,
                g = i.offset.left,
                v = g + p.helperProportions.width,
                y = i.offset.top,
                b = y + p.helperProportions.height;
            for (c = p.snapElements.length - 1; c >= 0; c--) r = p.snapElements[c].left, h = r + p.snapElements[c].width, l = p.snapElements[c].top, u = l + p.snapElements[c].height, g > r - m && h + m > g && y > l - m && u + m > y || g > r - m && h + m > g && b > l - m && u + m > b || v > r - m && h + m > v && y > l - m && u + m > y || v > r - m && h + m > v && b > l - m && u + m > b ? ("inner" !== f.snapMode && (s = m >= Math.abs(l - b), n = m >= Math.abs(u - y), a = m >= Math.abs(r - v), o = m >= Math.abs(h - g), s && (i.position.top = p._convertPositionTo("relative", {
                top: l - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
                top: u,
                left: 0
            }).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: r - p.helperProportions.width
            }).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: h
            }).left - p.margins.left)), d = s || n || a || o, "outer" !== f.snapMode && (s = m >= Math.abs(l - y), n = m >= Math.abs(u - b), a = m >= Math.abs(r - g), o = m >= Math.abs(h - v), s && (i.position.top = p._convertPositionTo("relative", {
                top: l,
                left: 0
            }).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
                top: u - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: r
            }).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: h - p.helperProportions.width
            }).left - p.margins.left)), !p.snapElements[c].snapping && (s || n || a || o || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {
                snapItem: p.snapElements[c].item
            })), p.snapElements[c].snapping = s || n || a || o || d) : (p.snapElements[c].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {
                snapItem: p.snapElements[c].item
            })), p.snapElements[c].snapping = !1)
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function() {
            var t, i = this.data("ui-draggable").options,
                s = e.makeArray(e(i.stack)).sort(function(t, i) {
                    return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
                });
            s.length && (t = parseInt(e(s[0]).css("zIndex"), 10) || 0, e(s).each(function(i) {
                e(this).css("zIndex", t + i)
            }), this.css("zIndex", t + s.length))
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function(t, i) {
            var s = e(i.helper),
                n = e(this).data("ui-draggable").options;
            s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
        },
        stop: function(t, i) {
            var s = e(this).data("ui-draggable").options;
            s._zIndex && e(i.helper).css("zIndex", s._zIndex)
        }
    })
})(jQuery);
(function(e) {
    function t(e, t, i) {
        return e > t && t + i > e
    }
    e.widget("ui.droppable", {
        version: "1.10.2",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var t = this.options,
                i = t.accept;
            this.isover = !1, this.isout = !0, this.accept = e.isFunction(i) ? i : function(e) {
                return e.is(i)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [], e.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function() {
            for (var t = 0, i = e.ui.ddmanager.droppables[this.options.scope]; i.length > t; t++) i[t] === this && i.splice(t, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(t, i) {
            "accept" === t && (this.accept = e.isFunction(i) ? i : function(e) {
                return e.is(i)
            }), e.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function(t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function(t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
        },
        _out: function(t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
        },
        _drop: function(t, i) {
            var s = i || e.ui.ddmanager.current,
                n = !1;
            return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var t = e.data(this, "ui-droppable");
                return t.options.greedy && !t.options.disabled && t.options.scope === s.options.scope && t.accept.call(t.element[0], s.currentItem || s.element) && e.ui.intersect(s, e.extend(t, {
                    offset: t.element.offset()
                }), t.options.tolerance) ? (n = !0, !1) : undefined
            }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(s)), this.element) : !1) : !1
        },
        ui: function(e) {
            return {
                draggable: e.currentItem || e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        }
    }), e.ui.intersect = function(e, i, s) {
        if (!i.offset) return !1;
        var n, a, o = (e.positionAbs || e.position.absolute).left,
            r = o + e.helperProportions.width,
            h = (e.positionAbs || e.position.absolute).top,
            l = h + e.helperProportions.height,
            u = i.offset.left,
            c = u + i.proportions.width,
            d = i.offset.top,
            p = d + i.proportions.height;
        switch (s) {
            case "fit":
                return o >= u && c >= r && h >= d && p >= l;
            case "intersect":
                return o + e.helperProportions.width / 2 > u && c > r - e.helperProportions.width / 2 && h + e.helperProportions.height / 2 > d && p > l - e.helperProportions.height / 2;
            case "pointer":
                return n = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left, a = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top, t(a, d, i.proportions.height) && t(n, u, i.proportions.width);
            case "touch":
                return (h >= d && p >= h || l >= d && p >= l || d > h && l > p) && (o >= u && c >= o || r >= u && c >= r || u > o && r > c);
            default:
                return !1
        }
    }, e.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, i) {
            var s, n, a = e.ui.ddmanager.droppables[t.options.scope] || [],
                o = i ? i.type : null,
                r = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            e: for (s = 0; a.length > s; s++)
                if (!(a[s].options.disabled || t && !a[s].accept.call(a[s].element[0], t.currentItem || t.element))) {
                    for (n = 0; r.length > n; n++)
                        if (r[n] === a[s].element[0]) {
                            a[s].proportions.height = 0;
                            continue e
                        }
                    a[s].visible = "none" !== a[s].element.css("display"), a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions = {
                        width: a[s].element[0].offsetWidth,
                        height: a[s].element[0].offsetHeight
                    })
                }
        },
        drop: function(t, i) {
            var s = !1;
            return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), s
        },
        dragStart: function(t, i) {
            t.element.parentsUntil("body").bind("scroll.droppable", function() {
                t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
            })
        },
        drag: function(t, i) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n, a, o = e.ui.intersect(t, this, this.options.tolerance),
                        r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (n = this.options.scope, a = this.element.parents(":data(ui-droppable)").filter(function() {
                        return e.data(this, "ui-droppable").options.scope === n
                    }), a.length && (s = e.data(a[0], "ui-droppable"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                }
            })
        },
        dragStop: function(t, i) {
            t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
        }
    }
})(jQuery);
(function(e) {
    function t(e) {
        return parseInt(e, 10) || 0
    }

    function i(e) {
        return !isNaN(parseInt(e, 10))
    }
    e.widget("ui.resizable", e.ui.mouse, {
        version: "1.10.2",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function() {
            var t, i, s, n, a, o = this,
                r = this.options;
            if (this.element.addClass("ui-resizable"), e.extend(this, {
                    _aspectRatio: !!r.aspectRatio,
                    aspectRatio: r.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++) s = e.trim(t[i]), a = "ui-resizable-" + s, n = e("<div class='ui-resizable-handle " + a + "'></div>"), n.css({
                    zIndex: r.zIndex
                }), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
            this._renderAxis = function(t) {
                var i, s, n, a;
                t = t || this.element;
                for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = e(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, a), this._proportionallyResize()), e(this.handles[i]).length
            }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
            }), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show())
            }).mouseleave(function() {
                r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var t, i = function(t) {
                e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _mouseCapture: function(t) {
            var i, s, n = !1;
            for (i in this.handles) s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function(i) {
            var s, n, a, o = this.options,
                r = this.element.position(),
                h = this.element;
            return this.resizing = !0, /absolute/.test(h.css("position")) ? h.css({
                position: "absolute",
                top: h.css("top"),
                left: h.css("left")
            }) : h.is(".ui-draggable") && h.css({
                position: "absolute",
                top: r.top,
                left: r.left
            }), this._renderProxy(), s = t(this.helper.css("left")), n = t(this.helper.css("top")), o.containment && (s += e(o.containment).scrollLeft() || 0, n += e(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: s,
                top: n
            }, this.size = this._helper ? {
                width: h.outerWidth(),
                height: h.outerHeight()
            } : {
                width: h.width(),
                height: h.height()
            }, this.originalSize = this._helper ? {
                width: h.outerWidth(),
                height: h.outerHeight()
            } : {
                width: h.width(),
                height: h.height()
            }, this.originalPosition = {
                left: s,
                top: n
            }, this.sizeDiff = {
                width: h.outerWidth() - h.width(),
                height: h.outerHeight() - h.height()
            }, this.originalMousePosition = {
                left: i.pageX,
                top: i.pageY
            }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, a = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === a ? this.axis + "-resize" : a), h.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
        },
        _mouseDrag: function(t) {
            var i, s = this.helper,
                n = {},
                a = this.originalMousePosition,
                o = this.axis,
                r = this.position.top,
                h = this.position.left,
                l = this.size.width,
                u = this.size.height,
                c = t.pageX - a.left || 0,
                d = t.pageY - a.top || 0,
                p = this._change[o];
            return p ? (i = p.apply(this, [t, c, d]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), this.position.top !== r && (n.top = this.position.top + "px"), this.position.left !== h && (n.left = this.position.left + "px"), this.size.width !== l && (n.width = this.size.width + "px"), this.size.height !== u && (n.height = this.size.height + "px"), s.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(n) || this._trigger("resize", t, this.ui()), !1) : !1
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var i, s, n, a, o, r, h, l = this.options,
                u = this;
            return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && e.ui.hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, a = s ? 0 : u.sizeDiff.width, o = {
                width: u.helper.width() - a,
                height: u.helper.height() - n
            }, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(o, {
                top: h,
                left: r
            })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function(e) {
            var t, s, n, a, o, r = this.options;
            o = {
                minWidth: i(r.minWidth) ? r.minWidth : 0,
                maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0,
                minHeight: i(r.minHeight) ? r.minHeight : 0,
                maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0
            }, (this._aspectRatio || e) && (t = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, s = o.maxHeight * this.aspectRatio, a = o.maxWidth / this.aspectRatio, t > o.minWidth && (o.minWidth = t), n > o.minHeight && (o.minHeight = n), o.maxWidth > s && (o.maxWidth = s), o.maxHeight > a && (o.maxHeight = a)), this._vBoundaries = o
        },
        _updateCache: function(e) {
            this.offset = this.helper.offset(), i(e.left) && (this.position.left = e.left), i(e.top) && (this.position.top = e.top), i(e.height) && (this.size.height = e.height), i(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function(e) {
            var t = this.position,
                s = this.size,
                n = this.axis;
            return i(e.height) ? e.width = e.height * this.aspectRatio : i(e.width) && (e.height = e.width / this.aspectRatio), "sw" === n && (e.left = t.left + (s.width - e.width), e.top = null), "nw" === n && (e.top = t.top + (s.height - e.height), e.left = t.left + (s.width - e.width)), e
        },
        _respectSize: function(e) {
            var t = this._vBoundaries,
                s = this.axis,
                n = i(e.width) && t.maxWidth && t.maxWidth < e.width,
                a = i(e.height) && t.maxHeight && t.maxHeight < e.height,
                o = i(e.width) && t.minWidth && t.minWidth > e.width,
                r = i(e.height) && t.minHeight && t.minHeight > e.height,
                h = this.originalPosition.left + this.originalSize.width,
                l = this.position.top + this.size.height,
                u = /sw|nw|w/.test(s),
                c = /nw|ne|n/.test(s);
            return o && (e.width = t.minWidth), r && (e.height = t.minHeight), n && (e.width = t.maxWidth), a && (e.height = t.maxHeight), o && u && (e.left = h - t.minWidth), n && u && (e.left = h - t.maxWidth), r && c && (e.top = l - t.minHeight), a && c && (e.top = l - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) {
                var e, t, i, s, n, a = this.helper || this.element;
                for (e = 0; this._proportionallyResizeElements.length > e; e++) {
                    if (n = this._proportionallyResizeElements[e], !this.borderDif)
                        for (this.borderDif = [], i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], t = 0; i.length > t; t++) this.borderDif[t] = (parseInt(i[t], 10) || 0) + (parseInt(s[t], 10) || 0);
                    n.css({
                        height: a.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: a.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function() {
            var t = this.element,
                i = this.options;
            this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(e, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function(e, t) {
                var i = this.originalSize,
                    s = this.originalPosition;
                return {
                    left: s.left + t,
                    width: i.width - t
                }
            },
            n: function(e, t, i) {
                var s = this.originalSize,
                    n = this.originalPosition;
                return {
                    top: n.top + i,
                    height: s.height - i
                }
            },
            s: function(e, t, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, i, s) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
            },
            sw: function(t, i, s) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
            },
            ne: function(t, i, s) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
            },
            nw: function(t, i, s) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
            }
        },
        _propagate: function(t, i) {
            e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), e.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var i = e(this).data("ui-resizable"),
                s = i.options,
                n = i._proportionallyResizeElements,
                a = n.length && /textarea/i.test(n[0].nodeName),
                o = a && e.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
                r = a ? 0 : i.sizeDiff.width,
                h = {
                    width: i.size.width - r,
                    height: i.size.height - o
                },
                l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(e.extend(h, u && l ? {
                top: u,
                left: l
            } : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function() {
                    var s = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    n && n.length && e(n[0]).css({
                        width: s.width,
                        height: s.height
                    }), i._updateCache(s), i._propagate("resize", t)
                }
            })
        }
    }), e.ui.plugin.add("resizable", "containment", {
        start: function() {
            var i, s, n, a, o, r, h, l = e(this).data("ui-resizable"),
                u = l.options,
                c = l.element,
                d = u.containment,
                p = d instanceof e ? d.get(0) : /parent/.test(d) ? c.parent().get(0) : d;
            p && (l.containerElement = e(p), /document/.test(d) || d === document ? (l.containerOffset = {
                left: 0,
                top: 0
            }, l.containerPosition = {
                left: 0,
                top: 0
            }, l.parentData = {
                element: e(document),
                left: 0,
                top: 0,
                width: e(document).width(),
                height: e(document).height() || document.body.parentNode.scrollHeight
            }) : (i = e(p), s = [], e(["Top", "Right", "Left", "Bottom"]).each(function(e, n) {
                s[e] = t(i.css("padding" + n))
            }), l.containerOffset = i.offset(), l.containerPosition = i.position(), l.containerSize = {
                height: i.innerHeight() - s[3],
                width: i.innerWidth() - s[1]
            }, n = l.containerOffset, a = l.containerSize.height, o = l.containerSize.width, r = e.ui.hasScroll(p, "left") ? p.scrollWidth : o, h = e.ui.hasScroll(p) ? p.scrollHeight : a, l.parentData = {
                element: p,
                left: n.left,
                top: n.top,
                width: r,
                height: h
            }))
        },
        resize: function(t) {
            var i, s, n, a, o = e(this).data("ui-resizable"),
                r = o.options,
                h = o.containerOffset,
                l = o.position,
                u = o._aspectRatio || t.shiftKey,
                c = {
                    top: 0,
                    left: 0
                },
                d = o.containerElement;
            d[0] !== document && /static/.test(d.css("position")) && (c = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - c.left), u && (o.size.height = o.size.width / o.aspectRatio), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio), o.position.top = o._helper ? h.top : 0), o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top, i = Math.abs((o._helper ? o.offset.left - c.left : o.offset.left - c.left) + o.sizeDiff.width), s = Math.abs((o._helper ? o.offset.top - c.top : o.offset.top - h.top) + o.sizeDiff.height), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a && (i -= o.parentData.left), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height * o.aspectRatio))
        },
        stop: function() {
            var t = e(this).data("ui-resizable"),
                i = t.options,
                s = t.containerOffset,
                n = t.containerPosition,
                a = t.containerElement,
                o = e(t.helper),
                r = o.offset(),
                h = o.outerWidth() - t.sizeDiff.width,
                l = o.outerHeight() - t.sizeDiff.height;
            t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            }), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            })
        }
    }), e.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var t = e(this).data("ui-resizable"),
                i = t.options,
                s = function(t) {
                    e(t).each(function() {
                        var t = e(this);
                        t.data("ui-resizable-alsoresize", {
                            width: parseInt(t.width(), 10),
                            height: parseInt(t.height(), 10),
                            left: parseInt(t.css("left"), 10),
                            top: parseInt(t.css("top"), 10)
                        })
                    })
                };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : e.each(i.alsoResize, function(e) {
                s(e)
            })
        },
        resize: function(t, i) {
            var s = e(this).data("ui-resizable"),
                n = s.options,
                a = s.originalSize,
                o = s.originalPosition,
                r = {
                    height: s.size.height - a.height || 0,
                    width: s.size.width - a.width || 0,
                    top: s.position.top - o.top || 0,
                    left: s.position.left - o.left || 0
                },
                h = function(t, s) {
                    e(t).each(function() {
                        var t = e(this),
                            n = e(this).data("ui-resizable-alsoresize"),
                            a = {},
                            o = s && s.length ? s : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        e.each(o, function(e, t) {
                            var i = (n[t] || 0) + (r[t] || 0);
                            i && i >= 0 && (a[t] = i || null)
                        }), t.css(a)
                    })
                };
            "object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : e.each(n.alsoResize, function(e, t) {
                h(e, t)
            })
        },
        stop: function() {
            e(this).removeData("resizable-alsoresize")
        }
    }), e.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = e(this).data("ui-resizable"),
                i = t.options,
                s = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: s.height,
                width: s.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = e(this).data("ui-resizable");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = e(this).data("ui-resizable");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }), e.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var t = e(this).data("ui-resizable"),
                i = t.options,
                s = t.size,
                n = t.originalSize,
                a = t.originalPosition,
                o = t.axis,
                r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                h = r[0] || 1,
                l = r[1] || 1,
                u = Math.round((s.width - n.width) / h) * h,
                c = Math.round((s.height - n.height) / l) * l,
                d = n.width + u,
                p = n.height + c,
                f = i.maxWidth && d > i.maxWidth,
                m = i.maxHeight && p > i.maxHeight,
                g = i.minWidth && i.minWidth > d,
                v = i.minHeight && i.minHeight > p;
            i.grid = r, g && (d += h), v && (p += l), f && (d -= h), m && (p -= l), /^(se|s|e)$/.test(o) ? (t.size.width = d, t.size.height = p) : /^(ne)$/.test(o) ? (t.size.width = d, t.size.height = p, t.position.top = a.top - c) : /^(sw)$/.test(o) ? (t.size.width = d, t.size.height = p, t.position.left = a.left - u) : (t.size.width = d, t.size.height = p, t.position.top = a.top - c, t.position.left = a.left - u)
        }
    })
})(jQuery);
(function(e) {
    e.widget("ui.selectable", e.ui.mouse, {
        version: "1.10.2",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var t, i = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                t = e(i.options.filter, i.element[0]), t.addClass("ui-selectee"), t.each(function() {
                    var t = e(this),
                        i = t.offset();
                    e.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: i.left,
                        top: i.top,
                        right: i.left + t.outerWidth(),
                        bottom: i.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },
        _mouseStart: function(t) {
            var i = this,
                s = this.options;
            this.opos = [t.pageX, t.pageY], this.options.disabled || (this.selectees = e(s.filter, this.element[0]), this._trigger("start", t), e(s.appendTo).append(this.helper), this.helper.css({
                left: t.pageX,
                top: t.pageY,
                width: 0,
                height: 0
            }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var s = e.data(this, "selectable-item");
                s.startselected = !0, t.metaKey || t.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", t, {
                    unselecting: s.element
                }))
            }), e(t.target).parents().addBack().each(function() {
                var s, n = e.data(this, "selectable-item");
                return n ? (s = !t.metaKey && !t.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", t, {
                    selecting: n.element
                }) : i._trigger("unselecting", t, {
                    unselecting: n.element
                }), !1) : undefined
            }))
        },
        _mouseDrag: function(t) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, s = this,
                    n = this.options,
                    a = this.opos[0],
                    o = this.opos[1],
                    r = t.pageX,
                    h = t.pageY;
                return a > r && (i = r, r = a, a = i), o > h && (i = h, h = o, o = i), this.helper.css({
                    left: a,
                    top: o,
                    width: r - a,
                    height: h - o
                }), this.selectees.each(function() {
                    var i = e.data(this, "selectable-item"),
                        l = !1;
                    i && i.element !== s.element[0] && ("touch" === n.tolerance ? l = !(i.left > r || a > i.right || i.top > h || o > i.bottom) : "fit" === n.tolerance && (l = i.left > a && r > i.right && i.top > o && h > i.bottom), l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", t, {
                        selecting: i.element
                    }))) : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", t, {
                        unselecting: i.element
                    }))), i.selected && (t.metaKey || t.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", t, {
                        unselecting: i.element
                    })))))
                }), !1
            }
        },
        _mouseStop: function(t) {
            var i = this;
            return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function() {
                var s = e.data(this, "selectable-item");
                s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", t, {
                    unselected: s.element
                })
            }), e(".ui-selecting", this.element[0]).each(function() {
                var s = e.data(this, "selectable-item");
                s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", t, {
                    selected: s.element
                })
            }), this._trigger("stop", t), this.helper.remove(), !1
        }
    })
})(jQuery);
(function(t) {
    function e(t, e, i) {
        return t > e && e + i > t
    }

    function i(t) {
        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
    }
    t.widget("ui.sortable", t.ui.mouse, {
        version: "1.10.2",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var t = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(e, i) {
            var s = null,
                n = !1,
                a = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
                return t.data(this, a.widgetName + "-item") === a ? (s = t(this), !1) : undefined
            }), t.data(e.target, a.widgetName + "-item") === a && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function() {
                this === e.target && (n = !0)
            }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
        },
        _mouseStart: function(e, i, s) {
            var n, a, o = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, t.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", o.cursor), this.storedStylesheet = t("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function(e) {
            var i, s, n, a, o = this.options,
                r = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : e.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : e.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (e.pageY - t(document).scrollTop() < o.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - o.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < o.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + o.scrollSpeed)), e.pageX - t(document).scrollLeft() < o.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - o.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < o.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + o.scrollSpeed))), r !== !1 && t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (s = this.items[i], n = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
                    if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                    this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var s = this,
                        n = this.placeholder.offset(),
                        a = this.options.axis,
                        o = {};
                    a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function() {
                        s._clear(e)
                    })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !s.length && e.key && s.push(e.key + "="), s.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, i.each(function() {
                s.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), s
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                s = this.positionAbs.top,
                n = s + this.helperProportions.height,
                a = t.left,
                o = a + t.width,
                r = t.top,
                h = r + t.height,
                l = this.offset.click.top,
                c = this.offset.click.left,
                u = s + l > r && h > s + l && e + c > a && o > e + c;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? u : e + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(t) {
            var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                s = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                n = i && s,
                a = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return n ? this.floating ? o && "right" === o || "down" === a ? 2 : 1 : a && ("down" === a ? 2 : 1) : !1
        },
        _intersectsWithSides: function(t) {
            var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                s = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                n = this._getDragVerticalDirection(),
                a = this._getDragHorizontalDirection();
            return this.floating && a ? "right" === a && s || "left" === a && !s : n && ("down" === n && i || "up" === n && !i)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function(t) {
            return this._refreshItems(t), this.refreshPositions(), this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(e) {
            var i, s, n, a, o = [],
                r = [],
                h = this._connectWith();
            if (h && e)
                for (i = h.length - 1; i >= 0; i--)
                    for (n = t(h[i]), s = n.length - 1; s >= 0; s--) a = t.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && r.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
            for (r.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = r.length - 1; i >= 0; i--) r[i][0].each(function() {
                o.push(this)
            });
            return t(o)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; e.length > i; i++)
                    if (e[i] === t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [this];
            var i, s, n, a, o, r, h, l, c = this.items,
                u = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                        item: this.currentItem
                    }) : t(this.options.items, this.element), this]
                ],
                d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (n = t(d[i]), s = n.length - 1; s >= 0; s--) a = t.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && (u.push([t.isFunction(a.options.items) ? a.options.items.call(a.element[0], e, {
                        item: this.currentItem
                    }) : t(a.options.items, a.element), a]), this.containers.push(a));
            for (i = u.length - 1; i >= 0; i--)
                for (o = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++) h = t(r[s]), h.data(this.widgetName + "-item", o), c.push({
                    item: h,
                    instance: o,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, n, a;
            for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), a = n.offset(), s.left = a.left, s.top = a.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) a = this.containers[i].element.offset(), this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            e = e || this;
            var i, s = e.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function() {
                    var s = e.currentItem[0].nodeName.toLowerCase(),
                        n = t(e.document[0].createElement(s)).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === s ? n.append("<td colspan='99'>&#160;</td>") : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                },
                update: function(t, n) {
                    (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
        },
        _contactContainers: function(s) {
            var n, a, o, r, h, l, c, u, d, p, f = null,
                m = null;
            for (n = this.containers.length - 1; n >= 0; n--)
                if (!t.contains(this.currentItem[0], this.containers[n].element[0]))
                    if (this._intersectsWith(this.containers[n].containerCache)) {
                        if (f && t.contains(this.containers[n].element[0], f.element[0])) continue;
                        f = this.containers[n], m = n
                    } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", s, this._uiHash(this)), this.containers[n].containerCache.over = 0);
            if (f)
                if (1 === this.containers.length) this.containers[m].containerCache.over || (this.containers[m]._trigger("over", s, this._uiHash(this)), this.containers[m].containerCache.over = 1);
                else {
                    for (o = 1e4, r = null, p = f.floating || i(this.currentItem), h = p ? "left" : "top", l = p ? "width" : "height", c = this.positionAbs[h] + this.offset.click[h], a = this.items.length - 1; a >= 0; a--) t.contains(this.containers[m].element[0], this.items[a].item[0]) && this.items[a].item[0] !== this.currentItem[0] && (!p || e(this.positionAbs.top + this.offset.click.top, this.items[a].top, this.items[a].height)) && (u = this.items[a].item.offset()[h], d = !1, Math.abs(u - c) > Math.abs(u + this.items[a][l] - c) && (d = !0, u += this.items[a][l]), o > Math.abs(u - c) && (o = Math.abs(u - c), r = this.items[a], this.direction = d ? "up" : "down"));
                    if (!r && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[m]) return;
                    r ? this._rearrange(s, r, null, !0) : this._rearrange(s, null, this.containers[m].element, !0), this._trigger("change", s, this._uiHash()), this.containers[m]._trigger("change", s, this._uiHash(this)), this.currentContainer = this.containers[m], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[m]._trigger("over", s, this._uiHash(this)), this.containers[m].containerCache.over = 1
                }
        },
        _createHelper: function(e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, s, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1,
                n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                a = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function(e) {
            var i, s, n = this.options,
                a = e.pageX,
                o = e.pageY,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                h = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
                left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function() {
                n === this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function(t, e) {
            this.reverting = !1;
            var i, s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS)("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && s.push(function(t) {
                    this._trigger("receive", t, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
                    this._trigger("update", t, this._uiHash())
                }), this !== this.currentContainer && (e || (s.push(function(t) {
                    this._trigger("remove", t, this._uiHash())
                }), s.push(function(t) {
                    return function(e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), s.push(function(t) {
                    return function(e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) e || s.push(function(t) {
                return function(e) {
                    t._trigger("deactivate", e, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over && (s.push(function(t) {
                return function(e) {
                    t._trigger("out", e, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!e) {
                    for (this._trigger("beforeStop", t, this._uiHash()), i = 0; s.length > i; i++) s[i].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
                for (i = 0; s.length > i; i++) s[i].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function() {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    })
})(jQuery);
(function(t, e) {
    function i() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, t.extend(this._defaults, this.regional[""]), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function s(e) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.delegate(i, "mouseout", function() {
            t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", function() {
            t.datepicker._isDisabledDatepicker(a.inline ? e.parent()[0] : a.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function n(e, i) {
        t.extend(e, i);
        for (var s in i) null == i[s] && (e[s] = i[s]);
        return e
    }
    t.extend(t.ui, {
        datepicker: {
            version: "1.10.2"
        }
    });
    var a, r = "datepicker",
        o = (new Date).getTime();
    t.extend(i.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(t) {
            return n(this._defaults, t || {}), this
        },
        _attachDatepicker: function(e, i) {
            var s, n, a;
            s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), a = this._newInst(t(e), n), a.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, a) : n && this._inlineDatepicker(e, a)
        },
        _newInst: function(e, i) {
            var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: n,
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(e, i) {
            var s = t(e);
            i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, r, i), i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, i) {
            var s, n, a, r = this._get(i, "appendText"),
                o = this._get(i, "isRTL");
            i.append && i.append.remove(), r && (i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>"), e[o ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: a,
                alt: n,
                title: n
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(a ? t("<img/>").attr({
                src: a,
                alt: n,
                title: n
            }) : n)), e[o ? "before" : "after"](i.trigger), i.trigger.click(function() {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
            }))
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, s, n, a = new Date(2009, 11, 20),
                    r = this._get(t, "dateFormat");
                r.match(/[DM]/) && (e = function(t) {
                    for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && (i = t[n].length, s = n);
                    return s
                }, a.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), t.input.attr("size", this._formatDate(t, a).length)
            }
        },
        _inlineDatepicker: function(e, i) {
            var s = t(e);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, r, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(e, i, s, a, o) {
            var h, l, c, u, d, p = this._dialogInst;
            return p || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, t.data(this._dialogInput[0], r, p)), n(p.settings, a || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (l = document.documentElement.clientWidth, c = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + u, c / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], r, p), this
        },
        _destroyDatepicker: function(e) {
            var i, s = t(e),
                n = t.data(e, r);
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, r), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(e) {
            var i, s, n = t(e),
                a = t.data(e, r);
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, a.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }))
        },
        _disableDatepicker: function(e) {
            var i, s, n = t(e),
                a = t.data(e, r);
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, a.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function(t) {
            if (!t) return !1;
            for (var e = 0; this._disabledInputs.length > e; e++)
                if (this._disabledInputs[e] === t) return !0;
            return !1
        },
        _getInst: function(e) {
            try {
                return t.data(e, r)
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(i, s, a) {
            var r, o, h, l, c = this._getInst(i);
            return 2 === arguments.length && "string" == typeof s ? "defaults" === s ? t.extend({}, t.datepicker._defaults) : c ? "all" === s ? t.extend({}, c.settings) : this._get(c, s) : null : (r = s || {}, "string" == typeof s && (r = {}, r[s] = a), c && (this._curInst === c && this._hideDatepicker(), o = this._getDateDatepicker(i, !0), h = this._getMinMaxDate(c, "min"), l = this._getMinMaxDate(c, "max"), n(c.settings, r), null !== h && r.dateFormat !== e && r.minDate === e && (c.settings.minDate = this._formatDate(c, h)), null !== l && r.dateFormat !== e && r.maxDate === e && (c.settings.maxDate = this._formatDate(c, l)), "disabled" in r && (r.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(t(i), c), this._autoSize(c), this._setDate(c, o), this._updateAlternate(c), this._updateDatepicker(c)), e)
        },
        _changeDatepicker: function(t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
        },
        _doKeyDown: function(e) {
            var i, s, n, a = t.datepicker._getInst(e.target),
                r = !0,
                o = a.dpDiv.is(".ui-datepicker-rtl");
            if (a._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(), r = !1;
                    break;
                case 13:
                    return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", a.dpDiv), n[0] && t.datepicker._selectDay(e.target, a.selectedMonth, a.selectedYear, n[0]), i = t.datepicker._get(a, "onSelect"), i ? (s = t.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [s, a])) : t.datepicker._hideDatepicker(), !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), r = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), r = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, o ? 1 : -1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), r = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, o ? -1 : 1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), r = e.ctrlKey || e.metaKey;
                    break;
                default:
                    r = !1
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : r = !1;
            r && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function(i) {
            var s, n, a = t.datepicker._getInst(i.target);
            return t.datepicker._get(a, "constrainInput") ? (s = t.datepicker._possibleChars(t.datepicker._get(a, "dateFormat")), n = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > n || !s || s.indexOf(n) > -1) : e
        },
        _doKeyUp: function(e) {
            var i, s = t.datepicker._getInst(e.target);
            if (s.input.val() !== s.lastVal) try {
                i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s))
            } catch (n) {}
            return !0
        },
        _showDatepicker: function(e) {
            if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                var i, s, a, r, o, h, l;
                i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), s = t.datepicker._get(i, "beforeShow"), a = s ? s.apply(e, [e, i]) : {}, a !== !1 && (n(i.settings, a), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function() {
                    return r |= "fixed" === t(this).css("position"), !r
                }), o = {
                    left: t.datepicker._pos[0],
                    top: t.datepicker._pos[1]
                }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), t.datepicker._updateDatepicker(i), o = t.datepicker._checkOffset(i, o, r), i.dpDiv.css({
                    position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: o.left + "px",
                    top: o.top + "px"
                }), i.inline || (h = t.datepicker._get(i, "showAnim"), l = t.datepicker._get(i, "duration"), i.dpDiv.zIndex(t(e).zIndex() + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? i.dpDiv.show(h, t.datepicker._get(i, "showOptions"), l) : i.dpDiv[h || "show"](h ? l : null), i.input.is(":visible") && !i.input.is(":disabled") && i.input.focus(), t.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4, a = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var i, s = this._getNumberOfMonths(e),
                n = s[1],
                r = 17;
            e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", r * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] !== document.activeElement && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
            }, 0))
        },
        _getBorders: function(t) {
            var e = function(t) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[t] || t
            };
            return [parseFloat(e(t.css("border-left-width"))), parseFloat(e(t.css("border-top-width")))]
        },
        _checkOffset: function(e, i, s) {
            var n = e.dpDiv.outerWidth(),
                a = e.dpDiv.outerHeight(),
                r = e.input ? e.input.outerWidth() : 0,
                o = e.input ? e.input.outerHeight() : 0,
                h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
                l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? n - r : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + o ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + o) : 0), i
        },
        _findPos: function(e) {
            for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"];
            return i = t(e).offset(), [i.left, i.top]
        },
        _hideDatepicker: function(e) {
            var i, s, n, a, o = this._curInst;
            !o || e && o !== t.data(e, r) || this._datepickerShowing && (i = this._get(o, "showAnim"), s = this._get(o, "duration"), n = function() {
                t.datepicker._tidyDialog(o)
            }, t.effects && (t.effects.effect[i] || t.effects[i]) ? o.dpDiv.hide(i, t.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(t) {
            t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target),
                    s = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(e, i, s) {
            var n = t(e),
                a = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s), this._updateDatepicker(a))
        },
        _gotoToday: function(e) {
            var i, s = t(e),
                n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
        },
        _selectMonthYear: function(e, i, s) {
            var n = t(e),
                a = this._getInst(n[0]);
            a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n)
        },
        _selectDay: function(e, i, s, n) {
            var a, r = t(e);
            t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (a = this._getInst(r[0]), a.selectedDay = a.currentDay = t("a", n).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = s, this._selectDate(e, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
        },
        _clearDate: function(e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function(e, i) {
            var s, n = t(e),
                a = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), s = this._get(a, "onSelect"), s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var i, s, n, a = this._get(e, "altField");
            a && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(a).each(function() {
                t(this).val(n)
            }))
        },
        noWeekends: function(t) {
            var e = t.getDay();
            return [e > 0 && 6 > e, ""]
        },
        iso8601Week: function(t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        },
        parseDate: function(i, s, n) {
            if (null == i || null == s) throw "Invalid arguments";
            if (s = "object" == typeof s ? "" + s : s + "", "" === s) return null;
            var a, r, o, h, l = 0,
                c = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                u = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10),
                d = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                p = (n ? n.dayNames : null) || this._defaults.dayNames,
                f = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                m = (n ? n.monthNames : null) || this._defaults.monthNames,
                g = -1,
                v = -1,
                _ = -1,
                b = -1,
                y = !1,
                w = function(t) {
                    var e = i.length > a + 1 && i.charAt(a + 1) === t;
                    return e && a++, e
                },
                k = function(t) {
                    var e = w(t),
                        i = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                        n = RegExp("^\\d{1," + i + "}"),
                        a = s.substring(l).match(n);
                    if (!a) throw "Missing number at position " + l;
                    return l += a[0].length, parseInt(a[0], 10)
                },
                x = function(i, n, a) {
                    var r = -1,
                        o = t.map(w(i) ? a : n, function(t, e) {
                            return [
                                [e, t]
                            ]
                        }).sort(function(t, e) {
                            return -(t[1].length - e[1].length)
                        });
                    if (t.each(o, function(t, i) {
                            var n = i[1];
                            return s.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (r = i[0], l += n.length, !1) : e
                        }), -1 !== r) return r + 1;
                    throw "Unknown name at position " + l
                },
                D = function() {
                    if (s.charAt(l) !== i.charAt(a)) throw "Unexpected literal at position " + l;
                    l++
                };
            for (a = 0; i.length > a; a++)
                if (y) "'" !== i.charAt(a) || w("'") ? D() : y = !1;
                else switch (i.charAt(a)) {
                    case "d":
                        _ = k("d");
                        break;
                    case "D":
                        x("D", d, p);
                        break;
                    case "o":
                        b = k("o");
                        break;
                    case "m":
                        v = k("m");
                        break;
                    case "M":
                        v = x("M", f, m);
                        break;
                    case "y":
                        g = k("y");
                        break;
                    case "@":
                        h = new Date(k("@")), g = h.getFullYear(), v = h.getMonth() + 1, _ = h.getDate();
                        break;
                    case "!":
                        h = new Date((k("!") - this._ticksTo1970) / 1e4), g = h.getFullYear(), v = h.getMonth() + 1, _ = h.getDate();
                        break;
                    case "'":
                        w("'") ? D() : y = !0;
                        break;
                    default:
                        D()
                }
                if (s.length > l && (o = s.substr(l), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
            if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= g ? 0 : -100)), b > -1)
                for (v = 1, _ = b;;) {
                    if (r = this._getDaysInMonth(g, v - 1), r >= _) break;
                    v++, _ -= r
                }
            if (h = this._daylightSavingAdjust(new Date(g, v - 1, _)), h.getFullYear() !== g || h.getMonth() + 1 !== v || h.getDate() !== _) throw "Invalid date";
            return h
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(t, e, i) {
            if (!e) return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                a = (i ? i.dayNames : null) || this._defaults.dayNames,
                r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                o = (i ? i.monthNames : null) || this._defaults.monthNames,
                h = function(e) {
                    var i = t.length > s + 1 && t.charAt(s + 1) === e;
                    return i && s++, i
                },
                l = function(t, e, i) {
                    var s = "" + e;
                    if (h(t))
                        for (; i > s.length;) s = "0" + s;
                    return s
                },
                c = function(t, e, i, s) {
                    return h(t) ? s[e] : i[e]
                },
                u = "",
                d = !1;
            if (e)
                for (s = 0; t.length > s; s++)
                    if (d) "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;
                    else switch (t.charAt(s)) {
                        case "d":
                            u += l("d", e.getDate(), 2);
                            break;
                        case "D":
                            u += c("D", e.getDay(), n, a);
                            break;
                        case "o":
                            u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            u += l("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            u += c("M", e.getMonth(), r, o);
                            break;
                        case "y":
                            u += h("y") ? e.getFullYear() : (10 > e.getYear() % 100 ? "0" : "") + e.getYear() % 100;
                            break;
                        case "@":
                            u += e.getTime();
                            break;
                        case "!":
                            u += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            h("'") ? u += "'" : d = !0;
                            break;
                        default:
                            u += t.charAt(s)
                    }
                    return u
        },
        _possibleChars: function(t) {
            var e, i = "",
                s = !1,
                n = function(i) {
                    var s = t.length > e + 1 && t.charAt(e + 1) === i;
                    return s && e++, s
                };
            for (e = 0; t.length > e; e++)
                if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
                else switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        n("'") ? i += "'" : s = !0;
                        break;
                    default:
                        i += t.charAt(e)
                }
                return i
        },
        _get: function(t, i) {
            return t.settings[i] !== e ? t.settings[i] : this._defaults[i]
        },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"),
                    s = t.lastVal = t.input ? t.input.val() : null,
                    n = this._getDefaultDate(t),
                    a = n,
                    r = this._getFormatConfig(t);
                try {
                    a = this.parseDate(i, s, r) || n
                } catch (o) {
                    s = e ? "" : s
                }
                t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), t.currentDay = s ? a.getDate() : 0, t.currentMonth = s ? a.getMonth() : 0, t.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function(t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function(e, i, s) {
            var n = function(t) {
                    var e = new Date;
                    return e.setDate(e.getDate() + t), e
                },
                a = function(i) {
                    try {
                        return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                    } catch (s) {}
                    for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, a = n.getFullYear(), r = n.getMonth(), o = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
                        switch (l[2] || "d") {
                            case "d":
                            case "D":
                                o += parseInt(l[1], 10);
                                break;
                            case "w":
                            case "W":
                                o += 7 * parseInt(l[1], 10);
                                break;
                            case "m":
                            case "M":
                                r += parseInt(l[1], 10), o = Math.min(o, t.datepicker._getDaysInMonth(a, r));
                                break;
                            case "y":
                            case "Y":
                                a += parseInt(l[1], 10), o = Math.min(o, t.datepicker._getDaysInMonth(a, r))
                        }
                        l = h.exec(i)
                    }
                    return new Date(a, r, o)
                },
                r = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
            return r = r && "Invalid Date" == "" + r ? s : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
        },
        _daylightSavingAdjust: function(t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
        },
        _setDate: function(t, e, i) {
            var s = !e,
                n = t.selectedMonth,
                a = t.selectedYear,
                r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), n === t.selectedMonth && a === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
        },
        _getDate: function(t) {
            var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return e
        },
        _attachHandlers: function(e) {
            var i = this._get(e, "stepMonths"),
                s = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = {
                    prev: function() {
                        window["DP_jQuery_" + o].datepicker._adjustDate(s, -i, "M")
                    },
                    next: function() {
                        window["DP_jQuery_" + o].datepicker._adjustDate(s, +i, "M")
                    },
                    hide: function() {
                        window["DP_jQuery_" + o].datepicker._hideDatepicker()
                    },
                    today: function() {
                        window["DP_jQuery_" + o].datepicker._gotoToday(s)
                    },
                    selectDay: function() {
                        return window["DP_jQuery_" + o].datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return window["DP_jQuery_" + o].datepicker._selectMonthYear(s, this, "M"), !1
                    },
                    selectYear: function() {
                        return window["DP_jQuery_" + o].datepicker._selectMonthYear(s, this, "Y"), !1
                    }
                };
                t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(t) {
            var e, i, s, n, a, r, o, h, l, c, u, d, p, f, m, g, v, _, b, y, w, k, x, D, T, C, S, M, N, I, P, A, z, H, E, F, O, W, j, R = new Date,
                L = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
                Y = this._get(t, "isRTL"),
                B = this._get(t, "showButtonPanel"),
                J = this._get(t, "hideIfNoPrevNext"),
                Q = this._get(t, "navigationAsDateFormat"),
                K = this._getNumberOfMonths(t),
                V = this._get(t, "showCurrentAtPos"),
                U = this._get(t, "stepMonths"),
                q = 1 !== K[0] || 1 !== K[1],
                X = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                G = this._getMinMaxDate(t, "min"),
                $ = this._getMinMaxDate(t, "max"),
                Z = t.drawMonth - V,
                te = t.drawYear;
            if (0 > Z && (Z += 12, te--), $)
                for (e = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - K[0] * K[1] + 1, $.getDate())), e = G && G > e ? G : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, te--);
            for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = Q ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - U, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : J ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = Q ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + U, 1)), this._getFormatConfig(t)) : n, a = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : J ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", r = this._get(t, "currentText"), o = this._get(t, "gotoCurrent") && t.currentDay ? X : L, r = Q ? this.formatDate(r, o, this._getFormatConfig(t)) : r, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; K[0] > k; k++) {
                for (x = "", this.maxRows = 4, D = 0; K[1] > D; D++) {
                    if (T = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), C = " ui-corner-all", S = "", q) {
                        if (S += "<div class='ui-datepicker-group", K[1] > 1) switch (D) {
                            case 0:
                                S += " ui-datepicker-group-first", C = " ui-corner-" + (Y ? "right" : "left");
                                break;
                            case K[1] - 1:
                                S += " ui-datepicker-group-last", C = " ui-corner-" + (Y ? "left" : "right");
                                break;
                            default:
                                S += " ui-datepicker-group-middle", C = ""
                        }
                        S += "'>"
                    }
                    for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && 0 === k ? Y ? a : s : "") + (/all|right/.test(C) && 0 === k ? Y ? s : a : "") + this._generateMonthYearHeader(t, Z, te, G, $, k > 0 || D > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", M = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) N = (w + c) % 7, M += "<th" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[N] + "'>" + p[N] + "</span></th>";
                    for (S += M + "</tr></thead><tbody>", I = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, I)), P = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, A = Math.ceil((P + I) / 7), z = q ? this.maxRows > A ? this.maxRows : A : A, this.maxRows = z, H = this._daylightSavingAdjust(new Date(te, Z, 1 - P)), E = 0; z > E; E++) {
                        for (S += "<tr>", F = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(H) + "</td>" : "", w = 0; 7 > w; w++) O = g ? g.apply(t.input ? t.input[0] : null, [H]) : [!0, ""], W = H.getMonth() !== Z, j = W && !_ || !O[0] || G && G > H || $ && H > $, F += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (W ? " ui-datepicker-other-month" : "") + (H.getTime() === T.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === H.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (j ? " " + this._unselectableClass + " ui-state-disabled" : "") + (W && !v ? "" : " " + O[1] + (H.getTime() === X.getTime() ? " " + this._currentClass : "") + (H.getTime() === L.getTime() ? " ui-datepicker-today" : "")) + "'" + (W && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (j ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (W && !v ? "&#xa0;" : j ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === L.getTime() ? " ui-state-highlight" : "") + (H.getTime() === X.getTime() ? " ui-state-active" : "") + (W ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>", H.setDate(H.getDate() + 1), H = this._daylightSavingAdjust(H);
                        S += F + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, te++), S += "</tbody></table>" + (q ? "</div>" + (K[0] > 0 && D === K[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += S
                }
                y += x
            }
            return y += l, t._keyEvent = !1, y
        },
        _generateMonthYearHeader: function(t, e, i, s, n, a, r, o) {
            var h, l, c, u, d, p, f, m, g = this._get(t, "changeMonth"),
                v = this._get(t, "changeYear"),
                _ = this._get(t, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                y = "";
            if (a || !g) y += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
            else {
                for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + o[c] + "</option>");
                y += "</select>"
            }
            if (_ || (b += y + (!a && g && v ? "" : "&#xa0;")), !t.yearshtml)
                if (t.yearshtml = "", a || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
                            var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                            return isNaN(e) ? d : e
                        }, f = p(u[0]), m = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                }
            return b += this._get(t, "yearSuffix"), _ && (b += (!a && g && v ? "" : "&#xa0;") + y), b += "</div>"
        },
        _adjustInstDate: function(t, e, i) {
            var s = t.drawYear + ("Y" === i ? e : 0),
                n = t.drawMonth + ("M" === i ? e : 0),
                a = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
                r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, a)));
            t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min"),
                s = this._getMinMaxDate(t, "max"),
                n = i && i > e ? i : e;
            return s && n > s ? s : n
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function(t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function(t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function(t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function(t, e) {
            return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function(t, e, i, s) {
            var n = this._getNumberOfMonths(t),
                a = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
            return 0 > e && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(t, a)
        },
        _isInRange: function(t, e) {
            var i, s, n = this._getMinMaxDate(t, "min"),
                a = this._getMinMaxDate(t, "max"),
                r = null,
                o = null,
                h = this._get(t, "yearRange");
            return h && (i = h.split(":"), s = (new Date).getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += s), i[1].match(/[+\-].*/) && (o += s)), (!n || e.getTime() >= n.getTime()) && (!a || e.getTime() <= a.getTime()) && (!r || e.getFullYear() >= r) && (!o || o >= e.getFullYear())
        },
        _getFormatConfig: function(t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                shortYearCutoff: e,
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function(t, e, i, s) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
        }
    }), t.fn.datepicker = function(e) {
        if (!this.length) return this;
        t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
        }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }, t.datepicker = new i, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.10.2", window["DP_jQuery_" + o] = t
})(jQuery);
(function(t, e) {
    var i = "ui-effects-";
    t.effects = {
            effect: {}
        },
        function(t, e) {
            function i(t, e, i) {
                var s = u[e.type] || {};
                return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
            }

            function s(i) {
                var s = l(),
                    n = s._rgba = [];
                return i = i.toLowerCase(), f(h, function(t, a) {
                    var o, r = a.re.exec(i),
                        h = r && a.parse(r),
                        l = a.space || "rgba";
                    return h ? (o = s[l](h), s[c[l].cache] = o[c[l].cache], n = s._rgba = o._rgba, !1) : e
                }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, a.transparent), s) : a[i]
            }

            function n(t, e, i) {
                return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
            }
            var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                r = /^([\-+])=\s*(\d+\.?\d*)/,
                h = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(t) {
                        return [t[1], t[2], t[3], t[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(t) {
                        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(t) {
                        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(t) {
                        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(t) {
                        return [t[1], t[2] / 100, t[3] / 100, t[4]]
                    }
                }],
                l = t.Color = function(e, i, s, n) {
                    return new t.Color.fn.parse(e, i, s, n)
                },
                c = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                u = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                d = l.support = {},
                p = t("<p>")[0],
                f = t.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function(t, e) {
                e.cache = "_" + t, e.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), l.fn = t.extend(l.prototype, {
                parse: function(n, o, r, h) {
                    if (n === e) return this._rgba = [null, null, null, null], this;
                    (n.jquery || n.nodeType) && (n = t(n).css(o), o = e);
                    var u = this,
                        d = t.type(n),
                        p = this._rgba = [];
                    return o !== e && (n = [n, o, r, h], d = "array"), "string" === d ? this.parse(s(n) || a._default) : "array" === d ? (f(c.rgba.props, function(t, e) {
                        p[e.idx] = i(n[e.idx], e)
                    }), this) : "object" === d ? (n instanceof l ? f(c, function(t, e) {
                        n[e.cache] && (u[e.cache] = n[e.cache].slice())
                    }) : f(c, function(e, s) {
                        var a = s.cache;
                        f(s.props, function(t, e) {
                            if (!u[a] && s.to) {
                                if ("alpha" === t || null == n[t]) return;
                                u[a] = s.to(u._rgba)
                            }
                            u[a][e.idx] = i(n[t], e, !0)
                        }), u[a] && 0 > t.inArray(null, u[a].slice(0, 3)) && (u[a][3] = 1, s.from && (u._rgba = s.from(u[a])))
                    }), this) : e
                },
                is: function(t) {
                    var i = l(t),
                        s = !0,
                        n = this;
                    return f(c, function(t, a) {
                        var o, r = i[a.cache];
                        return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function(t, i) {
                            return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : e
                        })), s
                    }), s
                },
                _space: function() {
                    var t = [],
                        e = this;
                    return f(c, function(i, s) {
                        e[s.cache] && t.push(i)
                    }), t.pop()
                },
                transition: function(t, e) {
                    var s = l(t),
                        n = s._space(),
                        a = c[n],
                        o = 0 === this.alpha() ? l("transparent") : this,
                        r = o[a.cache] || a.to(o._rgba),
                        h = r.slice();
                    return s = s[a.cache], f(a.props, function(t, n) {
                        var a = n.idx,
                            o = r[a],
                            l = s[a],
                            c = u[n.type] || {};
                        null !== l && (null === o ? h[a] = l : (c.mod && (l - o > c.mod / 2 ? o += c.mod : o - l > c.mod / 2 && (o -= c.mod)), h[a] = i((l - o) * e + o, n)))
                    }), this[n](h)
                },
                blend: function(e) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        s = i.pop(),
                        n = l(e)._rgba;
                    return l(t.map(i, function(t, e) {
                        return (1 - s) * n[e] + s * t
                    }))
                },
                toRgbaString: function() {
                    var e = "rgba(",
                        i = t.map(this._rgba, function(t, e) {
                            return null == t ? e > 2 ? 1 : 0 : t
                        });
                    return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                },
                toHslaString: function() {
                    var e = "hsla(",
                        i = t.map(this.hsla(), function(t, e) {
                            return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                        });
                    return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                },
                toHexString: function(e) {
                    var i = this._rgba.slice(),
                        s = i.pop();
                    return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) {
                        return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), l.fn.parse.prototype = l.fn, c.hsla.to = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e, i, s = t[0] / 255,
                    n = t[1] / 255,
                    a = t[2] / 255,
                    o = t[3],
                    r = Math.max(s, n, a),
                    h = Math.min(s, n, a),
                    l = r - h,
                    c = r + h,
                    u = .5 * c;
                return e = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c), [Math.round(e) % 360, i, u, null == o ? 1 : o]
            }, c.hsla.from = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e = t[0] / 360,
                    i = t[1],
                    s = t[2],
                    a = t[3],
                    o = .5 >= s ? s * (1 + i) : s + i - s * i,
                    r = 2 * s - o;
                return [Math.round(255 * n(r, o, e + 1 / 3)), Math.round(255 * n(r, o, e)), Math.round(255 * n(r, o, e - 1 / 3)), a]
            }, f(c, function(s, n) {
                var a = n.props,
                    o = n.cache,
                    h = n.to,
                    c = n.from;
                l.fn[s] = function(s) {
                    if (h && !this[o] && (this[o] = h(this._rgba)), s === e) return this[o].slice();
                    var n, r = t.type(s),
                        u = "array" === r || "object" === r ? s : arguments,
                        d = this[o].slice();
                    return f(a, function(t, e) {
                        var s = u["object" === r ? t : e.idx];
                        null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
                    }), c ? (n = l(c(d)), n[o] = d, n) : l(d)
                }, f(a, function(e, i) {
                    l.fn[e] || (l.fn[e] = function(n) {
                        var a, o = t.type(n),
                            h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
                            l = this[h](),
                            c = l[i.idx];
                        return "undefined" === o ? c : ("function" === o && (n = n.call(this, c), o = t.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
                    })
                })
            }), l.hook = function(e) {
                var i = e.split(" ");
                f(i, function(e, i) {
                    t.cssHooks[i] = {
                        set: function(e, n) {
                            var a, o, r = "";
                            if ("transparent" !== n && ("string" !== t.type(n) || (a = s(n)))) {
                                if (n = l(a || n), !d.rgba && 1 !== n._rgba[3]) {
                                    for (o = "backgroundColor" === i ? e.parentNode : e;
                                        ("" === r || "transparent" === r) && o && o.style;) try {
                                        r = t.css(o, "backgroundColor"), o = o.parentNode
                                    } catch (h) {}
                                    n = n.blend(r && "transparent" !== r ? r : "_default")
                                }
                                n = n.toRgbaString()
                            }
                            try {
                                e.style[i] = n
                            } catch (h) {}
                        }
                    }, t.fx.step[i] = function(e) {
                        e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                    }
                })
            }, l.hook(o), t.cssHooks.borderColor = {
                expand: function(t) {
                    var e = {};
                    return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
                        e["border" + s + "Color"] = t
                    }), e
                }
            }, a = t.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(jQuery),
        function() {
            function i(e) {
                var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                    a = {};
                if (n && n.length && n[0] && n[n[0]])
                    for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (a[t.camelCase(i)] = n[i]);
                else
                    for (i in n) "string" == typeof n[i] && (a[i] = n[i]);
                return a
            }

            function s(e, i) {
                var s, n, o = {};
                for (s in i) n = i[s], e[s] !== n && (a[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n));
                return o
            }
            var n = ["add", "remove", "toggle"],
                a = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
                t.fx.step[i] = function(t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
                }
            }), t.fn.addBack || (t.fn.addBack = function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }), t.effects.animateClass = function(e, a, o, r) {
                var h = t.speed(a, o, r);
                return this.queue(function() {
                    var a, o = t(this),
                        r = o.attr("class") || "",
                        l = h.children ? o.find("*").addBack() : o;
                    l = l.map(function() {
                        var e = t(this);
                        return {
                            el: e,
                            start: i(this)
                        }
                    }), a = function() {
                        t.each(n, function(t, i) {
                            e[i] && o[i + "Class"](e[i])
                        })
                    }, a(), l = l.map(function() {
                        return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this
                    }), o.attr("class", r), l = l.map(function() {
                        var e = this,
                            i = t.Deferred(),
                            s = t.extend({}, h, {
                                queue: !1,
                                complete: function() {
                                    i.resolve(e)
                                }
                            });
                        return this.el.animate(this.diff, s), i.promise()
                    }), t.when.apply(t, l.get()).done(function() {
                        a(), t.each(arguments, function() {
                            var e = this.el;
                            t.each(this.diff, function(t) {
                                e.css(t, "")
                            })
                        }), h.complete.call(o[0])
                    })
                })
            }, t.fn.extend({
                addClass: function(e) {
                    return function(i, s, n, a) {
                        return s ? t.effects.animateClass.call(this, {
                            add: i
                        }, s, n, a) : e.apply(this, arguments)
                    }
                }(t.fn.addClass),
                removeClass: function(e) {
                    return function(i, s, n, a) {
                        return arguments.length > 1 ? t.effects.animateClass.call(this, {
                            remove: i
                        }, s, n, a) : e.apply(this, arguments)
                    }
                }(t.fn.removeClass),
                toggleClass: function(i) {
                    return function(s, n, a, o, r) {
                        return "boolean" == typeof n || n === e ? a ? t.effects.animateClass.call(this, n ? {
                            add: s
                        } : {
                            remove: s
                        }, a, o, r) : i.apply(this, arguments) : t.effects.animateClass.call(this, {
                            toggle: s
                        }, n, a, o)
                    }
                }(t.fn.toggleClass),
                switchClass: function(e, i, s, n, a) {
                    return t.effects.animateClass.call(this, {
                        add: i,
                        remove: e
                    }, s, n, a)
                }
            })
        }(),
        function() {
            function s(e, i, s, n) {
                return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                    effect: e
                }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
            }

            function n(e) {
                return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
            }
            t.extend(t.effects, {
                version: "1.10.2",
                save: function(t, e) {
                    for (var s = 0; e.length > s; s++) null !== e[s] && t.data(i + e[s], t[0].style[e[s]])
                },
                restore: function(t, s) {
                    var n, a;
                    for (a = 0; s.length > a; a++) null !== s[a] && (n = t.data(i + s[a]), n === e && (n = ""), t.css(s[a], n))
                },
                setMode: function(t, e) {
                    return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                },
                getBaseline: function(t, e) {
                    var i, s;
                    switch (t[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = t[0] / e.height
                    }
                    switch (t[1]) {
                        case "left":
                            s = 0;
                            break;
                        case "center":
                            s = .5;
                            break;
                        case "right":
                            s = 1;
                            break;
                        default:
                            s = t[1] / e.width
                    }
                    return {
                        x: s,
                        y: i
                    }
                },
                createWrapper: function(e) {
                    if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                    var i = {
                            width: e.outerWidth(!0),
                            height: e.outerHeight(!0),
                            "float": e.css("float")
                        },
                        s = t("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        n = {
                            width: e.width(),
                            height: e.height()
                        },
                        a = document.activeElement;
                    try {
                        a.id
                    } catch (o) {
                        a = document.body
                    }
                    return e.wrap(s), (e[0] === a || t.contains(e[0], a)) && t(a).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({
                        position: "relative"
                    }), e.css({
                        position: "relative"
                    })) : (t.extend(i, {
                        position: e.css("position"),
                        zIndex: e.css("z-index")
                    }), t.each(["top", "left", "bottom", "right"], function(t, s) {
                        i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                    }), e.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), e.css(n), s.css(i).show()
                },
                removeWrapper: function(e) {
                    var i = document.activeElement;
                    return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
                },
                setTransition: function(e, i, s, n) {
                    return n = n || {}, t.each(i, function(t, i) {
                        var a = e.cssUnit(i);
                        a[0] > 0 && (n[i] = a[0] * s + a[1])
                    }), n
                }
            }), t.fn.extend({
                effect: function() {
                    function e(e) {
                        function s() {
                            t.isFunction(a) && a.call(n[0]), t.isFunction(e) && e()
                        }
                        var n = t(this),
                            a = i.complete,
                            r = i.mode;
                        (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), s()) : o.call(n[0], i, s)
                    }
                    var i = s.apply(this, arguments),
                        n = i.mode,
                        a = i.queue,
                        o = t.effects.effect[i.effect];
                    return t.fx.off || !o ? n ? this[n](i.duration, i.complete) : this.each(function() {
                        i.complete && i.complete.call(this)
                    }) : a === !1 ? this.each(e) : this.queue(a || "fx", e)
                },
                show: function(t) {
                    return function(e) {
                        if (n(e)) return t.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "show", this.effect.call(this, i)
                    }
                }(t.fn.show),
                hide: function(t) {
                    return function(e) {
                        if (n(e)) return t.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "hide", this.effect.call(this, i)
                    }
                }(t.fn.hide),
                toggle: function(t) {
                    return function(e) {
                        if (n(e) || "boolean" == typeof e) return t.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "toggle", this.effect.call(this, i)
                    }
                }(t.fn.toggle),
                cssUnit: function(e) {
                    var i = this.css(e),
                        s = [];
                    return t.each(["em", "px", "%", "pt"], function(t, e) {
                        i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                    }), s
                }
            })
        }(),
        function() {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
                e[i] = function(e) {
                    return Math.pow(e, t + 2)
                }
            }), t.extend(e, {
                Sine: function(t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                Circ: function(t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                Elastic: function(t) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(t) {
                    return t * t * (3 * t - 2)
                },
                Bounce: function(t) {
                    for (var e, i = 4;
                        ((e = Math.pow(2, --i)) - 1) / 11 > t;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }), t.each(e, function(e, i) {
                t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                    return 1 - i(1 - t)
                }, t.easing["easeInOut" + e] = function(t) {
                    return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                }
            })
        }()
})(jQuery);
(function(t) {
    var e = /up|down|vertical/,
        i = /up|left|vertical|horizontal/;
    t.effects.effect.blind = function(s, n) {
        var a, o, r, h = t(this),
            l = ["position", "top", "bottom", "left", "right", "height", "width"],
            c = t.effects.setMode(h, s.mode || "hide"),
            u = s.direction || "up",
            d = e.test(u),
            p = d ? "height" : "width",
            f = d ? "top" : "left",
            m = i.test(u),
            g = {},
            v = "show" === c;
        h.parent().is(".ui-effects-wrapper") ? t.effects.save(h.parent(), l) : t.effects.save(h, l), h.show(), a = t.effects.createWrapper(h).css({
            overflow: "hidden"
        }), o = a[p](), r = parseFloat(a.css(f)) || 0, g[p] = v ? o : 0, m || (h.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
            position: "absolute"
        }), g[f] = v ? r : o + r), v && (a.css(p, 0), m || a.css(f, r + o)), a.animate(g, {
            duration: s.duration,
            easing: s.easing,
            queue: !1,
            complete: function() {
                "hide" === c && h.hide(), t.effects.restore(h, l), t.effects.removeWrapper(h), n()
            }
        })
    }
})(jQuery);
(function(t) {
    t.effects.effect.bounce = function(e, i) {
        var s, n, a, o = t(this),
            r = ["position", "top", "bottom", "left", "right", "height", "width"],
            h = t.effects.setMode(o, e.mode || "effect"),
            l = "hide" === h,
            c = "show" === h,
            u = e.direction || "up",
            d = e.distance,
            p = e.times || 5,
            f = 2 * p + (c || l ? 1 : 0),
            m = e.duration / f,
            g = e.easing,
            v = "up" === u || "down" === u ? "top" : "left",
            _ = "up" === u || "left" === u,
            b = o.queue(),
            y = b.length;
        for ((c || l) && r.push("opacity"), t.effects.save(o, r), o.show(), t.effects.createWrapper(o), d || (d = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (a = {
                opacity: 1
            }, a[v] = 0, o.css("opacity", 0).css(v, _ ? 2 * -d : 2 * d).animate(a, m, g)), l && (d /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++) n = {}, n[v] = (_ ? "-=" : "+=") + d, o.animate(n, m, g).animate(a, m, g), d = l ? 2 * d : d / 2;
        l && (n = {
            opacity: 0
        }, n[v] = (_ ? "-=" : "+=") + d, o.animate(n, m, g)), o.queue(function() {
            l && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
        }), y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))), o.dequeue()
    }
})(jQuery);
(function(t) {
    t.effects.effect.clip = function(e, i) {
        var s, n, a, o = t(this),
            r = ["position", "top", "bottom", "left", "right", "height", "width"],
            h = t.effects.setMode(o, e.mode || "hide"),
            l = "show" === h,
            c = e.direction || "vertical",
            u = "vertical" === c,
            d = u ? "height" : "width",
            p = u ? "top" : "left",
            f = {};
        t.effects.save(o, r), o.show(), s = t.effects.createWrapper(o).css({
            overflow: "hidden"
        }), n = "IMG" === o[0].tagName ? s : o, a = n[d](), l && (n.css(d, 0), n.css(p, a / 2)), f[d] = l ? a : 0, f[p] = l ? 0 : a / 2, n.animate(f, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                l || o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
            }
        })
    }
})(jQuery);
(function(t) {
    t.effects.effect.drop = function(e, i) {
        var s, n = t(this),
            a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            o = t.effects.setMode(n, e.mode || "hide"),
            r = "show" === o,
            h = e.direction || "left",
            l = "up" === h || "down" === h ? "top" : "left",
            c = "up" === h || "left" === h ? "pos" : "neg",
            u = {
                opacity: r ? 1 : 0
            };
        t.effects.save(n, a), n.show(), t.effects.createWrapper(n), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(l, "pos" === c ? -s : s), u[l] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + s, n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
            }
        })
    }
})(jQuery);
(function(t) {
    t.effects.effect.explode = function(e, i) {
        function s() {
            b.push(this), b.length === u * d && n()
        }

        function n() {
            p.css({
                visibility: "visible"
            }), t(b).remove(), m || p.hide(), i()
        }
        var a, o, r, h, l, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
            d = u,
            p = t(this),
            f = t.effects.setMode(p, e.mode || "hide"),
            m = "show" === f,
            g = p.show().css("visibility", "hidden").offset(),
            v = Math.ceil(p.outerWidth() / d),
            _ = Math.ceil(p.outerHeight() / u),
            b = [];
        for (a = 0; u > a; a++)
            for (h = g.top + a * _, c = a - (u - 1) / 2, o = 0; d > o; o++) r = g.left + o * v, l = o - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -o * v,
                top: -a * _
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: v,
                height: _,
                left: r + (m ? l * v : 0),
                top: h + (m ? c * _ : 0),
                opacity: m ? 0 : 1
            }).animate({
                left: r + (m ? 0 : l * v),
                top: h + (m ? 0 : c * _),
                opacity: m ? 1 : 0
            }, e.duration || 500, e.easing, s)
    }
})(jQuery);
(function(t) {
    t.effects.effect.fade = function(e, i) {
        var s = t(this),
            n = t.effects.setMode(s, e.mode || "toggle");
        s.animate({
            opacity: n
        }, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }
})(jQuery);
(function(t) {
    t.effects.effect.fold = function(e, i) {
        var s, n, a = t(this),
            o = ["position", "top", "bottom", "left", "right", "height", "width"],
            r = t.effects.setMode(a, e.mode || "hide"),
            h = "show" === r,
            l = "hide" === r,
            c = e.size || 15,
            u = /([0-9]+)%/.exec(c),
            d = !!e.horizFirst,
            p = h !== d,
            f = p ? ["width", "height"] : ["height", "width"],
            m = e.duration / 2,
            g = {},
            v = {};
        t.effects.save(a, o), a.show(), s = t.effects.createWrapper(a).css({
            overflow: "hidden"
        }), n = p ? [s.width(), s.height()] : [s.height(), s.width()], u && (c = parseInt(u[1], 10) / 100 * n[l ? 0 : 1]), h && s.css(d ? {
            height: 0,
            width: c
        } : {
            height: c,
            width: 0
        }), g[f[0]] = h ? n[0] : c, v[f[1]] = h ? n[1] : 0, s.animate(g, m, e.easing).animate(v, m, e.easing, function() {
            l && a.hide(), t.effects.restore(a, o), t.effects.removeWrapper(a), i()
        })
    }
})(jQuery);
(function(t) {
    t.effects.effect.highlight = function(e, i) {
        var s = t(this),
            n = ["backgroundImage", "backgroundColor", "opacity"],
            a = t.effects.setMode(s, e.mode || "show"),
            o = {
                backgroundColor: s.css("backgroundColor")
            };
        "hide" === a && (o.opacity = 0), t.effects.save(s, n), s.show().css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(o, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === a && s.hide(), t.effects.restore(s, n), i()
            }
        })
    }
})(jQuery);
(function(t) {
    t.effects.effect.pulsate = function(e, i) {
        var s, n = t(this),
            a = t.effects.setMode(n, e.mode || "show"),
            o = "show" === a,
            r = "hide" === a,
            h = o || "hide" === a,
            l = 2 * (e.times || 5) + (h ? 1 : 0),
            c = e.duration / l,
            u = 0,
            d = n.queue(),
            p = d.length;
        for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), u = 1), s = 1; l > s; s++) n.animate({
            opacity: u
        }, c, e.easing), u = 1 - u;
        n.animate({
            opacity: u
        }, c, e.easing), n.queue(function() {
            r && n.hide(), i()
        }), p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, l + 1))), n.dequeue()
    }
})(jQuery);
(function(t) {
    t.effects.effect.puff = function(e, i) {
        var s = t(this),
            n = t.effects.setMode(s, e.mode || "hide"),
            a = "hide" === n,
            o = parseInt(e.percent, 10) || 150,
            r = o / 100,
            h = {
                height: s.height(),
                width: s.width(),
                outerHeight: s.outerHeight(),
                outerWidth: s.outerWidth()
            };
        t.extend(e, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: n,
            complete: i,
            percent: a ? o : 100,
            from: a ? h : {
                height: h.height * r,
                width: h.width * r,
                outerHeight: h.outerHeight * r,
                outerWidth: h.outerWidth * r
            }
        }), s.effect(e)
    }, t.effects.effect.scale = function(e, i) {
        var s = t(this),
            n = t.extend(!0, {}, e),
            a = t.effects.setMode(s, e.mode || "effect"),
            o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === a ? 0 : 100),
            r = e.direction || "both",
            h = e.origin,
            l = {
                height: s.height(),
                width: s.width(),
                outerHeight: s.outerHeight(),
                outerWidth: s.outerWidth()
            },
            c = {
                y: "horizontal" !== r ? o / 100 : 1,
                x: "vertical" !== r ? o / 100 : 1
            };
        n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = h || ["middle", "center"], n.restore = !0), n.from = e.from || ("show" === a ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : l), n.to = {
            height: l.height * c.y,
            width: l.width * c.x,
            outerHeight: l.outerHeight * c.y,
            outerWidth: l.outerWidth * c.x
        }, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
    }, t.effects.effect.size = function(e, i) {
        var s, n, a, o = t(this),
            r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            l = ["width", "height", "overflow"],
            c = ["fontSize"],
            u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            p = t.effects.setMode(o, e.mode || "effect"),
            f = e.restore || "effect" !== p,
            m = e.scale || "both",
            g = e.origin || ["middle", "center"],
            v = o.css("position"),
            _ = f ? r : h,
            b = {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            };
        "show" === p && o.show(), s = {
            height: o.height(),
            width: o.width(),
            outerHeight: o.outerHeight(),
            outerWidth: o.outerWidth()
        }, "toggle" === e.mode && "show" === p ? (o.from = e.to || b, o.to = e.from || s) : (o.from = e.from || ("show" === p ? b : s), o.to = e.to || ("hide" === p ? b : s)), a = {
            from: {
                y: o.from.height / s.height,
                x: o.from.width / s.width
            },
            to: {
                y: o.to.height / s.height,
                x: o.to.width / s.width
            }
        }, ("box" === m || "both" === m) && (a.from.y !== a.to.y && (_ = _.concat(u), o.from = t.effects.setTransition(o, u, a.from.y, o.from), o.to = t.effects.setTransition(o, u, a.to.y, o.to)), a.from.x !== a.to.x && (_ = _.concat(d), o.from = t.effects.setTransition(o, d, a.from.x, o.from), o.to = t.effects.setTransition(o, d, a.to.x, o.to))), ("content" === m || "both" === m) && a.from.y !== a.to.y && (_ = _.concat(c).concat(l), o.from = t.effects.setTransition(o, c, a.from.y, o.from), o.to = t.effects.setTransition(o, c, a.to.y, o.to)), t.effects.save(o, _), o.show(), t.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), g && (n = t.effects.getBaseline(g, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === m || "both" === m) && (u = u.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), l = r.concat(u).concat(d), o.find("*[width]").each(function() {
            var i = t(this),
                s = {
                    height: i.height(),
                    width: i.width(),
                    outerHeight: i.outerHeight(),
                    outerWidth: i.outerWidth()
                };
            f && t.effects.save(i, l), i.from = {
                height: s.height * a.from.y,
                width: s.width * a.from.x,
                outerHeight: s.outerHeight * a.from.y,
                outerWidth: s.outerWidth * a.from.x
            }, i.to = {
                height: s.height * a.to.y,
                width: s.width * a.to.x,
                outerHeight: s.height * a.to.y,
                outerWidth: s.width * a.to.x
            }, a.from.y !== a.to.y && (i.from = t.effects.setTransition(i, u, a.from.y, i.from), i.to = t.effects.setTransition(i, u, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = t.effects.setTransition(i, d, a.from.x, i.from), i.to = t.effects.setTransition(i, d, a.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function() {
                f && t.effects.restore(i, l)
            })
        })), o.animate(o.to, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), t.effects.restore(o, _), f || ("static" === v ? o.css({
                    position: "relative",
                    top: o.to.top,
                    left: o.to.left
                }) : t.each(["top", "left"], function(t, e) {
                    o.css(e, function(e, i) {
                        var s = parseInt(i, 10),
                            n = t ? o.to.left : o.to.top;
                        return "auto" === i ? n + "px" : s + n + "px"
                    })
                })), t.effects.removeWrapper(o), i()
            }
        })
    }
})(jQuery);
(function(t) {
    t.effects.effect.shake = function(e, i) {
        var s, n = t(this),
            a = ["position", "top", "bottom", "left", "right", "height", "width"],
            o = t.effects.setMode(n, e.mode || "effect"),
            r = e.direction || "left",
            h = e.distance || 20,
            l = e.times || 3,
            c = 2 * l + 1,
            u = Math.round(e.duration / c),
            d = "up" === r || "down" === r ? "top" : "left",
            p = "up" === r || "left" === r,
            f = {},
            m = {},
            g = {},
            v = n.queue(),
            _ = v.length;
        for (t.effects.save(n, a), n.show(), t.effects.createWrapper(n), f[d] = (p ? "-=" : "+=") + h, m[d] = (p ? "+=" : "-=") + 2 * h, g[d] = (p ? "-=" : "+=") + 2 * h, n.animate(f, u, e.easing), s = 1; l > s; s++) n.animate(m, u, e.easing).animate(g, u, e.easing);
        n.animate(m, u, e.easing).animate(f, u / 2, e.easing).queue(function() {
            "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
        }), _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, c + 1))), n.dequeue()
    }
})(jQuery);
(function(t) {
    t.effects.effect.slide = function(e, i) {
        var s, n = t(this),
            a = ["position", "top", "bottom", "left", "right", "width", "height"],
            o = t.effects.setMode(n, e.mode || "show"),
            r = "show" === o,
            h = e.direction || "left",
            l = "up" === h || "down" === h ? "top" : "left",
            c = "up" === h || "left" === h,
            u = {};
        t.effects.save(n, a), n.show(), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(n).css({
            overflow: "hidden"
        }), r && n.css(l, c ? isNaN(s) ? "-" + s : -s : s), u[l] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + s, n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
            }
        })
    }
})(jQuery);
(function(t) {
    t.effects.effect.transfer = function(e, i) {
        var s = t(this),
            n = t(e.to),
            a = "fixed" === n.css("position"),
            o = t("body"),
            r = a ? o.scrollTop() : 0,
            h = a ? o.scrollLeft() : 0,
            l = n.offset(),
            c = {
                top: l.top - r,
                left: l.left - h,
                height: n.innerHeight(),
                width: n.innerWidth()
            },
            u = s.offset(),
            d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
                top: u.top - r,
                left: u.left - h,
                height: s.innerHeight(),
                width: s.innerWidth(),
                position: a ? "fixed" : "absolute"
            }).animate(c, e.duration, e.easing, function() {
                d.remove(), i()
            })
    }
})(jQuery);
/* Inicialización en español para la extensión 'UI date picker' para jQuery. */
(function($) {
        $.datepicker.regional['es'] = {
                renderer: $.datepicker.defaultRenderer,
                monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
                'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
                monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun',
                'Jul','Ago','Sep','Oct','Nov','Dic'],
                dayNames: ['Domingo','Lunes','Martes','Mi&eacute;rcoles','Jueves','Viernes','S&aacute;bado'],
                dayNamesShort: ['Dom','Lun','Mar','Mi&eacute;','Juv','Vie','S&aacute;b'],
                dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','S&aacute;'],
                dateFormat: 'dd/mm/yy',
                firstDay: 1,
                prevText: '&#x3c;Ant', prevStatus: '',
                prevJumpText: '&#x3c;&#x3c;', prevJumpStatus: '',
                nextText: 'Sig&#x3e;', nextStatus: '',
                nextJumpText: '&#x3e;&#x3e;', nextJumpStatus: '',
                currentText: 'Hoy', currentStatus: '',
                todayText: 'Hoy', todayStatus: '',
                clearText: '-', clearStatus: '',
                closeText: 'Cerrar', closeStatus: '',
                yearStatus: '', monthStatus: '',
                weekText: 'Sm', weekStatus: '',
                dayStatus: 'DD d MM',
                defaultStatus: '',
                isRTL: false,
                buttonImage: ctx+'/images/IN/icoFormCalendario.png',
                showAnim: 'slideDown',
                changeMonth: false,
                changeYear: false,
                buttonText: 'Calendario',
                buttonImageOnly: true,
                showOn: 'button'
        };
        $.extend($.datepicker.defaults, $.datepicker.regional['es']);
})(jQuery);

/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});

/**
 *  Version 2.4.0 Copyright (C) 2013
 *  Tested in IE 11, FF 28.0 and Chrome 33.0.1750.154
 *  No official support for other browsers, but will TRY to accommodate challenges in other browsers.
 *  Example:
 *      Print Button: <div id="print_button">Print</div>
 *      Print Area  : <div class="PrintArea" id="MyId" class="MyClass"> ... html ... </div>
 *      Javascript  : <script>
 *                       $("div#print_button").click(function(){
 *                           $("div.PrintArea").printArea( [OPTIONS] );
 *                       });
 *                     </script>
 *  options are passed as json (example: {mode: "popup", popClose: false})
 *
 *  {OPTIONS}   | [type]     | (default), values      | Explanation
 *  ---------   | ---------  | ---------------------- | -----------
 *  @mode       | [string]   | (iframe),popup         | printable window is either iframe or browser popup
 *  @popHt      | [number]   | (500)                  | popup window height
 *  @popWd      | [number]   | (400)                  | popup window width
 *  @popX       | [number]   | (500)                  | popup window screen X position
 *  @popY       | [number]   | (500)                  | popup window screen Y position
 *  @popTitle   | [string]   | ('')                   | popup window title element
 *  @popClose   | [boolean]  | (false),true           | popup window close after printing
 *  @extraCss   | [string]   | ('')                   | comma separated list of extra css to include
 *  @retainAttr | [string[]] | ["id","class","style"] | string array of attributes to retain for the containment area. (ie: id, style, class)
 *  @standard   | [string]   | strict, loose, (html5) | Only for popup. For html 4.01, strict or loose document standard, or html 5 standard
 *  @extraHead  | [string]   | ('')                   | comma separated list of extra elements to be appended to the head tag
 */
(function($) {
    var counter = 0;
    var modes = { iframe : "iframe", popup : "popup" };
    var standards = { strict : "strict", loose : "loose", html5 : "html5" };
    var defaults = { mode       : modes.iframe,
                     standard   : standards.html5,
                     popHt      : 500,
                     popWd      : 400,
                     popX       : 200,
                     popY       : 200,
                     popTitle   : '',
                     popClose   : false,
                     extraCss   : '',
                     extraHead  : '',
                     retainAttr : ["id","class","style"] };

    var settings = {};//global settings

    $.fn.printArea = function( options )
    {
        $.extend( settings, defaults, options );

        counter++;
        var idPrefix = "printArea_";
        $( "[id^=" + idPrefix + "]" ).remove();

        settings.id = idPrefix + counter;

        var $printSource = $(this);

        var PrintAreaWindow = PrintArea.getPrintWindow();

        PrintArea.write( PrintAreaWindow.doc, $printSource );

        setTimeout( function () { PrintArea.print( PrintAreaWindow ); }, 1000 );
    };

    var PrintArea = {
        print : function( PAWindow ) {
            var paWindow = PAWindow.win;

            $(PAWindow.doc).ready(function(){
                paWindow.focus();
                paWindow.print();

                if ( settings.mode == modes.popup && settings.popClose )
                    setTimeout(function() { paWindow.close(); }, 2000);
            });
        },
        write : function ( PADocument, $ele ) {
            PADocument.open();
            PADocument.write( PrintArea.docType() + "<html>" + PrintArea.getHead() + PrintArea.getBody( $ele ) + "</html>" );
            PADocument.close();
        },
        docType : function() {
            if ( settings.mode == modes.iframe ) return "";

            if ( settings.standard == standards.html5 ) return "<!DOCTYPE html>";

            var transitional = settings.standard == standards.loose ? " Transitional" : "";
            var dtd = settings.standard == standards.loose ? "loose" : "strict";

            return '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01' + transitional + '//EN" "http://www.w3.org/TR/html4/' + dtd +  '.dtd">';
        },
        getHead : function() {
            var extraHead = "";
            var links = "";

            if ( settings.extraHead ) settings.extraHead.replace( /([^,]+)/g, function(m){ extraHead += m });

            $(document).find("link")
                .filter(function(){ // Requirement: <link> element MUST have rel="stylesheet" to be considered in print document
                        var relAttr = $(this).attr("rel");
                        return ($.type(relAttr) === 'undefined') == false && relAttr.toLowerCase() == 'stylesheet';
                    })
                .filter(function(){ // Include if media is undefined, empty, print or all
                        var mediaAttr = $(this).attr("media");
                        return $.type(mediaAttr) === 'undefined' || mediaAttr == "" || mediaAttr.toLowerCase() == 'print' || mediaAttr.toLowerCase() == 'all'
                    })
                .each(function(){
                        links += '<link type="text/css" rel="stylesheet" href="' + $(this).attr("href") + '" >';
                    });
            if ( settings.extraCss ) settings.extraCss.replace( /([^,\s]+)/g, function(m){ links += '<link type="text/css" rel="stylesheet" href="' + m + '">' });

            return "<head><title>" + settings.popTitle + "</title>" + extraHead + links + "</head>";
        },
        getBody : function ( elements ) {
            var htm = "";
            var attrs = settings.retainAttr;
            elements.each(function() {
                var ele = PrintArea.getFormData( $(this) );

                var attributes = ""
                for ( var x = 0; x < attrs.length; x++ )
                {
                    var eleAttr = $(ele).attr( attrs[x] );
                    if ( eleAttr ) attributes += (attributes.length > 0 ? " ":"") + attrs[x] + "='" + eleAttr + "'";
                }

                htm += '<div ' + attributes + '>' + $(ele).html() + '</div>';
            });

            return "<body>" + htm + "</body>";
        },
        getFormData : function ( ele ) {
            var copy = ele.clone();
            var copiedInputs = $("input,select,textarea", copy);
            $("input,select,textarea", ele).each(function( i ){
                var typeInput = $(this).attr("type");
                if ($.type(typeInput) === 'undefined') typeInput = $(this).is("select") ? "select" : $(this).is("textarea") ? "textarea" : "";
                var copiedInput = copiedInputs.eq( i );

                if ( typeInput == "radio" || typeInput == "checkbox" ) copiedInput.attr( "checked", $(this).is(":checked") );
                else if ( typeInput == "text" ) copiedInput.attr( "value", $(this).val() );
                else if ( typeInput == "select" )
                    $(this).find( "option" ).each( function( i ) {
                        if ( $(this).is(":selected") ) $("option", copiedInput).eq( i ).attr( "selected", true );
                    });
                else if ( typeInput == "textarea" ) copiedInput.text( $(this).val() );
            });
            return copy;
        },
        getPrintWindow : function () {
            switch ( settings.mode )
            {
                case modes.iframe :
                    var f = new PrintArea.Iframe();
                    return { win : f.contentWindow || f, doc : f.doc };
                case modes.popup :
                    var p = new PrintArea.Popup();
                    return { win : p, doc : p.doc };
            }
        },
        Iframe : function () {
            var frameId = settings.id;
            var iframeStyle = 'border:0;position:absolute;width:0px;height:0px;right:0px;top:0px;';
            var iframe;

            try
            {
                iframe = document.createElement('iframe');
                document.body.appendChild(iframe);
                $(iframe).attr({ style: iframeStyle, id: frameId, src: "#" + new Date().getTime() });
                iframe.doc = null;
                iframe.doc = iframe.contentDocument ? iframe.contentDocument : ( iframe.contentWindow ? iframe.contentWindow.document : iframe.document);
            }
            catch( e ) { throw e + ". iframes may not be supported in this browser."; }

            if ( iframe.doc == null ) throw "Cannot find document.";

            return iframe;
        },
        Popup : function () {
            var windowAttr = "location=yes,statusbar=no,directories=no,menubar=no,titlebar=no,toolbar=no,dependent=no";
            windowAttr += ",width=" + settings.popWd + ",height=" + settings.popHt;
            windowAttr += ",resizable=yes,screenX=" + settings.popX + ",screenY=" + settings.popY + ",personalbar=no,scrollbars=yes";

            var newWin = window.open( "", "_blank",  windowAttr );

            newWin.doc = newWin.document;

            return newWin;
        }
    };
})(jQuery);
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
        link.setAttribute('download', imageUrl.substring(imageUrl.lastIndexOf('../index.html')+1));
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
	var $k = jQuery.noConflict();
	//Definicion default de datepicker
	$k.datepicker.setDefaults($k.datepicker.regional['es']);
 	$k.datepicker.setDefaults({
 	  	buttonImage: ctx+"/images/IN/icoFormCalendario.png",
 	  	});

/*********** Convenience API Methods ***********/



function addTableFacadeToManager(id) {
    jQuery.jmesa.addTableFacade(id);
}

function setSaveToWorksheet(id) {
    jQuery.jmesa.setSaveToWorksheet(id);
}

function setFilterToWorksheet(id) {
    jQuery.jmesa.setFilterToWorksheet(id);
}

function removeFilterFromWorksheet(id) {
    jQuery.jmesa.removeFilterFromWorksheet(id);
}

function setPageToLimit(id, page) {
	jQuery.jmesa.setPageToLimitDefault(id, page);
	jQuery.jmesa.currentPage=page;
	jQuery.jmesa.currentTableId=id;
}

function setMaxRowsToLimit(id, maxRows) {
    jQuery.jmesa.setMaxRowsToLimit(id, maxRows);
}

function addSortToLimit(id, position, property, order) {
    jQuery.jmesa.addSortToLimit(id, position, property, order);
}

function removeSortFromLimit(id, property) {
    jQuery.jmesa.removeSortFromLimit(id, property);
}

function removeAllSortsFromLimit(id) {
    jQuery.jmesa.removeAllSortsFromLimit(id);
}

function getSortFromLimit(id, property) {
    jQuery.jmesa.getSortFromLimit(id, property);
}

function addFilterToLimit(id, property) {
    jQuery.jmesa.addFilterToLimit(id, property);
}

function removeFilterFromLimit(id, property) {
    jQuery.jmesa.removeFilterFromLimit(id, property);
}

function removeAllFiltersFromLimit(id) {
    jQuery.jmesa.removeAllFiltersFromLimit(id);
}

function getFilterFromLimit(id, property) {
    jQuery.jmesa.getFilterFromLimit(id, property);
}

function setExportToLimit(id, exportType) {
    jQuery.jmesa.setExportToLimit(id, exportType);
}

function createHiddenInputFieldsForLimit(id) {
    jQuery.jmesa.createHiddenInputFieldsForLimit(id);
}

function createHiddenInputFieldsForLimitAndSubmit(id) {
    jQuery.jmesa.createHiddenInputFieldsForLimitAndSubmit(id);
}

function createParameterStringForLimit(id) {
    return jQuery.jmesa.createParameterStringForLimit(id);
}

/*********** Filter ***********/

function createDynFilter(filter, id, property) {
    jQuery.jmesa.createDynFilter(filter, id, property);
}

function createDynDroplistFilter(filter, id, property, options) {
    jQuery.jmesa.createDroplistDynFilter(filter, id, property, options);
}

/*********** Worksheet ***********/

function createWsColumn(column, id, uniqueProperties, property) {
    jQuery.jmesa.createWsColumn(column, id, uniqueProperties, property);
}

function submitWsCheckboxColumn(column, id, uniqueProperties, property) {
    jQuery.jmesa.submitWsCheckboxColumn(column, id, uniqueProperties, property);
}

function submitWsColumn(originalValue, changedValue) {
    jQuery.jmesa.submitWsColumn(originalValue, changedValue);
}

/*********** Special Effects ***********/

function addDropShadow(imagesPath, theme) {
    jQuery.jmesa.addDropShadow(imagesPath, theme);
}

function getFormByJmesaTableId(id) {
    var node = document.getElementById(id);
    var found = false;
    while (!found) {
        node = node.parentNode;
        if (node.nodeName == 'FORM') {
            found = true;
            return node;
        }
    }
}

function onInvokeAction(id, action) {
	
	var form = getFormByJmesaTableId(id);
	
	if(form.exportarButton != undefined){
		form.removeChild(form.exportarButton);
	}
	
	/*try{
		setCustomFields(form);
	}catch(e){};*/
	var el = document.createElement("input");
	el.type = "hidden";
	el.name = "_jmesa";
	el.value = "jmesa";
	form.appendChild(el);
	setExportToLimit(id, '');
	createHiddenInputFieldsForLimitAndSubmit(id);
}

/**
 * Invoca la exportacion de una tabla jmesa al formato especificado.
 * Javier Prozapas - jproza@gmail.com
 * 
 * @param id
 * @param action
 */
function onInvokeExportAction(id, action) {
	
	var form = getFormByJmesaTableId(id);
	// Obtengo el formato (pdf, excel, etc)
	var exportType = jQuery.jmesa.getTableFacade(id).limit.getExport();
	
	if(form.exportarButton != undefined){
		form.removeChild(form.exportarButton);
	}
	//var el = document.createElement("input");
	var el = document.createElement("button");
	el.name = "_eventId_exportar";
	el.id   = "exportarButton";
	el.style.display = 'none';   
	el.value = "";
	form.appendChild(el);
	
	if(form.formatoExportacion != undefined){
		form.removeChild(form.formatoExportacion);
	}
	var el = document.createElement("input");
	el.type = "hidden";
	el.name = "formatoExportacion";
	el.id   = "formatoExportacion";
	el.value = exportType;
	form.appendChild(el);
	
	if(form.table_id != undefined){
		form.removeChild(form.table_id);
	}
	var el = document.createElement("input");
	el.type = "hidden";
	el.name = "table_id";
	el.id   = "table_id";
	el.value = id;
	form.appendChild(el);
	
	
	//form.submit();
	jQuery("#exportarButton").click();
//	setTimeout("location.reload(true);",500);
	
}

function ticket() {
	PdfExportAJAXFacade.hayDatosTicket({
		callback:function(data) {
			if (data) {
				location.href = ctx + '/export/pdfExport.htm?ticket=true';
			}
		}
	});
}

//jQuery.jmesa.setPageToLimitDefault=jQuery.jmesa.setPageToLimit;
//jQuery.jmesa.setPageToLimit=setPageToLimit;
(function($){var tableFacades=new Object();var getFormByTableId=function(id){var node=document.getElementById(id);var found=false;while(!found){if(node.nodeName=="FORM"){found=true;return node}node=node.parentNode}return null};var coreapi={addTableFacade:function(id){var tableFacade=new classes.TableFacade(id);tableFacades[tableFacade.limit.id]=tableFacade},getTableFacade:function(id){return tableFacades[id]},setSaveToWorksheet:function(id){this.getTableFacade(id).worksheet.save="true"},setFilterToWorksheet:function(id){this.getTableFacade(id).worksheet.filter="true";this.setPageToLimit(id,"1")},removeFilterFromWorksheet:function(id){this.getTableFacade(id).worksheet.filter=null;this.setPageToLimit(id,"1")},setPageToLimit:function(id,page){this.getTableFacade(id).limit.setPage(page)},setMaxRowsToLimit:function(id,maxRows){this.getTableFacade(id).limit.setMaxRows(maxRows);this.setPageToLimit(id,"1")},addSortToLimit:function(id,position,property,order){this.removeAllSortsFromLimit(id,property);this.setPageToLimit(id,"1");var limit=this.getTableFacade(id).limit;var sort=new classes.Sort(position,property,order);limit.addSort(sort)},removeSortFromLimit:function(id,property){var limit=this.getTableFacade(id).limit;var sortSet=limit.getSortSet();$.each(sortSet,function(index,sort){if(sort.property==property){sortSet.splice(index,1);return false}})},removeAllSortsFromLimit:function(id){var limit=this.getTableFacade(id).limit;limit.setSortSet(new Array());this.setPageToLimit(id,"1")},getSortFromLimit:function(id,property){var limit=this.getTableFacade(id).limit;var sortSet=limit.getSortSet();$.each(sortSet,function(index,sort){if(sort.property==property){return sort}})},addFilterToLimit:function(id,property,value){this.removeFilterFromLimit(id,property);this.setPageToLimit(id,"1");var limit=this.getTableFacade(id).limit;var filter=new classes.Filter(property,value);limit.addFilter(filter)},removeFilterFromLimit:function(id,property){var limit=this.getTableFacade(id).limit;var filterSet=limit.getFilterSet();$.each(filterSet,function(index,filter){if(filter.property==property){filterSet.splice(index,1);return false}})},removeAllFiltersFromLimit:function(id){var tableFacade=this.getTableFacade(id);var limit=tableFacade.limit;limit.setFilterSet(new Array());this.setPageToLimit(id,"1");var worksheet=tableFacade.worksheet;worksheet.filter=null},getFilterFromLimit:function(id,property){var limit=this.getTableFacade(id).limit;var filterSet=limit.getFilterSet();$.each(filterSet,function(index,filter){if(filter.property==property){return filter}})},setExportToLimit:function(id,exportType){this.getTableFacade(id).limit.setExport(exportType)},createHiddenInputFieldsForLimit:function(id){var tableFacade=this.getTableFacade(id);var form=getFormByTableId(id);tableFacade.createHiddenInputFields(form)},createHiddenInputFieldsForLimitAndSubmit:function(id){var tableFacade=this.getTableFacade(id);var form=getFormByTableId(id);var created=tableFacade.createHiddenInputFields(form);if(created){form.submit()}},createParameterStringForLimit:function(id){var tableFacade=this.getTableFacade(id);return tableFacade.createParameterString()},setOnInvokeAction:function(id,functionName){var tableFacade=this.getTableFacade(id);tableFacade.onInvokeAction=functionName},setOnInvokeExportAction:function(id,functionName){var tableFacade=this.getTableFacade(id);tableFacade.onInvokeExportAction=functionName},onInvokeAction:function(id,action){var tableFacade=this.getTableFacade(id);var f=window[tableFacade.onInvokeAction];if($.isFunction(f)!==true){throw tableFacade.onInvokeAction+" is not a global function!"}else{f(id,action)}},onInvokeExportAction:function(id){var tableFacade=this.getTableFacade(id);var f=window[tableFacade.onInvokeExportAction];if($.isFunction(f)!==true){throw tableFacade.onInvokeExportAction+" is not a global function!"}else{f(id)}}};var classes={TableFacade:function(id){this.limit=new classes.Limit(id);this.worksheet=new classes.Worksheet();this.onInvokeAction="onInvokeAction";this.onInvokeExportAction="onInvokeExportAction"},Worksheet:function(){this.save=null;this.filter=null},Limit:function(id){this.id=id;this.page=null;this.maxRows=null;this.sortSet=[];this.filterSet=[];this.exportType=null},Sort:function(position,property,order){this.position=position;this.property=property;this.order=order},Filter:function(property,value){this.property=property;this.value=value},DynFilter:function(filter,id,property){this.filter=filter;this.id=id;this.property=property},WsColumn:function(column,id,uniqueProperties,property){this.column=column;this.id=id;this.uniqueProperties=uniqueProperties;this.property=property}};$.extend(classes.Limit.prototype,{getId:function(){return this.id},setId:function(id){this.id=id},getPage:function(){return this.page},setPage:function(page){this.page=page},getMaxRows:function(){return this.maxRows},setMaxRows:function(maxRows){this.maxRows=maxRows},getSortSet:function(){return this.sortSet},addSort:function(sort){this.sortSet[this.sortSet.length]=sort},setSortSet:function(sortSet){this.sortSet=sortSet},getFilterSet:function(){return this.filterSet},addFilter:function(filter){this.filterSet[this.filterSet.length]=filter},setFilterSet:function(filterSet){this.filterSet=filterSet},getExport:function(){return this.exportType},setExport:function(exportType){this.exportType=exportType}});$.extend(classes.TableFacade.prototype,{createHiddenInputFields:function(form){var limit=this.limit;var exists=$(form).find(":hidden[name="+limit.id+"_p_]").val();if(exists){return false}if(this.worksheet.save){$(form).append('<input type="hidden" name="'+limit.id+'_sw_" value="true"/>')}if(this.worksheet.filter){$(form).append('<input type="hidden" name="'+limit.id+'_fw_" value="true"/>')}$(form).append('<input type="hidden" name="'+limit.id+'_tr_" value="true"/>');$(form).append('<input type="hidden" name="'+limit.id+'_p_" value="'+limit.page+'"/>');$(form).append('<input type="hidden" name="'+limit.id+'_mr_" value="'+limit.maxRows+'"/>');var sortSet=limit.getSortSet();$.each(sortSet,function(index,sort){$(form).append('<input type="hidden" name="'+limit.id+"_s_"+sort.position+"_"+sort.property+'" value="'+sort.order+'"/>')});var filterSet=limit.getFilterSet();$.each(filterSet,function(index,filter){$(form).append('<input type="hidden" name="'+limit.id+"_f_"+filter.property+'" value="'+filter.value+'"/>')});return true},createParameterString:function(){var limit=this.limit;var url="";url+=limit.id+"_p_="+limit.page;url+="&"+limit.id+"_mr_="+limit.maxRows;var sortSet=limit.getSortSet();$.each(sortSet,function(index,sort){url+="&"+limit.id+"_s_"+sort.position+"_"+sort.property+"="+sort.order});var filterSet=limit.getFilterSet();$.each(filterSet,function(index,filter){url+="&"+limit.id+"_f_"+filter.property+"="+encodeURIComponent(filter.value)});if(limit.exportType){url+="&"+limit.id+"_e_="+limit.exportType}url+="&"+limit.id+"_tr_=true";if(this.worksheet.save){url+="&"+limit.id+"_sw_=true"}if(this.worksheet.filter){url+="&"+limit.id+"_fw_=true"}return url}});var dynFilter=null;var filterapi={createDynFilter:function(filter,id,property){if(dynFilter){return}dynFilter=new classes.DynFilter(filter,id,property);var cell=$(filter);var width=cell.width();var originalValue=cell.text();/*cell.width(width);*/cell.parent().width(width);cell.css("overflow","visible");cell.html('<div id="dynFilterDiv"><input id="dynFilterInput" name="filter" style="width:'+(width+2)+'px" value="" /></div>');var input=$("#dynFilterInput");input.val(originalValue);input.focus();$(input).keypress(function(event){if(event.keyCode==13){var changedValue=input.val();cell.text("");cell.css("overflow","hidden");cell.text(changedValue);$.jmesa.addFilterToLimit(dynFilter.id,dynFilter.property,changedValue);$.jmesa.onInvokeAction(dynFilter.id,"filter");dynFilter=null}});$(input).blur(function(){var changedValue=input.val();cell.text("");cell.css("overflow","hidden");cell.text(changedValue);$.jmesa.addFilterToLimit(dynFilter.id,dynFilter.property,changedValue);dynFilter=null})},createDroplistDynFilter:function(filter,id,property,options){if(dynFilter){return}dynFilter=new classes.DynFilter(filter,id,property);if($("#dynFilterDroplistDiv").size()>0){return}var cell=$(filter);var originalValue=cell.text();var width=cell.width();var size=1;$.each(options,function(){size++;if(size>10){size=10;return false}});cell.width(width);cell.parent().width(width);cell.html('<div id="dynFilterDroplistDiv" style="top:17px">');var html='<select id="dynFilterDroplist" name="filter" size="'+size+'">';html+='<option value=""> </option>';$.each(options,function(key,value){if(key==originalValue){html+='<option selected="selected" value="'+key+'">'+value+"</option>"}else{html+='<option value="'+key+'">'+value+"</option>"}});html+="</select>";var div=$("#dynFilterDroplistDiv");div.html(html);var input=$("#dynFilterDroplist");var selectWidth=input.width();if(selectWidth<width){input.width(width+5)}input.focus();var originalBackgroundColor=cell.css("backgroundColor");cell.css({backgroundColor:div.css("backgroundColor")});$(input).change(function(){var changedValue=$("#dynFilterDroplistDiv option:selected").val();cell.text(changedValue);$.jmesa.addFilterToLimit(dynFilter.id,dynFilter.property,changedValue);$.jmesa.onInvokeAction(dynFilter.id,"filter");dynFilter=null});$(input).blur(function(){var changedValue=$("#dynFilterDroplistDiv option:selected").val();cell.text(changedValue);$("#dynFilterDroplistDiv").remove();cell.css({backgroundColor:originalBackgroundColor});dynFilter=null})}};var wsColumn=null;var worksheetapi={createWsColumn:function(column,id,uniqueProperties,property){if(wsColumn){return}wsColumn=new classes.WsColumn(column,id,uniqueProperties,property);var cell=$(column);var width=cell.width();var originalValue=cell.text();cell.width(width);cell.parent().width(width);cell.css("overflow","visible");cell.html('<div id="wsColumnDiv"><input id="wsColumnInput" name="column" style="width:'+(width+3)+'px" value=""/></div>');var input=$("#wsColumnInput");input.val(originalValue);input.focus();$("#wsColumnInput").keypress(function(event){if(event.keyCode==13){var changedValue=input.val();cell.text("");cell.css("overflow","hidden");cell.text(changedValue);if(changedValue!=originalValue){$.jmesa.submitWsColumn(originalValue,changedValue)}wsColumn=null}});$("#wsColumnInput").blur(function(){var changedValue=input.val();cell.text("");cell.css("overflow","hidden");cell.text(changedValue);if(changedValue!=originalValue){$.jmesa.submitWsColumn(originalValue,changedValue)}wsColumn=null})},submitWsCheckboxColumn:function(column,id,uniqueProperties,property){wsColumn=new classes.WsColumn(column,id,uniqueProperties,property);var checked=column.checked;var changedValue="unchecked";if(checked){changedValue="checked"}var originalValue="unchecked";if(!checked){originalValue="checked"}$.jmesa.submitWsColumn(originalValue,changedValue);wsColumn=null},submitWsColumn:function(originalValue,changedValue){var data='{ "id" : "'+wsColumn.id+'"';data+=', "cp_" : "'+wsColumn.property+'"';var props=wsColumn.uniqueProperties;$.each(props,function(key,value){data+=', "up_'+key+'" : "'+value+'"'});data+=', "ov_" : "'+encodeURIComponent(originalValue)+'"';data+=', "cv_" : "'+encodeURIComponent(changedValue)+'"';data+="}";$.post("jmesa.wrk?",eval("("+data+")"),function(data){})}};var effectsapi={addDropShadow:function(imagesPath,theme){if(!theme){theme="jmesa"}$("div."+theme+" .table").wrap("<div class='wrap0'><div class='wrap1'><div class='wrap2'><div class='dropShadow'></div></div></div></div>").css({background:"url("+imagesPath+"shadow_back.gif) 100% repeat"});$("."+theme+" div.wrap0").css({background:"url("+imagesPath+"shadow.gif) right bottom no-repeat","float":"left"});$("."+theme+" div.wrap1").css({background:"url("+imagesPath+"shadow180.gif) no-repeat"});$("."+theme+" div.wrap2").css({background:"url("+imagesPath+"corner_bl.gif) -18px 100% no-repeat"});$("."+theme+" div.dropShadow").css({background:"url("+imagesPath+"corner_tr.gif) 100% -18px no-repeat"});$("div."+theme).append('<div style="clear:both">&nbsp;</div>')}};$.extend(coreapi,filterapi);$.extend(coreapi,worksheetapi);$.extend(coreapi,effectsapi);$.jmesa={};$.extend($.jmesa,coreapi)})(jQuery);
/*********************
//* autores: jprozapas - Apolito
//* since: 1.5.0
*********************/

var $k = jQuery.noConflict();

/*
 * Las funcionaes  forceActiveStyleCategory & forceActiveStyleItem
 * se usan en posicionConsolidada.jsp para forzar al seteo de las propiedades y estilos
 * a causa de que al inicio no se realiza ningun evento que permita setear que categoria o item
 * fue seleccionado.
 */

function showSelectedMenu(){
	var selectedItem=null;
	var menuItemId=$k('#menuSelectedItem').val();
	var categoryId=null;
	//Verifica si es un sub-menuItem, si el padre tiene itemCode.
	;
	if(isSubmenuItem(menuItemId)){
		var itemCode=$k('#'+menuItemId).parent().attr("itemCode")
		categoryId=$k("#"+itemCode).attr("categoryCode");
		selectedItem=itemCode;
	}else{
		categoryId=$k('#'+menuItemId).attr("categoryCode");
		selectedItem=menuItemId;
	}
	forceActiveStyleItem(selectedItem)
	forceActiveStyleCategory(categoryId);
}

function isSubmenuItem(menuItemId){
	return $k('#'+menuItemId).parent().hasClass('menu-subItem');
}

/**
 * Agrega el estilo activo y carga el id de la categoria en session.
 * @param id
 */
function forceActiveStyleCategory(id){
		$k("#"+id).removeClass("inactivo activo");
		$k("#"+id).addClass("activo");
		$k('#'+id).removeClass('inactivo').addClass('activo');
//		$k(".contenedor-menu-item").hide();		
//		$k("#contenedor_items_"+id).show(); //Muestra el contenedor-menu-item que esta asociado a la categoria
//		setCategoriaSeleccionada(id);
}

/**
 * Agrega el estilo activo y carga el id del item en session.
 * @param id
 */
function forceActiveStyleItem(id){
	$k("#PARENT_"+id).removeClass("inactivo activo");
	$k("#PARENT_"+id).addClass("activo");
//	setItemSeleccionado(id);
}

/**
 * Guarda en session la categoria
 * @param categoriaSelecionada
 */
//function setCategoriaSeleccionada(categoriaSelecionada){
//	dwr.engine.beginBatch();
//		SeleccionMenuAjaxFacade.setCategoriaSeleccionada(categoriaSelecionada,{
//			callback:function(data) {                            
//	        }
//	    });
//	dwr.engine.endBatch();
//}

/**
 * Guarda en session el item 
 * @param itemSeleccionado
 */
//function setItemSeleccionado(itemSeleccionado,successCallback){
//	dwr.engine.beginBatch();
//		SeleccionMenuAjaxFacade.setItemSeleccionado(itemSeleccionado,{
//			callback:function(data) {
//            }
//        });
//	dwr.engine.endBatch();
//}


/**
 * Dado que todos los <a> links de cateogrias deben estar juntos, y de la forma en que se generaron los tags
 * esto no es posible. Para parchear la situacion se genera de la forma normal, luego se remueve la lista y se 
 * agrega como hijo del <code><div id="listaCategorias"></code> este <div/> se puede observar en menu.jsp
 */
function reordenarCategory(){
	var listaCategorias = $k('.menu-categoria');
	listaCategorias.clone(true).appendTo('#listaCategorias');
	listaCategorias.remove();
}

function agregarComportamientoMenu(){
//	reordenarCategory();
	/*Comportamiento elementos contenidos en contenedor-menu-categoria*/
	$k(".menu-categoria").click(function(){
		var id=$k(this).attr("id");
		$k(".menu-categoria").removeClass('inactivo activo');
		$k(".menu-categoria").addClass('inactivo');
		$k(this).removeClass("inactivo");
		$k(this).addClass('activo');
//		$k(".contenedor-menu-item").hide();
//		$k("#contenedor_items_"+id).show(); //Muestra el contenedor-menu-item que esta asociado a la categoria
	});
	

	
	/*Comportamiento elementos contenidos en contenedor-menu-item*/	
//	$k(".menu-item > a").click(function(){
//		var id=$k(this).attr("id");
//		var categoryCode=$k(this).attr("categoryCode");
//		setItemSeleccionado(id);
//		setCategoriaSeleccionada(categoryCode);
//	});
	
	
	/*Comportamiento elementos contenidos en contenedor-menu-subItem*/
//	$k(".menu-subItem").click(function(){
//		var itemCode=$k(this).attr("itemCode");
//		var categoryCode=$k("#"+itemCode).attr("categoryCode");
//		setItemSeleccionado(itemCode);
//		setCategoriaSeleccionada(categoryCode);
//	});
	
};

//function ajustarMargenMacroMenu(){
//	/*$k.map($k('.contenedor-menu-item-fondo'),function(elemento,index){
//		var jqueryElement=$k(elemento);
//		var parent=jqueryElement.parent();
//		var parentWidth=parent.width();
//		var width=1340;
//		var offsetLeft=jqueryElement.offset().left;
//		var margin=-(width - offsetLeft); 
//		console.log("indice:"+index);
//		console.log("width:"+width);
//		console.log("offset.left:"+offsetLeft);
//		console.log("margin:"+margin);
//		if(margin<0){
//			jqueryElement.css('margin-left',margin);
//		}
//	});*/
//	$k.map($k('.menu-categoria'),function(elemento,index){
//		var jqueryElement=$k(elemento);
//		var childrens=jqueryElement.find(".contenedor-menu-item");
//		var index=1;
//		var margin=jqueryElement.width();
//		/*console.log("id:"+jqueryElement.prop("id"));
//		console.log("margin-init:"+margin);
//		console.log("children-leng:"+childrens.length);
//		console.log("val:"+ (childrens.length===1));
//		console.log("index:"+index);*/
//		if(childrens.length>1){
//			while(index<childrens.length){
//				margin=margin-$k(childrens[index]).width();
////				console.log("children["+index+"]:"+$k(childrens[index]).width());
//				index++;
//			}
//		}
////		console.log("margin:"+margin);
//		$k(".contenedor-menu-item-fondo").css('margin-left',margin);
//	});
//}


function ajustarMargenMacroMenu(){
	var ventana_ancho = $k(window).width();
	var categorias=$k('.menu-categoria');
	var i=categorias.length-1;
	
	while(i>=0){
		var elemento=categorias[i];
		var jqueryElement=$k(elemento);
		var childrens=jqueryElement.find(".contenedor-menu-item");
		
		var index=0;
		var margin=jqueryElement.width()+34;
		$k(childrens[index]).parent().css('width',234 * childrens.length)
		if(childrens.length>=1){
			if(childrens.length==2){
				$k(childrens[index]).parent().css('margin-left',- 195);
			}
			if(childrens.length==3){
				$k(childrens[index]).parent().css('margin-left',- 300);
			}
			if(childrens.length==4){
				$k(childrens[index]).parent().css('margin-left',- 416);
			}		
		}
		if(i==categorias.length-1){
			if(childrens.length==1){
				var marginleft = -230 + margin
				$k(childrens[index]).parent().css('margin-left', marginleft);
				$k(childrens[index]).parent().css('right', 0);
			}
			if(childrens.length==2){
				var marginleft = -451 + margin
				$k(childrens[index]).parent().css('margin-left', marginleft);
			}
			if(childrens.length==3){
				var marginleft = -451 + margin
				$k(childrens[index]).parent().css('margin-left', marginleft);
			}
			if(childrens.length==4){
				var marginleft = -896 + margin
				$k(childrens[index]).parent().css('margin-left', marginleft);
			}
		}
//		hijo numero 2
		if(i==categorias.length-2){
			if(childrens.length==2){
				var marginleft = -451 + margin + 60
				$k(childrens[index]).parent().css('margin-left', marginleft);
				$k(childrens[index]).parent().css('right', -99);
			}
			if(childrens.length==3){
				var marginleft = -451 + margin + 60
				$k(childrens[index]).parent().css('margin-left', marginleft);
				$k(childrens[index]).parent().css('right', -99);
			}
			if(childrens.length==4){
				var marginleft = -896 + margin + 60
				$k(childrens[index]).parent().css('margin-left', marginleft);
				$k(childrens[index]).parent().css('right', -99);
			}
		}
//		hijo numero 3
		if(i==categorias.length-3){
			if(childrens.length==2){
				var marginleft = -451 + margin + 60
				$k(childrens[index]).parent().css('margin-left', marginleft);
			}
			if(childrens.length==3){
				var marginleft = -451 + margin + 60
				$k(childrens[index]).parent().css('margin-left', marginleft);
			}
			if(childrens.length==4){
				var marginleft = -896 + margin + 60 
				$k(childrens[index]).parent().css('margin-left', marginleft);
			}
		}
//		hijo numero 4
		if(i==categorias.length-4){
			if(childrens.length==4){
				//var marginleft = -676 + margin + 60
				$k(childrens[index]).parent().css('margin-left', 0);
				$k(childrens[index]).parent().css('left', -450);
			}
			if(childrens.length==3){
				$k(childrens[index]).parent().css('margin-left', 0);
				$k(childrens[index]).parent().css('left', -328);
			}
		}
//		hijo numero 5
		if(i==categorias.length-5){
			if(childrens.length==4){
				var marginleft = -576 + margin + 60 
				$k(childrens[index]).parent().css('margin-left', marginleft);
			}
		}
		//hijo transferir
		if(i==categorias.length-6){
			if(childrens.length==1){
				$k(childrens[index]).parent().css('margin-left', 0);
				$k(childrens[index]).parent().css('left', 0);
			}
			if(childrens.length==2){
				$k(childrens[index]).parent().css('margin-left', 0);
				$k(childrens[index]).parent().css('left', 0);
			}
			if(childrens.length==3){
				$k(childrens[index]).parent().css('margin-left', 0);
				$k(childrens[index]).parent().css('left', -84);
			}
		}
//		hijo numero 7
		if(i==categorias.length-7){
			if(childrens.length==4){
				var marginleft = -377 + margin  
				$k(childrens[index]).parent().css('margin-left', marginleft);
			}
		}
//		hijo numero 8
		if(i==categorias.length-8){
			if(childrens.length==4){
				var marginleft = -236 + margin
				$k(childrens[index]).parent().css('margin-left', marginleft);
			}
			if(childrens.length==3){
				var marginleft = -284 + margin 
				$k(childrens[index]).parent().css('margin-left', marginleft);
			}
		}
//		hijo numero 9
		if(i==categorias.length-9){
				$k(childrens[index]).parent().css('margin-left', -9);
		}
		i--;
	}
}

function showSelectedMenuLateral(){
	var selectedItem=null;
	var menuItemId=$k('#menuSelectedItem').val();
    selectedItem=menuItemId;
	forceActiveStyleItemLateral(selectedItem);
}

/**
 * Agrega el estilo activo y carga el id del item en session.
 * @param id
 */
function forceActiveStyleItemLateral(id){
	$k("#CODE_"+id).addClass('activo'); 
	$k("#MENU_"+id).addClass('activo');
}

!function(){"use strict";function e(e){function t(t,i){var l,h,k=t==window,y=i&&void 0!==i.message?i.message:void 0;if(i=e.extend({},e.blockUI.defaults,i||{}),!i.ignoreIfBlocked||!e(t).data("blockUI.isBlocked")){if(i.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,i.overlayCSS||{}),l=e.extend({},e.blockUI.defaults.css,i.css||{}),i.onOverlayClick&&(i.overlayCSS.cursor="pointer"),h=e.extend({},e.blockUI.defaults.themedCSS,i.themedCSS||{}),y=void 0===y?i.message:y,k&&p&&o(window,{fadeOut:0}),y&&"string"!=typeof y&&(y.parentNode||y.jquery)){var v=y.jquery?y[0]:y,g={};e(t).data("blockUI.history",g),g.el=v,g.parent=v.parentNode,g.display=v.style.display,g.position=v.style.position,g.parent&&g.parent.removeChild(v)}e(t).data("blockUI.onUnblock",i.onUnblock);var m,I,w,U,x=i.baseZ;m=e(r||i.forceIframe?'<iframe class="blockUI" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+i.iframeSrc+'"></iframe>':'<div class="blockUI" style="display:none"></div>'),I=e(i.theme?'<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+x++ +';display:none"></div>':'<div class="blockUI blockOverlay" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),i.theme&&k?(U='<div class="blockUI '+i.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:fixed">',i.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(i.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):i.theme?(U='<div class="blockUI '+i.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:absolute">',i.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(i.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):U=k?'<div class="blockUI '+i.blockMsgClass+' blockPage" style="z-index:'+(x+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+i.blockMsgClass+' blockElement" style="z-index:'+(x+10)+';display:none;position:absolute"></div>',w=e(U),y&&(i.theme?(w.css(h),w.addClass("ui-widget-content")):w.css(l)),i.theme||I.css(i.overlayCSS),I.css("position",k?"fixed":"absolute"),(r||i.forceIframe)&&m.css("opacity",0);var C=[m,I,w],S=e(k?"body":t);e.each(C,function(){this.appendTo(S)}),i.theme&&i.draggable&&e.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var O=f&&(!e.support.boxModel||e("object,embed",k?null:t).length>0);if(u||O){if(k&&i.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(u||!e.support.boxModel)&&!k)var E=d(t,"borderTopWidth"),T=d(t,"borderLeftWidth"),M=E?"(0 - "+E+")":0,B=T?"(0 - "+T+")":0;e.each(C,function(e,t){var o=t[0].style;if(o.position="absolute",2>e)k?o.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+i.quirksmodeOffsetHack+') + "px"'):o.setExpression("height",'this.parentNode.offsetHeight + "px"'),k?o.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):o.setExpression("width",'this.parentNode.offsetWidth + "px"'),B&&o.setExpression("left",B),M&&o.setExpression("top",M);else if(i.centerY)k&&o.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),o.marginTop=0;else if(!i.centerY&&k){var n=i.css&&i.css.top?parseInt(i.css.top,10):0,l="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+n+') + "px"';o.setExpression("top",l)}})}if(y&&(i.theme?w.find(".ui-widget-content").append(y):w.append(y),(y.jquery||y.nodeType)&&e(y).show()),(r||i.forceIframe)&&i.showOverlay&&m.show(),i.fadeIn){var j=i.onBlock?i.onBlock:c,H=i.showOverlay&&!y?j:c,z=y?j:c;i.showOverlay&&I._fadeIn(i.fadeIn,H),y&&w._fadeIn(i.fadeIn,z)}else i.showOverlay&&I.show(),y&&w.show(),i.onBlock&&i.onBlock();if(n(1,t,i),k?(p=w[0],b=e(":input:enabled:visible",p),i.focusInput&&setTimeout(s,20)):a(w[0],i.centerX,i.centerY),i.timeout){var W=setTimeout(function(){k?e.unblockUI(i):e(t).unblock(i)},i.timeout);e(t).data("blockUI.timeout",W)}}}function o(t,o){var l=t==window,s=e(t),a=s.data("blockUI.history"),d=s.data("blockUI.timeout");d&&(clearTimeout(d),s.removeData("blockUI.timeout")),o=e.extend({},e.blockUI.defaults,o||{}),n(0,t,o),null===o.onUnblock&&(o.onUnblock=s.data("blockUI.onUnblock"),s.removeData("blockUI.onUnblock"));var c;c=l?e("body").children().filter(".blockUI").add("body > .blockUI"):s.find(">.blockUI"),o.cursorReset&&(c.length>1&&(c[1].style.cursor=o.cursorReset),c.length>2&&(c[2].style.cursor=o.cursorReset)),l&&(p=b=null),o.fadeOut?(c.fadeOut(o.fadeOut),setTimeout(function(){i(c,a,o,t)},o.fadeOut)):i(c,a,o,t)}function i(t,o,i,n){var l=e(n);t.each(function(){this.parentNode&&this.parentNode.removeChild(this)}),o&&o.el&&(o.el.style.display=o.display,o.el.style.position=o.position,o.parent&&o.parent.appendChild(o.el),l.removeData("blockUI.history")),l.data("blockUI.static")&&l.css("position","static"),"function"==typeof i.onUnblock&&i.onUnblock(n,i);var s=e(document.body),a=s.width(),d=s[0].style.width;s.width(a-1).width(a),s[0].style.width=d}function n(t,o,i){var n=o==window,s=e(o);if((t||(!n||p)&&(n||s.data("blockUI.isBlocked")))&&(s.data("blockUI.isBlocked",t),i.bindEvents&&(!t||i.showOverlay))){var a="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).bind(a,i,l):e(document).unbind(a,l)}}function l(t){if(t.keyCode&&9==t.keyCode&&p&&t.data.constrainTabKey){var o=b,i=!t.shiftKey&&t.target===o[o.length-1],n=t.shiftKey&&t.target===o[0];if(i||n)return setTimeout(function(){s(n)},10),!1}var l=t.data,a=e(t.target);return a.hasClass("blockOverlay")&&l.onOverlayClick&&l.onOverlayClick(),a.parents("div."+l.blockMsgClass).length>0?!0:0===a.parents().children().filter("div.blockUI").length}function s(e){if(b){var t=b[e===!0?b.length-1:0];t&&t.focus()}}function a(e,t,o){var i=e.parentNode,n=e.style,l=(i.offsetWidth-e.offsetWidth)/2-d(i,"borderLeftWidth"),s=(i.offsetHeight-e.offsetHeight)/2-d(i,"borderTopWidth");t&&(n.left=l>0?l+"px":"0"),o&&(n.top=s>0?s+"px":"0")}function d(t,o){return parseInt(e.css(t,o),10)||0}e.fn._fadeIn=e.fn.fadeIn;var c=e.noop||function(){},r=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),f=(document.documentMode||0,e.isFunction(document.createElement("div").style.setExpression));e.blockUI=function(e){t(window,e)},e.unblockUI=function(e){o(window,e)},e.growlUI=function(t,o,i,n){var l=e('<div class="growlUI"></div>');t&&l.append("<h1>"+t+"</h1>"),o&&l.append("<h2>"+o+"</h2>"),void 0===i&&(i=3e3),e.blockUI({message:l,fadeIn:700,fadeOut:1e3,centerY:!1,timeout:i,showOverlay:!1,onUnblock:n,css:e.blockUI.defaults.growlCSS})},e.fn.block=function(o){var i=e.extend({},e.blockUI.defaults,o||{});return this.each(function(){var t=e(this);i.ignoreIfBlocked&&t.data("blockUI.isBlocked")||t.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,t(this,o)})},e.fn.unblock=function(e){return this.each(function(){o(this,e)})},e.blockUI.version=2.56,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"100%",top:"40%",left:"55%",paddingLeft:"40%",paddingTop:"20%",textAlign:"left",color:"#000",backgroundColor:"none",cursor:"default","float":"right"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"default"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var p=null,b=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();
// jQuery Mask Plugin v1.14.15
// github.com/igorescobar/jQuery-Mask-Plugin
var $jscomp={scope:{},findInternal:function(a,l,d){a instanceof String&&(a=String(a));for(var p=a.length,h=0;h<p;h++){var b=a[h];if(l.call(d,b,h,a))return{i:h,v:b}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,l,d){if(d.get||d.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[l]=d.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,l,d,p){if(l){d=$jscomp.global;a=a.split(".");for(p=0;p<a.length-1;p++){var h=a[p];h in d||(d[h]={});d=d[h]}a=a[a.length-1];p=d[a];l=l(p);l!=p&&null!=l&&$jscomp.defineProperty(d,a,{configurable:!0,writable:!0,value:l})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,d){return $jscomp.findInternal(this,a,d).v}},"es6-impl","es3");
(function(a,l,d){"function"===typeof define&&define.amd?define(["jquery"],a):"object"===typeof exports?module.exports=a(require("jquery")):a(l||d)})(function(a){var l=function(b,e,f){var c={invalid:[],getCaret:function(){try{var a,r=0,g=b.get(0),e=document.selection,f=g.selectionStart;if(e&&-1===navigator.appVersion.indexOf("MSIE 10"))a=e.createRange(),a.moveStart("character",-c.val().length),r=a.text.length;else if(f||"0"===f)r=f;return r}catch(C){}},setCaret:function(a){try{if(b.is(":focus")){var c,
g=b.get(0);g.setSelectionRange?g.setSelectionRange(a,a):(c=g.createTextRange(),c.collapse(!0),c.moveEnd("character",a),c.moveStart("character",a),c.select())}}catch(B){}},events:function(){b.on("keydown.mask",function(a){b.data("mask-keycode",a.keyCode||a.which);b.data("mask-previus-value",b.val());b.data("mask-previus-caret-pos",c.getCaret());c.maskDigitPosMapOld=c.maskDigitPosMap}).on(a.jMaskGlobals.useInput?"input.mask":"keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){b.keydown().keyup()},
100)}).on("change.mask",function(){b.data("changed",!0)}).on("blur.mask",function(){d===c.val()||b.data("changed")||b.trigger("change");b.data("changed",!1)}).on("blur.mask",function(){d=c.val()}).on("focus.mask",function(b){!0===f.selectOnFocus&&a(b.target).select()}).on("focusout.mask",function(){f.clearIfNotMatch&&!h.test(c.val())&&c.val("")})},getRegexMask:function(){for(var a=[],b,c,f,n,d=0;d<e.length;d++)(b=m.translation[e.charAt(d)])?(c=b.pattern.toString().replace(/.{1}$|^.{1}/g,""),f=b.optional,
(b=b.recursive)?(a.push(e.charAt(d)),n={digit:e.charAt(d),pattern:c}):a.push(f||b?c+"?":c)):a.push(e.charAt(d).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");n&&(a=a.replace(new RegExp("("+n.digit+"(.*"+n.digit+")?)"),"($1)?").replace(new RegExp(n.digit,"g"),n.pattern));return new RegExp(a)},destroyEvents:function(){b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(a){var c=b.is("input")?"val":"text";if(0<arguments.length){if(b[c]()!==a)b[c](a);
c=b}else c=b[c]();return c},calculateCaretPosition:function(){var a=b.data("mask-previus-value")||"",e=c.getMasked(),g=c.getCaret();if(a!==e){var f=b.data("mask-previus-caret-pos")||0,e=e.length,d=a.length,m=a=0,h=0,l=0,k;for(k=g;k<e&&c.maskDigitPosMap[k];k++)m++;for(k=g-1;0<=k&&c.maskDigitPosMap[k];k--)a++;for(k=g-1;0<=k;k--)c.maskDigitPosMap[k]&&h++;for(k=f-1;0<=k;k--)c.maskDigitPosMapOld[k]&&l++;g>d?g=10*e:f>=g&&f!==d?c.maskDigitPosMapOld[g]||(f=g,g=g-(l-h)-a,c.maskDigitPosMap[g]&&(g=f)):g>f&&
(g=g+(h-l)+m)}return g},behaviour:function(f){f=f||window.event;c.invalid=[];var e=b.data("mask-keycode");if(-1===a.inArray(e,m.byPassKeys)){var e=c.getMasked(),g=c.getCaret();setTimeout(function(){c.setCaret(c.calculateCaretPosition())},a.jMaskGlobals.keyStrokeCompensation);c.val(e);c.setCaret(g);return c.callbacks(f)}},getMasked:function(a,b){var g=[],d=void 0===b?c.val():b+"",n=0,h=e.length,q=0,l=d.length,k=1,r="push",p=-1,t=0,y=[],v,z;f.reverse?(r="unshift",k=-1,v=0,n=h-1,q=l-1,z=function(){return-1<
n&&-1<q}):(v=h-1,z=function(){return n<h&&q<l});for(var A;z();){var x=e.charAt(n),w=d.charAt(q),u=m.translation[x];if(u)w.match(u.pattern)?(g[r](w),u.recursive&&(-1===p?p=n:n===v&&n!==p&&(n=p-k),v===p&&(n-=k)),n+=k):w===A?(t--,A=void 0):u.optional?(n+=k,q-=k):u.fallback?(g[r](u.fallback),n+=k,q-=k):c.invalid.push({p:q,v:w,e:u.pattern}),q+=k;else{if(!a)g[r](x);w===x?(y.push(q),q+=k):(A=x,y.push(q+t),t++);n+=k}}d=e.charAt(v);h!==l+1||m.translation[d]||g.push(d);g=g.join("");c.mapMaskdigitPositions(g,
y,l);return g},mapMaskdigitPositions:function(a,b,e){a=f.reverse?a.length-e:0;c.maskDigitPosMap={};for(e=0;e<b.length;e++)c.maskDigitPosMap[b[e]+a]=1},callbacks:function(a){var h=c.val(),g=h!==d,m=[h,a,b,f],q=function(a,b,c){"function"===typeof f[a]&&b&&f[a].apply(this,c)};q("onChange",!0===g,m);q("onKeyPress",!0===g,m);q("onComplete",h.length===e.length,m);q("onInvalid",0<c.invalid.length,[h,a,b,c.invalid,f])}};b=a(b);var m=this,d=c.val(),h;e="function"===typeof e?e(c.val(),void 0,b,f):e;m.mask=
e;m.options=f;m.remove=function(){var a=c.getCaret();m.options.placeholder&&b.removeAttr("placeholder");b.data("mask-maxlength")&&b.removeAttr("maxlength");c.destroyEvents();c.val(m.getCleanVal());c.setCaret(a);return b};m.getCleanVal=function(){return c.getMasked(!0)};m.getMaskedVal=function(a){return c.getMasked(!1,a)};m.init=function(d){d=d||!1;f=f||{};m.clearIfNotMatch=a.jMaskGlobals.clearIfNotMatch;m.byPassKeys=a.jMaskGlobals.byPassKeys;m.translation=a.extend({},a.jMaskGlobals.translation,f.translation);
m=a.extend(!0,{},m,f);h=c.getRegexMask();if(d)c.events(),c.val(c.getMasked());else{f.placeholder&&b.attr("placeholder",f.placeholder);b.data("mask")&&b.attr("autocomplete","off");d=0;for(var l=!0;d<e.length;d++){var g=m.translation[e.charAt(d)];if(g&&g.recursive){l=!1;break}}l&&b.attr("maxlength",e.length).data("mask-maxlength",!0);c.destroyEvents();c.events();d=c.getCaret();c.val(c.getMasked());c.setCaret(d)}};m.init(!b.is("input"))};a.maskWatchers={};var d=function(){var b=a(this),e={},f=b.attr("data-mask");
b.attr("data-mask-reverse")&&(e.reverse=!0);b.attr("data-mask-clearifnotmatch")&&(e.clearIfNotMatch=!0);"true"===b.attr("data-mask-selectonfocus")&&(e.selectOnFocus=!0);if(p(b,f,e))return b.data("mask",new l(this,f,e))},p=function(b,e,f){f=f||{};var c=a(b).data("mask"),d=JSON.stringify;b=a(b).val()||a(b).text();try{return"function"===typeof e&&(e=e(b)),"object"!==typeof c||d(c.options)!==d(f)||c.mask!==e}catch(t){}},h=function(a){var b=document.createElement("div"),d;a="on"+a;d=a in b;d||(b.setAttribute(a,
"return;"),d="function"===typeof b[a]);return d};a.fn.mask=function(b,d){d=d||{};var e=this.selector,c=a.jMaskGlobals,h=c.watchInterval,c=d.watchInputs||c.watchInputs,t=function(){if(p(this,b,d))return a(this).data("mask",new l(this,b,d))};a(this).each(t);e&&""!==e&&c&&(clearInterval(a.maskWatchers[e]),a.maskWatchers[e]=setInterval(function(){a(document).find(e).each(t)},h));return this};a.fn.masked=function(a){return this.data("mask").getMaskedVal(a)};a.fn.unmask=function(){clearInterval(a.maskWatchers[this.selector]);
delete a.maskWatchers[this.selector];return this.each(function(){var b=a(this).data("mask");b&&b.remove().removeData("mask")})};a.fn.cleanVal=function(){return this.data("mask").getCleanVal()};a.applyDataMask=function(b){b=b||a.jMaskGlobals.maskElements;(b instanceof a?b:a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(d)};h={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,keyStrokeCompensation:10,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&
h("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};a.jMaskGlobals=a.jMaskGlobals||{};h=a.jMaskGlobals=a.extend(!0,{},h,a.jMaskGlobals);h.dataMask&&a.applyDataMask();setInterval(function(){a.jMaskGlobals.watchDataMask&&a.applyDataMask()},h.watchInterval)},window.jQuery,window.Zepto);

(function($) {
    $.fn.hasClassStartsWith = function(klass) {
    var _return = [];
    for(var i = 0; i < this.length; i++){
        if((' ' + $(this[i]).attr('class')).indexOf(klass) != -1)
            _return.push(this[i]);
    }
    return _return.length>0;
    }
})(jQuery);

function impedirPegarEnInputs(){
	$k("input[type='text']").each(function(index){
		if($k(this).attr('onpaste') == undefined){
			$k(this).attr('onpaste','return false;');
		}
	});
	
}

function agregarMaximoDefault(maxLength){
	$k("input[type='text']").each(function(index){
		if($k(this).attr('maxlength') == undefined){
			$k(this).attr('maxlength',maxLength);
		}
	});	
}

function inputsSinCaracteresEspeciales(){
	$k("input[type='text']").each(function(index){
		if(!$k(this).hasClassStartsWith("validate-")){
			$k(this).alphanum({
				allow:'_-()¡!¿?$\\/|=:,.#@*',
				allowOtherCharSets:true
			});
		}
	});	
}


/* LISTAS DUALES :: BEGIN */
function compareOptionValues(a, b) {
	var sA = parseInt(a.value, 36);
	var sB = parseInt(b.value, 36);
	return sA - sB;
}

function compareOptionText(a, b) {
	var sA = parseInt(a.text, 36);
	var sB = parseInt(b.text, 36);
	return sA - sB;
}

function moveDualList(srcList, destList, moveAll, srcHiddenList, destHiddenList) {
	if ((srcList.selectedIndex == -1) && (moveAll == false)) {
		return	;
	}
	newDestList = new Array(destList.options.length);
	var len = 0;
	for (len = 0; len < destList.options.length; len++) {
		if (destList.options[len] != null) {
			newDestList[len] = new Option(destList.options[len].text,
					destList.options[len].value,
					destList.options[len].defaultSelected,
					destList.options[len].selected);
		}
	}
	for ( var i = 0; i < srcList.options.length; i++) {
		if (srcList.options[i] != null
				&& (srcList.options[i].selected == true || moveAll)) {
			newDestList[len] = new Option(srcList.options[i].text,
					srcList.options[i].value,
					srcList.options[i].defaultSelected,
					srcList.options[i].selected);
			len++;
		}
	}
	newDestList.sort(compareOptionValues); // BY VALUES
	for ( var j = 0; j < newDestList.length; j++) {
		if (newDestList[j] != null) {
			destList.options[j] = newDestList[j];
		}
	}
	for ( var i = srcList.options.length - 1; i >= 0; i--) {
		if (srcList.options[i] != null
				&& (srcList.options[i].selected == true || moveAll)) {
			srcList.options[i] = null;
			//srcList.remove(i);
		}
	}
	ordenarSelect(destList);
	setearCamposOcultos(srcHiddenList,srcList.options.length);
	setearCamposOcultos(destHiddenList,destList.options.length);
}

function ordenarSelect(elSelect) {
	items=elSelect.options;
	opciones=new Array();
	for(var a=0;a<items.length;a++)
    //relleno y ordeno
    	opciones[a]=new Array( items[a].text, items[a].value);
    opciones.sort();    // ordeno
    for(var a=0;a<items.length;a++) { //sobreescribo
        items[a].text=opciones[a][0];
        items[a].value=opciones[a][1];
   	}
}

function setearCamposOcultos(nombreDelCampo, valor){
	nombreDelCampo.value=valor;
}

/* LISTAS DUALES :: END */

/* VALIDACIONES :: BEGIN */

function isNumberKeyOrCharKey(evt) {
 return (isNumberKey(evt) || esLetra(evt));
}

function esAlfanumerico(evt) {
	return (isNumberKey(evt) || esLetra(evt));
}

/* acepta n�meros, letras y guiones */
function esNumeroIdentificacion(evt) {
 return (isNumberKey(evt) || esLetra(evt) || isDash(evt));
}

/* n�meros y punto decimal */
function esImporte(evt) {
 return (isNumberKey(evt) || isDecimalPoint(evt));
}

function isNumberKey(evt) {
	var charCode = getCharCode(evt);
	if (charCode > 31 && (charCode < 48 || charCode > 57)){
		return false;
	}
	return true;
}

function getCharCode(evt){
	if(window.event) { // Internet Explorer
	  return evt.keyCode;
	}
	else { // navegadores DOM
	  return evt.charCode;
	}
}

function isDash(evt){
	var charCode = getCharCode(evt);
	if (charCode != 45){
		return false;
	}
	return true;
}

function isDecimalPoint(evt){
	var charCode = getCharCode(evt);
	//if (charCode != 46){
	//Usamos coma como separador decimal
	  if (charCode != 44){
	  return false;
	}
	return true;
}

function isNumberKeyOrDash(evt) {
	return isNumberKey(evt) || isDash(evt);
}


function esNumeroTel(evt) {
	/*var charCode = getCharCode(evt);
    if (charCode > 31 && (charCode < 48 || charCode > 57) || charCode != 45 )
       return false;

    return true;*/

	return isNumberKeyOrDash(evt);
}

function esLetra(evt) {
	var charCode = getCharCode(evt);
	if (charCode > 32 && ((charCode < 65 || charCode > 90 ) && (charCode < 97 || charCode > 122 ))  && charCode != 225 && charCode != 233 && charCode != 237 &&
		charCode != 243 && charCode != 250 && charCode != 209 && charCode != 241)
       return false;

    return true;
}



function esNumero(evt) {
	var charCode = getCharCode(evt);
    if (charCode > 31 && (charCode < 48 || charCode > 57))
       return false;

    return true;
}

/* VALIDACIONES :: END */

function isIE(){
	if (navigator.appName.indexOf("Microsoft") != -1) {
		return true;
	}
	else {
		return false;
	}
}

function useLoadingMessage(message) {
	var loadingMessage;
	if (message) loadingMessage = message;
	else loadingMessage = "Cargando";

	dwr.engine.setPreHook(function() {
		showLoadingMessage(message);
	});
	dwr.engine.setPostHook(function() {
		hideLoadingMessage(message);
	});
}

function showLoadingMessage(message) {
	try{
		jQuery.blockUI({ message:  jQuery('#modalProcesando') });
	} catch(e) {
	 //no hacer nada
	}
}

function hideLoadingMessage(message) {

	try{
		jQuery.unblockUI();
	} catch(e) {
	 //no hacer nada
	}
}



//-------------------------------------------------------------//
//Funcion que obtiene la tecla presionada Crossbrowser
function getKey(e){
	if(isIE()){
		key = window.event.keyCode;     //IE
	}
	else{
		key = e.which;     //firefox
	}
	return key;
}

//------------------------------------------------------------//
//Submitea con la tecla enter
//idBoton es el Id del submit que clickeara por defecto
function enterKey(event, idBoton) {
	key = getKey(event);
	if (key == 13){
		document.getElementById(idBoton).click();
		return false;
	}
}

//------------------------------------------------------------//
//----Funciones de bloqueo de UI (mensaje de "cargando")------//

//-------inicializacion de estilos----------//
jQuery.blockUI.defaults.css.border = 'none';
jQuery.blockUI.defaults.css.left = '0%';
jQuery.blockUI.defaults.css.top = '5%';

//$.blockUI.defaults.css.position = 'absolute';

function bloquearUIClick(param1){
	$k(param1).click(function() {
		$k.blockUI({ message:  jQuery('#modalProcesando') });
		$k(document).ready(function() {
			$k.unblockUI;
	    });
	})
}


function desbloquearUI(param1)	{

	jQuery(param1).ready(function() {
		jQuery.unblockUI();
		jQuery('#modalPopup').hide();
	});
}

function desbloquearUIclick(param1)	{

	jQuery(param1).click(function() {
		jQuery.unblockUI();
		jQuery('#modalPopup').hide();
	});
}

function bloquearUISubmit(param2){
	jQuery(param2).submit(function() {
		jQuery.blockUI({ message:  jQuery('#modalProcesando') });
		jQuery(document).ready(function() {
			jQuery.unblockUI;
	    });
	})
}

function popUp(URL) {
	window.open(URL);
}


//Esto se agrega para que desde un dispostivio como no se posee hover, se agrega el comportamiento de click.
//y cuando se hace una perdida de foco ese esconde el menu del sessionBox.
$k('#sesionBox').click(function(){ 
	$(this).css('display','block');
});

$k("input[type='password']").attr('autocomplete', 'off');


function keepalive(){
	setTimeout("callIwantToLive()", (1000*60)*4);
}

function callIwantToLive() {
	$k.ajax({url:ctx+'/iwanttolive.htm'});
}



function validarPaginadoEnMemoriaJmesa(url,executionId){
	 var idTruncado=executionId.split("s")[0];
	 var currentPage=sessionStorage['currentPage'];
	 var currentTableId=sessionStorage['currentTableId']
	 var mismaPagina=sessionStorage['page']===(url+'/'+idTruncado);
	 var mismoIdentificadorTabla = currentTableId === jQuery.jmesa.currentTableId ;
	 var distintaPagina=jQuery.jmesa.currentPage!==currentPage;
//	 if(mismaPagina) return;
	 if (mismoIdentificadorTabla && isNotEmpty(currentTableId) && isNotEmpty(currentPage)) {
		 sessionStorage.removeItem('currentPage');
		 if(distintaPagina){
			 jQuery.jmesa.setPageToLimit(currentTableId,currentPage);
			 jQuery.jmesa.onInvokeAction(currentTableId,'page_number');
		 }
	  }
}

function validarPaginadoEnMemoriaJmesa2(url,executionId, idx){
	var idTruncado=executionId.split("s")[0];
	var currentPage=sessionStorage['currentPage'];
	var currentTableId=sessionStorage['currentTableId']
	var mismaPagina=sessionStorage['page']===(url+'/'+idTruncado);
	var mismoIdentificadorTabla = currentTableId === jQuery.jmesa.currentTableId ;
	var distintaPagina=jQuery.jmesa.currentPage!==currentPage;
	if (mismoIdentificadorTabla && isNotEmpty(currentTableId) && isNotEmpty(currentPage) && idx == 'S') {
		sessionStorage.removeItem('currentPage');
		if(distintaPagina){
			jQuery.jmesa.setPageToLimit(currentTableId,currentPage);
			jQuery.jmesa.onInvokeAction(currentTableId,'page_number');
		}
	}
}

function guardarEstadoJmesa(url,executionId){
	var idTruncado=executionId.split("s")[0];
	sessionStorage['page'] = url+'/'+idTruncado;
	sessionStorage['currentTableId']=jQuery.jmesa.currentTableId;
	sessionStorage['currentPage']=jQuery.jmesa.currentPage;	
}

function guardarEstadoJmesaConParametros(url,executionId,idTabla,numPag){
	var idTruncado=executionId.split("s")[0];
	sessionStorage['page'] = url+'/'+idTruncado;
	sessionStorage['currentTableId']=idTabla;
	sessionStorage['currentPage']=numPag;	
}

function validarPaginadoEnMemoriaJmesaConParametros(url,executionId , idTabla){
	 var idTruncado=executionId.split("s")[0];
	 var currentPage=sessionStorage['currentPage'];
	 var currentTableId=sessionStorage['currentTableId']
	 var mismaPagina=sessionStorage['page']===(url+'/'+idTruncado);
	 var mismoIdentificadorTabla = currentTableId === idTabla ;
//	 if(mismaPagina) return;

	 if (mismoIdentificadorTabla && isNotEmpty(currentTableId) && isNotEmpty(currentPage)) {
		 sessionStorage.removeItem('currentPage');
		 jQuery.jmesa.setPageToLimit(currentTableId,currentPage);
		 jQuery.jmesa.onInvokeAction(currentTableId,'page_number');
	  }
}

function isNotEmpty(dato){
	return dato!==null && dato!==undefined;
	
	
}

/**
 * Método que dispara un click sobre el botón con name "nombreBoton" incluido en el form "form"
 * si el evento "evento" corresponde a un evento onKeyPress y se presionó la tecla "enter".
 * Este método se utiliza en los forms para interceptar el submit del form cuando se presiona enter y poder
 * especificar que se haga click en un botón específico.
 * @param form El form.
 * @param evento El evento correspondiente al presionado de una tecla.
 * @param nombreBoton El nombre del botón a clickear. Si es null, devuelve false, por lo que no se continúa
 * con el submit del form.
 * @returns {Boolean} Si se debe hacer el submit o no.
 */
function clickearBotonOnEnter(form, evento, nombreBoton) {
    var keycode = getKeyCode(evento);
    if (!keycode)
        return true;

    // Si se presionó enter...
    if (keycode == 13) {
        if (nombreBoton) {
            // Si me pasaron un botón, lo obtengo del form.
            var boton = $j(form).find('input[type=submit][name='+nombreBoton+']');
            // Si el botón está habilitado, lo clickeo.
            if (!boton.is(':disabled'))
                boton.click();
        }
        return false;
    } else {
        return true;
    }
}

/**
 * 
 * La funcion recibe el nombre de la transicion y el evento del input hidden. 
 * Se setean los valores y ademas se debe declarar un button type submit 
 * para submitear el formulario. ej: ingresarNuevaCuenta.jsp
 * @param transicion
 * @param hiddenEvento
 */
function changeSelectGlobal(transicion,hiddenEvento){
	jQuery.blockUI({ message:  jQuery('#modalProcesando') });
	document.getElementById(hiddenEvento).name='_eventId_'+transicion;
	jQuery("#buttonSubmitForm").click();
}

function agregarGuionEnDetalleConContenidoVacio(){
	//Agrega un guion en caso de estar vacio el detalle
	$k.each($k('.contenedor-detalle .value'), function(index, element){
		if($k(element).children().length==0 && ($k(element).text()==undefined || $k(element).text().trim()=='') ){
 			$k(element).append("-");
 		}
	})
}

function encerrarScroll(url,executionId,realizarScroll){
    var idTruncado=executionId.split("s")[0];
    var setScroll=function(){
        sessionStorage['page'] = url+'/'+idTruncado;
        sessionStorage['scrollTop'] = $k(document).scrollTop();
    }
    
    $k(document).submit(setScroll);
    $k(document).ready(function(){
        if (sessionStorage['page']==url+'/'+idTruncado) {
            if(realizarScroll){
                $k(document).scrollTop(sessionStorage['scrollTop']);
            }
        }
    });
}

function setValorSeleccionAndSubmit(idProducto,evento){
	document.getElementById("itemHidden").name='idProducto';
	jQuery("#itemHidden").val(idProducto);
	document.getElementById("evento").name='_eventId_'+evento;
	jQuery("#buttonSubmitForm").click();
	
}
function aplicarMascara(element,mascara){
	if(mascara != ""){
		$k(element).mask(mascara);
	}
}


!function(e){"use strict";function t(e){var t={};if(void 0===e.selectionStart){e.focus();var a=document.selection.createRange();t.length=a.text.length,a.moveStart("character",-e.value.length),t.end=a.text.length,t.start=t.end-t.length}else t.start=e.selectionStart,t.end=e.selectionEnd,t.length=t.end-t.start;return t}function a(e,t,a){if(void 0===e.selectionStart){e.focus();var n=e.createTextRange();n.collapse(!0),n.moveEnd("character",a),n.moveStart("character",t),n.select()}else e.selectionStart=t,e.selectionEnd=a}function n(t,a){e.each(a,function(e,n){"function"==typeof n?a[e]=n(t,a,e):"function"==typeof t.autoNumeric[n]&&(a[e]=t.autoNumeric[n](t,a,e))})}function i(e,t){"string"==typeof e[t]&&(e[t]*=1)}function r(e,t){n(e,t),t.oEvent=null,t.tagList=["DD","DT","H1","H2","H3","H4","H5","H6","LABEL","P","SPAN","TD","TH"];var a=t.vMax.toString().split("."),r=t.vMin||0===t.vMin?t.vMin.toString().split("."):[];if(i(t,"vMax"),i(t,"vMin"),i(t,"mDec"),t.allowLeading=!0,t.aNeg=t.vMin<0?"-":"",a[0]=a[0].replace("-",""),r[0]=r[0].replace("-",""),t.mInt=Math.max(a[0].length,r[0].length,1),null===t.mDec){var o=0,s=0;a[1]&&(o=a[1].length),r[1]&&(s=r[1].length),t.mDec=Math.max(o,s)}null===t.altDec&&t.mDec>0&&("."===t.aDec&&","!==t.aSep?t.altDec=",":","===t.aDec&&"."!==t.aSep&&(t.altDec="."));var u=t.aNeg?"([-\\"+t.aNeg+"]?)":"(-?)";t.aNegRegAutoStrip=u,t.skipFirstAutoStrip=new RegExp(u+"[^-"+(t.aNeg?"\\"+t.aNeg:"")+"\\"+t.aDec+"\\d].*?(\\d|\\"+t.aDec+"\\d)"),t.skipLastAutoStrip=new RegExp("(\\d\\"+t.aDec+"?)[^\\"+t.aDec+"\\d]\\D*$");var c="-"+t.aNum+"\\"+t.aDec;return t.allowedAutoStrip=new RegExp("[^"+c+"]","gi"),t.numRegAutoStrip=new RegExp(u+"(?:\\"+t.aDec+"?(\\d+\\"+t.aDec+"\\d+)|(\\d*(?:\\"+t.aDec+"\\d*)?))"),t}function o(e,t,a){if(t.aSign)for(;e.indexOf(t.aSign)>-1;)e=e.replace(t.aSign,"");e=e.replace(t.skipFirstAutoStrip,"$1$2"),e=e.replace(t.skipLastAutoStrip,"$1"),e=e.replace(t.allowedAutoStrip,""),t.altDec&&(e=e.replace(t.altDec,t.aDec));var n=e.match(t.numRegAutoStrip);if(e=n?[n[1],n[2],n[3]].join(""):"",("allow"===t.lZero||"keep"===t.lZero)&&"strip"!==a){var i=[],r="";i=e.split(t.aDec),-1!==i[0].indexOf("-")&&(r="-",i[0]=i[0].replace("-","")),i[0].length>t.mInt&&"0"===i[0].charAt(0)&&(i[0]=i[0].slice(1)),e=r+i.join(t.aDec)}if(a&&"deny"===t.lZero||a&&"allow"===t.lZero&&t.allowLeading===!1){var o="^"+t.aNegRegAutoStrip+"0*(\\d"+("leading"===a?")":"|$)");o=new RegExp(o),e=e.replace(o,"$1$2")}return e}function s(e,t,a){return t=t.split(","),"set"===a||"focusout"===a?(e=e.replace("-",""),e=t[0]+e+t[1]):"get"!==a&&"focusin"!==a&&"pageLoad"!==a||e.charAt(0)!==t[0]||(e=e.replace(t[0],"-"),e=e.replace(t[1],"")),e}function u(e,t,a){if(t&&a){var n=e.split(t);n[1]&&n[1].length>a&&(a>0?(n[1]=n[1].substring(0,a),e=n.join(t)):e=n[0])}return e}function c(e,t,a){return t&&"."!==t&&(e=e.replace(t,".")),a&&"-"!==a&&(e=e.replace(a,"-")),e.match(/\d/)||(e+="0"),e}function l(e){var t=e.indexOf(".");if(-1!==t)if(1===t&&"0"===e.charAt(0))e=+e,1e-6>e&&e>0&&(e=(e+1).toString(),e=e.substring(1)),0>e&&e>-1&&(e=(e-1).toString(),e="-"+e.substring(2)),e=e.toString();else{var a=e.split(".");void 0!==a[1]&&(0===+a[1]?e=a[0]:(a[1]=a[1].replace(/0*$/,""),e=a.join(".")))}return e.replace(/^0*(\d)/,"$1")}function h(e,t,a){return a&&"-"!==a&&(e=e.replace("-",a)),t&&"."!==t&&(e=e.replace(".",t)),e}function p(t,a){t=o(t,a),t=u(t,a.aDec,a.mDec),t=c(t,a.aDec,a.aNeg);var n=+t;return"set"===a.oEvent&&(n<a.vMin||n>a.vMax)&&e.error("The value ("+n+") from the 'set' method falls outside of the vMin / vMax range"),n>=a.vMin&&n<=a.vMax}function g(e,t,a){return""===e||e===t.aNeg?"zero"===t.wEmpty?e+"0":"sign"===t.wEmpty||a?e+t.aSign:e:null}function d(e,t){e=o(e,t);var a=e,n=g(e,t,!0);if(null!==n)return n;var i="";i=2===t.dGroup?/(\d)((\d)(\d{2}?)+)$/:4===t.dGroup?/(\d)((\d{4}?)+)$/:/(\d)((\d{3}?)+)$/;var r=e.split(t.aDec);t.altDec&&1===r.length&&(r=e.split(t.altDec));var u=r[0];if(t.aSep)for(;i.test(u);)u=u.replace(i,"$1"+t.aSep+"$2");if(0!==t.mDec&&r.length>1?(r[1].length>t.mDec&&(r[1]=r[1].substring(0,t.mDec)),e=u+t.aDec+r[1]):e=u,t.aSign){var c=-1!==e.indexOf(t.aNeg);e=e.replace(t.aNeg,""),e="p"===t.pSign?t.aSign+e:e+t.aSign,c&&(e=t.aNeg+e)}return"set"===t.oEvent&&0>a&&null!==t.nBracket&&(e=s(e,t.nBracket,t.oEvent)),e}function f(e,t){e=""===e?"0":e.toString(),i(t,"mDec");var a="",n=0,r="",o="boolean"==typeof t.aPad||null===t.aPad?t.aPad?t.mDec:0:+t.aPad,s=function(e){var t=0===o?/(\.[1-9]*)0*$/:1===o?/(\.\d[1-9]*)0*$/:new RegExp("(\\.\\d{"+o+"}[1-9]*)0*$");return e=e.replace(t,"$1"),0===o&&(e=e.replace(/\.$/,"")),e};"-"===e.charAt(0)&&(r="-",e=e.replace("-","")),e.match(/^\d/)||(e="0"+e),"-"===r&&0===+e&&(r=""),(+e>0&&"keep"!==t.lZero||e.length>0&&"allow"===t.lZero)&&(e=e.replace(/^0*(\d)/,"$1"));var u=e.lastIndexOf("."),c=-1===u?e.length-1:u,l=e.length-1-c;if(l<=t.mDec){if(a=e,o>l)for(-1===u&&(a+=".");o>l;){var h="000000".substring(0,o-l);a+=h,l+=h.length}else l>o?a=s(a):0===l&&0===o&&(a=a.replace(/\.$/,""));return r+a}var p=u+t.mDec,g=+e.charAt(p+1),d=e.substring(0,p+1).split(""),f="."===e.charAt(p)?e.charAt(p-1)%2:e.charAt(p)%2;if(g>4&&"S"===t.mRound||g>4&&"A"===t.mRound&&""===r||g>5&&"A"===t.mRound&&"-"===r||g>5&&"s"===t.mRound||g>5&&"a"===t.mRound&&""===r||g>4&&"a"===t.mRound&&"-"===r||g>5&&"B"===t.mRound||5===g&&"B"===t.mRound&&1===f||g>0&&"C"===t.mRound&&""===r||g>0&&"F"===t.mRound&&"-"===r||g>0&&"U"===t.mRound)for(n=d.length-1;n>=0;n-=1)if("."!==d[n]){if(d[n]=+d[n]+1,d[n]<10)break;n>0&&(d[n]="0")}return d=d.slice(0,p+1),a=s(d.join("")),r+a}function v(t,a){this.settings=a,this.that=t,this.$that=e(t),this.formatted=!1,this.settingsClone=r(this.$that,this.settings),this.value=t.value}function m(t){return"string"==typeof t&&(t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),t="#"+t.replace(/(:|\.)/g,"\\$1")),e(t)}function y(e,t,a){var n=e.data("autoNumeric");n||(n={},e.data("autoNumeric",n));var i=n.holder;return(void 0===i&&t||a)&&(i=new v(e.get(0),t),n.holder=i),i}v.prototype={init:function(e){this.value=this.that.value,this.settingsClone=r(this.$that,this.settings),this.ctrlKey=e.ctrlKey,this.cmdKey=e.metaKey,this.shiftKey=e.shiftKey,this.selection=t(this.that),("keydown"===e.type||"keyup"===e.type)&&(this.kdCode=e.keyCode),this.which=e.which,this.processed=!1,this.formatted=!1},setSelection:function(e,t,n){e=Math.max(e,0),t=Math.min(t,this.that.value.length),this.selection={start:e,end:t,length:t-e},(void 0===n||n)&&a(this.that,e,t)},setPosition:function(e,t){this.setSelection(e,e,t)},getBeforeAfter:function(){var e=this.value,t=e.substring(0,this.selection.start),a=e.substring(this.selection.end,e.length);return[t,a]},getBeforeAfterStriped:function(){var e=this.getBeforeAfter();return e[0]=o(e[0],this.settingsClone),e[1]=o(e[1],this.settingsClone),e},normalizeParts:function(e,t){var a=this.settingsClone;t=o(t,a);var n=t.match(/^\d/)?!0:"leading";e=o(e,a,n),""!==e&&e!==a.aNeg||"deny"!==a.lZero||t>""&&(t=t.replace(/^0*(\d)/,"$1"));var i=e+t;if(a.aDec){var r=i.match(new RegExp("^"+a.aNegRegAutoStrip+"\\"+a.aDec));r&&(e=e.replace(r[1],r[1]+"0"),i=e+t)}return"zero"!==a.wEmpty||i!==a.aNeg&&""!==i||(e+="0"),[e,t]},setValueParts:function(e,t){var a=this.settingsClone,n=this.normalizeParts(e,t),i=n.join(""),r=n[0].length;return p(i,a)?(i=u(i,a.aDec,a.mDec),r>i.length&&(r=i.length),this.value=i,this.setPosition(r,!1),!0):!1},signPosition:function(){var e=this.settingsClone,t=e.aSign,a=this.that;if(t){var n=t.length;if("p"===e.pSign){var i=e.aNeg&&a.value&&a.value.charAt(0)===e.aNeg;return i?[1,n+1]:[0,n]}var r=a.value.length;return[r-n,r]}return[1e3,-1]},expandSelectionOnSign:function(e){var t=this.signPosition(),a=this.selection;a.start<t[1]&&a.end>t[0]&&((a.start<t[0]||a.end>t[1])&&this.value.substring(Math.max(a.start,t[0]),Math.min(a.end,t[1])).match(/^\s*$/)?a.start<t[0]?this.setSelection(a.start,t[0],e):this.setSelection(t[1],a.end,e):this.setSelection(Math.min(a.start,t[0]),Math.max(a.end,t[1]),e))},checkPaste:function(){if(void 0!==this.valuePartsBeforePaste){var e=this.getBeforeAfter(),t=this.valuePartsBeforePaste;delete this.valuePartsBeforePaste,e[0]=e[0].substr(0,t[0].length)+o(e[0].substr(t[0].length),this.settingsClone),this.setValueParts(e[0],e[1])||(this.value=t.join(""),this.setPosition(t[0].length,!1))}},skipAllways:function(e){var t=this.kdCode,a=this.which,n=this.ctrlKey,i=this.cmdKey,r=this.shiftKey;if((n||i)&&"keyup"===e.type&&void 0!==this.valuePartsBeforePaste||r&&45===t)return this.checkPaste(),!1;if(t>=112&&123>=t||t>=91&&93>=t||t>=9&&31>=t||8>t&&(0===a||a===t)||144===t||145===t||45===t)return!0;if((n||i)&&65===t)return!0;if((n||i)&&(67===t||86===t||88===t))return"keydown"===e.type&&this.expandSelectionOnSign(),(86===t||45===t)&&("keydown"===e.type||"keypress"===e.type?void 0===this.valuePartsBeforePaste&&(this.valuePartsBeforePaste=this.getBeforeAfter()):this.checkPaste()),"keydown"===e.type||"keypress"===e.type||67===t;if(n||i)return!0;if(37===t||39===t){var o=this.settingsClone.aSep,s=this.selection.start,u=this.that.value;return"keydown"===e.type&&o&&!this.shiftKey&&(37===t&&u.charAt(s-2)===o?this.setPosition(s-1):39===t&&u.charAt(s+1)===o&&this.setPosition(s+1)),!0}return t>=34&&40>=t?!0:!1},processAllways:function(){var e;return 8===this.kdCode||46===this.kdCode?(this.selection.length?(this.expandSelectionOnSign(!1),e=this.getBeforeAfterStriped(),this.setValueParts(e[0],e[1])):(e=this.getBeforeAfterStriped(),8===this.kdCode?e[0]=e[0].substring(0,e[0].length-1):e[1]=e[1].substring(1,e[1].length),this.setValueParts(e[0],e[1])),!0):!1},processKeypress:function(){var e=this.settingsClone,t=String.fromCharCode(this.which),a=this.getBeforeAfterStriped(),n=a[0],i=a[1];return t===e.aDec||e.altDec&&t===e.altDec||("."===t||","===t)&&110===this.kdCode?e.mDec&&e.aDec?e.aNeg&&i.indexOf(e.aNeg)>-1?!0:n.indexOf(e.aDec)>-1?!0:i.indexOf(e.aDec)>0?!0:(0===i.indexOf(e.aDec)&&(i=i.substr(1)),this.setValueParts(n+e.aDec,i),!0):!0:"-"===t||"+"===t?e.aNeg?(""===n&&i.indexOf(e.aNeg)>-1&&(n=e.aNeg,i=i.substring(1,i.length)),n=n.charAt(0)===e.aNeg?n.substring(1,n.length):"-"===t?e.aNeg+n:n,this.setValueParts(n,i),!0):!0:t>="0"&&"9">=t?(e.aNeg&&""===n&&i.indexOf(e.aNeg)>-1&&(n=e.aNeg,i=i.substring(1,i.length)),e.vMax<=0&&e.vMin<e.vMax&&-1===this.value.indexOf(e.aNeg)&&"0"!==t&&(n=e.aNeg+n),this.setValueParts(n+t,i),!0):!0},formatQuick:function(){var e=this.settingsClone,t=this.getBeforeAfterStriped(),a=this.value;if((""===e.aSep||""!==e.aSep&&-1===a.indexOf(e.aSep))&&(""===e.aSign||""!==e.aSign&&-1===a.indexOf(e.aSign))){var n=[],i="";n=a.split(e.aDec),n[0].indexOf("-")>-1&&(i="-",n[0]=n[0].replace("-",""),t[0]=t[0].replace("-","")),n[0].length>e.mInt&&"0"===t[0].charAt(0)&&(t[0]=t[0].slice(1)),t[0]=i+t[0]}var r=d(this.value,this.settingsClone),o=r.length;if(r){var s=t[0].split(""),u=0;for(u;u<s.length;u+=1)s[u].match("\\d")||(s[u]="\\"+s[u]);var c=new RegExp("^.*?"+s.join(".*?")),l=r.match(c);l?(o=l[0].length,(0===o&&r.charAt(0)!==e.aNeg||1===o&&r.charAt(0)===e.aNeg)&&e.aSign&&"p"===e.pSign&&(o=this.settingsClone.aSign.length+("-"===r.charAt(0)?1:0))):e.aSign&&"s"===e.pSign&&(o-=e.aSign.length)}this.that.value=r,this.setPosition(o),this.formatted=!0}};var S={init:function(t){return this.each(function(){var a=e(this),n=a.data("autoNumeric"),i=a.data();if("object"==typeof n)return this;var r={aNum:"0123456789",aSep:",",dGroup:"3",aDec:".",altDec:null,aSign:"",pSign:"p",vMax:"999999999.99",vMin:"0.00",mDec:null,mRound:"S",aPad:!0,nBracket:null,wEmpty:"empty",lZero:"allow",aForm:!0,onSomeEvent:function(){}};if(n=e.extend({},r,i,t),n.aDec===n.aSep)return e.error("autoNumeric will not function properly when the decimal character aDec: '"+n.aDec+"' and thousand seperater aSep: '"+n.aSep+"' are the same character"),this;if(-1!==e.inArray(a.prop("tagName"),n.tagList))return e.error("The <"+a.prop("tagName")+"> is not supported by autoNumeric()"),this;a.data("autoNumeric",n),n.lastSetValue="";var u=y(a,n);if(void 0===n.runOnce&&n.aForm){if(a.is("input[type=text], input[type=hidden], input:not([type])")){var l=!0;""===a[0].value&&"empty"===n.wEmpty&&(a[0].value="",l=!1),""===a[0].value&&"sign"===n.wEmpty&&(a[0].value=n.aSign,l=!1),l&&a.autoNumeric("set",a.val())}-1!==e.inArray(a.prop("tagName"),n.tagList)&&a.autoNumeric("set",a.text())}n.runOnce=!0,a.is("input[type=text], input[type=hidden], input:not([type])")&&(a.on("keydown.autoNumeric",function(t){return u=y(a),u.settings.aDec===u.settings.aSep?(e.error("autoNumeric will not function properly when the decimal character aDec: '"+u.settings.aDec+"' and thousand seperater aSep: '"+u.settings.aSep+"' are the same character"),this):u.that.readOnly?(u.processed=!0,!0):(u.init(t),u.settings.oEvent="keydown",u.skipAllways(t)?(u.processed=!0,!0):u.processAllways()?(u.processed=!0,u.formatQuick(),t.preventDefault(),!1):(u.formatted=!1,!0))}),a.on("keypress.autoNumeric",function(e){var t=y(a),n=t.processed;return t.init(e),t.settings.oEvent="keypress",t.skipAllways(e)?!0:n?(e.preventDefault(),!1):t.processAllways()||t.processKeypress()?(t.formatQuick(),e.preventDefault(),!1):void(t.formatted=!1)}),a.on("keyup.autoNumeric",function(e){var t=y(a);t.init(e),t.settings.oEvent="keyup";var n=t.skipAllways(e);return t.kdCode=0,delete t.valuePartsBeforePaste,n?!0:""===this.value?!0:void(t.formatted||t.formatQuick())}),a.on("focusin.autoNumeric",function(){var e=y(a);if(e.settingsClone.oEvent="focusin",null!==e.settingsClone.nBracket){var t=a.val();a.val(s(t,e.settingsClone.nBracket,e.settingsClone.oEvent))}e.inVal=a.val();var n=g(e.inVal,e.settingsClone,!0);null!==n&&a.val(n)}),a.on("focusout.autoNumeric",function(){var e=y(a),t=e.settingsClone,n=a.val(),i=n;e.settingsClone.oEvent="focusout";var r="";"allow"===t.lZero&&(t.allowLeading=!1,r="leading"),""!==n&&(n=o(n,t,r),null===g(n,t)&&p(n,t,a[0])?(n=c(n,t.aDec,t.aNeg),n=f(n,t),n=h(n,t.aDec,t.aNeg)):n="");var u=g(n,t,!1);null===u&&(u=d(n,t)),u!==i&&a.val(u),u!==e.inVal&&(a.change(),delete e.inVal),null!==t.nBracket&&a.autoNumeric("get")<0&&(e.settingsClone.oEvent="focusout",a.val(s(a.val(),t.nBracket,t.oEvent)))}))})},destroy:function(){return e(this).each(function(){var t=e(this);t.off(".autoNumeric"),t.removeData("autoNumeric")})},update:function(t){return e(this).each(function(){var a=m(e(this)),n=a.data("autoNumeric");if("object"!=typeof n)return e.error("You must initialize autoNumeric('init', {options}) prior to calling the 'update' method"),this;var i=a.autoNumeric("get");return n=e.extend(n,t),y(a,n,!0),n.aDec===n.aSep?(e.error("autoNumeric will not function properly when the decimal character aDec: '"+n.aDec+"' and thousand seperater aSep: '"+n.aSep+"' are the same character"),this):(a.data("autoNumeric",n),""!==a.val()||""!==a.text()?a.autoNumeric("set",i):void 0)})},set:function(t){return e(this).each(function(){var a=m(e(this)),n=a.data("autoNumeric"),i=t.toString();return"object"!=typeof n?(e.error("You must initialize autoNumeric('init', {options}) prior to calling the 'set' method"),this):e.isNumeric(+i)?(i=l(i),n.oEvent="set",n.lastSetValue=i,i.toString(),""!==i&&(i=f(i,n)),i=h(i,n.aDec,n.aNeg),p(i,n)||(i=f("",n)),i=d(i,n),a.is("input[type=text], input[type=hidden], input:not([type])")?a.val(i):-1!==e.inArray(a.prop("tagName"),n.tagList)?a.text(i):(e.error("The <"+a.prop("tagName")+"> is not supported by autoNumeric()"),!1)):""})},get:function(){var t=m(e(this)),a=t.data("autoNumeric");if("object"!=typeof a)return e.error("You must initialize autoNumeric('init', {options}) prior to calling the 'get' method"),this;a.oEvent="get";var n="";if(t.is("input[type=text], input[type=hidden], input:not([type])"))n=t.eq(0).val();else{if(-1===e.inArray(t.prop("tagName"),a.tagList))return e.error("The <"+t.prop("tagName")+"> is not supported by autoNumeric()"),!1;n=t.eq(0).text()}return""===n&&"empty"===a.wEmpty||n===a.aSign&&"sign"===a.wEmpty?"":(null!==a.nBracket&&""!==n&&(n=s(n,a.nBracket,a.oEvent)),(a.runOnce||a.aForm===!1)&&(n=o(n,a)),n=c(n,a.aDec,a.aNeg),0===+n&&"keep"!==a.lZero&&(n="0"),"keep"===a.lZero?n:n=l(n))},getString:function(){var t=!1,a=m(e(this)),n=a.serialize(),i=n.split("&"),r=0;for(r;r<i.length;r+=1){var o=i[r].split("="),s=e('*[name="'+decodeURIComponent(o[0])+'"]').data("autoNumeric");"object"==typeof s&&null!==o[1]&&void 0!==e('*[name="'+decodeURIComponent(o[0])+'"]').data("autoNumeric")&&(o[1]=e('input[name="'+decodeURIComponent(o[0])+'"]').autoNumeric("get"),i[r]=o.join("="),t=!0)}return t===!0?i.join("&"):(e.error("You must initialize autoNumeric('init', {options}) prior to calling the 'getString' method"),this)},getArray:function(){var t=!1,a=m(e(this)),n=a.serializeArray();return e.each(n,function(a,n){var i=e('*[name="'+decodeURIComponent(n.name)+'"]').data("autoNumeric");"object"==typeof i&&(""!==n.value&&void 0!==e('*[name="'+decodeURIComponent(n.name)+'"]').data("autoNumeric")&&(n.value=e('input[name="'+decodeURIComponent(n.name)+'"]').autoNumeric("get").toString()),t=!0)}),t===!0?n:(e.error("You must initialize autoNumeric('init', {options}) prior to calling the 'getArray' method"),this)},getSettings:function(){var t=m(e(this));return t.eq(0).data("autoNumeric")}};e.fn.autoNumeric=function(t){return S[t]?S[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error('Method "'+t+'" is not supported by autoNumeric()'):S.init.apply(this,arguments)}}(jQuery);
!function(e){function t(){var e="!@#$%^&*()+=[]\\';,/{}|\":<>?~`.-_";return e+=" "}function n(){var e="¬€£¦";return e}function r(t,n,r){t.each(function(){var t=e(this);t.bind("keyup change paste",function(e){var a="";e.originalEvent&&e.originalEvent.clipboardData&&e.originalEvent.clipboardData.getData&&(a=e.originalEvent.clipboardData.getData("text/plain")),setTimeout(function(){i(t,n,r,a)},0)}),t.bind("keypress",function(e){var a=e.charCode?e.charCode:e.which;if(!(l(a)||e.ctrlKey||e.metaKey)){var o=String.fromCharCode(a),i=t.selection(),u=i.start,c=i.end,s=t.val(),f=s.substring(0,u)+o+s.substring(c),p=n(f,r);p!=f&&e.preventDefault()}})})}function a(t,n){var r=parseFloat(e(t).val()),a=e(t);return isNaN(r)?void a.val(""):(o(n.min)&&r<n.min&&a.val(""),void(o(n.max)&&r>n.max&&a.val("")))}function o(e){return!isNaN(e)}function l(e){return e>=32?!1:10==e?!1:13==e?!1:!0}function i(e,t,n,r){var a=e.val();""==a&&r.length>0&&(a=r);var o=t(a,n);if(a!=o){var l=e.alphanum_caret();e.val(o),e.alphanum_caret(a.length==o.length+1?l-1:l)}}function u(t,n){"undefined"==typeof n&&(n=D);var r,a={};return r="string"==typeof t?O[t]:"undefined"==typeof t?{}:t,e.extend(a,n,r),"undefined"==typeof a.blacklist&&(a.blacklistSet=N(a.allow,a.disallow)),a}function c(t){var n,r={};return n="string"==typeof t?_[t]:"undefined"==typeof t?{}:t,e.extend(r,L,n),r}function s(e,t,n){return n.maxLength&&e.length>=n.maxLength?!1:n.allow.indexOf(t)>=0?!0:n.allowSpace&&" "==t?!0:n.blacklistSet.contains(t)?!1:!n.allowNumeric&&A[t]?!1:!n.allowUpper&&x(t)?!1:!n.allowLower&&T(t)?!1:!n.allowCaseless&&y(t)?!1:!n.allowLatin&&M.contains(t)?!1:n.allowOtherCharSets?!0:A[t]||M.contains(t)?!0:!1}function f(e,t,n){if(A[t])return v(e,n)?!1:h(e,n)?!1:d(e,n)?!1:m(e+t,n)?!1:g(e+t,n)?!1:!0;if(n.allowPlus&&"+"==t&&""==e)return!0;if(n.allowMinus&&"-"==t&&""==e)return!0;if(t==j&&n.allowThouSep&&R(e,t))return!0;if(t==k){if(e.indexOf(k)>=0)return!1;if(n.allowDecSep)return!0}return!1}function p(e){return e+="",e.replace(/[^0-9]/g,"").length}function v(e,t){var n=t.maxDigits;if(""==n||isNaN(n))return!1;var r=p(e);return r>=n?!0:!1}function d(e,t){var n=t.maxDecimalPlaces;if(""==n||isNaN(n))return!1;var r=e.indexOf(k);if(-1==r)return!1;var a=e.substring(r),o=p(a);return o>=n?!0:!1}function h(e,t){var n=t.maxPreDecimalPlaces;if(""==n||isNaN(n))return!1;var r=e.indexOf(k);if(r>=0)return!1;var a=p(e);return a>=n?!0:!1}function m(e,t){if(!t.max||t.max<0)return!1;var n=parseFloat(e);return n>t.max?!0:!1}function g(e,t){if(!t.min||t.min>0)return!1;var n=parseFloat(e);return n<t.min?!0:!1}function w(e,t){if("string"!=typeof e)return e;var n,r=e.split(""),a=[],o=0;for(o=0;o<r.length;o++){n=r[o];var l=a.join("");s(l,n,t)&&a.push(n)}var i=a.join("");return t.forceLower?i=i.toLowerCase():t.forceUpper&&(i=i.toUpperCase()),i}function S(e,t){if("string"!=typeof e)return e;var n,r=e.split(""),a=[],o=0;for(o=0;o<r.length;o++){n=r[o];var l=a.join("");f(l,n,t)&&a.push(n)}return a.join("")}function x(e){var t=e.toUpperCase(),n=e.toLowerCase();return e==t&&t!=n?!0:!1}function T(e){var t=e.toUpperCase(),n=e.toLowerCase();return e==n&&t!=n?!0:!1}function y(e){return e.toUpperCase()==e.toLowerCase()?!0:!1}function N(e,t){var n=new b(U+t),r=new b(e),a=n.subtract(r);return a}function C(){var e,t="0123456789".split(""),n={},r=0;for(r=0;r<t.length;r++)e=t[r],n[e]=!0;return n}function E(){var e="abcdefghijklmnopqrstuvwxyz",t=e.toUpperCase(),n=new b(e+t);return n}function R(e){if(0==e.length)return!1;var t=e.indexOf(k);if(t>=0)return!1;var n=e.indexOf(j);if(0>n)return!0;var r=e.lastIndexOf(j),a=e.length-r-1;if(3>a)return!1;var o=p(e.substring(n));return o%3>0?!1:!0}function b(e){this.map="string"==typeof e?P(e):{}}function P(e){var t,n={},r=e.split(""),a=0;for(a=0;a<r.length;a++)t=r[a],n[t]=!0;return n}e.fn.alphanum=function(e){var t=u(e),n=this;return r(n,w,t),this},e.fn.alpha=function(e){var t=u("alpha"),n=u(e,t),a=this;return r(a,w,n),this},e.fn.numeric=function(e){var t=c(e),n=this;return r(n,S,t),n.blur(function(){a(this,e)}),this};var D={allow:"",disallow:"",allowSpace:!0,allowNumeric:!0,allowUpper:!0,allowLower:!0,allowCaseless:!0,allowLatin:!0,allowOtherCharSets:!0,forceUpper:!1,forceLower:!1,maxLength:0/0},L={allowPlus:!1,allowMinus:!0,allowThouSep:!0,allowDecSep:!0,allowLeadingSpaces:!1,maxDigits:0/0,maxDecimalPlaces:0/0,maxPreDecimalPlaces:0/0,max:0/0,min:0/0},O={alpha:{allowNumeric:!1},upper:{allowNumeric:!1,allowUpper:!0,allowLower:!1,allowCaseless:!0},lower:{allowNumeric:!1,allowUpper:!1,allowLower:!0,allowCaseless:!0}},_={integer:{allowPlus:!1,allowMinus:!0,allowThouSep:!1,allowDecSep:!1},positiveInteger:{allowPlus:!1,allowMinus:!1,allowThouSep:!1,allowDecSep:!1}},U=t()+n(),j=",",k=".",A=C(),M=E();b.prototype.add=function(e){var t=this.clone();for(var n in e.map)t.map[n]=!0;return t},b.prototype.subtract=function(e){var t=this.clone();for(var n in e.map)delete t.map[n];return t},b.prototype.contains=function(e){return this.map[e]?!0:!1},b.prototype.clone=function(){var e=new b;for(var t in this.map)e.map[t]=!0;return e},e.fn.alphanum.backdoorAlphaNum=function(e,t){var n=u(t);return w(e,n)},e.fn.alphanum.backdoorNumeric=function(e,t){var n=c(t);return S(e,n)},e.fn.alphanum.setNumericSeparators=function(e){1==e.thousandsSeparator.length&&1==e.decimalSeparator.length&&(j=e.thousandsSeparator,k=e.decimalSeparator)}}(jQuery),function(e){function t(e,t){if(e.createTextRange){var n=e.createTextRange();n.move("character",t),n.select()}else null!=e.selectionStart&&(e.focus(),e.setSelectionRange(t,t))}function n(e){if("selection"in document){var t=e.createTextRange();try{t.setEndPoint("EndToStart",document.selection.createRange())}catch(n){return 0}return t.text.length}return null!=e.selectionStart?e.selectionStart:void 0}e.fn.alphanum_caret=function(r,a){return"undefined"==typeof r?n(this.get(0)):this.queue(function(n){if(isNaN(r)){var o=e(this).val().indexOf(r);a===!0?o+=r.length:"undefined"!=typeof a&&(o+=a),t(this,o)}else t(this,r);n()})}}(jQuery),function(e){var t=function(e){return e?e.ownerDocument.defaultView||e.ownerDocument.parentWindow:window},n=function(t){var n=e.Range.current(t).clone(),r=e.Range(t).select(t);return n.overlaps(r)?(n.compare("START_TO_START",r)<1?(startPos=0,n.move("START_TO_START",r)):(fromElementToCurrent=r.clone(),fromElementToCurrent.move("END_TO_START",n),startPos=fromElementToCurrent.toString().length),endPos=n.compare("END_TO_END",r)>=0?r.toString().length:startPos+n.toString().length,{start:startPos,end:endPos}):null},r=function(r){var a=t(r);if(void 0!==r.selectionStart)return document.activeElement&&document.activeElement!=r&&r.selectionStart==r.selectionEnd&&0==r.selectionStart?{start:r.value.length,end:r.value.length}:{start:r.selectionStart,end:r.selectionEnd};if(a.getSelection)return n(r,a);try{if("input"==r.nodeName.toLowerCase()){var o=t(r).document.selection.createRange(),l=r.createTextRange();l.setEndPoint("EndToStart",o);var i=l.text.length;return{start:i,end:i+o.text.length}}var u=n(r,a);if(!u)return u;var c=e.Range.current().clone(),s=c.clone().collapse().range,f=c.clone().collapse(!1).range;return s.moveStart("character",-1),f.moveStart("character",-1),0!=u.startPos&&""==s.text&&(u.startPos+=2),0!=u.endPos&&""==f.text&&(u.endPos+=2),u}catch(p){return{start:r.value.length,end:r.value.length}}},a=function(e,n,r){var a=t(e);if(e.setSelectionRange)void 0===r?(e.focus(),e.setSelectionRange(n,n)):(e.select(),e.selectionStart=n,e.selectionEnd=r);else if(e.createTextRange){var o=e.createTextRange();o.moveStart("character",n),r=r||n,o.moveEnd("character",r-e.value.length),o.select()}else if(a.getSelection){var i=a.document,u=a.getSelection(),c=i.createRange(),s=[n,void 0!==r?r:n];l([e],s),c.setStart(s[0].el,s[0].count),c.setEnd(s[1].el,s[1].count),u.removeAllRanges(),u.addRange(c)}else if(a.document.body.createTextRange){var c=document.body.createTextRange();c.moveToElementText(e),c.collapse(),c.moveStart("character",n),c.moveEnd("character",void 0!==r?r:n),c.select()}},o=function(e,t,n,r){"number"==typeof n[0]&&n[0]<t&&(n[0]={el:r,count:n[0]-e}),"number"==typeof n[1]&&n[1]<=t&&(n[1]={el:r,count:n[1]-e})},l=function(e,t,n){var r,a;n=n||0;for(var i=0;e[i];i++)r=e[i],3===r.nodeType||4===r.nodeType?(a=n,n+=r.nodeValue.length,o(a,n,t,r)):8!==r.nodeType&&(n=l(r.childNodes,t,n));return n};jQuery.fn.selection=function(e,t){return void 0!==e?this.each(function(){a(this,e,t)}):r(this[0])},e.fn.selection.getCharElement=l}(jQuery);
/**
 * Tecnicamente no valida, sino que verifica la informacion ingresada e
 * informa atravez de un tooltip al usuario.
 * @author mudrizar
 */
var $k = jQuery.noConflict();

/**
 * Agrega un listener a cada elemento que tenga la clase 'validate-field'
 */
function validateFields(){
	validateAlphaNumeric();
	validateAlpha();
	validateEmail();
	validateCash();
	validateDocument();
	validateNumeric();
	validateOnlyNumeric();
	addFunctionality('.validate-phone', 'keypress', checkPhoneNumber);
	addFunctionality('.validate-alphaNumOnly', 'keypress', alphaNumericConstraint);
	addFunctionality('.validate-alphaNumCarry', 'keypress', alphaNumericConstraintCarry);
	addFunctionality('.validate-onlyNumber', 'keypress',numericConstraint)
	
	//addFunctionality('.validate-document', 'keypress', documentConstraint);
}

function validateDocument(){
	$k('.validate-document').alphanum({disallow:'¿!¡?´',allow:'-_.'});
}
function validateNumeric(){
	$k('.validate-numeric').numeric({allowMinus:false,allowThouSep:false,allowDecSep:true,allowLeadingSpaces:false});
}

function validateOnlyNumeric(){
	$k('.validate-only-numeric').numeric({allowMinus:false,allowThouSep:false,allowDecSep:false,allowLeadingSpaces:false});
}

function validateAlpha(){
	$k('.validate-alpha').alpha({disallow:'¿!¡?´'});
}

function validateAlphaNumeric(){	
	$k('.validate-alphaNumeric').alphanum({disallow:'¿!¡?´'});
}

function validateEmail(){
//	addFunctionality('.validate-email', 'focusout', checkEmail);
	addFunctionality('.validate-email', checkEmail);

}

function validateCash(){
	$k('.validate-cash').autoNumeric({aSep: ',', aDec: '.',mDec:2,vMax: '99999999.99'});
}

function addFunctionality(selector,event,validatorFunction){
	var fields=$k(selector);
	if(fields.length==0){
		return;
	}
	jQuery.each(fields,function(index,field){
		var jqueryElement=$k(field);
		jqueryElement.on(event,function(eventData){
			validatorFunction(jqueryElement,eventData);
		});
	});
}

/*keypress events*/
function numericConstraint(element, eventData){
	genericPreventKeyPressByRegex(element,eventData,/[0-9]/);
}

function alphaConstraint(element, eventData){
	genericPreventKeyPressByRegex(element,eventData,/[a-zA-Z]/);
}

function alphaNumericConstraint(element, eventData){
	/* esta permitiendo comilla simple (keycode/charCode = 39 ). 
	  Se sustituye por 34 (comilla doble) para bloquear el ingreso del caracter */
	var keyCodeTmp=eventData.keyCode || eventData.which;
	if(keyCodeTmp=='39'){
		eventData.keyCode='34';
		eventData.which='34';
	}
	genericPreventKeyPressByRegex(element,eventData, /[a-zA-Z0-9]/);
}

function alphaNumericConstraintCarry(element, eventData){
	/* esta permitiendo comilla simple (keycode/charCode = 39 ). 
	  Se sustituye por 34 (comilla doble) para bloquear el ingreso del caracter */
	var keyCodeTmp=eventData.keyCode || eventData.which;
	if(keyCodeTmp=='39'){
		eventData.keyCode='34';
		eventData.which='34';
	}
	genericPreventKeyPressByRegex(element,eventData, /[\u00F1A\u00D1a-zA-Z0-9 ]/);
}


function documentConstraint(element, eventData){	
	genericPreventKeyPressByRegex(element,eventData, /[a-zA-Z0-9\s-]/);
}


/*OutFocus event*/
function checkEmail(element,eventData){
	var data=eventData.target.value;
	var response=genericRegexValidator(element,data,/\S+@\S+\.\S+/,'No es un email valido.');

	var parent=getWrappedParentInstance(element, response);
	//addTooltipMessage(parent,response,eventData);
	cleanTooltip(parent,response,eventData);
}

function checkPhoneNumber(element, eventData){
	genericPreventKeyPressByRegex(element,eventData, /[(+)0-9-]/);
}

function cleanTooltip(parent, response, eventData){
	if(response.error){
		if(!parent.hasClass('fixed')){
			parent.addClass('fixed');
		}
	}else if(!response.error || isEmpty(eventData.target.value)){
		parent.removeClass('fixed');			
	}
}


function getWrappedParentInstance(element, response){
	var parent=element.parent();
	//Si no tiene un parent generado por este mismo componente con la clase generic-tooltip
	if(!parent.hasClass('generic-tooltip')){
		//Se wrapea con un elemnto ya que input no permite usar :after y/o :before
		try{
			element.wrap('<div class="generic-tooltip" tooltip-text="'+response.text+'"></div>');
			parent=element.parent();
			element.focus();
		}catch(e){
			//Si se consultan muchos elemntos la mismo tiempo se
		}
	}	
	return parent
}

/**
 * Verifica que el data sea 'indefined'
 * @param data
 * @returns {Boolean}
 */
function isEmpty(data){
	return data===undefined || ''===$k.trim(data);
}

/**
 * Comportamietno comun en el cual se verifica una expresion regular, devolviendo
 * un json <code>{error:boolean, text:String}</code> 
 * @param element Debe estar wrapeado con jquery
 * @param data valor a verificar
 * @param attribute Define que atributo del 'element' se emplea para definir si se ejecutara o no
 * @param regex Expresion regular
 * @param mensajeError mensaje de error a mostrar en el tooltip
 * @returns json <code>{error:boolean, text:String}</code>
 */
function genericRegexValidator(element,data,regex, mensajeError){
	var response={};
	if(isEmpty(data)){
		response.error=false;
		return response;
	}	
	if(!regex.test(data)){
		response.error=true;
		response.text=mensajeError;
	}		
	return response;
}	

function genericPreventKeyPressByRegex(element,eventData,regex){
	var left = 37; //Left Arrow
	var right = 39; //Right Arrow
	var backspace = 8; //Backspace
	var tab = 9; //Tab
	var del = 46; //Delete
	var end = 35; //End
	var home = 36; //Home	
	if (eventData.keyCode == 0 && eventData.which == 46){
		//De esta forma no toma el caracter \. como si fuera el \supr en Mozilla 
		var keyCode=0;
	}else{
		var keyCode=eventData.keyCode || eventData.which;
	}	
	var key=String.fromCharCode(keyCode);	
	if(keyCode == left || keyCode == right || keyCode == backspace || keyCode == del || keyCode == tab || keyCode == end || keyCode == home) {
		// Chrome && Mozilla
		 if (!(eventData.keyCode == left && eventData.which == left) 
				 && !(eventData.keyCode == 0 && eventData.which == left)
				 && !(eventData.keyCode == 46 && eventData.which == del) //De esta forma no toma el caracter \. como si fuera el \supr en Chrome
			 && !(eventData.keyCode == home && eventData.which == home)
			 && !(eventData.keyCode == end && eventData.which == end)
			 && !(eventData.keyCode == 0 && eventData.which == end)
			 && !(eventData.keyCode == 0 && eventData.which == home))
			return;
	}
	if(!regex.test(key)){
		eventData.preventDefault();	
	}
}

function validateNumber(input){
	input.value = input.value.replace(/[^0-9]/g,''); 
}


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

	
