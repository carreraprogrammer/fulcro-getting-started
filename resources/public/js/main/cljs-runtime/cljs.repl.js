goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__52927){
var map__52928 = p__52927;
var map__52928__$1 = (((((!((map__52928 == null))))?(((((map__52928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52928):map__52928);
var m = map__52928__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52928__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52928__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52931_53260 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52932_53261 = null;
var count__52933_53262 = (0);
var i__52934_53263 = (0);
while(true){
if((i__52934_53263 < count__52933_53262)){
var f_53265 = chunk__52932_53261.cljs$core$IIndexed$_nth$arity$2(null,i__52934_53263);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53265], 0));


var G__53267 = seq__52931_53260;
var G__53268 = chunk__52932_53261;
var G__53269 = count__52933_53262;
var G__53270 = (i__52934_53263 + (1));
seq__52931_53260 = G__53267;
chunk__52932_53261 = G__53268;
count__52933_53262 = G__53269;
i__52934_53263 = G__53270;
continue;
} else {
var temp__5804__auto___53271 = cljs.core.seq(seq__52931_53260);
if(temp__5804__auto___53271){
var seq__52931_53272__$1 = temp__5804__auto___53271;
if(cljs.core.chunked_seq_QMARK_(seq__52931_53272__$1)){
var c__4550__auto___53273 = cljs.core.chunk_first(seq__52931_53272__$1);
var G__53274 = cljs.core.chunk_rest(seq__52931_53272__$1);
var G__53275 = c__4550__auto___53273;
var G__53276 = cljs.core.count(c__4550__auto___53273);
var G__53277 = (0);
seq__52931_53260 = G__53274;
chunk__52932_53261 = G__53275;
count__52933_53262 = G__53276;
i__52934_53263 = G__53277;
continue;
} else {
var f_53279 = cljs.core.first(seq__52931_53272__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53279], 0));


var G__53283 = cljs.core.next(seq__52931_53272__$1);
var G__53284 = null;
var G__53285 = (0);
var G__53286 = (0);
seq__52931_53260 = G__53283;
chunk__52932_53261 = G__53284;
count__52933_53262 = G__53285;
i__52934_53263 = G__53286;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53288 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_53288], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_53288)))?cljs.core.second(arglists_53288):arglists_53288)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52947_53299 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52948_53300 = null;
var count__52949_53301 = (0);
var i__52950_53302 = (0);
while(true){
if((i__52950_53302 < count__52949_53301)){
var vec__52968_53305 = chunk__52948_53300.cljs$core$IIndexed$_nth$arity$2(null,i__52950_53302);
var name_53306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52968_53305,(0),null);
var map__52971_53307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52968_53305,(1),null);
var map__52971_53308__$1 = (((((!((map__52971_53307 == null))))?(((((map__52971_53307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52971_53307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52971_53307):map__52971_53307);
var doc_53309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52971_53308__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52971_53308__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53306], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53310], 0));

if(cljs.core.truth_(doc_53309)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53309], 0));
} else {
}


var G__53314 = seq__52947_53299;
var G__53315 = chunk__52948_53300;
var G__53316 = count__52949_53301;
var G__53317 = (i__52950_53302 + (1));
seq__52947_53299 = G__53314;
chunk__52948_53300 = G__53315;
count__52949_53301 = G__53316;
i__52950_53302 = G__53317;
continue;
} else {
var temp__5804__auto___53319 = cljs.core.seq(seq__52947_53299);
if(temp__5804__auto___53319){
var seq__52947_53321__$1 = temp__5804__auto___53319;
if(cljs.core.chunked_seq_QMARK_(seq__52947_53321__$1)){
var c__4550__auto___53327 = cljs.core.chunk_first(seq__52947_53321__$1);
var G__53328 = cljs.core.chunk_rest(seq__52947_53321__$1);
var G__53329 = c__4550__auto___53327;
var G__53330 = cljs.core.count(c__4550__auto___53327);
var G__53331 = (0);
seq__52947_53299 = G__53328;
chunk__52948_53300 = G__53329;
count__52949_53301 = G__53330;
i__52950_53302 = G__53331;
continue;
} else {
var vec__52978_53333 = cljs.core.first(seq__52947_53321__$1);
var name_53334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52978_53333,(0),null);
var map__52981_53335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52978_53333,(1),null);
var map__52981_53336__$1 = (((((!((map__52981_53335 == null))))?(((((map__52981_53335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52981_53335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52981_53335):map__52981_53335);
var doc_53338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52981_53336__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52981_53336__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53334], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53339], 0));

if(cljs.core.truth_(doc_53338)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53338], 0));
} else {
}


