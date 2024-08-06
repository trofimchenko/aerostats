import{b as K,c as g,d as Q,e as W,f as X,g as ee,h as te,i as ie,j as re,k as oe}from"./chunk-ZRXHV3VK.js";import{a as J}from"./chunk-GFFZX7CM.js";import{a as z}from"./chunk-5N44OCVV.js";import{b as $,c as G,h as k,i as H,s as P,t as L,u as Y,w as Z}from"./chunk-Q7NJSAQI.js";import"./chunk-WXI33M2S.js";import{Bb as q,Ib as b,Jb as s,Nb as R,Pb as v,Qb as _,Rb as C,Sb as M,Va as a,Wa as u,Y as E,ba as y,ga as j,ib as w,k as S,mb as d,ob as m,qa as I,qc as D,ra as F,sc as V,tb as o,tc as B,ub as r,vb as f,vc as O,xb as N,xc as U,yc as A,zb as T}from"./chunk-Z5OAP3FN.js";var ne=(()=>{let t=class t{constructor(i,l){this.httpClient=i,this.logService=l,this.errorSubject=new S,this.sendFormResponseSubject=new S,this.errors$=this.errorSubject.asObservable(),this.sendFormResponses$=this.sendFormResponseSubject.asObservable()}sendForm(i){let l=new $;return l.set(Y,L.None),this.httpClient.post(`${Z.fireBaseDatabaseName}/contacts.json`,{username:i["your-name"],email:i["your-email"],subject:i["your-subject"],message:i["your-message"]},{context:l}).subscribe({next:c=>{this.logService.log(c),this.sendFormResponseSubject.next(Object.values(c))},error:c=>{this.logService.error(c,!1),this.errorSubject.next(c)}}),this.sendFormResponses$}};t.\u0275fac=function(l){return new(l||t)(y(G),y(J))},t.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var h=e=>({"is-invalid":e});function se(e,t){e&1&&(o(0,"div",22),s(1," Server error "),r())}function le(e,t){if(e&1&&(o(0,"div")(1,"div",20),d(2,se,2,0,"div",21),r()()),e&2){let n=t.ngIf;a(),m("ngSwitch",n.code)}}function ce(e,t){e&1&&(o(0,"div",23),s(1," User name is required "),r())}function de(e,t){e&1&&(o(0,"div",23),s(1," Email is required "),r())}function ue(e,t){e&1&&(o(0,"div",23),s(1," Email format is wrong "),r())}function pe(e,t){e&1&&(o(0,"div",23),s(1," Subject is required "),r())}function fe(e,t){e&1&&(o(0,"div",23),s(1," Message is required "),r())}function ve(e,t){if(e&1&&(o(0,"div")(1,"h1",7),s(2,"Contact"),r(),d(3,le,3,1,"div",8),_(4,"async"),o(5,"div",9),f(6,"input",10),o(7,"label",11),s(8,"User name"),r(),d(9,ce,2,0,"div",12),r(),o(10,"div",9),f(11,"input",13),o(12,"label",14),s(13,"Email"),r(),d(14,de,2,0,"div",12)(15,ue,2,0,"div",12),r(),o(16,"div",9),f(17,"input",15),o(18,"label",16),s(19,"Subject"),r(),d(20,pe,2,0,"div",12),r(),o(21,"div",9),f(22,"textarea",17),o(23,"label",18),s(24,"Message"),r(),d(25,fe,2,0,"div",12),r(),o(26,"button",19),s(27," Submit "),r()()),e&2){let n=q(),i=b(4);a(3),m("ngIf",C(4,10,n.contactService.errors$)),a(3),m("ngClass",v(12,h,n.form.controls["your-name"].invalid&&(n.form.controls["your-name"].touched||i.submitted))),a(3),m("ngIf",n.form.controls["your-name"].hasError("required")),a(2),m("ngClass",v(14,h,n.form.controls["your-email"].invalid&&(n.form.controls["your-email"].touched||i.submitted))),a(3),m("ngIf",n.form.controls["your-email"].hasError("required")),a(),m("ngIf",n.form.controls["your-email"].hasError("email")),a(2),m("ngClass",v(16,h,n.form.controls["your-subject"].invalid&&(n.form.controls["your-subject"].touched||i.submitted))),a(3),m("ngIf",n.form.controls["your-subject"].hasError("required")),a(2),m("ngClass",v(18,h,n.form.controls["your-message"].invalid&&(n.form.controls["your-message"].touched||i.submitted))),a(3),m("ngIf",n.form.controls["your-message"].hasError("required"))}}function ge(e,t){e&1&&(o(0,"div",24),s(1,"Message is sent"),r())}var qe=(()=>{let t=class t extends z{constructor(i,l,c,p,x){super(),this.formBuilder=i,this.contactService=l,this.authService=c,this.titleService=p,this.metaService=x}ngOnInit(){super.ngOnInit();let i=this.authService.currentUser();this.form=this.formBuilder.nonNullable.group({"your-name":[{value:i?.username??"",disabled:!!i?.username},[g.required]],"your-email":[{value:i?.email??"",disabled:!!i?.email},[g.required,oe.email()]],"your-subject":["",g.required],"your-message":["",g.required]})}onSubmit(){if(this.form.valid){let i=this.form.getRawValue();this.contactService.sendForm(i)}}};t.\u0275fac=function(l){return new(l||t)(u(ie),u(ne),u(P),u(H),u(k))},t.\u0275cmp=j({type:t,selectors:[["app-contact"]],standalone:!0,features:[w,R],decls:9,vars:5,consts:[["ngForm","ngForm"],["submitResult",""],[1,"component"],[1,"row","justify-content-center"],[1,"col-10","col-sm-8","col-md-6"],[3,"ngSubmit","formGroup"],[4,"ngIf","ngIfElse"],[1,"h3","mb-3","fw-normal"],[4,"ngIf"],[1,"form-floating","my-2"],["type","text","formControlName","your-name","id","floatingUsername","placeholder","","autocomplete","on",1,"form-control",3,"ngClass"],["for","floatingUsername"],["class","invalid-feedback",4,"ngIf"],["type","email","formControlName","your-email","id","floatingEmail","placeholder","name@example.com","autocomplete","off",1,"form-control",3,"ngClass"],["for","floatingEmail"],["type","text","formControlName","your-subject","id","floatingSubject","placeholder","","autocomplete","on",1,"form-control",3,"ngClass"],["for","floatingSubject"],["formControlName","your-message","id","floatingMessage","placeholder","","autocomplete","off",1,"form-control",2,"height","100px",3,"ngClass"],["for","floatingMessage"],["type","submit",1,"btn","btn-primary","w-100","py-2"],[3,"ngSwitch"],["class","alert alert-danger","role","alert",4,"ngSwitchDefault"],["role","alert",1,"alert","alert-danger"],[1,"invalid-feedback"],["role","alert",1,"alert","alert-success"]],template:function(l,c){if(l&1){let p=N();o(0,"div",2)(1,"div",3)(2,"div",4)(3,"form",5,0),T("ngSubmit",function(){return I(p),F(c.onSubmit())}),d(5,ve,28,20,"div",6),_(6,"async"),r(),d(7,ge,2,0,"ng-template",null,1,M),r()()()}if(l&2){let p=b(8);a(3),m("formGroup",c.form),a(2),m("ngIf",!C(6,3,c.contactService.sendFormResponses$))("ngIfElse",p)}},dependencies:[A,D,V,B,O,U,re,X,K,Q,W,ee,te]});let e=t;return e})();export{qe as ContactComponent};
