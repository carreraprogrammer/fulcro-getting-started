goog.provide('com.fulcrologic.fulcro.inspect.inspect_client');
goog.require('cljs.core');
goog.require('edn_query_language.core');
goog.require('com.fulcrologic.fulcro.algorithms.lookup');
goog.require('goog.object');
goog.require('com.fulcrologic.fulcro.inspect.diff');
goog.require('com.fulcrologic.fulcro.inspect.transit');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.timbre');

/** @define {boolean} */
goog.define("com.fulcrologic.fulcro.inspect.inspect_client.INSPECT",false);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.tools_app_STAR_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.tools_app_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key = new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client !== 'undefined') && (typeof com.fulcrologic.fulcro.inspect.inspect_client.send_ch !== 'undefined')){
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((50000)));
}
com.fulcrologic.fulcro.inspect.inspect_client.post_message = (function com$fulcrologic$fulcro$inspect$inspect_client$post_message(type,data){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.inspect.inspect_client.send_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,data], null));
});
/**
 * Returns true when env is a cljs macro &env
 */
com.fulcrologic.fulcro.inspect.inspect_client.cljs_QMARK_ = (function com$fulcrologic$fulcro$inspect$inspect_client$cljs_QMARK_(env){
return cljs.core.boolean$(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
/**
 * Like get, but for js objects, and in CLJC. In clj, it is just `get`. In cljs it is
 *   `gobj/get`.
 */
com.fulcrologic.fulcro.inspect.inspect_client.isoget = (function com$fulcrologic$fulcro$inspect$inspect_client$isoget(var_args){
var G__53970 = arguments.length;
switch (G__53970) {
case 2:
return com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
return com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$3(obj,k,null);
});

com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,default$){
var or__4131__auto__ = (function (){var G__53983 = obj;
var G__53985 = (function (){var G__53987 = k;
if((G__53987 == null)){
return null;
} else {
return cljs.core.name(G__53987);
}
})();
return goog.object.get(G__53983,G__53985);
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$lang$maxFixedArity = 3;

com.fulcrologic.fulcro.inspect.inspect_client.app_state = (function com$fulcrologic$fulcro$inspect$inspect_client$app_state(app__$1){
var G__53992 = app__$1;
var G__53992__$1 = (((G__53992 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__53992));
if((G__53992__$1 == null)){
return null;
} else {
return cljs.core.deref(G__53992__$1);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom = (function com$fulcrologic$fulcro$inspect$inspect_client$runtime_atom(app__$1){
var G__53996 = app__$1;
if((G__53996 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__53996);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.state_atom = (function com$fulcrologic$fulcro$inspect$inspect_client$state_atom(app__$1){
var G__54001 = app__$1;
if((G__54001 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__54001);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.app_uuid = (function com$fulcrologic$fulcro$inspect$inspect_client$app_uuid(app__$1){
var G__54003 = app__$1;
var G__54003__$1 = (((G__54003 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__54003));
var G__54003__$2 = (((G__54003__$1 == null))?null:cljs.core.deref(G__54003__$1));
if((G__54003__$2 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__54003__$2,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.remotes = (function com$fulcrologic$fulcro$inspect$inspect_client$remotes(app__$1){
var G__54006 = com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom(app__$1);
var G__54006__$1 = (((G__54006 == null))?null:cljs.core.deref(G__54006));
if((G__54006__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(G__54006__$1);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.app_id = (function com$fulcrologic$fulcro$inspect$inspect_client$app_id(app__$1){
var G__54009 = com.fulcrologic.fulcro.inspect.inspect_client.app_state(app__$1);
if((G__54009 == null)){
return null;
} else {
return new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233).cljs$core$IFn$_invoke$arity$1(G__54009);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.fulcro_app_id = (function com$fulcrologic$fulcro$inspect$inspect_client$fulcro_app_id(app__$1){
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app__$1);
});
com.fulcrologic.fulcro.inspect.inspect_client.get_component_name = (function com$fulcrologic$fulcro$inspect$inspect_client$get_component_name(component){
if(cljs.core.truth_(component)){
var G__54012 = com.fulcrologic.fulcro.inspect.inspect_client.isoget.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.Keyword(null,"fulcro$options","fulcro$options",-1332196811));
if((G__54012 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(G__54012);
}
} else {
return null;
}
});
com.fulcrologic.fulcro.inspect.inspect_client.comp_transact_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$comp_transact_BANG_(app__$1,tx,options){
var tx_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"tx!","tx!",-1308106263));
return (tx_BANG_.cljs$core$IFn$_invoke$arity$3 ? tx_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,tx,options) : tx_BANG_.call(null,app__$1,tx,options));
});
com.fulcrologic.fulcro.inspect.inspect_client.MAX_HISTORY_SIZE = (100);
com.fulcrologic.fulcro.inspect.inspect_client.fixed_size_assoc = (function com$fulcrologic$fulcro$inspect$inspect_client$fixed_size_assoc(size,db,key,value){
var map__54019 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,key,value),new cljs.core.Keyword("fulcro.inspect.client","history","fulcro.inspect.client/history",1037107964),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),key);
var map__54019__$1 = (((((!((map__54019 == null))))?(((((map__54019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54019):map__54019);
var db_SINGLEQUOTE_ = map__54019__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54019__$1,new cljs.core.Keyword("fulcro.inspect.client","history","fulcro.inspect.client/history",1037107964));
if((cljs.core.count(history) > size)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db_SINGLEQUOTE_,cljs.core.first(history)),new cljs.core.Keyword("fulcro.inspect.client","history","fulcro.inspect.client/history",1037107964),((function (map__54019,map__54019__$1,db_SINGLEQUOTE_,history){
return (function (p1__54016_SHARP_){
return cljs.core.vec(cljs.core.next(p1__54016_SHARP_));
});})(map__54019,map__54019__$1,db_SINGLEQUOTE_,history))
);
} else {
return db_SINGLEQUOTE_;
}
});
/**
 * Record a snapshot of history on the app itself for inspect to reference via events to do things like preview
 * history.
 */
com.fulcrologic.fulcro.inspect.inspect_client.update_state_history = (function com$fulcrologic$fulcro$inspect$inspect_client$update_state_history(app__$1,state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom(app__$1),cljs.core.update,new cljs.core.Keyword("fulcro.inspect.client","state-history","fulcro.inspect.client/state-history",2111486187),(function (p1__54024_SHARP_){
return com.fulcrologic.fulcro.inspect.inspect_client.fixed_size_assoc(com.fulcrologic.fulcro.inspect.inspect_client.MAX_HISTORY_SIZE,p1__54024_SHARP_,cljs.core.hash(state),state);
}));
});
com.fulcrologic.fulcro.inspect.inspect_client.db_from_history = (function com$fulcrologic$fulcro$inspect$inspect_client$db_from_history(app__$1,state_hash){
var G__54028 = com.fulcrologic.fulcro.inspect.inspect_client.runtime_atom(app__$1);
var G__54028__$1 = (((G__54028 == null))?null:cljs.core.deref(G__54028));
var G__54028__$2 = (((G__54028__$1 == null))?null:new cljs.core.Keyword("fulcro.inspect.client","state-history","fulcro.inspect.client/state-history",2111486187).cljs$core$IFn$_invoke$arity$1(G__54028__$1));
if((G__54028__$2 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__54028__$2,state_hash);
}
});
/**
 * Notify Inspect that the database changed
 */
com.fulcrologic.fulcro.inspect.inspect_client.db_changed_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$db_changed_BANG_(app__$1,old_state,new_state){
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
com.fulcrologic.fulcro.inspect.inspect_client.update_state_history(app__$1,new_state);

var diff = com.fulcrologic.fulcro.inspect.diff.diff(old_state,new_state);
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","db-update","fulcro.inspect.client/db-update",587693556),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.client","prev-state-hash","fulcro.inspect.client/prev-state-hash",413242088),cljs.core.hash(old_state),new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(new_state),new cljs.core.Keyword("fulcro.inspect.client","state-delta","fulcro.inspect.client/state-delta",1518835964),diff]));
});
com.fulcrologic.fulcro.inspect.inspect_client.event_data = (function com$fulcrologic$fulcro$inspect$inspect_client$event_data(event){
var G__54033 = event;
var G__54033__$1 = (((G__54033 == null))?null:goog.object.getValueByKeys(G__54033,"data","fulcro-inspect-devtool-message"));
if((G__54033__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.inspect.transit.read(G__54033__$1);
}
});
com.fulcrologic.fulcro.inspect.inspect_client.start_send_message_loop = (function com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop(){
var c__51656__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51656__auto__){
return (function (){
var f__51657__auto__ = (function (){var switch__50648__auto__ = ((function (c__51656__auto__){
return (function (state_54065){
var state_val_54066 = (state_54065[(1)]);
if((state_val_54066 === (1))){
var state_54065__$1 = state_54065;
var statearr_54068_54339 = state_54065__$1;
(statearr_54068_54339[(2)] = null);

(statearr_54068_54339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54066 === (2))){
var state_54065__$1 = state_54065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54065__$1,(4),com.fulcrologic.fulcro.inspect.inspect_client.send_ch);
} else {
if((state_val_54066 === (3))){
var inst_54062 = (state_54065[(2)]);
var state_54065__$1 = state_54065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54065__$1,inst_54062);
} else {
if((state_val_54066 === (4))){
var inst_54039 = (state_54065[(7)]);
var inst_54039__$1 = (state_54065[(2)]);
var state_54065__$1 = (function (){var statearr_54071 = state_54065;
(statearr_54071[(7)] = inst_54039__$1);

return statearr_54071;
})();
if(cljs.core.truth_(inst_54039__$1)){
var statearr_54072_54349 = state_54065__$1;
(statearr_54072_54349[(1)] = (5));

} else {
var statearr_54073_54350 = state_54065__$1;
(statearr_54073_54350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54066 === (5))){
var inst_54039 = (state_54065[(7)]);
var inst_54045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54039,(0),null);
var inst_54046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54039,(1),null);
var inst_54047 = [new cljs.core.Keyword(null,"fulcro-inspect-remote-message","fulcro-inspect-remote-message",1518065210)];
var inst_54048 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)];
var inst_54049 = (new Date());
var inst_54050 = [inst_54045,inst_54046,inst_54049];
var inst_54051 = cljs.core.PersistentHashMap.fromArrays(inst_54048,inst_54050);
var inst_54052 = com.fulcrologic.fulcro.inspect.transit.write(inst_54051);
var inst_54053 = [inst_54052];
var inst_54054 = cljs.core.PersistentHashMap.fromArrays(inst_54047,inst_54053);
var inst_54055 = cljs.core.clj__GT_js(inst_54054);
var inst_54056 = window.postMessage(inst_54055,"*");
var state_54065__$1 = (function (){var statearr_54075 = state_54065;
(statearr_54075[(8)] = inst_54056);

return statearr_54075;
})();
var statearr_54079_54354 = state_54065__$1;
(statearr_54079_54354[(2)] = null);

(statearr_54079_54354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54066 === (6))){
var state_54065__$1 = state_54065;
var statearr_54081_54355 = state_54065__$1;
(statearr_54081_54355[(2)] = null);

(statearr_54081_54355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54066 === (7))){
var inst_54060 = (state_54065[(2)]);
var state_54065__$1 = state_54065;
var statearr_54082_54357 = state_54065__$1;
(statearr_54082_54357[(2)] = inst_54060);

(statearr_54082_54357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__51656__auto__))
;
return ((function (switch__50648__auto__,c__51656__auto__){
return (function() {
var com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50649__auto__ = null;
var com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50649__auto____0 = (function (){
var statearr_54086 = [null,null,null,null,null,null,null,null,null];
(statearr_54086[(0)] = com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50649__auto__);

(statearr_54086[(1)] = (1));

return statearr_54086;
});
var com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50649__auto____1 = (function (state_54065){
while(true){
var ret_value__50650__auto__ = (function (){try{while(true){
var result__50651__auto__ = switch__50648__auto__(state_54065);
if(cljs.core.keyword_identical_QMARK_(result__50651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50651__auto__;
}
break;
}
}catch (e54089){if((e54089 instanceof Object)){
var ex__50652__auto__ = e54089;
var statearr_54090_54367 = state_54065;
(statearr_54090_54367[(5)] = ex__50652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54089;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54369 = state_54065;
state_54065 = G__54369;
continue;
} else {
return ret_value__50650__auto__;
}
break;
}
});
com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50649__auto__ = function(state_54065){
switch(arguments.length){
case 0:
return com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50649__auto____0.call(this);
case 1:
return com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50649__auto____1.call(this,state_54065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50649__auto____0;
com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50649__auto____1;
return com$fulcrologic$fulcro$inspect$inspect_client$start_send_message_loop_$_state_machine__50649__auto__;
})()
;})(switch__50648__auto__,c__51656__auto__))
})();
var state__51658__auto__ = (function (){var statearr_54091 = (f__51657__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51657__auto__.cljs$core$IFn$_invoke$arity$0() : f__51657__auto__.call(null));
(statearr_54091[(6)] = c__51656__auto__);

return statearr_54091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51658__auto__);
});})(c__51656__auto__))
);

return c__51656__auto__;
});
com.fulcrologic.fulcro.inspect.inspect_client.listen_local_messages = (function com$fulcrologic$fulcro$inspect$inspect_client$listen_local_messages(){
return window.addEventListener("message",(function (event){
if(cljs.core.truth_((function (){var and__4120__auto__ = (event.source === window);
if(and__4120__auto__){
return goog.object.getValueByKeys(event,"data","fulcro-inspect-devtool-message");
} else {
return and__4120__auto__;
}
})())){
var G__54093 = com.fulcrologic.fulcro.inspect.inspect_client.event_data(event);
return (com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message.cljs$core$IFn$_invoke$arity$1(G__54093) : com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message.call(null,G__54093));
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = (event.source === window);
if(and__4120__auto__){
return goog.object.getValueByKeys(event,"data","fulcro-inspect-start-consume");
} else {
return and__4120__auto__;
}
})())){
return com.fulcrologic.fulcro.inspect.inspect_client.start_send_message_loop();
} else {
return null;
}
}
}),false);
});
com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$transact_inspector_BANG_(var_args){
var G__54100 = arguments.length;
switch (G__54100) {
case 1:
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (tx){
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","transact-inspector","fulcro.inspect.client/transact-inspector",-905938352),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.client","tx","fulcro.inspect.client/tx",-815771134),tx], null));
});

com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ref,tx){
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","transact-inspector","fulcro.inspect.client/transact-inspector",-905938352),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.client","tx-ref","fulcro.inspect.client/tx-ref",-1370560773),ref,new cljs.core.Keyword("fulcro.inspect.client","tx","fulcro.inspect.client/tx",-815771134),tx], null));
});

com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$lang$maxFixedArity = 2;

com.fulcrologic.fulcro.inspect.inspect_client.dispose_app = (function com$fulcrologic$fulcro$inspect$inspect_client$dispose_app(app_uuid){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_,cljs.core.dissoc,app_uuid);

return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","dispose-app","fulcro.inspect.client/dispose-app",-574872452),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid]));
});
com.fulcrologic.fulcro.inspect.inspect_client.set_active_app = (function com$fulcrologic$fulcro$inspect$inspect_client$set_active_app(app_uuid){
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","set-active-app","fulcro.inspect.client/set-active-app",-2049837528),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid]));
});
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$send_started_BANG_(app__$1,remote,tx_id,txn){
var start = (new Date());
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-start","fulcro.inspect.ui.network/request-start",-1415257884,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.inspect.ui.network","remote","fulcro.inspect.ui.network/remote",-307593223),remote,new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),tx_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-started-at","fulcro.inspect.ui.network/request-started-at",1582455117),start,new cljs.core.Keyword("fulcro.inspect.ui.network","request-edn","fulcro.inspect.ui.network/request-edn",-1638784885),txn], null),null,(1),null)))))], null));
});
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$send_finished_BANG_(app__$1,remote,tx_id,response){
var finished = (new Date());
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-finish","fulcro.inspect.ui.network/request-finish",817834789,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),tx_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883),finished,new cljs.core.Keyword("fulcro.inspect.ui.network","response-edn","fulcro.inspect.ui.network/response-edn",221134354),response], null),null,(1),null)))))], null));
});
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$send_failed_BANG_(app__$1,tx_id,error){
var finished = (new Date());
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
return com.fulcrologic.fulcro.inspect.inspect_client.transact_inspector_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.network","history-id","fulcro.inspect.ui.network/history-id",702365090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.network","request-finish","fulcro.inspect.ui.network/request-finish",817834789,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.network","request-id","fulcro.inspect.ui.network/request-id",-2031413204),tx_id,new cljs.core.Keyword("fulcro.inspect.ui.network","request-finished-at","fulcro.inspect.ui.network/request-finished-at",-1848991883),finished,new cljs.core.Keyword("fulcro.inspect.ui.network","error","fulcro.inspect.ui.network/error",36212909),error], null),null,(1),null)))))], null));
});
com.fulcrologic.fulcro.inspect.inspect_client.handle_devtool_message = (function com$fulcrologic$fulcro$inspect$inspect_client$handle_devtool_message(p__54140){
var map__54142 = p__54140;
var map__54142__$1 = (((((!((map__54142 == null))))?(((((map__54142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54142):map__54142);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54142__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54142__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var G__54149 = type;
var G__54149__$1 = (((G__54149 instanceof cljs.core.Keyword))?G__54149.fqn:null);
switch (G__54149__$1) {
case "fulcro.inspect.client/request-page-apps":
var seq__54153 = cljs.core.seq(cljs.core.vals(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_)));
var chunk__54154 = null;
var count__54155 = (0);
var i__54156 = (0);
while(true){
if((i__54156 < count__54155)){
var app__$1 = chunk__54154.cljs$core$IIndexed$_nth$arity$2(null,i__54156);
var state_54395 = com.fulcrologic.fulcro.inspect.inspect_client.app_state(app__$1);
var remote_names_54396 = com.fulcrologic.fulcro.inspect.inspect_client.remotes(app__$1);
com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),com.fulcrologic.fulcro.inspect.inspect_client.app_id(app__$1),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(((function (seq__54153,chunk__54154,count__54155,i__54156,state_54395,remote_names_54396,app__$1,G__54149,G__54149__$1,map__54142,map__54142__$1,type,data){
return (function (p1__54134_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__54134_SHARP_);
});})(seq__54153,chunk__54154,count__54155,i__54156,state_54395,remote_names_54396,app__$1,G__54149,G__54149__$1,map__54142,map__54142__$1,type,data))
,cljs.core.str),remote_names_54396),new cljs.core.Keyword("fulcro.inspect.client","initial-state","fulcro.inspect.client/initial-state",1225829482),state_54395,new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(state_54395)]));


var G__54398 = seq__54153;
var G__54399 = chunk__54154;
var G__54400 = count__54155;
var G__54401 = (i__54156 + (1));
seq__54153 = G__54398;
chunk__54154 = G__54399;
count__54155 = G__54400;
i__54156 = G__54401;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54153);
if(temp__5804__auto__){
var seq__54153__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54153__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54153__$1);
var G__54404 = cljs.core.chunk_rest(seq__54153__$1);
var G__54405 = c__4550__auto__;
var G__54406 = cljs.core.count(c__4550__auto__);
var G__54407 = (0);
seq__54153 = G__54404;
chunk__54154 = G__54405;
count__54155 = G__54406;
i__54156 = G__54407;
continue;
} else {
var app__$1 = cljs.core.first(seq__54153__$1);
var state_54408 = com.fulcrologic.fulcro.inspect.inspect_client.app_state(app__$1);
var remote_names_54409 = com.fulcrologic.fulcro.inspect.inspect_client.remotes(app__$1);
com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),com.fulcrologic.fulcro.inspect.inspect_client.app_id(app__$1),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(((function (seq__54153,chunk__54154,count__54155,i__54156,state_54408,remote_names_54409,app__$1,seq__54153__$1,temp__5804__auto__,G__54149,G__54149__$1,map__54142,map__54142__$1,type,data){
return (function (p1__54134_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__54134_SHARP_);
});})(seq__54153,chunk__54154,count__54155,i__54156,state_54408,remote_names_54409,app__$1,seq__54153__$1,temp__5804__auto__,G__54149,G__54149__$1,map__54142,map__54142__$1,type,data))
,cljs.core.str),remote_names_54409),new cljs.core.Keyword("fulcro.inspect.client","initial-state","fulcro.inspect.client/initial-state",1225829482),state_54408,new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(state_54408)]));


var G__54414 = cljs.core.next(seq__54153__$1);
var G__54415 = null;
var G__54416 = (0);
var G__54417 = (0);
seq__54153 = G__54414;
chunk__54154 = G__54415;
count__54155 = G__54416;
i__54156 = G__54417;
continue;
}
} else {
return null;
}
}
break;
}