var G__53342 = cljs.core.next(seq__52947_53321__$1);
var G__53343 = null;
var G__53344 = (0);
var G__53345 = (0);
seq__52947_53299 = G__53342;
chunk__52948_53300 = G__53343;
count__52949_53301 = G__53344;
i__52950_53302 = G__53345;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__52984 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__52985 = null;
var count__52986 = (0);
var i__52987 = (0);
while(true){
if((i__52987 < count__52986)){
var role = chunk__52985.cljs$core$IIndexed$_nth$arity$2(null,i__52987);
var temp__5804__auto___53349__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___53349__$1)){
var spec_53352 = temp__5804__auto___53349__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53352)], 0));
} else {
}


var G__53353 = seq__52984;
var G__53354 = chunk__52985;
var G__53355 = count__52986;
var G__53356 = (i__52987 + (1));
seq__52984 = G__53353;
chunk__52985 = G__53354;
count__52986 = G__53355;
i__52987 = G__53356;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__52984);
if(temp__5804__auto____$1){
var seq__52984__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__52984__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__52984__$1);
var G__53357 = cljs.core.chunk_rest(seq__52984__$1);
var G__53358 = c__4550__auto__;
var G__53359 = cljs.core.count(c__4550__auto__);
var G__53360 = (0);
seq__52984 = G__53357;
chunk__52985 = G__53358;
count__52986 = G__53359;
i__52987 = G__53360;
continue;
} else {
var role = cljs.core.first(seq__52984__$1);
var temp__5804__auto___53362__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___53362__$2)){
var spec_53364 = temp__5804__auto___53362__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53364)], 0));
} else {
}


