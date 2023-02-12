goog.provide('app.client');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.application');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.algorithms.merge');
goog.require('com.fulcrologic.fulcro.algorithms.data_targeting');

var options__45485__auto___48495 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__48479 = com.fulcrologic.fulcro.components.props(this$);
var map__48479__$1 = (((((!((map__48479 == null))))?(((((map__48479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48479):map__48479);
var props = map__48479__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48479__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48479__$1,new cljs.core.Keyword("person","name","person/name",549444500));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Name: ",com.fulcrologic.fulcro.components.force_children(name)])], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Person !== 'undefined')){
} else {
app.client.Person = ((function (options__45485__auto___48495){
return (function app$client$Person(props__45486__auto__){
var this__45487__auto__ = this;
var temp__5802__auto___48496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45485__auto___48495,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___48496)){
var init_state__45488__auto___48497 = temp__5802__auto___48496;
this__45487__auto__.state = (function (){var obj48482 = ({"fulcro$state":(function (){var G__48483 = this__45487__auto__;
var G__48484 = goog.object.get(props__45486__auto__,"fulcro$value");
return (init_state__45488__auto___48497.cljs$core$IFn$_invoke$arity$2 ? init_state__45488__auto___48497.cljs$core$IFn$_invoke$arity$2(G__48483,G__48484) : init_state__45488__auto___48497.call(null,G__48483,G__48484));
})()});
return obj48482;
})();
} else {
this__45487__auto__.state = (function (){var obj48486 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj48486;
})();
}

return null;
});})(options__45485__auto___48495))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Person,new cljs.core.Keyword("app.client","Person","app.client/Person",1752576162),options__45485__auto___48495);
app.client.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","id","person/id",-392409377)], null));

var options__45485__auto___48498 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Sample(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__48487 = com.fulcrologic.fulcro.components.props(this$);
var map__48487__$1 = (((((!((map__48487 == null))))?(((((map__48487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48487):map__48487);
var sample = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48487__$1,new cljs.core.Keyword(null,"sample","sample",79023601));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.client.ui_person.cljs$core$IFn$_invoke$arity$1 ? app.client.ui_person.cljs$core$IFn$_invoke$arity$1(sample) : app.client.ui_person.call(null,sample))], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Sample !== 'undefined')){
} else {
app.client.Sample = ((function (options__45485__auto___48498){
return (function app$client$Sample(props__45486__auto__){
var this__45487__auto__ = this;
var temp__5802__auto___48499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45485__auto___48498,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___48499)){
var init_state__45488__auto___48500 = temp__5802__auto___48499;
this__45487__auto__.state = (function (){var obj48490 = ({"fulcro$state":(function (){var G__48491 = this__45487__auto__;
var G__48492 = goog.object.get(props__45486__auto__,"fulcro$value");
return (init_state__45488__auto___48500.cljs$core$IFn$_invoke$arity$2 ? init_state__45488__auto___48500.cljs$core$IFn$_invoke$arity$2(G__48491,G__48492) : init_state__45488__auto___48500.call(null,G__48491,G__48492));
})()});
return obj48490;
})();
} else {
this__45487__auto__.state = (function (){var obj48494 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj48494;
})();
}

return null;
});})(options__45485__auto___48498))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Sample,new cljs.core.Keyword("app.client","Sample","app.client/Sample",-1058902991),options__45485__auto___48498);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.APP !== 'undefined')){
} else {
app.client.APP = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
}
app.client.init = (function app$client$init(){
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.APP,app.client.Sample,"app");
});
goog.exportSymbol('app.client.init', app.client.init);

//# sourceMappingURL=app.client.js.map