break;
case "fulcro.inspect.client/reset-app-state":
var map__54195 = data;
var map__54195__$1 = (((((!((map__54195 == null))))?(((((map__54195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54195):map__54195);
var target_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54195__$1,new cljs.core.Keyword(null,"target-state","target-state",-682429993));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54195__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_),app_uuid);
if(cljs.core.truth_(temp__5802__auto__)){
var app__$1 = temp__5802__auto__;
var render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
if(cljs.core.truth_(target_state)){
var target_state_54422__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(target_state,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid);
cljs.core.reset_BANG_(com.fulcrologic.fulcro.inspect.inspect_client.state_atom(app__$1),target_state_54422__$1);
} else {
}

var G__54213 = app__$1;
var G__54214 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (render_BANG_.cljs$core$IFn$_invoke$arity$2 ? render_BANG_.cljs$core$IFn$_invoke$arity$2(G__54213,G__54214) : render_BANG_.call(null,G__54213,G__54214));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.inspect.inspect-client",null,198,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__5802__auto__,map__54195,map__54195__$1,target_state,app_uuid,G__54149,G__54149__$1,map__54142,map__54142__$1,type,data){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Reset app on invalid uuid",app_uuid], null);
});})(temp__5802__auto__,map__54195,map__54195__$1,target_state,app_uuid,G__54149,G__54149__$1,map__54142,map__54142__$1,type,data))
,null)),null,-2065126682);
}

