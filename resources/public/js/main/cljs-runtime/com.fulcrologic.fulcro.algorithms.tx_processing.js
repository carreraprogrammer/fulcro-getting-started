goog.provide('com.fulcrologic.fulcro.algorithms.tx_processing');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('cljs.spec.alpha');
goog.require('com.fulcrologic.fulcro.algorithms.lookup');
goog.require('com.fulcrologic.fulcro.algorithms.tempid');
goog.require('com.fulcrologic.fulcro.algorithms.do_not_use');
goog.require('com.fulcrologic.fulcro.algorithms.scheduling');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.specs');
goog.require('com.fulcrologic.fulcro.inspect.inspect_client');
goog.require('ghostwheel.core');
goog.require('edn_query_language.core');
goog.require('taoensso.encore');
goog.require('taoensso.timbre');


/**
 * Returns the remotes map from an app
 */
com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remotes = (function com$fulcrologic$fulcro$algorithms$tx_processing$app__GT_remotes(app__$1){
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
});
/**
 * Returns a set of the names of the remotes from an app
 */
com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names = (function com$fulcrologic$fulcro$algorithms$tx_processing$app__GT_remote_names(app__$1){
return cljs.core.set(cljs.core.keys(new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)))));
});
/**
 * Splits the given send queue into two send queues:
 *   [parallel-items sequential-items].
 */
