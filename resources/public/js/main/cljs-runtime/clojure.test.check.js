goog.provide('clojure.test.check');
goog.require('cljs.core');
goog.require('clojure.test.check.generators');
goog.require('clojure.test.check.random');
goog.require('clojure.test.check.results');
goog.require('clojure.test.check.rose_tree');
goog.require('clojure.test.check.impl');

clojure.test.check.make_rng = (function clojure$test$check$make_rng(seed){
if(cljs.core.truth_(seed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1(seed)], null);
} else {
var non_nil_seed = clojure.test.check.impl.get_current_time_millis();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [non_nil_seed,clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1(non_nil_seed)], null);
}
});
clojure.test.check.complete = (function clojure$test$check$complete(property,num_trials,seed,start_time,reporter_fn){
var time_elapsed_ms = (clojure.test.check.impl.get_current_time_millis() - start_time);
var G__45131_45204 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"complete","complete",-500388775),new cljs.core.Keyword(null,"property","property",-1114278232),property,new cljs.core.Keyword(null,"result","result",1415092211),true,new cljs.core.Keyword(null,"pass?","pass?",-424635753),true,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),num_trials,new cljs.core.Keyword(null,"time-elapsed-ms","time-elapsed-ms",-755913315),time_elapsed_ms,new cljs.core.Keyword(null,"seed","seed",68613327),seed], null);
(reporter_fn.cljs$core$IFn$_invoke$arity$1 ? reporter_fn.cljs$core$IFn$_invoke$arity$1(G__45131_45204) : reporter_fn.call(null,G__45131_45204));

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"result","result",1415092211),true,new cljs.core.Keyword(null,"pass?","pass?",-424635753),true,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),num_trials,new cljs.core.Keyword(null,"time-elapsed-ms","time-elapsed-ms",-755913315),time_elapsed_ms,new cljs.core.Keyword(null,"seed","seed",68613327),seed], null);
});
/**
 * Returns a value for the legacy :result key, which has the peculiar
 *   property of conflating returned exceptions with thrown exceptions.
 */
clojure.test.check.legacy_result = (function clojure$test$check$legacy_result(result){
if((((!((result == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === result.clojure$test$check$results$Result$))))?true:(((!result.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(clojure.test.check.results.Result,result):false)):cljs.core.native_satisfies_QMARK_(clojure.test.check.results.Result,result))){
var d = clojure.test.check.results.result_data(result);
var temp__5802__auto__ = cljs.core.find(d,new cljs.core.Keyword("clojure.test.check.properties","error","clojure.test.check.properties/error",483933635));
if(cljs.core.truth_(temp__5802__auto__)){
var vec__45138 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45138,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45138,(1),null);
if((e instanceof Error)){
return e;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Non-Error object thrown in test",cljs.core.PersistentArrayMap.EMPTY,e);
}
} else {
return clojure.test.check.results.pass_QMARK_(result);
}
} else {
return result;
}
});
/**
 * Tests `property` `num-tests` times.
 * 
 *   Takes several optional keys:
 * 
 *   `:seed`
 *  Can be used to re-run previous tests, as the seed used is returned
 *  after a test is run.
 * 
 *   `:max-size`.
 *  can be used to control the 'size' of generated values. The size will
 *  start at 0, and grow up to max-size, as the number of tests increases.
 *  Generators will use the size parameter to bound their growth. This
 *  prevents, for example, generating a five-thousand element vector on
 *  the very first test.
 * 
 *   `:reporter-fn`
 *  A callback function that will be called at various points in the test
 *  run, with a map like:
 * 
 *    ;; called after a passing trial
 *    {:type            :trial
 *     :args            [...]
 *     :num-tests       <number of tests run so far>
 *     :num-tests-total <total number of tests to be run>
 *     :seed            42
 *     :pass?           true
 *     :property        #<...>
 *     :result          true
 *     :result-data     {...}}
 * 
 *    ;; called after the first failing trial
 *    {:type         :failure
 *     :fail         [...failing args...]
 *     :failing-size 13
 *     :num-tests    <tests ran before failure found>
 *     :pass?        false
 *     :property     #<...>
 *     :result       false/exception
 *     :result-data  {...}
 *     :seed         42}
 * 
 *  It will also be called on :complete, :shrink-step and :shrunk.
 * 
 *   Examples:
 * 
 *    (def p (for-all [a gen/pos-int] (> (* a a) a)))
 * 
 *    (quick-check 100 p)
 *    (quick-check 200 p
 *                 :seed 42
 *                 :max-size 50
 *                 :reporter-fn (fn [m]
 *                                (when (= :failure (:type m))
 *                                  (println "Uh oh..."))))
 */