break;
case "fulcro.inspect.client/transact":
var map__54220 = data;
var map__54220__$1 = (((((!((map__54220 == null))))?(((((map__54220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54220):map__54220);
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54220__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var tx_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54220__$1,new cljs.core.Keyword(null,"tx-ref","tx-ref",-216104949));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54220__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_),app_uuid);
if(cljs.core.truth_(temp__5802__auto__)){
var app__$1 = temp__5802__auto__;
if(cljs.core.truth_(tx_ref)){
return com.fulcrologic.fulcro.inspect.inspect_client.comp_transact_BANG_(app__$1,tx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),tx_ref], null));
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.comp_transact_BANG_(app__$1,tx,cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,207,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__5802__auto__,map__54220,map__54220__$1,tx,tx_ref,app_uuid,G__54149,G__54149__$1,map__54142,map__54142__$1,type,data){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transact on invalid uuid",app_uuid], null);
});})(temp__5802__auto__,map__54220,map__54220__$1,tx,tx_ref,app_uuid,G__54149,G__54149__$1,map__54142,map__54142__$1,type,data))
,null)),null,-2047995912);
}

break;
case "fulcro.inspect.client/pick-element":
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,210,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__54149,G__54149__$1,map__54142,map__54142__$1,type,data){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pick Element Not implemented for Inspect v3"], null);
});})(G__54149,G__54149__$1,map__54142,map__54142__$1,type,data))
,null)),null,2117017123);

