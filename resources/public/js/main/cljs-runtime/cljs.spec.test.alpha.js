goog.provide('cljs.spec.test.alpha');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('goog.userAgent.product');
goog.require('clojure.string');
goog.require('cljs.stacktrace');
goog.require('cljs.pprint');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.gen.alpha');
cljs.spec.test.alpha.distinct_by = (function cljs$spec$test$alpha$distinct_by(f,coll){
var step = (function cljs$spec$test$alpha$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
var fexpr__55511 = (function (p__55512,seen__$1){
while(true){
var vec__55513 = p__55512;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55513,(0),null);
var xs__$1 = vec__55513;
var temp__5804__auto__ = cljs.core.seq(xs__$1);
if(temp__5804__auto__){
var s = temp__5804__auto__;
var v = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(seen__$1,v)){
var G__56071 = cljs.core.rest(s);
var G__56072 = seen__$1;
p__55512 = G__56071;
seen__$1 = G__56072;
continue;
} else {
return cljs.core.cons(x,cljs$spec$test$alpha$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v)));
}
} else {
return null;
}
break;
}
});
return fexpr__55511(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.spec.test.alpha.__GT_sym = (function cljs$spec$test$alpha$__GT_sym(x){
var fexpr__55516 = cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha.__GT_sym;},new cljs.core.Symbol("cljs.spec.alpha","->sym","cljs.spec.alpha/->sym",-2031271081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"->sym","->sym",696606926,null),"cljs/spec/alpha.cljs",13,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns a symbol from a symbol or var",(cljs.core.truth_(cljs.spec.alpha.__GT_sym)?cljs.spec.alpha.__GT_sym.cljs$lang$test:null)])));
return (fexpr__55516.cljs$core$IFn$_invoke$arity$1 ? fexpr__55516.cljs$core$IFn$_invoke$arity$1(x) : fexpr__55516.call(null,x));
});
/**
 * if false, instrumented fns call straight through
 */
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = true;
cljs.spec.test.alpha.get_host_port = (function cljs$spec$test$alpha$get_host_port(){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("browser",cljs.core._STAR_target_STAR_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),window.location.host,new cljs.core.Keyword(null,"port","port",1534937262),window.location.port], null);
}
});
cljs.spec.test.alpha.get_ua_product = (function cljs$spec$test$alpha$get_ua_product(){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("browser",cljs.core._STAR_target_STAR_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_target_STAR_);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
cljs.spec.test.alpha.get_env = (function cljs$spec$test$alpha$get_env(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ua-product","ua-product",938384227),cljs.spec.test.alpha.get_ua_product()], null);
});
/**
 * Fn-spec must include at least :args or :ret specs.
 */
cljs.spec.test.alpha.fn_spec_QMARK_ = (function cljs$spec$test$alpha$fn_spec_QMARK_(m){
var or__4131__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(m);
}
});
cljs.spec.test.alpha.explain_data_STAR_ = (function cljs$spec$test$alpha$explain_data_STAR_(spec,v){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3(spec,v,null)){
return null;
} else {
return cljs.spec.alpha.explain_data(spec,v);
}
});
cljs.spec.test.alpha.find_caller = (function cljs$spec$test$alpha$find_caller(st){
var search_spec_fn = (function cljs$spec$test$alpha$find_caller_$_search_spec_fn(frame){
if(cljs.core.truth_(frame)){
var s = new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(frame);
var and__4120__auto__ = typeof s === 'string';
if(and__4120__auto__){
var and__4120__auto____$1 = (!(clojure.string.blank_QMARK_(s)));
if(and__4120__auto____$1){
return cljs.core.re_find(/cljs\.spec\.test\.spec_checking_fn/,s);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
} else {
return null;
}
});
return cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(search_spec_fn,cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__55518_SHARP_){
return cljs.core.not(search_spec_fn(p1__55518_SHARP_));
}),st)));
});
cljs.spec.test.alpha.spec_checking_fn = (function cljs$spec$test$alpha$spec_checking_fn(v,f,fn_spec){
var fn_spec__$1 = (function (){var fexpr__55521 = cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha.maybe_spec;},new cljs.core.Symbol("cljs.spec.alpha","maybe-spec","cljs.spec.alpha/maybe-spec",1954004993,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"maybe-spec","maybe-spec",-741366888,null),"cljs/spec/alpha.cljs",18,1,105,105,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec-or-k","spec-or-k",1986391440,null)], null)),"spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.",(cljs.core.truth_(cljs.spec.alpha.maybe_spec)?cljs.spec.alpha.maybe_spec.cljs$lang$test:null)])));
return (fexpr__55521.cljs$core$IFn$_invoke$arity$1 ? fexpr__55521.cljs$core$IFn$_invoke$arity$1(fn_spec) : fexpr__55521.call(null,fn_spec));
})();
var args_spec = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(fn_spec__$1);
var conform_BANG_ = ((function (fn_spec__$1,args_spec){
return (function (v__$1,role,spec,data,args){
var conformed = cljs.spec.alpha.conform(spec,data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),conformed)){
var caller = cljs.spec.test.alpha.find_caller((function (){var G__55526 = cljs.spec.test.alpha.get_host_port();
var G__55527 = (new Error()).stack;
var G__55528 = cljs.spec.test.alpha.get_env();
var G__55529 = null;
return (cljs.stacktrace.parse_stacktrace.cljs$core$IFn$_invoke$arity$4 ? cljs.stacktrace.parse_stacktrace.cljs$core$IFn$_invoke$arity$4(G__55526,G__55527,G__55528,G__55529) : cljs.stacktrace.parse_stacktrace.call(null,G__55526,G__55527,G__55528,G__55529));
})());
var ed = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.spec.alpha.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,data),new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443),cljs.spec.test.alpha.__GT_sym(v__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",1870769783),args,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"instrument","instrument",-960698844)], 0)),(cljs.core.truth_(caller)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390),caller], null):null)], 0));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Call to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)," did not conform to spec."].join(''),ed);
} else {
return conformed;
}
});})(fn_spec__$1,args_spec))
;
var pure_variadic_QMARK_ = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)));
if(cljs.core.truth_(and__4120__auto__)){
return (new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v))) === (0));
} else {
return and__4120__auto__;
}
})();
var apply_SINGLEQUOTE_ = ((function (fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_){
return (function (f__$1,args){
if(cljs.core.truth_((function (){var and__4120__auto__ = (args == null);
if(and__4120__auto__){
return pure_variadic_QMARK_;
} else {
return and__4120__auto__;
}
})())){
return f__$1.cljs$core$IFn$_invoke$arity$variadic();
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f__$1,args);
}
});})(fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_))
;
var conform_BANG__STAR_ = ((function (fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_){
return (function (p1__55520_SHARP_){
return conform_BANG_(v,new cljs.core.Keyword(null,"args","args",1315556576),args_spec,p1__55520_SHARP_,p1__55520_SHARP_);
});})(fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_))
;
var ret = (cljs.core.truth_(args_spec)?((function (fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_){
return (function() { 
var G__56140__delegate = function (args){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var orig__55297__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{conform_BANG__STAR_(args);

var _STAR_instrument_enabled_STAR__orig_val__55534 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__55535 = true;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__55535;

try{return apply_SINGLEQUOTE_(f,args);
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__55534;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__55297__auto__;
}} else {
return apply_SINGLEQUOTE_(f,args);
}
};
var G__56140 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56147__i = 0, G__56147__a = new Array(arguments.length -  0);
while (G__56147__i < G__56147__a.length) {G__56147__a[G__56147__i] = arguments[G__56147__i + 0]; ++G__56147__i;}
  args = new cljs.core.IndexedSeq(G__56147__a,0,null);
} 
return G__56140__delegate.call(this,args);};
G__56140.cljs$lang$maxFixedArity = 0;
G__56140.cljs$lang$applyTo = (function (arglist__56148){
var args = cljs.core.seq(arglist__56148);
return G__56140__delegate(args);
});
G__56140.cljs$core$IFn$_invoke$arity$variadic = G__56140__delegate;
return G__56140;
})()
;})(fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_))
:f);
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(pure_variadic_QMARK_);
if(and__4120__auto__){
return args_spec;
} else {
return and__4120__auto__;
}
})())){
var temp__5808__auto___56154 = f.cljs$core$IFn$_invoke$arity$0;
if((temp__5808__auto___56154 == null)){
} else {
var ac__55460__auto___56156 = temp__5808__auto___56154;
ret.cljs$core$IFn$_invoke$arity$0 = ((function (ac__55460__auto___56156,temp__5808__auto___56154,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret){
return (function (){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var orig__55297__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{conform_BANG__STAR_(cljs.core.PersistentVector.EMPTY);

var _STAR_instrument_enabled_STAR__orig_val__55540 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__55541 = true;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__55541;

try{return (ac__55460__auto___56156.cljs$core$IFn$_invoke$arity$0 ? ac__55460__auto___56156.cljs$core$IFn$_invoke$arity$0() : ac__55460__auto___56156.call(null));
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__55540;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__55297__auto__;
}} else {
return (ac__55460__auto___56156.cljs$core$IFn$_invoke$arity$0 ? ac__55460__auto___56156.cljs$core$IFn$_invoke$arity$0() : ac__55460__auto___56156.call(null));
}
});})(ac__55460__auto___56156,temp__5808__auto___56154,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret))
;
}

var temp__5808__auto___56168 = f.cljs$core$IFn$_invoke$arity$1;
if((temp__5808__auto___56168 == null)){
} else {
var ac__55460__auto___56169 = temp__5808__auto___56168;
ret.cljs$core$IFn$_invoke$arity$1 = ((function (ac__55460__auto___56169,temp__5808__auto___56168,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret){
return (function (arg0){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var orig__55297__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{conform_BANG__STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0], null));

var _STAR_instrument_enabled_STAR__orig_val__55549 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__55550 = true;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__55550;

try{return (ac__55460__auto___56169.cljs$core$IFn$_invoke$arity$1 ? ac__55460__auto___56169.cljs$core$IFn$_invoke$arity$1(arg0) : ac__55460__auto___56169.call(null,arg0));
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__55549;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__55297__auto__;
}} else {
return (ac__55460__auto___56169.cljs$core$IFn$_invoke$arity$1 ? ac__55460__auto___56169.cljs$core$IFn$_invoke$arity$1(arg0) : ac__55460__auto___56169.call(null,arg0));
}
});})(ac__55460__auto___56169,temp__5808__auto___56168,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret))
;
}

