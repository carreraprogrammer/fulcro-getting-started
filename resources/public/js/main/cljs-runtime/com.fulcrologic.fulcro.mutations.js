goog.provide('com.fulcrologic.fulcro.mutations');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom.events');
goog.require('ghostwheel.core');
goog.require('edn_query_language.core');
goog.require('taoensso.timbre');
goog.require('taoensso.encore');
goog.require('cljs.spec.alpha');
goog.require('com.fulcrologic.fulcro.algorithms.data_targeting');
goog.require('com.fulcrologic.fulcro.algorithms.merge');
goog.require('com.fulcrologic.fulcro.algorithms.lookup');
goog.require('com.fulcrologic.fulcro.algorithms.tempid');
goog.require('clojure.string');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","env","com.fulcrologic.fulcro.mutations/env",1382453742),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","state","com.fulcrologic.fulcro.mutations/state",1239206318),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","state","com.fulcrologic.fulcro.mutations/state",1239206318),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__62772){
return cljs.core.map_QMARK_(G__62772);
}),(function (G__62772){
return cljs.core.contains_QMARK_(G__62772,new cljs.core.Keyword(null,"state","state",-1988618099));
}),(function (G__62772){
return cljs.core.contains_QMARK_(G__62772,new cljs.core.Keyword(null,"app","app",-560961707));
})], null),(function (G__62772){
return ((cljs.core.map_QMARK_(G__62772)) && (cljs.core.contains_QMARK_(G__62772,new cljs.core.Keyword(null,"state","state",-1988618099))) && (cljs.core.contains_QMARK_(G__62772,new cljs.core.Keyword(null,"app","app",-560961707))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","state","com.fulcrologic.fulcro.mutations/state",1239206318),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"app","app",-560961707)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"state","state",-1988618099))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"app","app",-560961707)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","returning","com.fulcrologic.fulcro.mutations/returning",-1484421614),new cljs.core.Symbol("com.fulcrologic.fulcro.components","component-class?","com.fulcrologic.fulcro.components/component-class?",425799109,null),com.fulcrologic.fulcro.components.component_class_QMARK_);

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
com.fulcrologic.fulcro.mutations.Mutation = (function (sym){
this.sym = sym;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
com.fulcrologic.fulcro.mutations.Mutation.prototype.call = (function() {
var G__62978 = null;
var G__62978__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var G__62779 = cljs.core.PersistentArrayMap.EMPTY;
return (this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(G__62779) : this$.call(null,G__62779));
});
var G__62978__2 = (function (self__,args){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new cljs.core.List(null,self__.sym,(new cljs.core.List(null,args,null,(1),null)),(2),null));
});
G__62978 = function(self__,args){
switch(arguments.length){
case 1:
return G__62978__1.call(this,self__);
case 2:
return G__62978__2.call(this,self__,args);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__62978.cljs$core$IFn$_invoke$arity$1 = G__62978__1;
G__62978.cljs$core$IFn$_invoke$arity$2 = G__62978__2;
return G__62978;
})()
;

com.fulcrologic.fulcro.mutations.Mutation.prototype.apply = (function (self__,args62778){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args62778)));
});

com.fulcrologic.fulcro.mutations.Mutation.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var G__62784 = cljs.core.PersistentArrayMap.EMPTY;
return (this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(G__62784) : this$.call(null,G__62784));
});

com.fulcrologic.fulcro.mutations.Mutation.prototype.cljs$core$IFn$_invoke$arity$1 = (function (args){
var self__ = this;
var this$ = this;
return (new cljs.core.List(null,self__.sym,(new cljs.core.List(null,args,null,(1),null)),(2),null));
});

com.fulcrologic.fulcro.mutations.Mutation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
});

com.fulcrologic.fulcro.mutations.Mutation.cljs$lang$type = true;

com.fulcrologic.fulcro.mutations.Mutation.cljs$lang$ctorStr = "com.fulcrologic.fulcro.mutations/Mutation";

com.fulcrologic.fulcro.mutations.Mutation.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.fulcrologic.fulcro.mutations/Mutation");
});

/**
 * Positional factory function for com.fulcrologic.fulcro.mutations/Mutation.
 */
com.fulcrologic.fulcro.mutations.__GT_Mutation = (function com$fulcrologic$fulcro$mutations$__GT_Mutation(sym){
return (new com.fulcrologic.fulcro.mutations.Mutation(sym));
});

