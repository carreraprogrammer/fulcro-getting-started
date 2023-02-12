goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.rendering.keyframe_render');
goog.require('com.fulcrologic.fulcro.algorithms.denormalize');
goog.require('com.fulcrologic.fulcro.components');
goog.require('clojure.set');
goog.require('edn_query_language.core');
goog.require('taoensso.timbre');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__4120__auto__ = c;
if(cljs.core.truth_(and__4120__auto__)){
return ident;
} else {
return and__4120__auto__;
}
})())){
var map__61985 = app__$1;
var map__61985__$1 = (((((!((map__61985 == null))))?(((((map__61985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61985):map__61985);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61985__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,41,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__61985,map__61985__$1,state_atom,state_map,query,q,data_tree,new_props){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c)], null);
});})(map__61985,map__61985__$1,state_atom,state_map,query,q,data_tree,new_props))
,null)),null,-877561702);
}

if(cljs.core.truth_(com.fulcrologic.fulcro.components.mounted_QMARK_(c))){
return c.setState(((function (map__61985,map__61985__$1,state_atom,state_map,query,q,data_tree,new_props){
return (function (s){
return ({"fulcro$value": new_props});
});})(map__61985,map__61985__$1,state_atom,state_map,query,q,data_tree,new_props))
);
} else {
return null;
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,45,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",com.fulcrologic.fulcro.components.class__GT_registry_key(com.fulcrologic.fulcro.components.react_type(c)),"queries for data that changed, but does not have an ident. If that is your application root,","consider moving that changing state to a child component."], null);
}),null)),null,-2054627901);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__61993 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__61994 = null;
var count__61995 = (0);
var i__61996 = (0);
while(true){
if((i__61996 < count__61995)){
var c = chunk__61994.cljs$core$IIndexed$_nth$arity$2(null,i__61996);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__62165 = seq__61993;
var G__62166 = chunk__61994;
var G__62167 = count__61995;
var G__62168 = (i__61996 + (1));
seq__61993 = G__62165;
chunk__61994 = G__62166;
count__61995 = G__62167;
i__61996 = G__62168;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__61993);
if(temp__5804__auto__){
var seq__61993__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61993__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61993__$1);
var G__62171 = cljs.core.chunk_rest(seq__61993__$1);
var G__62172 = c__4550__auto__;
var G__62173 = cljs.core.count(c__4550__auto__);
var G__62174 = (0);
seq__61993 = G__62171;
chunk__61994 = G__62172;
count__61995 = G__62173;
i__61996 = G__62174;
continue;
} else {
var c = cljs.core.first(seq__61993__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__62176 = cljs.core.next(seq__61993__$1);
var G__62177 = null;
var G__62178 = (0);
var G__62179 = (0);
seq__61993 = G__62176;
chunk__61994 = G__62177;
count__61995 = G__62178;
i__61996 = G__62179;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__61999 = app__$1;
var map__61999__$1 = (((((!((map__61999 == null))))?(((((map__61999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61999):map__61999);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61999__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__62000 = cljs.core.deref(runtime_atom);
var map__62000__$1 = (((((!((map__62000 == null))))?(((((map__62000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62000):map__62000);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62000__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__62001 = indexes;
var map__62001__$1 = (((((!((map__62001 == null))))?(((((map__62001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62001):map__62001);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62001__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62001__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62001__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4131__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__62005 = cljs.core.seq(classes);
var chunk__62006 = null;
var count__62007 = (0);
var i__62008 = (0);
while(true){
if((i__62008 < count__62007)){
var class$ = chunk__62006.cljs$core$IIndexed$_nth$arity$2(null,i__62008);
var seq__62044_62182 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__62046_62183 = null;
var count__62047_62184 = (0);
var i__62048_62185 = (0);
while(true){
if((i__62048_62185 < count__62047_62184)){
var component_62190 = chunk__62046_62183.cljs$core$IIndexed$_nth$arity$2(null,i__62048_62185);
var component_ident_62191 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62190);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_62191,component_62190);


var G__62192 = seq__62044_62182;
var G__62193 = chunk__62046_62183;
var G__62194 = count__62047_62184;
var G__62195 = (i__62048_62185 + (1));
seq__62044_62182 = G__62192;
chunk__62046_62183 = G__62193;
count__62047_62184 = G__62194;
i__62048_62185 = G__62195;
continue;
} else {
var temp__5804__auto___62197 = cljs.core.seq(seq__62044_62182);
if(temp__5804__auto___62197){
var seq__62044_62198__$1 = temp__5804__auto___62197;
if(cljs.core.chunked_seq_QMARK_(seq__62044_62198__$1)){
var c__4550__auto___62199 = cljs.core.chunk_first(seq__62044_62198__$1);
var G__62200 = cljs.core.chunk_rest(seq__62044_62198__$1);
var G__62201 = c__4550__auto___62199;
var G__62202 = cljs.core.count(c__4550__auto___62199);
var G__62203 = (0);
seq__62044_62182 = G__62200;
chunk__62046_62183 = G__62201;
count__62047_62184 = G__62202;
i__62048_62185 = G__62203;
continue;
} else {
var component_62204 = cljs.core.first(seq__62044_62198__$1);
var component_ident_62205 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62204);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_62205,component_62204);


var G__62206 = cljs.core.next(seq__62044_62198__$1);
var G__62207 = null;
var G__62208 = (0);
var G__62209 = (0);
seq__62044_62182 = G__62206;
chunk__62046_62183 = G__62207;
count__62047_62184 = G__62208;
i__62048_62185 = G__62209;
continue;
}
} else {
}
}
break;
}


var G__62210 = seq__62005;
var G__62211 = chunk__62006;
var G__62212 = count__62007;
var G__62213 = (i__62008 + (1));
seq__62005 = G__62210;
chunk__62006 = G__62211;
count__62007 = G__62212;
i__62008 = G__62213;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62005);
if(temp__5804__auto__){
var seq__62005__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62005__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62005__$1);
var G__62218 = cljs.core.chunk_rest(seq__62005__$1);
var G__62219 = c__4550__auto__;
var G__62220 = cljs.core.count(c__4550__auto__);
var G__62221 = (0);
seq__62005 = G__62218;
chunk__62006 = G__62219;
count__62007 = G__62220;
i__62008 = G__62221;
continue;
} else {
var class$ = cljs.core.first(seq__62005__$1);
var seq__62054_62226 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__62056_62227 = null;
var count__62057_62228 = (0);
var i__62058_62229 = (0);
while(true){
if((i__62058_62229 < count__62057_62228)){
var component_62234 = chunk__62056_62227.cljs$core$IIndexed$_nth$arity$2(null,i__62058_62229);
var component_ident_62236 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62234);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_62236,component_62234);


var G__62243 = seq__62054_62226;
var G__62244 = chunk__62056_62227;
var G__62245 = count__62057_62228;
var G__62246 = (i__62058_62229 + (1));
seq__62054_62226 = G__62243;
chunk__62056_62227 = G__62244;
count__62057_62228 = G__62245;
i__62058_62229 = G__62246;
continue;
} else {
var temp__5804__auto___62247__$1 = cljs.core.seq(seq__62054_62226);
if(temp__5804__auto___62247__$1){
var seq__62054_62248__$1 = temp__5804__auto___62247__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62054_62248__$1)){
var c__4550__auto___62249 = cljs.core.chunk_first(seq__62054_62248__$1);
var G__62250 = cljs.core.chunk_rest(seq__62054_62248__$1);
var G__62251 = c__4550__auto___62249;
var G__62252 = cljs.core.count(c__4550__auto___62249);
var G__62253 = (0);
seq__62054_62226 = G__62250;
chunk__62056_62227 = G__62251;
count__62057_62228 = G__62252;
i__62058_62229 = G__62253;
continue;
} else {
var component_62254 = cljs.core.first(seq__62054_62248__$1);
var component_ident_62255 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62254);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_62255,component_62254);


var G__62256 = cljs.core.next(seq__62054_62248__$1);
var G__62257 = null;
var G__62258 = (0);
var G__62259 = (0);
seq__62054_62226 = G__62256;
chunk__62056_62227 = G__62257;
count__62057_62228 = G__62258;
i__62058_62229 = G__62259;
continue;
}
} else {
}
}
break;
}


var G__62265 = cljs.core.next(seq__62005__$1);
var G__62266 = null;
var G__62267 = (0);
var G__62268 = (0);
seq__62005 = G__62265;
chunk__62006 = G__62266;
count__62007 = G__62267;
i__62008 = G__62268;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__62067 = app__$1;
var map__62067__$1 = (((((!((map__62067 == null))))?(((((map__62067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62067):map__62067);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62067__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__62068 = cljs.core.deref(runtime_atom);
var map__62068__$1 = (((((!((map__62068 == null))))?(((((map__62068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62068):map__62068);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62068__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__62069 = indexes;
var map__62069__$1 = (((((!((map__62069 == null))))?(((((map__62069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62069):map__62069);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62069__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62069__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__62067,map__62067__$1,runtime_atom,map__62068,map__62068__$1,indexes,map__62069,map__62069__$1,prop__GT_classes,class__GT_components){
return (function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (classes,map__62067,map__62067__$1,runtime_atom,map__62068,map__62068__$1,indexes,map__62069,map__62069__$1,prop__GT_classes,class__GT_components){
return (function (p1__62065_SHARP_,p2__62066_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__62065_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__62066_SHARP_) : class__GT_components.call(null,p2__62066_SHARP_)));
});})(classes,map__62067,map__62067__$1,runtime_atom,map__62068,map__62068__$1,indexes,map__62069,map__62069__$1,prop__GT_classes,class__GT_components))
,cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
});})(map__62067,map__62067__$1,runtime_atom,map__62068,map__62068__$1,indexes,map__62069,map__62069__$1,prop__GT_classes,class__GT_components))
,cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__62082 = app__$1;
var map__62082__$1 = (((((!((map__62082 == null))))?(((((map__62082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62082):map__62082);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62082__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62082__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__62083 = cljs.core.deref(runtime_atom);
var map__62083__$1 = (((((!((map__62083 == null))))?(((((map__62083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62083):map__62083);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62083__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62083__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62083__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62083__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__62084 = indexes;
var map__62084__$1 = (((((!((map__62084 == null))))?(((((map__62084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62084):map__62084);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62084__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62084__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62084__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62084__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__62094 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__62094__$1 = (((((!((map__62094 == null))))?(((((map__62094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62094):map__62094);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62094__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62094__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__62098_62296 = cljs.core.seq(limited_to_render);
var chunk__62100_62297 = null;
var count__62101_62298 = (0);
var i__62102_62299 = (0);
while(true){
if((i__62102_62299 < count__62101_62298)){
var c_62300 = chunk__62100_62297.cljs$core$IIndexed$_nth$arity$2(null,i__62102_62299);
var ident_62302 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_62300);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_62302,c_62300);


var G__62307 = seq__62098_62296;
var G__62308 = chunk__62100_62297;
var G__62309 = count__62101_62298;
var G__62310 = (i__62102_62299 + (1));
seq__62098_62296 = G__62307;
chunk__62100_62297 = G__62308;
count__62101_62298 = G__62309;
i__62102_62299 = G__62310;
continue;
} else {
var temp__5804__auto___62311 = cljs.core.seq(seq__62098_62296);
if(temp__5804__auto___62311){
var seq__62098_62312__$1 = temp__5804__auto___62311;
if(cljs.core.chunked_seq_QMARK_(seq__62098_62312__$1)){
var c__4550__auto___62313 = cljs.core.chunk_first(seq__62098_62312__$1);
var G__62314 = cljs.core.chunk_rest(seq__62098_62312__$1);
var G__62315 = c__4550__auto___62313;
var G__62316 = cljs.core.count(c__4550__auto___62313);
var G__62317 = (0);
seq__62098_62296 = G__62314;
chunk__62100_62297 = G__62315;
count__62101_62298 = G__62316;
i__62102_62299 = G__62317;
continue;
} else {
var c_62318 = cljs.core.first(seq__62098_62312__$1);
var ident_62319 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_62318);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_62319,c_62318);


var G__62320 = cljs.core.next(seq__62098_62312__$1);
var G__62321 = null;
var G__62322 = (0);
var G__62323 = (0);
seq__62098_62296 = G__62320;
chunk__62100_62297 = G__62321;
count__62101_62298 = G__62322;
i__62102_62299 = G__62323;
continue;
}
} else {
}
}
break;
}

var seq__62110 = cljs.core.seq(limited_idents);
var chunk__62111 = null;
var count__62112 = (0);
var i__62113 = (0);
while(true){
if((i__62113 < count__62112)){
var i = chunk__62111.cljs$core$IIndexed$_nth$arity$2(null,i__62113);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__62324 = seq__62110;
var G__62325 = chunk__62111;
var G__62326 = count__62112;
var G__62327 = (i__62113 + (1));
seq__62110 = G__62324;
chunk__62111 = G__62325;
count__62112 = G__62326;
i__62113 = G__62327;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62110);
if(temp__5804__auto__){
var seq__62110__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62110__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62110__$1);
var G__62328 = cljs.core.chunk_rest(seq__62110__$1);
var G__62329 = c__4550__auto__;
var G__62330 = cljs.core.count(c__4550__auto__);
var G__62331 = (0);
seq__62110 = G__62328;
chunk__62111 = G__62329;
count__62112 = G__62330;
i__62113 = G__62331;
continue;
} else {
var i = cljs.core.first(seq__62110__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__62334 = cljs.core.next(seq__62110__$1);
var G__62335 = null;
var G__62336 = (0);
var G__62337 = (0);
seq__62110 = G__62334;
chunk__62111 = G__62335;
count__62112 = G__62336;
i__62113 = G__62337;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__4131__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (state_map,idents_in_joins__$1,map__62082,map__62082__$1,runtime_atom,state_atom,map__62083,map__62083__$1,indexes,last_rendered_state,to_refresh,only_refresh,map__62084,map__62084__$1,linked_props,ident__GT_components,prop__GT_classes,idents_in_joins,limited_refresh_QMARK_){
return (function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
});})(state_map,idents_in_joins__$1,map__62082,map__62082__$1,runtime_atom,state_atom,map__62083,map__62083__$1,indexes,last_rendered_state,to_refresh,only_refresh,map__62084,map__62084__$1,linked_props,ident__GT_components,prop__GT_classes,idents_in_joins,limited_refresh_QMARK_))
,cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__62121 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__62121__$1 = (((((!((map__62121 == null))))?(((((map__62121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62121):map__62121);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62121__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62121__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__62128_62344 = cljs.core.seq(all_idents);
var chunk__62129_62345 = null;
var count__62130_62346 = (0);
var i__62131_62347 = (0);
while(true){
if((i__62131_62347 < count__62130_62346)){
var i_62348 = chunk__62129_62345.cljs$core$IIndexed$_nth$arity$2(null,i__62131_62347);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_62348);


var G__62349 = seq__62128_62344;
var G__62350 = chunk__62129_62345;
var G__62351 = count__62130_62346;
var G__62352 = (i__62131_62347 + (1));
seq__62128_62344 = G__62349;
chunk__62129_62345 = G__62350;
count__62130_62346 = G__62351;
i__62131_62347 = G__62352;
continue;
} else {
var temp__5804__auto___62353 = cljs.core.seq(seq__62128_62344);
if(temp__5804__auto___62353){
var seq__62128_62354__$1 = temp__5804__auto___62353;
if(cljs.core.chunked_seq_QMARK_(seq__62128_62354__$1)){
var c__4550__auto___62355 = cljs.core.chunk_first(seq__62128_62354__$1);
var G__62356 = cljs.core.chunk_rest(seq__62128_62354__$1);
var G__62357 = c__4550__auto___62355;
var G__62358 = cljs.core.count(c__4550__auto___62355);
var G__62359 = (0);
seq__62128_62344 = G__62356;
chunk__62129_62345 = G__62357;
count__62130_62346 = G__62358;
i__62131_62347 = G__62359;
continue;
} else {
var i_62360 = cljs.core.first(seq__62128_62354__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_62360);


var G__62363 = cljs.core.next(seq__62128_62354__$1);
var G__62364 = null;
var G__62365 = (0);
var G__62366 = (0);
seq__62128_62344 = G__62363;
chunk__62129_62345 = G__62364;
count__62130_62346 = G__62365;
i__62131_62347 = G__62366;
continue;
}
} else {
}
}
break;
}

var seq__62136 = cljs.core.seq(extra_to_force);
var chunk__62138 = null;
var count__62139 = (0);
var i__62140 = (0);
while(true){
if((i__62140 < count__62139)){
var c = chunk__62138.cljs$core$IIndexed$_nth$arity$2(null,i__62140);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__62367 = seq__62136;
var G__62368 = chunk__62138;
var G__62369 = count__62139;
var G__62370 = (i__62140 + (1));
seq__62136 = G__62367;
chunk__62138 = G__62368;
count__62139 = G__62369;
i__62140 = G__62370;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62136);
if(temp__5804__auto__){
var seq__62136__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62136__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62136__$1);
var G__62372 = cljs.core.chunk_rest(seq__62136__$1);
var G__62373 = c__4550__auto__;
var G__62374 = cljs.core.count(c__4550__auto__);
var G__62375 = (0);
seq__62136 = G__62372;
chunk__62138 = G__62373;
count__62139 = G__62374;
i__62140 = G__62375;
continue;
} else {
var c = cljs.core.first(seq__62136__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__62376 = cljs.core.next(seq__62136__$1);
var G__62377 = null;
var G__62378 = (0);
var G__62379 = (0);
seq__62136 = G__62376;
chunk__62138 = G__62377;
count__62139 = G__62378;
i__62140 = G__62379;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__62149 = arguments.length;
switch (G__62149) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__62150){
var map__62151 = p__62150;
var map__62151__$1 = (((((!((map__62151 == null))))?(((((map__62151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62151):map__62151);
var options = map__62151__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62151__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62151__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4131__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e62154){var e = e62154;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,map__62151,map__62151__$1,options,force_root_QMARK_,root_props_changed_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
});})(e,map__62151,map__62151__$1,options,force_root_QMARK_,root_props_changed_QMARK_))
,null)),null,-726035670);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
});

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