break;
case "fulcro.inspect.client/show-dom-preview":
var b2__46703__auto__ = data;
if(cljs.core.truth_(b2__46703__auto__)){
var map__54241 = b2__46703__auto__;
var map__54241__$1 = (((((!((map__54241 == null))))?(((((map__54241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54241):map__54241);
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54241__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var b2__46703__auto____$1 = (function (){var G__54245 = cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_);
if((G__54245 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__54245,app_uuid);
}
})();
if(cljs.core.truth_(b2__46703__auto____$1)){
var app__$1 = b2__46703__auto____$1;
var b2__46703__auto____$2 = com.fulcrologic.fulcro.inspect.inspect_client.db_from_history(app__$1,new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(b2__46703__auto____$2)){
var historical_state = b2__46703__auto____$2;
var b2__46703__auto____$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(historical_state));
if(cljs.core.truth_(b2__46703__auto____$3)){
var historical_app = b2__46703__auto____$3;
var b2__46703__auto____$4 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render!","render!",-1848688504));
if(cljs.core.truth_(b2__46703__auto____$4)){
var render_BANG_ = b2__46703__auto____$4;
var G__54249 = historical_app;
var G__54250 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (render_BANG_.cljs$core$IFn$_invoke$arity$2 ? render_BANG_.cljs$core$IFn$_invoke$arity$2(G__54249,G__54250) : render_BANG_.call(null,G__54249,G__54250));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,220,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__46703__auto____$4,historical_app,b2__46703__auto____$3,historical_state,b2__46703__auto____$2,app__$1,b2__46703__auto____$1,map__54241,map__54241__$1,app_uuid,b2__46703__auto__,G__54149,G__54149__$1,map__54142,map__54142__$1,type,data){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find app/state for preview."], null);
});})(b2__46703__auto____$4,historical_app,b2__46703__auto____$3,historical_state,b2__46703__auto____$2,app__$1,b2__46703__auto____$1,map__54241,map__54241__$1,app_uuid,b2__46703__auto__,G__54149,G__54149__$1,map__54142,map__54142__$1,type,data))
,null)),null,1514156353);
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,220,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__46703__auto____$3,historical_state,b2__46703__auto____$2,app__$1,b2__46703__auto____$1,map__54241,map__54241__$1,app_uuid,b2__46703__auto__,G__54149,G__54149__$1,map__54142,map__54142__$1,type,data){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find app/state for preview."], null);
});})(b2__46703__auto____$3,historical_state,b2__46703__auto____$2,app__$1,b2__46703__auto____$1,map__54241,map__54241__$1,app_uuid,b2__46703__auto__,G__54149,G__54149__$1,map__54142,map__54142__$1,type,data))
,null)),null,2009637003);
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,220,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__46703__auto____$2,app__$1,b2__46703__auto____$1,map__54241,map__54241__$1,app_uuid,b2__46703__auto__,G__54149,G__54149__$1,map__54142,map__54142__$1,type,data){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find app/state for preview."], null);
});})(b2__46703__auto____$2,app__$1,b2__46703__auto____$1,map__54241,map__54241__$1,app_uuid,b2__46703__auto__,G__54149,G__54149__$1,map__54142,map__54142__$1,type,data))
,null)),null,-396215469);
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,220,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__46703__auto____$1,map__54241,map__54241__$1,app_uuid,b2__46703__auto__,G__54149,G__54149__$1,map__54142,map__54142__$1,type,data){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find app/state for preview."], null);
});})(b2__46703__auto____$1,map__54241,map__54241__$1,app_uuid,b2__46703__auto__,G__54149,G__54149__$1,map__54142,map__54142__$1,type,data))
,null)),null,1577352529);
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,220,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__46703__auto__,G__54149,G__54149__$1,map__54142,map__54142__$1,type,data){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find app/state for preview."], null);
});})(b2__46703__auto__,G__54149,G__54149__$1,map__54142,map__54142__$1,type,data))
,null)),null,-1486775202);
}