var temp__5808__auto___56172 = f.cljs$core$IFn$_invoke$arity$2;
if((temp__5808__auto___56172 == null)){
} else {
var ac__55460__auto___56173 = temp__5808__auto___56172;
ret.cljs$core$IFn$_invoke$arity$2 = ((function (ac__55460__auto___56173,temp__5808__auto___56172,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret){
return (function (arg0,arg1){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var orig__55297__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{conform_BANG__STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1], null));

var _STAR_instrument_enabled_STAR__orig_val__55562 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__55563 = true;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__55563;

try{return (ac__55460__auto___56173.cljs$core$IFn$_invoke$arity$2 ? ac__55460__auto___56173.cljs$core$IFn$_invoke$arity$2(arg0,arg1) : ac__55460__auto___56173.call(null,arg0,arg1));
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__55562;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__55297__auto__;
}} else {
return (ac__55460__auto___56173.cljs$core$IFn$_invoke$arity$2 ? ac__55460__auto___56173.cljs$core$IFn$_invoke$arity$2(arg0,arg1) : ac__55460__auto___56173.call(null,arg0,arg1));
}
});})(ac__55460__auto___56173,temp__5808__auto___56172,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret))
;
}

var temp__5808__auto___56182 = f.cljs$core$IFn$_invoke$arity$3;
if((temp__5808__auto___56182 == null)){
} else {
var ac__55460__auto___56184 = temp__5808__auto___56182;
ret.cljs$core$IFn$_invoke$arity$3 = ((function (ac__55460__auto___56184,temp__5808__auto___56182,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret){
return (function (arg0,arg1,arg2){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var orig__55297__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{conform_BANG__STAR_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2], null));

var _STAR_instrument_enabled_STAR__orig_val__55567 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__55568 = true;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__55568;

try{return (ac__55460__auto___56184.cljs$core$IFn$_invoke$arity$3 ? ac__55460__auto___56184.cljs$core$IFn$_invoke$arity$3(arg0,arg1,arg2) : ac__55460__auto___56184.call(null,arg0,arg1,arg2));
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__55567;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__55297__auto__;
}} else {
return (ac__55460__auto___56184.cljs$core$IFn$_invoke$arity$3 ? ac__55460__auto___56184.cljs$core$IFn$_invoke$arity$3(arg0,arg1,arg2) : ac__55460__auto___56184.call(null,arg0,arg1,arg2));
}
});})(ac__55460__auto___56184,temp__5808__auto___56182,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret))
;
}