clojure.test.check.quick_check = (function clojure$test$check$quick_check(var_args){
var args__4736__auto__ = [];
var len__4730__auto___45214 = arguments.length;
var i__4731__auto___45215 = (0);
while(true){
if((i__4731__auto___45215 < len__4730__auto___45214)){
args__4736__auto__.push((arguments[i__4731__auto___45215]));

var G__45216 = (i__4731__auto___45215 + (1));
i__4731__auto___45215 = G__45216;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (num_tests,property,p__45145){
var map__45146 = p__45145;
var map__45146__$1 = (((((!((map__45146 == null))))?(((((map__45146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45146):map__45146);
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45146__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var max_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45146__$1,new cljs.core.Keyword(null,"max-size","max-size",-874966132),(200));
var reporter_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45146__$1,new cljs.core.Keyword(null,"reporter-fn","reporter-fn",1280520247),cljs.core.constantly(null));
var vec__45149 = clojure.test.check.make_rng(seed);
var created_seed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45149,(0),null);
var rng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45149,(1),null);
var size_seq = clojure.test.check.generators.make_size_range_seq(max_size);
var start_time = clojure.test.check.impl.get_current_time_millis();
var so_far = (0);
var size_seq__$1 = size_seq;
var rstate = rng;
while(true){
if((so_far === num_tests)){
return clojure.test.check.complete(property,num_tests,created_seed,start_time,reporter_fn);
} else {
var vec__45159 = size_seq__$1;
var seq__45160 = cljs.core.seq(vec__45159);
var first__45161 = cljs.core.first(seq__45160);
var seq__45160__$1 = cljs.core.next(seq__45160);
var size = first__45161;
var rest_size_seq = seq__45160__$1;
var vec__45162 = clojure.test.check.random.split(rstate);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45162,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45162,(1),null);
var result_map_rose = clojure.test.check.generators.call_gen(property,r1,size);
var result_map = clojure.test.check.rose_tree.root(result_map_rose);
var result = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result_map);
var args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(result_map);
var so_far__$1 = (so_far + (1));
if(cljs.core.truth_(clojure.test.check.results.pass_QMARK_(result))){
var G__45165_45242 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"num-tests-total","num-tests-total",-2113009946),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"result-data","result-data",-1724248844),new cljs.core.Keyword(null,"pass?","pass?",-424635753)],[args,num_tests,property,so_far__$1,new cljs.core.Keyword(null,"trial","trial",-677458347),seed,result,clojure.test.check.results.result_data(result),true]);
(reporter_fn.cljs$core$IFn$_invoke$arity$1 ? reporter_fn.cljs$core$IFn$_invoke$arity$1(G__45165_45242) : reporter_fn.call(null,G__45165_45242));

var G__45243 = so_far__$1;
var G__45244 = rest_size_seq;
var G__45245 = r2;
so_far = G__45243;
size_seq__$1 = G__45244;
rstate = G__45245;
continue;
} else {
return (clojure.test.check.failure.cljs$core$IFn$_invoke$arity$7 ? clojure.test.check.failure.cljs$core$IFn$_invoke$arity$7(property,result_map_rose,so_far__$1,size,created_seed,start_time,reporter_fn) : clojure.test.check.failure.call(null,property,result_map_rose,so_far__$1,size,created_seed,start_time,reporter_fn));
}
}
break;
}
});

clojure.test.check.quick_check.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clojure.test.check.quick_check.cljs$lang$applyTo = (function (seq45141){
var G__45142 = cljs.core.first(seq45141);
var seq45141__$1 = cljs.core.next(seq45141);
var G__45143 = cljs.core.first(seq45141__$1);
var seq45141__$2 = cljs.core.next(seq45141__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45142,G__45143,seq45141__$2);
});

