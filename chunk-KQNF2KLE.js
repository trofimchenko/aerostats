import{a as A}from"./chunk-2WLXK55W.js";import{a as O}from"./chunk-Q3WTCOLV.js";import{a as U}from"./chunk-FA5KWO6W.js";import{b as R,c as y,h as H,i as $,k as L,m as M,s as w,t as F,v as a,w as E,z as N}from"./chunk-LGTK3GU7.js";import{Fb as x,Kb as T,Nb as j,Oa as C,Ob as _,Pb as b,Sa as l,Ta as r,V as h,_ as c,da as S,fb as I,i as v,jb as m,lb as s,pc as D,qb as f,rb as g,sb as u,vc as P,yb as d}from"./chunk-I7RNCANZ.js";var z=(()=>{let i=class i{constructor(e,t){this.httpClient=e,this.logService=t,this.pageDataResponseSubject=new v,this.pageDataResponses$=this.pageDataResponseSubject.asObservable()}getPageData(e){let t=new R;return t.set(F,w.None),this.httpClient.get(`${a.pagesApiUrl}/?slug=${e}`,{context:t}).subscribe({next:o=>{this.logService.log(o),this.pageDataResponseSubject.next(Object.values(o))},error:o=>{this.logService.error(o)}}),this.pageDataResponses$}};i.\u0275fac=function(t){return new(t||i)(c(y),c(E))},i.\u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();function G(n,i){if(n&1&&(u(0,"div",5),j(1,"sanitizeHtml")),n&2){let p=d(2);s("innerHTML",_(1,1,p.pageContent),C)}}function J(n,i){n&1&&u(0,"core-page-not-found")}function K(n,i){if(n&1&&(f(0,"div",3),m(1,G,2,3,"div",4)(2,J,1,0,"ng-template",null,0,b),g()),n&2){let p=x(3),e=d();l(),s("ngIf",e.pageContent!==null)("ngIfElse",p)}}var me=(()=>{let i=class i extends U{constructor(e,t,o,B,k,Y){super(),this.pageService=e,this.metaService=t,this.titleService=o,this.translateService=B,this.activatedRoute=k,this.router=Y}getData(){return this.urlSegment.length===0?this.pageUrl=a.defaultPageUrl.toLowerCase():this.urlSegment.length===1?this.pageUrl=this.urlSegment[0].path:this.router.navigate(["/page-not-found"]),this.pageService.getPageData(this.pageUrl)}setContent(e,t){e&&e.length>0?this.pageContent=t===a.defaultLocale?e[0]?.content?.rendered:e[0]?.acf?.[t]??e[0]?.content?.rendered:this.router.navigate(["/page-not-found"])}setTitle(e,t){e&&e.length>0&&this.titleService.setTitle(`${t===a.defaultLocale?e[0].title.rendered:e[0]?.acf?.[`${t}_title`]??e[0].title.rendered}`)}setMetaTags(e,t){e&&e.length>0&&this.metaService.updateTag({name:"description",content:e[0]?.acf?.[`${t}_description`]??e[0]?.acf?.[`${t}_${a.defaultLocale}`]})}};i.\u0275fac=function(t){return new(t||i)(r(z),r(H),r($),r(N),r(L),r(M))},i.\u0275cmp=S({type:i,selectors:[["app-page"]],standalone:!0,features:[I,T],decls:2,vars:1,consts:[["pageNotFound",""],[1,"container"],["class","row",4,"ngIf"],[1,"row"],["class","col",3,"innerHTML",4,"ngIf","ngIfElse"],[1,"col",3,"innerHTML"]],template:function(t,o){t&1&&(f(0,"div",1),m(1,K,4,2,"div",2),g()),t&2&&(l(),s("ngIf",o.pageContent!==void 0))},dependencies:[A,P,D,O]});let n=i;return n})();export{me as PageComponent};