var temp__5808__auto___56204 = f.cljs$core$IFn$_invoke$arity$4;
if((temp__5808__auto___56204 == null)){
} else {
var ac__55460__auto___56206 = temp__5808__auto___56204;
ret.cljs$core$IFn$_invoke$arity$4 = ((function (ac__55460__auto___56206,temp__5808__auto___56204,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret){
return (function (arg0,arg1,arg2,arg3){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var orig__55297__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{conform_BANG__STAR_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3], null));

var _STAR_instrument_enabled_STAR__orig_val__55618 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__55619 = true;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__55619;

try{return (ac__55460__auto___56206.cljs$core$IFn$_invoke$arity$4 ? ac__55460__auto___56206.cljs$core$IFn$_invoke$arity$4(arg0,arg1,arg2,arg3) : ac__55460__auto___56206.call(null,arg0,arg1,arg2,arg3));
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__55618;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__55297__auto__;
}} else {
return (ac__55460__auto___56206.cljs$core$IFn$_invoke$arity$4 ? ac__55460__auto___56206.cljs$core$IFn$_invoke$arity$4(arg0,arg1,arg2,arg3) : ac__55460__auto___56206.call(null,arg0,arg1,arg2,arg3));
}
});})(ac__55460__auto___56206,temp__5808__auto___56204,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret))
;
}

var temp__5808__auto___56219 = f.cljs$core$IFn$_invoke$arity$5;
if((temp__5808__auto___56219 == null)){
} else {
var ac__55460__auto___56220 = temp__5808__auto___56219;
ret.cljs$core$IFn$_invoke$arity$5 = ((function (ac__55460__auto___56220,temp__5808__auto___56219,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret){
return (function (arg0,arg1,arg2,arg3,arg4){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var orig__55297__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{conform_BANG__STAR_(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4], null));

var _STAR_instrument_enabled_STAR__orig_val__55631 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__55632 = true;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__55632;

try{return (ac__55460__auto___56220.cljs$core$IFn$_invoke$arity$5 ? ac__55460__auto___56220.cljs$core$IFn$_invoke$arity$5(arg0,arg1,arg2,arg3,arg4) : ac__55460__auto___56220.call(null,arg0,arg1,arg2,arg3,arg4));
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__55631;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__55297__auto__;
}} else {
return (ac__55460__auto___56220.cljs$core$IFn$_invoke$arity$5 ? ac__55460__auto___56220.cljs$core$IFn$_invoke$arity$5(arg0,arg1,arg2,arg3,arg4) : ac__55460__auto___56220.call(null,arg0,arg1,arg2,arg3,arg4));
}
});})(ac__55460__auto___56220,temp__5808__auto___56219,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret))
;
}

var temp__5808__auto___56225 = f.cljs$core$IFn$_invoke$arity$6;
if((temp__5808__auto___56225 == null)){
} else {
var ac__55460__auto___56226 = temp__5808__auto___56225;
ret.cljs$core$IFn$_invoke$arity$6 = ((function (ac__55460__auto___56226,temp__5808__auto___56225,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret){
return (function (arg0,arg1,arg2,arg3,arg4,arg5){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var orig__55297__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{conform_BANG__STAR_(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5], null));

var _STAR_instrument_enabled_STAR__orig_val__55638 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__55639 = true;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__55639;

try{return (ac__55460__auto___56226.cljs$core$IFn$_invoke$arity$6 ? ac__55460__auto___56226.cljs$core$IFn$_invoke$arity$6(arg0,arg1,arg2,arg3,arg4,arg5) : ac__55460__auto___56226.call(null,arg0,arg1,arg2,arg3,arg4,arg5));
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__55638;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__55297__auto__;
}} else {
return (ac__55460__auto___56226.cljs$core$IFn$_invoke$arity$6 ? ac__55460__auto___56226.cljs$core$IFn$_invoke$arity$6(arg0,arg1,arg2,arg3,arg4,arg5) : ac__55460__auto___56226.call(null,arg0,arg1,arg2,arg3,arg4,arg5));
}
});})(ac__55460__auto___56226,temp__5808__auto___56225,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret))
;
}

