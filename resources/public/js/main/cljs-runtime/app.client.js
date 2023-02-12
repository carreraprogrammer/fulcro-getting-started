goog.provide('app.client');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.application');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.algorithms.merge');
goog.require('com.fulcrologic.fulcro.algorithms.data_targeting');

var options__45485__auto___49502 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Car(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__49478 = com.fulcrologic.fulcro.components.props(this$);
var map__49478__$1 = (((((!((map__49478 == null))))?(((((map__49478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49478):map__49478);
var props = map__49478__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49478__$1,new cljs.core.Keyword("car","id","car/id",-1388434848));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49478__$1,new cljs.core.Keyword("car","model","car/model",331054627));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Model: ",com.fulcrologic.fulcro.components.force_children(model)]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Car !== 'undefined')){
} else {
app.client.Car = ((function (options__45485__auto___49502){
return (function app$client$Car(props__45486__auto__){
var this__45487__auto__ = this;
var temp__5802__auto___49503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45485__auto___49502,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___49503)){
var init_state__45488__auto___49504 = temp__5802__auto___49503;
this__45487__auto__.state = (function (){var obj49481 = ({"fulcro$state":(function (){var G__49482 = this__45487__auto__;
var G__49483 = goog.object.get(props__45486__auto__,"fulcro$value");
return (init_state__45488__auto___49504.cljs$core$IFn$_invoke$arity$2 ? init_state__45488__auto___49504.cljs$core$IFn$_invoke$arity$2(G__49482,G__49483) : init_state__45488__auto___49504.call(null,G__49482,G__49483));
})()});
return obj49481;
})();
} else {
this__45487__auto__.state = (function (){var obj49485 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj49485;
})();
}

return null;
});})(options__45485__auto___49502))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Car,new cljs.core.Keyword("app.client","Car","app.client/Car",-1786113179),options__45485__auto___49502);
app.client.ui_car = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Car,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("car","id","car/id",-1388434848)], null));

var options__45485__auto___49505 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","name","person/name",549444500)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","id","person/id",-392409377).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__49486 = com.fulcrologic.fulcro.components.props(this$);
var map__49486__$1 = (((((!((map__49486 == null))))?(((((map__49486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49486):map__49486);
var props = map__49486__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49486__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49486__$1,new cljs.core.Keyword("person","name","person/name",549444500));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Name: ",com.fulcrologic.fulcro.components.force_children(name)])], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Person !== 'undefined')){
} else {
app.client.Person = ((function (options__45485__auto___49505){
return (function app$client$Person(props__45486__auto__){
var this__45487__auto__ = this;
var temp__5802__auto___49506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45485__auto___49505,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___49506)){
var init_state__45488__auto___49507 = temp__5802__auto___49506;
this__45487__auto__.state = (function (){var obj49489 = ({"fulcro$state":(function (){var G__49490 = this__45487__auto__;
var G__49491 = goog.object.get(props__45486__auto__,"fulcro$value");
return (init_state__45488__auto___49507.cljs$core$IFn$_invoke$arity$2 ? init_state__45488__auto___49507.cljs$core$IFn$_invoke$arity$2(G__49490,G__49491) : init_state__45488__auto___49507.call(null,G__49490,G__49491));
})()});
return obj49489;
})();
} else {
this__45487__auto__.state = (function (){var obj49493 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj49493;
})();
}

return null;
});})(options__45485__auto___49505))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Person,new cljs.core.Keyword("app.client","Person","app.client/Person",1752576162),options__45485__auto___49505);
app.client.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","id","person/id",-392409377)], null));

var options__45485__auto___49508 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Sample(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__49494 = com.fulcrologic.fulcro.components.props(this$);
var map__49494__$1 = (((((!((map__49494 == null))))?(((((map__49494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49494):map__49494);
var sample = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49494__$1,new cljs.core.Keyword(null,"sample","sample",79023601));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.client.ui_person.cljs$core$IFn$_invoke$arity$1 ? app.client.ui_person.cljs$core$IFn$_invoke$arity$1(sample) : app.client.ui_person.call(null,sample))], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Sample !== 'undefined')){
} else {
app.client.Sample = ((function (options__45485__auto___49508){
return (function app$client$Sample(props__45486__auto__){
var this__45487__auto__ = this;
var temp__5802__auto___49509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45485__auto___49508,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___49509)){
var init_state__45488__auto___49510 = temp__5802__auto___49509;
this__45487__auto__.state = (function (){var obj49497 = ({"fulcro$state":(function (){var G__49498 = this__45487__auto__;
var G__49499 = goog.object.get(props__45486__auto__,"fulcro$value");
return (init_state__45488__auto___49510.cljs$core$IFn$_invoke$arity$2 ? init_state__45488__auto___49510.cljs$core$IFn$_invoke$arity$2(G__49498,G__49499) : init_state__45488__auto___49510.call(null,G__49498,G__49499));
})()});
return obj49497;
})();
} else {
this__45487__auto__.state = (function (){var obj49501 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj49501;
})();
}

return null;
});})(options__45485__auto___49508))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Sample,new cljs.core.Keyword("app.client","Sample","app.client/Sample",-1058902991),options__45485__auto___49508);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.APP !== 'undefined')){
} else {
app.client.APP = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
}
app.client.init = (function app$client$init(){
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.APP,app.client.Sample,"app");
});
goog.exportSymbol('app.client.init', app.client.init);

//# sourceMappingURL=app.client.js.map
