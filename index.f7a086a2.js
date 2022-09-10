var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t=function(e){const t=[];let i=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t[i++]=r:r<2048?(t[i++]=r>>6|192,t[i++]=63&r|128):55296==(64512&r)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n)),t[i++]=r>>18|240,t[i++]=r>>12&63|128,t[i++]=r>>6&63|128,t[i++]=63&r|128):(t[i++]=r>>12|224,t[i++]=r>>6&63|128,t[i++]=63&r|128)}return t},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,h=a?e[t+2]:0,c=r>>2,l=(3&r)<<4|o>>4;let u=(15&o)<<2|h>>6,d=63&h;a||(d=64,s||(u=64)),n.push(i[c],i[l],i[u],i[d])}return n.join("")},encodeString(e,i){return this.HAS_NATIVE_SUPPORT&&!i?btoa(e):this.encodeByteArray(t(e),i)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let i=0,n=0;for(;i<e.length;){const r=e[i++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[i++];t[n++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[i++])<<12|(63&e[i++])<<6|63&e[i++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{const s=e[i++],o=e[i++];t[n++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){const r=i[e.charAt(t++)],s=t<e.length?i[e.charAt(t)]:0;++t;const o=t<e.length?i[e.charAt(t)]:64;++t;const a=t<e.length?i[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw Error();const h=r<<2|s>>4;if(n.push(h),64!==o){const e=s<<4&240|o>>2;if(n.push(e),64!==a){const e=o<<6&192|a;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},n=function(e){return function(e){const n=t(e);return i.encodeByteArray(n,!0)}(e).replace(/\./g,"")},r=function(e){try{return i.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,i))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function o(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function a(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(o())}function h(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function c(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function l(){const e=o();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function u(){return"object"==typeof indexedDB}class d extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,d.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,f.prototype.create)}}class f{create(e,...t){const i=t[0]||{},n=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(p,((e,i)=>{const n=t[i];return null!=n?String(n):`<${i}?>`}))}(r,i):"Error",o=`${this.serviceName}: ${s} (${n}).`;return new d(n,o,i)}constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}}const p=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function m(e,t){if(e===t)return!0;const i=Object.keys(e),n=Object.keys(t);for(const r of i){if(!n.includes(r))return!1;const i=e[r],s=t[r];if(v(i)&&v(s)){if(!m(i,s))return!1}else if(i!==s)return!1}for(const e of n)if(!i.includes(e))return!1;return!0}function v(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function y(e){const t=[];for(const[i,n]of Object.entries(e))Array.isArray(n)?n.forEach((e=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(i)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function b(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[i,n]=e.split("=");t[decodeURIComponent(i)]=decodeURIComponent(n)}})),t}function w(e){const t=e.indexOf("?");if(!t)return"";const i=e.indexOf("#",t);return e.substring(t,i>0?i:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){const i=new _(e,t);return i.subscribe.bind(i)}class _{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,i){let n;if(void 0===e&&void 0===t&&void 0===i)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;for(const i of t)if(i in e&&"function"==typeof e[i])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:i},void 0===n.next&&(n.next=E),void 0===n.error&&(n.error=E),void 0===n.complete&&(n.complete=E);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}})),this.observers.push(n),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function E(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function T(e){return e&&e._delegate?e._delegate:e}class k{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new s;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&e.resolve(i)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[e,t]of this.instancesDeferred.entries()){i===this.normalizeInstanceIdentifier(e)&&t.resolve(n)}return n}onInit(e,t){var i;const n=this.normalizeInstanceIdentifier(t),r=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;r.add(e),this.onInitCallbacks.set(n,r);const s=this.instances.get(n);return s&&e(s,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const n of i)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,"[DEFAULT]"===n?void 0:n),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(e){}var n;return i||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class A{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new S(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=[];var C,O;(O=C||(C={}))[O.DEBUG=0]="DEBUG",O[O.VERBOSE=1]="VERBOSE",O[O.INFO=2]="INFO",O[O.WARN=3]="WARN",O[O.ERROR=4]="ERROR",O[O.SILENT=5]="SILENT";const N={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},D=C.INFO,P={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},L=(e,t,...i)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),r=P[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${n}]  ${e.name}:`,...i)};class M{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in C))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?N[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...e),this._logHandler(this,C.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...e),this._logHandler(this,C.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,C.INFO,...e),this._logHandler(this,C.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,C.WARN,...e),this._logHandler(this,C.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...e),this._logHandler(this,C.ERROR,...e)}constructor(e){this.name=e,this._logLevel=D,this._logHandler=L,this._userLogHandler=null,R.push(this)}}let U,x;const F=new WeakMap,j=new WeakMap,B=new WeakMap,V=new WeakMap,H=new WeakMap;let z={get(e,t,i){if(e instanceof IDBTransaction){if("done"===t)return j.get(e);if("objectStoreNames"===t)return e.objectStoreNames||B.get(e);if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return K(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function $(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(x||(x=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(G(this),t),K(F.get(this))}:function(...t){return K(e.apply(G(this),t))}:function(t,...i){const n=e.call(G(this),t,...i);return B.set(n,t.sort?t.sort():[t]),K(n)}}function W(e){return"function"==typeof e?$(e):(e instanceof IDBTransaction&&function(e){if(j.has(e))return;const t=new Promise(((t,i)=>{const n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),n()},s=()=>{i(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));j.set(e,t)}(e),t=e,(U||(U=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,z):e);var t}function K(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,i)=>{const n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(K(e.result)),n()},s=()=>{i(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&F.set(t,e)})).catch((()=>{})),H.set(t,e),t}(e);if(V.has(e))return V.get(e);const t=W(e);return t!==e&&(V.set(e,t),H.set(t,e)),t}const G=e=>H.get(e);function q(e,t,{blocked:i,upgrade:n,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=K(o);return n&&o.addEventListener("upgradeneeded",(e=>{n(K(o.result),e.oldVersion,e.newVersion,K(o.transaction))})),i&&o.addEventListener("blocked",(()=>i())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const X=["get","getKey","getAll","getAllKeys","count"],J=["put","add","delete","clear"],Y=new Map;function Q(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Y.get(t))return Y.get(t);const i=t.replace(/FromIndex$/,""),n=t!==i,r=J.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!r&&!X.includes(i))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[i](...t),r&&s.done]))[0]};return Y.set(t,s),s}z=(e=>({...e,get:(t,i,n)=>Q(t,i)||e.get(t,i,n),has:(t,i)=>!!Q(t,i)||e.has(t,i)}))(z);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const ee=new M("@firebase/app"),te={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ie=new Map,ne=new Map;function re(e,t){try{e.container.addComponent(t)}catch(i){ee.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,i)}}function se(e){const t=e.name;if(ne.has(t))return ee.debug(`There were multiple attempts to register component ${t}.`),!1;ne.set(t,e);for(const t of ie.values())re(t,e);return!0}function oe(e,t){const i=e.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ae=new f("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ae.create("app-deleted",{appName:this._name})}constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new k("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e="[DEFAULT]"){const t=ie.get(e);if(!t)throw ae.create("no-app",{appName:e});return t}function le(e,t,i){var n;let r=null!==(n=te[e])&&void 0!==n?n:e;i&&(r+=`-${i}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ee.warn(e.join(" "))}se(new k(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}let ue=null;function de(){return ue||(ue=q("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw ae.create("idb-open",{originalErrorMessage:e.message})}))),ue}async function fe(e,t){var i;try{const i=(await de()).transaction("firebase-heartbeat-store","readwrite"),n=i.objectStore("firebase-heartbeat-store");return await n.put(t,pe(e)),i.done}catch(e){if(e instanceof d)ee.warn(e.message);else{const t=ae.create("idb-set",{originalErrorMessage:null===(i=e)||void 0===i?void 0:i.message});ee.warn(t.message)}}}function pe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=me();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=me(),{heartbeatsToSend:t,unsentEntries:i}=function(e,t=1024){const i=[];let n=e.slice();for(const r of e){const e=i.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),ye(i)>t){e.dates.pop();break}}else if(i.push({agent:r.agent,dates:[r.date]}),ye(i)>t){i.pop();break}n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}(this._heartbeatsCache.heartbeats),r=n(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ve(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function me(){return(new Date).toISOString().substring(0,10)}class ve{async runIndexedDBEnvironmentCheck(){return!!u()&&new Promise(((e,t)=>{try{let i=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),i||self.indexedDB.deleteDatabase(n),e(!0)},r.onupgradeneeded=()=>{i=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await de()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(pe(e))}catch(e){if(e instanceof d)ee.warn(e.message);else{const i=ae.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});ee.warn(i.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return fe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return fe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function ye(e){return n(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;be="",se(new k("platform-logger",(e=>new Z(e)),"PRIVATE")),se(new k("heartbeat",(e=>new ge(e)),"PRIVATE")),le("@firebase/app","0.7.32",be),le("@firebase/app","0.7.32","esm2017"),le("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
le("firebase","9.9.4","app");function we(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]])}return i}Object.create;Object.create;function Ie(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _e=Ie,Ee=new f("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Te=new M("@firebase/auth");function ke(e,...t){Te.logLevel<=C.ERROR&&Te.error(`Auth (9.9.4): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e,...t){throw Ce(e,...t)}function Ae(e,...t){return Ce(e,...t)}function Re(e,t,i){const n=Object.assign(Object.assign({},_e()),{[t]:i});return new f("auth","Firebase",n).create(t,{appName:e.name})}function Ce(e,...t){if("string"!=typeof e){const i=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(i,...n)}return Ee.create(e,...t)}function Oe(e,t,...i){if(!e)throw Ce(t,...i)}function Ne(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ke(t),new Error(t)}function De(e,t){e||Ne(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=new Map;function Le(e){De(e instanceof Function,"Expected a class definition");let t=Pe.get(e);return t?(De(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Pe.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Me(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Ue(){return"http:"===xe()||"https:"===xe()}function xe(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Ue()||h()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(e,t){this.shortDelay=e,this.longDelay=t,De(t>e,"Short delay should be less than long delay!"),this.isMobile=a()||c()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(e,t){De(e.emulator,"Emulator should always be set here");const{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ne("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ne("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ne("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},He=new Fe(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function $e(e,t,i,n,r={}){return We(e,r,(async()=>{let r={},s={};n&&("GET"===t?s=n:r={body:JSON.stringify(n)});const o=y(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Be.fetch()(Ge(e,e.config.apiHost,i,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function We(e,t,i){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},Ve),t);try{const t=new qe(e),r=await Promise.race([i(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw Xe(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[i,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===i)throw Xe(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===i)throw Xe(e,"email-already-in-use",s);if("USER_DISABLED"===i)throw Xe(e,"user-disabled",s);const a=n[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Re(e,a,o);Se(e,a)}}catch(t){if(t instanceof d)throw t;Se(e,"network-request-failed")}}async function Ke(e,t,i,n,r={}){const s=await $e(e,t,i,n,r);return"mfaPendingCredential"in s&&Se(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Ge(e,t,i,n){const r=`${t}${i}?${n}`;return e.config.emulator?je(e.config,r):`${e.config.apiScheme}://${r}`}class qe{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Ae(this.auth,"network-request-failed"))),He.get())}))}}function Xe(e,t,i){const n={appName:e.name};i.email&&(n.email=i.email),i.phoneNumber&&(n.phoneNumber=i.phoneNumber);const r=Ae(e,t,n);return r.customData._tokenResponse=i,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Je(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(e){return 1e3*Number(e)}function Qe(e){var t;const[i,n,s]=e.split(".");if(void 0===i||void 0===n||void 0===s)return ke("JWT malformed, contained fewer than 3 sections"),null;try{const e=r(n);return e?JSON.parse(e):(ke("Failed to decode base64 JWT payload"),null)}catch(e){return ke("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ze(e,t,i=!1){if(i)return t;try{return await t}catch(t){throw t instanceof d&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class et{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{_initializeTime(){this.lastSignInTime=Je(this.lastLoginAt),this.creationTime=Je(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(e){var t;const i=e.auth,n=await e.getIdToken(),r=await Ze(e,async function(e,t){return $e(e,"POST","/v1/accounts:lookup",t)}(i,{idToken:n}));Oe(null==r?void 0:r.users.length,i,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,i=we(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})):[];const a=(h=e.providerData,c=o,[...h.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var h,c;const l=e.isAnonymous,u=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!l&&u,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new tt(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Oe(e.idToken,"internal-error"),Oe(void 0!==e.idToken,"internal-error"),Oe(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Qe(e);return Oe(t,"internal-error"),Oe(void 0!==t.exp,"internal-error"),Oe(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Oe(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:n,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const i=await We(e,{},(async()=>{const i=y({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:r}=e.config,s=Ge(e,n,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Be.fetch()(s,{method:"POST",headers:o,body:i})}));return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}(e,t);this.updateTokensAndExpiration(i,n,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(e,t){const{refreshToken:i,accessToken:n,expirationTime:r}=t,s=new nt;return i&&(Oe("string"==typeof i,"internal-error",{appName:e}),s.refreshToken=i),n&&(Oe("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),r&&(Oe("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nt,this.toJSON())}_performRefresh(){return Ne("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(e,t){Oe("string"==typeof e||void 0===e,"internal-error",{appName:t})}class st{async getIdToken(e){const t=await Ze(this,this.stsTokenManager.getToken(this.auth,e));return Oe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const i=T(e),n=await i.getIdToken(t),r=Qe(n);Oe(r&&r.exp&&r.auth_time&&r.iat,i.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:n,authTime:Je(Ye(r.auth_time)),issuedAtTime:Je(Ye(r.iat)),expirationTime:Je(Ye(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=T(e);await it(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new st(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await it(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ze(this,async function(e,t){return $e(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,n,r,s,o,a,h,c;const l=null!==(i=t.displayName)&&void 0!==i?i:void 0,u=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(h=t.createdAt)&&void 0!==h?h:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:I,stsTokenManager:_}=t;Oe(y&&_,e,"internal-error");const E=nt.fromJSON(this.name,_);Oe("string"==typeof y,e,"internal-error"),rt(l,e.name),rt(u,e.name),Oe("boolean"==typeof b,e,"internal-error"),Oe("boolean"==typeof w,e,"internal-error"),rt(d,e.name),rt(f,e.name),rt(p,e.name),rt(g,e.name),rt(m,e.name),rt(v,e.name);const T=new st({uid:y,auth:e,email:u,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:v});return I&&Array.isArray(I)&&(T.providerData=I.map((e=>Object.assign({},e)))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,i=!1){const n=new nt;n.updateFromServerResponse(t);const r=new st({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:i});return await it(r),r}constructor(e){var{uid:t,auth:i,stsTokenManager:n}=e,r=we(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new et(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new tt(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}ot.type="NONE";const at=ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e,t,i){return`firebase:${e}:${t}:${i}`}class ct{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?st._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new ct(Le(at),e,i);const n=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=n[0]||Le(at);const s=ht(i,e.config.apiKey,e.name);let o=null;for(const i of t)try{const t=await i._get(s);if(t){const n=st._fromJSON(e,t);i!==r&&(o=n),r=i;break}}catch(e){}const a=n.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new ct(r,e,i)):new ct(r,e,i)}constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:n,name:r}=this.auth;this.fullUserKey=ht(this.userKey,n.apiKey,r),this.fullPersistenceKey=ht("persistence",n.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pt(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ut(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(mt(t))return"Blackberry";if(vt(t))return"Webos";if(dt(t))return"Safari";if((t.includes("chrome/")||ft(t))&&!t.includes("edge/"))return"Chrome";if(gt(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(t);if(2===(null==i?void 0:i.length))return i[1]}return"Other"}function ut(e=o()){return/firefox\//i.test(e)}function dt(e=o()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ft(e=o()){return/crios\//i.test(e)}function pt(e=o()){return/iemobile/i.test(e)}function gt(e=o()){return/android/i.test(e)}function mt(e=o()){return/blackberry/i.test(e)}function vt(e=o()){return/webos/i.test(e)}function yt(e=o()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function bt(e=o()){return yt(e)||gt(e)||vt(e)||mt(e)||/windows phone/i.test(e)||pt(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wt(e,t=[]){let i;switch(e){case"Browser":i=lt(o());break;case"Worker":i=`${lt(o())}-${e}`;break;default:i=e}return`${i}/JsCore/9.9.4/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{pushCallback(e,t){const i=t=>new Promise(((i,n)=>{try{i(e(t))}catch(e){n(e)}}));i.onAbort=t,this.queue.push(i);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const i=[];try{for(const t of this.queue)await t(e),t.onAbort&&i.push(t.onAbort)}catch(e){i.reverse();for(const e of i)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Le(t)),this._initializationPromise=this.queue((async()=>{var i,n;if(!this._deleted&&(this.persistenceManager=await ct.create(this,e),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let n=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);i&&i!==s||!(null==o?void 0:o.user)||(n=o.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=i,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return Oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await it(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?T(e):null;return t&&Oe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Le(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new f("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return null===e?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Le(e)||this._popupRedirectResolver;Oe(t,this,"argument-error"),this.redirectPersistenceManager=await ct.create(this,[Le(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,n){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Oe(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,i,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return i&&(t["X-Firebase-Client"]=i),t}constructor(e,t,i){this.app=e,this.heartbeatServiceProvider=t,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tt(this),this.idTokenSubscription=new Tt(this),this.beforeStateQueue=new It(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ee,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}}function Et(e){return T(e)}class Tt{get next(){return Oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=I((e=>this.observer=e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt{toJSON(){return Ne("not implemented")}_getIdTokenResponse(e){return Ne("not implemented")}_linkToIdToken(e,t){return Ne("not implemented")}_getReauthenticationResolver(e){return Ne("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function St(e,t){return $e(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At extends kt{static _fromEmailAndPassword(e,t){return new At(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new At(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Ke(e,"POST","/v1/accounts:signInWithPassword",ze(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Ke(e,"POST","/v1/accounts:signInWithEmailLink",ze(e,t))}(e,{email:this._email,oobCode:this._password});default:Se(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return St(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Ke(e,"POST","/v1/accounts:signInWithEmailLink",ze(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Se(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,i,n=null){super("password",i),this._email=e,this._password=t,this._tenantId=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t){return Ke(e,"POST","/v1/accounts:signInWithIdp",ze(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends kt{static _fromParams(e){const t=new Ct(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Se("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:n}=t,r=we(t,["providerId","signInMethod"]);if(!i||!n)return null;const s=new Ct(i,n);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return Rt(e,this.buildRequest())}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Rt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Rt(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=y(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt extends kt{static _fromVerification(e,t){return new Nt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Nt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Ke(e,"POST","/v1/accounts:signInWithPhoneNumber",ze(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const i=await Ke(e,"POST","/v1/accounts:signInWithPhoneNumber",ze(e,t));if(i.temporaryProof)throw Xe(e,"account-exists-with-different-credential",i);return i}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Ke(e,"POST","/v1/accounts:signInWithPhoneNumber",ze(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Ot)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:n}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}=e;return i||t||n||r?new Nt({verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{static parseLink(e){const t=function(e){const t=b(w(e)).link,i=t?b(w(t)).deep_link_id:null,n=b(w(e)).deep_link_id;return(n?b(w(n)).link:null)||n||i||t||e}(e);try{return new Dt(t)}catch(e){return null}}constructor(e){var t,i,n,r,s,o;const a=b(w(e)),h=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(i=a.oobCode)&&void 0!==i?i:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=a.mode)&&void 0!==n?n:null);Oe(h&&c&&l,"argument-error"),this.apiKey=h,this.operation=l,this.code=c,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pt{static credential(e,t){return At._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Dt.parseLink(t);return Oe(i,"argument-error"),At._fromEmailAndCode(e,i.code,i.tenantId)}constructor(){this.providerId=Pt.PROVIDER_ID}}Pt.PROVIDER_ID="password",Pt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Pt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lt{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Lt{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ut extends Mt{static credential(e){return Ct._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Ut.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ut.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt extends Mt{static credential(e,t){return Ct._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return xt.credential(t,i)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}xt.GOOGLE_SIGN_IN_METHOD="google.com",xt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ft extends Mt{static credential(e){return Ct._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Ft.GITHUB_SIGN_IN_METHOD="github.com",Ft.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jt extends Mt{static credential(e,t){return Ct._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return jt.credential(t,i)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Bt(e,t){return Ke(e,"POST","/v1/accounts:signUp",ze(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt.TWITTER_SIGN_IN_METHOD="twitter.com",jt.PROVIDER_ID="twitter.com";class Vt{static async _fromIdTokenResponse(e,t,i,n=!1){const r=await st._fromIdTokenResponse(e,i,n),s=Ht(i);return new Vt({user:r,providerId:s,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const n=Ht(i);return new Vt({user:e,providerId:n,_tokenResponse:i,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Ht(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zt extends d{static _fromErrorAndOperation(e,t,i,n){return new zt(e,t,i,n)}constructor(e,t,i,n){var r;super(t.code,t.message),this.operationType=i,this.user=n,Object.setPrototypeOf(this,zt.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}}function $t(e,t,i,n){return("reauthenticate"===t?i._getReauthenticationResolver(e):i._getIdTokenResponse(e)).catch((i=>{if("auth/multi-factor-auth-required"===i.code)throw zt._fromErrorAndOperation(e,i,t,n);throw i}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(e,t,i=!1){const n=await Ze(e,t._linkToIdToken(e.auth,await e.getIdToken()),i);return Vt._forOperation(e,"link",n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Kt(e,t,i=!1){var n;const{auth:r}=e,s="reauthenticate";try{const n=await Ze(e,$t(r,s,t,e),i);Oe(n.idToken,r,"internal-error");const o=Qe(n.idToken);Oe(o,r,"internal-error");const{sub:a}=o;return Oe(e.uid===a,r,"user-mismatch"),Vt._forOperation(e,s,n)}catch(e){throw"auth/user-not-found"===(null===(n=e)||void 0===n?void 0:n.code)&&Se(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(e,t,i=!1){const n="signIn",r=await $t(e,n,t),s=await Vt._fromIdTokenResponse(e,n,r);return i||await e._updateCurrentUser(s.user),s}async function qt(e,t,i){const n=Et(e),r=await Bt(n,{returnSecureToken:!0,email:t,password:i}),s=await Vt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(s.user),s}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Xt{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),n=this.localCache[t];i!==n&&e(t,n,i)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,i)=>{this.notifyListeners(e,i)}));const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(i);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const n=()=>{const e=this.storage.getItem(i);(t||this.localCache[i]!==e)&&this.notifyListeners(i,e)},r=this.storage.getItem(i);l()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const e of Array.from(i))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=o();return dt(e)||yt(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=bt(),this._shouldAllowMigration=!0}}Jt.type="LOCAL";const Yt=Jt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Xt{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Qt.type="SESSION";const Zt=Qt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ei{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const i=new ei(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:n,data:r}=t.data,s=this.handlersMap[n];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:n});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:i,eventType:n,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ti(e="",t=10){let i="";for(let e=0;e<t;e++)i+=Math.floor(10*Math.random());return e+i}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ei.receivers=[];class ii{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const n="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const h=ti("",20);n.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),i);s={messageChannel:n,onMessage(e){const t=e;if(t.data.eventId===h)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),n.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[n.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ri(){return void 0!==ni().WorkerGlobalScope&&"function"==typeof ni().importScripts}class si{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function oi(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function ai(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,i)=>{e.addEventListener("error",(()=>{i(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){i(e)}})),e.addEventListener("success",(async()=>{const i=e.result;i.objectStoreNames.contains("firebaseLocalStorage")?t(i):(i.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new si(e).toPromise()}(),t(await ai()))}))}))}async function hi(e,t,i){const n=oi(e,!0).put({fbase_key:t,value:i});return new si(n).toPromise()}function ci(e,t){const i=oi(e,!0).delete(t);return new si(i).toPromise()}class li{async _openDb(){return this.db||(this.db=await ai()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ri()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ei._getInstance(ri()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new ii(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&(null===(e=i[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=i[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ai();return await hi(e,"__sak","1"),await ci(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((i=>hi(i,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const i=oi(e,!1).get(t),n=await new si(i).toPromise();return void 0===n?null:n.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>ci(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=oi(e,!1).getAll();return new si(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],i=new Set;for(const{fbase_key:n,value:r}of e)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(const e of Object.keys(this.localCache))this.localCache[e]&&!i.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const e of Array.from(i))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}li.type="LOCAL";const ui=li;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(e){return new Promise(((t,i)=>{const n=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,s;n.setAttribute("src",e),n.onload=t,n.onerror=e=>{const t=Ae("internal-error");t.customData=e,i(t)},n.type="text/javascript",n.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(n)}))}function fi(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
fi("rcb"),new Fe(3e4,6e4);async function pi(e,t,i){var n;const r=await i.verify();try{let s;if(Oe("string"==typeof r,e,"argument-error"),Oe("recaptcha"===i.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Oe("enroll"===t.type,e,"internal-error");const i=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return $e(e,"POST","/v2/accounts/mfaEnrollment:start",ze(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return i.phoneSessionInfo.sessionInfo}{Oe("signin"===t.type,e,"internal-error");const i=(null===(n=s.multiFactorHint)||void 0===n?void 0:n.uid)||s.multiFactorUid;Oe(i,e,"missing-multi-factor-info");const o=await function(e,t){return $e(e,"POST","/v2/accounts/mfaSignIn:start",ze(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return $e(e,"POST","/v1/accounts:sendVerificationCode",ze(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{i._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gi{verifyPhoneNumber(e,t){return pi(this.auth,e,T(t))}static credential(e,t){return Nt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return gi.credentialFromTaggedObject(t)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?Nt._fromTokenResponse(t,i):null}constructor(e){this.providerId=gi.PROVIDER_ID,this.auth=Et(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mi(e,t){return t?Le(t):(Oe(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gi.PROVIDER_ID="phone",gi.PHONE_SIGN_IN_METHOD="phone";class vi extends kt{_getIdTokenResponse(e){return Rt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Rt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Rt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function yi(e){return Gt(e.auth,new vi(e),e.bypassAuthState)}function bi(e){const{auth:t,user:i}=e;return Oe(i,t,"internal-error"),Kt(i,new vi(e),e.bypassAuthState)}async function wi(e){const{auth:t,user:i}=e;return Oe(i,t,"internal-error"),Wt(i,new vi(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:n,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yi;case"linkViaPopup":case"linkViaRedirect":return wi;case"reauthViaPopup":case"reauthViaRedirect":return bi;default:Se(this.auth,"internal-error")}}resolve(e){De(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){De(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,i,n,r=!1){this.auth=e,this.resolver=i,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=new Fe(2e3,1e4);class Ei extends Ii{async executeNotNull(){const e=await this.execute();return Oe(e,this.auth,"internal-error"),e}async onExecution(){De(1===this.filter.length,"Popup operations only handle one event");const e=ti();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Ae(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Ae(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ei.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;(null===(i=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===i?void 0:i.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Ae(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,_i.get())};e()}constructor(e,t,i,n,r){super(e,t,n,r),this.provider=i,this.authWindow=null,this.pollId=null,Ei.currentPopupAction&&Ei.currentPopupAction.cancel(),Ei.currentPopupAction=this}}Ei.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ti=new Map;class ki extends Ii{async execute(){let e=Ti.get(this.auth._key());if(!e){try{const t=await async function(e,t){const i=Ri(t),n=Ai(e);if(!await n._isAvailable())return!1;const r="true"===await n._get(i);return await n._remove(i),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Ti.set(this.auth._key(),e)}return this.bypassAuthState||Ti.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}}function Si(e,t){Ti.set(e._key(),t)}function Ai(e){return Le(e._redirectPersistence)}function Ri(e){return ht("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(e,t,i=!1){const n=Et(e),r=mi(n,t),s=new ki(n,r,i),o=await s.execute();return o&&!i&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}class Oi{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Di(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Di(e)){const n=(null===(i=e.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error";t.onError(Ae(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ni(e))}saveEventToCache(e){this.cachedEventUids.add(Ni(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Ni(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Di({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Li=/^https?/;async function Mi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return $e(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Ui(e))return}catch(e){}Se(e,"unauthorized-domain")}function Ui(e){const t=Me(),{protocol:i,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===n?"chrome-extension:"===i&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===i&&r.hostname===n}if(!Li.test(i))return!1;if(Pi.test(e))return n===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new Fe(3e4,6e4);function Fi(){const e=ni().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let ji=null;function Bi(e){return ji=ji||function(e){return new Promise(((t,i)=>{var n,r,s;function o(){Fi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Fi(),i(Ae(e,"network-request-failed"))},timeout:xi.get()})}if(null===(r=null===(n=ni().gapi)||void 0===n?void 0:n.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=ni().gapi)||void 0===s?void 0:s.load)){const t=fi("iframefcb");return ni()[t]=()=>{gapi.load?o():i(Ae(e,"network-request-failed"))},di(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>i(e)))}o()}})).catch((e=>{throw ji=null,e}))}(e),ji}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=new Fe(5e3,15e3),Hi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $i(e){const t=e.config;Oe(t.authDomain,e,"auth-domain-config-required");const i=t.emulator?je(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:"9.9.4"},r=zi.get(e.config.apiHost);r&&(n.eid=r);const s=e._getFrameworks();return s.length&&(n.fw=s.join(",")),`${i}?${y(n).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ki{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Gi(e,t,i,n=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let h="";const c=Object.assign(Object.assign({},Wi),{width:n.toString(),height:r.toString(),top:s,left:a}),l=o().toLowerCase();i&&(h=ft(l)?"_blank":i),ut(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,i])=>`${e}${t}=${i},`),"");if(function(e=o()){var t;return yt(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==h)return function(e,t){const i=document.createElement("a");i.href=e,i.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",h),new Ki(null);const d=window.open(t||"",h,u);Oe(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Ki(d)}function qi(e,t,i,n,r,s){Oe(e.config.authDomain,e,"auth-domain-config-required"),Oe(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:i,redirectUrl:n,v:"9.9.4",eventId:r};if(t instanceof Lt){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",g(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Mt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?je(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${y(a).slice(1)}`}const Xi=class{async _openPopup(e,t,i,n){var r;De(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Gi(e,qi(e,t,i,Me(),n),ti())}async _openRedirect(e,t,i,n){var r;return await this._originValidation(e),r=qi(e,t,i,Me(),n),ni().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:i}=this.eventManagers[t];return e?Promise.resolve(e):(De(i,"If manager is not set, promise should be"),i)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch((()=>{delete this.eventManagers[t]})),i}async initAndGetManager(e){const t=await async function(e){const t=await Bi(e),i=ni().gapi;return Oe(i,e,"internal-error"),t.open({where:document.body,url:$i(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Hi,dontclear:!0},(t=>new Promise((async(i,n)=>{await t.restyle({setHideOnLeave:!1});const r=Ae(e,"network-request-failed"),s=ni().setTimeout((()=>{n(r)}),Vi.get());function o(){ni().clearTimeout(s),i(t)}t.ping(o).then(o,(()=>{n(r)}))}))))}(e),i=new Oi(e);return t.register("authEvent",(t=>{Oe(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:i.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(i=>{var n;const r=null===(n=null==i?void 0:i[0])||void 0===n?void 0:n.webStorageSupport;void 0!==r&&t(!!r),Se(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Mi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return bt()||dt()||yt()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zt,this._completeRedirectFn=Ci,this._overrideRedirectResult=Si}};var Ji;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yi{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var i;e((null===(i=t)||void 0===i?void 0:i.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ji="Browser",se(new k("auth",((e,{options:t})=>{const i=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),{apiKey:r,authDomain:s}=i.options;return((e,i)=>{Oe(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),Oe(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:s,clientPlatform:Ji,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wt(Ji)},o=new _t(e,i,n);return function(e,t){const i=(null==t?void 0:t.persistence)||[],n=(Array.isArray(i)?i:[i]).map(Le);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(i,n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,i)=>{e.getProvider("auth-internal").initialize()}))),se(new k("auth-internal",(e=>{const t=Et(e.getProvider("auth").getImmediate());return new Yi(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),le("@firebase/auth","0.20.6",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ji)),le("@firebase/auth","0.20.6","esm2017");var Qi,Zi="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},en={},tn=tn||{},nn=Zi||self;function rn(){}function sn(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function on(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var an="closure_uid_"+(1e9*Math.random()>>>0),hn=0;function cn(e,t,i){return e.call.apply(e.bind,arguments)}function ln(e,t,i){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function un(e,t,i){return(un=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?cn:ln).apply(null,arguments)}function dn(e,t){var i=Array.prototype.slice.call(arguments,1);return function(){var t=i.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function fn(e,t){function i(){}i.prototype=t.prototype,e.Z=t.prototype,e.prototype=new i,e.prototype.constructor=e,e.Vb=function(e,i,n){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[i].apply(e,r)}}function pn(){this.s=this.s,this.o=this.o}var gn={};pn.prototype.s=!1,pn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,an)&&e[an]||(e[an]=++hn)}(this);delete gn[e]}},pn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mn=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let i=0;i<e.length;i++)if(i in e&&e[i]===t)return i;return-1},vn=Array.prototype.forEach?function(e,t,i){Array.prototype.forEach.call(e,t,i)}:function(e,t,i){const n=e.length,r="string"==typeof e?e.split(""):e;for(let s=0;s<n;s++)s in r&&t.call(i,r[s],s,e)};function yn(e){return Array.prototype.concat.apply([],arguments)}function bn(e){const t=e.length;if(0<t){const i=Array(t);for(let n=0;n<t;n++)i[n]=e[n];return i}return[]}function wn(e){return/^[\s\xa0]*$/.test(e)}var In,_n=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function En(e,t){return-1!=e.indexOf(t)}function Tn(e,t){return e<t?-1:e>t?1:0}e:{var kn=nn.navigator;if(kn){var Sn=kn.userAgent;if(Sn){In=Sn;break e}}In=""}function An(e,t,i){for(const n in e)t.call(i,e[n],n,e)}function Rn(e){const t={};for(const i in e)t[i]=e[i];return t}var Cn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function On(e,t){let i,n;for(let t=1;t<arguments.length;t++){for(i in n=arguments[t],n)e[i]=n[i];for(let t=0;t<Cn.length;t++)i=Cn[t],Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}}function Nn(e){return Nn[" "](e),e}Nn[" "]=rn;var Dn,Pn,Ln=En(In,"Opera"),Mn=En(In,"Trident")||En(In,"MSIE"),Un=En(In,"Edge"),xn=Un||Mn,Fn=En(In,"Gecko")&&!(En(In.toLowerCase(),"webkit")&&!En(In,"Edge"))&&!(En(In,"Trident")||En(In,"MSIE"))&&!En(In,"Edge"),jn=En(In.toLowerCase(),"webkit")&&!En(In,"Edge");function Bn(){var e=nn.document;return e?e.documentMode:void 0}e:{var Vn="",Hn=(Pn=In,Fn?/rv:([^\);]+)(\)|;)/.exec(Pn):Un?/Edge\/([\d\.]+)/.exec(Pn):Mn?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Pn):jn?/WebKit\/(\S+)/.exec(Pn):Ln?/(?:Version)[ \/]?(\S+)/.exec(Pn):void 0);if(Hn&&(Vn=Hn?Hn[1]:""),Mn){var zn=Bn();if(null!=zn&&zn>parseFloat(Vn)){Dn=String(zn);break e}}Dn=Vn}var $n,Wn={};function Kn(){return function(e){var t=Wn;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=_n(String(Dn)).split("."),i=_n("9").split("."),n=Math.max(t.length,i.length);for(let o=0;0==e&&o<n;o++){var r=t[o]||"",s=i[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;e=Tn(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||Tn(0==r[2].length,0==s[2].length)||Tn(r[2],s[2]),r=r[3],s=s[3]}while(0==e)}return 0<=e}))}if(nn.document&&Mn){var Gn=Bn();$n=Gn||(parseInt(Dn,10)||void 0)}else $n=void 0;var qn=$n,Xn=function(){if(!nn.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{nn.addEventListener("test",rn,t),nn.removeEventListener("test",rn,t)}catch(e){}return e}();function Jn(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function Yn(e,t){if(Jn.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var i=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Fn){e:{try{Nn(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==i?t=e.fromElement:"mouseout"==i&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Qn[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Yn.Z.h.call(this)}}Jn.prototype.h=function(){this.defaultPrevented=!0},fn(Yn,Jn);var Qn={2:"touch",3:"pen",4:"mouse"};Yn.prototype.h=function(){Yn.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Zn="closure_listenable_"+(1e6*Math.random()|0),er=0;function tr(e,t,i,n,r){this.listener=e,this.proxy=null,this.src=t,this.type=i,this.capture=!!n,this.ia=r,this.key=++er,this.ca=this.fa=!1}function ir(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function nr(e){this.src=e,this.g={},this.h=0}function rr(e,t){var i=t.type;if(i in e.g){var n,r=e.g[i],s=mn(r,t);(n=0<=s)&&Array.prototype.splice.call(r,s,1),n&&(ir(t),0==e.g[i].length&&(delete e.g[i],e.h--))}}function sr(e,t,i,n){for(var r=0;r<e.length;++r){var s=e[r];if(!s.ca&&s.listener==t&&s.capture==!!i&&s.ia==n)return r}return-1}nr.prototype.add=function(e,t,i,n,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=sr(e,t,n,r);return-1<o?(t=e[o],i||(t.fa=!1)):((t=new tr(t,this.src,s,!!n,r)).fa=i,e.push(t)),t};var or="closure_lm_"+(1e6*Math.random()|0),ar={};function hr(e,t,i,n,r){if(n&&n.once)return lr(e,t,i,n,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)hr(e,t[s],i,n,r);return null}return i=vr(i),e&&e[Zn]?e.N(t,i,on(n)?!!n.capture:!!n,r):cr(e,t,i,!1,n,r)}function cr(e,t,i,n,r,s){if(!t)throw Error("Invalid event type");var o=on(r)?!!r.capture:!!r,a=gr(e);if(a||(e[or]=a=new nr(e)),(i=a.add(t,i,n,o,s)).proxy)return i;if(n=function(){function e(i){return t.call(e.src,e.listener,i)}var t=pr;return e}(),i.proxy=n,n.src=e,n.listener=i,e.addEventListener)Xn||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),n,r);else if(e.attachEvent)e.attachEvent(fr(t.toString()),n);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(n)}return i}function lr(e,t,i,n,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)lr(e,t[s],i,n,r);return null}return i=vr(i),e&&e[Zn]?e.O(t,i,on(n)?!!n.capture:!!n,r):cr(e,t,i,!0,n,r)}function ur(e,t,i,n,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)ur(e,t[s],i,n,r);else n=on(n)?!!n.capture:!!n,i=vr(i),e&&e[Zn]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(i=sr(s=e.g[t],i,n,r))&&(ir(s[i]),Array.prototype.splice.call(s,i,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=gr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=sr(t,i,n,r)),(i=-1<e?t[e]:null)&&dr(i))}function dr(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[Zn])rr(t.i,e);else{var i=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(i,n,e.capture):t.detachEvent?t.detachEvent(fr(i),n):t.addListener&&t.removeListener&&t.removeListener(n),(i=gr(t))?(rr(i,e),0==i.h&&(i.src=null,t[or]=null)):ir(e)}}}function fr(e){return e in ar?ar[e]:ar[e]="on"+e}function pr(e,t){if(e.ca)e=!0;else{t=new Yn(t,this);var i=e.listener,n=e.ia||e.src;e.fa&&dr(e),e=i.call(n,t)}return e}function gr(e){return(e=e[or])instanceof nr?e:null}var mr="__closure_events_fn_"+(1e9*Math.random()>>>0);function vr(e){return"function"==typeof e?e:(e[mr]||(e[mr]=function(t){return e.handleEvent(t)}),e[mr])}function yr(){pn.call(this),this.i=new nr(this),this.P=this,this.I=null}function br(e,t){var i,n=e.I;if(n)for(i=[];n;n=n.I)i.push(n);if(e=e.P,n=t.type||t,"string"==typeof t)t=new Jn(t,e);else if(t instanceof Jn)t.target=t.target||e;else{var r=t;On(t=new Jn(n,e),r)}if(r=!0,i)for(var s=i.length-1;0<=s;s--){var o=t.g=i[s];r=wr(o,n,!0,t)&&r}if(r=wr(o=t.g=e,n,!0,t)&&r,r=wr(o,n,!1,t)&&r,i)for(s=0;s<i.length;s++)r=wr(o=t.g=i[s],n,!1,t)&&r}function wr(e,t,i,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==i){var a=o.listener,h=o.ia||o.src;o.fa&&rr(e.i,o),r=!1!==a.call(h,n)&&r}}return r&&!n.defaultPrevented}fn(yr,pn),yr.prototype[Zn]=!0,yr.prototype.removeEventListener=function(e,t,i,n){ur(this,e,t,i,n)},yr.prototype.M=function(){if(yr.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var i=t.g[e],n=0;n<i.length;n++)ir(i[n]);delete t.g[e],t.h--}}this.I=null},yr.prototype.N=function(e,t,i,n){return this.i.add(String(e),t,!1,i,n)},yr.prototype.O=function(e,t,i,n){return this.i.add(String(e),t,!0,i,n)};var Ir=nn.JSON.stringify;function _r(){var e=Cr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Er,Tr=new class{get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}}((()=>new kr),(e=>e.reset()));class kr{set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function Sr(e){nn.setTimeout((()=>{throw e}),0)}function Ar(e,t){Er||function(){var e=nn.Promise.resolve(void 0);Er=function(){e.then(Or)}}(),Rr||(Er(),Rr=!0),Cr.add(e,t)}var Rr=!1,Cr=new class{add(e,t){const i=Tr.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}constructor(){this.h=this.g=null}};function Or(){for(var e;e=_r();){try{e.h.call(e.g)}catch(e){Sr(e)}var t=Tr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Rr=!1}function Nr(e,t){yr.call(this),this.h=e||1,this.g=t||nn,this.j=un(this.kb,this),this.l=Date.now()}function Dr(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Pr(e,t,i){if("function"==typeof e)i&&(e=un(e,i));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=un(e.handleEvent,e)}return 2147483647<Number(t)?-1:nn.setTimeout(e,t||0)}function Lr(e){e.g=Pr((()=>{e.g=null,e.i&&(e.i=!1,Lr(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}fn(Nr,yr),(Qi=Nr.prototype).da=!1,Qi.S=null,Qi.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),br(this,"tick"),this.da&&(Dr(this),this.start()))}},Qi.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Qi.M=function(){Nr.Z.M.call(this),Dr(this),delete this.g};class Mr extends pn{l(e){this.h=arguments,this.g?this.i=!0:Lr(this)}M(){super.M(),this.g&&(nn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}}function Ur(e){pn.call(this),this.h=e,this.g={}}fn(Ur,pn);var xr=[];function Fr(e,t,i,n){Array.isArray(i)||(i&&(xr[0]=i.toString()),i=xr);for(var r=0;r<i.length;r++){var s=hr(t,i[r],n||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function jr(e){An(e.g,(function(e,t){this.g.hasOwnProperty(t)&&dr(e)}),e),e.g={}}function Br(){this.g=!0}function Vr(e,t,i,n){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var i=JSON.parse(t);if(i)for(e=0;e<i.length;e++)if(Array.isArray(i[e])){var n=i[e];if(!(2>n.length)){var r=n[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Ir(i)}catch(e){return t}}(e,i)+(n?" "+n:"")}))}Ur.prototype.M=function(){Ur.Z.M.call(this),jr(this)},Ur.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Br.prototype.Aa=function(){this.g=!1},Br.prototype.info=function(){};var Hr={},zr=null;function $r(){return zr=zr||new yr}function Wr(e){Jn.call(this,Hr.Ma,e)}function Kr(e){const t=$r();br(t,new Wr(t,e))}function Gr(e,t){Jn.call(this,Hr.STAT_EVENT,e),this.stat=t}function qr(e){const t=$r();br(t,new Gr(t,e))}function Xr(e,t){Jn.call(this,Hr.Na,e),this.size=t}function Jr(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return nn.setTimeout((function(){e()}),t)}Hr.Ma="serverreachability",fn(Wr,Jn),Hr.STAT_EVENT="statevent",fn(Gr,Jn),Hr.Na="timingevent",fn(Xr,Jn);var Yr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Qr={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Zr(){}function es(e){return e.h||(e.h=e.i())}function ts(){}Zr.prototype.h=null;var is,ns={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function rs(){Jn.call(this,"d")}function ss(){Jn.call(this,"c")}function os(){}function as(e,t,i,n){this.l=e,this.j=t,this.m=i,this.X=n||1,this.V=new Ur(this),this.P=cs,e=xn?125:void 0,this.W=new Nr(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new hs}function hs(){this.i=null,this.g="",this.h=!1}fn(rs,Jn),fn(ss,Jn),fn(os,Zr),os.prototype.g=function(){return new XMLHttpRequest},os.prototype.i=function(){return{}},is=new os;var cs=45e3,ls={},us={};function ds(e,t,i){e.K=1,e.v=Ms(Cs(t)),e.s=i,e.U=!0,fs(e,null)}function fs(e,t){e.F=Date.now(),vs(e),e.A=Cs(e.v);var i=e.A,n=e.X;Array.isArray(n)||(n=[String(n)]),qs(i.h,"t",n),e.C=0,i=e.l.H,e.h=new hs,e.g=Xo(e.l,i?t:null,!e.s),0<e.O&&(e.L=new Mr(un(e.Ia,e,e.g),e.O)),Fr(e.V,e.g,"readystatechange",e.gb),t=e.H?Rn(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Kr(1),function(e,t,i,n,r,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),h=0;h<a.length;h++){var c=a[h].split("=");if(1<c.length){var l=c[0];c=c[1];var u=l.split("_");o=2<=u.length&&"type"==u[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+n+") [attempt "+r+"]: "+t+"\n"+i+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function ps(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function gs(e,t,i){let n,r=!0;for(;!e.I&&e.C<i.length;){if(n=ms(e,i),n==us){4==t&&(e.o=4,qr(14),r=!1),Vr(e.j,e.m,null,"[Incomplete Response]");break}if(n==ls){e.o=4,qr(15),Vr(e.j,e.m,i,"[Invalid Chunk]"),r=!1;break}Vr(e.j,e.m,n,null),_s(e,n)}ps(e)&&n!=us&&n!=ls&&(e.h.g="",e.C=0),4!=t||0!=i.length||e.h.h||(e.o=1,qr(16),r=!1),e.i=e.i&&r,r?0<i.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+i.length),Vo(t),t.L=!0,qr(11))):(Vr(e.j,e.m,i,"[Invalid Chunked Response]"),Is(e),ws(e))}function ms(e,t){var i=e.C,n=t.indexOf("\n",i);return-1==n?us:(i=Number(t.substring(i,n)),isNaN(i)?ls:(n+=1)+i>t.length?us:(t=t.substr(n,i),e.C=n+i,t))}function vs(e){e.Y=Date.now()+e.P,ys(e,e.P)}function ys(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Jr(un(e.eb,e),t)}function bs(e){e.B&&(nn.clearTimeout(e.B),e.B=null)}function ws(e){0==e.l.G||e.I||$o(e.l,e)}function Is(e){bs(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Dr(e.W),jr(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function _s(e,t){try{var i=e.l;if(0!=i.G&&(i.g==e||eo(i.i,e)))if(i.I=e.N,!e.J&&eo(i.i,e)&&3==i.G){try{var n=i.Ca.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var r=n;if(0==r[0]){e:if(!i.u){if(i.g){if(!(i.g.F+3e3<e.F))break e;zo(i),Do(i)}Bo(i),qr(18)}}else i.ta=r[1],0<i.ta-i.U&&37500>r[2]&&i.N&&0==i.A&&!i.v&&(i.v=Jr(un(i.ab,i),6e3));if(1>=Zs(i.i)&&i.ka){try{i.ka()}catch(e){}i.ka=void 0}}else Ko(i,11)}else if((e.J||i.g==e)&&zo(i),!wn(t))for(r=i.Ca.g.parse(t),t=0;t<r.length;t++){let c=r[t];if(i.U=c[0],c=c[1],2==i.G)if("c"==c[0]){i.J=c[1],i.la=c[2];const t=c[3];null!=t&&(i.ma=t,i.h.info("VER="+i.ma));const r=c[4];null!=r&&(i.za=r,i.h.info("SVER="+i.za));const l=c[5];null!=l&&"number"==typeof l&&0<l&&(n=1.5*l,i.K=n,i.h.info("backChannelRequestTimeoutMs_="+n)),n=i;const u=e.g;if(u){const e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.i;!s.g&&(En(e,"spdy")||En(e,"quic")||En(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(to(s,s.h),s.h=null))}if(n.D){const e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.sa=e,Ls(n.F,n.D,e))}}i.G=3,i.j&&i.j.xa(),i.$&&(i.O=Date.now()-e.F,i.h.info("Handshake RTT: "+i.O+"ms"));var o=e;if((n=i).oa=qo(n,n.H?n.la:null,n.W),o.J){io(n.i,o);var a=o,h=n.K;h&&a.setTimeout(h),a.B&&(bs(a),vs(a)),n.g=o}else jo(n);0<i.l.length&&Mo(i)}else"stop"!=c[0]&&"close"!=c[0]||Ko(i,7);else 3==i.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Ko(i,7):No(i):"noop"!=c[0]&&i.j&&i.j.wa(c),i.A=0)}Kr(4)}catch(e){}}function Es(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(sn(e)||"string"==typeof e)vn(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var i=e.T();else if(e.R&&"function"==typeof e.R)i=void 0;else if(sn(e)||"string"==typeof e){i=[];for(var n=e.length,r=0;r<n;r++)i.push(r)}else for(r in i=[],n=0,e)i[n++]=r;n=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(sn(e)){for(var t=[],i=e.length,n=0;n<i;n++)t.push(e[n]);return t}for(n in t=[],i=0,e)t[i++]=e[n];return t}(e),r=n.length;for(var s=0;s<r;s++)t.call(void 0,n[s],i&&i[s],e)}}function Ts(e,t){this.h={},this.g=[],this.i=0;var i=arguments.length;if(1<i){if(i%2)throw Error("Uneven number of arguments");for(var n=0;n<i;n+=2)this.set(arguments[n],arguments[n+1])}else if(e)if(e instanceof Ts)for(i=e.T(),n=0;n<i.length;n++)this.set(i[n],e.get(i[n]));else for(n in e)this.set(n,e[n])}function ks(e){if(e.i!=e.g.length){for(var t=0,i=0;t<e.g.length;){var n=e.g[t];Ss(e.h,n)&&(e.g[i++]=n),t++}e.g.length=i}if(e.i!=e.g.length){var r={};for(i=t=0;t<e.g.length;)Ss(r,n=e.g[t])||(e.g[i++]=n,r[n]=1),t++;e.g.length=i}}function Ss(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(Qi=as.prototype).setTimeout=function(e){this.P=e},Qi.gb=function(e){e=e.target;const t=this.L;t&&3==So(e)?t.l():this.Ia(e)},Qi.Ia=function(e){try{if(e==this.g)e:{const l=So(this.g);var t=this.g.Da();const u=this.g.ba();if(!(3>l)&&(3!=l||xn||this.g&&(this.h.h||this.g.ga()||Ao(this.g)))){this.I||4!=l||7==t||Kr(8==t||0>=u?3:2),bs(this);var i=this.g.ba();this.N=i;t:if(ps(this)){var n=Ao(this.g);e="";var r=n.length,s=4==So(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Is(this),ws(this);var o="";break t}this.h.i=new nn.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:s&&t==r-1});n.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==i,function(e,t,i,n,r,s,o){e.info((function(){return"XMLHTTP RESP ("+n+") [ attempt "+r+"]: "+t+"\n"+i+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,l,i),this.i){if(this.$&&!this.J){t:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wn(a)){var c=a;break t}}c=null}if(!(i=c)){this.i=!1,this.o=3,qr(12),Is(this),ws(this);break e}Vr(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,_s(this,i)}this.U?(gs(this,l,o),xn&&this.i&&3==l&&(Fr(this.V,this.W,"tick",this.fb),this.W.start())):(Vr(this.j,this.m,o,null),_s(this,o)),4==l&&Is(this),this.i&&!this.I&&(4==l?$o(this.l,this):(this.i=!1,vs(this)))}else 400==i&&0<o.indexOf("Unknown SID")?(this.o=3,qr(12)):(this.o=0,qr(13)),Is(this),ws(this)}}}catch(e){}},Qi.fb=function(){if(this.g){var e=So(this.g),t=this.g.ga();this.C<t.length&&(bs(this),gs(this,e,t),this.i&&4!=e&&vs(this))}},Qi.cancel=function(){this.I=!0,Is(this)},Qi.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Kr(3),qr(17)),Is(this),this.o=2,ws(this)):ys(this,this.Y-e)},(Qi=Ts.prototype).R=function(){ks(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},Qi.T=function(){return ks(this),this.g.concat()},Qi.get=function(e,t){return Ss(this.h,e)?this.h[e]:t},Qi.set=function(e,t){Ss(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},Qi.forEach=function(e,t){for(var i=this.T(),n=0;n<i.length;n++){var r=i[n],s=this.get(r);e.call(t,s,r,this)}};var As=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Rs(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Rs){this.g=void 0!==t?t:e.g,Os(this,e.j),this.s=e.s,Ns(this,e.i),Ds(this,e.m),this.l=e.l,t=e.h;var i=new $s;i.i=t.i,t.g&&(i.g=new Ts(t.g),i.h=t.h),Ps(this,i),this.o=e.o}else e&&(i=String(e).match(As))?(this.g=!!t,Os(this,i[1]||"",!0),this.s=Us(i[2]||""),Ns(this,i[3]||"",!0),Ds(this,i[4]),this.l=Us(i[5]||"",!0),Ps(this,i[6]||"",!0),this.o=Us(i[7]||"")):(this.g=!!t,this.h=new $s(null,this.g))}function Cs(e){return new Rs(e)}function Os(e,t,i){e.j=i?Us(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ns(e,t,i){e.i=i?Us(t,!0):t}function Ds(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ps(e,t,i){t instanceof $s?(e.h=t,function(e,t){t&&!e.j&&(Ws(e),e.i=null,e.g.forEach((function(e,t){var i=t.toLowerCase();t!=i&&(Ks(this,t),qs(this,i,e))}),e)),e.j=t}(e.h,e.g)):(i||(t=xs(t,Hs)),e.h=new $s(t,e.g))}function Ls(e,t,i){e.h.set(t,i)}function Ms(e){return Ls(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Us(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function xs(e,t,i){return"string"==typeof e?(e=encodeURI(e).replace(t,Fs),i&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Fs(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Rs.prototype.toString=function(){var e=[],t=this.j;t&&e.push(xs(t,js,!0),":");var i=this.i;return(i||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(xs(t,js,!0),"@"),e.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.m)&&e.push(":",String(i))),(i=this.l)&&(this.i&&"/"!=i.charAt(0)&&e.push("/"),e.push(xs(i,"/"==i.charAt(0)?Vs:Bs,!0))),(i=this.h.toString())&&e.push("?",i),(i=this.o)&&e.push("#",xs(i,zs)),e.join("")};var js=/[#\/\?@]/g,Bs=/[#\?:]/g,Vs=/[#\?]/g,Hs=/[#\?@]/g,zs=/#/g;function $s(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ws(e){e.g||(e.g=new Ts,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var i=0;i<e.length;i++){var n=e[i].indexOf("="),r=null;if(0<=n){var s=e[i].substring(0,n);r=e[i].substring(n+1)}else s=e[i];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,(function(t,i){e.add(decodeURIComponent(t.replace(/\+/g," ")),i)})))}function Ks(e,t){Ws(e),t=Xs(e,t),Ss(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,Ss((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&ks(e)))}function Gs(e,t){return Ws(e),t=Xs(e,t),Ss(e.g.h,t)}function qs(e,t,i){Ks(e,t),0<i.length&&(e.i=null,e.g.set(Xs(e,t),bn(i)),e.h+=i.length)}function Xs(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Qi=$s.prototype).add=function(e,t){Ws(this),this.i=null,e=Xs(this,e);var i=this.g.get(e);return i||this.g.set(e,i=[]),i.push(t),this.h+=1,this},Qi.forEach=function(e,t){Ws(this),this.g.forEach((function(i,n){vn(i,(function(i){e.call(t,i,n,this)}),this)}),this)},Qi.T=function(){Ws(this);for(var e=this.g.R(),t=this.g.T(),i=[],n=0;n<t.length;n++)for(var r=e[n],s=0;s<r.length;s++)i.push(t[n]);return i},Qi.R=function(e){Ws(this);var t=[];if("string"==typeof e)Gs(this,e)&&(t=yn(t,this.g.get(Xs(this,e))));else{e=this.g.R();for(var i=0;i<e.length;i++)t=yn(t,e[i])}return t},Qi.set=function(e,t){return Ws(this),this.i=null,Gs(this,e=Xs(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Qi.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},Qi.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),i=0;i<t.length;i++){var n=t[i],r=encodeURIComponent(String(n));n=this.R(n);for(var s=0;s<n.length;s++){var o=r;""!==n[s]&&(o+="="+encodeURIComponent(String(n[s]))),e.push(o)}}return this.i=e.join("&")};function Js(e){this.l=e||Ys,nn.PerformanceNavigationTiming?e=0<(e=nn.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(nn.g&&nn.g.Ea&&nn.g.Ea()&&nn.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ys=10;function Qs(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Zs(e){return e.h?1:e.g?e.g.size:0}function eo(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function to(e,t){e.g?e.g.add(t):e.h=t}function io(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function no(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const i of e.g.values())t=t.concat(i.D);return t}return bn(e.i)}function ro(){}function so(){this.g=new ro}function oo(e,t,i){const n=i||"";try{Es(e,(function(e,i){let r=e;on(e)&&(r=Ir(e)),t.push(n+i+"="+encodeURIComponent(r))}))}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}function ao(e,t,i,n,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(n)}catch(e){}}function ho(e){this.l=e.$b||null,this.j=e.ib||!1}function co(e,t){yr.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=lo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Js.prototype.cancel=function(){if(this.i=no(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},ro.prototype.stringify=function(e){return nn.JSON.stringify(e,void 0)},ro.prototype.parse=function(e){return nn.JSON.parse(e,void 0)},fn(ho,Zr),ho.prototype.g=function(){return new co(this.l,this.j)},ho.prototype.i=function(e){return function(){return e}}({}),fn(co,yr);var lo=0;function uo(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function fo(e){e.readyState=4,e.l=null,e.j=null,e.A=null,po(e)}function po(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Qi=co.prototype).open=function(e,t){if(this.readyState!=lo)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,po(this)},Qi.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||nn).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},Qi.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,fo(this)),this.readyState=lo},Qi.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,po(this)),this.g&&(this.readyState=3,po(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==nn.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;uo(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},Qi.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?fo(this):po(this),3==this.readyState&&uo(this)}},Qi.Ua=function(e){this.g&&(this.response=this.responseText=e,fo(this))},Qi.Ta=function(e){this.g&&(this.response=e,fo(this))},Qi.ha=function(){this.g&&fo(this)},Qi.setRequestHeader=function(e,t){this.v.append(e,t)},Qi.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Qi.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var i=t.next();!i.done;)i=i.value,e.push(i[0]+": "+i[1]),i=t.next();return e.join("\r\n")},Object.defineProperty(co.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var go=nn.JSON.parse;function mo(e){yr.call(this),this.headers=new Ts,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=vo,this.K=this.L=!1}fn(mo,yr);var vo="",yo=/^https?$/i,bo=["POST","PUT"];function wo(e){return"content-type"==e.toLowerCase()}function Io(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,_o(e),To(e)}function _o(e){e.D||(e.D=!0,br(e,"complete"),br(e,"error"))}function Eo(e){if(e.h&&void 0!==tn&&(!e.C[1]||4!=So(e)||2!=e.ba()))if(e.v&&4==So(e))Pr(e.Fa,0,e);else if(br(e,"readystatechange"),4==So(e)){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var i;if(!(i=t)){var n;if(n=0===a){var r=String(e.H).match(As)[1]||null;if(!r&&nn.self&&nn.self.location){var s=nn.self.location.protocol;r=s.substr(0,s.length-1)}n=!yo.test(r?r.toLowerCase():"")}i=n}if(i)br(e,"complete"),br(e,"success");else{e.m=6;try{var o=2<So(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.ba()+"]",_o(e)}}finally{To(e)}}}function To(e,t){if(e.g){ko(e);const i=e.g,n=e.C[0]?rn:null;e.g=null,e.C=null,t||br(e,"ready");try{i.onreadystatechange=n}catch(e){}}}function ko(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(nn.clearTimeout(e.A),e.A=null)}function So(e){return e.g?e.g.readyState:0}function Ao(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case vo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Ro(e,t,i){e:{for(n in i){var n=!1;break e}n=!0}n||(i=function(e){let t="";return An(e,(function(e,i){t+=i,t+=":",t+=e,t+="\r\n"})),t}(i),"string"==typeof e?null!=i&&encodeURIComponent(String(i)):Ls(e,t,i))}function Co(e,t,i){return i&&i.internalChannelParams&&i.internalChannelParams[e]||t}function Oo(e){this.za=0,this.l=[],this.h=new Br,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Co("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Co("baseRetryDelayMs",5e3,e),this.$a=Co("retryDelaySeedMs",1e4,e),this.Ya=Co("forwardChannelMaxRetries",2,e),this.ra=Co("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Js(e&&e.concurrentRequestLimit),this.Ca=new so,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function No(e){if(Po(e),3==e.G){var t=e.V++,i=Cs(e.F);Ls(i,"SID",e.J),Ls(i,"RID",t),Ls(i,"TYPE","terminate"),xo(e,i),(t=new as(e,e.h,t,void 0)).K=2,t.v=Ms(Cs(i)),i=!1,nn.navigator&&nn.navigator.sendBeacon&&(i=nn.navigator.sendBeacon(t.v.toString(),"")),!i&&nn.Image&&((new Image).src=t.v,i=!0),i||(t.g=Xo(t.l,null),t.g.ea(t.v)),t.F=Date.now(),vs(t)}Go(e)}function Do(e){e.g&&(Vo(e),e.g.cancel(),e.g=null)}function Po(e){Do(e),e.u&&(nn.clearTimeout(e.u),e.u=null),zo(e),e.i.cancel(),e.m&&("number"==typeof e.m&&nn.clearTimeout(e.m),e.m=null)}function Lo(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&Mo(e)}function Mo(e){Qs(e.i)||e.m||(e.m=!0,Ar(e.Ha,e),e.C=0)}function Uo(e,t){var i;i=t?t.m:e.V++;const n=Cs(e.F);Ls(n,"SID",e.J),Ls(n,"RID",i),Ls(n,"AID",e.U),xo(e,n),e.o&&e.s&&Ro(n,e.o,e.s),i=new as(e,e.h,i,e.C+1),null===e.o&&(i.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Fo(e,i,1e3),i.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),to(e.i,i),ds(i,n,t)}function xo(e,t){e.j&&Es({},(function(e,i){Ls(t,i,e)}))}function Fo(e,t,i){i=Math.min(e.l.length,i);var n=e.j?un(e.j.Oa,e.j,e):null;e:{var r=e.l;let t=-1;for(;;){const e=["count="+i];-1==t?0<i?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<i;o++){let i=r[o].h;const a=r[o].g;if(i-=t,0>i)t=Math.max(0,r[o].h-100),s=!1;else try{oo(a,e,"req"+i+"_")}catch(e){n&&n(a)}}if(s){n=e.join("&");break e}}}return e=e.l.splice(0,i),t.D=e,n}function jo(e){e.g||e.u||(e.Y=1,Ar(e.Ga,e),e.A=0)}function Bo(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=Jr(un(e.Ga,e),Wo(e,e.A)),e.A++,!0)}function Vo(e){null!=e.B&&(nn.clearTimeout(e.B),e.B=null)}function Ho(e){e.g=new as(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Cs(e.oa);Ls(t,"RID","rpc"),Ls(t,"SID",e.J),Ls(t,"CI",e.N?"0":"1"),Ls(t,"AID",e.U),xo(e,t),Ls(t,"TYPE","xmlhttp"),e.o&&e.s&&Ro(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var i=e.g;e=e.la,i.K=1,i.v=Ms(Cs(t)),i.s=null,i.U=!0,fs(i,e)}function zo(e){null!=e.v&&(nn.clearTimeout(e.v),e.v=null)}function $o(e,t){var i=null;if(e.g==t){zo(e),Vo(e),e.g=null;var n=2}else{if(!eo(e.i,t))return;i=t.D,io(e.i,t),n=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==n){i=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;br(n=$r(),new Xr(n,i,t,r)),Mo(e)}else jo(e);else if(3==(r=t.o)||0==r&&0<e.I||!(1==n&&function(e,t){return!(Zs(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=Jr(un(e.Ha,e,t),Wo(e,e.C)),e.C++,0)))}(e,t)||2==n&&Bo(e)))switch(i&&0<i.length&&(t=e.i,t.i=t.i.concat(i)),r){case 1:Ko(e,5);break;case 4:Ko(e,10);break;case 3:Ko(e,6);break;default:Ko(e,2)}}function Wo(e,t){let i=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(i*=2),i*t}function Ko(e,t){if(e.h.info("Error code "+t),2==t){var i=null;e.j&&(i=null);var n=un(e.jb,e);i||(i=new Rs("//www.google.com/images/cleardot.gif"),nn.location&&"http"==nn.location.protocol||Os(i,"https"),Ms(i)),function(e,t){const i=new Br;if(nn.Image){const n=new Image;n.onload=dn(ao,i,n,"TestLoadImage: loaded",!0,t),n.onerror=dn(ao,i,n,"TestLoadImage: error",!1,t),n.onabort=dn(ao,i,n,"TestLoadImage: abort",!1,t),n.ontimeout=dn(ao,i,n,"TestLoadImage: timeout",!1,t),nn.setTimeout((function(){n.ontimeout&&n.ontimeout()}),1e4),n.src=e}else t(!1)}(i.toString(),n)}else qr(2);e.G=0,e.j&&e.j.va(t),Go(e),Po(e)}function Go(e){e.G=0,e.I=-1,e.j&&(0==no(e.i).length&&0==e.l.length||(e.i.i.length=0,bn(e.l),e.l.length=0),e.j.ua())}function qo(e,t,i){let n=function(e){return e instanceof Rs?Cs(e):new Rs(e,void 0)}(i);if(""!=n.i)t&&Ns(n,t+"."+n.i),Ds(n,n.m);else{const e=nn.location;n=function(e,t,i,n){var r=new Rs(null,void 0);return e&&Os(r,e),t&&Ns(r,t),i&&Ds(r,i),n&&(r.l=n),r}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,i)}return e.aa&&An(e.aa,(function(e,t){Ls(n,t,e)})),t=e.D,i=e.sa,t&&i&&Ls(n,t,i),Ls(n,"VER",e.ma),xo(e,n),n}function Xo(e,t,i){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=i&&e.Ba&&!e.qa?new mo(new ho({ib:!0})):new mo(e.qa)).L=e.H,t}function Jo(){}function Yo(){if(Mn&&!(10<=Number(qn)))throw Error("Environmental error: no available transport.")}function Qo(e,t){yr.call(this),this.g=new Oo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!wn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!wn(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new ta(this)}function Zo(e){rs.call(this);var t=e.__sm__;if(t){e:{for(const i in t){e=i;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ea(){ss.call(this),this.status=1}function ta(e){this.g=e}(Qi=mo.prototype).ea=function(e,t,i,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():is.g(),this.C=this.u?es(this.u):es(is),this.g.onreadystatechange=un(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void Io(this,e)}e=i||"";const r=new Ts(this.headers);n&&Es(n,(function(e,t){r.set(t,e)})),n=function(e){e:{var t=wo;const i=e.length,n="string"==typeof e?e.split(""):e;for(let r=0;r<i;r++)if(r in n&&t.call(void 0,n[r],r,e)){t=r;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(r.T()),i=nn.FormData&&e instanceof nn.FormData,!(0<=mn(bo,t))||n||i||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ko(this),0<this.B&&((this.K=function(e){return Mn&&Kn()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=un(this.pa,this)):this.A=Pr(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Io(this,e)}},Qi.pa=function(){void 0!==tn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,br(this,"timeout"),this.abort(8))},Qi.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,br(this,"complete"),br(this,"abort"),To(this))},Qi.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),To(this,!0)),mo.Z.M.call(this)},Qi.Fa=function(){this.s||(this.F||this.v||this.l?Eo(this):this.cb())},Qi.cb=function(){Eo(this)},Qi.ba=function(){try{return 2<So(this)?this.g.status:-1}catch(e){return-1}},Qi.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Qi.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),go(t)}},Qi.Da=function(){return this.m},Qi.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Qi=Oo.prototype).ma=8,Qi.G=1,Qi.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},Qi.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new as(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=Rn(s),On(s,this.P)):s=this.P),null===this.o&&(r.H=s),this.ja)e:{for(var t=0,i=0;i<this.l.length;i++){var n=this.l[i];if(void 0===(n="__data__"in n.g&&"string"==typeof(n=n.g.__data__)?n.length:void 0))break;if(4096<(t+=n)){t=i;break e}if(4096===t||i===this.l.length-1){t=i+1;break e}}t=1e3}else t=1e3;t=Fo(this,r,t),Ls(i=Cs(this.F),"RID",e),Ls(i,"CVER",22),this.D&&Ls(i,"X-HTTP-Session-Id",this.D),xo(this,i),this.o&&s&&Ro(i,this.o,s),to(this.i,r),this.Ra&&Ls(i,"TYPE","init"),this.ja?(Ls(i,"$req",t),Ls(i,"SID","null"),r.$=!0,ds(r,i,null)):ds(r,i,t),this.G=2}}else 3==this.G&&(e?Uo(this,e):0==this.l.length||Qs(this.i)||Uo(this))},Qi.Ga=function(){if(this.u=null,Ho(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Jr(un(this.bb,this),e)}},Qi.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,qr(10),Do(this),Ho(this))},Qi.ab=function(){null!=this.v&&(this.v=null,Do(this),Bo(this),qr(19))},Qi.jb=function(e){e?(this.h.info("Successfully pinged google.com"),qr(2)):(this.h.info("Failed to ping google.com"),qr(1))},(Qi=Jo.prototype).xa=function(){},Qi.wa=function(){},Qi.va=function(){},Qi.ua=function(){},Qi.Oa=function(){},Yo.prototype.g=function(e,t){return new Qo(e,t)},fn(Qo,yr),Qo.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,i=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Ar(un(e.hb,e,t))),qr(0),e.W=t,e.aa=i||{},e.N=e.X,e.F=qo(e,null,e.W),Mo(e)},Qo.prototype.close=function(){No(this.g)},Qo.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Lo(this.g,t)}else this.v?((t={}).__data__=Ir(e),Lo(this.g,t)):Lo(this.g,e)},Qo.prototype.M=function(){this.g.j=null,delete this.j,No(this.g),delete this.g,Qo.Z.M.call(this)},fn(Zo,rs),fn(ea,ss),fn(ta,Jo),ta.prototype.xa=function(){br(this.g,"a")},ta.prototype.wa=function(e){br(this.g,new Zo(e))},ta.prototype.va=function(e){br(this.g,new ea(e))},ta.prototype.ua=function(){br(this.g,"b")},Yo.prototype.createWebChannel=Yo.prototype.g,Qo.prototype.send=Qo.prototype.u,Qo.prototype.open=Qo.prototype.m,Qo.prototype.close=Qo.prototype.close,Yr.NO_ERROR=0,Yr.TIMEOUT=8,Yr.HTTP_ERROR=6,Qr.COMPLETE="complete",ts.EventType=ns,ns.OPEN="a",ns.CLOSE="b",ns.ERROR="c",ns.MESSAGE="d",yr.prototype.listen=yr.prototype.N,mo.prototype.listenOnce=mo.prototype.O,mo.prototype.getLastError=mo.prototype.La,mo.prototype.getLastErrorCode=mo.prototype.Da,mo.prototype.getStatus=mo.prototype.ba,mo.prototype.getResponseJson=mo.prototype.Qa,mo.prototype.getResponseText=mo.prototype.ga,mo.prototype.send=mo.prototype.ea;en.createWebChannelTransport=function(){return new Yo},en.getStatEventTarget=function(){return $r()},en.ErrorCode=Yr,en.EventType=Qr,en.Event=Hr,en.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},en.FetchXmlHttpFactory=ho,en.WebChannel=ts,en.XhrIo=mo;var ia,na,ra={};function sa(){throw new Error("setTimeout has not been defined")}function oa(){throw new Error("clearTimeout has not been defined")}function aa(e){if(ia===setTimeout)return setTimeout(e,0);if((ia===sa||!ia)&&setTimeout)return ia=setTimeout,setTimeout(e,0);try{return ia(e,0)}catch(t){try{return ia.call(null,e,0)}catch(t){return ia.call(this,e,0)}}}!function(){try{ia="function"==typeof setTimeout?setTimeout:sa}catch(e){ia=sa}try{na="function"==typeof clearTimeout?clearTimeout:oa}catch(e){na=oa}}();var ha,ca=[],la=!1,ua=-1;function da(){la&&ha&&(la=!1,ha.length?ca=ha.concat(ca):ua=-1,ca.length&&fa())}function fa(){if(!la){var e=aa(da);la=!0;for(var t=ca.length;t;){for(ha=ca,ca=[];++ua<t;)ha&&ha[ua].run();ua=-1,t=ca.length}ha=null,la=!1,function(e){if(na===clearTimeout)return clearTimeout(e);if((na===oa||!na)&&clearTimeout)return na=clearTimeout,clearTimeout(e);try{na(e)}catch(t){try{return na.call(null,e)}catch(t){return na.call(this,e)}}}(e)}}function pa(e,t){this.fun=e,this.array=t}function ga(){}ra.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];ca.push(new pa(e,t)),1!==ca.length||la||aa(fa)},pa.prototype.run=function(){this.fun.apply(null,this.array)},ra.title="browser",ra.browser=!0,ra.env={},ra.argv=[],ra.version="",ra.versions={},ra.on=ga,ra.addListener=ga,ra.once=ga,ra.off=ga,ra.removeListener=ga,ra.removeAllListeners=ga,ra.emit=ga,ra.prependListener=ga,ra.prependOnceListener=ga,ra.listeners=function(e){return[]},ra.binding=function(e){throw new Error("process.binding is not supported")},ra.cwd=function(){return"/"},ra.chdir=function(e){throw new Error("process.chdir is not supported")},ra.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ma{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}ma.UNAUTHENTICATED=new ma(null),ma.GOOGLE_CREDENTIALS=new ma("google-credentials-uid"),ma.FIRST_PARTY=new ma("first-party-uid"),ma.MOCK_USER=new ma("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let va="9.9.4";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=new M("@firebase/firestore");function ba(e,...t){if(ya.logLevel<=C.DEBUG){const i=t.map(Ia);ya.debug(`Firestore (${va}): ${e}`,...i)}}function wa(e,...t){if(ya.logLevel<=C.ERROR){const i=t.map(Ia);ya.error(`Firestore (${va}): ${e}`,...i)}}function Ia(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(e="Unexpected state"){const t=`FIRESTORE (${va}) INTERNAL ASSERTION FAILED: `+e;throw wa(t),new Error(t)}function Ea(e,t){e||_a()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ta={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ka extends d{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ra{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ma.UNAUTHENTICATED)))}shutdown(){}}class Ca{start(e,t){let i=this.i;const n=e=>this.i!==i?(i=this.i,t(e)):Promise.resolve();let r=new Sa;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Sa,e.enqueueRetryable((()=>n(this.currentUser)))};const s=()=>{const t=r;e.enqueueRetryable((async()=>{await t.promise,await n(this.currentUser)}))},o=e=>{ba("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(ba("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Sa)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(ba("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Ea("string"==typeof t.accessToken),new Aa(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ea(null===e||"string"==typeof e),new ma(e)}constructor(e){this.t=e,this.currentUser=ma.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class Oa{I(){return this.g?this.g():(Ea(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}constructor(e,t,i,n){this.h=e,this.l=t,this.m=i,this.g=n,this.type="FirstParty",this.user=ma.FIRST_PARTY,this.p=new Map}}class Na{getToken(){return Promise.resolve(new Oa(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(ma.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(e,t,i,n){this.h=e,this.l=t,this.m=i,this.g=n}}class Da{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Pa{start(e,t){const i=e=>{null!=e.error&&ba("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const i=e.token!==this.A;return this.A=e.token,ba("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>i(t)))};const n=e=>{ba("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>n(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?n(e):ba("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Ea("string"==typeof e.token),this.A=e.token,new Da(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function La(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(i);else for(let t=0;t<e;t++)i[t]=Math.floor(256*Math.random());return i}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const n=La(40);for(let r=0;r<n.length;++r)i.length<20&&n[r]<t&&(i+=e.charAt(n[r]%e.length))}return i}}function Ua(e,t){return e<t?-1:e>t?1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xa{get length(){return this.len}isEqual(e){return 0===xa.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xa?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let n=0;n<i;n++){const i=e.get(n),r=t.get(n);if(i<r)return-1;if(i>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}constructor(e,t,i){void 0===t?t=0:t>e.length&&_a(),void 0===i?i=e.length-t:i>e.length-t&&_a(),this.segments=e,this.offset=t,this.len=i}}class Fa extends xa{construct(e,t,i){return new Fa(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ka(Ta.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((e=>e.length>0)))}return new Fa(t)}static emptyPath(){return new Fa([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja{static fromPath(e){return new ja(Fa.fromString(e))}static fromName(e){return new ja(Fa.fromString(e).popFirst(5))}static empty(){return new ja(Fa.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Fa.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Fa.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ja(new Fa(e.slice()))}constructor(e){this.path=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t,i,n){this.indexId=e,this.collectionGroup=t,this.fields=i,this.indexState=n}}Ba.UNKNOWN_ID=-1;function Va(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ha{ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ha.at=-1;class za{insert(e,t){return new za(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Wa.BLACK,null,null))}remove(e){return new za(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Wa.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(0===i)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const n=this.comparator(e,i.key);if(0===n)return t+i.left.size;n<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $a(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $a(this.root,e,this.comparator,!1)}getReverseIterator(){return new $a(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $a(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||Wa.EMPTY}}class $a{getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,i,n){this.isReverse=n,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&n&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class Wa{copy(e,t,i,n,r){return new Wa(null!=e?e:this.key,null!=t?t:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let n=this;const r=i(e,n.key);return n=r<0?n.copy(null,null,null,n.left.insert(e,t,i),null):0===r?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,i)),n.fixUp()}removeMin(){if(this.left.isEmpty())return Wa.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,n=this;if(t(e,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return Wa.EMPTY;i=n.right.min(),n=n.copy(i.key,i.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Wa.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Wa.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _a();if(this.right.isRed())throw _a();const e=this.left.check();if(e!==this.right.check())throw _a();return e+(this.isRed()?0:1)}constructor(e,t,i,n,r){this.key=e,this.value=t,this.color=null!=i?i:Wa.RED,this.left=null!=n?n:Wa.EMPTY,this.right=null!=r?r:Wa.EMPTY,this.size=this.left.size+1+this.right.size}}Wa.EMPTY=null,Wa.RED=!0,Wa.BLACK=!1,Wa.EMPTY=new class{get key(){throw _a()}get value(){throw _a()}get color(){throw _a()}get left(){throw _a()}get right(){throw _a()}copy(e,t,i,n,r){return this}insert(e,t,i){return new Wa(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ka{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const n=i.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let i;for(i=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ga(this.data.getIterator())}getIteratorFrom(e){return new Ga(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Ka))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,n=i.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ka(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new za(this.comparator)}}class Ga{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}let qa=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{static fromBase64String(e){const t=atob(e);return new Xa(t)}static fromUint8Array(e){const t=function(e){let t="";for(let i=0;i<e.length;++i)t+=String.fromCharCode(e[i]);return t}(e);return new Xa(t)}[qa](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ua(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}Xa.EMPTY_BYTE_STRING=new Xa("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ja(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ya(e){return"string"==typeof e?Xa.fromBase64String(e):Xa.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qa{constructor(e,t,i,n,r,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=n,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Za{static empty(){return new Za("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Za&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||"(default)"}}function eh(e){return 0===e&&1/e==-1/0}function th(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ih,nh;(nh=ih||(ih={}))[nh.OK=0]="OK",nh[nh.CANCELLED=1]="CANCELLED",nh[nh.UNKNOWN=2]="UNKNOWN",nh[nh.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",nh[nh.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",nh[nh.NOT_FOUND=5]="NOT_FOUND",nh[nh.ALREADY_EXISTS=6]="ALREADY_EXISTS",nh[nh.PERMISSION_DENIED=7]="PERMISSION_DENIED",nh[nh.UNAUTHENTICATED=16]="UNAUTHENTICATED",nh[nh.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",nh[nh.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",nh[nh.ABORTED=10]="ABORTED",nh[nh.OUT_OF_RANGE=11]="OUT_OF_RANGE",nh[nh.UNIMPLEMENTED=12]="UNIMPLEMENTED",nh[nh.INTERNAL=13]="INTERNAL",nh[nh.UNAVAILABLE=14]="UNAVAILABLE",nh[nh.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new za(ja.comparator);new za(ja.comparator);new za(ja.comparator),new Ka(ja.comparator);new Ka(Ua);const rh=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],sh=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],oh=sh;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(Ja(e.integerValue));else if("doubleValue"in e){const i=Ja(e.doubleValue);isNaN(i)?this.le(t,13):(this.le(t,15),eh(i)?t.fe(0):t.fe(i))}else if("timestampValue"in e){const i=e.timestampValue;this.le(t,20),"string"==typeof i?t.de(i):(t.de(`${i.seconds||""}`),t.fe(i.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(Ya(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){const i=e.geoPointValue;this.le(t,45),t.fe(i.latitude||0),t.fe(i.longitude||0)}else"mapValue"in e?th(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):_a()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){const i=e.fields||{};this.le(t,55);for(const e of Object.keys(i))this._e(e,t),this.ae(i[e],t)}pe(e,t){const i=e.values||[];this.le(t,50);for(const e of i)this.ae(e,t)}ge(e,t){this.le(t,37),ja.fromName(e).path.forEach((e=>{this.le(t,60),this.Ie(e,t)}))}le(e,t){e.fe(t)}we(e){e.fe(2)}constructor(){}}ah.Te=new ah;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Uint8Array(0);class hh{static withCacheSize(e){return new hh(e,hh.DEFAULT_COLLECTION_PERCENTILE,hh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hh.DEFAULT_COLLECTION_PERCENTILE=10,hh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,hh.DEFAULT=new hh(41943040,hh.DEFAULT_COLLECTION_PERCENTILE,hh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),hh.DISABLED=new hh(-1,0,0);function ch(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),n=Math.max(0,t-i);n>0&&ba("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,n,(()=>(this.To=Date.now(),e()))),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}constructor(e,t,i=1e3,n=1.5,r=6e4){this.Hs=e,this.timerId=t,this.wo=i,this.mo=n,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uh{static createAndSchedule(e,t,i,n,r){const s=Date.now()+i,o=new uh(e,t,s,n,r);return o.start(i),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ka(Ta.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(e,t,i,n,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=n,this.removalCallback=r,this.deferred=new Sa,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}}function dh(e,t){if(wa("AsyncQueue",`${t}: ${e}`),Va(e))return new ka(Ta.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fh{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ka(Ta.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sa;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=dh(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}constructor(e,t,i,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=n,this.user=ma.UNAUTHENTICATED,this.clientId=Ma.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,(async e=>{ba("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(i,(e=>(ba("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}}const ph=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gh{isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new ka(Ta.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ka(Ta.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,i,n){if(!0===t&&!0===n)throw new ka(Ta.INVALID_ARGUMENT,`${e} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{get app(){if(!this._app)throw new ka(Ta.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ka(Ta.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gh(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Ra;switch(e.type){case"gapi":const t=e.client;return new Na(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new ka(Ta.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=ph.get(e);t&&(ba("ComponentProvider","Removing Datastore"),ph.delete(e),t.terminate())}(this),Promise.resolve()}constructor(e,t,i,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gh({}),this._settingsFrozen=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vh{get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const t=ch();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise((()=>{}));const t=new Sa;return this.zc((()=>this.Lc&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Bc.push(e),this.Hc())))}async Hc(){if(0!==this.Bc.length){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!Va(e))throw e;ba("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao((()=>this.Hc()))}}zc(e){const t=this.$c.then((()=>(this.Kc=!0,e().catch((e=>{this.qc=e,this.Kc=!1;throw wa("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.Kc=!1,e))))));return this.$c=t,t}enqueueAfterDelay(e,t,i){this.Wc(),this.Qc.indexOf(e)>-1&&(t=0);const n=uh.createAndSchedule(this,e,t,i,(e=>this.Jc(e)));return this.Uc.push(n),n}Wc(){this.qc&&_a()}verifyOperationInProgress(){}async Yc(){let e;do{e=this.$c,await e}while(e!==this.$c)}Xc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}Zc(e){return this.Yc().then((()=>{this.Uc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Uc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Yc()}))}ta(e){this.Qc.push(e)}Jc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new lh(this,"async_queue_retry"),this.jc=()=>{const e=ch();e&&ba("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.bo()};const e=ch();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.jc)}}class yh extends mh{_terminate(){return this._firestoreClient||bh(this),this._firestoreClient.terminate()}constructor(e,t,i,n){super(e,t,i,n),this.type="firestore",this._queue=new vh,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}}function bh(e){var t;const i=e._freezeSettings(),n=(r=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",o=e._persistenceKey,new Qa(r,s,o,(a=i).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var r,s,o,a;e._firestoreClient=new fh(e._authCredentials,e._appCheckCredentials,e._queue,n)}new RegExp("[~\\*/\\[\\]]");!function(e,t=!0){va="9.9.4",se(new k("firestore",((e,{instanceIdentifier:i,options:n})=>{const r=e.getProvider("app").getImmediate(),s=new yh(new Ca(e.getProvider("auth-internal")),new Pa(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ka(Ta.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Za(e.options.projectId,t)}(r,i),r);return n=Object.assign({useFetchStreams:t},n),s._setSettings(n),s}),"PUBLIC").setMultipleInstances(!0)),le("@firebase/firestore","3.4.15",e),le("@firebase/firestore","3.4.15","esm2017")}();!function(e,t={}){if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),n=i.name;if("string"!=typeof n||!n)throw ae.create("bad-app-name",{appName:String(n)});const r=ie.get(n);if(r){if(m(e,r.options)&&m(i,r.config))return r;throw ae.create("duplicate-app",{appName:n})}const s=new A(n);for(const e of ne.values())s.addComponent(e);const o=new he(e,i,s);ie.set(n,o)}({apiKey:"AIzaSyCZI3-U0x6PGOl7WQ8d3XufBMDWVcK2VUM",authDomain:"movies-library-4190e.firebaseapp.com",projectId:"movies-library-4190e",storageBucket:"movies-library-4190e.appspot.com",messagingSenderId:"459026159567",appId:"1:459026159567:web:a7d96b37414d1695c5a4ba"});const wh=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e=ce()){const t=oe(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const i=oe(e,"auth");if(i.isInitialized()){const e=i.getImmediate();if(m(i.getOptions(),null!=t?t:{}))return e;Se(e,"already-initialized")}return i.initialize({options:t})}(e,{popupRedirectResolver:Xi,persistence:[ui,Yt,Zt]})}(),Ih=document.querySelector(".signup");Ih.addEventListener("submit",(e=>{e.preventDefault();const t=Ih.email.value,i=Ih.password.value;qt(wh,t,i).then((e=>{console.log("user created:",e.user),Ih.reset(),document.querySelector(".whenLoggedIn").style.display="block",document.querySelector(".whenLoggedOut").style.display="none"})).catch((e=>{console.log(e.message)}))}));
//# sourceMappingURL=index.f7a086a2.js.map