var temp__5808__auto___56227 = f.cljs$core$IFn$_invoke$arity$7;
if((temp__5808__auto___56227 == null)){
} else {
var ac__55460__auto___56228 = temp__5808__auto___56227;
ret.cljs$core$IFn$_invoke$arity$7 = ((function (ac__55460__auto___56228,temp__5808__auto___56227,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret){
return (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var orig__55297__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{conform_BANG__STAR_(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6], null));

var _STAR_instrument_enabled_STAR__orig_val__55652 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__55653 = true;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__55653;

try{return (ac__55460__auto___56228.cljs$core$IFn$_invoke$arity$7 ? ac__55460__auto___56228.cljs$core$IFn$_invoke$arity$7(arg0,arg1,arg2,arg3,arg4,arg5,arg6) : ac__55460__auto___56228.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6));
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__55652;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__55297__auto__;
}} else {
return (ac__55460__auto___56228.cljs$core$IFn$_invoke$arity$7 ? ac__55460__auto___56228.cljs$core$IFn$_invoke$arity$7(arg0,arg1,arg2,arg3,arg4,arg5,arg6) : ac__55460__auto___56228.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6));
}
});})(ac__55460__auto___56228,temp__5808__auto___56227,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret))
;
}

var temp__5808__auto___56232 = f.cljs$core$IFn$_invoke$arity$8;
if((temp__5808__auto___56232 == null)){
} else {
var ac__55460__auto___56233 = temp__5808__auto___56232;
ret.cljs$core$IFn$_invoke$arity$8 = ((function (ac__55460__auto___56233,temp__5808__auto___56232,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret){
return (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var orig__55297__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{conform_BANG__STAR_(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7], null));

var _STAR_instrument_enabled_STAR__orig_val__55656 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__55657 = true;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__55657;

try{return (ac__55460__auto___56233.cljs$core$IFn$_invoke$arity$8 ? ac__55460__auto___56233.cljs$core$IFn$_invoke$arity$8(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7) : ac__55460__auto___56233.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7));
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__55656;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__55297__auto__;
}} else {
return (ac__55460__auto___56233.cljs$core$IFn$_invoke$arity$8 ? ac__55460__auto___56233.cljs$core$IFn$_invoke$arity$8(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7) : ac__55460__auto___56233.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7));
}
});})(ac__55460__auto___56233,temp__5808__auto___56232,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret))
;
}

var temp__5808__auto___56238 = f.cljs$core$IFn$_invoke$arity$9;
if((temp__5808__auto___56238 == null)){
} else {
var ac__55460__auto___56239 = temp__5808__auto___56238;
ret.cljs$core$IFn$_invoke$arity$9 = ((function (ac__55460__auto___56239,temp__5808__auto___56238,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret){
return (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var orig__55297__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{conform_BANG__STAR_(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8], null));

var _STAR_instrument_enabled_STAR__orig_val__55658 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__55659 = true;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__55659;

try{return (ac__55460__auto___56239.cljs$core$IFn$_invoke$arity$9 ? ac__55460__auto___56239.cljs$core$IFn$_invoke$arity$9(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8) : ac__55460__auto___56239.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8));
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__55658;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__55297__auto__;
}} else {
return (ac__55460__auto___56239.cljs$core$IFn$_invoke$arity$9 ? ac__55460__auto___56239.cljs$core$IFn$_invoke$arity$9(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8) : ac__55460__auto___56239.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8));
}
});})(ac__55460__auto___56239,temp__5808__auto___56238,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret))
;
}

var temp__5808__auto___56244 = f.cljs$core$IFn$_invoke$arity$10;
if((temp__5808__auto___56244 == null)){
} else {
var ac__55460__auto___56246 = temp__5808__auto___56244;
ret.cljs$core$IFn$_invoke$arity$10 = ((function (ac__55460__auto___56246,temp__5808__auto___56244,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret){
return (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var orig__55297__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{conform_BANG__STAR_(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9], null));

var _STAR_instrument_enabled_STAR__orig_val__55661 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__55662 = true;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__55662;

try{return (ac__55460__auto___56246.cljs$core$IFn$_invoke$arity$10 ? ac__55460__auto___56246.cljs$core$IFn$_invoke$arity$10(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9) : ac__55460__auto___56246.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9));
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__55661;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__55297__auto__;
}} else {
return (ac__55460__auto___56246.cljs$core$IFn$_invoke$arity$10 ? ac__55460__auto___56246.cljs$core$IFn$_invoke$arity$10(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9) : ac__55460__auto___56246.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9));
}
});})(ac__55460__auto___56246,temp__5808__auto___56244,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret))
;
}

var temp__5808__auto___56250 = f.cljs$core$IFn$_invoke$arity$11;
if((temp__5808__auto___56250 == null)){
} else {
var ac__55460__auto___56251 = temp__5808__auto___56250;
ret.cljs$core$IFn$_invoke$arity$11 = ((function (ac__55460__auto___56251,temp__5808__auto___56250,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret){
return (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var orig__55297__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{conform_BANG__STAR_(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10], null));

var _STAR_instrument_enabled_STAR__orig_val__55666 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__55667 = true;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__55667;

try{return (ac__55460__auto___56251.cljs$core$IFn$_invoke$arity$11 ? ac__55460__auto___56251.cljs$core$IFn$_invoke$arity$11(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10) : ac__55460__auto___56251.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10));
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__55666;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__55297__auto__;
}} else {
return (ac__55460__auto___56251.cljs$core$IFn$_invoke$arity$11 ? ac__55460__auto___56251.cljs$core$IFn$_invoke$arity$11(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10) : ac__55460__auto___56251.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10));
}
});})(ac__55460__auto___56251,temp__5808__auto___56250,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret))
;
}

