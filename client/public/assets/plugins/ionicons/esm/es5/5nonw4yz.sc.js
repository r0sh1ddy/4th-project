/*! Built with http://stenciljs.com */
import{h}from"./ionicons.core.js";var Icon=function(){function e(){this.isVisible=!1,this.lazy=!0}return e.prototype.componentWillLoad=function(){var e=this;this.waitUntilVisible(this.el,"50px",function(){e.isVisible=!0,e.loadIcon()})},e.prototype.componentDidUnload=function(){this.io&&(this.io.disconnect(),this.io=void 0)},e.prototype.waitUntilVisible=function(e,t,i){var n=this;if(this.lazy&&this.win&&this.win.IntersectionObserver){var r=this.io=new this.win.IntersectionObserver(function(e){e[0].isIntersecting&&(r.disconnect(),n.io=void 0,i())},{rootMargin:t});r.observe(e)}else i()},e.prototype.loadIcon=function(){var e=this;if(!this.isServer&&this.isVisible){var t=this.getUrl();t&&getSvgContent(t).then(function(t){e.svgContent=validateContent(e.doc,t,e.el["s-sc"])})}if(!this.ariaLabel){var i=getName(this.name,this.mode,this.ios,this.md);i&&(this.ariaLabel=i.replace("ios-","").replace("md-","").replace(/\-/g," "))}},e.prototype.getUrl=function(){var e=getSrc(this.src);return e||((e=getName(this.name,this.mode,this.ios,this.md))?this.getNamedUrl(e):(e=getSrc(this.icon))?e:(e=getName(this.icon,this.mode,this.ios,this.md))?this.getNamedUrl(e):null)},e.prototype.getNamedUrl=function(e){return this.resourcesUrl+"svg/"+e+".svg"},e.prototype.hostData=function(){var e;return{role:"img",class:Object.assign({},createColorClasses(this.color),(e={},e["icon-"+this.size]=!!this.size,e))}},e.prototype.render=function(){return!this.isServer&&this.svgContent?h("div",{class:"icon-inner",innerHTML:this.svgContent}):h("div",{class:"icon-inner"})},Object.defineProperty(e,"is",{get:function(){return"ion-icon"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{ariaLabel:{type:String,attr:"aria-label",reflectToAttr:!0,mutable:!0},color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},icon:{type:String,attr:"icon",watchCallbacks:["loadIcon"]},ios:{type:String,attr:"ios"},isServer:{context:"isServer"},isVisible:{state:!0},lazy:{type:Boolean,attr:"lazy"},md:{type:String,attr:"md"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name",watchCallbacks:["loadIcon"]},resourcesUrl:{context:"resourcesUrl"},size:{type:String,attr:"size"},src:{type:String,attr:"src",watchCallbacks:["loadIcon"]},svgContent:{state:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"[data-ion-icon-host]{display:inline-block;width:1em;height:1em;contain:strict;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.ion-color[data-ion-icon-host]{color:var(--ion-color-base)!important}.icon-small[data-ion-icon-host]{font-size:var(--ion-icon-size-small,18px)!important}.icon-large[data-ion-icon-host]{font-size:var(--ion-icon-size-large,32px)!important}.icon-inner[data-ion-icon], svg[data-ion-icon]{display:block;height:100%;width:100%}svg[data-ion-icon]{fill:currentColor;stroke:currentColor}.ion-color-primary[data-ion-icon-host]{--ion-color-base:var(--ion-color-primary, #3880ff)}.ion-color-secondary[data-ion-icon-host]{--ion-color-base:var(--ion-color-secondary, #0cd1e8)}.ion-color-tertiary[data-ion-icon-host]{--ion-color-base:var(--ion-color-tertiary, #f4a942)}.ion-color-success[data-ion-icon-host]{--ion-color-base:var(--ion-color-success, #10dc60)}.ion-color-warning[data-ion-icon-host]{--ion-color-base:var(--ion-color-warning, #ffce00)}.ion-color-danger[data-ion-icon-host]{--ion-color-base:var(--ion-color-danger, #f14141)}.ion-color-light[data-ion-icon-host]{--ion-color-base:var(--ion-color-light, #f4f5f8)}.ion-color-medium[data-ion-icon-host]{--ion-color-base:var(--ion-color-medium, #989aa2)}.ion-color-dark[data-ion-icon-host]{--ion-color-base:var(--ion-color-dark, #222428)}"},enumerable:!0,configurable:!0}),e}(),requests=new Map;function getSvgContent(e){var t=requests.get(e);return t||(t=fetch(e,{cache:"force-cache"}).then(function(e){return e.ok?e.text():Promise.resolve(null)}),requests.set(e,t)),t}function getName(e,t,i,n){return t=(t||"md").toLowerCase(),i&&"ios"===t?e=i.toLowerCase():n&&"md"===t?e=n.toLowerCase():e&&(e=e.toLowerCase(),/^md-|^ios-|^logo-/.test(e)||(e=t+"-"+e)),"string"!=typeof e||""===e.trim()?null:""!==e.replace(/[a-z]|-|\d/gi,"")?null:e}function getSrc(e){return"string"==typeof e&&(e=e.trim()).length>0&&/(\/|\.)/.test(e)?e:null}function validateContent(e,t,i){if(t){var n=e.createDocumentFragment(),r=e.createElement("div");r.innerHTML=t,n.appendChild(r);for(var o=r.childNodes.length-1;o>=0;o--)"svg"!==r.childNodes[o].nodeName.toLowerCase()&&r.removeChild(r.childNodes[o]);var s=r.firstElementChild;if(s&&"svg"===s.nodeName.toLowerCase()&&(i&&s.setAttribute(i,""),isValid(s)))return r.innerHTML}return""}function isValid(e){if(1===e.nodeType){if("script"===e.nodeName.toLowerCase())return!1;for(var t=0;t<e.attributes.length;t++){var i=e.attributes[t].value;if("string"==typeof i&&0===i.toLowerCase().indexOf("on"))return!1}for(t=0;t<e.childNodes.length;t++)if(!isValid(e.childNodes[t]))return!1}return!0}function createColorClasses(e){var t;return e?((t={"ion-color":!0})["ion-color-"+e]=!0,t):null}export{Icon as IonIcon};