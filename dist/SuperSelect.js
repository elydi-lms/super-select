var SuperSelect=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=17)}([function(e,t,n){e.exports=n(12)()},function(e,t,n){"use strict";e.exports=n(15)},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=l(r),a=l(n(0));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getContent=function(){return n.props.content||n.props.label},n.render=function(){return o.default.createElement("li",{className:"super-select-action",onClick:n.props.handler},n.getContent())},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),t}();i.defaultProps={content:null},i.propTypes={handler:a.default.func.isRequired,label:a.default.string.isRequired,content:a.default.any},t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(1),a=s(o),l=s(n(0)),i=s(n(3));function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return n=o=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.render=function(){return a.default.createElement("ul",{className:"super-select-actions"},o.props.actions.map(function(e,t){return a.default.createElement(i.default,r({},e,{key:t}))}))},u(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),t}();c.defaultProps={actions:[]},c.propTypes={actions:l.default.array},t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=i(o),l=i(n(0));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.handleKeyPress=function(e){["ArrowUp","ArrowDown"].includes(e.key)&&e.preventDefault()},s(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){this.q.focus()}},{key:"render",value:function(){var e=this;return a.default.createElement("div",{className:"super-select-options-search-container"},a.default.createElement("input",{className:"form-control",type:"search",value:this.props.searchArgument,onChange:this.props.searchArgumentChange,onKeyDown:this.handleKeyPress,placeholder:this.props.searchPlaceholder,ref:function(t){e.q=t}}))}}]),t}();u.defaultProps={searchPlaceholder:"",searchArgument:"",searchArgumentChange:null},u.propTypes={searchPlaceholder:l.default.string.isRequired,searchArgument:l.default.string,searchArgumentChange:l.default.func},t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=i(o),l=i(n(0));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.handleChange=function(){r.props.onChange(r.props.option)},s(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this.props.multiple?"checkbox":"radio",t="super-select-options-list-item";return this.props.pseudoHover&&(t+=" hover"),a.default.createElement("li",{className:t},a.default.createElement("label",null,a.default.createElement("input",{type:e,checked:this.props.checked,onChange:this.handleChange,tabIndex:"-1"}),this.props.option[this.props.labelKey]))}}]),t}();u.defaultProps={pseudoHover:!1,checked:!1,onChange:null,labelKey:"name",multiple:!1,option:{}},u.propTypes={option:l.default.object,onChange:l.default.func,checked:l.default.bool,handleChange:l.default.func,labelKey:l.default.string,pseudoHover:l.default.bool,multiple:l.default.bool},t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),l=u(a),i=u(n(0)),s=u(n(6));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=Array(a),u=0;u<a;u++)i[u]=arguments[u];return n=o=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.renderOptions=function(){var e=o.props.options;return e.length?e.map(function(e,t){var n={index:t,pseudoHover:t===o.props.currentHover,checked:o.props.isChecked(e),option:e,onChange:o.props.handleChange,labelKey:o.props.labelKey,multiple:o.props.multiple};return o.props.optionRender?o.props.optionRender(n):l.default.createElement(s.default,r({},n,{key:t}))}):l.default.createElement("li",{className:"super-select-options-list-item not-found",key:"not-found"},o.props.noResultsLabel)},c(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"super-select-options-container"},l.default.createElement("ul",{className:"super-select-options-list"},this.renderOptions()))}}]),t}();p.defaultProps={options:[],isChecked:null,handleChange:null,currentHover:!1,multiple:!1,labelKey:"name",allowCreate:!1},p.propTypes={options:i.default.array,isChecked:i.default.func,handleChange:i.default.func,currentHover:i.default.oneOfType([i.default.bool,i.default.number]),multiple:i.default.bool,labelKey:i.default.string,allowCreate:i.default.bool,optionRender:i.default.func,noResultsLabel:i.default.string},t.default=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=l(r),a=l(n(0));function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,l=Array(a),s=0;s<a;s++)l[s]=arguments[s];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.getClassName=function(){return"super-select-button "+(r.props.open?"open":"")},r.getLabel=function(){var e=r.props.label;return"function"==typeof r.props.contentLabelProvider&&(e=r.props.contentLabelProvider()),o.default.createElement("span",{id:"label",className:"super-select-button-label",key:"label-text"},e)},r.render=function(){var e=r.getClassName(),t=[],n=0,a=r.props.value;return t.push(r.getLabel()),a&&!1===r.props.noLabels&&(r.props.multiple&&r.props.value.length?(t.push(": "),r.props.value.length===r.props.allOptions.length?t.push(o.default.createElement("span",{className:"super-select-button-label-value",key:"all"},r.props.allSelectedLabel)):!0===r.props.noLabels?t.push(o.default.createElement("span",{className:"super-select-button-label-value",key:"allCount"},r.props.value.length)):(r.props.value.map(function(e,a){(!1===r.props.maxLabels||n<r.props.maxLabels)&&(t.push(o.default.createElement("span",{className:"super-select-button-label-value",key:a},e[r.props.labelKey])),n++)}),!1!==r.props.maxLabels&&r.props.maxLabels<r.props.value.length&&t.push(o.default.createElement("span",{className:"super-select-button-label-value",key:"-1"},r.props.moreSelectedLabel?r.props.moreSelectedLabel:"mais ".concat((r.props.value.length-r.props.maxLabels).toString()))))):!r.props.multiple&&r.props.value[r.props.labelKey]&&t.push(o.default.createElement("span",{className:"super-select-button-label-value",key:"selected"},r.props.value[r.props.labelKey]))),o.default.createElement("label",{className:e,onClick:r.props.toggle},t)},i(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),t}();s.propTypes={label:a.default.string,contentLabelProvider:a.default.func,open:a.default.bool,noLabels:a.default.bool,multiple:a.default.bool,allOptions:a.default.arrayOf(a.default.object),allSelectedLabel:a.default.string,maxLabels:a.default.oneOfType([a.default.number,a.default.bool]),labelKey:a.default.string,moreSelectedLabel:a.default.string,value:a.default.oneOfType([a.default.array,a.default.object]),toggle:a.default.func},t.default=s},function(e,t,n){
/*!
 * Fuse.js v3.2.0 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";e.exports=function(e){return"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(5),a=n(7),l=n(4),i=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,a=n.distance,i=void 0===a?100:a,s=n.threshold,u=void 0===s?.6:s,c=n.maxPatternLength,p=void 0===c?32:c,f=n.isCaseSensitive,d=void 0!==f&&f,h=n.tokenSeparator,v=void 0===h?/ +/g:h,y=n.findAllMatches,b=void 0!==y&&y,g=n.minMatchCharLength,m=void 0===g?1:g;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:i,threshold:u,maxPatternLength:p,isCaseSensitive:d,tokenSeparator:v,findAllMatches:b,minMatchCharLength:m},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=p&&(this.patternAlphabet=l(this.pattern))}return r(e,[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,n=t.maxPatternLength,r=t.tokenSeparator;if(this.pattern.length>n)return o(e,this.pattern,r);var l=this.options,i=l.location,s=l.distance,u=l.threshold,c=l.findAllMatches,p=l.minMatchCharLength;return a(e,this.pattern,this.patternAlphabet,{location:i,distance:s,threshold:u,findAllMatches:c,minMatchCharLength:p})}}]),e}();e.exports=i},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){return function e(t,n,o){if(n){var a=n.indexOf("."),l=n,i=null;-1!==a&&(l=n.slice(0,a),i=n.slice(a+1));var s=t[l];if(null!==s&&void 0!==s)if(i||"string"!=typeof s&&"number"!=typeof s)if(r(s))for(var u=0,c=s.length;u<c;u+=1)e(s[u],i,o);else i&&e(s,i,o);else o.push(s.toString())}else o.push(t);return o}(e,t,[])}},function(e,t,n){"use strict";e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,o=-1,a=0,l=e.length;a<l;a+=1){var i=e[a];i&&-1===r?r=a:i||-1===r||((o=a-1)-r+1>=t&&n.push([r,o]),r=-1)}return e[a-1]&&a-r>=t&&n.push([r,a-1]),n}},function(e,t,n){"use strict";e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var o=0;o<n;o+=1)t[e.charAt(o)]|=1<<n-o-1;return t}},function(e,t,n){"use strict";var r=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(r,"\\$&").replace(n,"|")),a=e.match(o),l=!!a,i=[];if(l)for(var s=0,u=a.length;s<u;s+=1){var c=a[s];i.push([e.indexOf(c),c.length-1])}return{score:l?.5:1,isMatch:l,matchedIndices:i}}},function(e,t,n){"use strict";e.exports=function(e,t){var n=t.errors,r=void 0===n?0:n,o=t.currentLocation,a=void 0===o?0:o,l=t.expectedLocation,i=void 0===l?0:l,s=t.distance,u=void 0===s?100:s,c=r/e.length,p=Math.abs(i-a);return u?c+p/u:p?1:c}},function(e,t,n){"use strict";var r=n(6),o=n(3);e.exports=function(e,t,n,a){for(var l=a.location,i=void 0===l?0:l,s=a.distance,u=void 0===s?100:s,c=a.threshold,p=void 0===c?.6:c,f=a.findAllMatches,d=void 0!==f&&f,h=a.minMatchCharLength,v=void 0===h?1:h,y=i,b=e.length,g=p,m=e.indexOf(t,y),O=t.length,_=[],k=0;k<b;k+=1)_[k]=0;if(-1!==m){var w=r(t,{errors:0,currentLocation:m,expectedLocation:y,distance:u});if(g=Math.min(w,g),-1!==(m=e.lastIndexOf(t,y+O))){var C=r(t,{errors:0,currentLocation:m,expectedLocation:y,distance:u});g=Math.min(C,g)}}m=-1;for(var x=[],S=1,j=O+b,P=1<<O-1,L=0;L<O;L+=1){for(var E=0,A=j;E<A;)r(t,{errors:L,currentLocation:y+A,expectedLocation:y,distance:u})<=g?E=A:j=A,A=Math.floor((j-E)/2+E);j=A;var M=Math.max(1,y-A+1),T=d?b:Math.min(y+A,b)+O,R=Array(T+2);R[T+1]=(1<<L)-1;for(var K=T;K>=M;K-=1){var I=K-1,N=n[e.charAt(I)];if(N&&(_[I]=1),R[K]=(R[K+1]<<1|1)&N,0!==L&&(R[K]|=(x[K+1]|x[K])<<1|1|x[K+1]),R[K]&P&&(S=r(t,{errors:L,currentLocation:I,expectedLocation:y,distance:u}))<=g){if(g=S,(m=I)<=y)break;M=Math.max(1,2*y-m)}}if(r(t,{errors:L+1,currentLocation:y,expectedLocation:y,distance:u})>g)break;x=R}return{isMatch:m>=0,score:0===S?.001:S,matchedIndices:o(_,v)}}},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=n(2),l=n(0),i=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,l=n.distance,i=void 0===l?100:l,s=n.threshold,u=void 0===s?.6:s,c=n.maxPatternLength,p=void 0===c?32:c,f=n.caseSensitive,d=void 0!==f&&f,h=n.tokenSeparator,v=void 0===h?/ +/g:h,y=n.findAllMatches,b=void 0!==y&&y,g=n.minMatchCharLength,m=void 0===g?1:g,O=n.id,_=void 0===O?null:O,k=n.keys,w=void 0===k?[]:k,C=n.shouldSort,x=void 0===C||C,S=n.getFn,j=void 0===S?a:S,P=n.sortFn,L=void 0===P?function(e,t){return e.score-t.score}:P,E=n.tokenize,A=void 0!==E&&E,M=n.matchAllTokens,T=void 0!==M&&M,R=n.includeMatches,K=void 0!==R&&R,I=n.includeScore,N=void 0!==I&&I,q=n.verbose,H=void 0!==q&&q;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:i,threshold:u,maxPatternLength:p,isCaseSensitive:d,tokenSeparator:v,findAllMatches:b,minMatchCharLength:m,id:_,keys:w,includeMatches:K,includeScore:N,shouldSort:x,getFn:j,sortFn:L,verbose:H,tokenize:A,matchAllTokens:T},this.setCollection(t)}return r(e,[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){this._log('---------\nSearch pattern: "'+e+'"');var t=this._prepareSearchers(e),n=t.tokenSearchers,r=t.fullSearcher,o=this._search(n,r),a=o.weights,l=o.results;return this._computeScore(a,l),this.options.shouldSort&&this._sort(l),this._format(l)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,a=n.length;r<a;r+=1)t.push(new o(n[r],this.options));return{tokenSearchers:t,fullSearcher:new o(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],n=this.list,r={},o=[];if("string"==typeof n[0]){for(var a=0,l=n.length;a<l;a+=1)this._analyze({key:"",value:n[a],record:a,index:a},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t});return{weights:null,results:o}}for(var i={},s=0,u=n.length;s<u;s+=1)for(var c=n[s],p=0,f=this.options.keys.length;p<f;p+=1){var d=this.options.keys[p];if("string"!=typeof d){if(i[d.name]={weight:1-d.weight||1},d.weight<=0||d.weight>1)throw new Error("Key weight has to be > 0 and <= 1");d=d.name}else i[d]={weight:1};this._analyze({key:d,value:this.options.getFn(c,d),record:c,index:s},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t})}return{weights:i,results:o}}},{key:"_analyze",value:function(e,t){var n=e.key,r=e.arrayIndex,o=void 0===r?-1:r,a=e.value,i=e.record,s=e.index,u=t.tokenSearchers,c=void 0===u?[]:u,p=t.fullSearcher,f=void 0===p?[]:p,d=t.resultMap,h=void 0===d?{}:d,v=t.results,y=void 0===v?[]:v;if(void 0!==a&&null!==a){var b=!1,g=-1,m=0;if("string"==typeof a){this._log("\nKey: "+(""===n?"-":n));var O=f.search(a);if(this._log('Full text: "'+a+'", score: '+O.score),this.options.tokenize){for(var _=a.split(this.options.tokenSeparator),k=[],w=0;w<c.length;w+=1){var C=c[w];this._log('\nPattern: "'+C.pattern+'"');for(var x=!1,S=0;S<_.length;S+=1){var j=_[S],P=C.search(j),L={};P.isMatch?(L[j]=P.score,b=!0,x=!0,k.push(P.score)):(L[j]=1,this.options.matchAllTokens||k.push(1)),this._log('Token: "'+j+'", score: '+L[j])}x&&(m+=1)}g=k[0];for(var E=k.length,A=1;A<E;A+=1)g+=k[A];g/=E,this._log("Token score average:",g)}var M=O.score;g>-1&&(M=(M+g)/2),this._log("Score average:",M);var T=!this.options.tokenize||!this.options.matchAllTokens||m>=c.length;if(this._log("\nCheck Matches: "+T),(b||O.isMatch)&&T){var R=h[s];R?R.output.push({key:n,arrayIndex:o,value:a,score:M,matchedIndices:O.matchedIndices}):(h[s]={item:i,output:[{key:n,arrayIndex:o,value:a,score:M,matchedIndices:O.matchedIndices}]},y.push(h[s]))}}else if(l(a))for(var K=0,I=a.length;K<I;K+=1)this._analyze({key:n,arrayIndex:K,value:a[K],record:i,index:s},{resultMap:h,results:y,tokenSearchers:c,fullSearcher:f})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,r=t.length;n<r;n+=1){for(var o=t[n].output,a=o.length,l=0,i=1,s=0;s<a;s+=1){var u=e?e[o[s].key].weight:1,c=(1===u?o[s].score:o[s].score||.001)*u;1!==u?i=Math.min(i,c):(o[s].nScore=c,l+=c)}t[n].score=1===i?l/a:i,this._log(t[n])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];this._log("\n\nOutput:\n\n",JSON.stringify(e));var n=[];this.options.includeMatches&&n.push(function(e,t){var n=e.output;t.matches=[];for(var r=0,o=n.length;r<o;r+=1){var a=n[r];if(0!==a.matchedIndices.length){var l={indices:a.matchedIndices,value:a.value};a.key&&(l.key=a.key),a.hasOwnProperty("arrayIndex")&&a.arrayIndex>-1&&(l.arrayIndex=a.arrayIndex),t.matches.push(l)}}}),this.options.includeScore&&n.push(function(e,t){t.score=e.score});for(var r=0,o=e.length;r<o;r+=1){var a=e[r];if(this.options.id&&(a.item=this.options.getFn(a.item,this.options.id)[0]),n.length){for(var l={item:a.item},i=0,s=n.length;i<s;i+=1)n[i](a,l);t.push(l)}else t.push(a.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}]),e}();e.exports=i}])},e.exports=r()},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,a,l,i){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,a,l,i],c=0;(s=new Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}},function(e,t,n){"use strict";var r=n(2),o=n(11),a=n(10);e.exports=function(){function e(e,t,n,r,l,i){i!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports={}},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,l,i=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var u in n=Object(arguments[s]))o.call(n,u)&&(i[u]=n[u]);if(r){l=r(n);for(var c=0;c<l.length;c++)a.call(n,l[c])&&(i[l[c]]=n[l[c]])}}return i}},function(e,t,n){"use strict";
/** @license React v16.2.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(14),o=n(13),a=n(2),l="function"==typeof Symbol&&Symbol.for,i=l?Symbol.for("react.element"):60103,s=l?Symbol.for("react.call"):60104,u=l?Symbol.for("react.return"):60105,c=l?Symbol.for("react.portal"):60106,p=l?Symbol.for("react.fragment"):60107,f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);throw(t=Error(n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.")).name="Invariant Violation",t.framesToPop=1,t}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function v(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||h}function y(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||h}function b(){}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&d("85"),this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var g=y.prototype=new b;function m(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||h}g.constructor=y,r(g,v.prototype),g.isPureReactComponent=!0;var O=m.prototype=new b;O.constructor=m,r(O,v.prototype),O.unstable_isAsyncReactComponent=!0,O.render=function(){return this.props.children};var _={current:null},k=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r,o={},a=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,r)&&!w.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:i,type:e,key:a,ref:l,props:o,_owner:_.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var S=/\/+/g,j=[];function P(e,t,n,r){if(j.length){var o=j.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function L(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>j.length&&j.push(e)}function E(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a=!1;if(null===e)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case i:case s:case u:case c:a=!0}}if(a)return n(r,e,""===t?"."+A(e,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var p=t+A(o=e[l],l);a+=E(o,p,n,r)}else if("function"==typeof(p=null===e||void 0===e?null:"function"==typeof(p=f&&e[f]||e["@@iterator"])?p:null))for(e=p.call(e),l=0;!(o=e.next()).done;)a+=E(o=o.value,p=t+A(o,l++),n,r);else"object"===o&&d("31","[object Object]"==(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return a}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function T(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?R(e,r,n,a.thatReturnsArgument):null!=e&&(x(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(S,"$&/")+"/")+n,e={$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function R(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(S,"$&/")+"/"),t=P(t,a,r,o),null==e||E(e,"",T,t),L(t)}var K={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return R(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=P(null,null,t,n),null==e||E(e,"",M,t),L(t)},count:function(e){return null==e?0:E(e,"",a.thatReturnsNull,null)},toArray:function(e){var t=[];return R(e,t,null,a.thatReturnsArgument),t},only:function(e){return x(e)||d("143"),e}},Component:v,PureComponent:y,unstable_AsyncComponent:m,Fragment:p,createElement:C,cloneElement:function(e,t,n){var o=r({},e.props),a=e.key,l=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,s=_.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)k.call(t,c)&&!w.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){u=Array(c);for(var p=0;p<c;p++)u[p]=arguments[p+2];o.children=u}return{$$typeof:i,type:e.type,key:a,ref:l,props:o,_owner:s}},createFactory:function(e){var t=C.bind(null,e);return t.type=e,t},isValidElement:x,version:"16.2.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:_,assign:r}},I=Object.freeze({default:K}),N=I&&K||I;e.exports=N.default?N.default:N},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=p(r),a=p(n(0)),l=p(n(9)),i=p(n(8)),s=p(n(7)),u=p(n(5)),c=p(n(4));function p(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){n.container.addEventListener("click",n.addSuperSelectToEvent),document.addEventListener("click",n.closeOnClickOutside)},n.componentWillUnmount=function(){n.container.removeEventListener("click",n.addSuperSelectToEvent),document.removeEventListener("click",n.closeOnClickOutside)},n.componentWillUpdate=function(e,t){t.open&&"function"==typeof n.props.onOpen?n.props.onOpen():t.open||"function"!=typeof n.props.onClose||n.props.onClose()},n.addSuperSelectToEvent=function(e){e.superSelect=n},n.closeOnClickOutside=function(e){var t=e.superSelect||!1;t&&t===n||n.setState({open:!1,q:"",pseudoHover:null})},n.getAllOptions=function(){return n.props.options||[]},n.getOptions=function(){var e=n.props.options||[],t=n.state.q,r=new l.default(e,{keys:n.props.searchKeys});return t.length?r.search(t):e.slice()},n.getValue=function(){var e=void 0;return void 0!==(e=n.props.valueLink?n.props.valueLink.value:n.props.value)&&null!==e||(e=n.props.multiple?[]:null),e},n.buildbutton=function(){return o.default.createElement(i.default,{label:n.props.label,contentLabelProvider:n.props.contentLabelProvider,open:n.state.open,value:n.getValue(),options:n.getOptions(),allOptions:n.getAllOptions(),valueKey:n.props.valueKey,labelKey:n.props.labelKey,multiple:n.props.multiple,toggle:n.toggle,maxLabels:n.props.maxLabels,noLabels:n.props.noLabels,tabIndex:n.props.tabIndex,allSelectedLabel:n.props.allSelectedLabel,moreSelectedLabel:n.props.moreSelectedLabel})},n.toggle=function(e){var t="boolean"==typeof e?e:!n.state.open;n.setState({open:t,q:t?n.state.q:"",pseudoHover:null})},n.isChecked=function(e,t){var r=n.getValue(),o=!1,a=!1,l=n.props.valueKey;return!!r&&(n.props.multiple?(a=r.filter(function(t,n){if(e[l]==t[l])return o=n,!0}).length>0,t?o:a):e[l]==r[l])},n.handleChange=function(e){var t=n.getValue(),r=void 0;n.props.multiple?!1!==(r=n.isChecked(e,!0))?t.splice(r,1):t.push(e):t=e,n.dispatchChanges(t)},n.dispatchChanges=function(e){n.props.valueLink?n.props.valueLink.requestChange(e):"function"==typeof n.props.onChange&&n.props.onChange(e),n.props.multiple||n.setState({open:!1,q:""})},n.clean=function(){n.dispatchChanges(n.props.multiple?[]:null)},n.selectAll=function(){n.dispatchChanges(n.getOptions())},n.handleChangeQ=function(e){n.setState({q:e.target.value,pseudoHover:null})},n.handleNavigationKeys=function(e){var t="Enter"===e.key,r=n.container,o=n.state.q,a=n.state.pseudoHover||0,l=n.state.open,i=!1;if(t&&e.preventDefault(),t&&!isNaN(a)&&l){var s=n.getOptions()[a]||!1;s&&n.handleChange(s)}switch(e.key){case"ArrowUp":a=a?a-1:0,l=!0;break;case"ArrowDown":a=a+1===n.getOptions().length?a:a+1,l=!0}["Escape","Tab"].includes(e.key)&&(l=!1,i=!0,o=""),n.setState({open:l,pseudoHover:a,q:o},function(){i&&r.focus()})},n.buildOptions=function(){return o.default.createElement(s.default,{options:n.getOptions(),optionRender:n.props.optionRender,handleNavigationKeys:n.handleNavigationKeys,isChecked:n.isChecked,handleChange:n.handleChange,currentHover:n.state.pseudoHover,labelKey:n.props.labelKey,valueKey:n.props.valueKey,actions:n.props.actions,multiple:n.props.multiple,allowCreate:n.props.allowCreate,currentQuery:n.state.q,noResultsLabel:n.props.noResultsLabel,key:"options-list"})},n.buildSearchBox=function(){return o.default.createElement(u.default,{searchArgument:n.state.q,searchArgumentChange:n.handleChangeQ,searchKeys:n.props.searchKeys,searchPlaceholder:n.props.searchPlaceholder,key:"search-box"})},n.buildActions=function(){var e=[];return n.props.options.length&&!0===n.props.multiple&&(e.push({label:n.props.selectAllLabel,handler:n.selectAll}),e.push({label:n.props.clearAllLabel,handler:n.clean})),e=e.concat(n.props.actions),n.state.q.length>0&&n.props.allowCreate&&e.push({label:n.props.getCreateText(n.state.q),handler:function(){n.props.onCreate(n.state.q,function(){return n.setState({q:""})})}}),o.default.createElement(c.default,{actions:e,key:"actions"})},n.buildContent=function(){var e=[];if(n.state.open)return n.props.searchBox&&e.push(n.buildSearchBox()),e.push(n.buildActions()),e.push(n.props.content||n.buildOptions()),o.default.createElement("div",{className:"super-select-content"},e)},n.render=function(){return o.default.createElement("div",{className:"super-select-container"+(n.state.open?" open":""),ref:function(e){return n.container=e},onKeyDown:n.handleNavigationKeys,tabIndex:n.props.tabIndex},n.buildbutton(),n.buildContent())},n.state={open:!1,pseudoHover:null,q:""},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),t}();f.defaultProps={actions:[],allSelectedLabel:"All",clearAllLabel:"✘ Clean Selection",labelKey:"label",maxLabels:!1,multiple:!0,noLabels:!1,options:[],searchBox:!0,searchKeys:["label"],searchPlaceholder:"Type to filter options...",selectAllLabel:"✓ Select all",valueKey:"value",allowCreate:!1,getCreateText:function(e){return'Create "'+e+'" option'},tabIndex:0,noResultsLabel:"Nothing found :/"},f.propTypes={actions:a.default.arrayOf(a.default.shape({handler:a.default.func.isRequired,label:a.default.string.isRequired,content:a.default.element})),allSelectedLabel:a.default.string,allItemsSelectedLabel:a.default.string,clearAllLabel:a.default.string,content:a.default.node,contentLabelProvider:a.default.func,groups:a.default.array,label:a.default.string.isRequired,labelKey:a.default.string,maxLabels:a.default.oneOfType([a.default.number,a.default.bool]),moreSelectedLabel:a.default.string,multiple:a.default.bool,noLabels:a.default.bool,onChange:a.default.func,onClose:a.default.func,onOpen:a.default.func,options:a.default.array,optionRender:a.default.func,searchBox:a.default.bool,searchKeys:a.default.arrayOf(a.default.string),searchPlaceholder:a.default.string,selectAllLabel:a.default.string,value:a.default.oneOfType([a.default.object,a.default.arrayOf(a.default.object)]),valueKey:a.default.string,valueLink:a.default.object,allowCreate:a.default.bool.isRequired,onCreate:a.default.func,getCreateText:a.default.func,tabIndex:a.default.number,noResultsLabel:a.default.string},t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=(r=n(16))&&r.__esModule?r:{default:r};t.default=o.default}]);