com.fulcrologic.fulcro.algorithms.tx_processing.extract_parallel = (function com$fulcrologic$fulcro$algorithms$tx_processing$extract_parallel(sends){
var parallel_QMARK_ = (function (p__64163){
var map__64164 = p__64163;
var map__64164__$1 = (((((!((map__64164 == null))))?(((((map__64164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64164):map__64164);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64164__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
return cljs.core.boolean$((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"parallel?","parallel?",-25273892).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","parallel?","com.fulcrologic.fulcro.algorithms.tx-processing/parallel?",1623289535).cljs$core$IFn$_invoke$arity$1(options);
}
})());
});
var map__64162 = cljs.core.group_by(parallel_QMARK_,sends);
var map__64162__$1 = (((((!((map__64162 == null))))?(((((map__64162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64162):map__64162);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64162__$1,true);
var sequential = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64162__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(parallel),cljs.core.vec(sequential)], null);
});
/**
 * Check if the given `test` predicate is true for an AST node or for all the immediate children of an AST tree.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.every_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$every_ast_QMARK_(ast_node_or_tree,test){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast_node_or_tree))){
return cljs.core.every_QMARK_(test,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast_node_or_tree));
} else {
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(ast_node_or_tree) : test.call(null,ast_node_or_tree));
}
});
/**
 * Returns true if the given AST node or tree represents a mutation or sequence of mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.mutation_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$mutation_ast_QMARK_(ast_node_or_tree){
return com.fulcrologic.fulcro.algorithms.tx_processing.every_ast_QMARK_(ast_node_or_tree,(function (p1__64169_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__64169_SHARP_));
}));
});
/**
 * Returns true if the given AST node or tree represents a mutation or sequence of mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.query_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$query_ast_QMARK_(ast_node_or_tree){
return com.fulcrologic.fulcro.algorithms.tx_processing.every_ast_QMARK_(ast_node_or_tree,(function (p1__64170_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__64170_SHARP_));
}));
});
/**
 * Sort function on a send queue. Leaves any active nodes in front, and sorts the remainder of the queue so that writes
 *   appear before reads, without changing the relative order in blocks of reads/writes.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.sort_queue_writes_before_reads = (function com$fulcrologic$fulcro$algorithms$tx_processing$sort_queue_writes_before_reads(send_queue){
var vec__64176 = cljs.core.split_with(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),send_queue);
var active_queue = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64176,(0),null);
var send_queue__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64176,(1),null);
var id_sequence = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__64176,active_queue,send_queue__$1){
return (function (n){
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.first(n));
});})(vec__64176,active_queue,send_queue__$1))
,cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),send_queue__$1));
var clusters = cljs.core.group_by(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.vec(send_queue__$1));
var map__64179 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__64176,active_queue,send_queue__$1,id_sequence,clusters){
return (function (result,id){
var vec__64181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters,id);
var seq__64182 = cljs.core.seq(vec__64181);
var first__64183 = cljs.core.first(seq__64182);
var seq__64182__$1 = cljs.core.next(seq__64182);
var map__64184 = first__64183;
var map__64184__$1 = (((((!((map__64184 == null))))?(((((map__64184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64184):map__64184);
var n = map__64184__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64184__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var _ = seq__64182__$1;
var cluster = vec__64181;
if((ast == null)){
return result;
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.tx_processing.query_ast_QMARK_(ast))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.into,cluster);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.tx_processing.mutation_ast_QMARK_(ast))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"writes","writes",-102226269),cljs.core.into,cluster);
} else {
return result;

}
}
}
});})(vec__64176,active_queue,send_queue__$1,id_sequence,clusters))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"writes","writes",-102226269),cljs.core.PersistentVector.EMPTY], null),id_sequence);
var map__64179__$1 = (((((!((map__64179 == null))))?(((((map__64179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64179):map__64179);
var reads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64179__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var writes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64179__$1,new cljs.core.Keyword(null,"writes","writes",-102226269));
var send_queue__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(active_queue,writes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reads], 0)));
return send_queue__$2;
});
com.fulcrologic.fulcro.algorithms.tx_processing.top_keys = (function com$fulcrologic$fulcro$algorithms$tx_processing$top_keys(p__64187){
var map__64188 = p__64187;
var map__64188__$1 = (((((!((map__64188 == null))))?(((((map__64188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64188):map__64188);
var ast = map__64188__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64188__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64188__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64188__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),type)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587)),children);
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([key]);
}
});
/**
 * Takes a send queue and returns a map containing a new combined send node that can act as a single network request,
 *   along with the updated send queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.combine_sends = (function com$fulcrologic$fulcro$algorithms$tx_processing$combine_sends(app__$1,remote_name,send_queue){
var vec__64191 = cljs.core.split_with(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),send_queue);
var active_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64191,(0),null);
var send_queue__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64191,(1),null);
var send_queue__$2 = com.fulcrologic.fulcro.algorithms.tx_processing.sort_queue_writes_before_reads(cljs.core.vec(send_queue__$1));
var id_to_send = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.first(send_queue__$2));
var options = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(cljs.core.first(send_queue__$2));
var vec__64194 = cljs.core.split_with(((function (vec__64191,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options){
return (function (p1__64190_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_to_send,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(p1__64190_SHARP_));
});})(vec__64191,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options))
,send_queue__$2);
var to_send = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64194,(0),null);
var to_defer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64194,(1),null);
var tx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__64191,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__64194,to_send,to_defer){
return (function (acc,p__64197){
var map__64198 = p__64197;
var map__64198__$1 = (((((!((map__64198 == null))))?(((((map__64198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64198):map__64198);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64198__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var tx = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast)))?edn_query_language.core.ast__GT_query(ast):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [edn_query_language.core.ast__GT_query(ast)], null));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,tx);
});})(vec__64191,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__64194,to_send,to_defer))
,cljs.core.PersistentVector.EMPTY,to_send);
var ast = edn_query_language.core.query__GT_ast(tx);
var combined_node_id = com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0();
var combined_node_idx = (0);
var combined_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),combined_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),combined_node_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),((function (vec__64191,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__64194,to_send,to_defer,tx,ast,combined_node_id,combined_node_idx){
return (function (p__64200){
var map__64201 = p__64200;
var map__64201__$1 = (((((!((map__64201 == null))))?(((((map__64201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64201):map__64201);
var combined_result = map__64201__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64201__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var seq__64203 = cljs.core.seq(to_send);
var chunk__64204 = null;
var count__64205 = (0);
var i__64206 = (0);
while(true){
if((i__64206 < count__64205)){
var map__64214 = chunk__64204.cljs$core$IIndexed$_nth$arity$2(null,i__64206);
var map__64214__$1 = (((((!((map__64214 == null))))?(((((map__64214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64214):map__64214);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64214__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
if(cljs.core.truth_(update_handler)){
(update_handler.cljs$core$IFn$_invoke$arity$1 ? update_handler.cljs$core$IFn$_invoke$arity$1(combined_result) : update_handler.call(null,combined_result));
} else {
}


var G__64671 = seq__64203;
var G__64672 = chunk__64204;
var G__64673 = count__64205;
var G__64674 = (i__64206 + (1));
seq__64203 = G__64671;
chunk__64204 = G__64672;
count__64205 = G__64673;
i__64206 = G__64674;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__64203);
if(temp__5804__auto__){
var seq__64203__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64203__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__64203__$1);
var G__64679 = cljs.core.chunk_rest(seq__64203__$1);
var G__64680 = c__4550__auto__;
var G__64681 = cljs.core.count(c__4550__auto__);
var G__64682 = (0);
seq__64203 = G__64679;
chunk__64204 = G__64680;
count__64205 = G__64681;
i__64206 = G__64682;
continue;
} else {
var map__64216 = cljs.core.first(seq__64203__$1);
var map__64216__$1 = (((((!((map__64216 == null))))?(((((map__64216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64216):map__64216);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64216__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
if(cljs.core.truth_(update_handler)){
(update_handler.cljs$core$IFn$_invoke$arity$1 ? update_handler.cljs$core$IFn$_invoke$arity$1(combined_result) : update_handler.call(null,combined_result));
} else {
}


var G__64686 = cljs.core.next(seq__64203__$1);
var G__64687 = null;
var G__64688 = (0);
var G__64689 = (0);
seq__64203 = G__64686;
chunk__64204 = G__64687;
count__64205 = G__64688;
i__64206 = G__64689;
continue;
}
} else {
return null;
}
}
break;
}
});})(vec__64191,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__64194,to_send,to_defer,tx,ast,combined_node_id,combined_node_idx))
,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),((function (vec__64191,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__64194,to_send,to_defer,tx,ast,combined_node_id,combined_node_idx){
return (function (p__64220){
var map__64221 = p__64220;
var map__64221__$1 = (((((!((map__64221 == null))))?(((((map__64221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64221):map__64221);
var combined_result = map__64221__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64221__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var seq__64225_64692 = cljs.core.seq(to_send);
var chunk__64226_64693 = null;
var count__64227_64694 = (0);
var i__64228_64695 = (0);
while(true){
if((i__64228_64695 < count__64227_64694)){
var map__64257_64697 = chunk__64226_64693.cljs$core$IIndexed$_nth$arity$2(null,i__64228_64695);
var map__64257_64698__$1 = (((((!((map__64257_64697 == null))))?(((((map__64257_64697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64257_64697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64257_64697):map__64257_64697);
var ast_64699__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64257_64698__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler_64700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64257_64698__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var new_body_64703 = cljs.core.select_keys(body,com.fulcrologic.fulcro.algorithms.tx_processing.top_keys(ast_64699__$1));
var result_64704 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(combined_result,new cljs.core.Keyword(null,"body","body",-2049205669),new_body_64703);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})())){
try{var map__64260_64706 = result_64704;
var map__64260_64707__$1 = (((((!((map__64260_64706 == null))))?(((((map__64260_64706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64260_64706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64260_64706):map__64260_64706);
var status_code_64708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64260_64707__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_64709__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64260_64707__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_64708)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,combined_node_id,body_64709__$1);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,remote_name,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_64708));
}
}catch (e64259){var e_64715 = e64259;
}} else {
}

(result_handler_64700.cljs$core$IFn$_invoke$arity$1 ? result_handler_64700.cljs$core$IFn$_invoke$arity$1(result_64704) : result_handler_64700.call(null,result_64704));


var G__64716 = seq__64225_64692;
var G__64717 = chunk__64226_64693;
var G__64718 = count__64227_64694;
var G__64719 = (i__64228_64695 + (1));
seq__64225_64692 = G__64716;
chunk__64226_64693 = G__64717;
count__64227_64694 = G__64718;
i__64228_64695 = G__64719;
continue;
} else {
var temp__5804__auto___64722 = cljs.core.seq(seq__64225_64692);
if(temp__5804__auto___64722){
var seq__64225_64723__$1 = temp__5804__auto___64722;
if(cljs.core.chunked_seq_QMARK_(seq__64225_64723__$1)){
var c__4550__auto___64724 = cljs.core.chunk_first(seq__64225_64723__$1);
var G__64725 = cljs.core.chunk_rest(seq__64225_64723__$1);
var G__64726 = c__4550__auto___64724;
var G__64727 = cljs.core.count(c__4550__auto___64724);
var G__64728 = (0);
seq__64225_64692 = G__64725;
chunk__64226_64693 = G__64726;
count__64227_64694 = G__64727;
i__64228_64695 = G__64728;
continue;
} else {
var map__64264_64732 = cljs.core.first(seq__64225_64723__$1);
var map__64264_64733__$1 = (((((!((map__64264_64732 == null))))?(((((map__64264_64732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64264_64732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64264_64732):map__64264_64732);
var ast_64734__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64264_64733__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler_64735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64264_64733__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var new_body_64736 = cljs.core.select_keys(body,com.fulcrologic.fulcro.algorithms.tx_processing.top_keys(ast_64734__$1));
var result_64737 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(combined_result,new cljs.core.Keyword(null,"body","body",-2049205669),new_body_64736);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})())){
try{var map__64271_64738 = result_64737;
var map__64271_64739__$1 = (((((!((map__64271_64738 == null))))?(((((map__64271_64738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64271_64738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64271_64738):map__64271_64738);
var status_code_64740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64271_64739__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_64741__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64271_64739__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_64740)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,combined_node_id,body_64741__$1);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,remote_name,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_64740));
}
}catch (e64270){var e_64743 = e64270;
}} else {
}

(result_handler_64735.cljs$core$IFn$_invoke$arity$1 ? result_handler_64735.cljs$core$IFn$_invoke$arity$1(result_64737) : result_handler_64735.call(null,result_64737));


var G__64744 = cljs.core.next(seq__64225_64723__$1);
var G__64745 = null;
var G__64746 = (0);
var G__64747 = (0);
seq__64225_64692 = G__64744;
chunk__64226_64693 = G__64745;
count__64227_64694 = G__64746;
i__64228_64695 = G__64747;
continue;
}
} else {
}
}
break;
}

return (com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_.cljs$core$IFn$_invoke$arity$4 ? com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,remote_name,combined_node_id,combined_node_idx) : com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_.call(null,app__$1,remote_name,combined_node_id,combined_node_idx));
});})(vec__64191,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__64194,to_send,to_defer,tx,ast,combined_node_id,combined_node_idx))
,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),true], null);
if(cljs.core.seq(to_send)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),combined_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(active_nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [combined_node], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to_defer], 0)))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),send_queue__$2], null);
}
});
/**
 * Process the send against the user-defined remote. Catches exceptions and calls error handler with status code 500
 *   if the remote itself throws exceptions.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$net_send_BANG_(app__$1,send_node,remote_name){
var b2__46703__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remotes(app__$1),remote_name);
if(cljs.core.truth_(b2__46703__auto__)){
var remote = b2__46703__auto__;
var b2__46703__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote,new cljs.core.Keyword(null,"transmit!","transmit!",-107149039));
if(cljs.core.truth_(b2__46703__auto____$1)){
var transmit_BANG_ = b2__46703__auto____$1;
var b2__46703__auto____$2 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"global-eql-transform","global-eql-transform",145441548));
if(cljs.core.truth_(b2__46703__auto____$2)){
var query_transform = b2__46703__auto____$2;
var b2__46703__auto____$3 = (cljs.core.truth_(query_transform)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(send_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),query_transform):send_node);
if(cljs.core.truth_(b2__46703__auto____$3)){
var send_node__$1 = b2__46703__auto____$3;
try{if(cljs.core.truth_((function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})())){
try{var tx_64766 = edn_query_language.core.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(send_node__$1));
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app__$1,remote_name,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(send_node__$1),tx_64766);
}catch (e64292){var e_64767 = e64292;
}} else {
}

return (transmit_BANG_.cljs$core$IFn$_invoke$arity$2 ? transmit_BANG_.cljs$core$IFn$_invoke$arity$2(remote,send_node__$1) : transmit_BANG_.call(null,remote,send_node__$1));
}catch (e64280){var e = e64280;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,154,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,send_node__$1,b2__46703__auto____$3,query_transform,b2__46703__auto____$2,transmit_BANG_,b2__46703__auto____$1,remote,b2__46703__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Send threw an exception!"], null);
});})(e,send_node__$1,b2__46703__auto____$3,query_transform,b2__46703__auto____$2,transmit_BANG_,b2__46703__auto____$1,remote,b2__46703__auto__))
,null)),null,677061357);

try{if(cljs.core.truth_((function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})())){
try{com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(send_node__$1),"Transmit Exception");
}catch (e64289){var e_64774__$1 = e64289;
}} else {
}

var G__64291 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"client-exception","client-exception",-1357213384),e], null);
var fexpr__64290 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node__$1);
return (fexpr__64290.cljs$core$IFn$_invoke$arity$1 ? fexpr__64290.cljs$core$IFn$_invoke$arity$1(G__64291) : fexpr__64290.call(null,G__64291));
}catch (e64287){var e__$1 = e64287;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"fatal","fatal",1874419888),"com.fulcrologic.fulcro.algorithms.tx-processing",null,161,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__$1,e,send_node__$1,b2__46703__auto____$3,query_transform,b2__46703__auto____$2,transmit_BANG_,b2__46703__auto____$1,remote,b2__46703__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,"Error handler failed to handle exception!"], null);
});})(e__$1,e,send_node__$1,b2__46703__auto____$3,query_transform,b2__46703__auto____$2,transmit_BANG_,b2__46703__auto____$1,remote,b2__46703__auto__))
,null)),null,1647268756);
}}} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,163,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__46703__auto____$3,query_transform,b2__46703__auto____$2,transmit_BANG_,b2__46703__auto____$1,remote,b2__46703__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name], null);
});})(b2__46703__auto____$3,query_transform,b2__46703__auto____$2,transmit_BANG_,b2__46703__auto____$1,remote,b2__46703__auto__))
,null)),null,-542092386);

var G__64297 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__64296 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__64296.cljs$core$IFn$_invoke$arity$1 ? fexpr__64296.cljs$core$IFn$_invoke$arity$1(G__64297) : fexpr__64296.call(null,G__64297));
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,163,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__46703__auto____$2,transmit_BANG_,b2__46703__auto____$1,remote,b2__46703__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name], null);
});})(b2__46703__auto____$2,transmit_BANG_,b2__46703__auto____$1,remote,b2__46703__auto__))
,null)),null,786896985);

var G__64299 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__64298 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__64298.cljs$core$IFn$_invoke$arity$1 ? fexpr__64298.cljs$core$IFn$_invoke$arity$1(G__64299) : fexpr__64298.call(null,G__64299));
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,163,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__46703__auto____$1,remote,b2__46703__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name], null);
});})(b2__46703__auto____$1,remote,b2__46703__auto__))
,null)),null,1201334769);

var G__64302 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__64301 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__64301.cljs$core$IFn$_invoke$arity$1 ? fexpr__64301.cljs$core$IFn$_invoke$arity$1(G__64302) : fexpr__64301.call(null,G__64302));
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,163,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__46703__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name], null);
});})(b2__46703__auto__))
,null)),null,828423027);

var G__64304 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__64303 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__64303.cljs$core$IFn$_invoke$arity$1 ? fexpr__64303.cljs$core$IFn$_invoke$arity$1(G__64304) : fexpr__64303.call(null,G__64304));
}
});
/**
 * Process the send queues against the remotes. Updates the send queues on the app and returns the updated send queues.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.process_send_queues_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$process_send_queues_BANG_(p__64305){
var map__64306 = p__64305;
var map__64306__$1 = (((((!((map__64306 == null))))?(((((map__64306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64306):map__64306);
var app__$1 = map__64306__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64306__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var send_queues = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var remote_names = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var new_send_queues = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (send_queues,remote_names,map__64306,map__64306__$1,app__$1,runtime_atom){
return (function (new_send_queues,remote){
var send_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$3(send_queues,remote,cljs.core.PersistentVector.EMPTY);
var vec__64311 = com.fulcrologic.fulcro.algorithms.tx_processing.extract_parallel(send_queue);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64311,(0),null);
var serial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64311,(1),null);
var front = cljs.core.first(serial);
var seq__64314_64823 = cljs.core.seq(p);
var chunk__64315_64824 = null;
var count__64316_64825 = (0);
var i__64317_64826 = (0);
while(true){
if((i__64317_64826 < count__64316_64825)){
var item_64827 = chunk__64315_64824.cljs$core$IIndexed$_nth$arity$2(null,i__64317_64826);
com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_64827,remote);


var G__64828 = seq__64314_64823;
var G__64829 = chunk__64315_64824;
var G__64830 = count__64316_64825;
var G__64831 = (i__64317_64826 + (1));
seq__64314_64823 = G__64828;
chunk__64315_64824 = G__64829;
count__64316_64825 = G__64830;
i__64317_64826 = G__64831;
continue;
} else {
var temp__5804__auto___64834 = cljs.core.seq(seq__64314_64823);
if(temp__5804__auto___64834){
var seq__64314_64835__$1 = temp__5804__auto___64834;
if(cljs.core.chunked_seq_QMARK_(seq__64314_64835__$1)){
var c__4550__auto___64836 = cljs.core.chunk_first(seq__64314_64835__$1);
var G__64837 = cljs.core.chunk_rest(seq__64314_64835__$1);
var G__64838 = c__4550__auto___64836;
var G__64839 = cljs.core.count(c__4550__auto___64836);
var G__64840 = (0);
seq__64314_64823 = G__64837;
chunk__64315_64824 = G__64838;
count__64316_64825 = G__64839;
i__64317_64826 = G__64840;
continue;
} else {
var item_64841 = cljs.core.first(seq__64314_64835__$1);
com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_64841,remote);


var G__64842 = cljs.core.next(seq__64314_64835__$1);
var G__64843 = null;
var G__64844 = (0);
var G__64845 = (0);
seq__64314_64823 = G__64842;
chunk__64315_64824 = G__64843;
count__64316_64825 = G__64844;
i__64317_64826 = G__64845;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517).cljs$core$IFn$_invoke$arity$1(front))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_send_queues,remote,serial);
} else {
var map__64323 = com.fulcrologic.fulcro.algorithms.tx_processing.combine_sends(app__$1,remote,serial);
var map__64323__$1 = (((((!((map__64323 == null))))?(((((map__64323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64323):map__64323);
var send_queue__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64323__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
var send_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64323__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157));
if(cljs.core.truth_(send_node)){
com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,send_node,remote);
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_send_queues,remote,send_queue__$1);
}
});})(send_queues,remote_names,map__64306,map__64306__$1,app__$1,runtime_atom))
,cljs.core.PersistentArrayMap.EMPTY,remote_names);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),new_send_queues);

return new_send_queues;
});
com.fulcrologic.fulcro.algorithms.tx_processing.tx_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$tx_node(var_args){
var G__64340 = arguments.length;
switch (G__64340) {
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$1 = (function (tx){
return com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2 = (function (tx,options){
var ast = edn_query_language.core.query__GT_ast(tx);
var ast_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var elements = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (ast,ast_nodes){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$txfilt_STAR_(n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(n));
});})(ast,ast_nodes))
),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(((function (ast,ast_nodes){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$__GT_txnode_STAR_(idx,ast_node){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477),ast_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660),cljs.core.PersistentArrayMap.EMPTY], null);
});})(ast,ast_nodes))
)),ast_nodes);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","created","com.fulcrologic.fulcro.algorithms.tx-processing/created",859806789),com.fulcrologic.fulcro.algorithms.do_not_use.now(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),tx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),elements], null);
});

com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$lang$maxFixedArity = 2;

com.fulcrologic.fulcro.algorithms.tx_processing.build_env = (function com$fulcrologic$fulcro$algorithms$tx_processing$build_env(var_args){
var G__64350 = arguments.length;
switch (G__64350) {
case 3:
return com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3 = (function (app__$1,p__64351,addl){
var map__64352 = p__64351;
var map__64352__$1 = (((((!((map__64352 == null))))?(((((map__64352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64352):map__64352);
var tx_node = map__64352__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64352__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var map__64354 = options;
var map__64354__$1 = (((((!((map__64354 == null))))?(((((map__64354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64354):map__64354);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64354__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64354__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var G__64356 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([addl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1),new cljs.core.Keyword(null,"app","app",-560961707),app__$1], null)], 0));
var G__64356__$1 = (cljs.core.truth_(options)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64356,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options):G__64356);
var G__64356__$2 = (cljs.core.truth_(ref)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64356__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),ref):G__64356__$1);
if(cljs.core.truth_(component)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64356__$2,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__64356__$2;
}
});

com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__64358){
var map__64359 = p__64358;
var map__64359__$1 = (((((!((map__64359 == null))))?(((((map__64359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64359):map__64359);
var tx_node = map__64359__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64359__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
return com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$lang$maxFixedArity = 3;

/**
 * Run through the elements on the given tx-node and do the side-effect-free dispatch. This generates the dispatch map
 *   of things to do on that node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements = (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_elements(tx_node,env,dispatch_fn){
var do_dispatch = (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_elements_$_run_STAR_(env__$1){
try{return (dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? dispatch_fn.cljs$core$IFn$_invoke$arity$1(env__$1) : dispatch_fn.call(null,env__$1));
}catch (e64366){var e = e64366;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,241,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Dispatch of mutation failed with an exception. No dispatch generated."], null);
});})(e))
,null)),null,1897522142);

return cljs.core.PersistentArrayMap.EMPTY;
}});
var dispatch = ((function (do_dispatch){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_elements_$_dispatch_STAR_(p__64368){
var map__64373 = p__64368;
var map__64373__$1 = (((((!((map__64373 == null))))?(((((map__64373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64373):map__64373);
var ele = map__64373__$1;
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64373__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var map__64376 = original_ast_node;
var map__64376__$1 = (((((!((map__64376 == null))))?(((((map__64376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64376):map__64376);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64376__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node);
var G__64378 = ele;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64378,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660),do_dispatch(env__$1));
} else {
return G__64378;
}
});})(do_dispatch))
;
var dispatch_all = ((function (do_dispatch,dispatch){
return (function (eles){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(dispatch,eles);
});})(do_dispatch,dispatch))
;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(tx_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),dispatch_all);
});
/**
 * Activate all of the transactions that have been submitted since the last activation. After the items are activated
 *   a single processing step will run for the active queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.activate_submissions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$activate_submissions_BANG_(p__64385){
var map__64386 = p__64385;
var map__64386__$1 = (((((!((map__64386 == null))))?(((((map__64386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64386):map__64386);
var app__$1 = map__64386__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64386__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var dispatched_nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__64386,map__64386__$1,app__$1,runtime_atom){
return (function (p1__64382_SHARP_){
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements(p1__64382_SHARP_,com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,p1__64382_SHARP_),com.fulcrologic.fulcro.mutations.mutate);
});})(map__64386,map__64386__$1,app__$1,runtime_atom))
,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,((function (dispatched_nodes,map__64386,map__64386__$1,app__$1,runtime_atom){
return (function (a){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),((function (dispatched_nodes,map__64386,map__64386__$1,app__$1,runtime_atom){
return (function (p1__64384_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,p1__64384_SHARP_,dispatched_nodes);
});})(dispatched_nodes,map__64386,map__64386__$1,app__$1,runtime_atom))
),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),cljs.core.PersistentVector.EMPTY);
});})(dispatched_nodes,map__64386,map__64386__$1,app__$1,runtime_atom))
);

return (com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_.call(null,app__$1));
});
/**
 * Schedule activation of submitted transactions.  The default implementation copies all submitted transactions onto
 * the active queue and immediately does an active queue processing step.  If `tm` is not supplied (in ms) it defaults to 10ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$schedule_activation_BANG_(var_args){
var G__64394 = arguments.length;
switch (G__64394) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","activation-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/activation-scheduled?",-955561668),com.fulcrologic.fulcro.algorithms.tx_processing.activate_submissions_BANG_,tm);
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(10));
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Schedule a processing of the active queue, which will advance the active transactions by a step.
 * If `tm` is not supplied (in ms) it defaults to 10ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$schedule_queue_processing_BANG_(var_args){
var G__64401 = arguments.length;
switch (G__64401) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","queue-processing-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/queue-processing-scheduled?",-2065549690),com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_,tm);
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(10));
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Schedule actual network activity. If `tm` is not supplied (in ms) it defaults to 0ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$schedule_sends_BANG_(var_args){
var G__64408 = arguments.length;
switch (G__64408) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","sends-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/sends-scheduled?",-844941333),com.fulcrologic.fulcro.algorithms.tx_processing.process_send_queues_BANG_,tm);
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Runs any incomplete and non-blocked optimistic operations on a node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.advance_actions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$advance_actions_BANG_(app__$1,p__64410){
var map__64411 = p__64410;
var map__64411__$1 = (((((!((map__64411 == null))))?(((((map__64411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64411):map__64411);
var node = map__64411__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64411__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64411__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var reduction = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (remotes,map__64411,map__64411__$1,node,id,elements){
return (function (p__64420,element){
var map__64421 = p__64420;
var map__64421__$1 = (((((!((map__64421 == null))))?(((((map__64421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64421):map__64421);
var acc = map__64421__$1;
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64421__$1,new cljs.core.Keyword(null,"done?","done?",-1847001718));
var new_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64421__$1,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171));
if(cljs.core.truth_(done_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.conj,element);
} else {
var map__64424 = element;
var map__64424__$1 = (((((!((map__64424 == null))))?(((((map__64424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64424):map__64424);
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64424__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64424__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64424__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64424__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var map__64425 = dispatch;
var map__64425__$1 = (((((!((map__64425 == null))))?(((((map__64425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64425):map__64425);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64425__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var remote_set = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remotes,cljs.core.set(cljs.core.keys(dispatch)));
var exec_QMARK_ = (function (){var and__4120__auto__ = action;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var or__4131__auto__ = done_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__64432 = new cljs.core.Keyword(null,"action","action",-811238024);
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(G__64432) : complete_QMARK_.call(null,G__64432));
}
})());
} else {
return and__4120__auto__;
}
})();
var fully_complete_QMARK_ = (function (){var and__4120__auto__ = (function (){var or__4131__auto__ = exec_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__64435 = new cljs.core.Keyword(null,"action","action",-811238024);
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(G__64435) : complete_QMARK_.call(null,G__64435));
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remote_set,complete_QMARK_));
} else {
return and__4120__auto__;
}
})();
var state_before = cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1));
var updated_element = (cljs.core.truth_(exec_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778),state_before),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,new cljs.core.Keyword(null,"action","action",-811238024)):element);
var done_QMARK___$1 = cljs.core.not(fully_complete_QMARK_);
var new_acc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done?","done?",-1847001718),done_QMARK___$1,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_elements,updated_element)], null);
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node], null));
if(cljs.core.truth_(exec_QMARK_)){
try{if(cljs.core.truth_(action)){
(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(env) : action.call(null,env));
} else {
}
}catch (e64439){var e_64898 = e64439;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,319,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e_64898,map__64424,map__64424__$1,complete_QMARK_,dispatch,original_ast_node,idx,map__64425,map__64425__$1,action,remote_set,exec_QMARK_,fully_complete_QMARK_,state_before,updated_element,done_QMARK___$1,new_acc,env,map__64421,map__64421__$1,acc,done_QMARK_,new_elements,remotes,map__64411,map__64411__$1,node,id,elements){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64898,"Failure dispatching optimistic action for AST node",element,"of transaction node",node], null);
});})(e_64898,map__64424,map__64424__$1,complete_QMARK_,dispatch,original_ast_node,idx,map__64425,map__64425__$1,action,remote_set,exec_QMARK_,fully_complete_QMARK_,state_before,updated_element,done_QMARK___$1,new_acc,env,map__64421,map__64421__$1,acc,done_QMARK_,new_elements,remotes,map__64411,map__64411__$1,node,id,elements))
,null)),null,1269104934);
}
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})())){
try{var tx_64910 = edn_query_language.core.ast__GT_query(original_ast_node);
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_(app__$1,env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"state-before","state-before",759087843),state_before,new cljs.core.Keyword(null,"tx","tx",466630418),tx_64910], null));
}catch (e64441){var e_64911 = e64441;
}} else {
}
} else {
}

return new_acc;
}
});})(remotes,map__64411,map__64411__$1,node,id,elements))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done?","done?",-1847001718),false,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.PersistentVector.EMPTY], null),elements);
var new_elements = new cljs.core.Keyword(null,"new-elements","new-elements",-378003171).cljs$core$IFn$_invoke$arity$1(reduction);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),new_elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$run_actions_BANG_(app__$1,p__64444){
var map__64445 = p__64444;
var map__64445__$1 = (((((!((map__64445 == null))))?(((((map__64445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64445):map__64445);
var node = map__64445__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64445__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64445__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
var new_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__64445,map__64445__$1,node,id,elements){
return (function (new_elements,element){
var map__64449 = element;
var map__64449__$1 = (((((!((map__64449 == null))))?(((((map__64449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64449):map__64449);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64449__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64449__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64449__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64449__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var map__64450 = dispatch;
var map__64450__$1 = (((((!((map__64450 == null))))?(((((map__64450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64450):map__64450);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64450__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var exec_QMARK_ = (function (){var and__4120__auto__ = action;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var G__64454 = new cljs.core.Keyword(null,"action","action",-811238024);
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(G__64454) : complete_QMARK_.call(null,G__64454));
})());
} else {
return and__4120__auto__;
}
})();
var state_before = cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1));
var updated_node = (cljs.core.truth_(exec_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778),state_before),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,new cljs.core.Keyword(null,"action","action",-811238024)):element);
var new_acc = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_elements,updated_node);
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node], null));
if(cljs.core.truth_(exec_QMARK_)){
try{(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(env) : action.call(null,env));
}catch (e64455){var e_64922 = e64455;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,348,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e_64922,map__64449,map__64449__$1,idx,complete_QMARK_,dispatch,original_ast_node,map__64450,map__64450__$1,action,exec_QMARK_,state_before,updated_node,new_acc,env,map__64445,map__64445__$1,node,id,elements){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64922,"Failure dispatching optimistic action for AST node",element,"of transaction node",node], null);
});})(e_64922,map__64449,map__64449__$1,idx,complete_QMARK_,dispatch,original_ast_node,map__64450,map__64450__$1,action,exec_QMARK_,state_before,updated_node,new_acc,env,map__64445,map__64445__$1,node,id,elements))
,null)),null,337374718);
}
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})())){
try{var tx_64944 = edn_query_language.core.ast__GT_query(original_ast_node);
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_(app__$1,env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"state-before","state-before",759087843),state_before,new cljs.core.Keyword(null,"tx","tx",466630418),tx_64944], null));
}catch (e64456){var e_64945 = e64456;
}} else {
}
} else {
}

return new_acc;
});})(map__64445,map__64445__$1,node,id,elements))
,cljs.core.PersistentVector.EMPTY,elements);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),new_elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.fully_complete_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$fully_complete_QMARK_(app__$1,p__64461){
var map__64462 = p__64461;
var map__64462__$1 = (((((!((map__64462 == null))))?(((((map__64462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64462):map__64462);
var tx_node = map__64462__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64462__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
var element_complete_QMARK_ = ((function (map__64462,map__64462__$1,tx_node,elements){
return (function (p__64467){
var map__64468 = p__64467;
var map__64468__$1 = (((((!((map__64468 == null))))?(((((map__64468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64468):map__64468);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64468__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64468__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var active_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),null], null), null),remotes);
var desired_set = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(active_keys,cljs.core.set(cljs.core.keys(dispatch)));
return cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(desired_set,complete_QMARK_));
});})(map__64462,map__64462__$1,tx_node,elements))
;
return cljs.core.every_QMARK_(element_complete_QMARK_,elements);
});
/**
 * Removes the send node (if present) from the send queue on the given remote.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$remove_send_BANG_(p__64475,remote,txn_id,ele_idx){
var map__64476 = p__64475;
var map__64476__$1 = (((((!((map__64476 == null))))?(((((map__64476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64476):map__64476);
var app__$1 = map__64476__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64476__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__64478 = cljs.core.deref(runtime_atom);
var map__64478__$1 = (((((!((map__64478 == null))))?(((((map__64478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64478):map__64478);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64478__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807));
var queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var queue__$1 = cljs.core.filterv(((function (map__64478,map__64478__$1,send_queues,queue,map__64476,map__64476__$1,app__$1,runtime_atom){
return (function (p__64481){
var map__64482 = p__64481;
var map__64482__$1 = (((((!((map__64482 == null))))?(((((map__64482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64482):map__64482);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64482__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64482__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ele_idx,idx)))));
});})(map__64478,map__64478__$1,send_queues,queue,map__64476,map__64476__$1,app__$1,runtime_atom))
,queue);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),queue__$1);
});
/**
 * Record a network result on the given txn/element.
 * If result-key is given it is used, otherwise defaults to ::results. Also removes the network send from the send
 * queue so that remaining items can proceed, and schedules send processing.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$record_result_BANG_(var_args){
var G__64489 = arguments.length;
switch (G__64489) {
case 6:
return com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 5:
return com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (p__64495,txn_id,ele_idx,remote,result,result_key){
var map__64496 = p__64495;
var map__64496__$1 = (((((!((map__64496 == null))))?(((((map__64496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64496):map__64496);
var app__$1 = map__64496__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64496__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var active_queue = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var txn_idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (active_queue,map__64496,map__64496__$1,app__$1,runtime_atom){
return (function (idx,p__64498){
var map__64499 = p__64498;
var map__64499__$1 = (((((!((map__64499 == null))))?(((((map__64499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64499):map__64499);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64499__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,txn_id)){
return cljs.core.reduced(idx);
} else {
return (idx + (1));
}
});})(active_queue,map__64496,map__64496__$1,app__$1,runtime_atom))
,(0),active_queue);
var not_found_QMARK_ = (((txn_idx >= cljs.core.count(active_queue))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_queue,txn_idx)))));
if(not_found_QMARK_){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,394,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (active_queue,txn_idx,not_found_QMARK_,map__64496,map__64496__$1,app__$1,runtime_atom){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Network result for",remote,"does not have a valid node on the active queue!"], null);
});})(active_queue,txn_idx,not_found_QMARK_,map__64496,map__64496__$1,app__$1,runtime_atom))
,null)),null,1320652430);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),txn_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,result_key,remote], null),result);
}
});

com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (app__$1,txn_id,ele_idx,remote,result){
return com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,txn_id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
});

com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$lang$maxFixedArity = 6;

/**
 * Generate a new send node and add it to the appropriate send queue. Returns the new send node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.add_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$add_send_BANG_(p__64511,p__64512,ele_idx,remote){
var map__64513 = p__64511;
var map__64513__$1 = (((((!((map__64513 == null))))?(((((map__64513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64513):map__64513);
var app__$1 = map__64513__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64513__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__64514 = p__64512;
var map__64514__$1 = (((((!((map__64514 == null))))?(((((map__64514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64514):map__64514);
var tx_node = map__64514__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64514__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64514__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var handler = ((function (map__64513,map__64513__$1,app__$1,runtime_atom,map__64514,map__64514__$1,tx_node,id,options){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$add_send_BANG__$_result_handler_STAR_(result){
com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5(app__$1,id,ele_idx,remote,result);

com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_(app__$1,remote,id,ele_idx);

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(1));

return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});})(map__64513,map__64513__$1,app__$1,runtime_atom,map__64514,map__64514__$1,tx_node,id,options))
;
var update_handler = ((function (handler,map__64513,map__64513__$1,app__$1,runtime_atom,map__64514,map__64514__$1,tx_node,id,options){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$add_send_BANG__$_progress_handler_STAR_(result){
com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));

return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});})(handler,map__64513,map__64513__$1,app__$1,runtime_atom,map__64514,map__64514__$1,tx_node,id,options))
;
var map__64519 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx], null));
var map__64519__$1 = (((((!((map__64519 == null))))?(((((map__64519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64519):map__64519);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64519__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64519__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var state_before_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64519__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778));
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node,new cljs.core.Keyword(null,"state-before-action","state-before-action",104906671),state_before_action], null));
var remote_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,remote);
var remote_desire = (cljs.core.truth_(remote_fn)?(remote_fn.cljs$core$IFn$_invoke$arity$1 ? remote_fn.cljs$core$IFn$_invoke$arity$1(env) : remote_fn.call(null,env)):null);
var ast = ((((remote_desire === false) || ((remote_desire == null))))?null:((remote_desire === true)?original_ast_node:((((cljs.core.map_QMARK_(remote_desire)) && (cljs.core.contains_QMARK_(remote_desire,new cljs.core.Keyword(null,"ast","ast",-860334068)))))?new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(remote_desire):((((cljs.core.map_QMARK_(remote_desire)) && (cljs.core.contains_QMARK_(remote_desire,new cljs.core.Keyword(null,"type","type",1174270348)))))?remote_desire:(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,423,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (handler,update_handler,map__64519,map__64519__$1,dispatch,original_ast_node,state_before_action,env,remote_fn,remote_desire,map__64513,map__64513__$1,app__$1,runtime_atom,map__64514,map__64514__$1,tx_node,id,options){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote dispatch for",remote,"returned an invalid value.",remote_desire], null);
});})(handler,update_handler,map__64519,map__64519__$1,dispatch,original_ast_node,state_before_action,env,remote_fn,remote_desire,map__64513,map__64513__$1,app__$1,runtime_atom,map__64514,map__64514__$1,tx_node,id,options))
,null)),null,-1294274425);

return remote_desire;
})()

))));
var send_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),false,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),handler,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),update_handler], null);
if(cljs.core.truth_(ast)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([send_node], 0));

return send_node;
} else {
handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),"The remote AST was empty!"], null));

return null;
}
});
/**
 * Queue all (unqueued) remote actions for the given element.  Returns the (possibly updated) node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.queue_element_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$queue_element_sends_BANG_(app__$1,tx_node,p__64532){
var map__64533 = p__64532;
var map__64533__$1 = (((((!((map__64533 == null))))?(((((map__64533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64533):map__64533);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64533__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64533__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64533__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
var remotes = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(dispatch)),com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1));
var to_dispatch = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remotes,started_QMARK_);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (remotes,to_dispatch,map__64533,map__64533__$1,idx,dispatch,started_QMARK_){
return (function (node,remote){
if(cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.PersistentHashSet.EMPTY),remote)){
return node;
} else {
com.fulcrologic.fulcro.algorithms.tx_processing.add_send_BANG_(app__$1,node,idx,remote);

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.conj,remote);
}
});})(remotes,to_dispatch,map__64533,map__64533__$1,idx,dispatch,started_QMARK_))
,tx_node,to_dispatch);
});
/**
 * Returns true if the given node has no active network operations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.idle_node_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$idle_node_QMARK_(p__64541){
var map__64542 = p__64541;
var map__64542__$1 = (((((!((map__64542 == null))))?(((((map__64542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64542):map__64542);
var tx_node = map__64542__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64542__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
return cljs.core.every_QMARK_(((function (map__64542,map__64542__$1,tx_node,elements){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$idle_node_QMARK__$_idle_QMARK__STAR_(p__64544){
var map__64545 = p__64544;
var map__64545__$1 = (((((!((map__64545 == null))))?(((((map__64545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64545):map__64545);
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64545__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64545__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var in_progress = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(started_QMARK_,complete_QMARK_);
return cljs.core.empty_QMARK_(in_progress);
});})(map__64542,map__64542__$1,tx_node,elements))
,elements);
});
/**
 * Returns a txnode element iff it has remaining (remote) work that has not been queued. Returns nil if there
 * is no such element.
 * 
 *   remote-names is the set of legal remote names.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.element_with_work = (function com$fulcrologic$fulcro$algorithms$tx_processing$element_with_work(remote_names,p__64554){
var map__64555 = p__64554;
var map__64555__$1 = (((((!((map__64555 == null))))?(((((map__64555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64555):map__64555);
var element = map__64555__$1;
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64555__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64555__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
var todo = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remote_names,cljs.core.set(cljs.core.keys(dispatch)));
var remaining = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(todo,started_QMARK_);
if(cljs.core.seq(remaining)){
return element;
} else {
return null;
}
});
/**
 * Assumes tx-node is to be processed pessimistically. Queues the next send if the node is currently idle
 *   on the network and there are any sends left to do. Adds to the send queue, and returns the updated
 *   tx-node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.queue_next_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$queue_next_send_BANG_(app__$1,p__64560){
var map__64561 = p__64560;
var map__64561__$1 = (((((!((map__64561 == null))))?(((((map__64561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64561):map__64561);
var tx_node = map__64561__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64561__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
if(com.fulcrologic.fulcro.algorithms.tx_processing.idle_node_QMARK_(tx_node)){
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var with_work = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.element_with_work,remotes);
var element = cljs.core.some(with_work,elements);
if(cljs.core.truth_(element)){
return com.fulcrologic.fulcro.algorithms.tx_processing.queue_element_sends_BANG_(app__$1,tx_node,element);
} else {
return tx_node;
}
} else {
return tx_node;
}
});
/**
 * Finds any item(s) on the given node that are ready to be placed on the network queues and adds them. Non-optimistic
 *   multi-element nodes will only queue one remote operation at a time.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.queue_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$queue_sends_BANG_(app__$1,p__64566){
var map__64567 = p__64566;
var map__64567__$1 = (((((!((map__64567 == null))))?(((((map__64567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64567):map__64567);
var tx_node = map__64567__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64567__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64567__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
var optimistic_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869).cljs$core$IFn$_invoke$arity$1(options));
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));

if(optimistic_QMARK_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (optimistic_QMARK_,map__64567,map__64567__$1,tx_node,options,elements){
return (function (node,element){
return com.fulcrologic.fulcro.algorithms.tx_processing.queue_element_sends_BANG_(app__$1,node,element);
});})(optimistic_QMARK_,map__64567,map__64567__$1,tx_node,options,elements))
,tx_node,elements);
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.queue_next_send_BANG_(app__$1,tx_node);
}
});
/**
 * Figure out the dispatch routine to trigger for the given network result.  If it exists, send the result
 *   to it.
 * 
 *   Returns the tx-element with the remote marked complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_result_BANG_(app__$1,tx_node,p__64570,remote){
var map__64571 = p__64570;
var map__64571__$1 = (((((!((map__64571 == null))))?(((((map__64571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64571):map__64571);
var tx_element = map__64571__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64571__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64571__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64571__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));

var result_65012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,remote);
var handler_65013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"result-action","result-action",-1254630246));
if(cljs.core.truth_(handler_65013)){
var env_65014 = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"result","result",1415092211),result_65012], null));
try{(handler_65013.cljs$core$IFn$_invoke$arity$1 ? handler_65013.cljs$core$IFn$_invoke$arity$1(env_65014) : handler_65013.call(null,env_65014));
}catch (e64576){var e_65016 = e64576;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,523,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e_65016,env_65014,result_65012,handler_65013,map__64571,map__64571__$1,tx_element,results,dispatch,original_ast_node){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_65016,"The result-action mutation handler for mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"threw an exception."], null);
});})(e_65016,env_65014,result_65012,handler_65013,map__64571,map__64571__$1,tx_element,results,dispatch,original_ast_node))
,null)),null,-843489919);
}} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(tx_element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,remote);
});
/**
 * Distribute results and mark the remotes for those elements as complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.distribute_element_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$distribute_element_results_BANG_(app__$1,tx_node,p__64579){
var map__64580 = p__64579;
var map__64580__$1 = (((((!((map__64580 == null))))?(((((map__64580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64580):map__64580);
var tx_element = map__64580__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64580__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64580__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__64580,map__64580__$1,tx_element,results,complete_QMARK_){
return (function (new_element,remote){
if(cljs.core.truth_((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(remote) : complete_QMARK_.call(null,remote)))){
return new_element;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_result_BANG_(app__$1,tx_node,new_element,remote);
}
});})(map__64580,map__64580__$1,tx_element,results,complete_QMARK_))
,tx_element,cljs.core.keys(results));
});
/**
 * Walk all elements of the tx-node and call result dispatch handlers for any results that have
 *   not been distributed.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.distribute_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$distribute_results_BANG_(app__$1,p__64583){
var map__64584 = p__64583;
var map__64584__$1 = (((((!((map__64584 == null))))?(((((map__64584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64584):map__64584);
var tx_node = map__64584__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64584__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__64584,map__64584__$1,tx_node,elements){
return (function (element){
return com.fulcrologic.fulcro.algorithms.tx_processing.distribute_element_results_BANG_(app__$1,tx_node,element);
});})(map__64584,map__64584__$1,tx_node,elements))
,elements));
});
/**
 * Report all progress items to any registered progress dispatch and clear them from the tx-node.
 *   Returns the updated tx-node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.update_progress_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$update_progress_BANG_(app__$1,p__64588){
var map__64589 = p__64588;
var map__64589__$1 = (((((!((map__64589 == null))))?(((((map__64589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64589):map__64589);
var tx_node = map__64589__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64589__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
var get_env = ((function (map__64589,map__64589__$1,tx_node,elements){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$update_progress_BANG__$_get_env_STAR_(remote,progress){
return com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote,new cljs.core.Keyword(null,"progress","progress",244323547),progress], null));
});})(map__64589,map__64589__$1,tx_node,elements))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (get_env,map__64589,map__64589__$1,tx_node,elements){
return (function (node,p__64591){
var map__64592 = p__64591;
var map__64592__$1 = (((((!((map__64592 == null))))?(((((map__64592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64592):map__64592);
var element = map__64592__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64592__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64592__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64592__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var seq__64595_65023 = cljs.core.seq(progress);
var chunk__64596_65024 = null;
var count__64597_65025 = (0);
var i__64598_65026 = (0);
while(true){
if((i__64598_65026 < count__64597_65025)){
var vec__64611_65035 = chunk__64596_65024.cljs$core$IIndexed$_nth$arity$2(null,i__64598_65026);
var remote_65036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64611_65035,(0),null);
var value_65037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64611_65035,(1),null);
var env_65040 = get_env(remote_65036,value_65037);
var action_65041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"progress-action","progress-action",1342780181));
if(cljs.core.truth_(action_65041)){
try{(action_65041.cljs$core$IFn$_invoke$arity$1 ? action_65041.cljs$core$IFn$_invoke$arity$1(env_65040) : action_65041.call(null,env_65040));
}catch (e64614){var e_65043 = e64614;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,563,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__64595_65023,chunk__64596_65024,count__64597_65025,i__64598_65026,e_65043,env_65040,action_65041,vec__64611_65035,remote_65036,value_65037,map__64592,map__64592__$1,element,idx,progress,dispatch,get_env,map__64589,map__64589__$1,tx_node,elements){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_65043,"Progress action threw an exception for txn element",element], null);
});})(seq__64595_65023,chunk__64596_65024,count__64597_65025,i__64598_65026,e_65043,env_65040,action_65041,vec__64611_65035,remote_65036,value_65037,map__64592,map__64592__$1,element,idx,progress,dispatch,get_env,map__64589,map__64589__$1,tx_node,elements))
,null)),null,-173718394);
}} else {
}


var G__65044 = seq__64595_65023;
var G__65045 = chunk__64596_65024;
var G__65046 = count__64597_65025;
var G__65047 = (i__64598_65026 + (1));
seq__64595_65023 = G__65044;
chunk__64596_65024 = G__65045;
count__64597_65025 = G__65046;
i__64598_65026 = G__65047;
continue;
} else {
var temp__5804__auto___65049 = cljs.core.seq(seq__64595_65023);
if(temp__5804__auto___65049){
var seq__64595_65051__$1 = temp__5804__auto___65049;
if(cljs.core.chunked_seq_QMARK_(seq__64595_65051__$1)){
var c__4550__auto___65052 = cljs.core.chunk_first(seq__64595_65051__$1);
var G__65054 = cljs.core.chunk_rest(seq__64595_65051__$1);
var G__65055 = c__4550__auto___65052;
var G__65056 = cljs.core.count(c__4550__auto___65052);
var G__65057 = (0);
seq__64595_65023 = G__65054;
chunk__64596_65024 = G__65055;
count__64597_65025 = G__65056;
i__64598_65026 = G__65057;
continue;
} else {
var vec__64617_65059 = cljs.core.first(seq__64595_65051__$1);
var remote_65060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64617_65059,(0),null);
var value_65061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64617_65059,(1),null);
var env_65062 = get_env(remote_65060,value_65061);
var action_65063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"progress-action","progress-action",1342780181));
if(cljs.core.truth_(action_65063)){
try{(action_65063.cljs$core$IFn$_invoke$arity$1 ? action_65063.cljs$core$IFn$_invoke$arity$1(env_65062) : action_65063.call(null,env_65062));
}catch (e64621){var e_65065 = e64621;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,563,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__64595_65023,chunk__64596_65024,count__64597_65025,i__64598_65026,e_65065,env_65062,action_65063,vec__64617_65059,remote_65060,value_65061,seq__64595_65051__$1,temp__5804__auto___65049,map__64592,map__64592__$1,element,idx,progress,dispatch,get_env,map__64589,map__64589__$1,tx_node,elements){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_65065,"Progress action threw an exception for txn element",element], null);
});})(seq__64595_65023,chunk__64596_65024,count__64597_65025,i__64598_65026,e_65065,env_65062,action_65063,vec__64617_65059,remote_65060,value_65061,seq__64595_65051__$1,temp__5804__auto___65049,map__64592,map__64592__$1,element,idx,progress,dispatch,get_env,map__64589,map__64589__$1,tx_node,elements))
,null)),null,-1515694823);
}} else {
}


var G__65066 = cljs.core.next(seq__64595_65051__$1);
var G__65067 = null;
var G__65068 = (0);
var G__65069 = (0);
seq__64595_65023 = G__65066;
chunk__64596_65024 = G__65067;
count__64597_65025 = G__65068;
i__64598_65026 = G__65069;
continue;
}
} else {
}
}
break;
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));
});})(get_env,map__64589,map__64589__$1,tx_node,elements))
,tx_node,elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.process_tx_node_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$process_tx_node_BANG_(app__$1,p__64625){
var map__64626 = p__64625;
var map__64626__$1 = (((((!((map__64626 == null))))?(((((map__64626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64626):map__64626);
var tx_node = map__64626__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64626__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var optimistic_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869).cljs$core$IFn$_invoke$arity$1(options));
if(com.fulcrologic.fulcro.algorithms.tx_processing.fully_complete_QMARK_(app__$1,tx_node)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.distribute_results_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.update_progress_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.queue_sends_BANG_(app__$1,(function (){var G__64630 = tx_node;
var G__64630__$1 = ((optimistic_QMARK_)?com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_(app__$1,G__64630):G__64630);
if((!(optimistic_QMARK_))){
return com.fulcrologic.fulcro.algorithms.tx_processing.advance_actions_BANG_(app__$1,G__64630__$1);
} else {
return G__64630__$1;
}
})())));
}
});
com.fulcrologic.fulcro.algorithms.tx_processing.requested_refreshes = (function com$fulcrologic$fulcro$algorithms$tx_processing$requested_refreshes(app__$1,queue){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (outer_acc,tx_node){
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,tx_node);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (env){
return (function (acc,element){
var map__64632 = element;
var map__64632__$1 = (((((!((map__64632 == null))))?(((((map__64632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64632):map__64632);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64632__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var refresh = new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(dispatch);
if(cljs.core.truth_(refresh)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.set((refresh.cljs$core$IFn$_invoke$arity$1 ? refresh.cljs$core$IFn$_invoke$arity$1(env) : refresh.call(null,env))));
} else {
return acc;
}
});})(env))
,outer_acc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330).cljs$core$IFn$_invoke$arity$1(tx_node));
}),cljs.core.PersistentHashSet.EMPTY,queue);
});
/**
 * Given a tx node and the set of legal remotes: returns a set of remotes that are active on that node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.remotes_active_on_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$remotes_active_on_node(p__64636,remotes){
var map__64637 = p__64636;
var map__64637__$1 = (((((!((map__64637 == null))))?(((((map__64637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64637):map__64637);
var tx_node = map__64637__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64637__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
var active_on_element = ((function (map__64637,map__64637__$1,tx_node,elements){
return (function (p__64639){
var map__64641 = p__64639;
var map__64641__$1 = (((((!((map__64641 == null))))?(((((map__64641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64641):map__64641);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64641__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64641__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var remotes__$1 = cljs.core.set(remotes);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remotes__$1,cljs.core.set(cljs.core.keys(dispatch))),complete_QMARK_);
});})(map__64637,map__64637__$1,tx_node,elements))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (active_on_element,map__64637,map__64637__$1,tx_node,elements){
return (function (acc,ele){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(acc,active_on_element(ele));
});})(active_on_element,map__64637,map__64637__$1,tx_node,elements))
,cljs.core.PersistentHashSet.EMPTY,elements);
});
/**
 * Calculate which remotes still have network activity to do on the given active queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.active_remotes = (function com$fulcrologic$fulcro$algorithms$tx_processing$active_remotes(queue,remotes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ra,n){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(ra,com.fulcrologic.fulcro.algorithms.tx_processing.remotes_active_on_node(n,remotes));
}),cljs.core.PersistentHashSet.EMPTY,queue);
});
/**
 * Run through the active queue and do a processing step.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$process_queue_BANG_(p__64648){
var map__64649 = p__64648;
var map__64649__$1 = (((((!((map__64649 == null))))?(((((map__64649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64649):map__64649);
var app__$1 = map__64649__$1;
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64649__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64649__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var new_queue = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__64649,map__64649__$1,app__$1,state_atom,runtime_atom){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$process_queue_BANG__$__STAR_pstep(new_queue,n){
var temp__5802__auto__ = com.fulcrologic.fulcro.algorithms.tx_processing.process_tx_node_BANG_(app__$1,n);
if(cljs.core.truth_(temp__5802__auto__)){
var new_node = temp__5802__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_queue,new_node);
} else {
return new_queue;
}
});})(map__64649,map__64649__$1,app__$1,state_atom,runtime_atom))
,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom)));
var accumulate = ((function (new_queue,map__64649,map__64649__$1,app__$1,state_atom,runtime_atom){
return (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});})(new_queue,map__64649,map__64649__$1,app__$1,state_atom,runtime_atom))
;
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
var explicit_refresh = com.fulcrologic.fulcro.algorithms.tx_processing.requested_refreshes(app__$1,new_queue);
var remotes_active_QMARK_ = com.fulcrologic.fulcro.algorithms.tx_processing.active_remotes(new_queue,remotes);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),remotes_active_QMARK_);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),new_queue);

if(cljs.core.seq(explicit_refresh)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([explicit_refresh], 0));
} else {
}

(schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : schedule_render_BANG_.call(null,app__$1));

return null;
});

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.tx_processing.js.map
