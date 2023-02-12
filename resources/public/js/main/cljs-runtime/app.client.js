goog.provide('app.client');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.application');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');

var options__45485__auto___47342 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Sample(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"HELLO WORLD!"]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Sample !== 'undefined')){
} else {
app.client.Sample = ((function (options__45485__auto___47342){
return (function app$client$Sample(props__45486__auto__){
var this__45487__auto__ = this;
var temp__5802__auto___47343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45485__auto___47342,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___47343)){
var init_state__45488__auto___47344 = temp__5802__auto___47343;
this__45487__auto__.state = (function (){var obj47337 = ({"fulcro$state":(function (){var G__47338 = this__45487__auto__;
var G__47339 = goog.object.get(props__45486__auto__,"fulcro$value");
return (init_state__45488__auto___47344.cljs$core$IFn$_invoke$arity$2 ? init_state__45488__auto___47344.cljs$core$IFn$_invoke$arity$2(G__47338,G__47339) : init_state__45488__auto___47344.call(null,G__47338,G__47339));
})()});
return obj47337;
})();
} else {
this__45487__auto__.state = (function (){var obj47341 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj47341;
})();
}

return null;
});})(options__45485__auto___47342))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Sample,new cljs.core.Keyword("app.client","Sample","app.client/Sample",-1058902991),options__45485__auto___47342);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.APP !== 'undefined')){
} else {
app.client.APP = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
}
app.client.init = (function app$client$init(){
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.APP,app.client.Sample,"app");
});
goog.exportSymbol('app.client.init', app.client.init);

//# sourceMappingURL=app.client.js.map
