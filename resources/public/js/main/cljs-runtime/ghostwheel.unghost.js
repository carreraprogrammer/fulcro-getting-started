goog.provide('ghostwheel.unghost');
goog.require('cljs.core');
/**
 * This removes the gspec and returns a
 *   clean defn for use in production builds.
 */
ghostwheel.unghost.clean_defn = (function ghostwheel$unghost$clean_defn(op,forms){
var single_arity_QMARK_ = (function (fn_forms){
return cljs.core.boolean$(cljs.core.some(cljs.core.vector_QMARK_,fn_forms));
});
var strip_gspec = ((function (single_arity_QMARK_){
return (function (body){
var vec__56617 = body;
var seq__56618 = cljs.core.seq(vec__56617);
var first__56619 = cljs.core.first(seq__56618);
var seq__56618__$1 = cljs.core.next(seq__56618);
var args = first__56619;
var first__56619__$1 = cljs.core.first(seq__56618__$1);
var seq__56618__$2 = cljs.core.next(seq__56618__$1);
var _gspec = first__56619__$1;
var more = seq__56618__$2;
return cljs.core.cons(args,more);
});})(single_arity_QMARK_))
;
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((single_arity_QMARK_(forms))?(function (){var vec__56620 = cljs.core.split_with(cljs.core.complement(cljs.core.vector_QMARK_),forms);
var head_forms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56620,(0),null);
var body_forms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56620,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,op,null,(1),null)),head_forms,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([strip_gspec(body_forms)], 0))));
})():(function (){var vec__56627 = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.seq_QMARK_),forms);
var head_forms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56627,(0),null);
var body_forms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56627,(1),null);
var tail_attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56627,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,op,null,(1),null)),head_forms,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(strip_gspec,body_forms),tail_attr_map], 0))));
})()));
});

//# sourceMappingURL=ghostwheel.unghost.js.map
