(self.webpackChunkraiffa_syamil=self.webpackChunkraiffa_syamil||[]).push([[499],{872:function(e){(function(){var t,n,i,r,o,a;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-o)/1e6},n=process.hrtime,r=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})(),a=1e9*process.uptime(),o=r-a):Date.now?(e.exports=function(){return Date.now()-i},i=Date.now()):(e.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)},888:(e,t,n)=>{"use strict";var i=n(47);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,o,a){if(a!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n,n}},7:(e,t,n)=>{e.exports=n(888)()},47:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},475:(e,t,n)=>{for(var i=n(872),r="undefined"===typeof window?n.g:window,o=["moz","webkit"],a="AnimationFrame",s=r["request"+a],l=r["cancel"+a]||r["cancelRequest"+a],c=0;!s&&c<o.length;c++)s=r[o[c]+"Request"+a],l=r[o[c]+"Cancel"+a]||r[o[c]+"CancelRequest"+a];if(!s||!l){var p=0,u=0,d=[];s=function(e){if(0===d.length){var t=i(),n=Math.max(0,16.666666666666668-(t-p));p=n+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(p)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return d.push({handle:++u,callback:e,cancelled:!1}),u},l=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return s.call(r,e)},e.exports.cancel=function(){l.apply(r,arguments)},e.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=s,e.cancelAnimationFrame=l}},499:(e,t,n)=>{"use strict";var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(791),a=d(o),s=d(n(7)),l=d(n(613)),c=d(n(475)),p=d(n(645)),u=d(n(550));function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}var h=function(){},m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setRef=function(e){return n.inner=e},n.setHeightOffset=function(){n.setState({height:n.inner?n.inner.offsetHeight:""}),n.resizeTicking=!1},n.getScrollY=function(){return void 0!==n.props.parent().pageYOffset?n.props.parent().pageYOffset:void 0!==n.props.parent().scrollTop?n.props.parent().scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},n.getViewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},n.getDocumentHeight=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,t.scrollHeight,e.offsetHeight,t.offsetHeight,e.clientHeight,t.clientHeight)},n.getElementPhysicalHeight=function(e){return Math.max(e.offsetHeight,e.clientHeight)},n.getElementHeight=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},n.getScrollerPhysicalHeight=function(){var e=n.props.parent();return e===window||e===document.body?n.getViewportHeight():n.getElementPhysicalHeight(e)},n.getScrollerHeight=function(){var e=n.props.parent();return e===window||e===document.body?n.getDocumentHeight():n.getElementHeight(e)},n.isOutOfBound=function(e){var t=e<0,i=n.getScrollerPhysicalHeight(),r=n.getScrollerHeight();return t||e+i>r},n.handleScroll=function(){n.scrollTicking||(n.scrollTicking=!0,(0,c.default)(n.update))},n.handleResize=function(){n.resizeTicking||(n.resizeTicking=!0,(0,c.default)(n.setHeightOffset))},n.unpin=function(){n.props.onUnpin(),n.setState({translateY:"-100%",className:"headroom headroom--unpinned",animation:!0,state:"unpinned"})},n.unpinSnap=function(){n.props.onUnpin(),n.setState({translateY:"-100%",className:"headroom headroom--unpinned headroom-disable-animation",animation:!1,state:"unpinned"})},n.pin=function(){n.props.onPin(),n.setState({translateY:0,className:"headroom headroom--pinned",animation:!0,state:"pinned"})},n.unfix=function(){n.props.onUnfix(),n.setState({translateY:0,className:"headroom headroom--unfixed headroom-disable-animation",animation:!1},(function(){setTimeout((function(){n.setState({state:"unfixed"})}),0)}))},n.update=function(){if(n.currentScrollY=n.getScrollY(),!n.isOutOfBound(n.currentScrollY)){var e=(0,p.default)(n.lastKnownScrollY,n.currentScrollY,n.props,n.state).action;"pin"===e?n.pin():"unpin"===e?n.unpin():"unpin-snap"===e?n.unpinSnap():"unfix"===e&&n.unfix()}n.lastKnownScrollY=n.currentScrollY,n.scrollTicking=!1},n.currentScrollY=0,n.lastKnownScrollY=0,n.scrollTicking=!1,n.resizeTicking=!1,n.eventListenerOptions=!1,n.state={state:"unfixed",translateY:0,className:"headroom headroom--unfixed"},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){return e.disable&&"unfixed"!==t.state?{translateY:0,className:"headroom headroom--unfixed headroom-disable-animation",animation:!1,state:"unfixed"}:null}}]),r(t,[{key:"componentDidMount",value:function(){this.setHeightOffset(),this.eventListenerOptions=!!(0,u.default)()&&{passive:!0,capture:!1},this.props.disable||(this.props.parent().addEventListener("scroll",this.handleScroll,this.eventListenerOptions),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize,this.eventListenerOptions))}},{key:"shouldComponentUpdate",value:function(e,t){return!(0,l.default)(this.props,e)||!(0,l.default)(this.state,t)}},{key:"componentDidUpdate",value:function(e,t){e.children!==this.props.children&&this.setHeightOffset(),!e.disable&&this.props.disable?(this.props.parent().removeEventListener("scroll",this.handleScroll,this.eventListenerOptions),this.props.parent().removeEventListener("resize",this.handleResize,this.eventListenerOptions),"unfixed"!==t.state&&"unfixed"===this.state.state&&this.props.onUnfix()):e.disable&&!this.props.disable&&(this.props.parent().addEventListener("scroll",this.handleScroll,this.eventListenerOptions),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize,this.eventListenerOptions)),e.pin!==this.props.pin&&this.handleScroll()}},{key:"componentWillUnmount",value:function(){this.props.parent()&&(this.props.parent().removeEventListener("scroll",this.handleScroll,this.eventListenerOptions),this.props.parent().removeEventListener("resize",this.handleResize,this.eventListenerOptions)),window.removeEventListener("scroll",this.handleScroll,this.eventListenerOptions)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.tag,r=f(e,["className","tag"]);delete r.onUnpin,delete r.onPin,delete r.onUnfix,delete r.disableInlineStyles,delete r.disable,delete r.pin,delete r.parent,delete r.children,delete r.upTolerance,delete r.downTolerance,delete r.pinStart,delete r.calcHeightOnResize;var o=r.style,s=r.wrapperStyle,l=f(r,["style","wrapperStyle"]),c={position:this.props.disable||"unfixed"===this.state.state?"relative":"fixed",top:0,left:0,right:0,zIndex:1,WebkitTransform:"translate3D(0, "+this.state.translateY+", 0)",MsTransform:"translate3D(0, "+this.state.translateY+", 0)",transform:"translate3D(0, "+this.state.translateY+", 0)"},p=this.state.className;this.state.animation&&(c=i({},c,{WebkitTransition:"all .2s ease-in-out",MozTransition:"all .2s ease-in-out",OTransition:"all .2s ease-in-out",transition:"all .2s ease-in-out"}),p+=" headroom--scrolled"),c=this.props.disableInlineStyles?o:i({},c,o);var u=i({},s,{height:this.state.height?this.state.height:null}),d=t?t+" headroom-wrapper":"headroom-wrapper";return a.default.createElement(n,{style:u,className:d},a.default.createElement("div",i({ref:this.setRef},l,{style:c,className:p}),this.props.children))}}]),t}(o.Component);m.propTypes={className:s.default.string,parent:s.default.func,children:s.default.any.isRequired,disableInlineStyles:s.default.bool,disable:s.default.bool,pin:s.default.bool,upTolerance:s.default.number,downTolerance:s.default.number,onPin:s.default.func,onUnpin:s.default.func,onUnfix:s.default.func,wrapperStyle:s.default.object,pinStart:s.default.number,style:s.default.object,calcHeightOnResize:s.default.bool,tag:s.default.string},m.defaultProps={parent:function(){return window},disableInlineStyles:!1,disable:!1,pin:!1,upTolerance:5,downTolerance:0,onPin:h,onUnpin:h,onUnfix:h,wrapperStyle:{},pinStart:0,calcHeightOnResize:!0,tag:"div"},t.Z=m},645:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=t>=e?"down":"up",o=Math.abs(t-e);return n.disable?{action:"none",scrollDirection:r,distanceScrolled:o}:n.pin?{action:"pinned"!==i.state?"pin":"none",scrollDirection:r,distanceScrolled:o}:t<=n.pinStart&&"unfixed"!==i.state?{action:"unfix",scrollDirection:r,distanceScrolled:o}:t<=i.height&&"down"===r&&"unfixed"===i.state?{action:"none",scrollDirection:r,distanceScrolled:o}:t>i.height+n.pinStart&&"down"===r&&"unfixed"===i.state?{action:"unpin-snap",scrollDirection:r,distanceScrolled:o}:"down"===r&&["pinned","unfixed"].indexOf(i.state)>=0&&t>i.height+n.pinStart&&o>n.downTolerance?{action:"unpin",scrollDirection:r,distanceScrolled:o}:"up"===r&&o>n.upTolerance&&["pinned","unfixed"].indexOf(i.state)<0||"up"===r&&t<=i.height&&["pinned","unfixed"].indexOf(i.state)<0?{action:"pin",scrollDirection:r,distanceScrolled:o}:{action:"none",scrollDirection:r,distanceScrolled:o}}},550:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=!1;try{var t={get passive(){return e=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(n){e=!1}return e}},613:e=>{e.exports=function(e,t,n,i){var r=n?n.call(i,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var c=o[l];if(!s(c))return!1;var p=e[c],u=t[c];if(!1===(r=n?n.call(i,p,u,c):void 0)||void 0===r&&p!==u)return!1}return!0}}}]);
//# sourceMappingURL=499.1487ee5e.chunk.js.map