import{b as K,c as g,d as Q,e as W,f as X,g as ee,h as te,i as ie,j as re,k as ne}from"./chunk-ZFHMJJQH.js";import{a as J}from"./chunk-XAVCAORX.js";import{b as $,c as G,h as k,i as H,s as P,t as L,v as Y,w as Z,x as z}from"./chunk-ACL5XSEO.js";import{Fb as y,Gb as l,Kb as R,Mb as v,Nb as b,Ob as C,Pb as M,Sa as m,Ta as p,V as E,_ as S,da as j,fb as w,i as h,jb as d,lb as s,na as I,nc as D,oa as F,pc as U,qb as n,qc as V,rb as r,sb as f,sc as A,ub as N,uc as O,vc as B,wb as T,yb as q}from"./chunk-I7RNCANZ.js";var oe=(()=>{let t=class t{constructor(i,o){this.httpClient=i,this.logService=o,this.errorSubject=new h,this.sendFormResponseSubject=new h,this.errors$=this.errorSubject.asObservable(),this.sendFormResponses$=this.sendFormResponseSubject.asObservable()}sendForm(i){let o=new FormData;o.append("username",i["your-name"]),o.append("email",i["your-email"]),o.append("subject",i["your-subject"]),o.append("message",i["your-message"]),o.append("_wpcf7_unit_tag","_wpcf7_unit_tag");let u=new $;return u.set(L,P.None),this.httpClient.post(`${Y.contactsApiUrl}`,o,{context:u}).subscribe({next:c=>{this.logService.log(c),this.sendFormResponseSubject.next(Object.values(c))},error:c=>{this.logService.error(c),this.errorSubject.next(c)}}),this.sendFormResponses$}};t.\u0275fac=function(o){return new(o||t)(S(G),S(Z))},t.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var _=e=>({"is-invalid":e});function se(e,t){e&1&&(n(0,"div",22),l(1," Server error "),r())}function le(e,t){if(e&1&&(n(0,"div")(1,"div",20),d(2,se,2,0,"div",21),r()()),e&2){let a=t.ngIf;m(),s("ngSwitch",a.code)}}function ce(e,t){e&1&&(n(0,"div",23),l(1," User name is required "),r())}function de(e,t){e&1&&(n(0,"div",23),l(1," Email is required "),r())}function ue(e,t){e&1&&(n(0,"div",23),l(1," Email format is wrong "),r())}function pe(e,t){e&1&&(n(0,"div",23),l(1," Subject is required "),r())}function fe(e,t){e&1&&(n(0,"div",23),l(1," Message is required "),r())}function ve(e,t){if(e&1&&(n(0,"div")(1,"h1",7),l(2,"Contact"),r(),d(3,le,3,1,"div",8),b(4,"async"),n(5,"div",9),f(6,"input",10),n(7,"label",11),l(8,"User name"),r(),d(9,ce,2,0,"div",12),r(),n(10,"div",9),f(11,"input",13),n(12,"label",14),l(13,"Email"),r(),d(14,de,2,0,"div",12)(15,ue,2,0,"div",12),r(),n(16,"div",9),f(17,"input",15),n(18,"label",16),l(19,"Subject"),r(),d(20,pe,2,0,"div",12),r(),n(21,"div",9),f(22,"textarea",17),n(23,"label",18),l(24,"Message"),r(),d(25,fe,2,0,"div",12),r(),n(26,"button",19),l(27," Submit "),r()()),e&2){let a=q(),i=y(4);m(3),s("ngIf",C(4,10,a.contactService.errors$)),m(3),s("ngClass",v(12,_,a.form.controls["your-name"].invalid&&(a.form.controls["your-name"].touched||i.submitted))),m(3),s("ngIf",a.form.controls["your-name"].hasError("required")),m(2),s("ngClass",v(14,_,a.form.controls["your-email"].invalid&&(a.form.controls["your-email"].touched||i.submitted))),m(3),s("ngIf",a.form.controls["your-email"].hasError("required")),m(),s("ngIf",a.form.controls["your-email"].hasError("email")),m(2),s("ngClass",v(16,_,a.form.controls["your-subject"].invalid&&(a.form.controls["your-subject"].touched||i.submitted))),m(3),s("ngIf",a.form.controls["your-subject"].hasError("required")),m(2),s("ngClass",v(18,_,a.form.controls["your-message"].invalid&&(a.form.controls["your-message"].touched||i.submitted))),m(3),s("ngIf",a.form.controls["your-message"].hasError("required"))}}function ge(e,t){e&1&&(n(0,"div",24),l(1,"Message is sent"),r())}var qe=(()=>{let t=class t extends J{constructor(i,o,u,c,x){super(),this.formBuilder=i,this.contactService=o,this.authService=u,this.titleService=c,this.metaService=x}ngOnInit(){super.ngOnInit();let i=this.authService.currentUser();this.form=this.formBuilder.nonNullable.group({"your-name":[{value:i?.user_nicename??"",disabled:!!i?.user_nicename},[g.required]],"your-email":[{value:i?.user_email??"",disabled:!!i?.user_email},[g.required,ne.email()]],"your-subject":["",g.required],"your-message":["",g.required]})}onSubmit(){if(this.form.valid){let i=this.form.getRawValue();this.contactService.sendForm(i)}}};t.\u0275fac=function(o){return new(o||t)(p(ie),p(oe),p(z),p(H),p(k))},t.\u0275cmp=j({type:t,selectors:[["app-contact"]],standalone:!0,features:[w,R],decls:9,vars:5,consts:[["ngForm","ngForm"],["submitResult",""],[1,"component"],[1,"row","justify-content-center"],[1,"col-10","col-sm-8","col-md-6"],[3,"ngSubmit","formGroup"],[4,"ngIf","ngIfElse"],[1,"h3","mb-3","fw-normal"],[4,"ngIf"],[1,"form-floating","my-2"],["type","text","formControlName","your-name","id","floatingUsername","placeholder","","autocomplete","on",1,"form-control",3,"ngClass"],["for","floatingUsername"],["class","invalid-feedback",4,"ngIf"],["type","email","formControlName","your-email","id","floatingEmail","placeholder","name@example.com","autocomplete","off",1,"form-control",3,"ngClass"],["for","floatingEmail"],["type","text","formControlName","your-subject","id","floatingSubject","placeholder","","autocomplete","on",1,"form-control",3,"ngClass"],["for","floatingSubject"],["formControlName","your-message","id","floatingMessage","placeholder","","autocomplete","off",1,"form-control",2,"height","100px",3,"ngClass"],["for","floatingMessage"],["type","submit",1,"btn","btn-primary","w-100","py-2"],[3,"ngSwitch"],["class","alert alert-danger","role","alert",4,"ngSwitchDefault"],["role","alert",1,"alert","alert-danger"],[1,"invalid-feedback"],["role","alert",1,"alert","alert-success"]],template:function(o,u){if(o&1){let c=N();n(0,"div",2)(1,"div",3)(2,"div",4)(3,"form",5,0),T("ngSubmit",function(){return I(c),F(u.onSubmit())}),d(5,ve,28,20,"div",6),b(6,"async"),r(),d(7,ge,2,0,"ng-template",null,1,M),r()()()}if(o&2){let c=y(8);m(3),s("formGroup",u.form),m(2),s("ngIf",!C(6,3,u.contactService.sendFormResponses$))("ngIfElse",c)}},dependencies:[B,D,U,V,A,O,re,X,K,Q,W,ee,te]});let e=t;return e})();export{qe as ContactComponent};
