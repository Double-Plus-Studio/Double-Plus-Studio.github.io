import{a as X}from"./chunk-3YIZGX7G.js";import"./chunk-DKLAGT4O.js";X();Opal.queue(function(n){var p=n.module,B=n.klass,g=n.const_set,H=n.send2,M=n.find_super,x=n.def,t=n.truthy,G=n.eqeq,N=n.rb_gt,T=n.send,k=n.rb_le,$=n.rb_plus,j=n.rb_times,q=[],e=n.nil;return(function(w,I){var K=p(w,"BCDice"),z=[K].concat(I);return(function(P,Y){var F=p(P,"GameSystem"),y=[F].concat(Y),J=n.$r(y);return(function(Q,U,V){var u=B(Q,U,"Alsetto"),f=[u].concat(V),m=n.$r(f),W=u.$$prototype;return W.randomizer=e,g(f[0],"ID","Alsetto"),g(f[0],"NAME","\u8A69\u7247\u306E\u30A2\u30EB\u30BB\u30C3\u30C8"),g(f[0],"SORT_KEY","\u3046\u305F\u304B\u305F\u306E\u3042\u308B\u305B\u3064\u3068"),g(f[0],"HELP_MESSAGE",`\u30FB\u6210\u529F\u5224\u5B9A\uFF1AnAL[m]\u3000\u3000\u3000\u3000\u30FB\u30C8\u30E9\u30A4\u30A2\u30F3\u30D5\u7121\u3057\uFF1AnALC[m]
\u30FB\u547D\u4E2D\u5224\u5B9A\uFF1AnAL[m]*p\u3000\u3000\u3000\u30FB\u30C8\u30E9\u30A4\u30A2\u30F3\u30D5\u7121\u3057\uFF1AnALC[m]*p
\u30FB\u547D\u4E2D\u5224\u5B9A\uFF08\u30AC\u30F3\u30B9\u30EA\u30F3\u30AC\u30FC\u306E\u6839\u6E90\u8A69\uFF09\uFF1AnALG[m]*p
[]\u5185\u306F\u7701\u7565\u53EF\u80FD\u3002

AL\u30B3\u30DE\u30F3\u30C9\u306F\u30C8\u30E9\u30A4\u30A2\u30F3\u30D5\u306E\u5206\u3060\u3051\u3001\u81EA\u52D5\u3067\u632F\u308A\u8DB3\u3057\u51E6\u7406\u3092\u884C\u3044\u307E\u3059\u3002
\u300Cn\u300D\u3067\u30C0\u30A4\u30B9\u6570\u3092\u6307\u5B9A\u3002
\u300Cm\u300D\u3067\u76EE\u6A19\u5024\u3092\u6307\u5B9A\u3002\u7701\u7565\u6642\u306F\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u300C3\u300D\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002
\u300Cp\u300D\u3067\u653B\u6483\u529B\u3092\u6307\u5B9A\u3002\u300C*\u300D\u306F\u300Cx\u300D\u3067\u3082\u53EF\u3002
\u653B\u6483\u529B\u6307\u5B9A\u3067\u547D\u4E2D\u5224\u5B9A\u3068\u306A\u308A\u3001\u6210\u529F\u6570\u3067\u306F\u306A\u304F\u3001\u30C0\u30E1\u30FC\u30B8\u3092\u7D50\u679C\u8868\u793A\u3057\u307E\u3059\u3002

ALC\u30B3\u30DE\u30F3\u30C9\u306F\u30C8\u30E9\u30A4\u30A2\u30F3\u30D5\u7121\u3057\u3067\u3001\u6210\u529F\u6570\u3001\u30C0\u30E1\u30FC\u30B8\u3092\u7D50\u679C\u8868\u793A\u3057\u307E\u3059\u3002
ALG\u30B3\u30DE\u30F3\u30C9\u306F\u300C2\u4EE5\u4E0B\u300D\u3067\u30C8\u30E9\u30A4\u30A2\u30F3\u30D5\u51E6\u7406\u3092\u884C\u3044\u307E\u3059\u3002

\u3010\u66F8\u5F0F\u4F8B\u3011
\u30FB5AL \u2192 5d6\u3067\u76EE\u6A19\u50243\u3002
\u30FB5ALC \u2192 5d6\u3067\u76EE\u6A19\u50243\u3002\u30C8\u30E9\u30A4\u30A2\u30F3\u30D5\u7121\u3057\u3002
\u30FB6AL2 \u2192 6d6\u3067\u76EE\u6A19\u50242\u3002
\u30FB4AL*5 \u2192 4d6\u3067\u76EE\u6A19\u50243\u3001\u653B\u6483\u529B5\u306E\u547D\u4E2D\u5224\u5B9A\u3002
\u30FB7AL2x10 \u2192 7d6\u3067\u76EE\u6A19\u50242\u3001\u653B\u6483\u529B10\u306E\u547D\u4E2D\u5224\u5B9A\u3002
\u30FB8ALC4x5 \u2192 8d6\u3067\u76EE\u6A19\u50244\u3001\u653B\u6483\u529B5\u3001\u30C8\u30E9\u30A4\u30A2\u30F3\u30D5\u7121\u3057\u306E\u547D\u4E2D\u5224\u5B9A\u3002
`),u.$register_prefix("\\d+AL[CG]?"),x(u,"$initialize",function d(c){var a=d.$$p||e,r=this;return d.$$p=null,H(r,M(r,"initialize",d,!1,!0),"initialize",[c],null),r.sort_add_dice=!0}),x(u,"$eval_game_system_specific_command",function(c){var a=this,r=e,l=e,_=e,C=e,i=e,o=e;return t(c["$=~"](/(\d+)AL(C|G)?(\d+)?((x|\*)(\d+))?$/i))?(r=m("Regexp").$last_match(1).$to_i(),l=m("Regexp").$last_match(2)["$nil?"](),t(l)?_=1:G(m("Regexp").$last_match(2),"G")?(l=!0,_=2):_=0,C=(t(i=m("Regexp").$last_match(3))?i:3).$to_i(),o=(t(i=m("Regexp").$last_match(6))?i:0).$to_i(),a.$checkRoll(r,C,o,l,_)):e}),x(u,"$checkRoll",function(c,a,r,l,_){var C=this,i=e,o=e,s=e,b=e,R=e,D=e,A=e,L=e,E=e,S=e,h=e;for(i=0,o=0,s="",b=c;t(N(b,0))&&(R=C.randomizer.$roll_barabara(b,6).$sort(),D=R.$join(","),A=0,L=0,T(R,"each",[],function(v){return v==null&&(v=e),t(k(v,a))&&(A=$(A,1)),t(k(v,_))?L=$(L,1):e}),i=$(i,A),G(L,0)||(o=$(o,1)),t(s["$empty?"]())||(s=$(s,"+")),s=$(s,""+A+"["+D+"]"),!!t(l));)b=L;return E=r["$!="](0),t(E)?(S=j(i,r),h="("+c+"D6<="+a+") \uFF1E "+s+" \uFF1E Hits\uFF1A"+i+"*"+r+" \uFF1E "+S+"\u30C0\u30E1\u30FC\u30B8"):h="("+c+"D6<="+a+") \uFF1E "+s+" \uFF1E \u6210\u529F\u6570\uFF1A"+i,t(l)&&(h=$(h," / "+o+"\u30C8\u30E9\u30A4\u30A2\u30F3\u30D5")),h})})(y[0],J("Base"),y)})(z[0],z)})(q[0],q)});
