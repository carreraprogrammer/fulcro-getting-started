goog.provide('com.fulcrologic.fulcro.inspect.transit');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.fulcrologic.fulcro.algorithms.transit');

/**
* @constructor
*/
com.fulcrologic.fulcro.inspect.transit.ErrorHandler = (function (){
});
com.fulcrologic.fulcro.inspect.transit.ErrorHandler.prototype.tag = (function (v){
var self__ = this;
var this$ = this;
return "js-error";
});

com.fulcrologic.fulcro.inspect.transit.ErrorHandler.prototype.rep = (function (v){
var self__ = this;
var this$ = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ex_message(v),cljs.core.ex_data(v)], null);
});

com.fulcrologic.fulcro.inspect.transit.ErrorHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return cljs.core.ex_message(v);
});

com.fulcrologic.fulcro.inspect.transit.ErrorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

com.fulcrologic.fulcro.inspect.transit.ErrorHandler.cljs$lang$type = true;

com.fulcrologic.fulcro.inspect.transit.ErrorHandler.cljs$lang$ctorStr = "com.fulcrologic.fulcro.inspect.transit/ErrorHandler";

com.fulcrologic.fulcro.inspect.transit.ErrorHandler.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.fulcrologic.fulcro.inspect.transit/ErrorHandler");
});

/**
 * Positional factory function for com.fulcrologic.fulcro.inspect.transit/ErrorHandler.
 */
com.fulcrologic.fulcro.inspect.transit.__GT_ErrorHandler = (function com$fulcrologic$fulcro$inspect$transit$__GT_ErrorHandler(){
return (new com.fulcrologic.fulcro.inspect.transit.ErrorHandler());
});


/**
* @constructor
*/
com.fulcrologic.fulcro.inspect.transit.DefaultHandler = (function (){
});
com.fulcrologic.fulcro.inspect.transit.DefaultHandler.prototype.tag = (function (v){
var self__ = this;
var this$ = this;
return "unknown";
});

com.fulcrologic.fulcro.inspect.transit.DefaultHandler.prototype.rep = (function (v){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
});

com.fulcrologic.fulcro.inspect.transit.DefaultHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

com.fulcrologic.fulcro.inspect.transit.DefaultHandler.cljs$lang$type = true;

com.fulcrologic.fulcro.inspect.transit.DefaultHandler.cljs$lang$ctorStr = "com.fulcrologic.fulcro.inspect.transit/DefaultHandler";

com.fulcrologic.fulcro.inspect.transit.DefaultHandler.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"com.fulcrologic.fulcro.inspect.transit/DefaultHandler");
});

/**
 * Positional factory function for com.fulcrologic.fulcro.inspect.transit/DefaultHandler.
 */
com.fulcrologic.fulcro.inspect.transit.__GT_DefaultHandler = (function com$fulcrologic$fulcro$inspect$transit$__GT_DefaultHandler(){
return (new com.fulcrologic.fulcro.inspect.transit.DefaultHandler());
});

com.fulcrologic.fulcro.inspect.transit.write_handlers = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.ExceptionInfo,(new com.fulcrologic.fulcro.inspect.transit.ErrorHandler()),"default",(new com.fulcrologic.fulcro.inspect.transit.DefaultHandler())]);
com.fulcrologic.fulcro.inspect.transit.read_handlers = new cljs.core.PersistentArrayMap(null, 1, ["js-error",(function (p__51959){
var vec__51960 = p__51959;
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51960,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51960,(1),null);
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg,data);
})], null);
com.fulcrologic.fulcro.inspect.transit.read = (function com$fulcrologic$fulcro$inspect$transit$read(str){
var reader = com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),com.fulcrologic.fulcro.inspect.transit.read_handlers], null));
return cognitect.transit.read(reader,str);
});
com.fulcrologic.fulcro.inspect.transit.write = (function com$fulcrologic$fulcro$inspect$transit$write(x){
var writer = com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),com.fulcrologic.fulcro.inspect.transit.write_handlers], null));
return cognitect.transit.write(writer,x);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IUUID$ = cljs.core.PROTOCOL_SENTINEL;

//# sourceMappingURL=com.fulcrologic.fulcro.inspect.transit.js.map
