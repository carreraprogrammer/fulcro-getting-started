goog.provide('app.client');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.application');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.algorithms.merge');
goog.require('com.fulcrologic.fulcro.algorithms.data_targeting');

var options__45485__auto___49307 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Car(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__49275 = com.fulcrologic.fulcro.components.props(this$);
var map__49275__$1 = (((((!((map__49275 == null))))?(((((map__49275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49275):map__49275);
var props = map__49275__$1;
var iva = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49275__$1,new cljs.core.Keyword("tax","iva","tax/iva",828906211));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49275__$1,new cljs.core.Keyword("tax","ret","tax/ret",-468042757));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Retention: ",com.fulcrologic.fulcro.components.force_children(ret)]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Car !== 'undefined')){
} else {
app.client.Car = ((function (options__45485__auto___49307){
return (function app$client$Car(props__45486__auto__){
var this__45487__auto__ = this;
var temp__5802__auto___49308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45485__auto___49307,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___49308)){
var init_state__45488__auto___49309 = temp__5802__auto___49308;
this__45487__auto__.state = (function (){var obj49278 = ({"fulcro$state":(function (){var G__49279 = this__45487__auto__;
var G__49280 = goog.object.get(props__45486__auto__,"fulcro$value");
return (init_state__45488__auto___49309.cljs$core$IFn$_invoke$arity$2 ? init_state__45488__auto___49309.cljs$core$IFn$_invoke$arity$2(G__49279,G__49280) : init_state__45488__auto___49309.call(null,G__49279,G__49280));
})()});
return obj49278;
})();
} else {
this__45487__auto__.state = (function (){var obj49282 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj49282;
})();
}

return null;
});})(options__45485__auto___49307))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Car,new cljs.core.Keyword("app.client","Car","app.client/Car",-1786113179),options__45485__auto___49307);

var options__45485__auto___49310 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Car(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__49283 = com.fulcrologic.fulcro.components.props(this$);
var map__49283__$1 = (((((!((map__49283 == null))))?(((((map__49283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49283):map__49283);
var props = map__49283__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49283__$1,new cljs.core.Keyword("car","id","car/id",-1388434848));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49283__$1,new cljs.core.Keyword("car","model","car/model",331054627));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Model: ",com.fulcrologic.fulcro.components.force_children(model)]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Car !== 'undefined')){
} else {
app.client.Car = ((function (options__45485__auto___49310){
return (function app$client$Car(props__45486__auto__){
var this__45487__auto__ = this;
var temp__5802__auto___49311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45485__auto___49310,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___49311)){
var init_state__45488__auto___49312 = temp__5802__auto___49311;
this__45487__auto__.state = (function (){var obj49286 = ({"fulcro$state":(function (){var G__49287 = this__45487__auto__;
var G__49288 = goog.object.get(props__45486__auto__,"fulcro$value");
return (init_state__45488__auto___49312.cljs$core$IFn$_invoke$arity$2 ? init_state__45488__auto___49312.cljs$core$IFn$_invoke$arity$2(G__49287,G__49288) : init_state__45488__auto___49312.call(null,G__49287,G__49288));
})()});
return obj49286;
})();
} else {
this__45487__auto__.state = (function (){var obj49290 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj49290;
})();
}

return null;
});})(options__45485__auto___49310))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Car,new cljs.core.Keyword("app.client","Car","app.client/Car",-1786113179),options__45485__auto___49310);
app.client.ui_car = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Car,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("car","id","car/id",-1388434848)], null));

var options__45485__auto___49313 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__49291 = com.fulcrologic.fulcro.components.props(this$);
var map__49291__$1 = (((((!((map__49291 == null))))?(((((map__49291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49291):map__49291);
var props = map__49291__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49291__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49291__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var cars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49291__$1,new cljs.core.Keyword("person","cars","person/cars",1835683721));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Name: ",com.fulcrologic.fulcro.components.force_children(name)]),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"Cars"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.client.ui_car,cars)], null),null))], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Person !== 'undefined')){
} else {
app.client.Person = ((function (options__45485__auto___49313){
return (function app$client$Person(props__45486__auto__){
var this__45487__auto__ = this;
var temp__5802__auto___49314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45485__auto___49313,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___49314)){
var init_state__45488__auto___49315 = temp__5802__auto___49314;
this__45487__auto__.state = (function (){var obj49294 = ({"fulcro$state":(function (){var G__49295 = this__45487__auto__;
var G__49296 = goog.object.get(props__45486__auto__,"fulcro$value");
return (init_state__45488__auto___49315.cljs$core$IFn$_invoke$arity$2 ? init_state__45488__auto___49315.cljs$core$IFn$_invoke$arity$2(G__49295,G__49296) : init_state__45488__auto___49315.call(null,G__49295,G__49296));
})()});
return obj49294;
})();
} else {
this__45487__auto__.state = (function (){var obj49298 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj49298;
})();
}

return null;
});})(options__45485__auto___49313))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Person,new cljs.core.Keyword("app.client","Person","app.client/Person",1752576162),options__45485__auto___49313);
app.client.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","id","person/id",-392409377)], null));

var options__45485__auto___49316 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Sample(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__49299 = com.fulcrologic.fulcro.components.props(this$);
var map__49299__$1 = (((((!((map__49299 == null))))?(((((map__49299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49299):map__49299);
var sample = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49299__$1,new cljs.core.Keyword(null,"sample","sample",79023601));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.client.ui_person.cljs$core$IFn$_invoke$arity$1 ? app.client.ui_person.cljs$core$IFn$_invoke$arity$1(sample) : app.client.ui_person.call(null,sample))], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Sample !== 'undefined')){
} else {
app.client.Sample = ((function (options__45485__auto___49316){
return (function app$client$Sample(props__45486__auto__){
var this__45487__auto__ = this;
var temp__5802__auto___49317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45485__auto___49316,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___49317)){
var init_state__45488__auto___49318 = temp__5802__auto___49317;
this__45487__auto__.state = (function (){var obj49302 = ({"fulcro$state":(function (){var G__49303 = this__45487__auto__;
var G__49304 = goog.object.get(props__45486__auto__,"fulcro$value");
return (init_state__45488__auto___49318.cljs$core$IFn$_invoke$arity$2 ? init_state__45488__auto___49318.cljs$core$IFn$_invoke$arity$2(G__49303,G__49304) : init_state__45488__auto___49318.call(null,G__49303,G__49304));
})()});
return obj49302;
})();
} else {
this__45487__auto__.state = (function (){var obj49306 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj49306;
})();
}

return null;
});})(options__45485__auto___49316))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Sample,new cljs.core.Keyword("app.client","Sample","app.client/Sample",-1058902991),options__45485__auto___49316);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.APP !== 'undefined')){
} else {
app.client.APP = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
}
app.client.init = (function app$client$init(){
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.APP,app.client.Sample,"app");
});
goog.exportSymbol('app.client.init', app.client.init);

//# sourceMappingURL=app.client.js.map
