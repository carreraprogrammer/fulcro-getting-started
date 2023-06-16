goog.provide('com.fulcrologic.fulcro.dom');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('com.fulcrologic.fulcro.components');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('com.fulcrologic.fulcro.dom_common');
goog.require('taoensso.timbre');





































































































































































































com.fulcrologic.fulcro.dom.element_marker = (function (){var G__64171 = React.createElement("div",null);
var G__64172 = "$$typeof";
return goog.object.get(G__64171,G__64172);
})();
/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return ((cljs.core.object_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.element_marker,goog.object.get(x,"$$typeof"))));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64173#","p1__64173#",-1196592264,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__64173#","p1__64173#",-1196592264,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__64173#","p1__64173#",-1196592264,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64174#","p1__64174#",1652760529,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__64174#","p1__64174#",1652760529,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__64174#","p1__64174#",1652760529,null))))))),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64175#","p1__64175#",-993978705,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__64175#","p1__64175#",-993978705,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__64175#","p1__64175#",-993978705,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__64175#","p1__64175#",-993978705,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(cljs.core.keyword_QMARK_,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-object","js-object",1830199158)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,(function (p1__64173_SHARP_){
return ((cljs.core.map_QMARK_(p1__64173_SHARP_)) && ((!(com.fulcrologic.fulcro.dom.element_QMARK_(p1__64173_SHARP_)))));
}),(function (p1__64174_SHARP_){
return ((cljs.core.object_QMARK_(p1__64174_SHARP_)) && ((!(com.fulcrologic.fulcro.dom.element_QMARK_(p1__64174_SHARP_)))));
})], null),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64173#","p1__64173#",-1196592264,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__64173#","p1__64173#",-1196592264,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__64173#","p1__64173#",-1196592264,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64174#","p1__64174#",1652760529,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__64174#","p1__64174#",1652760529,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__64174#","p1__64174#",1652760529,null))))))),cljs.spec.alpha.rep_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64175#","p1__64175#",-993978705,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__64175#","p1__64175#",-993978705,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__64175#","p1__64175#",-993978705,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__64175#","p1__64175#",-993978705,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"element","element",1974019749)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.number_QMARK_,(function (p1__64175_SHARP_){
return ((cljs.core.vector_QMARK_(p1__64175_SHARP_)) || (cljs.core.seq_QMARK_(p1__64175_SHARP_)) || (cljs.core.array_QMARK_(p1__64175_SHARP_)));
}),cljs.core.nil_QMARK_,com.fulcrologic.fulcro.dom.element_QMARK_], null),null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64173#","p1__64173#",-1196592264,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__64173#","p1__64173#",-1196592264,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__64173#","p1__64173#",-1196592264,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64174#","p1__64174#",1652760529,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__64174#","p1__64174#",1652760529,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__64174#","p1__64174#",1652760529,null))))))),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64175#","p1__64175#",-993978705,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__64175#","p1__64175#",-993978705,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__64175#","p1__64175#",-993978705,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__64175#","p1__64175#",-993978705,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null)))], null)));
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return ReactDOM.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must require cljsjs.react.dom.server to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__64236 = arguments.length;
switch (G__64236) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return ReactDOM.findDOMNode(component);
});

com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__64240 = component.refs;
var G__64240__$1 = (((G__64240 == null))?null:goog.object.get(G__64240,name));
if((G__64240__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__64240__$1);
}
});

com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2;

/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__64249 = arguments.length;
switch (G__64249) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___65444 = arguments.length;
var i__4731__auto___65445 = (0);
while(true){
if((i__4731__auto___65445 < len__4730__auto___65444)){
args_arr__4751__auto__.push((arguments[i__4731__auto___65445]));

var G__65446 = (i__4731__auto___65445 + (1));
i__4731__auto___65445 = G__65446;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
});

com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return React.createElement(tag,opts);
});

com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return React.createElement(tag,opts,children);
});

/** @this {Function} */
com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq64246){
var G__64247 = cljs.core.first(seq64246);
var seq64246__$1 = cljs.core.next(seq64246);
var G__64248 = cljs.core.first(seq64246__$1);
var seq64246__$2 = cljs.core.next(seq64246__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64247,G__64248,seq64246__$2);
});

com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2);

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return React.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = goog.object.getValueByKeys(component,"state","onChange");
var next_state = ({});
var inputRef = goog.object.get(next_props,"inputRef");
var G__64267_65447 = next_state;
var G__64268_65448 = next_props;
var G__64269_65449 = ({"onChange": on_change});
goog.object.extend(G__64267_65447,G__64268_65448,G__64269_65449);

goog.object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
goog.object.remove(next_state,"inputRef");

goog.object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(next_state);
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4120__auto__ = tag;
if(cljs.core.truth_(and__4120__auto__)){
var G__64273 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__64273) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__64273));
} else {
return and__4120__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
this$.state = (function (){var state = ({"ref": goog.object.get(props,"inputRef")});
var G__64281_65450 = state;
var G__64282_65451 = props;
var G__64283_65452 = ({"onChange": (function (){var G__64284 = goog.object.get(this$,"onChange");
var G__64285 = this$;
return goog.bind(G__64284,G__64285);
})()});
goog.object.extend(G__64281_65450,G__64282_65451,G__64283_65452);

goog.object.remove(state,"inputRef");

return state;
})();

return React.Component.apply(this$,arguments);
});
ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join('');

goog.inherits(ctor,React.Component);

var x64288_65453 = ctor.prototype;
x64288_65453.onChange = ((function (x64288_65453,ctor){
return (function (event){
var this$ = this;
var temp__5804__auto__ = this$.props.onChange;
if(cljs.core.truth_(temp__5804__auto__)){
var handler = temp__5804__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,goog.object.getValueByKeys(event,"target","value"));
} else {
return null;
}
});})(x64288_65453,ctor))
;

x64288_65453.componentWillReceiveProps = ((function (x64288_65453,ctor){
return (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","value");
var this_node = ReactDOM.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:(function (){var G__64293 = this_node;
var G__64294 = ((function (G__64293,state_value,this_node,this$,x64288_65453,ctor){
return (function (p1__64275_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__64275_SHARP_);
});})(G__64293,state_value,this_node,this$,x64288_65453,ctor))
;
return goog.dom.findNode(G__64293,G__64294);
})());
var element_value = goog.object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__4120__auto__ = state_value;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = element_value;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,149,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (state_value,this_node,value_node,element_value,this$,x64288_65453,ctor){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements."], null);
});})(state_value,this_node,value_node,element_value,this$,x64288_65453,ctor))
,null)),null,-1430559188);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
});})(x64288_65453,ctor))
;

x64288_65453.render = ((function (x64288_65453,ctor){
return (function (){
var this$ = this;
return React.createElement(element,this$.state);
});})(x64288_65453,ctor))
;


var real_factory = React.createFactory(ctor);
return ((function (real_factory,ctor){
return (function() { 
var G__65454__delegate = function (props,children){
var temp__5802__auto__ = goog.object.get(props,"ref");
if(cljs.core.truth_(temp__5802__auto__)){
var r = temp__5802__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
goog.object.extend(p,props);

goog.object.set(p,"inputRef",r);

goog.object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
};
var G__65454 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__65455__i = 0, G__65455__a = new Array(arguments.length -  1);
while (G__65455__i < G__65455__a.length) {G__65455__a[G__65455__i] = arguments[G__65455__i + 1]; ++G__65455__i;}
  children = new cljs.core.IndexedSeq(G__65455__a,0,null);
} 
return G__65454__delegate.call(this,props,children);};
G__65454.cljs$lang$maxFixedArity = 1;
G__65454.cljs$lang$applyTo = (function (arglist__65456){
var props = cljs.core.first(arglist__65456);
var children = cljs.core.rest(arglist__65456);
return G__65454__delegate(props,children);
});
G__65454.cljs$core$IFn$_invoke$arity$variadic = G__65454__delegate;
return G__65454;
})()
;
;})(real_factory,ctor))
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,com.fulcrologic.fulcro.components.force_children(tail));
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__64318 = tag;
switch (G__64318) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64318)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__64322 = arguments.length;
switch (G__64322) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
});

com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__64326 = args;
var seq__64327 = cljs.core.seq(vec__64326);
var first__64328 = cljs.core.first(seq__64327);
var seq__64327__$1 = cljs.core.next(seq__64327);
var head = first__64328;
var tail = seq__64327__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__64329 = (function (){var G__64330 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__64330,tail);

return G__64330;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64329) : f.call(null,G__64329));
} else {
if(com.fulcrologic.fulcro.dom.element_QMARK_(head)){
var G__64331 = (function (){var G__64332 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__64332,args);

return G__64332;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64331) : f.call(null,G__64331));
} else {
if(cljs.core.object_QMARK_(head)){
var G__64333 = (function (){var G__64334 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__64334,tail);

return G__64334;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64333) : f.call(null,G__64333));
} else {
if(cljs.core.map_QMARK_(head)){
var G__64336 = (function (){var G__64337 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__64337,tail);

return G__64337;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64336) : f.call(null,G__64336));
} else {
var G__64338 = (function (){var G__64339 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__64339,args);

return G__64339;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64338) : f.call(null,G__64338));

}
}
}
}
});

