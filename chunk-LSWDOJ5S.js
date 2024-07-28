import{a as J}from"./chunk-UFDVAKJS.js";import{b as K,c as g,d as Q,e as W,f as X,g as Y,h as ee,i as te,j as ie,k as ne}from"./chunk-OVHAGEXC.js";import{a as P,b as Z}from"./chunk-NGLT23HW.js";import{a as z}from"./chunk-NDKFPU35.js";import{c as k,d as G,i as H,j as L,s as S}from"./chunk-WI5GDKLH.js";import"./chunk-WXI33M2S.js";import{Eb as C,Fb as l,Jb as D,Lb as v,Mb as x,Nb as E,Ob as M,Ra as m,Sa as u,V as y,_ as b,da as j,eb as N,i as h,ib as d,kb as s,mc as U,na as F,oa as w,oc as V,pb as r,pc as B,qb as n,rb as f,rc as $,tb as T,tc as A,uc as O,vb as q,xb as R}from"./chunk-WN4S6TY5.js";var re=(()=>{let t=class t{constructor(i,o){this.httpClient=i,this.logService=o,this.errorSubject=new h,this.sendFormResponseSubject=new h,this.errors$=this.errorSubject.asObservable(),this.sendFormResponses$=this.sendFormResponseSubject.asObservable()}sendForm(i){let o=new FormData;o.append("username",i.username),o.append("email",i.email),o.append("subject",i.subject),o.append("message",i.message),o.append("_wpcf7_unit_tag",S.contactFormId);let p=new k;return p.set(J,!0),this.httpClient.post(`${S.apiUrl}/contact-form-7/v1/contact-forms/${S.contactFormId}/feedback`,o,{context:p}).subscribe({next:c=>{this.logService.log(c),this.sendFormResponseSubject.next(!0)},error:c=>{this.logService.error(c),this.errorSubject.next(c)}}),this.sendFormResponses$}};t.\u0275fac=function(o){return new(o||t)(b(G),b(P))},t.\u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var _=e=>({"is-invalid":e});function me(e,t){e&1&&(r(0,"div",22),l(1," Server error "),n())}function se(e,t){if(e&1&&(r(0,"div")(1,"div",20),d(2,me,2,0,"div",21),n()()),e&2){let a=t.ngIf;m(),s("ngSwitch",a.code)}}function le(e,t){e&1&&(r(0,"div",23),l(1," User name is required "),n())}function ce(e,t){e&1&&(r(0,"div",23),l(1," Email is required "),n())}function de(e,t){e&1&&(r(0,"div",23),l(1," Email format is wrong "),n())}function pe(e,t){e&1&&(r(0,"div",23),l(1," Subject is required "),n())}function ue(e,t){e&1&&(r(0,"div",23),l(1," Message is required "),n())}function fe(e,t){if(e&1&&(r(0,"div")(1,"h1",7),l(2,"Contact"),n(),d(3,se,3,1,"div",8),x(4,"async"),r(5,"div",9),f(6,"input",10),r(7,"label",11),l(8,"User name"),n(),d(9,le,2,0,"div",12),n(),r(10,"div",9),f(11,"input",13),r(12,"label",14),l(13,"Email"),n(),d(14,ce,2,0,"div",12)(15,de,2,0,"div",12),n(),r(16,"div",9),f(17,"input",15),r(18,"label",16),l(19,"Subject"),n(),d(20,pe,2,0,"div",12),n(),r(21,"div",9),f(22,"textarea",17),r(23,"label",18),l(24,"Message"),n(),d(25,ue,2,0,"div",12),n(),r(26,"button",19),l(27," Submit "),n()()),e&2){let a=R(),i=C(4);m(3),s("ngIf",E(4,10,a.contactService.errors$)),m(3),s("ngClass",v(12,_,a.form.controls.username.invalid&&(a.form.controls.username.touched||i.submitted))),m(3),s("ngIf",a.form.controls.username.hasError("required")),m(2),s("ngClass",v(14,_,a.form.controls.email.invalid&&(a.form.controls.email.touched||i.submitted))),m(3),s("ngIf",a.form.controls.email.hasError("required")),m(),s("ngIf",a.form.controls.email.hasError("email")),m(2),s("ngClass",v(16,_,a.form.controls.subject.invalid&&(a.form.controls.subject.touched||i.submitted))),m(3),s("ngIf",a.form.controls.subject.hasError("required")),m(2),s("ngClass",v(18,_,a.form.controls.message.invalid&&(a.form.controls.message.touched||i.submitted))),m(3),s("ngIf",a.form.controls.message.hasError("required"))}}function ve(e,t){e&1&&(r(0,"div",24),l(1,"Message is sent"),n())}var Te=(()=>{let t=class t extends z{constructor(i,o,p,c,I){super(),this.formBuilder=i,this.contactService=o,this.authService=p,this.titleService=c,this.metaService=I}ngOnInit(){super.ngOnInit();let i=this.authService.currentUser();this.form=this.formBuilder.nonNullable.group({username:[{value:i?.user_nicename??"",disabled:!!i?.user_nicename},[g.required]],email:[{value:i?.user_email??"",disabled:!!i?.user_email},[g.required,ne.email()]],subject:["",g.required],message:["",g.required]})}onSubmit(){if(this.form.valid){let i=this.form.getRawValue();this.contactService.sendForm(i)}}};t.\u0275fac=function(o){return new(o||t)(u(te),u(re),u(Z),u(L),u(H))},t.\u0275cmp=j({type:t,selectors:[["app-contact"]],standalone:!0,features:[N,D],decls:9,vars:5,consts:[["ngForm","ngForm"],["submitResult",""],[1,"component"],[1,"row","justify-content-center"],[1,"col-10","col-sm-8","col-md-6"],[3,"ngSubmit","formGroup"],[4,"ngIf","ngIfElse"],[1,"h3","mb-3","fw-normal"],[4,"ngIf"],[1,"form-floating","my-2"],["type","text","formControlName","username","id","floatingUsername","placeholder","","autocomplete","on",1,"form-control",3,"ngClass"],["for","floatingUsername"],["class","invalid-feedback",4,"ngIf"],["type","email","formControlName","email","id","floatingEmail","placeholder","name@example.com","autocomplete","off",1,"form-control",3,"ngClass"],["for","floatingEmail"],["type","text","formControlName","subject","id","floatingSubject","placeholder","","autocomplete","on",1,"form-control",3,"ngClass"],["for","floatingSubject"],["formControlName","message","id","floatingMessage","placeholder","","autocomplete","off",1,"form-control",2,"height","100px",3,"ngClass"],["for","floatingMessage"],["type","submit",1,"btn","btn-primary","w-100","py-2"],[3,"ngSwitch"],["class","alert alert-danger","role","alert",4,"ngSwitchDefault"],["role","alert",1,"alert","alert-danger"],[1,"invalid-feedback"],["role","alert",1,"alert","alert-success"]],template:function(o,p){if(o&1){let c=T();r(0,"div",2)(1,"div",3)(2,"div",4)(3,"form",5,0),q("ngSubmit",function(){return F(c),w(p.onSubmit())}),d(5,fe,28,20,"div",6),x(6,"async"),n(),d(7,ve,2,0,"ng-template",null,1,M),n()()()}if(o&2){let c=C(8);m(3),s("formGroup",p.form),m(2),s("ngIf",!E(6,3,p.contactService.sendFormResponses$))("ngIfElse",c)}},dependencies:[O,U,V,B,$,A,ie,X,K,Q,W,Y,ee]});let e=t;return e})();export{Te as ContactComponent};
