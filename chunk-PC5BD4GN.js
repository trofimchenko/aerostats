import{a as O}from"./chunk-2KGCJGZF.js";import{a as R}from"./chunk-GFFZX7CM.js";import{a as _}from"./chunk-5N44OCVV.js";import{b as F,c as H,t as P,u as T,w as r}from"./chunk-Q7NJSAQI.js";import"./chunk-WXI33M2S.js";import{Bb as u,Jb as L,Nb as S,Qb as D,Ra as v,Rb as w,Sa as b,Va as a,Wa as y,Y as g,ba as l,ga as h,ib as x,k as f,mb as p,ob as n,rc as C,sc as I,tb as s,ub as m,vb as d,yc as j}from"./chunk-Z5OAP3FN.js";var A=(()=>{let i=class i{constructor(t,e){this.httpClient=t,this.logService=e,this.productListDataResponeSubject=new f,this.productListDataRespones$=this.productListDataResponeSubject.asObservable()}getProductListData(){let t=new F;return t.set(T,P.Contentful),this.httpClient.get(`${r.contentfulApiUrl}?locale=*&content_type=product`,{context:t}).subscribe({next:e=>{this.logService.log(e),this.productListDataResponeSubject.next(e)},error:e=>{this.logService.error(e)}}),this.productListDataRespones$}};i.\u0275fac=function(e){return new(e||i)(l(H),l(R))},i.\u0275prov=g({token:i,factory:i.\u0275fac,providedIn:"root"});let o=i;return o})();function E(o,i){if(o&1&&(s(0,"div",5)(1,"div",6),d(2,"img",7),s(3,"div",8),d(4,"p",9),D(5,"sanitizeHtml"),s(6,"div",10)(7,"div",11)(8,"button",12),L(9," View "),m()()()()()()),o&2){let c=i.$implicit,t=u(2);a(2),n("src",t.getImageUrl(c),b),a(2),n("innerHtml",w(5,2,t.getShortDescription(c)),v)}}function M(o,i){if(o&1&&(s(0,"div",1)(1,"div",2)(2,"div",3),p(3,E,10,4,"div",4),m()()()),o&2){let c=u();a(3),n("ngForOf",c.products)}}var W=(()=>{let i=class i extends _{constructor(t){super(),this.productService=t,this.currentLocale=r.defaultLocale}getData(){return this.productService.getProductListData()}setContent(t,e){this.currentLocale=e,this.products=t.items,this.assets=t.includes?.Asset}getImageUrl(t){return t.fields.images?this.assets?.find(e=>e.sys.id===t.fields.images[this.currentLocale]?.[0]?.sys.id)?.fields.file[this.currentLocale].url??this.assets?.find(e=>e.sys.id===t.fields.images[r.defaultLocale]?.[0]?.sys.id)?.fields.file[r.defaultLocale].url:"./images/empty-product-1000x1000.png"}getShortDescription(t){return t.fields.shortDescription?.[this.currentLocale]??t.fields.shortDescription?.[r.defaultLocale]}};i.\u0275fac=function(e){return new(e||i)(y(A))},i.\u0275cmp=h({type:i,selectors:[["app-product-list"]],standalone:!0,features:[x,S],decls:1,vars:1,consts:[["class","album bg-body-tertiary g-3",4,"ngIf"],[1,"album","bg-body-tertiary","g-3"],[1,"container"],[1,"row","row-cols-1","row-cols-sm-2","row-cols-md-3","row-cols-lg-4","pt-3",2,"min-width","320px"],["class","col",4,"ngFor","ngForOf"],[1,"col"],[1,"card","shadow-sm","mx-5","mx-sm-0","mb-3"],["height","225",1,"object-fit-cover",3,"src"],[1,"card-body"],[1,"card-text","overflow-hidden",2,"height","70px",3,"innerHtml"],[1,"d-flex","justify-content-between","align-items-center"],[1,"btn-group"],["type","button",1,"btn","btn-sm","btn-outline-secondary"]],template:function(e,U){e&1&&p(0,M,4,1,"div",0),e&2&&n("ngIf",U.products)},dependencies:[j,C,I,O]});let o=i;return o})();export{W as ProductListComponent};
