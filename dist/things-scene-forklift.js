!function(Q){var e={};function t(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return Q[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=Q,t.c=e,t.d=function(Q,e,o){t.o(Q,e)||Object.defineProperty(Q,e,{enumerable:!0,get:o})},t.r=function(Q){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},t.t=function(Q,e){if(1&e&&(Q=t(Q)),8&e)return Q;if(4&e&&"object"==typeof Q&&Q&&Q.__esModule)return Q;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:Q}),2&e&&"string"!=typeof Q)for(var n in Q)t.d(o,n,function(e){return Q[e]}.bind(null,n));return o},t.n=function(Q){var e=Q&&Q.__esModule?function(){return Q.default}:function(){return Q};return t.d(e,"a",e),e},t.o=function(Q,e){return Object.prototype.hasOwnProperty.call(Q,e)},t.p="",t(t.s=1)}([function(Q,e){Q.exports=scene},function(Q,e,t){Q.exports=t(2)},function(Q,e,t){"use strict";t.r(e);var o=t(0);const n={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"number",label:"depth",name:"depth",property:"depth"}]};class i extends(Object(o.RectPath)(o.Shape)){is3dish(){return!0}_draw(Q){var{left:e,top:t,width:o,height:n}=this.bounds,{x:i,y:r}=this.center,l=o/2,R=n/2;Q.beginPath(),Q.ellipse(i,r,l,R,0,0,2*Math.PI),Q.fillStyle="#389fdb",Q.fill(),Q.beginPath(),Q.ellipse(i,r,l,R,0,0,2*Math.PI),this.model.fillStyle={type:"pattern",fitPattern:!0,image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAC0CAYAAADRuGMkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQzJERUQzRDE5OEMxMUU2ODc5QkUwNTJCQUYxRUI5QyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQzJERUQzRTE5OEMxMUU2ODc5QkUwNTJCQUYxRUI5QyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJDMkRFRDNCMTk4QzExRTY4NzlCRTA1MkJBRjFFQjlDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJDMkRFRDNDMTk4QzExRTY4NzlCRTA1MkJBRjFFQjlDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DfgmtwAAD0RJREFUeNrsnQ3Q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"},this.drawFill(Q)}get nature(){return n}}o.Component.register("forklift",i),t.d(e,"Forklift",function(){return i})}]);
//# sourceMappingURL=things-scene-forklift.js.map