break;
case "fulcro.inspect.client/hide-dom-preview":
var b2__46703__auto__ = data;
if(cljs.core.truth_(b2__46703__auto__)){
var map__54253 = b2__46703__auto__;
var map__54253__$1 = (((((!((map__54253 == null))))?(((((map__54253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54253):map__54253);
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54253__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var b2__46703__auto____$1 = (function (){var G__54255 = cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_);
if((G__54255 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__54255,app_uuid);
}
})();
if(cljs.core.truth_(b2__46703__auto____$1)){
var app__$1 = b2__46703__auto____$1;
var b2__46703__auto____$2 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render!","render!",-1848688504));
if(cljs.core.truth_(b2__46703__auto____$2)){
var render_BANG_ = b2__46703__auto____$2;
var G__54256 = app__$1;
var G__54257 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (render_BANG_.cljs$core$IFn$_invoke$arity$2 ? render_BANG_.cljs$core$IFn$_invoke$arity$2(G__54256,G__54257) : render_BANG_.call(null,G__54256,G__54257));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}

break;
case "fulcro.inspect.client/network-request":
var map__54258 = data;
var map__54258__$1 = (((((!((map__54258 == null))))?(((((map__54258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54258):map__54258);
var remote_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54258__$1,new cljs.core.Keyword("fulcro.inspect.client","remote","fulcro.inspect.client/remote",-306964848));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54258__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var msg_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54258__$1,new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-id","fulcro.inspect.ui-parser/msg-id",-467621998));
var app_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54258__$1,new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491));
var b2__46703__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_),app_uuid);
if(cljs.core.truth_(b2__46703__auto__)){
var app__$1 = b2__46703__auto__;
var b2__46703__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.inspect.inspect_client.remotes(app__$1),remote_name);
if(cljs.core.truth_(b2__46703__auto____$1)){
var remote = b2__46703__auto____$1;
var b2__46703__auto____$2 = new cljs.core.Keyword(null,"transmit!","transmit!",-107149039).cljs$core$IFn$_invoke$arity$1(remote);
if(cljs.core.truth_(b2__46703__auto____$2)){
var transmit_BANG_ = b2__46703__auto____$2;
var b2__46703__auto____$3 = edn_query_language.core.query__GT_ast(query);
if(cljs.core.truth_(b2__46703__auto____$3)){
var ast = b2__46703__auto____$3;
var b2__46703__auto____$4 = cljs.core.random_uuid();
if(cljs.core.truth_(b2__46703__auto____$4)){
var tx_id = b2__46703__auto____$4;
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app__$1,remote_name,tx_id,query);

var G__54262 = remote;
var G__54263 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),tx_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),(0),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),cljs.core.identity,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),((function (G__54262,tx_id,b2__46703__auto____$4,ast,b2__46703__auto____$3,transmit_BANG_,b2__46703__auto____$2,remote,b2__46703__auto____$1,app__$1,b2__46703__auto__,map__54258,map__54258__$1,remote_name,query,msg_id,app_uuid,G__54149,G__54149__$1,map__54142,map__54142__$1,type,data){
return (function (p__54265){
var map__54266 = p__54265;
var map__54266__$1 = (((((!((map__54266 == null))))?(((((map__54266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54266):map__54266);
var result = map__54266__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54266__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var error_QMARK__54456 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_((error_QMARK__54456.cljs$core$IFn$_invoke$arity$1 ? error_QMARK__54456.cljs$core$IFn$_invoke$arity$1(result) : error_QMARK__54456.call(null,result)))){
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,remote_name,result);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,tx_id,body);
}

return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","message-response","fulcro.inspect.client/message-response",587955053),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-id","fulcro.inspect.ui-parser/msg-id",-467621998),msg_id,new cljs.core.Keyword("fulcro.inspect.ui-parser","msg-response","fulcro.inspect.ui-parser/msg-response",1721295840),body], null));
});})(G__54262,tx_id,b2__46703__auto____$4,ast,b2__46703__auto____$3,transmit_BANG_,b2__46703__auto____$2,remote,b2__46703__auto____$1,app__$1,b2__46703__auto__,map__54258,map__54258__$1,remote_name,query,msg_id,app_uuid,G__54149,G__54149__$1,map__54142,map__54142__$1,type,data))
], null);
return (transmit_BANG_.cljs$core$IFn$_invoke$arity$2 ? transmit_BANG_.cljs$core$IFn$_invoke$arity$2(G__54262,G__54263) : transmit_BANG_.call(null,G__54262,G__54263));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}

break;
case "fulcro.inspect.client/console-log":
var map__54271 = data;
var map__54271__$1 = (((((!((map__54271 == null))))?(((((map__54271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54271):map__54271);
var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54271__$1,new cljs.core.Keyword(null,"log","log",-1595516004));
var log_js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54271__$1,new cljs.core.Keyword(null,"log-js","log-js",-1565471667));
var warn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54271__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54271__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(log)){
return console.log(log);
} else {
if(cljs.core.truth_(log_js)){
return console.log(cljs.core.clj__GT_js(log_js));
} else {
if(cljs.core.truth_(warn)){
return console.warn(warn);
} else {
if(cljs.core.truth_(error)){
return console.error(error);
} else {
return null;
}
}
}
}

break;
case "fulcro.inspect.client/check-client-version":
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","client-version","fulcro.inspect.client/client-version",728119531),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"version","version",425292698),"2.2.5"], null));

break;
default:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.inspect.inspect-client",null,271,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__54149,G__54149__$1,map__54142,map__54142__$1,type,data){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unknown message",type], null);
});})(G__54149,G__54149__$1,map__54142,map__54142__$1,type,data))
,null)),null,743519187);

}
});
com.fulcrologic.fulcro.inspect.inspect_client.install = (function com$fulcrologic$fulcro$inspect$inspect_client$install(_){
document.documentElement.setAttribute("__fulcro-inspect-remote-installed__",true);

if(cljs.core.truth_(cljs.core.deref(com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_))){
return null;
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.inspect.inspect-client",null,280,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Installing Fulcro 3.x Inspect",cljs.core.PersistentArrayMap.EMPTY], null);
}),null)),null,-1949246961);

