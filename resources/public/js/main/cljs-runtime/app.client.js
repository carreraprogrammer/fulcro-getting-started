goog.provide('app.client');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.application');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');

var options__45485__auto___47545 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Sample(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"HELLO WORLD!"]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Sample !== 'undefined')){
} else {
app.client.Sample = ((function (options__45485__auto___47545){
return (function app$client$Sample(props__45486__auto__){
var this__45487__auto__ = this;
var temp__5802__auto___47546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45485__auto___47545,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___47546)){
var init_state__45488__auto___47547 = temp__5802__auto___47546;
this__45487__auto__.state = (function (){var obj47540 = ({"fulcro$state":(function (){var G__47541 = this__45487__auto__;
var G__47542 = goog.object.get(props__45486__auto__,"fulcro$value");
return (init_state__45488__auto___47547.cljs$core$IFn$_invoke$arity$2 ? init_state__45488__auto___47547.cljs$core$IFn$_invoke$arity$2(G__47541,G__47542) : init_state__45488__auto___47547.call(null,G__47541,G__47542));
})()});
return obj47540;
})();
} else {
this__45487__auto__.state = (function (){var obj47544 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj47544;
})();
}

return null;
});})(options__45485__auto___47545))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Sample,new cljs.core.Keyword("app.client","Sample","app.client/Sample",-1058902991),options__45485__auto___47545);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.APP !== 'undefined')){
} else {
app.client.APP = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
}
app.client.f = (function app$client$f(x){
((2) + (2));

return (x * x);
});
app.client.init = (function app$client$init(){
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.APP,app.client.Sample,"app");
});
goog.exportSymbol('app.client.init', app.client.init);

//# sourceMappingURL=app.client.js.map
