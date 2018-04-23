var SuperSelect=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=14)}([function(e,t,n){e.exports=n(12)()},function(e,t){e.exports=void 0},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=l(r),a=l(n(0));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getContent=function(){return n.props.content||n.props.label},n.render=function(){return o.default.createElement("li",{className:"super-select-action",onClick:n.props.handler},n.getContent())},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),t}();s.defaultProps={content:null},s.propTypes={handler:a.default.func.isRequired,label:a.default.string.isRequired,content:a.default.any},t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(1),a=i(o),l=i(n(0)),s=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,i=Array(l),c=0;c<l;c++)i[c]=arguments[c];return n=o=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.render=function(){return a.default.createElement("ul",{className:"super-select-actions"},o.props.actions.map(function(e,t){return a.default.createElement(s.default,r({},e,{key:t}))}))},u(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),t}();c.defaultProps={actions:[]},c.propTypes={actions:l.default.array},t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=s(o),l=s(n(0));function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.handleKeyPress=function(e){["ArrowUp","ArrowDown"].includes(e.key)&&e.preventDefault()},i(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){this.q.focus()}},{key:"render",value:function(){var e=this;return a.default.createElement("div",{className:"super-select-options-search-container"},a.default.createElement("input",{className:"form-control",type:"search",value:this.props.searchArgument,onChange:this.props.searchArgumentChange,onKeyDown:this.handleKeyPress,placeholder:this.props.searchPlaceholder,ref:function(t){e.q=t}}))}}]),t}();u.defaultProps={searchPlaceholder:"",searchArgument:"",searchArgumentChange:null},u.propTypes={searchPlaceholder:l.default.string.isRequired,searchArgument:l.default.string,searchArgumentChange:l.default.func},t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=s(o),l=s(n(0));function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.handleChange=function(){r.props.onChange(r.props.option)},i(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this.props.multiple?"checkbox":"radio",t="super-select-options-list-item";return this.props.pseudoHover&&(t+=" hover"),a.default.createElement("li",{className:t},a.default.createElement("label",null,a.default.createElement("input",{type:e,checked:this.props.checked,onChange:this.handleChange,tabIndex:"-1"}),this.props.option[this.props.labelKey]))}}]),t}();u.defaultProps={pseudoHover:!1,checked:!1,onChange:null,labelKey:"name",multiple:!1,option:{}},u.propTypes={option:l.default.object,onChange:l.default.func,checked:l.default.bool,handleChange:l.default.func,labelKey:l.default.string,pseudoHover:l.default.bool,multiple:l.default.bool},t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),l=u(a),s=u(n(0)),i=u(n(5));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,s=Array(a),u=0;u<a;u++)s[u]=arguments[u];return n=o=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.renderOptions=function(){var e=o.props.options;return e.length?e.map(function(e,t){var n={index:t,pseudoHover:t===o.props.currentHover,checked:o.props.isChecked(e),option:e,onChange:o.props.handleChange,labelKey:o.props.labelKey,multiple:o.props.multiple};return o.props.optionRender?o.props.optionRender(n):l.default.createElement(i.default,r({},n,{key:t}))}):l.default.createElement("li",{className:"super-select-options-list-item not-found",key:"not-found"},o.props.noResultsLabel)},c(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"super-select-options-container"},l.default.createElement("ul",{className:"super-select-options-list"},this.renderOptions()))}}]),t}();p.defaultProps={options:[],isChecked:null,handleChange:null,currentHover:!1,multiple:!1,labelKey:"name",allowCreate:!1},p.propTypes={options:s.default.array,isChecked:s.default.func,handleChange:s.default.func,currentHover:s.default.oneOfType([s.default.bool,s.default.number]),multiple:s.default.bool,labelKey:s.default.string,allowCreate:s.default.bool,optionRender:s.default.func,noResultsLabel:s.default.string},t.default=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=l(r),a=l(n(0));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var i=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,l=Array(a),i=0;i<a;i++)l[i]=arguments[i];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.getClassName=function(){return"super-select-button "+(r.props.open?"open":"")},r.getLabel=function(){var e=r.props.label;return"function"==typeof r.props.contentLabelProvider&&(e=r.props.contentLabelProvider()),o.default.createElement("span",{id:"label",className:"super-select-button-label",key:"label-text"},e)},r.render=function(){var e=r.getClassName(),t=[],n=0,a=r.props.value;return t.push(r.getLabel()),a&&!1===r.props.noLabels&&(r.props.multiple&&r.props.value.length?(t.push(": "),r.props.value.length===r.props.allOptions.length?t.push(o.default.createElement("span",{className:"super-select-button-label-value",key:"all"},r.props.allSelectedLabel)):!0===r.props.noLabels?t.push(o.default.createElement("span",{className:"super-select-button-label-value",key:"allCount"},r.props.value.length)):(r.props.value.map(function(e,a){(!1===r.props.maxLabels||n<r.props.maxLabels)&&(t.push(o.default.createElement("span",{className:"super-select-button-label-value",key:a},e[r.props.labelKey])),n++)}),!1!==r.props.maxLabels&&r.props.maxLabels<r.props.value.length&&t.push(o.default.createElement("span",{className:"super-select-button-label-value",key:"-1"},r.props.moreSelectedLabel?r.props.moreSelectedLabel:"mais ".concat((r.props.value.length-r.props.maxLabels).toString()))))):!r.props.multiple&&r.props.value[r.props.labelKey]&&t.push(o.default.createElement("span",{className:"super-select-button-label-value",key:"selected"},r.props.value[r.props.labelKey]))),o.default.createElement("label",{className:e,onClick:r.props.toggle},t)},s(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),t}();i.propTypes={label:a.default.string,contentLabelProvider:a.default.func,open:a.default.bool,noLabels:a.default.bool,multiple:a.default.bool,allOptions:a.default.arrayOf(a.default.object),allSelectedLabel:a.default.string,maxLabels:a.default.oneOfType([a.default.number,a.default.bool]),labelKey:a.default.string,moreSelectedLabel:a.default.string,value:a.default.oneOfType([a.default.array,a.default.object]),toggle:a.default.func},t.default=i},function(e,t,n){
/*!
 * Fuse.js v3.2.0 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";e.exports=function(e){return"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(5),a=n(7),l=n(4),s=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,a=n.distance,s=void 0===a?100:a,i=n.threshold,u=void 0===i?.6:i,c=n.maxPatternLength,p=void 0===c?32:c,f=n.isCaseSensitive,d=void 0!==f&&f,h=n.tokenSeparator,v=void 0===h?/ +/g:h,b=n.findAllMatches,y=void 0!==b&&b,g=n.minMatchCharLength,m=void 0===g?1:g;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:u,maxPatternLength:p,isCaseSensitive:d,tokenSeparator:v,findAllMatches:y,minMatchCharLength:m},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=p&&(this.patternAlphabet=l(this.pattern))}return r(e,[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,n=t.maxPatternLength,r=t.tokenSeparator;if(this.pattern.length>n)return o(e,this.pattern,r);var l=this.options,s=l.location,i=l.distance,u=l.threshold,c=l.findAllMatches,p=l.minMatchCharLength;return a(e,this.pattern,this.patternAlphabet,{location:s,distance:i,threshold:u,findAllMatches:c,minMatchCharLength:p})}}]),e}();e.exports=s},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){return function e(t,n,o){if(n){var a=n.indexOf("."),l=n,s=null;-1!==a&&(l=n.slice(0,a),s=n.slice(a+1));var i=t[l];if(null!==i&&void 0!==i)if(s||"string"!=typeof i&&"number"!=typeof i)if(r(i))for(var u=0,c=i.length;u<c;u+=1)e(i[u],s,o);else s&&e(i,s,o);else o.push(i.toString())}else o.push(t);return o}(e,t,[])}},function(e,t,n){"use strict";e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,o=-1,a=0,l=e.length;a<l;a+=1){var s=e[a];s&&-1===r?r=a:s||-1===r||((o=a-1)-r+1>=t&&n.push([r,o]),r=-1)}return e[a-1]&&a-r>=t&&n.push([r,a-1]),n}},function(e,t,n){"use strict";e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var o=0;o<n;o+=1)t[e.charAt(o)]|=1<<n-o-1;return t}},function(e,t,n){"use strict";var r=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(r,"\\$&").replace(n,"|")),a=e.match(o),l=!!a,s=[];if(l)for(var i=0,u=a.length;i<u;i+=1){var c=a[i];s.push([e.indexOf(c),c.length-1])}return{score:l?.5:1,isMatch:l,matchedIndices:s}}},function(e,t,n){"use strict";e.exports=function(e,t){var n=t.errors,r=void 0===n?0:n,o=t.currentLocation,a=void 0===o?0:o,l=t.expectedLocation,s=void 0===l?0:l,i=t.distance,u=void 0===i?100:i,c=r/e.length,p=Math.abs(s-a);return u?c+p/u:p?1:c}},function(e,t,n){"use strict";var r=n(6),o=n(3);e.exports=function(e,t,n,a){for(var l=a.location,s=void 0===l?0:l,i=a.distance,u=void 0===i?100:i,c=a.threshold,p=void 0===c?.6:c,f=a.findAllMatches,d=void 0!==f&&f,h=a.minMatchCharLength,v=void 0===h?1:h,b=s,y=e.length,g=p,m=e.indexOf(t,b),_=t.length,O=[],k=0;k<y;k+=1)O[k]=0;if(-1!==m){var C=r(t,{errors:0,currentLocation:m,expectedLocation:b,distance:u});if(g=Math.min(C,g),-1!==(m=e.lastIndexOf(t,b+_))){var w=r(t,{errors:0,currentLocation:m,expectedLocation:b,distance:u});g=Math.min(w,g)}}m=-1;for(var x=[],L=1,S=_+y,P=1<<_-1,j=0;j<_;j+=1){for(var E=0,M=S;E<M;)r(t,{errors:j,currentLocation:b+M,expectedLocation:b,distance:u})<=g?E=M:S=M,M=Math.floor((S-E)/2+E);S=M;var T=Math.max(1,b-M+1),A=d?y:Math.min(b+M,y)+_,K=Array(A+2);K[A+1]=(1<<j)-1;for(var R=A;R>=T;R-=1){var I=R-1,N=n[e.charAt(I)];if(N&&(O[I]=1),K[R]=(K[R+1]<<1|1)&N,0!==j&&(K[R]|=(x[R+1]|x[R])<<1|1|x[R+1]),K[R]&P&&(L=r(t,{errors:j,currentLocation:I,expectedLocation:b,distance:u}))<=g){if(g=L,(m=I)<=b)break;T=Math.max(1,2*b-m)}}if(r(t,{errors:j+1,currentLocation:b,expectedLocation:b,distance:u})>g)break;x=K}return{isMatch:m>=0,score:0===L?.001:L,matchedIndices:o(O,v)}}},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=n(2),l=n(0),s=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,l=n.distance,s=void 0===l?100:l,i=n.threshold,u=void 0===i?.6:i,c=n.maxPatternLength,p=void 0===c?32:c,f=n.caseSensitive,d=void 0!==f&&f,h=n.tokenSeparator,v=void 0===h?/ +/g:h,b=n.findAllMatches,y=void 0!==b&&b,g=n.minMatchCharLength,m=void 0===g?1:g,_=n.id,O=void 0===_?null:_,k=n.keys,C=void 0===k?[]:k,w=n.shouldSort,x=void 0===w||w,L=n.getFn,S=void 0===L?a:L,P=n.sortFn,j=void 0===P?function(e,t){return e.score-t.score}:P,E=n.tokenize,M=void 0!==E&&E,T=n.matchAllTokens,A=void 0!==T&&T,K=n.includeMatches,R=void 0!==K&&K,I=n.includeScore,N=void 0!==I&&I,q=n.verbose,H=void 0!==q&&q;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:u,maxPatternLength:p,isCaseSensitive:d,tokenSeparator:v,findAllMatches:y,minMatchCharLength:m,id:O,keys:C,includeMatches:R,includeScore:N,shouldSort:x,getFn:S,sortFn:j,verbose:H,tokenize:M,matchAllTokens:A},this.setCollection(t)}return r(e,[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){this._log('---------\nSearch pattern: "'+e+'"');var t=this._prepareSearchers(e),n=t.tokenSearchers,r=t.fullSearcher,o=this._search(n,r),a=o.weights,l=o.results;return this._computeScore(a,l),this.options.shouldSort&&this._sort(l),this._format(l)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,a=n.length;r<a;r+=1)t.push(new o(n[r],this.options));return{tokenSearchers:t,fullSearcher:new o(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],n=this.list,r={},o=[];if("string"==typeof n[0]){for(var a=0,l=n.length;a<l;a+=1)this._analyze({key:"",value:n[a],record:a,index:a},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t});return{weights:null,results:o}}for(var s={},i=0,u=n.length;i<u;i+=1)for(var c=n[i],p=0,f=this.options.keys.length;p<f;p+=1){var d=this.options.keys[p];if("string"!=typeof d){if(s[d.name]={weight:1-d.weight||1},d.weight<=0||d.weight>1)throw new Error("Key weight has to be > 0 and <= 1");d=d.name}else s[d]={weight:1};this._analyze({key:d,value:this.options.getFn(c,d),record:c,index:i},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t})}return{weights:s,results:o}}},{key:"_analyze",value:function(e,t){var n=e.key,r=e.arrayIndex,o=void 0===r?-1:r,a=e.value,s=e.record,i=e.index,u=t.tokenSearchers,c=void 0===u?[]:u,p=t.fullSearcher,f=void 0===p?[]:p,d=t.resultMap,h=void 0===d?{}:d,v=t.results,b=void 0===v?[]:v;if(void 0!==a&&null!==a){var y=!1,g=-1,m=0;if("string"==typeof a){this._log("\nKey: "+(""===n?"-":n));var _=f.search(a);if(this._log('Full text: "'+a+'", score: '+_.score),this.options.tokenize){for(var O=a.split(this.options.tokenSeparator),k=[],C=0;C<c.length;C+=1){var w=c[C];this._log('\nPattern: "'+w.pattern+'"');for(var x=!1,L=0;L<O.length;L+=1){var S=O[L],P=w.search(S),j={};P.isMatch?(j[S]=P.score,y=!0,x=!0,k.push(P.score)):(j[S]=1,this.options.matchAllTokens||k.push(1)),this._log('Token: "'+S+'", score: '+j[S])}x&&(m+=1)}g=k[0];for(var E=k.length,M=1;M<E;M+=1)g+=k[M];g/=E,this._log("Token score average:",g)}var T=_.score;g>-1&&(T=(T+g)/2),this._log("Score average:",T);var A=!this.options.tokenize||!this.options.matchAllTokens||m>=c.length;if(this._log("\nCheck Matches: "+A),(y||_.isMatch)&&A){var K=h[i];K?K.output.push({key:n,arrayIndex:o,value:a,score:T,matchedIndices:_.matchedIndices}):(h[i]={item:s,output:[{key:n,arrayIndex:o,value:a,score:T,matchedIndices:_.matchedIndices}]},b.push(h[i]))}}else if(l(a))for(var R=0,I=a.length;R<I;R+=1)this._analyze({key:n,arrayIndex:R,value:a[R],record:s,index:i},{resultMap:h,results:b,tokenSearchers:c,fullSearcher:f})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,r=t.length;n<r;n+=1){for(var o=t[n].output,a=o.length,l=0,s=1,i=0;i<a;i+=1){var u=e?e[o[i].key].weight:1,c=(1===u?o[i].score:o[i].score||.001)*u;1!==u?s=Math.min(s,c):(o[i].nScore=c,l+=c)}t[n].score=1===s?l/a:s,this._log(t[n])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];this._log("\n\nOutput:\n\n",JSON.stringify(e));var n=[];this.options.includeMatches&&n.push(function(e,t){var n=e.output;t.matches=[];for(var r=0,o=n.length;r<o;r+=1){var a=n[r];if(0!==a.matchedIndices.length){var l={indices:a.matchedIndices,value:a.value};a.key&&(l.key=a.key),a.hasOwnProperty("arrayIndex")&&a.arrayIndex>-1&&(l.arrayIndex=a.arrayIndex),t.matches.push(l)}}}),this.options.includeScore&&n.push(function(e,t){t.score=e.score});for(var r=0,o=e.length;r<o;r+=1){var a=e[r];if(this.options.id&&(a.item=this.options.getFn(a.item,this.options.id)[0]),n.length){for(var l={item:a.item},s=0,i=n.length;s<i;s+=1)n[s](a,l);t.push(l)}else t.push(a.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}]),e}();e.exports=s}])},e.exports=r()},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,a,l,s){if(!e){var i;if(void 0===t)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,a,l,s],c=0;(i=new Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw i.framesToPop=1,i}}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";var r=n(11),o=n(10),a=n(9);e.exports=function(){function e(e,t,n,r,l,s){s!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=p(r),a=p(n(0)),l=p(n(8)),s=p(n(7)),i=p(n(6)),u=p(n(4)),c=p(n(3));function p(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){n.container.addEventListener("click",n.addSuperSelectToEvent),document.addEventListener("click",n.closeOnClickOutside)},n.componentWillUnmount=function(){n.container.removeEventListener("click",n.addSuperSelectToEvent),document.removeEventListener("click",n.closeOnClickOutside)},n.componentWillUpdate=function(e,t){t.open&&"function"==typeof n.props.onOpen?n.props.onOpen():t.open||"function"!=typeof n.props.onClose||n.props.onClose()},n.addSuperSelectToEvent=function(e){e.superSelect=n},n.closeOnClickOutside=function(e){var t=e.superSelect||!1;t&&t===n||n.setState({open:!1,q:"",pseudoHover:null})},n.getAllOptions=function(){return n.props.options||[]},n.getOptions=function(){var e=n.props.options||[],t=n.state.q,r=new l.default(e,{keys:n.props.searchKeys});return t.length?r.search(t):e.slice()},n.getValue=function(){var e=void 0;return void 0!==(e=n.props.valueLink?n.props.valueLink.value:n.props.value)&&null!==e||(e=n.props.multiple?[]:null),e},n.buildbutton=function(){return o.default.createElement(s.default,{label:n.props.label,contentLabelProvider:n.props.contentLabelProvider,open:n.state.open,value:n.getValue(),options:n.getOptions(),allOptions:n.getAllOptions(),valueKey:n.props.valueKey,labelKey:n.props.labelKey,multiple:n.props.multiple,toggle:n.toggle,maxLabels:n.props.maxLabels,noLabels:n.props.noLabels,tabIndex:n.props.tabIndex,allSelectedLabel:n.props.allSelectedLabel,moreSelectedLabel:n.props.moreSelectedLabel})},n.toggle=function(e){var t="boolean"==typeof e?e:!n.state.open;n.setState({open:t,q:t?n.state.q:"",pseudoHover:null})},n.isChecked=function(e,t){var r=n.getValue(),o=!1,a=!1,l=n.props.valueKey;return!!r&&(n.props.multiple?(a=r.filter(function(t,n){if(e[l]==t[l])return o=n,!0}).length>0,t?o:a):e[l]==r[l])},n.handleChange=function(e){var t=n.getValue(),r=void 0;n.props.multiple?!1!==(r=n.isChecked(e,!0))?t.splice(r,1):t.push(e):t=e,n.dispatchChanges(t)},n.dispatchChanges=function(e){n.props.valueLink?n.props.valueLink.requestChange(e):"function"==typeof n.props.onChange&&n.props.onChange(e),n.props.multiple||n.setState({open:!1,q:""})},n.clean=function(){n.dispatchChanges(n.props.multiple?[]:null)},n.selectAll=function(){n.dispatchChanges(n.getOptions())},n.handleChangeQ=function(e){n.setState({q:e.target.value,pseudoHover:null})},n.handleNavigationKeys=function(e){var t="Enter"===e.key,r=n.container,o=n.state.q,a=n.state.pseudoHover||0,l=n.state.open,s=!1;if(t&&e.preventDefault(),t&&!isNaN(a)&&l){var i=n.getOptions()[a]||!1;i&&n.handleChange(i)}switch(e.key){case"ArrowUp":a=a?a-1:0,l=!0;break;case"ArrowDown":a=a+1===n.getOptions().length?a:a+1,l=!0}["Escape","Tab"].includes(e.key)&&(l=!1,s=!0,o=""),n.setState({open:l,pseudoHover:a,q:o},function(){s&&r.focus()})},n.buildOptions=function(){return o.default.createElement(i.default,{options:n.getOptions(),optionRender:n.props.optionRender,handleNavigationKeys:n.handleNavigationKeys,isChecked:n.isChecked,handleChange:n.handleChange,currentHover:n.state.pseudoHover,labelKey:n.props.labelKey,valueKey:n.props.valueKey,actions:n.props.actions,multiple:n.props.multiple,allowCreate:n.props.allowCreate,currentQuery:n.state.q,noResultsLabel:n.props.noResultsLabel,key:"options-list"})},n.buildSearchBox=function(){return o.default.createElement(u.default,{searchArgument:n.state.q,searchArgumentChange:n.handleChangeQ,searchKeys:n.props.searchKeys,searchPlaceholder:n.props.searchPlaceholder,key:"search-box"})},n.buildActions=function(){var e=[];return n.props.options.length&&!0===n.props.multiple&&(e.push({label:n.props.selectAllLabel,handler:n.selectAll}),e.push({label:n.props.clearAllLabel,handler:n.clean})),e=e.concat(n.props.actions),n.state.q.length>0&&n.props.allowCreate&&e.push({label:n.props.getCreateText(n.state.q),handler:function(){n.props.onCreate(n.state.q,function(){return n.setState({q:""})})}}),o.default.createElement(c.default,{actions:e,key:"actions"})},n.buildContent=function(){var e=[];if(n.state.open)return n.props.searchBox&&e.push(n.buildSearchBox()),e.push(n.buildActions()),e.push(n.props.content||n.buildOptions()),o.default.createElement("div",{className:"super-select-content"},e)},n.render=function(){return o.default.createElement("div",{className:"super-select-container"+(n.state.open?" open":""),ref:function(e){return n.container=e},onKeyDown:n.handleNavigationKeys,tabIndex:n.props.tabIndex},n.buildbutton(),n.buildContent())},n.state={open:!1,pseudoHover:null,q:""},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),t}();f.defaultProps={actions:[],allSelectedLabel:"All",clearAllLabel:"✘ Clean Selection",labelKey:"label",maxLabels:!1,multiple:!0,noLabels:!1,options:[],searchBox:!0,searchKeys:["label"],searchPlaceholder:"Type to filter options...",selectAllLabel:"✓ Select all",valueKey:"value",allowCreate:!1,getCreateText:function(e){return'Create "'+e+'" option'},tabIndex:0,noResultsLabel:"Nothing found :/"},f.propTypes={actions:a.default.arrayOf(a.default.shape({handler:a.default.func.isRequired,label:a.default.string.isRequired,content:a.default.element})),allSelectedLabel:a.default.string,allItemsSelectedLabel:a.default.string,clearAllLabel:a.default.string,content:a.default.node,contentLabelProvider:a.default.func,groups:a.default.array,label:a.default.string.isRequired,labelKey:a.default.string,maxLabels:a.default.oneOfType([a.default.number,a.default.bool]),moreSelectedLabel:a.default.string,multiple:a.default.bool,noLabels:a.default.bool,onChange:a.default.func,onClose:a.default.func,onOpen:a.default.func,options:a.default.array,optionRender:a.default.func,searchBox:a.default.bool,searchKeys:a.default.arrayOf(a.default.string),searchPlaceholder:a.default.string,selectAllLabel:a.default.string,value:a.default.oneOfType([a.default.object,a.default.arrayOf(a.default.object)]),valueKey:a.default.string,valueLink:a.default.object,allowCreate:a.default.bool.isRequired,onCreate:a.default.func,getCreateText:a.default.func,tabIndex:a.default.number,noResultsLabel:a.default.string},t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=(r=n(13))&&r.__esModule?r:{default:r};t.default=o.default}]);