clojure.test.check.smallest_shrink = (function clojure$test$check$smallest_shrink(total_nodes_visited,depth,smallest,start_time){
var map__45171 = smallest;
var map__45171__$1 = (((((!((map__45171 == null))))?(((((map__45171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45171):map__45171);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45171__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"total-nodes-visited","total-nodes-visited",-620132443),total_nodes_visited,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"pass?","pass?",-424635753),false,new cljs.core.Keyword(null,"result","result",1415092211),clojure.test.check.legacy_result(result),new cljs.core.Keyword(null,"result-data","result-data",-1724248844),clojure.test.check.results.result_data(result),new cljs.core.Keyword(null,"time-shrinking-ms","time-shrinking-ms",-383238219),(clojure.test.check.impl.get_current_time_millis() - start_time),new cljs.core.Keyword(null,"smallest","smallest",-152623883),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(smallest)], null);
});
/**
 * Shrinking a value produces a sequence of smaller values of the same type.
 *   Each of these values can then be shrunk. Think of this as a tree. We do a
 *   modified depth-first search of the tree:
 * 
 *   Do a non-exhaustive search for a deeper (than the root) failing example.
 *   Additional rules added to depth-first search:
 *   * If a node passes the property, you may continue searching at this depth,
 *   but not backtrack
 *   * If a node fails the property, search its children
 *   The value returned is the left-most failing example at the depth where a
 *   passing example was found.
 * 
 *   Calls reporter-fn on every shrink step.
 */
clojure.test.check.shrink_loop = (function clojure$test$check$shrink_loop(rose_tree,reporter_fn){
var start_time = clojure.test.check.impl.get_current_time_millis();
var shrinks_this_depth = clojure.test.check.rose_tree.children(rose_tree);
var nodes = shrinks_this_depth;
var current_smallest = clojure.test.check.rose_tree.root(rose_tree);
var total_nodes_visited = (0);
var depth = (0);
while(true){
if(cljs.core.empty_QMARK_(nodes)){
return clojure.test.check.smallest_shrink(total_nodes_visited,depth,current_smallest,start_time);
} else {
var head = cljs.core.first(nodes);
var tail = cljs.core.rest(nodes);
var result = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(clojure.test.check.rose_tree.root(head));
var args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(clojure.test.check.rose_tree.root(head));
var pass_QMARK_ = clojure.test.check.results.pass_QMARK_(result);
var reporter_fn_arg = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"shrink-step","shrink-step",-541828120),new cljs.core.Keyword(null,"shrinking","shrinking",2049648186),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"args","args",1315556576),args,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"pass?","pass?",-424635753),cljs.core.boolean$(pass_QMARK_),new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"result-data","result-data",-1724248844),clojure.test.check.results.result_data(result),new cljs.core.Keyword(null,"smallest","smallest",-152623883),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(current_smallest),new cljs.core.Keyword(null,"total-nodes-visited","total-nodes-visited",-620132443),total_nodes_visited], null)], null);
if(cljs.core.truth_(pass_QMARK_)){
(reporter_fn.cljs$core$IFn$_invoke$arity$1 ? reporter_fn.cljs$core$IFn$_invoke$arity$1(reporter_fn_arg) : reporter_fn.call(null,reporter_fn_arg));

var G__45266 = tail;
var G__45267 = current_smallest;
var G__45268 = (total_nodes_visited + (1));
var G__45269 = depth;
nodes = G__45266;
current_smallest = G__45267;
total_nodes_visited = G__45268;
depth = G__45269;
continue;
} else {
var new_smallest = clojure.test.check.rose_tree.root(head);
var G__45177_45270 = cljs.core.assoc_in(reporter_fn_arg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shrinking","shrinking",2049648186),new cljs.core.Keyword(null,"smallest","smallest",-152623883)], null),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(new_smallest));
(reporter_fn.cljs$core$IFn$_invoke$arity$1 ? reporter_fn.cljs$core$IFn$_invoke$arity$1(G__45177_45270) : reporter_fn.call(null,G__45177_45270));

var temp__5802__auto__ = cljs.core.seq(clojure.test.check.rose_tree.children(head));
if(temp__5802__auto__){
var children = temp__5802__auto__;
var G__45271 = children;
var G__45272 = new_smallest;
var G__45273 = (total_nodes_visited + (1));
var G__45274 = (depth + (1));
nodes = G__45271;
current_smallest = G__45272;
total_nodes_visited = G__45273;
depth = G__45274;
continue;
} else {
var G__45275 = tail;
var G__45276 = new_smallest;
var G__45277 = (total_nodes_visited + (1));
var G__45278 = depth;
nodes = G__45275;
current_smallest = G__45276;
total_nodes_visited = G__45277;
depth = G__45278;
continue;
}
}
}
break;
}
});
clojure.test.check.failure = (function clojure$test$check$failure(property,failing_rose_tree,trial_number,size,seed,start_time,reporter_fn){
var failed_after_ms = (clojure.test.check.impl.get_current_time_millis() - start_time);
var root = clojure.test.check.rose_tree.root(failing_rose_tree);
var result = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(root);
var failure_data = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"failed-after-ms","failed-after-ms",912141156),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"result-data","result-data",-1724248844),new cljs.core.Keyword(null,"failing-size","failing-size",-429562538),new cljs.core.Keyword(null,"pass?","pass?",-424635753)],[failed_after_ms,property,trial_number,seed,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(root),clojure.test.check.legacy_result(result),clojure.test.check.results.result_data(result),size,false]);
var G__45185_45279 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failure_data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"failure","failure",720415879));
(reporter_fn.cljs$core$IFn$_invoke$arity$1 ? reporter_fn.cljs$core$IFn$_invoke$arity$1(G__45185_45279) : reporter_fn.call(null,G__45185_45279));

var shrunk = clojure.test.check.shrink_loop(failing_rose_tree,((function (failed_after_ms,root,result,failure_data){
return (function (p1__45183_SHARP_){
var G__45186 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure_data,p1__45183_SHARP_], 0));
return (reporter_fn.cljs$core$IFn$_invoke$arity$1 ? reporter_fn.cljs$core$IFn$_invoke$arity$1(G__45186) : reporter_fn.call(null,G__45186));
});})(failed_after_ms,root,result,failure_data))
);
var G__45187_45280 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(failure_data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412),shrunk], 0));
(reporter_fn.cljs$core$IFn$_invoke$arity$1 ? reporter_fn.cljs$core$IFn$_invoke$arity$1(G__45187_45280) : reporter_fn.call(null,G__45187_45280));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(failure_data,new cljs.core.Keyword(null,"property","property",-1114278232)),new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412),shrunk);
});

//# sourceMappingURL=clojure.test.check.js.map
