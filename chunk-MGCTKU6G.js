import{a as Z}from"./chunk-3YIZGX7G.js";import"./chunk-DKLAGT4O.js";Z();Opal.queue(function(n){var L=n.module,B=n.klass,g=n.const_set,G=n.send2,M=n.find_super,C=n.def,r=n.truthy,j=n.eqeq,h=n.rb_gt,q=n.send,z=n.rb_le,s=n.rb_plus,D=n.rb_times,S=[],e=n.nil;return(function(w,I){var K=L(w,"BCDice"),k=[K].concat(I);return(function(P,W){var Y=L(P,"GameSystem"),y=[Y].concat(W),F=n.$r(y);return(function(J,Q,U){var _=B(J,Q,"Airgetlamh"),d=[_].concat(U),f=n.$r(d),V=_.$$prototype;return V.randomizer=e,g(d[0],"ID","Airgetlamh"),g(d[0],"NAME","\u6731\u306E\u5B64\u5854\u306E\u30A8\u30A2\u30B2\u30C8\u30E9\u30E0"),g(d[0],"SORT_KEY","\u3042\u3051\u306E\u3053\u3068\u3046\u306E\u3048\u3042\u3051\u3068\u3089\u3080"),g(d[0],"HELP_MESSAGE",`\u3010Reg2.0\u300ETHE ANSWERER\u300F\uFF5E\u3011
\u30FB\u8ABF\u67FB\u5224\u5B9A\uFF08\u6210\u529F\u6570\u3092\u8868\u793A\uFF09\uFF1A[n]AA[m]
\u30FB\u547D\u4E2D\u5224\u5B9A\uFF08\u30C0\u30E1\u30FC\u30B8\u8868\u793A\uFF09\uFF1A[n]AA[m]*p[+t][Cx]
\u3010\uFF5EReg1.1\u300E\u6607\u83EF\u300F\u3011
\u30FB\u8ABF\u67FB\u5224\u5B9A\uFF08\u6210\u529F\u6570\u3092\u8868\u793A\uFF09\uFF1A[n]AL[m]
\u30FB\u547D\u4E2D\u5224\u5B9A\uFF08\u30C0\u30E1\u30FC\u30B8\u8868\u793A\uFF09\uFF1A[n]AL[m]*p
----------------------------------------
[]\u5185\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u7701\u7565\u53EF\u80FD\u3002

\u300Cn\u300D\u3067\u30C0\u30A4\u30B9\u6570\uFF08\u653B\u6483\u56DE\u6570\uFF09\u3092\u6307\u5B9A\u3002\u7701\u7565\u6642\u306F\u300C2\u300D\u3002
\u300Cm\u300D\u3067\u76EE\u6A19\u5024\u3092\u6307\u5B9A\u3002\u7701\u7565\u6642\u306F\u300C6\u300D\u3002
\u300Cp\u300D\u3067\u5A01\u529B\u3092\u6307\u5B9A\u3002\u300C*\u300D\u306F\u300Cx\u300D\u3067\u4EE3\u7528\u53EF\u3002
\u300C+t\u300D\u3067\u30AF\u30EA\u30C6\u30A3\u30AB\u30EB\u30C8\u30EA\u30AC\u30FC\u3092\u6307\u5B9A\u3002\u7701\u7565\u53EF\u3002
\u300CCx\u300D\u3067\u30AF\u30EA\u30C6\u30A3\u30AB\u30EB\u5024\u3092\u6307\u5B9A\u3002\u7701\u7565\u6642\u306F\u300C1\u300D\u3001\u6700\u5927\u5024\u306F\u300C3\u300D\u3001\u300C0\u300D\u3067\u30AF\u30EA\u30C6\u30A3\u30AB\u30EB\u7121\u3057\u3002

\u653B\u6483\u529B\u6307\u5B9A\u3067\u547D\u4E2D\u5224\u5B9A\u3068\u306A\u308A\u3001\u6210\u529F\u6570\u3067\u306F\u306A\u304F\u3001\u30C0\u30E1\u30FC\u30B8\u3092\u7D50\u679C\u8868\u793A\u3057\u307E\u3059\u3002
\u30AF\u30EA\u30C6\u30A3\u30AB\u30EB\u30D2\u30C3\u30C8\u306E\u5206\u3060\u3051\u3001\u81EA\u52D5\u3067\u632F\u308A\u8DB3\u3057\u51E6\u7406\u3092\u884C\u3044\u307E\u3059\u3002
\uFF08AL\u30B3\u30DE\u30F3\u30C9\u3067\u306F\u30AF\u30EA\u30C6\u30A3\u30AB\u30EB\u51E6\u7406\u3092\u884C\u3044\u307E\u305B\u3093\uFF09

\u3010\u66F8\u5F0F\u4F8B\u3011
\u30FBAL \u2192 2d10\u3067\u76EE\u6A19\u50246\u306E\u8ABF\u67FB\u5224\u5B9A\u3002
\u30FB5AA7*12 \u2192 5d10\u3067\u76EE\u6A19\u50247\u3001\u5A01\u529B12\u306E\u547D\u4E2D\u5224\u5B9A\u3002
\u30FBAA7x28+5 \u2192 2d10\u3067\u76EE\u6A19\u50247\u3001\u5A01\u529B28\u3001\u30AF\u30EA\u30C6\u30A3\u30AB\u30EB\u30C8\u30EA\u30AC\u30FC5\u306E\u547D\u4E2D\u5224\u5B9A\u3002
\u30FB9aa5*10C2 \u2192 9d10\u3067\u76EE\u6A19\u50245\u3001\u5A01\u529B10\u3001\u30AF\u30EA\u30C6\u30A3\u30AB\u30EB\u50242\u306E\u547D\u4E2D\u5224\u5B9A\u3002
\u30FB15AAx4c0 \u2192 15d10\u3067\u76EE\u6A19\u50246\u3001\u5A01\u529B4\u3001\u30AF\u30EA\u30C6\u30A3\u30AB\u30EB\u7121\u3057\u306E\u547D\u4E2D\u5224\u5B9A\u3002
`),_.$register_prefix("\\d*A[AL]"),C(_,"$initialize",function A(l){var m=A.$$p||e,c=this;return A.$$p=null,G(c,M(c,"initialize",A,!1,!0),"initialize",[l],null),c.sort_add_dice=!0}),C(_,"$eval_game_system_specific_command",function(l){var m=this,c=e,t=e,x=e,R=e,o=e,i=e;return r(l["$=~"](/(\d+)?A(A|L)(\d+)?((x|\*)(\d+)(\+(\d+))?)?(C(\d+))?$/i))?(c=(r(t=f("Regexp").$last_match(1))?t:2).$to_i(),x=(r(t=f("Regexp").$last_match(3))?t:6).$to_i(),R=(r(t=f("Regexp").$last_match(6))?t:0).$to_i(),j(f("Regexp").$last_match(2),"L")?(o=0,i=0):(o=(r(t=f("Regexp").$last_match(8))?t:0).$to_i(),i=(r(t=f("Regexp").$last_match(10))?t:1).$to_i()),r(h(i,4))&&(i=3),m.$checkRoll(c,x,R,o,i)):e}),C(_,"$checkRoll",function(l,m,c,t,x){var R=this,o=e,i=e,u=e,v=e,b=e,H=e,p=e,E=e,$=e,N=e,T=e;for(o=0,i=0,u="",v=l;r(h(v,0));)b=R.randomizer.$roll_barabara(v,10).$sort(),H=b.$join(","),p=q(b,"count",[],function(a){return a==null&&(a=e),z(a,m)}),E=q(b,"count",[],function(a){return a==null&&(a=e),z(a,x)}),o=s(o,p),i=s(i,E),r(u["$empty?"]())||(u=s(u,"+")),u=s(u,""+p+"["+H+"]"),v=E;return $="",N=c["$!="](0),r(N)?(T=s(D(o,c),D(i,t)),$=s($,"("+l+"D10<="+m+") \uFF1E "+u+" \uFF1E Hits\uFF1A"+o+"*"+c),r(h(t,0))&&($=s($," + Trigger\uFF1A"+i+"*"+t)),$=s($," \uFF1E "+T+"\u30C0\u30E1\u30FC\u30B8")):$=s($,"("+l+"D10<="+m+") \uFF1E "+u+" \uFF1E \u6210\u529F\u6570\uFF1A"+o),r(h(i,0))&&($=s($," / "+i+"\u30AF\u30EA\u30C6\u30A3\u30AB\u30EB")),$})})(y[0],F("Base"),y)})(k[0],k)})(S[0],S)});