/**
 * A handler for mutation network results that will place an error, if detected in env, on the data at `ref`.
 *   Errors are placed at `k` (defaults to `::m/mutation-error`).
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Swaps against app state and returns `env`.
 */
com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_ = (function com$fulcrologic$fulcro$mutations$update_errors_on_ui_component_BANG_(var_args){
var G__62786 = arguments.length;
switch (G__62786) {
case 1:
return com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (env){
return com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","mutation-error","com.fulcrologic.fulcro.mutations/mutation-error",1667800978));
});

com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (env,k){
var map__62787 = env;
var map__62787__$1 = (((((!((map__62787 == null))))?(((((map__62787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62787):map__62787);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62787__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62787__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62787__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62787__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var remote_error_QMARK_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_(ref)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (map__62787,map__62787__$1,app__$1,state,result,ref,remote_error_QMARK_){
return (function (s){
if(cljs.core.truth_((function (){var G__62789 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(env);
return (remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1(G__62789) : remote_error_QMARK_.call(null,G__62789));
})())){
return cljs.core.assoc_in(s,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,k),result);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(s,ref,cljs.core.dissoc,k);
}
});})(map__62787,map__62787__$1,app__$1,state,result,ref,remote_error_QMARK_))
);
} else {
}

return env;
});

com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * When there is a `global-error-action` defined on the application, this function will checks for errors in the given
 *   mutation `env`. If any are found then it will call the global error action function with `env`.
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Always returns `env`.
 */
com.fulcrologic.fulcro.mutations.trigger_global_error_action_BANG_ = (function com$fulcrologic$fulcro$mutations$trigger_global_error_action_BANG_(env){
var map__62790 = env;
var map__62790__$1 = (((((!((map__62790 == null))))?(((((map__62790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62790):map__62790);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62790__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62790__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var b2__46703__auto___63010 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"global-error-action","global-error-action",-924822372));
if(cljs.core.truth_(b2__46703__auto___63010)){
var global_error_action_63011 = b2__46703__auto___63010;
var b2__46703__auto___63013__$1 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_(b2__46703__auto___63013__$1)){
var remote_error_QMARK__63015 = b2__46703__auto___63013__$1;
var b2__46703__auto___63016__$2 = (remote_error_QMARK__63015.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK__63015.cljs$core$IFn$_invoke$arity$1(result) : remote_error_QMARK__63015.call(null,result));
if(cljs.core.truth_(b2__46703__auto___63016__$2)){
var __63018 = b2__46703__auto___63016__$2;
(global_error_action_63011.cljs$core$IFn$_invoke$arity$1 ? global_error_action_63011.cljs$core$IFn$_invoke$arity$1(env) : global_error_action_63011.call(null,env));
} else {
}
} else {
}
} else {
}

return env;
});
/**
 * Looks for network mutation result in `env`, checks it against the global definition of remote errors.  If there
 *   is an error and the mutation has defined an `error-action` section, then it calls it; otherwise, if the mutation
 *   has an `ok-action` it calls that.
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Returns env.
 */
com.fulcrologic.fulcro.mutations.dispatch_ok_error_actions_BANG_ = (function com$fulcrologic$fulcro$mutations$dispatch_ok_error_actions_BANG_(env){
var map__62792 = env;
var map__62792__$1 = (((((!((map__62792 == null))))?(((((map__62792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62792):map__62792);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62792__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62792__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62792__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var map__62793 = dispatch;
var map__62793__$1 = (((((!((map__62793 == null))))?(((((map__62793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62793):map__62793);
var ok_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62793__$1,new cljs.core.Keyword(null,"ok-action","ok-action",1253795573));
var error_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62793__$1,new cljs.core.Keyword(null,"error-action","error-action",-1147840498));
var remote_error_QMARK_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_((remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : remote_error_QMARK_.call(null,result)))){
if(cljs.core.truth_(error_action)){
(error_action.cljs$core$IFn$_invoke$arity$1 ? error_action.cljs$core$IFn$_invoke$arity$1(env) : error_action.call(null,env));
} else {
}
} else {
if(cljs.core.truth_(ok_action)){
(ok_action.cljs$core$IFn$_invoke$arity$1 ? ok_action.cljs$core$IFn$_invoke$arity$1(env) : ok_action.call(null,env));
} else {
}
}

return env;
});
/**
 * If there is a successful result from the remote mutation in `env` this function will merge it with app state
 *   (if there was a mutation join query), and will also rewrite any tempid remaps that were returned
 *   in all of the possible locations they might be in both app database and runtime application state (e.g. network queues).
 * 
 *   Typically used as part of the construction of a global default result handler for mutations.
 * 
 *   Returns env.
 */
com.fulcrologic.fulcro.mutations.integrate_mutation_return_value_BANG_ = (function com$fulcrologic$fulcro$mutations$integrate_mutation_return_value_BANG_(env){
var map__62799 = env;
var map__62799__$1 = (((((!((map__62799 == null))))?(((((map__62799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62799):map__62799);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62799__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62799__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62799__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var map__62800 = result;
var map__62800__$1 = (((((!((map__62800 == null))))?(((((map__62800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62800):map__62800);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62800__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var transaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62800__$1,new cljs.core.Keyword(null,"transaction","transaction",1777321997));
var remote_error_QMARK_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_((remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : remote_error_QMARK_.call(null,result)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,com.fulcrologic.fulcro.algorithms.merge.merge_mutation_joins,transaction,body);

com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids_BANG_(app__$1,body);
}

return env;
});
/**
 * The default Fulcro result action for `defmutation`, which can be overridden when you create your `app/fulcro-app`.
 * 
 *   This function is the following composition of operations from this same namespace:
 * 
 *   (-> env
 *  (update-errors-on-ui-component! ::mutation-error)
 *  (trigger-global-error-action!)
 *  (dispatch-ok-error-actions!)
 *  (integrate-mutation-return-value!))
 * 
 *   This function returns `env`, so it can be used as part of the chain in your own definition of a "default"
 *   mutation result action.
 *   
 */
com.fulcrologic.fulcro.mutations.default_result_action_BANG_ = (function com$fulcrologic$fulcro$mutations$default_result_action_BANG_(env){
return com.fulcrologic.fulcro.mutations.integrate_mutation_return_value_BANG_(com.fulcrologic.fulcro.mutations.dispatch_ok_error_actions_BANG_(com.fulcrologic.fulcro.mutations.trigger_global_error_action_BANG_(com.fulcrologic.fulcro.mutations.update_errors_on_ui_component_BANG_.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","mutation-error","com.fulcrologic.fulcro.mutations/mutation-error",1667800978)))));
});
com.fulcrologic.fulcro.mutations.mutation_declaration_QMARK_ = (function com$fulcrologic$fulcro$mutations$mutation_declaration_QMARK_(expr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.mutations.Mutation,cljs.core.type(expr));
});
/**
 * Return the real symbol (for mutation dispatch) of `mutation`, which can be a symbol (this function is then identity)
 * or a mutation-declaration.
 */
com.fulcrologic.fulcro.mutations.mutation_symbol = (function com$fulcrologic$fulcro$mutations$mutation_symbol(mutation){
if(com.fulcrologic.fulcro.mutations.mutation_declaration_QMARK_(mutation)){
return cljs.core.first((mutation.cljs$core$IFn$_invoke$arity$0 ? mutation.cljs$core$IFn$_invoke$arity$0() : mutation.call(null)));
} else {
return mutation;
}
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.mutations !== 'undefined') && (typeof com.fulcrologic.fulcro.mutations.mutate !== 'undefined')){
} else {
com.fulcrologic.fulcro.mutations.mutate = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__62809 = cljs.core.get_global_hierarchy;
return (fexpr__62809.cljs$core$IFn$_invoke$arity$0 ? fexpr__62809.cljs$core$IFn$_invoke$arity$0() : fexpr__62809.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.fulcro.mutations","mutate"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (env){
return new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
/**
 * 
 *   mutation: A convenience helper, generally used 'bit twiddle' the data on a particular database table (using the component's ident).
 *   Specifically, merge the given `params` into the state of the database object at the component's ident.
 *   In general, it is recommended this be used for ui-only properties that have no real use outside of the component.
 *   
 */
com.fulcrologic.fulcro.mutations.set_props = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null),(function (fulcro_mutation_env_symbol){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (params){
return (function com$fulcrologic$fulcro$mutations$action(p__62812){
var map__62813 = p__62812;
var map__62813__$1 = (((((!((map__62813 == null))))?(((((map__62813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62813):map__62813);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62813__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62813__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
if((ref == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,166,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__62813,map__62813__$1,state,ref,params){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui/set-props requires component to have an ident."], null);
});})(map__62813,map__62813__$1,state,ref,params))
,null)),null,-1257281155);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,ref,((function (map__62813,map__62813__$1,state,ref,params){
return (function (st){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([st,params], 0));
});})(map__62813,map__62813__$1,state,ref,params))
);

return null;
});})(params))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (params){
return (function (env){
var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(params))
], null);
}));
/**
 * mutation: A helper method that toggles the true/false nature of a component's state by ident.
 *    Use for local UI data only. Use your own mutations for things that have a good abstract meaning. 
 */
com.fulcrologic.fulcro.mutations.toggle = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","toggle","com.fulcrologic.fulcro.mutations/toggle",-299192620,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","toggle","com.fulcrologic.fulcro.mutations/toggle",-299192620,null),(function (fulcro_mutation_env_symbol){
var map__62820 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__62820__$1 = (((((!((map__62820 == null))))?(((((map__62820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62820):map__62820);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62820__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__62820,map__62820__$1,field){
return (function com$fulcrologic$fulcro$mutations$action(p__62823){
var map__62824 = p__62823;
var map__62824__$1 = (((((!((map__62824 == null))))?(((((map__62824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62824):map__62824);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62824__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62824__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
if((ref == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,175,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__62824,map__62824__$1,state,ref,map__62820,map__62820__$1,field){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui/toggle requires component to have an ident."], null);
});})(map__62824,map__62824__$1,state,ref,map__62820,map__62820__$1,field))
,null)),null,-555660519);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,field),cljs.core.not);

return null;
});})(map__62820,map__62820__$1,field))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__62820,map__62820__$1,field){
return (function (env){
var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__62820,map__62820__$1,field))
], null);
}));
com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__62831){
var map__62832 = p__62831;
var map__62832__$1 = (((((!((map__62832 == null))))?(((((map__62832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62832):map__62832);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62832__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.mutations",null,179,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__62832,map__62832__$1,ast){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unknown app state mutation. Have you required the file with your mutations?",new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast)], null);
});})(map__62832,map__62832__$1,ast))
,null)),null,-780809676);
}));
/**
 * Toggle the given boolean `field` on the specified component. It is recommended you use this function only on
 *   UI-related data (e.g. form checkbox checked status) and write clear top-level transactions for anything more complicated.
 */
com.fulcrologic.fulcro.mutations.toggle_BANG_ = (function com$fulcrologic$fulcro$mutations$toggle_BANG_(comp,field){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(comp,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","toggle","com.fulcrologic.fulcro.mutations/toggle",-299192620,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"field","field",-1302436500),null,(1),null)),(new cljs.core.List(null,field,null,(1),null)))))),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
});
/**
 * Set a raw value on the given `field` of a `component`. It is recommended you use this function only on
 *   UI-related data (e.g. form inputs that are used by the UI, and not persisted data). Changes made via these
 *   helpers are compressed in the history.
 */
com.fulcrologic.fulcro.mutations.set_value_BANG_ = (function com$fulcrologic$fulcro$mutations$set_value_BANG_(component,field,value){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(component,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null),null,(1),null)),(new cljs.core.List(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([field,value]),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
});
/**
 * Helper for set-integer!, use that instead. It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 */
com.fulcrologic.fulcro.mutations.ensure_integer = (function com$fulcrologic$fulcro$mutations$ensure_integer(v){
var rv = parseInt(v);
if(cljs.core.truth_(isNaN(rv))){
return (0);
} else {
return rv;
}
});
/**
 * Set the given integer on the given `field` of a `component`. Allows same parameters as `set-string!`.
 * 
 * It is recommended you use this function only on UI-related data (e.g. data that is used for display purposes)
 * and write clear top-level transactions for anything else. Calls to this are compressed in history.
 */
com.fulcrologic.fulcro.mutations.set_integer_BANG_ = (function com$fulcrologic$fulcro$mutations$set_integer_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63110 = arguments.length;
var i__4731__auto___63111 = (0);
while(true){
if((i__4731__auto___63111 < len__4730__auto___63110)){
args__4736__auto__.push((arguments[i__4731__auto___63111]));

var G__63114 = (i__4731__auto___63111 + (1));
i__4731__auto___63111 = G__63114;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__62855){
var map__62856 = p__62855;
var map__62856__$1 = (((((!((map__62856 == null))))?(((((map__62856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62856):map__62856);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62856__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62856__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = event;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var and__4120__auto____$1 = event;
if(cljs.core.truth_(and__4120__auto____$1)){
return value;
} else {
return and__4120__auto____$1;
}
})());
} else {
return and__4120__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = com.fulcrologic.fulcro.mutations.ensure_integer((cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value));
return com.fulcrologic.fulcro.mutations.set_value_BANG_(component,field,value__$1);
});

com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.fulcrologic.fulcro.mutations.set_integer_BANG_.cljs$lang$applyTo = (function (seq62849){
var G__62850 = cljs.core.first(seq62849);
var seq62849__$1 = cljs.core.next(seq62849);
var G__62851 = cljs.core.first(seq62849__$1);
var seq62849__$2 = cljs.core.next(seq62849__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62850,G__62851,seq62849__$2);
});

com.fulcrologic.fulcro.mutations.ensure_double = (function com$fulcrologic$fulcro$mutations$ensure_double(v){
var rv = parseFloat(v);
if(cljs.core.truth_(isNaN(rv))){
return (0);
} else {
return rv;
}
});
/**
 * Set the given double on the given `field` of a `component`. Allows same parameters as `set-string!`.
 * 
 * It is recommended you use this function only on UI-related data (e.g. data that is used for display purposes)
 * and write clear top-level transactions for anything else. Calls to this are compressed in history.
 */
com.fulcrologic.fulcro.mutations.set_double_BANG_ = (function com$fulcrologic$fulcro$mutations$set_double_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63137 = arguments.length;
var i__4731__auto___63138 = (0);
while(true){
if((i__4731__auto___63138 < len__4730__auto___63137)){
args__4736__auto__.push((arguments[i__4731__auto___63138]));

var G__63141 = (i__4731__auto___63138 + (1));
i__4731__auto___63138 = G__63141;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__62887){
var map__62888 = p__62887;
var map__62888__$1 = (((((!((map__62888 == null))))?(((((map__62888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62888):map__62888);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62888__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62888__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = event;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var and__4120__auto____$1 = event;
if(cljs.core.truth_(and__4120__auto____$1)){
return value;
} else {
return and__4120__auto____$1;
}
})());
} else {
return and__4120__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = com.fulcrologic.fulcro.mutations.ensure_double((cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value));
return com.fulcrologic.fulcro.mutations.set_value_BANG_(component,field,value__$1);
});

com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.fulcrologic.fulcro.mutations.set_double_BANG_.cljs$lang$applyTo = (function (seq62874){
var G__62875 = cljs.core.first(seq62874);
var seq62874__$1 = cljs.core.next(seq62874);
var G__62876 = cljs.core.first(seq62874__$1);
var seq62874__$2 = cljs.core.next(seq62874__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62875,G__62876,seq62874__$2);
});

/**
 * Set a string on the given `field` of a `component`. The string can be literal via named parameter `:value` or
 *   can be auto-extracted from a UI event using the named parameter `:event`
 * 
 *   Examples
 * 
 *   ```
 *   (set-string! this :ui/name :value "Hello") ; set from literal (or var)
 *   (set-string! this :ui/name :event evt) ; extract from UI event target value
 *   ```
 * 
 *   It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 *   Calls to this are compressed in history.
 */
com.fulcrologic.fulcro.mutations.set_string_BANG_ = (function com$fulcrologic$fulcro$mutations$set_string_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63154 = arguments.length;
var i__4731__auto___63155 = (0);
while(true){
if((i__4731__auto___63155 < len__4730__auto___63154)){
args__4736__auto__.push((arguments[i__4731__auto___63155]));

var G__63157 = (i__4731__auto___63155 + (1));
i__4731__auto___63155 = G__63157;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__62914){
var map__62915 = p__62914;
var map__62915__$1 = (((((!((map__62915 == null))))?(((((map__62915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62915):map__62915);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62915__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62915__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = event;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var and__4120__auto____$1 = event;
if(cljs.core.truth_(and__4120__auto____$1)){
return value;
} else {
return and__4120__auto____$1;
}
})());
} else {
return and__4120__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Supply either :event or :value","\n","(and (or event value) (not (and event value)))"].join('')));
}

var value__$1 = (cljs.core.truth_(event)?com.fulcrologic.fulcro.dom.events.target_value(event):value);
return com.fulcrologic.fulcro.mutations.set_value_BANG_(component,field,value__$1);
});

com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$lang$applyTo = (function (seq62902){
var G__62903 = cljs.core.first(seq62902);
var seq62902__$1 = cljs.core.next(seq62902);
var G__62904 = cljs.core.first(seq62902__$1);
var seq62902__$2 = cljs.core.next(seq62902__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62903,G__62904,seq62902__$2);
});

/**
 * Indicate the the remote operation will return a value of the given component type.
 * 
 *   `env` - The env of the mutation
 *   `class` - A component class that represents the return type.  You may supply a fully-qualified symbol instead of the
 *   actual class, and this method will look up the class for you (useful to avoid circular references).
 * 
 *   Returns an update `env`, and is a valid return value from mutation remote sections.
 */
com.fulcrologic.fulcro.mutations.returning = (function com$fulcrologic$fulcro$mutations$returning(env,class$){
var class$__$1 = (((((class$ instanceof cljs.core.Keyword)) || ((class$ instanceof cljs.core.Symbol))))?com.fulcrologic.fulcro.components.registry_key__GT_class(class$):class$);
var map__62924 = env;
var map__62924__$1 = (((((!((map__62924 == null))))?(((((map__62924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62924):map__62924);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62924__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62924__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__62925 = ast;
var map__62925__$1 = (((((!((map__62925 == null))))?(((((map__62925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62925):map__62925);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62925__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62925__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62925__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var updated_query = (function (){var G__62931 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(class$__$1,cljs.core.deref(state));
if(cljs.core.truth_(query)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(G__62931,((function (G__62931,map__62924,map__62924__$1,state,ast,map__62925,map__62925__$1,key,params,query,class$__$1){
return (function (p1__62922_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(query),p1__62922_SHARP_], 0));
});})(G__62931,map__62924,map__62924__$1,state,ast,map__62925,map__62925__$1,key,params,query,class$__$1))
);
} else {
return G__62931;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ast","ast",-860334068),edn_query_language.core.query__GT_ast1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([(new cljs.core.List(null,key,(new cljs.core.List(null,params,null,(1),null)),(2),null)),updated_query])], null)));
});
/**
 * Set's a target for the return value from the mutation to be merged into. This can be combined with returning to define
 *   a path to insert the new entry.
 * 
 *   `env` - The mutation env (you can thread together `returning` and `with-target`)
 *   `target` - A vector path, or any special target defined in `data-targeting` such as `append-to`.
 * 
 *   Returns an updated env (which is a valid return value from remote sections of mutations).
 *   
 */
com.fulcrologic.fulcro.mutations.with_target = (function com$fulcrologic$fulcro$mutations$with_target(p__62934,target){
var map__62935 = p__62934;
var map__62935__$1 = (((((!((map__62935 == null))))?(((((map__62935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62935):map__62935);
var env = map__62935__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62935__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__62941 = ast;
var map__62941__$1 = (((((!((map__62941 == null))))?(((((map__62941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62941):map__62941);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62941__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62941__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62941__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var targeted_query = (cljs.core.truth_(query)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(query,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140),target):cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140),target], null)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ast","ast",-860334068),edn_query_language.core.query__GT_ast1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([(new cljs.core.List(null,key,(new cljs.core.List(null,params,null,(1),null)),(2),null)),targeted_query])], null)));
});
/**
 * Modify an AST containing a single mutation, changing it's parameters to those given as an argument. Overwrites
 * any existing params of the mutation.
 * 
 * `env` - the mutation environment
 * `params` - A new map to use as the mutations parameters
 * 
 * Returns an updated `env`, which can be used as the return value from a remote section of a mutation.
 */
com.fulcrologic.fulcro.mutations.with_params = (function com$fulcrologic$fulcro$mutations$with_params(env,params){
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235)], null),params);
});

//# sourceMappingURL=com.fulcrologic.fulcro.mutations.js.map