var G__53365 = cljs.core.next(seq__52984__$1);
var G__53366 = null;
var G__53367 = (0);
var G__53368 = (0);
seq__52984 = G__53365;
chunk__52985 = G__53366;
count__52986 = G__53367;
i__52987 = G__53368;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__53379 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__53380 = cljs.core.ex_cause(t);
via = G__53379;
t = G__53380;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__53010 = datafied_throwable;
var map__53010__$1 = (((((!((map__53010 == null))))?(((((map__53010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53010):map__53010);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53010__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53010__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53010__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__53011 = cljs.core.last(via);
var map__53011__$1 = (((((!((map__53011 == null))))?(((((map__53011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53011):map__53011);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53011__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53011__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53011__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__53013 = data;
var map__53013__$1 = (((((!((map__53013 == null))))?(((((map__53013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53013):map__53013);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53013__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53013__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53013__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__53014 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__53014__$1 = (((((!((map__53014 == null))))?(((((map__53014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53014):map__53014);
var top_data = map__53014__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53014__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__53041 = phase;
var G__53041__$1 = (((G__53041 instanceof cljs.core.Keyword))?G__53041.fqn:null);
switch (G__53041__$1) {
case "read-source":
var map__53044 = data;
var map__53044__$1 = (((((!((map__53044 == null))))?(((((map__53044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53044):map__53044);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53044__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53044__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__53047 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__53047__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53047,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53047);
var G__53047__$2 = (cljs.core.truth_((function (){var fexpr__53049 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53049.cljs$core$IFn$_invoke$arity$1 ? fexpr__53049.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53049.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53047__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53047__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53047__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53047__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__53054 = top_data;
var G__53054__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53054,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53054);
var G__53054__$2 = (cljs.core.truth_((function (){var fexpr__53058 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53058.cljs$core$IFn$_invoke$arity$1 ? fexpr__53058.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53058.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53054__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53054__$1);
var G__53054__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53054__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53054__$2);
var G__53054__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53054__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53054__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53054__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53054__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__53063 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53063,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53063,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53063,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53063,(3),null);
var G__53066 = top_data;
var G__53066__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53066,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__53066);
var G__53066__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53066__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__53066__$1);
var G__53066__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53066__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__53066__$2);
var G__53066__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53066__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53066__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53066__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53066__$4;
}

break;
case "execution":
var vec__53070 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53070,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53070,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53070,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53070,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__53070,source__$1,method,file,line,G__53041,G__53041__$1,map__53010,map__53010__$1,via,trace,phase,map__53011,map__53011__$1,type,message,data,map__53013,map__53013__$1,problems,fn,caller,map__53014,map__53014__$1,top_data,source){
return (function (p1__53005_SHARP_){
var or__4131__auto__ = (p1__53005_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__53076 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53076.cljs$core$IFn$_invoke$arity$1 ? fexpr__53076.cljs$core$IFn$_invoke$arity$1(p1__53005_SHARP_) : fexpr__53076.call(null,p1__53005_SHARP_));
}
});})(vec__53070,source__$1,method,file,line,G__53041,G__53041__$1,map__53010,map__53010__$1,via,trace,phase,map__53011,map__53011__$1,type,message,data,map__53013,map__53013__$1,problems,fn,caller,map__53014,map__53014__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__53080 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__53080__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53080,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__53080);
var G__53080__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53080__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53080__$1);
var G__53080__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53080__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__53080__$2);
var G__53080__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53080__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__53080__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53080__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53080__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53041__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__53095){
var map__53096 = p__53095;
var map__53096__$1 = (((((!((map__53096 == null))))?(((((map__53096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53096):map__53096);
var triage_data = map__53096__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53096__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53096__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53096__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53096__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53096__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53096__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53096__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53096__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__53139 = phase;
var G__53139__$1 = (((G__53139 instanceof cljs.core.Keyword))?G__53139.fqn:null);
switch (G__53139__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__53152 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__53153 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53154 = loc;
var G__53155 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53164_53447 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53165_53448 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53166_53449 = true;
var _STAR_print_fn_STAR__temp_val__53167_53450 = ((function (_STAR_print_newline_STAR__orig_val__53164_53447,_STAR_print_fn_STAR__orig_val__53165_53448,_STAR_print_newline_STAR__temp_val__53166_53449,sb__4661__auto__,G__53152,G__53153,G__53154,G__53139,G__53139__$1,loc,class_name,simple_class,cause_type,format,map__53096,map__53096__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__53164_53447,_STAR_print_fn_STAR__orig_val__53165_53448,_STAR_print_newline_STAR__temp_val__53166_53449,sb__4661__auto__,G__53152,G__53153,G__53154,G__53139,G__53139__$1,loc,class_name,simple_class,cause_type,format,map__53096,map__53096__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53166_53449;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53167_53450;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__53164_53447,_STAR_print_fn_STAR__orig_val__53165_53448,_STAR_print_newline_STAR__temp_val__53166_53449,_STAR_print_fn_STAR__temp_val__53167_53450,sb__4661__auto__,G__53152,G__53153,G__53154,G__53139,G__53139__$1,loc,class_name,simple_class,cause_type,format,map__53096,map__53096__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__53164_53447,_STAR_print_fn_STAR__orig_val__53165_53448,_STAR_print_newline_STAR__temp_val__53166_53449,_STAR_print_fn_STAR__temp_val__53167_53450,sb__4661__auto__,G__53152,G__53153,G__53154,G__53139,G__53139__$1,loc,class_name,simple_class,cause_type,format,map__53096,map__53096__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__53088_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53088_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__53164_53447,_STAR_print_fn_STAR__orig_val__53165_53448,_STAR_print_newline_STAR__temp_val__53166_53449,_STAR_print_fn_STAR__temp_val__53167_53450,sb__4661__auto__,G__53152,G__53153,G__53154,G__53139,G__53139__$1,loc,class_name,simple_class,cause_type,format,map__53096,map__53096__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__53164_53447,_STAR_print_fn_STAR__orig_val__53165_53448,_STAR_print_newline_STAR__temp_val__53166_53449,_STAR_print_fn_STAR__temp_val__53167_53450,sb__4661__auto__,G__53152,G__53153,G__53154,G__53139,G__53139__$1,loc,class_name,simple_class,cause_type,format,map__53096,map__53096__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53165_53448;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53164_53447;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53152,G__53153,G__53154,G__53155) : format.call(null,G__53152,G__53153,G__53154,G__53155));

break;
case "macroexpansion":
var G__53194 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__53195 = cause_type;
var G__53196 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53197 = loc;
var G__53198 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53194,G__53195,G__53196,G__53197,G__53198) : format.call(null,G__53194,G__53195,G__53196,G__53197,G__53198));

break;
case "compile-syntax-check":
var G__53199 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__53200 = cause_type;
var G__53201 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53202 = loc;
var G__53203 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53199,G__53200,G__53201,G__53202,G__53203) : format.call(null,G__53199,G__53200,G__53201,G__53202,G__53203));

break;
case "compilation":
var G__53204 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__53205 = cause_type;
var G__53206 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53207 = loc;
var G__53208 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53204,G__53205,G__53206,G__53207,G__53208) : format.call(null,G__53204,G__53205,G__53206,G__53207,G__53208));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__53210 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__53211 = symbol;
var G__53212 = loc;
var G__53213 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53214_53465 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53215_53466 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53216_53467 = true;
var _STAR_print_fn_STAR__temp_val__53217_53468 = ((function (_STAR_print_newline_STAR__orig_val__53214_53465,_STAR_print_fn_STAR__orig_val__53215_53466,_STAR_print_newline_STAR__temp_val__53216_53467,sb__4661__auto__,G__53210,G__53211,G__53212,G__53139,G__53139__$1,loc,class_name,simple_class,cause_type,format,map__53096,map__53096__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__53214_53465,_STAR_print_fn_STAR__orig_val__53215_53466,_STAR_print_newline_STAR__temp_val__53216_53467,sb__4661__auto__,G__53210,G__53211,G__53212,G__53139,G__53139__$1,loc,class_name,simple_class,cause_type,format,map__53096,map__53096__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53216_53467;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53217_53468;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__53214_53465,_STAR_print_fn_STAR__orig_val__53215_53466,_STAR_print_newline_STAR__temp_val__53216_53467,_STAR_print_fn_STAR__temp_val__53217_53468,sb__4661__auto__,G__53210,G__53211,G__53212,G__53139,G__53139__$1,loc,class_name,simple_class,cause_type,format,map__53096,map__53096__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__53214_53465,_STAR_print_fn_STAR__orig_val__53215_53466,_STAR_print_newline_STAR__temp_val__53216_53467,_STAR_print_fn_STAR__temp_val__53217_53468,sb__4661__auto__,G__53210,G__53211,G__53212,G__53139,G__53139__$1,loc,class_name,simple_class,cause_type,format,map__53096,map__53096__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__53090_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53090_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__53214_53465,_STAR_print_fn_STAR__orig_val__53215_53466,_STAR_print_newline_STAR__temp_val__53216_53467,_STAR_print_fn_STAR__temp_val__53217_53468,sb__4661__auto__,G__53210,G__53211,G__53212,G__53139,G__53139__$1,loc,class_name,simple_class,cause_type,format,map__53096,map__53096__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__53214_53465,_STAR_print_fn_STAR__orig_val__53215_53466,_STAR_print_newline_STAR__temp_val__53216_53467,_STAR_print_fn_STAR__temp_val__53217_53468,sb__4661__auto__,G__53210,G__53211,G__53212,G__53139,G__53139__$1,loc,class_name,simple_class,cause_type,format,map__53096,map__53096__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53215_53466;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53214_53465;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53210,G__53211,G__53212,G__53213) : format.call(null,G__53210,G__53211,G__53212,G__53213));
} else {
var G__53232 = "Execution error%s at %s(%s).\n%s\n";
var G__53233 = cause_type;
var G__53234 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53235 = loc;
var G__53236 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53232,G__53233,G__53234,G__53235,G__53236) : format.call(null,G__53232,G__53233,G__53234,G__53235,G__53236));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53139__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
