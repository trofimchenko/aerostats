import{b as K,c as g,d as Q,e as W,f as X,g as ee,h as te,i as ie,j as re,k as ne}from"./chunk-3OFLKDCS.js";import{a as J}from"./chunk-2VJ56BWG.js";import{a as z}from"./chunk-XR36SJG5.js";import{b as $,c as G,h as k,i as H,s as P,t as L,u as Y,w as Z}from"./chunk-CANU2P52.js";import"./chunk-WXI33M2S.js";import{$ as _,Gb as y,Hb as s,Lb as R,Nb as v,Ob as b,Pb as C,Qb as M,Ta as m,Ua as p,W as E,ea as j,gb as w,i as S,kb as d,mb as l,oa as I,oc as D,pa as F,qc as U,rb as n,rc as V,sb as r,tb as f,tc as A,vb as N,vc as O,wc as B,xb as T,zb as q}from"./chunk-2I4HIRHG.js";var oe=(()=>{let t=class t{constructor(i,o){this.httpClient=i,this.logService=o,this.errorSubject=new S,this.sendFormResponseSubject=new S,this.errors$=this.errorSubject.asObservable(),this.sendFormResponses$=this.sendFormResponseSubject.asObservable()}sendForm(i){let o=new FormData;o.append("username",i["your-name"]),o.append("email",i["your-email"]),o.append("subject",i["your-subject"]),o.append("message",i["your-message"]),o.append("_wpcf7_unit_tag","_wpcf7_unit_tag");let u=new $;return u.set(Y,L.None),this.httpClient.post(`${Z.contactsApiUrl}`,o,{context:u}).subscribe({next:c=>{this.logService.log(c),this.sendFormResponseSubject.next(Object.values(c))},error:c=>{this.logService.error(c,!1),this.errorSubject.next(c)}}),this.sendFormResponses$}};t.\u0275fac=function(o){return new(o||t)(_(G),_(J))},t.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var h=e=>({"is-invalid":e});function le(e,t){e&1&&(n(0,"div",22),s(1," Server error "),r())}function se(e,t){if(e&1&&(n(0,"div")(1,"div",20),d(2,le,2,0,"div",21),r()()),e&2){let a=t.ngIf;m(),l("ngSwitch",a.code)}}function ce(e,t){e&1&&(n(0,"div",23),s(1," User name is required "),r())}function de(e,t){e&1&&(n(0,"div",23),s(1," Email is required "),r())}function ue(e,t){e&1&&(n(0,"div",23),s(1," Email format is wrong "),r())}function pe(e,t){e&1&&(n(0,"div",23),s(1," Subject is required "),r())}function fe(e,t){e&1&&(n(0,"div",23),s(1," Message is required "),r())}function ve(e,t){if(e&1&&(n(0,"div")(1,"h1",7),s(2,"Contact"),r(),d(3,se,3,1,"div",8),b(4,"async"),n(5,"div",9),f(6,"input",10),n(7,"label",11),s(8,"User name"),r(),d(9,ce,2,0,"div",12),r(),n(10,"div",9),f(11,"input",13),n(12,"label",14),s(13,"Email"),r(),d(14,de,2,0,"div",12)(15,ue,2,0,"div",12),r(),n(16,"div",9),f(17,"input",15),n(18,"label",16),s(19,"Subject"),r(),d(20,pe,2,0,"div",12),r(),n(21,"div",9),f(22,"textarea",17),n(23,"label",18),s(24,"Message"),r(),d(25,fe,2,0,"div",12),r(),n(26,"button",19),s(27," Submit "),r()()),e&2){let a=q(),i=y(4);m(3),l("ngIf",C(4,10,a.contactService.errors$)),m(3),l("ngClass",v(12,h,a.form.controls["your-name"].invalid&&(a.form.controls["your-name"].touched||i.submitted))),m(3),l("ngIf",a.form.controls["your-name"].hasError("required")),m(2),l("ngClass",v(14,h,a.form.controls["your-email"].invalid&&(a.form.controls["your-email"].touched||i.submitted))),m(3),l("ngIf",a.form.controls["your-email"].hasError("required")),m(),l("ngIf",a.form.controls["your-email"].hasError("email")),m(2),l("ngClass",v(16,h,a.form.controls["your-subject"].invalid&&(a.form.controls["your-subject"].touched||i.submitted))),m(3),l("ngIf",a.form.controls["your-subject"].hasError("required")),m(2),l("ngClass",v(18,h,a.form.controls["your-message"].invalid&&(a.form.controls["your-message"].touched||i.submitted))),m(3),l("ngIf",a.form.controls["your-message"].hasError("required"))}}function ge(e,t){e&1&&(n(0,"div",24),s(1,"Message is sent"),r())}var qe=(()=>{let t=class t extends z{constructor(i,o,u,c,x){super(),this.formBuilder=i,this.contactService=o,this.authService=u,this.titleService=c,this.metaService=x}ngOnInit(){super.ngOnInit();let i=this.authService.currentUser();this.form=this.formBuilder.nonNullable.group({"your-name":[{value:i?.username??"",disabled:!!i?.username},[g.required]],"your-email":[{value:i?.email??"",disabled:!!i?.email},[g.required,ne.email()]],"your-subject":["",g.required],"your-message":["",g.required]})}onSubmit(){if(this.form.valid){let i=this.form.getRawValue();this.contactService.sendForm(i)}}};t.\u0275fac=function(o){return new(o||t)(p(ie),p(oe),p(P),p(H),p(k))},t.\u0275cmp=j({type:t,selectors:[["app-contact"]],standalone:!0,features:[w,R],decls:9,vars:5,consts:[["ngForm","ngForm"],["submitResult",""],[1,"component"],[1,"row","justify-content-center"],[1,"col-10","col-sm-8","col-md-6"],[3,"ngSubmit","formGroup"],[4,"ngIf","ngIfElse"],[1,"h3","mb-3","fw-normal"],[4,"ngIf"],[1,"form-floating","my-2"],["type","text","formControlName","your-name","id","floatingUsername","placeholder","","autocomplete","on",1,"form-control",3,"ngClass"],["for","floatingUsername"],["class","invalid-feedback",4,"ngIf"],["type","email","formControlName","your-email","id","floatingEmail","placeholder","name@example.com","autocomplete","off",1,"form-control",3,"ngClass"],["for","floatingEmail"],["type","text","formControlName","your-subject","id","floatingSubject","placeholder","","autocomplete","on",1,"form-control",3,"ngClass"],["for","floatingSubject"],["formControlName","your-message","id","floatingMessage","placeholder","","autocomplete","off",1,"form-control",2,"height","100px",3,"ngClass"],["for","floatingMessage"],["type","submit",1,"btn","btn-primary","w-100","py-2"],[3,"ngSwitch"],["class","alert alert-danger","role","alert",4,"ngSwitchDefault"],["role","alert",1,"alert","alert-danger"],[1,"invalid-feedback"],["role","alert",1,"alert","alert-success"]],template:function(o,u){if(o&1){let c=N();n(0,"div",2)(1,"div",3)(2,"div",4)(3,"form",5,0),T("ngSubmit",function(){return I(c),F(u.onSubmit())}),d(5,ve,28,20,"div",6),b(6,"async"),r(),d(7,ge,2,0,"ng-template",null,1,M),r()()()}if(o&2){let c=y(8);m(3),l("formGroup",u.form),m(2),l("ngIf",!C(6,3,u.contactService.sendFormResponses$))("ngIfElse",c)}},dependencies:[B,D,U,V,A,O,re,X,K,Q,W,ee,te]});let e=t;return e})();export{qe as ContactComponent};
