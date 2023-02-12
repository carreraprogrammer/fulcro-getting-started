goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57031 = arguments.length;
var i__4731__auto___57032 = (0);
while(true){
if((i__4731__auto___57032 < len__4730__auto___57031)){
args__4736__auto__.push((arguments[i__4731__auto___57032]));

var G__57034 = (i__4731__auto___57032 + (1));
i__4731__auto___57032 = G__57034;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq56579){
var G__56580 = cljs.core.first(seq56579);
var seq56579__$1 = cljs.core.next(seq56579);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56580,seq56579__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5802__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5802__auto__)){
var s = temp__5802__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__56593){
var map__56594 = p__56593;
var map__56594__$1 = (((((!((map__56594 == null))))?(((((map__56594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56594):map__56594);
var src = map__56594__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56594__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56594__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__56600 = cljs.core.seq(sources);
var chunk__56601 = null;
var count__56602 = (0);
var i__56603 = (0);
while(true){
if((i__56603 < count__56602)){
var map__56614 = chunk__56601.cljs$core$IIndexed$_nth$arity$2(null,i__56603);
var map__56614__$1 = (((((!((map__56614 == null))))?(((((map__56614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56614):map__56614);
var src = map__56614__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56614__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56614__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56614__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56614__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e56616){var e_57047 = e56616;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_57047);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_57047.message)].join('')));
}

var G__57048 = seq__56600;
var G__57049 = chunk__56601;
var G__57050 = count__56602;
var G__57051 = (i__56603 + (1));
seq__56600 = G__57048;
chunk__56601 = G__57049;
count__56602 = G__57050;
i__56603 = G__57051;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56600);
if(temp__5804__auto__){
var seq__56600__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56600__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56600__$1);
var G__57052 = cljs.core.chunk_rest(seq__56600__$1);
var G__57053 = c__4550__auto__;
var G__57054 = cljs.core.count(c__4550__auto__);
var G__57055 = (0);
seq__56600 = G__57052;
chunk__56601 = G__57053;
count__56602 = G__57054;
i__56603 = G__57055;
continue;
} else {
var map__56623 = cljs.core.first(seq__56600__$1);
var map__56623__$1 = (((((!((map__56623 == null))))?(((((map__56623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56623):map__56623);
var src = map__56623__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56623__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56623__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56623__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56623__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e56630){var e_57064 = e56630;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_57064);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_57064.message)].join('')));
}

var G__57065 = cljs.core.next(seq__56600__$1);
var G__57066 = null;
var G__57067 = (0);
var G__57068 = (0);
seq__56600 = G__57065;
chunk__56601 = G__57066;
count__56602 = G__57067;
i__56603 = G__57068;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__56635 = cljs.core.seq(js_requires);
var chunk__56636 = null;
var count__56637 = (0);
var i__56638 = (0);
while(true){
if((i__56638 < count__56637)){
var js_ns = chunk__56636.cljs$core$IIndexed$_nth$arity$2(null,i__56638);
var require_str_57081 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_57081);


var G__57082 = seq__56635;
var G__57083 = chunk__56636;
var G__57084 = count__56637;
var G__57085 = (i__56638 + (1));
seq__56635 = G__57082;
chunk__56636 = G__57083;
count__56637 = G__57084;
i__56638 = G__57085;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56635);
if(temp__5804__auto__){
var seq__56635__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56635__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56635__$1);
var G__57086 = cljs.core.chunk_rest(seq__56635__$1);
var G__57087 = c__4550__auto__;
var G__57088 = cljs.core.count(c__4550__auto__);
var G__57089 = (0);
seq__56635 = G__57086;
chunk__56636 = G__57087;
count__56637 = G__57088;
i__56638 = G__57089;
continue;
} else {
var js_ns = cljs.core.first(seq__56635__$1);
var require_str_57090 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_57090);


var G__57091 = cljs.core.next(seq__56635__$1);
var G__57092 = null;
var G__57093 = (0);
var G__57094 = (0);
seq__56635 = G__57091;
chunk__56636 = G__57092;
count__56637 = G__57093;
i__56638 = G__57094;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__56643 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__56643) : callback.call(null,G__56643));
} else {
var G__56644 = shadow.cljs.devtools.client.env.files_url();
var G__56645 = ((function (G__56644){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__56644))
;
var G__56646 = "POST";
var G__56647 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__56648 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__56644,G__56645,G__56646,G__56647,G__56648);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__56654){
var map__56655 = p__56654;
var map__56655__$1 = (((((!((map__56655 == null))))?(((((map__56655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56655):map__56655);
var msg = map__56655__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56655__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56655__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__56659 = info;
var map__56659__$1 = (((((!((map__56659 == null))))?(((((map__56659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56659):map__56659);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56659__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56659__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__56659,map__56659__$1,sources,compiled,map__56655,map__56655__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56662(s__56663){
return (new cljs.core.LazySeq(null,((function (map__56659,map__56659__$1,sources,compiled,map__56655,map__56655__$1,msg,info,reload_info){
return (function (){
var s__56663__$1 = s__56663;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56663__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__56668 = cljs.core.first(xs__6360__auto__);
var map__56668__$1 = (((((!((map__56668 == null))))?(((((map__56668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56668):map__56668);
var src = map__56668__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56668__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56668__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__56663__$1,map__56668,map__56668__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__56659,map__56659__$1,sources,compiled,map__56655,map__56655__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56662_$_iter__56664(s__56665){
return (new cljs.core.LazySeq(null,((function (s__56663__$1,map__56668,map__56668__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__56659,map__56659__$1,sources,compiled,map__56655,map__56655__$1,msg,info,reload_info){
return (function (){
var s__56665__$1 = s__56665;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__56665__$1);
if(temp__5804__auto____$1){
var s__56665__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56665__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__56665__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__56667 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__56666 = (0);
while(true){
if((i__56666 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__56666);
cljs.core.chunk_append(b__56667,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__57129 = (i__56666 + (1));
i__56666 = G__57129;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56667),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56662_$_iter__56664(cljs.core.chunk_rest(s__56665__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56667),null);
}
} else {
var warning = cljs.core.first(s__56665__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56662_$_iter__56664(cljs.core.rest(s__56665__$2)));
}
} else {
return null;
}
break;
}
});})(s__56663__$1,map__56668,map__56668__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__56659,map__56659__$1,sources,compiled,map__56655,map__56655__$1,msg,info,reload_info))
,null,null));
});})(s__56663__$1,map__56668,map__56668__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__56659,map__56659__$1,sources,compiled,map__56655,map__56655__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56662(cljs.core.rest(s__56663__$1)));
} else {
var G__57136 = cljs.core.rest(s__56663__$1);
s__56663__$1 = G__57136;
continue;
}
} else {
var G__57137 = cljs.core.rest(s__56663__$1);
s__56663__$1 = G__57137;
continue;
}
} else {
return null;
}
break;
}
});})(map__56659,map__56659__$1,sources,compiled,map__56655,map__56655__$1,msg,info,reload_info))
,null,null));
});})(map__56659,map__56659__$1,sources,compiled,map__56655,map__56655__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__56687_57138 = cljs.core.seq(warnings);
var chunk__56688_57139 = null;
var count__56689_57140 = (0);
var i__56690_57141 = (0);
while(true){
if((i__56690_57141 < count__56689_57140)){
var map__56706_57142 = chunk__56688_57139.cljs$core$IIndexed$_nth$arity$2(null,i__56690_57141);
var map__56706_57143__$1 = (((((!((map__56706_57142 == null))))?(((((map__56706_57142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56706_57142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56706_57142):map__56706_57142);
var w_57144 = map__56706_57143__$1;
var msg_57145__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56706_57143__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_57146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56706_57143__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_57147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56706_57143__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_57148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56706_57143__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_57148)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_57146),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_57147),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_57145__$1)].join(''));


var G__57150 = seq__56687_57138;
var G__57151 = chunk__56688_57139;
var G__57152 = count__56689_57140;
var G__57153 = (i__56690_57141 + (1));
seq__56687_57138 = G__57150;
chunk__56688_57139 = G__57151;
count__56689_57140 = G__57152;
i__56690_57141 = G__57153;
continue;
} else {
var temp__5804__auto___57154 = cljs.core.seq(seq__56687_57138);
if(temp__5804__auto___57154){
var seq__56687_57155__$1 = temp__5804__auto___57154;
if(cljs.core.chunked_seq_QMARK_(seq__56687_57155__$1)){
var c__4550__auto___57156 = cljs.core.chunk_first(seq__56687_57155__$1);
var G__57157 = cljs.core.chunk_rest(seq__56687_57155__$1);
var G__57158 = c__4550__auto___57156;
var G__57159 = cljs.core.count(c__4550__auto___57156);
var G__57160 = (0);
seq__56687_57138 = G__57157;
chunk__56688_57139 = G__57158;
count__56689_57140 = G__57159;
i__56690_57141 = G__57160;
continue;
} else {
var map__56708_57161 = cljs.core.first(seq__56687_57155__$1);
var map__56708_57162__$1 = (((((!((map__56708_57161 == null))))?(((((map__56708_57161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56708_57161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56708_57161):map__56708_57161);
var w_57163 = map__56708_57162__$1;
var msg_57164__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56708_57162__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_57165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56708_57162__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_57166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56708_57162__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_57167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56708_57162__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_57167)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_57165),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_57166),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_57164__$1)].join(''));


var G__57168 = cljs.core.next(seq__56687_57155__$1);
var G__57169 = null;
var G__57170 = (0);
var G__57171 = (0);
seq__56687_57138 = G__57168;
chunk__56688_57139 = G__57169;
count__56689_57140 = G__57170;
i__56690_57141 = G__57171;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__56659,map__56659__$1,sources,compiled,warnings,map__56655,map__56655__$1,msg,info,reload_info){
return (function (p__56714){
var map__56716 = p__56714;
var map__56716__$1 = (((((!((map__56716 == null))))?(((((map__56716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56716):map__56716);
var src = map__56716__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56716__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56716__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__56659,map__56659__$1,sources,compiled,warnings,map__56655,map__56655__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__56659,map__56659__$1,sources,compiled,warnings,map__56655,map__56655__$1,msg,info,reload_info){
return (function (p__56723){
var map__56724 = p__56723;
var map__56724__$1 = (((((!((map__56724 == null))))?(((((map__56724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56724):map__56724);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56724__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__56659,map__56659__$1,sources,compiled,warnings,map__56655,map__56655__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__56659,map__56659__$1,sources,compiled,warnings,map__56655,map__56655__$1,msg,info,reload_info){
return (function (p__56761){
var map__56762 = p__56761;
var map__56762__$1 = (((((!((map__56762 == null))))?(((((map__56762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56762):map__56762);
var rc = map__56762__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56762__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__56659,map__56659__$1,sources,compiled,warnings,map__56655,map__56655__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__56659,map__56659__$1,sources,compiled,warnings,map__56655,map__56655__$1,msg,info,reload_info){
return (function (p1__56652_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__56652_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__56659,map__56659__$1,sources,compiled,warnings,map__56655,map__56655__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__56772){
var map__56773 = p__56772;
var map__56773__$1 = (((((!((map__56773 == null))))?(((((map__56773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56773):map__56773);
var msg = map__56773__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56773__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__56779 = cljs.core.seq(updates);
var chunk__56781 = null;
var count__56782 = (0);
var i__56783 = (0);
while(true){
if((i__56783 < count__56782)){
var path = chunk__56781.cljs$core$IIndexed$_nth$arity$2(null,i__56783);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__56862_57192 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__56865_57193 = null;
var count__56866_57194 = (0);
var i__56867_57195 = (0);
while(true){
if((i__56867_57195 < count__56866_57194)){
var node_57197 = chunk__56865_57193.cljs$core$IIndexed$_nth$arity$2(null,i__56867_57195);
var path_match_57198 = shadow.cljs.devtools.client.browser.match_paths(node_57197.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57198)){
var new_link_57199 = (function (){var G__56880 = node_57197.cloneNode(true);
G__56880.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57198),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56880;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57198], 0));

goog.dom.insertSiblingAfter(new_link_57199,node_57197);

goog.dom.removeNode(node_57197);


var G__57201 = seq__56862_57192;
var G__57202 = chunk__56865_57193;
var G__57203 = count__56866_57194;
var G__57204 = (i__56867_57195 + (1));
seq__56862_57192 = G__57201;
chunk__56865_57193 = G__57202;
count__56866_57194 = G__57203;
i__56867_57195 = G__57204;
continue;
} else {
var G__57205 = seq__56862_57192;
var G__57206 = chunk__56865_57193;
var G__57207 = count__56866_57194;
var G__57208 = (i__56867_57195 + (1));
seq__56862_57192 = G__57205;
chunk__56865_57193 = G__57206;
count__56866_57194 = G__57207;
i__56867_57195 = G__57208;
continue;
}
} else {
var temp__5804__auto___57209 = cljs.core.seq(seq__56862_57192);
if(temp__5804__auto___57209){
var seq__56862_57210__$1 = temp__5804__auto___57209;
if(cljs.core.chunked_seq_QMARK_(seq__56862_57210__$1)){
var c__4550__auto___57211 = cljs.core.chunk_first(seq__56862_57210__$1);
var G__57212 = cljs.core.chunk_rest(seq__56862_57210__$1);
var G__57213 = c__4550__auto___57211;
var G__57214 = cljs.core.count(c__4550__auto___57211);
var G__57215 = (0);
seq__56862_57192 = G__57212;
chunk__56865_57193 = G__57213;
count__56866_57194 = G__57214;
i__56867_57195 = G__57215;
continue;
} else {
var node_57218 = cljs.core.first(seq__56862_57210__$1);
var path_match_57219 = shadow.cljs.devtools.client.browser.match_paths(node_57218.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57219)){
var new_link_57228 = (function (){var G__56887 = node_57218.cloneNode(true);
G__56887.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57219),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56887;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57219], 0));

goog.dom.insertSiblingAfter(new_link_57228,node_57218);

goog.dom.removeNode(node_57218);


var G__57231 = cljs.core.next(seq__56862_57210__$1);
var G__57232 = null;
var G__57233 = (0);
var G__57234 = (0);
seq__56862_57192 = G__57231;
chunk__56865_57193 = G__57232;
count__56866_57194 = G__57233;
i__56867_57195 = G__57234;
continue;
} else {
var G__57235 = cljs.core.next(seq__56862_57210__$1);
var G__57236 = null;
var G__57237 = (0);
var G__57238 = (0);
seq__56862_57192 = G__57235;
chunk__56865_57193 = G__57236;
count__56866_57194 = G__57237;
i__56867_57195 = G__57238;
continue;
}
}
} else {
}
}
break;
}


var G__57239 = seq__56779;
var G__57240 = chunk__56781;
var G__57241 = count__56782;
var G__57242 = (i__56783 + (1));
seq__56779 = G__57239;
chunk__56781 = G__57240;
count__56782 = G__57241;
i__56783 = G__57242;
continue;
} else {
var G__57244 = seq__56779;
var G__57245 = chunk__56781;
var G__57246 = count__56782;
var G__57247 = (i__56783 + (1));
seq__56779 = G__57244;
chunk__56781 = G__57245;
count__56782 = G__57246;
i__56783 = G__57247;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56779);
if(temp__5804__auto__){
var seq__56779__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56779__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56779__$1);
var G__57249 = cljs.core.chunk_rest(seq__56779__$1);
var G__57250 = c__4550__auto__;
var G__57251 = cljs.core.count(c__4550__auto__);
var G__57252 = (0);
seq__56779 = G__57249;
chunk__56781 = G__57250;
count__56782 = G__57251;
i__56783 = G__57252;
continue;
} else {
var path = cljs.core.first(seq__56779__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__56896_57254 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__56899_57255 = null;
var count__56900_57256 = (0);
var i__56901_57257 = (0);
while(true){
if((i__56901_57257 < count__56900_57256)){
var node_57259 = chunk__56899_57255.cljs$core$IIndexed$_nth$arity$2(null,i__56901_57257);
var path_match_57260 = shadow.cljs.devtools.client.browser.match_paths(node_57259.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57260)){
var new_link_57261 = (function (){var G__56914 = node_57259.cloneNode(true);
G__56914.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57260),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56914;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57260], 0));

goog.dom.insertSiblingAfter(new_link_57261,node_57259);

goog.dom.removeNode(node_57259);


var G__57264 = seq__56896_57254;
var G__57265 = chunk__56899_57255;
var G__57266 = count__56900_57256;
var G__57267 = (i__56901_57257 + (1));
seq__56896_57254 = G__57264;
chunk__56899_57255 = G__57265;
count__56900_57256 = G__57266;
i__56901_57257 = G__57267;
continue;
} else {
var G__57268 = seq__56896_57254;
var G__57269 = chunk__56899_57255;
var G__57270 = count__56900_57256;
var G__57271 = (i__56901_57257 + (1));
seq__56896_57254 = G__57268;
chunk__56899_57255 = G__57269;
count__56900_57256 = G__57270;
i__56901_57257 = G__57271;
continue;
}
} else {
var temp__5804__auto___57274__$1 = cljs.core.seq(seq__56896_57254);
if(temp__5804__auto___57274__$1){
var seq__56896_57275__$1 = temp__5804__auto___57274__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56896_57275__$1)){
var c__4550__auto___57277 = cljs.core.chunk_first(seq__56896_57275__$1);
var G__57280 = cljs.core.chunk_rest(seq__56896_57275__$1);
var G__57281 = c__4550__auto___57277;
var G__57282 = cljs.core.count(c__4550__auto___57277);
var G__57283 = (0);
seq__56896_57254 = G__57280;
chunk__56899_57255 = G__57281;
count__56900_57256 = G__57282;
i__56901_57257 = G__57283;
continue;
} else {
var node_57284 = cljs.core.first(seq__56896_57275__$1);
var path_match_57285 = shadow.cljs.devtools.client.browser.match_paths(node_57284.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57285)){
var new_link_57286 = (function (){var G__56928 = node_57284.cloneNode(true);
G__56928.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57285),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56928;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57285], 0));

goog.dom.insertSiblingAfter(new_link_57286,node_57284);

goog.dom.removeNode(node_57284);


var G__57288 = cljs.core.next(seq__56896_57275__$1);
var G__57289 = null;
var G__57290 = (0);
var G__57291 = (0);
seq__56896_57254 = G__57288;
chunk__56899_57255 = G__57289;
count__56900_57256 = G__57290;
i__56901_57257 = G__57291;
continue;
} else {
var G__57292 = cljs.core.next(seq__56896_57275__$1);
var G__57293 = null;
var G__57294 = (0);
var G__57295 = (0);
seq__56896_57254 = G__57292;
chunk__56899_57255 = G__57293;
count__56900_57256 = G__57294;
i__56901_57257 = G__57295;
continue;
}
}
} else {
}
}
break;
}


var G__57296 = cljs.core.next(seq__56779__$1);
var G__57297 = null;
var G__57298 = (0);
var G__57299 = (0);
seq__56779 = G__57296;
chunk__56781 = G__57297;
count__56782 = G__57298;
i__56783 = G__57299;
continue;
} else {
var G__57300 = cljs.core.next(seq__56779__$1);
var G__57301 = null;
var G__57302 = (0);
var G__57303 = (0);
seq__56779 = G__57300;
chunk__56781 = G__57301;
count__56782 = G__57302;
i__56783 = G__57303;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
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
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
return (0,eval)(js);;
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__56939){
var map__56940 = p__56939;
var map__56940__$1 = (((((!((map__56940 == null))))?(((((map__56940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56940):map__56940);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56940__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56940__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__56940,map__56940__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__56940,map__56940__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__56949,done){
var map__56950 = p__56949;
var map__56950__$1 = (((((!((map__56950 == null))))?(((((map__56950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56950):map__56950);
var msg = map__56950__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56950__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56950__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56950__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56950__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__56950,map__56950__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__56954){
var map__56955 = p__56954;
var map__56955__$1 = (((((!((map__56955 == null))))?(((((map__56955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56955):map__56955);
var src = map__56955__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56955__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__56950,map__56950__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__56950,map__56950__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e56960){var e = e56960;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__56950,map__56950__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__56965,done){
var map__56966 = p__56965;
var map__56966__$1 = (((((!((map__56966 == null))))?(((((map__56966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56966):map__56966);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56966__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56966__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__56966,map__56966__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__56966,map__56966__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__56977){
var map__56978 = p__56977;
var map__56978__$1 = (((((!((map__56978 == null))))?(((((map__56978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56978):map__56978);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56978__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56978__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__56997,done){
var map__56998 = p__56997;
var map__56998__$1 = (((((!((map__56998 == null))))?(((((map__56998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56998):map__56998);
var msg = map__56998__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56998__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__57006_57323 = type;
var G__57006_57324__$1 = (((G__57006_57323 instanceof cljs.core.Keyword))?G__57006_57323.fqn:null);
switch (G__57006_57324__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__57011 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__57012 = ((function (G__57011){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__57011))
;
var G__57013 = "POST";
var G__57014 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__57015 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__57011,G__57012,G__57013,G__57014,G__57015);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5804__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5804__auto__)){
var s = temp__5804__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e57021){var e = e57021;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5804__auto___57339 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5804__auto___57339)){
var s_57340 = temp__5804__auto___57339;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_57340.onclose = ((function (s_57340,temp__5804__auto___57339){
return (function (e){
return null;
});})(s_57340,temp__5804__auto___57339))
;

s_57340.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5804__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5804__auto__)){
var s = temp__5804__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