var temp__5808__auto___56252 = f.cljs$core$IFn$_invoke$arity$12;
if((temp__5808__auto___56252 == null)){
} else {
var ac__55460__auto___56253 = temp__5808__auto___56252;
ret.cljs$core$IFn$_invoke$arity$12 = ((function (ac__55460__auto___56253,temp__5808__auto___56252,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret){
return (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var orig__55297__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{conform_BANG__STAR_(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11], null));

var _STAR_instrument_enabled_STAR__orig_val__55675 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__55676 = true;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__55676;

try{return (ac__55460__auto___56253.cljs$core$IFn$_invoke$arity$12 ? ac__55460__auto___56253.cljs$core$IFn$_invoke$arity$12(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11) : ac__55460__auto___56253.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11));
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__55675;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__55297__auto__;
}} else {
return (ac__55460__auto___56253.cljs$core$IFn$_invoke$arity$12 ? ac__55460__auto___56253.cljs$core$IFn$_invoke$arity$12(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11) : ac__55460__auto___56253.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11));
}
});})(ac__55460__auto___56253,temp__5808__auto___56252,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret))
;
}

var temp__5808__auto___56258 = f.cljs$core$IFn$_invoke$arity$13;
if((temp__5808__auto___56258 == null)){
} else {
var ac__55460__auto___56259 = temp__5808__auto___56258;
ret.cljs$core$IFn$_invoke$arity$13 = ((function (ac__55460__auto___56259,temp__5808__auto___56258,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret){
return (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var orig__55297__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{conform_BANG__STAR_(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12], null));

var _STAR_instrument_enabled_STAR__orig_val__55698 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__55699 = true;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__55699;

try{return (ac__55460__auto___56259.cljs$core$IFn$_invoke$arity$13 ? ac__55460__auto___56259.cljs$core$IFn$_invoke$arity$13(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12) : ac__55460__auto___56259.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12));
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__55698;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__55297__auto__;
}} else {
return (ac__55460__auto___56259.cljs$core$IFn$_invoke$arity$13 ? ac__55460__auto___56259.cljs$core$IFn$_invoke$arity$13(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12) : ac__55460__auto___56259.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12));
}
});})(ac__55460__auto___56259,temp__5808__auto___56258,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret))
;
}

var temp__5808__auto___56266 = f.cljs$core$IFn$_invoke$arity$14;
if((temp__5808__auto___56266 == null)){
} else {
var ac__55460__auto___56267 = temp__5808__auto___56266;
ret.cljs$core$IFn$_invoke$arity$14 = ((function (ac__55460__auto___56267,temp__5808__auto___56266,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret){
return (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var orig__55297__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{conform_BANG__STAR_(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13], null));

var _STAR_instrument_enabled_STAR__orig_val__55712 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__55713 = true;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__55713;

try{return (ac__55460__auto___56267.cljs$core$IFn$_invoke$arity$14 ? ac__55460__auto___56267.cljs$core$IFn$_invoke$arity$14(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13) : ac__55460__auto___56267.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13));
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__55712;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__55297__auto__;
}} else {
return (ac__55460__auto___56267.cljs$core$IFn$_invoke$arity$14 ? ac__55460__auto___56267.cljs$core$IFn$_invoke$arity$14(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13) : ac__55460__auto___56267.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13));
}
});})(ac__55460__auto___56267,temp__5808__auto___56266,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret))
;
}

var temp__5808__auto___56271 = f.cljs$core$IFn$_invoke$arity$15;
if((temp__5808__auto___56271 == null)){
} else {
var ac__55460__auto___56272 = temp__5808__auto___56271;
ret.cljs$core$IFn$_invoke$arity$15 = ((function (ac__55460__auto___56272,temp__5808__auto___56271,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret){
return (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var orig__55297__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{conform_BANG__STAR_(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14], null));

var _STAR_instrument_enabled_STAR__orig_val__55714 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__55715 = true;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__55715;

try{return (ac__55460__auto___56272.cljs$core$IFn$_invoke$arity$15 ? ac__55460__auto___56272.cljs$core$IFn$_invoke$arity$15(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14) : ac__55460__auto___56272.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14));
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__55714;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__55297__auto__;
}} else {
return (ac__55460__auto___56272.cljs$core$IFn$_invoke$arity$15 ? ac__55460__auto___56272.cljs$core$IFn$_invoke$arity$15(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14) : ac__55460__auto___56272.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14));
}
});})(ac__55460__auto___56272,temp__5808__auto___56271,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret))
;
}

var temp__5808__auto___56294 = f.cljs$core$IFn$_invoke$arity$16;
if((temp__5808__auto___56294 == null)){
} else {
var ac__55460__auto___56295 = temp__5808__auto___56294;
ret.cljs$core$IFn$_invoke$arity$16 = ((function (ac__55460__auto___56295,temp__5808__auto___56294,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret){
return (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var orig__55297__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{conform_BANG__STAR_(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15], null));

var _STAR_instrument_enabled_STAR__orig_val__55724 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__55725 = true;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__55725;

try{return (ac__55460__auto___56295.cljs$core$IFn$_invoke$arity$16 ? ac__55460__auto___56295.cljs$core$IFn$_invoke$arity$16(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15) : ac__55460__auto___56295.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15));
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__55724;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__55297__auto__;
}} else {
return (ac__55460__auto___56295.cljs$core$IFn$_invoke$arity$16 ? ac__55460__auto___56295.cljs$core$IFn$_invoke$arity$16(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15) : ac__55460__auto___56295.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15));
}
});})(ac__55460__auto___56295,temp__5808__auto___56294,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret))
;
}

