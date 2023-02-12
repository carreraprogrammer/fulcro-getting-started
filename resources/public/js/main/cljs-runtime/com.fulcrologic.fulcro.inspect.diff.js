goog.provide('com.fulcrologic.fulcro.inspect.diff');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
com.fulcrologic.fulcro.inspect.diff.updates = (function com$fulcrologic$fulcro$inspect$diff$updates(a,b){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (adds,p__48314){
var vec__48315 = p__48314;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48315,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48315,(1),null);
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$3(a,k,new cljs.core.Keyword("fulcro.inspect.lib.diff","unset","fulcro.inspect.lib.diff/unset",-1153887743));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,va)){
return adds;
} else {
if(((cljs.core.map_QMARK_(v)) && (cljs.core.map_QMARK_(va)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(adds,k,(com.fulcrologic.fulcro.inspect.diff.updates.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.inspect.diff.updates.cljs$core$IFn$_invoke$arity$2(va,v) : com.fulcrologic.fulcro.inspect.diff.updates.call(null,va,v)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(adds,k,v);
}
}
}),cljs.core.PersistentArrayMap.EMPTY,b);
});
com.fulcrologic.fulcro.inspect.diff.removals = (function com$fulcrologic$fulcro$inspect$diff$removals(a,b){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (rems,p__48318){
var vec__48319 = p__48318;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48319,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48319,(1),null);
var temp__5802__auto__ = cljs.core.find(b,k);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__48324 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48324,(0),null);
var vb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48324,(1),null);
if(((cljs.core.map_QMARK_(v)) && (cljs.core.map_QMARK_(vb)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,vb)))){
var childs = (com.fulcrologic.fulcro.inspect.diff.removals.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.inspect.diff.removals.cljs$core$IFn$_invoke$arity$2(v,vb) : com.fulcrologic.fulcro.inspect.diff.removals.call(null,v,vb));
if(cljs.core.seq(childs)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rems,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,childs]));
} else {
return rems;
}
} else {
return rems;
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rems,(function (){var G__48327 = k;
if(cljs.core.map_QMARK_(k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48327,new cljs.core.Keyword("fulcro.inspect.lib.diff","key?","fulcro.inspect.lib.diff/key?",325118813),true);
} else {
return G__48327;
}
})());
}
}),cljs.core.PersistentVector.EMPTY,a);
});
com.fulcrologic.fulcro.inspect.diff.diff = (function com$fulcrologic$fulcro$inspect$diff$diff(a,b){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.lib.diff","updates","fulcro.inspect.lib.diff/updates",221795125),com.fulcrologic.fulcro.inspect.diff.updates(a,b),new cljs.core.Keyword("fulcro.inspect.lib.diff","removals","fulcro.inspect.lib.diff/removals",-1638817439),com.fulcrologic.fulcro.inspect.diff.removals(a,b)], null);
});
com.fulcrologic.fulcro.inspect.diff.deep_merge = (function com$fulcrologic$fulcro$inspect$diff$deep_merge(x,y){
if(((cljs.core.map_QMARK_(x)) && (cljs.core.map_QMARK_(y)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.inspect.diff.deep_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));
} else {
return y;
}
});
com.fulcrologic.fulcro.inspect.diff.patch_updates = (function com$fulcrologic$fulcro$inspect$diff$patch_updates(x,p__48334){
var map__48335 = p__48334;
var map__48335__$1 = (((((!((map__48335 == null))))?(((((map__48335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48335):map__48335);
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48335__$1,new cljs.core.Keyword("fulcro.inspect.lib.diff","updates","fulcro.inspect.lib.diff/updates",221795125));
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.inspect.diff.deep_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,updates], 0));
});
com.fulcrologic.fulcro.inspect.diff.patch_removals = (function com$fulcrologic$fulcro$inspect$diff$patch_removals(x,p__48338){
var map__48340 = p__48338;
var map__48340__$1 = (((((!((map__48340 == null))))?(((((map__48340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48340):map__48340);
var removals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48340__$1,new cljs.core.Keyword("fulcro.inspect.lib.diff","removals","fulcro.inspect.lib.diff/removals",-1638817439));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__48340,map__48340__$1,removals){
return (function (final$,rem){
if(cljs.core.truth_(new cljs.core.Keyword("fulcro.inspect.lib.diff","key?","fulcro.inspect.lib.diff/key?",325118813).cljs$core$IFn$_invoke$arity$1(rem))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(final$,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(rem,new cljs.core.Keyword("fulcro.inspect.lib.diff","key?","fulcro.inspect.lib.diff/key?",325118813)));
} else {
if(cljs.core.map_QMARK_(rem)){
var vec__48343 = cljs.core.first(rem);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48343,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48343,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(final$,k,((function (vec__48343,k,v,map__48340,map__48340__$1,removals){
return (function (p1__48337_SHARP_){
var G__48346 = p1__48337_SHARP_;
var G__48347 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.lib.diff","removals","fulcro.inspect.lib.diff/removals",-1638817439),v], null);
return (com.fulcrologic.fulcro.inspect.diff.patch_removals.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.inspect.diff.patch_removals.cljs$core$IFn$_invoke$arity$2(G__48346,G__48347) : com.fulcrologic.fulcro.inspect.diff.patch_removals.call(null,G__48346,G__48347));
});})(vec__48343,k,v,map__48340,map__48340__$1,removals))
);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(final$,rem);

}
}
});})(map__48340,map__48340__$1,removals))
,x,removals);
});
com.fulcrologic.fulcro.inspect.diff.patch = (function com$fulcrologic$fulcro$inspect$diff$patch(x,diff){
return com.fulcrologic.fulcro.inspect.diff.patch_removals(com.fulcrologic.fulcro.inspect.diff.patch_updates(x,diff),diff);
});

//# sourceMappingURL=com.fulcrologic.fulcro.inspect.diff.js.map
