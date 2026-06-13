import{a as X}from"./chunk-3YIZGX7G.js";import"./chunk-DKLAGT4O.js";X();Opal.queue(function(n){var E=n.module,k=n.klass,m=n.const_set,A=n.eqeq,t=n.truthy,x=n.rb_le,a=n.rb_minus,D=n.neqeq,z=n.rb_ge,b=n.def,B=n.rb_divide,C=n.not,p=n.range,G=n.hash2,T=n.rb_lt,M=n.rb_plus,L=[],e=n.nil,P=n.$$$;return(function(H,I){var K=E(H,"BCDice"),S=[K].concat(I);return(function(N,Y){var J=E(N,"GameSystem"),g=[J].concat(Y),Q=n.$r(g);return(function(U,V,W){var _=k(U,V,"ChaosFlare"),o=[_].concat(W),F=n.$r(o),j=_.$$prototype;return j.randomizer=j.cmd=e,m(o[0],"ID","ChaosFlare"),m(o[0],"NAME","\u30AB\u30AA\u30B9\u30D5\u30EC\u30A2"),m(o[0],"SORT_KEY","\u304B\u304A\u3059\u3075\u308C\u3042"),m(o[0],"HELP_MESSAGE",`\u5224\u5B9A
CF
  \u66F8\u5F0F: [\u30C0\u30A4\u30B9\u306E\u6570]CF[\u4FEE\u6B63\u5024][@\u30AF\u30EA\u30C6\u30A3\u30AB\u30EB\u5024][#\u30D5\u30A1\u30F3\u30D6\u30EB\u5024][>=\u76EE\u6A19\u5024]
    CF\u4EE5\u5916\u306F\u5168\u3066\u7701\u7565\u53EF\u80FD
  \u4F8B:
  - CF 2D6,\u30AF\u30EA\u30C6\u30A3\u30AB\u30EB\u502412,\u30D5\u30A1\u30F3\u30D6\u30EB\u50242\u3067\u5224\u5B9A
  - CF+10@10 \u4FEE\u6B63\u5024+10,\u30AF\u30EA\u30C6\u30A3\u30AB\u30EB\u502410\u3067\u5224\u5B9A
  - CF+10#3 \u4FEE\u6B63\u5024+10,\u30D5\u30A1\u30F3\u30D6\u30EB\u50243\u3067\u5224\u5B9A
  - CF+10>=10 \u76EE\u6A19\u5024\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001\u5DEE\u5206\u5024\u3082\u51FA\u529B\u3059\u308B
  - 3CF+10@10#3>=10 3D6\u3067\u306E\u5224\u5B9A
  - CF@9#3+8>=10

2D6
  \u30D5\u30A1\u30F3\u30D6\u30EB\u50242\u3067\u5224\u5B9A\u3059\u308B\u3002\u30AF\u30EA\u30C6\u30A3\u30AB\u30EB\u306E\u5224\u5B9A\u306F\u884C\u308F\u308C\u306A\u3044\u3002
  \u76EE\u6A19\u5024\u304C\u8A2D\u5B9A\u3055\u308C\u305F\u5834\u5408\u3001\u5DEE\u5206\u5024\u3092\u51FA\u529B\u3059\u308B\u3002
  - 2D6+4>=10

\u5404\u7A2E\u8868
  FT: \u56E0\u7E01\u8868
  FTx: \u6570\u5024\u3092\u6307\u5B9A\u3059\u308B\u3068\u56E0\u679C\u8868\u306E\u5024\u3092\u51FA\u529B\u3059\u308B
  - FT -> 11\u304B\u308966\u306E\u9593\u3067\u30E9\u30F3\u30C0\u30E0\u6C7A\u5B9A
  - FT23 -> 23\u306E\u9805\u76EE\u3092\u51FA\u529B
  - FT0
  - FT7
`),_.$register_prefix("\\d*CF","FT"),b(_,"$result_2d6",function(i,r,f,c,s){var $=e,u=e;return A(c,">=")?($=[],u=F("Result").$new(),t(x(r,2))&&(i=a(i,20),$.$push("\u30D5\u30A1\u30F3\u30D6\u30EB(-20)"),u["$fumble="](!0)),D(s,"?")&&(t(z(i,s))?($.$push("\u6210\u529F"),u["$success="](!0)):($.$push("\u5931\u6557"),u["$failure="](!0)),D(a(i,s),0)&&$.$push("\u5DEE\u5206\u5024"+a(i,s))),t($["$empty?"]())?F("Result").$nothing():(u["$text="]($.$join(" \uFF1E ")),u)):e}),b(_,"$eval_game_system_specific_command",function(i){var r=this;return t(i["$start_with?"]("FT"))?r.$roll_fate_table(i):r.$cf_roll(i)}),_.$private(),b(_,"$roll_fate_table",function(i){var r=this,f=e,c=e,s=e,$=e,u=e,d=e;if(f=/^FT(\d+)?/.$match(i),t(f["$[]"](1))){if(c=f["$[]"](1).$to_i(),t([0,7]["$include?"](c)))return"\u56E0\u679C\u8868("+c+") \uFF1E "+F("FATE_TABLE")["$[]"](c)["$[]"](0);if(s=B(c,10).$to_i(),$=c["$%"](10),C(p(1,6,!1)["$include?"](s))||C(p(1,6,!1)["$include?"]($)))return e}else s=r.randomizer.$roll_once(6),$=r.randomizer.$roll_once(6);return u=s,d=a(B($,2).$to_i(),1),"\u56E0\u679C\u8868("+s+$+") \uFF1E "+F("FATE_TABLE")["$[]"](u)["$[]"](d)}),b(_,"$cf_roll",function(i){var r=this,f=e,c=e,s=e,$=e,u=e,d=e,h=e,w=e,q=e,y=e,l=e,R=e;return f=P(F("Command"),"Parser").$new(/\d*CF/,G(["round_type"],{round_type:r.$round_type()})).$enable_critical().$enable_fumble(),r.cmd=f.$parse(i),!t(r.cmd)||(c=A(r.cmd.$command(),"CF")?2:r.cmd.$command().$to_i(),s=t($=r.cmd.$critical())?$:12,u=t($=r.cmd.$fumble())?$:2,r.cmd["$dollar="](e),t(T(c,0))||C([">=",e]["$include?"](r.cmd.$cmp_op())))?e:(d=r.randomizer.$roll_barabara(c,6),h=d.$sum(),w=d.$join(","),q=z(h,s),y=x(h,u),l=t(q)?30:t(y)?-20:h,l=M(l,r.cmd.$modify_number()),R=["("+r.cmd.$to_s("after_modify_number")+")",""+h+"["+w+"]",l.$to_s(),t(T(l,0))?"0":e,t(q)?"\u30AF\u30EA\u30C6\u30A3\u30AB\u30EB":e,t(y)?"\u30D5\u30A1\u30F3\u30D6\u30EB":e,t(r.cmd.$target_number())?"\u5DEE\u5206\u5024 "+r.$difference(l):e].$compact(),R.$join(" \uFF1E "))}),b(_,"$difference",function(i){var r=this;return t(T(i,0))?r.cmd.$target_number()["$-@"]():a(i,r.cmd.$target_number())}),m(o[0],"FATE_TABLE",[["\u8150\u308C\u7E01"],["\u7D14\u611B","\u89AA\u8FD1\u611F","\u5E87\u8B77"],["\u4FE1\u983C","\u611F\u670D","\u5171\u611F"],["\u53CB\u60C5","\u5C0A\u656C","\u6155\u60C5"],["\u597D\u6575\u624B","\u671F\u5F85","\u501F\u308A"],["\u8208\u5473","\u618E\u60AA","\u60B2\u3057\u307F"],["\u6050\u6016","\u57F7\u7740","\u5229\u7528"],["\u4EFB\u610F"]].$freeze())})(g[0],Q("Base"),g)})(S[0],S)})(L[0],L)});