var temp__5808__auto___56296 = f.cljs$core$IFn$_invoke$arity$17;
if((temp__5808__auto___56296 == null)){
} else {
var ac__55460__auto___56297 = temp__5808__auto___56296;
ret.cljs$core$IFn$_invoke$arity$17 = ((function (ac__55460__auto___56297,temp__5808__auto___56296,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret){
return (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var orig__55297__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{conform_BANG__STAR_(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16], null));

var _STAR_instrument_enabled_STAR__orig_val__55736 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__55737 = true;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__55737;

try{return (ac__55460__auto___56297.cljs$core$IFn$_invoke$arity$17 ? ac__55460__auto___56297.cljs$core$IFn$_invoke$arity$17(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16) : ac__55460__auto___56297.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16));
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__55736;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__55297__auto__;
}} else {
return (ac__55460__auto___56297.cljs$core$IFn$_invoke$arity$17 ? ac__55460__auto___56297.cljs$core$IFn$_invoke$arity$17(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16) : ac__55460__auto___56297.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16));
}
});})(ac__55460__auto___56297,temp__5808__auto___56296,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret))
;
}

var temp__5808__auto___56298 = f.cljs$core$IFn$_invoke$arity$18;
if((temp__5808__auto___56298 == null)){
} else {
var ac__55460__auto___56299 = temp__5808__auto___56298;
ret.cljs$core$IFn$_invoke$arity$18 = ((function (ac__55460__auto___56299,temp__5808__auto___56298,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret){
return (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var orig__55297__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{conform_BANG__STAR_(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17], null));

var _STAR_instrument_enabled_STAR__orig_val__55745 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__55746 = true;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__55746;

try{return (ac__55460__auto___56299.cljs$core$IFn$_invoke$arity$18 ? ac__55460__auto___56299.cljs$core$IFn$_invoke$arity$18(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17) : ac__55460__auto___56299.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17));
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__55745;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__55297__auto__;
}} else {
return (ac__55460__auto___56299.cljs$core$IFn$_invoke$arity$18 ? ac__55460__auto___56299.cljs$core$IFn$_invoke$arity$18(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17) : ac__55460__auto___56299.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17));
}
});})(ac__55460__auto___56299,temp__5808__auto___56298,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret))
;
}

var temp__5808__auto___56300 = f.cljs$core$IFn$_invoke$arity$19;
if((temp__5808__auto___56300 == null)){
} else {
var ac__55460__auto___56301 = temp__5808__auto___56300;
ret.cljs$core$IFn$_invoke$arity$19 = ((function (ac__55460__auto___56301,temp__5808__auto___56300,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret){
return (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var orig__55297__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{conform_BANG__STAR_(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18], null));

var _STAR_instrument_enabled_STAR__orig_val__55752 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__55753 = true;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__55753;

try{return (ac__55460__auto___56301.cljs$core$IFn$_invoke$arity$19 ? ac__55460__auto___56301.cljs$core$IFn$_invoke$arity$19(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18) : ac__55460__auto___56301.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18));
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__55752;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__55297__auto__;
}} else {
return (ac__55460__auto___56301.cljs$core$IFn$_invoke$arity$19 ? ac__55460__auto___56301.cljs$core$IFn$_invoke$arity$19(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18) : ac__55460__auto___56301.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18));
}
});})(ac__55460__auto___56301,temp__5808__auto___56300,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret))
;
}

var temp__5808__auto___56302 = f.cljs$core$IFn$_invoke$arity$20;
if((temp__5808__auto___56302 == null)){
} else {
var ac__55460__auto___56304 = temp__5808__auto___56302;
ret.cljs$core$IFn$_invoke$arity$20 = ((function (ac__55460__auto___56304,temp__5808__auto___56302,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret){
return (function (arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,arg19){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var orig__55297__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{conform_BANG__STAR_(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,arg19], null));

var _STAR_instrument_enabled_STAR__orig_val__55763 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__55764 = true;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__55764;

try{return (ac__55460__auto___56304.cljs$core$IFn$_invoke$arity$20 ? ac__55460__auto___56304.cljs$core$IFn$_invoke$arity$20(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,arg19) : ac__55460__auto___56304.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,arg19));
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__55763;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__55297__auto__;
}} else {
return (ac__55460__auto___56304.cljs$core$IFn$_invoke$arity$20 ? ac__55460__auto___56304.cljs$core$IFn$_invoke$arity$20(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,arg19) : ac__55460__auto___56304.call(null,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,arg19));
}
});})(ac__55460__auto___56304,temp__5808__auto___56302,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret))
;
}

var temp__5808__auto___56306 = f.cljs$core$IFn$_invoke$arity$variadic;
if((temp__5808__auto___56306 == null)){
} else {
var variadic_56307 = temp__5808__auto___56306;
ret.cljs$core$IFn$_invoke$arity$variadic = ((function (variadic_56307,temp__5808__auto___56306,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret){
return (function() { 
var G__56308__delegate = function (args){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var orig__55297__auto__ = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{conform_BANG__STAR_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list_STAR_,args));

var _STAR_instrument_enabled_STAR__orig_val__55769 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
var _STAR_instrument_enabled_STAR__temp_val__55770 = true;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__temp_val__55770;

try{return apply_SINGLEQUOTE_(variadic_56307,args);
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR__orig_val__55769;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = orig__55297__auto__;
}} else {
return apply_SINGLEQUOTE_(variadic_56307,args);
}
};
var G__56308 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56309__i = 0, G__56309__a = new Array(arguments.length -  0);
while (G__56309__i < G__56309__a.length) {G__56309__a[G__56309__i] = arguments[G__56309__i + 0]; ++G__56309__i;}
  args = new cljs.core.IndexedSeq(G__56309__a,0,null);
} 
return G__56308__delegate.call(this,args);};
G__56308.cljs$lang$maxFixedArity = 0;
G__56308.cljs$lang$applyTo = (function (arglist__56310){
var args = cljs.core.seq(arglist__56310);
return G__56308__delegate(args);
});
G__56308.cljs$core$IFn$_invoke$arity$variadic = G__56308__delegate;
return G__56308;
})()
;})(variadic_56307,temp__5808__auto___56306,fn_spec__$1,args_spec,conform_BANG_,pure_variadic_QMARK_,apply_SINGLEQUOTE_,conform_BANG__STAR_,ret))
;
}
} else {
}