cljs.core.reset_BANG_(com.fulcrologic.fulcro.inspect.inspect_client.started_QMARK__STAR_,true);

return com.fulcrologic.fulcro.inspect.inspect_client.listen_local_messages();
}
});
/**
 * Register the application with Inspect, if it is available.
 */
com.fulcrologic.fulcro.inspect.inspect_client.app_started_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$app_started_BANG_(app__$1){
var networking = com.fulcrologic.fulcro.inspect.inspect_client.remotes(app__$1);
var state_STAR_ = com.fulcrologic.fulcro.inspect.inspect_client.state_atom(app__$1);
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.fulcro_app_id(app__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.inspect.inspect_client.apps_STAR_,cljs.core.assoc,app_uuid,app__$1);

com.fulcrologic.fulcro.inspect.inspect_client.update_state_history(app__$1,cljs.core.deref(state_STAR_));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid);

com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","init-app","fulcro.inspect.client/init-app",-1984595648),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),com.fulcrologic.fulcro.inspect.inspect_client.app_id(app__$1),new cljs.core.Keyword("fulcro.inspect.client","remotes","fulcro.inspect.client/remotes",-2062632712),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(((function (networking,state_STAR_,app_uuid){
return (function (p1__54280_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),p1__54280_SHARP_);
});})(networking,state_STAR_,app_uuid))
,cljs.core.str),cljs.core.keys(networking)),new cljs.core.Keyword("fulcro.inspect.client","initial-state","fulcro.inspect.client/initial-state",1225829482),cljs.core.deref(state_STAR_),new cljs.core.Keyword("fulcro.inspect.client","state-hash","fulcro.inspect.client/state-hash",-1488761756),cljs.core.hash(cljs.core.deref(state_STAR_))]));

