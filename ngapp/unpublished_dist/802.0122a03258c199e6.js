"use strict";(self.webpackChunkan_scealai=self.webpackChunkan_scealai||[]).push([[802],{5802:(Z,V,f)=>{f.d(V,{g6:()=>J,fi:()=>A});var z=f(5861),b=f(6895),t=f(4650),w=f(1481),M=f(9770),L=f(727),y=f(4968),I=f(7579),H=f(6063);class F extends I.x{constructor(r=1/0,e=1/0,s=H.l){super(),this._bufferSize=r,this._windowTime=e,this._timestampProvider=s,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,r),this._windowTime=Math.max(1,e)}next(r){const{isStopped:e,_buffer:s,_infiniteTimeWindow:n,_timestampProvider:o,_windowTime:l}=this;e||(s.push(r),!n&&s.push(o.now()+l)),this._trimBuffer(),super.next(r)}_subscribe(r){this._throwIfClosed(),this._trimBuffer();const e=this._innerSubscribe(r),{_infiniteTimeWindow:s,_buffer:n}=this,o=n.slice();for(let l=0;l<o.length&&!r.closed;l+=s?1:2)r.next(o[l]);return this._checkFinalizedStatuses(r),e}_trimBuffer(){const{_bufferSize:r,_timestampProvider:e,_buffer:s,_infiniteTimeWindow:n}=this,o=(n?1:2)*r;if(r<1/0&&o<s.length&&s.splice(0,s.length-o),!n){const l=e.now();let d=0;for(let m=1;m<s.length&&s[m]<=l;m+=2)d=m;d&&s.splice(0,d+1)}}}var _=f(3099),T=f(8372),x=f(4006);function N(i,r){1&i&&t._UZ(0,"div",2)}function P(i,r){1&i&&t._UZ(0,"pre",2)}function R(i,r){if(1&i&&(t.ynx(0),t.YNc(1,N,1,0,"div",1),t.YNc(2,P,1,0,"pre",1),t.BQk()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",!e.preserve),t.xp6(1),t.Q6J("ngIf",e.preserve)}}function Y(i,r){1&i&&t._UZ(0,"div",2)}function k(i,r){1&i&&t._UZ(0,"pre",2)}function D(i,r){if(1&i&&(t.ynx(0),t.YNc(1,Y,1,0,"div",1),t.YNc(2,k,1,0,"pre",1),t.BQk()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",!e.preserve),t.xp6(1),t.Q6J("ngIf",e.preserve)}}const W=[[["","quill-editor-toolbar",""]]],B=["[quill-editor-toolbar]"],q={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]},E=(i,r)=>i||r||"html",O=new t.OlP("config",{providedIn:"root",factory:()=>({modules:q})});let S=(()=>{class i{constructor(e,s){var n=this;this.config=s,this.quill$=(0,M.P)((0,z.Z)(function*(){if(!n.Quill){const o=n.document.addEventListener;n.document.addEventListener=n.document.__zone_symbol__addEventListener||n.document.addEventListener;const l=yield f.e(971).then(f.t.bind(f,9971,19));n.document.addEventListener=o,n.Quill=l.default?l.default:l}return n.config.customOptions?.forEach(o=>{const l=n.Quill.import(o.import);l.whitelist=o.whitelist,n.Quill.register(l,!0,n.config.suppressGlobalRegisterWarning)}),n.config.customModules?.forEach(({implementation:o,path:l})=>{n.Quill.register(l,o,n.config.suppressGlobalRegisterWarning)}),n.Quill})).pipe(function j(i,r,e){let s,n=!1;return i&&"object"==typeof i?({bufferSize:s=1/0,windowTime:r=1/0,refCount:n=!1,scheduler:e}=i):s=i??1/0,(0,_.B)({connector:()=>new F(s,r,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:n})}({bufferSize:1,refCount:!0})),this.document=e.get(b.K0),this.config||(this.config={modules:q})}getQuill(){return this.quill$}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(t.zs3),t.LFG(O,8))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),G=(()=>{class i{constructor(e,s,n,o,l,d,m,p){this.elementRef=s,this.cd=n,this.domSanitizer=o,this.platformId=l,this.renderer=d,this.zone=m,this.service=p,this.required=!1,this.customToolbarPosition="top",this.styles=null,this.strict=!0,this.customOptions=[],this.customModules=[],this.preserveWhitespace=!1,this.trimOnValidation=!1,this.compareValues=!1,this.filterNull=!1,this.defaultEmptyValue=null,this.onEditorCreated=new t.vpe,this.onEditorChanged=new t.vpe,this.onContentChanged=new t.vpe,this.onSelectionChanged=new t.vpe,this.onFocus=new t.vpe,this.onBlur=new t.vpe,this.disabled=!1,this.preserve=!1,this.toolbarPosition="top",this.subscription=null,this.quillSubscription=null,this.valueGetter=(c,h)=>{let a=h.querySelector(".ql-editor").innerHTML;("<p><br></p>"===a||"<div><br></div>"===a)&&(a=this.defaultEmptyValue);let u=a;const g=E(this.format,this.service.config.format);if("text"===g)u=c.getText();else if("object"===g)u=c.getContents();else if("json"===g)try{u=JSON.stringify(c.getContents())}catch{u=c.getText()}return u},this.valueSetter=(c,h)=>{const a=E(this.format,this.service.config.format);if("html"===a)return([!0,!1].includes(this.sanitize)?this.sanitize:this.service.config.sanitize||!1)&&(h=this.domSanitizer.sanitize(t.q3G.HTML,h)),c.clipboard.convert(h);if("json"===a)try{return JSON.parse(h)}catch{return[{insert:h}]}return h},this.selectionChangeHandler=(c,h,a)=>{const u=!c&&!!this.onModelTouched;!this.onBlur.observers.length&&!this.onFocus.observers.length&&!this.onSelectionChanged.observers.length&&!u||this.zone.run(()=>{null===c?this.onBlur.emit({editor:this.quillEditor,source:a}):null===h&&this.onFocus.emit({editor:this.quillEditor,source:a}),this.onSelectionChanged.emit({editor:this.quillEditor,oldRange:h,range:c,source:a}),u&&this.onModelTouched(),this.cd.markForCheck()})},this.textChangeHandler=(c,h,a)=>{const u=this.quillEditor.getText(),g=this.quillEditor.getContents();let v=this.editorElem.querySelector(".ql-editor").innerHTML;("<p><br></p>"===v||"<div><br></div>"===v)&&(v=this.defaultEmptyValue);const C=this.trackChanges||this.service.config.trackChanges,Q=("user"===a||C&&"all"===C)&&!!this.onModelChange;!this.onContentChanged.observers.length&&!Q||this.zone.run(()=>{Q&&this.onModelChange(this.valueGetter(this.quillEditor,this.editorElem)),this.onContentChanged.emit({content:g,delta:c,editor:this.quillEditor,html:v,oldDelta:h,source:a,text:u}),this.cd.markForCheck()})},this.editorChangeHandler=(c,h,a,u)=>{if(this.onEditorChanged.observers.length)if("text-change"===c){const g=this.quillEditor.getText(),v=this.quillEditor.getContents();let C=this.editorElem.querySelector(".ql-editor").innerHTML;("<p><br></p>"===C||"<div><br></div>"===C)&&(C=this.defaultEmptyValue),this.zone.run(()=>{this.onEditorChanged.emit({content:v,delta:h,editor:this.quillEditor,event:c,html:C,oldDelta:a,source:u,text:g}),this.cd.markForCheck()})}else this.zone.run(()=>{this.onEditorChanged.emit({editor:this.quillEditor,event:c,oldRange:a,range:h,source:u}),this.cd.markForCheck()})},this.document=e.get(b.K0)}static normalizeClassNames(e){return e.trim().split(" ").reduce((n,o)=>{const l=o.trim();return l&&n.push(l),n},[])}ngOnInit(){this.preserve=this.preserveWhitespace,this.toolbarPosition=this.customToolbarPosition}ngAfterViewInit(){(0,b.PM)(this.platformId)||(this.quillSubscription=this.service.getQuill().subscribe(e=>{this.editorElem=this.elementRef.nativeElement.querySelector("[quill-editor-element]");const s=this.elementRef.nativeElement.querySelector("[quill-editor-toolbar]"),n=Object.assign({},this.modules||this.service.config.modules);s?n.toolbar=s:void 0===n.toolbar&&(n.toolbar=q.toolbar);let o=void 0!==this.placeholder?this.placeholder:this.service.config.placeholder;void 0===o&&(o="Insert text here ..."),this.styles&&Object.keys(this.styles).forEach(a=>{this.renderer.setStyle(this.editorElem,a,this.styles[a])}),this.classes&&this.addClasses(this.classes),this.customOptions.forEach(a=>{const u=e.import(a.import);u.whitelist=a.whitelist,e.register(u,!0)}),this.customModules.forEach(({implementation:a,path:u})=>{e.register(u,a)});let l=this.bounds&&"self"===this.bounds?this.editorElem:this.bounds;l||(l=this.service.config.bounds?this.service.config.bounds:this.document.body);let d=this.debug;!d&&!1!==d&&this.service.config.debug&&(d=this.service.config.debug);let m=this.readOnly;!m&&!1!==this.readOnly&&(m=void 0!==this.service.config.readOnly&&this.service.config.readOnly);let p=this.defaultEmptyValue;this.service.config.hasOwnProperty("defaultEmptyValue")&&(p=this.service.config.defaultEmptyValue);let c=this.scrollingContainer;!c&&null!==this.scrollingContainer&&(c=null===this.service.config.scrollingContainer||this.service.config.scrollingContainer?this.service.config.scrollingContainer:null);let h=this.formats;if(!h&&void 0===h&&(h=this.service.config.formats?[...this.service.config.formats]:null===this.service.config.formats?null:void 0),this.zone.runOutsideAngular(()=>{if(this.quillEditor=new e(this.editorElem,{bounds:l,debug:d,formats:h,modules:n,placeholder:o,readOnly:m,defaultEmptyValue:p,scrollingContainer:c,strict:this.strict,theme:this.theme||(this.service.config.theme?this.service.config.theme:"snow")}),this.linkPlaceholder){const u=this.quillEditor?.theme?.tooltip?.root?.querySelector("input[data-link]");u?.dataset&&(u.dataset.link=this.linkPlaceholder)}}),this.content){if("text"===E(this.format,this.service.config.format))this.quillEditor.setText(this.content,"silent");else{const u=this.valueSetter(this.quillEditor,this.content);this.quillEditor.setContents(u,"silent")}this.quillEditor.getModule("history").clear()}this.setDisabledState(),this.addQuillEventListeners(),(this.onEditorCreated.observers.length||this.onValidatorChanged)&&requestAnimationFrame(()=>{this.onValidatorChanged&&this.onValidatorChanged(),this.onEditorCreated.emit(this.quillEditor)})}))}ngOnDestroy(){this.dispose(),this.quillSubscription?.unsubscribe(),this.quillSubscription=null}ngOnChanges(e){if(this.quillEditor){if(e.readOnly&&this.quillEditor.enable(!e.readOnly.currentValue),e.placeholder&&(this.quillEditor.root.dataset.placeholder=e.placeholder.currentValue),e.defaultEmptyValue&&(this.quillEditor.root.dataset.defaultEmptyValue=e.defaultEmptyValue.currentValue),e.styles){const s=e.styles.currentValue,n=e.styles.previousValue;n&&Object.keys(n).forEach(o=>{this.renderer.removeStyle(this.editorElem,o)}),s&&Object.keys(s).forEach(o=>{this.renderer.setStyle(this.editorElem,o,this.styles[o])})}if(e.classes){const s=e.classes.currentValue,n=e.classes.previousValue;n&&this.removeClasses(n),s&&this.addClasses(s)}e.debounceTime&&this.addQuillEventListeners()}}addClasses(e){i.normalizeClassNames(e).forEach(s=>{this.renderer.addClass(this.editorElem,s)})}removeClasses(e){i.normalizeClassNames(e).forEach(s=>{this.renderer.removeClass(this.editorElem,s)})}writeValue(e){if(this.filterNull&&null===e||(this.content=e,!this.quillEditor))return;const s=E(this.format,this.service.config.format),n=this.valueSetter(this.quillEditor,e);if(this.compareValues){const o=this.quillEditor.getContents();if(JSON.stringify(o)===JSON.stringify(n))return}e?"text"===s?this.quillEditor.setText(e):this.quillEditor.setContents(n):this.quillEditor.setText("")}setDisabledState(e=this.disabled){this.disabled=e,this.quillEditor&&(e?(this.quillEditor.disable(),this.renderer.setAttribute(this.elementRef.nativeElement,"disabled","disabled")):(this.readOnly||this.quillEditor.enable(),this.renderer.removeAttribute(this.elementRef.nativeElement,"disabled")))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}registerOnValidatorChange(e){this.onValidatorChanged=e}validate(){if(!this.quillEditor)return null;const e={};let s=!0;const n=this.quillEditor.getText(),o=this.trimOnValidation?n.trim().length:1===n.length&&0===n.trim().length?0:n.length-1,l=this.quillEditor.getContents().ops,d=l&&1===l.length&&["\n",""].includes(l[0].insert);return this.minLength&&o&&o<this.minLength&&(e.minLengthError={given:o,minLength:this.minLength},s=!1),this.maxLength&&o>this.maxLength&&(e.maxLengthError={given:o,maxLength:this.maxLength},s=!1),this.required&&!o&&d&&(e.requiredError={empty:!0},s=!1),s?null:e}addQuillEventListeners(){this.dispose(),this.zone.runOutsideAngular(()=>{this.subscription=new L.w0,this.subscription.add((0,y.R)(this.quillEditor,"selection-change").subscribe(([n,o,l])=>{this.selectionChangeHandler(n,o,l)}));let e=(0,y.R)(this.quillEditor,"text-change"),s=(0,y.R)(this.quillEditor,"editor-change");"number"==typeof this.debounceTime&&(e=e.pipe((0,T.b)(this.debounceTime)),s=s.pipe((0,T.b)(this.debounceTime))),this.subscription.add(e.subscribe(([n,o,l])=>{this.textChangeHandler(n,o,l)})),this.subscription.add(s.subscribe(([n,o,l,d])=>{this.editorChangeHandler(n,o,l,d)}))})}dispose(){null!==this.subscription&&(this.subscription.unsubscribe(),this.subscription=null)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.zs3),t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(w.H7),t.Y36(t.Lbi),t.Y36(t.Qsj),t.Y36(t.R0b),t.Y36(S))},i.\u0275dir=t.lG2({type:i,inputs:{format:"format",theme:"theme",modules:"modules",debug:"debug",readOnly:"readOnly",placeholder:"placeholder",maxLength:"maxLength",minLength:"minLength",required:"required",formats:"formats",customToolbarPosition:"customToolbarPosition",sanitize:"sanitize",styles:"styles",strict:"strict",scrollingContainer:"scrollingContainer",bounds:"bounds",customOptions:"customOptions",customModules:"customModules",trackChanges:"trackChanges",preserveWhitespace:"preserveWhitespace",classes:"classes",trimOnValidation:"trimOnValidation",linkPlaceholder:"linkPlaceholder",compareValues:"compareValues",filterNull:"filterNull",debounceTime:"debounceTime",defaultEmptyValue:"defaultEmptyValue",valueGetter:"valueGetter",valueSetter:"valueSetter"},outputs:{onEditorCreated:"onEditorCreated",onEditorChanged:"onEditorChanged",onContentChanged:"onContentChanged",onSelectionChanged:"onSelectionChanged",onFocus:"onFocus",onBlur:"onBlur"},features:[t.TTD]}),i})(),J=(()=>{class i extends G{constructor(e,s,n,o,l,d,m,p){super(e,s,n,o,l,d,m,p)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.zs3),t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(w.H7),t.Y36(t.Lbi),t.Y36(t.Qsj),t.Y36(t.R0b),t.Y36(S))},i.\u0275cmp=t.Xpm({type:i,selectors:[["quill-editor"]],features:[t._Bn([{multi:!0,provide:x.JU,useExisting:(0,t.Gpc)(()=>i)},{multi:!0,provide:x.Cf,useExisting:(0,t.Gpc)(()=>i)}]),t.qOj],ngContentSelectors:B,decls:3,vars:2,consts:[[4,"ngIf"],["quill-editor-element","",4,"ngIf"],["quill-editor-element",""]],template:function(e,s){1&e&&(t.F$t(W),t.YNc(0,R,3,2,"ng-container",0),t.Hsn(1),t.YNc(2,D,3,2,"ng-container",0)),2&e&&(t.Q6J("ngIf","top"!==s.toolbarPosition),t.xp6(2),t.Q6J("ngIf","top"===s.toolbarPosition))},dependencies:[b.O5],styles:[":host{display:inline-block}\n"],encapsulation:2}),i})(),A=(()=>{class i{static forRoot(e){return{ngModule:i,providers:[{provide:O,useValue:e}]}}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[b.ez]]}),i})()}}]);