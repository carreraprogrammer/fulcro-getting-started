goog.provide('app.client');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.application');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.algorithms.merge');
goog.require('com.fulcrologic.fulcro.algorithms.data_targeting');

var options__45485__auto___49806 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Car(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__49782 = com.fulcrologic.fulcro.components.props(this$);
var map__49782__$1 = (((((!((map__49782 == null))))?(((((map__49782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49782):map__49782);
var props = map__49782__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49782__$1,new cljs.core.Keyword("car","id","car/id",-1388434848));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49782__$1,new cljs.core.Keyword("car","model","car/model",331054627));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Model: ",com.fulcrologic.fulcro.components.force_children(model)]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Car !== 'undefined')){
} else {
app.client.Car = ((function (options__45485__auto___49806){
return (function app$client$Car(props__45486__auto__){
var this__45487__auto__ = this;
var temp__5802__auto___49807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45485__auto___49806,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___49807)){
var init_state__45488__auto___49808 = temp__5802__auto___49807;
this__45487__auto__.state = (function (){var obj49785 = ({"fulcro$state":(function (){var G__49786 = this__45487__auto__;
var G__49787 = goog.object.get(props__45486__auto__,"fulcro$value");
return (init_state__45488__auto___49808.cljs$core$IFn$_invoke$arity$2 ? init_state__45488__auto___49808.cljs$core$IFn$_invoke$arity$2(G__49786,G__49787) : init_state__45488__auto___49808.call(null,G__49786,G__49787));
})()});
return obj49785;
})();
} else {
this__45487__auto__.state = (function (){var obj49789 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj49789;
})();
}

return null;
});})(options__45485__auto___49806))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Car,new cljs.core.Keyword("app.client","Car","app.client/Car",-1786113179),options__45485__auto___49806);
app.client.ui_car = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Car,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("car","id","car/id",-1388434848)], null));

var options__45485__auto___49809 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","name","person/name",549444500)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","id","person/id",-392409377).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__49790 = com.fulcrologic.fulcro.components.props(this$);
var map__49790__$1 = (((((!((map__49790 == null))))?(((((map__49790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49790):map__49790);
var props = map__49790__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49790__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49790__$1,new cljs.core.Keyword("person","name","person/name",549444500));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Name: ",com.fulcrologic.fulcro.components.force_children(name)])], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Person !== 'undefined')){
} else {
app.client.Person = ((function (options__45485__auto___49809){
return (function app$client$Person(props__45486__auto__){
var this__45487__auto__ = this;
var temp__5802__auto___49810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45485__auto___49809,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___49810)){
var init_state__45488__auto___49811 = temp__5802__auto___49810;
this__45487__auto__.state = (function (){var obj49793 = ({"fulcro$state":(function (){var G__49794 = this__45487__auto__;
var G__49795 = goog.object.get(props__45486__auto__,"fulcro$value");
return (init_state__45488__auto___49811.cljs$core$IFn$_invoke$arity$2 ? init_state__45488__auto___49811.cljs$core$IFn$_invoke$arity$2(G__49794,G__49795) : init_state__45488__auto___49811.call(null,G__49794,G__49795));
})()});
return obj49793;
})();
} else {
this__45487__auto__.state = (function (){var obj49797 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj49797;
})();
}

return null;
});})(options__45485__auto___49809))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Person,new cljs.core.Keyword("app.client","Person","app.client/Person",1752576162),options__45485__auto___49809);
app.client.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","id","person/id",-392409377)], null));

var options__45485__auto___49812 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Sample(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__49798 = com.fulcrologic.fulcro.components.props(this$);
var map__49798__$1 = (((((!((map__49798 == null))))?(((((map__49798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49798):map__49798);
var sample = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49798__$1,new cljs.core.Keyword(null,"sample","sample",79023601));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.client.ui_person.cljs$core$IFn$_invoke$arity$1 ? app.client.ui_person.cljs$core$IFn$_invoke$arity$1(sample) : app.client.ui_person.call(null,sample))], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Sample !== 'undefined')){
} else {
app.client.Sample = ((function (options__45485__auto___49812){
return (function app$client$Sample(props__45486__auto__){
var this__45487__auto__ = this;
var temp__5802__auto___49813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45485__auto___49812,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___49813)){
var init_state__45488__auto___49814 = temp__5802__auto___49813;
this__45487__auto__.state = (function (){var obj49801 = ({"fulcro$state":(function (){var G__49802 = this__45487__auto__;
var G__49803 = goog.object.get(props__45486__auto__,"fulcro$value");
return (init_state__45488__auto___49814.cljs$core$IFn$_invoke$arity$2 ? init_state__45488__auto___49814.cljs$core$IFn$_invoke$arity$2(G__49802,G__49803) : init_state__45488__auto___49814.call(null,G__49802,G__49803));
})()});
return obj49801;
})();
} else {
this__45487__auto__.state = (function (){var obj49805 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj49805;
})();
}

return null;
});})(options__45485__auto___49812))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Sample,new cljs.core.Keyword("app.client","Sample","app.client/Sample",-1058902991),options__45485__auto___49812);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.APP !== 'undefined')){
} else {
app.client.APP = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
}
app.client.init = (function app$client$init(){
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.APP,app.client.Sample,"app");
});
goog.exportSymbol('app.client.init', app.client.init);

//# sourceMappingURL=app.client.js.map