com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3;

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65468 = arguments.length;
var i__4731__auto___65469 = (0);
while(true){
if((i__4731__auto___65469 < len__4730__auto___65468)){
args__4736__auto__.push((arguments[i__4731__auto___65469]));

var G__65470 = (i__4731__auto___65469 + (1));
i__4731__auto___65469 = G__65470;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64361 = conformed_args__62943__auto__;
var map__64361__$1 = (((((!((map__64361 == null))))?(((((map__64361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64361):map__64361);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64361__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64361__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64361__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq64357){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64357));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65471 = arguments.length;
var i__4731__auto___65472 = (0);
while(true){
if((i__4731__auto___65472 < len__4730__auto___65471)){
args__4736__auto__.push((arguments[i__4731__auto___65472]));

var G__65473 = (i__4731__auto___65472 + (1));
i__4731__auto___65472 = G__65473;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64379 = conformed_args__62943__auto__;
var map__64379__$1 = (((((!((map__64379 == null))))?(((((map__64379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64379):map__64379);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64379__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64379__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64379__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq64371){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64371));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65474 = arguments.length;
var i__4731__auto___65475 = (0);
while(true){
if((i__4731__auto___65475 < len__4730__auto___65474)){
args__4736__auto__.push((arguments[i__4731__auto___65475]));

var G__65476 = (i__4731__auto___65475 + (1));
i__4731__auto___65475 = G__65476;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64390 = conformed_args__62943__auto__;
var map__64390__$1 = (((((!((map__64390 == null))))?(((((map__64390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64390):map__64390);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64390__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64390__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64390__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq64388){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64388));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65477 = arguments.length;
var i__4731__auto___65478 = (0);
while(true){
if((i__4731__auto___65478 < len__4730__auto___65477)){
args__4736__auto__.push((arguments[i__4731__auto___65478]));

var G__65479 = (i__4731__auto___65478 + (1));
i__4731__auto___65478 = G__65479;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64398 = conformed_args__62943__auto__;
var map__64398__$1 = (((((!((map__64398 == null))))?(((((map__64398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64398):map__64398);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64398__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64398__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64398__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq64396){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64396));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65480 = arguments.length;
var i__4731__auto___65481 = (0);
while(true){
if((i__4731__auto___65481 < len__4730__auto___65480)){
args__4736__auto__.push((arguments[i__4731__auto___65481]));

var G__65482 = (i__4731__auto___65481 + (1));
i__4731__auto___65481 = G__65482;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64405 = conformed_args__62943__auto__;
var map__64405__$1 = (((((!((map__64405 == null))))?(((((map__64405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64405):map__64405);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64405__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64405__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64405__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq64404){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64404));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65483 = arguments.length;
var i__4731__auto___65484 = (0);
while(true){
if((i__4731__auto___65484 < len__4730__auto___65483)){
args__4736__auto__.push((arguments[i__4731__auto___65484]));

var G__65485 = (i__4731__auto___65484 + (1));
i__4731__auto___65484 = G__65485;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64412 = conformed_args__62943__auto__;
var map__64412__$1 = (((((!((map__64412 == null))))?(((((map__64412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64412):map__64412);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq64409){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64409));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65486 = arguments.length;
var i__4731__auto___65487 = (0);
while(true){
if((i__4731__auto___65487 < len__4730__auto___65486)){
args__4736__auto__.push((arguments[i__4731__auto___65487]));

var G__65488 = (i__4731__auto___65487 + (1));
i__4731__auto___65487 = G__65488;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64427 = conformed_args__62943__auto__;
var map__64427__$1 = (((((!((map__64427 == null))))?(((((map__64427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64427):map__64427);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64427__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64427__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64427__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq64423){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64423));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65489 = arguments.length;
var i__4731__auto___65490 = (0);
while(true){
if((i__4731__auto___65490 < len__4730__auto___65489)){
args__4736__auto__.push((arguments[i__4731__auto___65490]));

var G__65491 = (i__4731__auto___65490 + (1));
i__4731__auto___65490 = G__65491;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64436 = conformed_args__62943__auto__;
var map__64436__$1 = (((((!((map__64436 == null))))?(((((map__64436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64436):map__64436);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64436__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64436__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64436__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq64433){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64433));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65492 = arguments.length;
var i__4731__auto___65493 = (0);
while(true){
if((i__4731__auto___65493 < len__4730__auto___65492)){
args__4736__auto__.push((arguments[i__4731__auto___65493]));

var G__65494 = (i__4731__auto___65493 + (1));
i__4731__auto___65493 = G__65494;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64447 = conformed_args__62943__auto__;
var map__64447__$1 = (((((!((map__64447 == null))))?(((((map__64447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64447):map__64447);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64447__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64447__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64447__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq64443){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64443));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65495 = arguments.length;
var i__4731__auto___65496 = (0);
while(true){
if((i__4731__auto___65496 < len__4730__auto___65495)){
args__4736__auto__.push((arguments[i__4731__auto___65496]));

var G__65497 = (i__4731__auto___65496 + (1));
i__4731__auto___65496 = G__65497;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64457 = conformed_args__62943__auto__;
var map__64457__$1 = (((((!((map__64457 == null))))?(((((map__64457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64457):map__64457);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64457__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64457__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64457__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq64453){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64453));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65498 = arguments.length;
var i__4731__auto___65499 = (0);
while(true){
if((i__4731__auto___65499 < len__4730__auto___65498)){
args__4736__auto__.push((arguments[i__4731__auto___65499]));

var G__65500 = (i__4731__auto___65499 + (1));
i__4731__auto___65499 = G__65500;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64465 = conformed_args__62943__auto__;
var map__64465__$1 = (((((!((map__64465 == null))))?(((((map__64465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64465):map__64465);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64465__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64465__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64465__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq64463){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64463));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65501 = arguments.length;
var i__4731__auto___65502 = (0);
while(true){
if((i__4731__auto___65502 < len__4730__auto___65501)){
args__4736__auto__.push((arguments[i__4731__auto___65502]));

var G__65503 = (i__4731__auto___65502 + (1));
i__4731__auto___65502 = G__65503;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64473 = conformed_args__62943__auto__;
var map__64473__$1 = (((((!((map__64473 == null))))?(((((map__64473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64473):map__64473);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64473__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64473__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64473__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq64470){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64470));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65504 = arguments.length;
var i__4731__auto___65505 = (0);
while(true){
if((i__4731__auto___65505 < len__4730__auto___65504)){
args__4736__auto__.push((arguments[i__4731__auto___65505]));

var G__65506 = (i__4731__auto___65505 + (1));
i__4731__auto___65505 = G__65506;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64484 = conformed_args__62943__auto__;
var map__64484__$1 = (((((!((map__64484 == null))))?(((((map__64484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64484):map__64484);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64484__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64484__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64484__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq64480){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64480));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65507 = arguments.length;
var i__4731__auto___65508 = (0);
while(true){
if((i__4731__auto___65508 < len__4730__auto___65507)){
args__4736__auto__.push((arguments[i__4731__auto___65508]));

var G__65509 = (i__4731__auto___65508 + (1));
i__4731__auto___65508 = G__65509;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64493 = conformed_args__62943__auto__;
var map__64493__$1 = (((((!((map__64493 == null))))?(((((map__64493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64493):map__64493);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64493__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64493__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64493__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq64486){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64486));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65510 = arguments.length;
var i__4731__auto___65511 = (0);
while(true){
if((i__4731__auto___65511 < len__4730__auto___65510)){
args__4736__auto__.push((arguments[i__4731__auto___65511]));

var G__65512 = (i__4731__auto___65511 + (1));
i__4731__auto___65511 = G__65512;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64505 = conformed_args__62943__auto__;
var map__64505__$1 = (((((!((map__64505 == null))))?(((((map__64505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64505):map__64505);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64505__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64505__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64505__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq64504){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64504));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65513 = arguments.length;
var i__4731__auto___65514 = (0);
while(true){
if((i__4731__auto___65514 < len__4730__auto___65513)){
args__4736__auto__.push((arguments[i__4731__auto___65514]));

var G__65515 = (i__4731__auto___65514 + (1));
i__4731__auto___65514 = G__65515;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64517 = conformed_args__62943__auto__;
var map__64517__$1 = (((((!((map__64517 == null))))?(((((map__64517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64517):map__64517);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64517__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64517__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64517__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq64508){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64508));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65516 = arguments.length;
var i__4731__auto___65517 = (0);
while(true){
if((i__4731__auto___65517 < len__4730__auto___65516)){
args__4736__auto__.push((arguments[i__4731__auto___65517]));

var G__65518 = (i__4731__auto___65517 + (1));
i__4731__auto___65517 = G__65518;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64527 = conformed_args__62943__auto__;
var map__64527__$1 = (((((!((map__64527 == null))))?(((((map__64527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64527):map__64527);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64527__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64527__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64527__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq64523){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64523));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65519 = arguments.length;
var i__4731__auto___65520 = (0);
while(true){
if((i__4731__auto___65520 < len__4730__auto___65519)){
args__4736__auto__.push((arguments[i__4731__auto___65520]));

var G__65521 = (i__4731__auto___65520 + (1));
i__4731__auto___65520 = G__65521;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64537 = conformed_args__62943__auto__;
var map__64537__$1 = (((((!((map__64537 == null))))?(((((map__64537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64537):map__64537);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64537__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64537__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64537__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq64529){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64529));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65522 = arguments.length;
var i__4731__auto___65523 = (0);
while(true){
if((i__4731__auto___65523 < len__4730__auto___65522)){
args__4736__auto__.push((arguments[i__4731__auto___65523]));

var G__65524 = (i__4731__auto___65523 + (1));
i__4731__auto___65523 = G__65524;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64549 = conformed_args__62943__auto__;
var map__64549__$1 = (((((!((map__64549 == null))))?(((((map__64549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64549):map__64549);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64549__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64549__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64549__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq64540){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64540));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65525 = arguments.length;
var i__4731__auto___65526 = (0);
while(true){
if((i__4731__auto___65526 < len__4730__auto___65525)){
args__4736__auto__.push((arguments[i__4731__auto___65526]));

var G__65527 = (i__4731__auto___65526 + (1));
i__4731__auto___65526 = G__65527;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64558 = conformed_args__62943__auto__;
var map__64558__$1 = (((((!((map__64558 == null))))?(((((map__64558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64558):map__64558);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64558__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64558__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64558__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq64557){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64557));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65528 = arguments.length;
var i__4731__auto___65529 = (0);
while(true){
if((i__4731__auto___65529 < len__4730__auto___65528)){
args__4736__auto__.push((arguments[i__4731__auto___65529]));

var G__65530 = (i__4731__auto___65529 + (1));
i__4731__auto___65529 = G__65530;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64564 = conformed_args__62943__auto__;
var map__64564__$1 = (((((!((map__64564 == null))))?(((((map__64564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64564):map__64564);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64564__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64564__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64564__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq64563){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64563));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65531 = arguments.length;
var i__4731__auto___65532 = (0);
while(true){
if((i__4731__auto___65532 < len__4730__auto___65531)){
args__4736__auto__.push((arguments[i__4731__auto___65532]));

var G__65533 = (i__4731__auto___65532 + (1));
i__4731__auto___65532 = G__65533;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64572 = conformed_args__62943__auto__;
var map__64572__$1 = (((((!((map__64572 == null))))?(((((map__64572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64572):map__64572);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64572__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64572__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64572__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq64569){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64569));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65534 = arguments.length;
var i__4731__auto___65535 = (0);
while(true){
if((i__4731__auto___65535 < len__4730__auto___65534)){
args__4736__auto__.push((arguments[i__4731__auto___65535]));

var G__65536 = (i__4731__auto___65535 + (1));
i__4731__auto___65535 = G__65536;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64577 = conformed_args__62943__auto__;
var map__64577__$1 = (((((!((map__64577 == null))))?(((((map__64577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64577):map__64577);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64577__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64577__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64577__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq64575){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64575));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65537 = arguments.length;
var i__4731__auto___65538 = (0);
while(true){
if((i__4731__auto___65538 < len__4730__auto___65537)){
args__4736__auto__.push((arguments[i__4731__auto___65538]));

var G__65539 = (i__4731__auto___65538 + (1));
i__4731__auto___65538 = G__65539;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64586 = conformed_args__62943__auto__;
var map__64586__$1 = (((((!((map__64586 == null))))?(((((map__64586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64586):map__64586);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64586__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64586__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64586__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq64582){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64582));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65540 = arguments.length;
var i__4731__auto___65541 = (0);
while(true){
if((i__4731__auto___65541 < len__4730__auto___65540)){
args__4736__auto__.push((arguments[i__4731__auto___65541]));

var G__65542 = (i__4731__auto___65541 + (1));
i__4731__auto___65541 = G__65542;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64603 = conformed_args__62943__auto__;
var map__64603__$1 = (((((!((map__64603 == null))))?(((((map__64603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64603):map__64603);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64603__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64603__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64603__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq64594){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64594));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65543 = arguments.length;
var i__4731__auto___65544 = (0);
while(true){
if((i__4731__auto___65544 < len__4730__auto___65543)){
args__4736__auto__.push((arguments[i__4731__auto___65544]));

var G__65545 = (i__4731__auto___65544 + (1));
i__4731__auto___65544 = G__65545;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64615 = conformed_args__62943__auto__;
var map__64615__$1 = (((((!((map__64615 == null))))?(((((map__64615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64615):map__64615);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64615__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64615__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64615__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq64606){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64606));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65546 = arguments.length;
var i__4731__auto___65547 = (0);
while(true){
if((i__4731__auto___65547 < len__4730__auto___65546)){
args__4736__auto__.push((arguments[i__4731__auto___65547]));

var G__65548 = (i__4731__auto___65547 + (1));
i__4731__auto___65547 = G__65548;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64628 = conformed_args__62943__auto__;
var map__64628__$1 = (((((!((map__64628 == null))))?(((((map__64628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64628):map__64628);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64628__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64628__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64628__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq64623){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64623));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65549 = arguments.length;
var i__4731__auto___65550 = (0);
while(true){
if((i__4731__auto___65550 < len__4730__auto___65549)){
args__4736__auto__.push((arguments[i__4731__auto___65550]));

var G__65551 = (i__4731__auto___65550 + (1));
i__4731__auto___65550 = G__65551;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64634 = conformed_args__62943__auto__;
var map__64634__$1 = (((((!((map__64634 == null))))?(((((map__64634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64634):map__64634);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64634__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64634__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64634__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq64631){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64631));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65552 = arguments.length;
var i__4731__auto___65553 = (0);
while(true){
if((i__4731__auto___65553 < len__4730__auto___65552)){
args__4736__auto__.push((arguments[i__4731__auto___65553]));

var G__65554 = (i__4731__auto___65553 + (1));
i__4731__auto___65553 = G__65554;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64643 = conformed_args__62943__auto__;
var map__64643__$1 = (((((!((map__64643 == null))))?(((((map__64643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64643):map__64643);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64643__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64643__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64643__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq64640){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64640));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65555 = arguments.length;
var i__4731__auto___65556 = (0);
while(true){
if((i__4731__auto___65556 < len__4730__auto___65555)){
args__4736__auto__.push((arguments[i__4731__auto___65556]));

var G__65557 = (i__4731__auto___65556 + (1));
i__4731__auto___65556 = G__65557;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64646 = conformed_args__62943__auto__;
var map__64646__$1 = (((((!((map__64646 == null))))?(((((map__64646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64646):map__64646);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64646__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64646__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64646__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq64645){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64645));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65558 = arguments.length;
var i__4731__auto___65559 = (0);
while(true){
if((i__4731__auto___65559 < len__4730__auto___65558)){
args__4736__auto__.push((arguments[i__4731__auto___65559]));

var G__65560 = (i__4731__auto___65559 + (1));
i__4731__auto___65559 = G__65560;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64652 = conformed_args__62943__auto__;
var map__64652__$1 = (((((!((map__64652 == null))))?(((((map__64652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64652):map__64652);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64652__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64652__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64652__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq64651){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64651));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65561 = arguments.length;
var i__4731__auto___65562 = (0);
while(true){
if((i__4731__auto___65562 < len__4730__auto___65561)){
args__4736__auto__.push((arguments[i__4731__auto___65562]));

var G__65563 = (i__4731__auto___65562 + (1));
i__4731__auto___65562 = G__65563;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64655 = conformed_args__62943__auto__;
var map__64655__$1 = (((((!((map__64655 == null))))?(((((map__64655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64655):map__64655);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64655__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64655__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64655__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq64654){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64654));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65564 = arguments.length;
var i__4731__auto___65565 = (0);
while(true){
if((i__4731__auto___65565 < len__4730__auto___65564)){
args__4736__auto__.push((arguments[i__4731__auto___65565]));

var G__65566 = (i__4731__auto___65565 + (1));
i__4731__auto___65565 = G__65566;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64658 = conformed_args__62943__auto__;
var map__64658__$1 = (((((!((map__64658 == null))))?(((((map__64658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64658):map__64658);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64658__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64658__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64658__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq64657){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64657));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65567 = arguments.length;
var i__4731__auto___65568 = (0);
while(true){
if((i__4731__auto___65568 < len__4730__auto___65567)){
args__4736__auto__.push((arguments[i__4731__auto___65568]));

var G__65569 = (i__4731__auto___65568 + (1));
i__4731__auto___65568 = G__65569;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64662 = conformed_args__62943__auto__;
var map__64662__$1 = (((((!((map__64662 == null))))?(((((map__64662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64662):map__64662);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64662__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64662__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64662__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq64660){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64660));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65570 = arguments.length;
var i__4731__auto___65571 = (0);
while(true){
if((i__4731__auto___65571 < len__4730__auto___65570)){
args__4736__auto__.push((arguments[i__4731__auto___65571]));

var G__65572 = (i__4731__auto___65571 + (1));
i__4731__auto___65571 = G__65572;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64665 = conformed_args__62943__auto__;
var map__64665__$1 = (((((!((map__64665 == null))))?(((((map__64665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64665):map__64665);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64665__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64665__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64665__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq64664){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64664));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65573 = arguments.length;
var i__4731__auto___65574 = (0);
while(true){
if((i__4731__auto___65574 < len__4730__auto___65573)){
args__4736__auto__.push((arguments[i__4731__auto___65574]));

var G__65575 = (i__4731__auto___65574 + (1));
i__4731__auto___65574 = G__65575;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64668 = conformed_args__62943__auto__;
var map__64668__$1 = (((((!((map__64668 == null))))?(((((map__64668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64668):map__64668);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64668__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64668__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64668__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq64667){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64667));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65576 = arguments.length;
var i__4731__auto___65577 = (0);
while(true){
if((i__4731__auto___65577 < len__4730__auto___65576)){
args__4736__auto__.push((arguments[i__4731__auto___65577]));

var G__65578 = (i__4731__auto___65577 + (1));
i__4731__auto___65577 = G__65578;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64676 = conformed_args__62943__auto__;
var map__64676__$1 = (((((!((map__64676 == null))))?(((((map__64676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64676):map__64676);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64676__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64676__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64676__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq64670){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64670));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65579 = arguments.length;
var i__4731__auto___65580 = (0);
while(true){
if((i__4731__auto___65580 < len__4730__auto___65579)){
args__4736__auto__.push((arguments[i__4731__auto___65580]));

var G__65581 = (i__4731__auto___65580 + (1));
i__4731__auto___65580 = G__65581;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64701 = conformed_args__62943__auto__;
var map__64701__$1 = (((((!((map__64701 == null))))?(((((map__64701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64701):map__64701);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64701__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64701__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64701__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq64691){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64691));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65582 = arguments.length;
var i__4731__auto___65583 = (0);
while(true){
if((i__4731__auto___65583 < len__4730__auto___65582)){
args__4736__auto__.push((arguments[i__4731__auto___65583]));

var G__65584 = (i__4731__auto___65583 + (1));
i__4731__auto___65583 = G__65584;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64729 = conformed_args__62943__auto__;
var map__64729__$1 = (((((!((map__64729 == null))))?(((((map__64729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64729):map__64729);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64729__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64729__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64729__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq64721){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64721));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65585 = arguments.length;
var i__4731__auto___65586 = (0);
while(true){
if((i__4731__auto___65586 < len__4730__auto___65585)){
args__4736__auto__.push((arguments[i__4731__auto___65586]));

var G__65587 = (i__4731__auto___65586 + (1));
i__4731__auto___65586 = G__65587;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64749 = conformed_args__62943__auto__;
var map__64749__$1 = (((((!((map__64749 == null))))?(((((map__64749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64749):map__64749);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64749__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64749__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64749__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq64742){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64742));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65588 = arguments.length;
var i__4731__auto___65589 = (0);
while(true){
if((i__4731__auto___65589 < len__4730__auto___65588)){
args__4736__auto__.push((arguments[i__4731__auto___65589]));

var G__65590 = (i__4731__auto___65589 + (1));
i__4731__auto___65589 = G__65590;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64757 = conformed_args__62943__auto__;
var map__64757__$1 = (((((!((map__64757 == null))))?(((((map__64757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64757):map__64757);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64757__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64757__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64757__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq64754){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64754));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65591 = arguments.length;
var i__4731__auto___65592 = (0);
while(true){
if((i__4731__auto___65592 < len__4730__auto___65591)){
args__4736__auto__.push((arguments[i__4731__auto___65592]));

var G__65593 = (i__4731__auto___65592 + (1));
i__4731__auto___65592 = G__65593;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64768 = conformed_args__62943__auto__;
var map__64768__$1 = (((((!((map__64768 == null))))?(((((map__64768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64768):map__64768);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64768__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64768__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64768__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq64764){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64764));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65594 = arguments.length;
var i__4731__auto___65595 = (0);
while(true){
if((i__4731__auto___65595 < len__4730__auto___65594)){
args__4736__auto__.push((arguments[i__4731__auto___65595]));

var G__65596 = (i__4731__auto___65595 + (1));
i__4731__auto___65595 = G__65596;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64783 = conformed_args__62943__auto__;
var map__64783__$1 = (((((!((map__64783 == null))))?(((((map__64783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64783):map__64783);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64783__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64783__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64783__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq64775){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64775));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65597 = arguments.length;
var i__4731__auto___65598 = (0);
while(true){
if((i__4731__auto___65598 < len__4730__auto___65597)){
args__4736__auto__.push((arguments[i__4731__auto___65598]));

var G__65599 = (i__4731__auto___65598 + (1));
i__4731__auto___65598 = G__65599;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64789 = conformed_args__62943__auto__;
var map__64789__$1 = (((((!((map__64789 == null))))?(((((map__64789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64789):map__64789);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64789__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64789__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64789__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq64785){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64785));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65600 = arguments.length;
var i__4731__auto___65601 = (0);
while(true){
if((i__4731__auto___65601 < len__4730__auto___65600)){
args__4736__auto__.push((arguments[i__4731__auto___65601]));

var G__65602 = (i__4731__auto___65601 + (1));
i__4731__auto___65601 = G__65602;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64801 = conformed_args__62943__auto__;
var map__64801__$1 = (((((!((map__64801 == null))))?(((((map__64801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64801):map__64801);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64801__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64801__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64801__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq64800){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64800));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65603 = arguments.length;
var i__4731__auto___65604 = (0);
while(true){
if((i__4731__auto___65604 < len__4730__auto___65603)){
args__4736__auto__.push((arguments[i__4731__auto___65604]));

var G__65605 = (i__4731__auto___65604 + (1));
i__4731__auto___65604 = G__65605;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64812 = conformed_args__62943__auto__;
var map__64812__$1 = (((((!((map__64812 == null))))?(((((map__64812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64812):map__64812);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64812__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64812__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64812__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq64808){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64808));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65606 = arguments.length;
var i__4731__auto___65607 = (0);
while(true){
if((i__4731__auto___65607 < len__4730__auto___65606)){
args__4736__auto__.push((arguments[i__4731__auto___65607]));

var G__65608 = (i__4731__auto___65607 + (1));
i__4731__auto___65607 = G__65608;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64820 = conformed_args__62943__auto__;
var map__64820__$1 = (((((!((map__64820 == null))))?(((((map__64820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64820):map__64820);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64820__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64820__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64820__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq64816){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64816));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65609 = arguments.length;
var i__4731__auto___65610 = (0);
while(true){
if((i__4731__auto___65610 < len__4730__auto___65609)){
args__4736__auto__.push((arguments[i__4731__auto___65610]));

var G__65611 = (i__4731__auto___65610 + (1));
i__4731__auto___65610 = G__65611;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64850 = conformed_args__62943__auto__;
var map__64850__$1 = (((((!((map__64850 == null))))?(((((map__64850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64850):map__64850);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64850__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64850__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64850__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq64848){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64848));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65612 = arguments.length;
var i__4731__auto___65613 = (0);
while(true){
if((i__4731__auto___65613 < len__4730__auto___65612)){
args__4736__auto__.push((arguments[i__4731__auto___65613]));

var G__65614 = (i__4731__auto___65613 + (1));
i__4731__auto___65613 = G__65614;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64854 = conformed_args__62943__auto__;
var map__64854__$1 = (((((!((map__64854 == null))))?(((((map__64854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64854):map__64854);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64854__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64854__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64854__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq64852){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64852));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65615 = arguments.length;
var i__4731__auto___65616 = (0);
while(true){
if((i__4731__auto___65616 < len__4730__auto___65615)){
args__4736__auto__.push((arguments[i__4731__auto___65616]));

var G__65617 = (i__4731__auto___65616 + (1));
i__4731__auto___65616 = G__65617;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64857 = conformed_args__62943__auto__;
var map__64857__$1 = (((((!((map__64857 == null))))?(((((map__64857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64857):map__64857);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64857__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64857__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64857__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq64856){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64856));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65618 = arguments.length;
var i__4731__auto___65619 = (0);
while(true){
if((i__4731__auto___65619 < len__4730__auto___65618)){
args__4736__auto__.push((arguments[i__4731__auto___65619]));

var G__65620 = (i__4731__auto___65619 + (1));
i__4731__auto___65619 = G__65620;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64860 = conformed_args__62943__auto__;
var map__64860__$1 = (((((!((map__64860 == null))))?(((((map__64860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64860):map__64860);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64860__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64860__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64860__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq64859){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64859));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65621 = arguments.length;
var i__4731__auto___65622 = (0);
while(true){
if((i__4731__auto___65622 < len__4730__auto___65621)){
args__4736__auto__.push((arguments[i__4731__auto___65622]));

var G__65623 = (i__4731__auto___65622 + (1));
i__4731__auto___65622 = G__65623;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64869 = conformed_args__62943__auto__;
var map__64869__$1 = (((((!((map__64869 == null))))?(((((map__64869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64869):map__64869);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64869__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64869__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64869__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq64863){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64863));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65624 = arguments.length;
var i__4731__auto___65625 = (0);
while(true){
if((i__4731__auto___65625 < len__4730__auto___65624)){
args__4736__auto__.push((arguments[i__4731__auto___65625]));

var G__65626 = (i__4731__auto___65625 + (1));
i__4731__auto___65625 = G__65626;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64876 = conformed_args__62943__auto__;
var map__64876__$1 = (((((!((map__64876 == null))))?(((((map__64876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64876):map__64876);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64876__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64876__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64876__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq64872){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64872));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65627 = arguments.length;
var i__4731__auto___65628 = (0);
while(true){
if((i__4731__auto___65628 < len__4730__auto___65627)){
args__4736__auto__.push((arguments[i__4731__auto___65628]));

var G__65629 = (i__4731__auto___65628 + (1));
i__4731__auto___65628 = G__65629;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64880 = conformed_args__62943__auto__;
var map__64880__$1 = (((((!((map__64880 == null))))?(((((map__64880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64880):map__64880);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64880__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64880__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64880__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq64878){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64878));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65630 = arguments.length;
var i__4731__auto___65631 = (0);
while(true){
if((i__4731__auto___65631 < len__4730__auto___65630)){
args__4736__auto__.push((arguments[i__4731__auto___65631]));

var G__65632 = (i__4731__auto___65631 + (1));
i__4731__auto___65631 = G__65632;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64885 = conformed_args__62943__auto__;
var map__64885__$1 = (((((!((map__64885 == null))))?(((((map__64885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64885):map__64885);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64885__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64885__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64885__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq64882){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64882));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65633 = arguments.length;
var i__4731__auto___65634 = (0);
while(true){
if((i__4731__auto___65634 < len__4730__auto___65633)){
args__4736__auto__.push((arguments[i__4731__auto___65634]));

var G__65635 = (i__4731__auto___65634 + (1));
i__4731__auto___65634 = G__65635;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64891 = conformed_args__62943__auto__;
var map__64891__$1 = (((((!((map__64891 == null))))?(((((map__64891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64891):map__64891);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64891__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64891__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64891__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq64887){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64887));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65636 = arguments.length;
var i__4731__auto___65637 = (0);
while(true){
if((i__4731__auto___65637 < len__4730__auto___65636)){
args__4736__auto__.push((arguments[i__4731__auto___65637]));

var G__65638 = (i__4731__auto___65637 + (1));
i__4731__auto___65637 = G__65638;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64896 = conformed_args__62943__auto__;
var map__64896__$1 = (((((!((map__64896 == null))))?(((((map__64896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64896):map__64896);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64896__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64896__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64896__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq64893){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64893));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65639 = arguments.length;
var i__4731__auto___65640 = (0);
while(true){
if((i__4731__auto___65640 < len__4730__auto___65639)){
args__4736__auto__.push((arguments[i__4731__auto___65640]));

var G__65641 = (i__4731__auto___65640 + (1));
i__4731__auto___65640 = G__65641;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64912 = conformed_args__62943__auto__;
var map__64912__$1 = (((((!((map__64912 == null))))?(((((map__64912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64912):map__64912);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64912__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64912__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64912__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq64907){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64907));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65642 = arguments.length;
var i__4731__auto___65643 = (0);
while(true){
if((i__4731__auto___65643 < len__4730__auto___65642)){
args__4736__auto__.push((arguments[i__4731__auto___65643]));

var G__65644 = (i__4731__auto___65643 + (1));
i__4731__auto___65643 = G__65644;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64918 = conformed_args__62943__auto__;
var map__64918__$1 = (((((!((map__64918 == null))))?(((((map__64918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64918):map__64918);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64918__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64918__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64918__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq64916){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64916));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65645 = arguments.length;
var i__4731__auto___65646 = (0);
while(true){
if((i__4731__auto___65646 < len__4730__auto___65645)){
args__4736__auto__.push((arguments[i__4731__auto___65646]));

var G__65647 = (i__4731__auto___65646 + (1));
i__4731__auto___65646 = G__65647;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64929 = conformed_args__62943__auto__;
var map__64929__$1 = (((((!((map__64929 == null))))?(((((map__64929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64929):map__64929);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64929__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64929__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64929__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq64926){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64926));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65648 = arguments.length;
var i__4731__auto___65649 = (0);
while(true){
if((i__4731__auto___65649 < len__4730__auto___65648)){
args__4736__auto__.push((arguments[i__4731__auto___65649]));

var G__65650 = (i__4731__auto___65649 + (1));
i__4731__auto___65649 = G__65650;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64934 = conformed_args__62943__auto__;
var map__64934__$1 = (((((!((map__64934 == null))))?(((((map__64934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64934):map__64934);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64934__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64934__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64934__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq64932){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64932));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65651 = arguments.length;
var i__4731__auto___65652 = (0);
while(true){
if((i__4731__auto___65652 < len__4730__auto___65651)){
args__4736__auto__.push((arguments[i__4731__auto___65652]));

var G__65653 = (i__4731__auto___65652 + (1));
i__4731__auto___65652 = G__65653;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64940 = conformed_args__62943__auto__;
var map__64940__$1 = (((((!((map__64940 == null))))?(((((map__64940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64940):map__64940);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64940__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64940__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64940__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq64936){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64936));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65654 = arguments.length;
var i__4731__auto___65655 = (0);
while(true){
if((i__4731__auto___65655 < len__4730__auto___65654)){
args__4736__auto__.push((arguments[i__4731__auto___65655]));

var G__65656 = (i__4731__auto___65655 + (1));
i__4731__auto___65655 = G__65656;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64954 = conformed_args__62943__auto__;
var map__64954__$1 = (((((!((map__64954 == null))))?(((((map__64954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64954):map__64954);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64954__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64954__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64954__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq64950){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64950));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65657 = arguments.length;
var i__4731__auto___65658 = (0);
while(true){
if((i__4731__auto___65658 < len__4730__auto___65657)){
args__4736__auto__.push((arguments[i__4731__auto___65658]));

var G__65659 = (i__4731__auto___65658 + (1));
i__4731__auto___65658 = G__65659;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64958 = conformed_args__62943__auto__;
var map__64958__$1 = (((((!((map__64958 == null))))?(((((map__64958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64958):map__64958);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64958__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64958__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64958__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq64957){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64957));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65660 = arguments.length;
var i__4731__auto___65661 = (0);
while(true){
if((i__4731__auto___65661 < len__4730__auto___65660)){
args__4736__auto__.push((arguments[i__4731__auto___65661]));

var G__65662 = (i__4731__auto___65661 + (1));
i__4731__auto___65661 = G__65662;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64965 = conformed_args__62943__auto__;
var map__64965__$1 = (((((!((map__64965 == null))))?(((((map__64965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64965):map__64965);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64965__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64965__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64965__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq64963){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64963));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65663 = arguments.length;
var i__4731__auto___65664 = (0);
while(true){
if((i__4731__auto___65664 < len__4730__auto___65663)){
args__4736__auto__.push((arguments[i__4731__auto___65664]));

var G__65665 = (i__4731__auto___65664 + (1));
i__4731__auto___65664 = G__65665;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64971 = conformed_args__62943__auto__;
var map__64971__$1 = (((((!((map__64971 == null))))?(((((map__64971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64971):map__64971);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64971__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64971__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64971__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq64967){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64967));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65666 = arguments.length;
var i__4731__auto___65667 = (0);
while(true){
if((i__4731__auto___65667 < len__4730__auto___65666)){
args__4736__auto__.push((arguments[i__4731__auto___65667]));

var G__65668 = (i__4731__auto___65667 + (1));
i__4731__auto___65667 = G__65668;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64976 = conformed_args__62943__auto__;
var map__64976__$1 = (((((!((map__64976 == null))))?(((((map__64976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64976):map__64976);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64976__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64976__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64976__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq64973){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64973));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65669 = arguments.length;
var i__4731__auto___65670 = (0);
while(true){
if((i__4731__auto___65670 < len__4730__auto___65669)){
args__4736__auto__.push((arguments[i__4731__auto___65670]));

var G__65671 = (i__4731__auto___65670 + (1));
i__4731__auto___65670 = G__65671;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64982 = conformed_args__62943__auto__;
var map__64982__$1 = (((((!((map__64982 == null))))?(((((map__64982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64982):map__64982);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64982__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64982__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64982__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq64981){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64981));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65672 = arguments.length;
var i__4731__auto___65673 = (0);
while(true){
if((i__4731__auto___65673 < len__4730__auto___65672)){
args__4736__auto__.push((arguments[i__4731__auto___65673]));

var G__65674 = (i__4731__auto___65673 + (1));
i__4731__auto___65673 = G__65674;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64993 = conformed_args__62943__auto__;
var map__64993__$1 = (((((!((map__64993 == null))))?(((((map__64993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64993):map__64993);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64993__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64993__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64993__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq64984){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64984));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65675 = arguments.length;
var i__4731__auto___65676 = (0);
while(true){
if((i__4731__auto___65676 < len__4730__auto___65675)){
args__4736__auto__.push((arguments[i__4731__auto___65676]));

var G__65677 = (i__4731__auto___65676 + (1));
i__4731__auto___65676 = G__65677;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65001 = conformed_args__62943__auto__;
var map__65001__$1 = (((((!((map__65001 == null))))?(((((map__65001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65001):map__65001);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65001__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65001__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65001__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq64999){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64999));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65678 = arguments.length;
var i__4731__auto___65679 = (0);
while(true){
if((i__4731__auto___65679 < len__4730__auto___65678)){
args__4736__auto__.push((arguments[i__4731__auto___65679]));

var G__65680 = (i__4731__auto___65679 + (1));
i__4731__auto___65679 = G__65680;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65007 = conformed_args__62943__auto__;
var map__65007__$1 = (((((!((map__65007 == null))))?(((((map__65007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65007):map__65007);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65007__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65007__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65007__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq65003){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65003));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65681 = arguments.length;
var i__4731__auto___65682 = (0);
while(true){
if((i__4731__auto___65682 < len__4730__auto___65681)){
args__4736__auto__.push((arguments[i__4731__auto___65682]));

var G__65683 = (i__4731__auto___65682 + (1));
i__4731__auto___65682 = G__65683;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65010 = conformed_args__62943__auto__;
var map__65010__$1 = (((((!((map__65010 == null))))?(((((map__65010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65010):map__65010);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65010__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65010__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65010__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq65009){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65009));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65684 = arguments.length;
var i__4731__auto___65685 = (0);
while(true){
if((i__4731__auto___65685 < len__4730__auto___65684)){
args__4736__auto__.push((arguments[i__4731__auto___65685]));

var G__65686 = (i__4731__auto___65685 + (1));
i__4731__auto___65685 = G__65686;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65017 = conformed_args__62943__auto__;
var map__65017__$1 = (((((!((map__65017 == null))))?(((((map__65017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65017):map__65017);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65017__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65017__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65017__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq65015){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65015));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65687 = arguments.length;
var i__4731__auto___65688 = (0);
while(true){
if((i__4731__auto___65688 < len__4730__auto___65687)){
args__4736__auto__.push((arguments[i__4731__auto___65688]));

var G__65689 = (i__4731__auto___65688 + (1));
i__4731__auto___65688 = G__65689;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65021 = conformed_args__62943__auto__;
var map__65021__$1 = (((((!((map__65021 == null))))?(((((map__65021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65021):map__65021);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65021__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65021__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65021__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq65020){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65020));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65690 = arguments.length;
var i__4731__auto___65691 = (0);
while(true){
if((i__4731__auto___65691 < len__4730__auto___65690)){
args__4736__auto__.push((arguments[i__4731__auto___65691]));

var G__65692 = (i__4731__auto___65691 + (1));
i__4731__auto___65691 = G__65692;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65050 = conformed_args__62943__auto__;
var map__65050__$1 = (((((!((map__65050 == null))))?(((((map__65050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65050):map__65050);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65050__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65050__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65050__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq65042){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65042));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65693 = arguments.length;
var i__4731__auto___65694 = (0);
while(true){
if((i__4731__auto___65694 < len__4730__auto___65693)){
args__4736__auto__.push((arguments[i__4731__auto___65694]));

var G__65695 = (i__4731__auto___65694 + (1));
i__4731__auto___65694 = G__65695;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65070 = conformed_args__62943__auto__;
var map__65070__$1 = (((((!((map__65070 == null))))?(((((map__65070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65070):map__65070);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65070__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65070__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65070__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq65064){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65064));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65696 = arguments.length;
var i__4731__auto___65697 = (0);
while(true){
if((i__4731__auto___65697 < len__4730__auto___65696)){
args__4736__auto__.push((arguments[i__4731__auto___65697]));

var G__65698 = (i__4731__auto___65697 + (1));
i__4731__auto___65697 = G__65698;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65073 = conformed_args__62943__auto__;
var map__65073__$1 = (((((!((map__65073 == null))))?(((((map__65073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65073):map__65073);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65073__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65073__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65073__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq65072){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65072));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65699 = arguments.length;
var i__4731__auto___65700 = (0);
while(true){
if((i__4731__auto___65700 < len__4730__auto___65699)){
args__4736__auto__.push((arguments[i__4731__auto___65700]));

var G__65701 = (i__4731__auto___65700 + (1));
i__4731__auto___65700 = G__65701;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65076 = conformed_args__62943__auto__;
var map__65076__$1 = (((((!((map__65076 == null))))?(((((map__65076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65076):map__65076);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65076__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65076__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65076__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq65075){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65075));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65702 = arguments.length;
var i__4731__auto___65703 = (0);
while(true){
if((i__4731__auto___65703 < len__4730__auto___65702)){
args__4736__auto__.push((arguments[i__4731__auto___65703]));

var G__65704 = (i__4731__auto___65703 + (1));
i__4731__auto___65703 = G__65704;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65080 = conformed_args__62943__auto__;
var map__65080__$1 = (((((!((map__65080 == null))))?(((((map__65080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65080):map__65080);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65080__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65080__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65080__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq65079){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65079));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65705 = arguments.length;
var i__4731__auto___65706 = (0);
while(true){
if((i__4731__auto___65706 < len__4730__auto___65705)){
args__4736__auto__.push((arguments[i__4731__auto___65706]));

var G__65707 = (i__4731__auto___65706 + (1));
i__4731__auto___65706 = G__65707;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65083 = conformed_args__62943__auto__;
var map__65083__$1 = (((((!((map__65083 == null))))?(((((map__65083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65083):map__65083);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65083__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65083__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65083__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq65082){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65082));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65708 = arguments.length;
var i__4731__auto___65709 = (0);
while(true){
if((i__4731__auto___65709 < len__4730__auto___65708)){
args__4736__auto__.push((arguments[i__4731__auto___65709]));

var G__65710 = (i__4731__auto___65709 + (1));
i__4731__auto___65709 = G__65710;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65086 = conformed_args__62943__auto__;
var map__65086__$1 = (((((!((map__65086 == null))))?(((((map__65086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65086):map__65086);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65086__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65086__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65086__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq65085){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65085));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65711 = arguments.length;
var i__4731__auto___65712 = (0);
while(true){
if((i__4731__auto___65712 < len__4730__auto___65711)){
args__4736__auto__.push((arguments[i__4731__auto___65712]));

var G__65713 = (i__4731__auto___65712 + (1));
i__4731__auto___65712 = G__65713;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65090 = conformed_args__62943__auto__;
var map__65090__$1 = (((((!((map__65090 == null))))?(((((map__65090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65090):map__65090);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65090__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65090__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65090__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq65089){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65089));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65714 = arguments.length;
var i__4731__auto___65715 = (0);
while(true){
if((i__4731__auto___65715 < len__4730__auto___65714)){
args__4736__auto__.push((arguments[i__4731__auto___65715]));

var G__65716 = (i__4731__auto___65715 + (1));
i__4731__auto___65715 = G__65716;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65093 = conformed_args__62943__auto__;
var map__65093__$1 = (((((!((map__65093 == null))))?(((((map__65093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65093):map__65093);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65093__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65093__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65093__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq65092){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65092));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65717 = arguments.length;
var i__4731__auto___65718 = (0);
while(true){
if((i__4731__auto___65718 < len__4730__auto___65717)){
args__4736__auto__.push((arguments[i__4731__auto___65718]));

var G__65719 = (i__4731__auto___65718 + (1));
i__4731__auto___65718 = G__65719;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65097 = conformed_args__62943__auto__;
var map__65097__$1 = (((((!((map__65097 == null))))?(((((map__65097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65097):map__65097);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65097__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65097__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65097__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq65096){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65096));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65720 = arguments.length;
var i__4731__auto___65721 = (0);
while(true){
if((i__4731__auto___65721 < len__4730__auto___65720)){
args__4736__auto__.push((arguments[i__4731__auto___65721]));

var G__65722 = (i__4731__auto___65721 + (1));
i__4731__auto___65721 = G__65722;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65100 = conformed_args__62943__auto__;
var map__65100__$1 = (((((!((map__65100 == null))))?(((((map__65100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65100):map__65100);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65100__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65100__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65100__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq65099){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65099));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65723 = arguments.length;
var i__4731__auto___65724 = (0);
while(true){
if((i__4731__auto___65724 < len__4730__auto___65723)){
args__4736__auto__.push((arguments[i__4731__auto___65724]));

var G__65725 = (i__4731__auto___65724 + (1));
i__4731__auto___65724 = G__65725;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65103 = conformed_args__62943__auto__;
var map__65103__$1 = (((((!((map__65103 == null))))?(((((map__65103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65103):map__65103);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65103__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65103__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65103__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq65102){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65102));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65726 = arguments.length;
var i__4731__auto___65727 = (0);
while(true){
if((i__4731__auto___65727 < len__4730__auto___65726)){
args__4736__auto__.push((arguments[i__4731__auto___65727]));

var G__65728 = (i__4731__auto___65727 + (1));
i__4731__auto___65727 = G__65728;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65106 = conformed_args__62943__auto__;
var map__65106__$1 = (((((!((map__65106 == null))))?(((((map__65106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65106):map__65106);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65106__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65106__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65106__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq65105){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65105));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65729 = arguments.length;
var i__4731__auto___65730 = (0);
while(true){
if((i__4731__auto___65730 < len__4730__auto___65729)){
args__4736__auto__.push((arguments[i__4731__auto___65730]));

var G__65731 = (i__4731__auto___65730 + (1));
i__4731__auto___65730 = G__65731;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65109 = conformed_args__62943__auto__;
var map__65109__$1 = (((((!((map__65109 == null))))?(((((map__65109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65109):map__65109);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65109__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65109__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65109__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq65108){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65108));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65732 = arguments.length;
var i__4731__auto___65733 = (0);
while(true){
if((i__4731__auto___65733 < len__4730__auto___65732)){
args__4736__auto__.push((arguments[i__4731__auto___65733]));

var G__65734 = (i__4731__auto___65733 + (1));
i__4731__auto___65733 = G__65734;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65113 = conformed_args__62943__auto__;
var map__65113__$1 = (((((!((map__65113 == null))))?(((((map__65113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65113):map__65113);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65113__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65113__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65113__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq65112){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65112));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65735 = arguments.length;
var i__4731__auto___65736 = (0);
while(true){
if((i__4731__auto___65736 < len__4730__auto___65735)){
args__4736__auto__.push((arguments[i__4731__auto___65736]));

var G__65737 = (i__4731__auto___65736 + (1));
i__4731__auto___65736 = G__65737;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65116 = conformed_args__62943__auto__;
var map__65116__$1 = (((((!((map__65116 == null))))?(((((map__65116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65116):map__65116);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65116__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65116__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65116__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq65115){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65115));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65738 = arguments.length;
var i__4731__auto___65739 = (0);
while(true){
if((i__4731__auto___65739 < len__4730__auto___65738)){
args__4736__auto__.push((arguments[i__4731__auto___65739]));

var G__65740 = (i__4731__auto___65739 + (1));
i__4731__auto___65739 = G__65740;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65119 = conformed_args__62943__auto__;
var map__65119__$1 = (((((!((map__65119 == null))))?(((((map__65119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65119):map__65119);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65119__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65119__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65119__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq65118){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65118));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65741 = arguments.length;
var i__4731__auto___65742 = (0);
while(true){
if((i__4731__auto___65742 < len__4730__auto___65741)){
args__4736__auto__.push((arguments[i__4731__auto___65742]));

var G__65743 = (i__4731__auto___65742 + (1));
i__4731__auto___65742 = G__65743;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65122 = conformed_args__62943__auto__;
var map__65122__$1 = (((((!((map__65122 == null))))?(((((map__65122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65122):map__65122);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65122__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65122__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65122__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq65121){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65121));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65744 = arguments.length;
var i__4731__auto___65745 = (0);
while(true){
if((i__4731__auto___65745 < len__4730__auto___65744)){
args__4736__auto__.push((arguments[i__4731__auto___65745]));

var G__65746 = (i__4731__auto___65745 + (1));
i__4731__auto___65745 = G__65746;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65125 = conformed_args__62943__auto__;
var map__65125__$1 = (((((!((map__65125 == null))))?(((((map__65125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65125):map__65125);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65125__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65125__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65125__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq65124){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65124));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65747 = arguments.length;
var i__4731__auto___65748 = (0);
while(true){
if((i__4731__auto___65748 < len__4730__auto___65747)){
args__4736__auto__.push((arguments[i__4731__auto___65748]));

var G__65749 = (i__4731__auto___65748 + (1));
i__4731__auto___65748 = G__65749;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65128 = conformed_args__62943__auto__;
var map__65128__$1 = (((((!((map__65128 == null))))?(((((map__65128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65128):map__65128);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65128__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65128__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65128__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq65127){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65127));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65750 = arguments.length;
var i__4731__auto___65751 = (0);
while(true){
if((i__4731__auto___65751 < len__4730__auto___65750)){
args__4736__auto__.push((arguments[i__4731__auto___65751]));

var G__65752 = (i__4731__auto___65751 + (1));
i__4731__auto___65751 = G__65752;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65131 = conformed_args__62943__auto__;
var map__65131__$1 = (((((!((map__65131 == null))))?(((((map__65131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65131):map__65131);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65131__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65131__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65131__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq65130){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65130));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65753 = arguments.length;
var i__4731__auto___65754 = (0);
while(true){
if((i__4731__auto___65754 < len__4730__auto___65753)){
args__4736__auto__.push((arguments[i__4731__auto___65754]));

var G__65755 = (i__4731__auto___65754 + (1));
i__4731__auto___65754 = G__65755;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65134 = conformed_args__62943__auto__;
var map__65134__$1 = (((((!((map__65134 == null))))?(((((map__65134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65134):map__65134);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65134__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65134__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65134__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq65133){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65133));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65756 = arguments.length;
var i__4731__auto___65757 = (0);
while(true){
if((i__4731__auto___65757 < len__4730__auto___65756)){
args__4736__auto__.push((arguments[i__4731__auto___65757]));

var G__65758 = (i__4731__auto___65757 + (1));
i__4731__auto___65757 = G__65758;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65137 = conformed_args__62943__auto__;
var map__65137__$1 = (((((!((map__65137 == null))))?(((((map__65137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65137):map__65137);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65137__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65137__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65137__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq65136){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65136));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65759 = arguments.length;
var i__4731__auto___65760 = (0);
while(true){
if((i__4731__auto___65760 < len__4730__auto___65759)){
args__4736__auto__.push((arguments[i__4731__auto___65760]));

var G__65761 = (i__4731__auto___65760 + (1));
i__4731__auto___65760 = G__65761;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65140 = conformed_args__62943__auto__;
var map__65140__$1 = (((((!((map__65140 == null))))?(((((map__65140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65140):map__65140);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65140__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65140__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65140__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq65139){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65139));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65762 = arguments.length;
var i__4731__auto___65763 = (0);
while(true){
if((i__4731__auto___65763 < len__4730__auto___65762)){
args__4736__auto__.push((arguments[i__4731__auto___65763]));

var G__65764 = (i__4731__auto___65763 + (1));
i__4731__auto___65763 = G__65764;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65143 = conformed_args__62943__auto__;
var map__65143__$1 = (((((!((map__65143 == null))))?(((((map__65143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65143):map__65143);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65143__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65143__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65143__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq65142){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65142));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65765 = arguments.length;
var i__4731__auto___65766 = (0);
while(true){
if((i__4731__auto___65766 < len__4730__auto___65765)){
args__4736__auto__.push((arguments[i__4731__auto___65766]));

var G__65767 = (i__4731__auto___65766 + (1));
i__4731__auto___65766 = G__65767;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65146 = conformed_args__62943__auto__;
var map__65146__$1 = (((((!((map__65146 == null))))?(((((map__65146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65146):map__65146);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65146__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65146__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65146__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq65145){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65145));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65768 = arguments.length;
var i__4731__auto___65769 = (0);
while(true){
if((i__4731__auto___65769 < len__4730__auto___65768)){
args__4736__auto__.push((arguments[i__4731__auto___65769]));

var G__65770 = (i__4731__auto___65769 + (1));
i__4731__auto___65769 = G__65770;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65149 = conformed_args__62943__auto__;
var map__65149__$1 = (((((!((map__65149 == null))))?(((((map__65149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65149):map__65149);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65149__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65149__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65149__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq65148){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65148));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65771 = arguments.length;
var i__4731__auto___65772 = (0);
while(true){
if((i__4731__auto___65772 < len__4730__auto___65771)){
args__4736__auto__.push((arguments[i__4731__auto___65772]));

var G__65773 = (i__4731__auto___65772 + (1));
i__4731__auto___65772 = G__65773;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65152 = conformed_args__62943__auto__;
var map__65152__$1 = (((((!((map__65152 == null))))?(((((map__65152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65152):map__65152);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65152__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65152__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65152__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq65151){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65151));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65774 = arguments.length;
var i__4731__auto___65775 = (0);
while(true){
if((i__4731__auto___65775 < len__4730__auto___65774)){
args__4736__auto__.push((arguments[i__4731__auto___65775]));

var G__65776 = (i__4731__auto___65775 + (1));
i__4731__auto___65775 = G__65776;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65155 = conformed_args__62943__auto__;
var map__65155__$1 = (((((!((map__65155 == null))))?(((((map__65155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65155):map__65155);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65155__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65155__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65155__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq65154){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65154));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65777 = arguments.length;
var i__4731__auto___65778 = (0);
while(true){
if((i__4731__auto___65778 < len__4730__auto___65777)){
args__4736__auto__.push((arguments[i__4731__auto___65778]));

var G__65779 = (i__4731__auto___65778 + (1));
i__4731__auto___65778 = G__65779;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65158 = conformed_args__62943__auto__;
var map__65158__$1 = (((((!((map__65158 == null))))?(((((map__65158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65158):map__65158);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65158__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65158__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65158__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq65157){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65157));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65780 = arguments.length;
var i__4731__auto___65781 = (0);
while(true){
if((i__4731__auto___65781 < len__4730__auto___65780)){
args__4736__auto__.push((arguments[i__4731__auto___65781]));

var G__65782 = (i__4731__auto___65781 + (1));
i__4731__auto___65781 = G__65782;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65161 = conformed_args__62943__auto__;
var map__65161__$1 = (((((!((map__65161 == null))))?(((((map__65161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65161):map__65161);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65161__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65161__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65161__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq65160){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65160));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65783 = arguments.length;
var i__4731__auto___65784 = (0);
while(true){
if((i__4731__auto___65784 < len__4730__auto___65783)){
args__4736__auto__.push((arguments[i__4731__auto___65784]));

var G__65785 = (i__4731__auto___65784 + (1));
i__4731__auto___65784 = G__65785;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65164 = conformed_args__62943__auto__;
var map__65164__$1 = (((((!((map__65164 == null))))?(((((map__65164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65164):map__65164);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65164__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65164__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65164__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq65163){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65163));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65786 = arguments.length;
var i__4731__auto___65787 = (0);
while(true){
if((i__4731__auto___65787 < len__4730__auto___65786)){
args__4736__auto__.push((arguments[i__4731__auto___65787]));

var G__65788 = (i__4731__auto___65787 + (1));
i__4731__auto___65787 = G__65788;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65167 = conformed_args__62943__auto__;
var map__65167__$1 = (((((!((map__65167 == null))))?(((((map__65167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65167):map__65167);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65167__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65167__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65167__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq65166){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65166));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65789 = arguments.length;
var i__4731__auto___65790 = (0);
while(true){
if((i__4731__auto___65790 < len__4730__auto___65789)){
args__4736__auto__.push((arguments[i__4731__auto___65790]));

var G__65791 = (i__4731__auto___65790 + (1));
i__4731__auto___65790 = G__65791;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65170 = conformed_args__62943__auto__;
var map__65170__$1 = (((((!((map__65170 == null))))?(((((map__65170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65170):map__65170);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65170__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65170__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65170__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq65169){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65169));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65792 = arguments.length;
var i__4731__auto___65793 = (0);
while(true){
if((i__4731__auto___65793 < len__4730__auto___65792)){
args__4736__auto__.push((arguments[i__4731__auto___65793]));

var G__65794 = (i__4731__auto___65793 + (1));
i__4731__auto___65793 = G__65794;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65173 = conformed_args__62943__auto__;
var map__65173__$1 = (((((!((map__65173 == null))))?(((((map__65173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65173):map__65173);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65173__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65173__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65173__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq65172){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65172));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65795 = arguments.length;
var i__4731__auto___65796 = (0);
while(true){
if((i__4731__auto___65796 < len__4730__auto___65795)){
args__4736__auto__.push((arguments[i__4731__auto___65796]));

var G__65797 = (i__4731__auto___65796 + (1));
i__4731__auto___65796 = G__65797;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65176 = conformed_args__62943__auto__;
var map__65176__$1 = (((((!((map__65176 == null))))?(((((map__65176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65176):map__65176);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65176__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65176__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65176__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq65175){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65175));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65798 = arguments.length;
var i__4731__auto___65799 = (0);
while(true){
if((i__4731__auto___65799 < len__4730__auto___65798)){
args__4736__auto__.push((arguments[i__4731__auto___65799]));

var G__65800 = (i__4731__auto___65799 + (1));
i__4731__auto___65799 = G__65800;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65179 = conformed_args__62943__auto__;
var map__65179__$1 = (((((!((map__65179 == null))))?(((((map__65179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65179):map__65179);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65179__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65179__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65179__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq65178){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65178));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65801 = arguments.length;
var i__4731__auto___65802 = (0);
while(true){
if((i__4731__auto___65802 < len__4730__auto___65801)){
args__4736__auto__.push((arguments[i__4731__auto___65802]));

var G__65803 = (i__4731__auto___65802 + (1));
i__4731__auto___65802 = G__65803;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65182 = conformed_args__62943__auto__;
var map__65182__$1 = (((((!((map__65182 == null))))?(((((map__65182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65182):map__65182);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65182__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65182__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65182__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq65181){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65181));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65804 = arguments.length;
var i__4731__auto___65805 = (0);
while(true){
if((i__4731__auto___65805 < len__4730__auto___65804)){
args__4736__auto__.push((arguments[i__4731__auto___65805]));

var G__65806 = (i__4731__auto___65805 + (1));
i__4731__auto___65805 = G__65806;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65185 = conformed_args__62943__auto__;
var map__65185__$1 = (((((!((map__65185 == null))))?(((((map__65185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65185):map__65185);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65185__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65185__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65185__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq65184){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65184));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65807 = arguments.length;
var i__4731__auto___65808 = (0);
while(true){
if((i__4731__auto___65808 < len__4730__auto___65807)){
args__4736__auto__.push((arguments[i__4731__auto___65808]));

var G__65809 = (i__4731__auto___65808 + (1));
i__4731__auto___65808 = G__65809;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65188 = conformed_args__62943__auto__;
var map__65188__$1 = (((((!((map__65188 == null))))?(((((map__65188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65188):map__65188);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65188__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65188__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65188__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq65187){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65187));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65810 = arguments.length;
var i__4731__auto___65811 = (0);
while(true){
if((i__4731__auto___65811 < len__4730__auto___65810)){
args__4736__auto__.push((arguments[i__4731__auto___65811]));

var G__65812 = (i__4731__auto___65811 + (1));
i__4731__auto___65811 = G__65812;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65191 = conformed_args__62943__auto__;
var map__65191__$1 = (((((!((map__65191 == null))))?(((((map__65191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65191):map__65191);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65191__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65191__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65191__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq65190){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65190));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65813 = arguments.length;
var i__4731__auto___65814 = (0);
while(true){
if((i__4731__auto___65814 < len__4730__auto___65813)){
args__4736__auto__.push((arguments[i__4731__auto___65814]));

var G__65815 = (i__4731__auto___65814 + (1));
i__4731__auto___65814 = G__65815;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65194 = conformed_args__62943__auto__;
var map__65194__$1 = (((((!((map__65194 == null))))?(((((map__65194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65194):map__65194);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65194__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65194__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65194__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq65193){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65193));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65816 = arguments.length;
var i__4731__auto___65817 = (0);
while(true){
if((i__4731__auto___65817 < len__4730__auto___65816)){
args__4736__auto__.push((arguments[i__4731__auto___65817]));

var G__65818 = (i__4731__auto___65817 + (1));
i__4731__auto___65817 = G__65818;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65197 = conformed_args__62943__auto__;
var map__65197__$1 = (((((!((map__65197 == null))))?(((((map__65197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65197):map__65197);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65197__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65197__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65197__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq65196){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65196));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65819 = arguments.length;
var i__4731__auto___65820 = (0);
while(true){
if((i__4731__auto___65820 < len__4730__auto___65819)){
args__4736__auto__.push((arguments[i__4731__auto___65820]));

var G__65821 = (i__4731__auto___65820 + (1));
i__4731__auto___65820 = G__65821;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65200 = conformed_args__62943__auto__;
var map__65200__$1 = (((((!((map__65200 == null))))?(((((map__65200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65200):map__65200);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65200__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65200__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65200__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq65199){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65199));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65822 = arguments.length;
var i__4731__auto___65823 = (0);
while(true){
if((i__4731__auto___65823 < len__4730__auto___65822)){
args__4736__auto__.push((arguments[i__4731__auto___65823]));

var G__65824 = (i__4731__auto___65823 + (1));
i__4731__auto___65823 = G__65824;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65203 = conformed_args__62943__auto__;
var map__65203__$1 = (((((!((map__65203 == null))))?(((((map__65203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65203):map__65203);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65203__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65203__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65203__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq65202){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65202));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65825 = arguments.length;
var i__4731__auto___65826 = (0);
while(true){
if((i__4731__auto___65826 < len__4730__auto___65825)){
args__4736__auto__.push((arguments[i__4731__auto___65826]));

var G__65827 = (i__4731__auto___65826 + (1));
i__4731__auto___65826 = G__65827;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65206 = conformed_args__62943__auto__;
var map__65206__$1 = (((((!((map__65206 == null))))?(((((map__65206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65206):map__65206);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65206__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65206__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65206__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq65205){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65205));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65828 = arguments.length;
var i__4731__auto___65829 = (0);
while(true){
if((i__4731__auto___65829 < len__4730__auto___65828)){
args__4736__auto__.push((arguments[i__4731__auto___65829]));

var G__65830 = (i__4731__auto___65829 + (1));
i__4731__auto___65829 = G__65830;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65209 = conformed_args__62943__auto__;
var map__65209__$1 = (((((!((map__65209 == null))))?(((((map__65209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65209):map__65209);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65209__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65209__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65209__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq65208){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65208));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65831 = arguments.length;
var i__4731__auto___65832 = (0);
while(true){
if((i__4731__auto___65832 < len__4730__auto___65831)){
args__4736__auto__.push((arguments[i__4731__auto___65832]));

var G__65833 = (i__4731__auto___65832 + (1));
i__4731__auto___65832 = G__65833;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65212 = conformed_args__62943__auto__;
var map__65212__$1 = (((((!((map__65212 == null))))?(((((map__65212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65212):map__65212);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65212__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65212__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65212__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq65211){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65211));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65834 = arguments.length;
var i__4731__auto___65835 = (0);
while(true){
if((i__4731__auto___65835 < len__4730__auto___65834)){
args__4736__auto__.push((arguments[i__4731__auto___65835]));

var G__65836 = (i__4731__auto___65835 + (1));
i__4731__auto___65835 = G__65836;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65215 = conformed_args__62943__auto__;
var map__65215__$1 = (((((!((map__65215 == null))))?(((((map__65215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65215):map__65215);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65215__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65215__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65215__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq65214){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65214));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65837 = arguments.length;
var i__4731__auto___65838 = (0);
while(true){
if((i__4731__auto___65838 < len__4730__auto___65837)){
args__4736__auto__.push((arguments[i__4731__auto___65838]));

var G__65839 = (i__4731__auto___65838 + (1));
i__4731__auto___65838 = G__65839;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65218 = conformed_args__62943__auto__;
var map__65218__$1 = (((((!((map__65218 == null))))?(((((map__65218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65218):map__65218);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65218__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65218__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65218__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq65217){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65217));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65840 = arguments.length;
var i__4731__auto___65841 = (0);
while(true){
if((i__4731__auto___65841 < len__4730__auto___65840)){
args__4736__auto__.push((arguments[i__4731__auto___65841]));

var G__65842 = (i__4731__auto___65841 + (1));
i__4731__auto___65841 = G__65842;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65221 = conformed_args__62943__auto__;
var map__65221__$1 = (((((!((map__65221 == null))))?(((((map__65221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65221):map__65221);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65221__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65221__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65221__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq65220){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65220));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65843 = arguments.length;
var i__4731__auto___65844 = (0);
while(true){
if((i__4731__auto___65844 < len__4730__auto___65843)){
args__4736__auto__.push((arguments[i__4731__auto___65844]));

var G__65845 = (i__4731__auto___65844 + (1));
i__4731__auto___65844 = G__65845;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65224 = conformed_args__62943__auto__;
var map__65224__$1 = (((((!((map__65224 == null))))?(((((map__65224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65224):map__65224);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65224__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65224__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65224__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq65223){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65223));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65846 = arguments.length;
var i__4731__auto___65847 = (0);
while(true){
if((i__4731__auto___65847 < len__4730__auto___65846)){
args__4736__auto__.push((arguments[i__4731__auto___65847]));

var G__65848 = (i__4731__auto___65847 + (1));
i__4731__auto___65847 = G__65848;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65227 = conformed_args__62943__auto__;
var map__65227__$1 = (((((!((map__65227 == null))))?(((((map__65227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65227):map__65227);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65227__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65227__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65227__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq65226){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65226));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65849 = arguments.length;
var i__4731__auto___65850 = (0);
while(true){
if((i__4731__auto___65850 < len__4730__auto___65849)){
args__4736__auto__.push((arguments[i__4731__auto___65850]));

var G__65851 = (i__4731__auto___65850 + (1));
i__4731__auto___65850 = G__65851;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65230 = conformed_args__62943__auto__;
var map__65230__$1 = (((((!((map__65230 == null))))?(((((map__65230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65230):map__65230);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65230__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65230__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65230__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq65229){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65229));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65852 = arguments.length;
var i__4731__auto___65853 = (0);
while(true){
if((i__4731__auto___65853 < len__4730__auto___65852)){
args__4736__auto__.push((arguments[i__4731__auto___65853]));

var G__65854 = (i__4731__auto___65853 + (1));
i__4731__auto___65853 = G__65854;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65233 = conformed_args__62943__auto__;
var map__65233__$1 = (((((!((map__65233 == null))))?(((((map__65233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65233):map__65233);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65233__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65233__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65233__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq65232){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65232));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65855 = arguments.length;
var i__4731__auto___65856 = (0);
while(true){
if((i__4731__auto___65856 < len__4730__auto___65855)){
args__4736__auto__.push((arguments[i__4731__auto___65856]));

var G__65857 = (i__4731__auto___65856 + (1));
i__4731__auto___65856 = G__65857;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65236 = conformed_args__62943__auto__;
var map__65236__$1 = (((((!((map__65236 == null))))?(((((map__65236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65236):map__65236);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65236__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65236__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65236__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq65235){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65235));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65858 = arguments.length;
var i__4731__auto___65859 = (0);
while(true){
if((i__4731__auto___65859 < len__4730__auto___65858)){
args__4736__auto__.push((arguments[i__4731__auto___65859]));

var G__65860 = (i__4731__auto___65859 + (1));
i__4731__auto___65859 = G__65860;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65239 = conformed_args__62943__auto__;
var map__65239__$1 = (((((!((map__65239 == null))))?(((((map__65239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65239):map__65239);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65239__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65239__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65239__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq65238){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65238));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65861 = arguments.length;
var i__4731__auto___65862 = (0);
while(true){
if((i__4731__auto___65862 < len__4730__auto___65861)){
args__4736__auto__.push((arguments[i__4731__auto___65862]));

var G__65863 = (i__4731__auto___65862 + (1));
i__4731__auto___65862 = G__65863;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65242 = conformed_args__62943__auto__;
var map__65242__$1 = (((((!((map__65242 == null))))?(((((map__65242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65242):map__65242);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65242__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65242__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65242__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq65241){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65241));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65864 = arguments.length;
var i__4731__auto___65865 = (0);
while(true){
if((i__4731__auto___65865 < len__4730__auto___65864)){
args__4736__auto__.push((arguments[i__4731__auto___65865]));

var G__65866 = (i__4731__auto___65865 + (1));
i__4731__auto___65865 = G__65866;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65245 = conformed_args__62943__auto__;
var map__65245__$1 = (((((!((map__65245 == null))))?(((((map__65245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65245):map__65245);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65245__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65245__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65245__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq65244){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65244));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65867 = arguments.length;
var i__4731__auto___65868 = (0);
while(true){
if((i__4731__auto___65868 < len__4730__auto___65867)){
args__4736__auto__.push((arguments[i__4731__auto___65868]));

var G__65869 = (i__4731__auto___65868 + (1));
i__4731__auto___65868 = G__65869;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65248 = conformed_args__62943__auto__;
var map__65248__$1 = (((((!((map__65248 == null))))?(((((map__65248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65248):map__65248);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65248__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65248__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65248__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq65247){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65247));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65870 = arguments.length;
var i__4731__auto___65871 = (0);
while(true){
if((i__4731__auto___65871 < len__4730__auto___65870)){
args__4736__auto__.push((arguments[i__4731__auto___65871]));

var G__65872 = (i__4731__auto___65871 + (1));
i__4731__auto___65871 = G__65872;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65251 = conformed_args__62943__auto__;
var map__65251__$1 = (((((!((map__65251 == null))))?(((((map__65251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65251):map__65251);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65251__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65251__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65251__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq65250){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65250));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65873 = arguments.length;
var i__4731__auto___65874 = (0);
while(true){
if((i__4731__auto___65874 < len__4730__auto___65873)){
args__4736__auto__.push((arguments[i__4731__auto___65874]));

var G__65875 = (i__4731__auto___65874 + (1));
i__4731__auto___65874 = G__65875;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65254 = conformed_args__62943__auto__;
var map__65254__$1 = (((((!((map__65254 == null))))?(((((map__65254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65254):map__65254);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65254__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65254__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65254__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq65253){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65253));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65876 = arguments.length;
var i__4731__auto___65877 = (0);
while(true){
if((i__4731__auto___65877 < len__4730__auto___65876)){
args__4736__auto__.push((arguments[i__4731__auto___65877]));

var G__65878 = (i__4731__auto___65877 + (1));
i__4731__auto___65877 = G__65878;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65257 = conformed_args__62943__auto__;
var map__65257__$1 = (((((!((map__65257 == null))))?(((((map__65257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65257):map__65257);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65257__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65257__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65257__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq65256){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65256));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65879 = arguments.length;
var i__4731__auto___65880 = (0);
while(true){
if((i__4731__auto___65880 < len__4730__auto___65879)){
args__4736__auto__.push((arguments[i__4731__auto___65880]));

var G__65881 = (i__4731__auto___65880 + (1));
i__4731__auto___65880 = G__65881;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65260 = conformed_args__62943__auto__;
var map__65260__$1 = (((((!((map__65260 == null))))?(((((map__65260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65260):map__65260);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65260__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65260__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65260__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq65259){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65259));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65882 = arguments.length;
var i__4731__auto___65883 = (0);
while(true){
if((i__4731__auto___65883 < len__4730__auto___65882)){
args__4736__auto__.push((arguments[i__4731__auto___65883]));

var G__65884 = (i__4731__auto___65883 + (1));
i__4731__auto___65883 = G__65884;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65263 = conformed_args__62943__auto__;
var map__65263__$1 = (((((!((map__65263 == null))))?(((((map__65263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65263):map__65263);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65263__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65263__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65263__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq65262){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65262));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65885 = arguments.length;
var i__4731__auto___65886 = (0);
while(true){
if((i__4731__auto___65886 < len__4730__auto___65885)){
args__4736__auto__.push((arguments[i__4731__auto___65886]));

var G__65887 = (i__4731__auto___65886 + (1));
i__4731__auto___65886 = G__65887;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65266 = conformed_args__62943__auto__;
var map__65266__$1 = (((((!((map__65266 == null))))?(((((map__65266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65266):map__65266);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65266__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65266__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65266__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq65265){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65265));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65888 = arguments.length;
var i__4731__auto___65889 = (0);
while(true){
if((i__4731__auto___65889 < len__4730__auto___65888)){
args__4736__auto__.push((arguments[i__4731__auto___65889]));

var G__65890 = (i__4731__auto___65889 + (1));
i__4731__auto___65889 = G__65890;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65269 = conformed_args__62943__auto__;
var map__65269__$1 = (((((!((map__65269 == null))))?(((((map__65269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65269):map__65269);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65269__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65269__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65269__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq65268){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65268));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65891 = arguments.length;
var i__4731__auto___65892 = (0);
while(true){
if((i__4731__auto___65892 < len__4730__auto___65891)){
args__4736__auto__.push((arguments[i__4731__auto___65892]));

var G__65893 = (i__4731__auto___65892 + (1));
i__4731__auto___65892 = G__65893;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65272 = conformed_args__62943__auto__;
var map__65272__$1 = (((((!((map__65272 == null))))?(((((map__65272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65272):map__65272);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65272__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65272__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65272__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq65271){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65271));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65894 = arguments.length;
var i__4731__auto___65895 = (0);
while(true){
if((i__4731__auto___65895 < len__4730__auto___65894)){
args__4736__auto__.push((arguments[i__4731__auto___65895]));

var G__65896 = (i__4731__auto___65895 + (1));
i__4731__auto___65895 = G__65896;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65275 = conformed_args__62943__auto__;
var map__65275__$1 = (((((!((map__65275 == null))))?(((((map__65275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65275):map__65275);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65275__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65275__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65275__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq65274){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65274));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65897 = arguments.length;
var i__4731__auto___65898 = (0);
while(true){
if((i__4731__auto___65898 < len__4730__auto___65897)){
args__4736__auto__.push((arguments[i__4731__auto___65898]));

var G__65899 = (i__4731__auto___65898 + (1));
i__4731__auto___65898 = G__65899;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65278 = conformed_args__62943__auto__;
var map__65278__$1 = (((((!((map__65278 == null))))?(((((map__65278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65278):map__65278);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65278__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65278__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65278__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq65277){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65277));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65900 = arguments.length;
var i__4731__auto___65901 = (0);
while(true){
if((i__4731__auto___65901 < len__4730__auto___65900)){
args__4736__auto__.push((arguments[i__4731__auto___65901]));

var G__65902 = (i__4731__auto___65901 + (1));
i__4731__auto___65901 = G__65902;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65281 = conformed_args__62943__auto__;
var map__65281__$1 = (((((!((map__65281 == null))))?(((((map__65281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65281):map__65281);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65281__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65281__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65281__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq65280){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65280));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65903 = arguments.length;
var i__4731__auto___65904 = (0);
while(true){
if((i__4731__auto___65904 < len__4730__auto___65903)){
args__4736__auto__.push((arguments[i__4731__auto___65904]));

var G__65905 = (i__4731__auto___65904 + (1));
i__4731__auto___65904 = G__65905;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65284 = conformed_args__62943__auto__;
var map__65284__$1 = (((((!((map__65284 == null))))?(((((map__65284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65284):map__65284);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65284__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65284__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65284__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq65283){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65283));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65906 = arguments.length;
var i__4731__auto___65907 = (0);
while(true){
if((i__4731__auto___65907 < len__4730__auto___65906)){
args__4736__auto__.push((arguments[i__4731__auto___65907]));

var G__65908 = (i__4731__auto___65907 + (1));
i__4731__auto___65907 = G__65908;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65287 = conformed_args__62943__auto__;
var map__65287__$1 = (((((!((map__65287 == null))))?(((((map__65287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65287):map__65287);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65287__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65287__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65287__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq65286){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65286));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65909 = arguments.length;
var i__4731__auto___65910 = (0);
while(true){
if((i__4731__auto___65910 < len__4730__auto___65909)){
args__4736__auto__.push((arguments[i__4731__auto___65910]));

var G__65911 = (i__4731__auto___65910 + (1));
i__4731__auto___65910 = G__65911;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65290 = conformed_args__62943__auto__;
var map__65290__$1 = (((((!((map__65290 == null))))?(((((map__65290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65290):map__65290);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65290__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65290__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65290__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq65289){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65289));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65912 = arguments.length;
var i__4731__auto___65913 = (0);
while(true){
if((i__4731__auto___65913 < len__4730__auto___65912)){
args__4736__auto__.push((arguments[i__4731__auto___65913]));

var G__65914 = (i__4731__auto___65913 + (1));
i__4731__auto___65913 = G__65914;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65293 = conformed_args__62943__auto__;
var map__65293__$1 = (((((!((map__65293 == null))))?(((((map__65293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65293):map__65293);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65293__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65293__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65293__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq65292){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65292));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65915 = arguments.length;
var i__4731__auto___65916 = (0);
while(true){
if((i__4731__auto___65916 < len__4730__auto___65915)){
args__4736__auto__.push((arguments[i__4731__auto___65916]));

var G__65917 = (i__4731__auto___65916 + (1));
i__4731__auto___65916 = G__65917;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65296 = conformed_args__62943__auto__;
var map__65296__$1 = (((((!((map__65296 == null))))?(((((map__65296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65296):map__65296);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65296__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65296__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65296__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq65295){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65295));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65918 = arguments.length;
var i__4731__auto___65919 = (0);
while(true){
if((i__4731__auto___65919 < len__4730__auto___65918)){
args__4736__auto__.push((arguments[i__4731__auto___65919]));

var G__65920 = (i__4731__auto___65919 + (1));
i__4731__auto___65919 = G__65920;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65299 = conformed_args__62943__auto__;
var map__65299__$1 = (((((!((map__65299 == null))))?(((((map__65299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65299):map__65299);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65299__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65299__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65299__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq65298){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65298));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65921 = arguments.length;
var i__4731__auto___65922 = (0);
while(true){
if((i__4731__auto___65922 < len__4730__auto___65921)){
args__4736__auto__.push((arguments[i__4731__auto___65922]));

var G__65923 = (i__4731__auto___65922 + (1));
i__4731__auto___65922 = G__65923;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65302 = conformed_args__62943__auto__;
var map__65302__$1 = (((((!((map__65302 == null))))?(((((map__65302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65302):map__65302);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65302__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65302__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65302__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq65301){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65301));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65924 = arguments.length;
var i__4731__auto___65925 = (0);
while(true){
if((i__4731__auto___65925 < len__4730__auto___65924)){
args__4736__auto__.push((arguments[i__4731__auto___65925]));

var G__65926 = (i__4731__auto___65925 + (1));
i__4731__auto___65925 = G__65926;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65305 = conformed_args__62943__auto__;
var map__65305__$1 = (((((!((map__65305 == null))))?(((((map__65305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65305):map__65305);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65305__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65305__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65305__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq65304){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65304));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65927 = arguments.length;
var i__4731__auto___65928 = (0);
while(true){
if((i__4731__auto___65928 < len__4730__auto___65927)){
args__4736__auto__.push((arguments[i__4731__auto___65928]));

var G__65929 = (i__4731__auto___65928 + (1));
i__4731__auto___65928 = G__65929;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65308 = conformed_args__62943__auto__;
var map__65308__$1 = (((((!((map__65308 == null))))?(((((map__65308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65308):map__65308);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65308__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65308__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65308__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq65307){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65307));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65930 = arguments.length;
var i__4731__auto___65931 = (0);
while(true){
if((i__4731__auto___65931 < len__4730__auto___65930)){
args__4736__auto__.push((arguments[i__4731__auto___65931]));

var G__65932 = (i__4731__auto___65931 + (1));
i__4731__auto___65931 = G__65932;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65311 = conformed_args__62943__auto__;
var map__65311__$1 = (((((!((map__65311 == null))))?(((((map__65311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65311):map__65311);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65311__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65311__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65311__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq65310){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65310));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65933 = arguments.length;
var i__4731__auto___65934 = (0);
while(true){
if((i__4731__auto___65934 < len__4730__auto___65933)){
args__4736__auto__.push((arguments[i__4731__auto___65934]));

var G__65935 = (i__4731__auto___65934 + (1));
i__4731__auto___65934 = G__65935;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65314 = conformed_args__62943__auto__;
var map__65314__$1 = (((((!((map__65314 == null))))?(((((map__65314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65314):map__65314);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65314__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65314__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65314__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq65313){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65313));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65936 = arguments.length;
var i__4731__auto___65937 = (0);
while(true){
if((i__4731__auto___65937 < len__4730__auto___65936)){
args__4736__auto__.push((arguments[i__4731__auto___65937]));

var G__65938 = (i__4731__auto___65937 + (1));
i__4731__auto___65937 = G__65938;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65317 = conformed_args__62943__auto__;
var map__65317__$1 = (((((!((map__65317 == null))))?(((((map__65317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65317):map__65317);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65317__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65317__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65317__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq65316){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65316));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65939 = arguments.length;
var i__4731__auto___65940 = (0);
while(true){
if((i__4731__auto___65940 < len__4730__auto___65939)){
args__4736__auto__.push((arguments[i__4731__auto___65940]));

var G__65941 = (i__4731__auto___65940 + (1));
i__4731__auto___65940 = G__65941;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65320 = conformed_args__62943__auto__;
var map__65320__$1 = (((((!((map__65320 == null))))?(((((map__65320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65320):map__65320);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65320__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65320__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65320__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq65319){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65319));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65942 = arguments.length;
var i__4731__auto___65943 = (0);
while(true){
if((i__4731__auto___65943 < len__4730__auto___65942)){
args__4736__auto__.push((arguments[i__4731__auto___65943]));

var G__65944 = (i__4731__auto___65943 + (1));
i__4731__auto___65943 = G__65944;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65323 = conformed_args__62943__auto__;
var map__65323__$1 = (((((!((map__65323 == null))))?(((((map__65323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65323):map__65323);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65323__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65323__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65323__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq65322){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65322));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65945 = arguments.length;
var i__4731__auto___65946 = (0);
while(true){
if((i__4731__auto___65946 < len__4730__auto___65945)){
args__4736__auto__.push((arguments[i__4731__auto___65946]));

var G__65947 = (i__4731__auto___65946 + (1));
i__4731__auto___65946 = G__65947;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65326 = conformed_args__62943__auto__;
var map__65326__$1 = (((((!((map__65326 == null))))?(((((map__65326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65326):map__65326);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65326__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65326__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65326__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq65325){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65325));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65948 = arguments.length;
var i__4731__auto___65949 = (0);
while(true){
if((i__4731__auto___65949 < len__4730__auto___65948)){
args__4736__auto__.push((arguments[i__4731__auto___65949]));

var G__65950 = (i__4731__auto___65949 + (1));
i__4731__auto___65949 = G__65950;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65329 = conformed_args__62943__auto__;
var map__65329__$1 = (((((!((map__65329 == null))))?(((((map__65329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65329):map__65329);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65329__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65329__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65329__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq65328){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65328));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65951 = arguments.length;
var i__4731__auto___65952 = (0);
while(true){
if((i__4731__auto___65952 < len__4730__auto___65951)){
args__4736__auto__.push((arguments[i__4731__auto___65952]));

var G__65953 = (i__4731__auto___65952 + (1));
i__4731__auto___65952 = G__65953;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65332 = conformed_args__62943__auto__;
var map__65332__$1 = (((((!((map__65332 == null))))?(((((map__65332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65332):map__65332);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65332__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65332__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65332__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq65331){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65331));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65954 = arguments.length;
var i__4731__auto___65955 = (0);
while(true){
if((i__4731__auto___65955 < len__4730__auto___65954)){
args__4736__auto__.push((arguments[i__4731__auto___65955]));

var G__65956 = (i__4731__auto___65955 + (1));
i__4731__auto___65955 = G__65956;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65335 = conformed_args__62943__auto__;
var map__65335__$1 = (((((!((map__65335 == null))))?(((((map__65335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65335):map__65335);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65335__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65335__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65335__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq65334){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65334));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65957 = arguments.length;
var i__4731__auto___65958 = (0);
while(true){
if((i__4731__auto___65958 < len__4730__auto___65957)){
args__4736__auto__.push((arguments[i__4731__auto___65958]));

var G__65959 = (i__4731__auto___65958 + (1));
i__4731__auto___65958 = G__65959;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65338 = conformed_args__62943__auto__;
var map__65338__$1 = (((((!((map__65338 == null))))?(((((map__65338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65338):map__65338);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65338__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65338__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65338__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq65337){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65337));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65960 = arguments.length;
var i__4731__auto___65961 = (0);
while(true){
if((i__4731__auto___65961 < len__4730__auto___65960)){
args__4736__auto__.push((arguments[i__4731__auto___65961]));

var G__65962 = (i__4731__auto___65961 + (1));
i__4731__auto___65961 = G__65962;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65341 = conformed_args__62943__auto__;
var map__65341__$1 = (((((!((map__65341 == null))))?(((((map__65341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65341):map__65341);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65341__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65341__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65341__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq65340){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65340));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65963 = arguments.length;
var i__4731__auto___65964 = (0);
while(true){
if((i__4731__auto___65964 < len__4730__auto___65963)){
args__4736__auto__.push((arguments[i__4731__auto___65964]));

var G__65965 = (i__4731__auto___65964 + (1));
i__4731__auto___65964 = G__65965;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65344 = conformed_args__62943__auto__;
var map__65344__$1 = (((((!((map__65344 == null))))?(((((map__65344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65344):map__65344);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65344__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65344__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65344__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq65343){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65343));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65966 = arguments.length;
var i__4731__auto___65967 = (0);
while(true){
if((i__4731__auto___65967 < len__4730__auto___65966)){
args__4736__auto__.push((arguments[i__4731__auto___65967]));

var G__65968 = (i__4731__auto___65967 + (1));
i__4731__auto___65967 = G__65968;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65347 = conformed_args__62943__auto__;
var map__65347__$1 = (((((!((map__65347 == null))))?(((((map__65347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65347):map__65347);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65347__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65347__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65347__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq65346){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65346));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65969 = arguments.length;
var i__4731__auto___65970 = (0);
while(true){
if((i__4731__auto___65970 < len__4730__auto___65969)){
args__4736__auto__.push((arguments[i__4731__auto___65970]));

var G__65971 = (i__4731__auto___65970 + (1));
i__4731__auto___65970 = G__65971;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65350 = conformed_args__62943__auto__;
var map__65350__$1 = (((((!((map__65350 == null))))?(((((map__65350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65350):map__65350);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65350__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65350__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65350__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq65349){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65349));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65972 = arguments.length;
var i__4731__auto___65973 = (0);
while(true){
if((i__4731__auto___65973 < len__4730__auto___65972)){
args__4736__auto__.push((arguments[i__4731__auto___65973]));

var G__65974 = (i__4731__auto___65973 + (1));
i__4731__auto___65973 = G__65974;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65353 = conformed_args__62943__auto__;
var map__65353__$1 = (((((!((map__65353 == null))))?(((((map__65353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65353):map__65353);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65353__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65353__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65353__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq65352){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65352));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65975 = arguments.length;
var i__4731__auto___65976 = (0);
while(true){
if((i__4731__auto___65976 < len__4730__auto___65975)){
args__4736__auto__.push((arguments[i__4731__auto___65976]));

var G__65977 = (i__4731__auto___65976 + (1));
i__4731__auto___65976 = G__65977;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65356 = conformed_args__62943__auto__;
var map__65356__$1 = (((((!((map__65356 == null))))?(((((map__65356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65356):map__65356);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65356__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65356__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65356__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq65355){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65355));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65978 = arguments.length;
var i__4731__auto___65979 = (0);
while(true){
if((i__4731__auto___65979 < len__4730__auto___65978)){
args__4736__auto__.push((arguments[i__4731__auto___65979]));

var G__65980 = (i__4731__auto___65979 + (1));
i__4731__auto___65979 = G__65980;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65359 = conformed_args__62943__auto__;
var map__65359__$1 = (((((!((map__65359 == null))))?(((((map__65359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65359):map__65359);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65359__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65359__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65359__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq65358){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65358));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65981 = arguments.length;
var i__4731__auto___65982 = (0);
while(true){
if((i__4731__auto___65982 < len__4730__auto___65981)){
args__4736__auto__.push((arguments[i__4731__auto___65982]));

var G__65983 = (i__4731__auto___65982 + (1));
i__4731__auto___65982 = G__65983;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65362 = conformed_args__62943__auto__;
var map__65362__$1 = (((((!((map__65362 == null))))?(((((map__65362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65362):map__65362);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65362__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65362__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65362__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq65361){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65361));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65984 = arguments.length;
var i__4731__auto___65985 = (0);
while(true){
if((i__4731__auto___65985 < len__4730__auto___65984)){
args__4736__auto__.push((arguments[i__4731__auto___65985]));

var G__65986 = (i__4731__auto___65985 + (1));
i__4731__auto___65985 = G__65986;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65365 = conformed_args__62943__auto__;
var map__65365__$1 = (((((!((map__65365 == null))))?(((((map__65365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65365):map__65365);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65365__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65365__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65365__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq65364){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65364));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65987 = arguments.length;
var i__4731__auto___65988 = (0);
while(true){
if((i__4731__auto___65988 < len__4730__auto___65987)){
args__4736__auto__.push((arguments[i__4731__auto___65988]));

var G__65989 = (i__4731__auto___65988 + (1));
i__4731__auto___65988 = G__65989;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65368 = conformed_args__62943__auto__;
var map__65368__$1 = (((((!((map__65368 == null))))?(((((map__65368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65368):map__65368);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65368__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65368__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65368__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq65367){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65367));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65990 = arguments.length;
var i__4731__auto___65991 = (0);
while(true){
if((i__4731__auto___65991 < len__4730__auto___65990)){
args__4736__auto__.push((arguments[i__4731__auto___65991]));

var G__65992 = (i__4731__auto___65991 + (1));
i__4731__auto___65991 = G__65992;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65371 = conformed_args__62943__auto__;
var map__65371__$1 = (((((!((map__65371 == null))))?(((((map__65371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65371):map__65371);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65371__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65371__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65371__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq65370){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65370));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65993 = arguments.length;
var i__4731__auto___65994 = (0);
while(true){
if((i__4731__auto___65994 < len__4730__auto___65993)){
args__4736__auto__.push((arguments[i__4731__auto___65994]));

var G__65995 = (i__4731__auto___65994 + (1));
i__4731__auto___65994 = G__65995;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65374 = conformed_args__62943__auto__;
var map__65374__$1 = (((((!((map__65374 == null))))?(((((map__65374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65374):map__65374);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65374__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65374__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65374__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq65373){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65373));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65996 = arguments.length;
var i__4731__auto___65997 = (0);
while(true){
if((i__4731__auto___65997 < len__4730__auto___65996)){
args__4736__auto__.push((arguments[i__4731__auto___65997]));

var G__65998 = (i__4731__auto___65997 + (1));
i__4731__auto___65997 = G__65998;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65377 = conformed_args__62943__auto__;
var map__65377__$1 = (((((!((map__65377 == null))))?(((((map__65377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65377):map__65377);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65377__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65377__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65377__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq65376){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65376));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65999 = arguments.length;
var i__4731__auto___66000 = (0);
while(true){
if((i__4731__auto___66000 < len__4730__auto___65999)){
args__4736__auto__.push((arguments[i__4731__auto___66000]));

var G__66001 = (i__4731__auto___66000 + (1));
i__4731__auto___66000 = G__66001;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65380 = conformed_args__62943__auto__;
var map__65380__$1 = (((((!((map__65380 == null))))?(((((map__65380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65380):map__65380);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65380__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65380__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65380__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq65379){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65379));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66002 = arguments.length;
var i__4731__auto___66003 = (0);
while(true){
if((i__4731__auto___66003 < len__4730__auto___66002)){
args__4736__auto__.push((arguments[i__4731__auto___66003]));

var G__66004 = (i__4731__auto___66003 + (1));
i__4731__auto___66003 = G__66004;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65383 = conformed_args__62943__auto__;
var map__65383__$1 = (((((!((map__65383 == null))))?(((((map__65383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65383):map__65383);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65383__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65383__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65383__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq65382){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65382));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66005 = arguments.length;
var i__4731__auto___66006 = (0);
while(true){
if((i__4731__auto___66006 < len__4730__auto___66005)){
args__4736__auto__.push((arguments[i__4731__auto___66006]));

var G__66007 = (i__4731__auto___66006 + (1));
i__4731__auto___66006 = G__66007;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65386 = conformed_args__62943__auto__;
var map__65386__$1 = (((((!((map__65386 == null))))?(((((map__65386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65386):map__65386);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65386__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65386__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65386__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq65385){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65385));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66008 = arguments.length;
var i__4731__auto___66009 = (0);
while(true){
if((i__4731__auto___66009 < len__4730__auto___66008)){
args__4736__auto__.push((arguments[i__4731__auto___66009]));

var G__66010 = (i__4731__auto___66009 + (1));
i__4731__auto___66009 = G__66010;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65389 = conformed_args__62943__auto__;
var map__65389__$1 = (((((!((map__65389 == null))))?(((((map__65389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65389):map__65389);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65389__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65389__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65389__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq65388){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65388));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66011 = arguments.length;
var i__4731__auto___66012 = (0);
while(true){
if((i__4731__auto___66012 < len__4730__auto___66011)){
args__4736__auto__.push((arguments[i__4731__auto___66012]));

var G__66013 = (i__4731__auto___66012 + (1));
i__4731__auto___66012 = G__66013;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65392 = conformed_args__62943__auto__;
var map__65392__$1 = (((((!((map__65392 == null))))?(((((map__65392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65392):map__65392);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65392__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65392__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65392__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq65391){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65391));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66014 = arguments.length;
var i__4731__auto___66015 = (0);
while(true){
if((i__4731__auto___66015 < len__4730__auto___66014)){
args__4736__auto__.push((arguments[i__4731__auto___66015]));

var G__66016 = (i__4731__auto___66015 + (1));
i__4731__auto___66015 = G__66016;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65395 = conformed_args__62943__auto__;
var map__65395__$1 = (((((!((map__65395 == null))))?(((((map__65395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65395):map__65395);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65395__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65395__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65395__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq65394){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65394));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66017 = arguments.length;
var i__4731__auto___66018 = (0);
while(true){
if((i__4731__auto___66018 < len__4730__auto___66017)){
args__4736__auto__.push((arguments[i__4731__auto___66018]));

var G__66019 = (i__4731__auto___66018 + (1));
i__4731__auto___66018 = G__66019;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65398 = conformed_args__62943__auto__;
var map__65398__$1 = (((((!((map__65398 == null))))?(((((map__65398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65398):map__65398);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65398__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65398__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65398__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq65397){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65397));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66020 = arguments.length;
var i__4731__auto___66021 = (0);
while(true){
if((i__4731__auto___66021 < len__4730__auto___66020)){
args__4736__auto__.push((arguments[i__4731__auto___66021]));

var G__66022 = (i__4731__auto___66021 + (1));
i__4731__auto___66021 = G__66022;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65401 = conformed_args__62943__auto__;
var map__65401__$1 = (((((!((map__65401 == null))))?(((((map__65401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65401):map__65401);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65401__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65401__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65401__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq65400){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65400));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66023 = arguments.length;
var i__4731__auto___66024 = (0);
while(true){
if((i__4731__auto___66024 < len__4730__auto___66023)){
args__4736__auto__.push((arguments[i__4731__auto___66024]));

var G__66025 = (i__4731__auto___66024 + (1));
i__4731__auto___66024 = G__66025;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65404 = conformed_args__62943__auto__;
var map__65404__$1 = (((((!((map__65404 == null))))?(((((map__65404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65404):map__65404);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65404__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65404__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65404__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq65403){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65403));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66026 = arguments.length;
var i__4731__auto___66027 = (0);
while(true){
if((i__4731__auto___66027 < len__4730__auto___66026)){
args__4736__auto__.push((arguments[i__4731__auto___66027]));

var G__66028 = (i__4731__auto___66027 + (1));
i__4731__auto___66027 = G__66028;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65407 = conformed_args__62943__auto__;
var map__65407__$1 = (((((!((map__65407 == null))))?(((((map__65407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65407):map__65407);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65407__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65407__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65407__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq65406){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65406));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66029 = arguments.length;
var i__4731__auto___66030 = (0);
while(true){
if((i__4731__auto___66030 < len__4730__auto___66029)){
args__4736__auto__.push((arguments[i__4731__auto___66030]));

var G__66031 = (i__4731__auto___66030 + (1));
i__4731__auto___66030 = G__66031;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65410 = conformed_args__62943__auto__;
var map__65410__$1 = (((((!((map__65410 == null))))?(((((map__65410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65410):map__65410);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65410__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65410__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65410__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq65409){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65409));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66032 = arguments.length;
var i__4731__auto___66033 = (0);
while(true){
if((i__4731__auto___66033 < len__4730__auto___66032)){
args__4736__auto__.push((arguments[i__4731__auto___66033]));

var G__66034 = (i__4731__auto___66033 + (1));
i__4731__auto___66033 = G__66034;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65413 = conformed_args__62943__auto__;
var map__65413__$1 = (((((!((map__65413 == null))))?(((((map__65413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65413):map__65413);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65413__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65413__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65413__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq65412){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65412));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66035 = arguments.length;
var i__4731__auto___66036 = (0);
while(true){
if((i__4731__auto___66036 < len__4730__auto___66035)){
args__4736__auto__.push((arguments[i__4731__auto___66036]));

var G__66037 = (i__4731__auto___66036 + (1));
i__4731__auto___66036 = G__66037;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65416 = conformed_args__62943__auto__;
var map__65416__$1 = (((((!((map__65416 == null))))?(((((map__65416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65416):map__65416);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65416__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65416__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65416__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq65415){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65415));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66038 = arguments.length;
var i__4731__auto___66039 = (0);
while(true){
if((i__4731__auto___66039 < len__4730__auto___66038)){
args__4736__auto__.push((arguments[i__4731__auto___66039]));

var G__66040 = (i__4731__auto___66039 + (1));
i__4731__auto___66039 = G__66040;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65419 = conformed_args__62943__auto__;
var map__65419__$1 = (((((!((map__65419 == null))))?(((((map__65419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65419):map__65419);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65419__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65419__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65419__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq65418){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65418));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66041 = arguments.length;
var i__4731__auto___66042 = (0);
while(true){
if((i__4731__auto___66042 < len__4730__auto___66041)){
args__4736__auto__.push((arguments[i__4731__auto___66042]));

var G__66043 = (i__4731__auto___66042 + (1));
i__4731__auto___66042 = G__66043;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65422 = conformed_args__62943__auto__;
var map__65422__$1 = (((((!((map__65422 == null))))?(((((map__65422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65422):map__65422);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65422__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65422__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65422__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq65421){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65421));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66044 = arguments.length;
var i__4731__auto___66045 = (0);
while(true){
if((i__4731__auto___66045 < len__4730__auto___66044)){
args__4736__auto__.push((arguments[i__4731__auto___66045]));

var G__66046 = (i__4731__auto___66045 + (1));
i__4731__auto___66045 = G__66046;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65425 = conformed_args__62943__auto__;
var map__65425__$1 = (((((!((map__65425 == null))))?(((((map__65425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65425):map__65425);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65425__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65425__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65425__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq65424){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65424));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66047 = arguments.length;
var i__4731__auto___66048 = (0);
while(true){
if((i__4731__auto___66048 < len__4730__auto___66047)){
args__4736__auto__.push((arguments[i__4731__auto___66048]));

var G__66049 = (i__4731__auto___66048 + (1));
i__4731__auto___66048 = G__66049;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65428 = conformed_args__62943__auto__;
var map__65428__$1 = (((((!((map__65428 == null))))?(((((map__65428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65428):map__65428);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65428__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65428__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65428__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq65427){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65427));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66050 = arguments.length;
var i__4731__auto___66051 = (0);
while(true){
if((i__4731__auto___66051 < len__4730__auto___66050)){
args__4736__auto__.push((arguments[i__4731__auto___66051]));

var G__66052 = (i__4731__auto___66051 + (1));
i__4731__auto___66051 = G__66052;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65431 = conformed_args__62943__auto__;
var map__65431__$1 = (((((!((map__65431 == null))))?(((((map__65431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65431):map__65431);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65431__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65431__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65431__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq65430){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65430));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66053 = arguments.length;
var i__4731__auto___66054 = (0);
while(true){
if((i__4731__auto___66054 < len__4730__auto___66053)){
args__4736__auto__.push((arguments[i__4731__auto___66054]));

var G__66055 = (i__4731__auto___66054 + (1));
i__4731__auto___66054 = G__66055;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65434 = conformed_args__62943__auto__;
var map__65434__$1 = (((((!((map__65434 == null))))?(((((map__65434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65434):map__65434);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65434__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65434__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65434__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq65433){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65433));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66056 = arguments.length;
var i__4731__auto___66057 = (0);
while(true){
if((i__4731__auto___66057 < len__4730__auto___66056)){
args__4736__auto__.push((arguments[i__4731__auto___66057]));

var G__66058 = (i__4731__auto___66057 + (1));
i__4731__auto___66057 = G__66058;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65437 = conformed_args__62943__auto__;
var map__65437__$1 = (((((!((map__65437 == null))))?(((((map__65437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65437):map__65437);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65437__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65437__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65437__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq65436){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65436));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66059 = arguments.length;
var i__4731__auto___66060 = (0);
while(true){
if((i__4731__auto___66060 < len__4730__auto___66059)){
args__4736__auto__.push((arguments[i__4731__auto___66060]));

var G__66061 = (i__4731__auto___66060 + (1));
i__4731__auto___66060 = G__66061;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__62943__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65440 = conformed_args__62943__auto__;
var map__65440__$1 = (((((!((map__65440 == null))))?(((((map__65440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65440):map__65440);
var attrs__62944__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65440__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__62945__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65440__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__62946__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65440__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__62945__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__62945__auto__);
var attrs_value__62947__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__62944__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__62947__auto__], null),children__62945__auto____$1),css__62946__auto__);
});

com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq65439){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65439));
});


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