return ret;
});
cljs.spec.test.alpha.no_fspec = (function cljs$spec$test$alpha$no_fspec(v,spec){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Fn at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," is not spec'ed."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"spec","spec",347520401),spec,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fspec","no-fspec",-1763393966)], null));
});
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.test !== 'undefined') && (typeof cljs.spec.test.alpha !== 'undefined') && (typeof cljs.spec.test.alpha.instrumented_vars !== 'undefined')){
} else {
cljs.spec.test.alpha.instrumented_vars = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Helper for instrument.
 */
cljs.spec.test.alpha.instrument_choose_fn = (function cljs$spec$test$alpha$instrument_choose_fn(f,spec,sym,p__55789){
var map__55792 = p__55789;
var map__55792__$1 = (((((!((map__55792 == null))))?(((((map__55792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55792):map__55792);
var over = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55792__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var stub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55792__$1,new cljs.core.Keyword(null,"stub","stub",1339145807));
var replace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55792__$1,new cljs.core.Keyword(null,"replace","replace",-786587770));
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([sym]),stub))){
return cljs.spec.gen.alpha.generate(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(spec,over));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(replace,sym,f);
}
});
/**
 * Helper for instrument
 */
cljs.spec.test.alpha.instrument_choose_spec = (function cljs$spec$test$alpha$instrument_choose_spec(spec,sym,p__55811){
var map__55812 = p__55811;
var map__55812__$1 = (((((!((map__55812 == null))))?(((((map__55812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55812):map__55812);
var overrides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55812__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(overrides,sym,spec);
});
cljs.spec.test.alpha.instrument_1_STAR_ = (function cljs$spec$test$alpha$instrument_1_STAR_(s,v,opts){
var spec = cljs.spec.alpha.get_spec(v);
var map__55840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.test.alpha.instrumented_vars),v);
var map__55840__$1 = (((((!((map__55840 == null))))?(((((map__55840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55840):map__55840);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55840__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55840__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
var current = cljs.core.deref(v);
var to_wrap = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wrapped,current))?raw:current);
var ospec = (function (){var or__4131__auto__ = cljs.spec.test.alpha.instrument_choose_spec(spec,s,opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw cljs.spec.test.alpha.no_fspec(v,spec);
}
})();
var ofn = cljs.spec.test.alpha.instrument_choose_fn(to_wrap,ospec,s,opts);
var checked = cljs.spec.test.alpha.spec_checking_fn(v,ofn,ospec);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec.test.alpha.instrumented_vars,cljs.core.assoc,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw","raw",1604651272),to_wrap,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),checked], null));

return checked;
});
cljs.spec.test.alpha.unstrument_1_STAR_ = (function cljs$spec$test$alpha$unstrument_1_STAR_(s,v){
if(cljs.core.truth_(v)){
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.test.alpha.instrumented_vars),v);
if(cljs.core.truth_(temp__5804__auto__)){
var map__55868 = temp__5804__auto__;
var map__55868__$1 = (((((!((map__55868 == null))))?(((((map__55868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55868):map__55868);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55868__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55868__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.spec.test.alpha.instrumented_vars,cljs.core.dissoc,v);

var current = cljs.core.deref(v);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wrapped,current)){
return raw;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.test.alpha.fn_spec_name_QMARK_ = (function cljs$spec$test$alpha$fn_spec_name_QMARK_(s){
return (s instanceof cljs.core.Symbol);
});
cljs.spec.test.alpha.collectionize = (function cljs$spec$test$alpha$collectionize(x){
if((x instanceof cljs.core.Symbol)){
return (new cljs.core.List(null,x,null,(1),null));
} else {
return x;
}
});
/**
 * Given an opts map as per instrument, returns the set of syms
 * that can be instrumented.
 */
cljs.spec.test.alpha.instrumentable_syms = (function cljs$spec$test$alpha$instrumentable_syms(var_args){
var G__55889 = arguments.length;
switch (G__55889) {
case 0:
return cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if(cljs.core.every_QMARK_(cljs.core.ident_QMARK_,cljs.core.keys(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(opts)))){
} else {
throw (new Error(["Assert failed: ","instrument :gen expects ident keys","\n","(every? ident? (keys (:gen opts)))"].join('')));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.spec.test.alpha.fn_spec_name_QMARK_,cljs.core.keys(cljs.spec.alpha.registry())),cljs.core.keys(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(opts)),new cljs.core.Keyword(null,"stub","stub",1339145807).cljs$core$IFn$_invoke$arity$1(opts),cljs.core.keys(new cljs.core.Keyword(null,"replace","replace",-786587770).cljs$core$IFn$_invoke$arity$1(opts))], null));
});

cljs.spec.test.alpha.instrumentable_syms.cljs$lang$maxFixedArity = 1;

cljs.spec.test.alpha.explain_check = (function cljs$spec$test$alpha$explain_check(args,spec,v,role){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Specification-based check failed",((cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3(spec,v,null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.spec.alpha.explain_data_STAR_(spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,v),new cljs.core.Keyword("cljs.spec.test.alpha","args","cljs.spec.test.alpha/args",78409593),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cljs.spec.test.alpha","val","cljs.spec.test.alpha/val",1634694485),v,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"check-failed","check-failed",-1316157547)], 0))));
});
/**
 * Returns true if call passes specs, otherwise *returns* an exception
 * with explain-data + ::s/failure.
 */
cljs.spec.test.alpha.check_call = (function cljs$spec$test$alpha$check_call(f,specs,args){
var cargs = (cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs))?cljs.spec.alpha.conform(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args):null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cargs,new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119))){
return cljs.spec.test.alpha.explain_check(args,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args,new cljs.core.Keyword(null,"args","args",1315556576));
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
var cret = (cljs.core.truth_(new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs))?cljs.spec.alpha.conform(new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret):null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cret,new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119))){
return cljs.spec.test.alpha.explain_check(args,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret,new cljs.core.Keyword(null,"ret","ret",-468222814));
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(and__4120__auto____$1)){
return new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null))){
return true;
} else {
return cljs.spec.test.alpha.explain_check(args,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null),new cljs.core.Keyword(null,"fn","fn",-1175266204));
}
} else {
return true;
}
}
}
});
cljs.spec.test.alpha.quick_check = (function cljs$spec$test$alpha$quick_check(f,specs,p__55961){
var map__55962 = p__55961;
var map__55962__$1 = (((((!((map__55962 == null))))?(((((map__55962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55962):map__55962);
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55962__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55962__$1,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908));
var map__55967 = opts;
var map__55967__$1 = (((((!((map__55967 == null))))?(((((map__55967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55967):map__55967);
var num_tests = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55967__$1,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(1000));
var g = (function (){try{return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),gen);
}catch (e55970){if((e55970 instanceof Error)){
var t = e55970;
return t;
} else {
throw e55970;

}
}})();
if((g instanceof Error)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),g], null);
} else {
var prop = cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (map__55967,map__55967__$1,num_tests,g,map__55962,map__55962__$1,gen,opts){
return (function (p1__55959_SHARP_){
return cljs.spec.test.alpha.check_call(f,specs,p1__55959_SHARP_);
});})(map__55967,map__55967__$1,num_tests,g,map__55962,map__55962__$1,gen,opts))
], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.spec.gen.alpha.quick_check,num_tests,prop,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0)));
}
});
/**
 * Builds spec result map.
 */
