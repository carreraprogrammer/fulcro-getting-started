goog.provide('app.client');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.application');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.algorithms.merge');
goog.require('com.fulcrologic.fulcro.algorithms.data_targeting');

var options__45485__auto___48946 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__48930 = com.fulcrologic.fulcro.components.props(this$);
var map__48930__$1 = (((((!((map__48930 == null))))?(((((map__48930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48930):map__48930);
var props = map__48930__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48930__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48930__$1,new cljs.core.Keyword("person","name","person/name",549444500));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Name: ",com.fulcrologic.fulcro.components.force_children(name)])], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Person !== 'undefined')){
} else {
app.client.Person = ((function (options__45485__auto___48946){
return (function app$client$Person(props__45486__auto__){
var this__45487__auto__ = this;
var temp__5802__auto___48947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45485__auto___48946,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___48947)){
var init_state__45488__auto___48948 = temp__5802__auto___48947;
this__45487__auto__.state = (function (){var obj48933 = ({"fulcro$state":(function (){var G__48934 = this__45487__auto__;
var G__48935 = goog.object.get(props__45486__auto__,"fulcro$value");
return (init_state__45488__auto___48948.cljs$core$IFn$_invoke$arity$2 ? init_state__45488__auto___48948.cljs$core$IFn$_invoke$arity$2(G__48934,G__48935) : init_state__45488__auto___48948.call(null,G__48934,G__48935));
})()});
return obj48933;
})();
} else {
this__45487__auto__.state = (function (){var obj48937 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj48937;
})();
}

return null;
});})(options__45485__auto___48946))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Person,new cljs.core.Keyword("app.client","Person","app.client/Person",1752576162),options__45485__auto___48946);
app.client.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","id","person/id",-392409377)], null));

var options__45485__auto___48949 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Sample(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__48938 = com.fulcrologic.fulcro.components.props(this$);
var map__48938__$1 = (((((!((map__48938 == null))))?(((((map__48938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48938):map__48938);
var sample = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48938__$1,new cljs.core.Keyword(null,"sample","sample",79023601));
var sample2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48938__$1,new cljs.core.Keyword(null,"sample2","sample2",1534285040));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.client.ui_person.cljs$core$IFn$_invoke$arity$1 ? app.client.ui_person.cljs$core$IFn$_invoke$arity$1(sample2) : app.client.ui_person.call(null,sample2))], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Sample !== 'undefined')){
} else {
app.client.Sample = ((function (options__45485__auto___48949){
return (function app$client$Sample(props__45486__auto__){
var this__45487__auto__ = this;
var temp__5802__auto___48950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45485__auto___48949,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___48950)){
var init_state__45488__auto___48951 = temp__5802__auto___48950;
this__45487__auto__.state = (function (){var obj48941 = ({"fulcro$state":(function (){var G__48942 = this__45487__auto__;
var G__48943 = goog.object.get(props__45486__auto__,"fulcro$value");
return (init_state__45488__auto___48951.cljs$core$IFn$_invoke$arity$2 ? init_state__45488__auto___48951.cljs$core$IFn$_invoke$arity$2(G__48942,G__48943) : init_state__45488__auto___48951.call(null,G__48942,G__48943));
})()});
return obj48941;
})();
} else {
this__45487__auto__.state = (function (){var obj48945 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj48945;
})();
}

return null;
});})(options__45485__auto___48949))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Sample,new cljs.core.Keyword("app.client","Sample","app.client/Sample",-1058902991),options__45485__auto___48949);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.APP !== 'undefined')){
} else {
app.client.APP = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
}
app.client.init = (function app$client$init(){
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.APP,app.client.Sample,"app");
});
goog.exportSymbol('app.client.init', app.client.init);

//# sourceMappingURL=app.client.js.map
