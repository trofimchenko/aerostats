import{B as v,C as b,h as p,i as h,k as m,v as n,z as S}from"./chunk-ACL5XSEO.js";import{$ as a,Kb as u,S as c,da as l,j as o}from"./chunk-I7RNCANZ.js";var O=(()=>{let i=class i{constructor(){this.translateService=a(S),this.titleService=a(h),this.metaService=a(p),this.localeService=a(b),this.activatedRoute=a(m)}ngOnInit(){this.activatedRoute.url.subscribe(e=>{this.urlSegment=e,this.dataSubscription=this.getData().pipe(c(()=>{})).subscribe(t=>{this.responseData=t;let s=this.localeService.getCurrentLocale();this.setData(this.responseData,s)})}),this.localeServiceSubscription=this.localeService.locales$.subscribe(e=>{this.setData(this.responseData,e)})}ngOnDestroy(){this.dataSubscription?.unsubscribe(),this.localeServiceSubscription?.unsubscribe()}getData(){return new o("").asObservable()}setContent(e,t){}setTitle(e,t){this.urlSegment.length>0?this.translateService.get(`general.menu-links.${this.urlSegment[0].path}.title`).subscribe(s=>{this.titleService.setTitle(s)}):this.titleService.setTitle(n.appName)}setMetaTags(e,t){this.urlSegment.length>0?this.translateService.get(`general.menu-links.${this.urlSegment[0].path}.description`).subscribe(s=>{this.metaService.updateTag({name:"description",content:s})}):this.metaService.updateTag({name:"description",content:n.appName})}setData(e,t){this.setContent(e,t),this.setTitle(e,t),this.setMetaTags(e,t)}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=l({type:i,selectors:[["core-base-page"]],standalone:!0,features:[u],decls:0,vars:0,template:function(t,s){},dependencies:[v],encapsulation:2});let r=i;return r})();export{O as a};
