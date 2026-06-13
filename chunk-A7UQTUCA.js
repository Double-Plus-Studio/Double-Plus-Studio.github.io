import{a as k}from"./chunk-3YIZGX7G.js";import"./chunk-DKLAGT4O.js";k();Opal.queue(function(e){var u=e.module,_=e.klass,t=e.const_set,f=e.send,c=e.def,l=e.eqeq,i=[],G=e.nil;return(function(d,g){var v=u(d,"BCDice"),o=[v].concat(g);return(function(m,q){var D=u(m,"GameSystem"),s=[D].concat(q),E=e.$r(s);return(function(R,S,x){var r=_(R,S,"Gorilla"),n=[r].concat(x),a=e.$r(n);return t(n[0],"ID","Gorilla"),t(n[0],"NAME","\u30B4\u30EA\u30E9TRPG"),t(n[0],"SORT_KEY","\u3053\u308A\u3089TRPG"),t(n[0],"HELP_MESSAGE",`2D6\u30ED\u30FC\u30EB\u6642\u306E\u30B4\u30EA\u30C6\u30A3\u30AB\u30EB\u81EA\u52D5\u5224\u5B9A\u3092\u884C\u3044\u307E\u3059\u3002

G = 2D6\u306E\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8

\u4F8B) G>=7 : 2D6\u3057\u30667\u4EE5\u4E0A\u306A\u3089\u6210\u529F
`),r.$register_prefix("G"),c(r,"$change_text",function($){return $=f($,"gsub",[/^(S)?G/i],function(){return""+a("Regexp").$last_match(1)+"2D6"}),$}),c(r,"$result_2d6",function($,P,T,A,B){return l(T,[5,5])?a("Result").$critical("\u30B4\u30EA\u30C6\u30A3\u30AB\u30EB\uFF08\u81EA\u52D5\u7684\u6210\u529F\uFF09"):G})})(s[0],E("Base"),s)})(o[0],o)})(i[0],i)});