cljs.spec.test.alpha.make_check_result = (function cljs$spec$test$alpha$make_check_result(check_sym,spec,test_check_ret,tc_ret_key){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"spec","spec",347520401),spec,tc_ret_key,test_check_ret]),(cljs.core.truth_(check_sym)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",-1444860305),check_sym], null):null),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(test_check_ret);
if(cljs.core.truth_(temp__5804__auto__)){
var result = temp__5804__auto__;
if(result === true){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"failure","failure",720415879),result], null);
}
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(test_check_ret);
if(cljs.core.truth_(temp__5804__auto__)){
var shrunk = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(shrunk)], null);
} else {
return null;
}
})()], 0));
});
cljs.spec.test.alpha.validate_check_opts = (function cljs$spec$test$alpha$validate_check_opts(opts){
if(cljs.core.every_QMARK_(cljs.core.ident_QMARK_,cljs.core.keys(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(opts)))){
return null;
} else {
throw (new Error(["Assert failed: ","check :gen expects ident keys","\n","(every? ident? (keys (:gen opts)))"].join('')));
}
});
cljs.spec.test.alpha.failure_type = (function cljs$spec$test$alpha$failure_type(x){
return new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(x));
});
cljs.spec.test.alpha.unwrap_failure = (function cljs$spec$test$alpha$unwrap_failure(x){
if(cljs.core.truth_(cljs.spec.test.alpha.failure_type(x))){
return cljs.core.ex_data(x);
} else {
return x;
}
});
/**
 * Returns the type of the check result. This can be any of the
 * ::s/failure keywords documented in 'check', or:
 * 
 *   :check-passed   all checked fn returns conformed
 *   :check-threw    checked fn threw an exception
 */
cljs.spec.test.alpha.result_type = (function cljs$spec$test$alpha$result_type(ret){
var failure = new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(ret);
if((failure == null)){
return new cljs.core.Keyword(null,"check-passed","check-passed",1505510820);
} else {
if(cljs.core.truth_(cljs.spec.test.alpha.failure_type(failure))){
return cljs.spec.test.alpha.failure_type(failure);
} else {
return new cljs.core.Keyword(null,"check-threw","check-threw",-1050428963);

}
}
});
/**
 * Given a check result, returns an abbreviated version
 * suitable for summary use.
 */
cljs.spec.test.alpha.abbrev_result = (function cljs$spec$test$alpha$abbrev_result(x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword("clojure.spec.test.check","ret","clojure.spec.test.check/ret",-1173350899)),new cljs.core.Keyword(null,"spec","spec",347520401),cljs.spec.alpha.describe),new cljs.core.Keyword(null,"failure","failure",720415879),cljs.spec.test.alpha.unwrap_failure);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(x,new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], 0));
}
});
/**
 * Given a collection of check-results, e.g. from 'check', pretty
 * prints the summary-result (default abbrev-result) of each.
 * 
 * Returns a map with :total, the total number of results, plus a
 * key with a count for each different :type of result.
 */
cljs.spec.test.alpha.summarize_results = (function cljs$spec$test$alpha$summarize_results(var_args){
var G__56042 = arguments.length;
switch (G__56042) {
case 1:
return cljs.spec.test.alpha.summarize_results.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.test.alpha.summarize_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.test.alpha.summarize_results.cljs$core$IFn$_invoke$arity$1 = (function (check_results){
return cljs.spec.test.alpha.summarize_results.cljs$core$IFn$_invoke$arity$2(check_results,cljs.spec.test.alpha.abbrev_result);
});

cljs.spec.test.alpha.summarize_results.cljs$core$IFn$_invoke$arity$2 = (function (check_results,summary_result){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (summary,result){
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((summary_result.cljs$core$IFn$_invoke$arity$1 ? summary_result.cljs$core$IFn$_invoke$arity$1(result) : summary_result.call(null,result)));

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(summary,new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.inc),cljs.spec.test.alpha.result_type(result),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),(0)], null),check_results);
});

cljs.spec.test.alpha.summarize_results.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=cljs.spec.test.alpha.js.map
