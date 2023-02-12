goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__54021 = coll;
var G__54022 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__54021,G__54022) : shadow.dom.lazy_native_coll_seq.call(null,G__54021,G__54022));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__54067 = arguments.length;
switch (G__54067) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__54070 = arguments.length;
switch (G__54070) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__54076 = arguments.length;
switch (G__54076) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__54087 = arguments.length;
switch (G__54087) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__54094 = arguments.length;
switch (G__54094) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__54095 = document;
var G__54096 = shadow.dom.dom_node(el);
return goog.dom.contains(G__54095,G__54096);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__54097 = shadow.dom.dom_node(parent);
var G__54098 = shadow.dom.dom_node(el);
return goog.dom.contains(G__54097,G__54098);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__54101 = shadow.dom.dom_node(el);
var G__54102 = cls;
return goog.dom.classlist.add(G__54101,G__54102);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__54103 = shadow.dom.dom_node(el);
var G__54104 = cls;
return goog.dom.classlist.remove(G__54103,G__54104);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__54106 = arguments.length;
switch (G__54106) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__54107 = shadow.dom.dom_node(el);
var G__54108 = cls;
return goog.dom.classlist.toggle(G__54107,G__54108);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e54115){if((e54115 instanceof Object)){
var e = e54115;
return console.log("didnt support attachEvent",el,e);
} else {
throw e54115;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__54125 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__54126 = null;
var count__54127 = (0);
var i__54128 = (0);
while(true){
if((i__54128 < count__54127)){
var el = chunk__54126.cljs$core$IIndexed$_nth$arity$2(null,i__54128);
var handler_54759__$1 = ((function (seq__54125,chunk__54126,count__54127,i__54128,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__54125,chunk__54126,count__54127,i__54128,el))
;
var G__54143_54760 = el;
var G__54144_54761 = cljs.core.name(ev);
var G__54145_54762 = handler_54759__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__54143_54760,G__54144_54761,G__54145_54762) : shadow.dom.dom_listen.call(null,G__54143_54760,G__54144_54761,G__54145_54762));


var G__54763 = seq__54125;
var G__54764 = chunk__54126;
var G__54765 = count__54127;
var G__54766 = (i__54128 + (1));
seq__54125 = G__54763;
chunk__54126 = G__54764;
count__54127 = G__54765;
i__54128 = G__54766;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54125);
if(temp__5804__auto__){
var seq__54125__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54125__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54125__$1);
var G__54768 = cljs.core.chunk_rest(seq__54125__$1);
var G__54769 = c__4550__auto__;
var G__54770 = cljs.core.count(c__4550__auto__);
var G__54771 = (0);
seq__54125 = G__54768;
chunk__54126 = G__54769;
count__54127 = G__54770;
i__54128 = G__54771;
continue;
} else {
var el = cljs.core.first(seq__54125__$1);
var handler_54772__$1 = ((function (seq__54125,chunk__54126,count__54127,i__54128,el,seq__54125__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__54125,chunk__54126,count__54127,i__54128,el,seq__54125__$1,temp__5804__auto__))
;
var G__54150_54773 = el;
var G__54151_54774 = cljs.core.name(ev);
var G__54152_54775 = handler_54772__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__54150_54773,G__54151_54774,G__54152_54775) : shadow.dom.dom_listen.call(null,G__54150_54773,G__54151_54774,G__54152_54775));


var G__54776 = cljs.core.next(seq__54125__$1);
var G__54777 = null;
var G__54778 = (0);
var G__54779 = (0);
seq__54125 = G__54776;
chunk__54126 = G__54777;
count__54127 = G__54778;
i__54128 = G__54779;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__54160 = arguments.length;
switch (G__54160) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__54164 = shadow.dom.dom_node(el);
var G__54165 = cljs.core.name(ev);
var G__54166 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__54164,G__54165,G__54166) : shadow.dom.dom_listen.call(null,G__54164,G__54165,G__54166));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__54169 = shadow.dom.dom_node(el);
var G__54170 = cljs.core.name(ev);
var G__54171 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__54169,G__54170,G__54171) : shadow.dom.dom_listen_remove.call(null,G__54169,G__54170,G__54171));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__54174 = cljs.core.seq(events);
var chunk__54175 = null;
var count__54176 = (0);
var i__54177 = (0);
while(true){
if((i__54177 < count__54176)){
var vec__54187 = chunk__54175.cljs$core$IIndexed$_nth$arity$2(null,i__54177);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54187,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54187,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__54782 = seq__54174;
var G__54783 = chunk__54175;
var G__54784 = count__54176;
var G__54785 = (i__54177 + (1));
seq__54174 = G__54782;
chunk__54175 = G__54783;
count__54176 = G__54784;
i__54177 = G__54785;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54174);
if(temp__5804__auto__){
var seq__54174__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54174__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54174__$1);
var G__54787 = cljs.core.chunk_rest(seq__54174__$1);
var G__54788 = c__4550__auto__;
var G__54789 = cljs.core.count(c__4550__auto__);
var G__54790 = (0);
seq__54174 = G__54787;
chunk__54175 = G__54788;
count__54176 = G__54789;
i__54177 = G__54790;
continue;
} else {
var vec__54194 = cljs.core.first(seq__54174__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54194,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54194,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__54794 = cljs.core.next(seq__54174__$1);
var G__54795 = null;
var G__54796 = (0);
var G__54797 = (0);
seq__54174 = G__54794;
chunk__54175 = G__54795;
count__54176 = G__54796;
i__54177 = G__54797;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__54201 = cljs.core.seq(styles);
var chunk__54202 = null;
var count__54203 = (0);
var i__54204 = (0);
while(true){
if((i__54204 < count__54203)){
var vec__54228 = chunk__54202.cljs$core$IIndexed$_nth$arity$2(null,i__54204);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54228,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54228,(1),null);
var G__54231_54801 = dom;
var G__54232_54802 = cljs.core.name(k);
var G__54233_54803 = (((v == null))?"":v);
goog.style.setStyle(G__54231_54801,G__54232_54802,G__54233_54803);


var G__54804 = seq__54201;
var G__54805 = chunk__54202;
var G__54806 = count__54203;
var G__54807 = (i__54204 + (1));
seq__54201 = G__54804;
chunk__54202 = G__54805;
count__54203 = G__54806;
i__54204 = G__54807;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54201);
if(temp__5804__auto__){
var seq__54201__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54201__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54201__$1);
var G__54808 = cljs.core.chunk_rest(seq__54201__$1);
var G__54809 = c__4550__auto__;
var G__54810 = cljs.core.count(c__4550__auto__);
var G__54811 = (0);
seq__54201 = G__54808;
chunk__54202 = G__54809;
count__54203 = G__54810;
i__54204 = G__54811;
continue;
} else {
var vec__54235 = cljs.core.first(seq__54201__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54235,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54235,(1),null);
var G__54238_54812 = dom;
var G__54239_54813 = cljs.core.name(k);
var G__54240_54814 = (((v == null))?"":v);
goog.style.setStyle(G__54238_54812,G__54239_54813,G__54240_54814);


var G__54815 = cljs.core.next(seq__54201__$1);
var G__54816 = null;
var G__54817 = (0);
var G__54819 = (0);
seq__54201 = G__54815;
chunk__54202 = G__54816;
count__54203 = G__54817;
i__54204 = G__54819;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__54248_54823 = key;
var G__54248_54824__$1 = (((G__54248_54823 instanceof cljs.core.Keyword))?G__54248_54823.fqn:null);
switch (G__54248_54824__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_54835 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_54835,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_54835,"aria-");
}
})())){
el.setAttribute(ks_54835,value);
} else {
(el[ks_54835] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__54259 = shadow.dom.dom_node(el);
var G__54260 = cls;
return goog.dom.classlist.contains(G__54259,G__54260);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__54268){
var map__54269 = p__54268;
var map__54269__$1 = (((((!((map__54269 == null))))?(((((map__54269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54269):map__54269);
var props = map__54269__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54269__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__54273 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54273,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54273,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54273,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__54276 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__54276,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__54276;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__54279 = arguments.length;
switch (G__54279) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__54287){
var vec__54291 = p__54287;
var seq__54292 = cljs.core.seq(vec__54291);
var first__54293 = cljs.core.first(seq__54292);
var seq__54292__$1 = cljs.core.next(seq__54292);
var nn = first__54293;
var first__54293__$1 = cljs.core.first(seq__54292__$1);
var seq__54292__$2 = cljs.core.next(seq__54292__$1);
var np = first__54293__$1;
var nc = seq__54292__$2;
var node = vec__54291;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54295 = nn;
var G__54296 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__54295,G__54296) : create_fn.call(null,G__54295,G__54296));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54297 = nn;
var G__54298 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__54297,G__54298) : create_fn.call(null,G__54297,G__54298));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__54303 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54303,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54303,(1),null);
var seq__54307_54849 = cljs.core.seq(node_children);
var chunk__54308_54850 = null;
var count__54309_54851 = (0);
var i__54310_54852 = (0);
while(true){
if((i__54310_54852 < count__54309_54851)){
var child_struct_54853 = chunk__54308_54850.cljs$core$IIndexed$_nth$arity$2(null,i__54310_54852);
var children_54854 = shadow.dom.dom_node(child_struct_54853);
if(cljs.core.seq_QMARK_(children_54854)){
var seq__54340_54856 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_54854));
var chunk__54342_54857 = null;
var count__54343_54858 = (0);
var i__54344_54859 = (0);
while(true){
if((i__54344_54859 < count__54343_54858)){
var child_54862 = chunk__54342_54857.cljs$core$IIndexed$_nth$arity$2(null,i__54344_54859);
if(cljs.core.truth_(child_54862)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54862);


var G__54864 = seq__54340_54856;
var G__54865 = chunk__54342_54857;
var G__54866 = count__54343_54858;
var G__54867 = (i__54344_54859 + (1));
seq__54340_54856 = G__54864;
chunk__54342_54857 = G__54865;
count__54343_54858 = G__54866;
i__54344_54859 = G__54867;
continue;
} else {
var G__54869 = seq__54340_54856;
var G__54870 = chunk__54342_54857;
var G__54871 = count__54343_54858;
var G__54872 = (i__54344_54859 + (1));
seq__54340_54856 = G__54869;
chunk__54342_54857 = G__54870;
count__54343_54858 = G__54871;
i__54344_54859 = G__54872;
continue;
}
} else {
var temp__5804__auto___54874 = cljs.core.seq(seq__54340_54856);
if(temp__5804__auto___54874){
var seq__54340_54875__$1 = temp__5804__auto___54874;
if(cljs.core.chunked_seq_QMARK_(seq__54340_54875__$1)){
var c__4550__auto___54876 = cljs.core.chunk_first(seq__54340_54875__$1);
var G__54878 = cljs.core.chunk_rest(seq__54340_54875__$1);
var G__54879 = c__4550__auto___54876;
var G__54880 = cljs.core.count(c__4550__auto___54876);
var G__54881 = (0);
seq__54340_54856 = G__54878;
chunk__54342_54857 = G__54879;
count__54343_54858 = G__54880;
i__54344_54859 = G__54881;
continue;
} else {
var child_54882 = cljs.core.first(seq__54340_54875__$1);
if(cljs.core.truth_(child_54882)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54882);


var G__54884 = cljs.core.next(seq__54340_54875__$1);
var G__54885 = null;
var G__54886 = (0);
var G__54887 = (0);
seq__54340_54856 = G__54884;
chunk__54342_54857 = G__54885;
count__54343_54858 = G__54886;
i__54344_54859 = G__54887;
continue;
} else {
var G__54889 = cljs.core.next(seq__54340_54875__$1);
var G__54890 = null;
var G__54891 = (0);
var G__54892 = (0);
seq__54340_54856 = G__54889;
chunk__54342_54857 = G__54890;
count__54343_54858 = G__54891;
i__54344_54859 = G__54892;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_54854);
}


var G__54893 = seq__54307_54849;
var G__54894 = chunk__54308_54850;
var G__54895 = count__54309_54851;
var G__54896 = (i__54310_54852 + (1));
seq__54307_54849 = G__54893;
chunk__54308_54850 = G__54894;
count__54309_54851 = G__54895;
i__54310_54852 = G__54896;
continue;
} else {
var temp__5804__auto___54897 = cljs.core.seq(seq__54307_54849);
if(temp__5804__auto___54897){
var seq__54307_54898__$1 = temp__5804__auto___54897;
if(cljs.core.chunked_seq_QMARK_(seq__54307_54898__$1)){
var c__4550__auto___54899 = cljs.core.chunk_first(seq__54307_54898__$1);
var G__54900 = cljs.core.chunk_rest(seq__54307_54898__$1);
var G__54901 = c__4550__auto___54899;
var G__54902 = cljs.core.count(c__4550__auto___54899);
var G__54903 = (0);
seq__54307_54849 = G__54900;
chunk__54308_54850 = G__54901;
count__54309_54851 = G__54902;
i__54310_54852 = G__54903;
continue;
} else {
var child_struct_54904 = cljs.core.first(seq__54307_54898__$1);
var children_54905 = shadow.dom.dom_node(child_struct_54904);
if(cljs.core.seq_QMARK_(children_54905)){
var seq__54361_54906 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_54905));
var chunk__54363_54907 = null;
var count__54364_54908 = (0);
var i__54365_54909 = (0);
while(true){
if((i__54365_54909 < count__54364_54908)){
var child_54910 = chunk__54363_54907.cljs$core$IIndexed$_nth$arity$2(null,i__54365_54909);
if(cljs.core.truth_(child_54910)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54910);


var G__54911 = seq__54361_54906;
var G__54912 = chunk__54363_54907;
var G__54913 = count__54364_54908;
var G__54914 = (i__54365_54909 + (1));
seq__54361_54906 = G__54911;
chunk__54363_54907 = G__54912;
count__54364_54908 = G__54913;
i__54365_54909 = G__54914;
continue;
} else {
var G__54915 = seq__54361_54906;
var G__54916 = chunk__54363_54907;
var G__54917 = count__54364_54908;
var G__54918 = (i__54365_54909 + (1));
seq__54361_54906 = G__54915;
chunk__54363_54907 = G__54916;
count__54364_54908 = G__54917;
i__54365_54909 = G__54918;
continue;
}
} else {
var temp__5804__auto___54919__$1 = cljs.core.seq(seq__54361_54906);
if(temp__5804__auto___54919__$1){
var seq__54361_54920__$1 = temp__5804__auto___54919__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54361_54920__$1)){
var c__4550__auto___54921 = cljs.core.chunk_first(seq__54361_54920__$1);
var G__54922 = cljs.core.chunk_rest(seq__54361_54920__$1);
var G__54923 = c__4550__auto___54921;
var G__54924 = cljs.core.count(c__4550__auto___54921);
var G__54925 = (0);
seq__54361_54906 = G__54922;
chunk__54363_54907 = G__54923;
count__54364_54908 = G__54924;
i__54365_54909 = G__54925;
continue;
} else {
var child_54926 = cljs.core.first(seq__54361_54920__$1);
if(cljs.core.truth_(child_54926)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54926);


var G__54928 = cljs.core.next(seq__54361_54920__$1);
var G__54929 = null;
var G__54930 = (0);
var G__54931 = (0);
seq__54361_54906 = G__54928;
chunk__54363_54907 = G__54929;
count__54364_54908 = G__54930;
i__54365_54909 = G__54931;
continue;
} else {
var G__54934 = cljs.core.next(seq__54361_54920__$1);
var G__54935 = null;
var G__54936 = (0);
var G__54937 = (0);
seq__54361_54906 = G__54934;
chunk__54363_54907 = G__54935;
count__54364_54908 = G__54936;
i__54365_54909 = G__54937;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_54905);
}


var G__54938 = cljs.core.next(seq__54307_54898__$1);
var G__54939 = null;
var G__54940 = (0);
var G__54941 = (0);
seq__54307_54849 = G__54938;
chunk__54308_54850 = G__54939;
count__54309_54851 = G__54940;
i__54310_54852 = G__54941;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__54385 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__54385);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__54389 = cljs.core.seq(node);
var chunk__54390 = null;
var count__54391 = (0);
var i__54392 = (0);
while(true){
if((i__54392 < count__54391)){
var n = chunk__54390.cljs$core$IIndexed$_nth$arity$2(null,i__54392);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__54948 = seq__54389;
var G__54949 = chunk__54390;
var G__54950 = count__54391;
var G__54951 = (i__54392 + (1));
seq__54389 = G__54948;
chunk__54390 = G__54949;
count__54391 = G__54950;
i__54392 = G__54951;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54389);
if(temp__5804__auto__){
var seq__54389__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54389__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54389__$1);
var G__54954 = cljs.core.chunk_rest(seq__54389__$1);
var G__54955 = c__4550__auto__;
var G__54956 = cljs.core.count(c__4550__auto__);
var G__54957 = (0);
seq__54389 = G__54954;
chunk__54390 = G__54955;
count__54391 = G__54956;
i__54392 = G__54957;
continue;
} else {
var n = cljs.core.first(seq__54389__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__54958 = cljs.core.next(seq__54389__$1);
var G__54959 = null;
var G__54960 = (0);
var G__54961 = (0);
seq__54389 = G__54958;
chunk__54390 = G__54959;
count__54391 = G__54960;
i__54392 = G__54961;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__54411 = shadow.dom.dom_node(new$);
var G__54412 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__54411,G__54412);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__54420 = arguments.length;
switch (G__54420) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__54427 = arguments.length;
switch (G__54427) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__54435 = arguments.length;
switch (G__54435) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54972 = arguments.length;
var i__4731__auto___54973 = (0);
while(true){
if((i__4731__auto___54973 < len__4730__auto___54972)){
args__4736__auto__.push((arguments[i__4731__auto___54973]));

var G__54977 = (i__4731__auto___54973 + (1));
i__4731__auto___54973 = G__54977;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__54449_54978 = cljs.core.seq(nodes);
var chunk__54450_54979 = null;
var count__54451_54980 = (0);
var i__54452_54981 = (0);
while(true){
if((i__54452_54981 < count__54451_54980)){
var node_54982 = chunk__54450_54979.cljs$core$IIndexed$_nth$arity$2(null,i__54452_54981);
fragment.appendChild(shadow.dom._to_dom(node_54982));


var G__54983 = seq__54449_54978;
var G__54984 = chunk__54450_54979;
var G__54985 = count__54451_54980;
var G__54986 = (i__54452_54981 + (1));
seq__54449_54978 = G__54983;
chunk__54450_54979 = G__54984;
count__54451_54980 = G__54985;
i__54452_54981 = G__54986;
continue;
} else {
var temp__5804__auto___54987 = cljs.core.seq(seq__54449_54978);
if(temp__5804__auto___54987){
var seq__54449_54989__$1 = temp__5804__auto___54987;
if(cljs.core.chunked_seq_QMARK_(seq__54449_54989__$1)){
var c__4550__auto___54990 = cljs.core.chunk_first(seq__54449_54989__$1);
var G__54991 = cljs.core.chunk_rest(seq__54449_54989__$1);
var G__54992 = c__4550__auto___54990;
var G__54993 = cljs.core.count(c__4550__auto___54990);
var G__54994 = (0);
seq__54449_54978 = G__54991;
chunk__54450_54979 = G__54992;
count__54451_54980 = G__54993;
i__54452_54981 = G__54994;
continue;
} else {
var node_54995 = cljs.core.first(seq__54449_54989__$1);
fragment.appendChild(shadow.dom._to_dom(node_54995));


var G__54996 = cljs.core.next(seq__54449_54989__$1);
var G__54997 = null;
var G__54998 = (0);
var G__54999 = (0);
seq__54449_54978 = G__54996;
chunk__54450_54979 = G__54997;
count__54451_54980 = G__54998;
i__54452_54981 = G__54999;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq54444){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54444));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__54459_55003 = cljs.core.seq(scripts);
var chunk__54460_55004 = null;
var count__54461_55005 = (0);
var i__54462_55006 = (0);
while(true){
if((i__54462_55006 < count__54461_55005)){
var vec__54469_55007 = chunk__54460_55004.cljs$core$IIndexed$_nth$arity$2(null,i__54462_55006);
var script_tag_55008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54469_55007,(0),null);
var script_body_55009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54469_55007,(1),null);
eval(script_body_55009);


var G__55010 = seq__54459_55003;
var G__55011 = chunk__54460_55004;
var G__55012 = count__54461_55005;
var G__55013 = (i__54462_55006 + (1));
seq__54459_55003 = G__55010;
chunk__54460_55004 = G__55011;
count__54461_55005 = G__55012;
i__54462_55006 = G__55013;
continue;
} else {
var temp__5804__auto___55015 = cljs.core.seq(seq__54459_55003);
if(temp__5804__auto___55015){
var seq__54459_55016__$1 = temp__5804__auto___55015;
if(cljs.core.chunked_seq_QMARK_(seq__54459_55016__$1)){
var c__4550__auto___55017 = cljs.core.chunk_first(seq__54459_55016__$1);
var G__55018 = cljs.core.chunk_rest(seq__54459_55016__$1);
var G__55019 = c__4550__auto___55017;
var G__55020 = cljs.core.count(c__4550__auto___55017);
var G__55021 = (0);
seq__54459_55003 = G__55018;
chunk__54460_55004 = G__55019;
count__54461_55005 = G__55020;
i__54462_55006 = G__55021;
continue;
} else {
var vec__54472_55022 = cljs.core.first(seq__54459_55016__$1);
var script_tag_55023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54472_55022,(0),null);
var script_body_55024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54472_55022,(1),null);
eval(script_body_55024);


var G__55025 = cljs.core.next(seq__54459_55016__$1);
var G__55026 = null;
var G__55027 = (0);
var G__55028 = (0);
seq__54459_55003 = G__55025;
chunk__54460_55004 = G__55026;
count__54461_55005 = G__55027;
i__54462_55006 = G__55028;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__54475){
var vec__54476 = p__54475;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54476,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54476,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__54479 = shadow.dom.dom_node(el);
var G__54480 = cls;
return goog.dom.getAncestorByClass(G__54479,G__54480);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__54482 = arguments.length;
switch (G__54482) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__54483 = shadow.dom.dom_node(el);
var G__54484 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__54483,G__54484);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__54485 = shadow.dom.dom_node(el);
var G__54486 = cljs.core.name(tag);
var G__54487 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__54485,G__54486,G__54487);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__54488 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__54488);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__54489 = shadow.dom.dom_node(dom);
var G__54490 = value;
return goog.dom.forms.setValue(G__54489,G__54490);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__54494 = cljs.core.seq(style_keys);
var chunk__54495 = null;
var count__54496 = (0);
var i__54497 = (0);
while(true){
if((i__54497 < count__54496)){
var it = chunk__54495.cljs$core$IIndexed$_nth$arity$2(null,i__54497);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__55031 = seq__54494;
var G__55032 = chunk__54495;
var G__55033 = count__54496;
var G__55034 = (i__54497 + (1));
seq__54494 = G__55031;
chunk__54495 = G__55032;
count__54496 = G__55033;
i__54497 = G__55034;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54494);
if(temp__5804__auto__){
var seq__54494__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54494__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54494__$1);
var G__55035 = cljs.core.chunk_rest(seq__54494__$1);
var G__55036 = c__4550__auto__;
var G__55037 = cljs.core.count(c__4550__auto__);
var G__55038 = (0);
seq__54494 = G__55035;
chunk__54495 = G__55036;
count__54496 = G__55037;
i__54497 = G__55038;
continue;
} else {
var it = cljs.core.first(seq__54494__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__55039 = cljs.core.next(seq__54494__$1);
var G__55040 = null;
var G__55041 = (0);
var G__55042 = (0);
seq__54494 = G__55039;
chunk__54495 = G__55040;
count__54496 = G__55041;
i__54497 = G__55042;
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
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k54506,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__54514 = k54506;
var G__54514__$1 = (((G__54514 instanceof cljs.core.Keyword))?G__54514.fqn:null);
switch (G__54514__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54506,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__54516){
var vec__54517 = p__54516;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54517,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54517,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54505){
var self__ = this;
var G__54505__$1 = this;
return (new cljs.core.RecordIter((0),G__54505__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__54527 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__54527(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54507,other54508){
var self__ = this;
var this54507__$1 = this;
return (((!((other54508 == null)))) && ((this54507__$1.constructor === other54508.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54507__$1.x,other54508.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54507__$1.y,other54508.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54507__$1.__extmap,other54508.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__54505){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__54530 = cljs.core.keyword_identical_QMARK_;
var expr__54531 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__54534 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__54535 = expr__54531;
return (pred__54530.cljs$core$IFn$_invoke$arity$2 ? pred__54530.cljs$core$IFn$_invoke$arity$2(G__54534,G__54535) : pred__54530.call(null,G__54534,G__54535));
})())){
return (new shadow.dom.Coordinate(G__54505,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__54536 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__54537 = expr__54531;
return (pred__54530.cljs$core$IFn$_invoke$arity$2 ? pred__54530.cljs$core$IFn$_invoke$arity$2(G__54536,G__54537) : pred__54530.call(null,G__54536,G__54537));
})())){
return (new shadow.dom.Coordinate(self__.x,G__54505,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__54505),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__54505){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__54505,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__54511){
var extmap__4424__auto__ = (function (){var G__54544 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54511,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__54511)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54544);
} else {
return G__54544;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__54511),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__54511),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__54549 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__54549);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__54552 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__54552);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__54553 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__54553);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k54555,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__54562 = k54555;
var G__54562__$1 = (((G__54562 instanceof cljs.core.Keyword))?G__54562.fqn:null);
switch (G__54562__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54555,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__54564){
var vec__54565 = p__54564;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54565,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54565,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54554){
var self__ = this;
var G__54554__$1 = this;
return (new cljs.core.RecordIter((0),G__54554__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__54574 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__54574(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54556,other54557){
var self__ = this;
var this54556__$1 = this;
return (((!((other54557 == null)))) && ((this54556__$1.constructor === other54557.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54556__$1.w,other54557.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54556__$1.h,other54557.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54556__$1.__extmap,other54557.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__54554){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__54582 = cljs.core.keyword_identical_QMARK_;
var expr__54583 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__54585 = new cljs.core.Keyword(null,"w","w",354169001);
var G__54586 = expr__54583;
return (pred__54582.cljs$core$IFn$_invoke$arity$2 ? pred__54582.cljs$core$IFn$_invoke$arity$2(G__54585,G__54586) : pred__54582.call(null,G__54585,G__54586));
})())){
return (new shadow.dom.Size(G__54554,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__54588 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__54589 = expr__54583;
return (pred__54582.cljs$core$IFn$_invoke$arity$2 ? pred__54582.cljs$core$IFn$_invoke$arity$2(G__54588,G__54589) : pred__54582.call(null,G__54588,G__54589));
})())){
return (new shadow.dom.Size(self__.w,G__54554,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__54554),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__54554){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__54554,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__54560){
var extmap__4424__auto__ = (function (){var G__54594 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54560,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__54560)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54594);
} else {
return G__54594;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__54560),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__54560),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__54599 = shadow.dom.dom_node(el);
return goog.style.getSize(G__54599);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__55085 = (i + (1));
var G__55086 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__55085;
ret = G__55086;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54613){
var vec__54614 = p__54613;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54614,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54614,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__54620 = arguments.length;
switch (G__54620) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__54626_55091 = new_node;
var G__54627_55092 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__54626_55091,G__54627_55092);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__54631_55093 = new_node;
var G__54632_55094 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__54631_55093,G__54632_55094);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__55095 = ps;
var G__55096 = (i + (1));
el__$1 = G__55095;
i = G__55096;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__54637 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__54637);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__54642 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__54642);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__54644 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__54644);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__54646 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54646,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54646,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54646,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__54650_55097 = cljs.core.seq(props);
var chunk__54651_55098 = null;
var count__54652_55099 = (0);
var i__54653_55100 = (0);
while(true){
if((i__54653_55100 < count__54652_55099)){
var vec__54660_55101 = chunk__54651_55098.cljs$core$IIndexed$_nth$arity$2(null,i__54653_55100);
var k_55102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54660_55101,(0),null);
var v_55103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54660_55101,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_55102);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_55102),v_55103);


var G__55104 = seq__54650_55097;
var G__55105 = chunk__54651_55098;
var G__55106 = count__54652_55099;
var G__55107 = (i__54653_55100 + (1));
seq__54650_55097 = G__55104;
chunk__54651_55098 = G__55105;
count__54652_55099 = G__55106;
i__54653_55100 = G__55107;
continue;
} else {
var temp__5804__auto___55108 = cljs.core.seq(seq__54650_55097);
if(temp__5804__auto___55108){
var seq__54650_55109__$1 = temp__5804__auto___55108;
if(cljs.core.chunked_seq_QMARK_(seq__54650_55109__$1)){
var c__4550__auto___55110 = cljs.core.chunk_first(seq__54650_55109__$1);
var G__55111 = cljs.core.chunk_rest(seq__54650_55109__$1);
var G__55112 = c__4550__auto___55110;
var G__55113 = cljs.core.count(c__4550__auto___55110);
var G__55114 = (0);
seq__54650_55097 = G__55111;
chunk__54651_55098 = G__55112;
count__54652_55099 = G__55113;
i__54653_55100 = G__55114;
continue;
} else {
var vec__54663_55117 = cljs.core.first(seq__54650_55109__$1);
var k_55118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54663_55117,(0),null);
var v_55119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54663_55117,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_55118);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_55118),v_55119);