return cljs.core.add_watch(state_STAR_,app_uuid,((function (networking,state_STAR_,app_uuid){
return (function (p1__54283_SHARP_,p2__54284_SHARP_,p3__54281_SHARP_,p4__54282_SHARP_){
return com.fulcrologic.fulcro.inspect.inspect_client.db_changed_BANG_(app__$1,p3__54281_SHARP_,p4__54282_SHARP_);
});})(networking,state_STAR_,app_uuid))
);
});
/**
 * Notify inspect that a transaction finished.
 * 
 * app - The app
 * env - The mutation env that completed.
 */
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_ = (function com$fulcrologic$fulcro$inspect$inspect_client$optimistic_action_finished_BANG_(app__$1,p__54285,p__54286){
var map__54288 = p__54285;
var map__54288__$1 = (((((!((map__54288 == null))))?(((((map__54288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54288):map__54288);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54288__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54288__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54288__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54288__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var map__54289 = p__54286;
var map__54289__$1 = (((((!((map__54289 == null))))?(((((map__54289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54289):map__54289);
var tx_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54289__$1,new cljs.core.Keyword(null,"tx-id","tx-id",638275288));
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54289__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var state_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54289__$1,new cljs.core.Keyword(null,"state-before","state-before",759087843));
var component_name = com.fulcrologic.fulcro.inspect.inspect_client.get_component_name(component);
var tx__$1 = (function (){var G__54299 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("fulcro.inspect.ui.transactions","tx-id","fulcro.inspect.ui.transactions/tx-id",315271198),tx_id,new cljs.core.Keyword("fulcro.history","client-time","fulcro.history/client-time",1879420278),(new Date()),new cljs.core.Keyword("fulcro.history","tx","fulcro.history/tx",1485693993),tx,new cljs.core.Keyword("fulcro.history","db-before-hash","fulcro.history/db-before-hash",-1020674495),cljs.core.hash(state_before),new cljs.core.Keyword("fulcro.history","db-after-hash","fulcro.history/db-after-hash",-1603617752),cljs.core.hash(cljs.core.deref(state)),new cljs.core.Keyword("fulcro.history","network-sends","fulcro.history/network-sends",-234790789),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options], null);
var G__54299__$1 = (cljs.core.truth_(component_name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54299,new cljs.core.Keyword(null,"component","component",1555936782),component_name):G__54299);
if(cljs.core.truth_(ref)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54299__$1,new cljs.core.Keyword(null,"ident-ref","ident-ref",663643478),ref);
} else {
return G__54299__$1;
}
})();
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app__$1);
return com.fulcrologic.fulcro.inspect.inspect_client.post_message(new cljs.core.Keyword("fulcro.inspect.client","new-client-transaction","fulcro.inspect.client/new-client-transaction",-1086637148),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.fulcro.inspect.inspect_client.app_uuid_key,app_uuid,new cljs.core.Keyword("fulcro.inspect.client","tx","fulcro.inspect.client/tx",-815771134),tx__$1]));
});

//# sourceMappingURL=com.fulcrologic.fulcro.inspect.inspect_client.js.map
