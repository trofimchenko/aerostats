import{A as L,B as R,a as _e,c as ve,d as ye,e as be,f as xe,g as Se,l as ke,n as Ce,o as we,p as Ie,t as Te,u as Ae,w as S,x as Me,y as Ee,z as Pe}from"./chunk-TBMS6SL5.js";import{$ as _,$a as te,$b as P,Ca as A,Cb as oe,Db as ae,Eb as ce,Fb as se,Gb as d,Hb as me,I as U,Ib as C,Kb as g,Lb as le,Nb as b,Ob as x,Pb as pe,Sa as s,T as $,Ta as l,Ua as X,V as T,Wa as J,Wb as de,Y as G,Ya as q,_a as ee,da as u,gb as re,gc as ue,ha as Q,ia as Y,j as V,jb as f,kb as v,lb as p,mb as M,na as N,nb as ie,oa as j,ob as ne,oc as ge,pa as z,pc as F,qa as Z,qb as a,rb as c,sb as h,tb as E,tc as he,ub as B,uc as fe,va as K,vc as w,wb as W,yb as y}from"./chunk-I7RNCANZ.js";var Fe=(r,e)=>!_(S).currentUser();var Le=[{path:"",loadComponent:()=>import("./chunk-HQNFABNV.js").then(r=>r.PageComponent)},{path:"products",loadComponent:()=>import("./chunk-UMPQLQK3.js").then(r=>r.ProductListComponent)},{path:"contact",loadComponent:()=>import("./chunk-MSK5FRLE.js").then(r=>r.ContactComponent)},{path:"auth",canActivate:[Fe],loadChildren:()=>import("./chunk-JMXST36L.js").then(r=>r.AuthModule)},{path:"page-not-found",loadComponent:()=>import("./chunk-XICRZNVB.js").then(r=>r.PageNotFoundComponent)},{path:"**",loadComponent:()=>import("./chunk-HQNFABNV.js").then(r=>r.PageComponent)}];var Ue="@",$e=(()=>{let e=class e{constructor(t,i,n,m,I){this.doc=t,this.delegate=i,this.zone=n,this.animationType=m,this.moduleImpl=I,this._rendererFactoryPromise=null,this.scheduler=_(J,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-JEDFI4GI.js").then(i=>i)).catch(i=>{throw new $(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:n})=>{this._engine=i(this.animationType,this.doc);let m=new n(this.delegate,this._engine,this.zone);return this.delegate=m,m})}createRenderer(t,i){let n=this.delegate.createRenderer(t,i);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let m=new H(n);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(I=>{let Ve=I.createRenderer(t,i);m.use(Ve),this.scheduler?.notify(9)}).catch(I=>{m.use(n)}),m}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){X()},e.\u0275prov=T({token:e,factory:e.\u0275fac});let r=e;return r})(),H=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let o of this.replay)o(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,o){return this.delegate.createElement(e,o)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,o){this.delegate.appendChild(e,o)}insertBefore(e,o,t,i){this.delegate.insertBefore(e,o,t,i)}removeChild(e,o,t){this.delegate.removeChild(e,o,t)}selectRootElement(e,o){return this.delegate.selectRootElement(e,o)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,o,t,i){this.delegate.setAttribute(e,o,t,i)}removeAttribute(e,o,t){this.delegate.removeAttribute(e,o,t)}addClass(e,o){this.delegate.addClass(e,o)}removeClass(e,o){this.delegate.removeClass(e,o)}setStyle(e,o,t,i){this.delegate.setStyle(e,o,t,i)}removeStyle(e,o,t){this.delegate.removeStyle(e,o,t)}setProperty(e,o,t){this.shouldReplay(o)&&this.replay.push(i=>i.setProperty(e,o,t)),this.delegate.setProperty(e,o,t)}setValue(e,o){this.delegate.setValue(e,o)}listen(e,o,t){return this.shouldReplay(o)&&this.replay.push(i=>i.listen(e,o,t)),this.delegate.listen(e,o,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(Ue)}};function Re(r="animations"){return ee("NgAsyncAnimations"),Q([{provide:q,useFactory:(e,o,t)=>new $e(e,o,t,r),deps:[ue,xe,te]},{provide:A,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var O=(()=>{let e=class e{constructor(){this.loadingSub=new V(!1),this.loadingMap=new Map}setLoading(t,i){i&&(t===!0?(this.loadingMap.set(i,t),this.loadingSub.next(!0)):t===!1&&this.loadingMap.has(i)&&this.loadingMap.delete(i),this.loadingMap.size===0&&this.loadingSub.next(!1))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var Qe=new _e(()=>!1),Oe=(r,e)=>{if(r.context.get(Qe))return e(r);let o=_(O);return o.setLoading(!0,r.url),e(r).pipe(U(()=>{o.setLoading(!1,r.url)}))};var D=class{http;prefix;suffix;constructor(e,o="/assets/i18n/",t=".json"){this.http=e,this.prefix=o,this.suffix=t}getTranslation(e){return this.http.get(`${this.prefix}${e}${this.suffix}`)}};function Ye(r){return new D(r,"./assets/i18n/",".json")}var De={providers:[de(),Ie(Le),ye(be([Te,Oe])),Re(),Y(L.forRoot({loader:{provide:Me,useFactory:Ye,deps:[ve]}}))]};var Je=()=>({exact:!0});function qe(r,e){r&1&&(a(0,"button",14),d(1," Login "),c())}function et(r,e){r&1&&(a(0,"button",15),d(1," Sign up "),c())}function tt(r,e){if(r&1){let o=B();a(0,"button",16),W("click",function(){N(o);let i=y();return j(i.authService.logoff())}),d(1," Logoff "),c()}}function rt(r,e){if(r&1){let o=B();a(0,"li")(1,"a",17),W("click",function(){let i=N(o).$implicit,n=y();return j(n.localeService.setLocale(i))}),d(2),c()()}if(r&2){let o=e.$implicit,t=y();s(2),me(t.localeService.getLocaleNameByLocaleCode(o))}}var Ne=(()=>{let e=class e{constructor(t,i,n){this.authService=t,this.traslateService=i,this.localeService=n,this.defaultPageUrl=Ae.defaultPageUrl}};e.\u0275fac=function(i){return new(i||e)(l(S),l(Ee),l(R))},e.\u0275cmp=u({type:e,selectors:[["core-header"]],standalone:!0,features:[g],decls:24,vars:17,consts:[[1,"container"],[1,"d-flex","flex-wrap","align-items-center","justify-content-center","justify-content-md-between","py-3","mb-4","border-bottom",2,"min-width","320px"],[1,"nav","col-12","col-md-auto","mb-2","justify-content-center","mb-md-0"],["routerLinkActive","link-secondary",1,"nav-link","px-2","ps-0",3,"routerLink","routerLinkActiveOptions"],["routerLink","./products","routerLinkActive","link-secondary",1,"nav-link","px-2"],["routerLink","./contact","routerLinkActive","link-secondary",1,"nav-link","px-2"],[1,"col-md-4","text-center","text-md-end"],["type","button","routerLink","./auth/login","class","btn btn-outline-primary me-2 mt-2",4,"ngIf"],["type","button","routerLink","./auth/signup","class","btn btn-primary me-2 mt-2",4,"ngIf"],["type","button","class","btn btn-primary me-2 mt-2",3,"click",4,"ngIf"],[1,"btn-group","d-inline-block"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-secondary","dropdown-toggle","me-2","mt-2"],[1,"dropdown-menu"],[4,"ngFor","ngForOf"],["type","button","routerLink","./auth/login",1,"btn","btn-outline-primary","me-2","mt-2"],["type","button","routerLink","./auth/signup",1,"btn","btn-primary","me-2","mt-2"],["type","button",1,"btn","btn-primary","me-2","mt-2",3,"click"],[1,"dropdown-item",3,"click"]],template:function(i,n){i&1&&(a(0,"div",0)(1,"header",1)(2,"ul",2)(3,"li")(4,"a",3),d(5),b(6,"translate"),c()(),a(7,"li")(8,"a",4),d(9),b(10,"translate"),c()(),a(11,"li")(12,"a",5),d(13),b(14,"translate"),c()()(),a(15,"div",6),f(16,qe,2,0,"button",7)(17,et,2,0,"button",8)(18,tt,2,0,"button",9),a(19,"div",10)(20,"button",11),d(21),c(),a(22,"ul",12),f(23,rt,3,1,"li",13),c()()()()()),i&2&&(s(4),p("routerLink",n.defaultPageUrl)("routerLinkActiveOptions",le(16,Je)),s(),C(" ",x(6,10,"general.menu-links.home.title")," "),s(4),C(" ",x(10,12,"general.menu-links.products.title")," "),s(4),C(" ",x(14,14,"general.menu-links.contact.title")," "),s(3),p("ngIf",n.authService.currentUser()===null),s(),p("ngIf",n.authService.currentUser()===null),s(),p("ngIf",n.authService.currentUser()),s(3),C(" ",n.traslateService.currentLang.toUpperCase()," "),s(2),p("ngForOf",n.traslateService.getLangs()))},dependencies:[Ce,we,w,ge,F,L,Pe]});let r=e;return r})();var je=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["core-footer"]],standalone:!0,features:[g],decls:4,vars:0,consts:[[1,"container"],[1,"py-3","my-4"],[1,"text-center","text-body-secondary"]],template:function(i,n){i&1&&(a(0,"div",0)(1,"footer",1)(2,"p",2),d(3,"\xA9 2024 Company, Inc"),c()()())}});let r=e;return r})();var it=["determinateSpinner"];function nt(r,e){if(r&1&&(z(),a(0,"svg",11),h(1,"circle",12),c()),r&2){let o=y();v("viewBox",o._viewBox()),s(),M("stroke-dasharray",o._strokeCircumference(),"px")("stroke-dashoffset",o._strokeCircumference()/2,"px")("stroke-width",o._circleStrokeWidth(),"%"),v("r",o._circleRadius())}}var ot=new G("mat-progress-spinner-default-options",{providedIn:"root",factory:at});function at(){return{diameter:ze}}var ze=100,ct=10,Be=(()=>{let e=class e{get color(){return this._color||this._defaultColor}set color(t){this._color=t}constructor(t,i,n){this._elementRef=t,this._defaultColor="primary",this._value=0,this._diameter=ze,this._noopAnimations=i==="NoopAnimations"&&!!n&&!n._forceAnimations,this.mode=t.nativeElement.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",n&&(n.color&&(this.color=this._defaultColor=n.color),n.diameter&&(this.diameter=n.diameter),n.strokeWidth&&(this.strokeWidth=n.strokeWidth))}get value(){return this.mode==="determinate"?this._value:0}set value(t){this._value=Math.max(0,Math.min(100,t||0))}get diameter(){return this._diameter}set diameter(t){this._diameter=t||0}get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(t){this._strokeWidth=t||0}_circleRadius(){return(this.diameter-ct)/2}_viewBox(){let t=this._circleRadius()*2+this.strokeWidth;return`0 0 ${t} ${t}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}};e.\u0275fac=function(i){return new(i||e)(l(K),l(A,8),l(ot))},e.\u0275cmp=u({type:e,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(i,n){if(i&1&&oe(it,5),i&2){let m;ae(m=ce())&&(n._determinateCircle=m.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(i,n){i&2&&(v("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",n.mode==="determinate"?n.value:null)("mode",n.mode),ne("mat-"+n.color),M("width",n.diameter,"px")("height",n.diameter,"px")("--mdc-circular-progress-size",n.diameter+"px")("--mdc-circular-progress-active-indicator-width",n.diameter+"px"),ie("_mat-animation-noopable",n._noopAnimations)("mdc-circular-progress--indeterminate",n.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",P],diameter:[2,"diameter","diameter",P],strokeWidth:[2,"strokeWidth","strokeWidth",P]},exportAs:["matProgressSpinner"],standalone:!0,features:[re,g],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(i,n){if(i&1&&(f(0,nt,2,8,"ng-template",null,0,pe),a(2,"div",2,1),z(),a(4,"svg",3),h(5,"circle",4),c()(),Z(),a(6,"div",5)(7,"div",6)(8,"div",7),E(9,8),c(),a(10,"div",9),E(11,8),c(),a(12,"div",10),E(13,8),c()()()),i&2){let m=se(1);s(4),v("viewBox",n._viewBox()),s(),M("stroke-dasharray",n._strokeCircumference(),"px")("stroke-dashoffset",n._strokeDashOffset(),"px")("stroke-width",n._circleStrokeWidth(),"%"),v("r",n._circleRadius()),s(4),p("ngTemplateOutlet",m),s(2),p("ngTemplateOutlet",m),s(2),p("ngTemplateOutlet",m)}},dependencies:[he],styles:["@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner .mdc-circular-progress{width:var(--mdc-circular-progress-size) !important;height:var(--mdc-circular-progress-size) !important}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}"],encapsulation:2,changeDetection:0});let r=e;return r})();function st(r,e){r&1&&(a(0,"div",1),h(1,"mat-progress-spinner",2),c())}var We=(()=>{let e=class e{constructor(t){this.spinnerService=t}};e.\u0275fac=function(i){return new(i||e)(l(O))},e.\u0275cmp=u({type:e,selectors:[["core-spinner"]],standalone:!0,features:[g],decls:2,vars:3,consts:[["class","loading-container flex-content-center",4,"ngIf"],[1,"loading-container","flex-content-center"],["color","primary","mode","indeterminate",1,"spinner"]],template:function(i,n){i&1&&(f(0,st,2,0,"div",0),b(1,"async")),i&2&&p("ngIf",x(1,1,n.spinnerService.loadingSub))},dependencies:[w,F,fe,Be],styles:[".loading-container[_ngcontent-%COMP%]{display:flex;position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#000000b3;z-index:10}.spinner[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;margin-top:-45px;margin-left:-45px}"]});let r=e;return r})();var He=(()=>{let e=class e{constructor(t,i){this.authService=t,this.localeService=i,this.title="test-project",t.init(),i.init()}};e.\u0275fac=function(i){return new(i||e)(l(S),l(R))},e.\u0275cmp=u({type:e,selectors:[["app-root"]],standalone:!0,features:[g],decls:5,vars:0,consts:[[2,"min-height","calc(100% - 300px)","min-width","320px"]],template:function(i,n){i&1&&(h(0,"core-header")(1,"core-spinner"),a(2,"div",0),h(3,"router-outlet"),c(),h(4,"core-footer"))},dependencies:[ke,Ne,je,We]});let r=e;return r})();Se(He,De).catch(r=>console.error(r));