var G__55120 = cljs.core.next(seq__54650_55109__$1);
var G__55121 = null;
var G__55122 = (0);
var G__55123 = (0);
seq__54650_55097 = G__55120;
chunk__54651_55098 = G__55121;
count__54652_55099 = G__55122;
i__54653_55100 = G__55123;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__54667 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54667,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54667,(1),null);
var seq__54670_55124 = cljs.core.seq(node_children);
var chunk__54672_55125 = null;
var count__54673_55126 = (0);
var i__54674_55127 = (0);
while(true){
if((i__54674_55127 < count__54673_55126)){
var child_struct_55128 = chunk__54672_55125.cljs$core$IIndexed$_nth$arity$2(null,i__54674_55127);
if((!((child_struct_55128 == null)))){
if(typeof child_struct_55128 === 'string'){
var text_55129 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_55129),child_struct_55128].join(''));
} else {
var children_55130 = shadow.dom.svg_node(child_struct_55128);
if(cljs.core.seq_QMARK_(children_55130)){
var seq__54690_55131 = cljs.core.seq(children_55130);
var chunk__54692_55132 = null;
var count__54693_55133 = (0);
var i__54694_55134 = (0);
while(true){
if((i__54694_55134 < count__54693_55133)){
var child_55135 = chunk__54692_55132.cljs$core$IIndexed$_nth$arity$2(null,i__54694_55134);
if(cljs.core.truth_(child_55135)){
node.appendChild(child_55135);


var G__55137 = seq__54690_55131;
var G__55138 = chunk__54692_55132;
var G__55139 = count__54693_55133;
var G__55140 = (i__54694_55134 + (1));
seq__54690_55131 = G__55137;
chunk__54692_55132 = G__55138;
count__54693_55133 = G__55139;
i__54694_55134 = G__55140;
continue;
} else {
var G__55141 = seq__54690_55131;
var G__55142 = chunk__54692_55132;
var G__55143 = count__54693_55133;
var G__55144 = (i__54694_55134 + (1));
seq__54690_55131 = G__55141;
chunk__54692_55132 = G__55142;
count__54693_55133 = G__55143;
i__54694_55134 = G__55144;
continue;
}
} else {
var temp__5804__auto___55145 = cljs.core.seq(seq__54690_55131);
if(temp__5804__auto___55145){
var seq__54690_55146__$1 = temp__5804__auto___55145;
if(cljs.core.chunked_seq_QMARK_(seq__54690_55146__$1)){
var c__4550__auto___55147 = cljs.core.chunk_first(seq__54690_55146__$1);
var G__55148 = cljs.core.chunk_rest(seq__54690_55146__$1);
var G__55149 = c__4550__auto___55147;
var G__55150 = cljs.core.count(c__4550__auto___55147);
var G__55151 = (0);
seq__54690_55131 = G__55148;
chunk__54692_55132 = G__55149;
count__54693_55133 = G__55150;
i__54694_55134 = G__55151;
continue;
} else {
var child_55152 = cljs.core.first(seq__54690_55146__$1);
if(cljs.core.truth_(child_55152)){
node.appendChild(child_55152);


var G__55153 = cljs.core.next(seq__54690_55146__$1);
var G__55154 = null;
var G__55155 = (0);
var G__55156 = (0);
seq__54690_55131 = G__55153;
chunk__54692_55132 = G__55154;
count__54693_55133 = G__55155;
i__54694_55134 = G__55156;
continue;
} else {
var G__55157 = cljs.core.next(seq__54690_55146__$1);
var G__55158 = null;
var G__55159 = (0);
var G__55160 = (0);
seq__54690_55131 = G__55157;
chunk__54692_55132 = G__55158;
count__54693_55133 = G__55159;
i__54694_55134 = G__55160;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_55130);
}
}


var G__55161 = seq__54670_55124;
var G__55162 = chunk__54672_55125;
var G__55163 = count__54673_55126;
var G__55164 = (i__54674_55127 + (1));
seq__54670_55124 = G__55161;
chunk__54672_55125 = G__55162;
count__54673_55126 = G__55163;
i__54674_55127 = G__55164;
continue;
} else {
var G__55165 = seq__54670_55124;
var G__55166 = chunk__54672_55125;
var G__55167 = count__54673_55126;
var G__55168 = (i__54674_55127 + (1));
seq__54670_55124 = G__55165;
chunk__54672_55125 = G__55166;
count__54673_55126 = G__55167;
i__54674_55127 = G__55168;
continue;
}
} else {
var temp__5804__auto___55169 = cljs.core.seq(seq__54670_55124);
if(temp__5804__auto___55169){
var seq__54670_55170__$1 = temp__5804__auto___55169;
if(cljs.core.chunked_seq_QMARK_(seq__54670_55170__$1)){
var c__4550__auto___55171 = cljs.core.chunk_first(seq__54670_55170__$1);
var G__55172 = cljs.core.chunk_rest(seq__54670_55170__$1);
var G__55173 = c__4550__auto___55171;
var G__55174 = cljs.core.count(c__4550__auto___55171);
var G__55175 = (0);
seq__54670_55124 = G__55172;
chunk__54672_55125 = G__55173;
count__54673_55126 = G__55174;
i__54674_55127 = G__55175;
continue;
} else {
var child_struct_55176 = cljs.core.first(seq__54670_55170__$1);
if((!((child_struct_55176 == null)))){
if(typeof child_struct_55176 === 'string'){
var text_55177 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_55177),child_struct_55176].join(''));
} else {
var children_55178 = shadow.dom.svg_node(child_struct_55176);
if(cljs.core.seq_QMARK_(children_55178)){
var seq__54700_55179 = cljs.core.seq(children_55178);
var chunk__54702_55180 = null;
var count__54703_55181 = (0);
var i__54704_55182 = (0);
while(true){
if((i__54704_55182 < count__54703_55181)){
var child_55183 = chunk__54702_55180.cljs$core$IIndexed$_nth$arity$2(null,i__54704_55182);
if(cljs.core.truth_(child_55183)){
node.appendChild(child_55183);


var G__55184 = seq__54700_55179;
var G__55185 = chunk__54702_55180;
var G__55186 = count__54703_55181;
var G__55187 = (i__54704_55182 + (1));
seq__54700_55179 = G__55184;
chunk__54702_55180 = G__55185;
count__54703_55181 = G__55186;
i__54704_55182 = G__55187;
continue;
} else {
var G__55188 = seq__54700_55179;
var G__55189 = chunk__54702_55180;
var G__55190 = count__54703_55181;
var G__55191 = (i__54704_55182 + (1));
seq__54700_55179 = G__55188;
chunk__54702_55180 = G__55189;
count__54703_55181 = G__55190;
i__54704_55182 = G__55191;
continue;
}
} else {
var temp__5804__auto___55192__$1 = cljs.core.seq(seq__54700_55179);
if(temp__5804__auto___55192__$1){
var seq__54700_55193__$1 = temp__5804__auto___55192__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54700_55193__$1)){
var c__4550__auto___55194 = cljs.core.chunk_first(seq__54700_55193__$1);
var G__55195 = cljs.core.chunk_rest(seq__54700_55193__$1);
var G__55196 = c__4550__auto___55194;
var G__55197 = cljs.core.count(c__4550__auto___55194);
var G__55198 = (0);
seq__54700_55179 = G__55195;
chunk__54702_55180 = G__55196;
count__54703_55181 = G__55197;
i__54704_55182 = G__55198;
continue;
} else {
var child_55200 = cljs.core.first(seq__54700_55193__$1);
if(cljs.core.truth_(child_55200)){
node.appendChild(child_55200);


var G__55202 = cljs.core.next(seq__54700_55193__$1);
var G__55203 = null;
var G__55204 = (0);
var G__55205 = (0);
seq__54700_55179 = G__55202;
chunk__54702_55180 = G__55203;
count__54703_55181 = G__55204;
i__54704_55182 = G__55205;
continue;
} else {
var G__55206 = cljs.core.next(seq__54700_55193__$1);
var G__55207 = null;
var G__55208 = (0);
var G__55209 = (0);
seq__54700_55179 = G__55206;
chunk__54702_55180 = G__55207;
count__54703_55181 = G__55208;
i__54704_55182 = G__55209;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_55178);
}
}


var G__55210 = cljs.core.next(seq__54670_55170__$1);
var G__55211 = null;
var G__55212 = (0);
var G__55213 = (0);
seq__54670_55124 = G__55210;
chunk__54672_55125 = G__55211;
count__54673_55126 = G__55212;
i__54674_55127 = G__55213;
continue;
} else {
var G__55214 = cljs.core.next(seq__54670_55170__$1);
var G__55215 = null;
var G__55216 = (0);
var G__55217 = (0);
seq__54670_55124 = G__55214;
chunk__54672_55125 = G__55215;
count__54673_55126 = G__55216;
i__54674_55127 = G__55217;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__54709_55218 = shadow.dom._to_svg;
var G__54710_55219 = "string";
var G__54711_55220 = ((function (G__54709_55218,G__54710_55219){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__54709_55218,G__54710_55219))
;
goog.object.set(G__54709_55218,G__54710_55219,G__54711_55220);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__54713_55222 = shadow.dom._to_svg;
var G__54714_55223 = "null";
var G__54715_55224 = ((function (G__54713_55222,G__54714_55223){
return (function (_){
return null;
});})(G__54713_55222,G__54714_55223))
;
goog.object.set(G__54713_55222,G__54714_55223,G__54715_55224);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55229 = arguments.length;
var i__4731__auto___55230 = (0);
while(true){
if((i__4731__auto___55230 < len__4730__auto___55229)){
args__4736__auto__.push((arguments[i__4731__auto___55230]));

var G__55232 = (i__4731__auto___55230 + (1));
i__4731__auto___55230 = G__55232;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq54716){
var G__54717 = cljs.core.first(seq54716);
var seq54716__$1 = cljs.core.next(seq54716);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54717,seq54716__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__54721 = arguments.length;
switch (G__54721) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__54722_55235 = shadow.dom.dom_node(el);
var G__54723_55236 = cljs.core.name(event);
var G__54724_55237 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__54722_55235,G__54723_55236,G__54724_55237) : shadow.dom.dom_listen.call(null,G__54722_55235,G__54723_55236,G__54724_55237));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__51656__auto___55238 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51656__auto___55238,buf,chan,event_fn){
return (function (){
var f__51657__auto__ = (function (){var switch__50648__auto__ = ((function (c__51656__auto___55238,buf,chan,event_fn){
return (function (state_54729){
var state_val_54730 = (state_54729[(1)]);
if((state_val_54730 === (1))){
var state_54729__$1 = state_54729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54729__$1,(2),once_or_cleanup);
} else {
if((state_val_54730 === (2))){
var inst_54726 = (state_54729[(2)]);
var inst_54727 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_54729__$1 = (function (){var statearr_54731 = state_54729;
(statearr_54731[(7)] = inst_54726);

return statearr_54731;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54729__$1,inst_54727);
} else {
return null;
}
}
});})(c__51656__auto___55238,buf,chan,event_fn))
;
return ((function (switch__50648__auto__,c__51656__auto___55238,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__50649__auto__ = null;
var shadow$dom$state_machine__50649__auto____0 = (function (){
var statearr_54732 = [null,null,null,null,null,null,null,null];
(statearr_54732[(0)] = shadow$dom$state_machine__50649__auto__);

(statearr_54732[(1)] = (1));

return statearr_54732;
});
var shadow$dom$state_machine__50649__auto____1 = (function (state_54729){
while(true){
var ret_value__50650__auto__ = (function (){try{while(true){
var result__50651__auto__ = switch__50648__auto__(state_54729);
if(cljs.core.keyword_identical_QMARK_(result__50651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50651__auto__;
}
break;
}
}catch (e54733){if((e54733 instanceof Object)){
var ex__50652__auto__ = e54733;
var statearr_54734_55243 = state_54729;
(statearr_54734_55243[(5)] = ex__50652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54733;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55244 = state_54729;
state_54729 = G__55244;
continue;
} else {
return ret_value__50650__auto__;
}
break;
}
});
shadow$dom$state_machine__50649__auto__ = function(state_54729){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__50649__auto____0.call(this);
case 1:
return shadow$dom$state_machine__50649__auto____1.call(this,state_54729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__50649__auto____0;
shadow$dom$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__50649__auto____1;
return shadow$dom$state_machine__50649__auto__;
})()
;})(switch__50648__auto__,c__51656__auto___55238,buf,chan,event_fn))
})();
var state__51658__auto__ = (function (){var statearr_54735 = (f__51657__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51657__auto__.cljs$core$IFn$_invoke$arity$0() : f__51657__auto__.call(null));
(statearr_54735[(6)] = c__51656__auto___55238);

return statearr_54735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51658__auto__);
});})(c__51656__auto___55238,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
