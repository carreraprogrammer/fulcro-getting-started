goog.provide('app.client');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.application');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.algorithms.merge');
goog.require('com.fulcrologic.fulcro.algorithms.data_targeting');

var options__45485__auto___49343 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Car(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__49319 = com.fulcrologic.fulcro.components.props(this$);
var map__49319__$1 = (((((!((map__49319 == null))))?(((((map__49319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49319):map__49319);
var props = map__49319__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49319__$1,new cljs.core.Keyword("car","id","car/id",-1388434848));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49319__$1,new cljs.core.Keyword("car","model","car/model",331054627));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Model: ",com.fulcrologic.fulcro.components.force_children(model)]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Car !== 'undefined')){
} else {
app.client.Car = ((function (options__45485__auto___49343){
return (function app$client$Car(props__45486__auto__){
var this__45487__auto__ = this;
var temp__5802__auto___49344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45485__auto___49343,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___49344)){
var init_state__45488__auto___49345 = temp__5802__auto___49344;
this__45487__auto__.state = (function (){var obj49322 = ({"fulcro$state":(function (){var G__49323 = this__45487__auto__;
var G__49324 = goog.object.get(props__45486__auto__,"fulcro$value");
return (init_state__45488__auto___49345.cljs$core$IFn$_invoke$arity$2 ? init_state__45488__auto___49345.cljs$core$IFn$_invoke$arity$2(G__49323,G__49324) : init_state__45488__auto___49345.call(null,G__49323,G__49324));
})()});
return obj49322;
})();
} else {
this__45487__auto__.state = (function (){var obj49326 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj49326;
})();
}

return null;
});})(options__45485__auto___49343))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Car,new cljs.core.Keyword("app.client","Car","app.client/Car",-1786113179),options__45485__auto___49343);
app.client.ui_car = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Car,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("car","id","car/id",-1388434848)], null));

var options__45485__auto___49346 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__49327 = com.fulcrologic.fulcro.components.props(this$);
var map__49327__$1 = (((((!((map__49327 == null))))?(((((map__49327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49327):map__49327);
var props = map__49327__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49327__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49327__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var cars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49327__$1,new cljs.core.Keyword("person","cars","person/cars",1835683721));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Name: ",com.fulcrologic.fulcro.components.force_children(name)]),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"Cars"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.client.ui_car,cars)], null),null))], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Person !== 'undefined')){
} else {
app.client.Person = ((function (options__45485__auto___49346){
return (function app$client$Person(props__45486__auto__){
var this__45487__auto__ = this;
var temp__5802__auto___49347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45485__auto___49346,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___49347)){
var init_state__45488__auto___49348 = temp__5802__auto___49347;
this__45487__auto__.state = (function (){var obj49330 = ({"fulcro$state":(function (){var G__49331 = this__45487__auto__;
var G__49332 = goog.object.get(props__45486__auto__,"fulcro$value");
return (init_state__45488__auto___49348.cljs$core$IFn$_invoke$arity$2 ? init_state__45488__auto___49348.cljs$core$IFn$_invoke$arity$2(G__49331,G__49332) : init_state__45488__auto___49348.call(null,G__49331,G__49332));
})()});
return obj49330;
})();
} else {
this__45487__auto__.state = (function (){var obj49334 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj49334;
})();
}

return null;
});})(options__45485__auto___49346))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Person,new cljs.core.Keyword("app.client","Person","app.client/Person",1752576162),options__45485__auto___49346);
app.client.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","id","person/id",-392409377)], null));

var options__45485__auto___49349 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Sample(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__49335 = com.fulcrologic.fulcro.components.props(this$);
var map__49335__$1 = (((((!((map__49335 == null))))?(((((map__49335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49335):map__49335);
var sample = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49335__$1,new cljs.core.Keyword(null,"sample","sample",79023601));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.client.ui_person.cljs$core$IFn$_invoke$arity$1 ? app.client.ui_person.cljs$core$IFn$_invoke$arity$1(sample) : app.client.ui_person.call(null,sample))], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Sample !== 'undefined')){
} else {
app.client.Sample = ((function (options__45485__auto___49349){
return (function app$client$Sample(props__45486__auto__){
var this__45487__auto__ = this;
var temp__5802__auto___49350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45485__auto___49349,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___49350)){
var init_state__45488__auto___49351 = temp__5802__auto___49350;
this__45487__auto__.state = (function (){var obj49338 = ({"fulcro$state":(function (){var G__49339 = this__45487__auto__;
var G__49340 = goog.object.get(props__45486__auto__,"fulcro$value");
return (init_state__45488__auto___49351.cljs$core$IFn$_invoke$arity$2 ? init_state__45488__auto___49351.cljs$core$IFn$_invoke$arity$2(G__49339,G__49340) : init_state__45488__auto___49351.call(null,G__49339,G__49340));
})()});
return obj49338;
})();
} else {
this__45487__auto__.state = (function (){var obj49342 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj49342;
})();
}

return null;
});})(options__45485__auto___49349))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Sample,new cljs.core.Keyword("app.client","Sample","app.client/Sample",-1058902991),options__45485__auto___49349);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.APP !== 'undefined')){
} else {
app.client.APP = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
}
app.client.init = (function app$client$init(){
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.APP,app.client.Sample,"app");
});
goog.exportSymbol('app.client.init', app.client.init);

//# sourceMappingURL=app.client.js.map
