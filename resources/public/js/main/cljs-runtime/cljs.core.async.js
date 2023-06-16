goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__51728 = arguments.length;
switch (G__51728) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51729 = (function (f,blockable,meta51730){
this.f = f;
this.blockable = blockable;
this.meta51730 = meta51730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51731,meta51730__$1){
var self__ = this;
var _51731__$1 = this;
return (new cljs.core.async.t_cljs$core$async51729(self__.f,self__.blockable,meta51730__$1));
});

cljs.core.async.t_cljs$core$async51729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51731){
var self__ = this;
var _51731__$1 = this;
return self__.meta51730;
});

cljs.core.async.t_cljs$core$async51729.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51729.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async51729.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async51729.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async51729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta51730","meta51730",859885155,null)], null);
});

cljs.core.async.t_cljs$core$async51729.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51729";

cljs.core.async.t_cljs$core$async51729.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51729");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51729.
 */
cljs.core.async.__GT_t_cljs$core$async51729 = (function cljs$core$async$__GT_t_cljs$core$async51729(f__$1,blockable__$1,meta51730){
return (new cljs.core.async.t_cljs$core$async51729(f__$1,blockable__$1,meta51730));
});

}

return (new cljs.core.async.t_cljs$core$async51729(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__51734 = arguments.length;
switch (G__51734) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__51746 = arguments.length;
switch (G__51746) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__51753 = arguments.length;
switch (G__51753) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_53608 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53608) : fn1.call(null,val_53608));
} else {
cljs.core.async.impl.dispatch.run(((function (val_53608,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53608) : fn1.call(null,val_53608));
});})(val_53608,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__51762 = arguments.length;
switch (G__51762) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5802__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5802__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___53610 = n;
var x_53611 = (0);
while(true){
if((x_53611 < n__4607__auto___53610)){
(a[x_53611] = x_53611);

var G__53614 = (x_53611 + (1));
x_53611 = G__53614;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51770 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51770 = (function (flag,meta51771){
this.flag = flag;
this.meta51771 = meta51771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_51772,meta51771__$1){
var self__ = this;
var _51772__$1 = this;
return (new cljs.core.async.t_cljs$core$async51770(self__.flag,meta51771__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async51770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_51772){
var self__ = this;
var _51772__$1 = this;
return self__.meta51771;
});})(flag))
;

cljs.core.async.t_cljs$core$async51770.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51770.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async51770.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async51770.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async51770.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta51771","meta51771",-1686138306,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async51770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51770";

cljs.core.async.t_cljs$core$async51770.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51770");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51770.
 */
cljs.core.async.__GT_t_cljs$core$async51770 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async51770(flag__$1,meta51771){
return (new cljs.core.async.t_cljs$core$async51770(flag__$1,meta51771));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async51770(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51778 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51778 = (function (flag,cb,meta51779){
this.flag = flag;
this.cb = cb;
this.meta51779 = meta51779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51780,meta51779__$1){
var self__ = this;
var _51780__$1 = this;
return (new cljs.core.async.t_cljs$core$async51778(self__.flag,self__.cb,meta51779__$1));
});

cljs.core.async.t_cljs$core$async51778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51780){
var self__ = this;
var _51780__$1 = this;
return self__.meta51779;
});

cljs.core.async.t_cljs$core$async51778.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51778.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async51778.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async51778.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async51778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta51779","meta51779",-1483540073,null)], null);
});

cljs.core.async.t_cljs$core$async51778.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51778";

cljs.core.async.t_cljs$core$async51778.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51778");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51778.
 */
cljs.core.async.__GT_t_cljs$core$async51778 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async51778(flag__$1,cb__$1,meta51779){
return (new cljs.core.async.t_cljs$core$async51778(flag__$1,cb__$1,meta51779));
});

}

return (new cljs.core.async.t_cljs$core$async51778(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__51783_SHARP_){
var G__51786 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51783_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__51786) : fret.call(null,G__51786));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__51784_SHARP_){
var G__51787 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51784_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__51787) : fret.call(null,G__51787));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__53630 = (i + (1));
i = G__53630;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53633 = arguments.length;
var i__4731__auto___53634 = (0);
while(true){
if((i__4731__auto___53634 < len__4730__auto___53633)){
args__4736__auto__.push((arguments[i__4731__auto___53634]));

var G__53635 = (i__4731__auto___53634 + (1));
i__4731__auto___53634 = G__53635;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__51793){
var map__51794 = p__51793;
var map__51794__$1 = (((((!((map__51794 == null))))?(((((map__51794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51794):map__51794);
var opts = map__51794__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq51788){
var G__51789 = cljs.core.first(seq51788);
var seq51788__$1 = cljs.core.next(seq51788);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51789,seq51788__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__51800 = arguments.length;
switch (G__51800) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__51656__auto___53644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51656__auto___53644){
return (function (){
var f__51657__auto__ = (function (){var switch__50648__auto__ = ((function (c__51656__auto___53644){
return (function (state_51844){
var state_val_51845 = (state_51844[(1)]);
if((state_val_51845 === (7))){
var inst_51827 = (state_51844[(2)]);
var state_51844__$1 = state_51844;
var statearr_51846_53647 = state_51844__$1;
(statearr_51846_53647[(2)] = inst_51827);

(statearr_51846_53647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51845 === (1))){
var state_51844__$1 = state_51844;
var statearr_51855_53648 = state_51844__$1;
(statearr_51855_53648[(2)] = null);

(statearr_51855_53648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51845 === (4))){
var inst_51806 = (state_51844[(7)]);
var inst_51806__$1 = (state_51844[(2)]);
var inst_51810 = (inst_51806__$1 == null);
var state_51844__$1 = (function (){var statearr_51857 = state_51844;
(statearr_51857[(7)] = inst_51806__$1);

return statearr_51857;
})();
if(cljs.core.truth_(inst_51810)){
var statearr_51858_53653 = state_51844__$1;
(statearr_51858_53653[(1)] = (5));

} else {
var statearr_51859_53654 = state_51844__$1;
(statearr_51859_53654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51845 === (13))){
var state_51844__$1 = state_51844;
var statearr_51860_53655 = state_51844__$1;
(statearr_51860_53655[(2)] = null);

(statearr_51860_53655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51845 === (6))){
var inst_51806 = (state_51844[(7)]);
var state_51844__$1 = state_51844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51844__$1,(11),to,inst_51806);
} else {
if((state_val_51845 === (3))){
var inst_51840 = (state_51844[(2)]);
var state_51844__$1 = state_51844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51844__$1,inst_51840);
} else {
if((state_val_51845 === (12))){
var state_51844__$1 = state_51844;
var statearr_51861_53657 = state_51844__$1;
(statearr_51861_53657[(2)] = null);

(statearr_51861_53657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51845 === (2))){
var state_51844__$1 = state_51844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51844__$1,(4),from);
} else {
if((state_val_51845 === (11))){
var inst_51820 = (state_51844[(2)]);
var state_51844__$1 = state_51844;
if(cljs.core.truth_(inst_51820)){
var statearr_51863_53658 = state_51844__$1;
(statearr_51863_53658[(1)] = (12));

} else {
var statearr_51864_53659 = state_51844__$1;
(statearr_51864_53659[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51845 === (9))){
var state_51844__$1 = state_51844;
var statearr_51868_53660 = state_51844__$1;
(statearr_51868_53660[(2)] = null);

(statearr_51868_53660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51845 === (5))){
var state_51844__$1 = state_51844;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51869_53661 = state_51844__$1;
(statearr_51869_53661[(1)] = (8));

} else {
var statearr_51870_53662 = state_51844__$1;
(statearr_51870_53662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51845 === (14))){
var inst_51825 = (state_51844[(2)]);
var state_51844__$1 = state_51844;
var statearr_51871_53663 = state_51844__$1;
(statearr_51871_53663[(2)] = inst_51825);

(statearr_51871_53663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51845 === (10))){
var inst_51817 = (state_51844[(2)]);
var state_51844__$1 = state_51844;
var statearr_51872_53664 = state_51844__$1;
(statearr_51872_53664[(2)] = inst_51817);

(statearr_51872_53664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51845 === (8))){
var inst_51813 = cljs.core.async.close_BANG_(to);
var state_51844__$1 = state_51844;
var statearr_51873_53665 = state_51844__$1;
(statearr_51873_53665[(2)] = inst_51813);

(statearr_51873_53665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51656__auto___53644))
;
return ((function (switch__50648__auto__,c__51656__auto___53644){
return (function() {
var cljs$core$async$state_machine__50649__auto__ = null;
var cljs$core$async$state_machine__50649__auto____0 = (function (){
var statearr_51874 = [null,null,null,null,null,null,null,null];
(statearr_51874[(0)] = cljs$core$async$state_machine__50649__auto__);

(statearr_51874[(1)] = (1));

return statearr_51874;
});
var cljs$core$async$state_machine__50649__auto____1 = (function (state_51844){
while(true){
var ret_value__50650__auto__ = (function (){try{while(true){
var result__50651__auto__ = switch__50648__auto__(state_51844);
if(cljs.core.keyword_identical_QMARK_(result__50651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50651__auto__;
}
break;
}
}catch (e51875){if((e51875 instanceof Object)){
var ex__50652__auto__ = e51875;
var statearr_51876_53668 = state_51844;
(statearr_51876_53668[(5)] = ex__50652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51875;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53669 = state_51844;
state_51844 = G__53669;
continue;
} else {
return ret_value__50650__auto__;
}
break;
}
});
cljs$core$async$state_machine__50649__auto__ = function(state_51844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50649__auto____1.call(this,state_51844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50649__auto____0;
cljs$core$async$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50649__auto____1;
return cljs$core$async$state_machine__50649__auto__;
})()
;})(switch__50648__auto__,c__51656__auto___53644))
})();
var state__51658__auto__ = (function (){var statearr_51877 = (f__51657__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51657__auto__.cljs$core$IFn$_invoke$arity$0() : f__51657__auto__.call(null));
(statearr_51877[(6)] = c__51656__auto___53644);

return statearr_51877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51658__auto__);
});})(c__51656__auto___53644))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__51883){
var vec__51884 = p__51883;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51884,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51884,(1),null);
var job = vec__51884;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__51656__auto___53673 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51656__auto___53673,res,vec__51884,v,p,job,jobs,results){
return (function (){
var f__51657__auto__ = (function (){var switch__50648__auto__ = ((function (c__51656__auto___53673,res,vec__51884,v,p,job,jobs,results){
return (function (state_51892){
var state_val_51893 = (state_51892[(1)]);
if((state_val_51893 === (1))){
var state_51892__$1 = state_51892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51892__$1,(2),res,v);
} else {
if((state_val_51893 === (2))){
var inst_51889 = (state_51892[(2)]);
var inst_51890 = cljs.core.async.close_BANG_(res);
var state_51892__$1 = (function (){var statearr_51894 = state_51892;
(statearr_51894[(7)] = inst_51889);

return statearr_51894;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51892__$1,inst_51890);
} else {
return null;
}
}
});})(c__51656__auto___53673,res,vec__51884,v,p,job,jobs,results))
;
return ((function (switch__50648__auto__,c__51656__auto___53673,res,vec__51884,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____0 = (function (){
var statearr_51896 = [null,null,null,null,null,null,null,null];
(statearr_51896[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__);

(statearr_51896[(1)] = (1));

return statearr_51896;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____1 = (function (state_51892){
while(true){
var ret_value__50650__auto__ = (function (){try{while(true){
var result__50651__auto__ = switch__50648__auto__(state_51892);
if(cljs.core.keyword_identical_QMARK_(result__50651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50651__auto__;
}
break;
}
}catch (e51898){if((e51898 instanceof Object)){
var ex__50652__auto__ = e51898;
var statearr_51899_53679 = state_51892;
(statearr_51899_53679[(5)] = ex__50652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51898;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53680 = state_51892;
state_51892 = G__53680;
continue;
} else {
return ret_value__50650__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__ = function(state_51892){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____1.call(this,state_51892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__;
})()
;})(switch__50648__auto__,c__51656__auto___53673,res,vec__51884,v,p,job,jobs,results))
})();
var state__51658__auto__ = (function (){var statearr_51900 = (f__51657__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51657__auto__.cljs$core$IFn$_invoke$arity$0() : f__51657__auto__.call(null));
(statearr_51900[(6)] = c__51656__auto___53673);

return statearr_51900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51658__auto__);
});})(c__51656__auto___53673,res,vec__51884,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__51901){
var vec__51902 = p__51901;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51902,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51902,(1),null);
var job = vec__51902;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___53685 = n;
var __53686 = (0);
while(true){
if((__53686 < n__4607__auto___53685)){
var G__51906_53687 = type;
var G__51906_53688__$1 = (((G__51906_53687 instanceof cljs.core.Keyword))?G__51906_53687.fqn:null);
switch (G__51906_53688__$1) {
case "compute":
var c__51656__auto___53690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53686,c__51656__auto___53690,G__51906_53687,G__51906_53688__$1,n__4607__auto___53685,jobs,results,process,async){
return (function (){
var f__51657__auto__ = (function (){var switch__50648__auto__ = ((function (__53686,c__51656__auto___53690,G__51906_53687,G__51906_53688__$1,n__4607__auto___53685,jobs,results,process,async){
return (function (state_51921){
var state_val_51922 = (state_51921[(1)]);
if((state_val_51922 === (1))){
var state_51921__$1 = state_51921;
var statearr_51923_53694 = state_51921__$1;
(statearr_51923_53694[(2)] = null);

(statearr_51923_53694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51922 === (2))){
var state_51921__$1 = state_51921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51921__$1,(4),jobs);
} else {
if((state_val_51922 === (3))){
var inst_51919 = (state_51921[(2)]);
var state_51921__$1 = state_51921;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51921__$1,inst_51919);
} else {
if((state_val_51922 === (4))){
var inst_51911 = (state_51921[(2)]);
var inst_51912 = process(inst_51911);
var state_51921__$1 = state_51921;
if(cljs.core.truth_(inst_51912)){
var statearr_51926_53696 = state_51921__$1;
(statearr_51926_53696[(1)] = (5));

} else {
var statearr_51927_53697 = state_51921__$1;
(statearr_51927_53697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51922 === (5))){
var state_51921__$1 = state_51921;
var statearr_51928_53698 = state_51921__$1;
(statearr_51928_53698[(2)] = null);

(statearr_51928_53698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51922 === (6))){
var state_51921__$1 = state_51921;
var statearr_51929_53699 = state_51921__$1;
(statearr_51929_53699[(2)] = null);

(statearr_51929_53699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51922 === (7))){
var inst_51917 = (state_51921[(2)]);
var state_51921__$1 = state_51921;
var statearr_51930_53704 = state_51921__$1;
(statearr_51930_53704[(2)] = inst_51917);

(statearr_51930_53704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__53686,c__51656__auto___53690,G__51906_53687,G__51906_53688__$1,n__4607__auto___53685,jobs,results,process,async))
;
return ((function (__53686,switch__50648__auto__,c__51656__auto___53690,G__51906_53687,G__51906_53688__$1,n__4607__auto___53685,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____0 = (function (){
var statearr_51931 = [null,null,null,null,null,null,null];
(statearr_51931[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__);

(statearr_51931[(1)] = (1));

return statearr_51931;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____1 = (function (state_51921){
while(true){
var ret_value__50650__auto__ = (function (){try{while(true){
var result__50651__auto__ = switch__50648__auto__(state_51921);
if(cljs.core.keyword_identical_QMARK_(result__50651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50651__auto__;
}
break;
}
}catch (e51933){if((e51933 instanceof Object)){
var ex__50652__auto__ = e51933;
var statearr_51935_53705 = state_51921;
(statearr_51935_53705[(5)] = ex__50652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51933;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53706 = state_51921;
state_51921 = G__53706;
continue;
} else {
return ret_value__50650__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__ = function(state_51921){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____1.call(this,state_51921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__;
})()
;})(__53686,switch__50648__auto__,c__51656__auto___53690,G__51906_53687,G__51906_53688__$1,n__4607__auto___53685,jobs,results,process,async))
})();
var state__51658__auto__ = (function (){var statearr_51936 = (f__51657__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51657__auto__.cljs$core$IFn$_invoke$arity$0() : f__51657__auto__.call(null));
(statearr_51936[(6)] = c__51656__auto___53690);

return statearr_51936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51658__auto__);
});})(__53686,c__51656__auto___53690,G__51906_53687,G__51906_53688__$1,n__4607__auto___53685,jobs,results,process,async))
);


break;
case "async":
var c__51656__auto___53708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53686,c__51656__auto___53708,G__51906_53687,G__51906_53688__$1,n__4607__auto___53685,jobs,results,process,async){
return (function (){
var f__51657__auto__ = (function (){var switch__50648__auto__ = ((function (__53686,c__51656__auto___53708,G__51906_53687,G__51906_53688__$1,n__4607__auto___53685,jobs,results,process,async){
return (function (state_51950){
var state_val_51951 = (state_51950[(1)]);
if((state_val_51951 === (1))){
var state_51950__$1 = state_51950;
var statearr_51953_53712 = state_51950__$1;
(statearr_51953_53712[(2)] = null);

(statearr_51953_53712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51951 === (2))){
var state_51950__$1 = state_51950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51950__$1,(4),jobs);
} else {
if((state_val_51951 === (3))){
var inst_51948 = (state_51950[(2)]);
var state_51950__$1 = state_51950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51950__$1,inst_51948);
} else {
if((state_val_51951 === (4))){
var inst_51940 = (state_51950[(2)]);
var inst_51941 = async(inst_51940);
var state_51950__$1 = state_51950;
if(cljs.core.truth_(inst_51941)){
var statearr_51954_53713 = state_51950__$1;
(statearr_51954_53713[(1)] = (5));

} else {
var statearr_51955_53714 = state_51950__$1;
(statearr_51955_53714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51951 === (5))){
var state_51950__$1 = state_51950;
var statearr_51956_53715 = state_51950__$1;
(statearr_51956_53715[(2)] = null);

(statearr_51956_53715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51951 === (6))){
var state_51950__$1 = state_51950;
var statearr_51957_53718 = state_51950__$1;
(statearr_51957_53718[(2)] = null);

(statearr_51957_53718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51951 === (7))){
var inst_51946 = (state_51950[(2)]);
var state_51950__$1 = state_51950;
var statearr_51958_53719 = state_51950__$1;
(statearr_51958_53719[(2)] = inst_51946);

(statearr_51958_53719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__53686,c__51656__auto___53708,G__51906_53687,G__51906_53688__$1,n__4607__auto___53685,jobs,results,process,async))
;
return ((function (__53686,switch__50648__auto__,c__51656__auto___53708,G__51906_53687,G__51906_53688__$1,n__4607__auto___53685,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____0 = (function (){
var statearr_51963 = [null,null,null,null,null,null,null];
(statearr_51963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__);

(statearr_51963[(1)] = (1));

return statearr_51963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____1 = (function (state_51950){
while(true){
var ret_value__50650__auto__ = (function (){try{while(true){
var result__50651__auto__ = switch__50648__auto__(state_51950);
if(cljs.core.keyword_identical_QMARK_(result__50651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50651__auto__;
}
break;
}
}catch (e51964){if((e51964 instanceof Object)){
var ex__50652__auto__ = e51964;
var statearr_51965_53733 = state_51950;
(statearr_51965_53733[(5)] = ex__50652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51964;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53734 = state_51950;
state_51950 = G__53734;
continue;
} else {
return ret_value__50650__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__ = function(state_51950){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____1.call(this,state_51950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__;
})()
;})(__53686,switch__50648__auto__,c__51656__auto___53708,G__51906_53687,G__51906_53688__$1,n__4607__auto___53685,jobs,results,process,async))
})();
var state__51658__auto__ = (function (){var statearr_51966 = (f__51657__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51657__auto__.cljs$core$IFn$_invoke$arity$0() : f__51657__auto__.call(null));
(statearr_51966[(6)] = c__51656__auto___53708);

return statearr_51966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51658__auto__);
});})(__53686,c__51656__auto___53708,G__51906_53687,G__51906_53688__$1,n__4607__auto___53685,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51906_53688__$1)].join('')));

}

var G__53735 = (__53686 + (1));
__53686 = G__53735;
continue;
} else {
}
break;
}

var c__51656__auto___53736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51656__auto___53736,jobs,results,process,async){
return (function (){
var f__51657__auto__ = (function (){var switch__50648__auto__ = ((function (c__51656__auto___53736,jobs,results,process,async){
return (function (state_51988){
var state_val_51989 = (state_51988[(1)]);
if((state_val_51989 === (7))){
var inst_51984 = (state_51988[(2)]);
var state_51988__$1 = state_51988;
var statearr_51990_53737 = state_51988__$1;
(statearr_51990_53737[(2)] = inst_51984);

(statearr_51990_53737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51989 === (1))){
var state_51988__$1 = state_51988;
var statearr_51991_53738 = state_51988__$1;
(statearr_51991_53738[(2)] = null);

(statearr_51991_53738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51989 === (4))){
var inst_51969 = (state_51988[(7)]);
var inst_51969__$1 = (state_51988[(2)]);
var inst_51970 = (inst_51969__$1 == null);
var state_51988__$1 = (function (){var statearr_51992 = state_51988;
(statearr_51992[(7)] = inst_51969__$1);

return statearr_51992;
})();
if(cljs.core.truth_(inst_51970)){
var statearr_51993_53739 = state_51988__$1;
(statearr_51993_53739[(1)] = (5));

} else {
var statearr_51994_53740 = state_51988__$1;
(statearr_51994_53740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51989 === (6))){
var inst_51969 = (state_51988[(7)]);
var inst_51974 = (state_51988[(8)]);
var inst_51974__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_51975 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51976 = [inst_51969,inst_51974__$1];
var inst_51977 = (new cljs.core.PersistentVector(null,2,(5),inst_51975,inst_51976,null));
var state_51988__$1 = (function (){var statearr_51995 = state_51988;
(statearr_51995[(8)] = inst_51974__$1);

return statearr_51995;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51988__$1,(8),jobs,inst_51977);
} else {
if((state_val_51989 === (3))){
var inst_51986 = (state_51988[(2)]);
var state_51988__$1 = state_51988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51988__$1,inst_51986);
} else {
if((state_val_51989 === (2))){
var state_51988__$1 = state_51988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51988__$1,(4),from);
} else {
if((state_val_51989 === (9))){
var inst_51981 = (state_51988[(2)]);
var state_51988__$1 = (function (){var statearr_51996 = state_51988;
(statearr_51996[(9)] = inst_51981);

return statearr_51996;
})();
var statearr_51997_53743 = state_51988__$1;
(statearr_51997_53743[(2)] = null);

(statearr_51997_53743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51989 === (5))){
var inst_51972 = cljs.core.async.close_BANG_(jobs);
var state_51988__$1 = state_51988;
var statearr_51998_53744 = state_51988__$1;
(statearr_51998_53744[(2)] = inst_51972);

(statearr_51998_53744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51989 === (8))){
var inst_51974 = (state_51988[(8)]);
var inst_51979 = (state_51988[(2)]);
var state_51988__$1 = (function (){var statearr_51999 = state_51988;
(statearr_51999[(10)] = inst_51979);

return statearr_51999;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51988__$1,(9),results,inst_51974);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__51656__auto___53736,jobs,results,process,async))
;
return ((function (switch__50648__auto__,c__51656__auto___53736,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____0 = (function (){
var statearr_52000 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52000[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__);

(statearr_52000[(1)] = (1));

return statearr_52000;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____1 = (function (state_51988){
while(true){
var ret_value__50650__auto__ = (function (){try{while(true){
var result__50651__auto__ = switch__50648__auto__(state_51988);
if(cljs.core.keyword_identical_QMARK_(result__50651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50651__auto__;
}
break;
}
}catch (e52001){if((e52001 instanceof Object)){
var ex__50652__auto__ = e52001;
var statearr_52002_53751 = state_51988;
(statearr_52002_53751[(5)] = ex__50652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52001;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53752 = state_51988;
state_51988 = G__53752;
continue;
} else {
return ret_value__50650__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__ = function(state_51988){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____1.call(this,state_51988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__;
})()
;})(switch__50648__auto__,c__51656__auto___53736,jobs,results,process,async))
})();
var state__51658__auto__ = (function (){var statearr_52003 = (f__51657__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51657__auto__.cljs$core$IFn$_invoke$arity$0() : f__51657__auto__.call(null));
(statearr_52003[(6)] = c__51656__auto___53736);

return statearr_52003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51658__auto__);
});})(c__51656__auto___53736,jobs,results,process,async))
);


var c__51656__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51656__auto__,jobs,results,process,async){
return (function (){
var f__51657__auto__ = (function (){var switch__50648__auto__ = ((function (c__51656__auto__,jobs,results,process,async){
return (function (state_52041){
var state_val_52042 = (state_52041[(1)]);
if((state_val_52042 === (7))){
var inst_52037 = (state_52041[(2)]);
var state_52041__$1 = state_52041;
var statearr_52043_53757 = state_52041__$1;
(statearr_52043_53757[(2)] = inst_52037);

(statearr_52043_53757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (20))){
var state_52041__$1 = state_52041;
var statearr_52044_53759 = state_52041__$1;
(statearr_52044_53759[(2)] = null);

(statearr_52044_53759[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (1))){
var state_52041__$1 = state_52041;
var statearr_52045_53761 = state_52041__$1;
(statearr_52045_53761[(2)] = null);

(statearr_52045_53761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (4))){
var inst_52006 = (state_52041[(7)]);
var inst_52006__$1 = (state_52041[(2)]);
var inst_52007 = (inst_52006__$1 == null);
var state_52041__$1 = (function (){var statearr_52046 = state_52041;
(statearr_52046[(7)] = inst_52006__$1);

return statearr_52046;
})();
if(cljs.core.truth_(inst_52007)){
var statearr_52047_53764 = state_52041__$1;
(statearr_52047_53764[(1)] = (5));

} else {
var statearr_52048_53766 = state_52041__$1;
(statearr_52048_53766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (15))){
var inst_52019 = (state_52041[(8)]);
var state_52041__$1 = state_52041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52041__$1,(18),to,inst_52019);
} else {
if((state_val_52042 === (21))){
var inst_52032 = (state_52041[(2)]);
var state_52041__$1 = state_52041;
var statearr_52049_53768 = state_52041__$1;
(statearr_52049_53768[(2)] = inst_52032);

(statearr_52049_53768[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (13))){
var inst_52034 = (state_52041[(2)]);
var state_52041__$1 = (function (){var statearr_52050 = state_52041;
(statearr_52050[(9)] = inst_52034);

return statearr_52050;
})();
var statearr_52051_53770 = state_52041__$1;
(statearr_52051_53770[(2)] = null);

(statearr_52051_53770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (6))){
var inst_52006 = (state_52041[(7)]);
var state_52041__$1 = state_52041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52041__$1,(11),inst_52006);
} else {
if((state_val_52042 === (17))){
var inst_52027 = (state_52041[(2)]);
var state_52041__$1 = state_52041;
if(cljs.core.truth_(inst_52027)){
var statearr_52052_53771 = state_52041__$1;
(statearr_52052_53771[(1)] = (19));

} else {
var statearr_52053_53772 = state_52041__$1;
(statearr_52053_53772[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (3))){
var inst_52039 = (state_52041[(2)]);
var state_52041__$1 = state_52041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52041__$1,inst_52039);
} else {
if((state_val_52042 === (12))){
var inst_52016 = (state_52041[(10)]);
var state_52041__$1 = state_52041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52041__$1,(14),inst_52016);
} else {
if((state_val_52042 === (2))){
var state_52041__$1 = state_52041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52041__$1,(4),results);
} else {
if((state_val_52042 === (19))){
var state_52041__$1 = state_52041;
var statearr_52054_53774 = state_52041__$1;
(statearr_52054_53774[(2)] = null);

(statearr_52054_53774[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (11))){
var inst_52016 = (state_52041[(2)]);
var state_52041__$1 = (function (){var statearr_52055 = state_52041;
(statearr_52055[(10)] = inst_52016);

return statearr_52055;
})();
var statearr_52056_53778 = state_52041__$1;
(statearr_52056_53778[(2)] = null);

(statearr_52056_53778[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (9))){
var state_52041__$1 = state_52041;
var statearr_52057_53784 = state_52041__$1;
(statearr_52057_53784[(2)] = null);

(statearr_52057_53784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (5))){
var state_52041__$1 = state_52041;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52058_53785 = state_52041__$1;
(statearr_52058_53785[(1)] = (8));

} else {
var statearr_52059_53786 = state_52041__$1;
(statearr_52059_53786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (14))){
var inst_52021 = (state_52041[(11)]);
var inst_52019 = (state_52041[(8)]);
var inst_52019__$1 = (state_52041[(2)]);
var inst_52020 = (inst_52019__$1 == null);
var inst_52021__$1 = cljs.core.not(inst_52020);
var state_52041__$1 = (function (){var statearr_52060 = state_52041;
(statearr_52060[(11)] = inst_52021__$1);

(statearr_52060[(8)] = inst_52019__$1);

return statearr_52060;
})();
if(inst_52021__$1){
var statearr_52061_53789 = state_52041__$1;
(statearr_52061_53789[(1)] = (15));

} else {
var statearr_52062_53790 = state_52041__$1;
(statearr_52062_53790[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (16))){
var inst_52021 = (state_52041[(11)]);
var state_52041__$1 = state_52041;
var statearr_52063_53793 = state_52041__$1;
(statearr_52063_53793[(2)] = inst_52021);

(statearr_52063_53793[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (10))){
var inst_52013 = (state_52041[(2)]);
var state_52041__$1 = state_52041;
var statearr_52064_53794 = state_52041__$1;
(statearr_52064_53794[(2)] = inst_52013);

(statearr_52064_53794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (18))){
var inst_52024 = (state_52041[(2)]);
var state_52041__$1 = state_52041;
var statearr_52065_53799 = state_52041__$1;
(statearr_52065_53799[(2)] = inst_52024);

(statearr_52065_53799[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52042 === (8))){
var inst_52010 = cljs.core.async.close_BANG_(to);
var state_52041__$1 = state_52041;
var statearr_52066_53800 = state_52041__$1;
(statearr_52066_53800[(2)] = inst_52010);

(statearr_52066_53800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51656__auto__,jobs,results,process,async))
;
return ((function (switch__50648__auto__,c__51656__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____0 = (function (){
var statearr_52067 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52067[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__);

(statearr_52067[(1)] = (1));

return statearr_52067;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____1 = (function (state_52041){
while(true){
var ret_value__50650__auto__ = (function (){try{while(true){
var result__50651__auto__ = switch__50648__auto__(state_52041);
if(cljs.core.keyword_identical_QMARK_(result__50651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50651__auto__;
}
break;
}
}catch (e52068){if((e52068 instanceof Object)){
var ex__50652__auto__ = e52068;
var statearr_52069_53801 = state_52041;
(statearr_52069_53801[(5)] = ex__50652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52068;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53803 = state_52041;
state_52041 = G__53803;
continue;
} else {
return ret_value__50650__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__ = function(state_52041){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____1.call(this,state_52041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50649__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50649__auto__;
})()
;})(switch__50648__auto__,c__51656__auto__,jobs,results,process,async))
})();
var state__51658__auto__ = (function (){var statearr_52070 = (f__51657__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51657__auto__.cljs$core$IFn$_invoke$arity$0() : f__51657__auto__.call(null));
(statearr_52070[(6)] = c__51656__auto__);

return statearr_52070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51658__auto__);
});})(c__51656__auto__,jobs,results,process,async))
);

return c__51656__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__52072 = arguments.length;
switch (G__52072) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__52074 = arguments.length;
switch (G__52074) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__52076 = arguments.length;
switch (G__52076) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__51656__auto___53820 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51656__auto___53820,tc,fc){
return (function (){
var f__51657__auto__ = (function (){var switch__50648__auto__ = ((function (c__51656__auto___53820,tc,fc){
return (function (state_52102){
var state_val_52103 = (state_52102[(1)]);
if((state_val_52103 === (7))){
var inst_52098 = (state_52102[(2)]);
var state_52102__$1 = state_52102;
var statearr_52104_53821 = state_52102__$1;
(statearr_52104_53821[(2)] = inst_52098);

(statearr_52104_53821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (1))){
var state_52102__$1 = state_52102;
var statearr_52105_53822 = state_52102__$1;
(statearr_52105_53822[(2)] = null);

(statearr_52105_53822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (4))){
var inst_52079 = (state_52102[(7)]);
var inst_52079__$1 = (state_52102[(2)]);
var inst_52080 = (inst_52079__$1 == null);
var state_52102__$1 = (function (){var statearr_52106 = state_52102;
(statearr_52106[(7)] = inst_52079__$1);

return statearr_52106;
})();
if(cljs.core.truth_(inst_52080)){
var statearr_52107_53823 = state_52102__$1;
(statearr_52107_53823[(1)] = (5));

} else {
var statearr_52108_53824 = state_52102__$1;
(statearr_52108_53824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (13))){
var state_52102__$1 = state_52102;
var statearr_52109_53826 = state_52102__$1;
(statearr_52109_53826[(2)] = null);

(statearr_52109_53826[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (6))){
var inst_52079 = (state_52102[(7)]);
var inst_52085 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_52079) : p.call(null,inst_52079));
var state_52102__$1 = state_52102;
if(cljs.core.truth_(inst_52085)){
var statearr_52110_53827 = state_52102__$1;
(statearr_52110_53827[(1)] = (9));

} else {
var statearr_52111_53828 = state_52102__$1;
(statearr_52111_53828[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (3))){
var inst_52100 = (state_52102[(2)]);
var state_52102__$1 = state_52102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52102__$1,inst_52100);
} else {
if((state_val_52103 === (12))){
var state_52102__$1 = state_52102;
var statearr_52112_53829 = state_52102__$1;
(statearr_52112_53829[(2)] = null);

(statearr_52112_53829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (2))){
var state_52102__$1 = state_52102;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52102__$1,(4),ch);
} else {
if((state_val_52103 === (11))){
var inst_52079 = (state_52102[(7)]);
var inst_52089 = (state_52102[(2)]);
var state_52102__$1 = state_52102;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52102__$1,(8),inst_52089,inst_52079);
} else {
if((state_val_52103 === (9))){
var state_52102__$1 = state_52102;
var statearr_52113_53831 = state_52102__$1;
(statearr_52113_53831[(2)] = tc);

(statearr_52113_53831[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (5))){
var inst_52082 = cljs.core.async.close_BANG_(tc);
var inst_52083 = cljs.core.async.close_BANG_(fc);
var state_52102__$1 = (function (){var statearr_52114 = state_52102;
(statearr_52114[(8)] = inst_52082);

return statearr_52114;
})();
var statearr_52115_53832 = state_52102__$1;
(statearr_52115_53832[(2)] = inst_52083);

(statearr_52115_53832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (14))){
var inst_52096 = (state_52102[(2)]);
var state_52102__$1 = state_52102;
var statearr_52116_53833 = state_52102__$1;
(statearr_52116_53833[(2)] = inst_52096);

(statearr_52116_53833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (10))){
var state_52102__$1 = state_52102;
var statearr_52117_53834 = state_52102__$1;
(statearr_52117_53834[(2)] = fc);

(statearr_52117_53834[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (8))){
var inst_52091 = (state_52102[(2)]);
var state_52102__$1 = state_52102;
if(cljs.core.truth_(inst_52091)){
var statearr_52118_53836 = state_52102__$1;
(statearr_52118_53836[(1)] = (12));

} else {
var statearr_52119_53837 = state_52102__$1;
(statearr_52119_53837[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51656__auto___53820,tc,fc))
;
return ((function (switch__50648__auto__,c__51656__auto___53820,tc,fc){
return (function() {
var cljs$core$async$state_machine__50649__auto__ = null;
var cljs$core$async$state_machine__50649__auto____0 = (function (){
var statearr_52120 = [null,null,null,null,null,null,null,null,null];
(statearr_52120[(0)] = cljs$core$async$state_machine__50649__auto__);

(statearr_52120[(1)] = (1));

return statearr_52120;
});
var cljs$core$async$state_machine__50649__auto____1 = (function (state_52102){
while(true){
var ret_value__50650__auto__ = (function (){try{while(true){
var result__50651__auto__ = switch__50648__auto__(state_52102);
if(cljs.core.keyword_identical_QMARK_(result__50651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50651__auto__;
}
break;
}
}catch (e52121){if((e52121 instanceof Object)){
var ex__50652__auto__ = e52121;
var statearr_52122_53838 = state_52102;
(statearr_52122_53838[(5)] = ex__50652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52121;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53839 = state_52102;
state_52102 = G__53839;
continue;
} else {
return ret_value__50650__auto__;
}
break;
}
});
cljs$core$async$state_machine__50649__auto__ = function(state_52102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50649__auto____1.call(this,state_52102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50649__auto____0;
cljs$core$async$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50649__auto____1;
return cljs$core$async$state_machine__50649__auto__;
})()
;})(switch__50648__auto__,c__51656__auto___53820,tc,fc))
})();
var state__51658__auto__ = (function (){var statearr_52123 = (f__51657__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51657__auto__.cljs$core$IFn$_invoke$arity$0() : f__51657__auto__.call(null));
(statearr_52123[(6)] = c__51656__auto___53820);

return statearr_52123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51658__auto__);
});})(c__51656__auto___53820,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__51656__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51656__auto__){
return (function (){
var f__51657__auto__ = (function (){var switch__50648__auto__ = ((function (c__51656__auto__){
return (function (state_52144){
var state_val_52145 = (state_52144[(1)]);
if((state_val_52145 === (7))){
var inst_52140 = (state_52144[(2)]);
var state_52144__$1 = state_52144;
var statearr_52146_53844 = state_52144__$1;
(statearr_52146_53844[(2)] = inst_52140);

(statearr_52146_53844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52145 === (1))){
var inst_52124 = init;
var state_52144__$1 = (function (){var statearr_52147 = state_52144;
(statearr_52147[(7)] = inst_52124);

return statearr_52147;
})();
var statearr_52148_53847 = state_52144__$1;
(statearr_52148_53847[(2)] = null);

(statearr_52148_53847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52145 === (4))){
var inst_52127 = (state_52144[(8)]);
var inst_52127__$1 = (state_52144[(2)]);
var inst_52128 = (inst_52127__$1 == null);
var state_52144__$1 = (function (){var statearr_52149 = state_52144;
(statearr_52149[(8)] = inst_52127__$1);

return statearr_52149;
})();
if(cljs.core.truth_(inst_52128)){
var statearr_52150_53848 = state_52144__$1;
(statearr_52150_53848[(1)] = (5));

} else {
var statearr_52151_53849 = state_52144__$1;
(statearr_52151_53849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52145 === (6))){
var inst_52131 = (state_52144[(9)]);
var inst_52124 = (state_52144[(7)]);
var inst_52127 = (state_52144[(8)]);
var inst_52131__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_52124,inst_52127) : f.call(null,inst_52124,inst_52127));
var inst_52132 = cljs.core.reduced_QMARK_(inst_52131__$1);
var state_52144__$1 = (function (){var statearr_52152 = state_52144;
(statearr_52152[(9)] = inst_52131__$1);

return statearr_52152;
})();
if(inst_52132){
var statearr_52153_53850 = state_52144__$1;
(statearr_52153_53850[(1)] = (8));

} else {
var statearr_52154_53852 = state_52144__$1;
(statearr_52154_53852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52145 === (3))){
var inst_52142 = (state_52144[(2)]);
var state_52144__$1 = state_52144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52144__$1,inst_52142);
} else {
if((state_val_52145 === (2))){
var state_52144__$1 = state_52144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52144__$1,(4),ch);
} else {
if((state_val_52145 === (9))){
var inst_52131 = (state_52144[(9)]);
var inst_52124 = inst_52131;
var state_52144__$1 = (function (){var statearr_52155 = state_52144;
(statearr_52155[(7)] = inst_52124);

return statearr_52155;
})();
var statearr_52156_53854 = state_52144__$1;
(statearr_52156_53854[(2)] = null);

(statearr_52156_53854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52145 === (5))){
var inst_52124 = (state_52144[(7)]);
var state_52144__$1 = state_52144;
var statearr_52157_53855 = state_52144__$1;
(statearr_52157_53855[(2)] = inst_52124);

(statearr_52157_53855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52145 === (10))){
var inst_52138 = (state_52144[(2)]);
var state_52144__$1 = state_52144;
var statearr_52158_53856 = state_52144__$1;
(statearr_52158_53856[(2)] = inst_52138);

(statearr_52158_53856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52145 === (8))){
var inst_52131 = (state_52144[(9)]);
var inst_52134 = cljs.core.deref(inst_52131);
var state_52144__$1 = state_52144;
var statearr_52159_53857 = state_52144__$1;
(statearr_52159_53857[(2)] = inst_52134);

(statearr_52159_53857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__51656__auto__))
;
return ((function (switch__50648__auto__,c__51656__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__50649__auto__ = null;
var cljs$core$async$reduce_$_state_machine__50649__auto____0 = (function (){
var statearr_52160 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52160[(0)] = cljs$core$async$reduce_$_state_machine__50649__auto__);

(statearr_52160[(1)] = (1));

return statearr_52160;
});
var cljs$core$async$reduce_$_state_machine__50649__auto____1 = (function (state_52144){
while(true){
var ret_value__50650__auto__ = (function (){try{while(true){
var result__50651__auto__ = switch__50648__auto__(state_52144);
if(cljs.core.keyword_identical_QMARK_(result__50651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50651__auto__;
}
break;
}
}catch (e52161){if((e52161 instanceof Object)){
var ex__50652__auto__ = e52161;
var statearr_52162_53860 = state_52144;
(statearr_52162_53860[(5)] = ex__50652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52161;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53861 = state_52144;
state_52144 = G__53861;
continue;
} else {
return ret_value__50650__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__50649__auto__ = function(state_52144){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__50649__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__50649__auto____1.call(this,state_52144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__50649__auto____0;
cljs$core$async$reduce_$_state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__50649__auto____1;
return cljs$core$async$reduce_$_state_machine__50649__auto__;
})()
;})(switch__50648__auto__,c__51656__auto__))
})();
var state__51658__auto__ = (function (){var statearr_52163 = (f__51657__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51657__auto__.cljs$core$IFn$_invoke$arity$0() : f__51657__auto__.call(null));
(statearr_52163[(6)] = c__51656__auto__);

return statearr_52163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51658__auto__);
});})(c__51656__auto__))
);

return c__51656__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__51656__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51656__auto__,f__$1){
return (function (){
var f__51657__auto__ = (function (){var switch__50648__auto__ = ((function (c__51656__auto__,f__$1){
return (function (state_52169){
var state_val_52170 = (state_52169[(1)]);
if((state_val_52170 === (1))){
var inst_52164 = cljs.core.async.reduce(f__$1,init,ch);
var state_52169__$1 = state_52169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52169__$1,(2),inst_52164);
} else {
if((state_val_52170 === (2))){
var inst_52166 = (state_52169[(2)]);
var inst_52167 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_52166) : f__$1.call(null,inst_52166));
var state_52169__$1 = state_52169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52169__$1,inst_52167);
} else {
return null;
}
}
});})(c__51656__auto__,f__$1))
;
return ((function (switch__50648__auto__,c__51656__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__50649__auto__ = null;
var cljs$core$async$transduce_$_state_machine__50649__auto____0 = (function (){
var statearr_52171 = [null,null,null,null,null,null,null];
(statearr_52171[(0)] = cljs$core$async$transduce_$_state_machine__50649__auto__);

(statearr_52171[(1)] = (1));

return statearr_52171;
});
var cljs$core$async$transduce_$_state_machine__50649__auto____1 = (function (state_52169){
while(true){
var ret_value__50650__auto__ = (function (){try{while(true){
var result__50651__auto__ = switch__50648__auto__(state_52169);
if(cljs.core.keyword_identical_QMARK_(result__50651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50651__auto__;
}
break;
}
}catch (e52172){if((e52172 instanceof Object)){
var ex__50652__auto__ = e52172;
var statearr_52173_53865 = state_52169;
(statearr_52173_53865[(5)] = ex__50652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52172;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53866 = state_52169;
state_52169 = G__53866;
continue;
} else {
return ret_value__50650__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__50649__auto__ = function(state_52169){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__50649__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__50649__auto____1.call(this,state_52169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__50649__auto____0;
cljs$core$async$transduce_$_state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__50649__auto____1;
return cljs$core$async$transduce_$_state_machine__50649__auto__;
})()
;})(switch__50648__auto__,c__51656__auto__,f__$1))
})();
var state__51658__auto__ = (function (){var statearr_52174 = (f__51657__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51657__auto__.cljs$core$IFn$_invoke$arity$0() : f__51657__auto__.call(null));
(statearr_52174[(6)] = c__51656__auto__);

return statearr_52174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51658__auto__);
});})(c__51656__auto__,f__$1))
);

return c__51656__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__52176 = arguments.length;
switch (G__52176) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__51656__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51656__auto__){
return (function (){
var f__51657__auto__ = (function (){var switch__50648__auto__ = ((function (c__51656__auto__){
return (function (state_52201){
var state_val_52202 = (state_52201[(1)]);
if((state_val_52202 === (7))){
var inst_52183 = (state_52201[(2)]);
var state_52201__$1 = state_52201;
var statearr_52203_53871 = state_52201__$1;
(statearr_52203_53871[(2)] = inst_52183);

(statearr_52203_53871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52202 === (1))){
var inst_52177 = cljs.core.seq(coll);
var inst_52178 = inst_52177;
var state_52201__$1 = (function (){var statearr_52204 = state_52201;
(statearr_52204[(7)] = inst_52178);

return statearr_52204;
})();
var statearr_52205_53874 = state_52201__$1;
(statearr_52205_53874[(2)] = null);

(statearr_52205_53874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52202 === (4))){
var inst_52178 = (state_52201[(7)]);
var inst_52181 = cljs.core.first(inst_52178);
var state_52201__$1 = state_52201;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52201__$1,(7),ch,inst_52181);
} else {
if((state_val_52202 === (13))){
var inst_52195 = (state_52201[(2)]);
var state_52201__$1 = state_52201;
var statearr_52206_53876 = state_52201__$1;
(statearr_52206_53876[(2)] = inst_52195);

(statearr_52206_53876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52202 === (6))){
var inst_52186 = (state_52201[(2)]);
var state_52201__$1 = state_52201;
if(cljs.core.truth_(inst_52186)){
var statearr_52207_53877 = state_52201__$1;
(statearr_52207_53877[(1)] = (8));

} else {
var statearr_52208_53878 = state_52201__$1;
(statearr_52208_53878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52202 === (3))){
var inst_52199 = (state_52201[(2)]);
var state_52201__$1 = state_52201;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52201__$1,inst_52199);
} else {
if((state_val_52202 === (12))){
var state_52201__$1 = state_52201;
var statearr_52209_53879 = state_52201__$1;
(statearr_52209_53879[(2)] = null);

(statearr_52209_53879[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52202 === (2))){
var inst_52178 = (state_52201[(7)]);
var state_52201__$1 = state_52201;
if(cljs.core.truth_(inst_52178)){
var statearr_52210_53881 = state_52201__$1;
(statearr_52210_53881[(1)] = (4));

} else {
var statearr_52211_53882 = state_52201__$1;
(statearr_52211_53882[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52202 === (11))){
var inst_52192 = cljs.core.async.close_BANG_(ch);
var state_52201__$1 = state_52201;
var statearr_52212_53885 = state_52201__$1;
(statearr_52212_53885[(2)] = inst_52192);

(statearr_52212_53885[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52202 === (9))){
var state_52201__$1 = state_52201;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52213_53886 = state_52201__$1;
(statearr_52213_53886[(1)] = (11));

} else {
var statearr_52214_53887 = state_52201__$1;
(statearr_52214_53887[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52202 === (5))){
var inst_52178 = (state_52201[(7)]);
var state_52201__$1 = state_52201;
var statearr_52215_53889 = state_52201__$1;
(statearr_52215_53889[(2)] = inst_52178);

(statearr_52215_53889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52202 === (10))){
var inst_52197 = (state_52201[(2)]);
var state_52201__$1 = state_52201;
var statearr_52216_53890 = state_52201__$1;
(statearr_52216_53890[(2)] = inst_52197);

(statearr_52216_53890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52202 === (8))){
var inst_52178 = (state_52201[(7)]);
var inst_52188 = cljs.core.next(inst_52178);
var inst_52178__$1 = inst_52188;
var state_52201__$1 = (function (){var statearr_52217 = state_52201;
(statearr_52217[(7)] = inst_52178__$1);

return statearr_52217;
})();
var statearr_52218_53892 = state_52201__$1;
(statearr_52218_53892[(2)] = null);

(statearr_52218_53892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51656__auto__))
;
return ((function (switch__50648__auto__,c__51656__auto__){
return (function() {
var cljs$core$async$state_machine__50649__auto__ = null;
var cljs$core$async$state_machine__50649__auto____0 = (function (){
var statearr_52219 = [null,null,null,null,null,null,null,null];
(statearr_52219[(0)] = cljs$core$async$state_machine__50649__auto__);

(statearr_52219[(1)] = (1));

return statearr_52219;
});
var cljs$core$async$state_machine__50649__auto____1 = (function (state_52201){
while(true){
var ret_value__50650__auto__ = (function (){try{while(true){
var result__50651__auto__ = switch__50648__auto__(state_52201);
if(cljs.core.keyword_identical_QMARK_(result__50651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50651__auto__;
}
break;
}
}catch (e52220){if((e52220 instanceof Object)){
var ex__50652__auto__ = e52220;
var statearr_52221_53895 = state_52201;
(statearr_52221_53895[(5)] = ex__50652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52220;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53896 = state_52201;
state_52201 = G__53896;
continue;
} else {
return ret_value__50650__auto__;
}
break;
}
});
cljs$core$async$state_machine__50649__auto__ = function(state_52201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50649__auto____1.call(this,state_52201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50649__auto____0;
cljs$core$async$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50649__auto____1;
return cljs$core$async$state_machine__50649__auto__;
})()
;})(switch__50648__auto__,c__51656__auto__))
})();
var state__51658__auto__ = (function (){var statearr_52222 = (f__51657__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51657__auto__.cljs$core$IFn$_invoke$arity$0() : f__51657__auto__.call(null));
(statearr_52222[(6)] = c__51656__auto__);

return statearr_52222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51658__auto__);
});})(c__51656__auto__))
);

return c__51656__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52223 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52223 = (function (ch,cs,meta52224){
this.ch = ch;
this.cs = cs;
this.meta52224 = meta52224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_52225,meta52224__$1){
var self__ = this;
var _52225__$1 = this;
return (new cljs.core.async.t_cljs$core$async52223(self__.ch,self__.cs,meta52224__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async52223.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_52225){
var self__ = this;
var _52225__$1 = this;
return self__.meta52224;
});})(cs))
;

cljs.core.async.t_cljs$core$async52223.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52223.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async52223.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52223.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52223.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52223.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52223.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta52224","meta52224",896822970,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async52223.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52223";

cljs.core.async.t_cljs$core$async52223.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52223");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52223.
 */
cljs.core.async.__GT_t_cljs$core$async52223 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async52223(ch__$1,cs__$1,meta52224){
return (new cljs.core.async.t_cljs$core$async52223(ch__$1,cs__$1,meta52224));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async52223(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__51656__auto___53916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51656__auto___53916,cs,m,dchan,dctr,done){
return (function (){
var f__51657__auto__ = (function (){var switch__50648__auto__ = ((function (c__51656__auto___53916,cs,m,dchan,dctr,done){
return (function (state_52360){
var state_val_52361 = (state_52360[(1)]);
if((state_val_52361 === (7))){
var inst_52356 = (state_52360[(2)]);
var state_52360__$1 = state_52360;
var statearr_52362_53923 = state_52360__$1;
(statearr_52362_53923[(2)] = inst_52356);

(statearr_52362_53923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (20))){
var inst_52259 = (state_52360[(7)]);
var inst_52271 = cljs.core.first(inst_52259);
var inst_52272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52271,(0),null);
var inst_52273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52271,(1),null);
var state_52360__$1 = (function (){var statearr_52363 = state_52360;
(statearr_52363[(8)] = inst_52272);

return statearr_52363;
})();
if(cljs.core.truth_(inst_52273)){
var statearr_52364_53929 = state_52360__$1;
(statearr_52364_53929[(1)] = (22));

} else {
var statearr_52365_53930 = state_52360__$1;
(statearr_52365_53930[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (27))){
var inst_52301 = (state_52360[(9)]);
var inst_52228 = (state_52360[(10)]);
var inst_52308 = (state_52360[(11)]);
var inst_52303 = (state_52360[(12)]);
var inst_52308__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_52301,inst_52303);
var inst_52309 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52308__$1,inst_52228,done);
var state_52360__$1 = (function (){var statearr_52366 = state_52360;
(statearr_52366[(11)] = inst_52308__$1);

return statearr_52366;
})();
if(cljs.core.truth_(inst_52309)){
var statearr_52367_53931 = state_52360__$1;
(statearr_52367_53931[(1)] = (30));

} else {
var statearr_52368_53933 = state_52360__$1;
(statearr_52368_53933[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (1))){
var state_52360__$1 = state_52360;
var statearr_52369_53934 = state_52360__$1;
(statearr_52369_53934[(2)] = null);

(statearr_52369_53934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (24))){
var inst_52259 = (state_52360[(7)]);
var inst_52278 = (state_52360[(2)]);
var inst_52279 = cljs.core.next(inst_52259);
var inst_52237 = inst_52279;
var inst_52238 = null;
var inst_52239 = (0);
var inst_52240 = (0);
var state_52360__$1 = (function (){var statearr_52370 = state_52360;
(statearr_52370[(13)] = inst_52239);

(statearr_52370[(14)] = inst_52238);

(statearr_52370[(15)] = inst_52237);

(statearr_52370[(16)] = inst_52240);

(statearr_52370[(17)] = inst_52278);

return statearr_52370;
})();
var statearr_52371_53939 = state_52360__$1;
(statearr_52371_53939[(2)] = null);

(statearr_52371_53939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (39))){
var state_52360__$1 = state_52360;
var statearr_52375_53940 = state_52360__$1;
(statearr_52375_53940[(2)] = null);

(statearr_52375_53940[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (4))){
var inst_52228 = (state_52360[(10)]);
var inst_52228__$1 = (state_52360[(2)]);
var inst_52229 = (inst_52228__$1 == null);
var state_52360__$1 = (function (){var statearr_52376 = state_52360;
(statearr_52376[(10)] = inst_52228__$1);

return statearr_52376;
})();
if(cljs.core.truth_(inst_52229)){
var statearr_52377_53942 = state_52360__$1;
(statearr_52377_53942[(1)] = (5));

} else {
var statearr_52378_53943 = state_52360__$1;
(statearr_52378_53943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (15))){
var inst_52239 = (state_52360[(13)]);
var inst_52238 = (state_52360[(14)]);
var inst_52237 = (state_52360[(15)]);
var inst_52240 = (state_52360[(16)]);
var inst_52255 = (state_52360[(2)]);
var inst_52256 = (inst_52240 + (1));
var tmp52372 = inst_52239;
var tmp52373 = inst_52238;
var tmp52374 = inst_52237;
var inst_52237__$1 = tmp52374;
var inst_52238__$1 = tmp52373;
var inst_52239__$1 = tmp52372;
var inst_52240__$1 = inst_52256;
var state_52360__$1 = (function (){var statearr_52379 = state_52360;
(statearr_52379[(13)] = inst_52239__$1);

(statearr_52379[(14)] = inst_52238__$1);

(statearr_52379[(15)] = inst_52237__$1);

(statearr_52379[(16)] = inst_52240__$1);

(statearr_52379[(18)] = inst_52255);

return statearr_52379;
})();
var statearr_52380_53948 = state_52360__$1;
(statearr_52380_53948[(2)] = null);

(statearr_52380_53948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (21))){
var inst_52282 = (state_52360[(2)]);
var state_52360__$1 = state_52360;
var statearr_52384_53949 = state_52360__$1;
(statearr_52384_53949[(2)] = inst_52282);

(statearr_52384_53949[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (31))){
var inst_52308 = (state_52360[(11)]);
var inst_52312 = done(null);
var inst_52313 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_52308);
var state_52360__$1 = (function (){var statearr_52385 = state_52360;
(statearr_52385[(19)] = inst_52312);

return statearr_52385;
})();
var statearr_52386_53950 = state_52360__$1;
(statearr_52386_53950[(2)] = inst_52313);

(statearr_52386_53950[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (32))){
var inst_52301 = (state_52360[(9)]);
var inst_52300 = (state_52360[(20)]);
var inst_52303 = (state_52360[(12)]);
var inst_52302 = (state_52360[(21)]);
var inst_52315 = (state_52360[(2)]);
var inst_52316 = (inst_52303 + (1));
var tmp52381 = inst_52301;
var tmp52382 = inst_52300;
var tmp52383 = inst_52302;
var inst_52300__$1 = tmp52382;
var inst_52301__$1 = tmp52381;
var inst_52302__$1 = tmp52383;
var inst_52303__$1 = inst_52316;
var state_52360__$1 = (function (){var statearr_52387 = state_52360;
(statearr_52387[(22)] = inst_52315);

(statearr_52387[(9)] = inst_52301__$1);

(statearr_52387[(20)] = inst_52300__$1);

(statearr_52387[(12)] = inst_52303__$1);

(statearr_52387[(21)] = inst_52302__$1);

return statearr_52387;
})();
var statearr_52388_53956 = state_52360__$1;
(statearr_52388_53956[(2)] = null);

(statearr_52388_53956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (40))){
var inst_52328 = (state_52360[(23)]);
var inst_52332 = done(null);
var inst_52333 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_52328);
var state_52360__$1 = (function (){var statearr_52389 = state_52360;
(statearr_52389[(24)] = inst_52332);

return statearr_52389;
})();
var statearr_52390_53957 = state_52360__$1;
(statearr_52390_53957[(2)] = inst_52333);

(statearr_52390_53957[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (33))){
var inst_52319 = (state_52360[(25)]);
var inst_52321 = cljs.core.chunked_seq_QMARK_(inst_52319);
var state_52360__$1 = state_52360;
if(inst_52321){
var statearr_52391_53959 = state_52360__$1;
(statearr_52391_53959[(1)] = (36));

} else {
var statearr_52392_53960 = state_52360__$1;
(statearr_52392_53960[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (13))){
var inst_52249 = (state_52360[(26)]);
var inst_52252 = cljs.core.async.close_BANG_(inst_52249);
var state_52360__$1 = state_52360;
var statearr_52393_53961 = state_52360__$1;
(statearr_52393_53961[(2)] = inst_52252);

(statearr_52393_53961[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (22))){
var inst_52272 = (state_52360[(8)]);
var inst_52275 = cljs.core.async.close_BANG_(inst_52272);
var state_52360__$1 = state_52360;
var statearr_52394_53963 = state_52360__$1;
(statearr_52394_53963[(2)] = inst_52275);

(statearr_52394_53963[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (36))){
var inst_52319 = (state_52360[(25)]);
var inst_52323 = cljs.core.chunk_first(inst_52319);
var inst_52324 = cljs.core.chunk_rest(inst_52319);
var inst_52325 = cljs.core.count(inst_52323);
var inst_52300 = inst_52324;
var inst_52301 = inst_52323;
var inst_52302 = inst_52325;
var inst_52303 = (0);
var state_52360__$1 = (function (){var statearr_52395 = state_52360;
(statearr_52395[(9)] = inst_52301);

(statearr_52395[(20)] = inst_52300);

(statearr_52395[(12)] = inst_52303);

(statearr_52395[(21)] = inst_52302);

return statearr_52395;
})();
var statearr_52396_53967 = state_52360__$1;
(statearr_52396_53967[(2)] = null);

(statearr_52396_53967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (41))){
var inst_52319 = (state_52360[(25)]);
var inst_52335 = (state_52360[(2)]);
var inst_52336 = cljs.core.next(inst_52319);
var inst_52300 = inst_52336;
var inst_52301 = null;
var inst_52302 = (0);
var inst_52303 = (0);
var state_52360__$1 = (function (){var statearr_52397 = state_52360;
(statearr_52397[(27)] = inst_52335);

(statearr_52397[(9)] = inst_52301);

(statearr_52397[(20)] = inst_52300);

(statearr_52397[(12)] = inst_52303);

(statearr_52397[(21)] = inst_52302);

return statearr_52397;
})();
var statearr_52398_53969 = state_52360__$1;
(statearr_52398_53969[(2)] = null);

(statearr_52398_53969[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (43))){
var state_52360__$1 = state_52360;
var statearr_52399_53971 = state_52360__$1;
(statearr_52399_53971[(2)] = null);

(statearr_52399_53971[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (29))){
var inst_52344 = (state_52360[(2)]);
var state_52360__$1 = state_52360;
var statearr_52400_53973 = state_52360__$1;
(statearr_52400_53973[(2)] = inst_52344);

(statearr_52400_53973[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (44))){
var inst_52353 = (state_52360[(2)]);
var state_52360__$1 = (function (){var statearr_52401 = state_52360;
(statearr_52401[(28)] = inst_52353);

return statearr_52401;
})();
var statearr_52402_53975 = state_52360__$1;
(statearr_52402_53975[(2)] = null);

(statearr_52402_53975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (6))){
var inst_52292 = (state_52360[(29)]);
var inst_52291 = cljs.core.deref(cs);
var inst_52292__$1 = cljs.core.keys(inst_52291);
var inst_52293 = cljs.core.count(inst_52292__$1);
var inst_52294 = cljs.core.reset_BANG_(dctr,inst_52293);
var inst_52299 = cljs.core.seq(inst_52292__$1);
var inst_52300 = inst_52299;
var inst_52301 = null;
var inst_52302 = (0);
var inst_52303 = (0);
var state_52360__$1 = (function (){var statearr_52403 = state_52360;
(statearr_52403[(30)] = inst_52294);

(statearr_52403[(9)] = inst_52301);

(statearr_52403[(20)] = inst_52300);

(statearr_52403[(12)] = inst_52303);

(statearr_52403[(21)] = inst_52302);

(statearr_52403[(29)] = inst_52292__$1);

return statearr_52403;
})();
var statearr_52404_53977 = state_52360__$1;
(statearr_52404_53977[(2)] = null);

(statearr_52404_53977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (28))){
var inst_52300 = (state_52360[(20)]);
var inst_52319 = (state_52360[(25)]);
var inst_52319__$1 = cljs.core.seq(inst_52300);
var state_52360__$1 = (function (){var statearr_52405 = state_52360;
(statearr_52405[(25)] = inst_52319__$1);

return statearr_52405;
})();
if(inst_52319__$1){
var statearr_52406_53981 = state_52360__$1;
(statearr_52406_53981[(1)] = (33));

} else {
var statearr_52407_53982 = state_52360__$1;
(statearr_52407_53982[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (25))){
var inst_52303 = (state_52360[(12)]);
var inst_52302 = (state_52360[(21)]);
var inst_52305 = (inst_52303 < inst_52302);
var inst_52306 = inst_52305;
var state_52360__$1 = state_52360;
if(cljs.core.truth_(inst_52306)){
var statearr_52408_53988 = state_52360__$1;
(statearr_52408_53988[(1)] = (27));

} else {
var statearr_52409_53989 = state_52360__$1;
(statearr_52409_53989[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (34))){
var state_52360__$1 = state_52360;
var statearr_52410_53990 = state_52360__$1;
(statearr_52410_53990[(2)] = null);

(statearr_52410_53990[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (17))){
var state_52360__$1 = state_52360;
var statearr_52411_53991 = state_52360__$1;
(statearr_52411_53991[(2)] = null);

(statearr_52411_53991[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (3))){
var inst_52358 = (state_52360[(2)]);
var state_52360__$1 = state_52360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52360__$1,inst_52358);
} else {
if((state_val_52361 === (12))){
var inst_52287 = (state_52360[(2)]);
var state_52360__$1 = state_52360;
var statearr_52412_53993 = state_52360__$1;
(statearr_52412_53993[(2)] = inst_52287);

(statearr_52412_53993[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (2))){
var state_52360__$1 = state_52360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52360__$1,(4),ch);
} else {
if((state_val_52361 === (23))){
var state_52360__$1 = state_52360;
var statearr_52413_53997 = state_52360__$1;
(statearr_52413_53997[(2)] = null);

(statearr_52413_53997[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (35))){
var inst_52342 = (state_52360[(2)]);
var state_52360__$1 = state_52360;
var statearr_52414_53998 = state_52360__$1;
(statearr_52414_53998[(2)] = inst_52342);

(statearr_52414_53998[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (19))){
var inst_52259 = (state_52360[(7)]);
var inst_52263 = cljs.core.chunk_first(inst_52259);
var inst_52264 = cljs.core.chunk_rest(inst_52259);
var inst_52265 = cljs.core.count(inst_52263);
var inst_52237 = inst_52264;
var inst_52238 = inst_52263;
var inst_52239 = inst_52265;
var inst_52240 = (0);
var state_52360__$1 = (function (){var statearr_52415 = state_52360;
(statearr_52415[(13)] = inst_52239);

(statearr_52415[(14)] = inst_52238);

(statearr_52415[(15)] = inst_52237);

(statearr_52415[(16)] = inst_52240);

return statearr_52415;
})();
var statearr_52416_54002 = state_52360__$1;
(statearr_52416_54002[(2)] = null);

(statearr_52416_54002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (11))){
var inst_52259 = (state_52360[(7)]);
var inst_52237 = (state_52360[(15)]);
var inst_52259__$1 = cljs.core.seq(inst_52237);
var state_52360__$1 = (function (){var statearr_52417 = state_52360;
(statearr_52417[(7)] = inst_52259__$1);

return statearr_52417;
})();
if(inst_52259__$1){
var statearr_52418_54004 = state_52360__$1;
(statearr_52418_54004[(1)] = (16));

} else {
var statearr_52419_54005 = state_52360__$1;
(statearr_52419_54005[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (9))){
var inst_52289 = (state_52360[(2)]);
var state_52360__$1 = state_52360;
var statearr_52420_54007 = state_52360__$1;
(statearr_52420_54007[(2)] = inst_52289);

(statearr_52420_54007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (5))){
var inst_52235 = cljs.core.deref(cs);
var inst_52236 = cljs.core.seq(inst_52235);
var inst_52237 = inst_52236;
var inst_52238 = null;
var inst_52239 = (0);
var inst_52240 = (0);
var state_52360__$1 = (function (){var statearr_52421 = state_52360;
(statearr_52421[(13)] = inst_52239);

(statearr_52421[(14)] = inst_52238);

(statearr_52421[(15)] = inst_52237);

(statearr_52421[(16)] = inst_52240);

return statearr_52421;
})();
var statearr_52422_54008 = state_52360__$1;
(statearr_52422_54008[(2)] = null);

(statearr_52422_54008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (14))){
var state_52360__$1 = state_52360;
var statearr_52423_54010 = state_52360__$1;
(statearr_52423_54010[(2)] = null);

(statearr_52423_54010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (45))){
var inst_52350 = (state_52360[(2)]);
var state_52360__$1 = state_52360;
var statearr_52424_54011 = state_52360__$1;
(statearr_52424_54011[(2)] = inst_52350);

(statearr_52424_54011[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (26))){
var inst_52292 = (state_52360[(29)]);
var inst_52346 = (state_52360[(2)]);
var inst_52347 = cljs.core.seq(inst_52292);
var state_52360__$1 = (function (){var statearr_52425 = state_52360;
(statearr_52425[(31)] = inst_52346);

return statearr_52425;
})();
if(inst_52347){
var statearr_52426_54013 = state_52360__$1;
(statearr_52426_54013[(1)] = (42));

} else {
var statearr_52427_54014 = state_52360__$1;
(statearr_52427_54014[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (16))){
var inst_52259 = (state_52360[(7)]);
var inst_52261 = cljs.core.chunked_seq_QMARK_(inst_52259);
var state_52360__$1 = state_52360;
if(inst_52261){
var statearr_52428_54015 = state_52360__$1;
(statearr_52428_54015[(1)] = (19));

} else {
var statearr_52429_54017 = state_52360__$1;
(statearr_52429_54017[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (38))){
var inst_52339 = (state_52360[(2)]);
var state_52360__$1 = state_52360;
var statearr_52430_54018 = state_52360__$1;
(statearr_52430_54018[(2)] = inst_52339);

(statearr_52430_54018[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (30))){
var state_52360__$1 = state_52360;
var statearr_52431_54020 = state_52360__$1;
(statearr_52431_54020[(2)] = null);

(statearr_52431_54020[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (10))){
var inst_52238 = (state_52360[(14)]);
var inst_52240 = (state_52360[(16)]);
var inst_52248 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_52238,inst_52240);
var inst_52249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52248,(0),null);
var inst_52250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52248,(1),null);
var state_52360__$1 = (function (){var statearr_52432 = state_52360;
(statearr_52432[(26)] = inst_52249);

return statearr_52432;
})();
if(cljs.core.truth_(inst_52250)){
var statearr_52433_54025 = state_52360__$1;
(statearr_52433_54025[(1)] = (13));

} else {
var statearr_52434_54026 = state_52360__$1;
(statearr_52434_54026[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (18))){
var inst_52285 = (state_52360[(2)]);
var state_52360__$1 = state_52360;
var statearr_52435_54027 = state_52360__$1;
(statearr_52435_54027[(2)] = inst_52285);

(statearr_52435_54027[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (42))){
var state_52360__$1 = state_52360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52360__$1,(45),dchan);
} else {
if((state_val_52361 === (37))){
var inst_52228 = (state_52360[(10)]);
var inst_52328 = (state_52360[(23)]);
var inst_52319 = (state_52360[(25)]);
var inst_52328__$1 = cljs.core.first(inst_52319);
var inst_52329 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52328__$1,inst_52228,done);
var state_52360__$1 = (function (){var statearr_52436 = state_52360;
(statearr_52436[(23)] = inst_52328__$1);

return statearr_52436;
})();
if(cljs.core.truth_(inst_52329)){
var statearr_52437_54029 = state_52360__$1;
(statearr_52437_54029[(1)] = (39));

} else {
var statearr_52438_54030 = state_52360__$1;
(statearr_52438_54030[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52361 === (8))){
var inst_52239 = (state_52360[(13)]);
var inst_52240 = (state_52360[(16)]);
var inst_52242 = (inst_52240 < inst_52239);
var inst_52243 = inst_52242;
var state_52360__$1 = state_52360;
if(cljs.core.truth_(inst_52243)){
var statearr_52439_54031 = state_52360__$1;
(statearr_52439_54031[(1)] = (10));

} else {
var statearr_52440_54032 = state_52360__$1;
(statearr_52440_54032[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51656__auto___53916,cs,m,dchan,dctr,done))
;
return ((function (switch__50648__auto__,c__51656__auto___53916,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__50649__auto__ = null;
var cljs$core$async$mult_$_state_machine__50649__auto____0 = (function (){
var statearr_52441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52441[(0)] = cljs$core$async$mult_$_state_machine__50649__auto__);

(statearr_52441[(1)] = (1));

return statearr_52441;
});
var cljs$core$async$mult_$_state_machine__50649__auto____1 = (function (state_52360){
while(true){
var ret_value__50650__auto__ = (function (){try{while(true){
var result__50651__auto__ = switch__50648__auto__(state_52360);
if(cljs.core.keyword_identical_QMARK_(result__50651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50651__auto__;
}
break;
}
}catch (e52442){if((e52442 instanceof Object)){
var ex__50652__auto__ = e52442;
var statearr_52443_54034 = state_52360;
(statearr_52443_54034[(5)] = ex__50652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52442;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54035 = state_52360;
state_52360 = G__54035;
continue;
} else {
return ret_value__50650__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__50649__auto__ = function(state_52360){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__50649__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__50649__auto____1.call(this,state_52360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__50649__auto____0;
cljs$core$async$mult_$_state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__50649__auto____1;
return cljs$core$async$mult_$_state_machine__50649__auto__;
})()
;})(switch__50648__auto__,c__51656__auto___53916,cs,m,dchan,dctr,done))
})();
var state__51658__auto__ = (function (){var statearr_52444 = (f__51657__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51657__auto__.cljs$core$IFn$_invoke$arity$0() : f__51657__auto__.call(null));
(statearr_52444[(6)] = c__51656__auto___53916);

return statearr_52444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51658__auto__);
});})(c__51656__auto___53916,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__52446 = arguments.length;
switch (G__52446) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54077 = arguments.length;
var i__4731__auto___54078 = (0);
while(true){
if((i__4731__auto___54078 < len__4730__auto___54077)){
args__4736__auto__.push((arguments[i__4731__auto___54078]));

var G__54080 = (i__4731__auto___54078 + (1));
i__4731__auto___54078 = G__54080;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__52451){
var map__52452 = p__52451;
var map__52452__$1 = (((((!((map__52452 == null))))?(((((map__52452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52452):map__52452);
var opts = map__52452__$1;
var statearr_52454_54083 = state;
(statearr_52454_54083[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts(((function (map__52452,map__52452__$1,opts){
return (function (val){
var statearr_52455_54084 = state;
(statearr_52455_54084[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__52452,map__52452__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_52456_54088 = state;
(statearr_52456_54088[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq52447){
var G__52448 = cljs.core.first(seq52447);
var seq52447__$1 = cljs.core.next(seq52447);
var G__52449 = cljs.core.first(seq52447__$1);
var seq52447__$2 = cljs.core.next(seq52447__$1);
var G__52450 = cljs.core.first(seq52447__$2);
var seq52447__$3 = cljs.core.next(seq52447__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52448,G__52449,G__52450,seq52447__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52457 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52457 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta52458){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta52458 = meta52458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52459,meta52458__$1){
var self__ = this;
var _52459__$1 = this;
return (new cljs.core.async.t_cljs$core$async52457(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta52458__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52457.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52459){
var self__ = this;
var _52459__$1 = this;
return self__.meta52458;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52457.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52457.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52457.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52457.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52457.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52457.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52457.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52457.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52457.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta52458","meta52458",-1887932875,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52457.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52457";

cljs.core.async.t_cljs$core$async52457.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52457");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52457.
 */
cljs.core.async.__GT_t_cljs$core$async52457 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async52457(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52458){
return (new cljs.core.async.t_cljs$core$async52457(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52458));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async52457(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51656__auto___54114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51656__auto___54114,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__51657__auto__ = (function (){var switch__50648__auto__ = ((function (c__51656__auto___54114,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_52561){
var state_val_52562 = (state_52561[(1)]);
if((state_val_52562 === (7))){
var inst_52476 = (state_52561[(2)]);
var state_52561__$1 = state_52561;
var statearr_52563_54116 = state_52561__$1;
(statearr_52563_54116[(2)] = inst_52476);

(statearr_52563_54116[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (20))){
var inst_52488 = (state_52561[(7)]);
var state_52561__$1 = state_52561;
var statearr_52564_54117 = state_52561__$1;
(statearr_52564_54117[(2)] = inst_52488);

(statearr_52564_54117[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (27))){
var state_52561__$1 = state_52561;
var statearr_52565_54118 = state_52561__$1;
(statearr_52565_54118[(2)] = null);

(statearr_52565_54118[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (1))){
var inst_52463 = (state_52561[(8)]);
var inst_52463__$1 = calc_state();
var inst_52465 = (inst_52463__$1 == null);
var inst_52466 = cljs.core.not(inst_52465);
var state_52561__$1 = (function (){var statearr_52566 = state_52561;
(statearr_52566[(8)] = inst_52463__$1);

return statearr_52566;
})();
if(inst_52466){
var statearr_52567_54119 = state_52561__$1;
(statearr_52567_54119[(1)] = (2));

} else {
var statearr_52568_54120 = state_52561__$1;
(statearr_52568_54120[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (24))){
var inst_52521 = (state_52561[(9)]);
var inst_52512 = (state_52561[(10)]);
var inst_52535 = (state_52561[(11)]);
var inst_52535__$1 = (inst_52512.cljs$core$IFn$_invoke$arity$1 ? inst_52512.cljs$core$IFn$_invoke$arity$1(inst_52521) : inst_52512.call(null,inst_52521));
var state_52561__$1 = (function (){var statearr_52569 = state_52561;
(statearr_52569[(11)] = inst_52535__$1);

return statearr_52569;
})();
if(cljs.core.truth_(inst_52535__$1)){
var statearr_52570_54121 = state_52561__$1;
(statearr_52570_54121[(1)] = (29));

} else {
var statearr_52571_54122 = state_52561__$1;
(statearr_52571_54122[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (4))){
var inst_52479 = (state_52561[(2)]);
var state_52561__$1 = state_52561;
if(cljs.core.truth_(inst_52479)){
var statearr_52572_54123 = state_52561__$1;
(statearr_52572_54123[(1)] = (8));

} else {
var statearr_52573_54124 = state_52561__$1;
(statearr_52573_54124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (15))){
var inst_52506 = (state_52561[(2)]);
var state_52561__$1 = state_52561;
if(cljs.core.truth_(inst_52506)){
var statearr_52574_54132 = state_52561__$1;
(statearr_52574_54132[(1)] = (19));

} else {
var statearr_52575_54133 = state_52561__$1;
(statearr_52575_54133[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (21))){
var inst_52511 = (state_52561[(12)]);
var inst_52511__$1 = (state_52561[(2)]);
var inst_52512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52511__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52511__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52511__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_52561__$1 = (function (){var statearr_52576 = state_52561;
(statearr_52576[(13)] = inst_52513);

(statearr_52576[(12)] = inst_52511__$1);

(statearr_52576[(10)] = inst_52512);

return statearr_52576;
})();
return cljs.core.async.ioc_alts_BANG_(state_52561__$1,(22),inst_52514);
} else {
if((state_val_52562 === (31))){
var inst_52543 = (state_52561[(2)]);
var state_52561__$1 = state_52561;
if(cljs.core.truth_(inst_52543)){
var statearr_52577_54135 = state_52561__$1;
(statearr_52577_54135[(1)] = (32));

} else {
var statearr_52578_54139 = state_52561__$1;
(statearr_52578_54139[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (32))){
var inst_52520 = (state_52561[(14)]);
var state_52561__$1 = state_52561;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52561__$1,(35),out,inst_52520);
} else {
if((state_val_52562 === (33))){
var inst_52511 = (state_52561[(12)]);
var inst_52488 = inst_52511;
var state_52561__$1 = (function (){var statearr_52579 = state_52561;
(statearr_52579[(7)] = inst_52488);

return statearr_52579;
})();
var statearr_52580_54141 = state_52561__$1;
(statearr_52580_54141[(2)] = null);

(statearr_52580_54141[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (13))){
var inst_52488 = (state_52561[(7)]);
var inst_52495 = inst_52488.cljs$lang$protocol_mask$partition0$;
var inst_52496 = (inst_52495 & (64));
var inst_52497 = inst_52488.cljs$core$ISeq$;
var inst_52498 = (cljs.core.PROTOCOL_SENTINEL === inst_52497);
var inst_52499 = ((inst_52496) || (inst_52498));
var state_52561__$1 = state_52561;
if(cljs.core.truth_(inst_52499)){
var statearr_52581_54147 = state_52561__$1;
(statearr_52581_54147[(1)] = (16));

} else {
var statearr_52582_54148 = state_52561__$1;
(statearr_52582_54148[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (22))){
var inst_52520 = (state_52561[(14)]);
var inst_52521 = (state_52561[(9)]);
var inst_52519 = (state_52561[(2)]);
var inst_52520__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52519,(0),null);
var inst_52521__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52519,(1),null);
var inst_52522 = (inst_52520__$1 == null);
var inst_52523 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52521__$1,change);
var inst_52524 = ((inst_52522) || (inst_52523));
var state_52561__$1 = (function (){var statearr_52583 = state_52561;
(statearr_52583[(14)] = inst_52520__$1);

(statearr_52583[(9)] = inst_52521__$1);

return statearr_52583;
})();
if(cljs.core.truth_(inst_52524)){
var statearr_52584_54157 = state_52561__$1;
(statearr_52584_54157[(1)] = (23));

} else {
var statearr_52585_54158 = state_52561__$1;
(statearr_52585_54158[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (36))){
var inst_52511 = (state_52561[(12)]);
var inst_52488 = inst_52511;
var state_52561__$1 = (function (){var statearr_52586 = state_52561;
(statearr_52586[(7)] = inst_52488);

return statearr_52586;
})();
var statearr_52587_54161 = state_52561__$1;
(statearr_52587_54161[(2)] = null);

(statearr_52587_54161[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (29))){
var inst_52535 = (state_52561[(11)]);
var state_52561__$1 = state_52561;
var statearr_52588_54162 = state_52561__$1;
(statearr_52588_54162[(2)] = inst_52535);

(statearr_52588_54162[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (6))){
var state_52561__$1 = state_52561;
var statearr_52589_54163 = state_52561__$1;
(statearr_52589_54163[(2)] = false);

(statearr_52589_54163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (28))){
var inst_52531 = (state_52561[(2)]);
var inst_52532 = calc_state();
var inst_52488 = inst_52532;
var state_52561__$1 = (function (){var statearr_52590 = state_52561;
(statearr_52590[(7)] = inst_52488);

(statearr_52590[(15)] = inst_52531);

return statearr_52590;
})();
var statearr_52591_54167 = state_52561__$1;
(statearr_52591_54167[(2)] = null);

(statearr_52591_54167[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (25))){
var inst_52557 = (state_52561[(2)]);
var state_52561__$1 = state_52561;
var statearr_52592_54168 = state_52561__$1;
(statearr_52592_54168[(2)] = inst_52557);

(statearr_52592_54168[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (34))){
var inst_52555 = (state_52561[(2)]);
var state_52561__$1 = state_52561;
var statearr_52593_54172 = state_52561__$1;
(statearr_52593_54172[(2)] = inst_52555);

(statearr_52593_54172[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (17))){
var state_52561__$1 = state_52561;
var statearr_52594_54173 = state_52561__$1;
(statearr_52594_54173[(2)] = false);

(statearr_52594_54173[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (3))){
var state_52561__$1 = state_52561;
var statearr_52595_54178 = state_52561__$1;
(statearr_52595_54178[(2)] = false);

(statearr_52595_54178[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (12))){
var inst_52559 = (state_52561[(2)]);
var state_52561__$1 = state_52561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52561__$1,inst_52559);
} else {
if((state_val_52562 === (2))){
var inst_52463 = (state_52561[(8)]);
var inst_52468 = inst_52463.cljs$lang$protocol_mask$partition0$;
var inst_52469 = (inst_52468 & (64));
var inst_52470 = inst_52463.cljs$core$ISeq$;
var inst_52471 = (cljs.core.PROTOCOL_SENTINEL === inst_52470);
var inst_52472 = ((inst_52469) || (inst_52471));
var state_52561__$1 = state_52561;
if(cljs.core.truth_(inst_52472)){
var statearr_52596_54185 = state_52561__$1;
(statearr_52596_54185[(1)] = (5));

} else {
var statearr_52597_54186 = state_52561__$1;
(statearr_52597_54186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (23))){
var inst_52520 = (state_52561[(14)]);
var inst_52526 = (inst_52520 == null);
var state_52561__$1 = state_52561;
if(cljs.core.truth_(inst_52526)){
var statearr_52598_54190 = state_52561__$1;
(statearr_52598_54190[(1)] = (26));

} else {
var statearr_52599_54191 = state_52561__$1;
(statearr_52599_54191[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (35))){
var inst_52546 = (state_52561[(2)]);
var state_52561__$1 = state_52561;
if(cljs.core.truth_(inst_52546)){
var statearr_52600_54192 = state_52561__$1;
(statearr_52600_54192[(1)] = (36));

} else {
var statearr_52601_54193 = state_52561__$1;
(statearr_52601_54193[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (19))){
var inst_52488 = (state_52561[(7)]);
var inst_52508 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52488);
var state_52561__$1 = state_52561;
var statearr_52602_54199 = state_52561__$1;
(statearr_52602_54199[(2)] = inst_52508);

(statearr_52602_54199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (11))){
var inst_52488 = (state_52561[(7)]);
var inst_52492 = (inst_52488 == null);
var inst_52493 = cljs.core.not(inst_52492);
var state_52561__$1 = state_52561;
if(inst_52493){
var statearr_52603_54200 = state_52561__$1;
(statearr_52603_54200[(1)] = (13));

} else {
var statearr_52604_54205 = state_52561__$1;
(statearr_52604_54205[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (9))){
var inst_52463 = (state_52561[(8)]);
var state_52561__$1 = state_52561;
var statearr_52605_54209 = state_52561__$1;
(statearr_52605_54209[(2)] = inst_52463);

(statearr_52605_54209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (5))){
var state_52561__$1 = state_52561;
var statearr_52606_54215 = state_52561__$1;
(statearr_52606_54215[(2)] = true);

(statearr_52606_54215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (14))){
var state_52561__$1 = state_52561;
var statearr_52607_54216 = state_52561__$1;
(statearr_52607_54216[(2)] = false);

(statearr_52607_54216[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (26))){
var inst_52521 = (state_52561[(9)]);
var inst_52528 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_52521);
var state_52561__$1 = state_52561;
var statearr_52608_54222 = state_52561__$1;
(statearr_52608_54222[(2)] = inst_52528);

(statearr_52608_54222[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (16))){
var state_52561__$1 = state_52561;
var statearr_52609_54226 = state_52561__$1;
(statearr_52609_54226[(2)] = true);

(statearr_52609_54226[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (38))){
var inst_52551 = (state_52561[(2)]);
var state_52561__$1 = state_52561;
var statearr_52610_54227 = state_52561__$1;
(statearr_52610_54227[(2)] = inst_52551);

(statearr_52610_54227[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (30))){
var inst_52513 = (state_52561[(13)]);
var inst_52521 = (state_52561[(9)]);
var inst_52512 = (state_52561[(10)]);
var inst_52538 = cljs.core.empty_QMARK_(inst_52512);
var inst_52539 = (inst_52513.cljs$core$IFn$_invoke$arity$1 ? inst_52513.cljs$core$IFn$_invoke$arity$1(inst_52521) : inst_52513.call(null,inst_52521));
var inst_52540 = cljs.core.not(inst_52539);
var inst_52541 = ((inst_52538) && (inst_52540));
var state_52561__$1 = state_52561;
var statearr_52611_54234 = state_52561__$1;
(statearr_52611_54234[(2)] = inst_52541);

(statearr_52611_54234[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (10))){
var inst_52463 = (state_52561[(8)]);
var inst_52484 = (state_52561[(2)]);
var inst_52485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52484,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52484,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52484,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_52488 = inst_52463;
var state_52561__$1 = (function (){var statearr_52612 = state_52561;
(statearr_52612[(7)] = inst_52488);

(statearr_52612[(16)] = inst_52485);

(statearr_52612[(17)] = inst_52486);

(statearr_52612[(18)] = inst_52487);

return statearr_52612;
})();
var statearr_52613_54243 = state_52561__$1;
(statearr_52613_54243[(2)] = null);

(statearr_52613_54243[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (18))){
var inst_52503 = (state_52561[(2)]);
var state_52561__$1 = state_52561;
var statearr_52614_54244 = state_52561__$1;
(statearr_52614_54244[(2)] = inst_52503);

(statearr_52614_54244[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (37))){
var state_52561__$1 = state_52561;
var statearr_52615_54246 = state_52561__$1;
(statearr_52615_54246[(2)] = null);

(statearr_52615_54246[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52562 === (8))){
var inst_52463 = (state_52561[(8)]);
var inst_52481 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52463);
var state_52561__$1 = state_52561;
var statearr_52616_54247 = state_52561__$1;
(statearr_52616_54247[(2)] = inst_52481);

(statearr_52616_54247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51656__auto___54114,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__50648__auto__,c__51656__auto___54114,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__50649__auto__ = null;
var cljs$core$async$mix_$_state_machine__50649__auto____0 = (function (){
var statearr_52617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52617[(0)] = cljs$core$async$mix_$_state_machine__50649__auto__);

(statearr_52617[(1)] = (1));

return statearr_52617;
});
var cljs$core$async$mix_$_state_machine__50649__auto____1 = (function (state_52561){
while(true){
var ret_value__50650__auto__ = (function (){try{while(true){
var result__50651__auto__ = switch__50648__auto__(state_52561);
if(cljs.core.keyword_identical_QMARK_(result__50651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50651__auto__;
}
break;
}
}catch (e52618){if((e52618 instanceof Object)){
var ex__50652__auto__ = e52618;
var statearr_52619_54251 = state_52561;
(statearr_52619_54251[(5)] = ex__50652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52618;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54252 = state_52561;
state_52561 = G__54252;
continue;
} else {
return ret_value__50650__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__50649__auto__ = function(state_52561){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__50649__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__50649__auto____1.call(this,state_52561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__50649__auto____0;
cljs$core$async$mix_$_state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__50649__auto____1;
return cljs$core$async$mix_$_state_machine__50649__auto__;
})()
;})(switch__50648__auto__,c__51656__auto___54114,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__51658__auto__ = (function (){var statearr_52620 = (f__51657__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51657__auto__.cljs$core$IFn$_invoke$arity$0() : f__51657__auto__.call(null));
(statearr_52620[(6)] = c__51656__auto___54114);

return statearr_52620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51658__auto__);
});})(c__51656__auto___54114,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__52622 = arguments.length;
switch (G__52622) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__52625 = arguments.length;
switch (G__52625) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__52623_SHARP_){
if(cljs.core.truth_((p1__52623_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__52623_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__52623_SHARP_.call(null,topic)))){
return p1__52623_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__52623_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52626 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52626 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta52627){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta52627 = meta52627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_52628,meta52627__$1){
var self__ = this;
var _52628__$1 = this;
return (new cljs.core.async.t_cljs$core$async52626(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta52627__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52626.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_52628){
var self__ = this;
var _52628__$1 = this;
return self__.meta52627;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52626.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52626.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52626.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52626.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52626.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52626.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52626.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52626.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta52627","meta52627",-1702249393,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52626.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52626";

cljs.core.async.t_cljs$core$async52626.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52626");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52626.
 */
cljs.core.async.__GT_t_cljs$core$async52626 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async52626(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52627){
return (new cljs.core.async.t_cljs$core$async52626(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52627));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async52626(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51656__auto___54300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51656__auto___54300,mults,ensure_mult,p){
return (function (){
var f__51657__auto__ = (function (){var switch__50648__auto__ = ((function (c__51656__auto___54300,mults,ensure_mult,p){
return (function (state_52700){
var state_val_52701 = (state_52700[(1)]);
if((state_val_52701 === (7))){
var inst_52696 = (state_52700[(2)]);
var state_52700__$1 = state_52700;
var statearr_52702_54301 = state_52700__$1;
(statearr_52702_54301[(2)] = inst_52696);

(statearr_52702_54301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52701 === (20))){
var state_52700__$1 = state_52700;
var statearr_52703_54302 = state_52700__$1;
(statearr_52703_54302[(2)] = null);

(statearr_52703_54302[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52701 === (1))){
var state_52700__$1 = state_52700;
var statearr_52704_54306 = state_52700__$1;
(statearr_52704_54306[(2)] = null);

(statearr_52704_54306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52701 === (24))){
var inst_52679 = (state_52700[(7)]);
var inst_52688 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_52679);
var state_52700__$1 = state_52700;
var statearr_52705_54311 = state_52700__$1;
(statearr_52705_54311[(2)] = inst_52688);

(statearr_52705_54311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52701 === (4))){
var inst_52631 = (state_52700[(8)]);
var inst_52631__$1 = (state_52700[(2)]);
var inst_52632 = (inst_52631__$1 == null);
var state_52700__$1 = (function (){var statearr_52706 = state_52700;
(statearr_52706[(8)] = inst_52631__$1);

return statearr_52706;
})();
if(cljs.core.truth_(inst_52632)){
var statearr_52707_54319 = state_52700__$1;
(statearr_52707_54319[(1)] = (5));

} else {
var statearr_52708_54320 = state_52700__$1;
(statearr_52708_54320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52701 === (15))){
var inst_52673 = (state_52700[(2)]);
var state_52700__$1 = state_52700;
var statearr_52709_54321 = state_52700__$1;
(statearr_52709_54321[(2)] = inst_52673);

(statearr_52709_54321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52701 === (21))){
var inst_52693 = (state_52700[(2)]);
var state_52700__$1 = (function (){var statearr_52710 = state_52700;
(statearr_52710[(9)] = inst_52693);

return statearr_52710;
})();
var statearr_52711_54322 = state_52700__$1;
(statearr_52711_54322[(2)] = null);

(statearr_52711_54322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52701 === (13))){
var inst_52655 = (state_52700[(10)]);
var inst_52657 = cljs.core.chunked_seq_QMARK_(inst_52655);
var state_52700__$1 = state_52700;
if(inst_52657){
var statearr_52712_54323 = state_52700__$1;
(statearr_52712_54323[(1)] = (16));

} else {
var statearr_52713_54324 = state_52700__$1;
(statearr_52713_54324[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52701 === (22))){
var inst_52685 = (state_52700[(2)]);
var state_52700__$1 = state_52700;
if(cljs.core.truth_(inst_52685)){
var statearr_52714_54325 = state_52700__$1;
(statearr_52714_54325[(1)] = (23));

} else {
var statearr_52715_54326 = state_52700__$1;
(statearr_52715_54326[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52701 === (6))){
var inst_52631 = (state_52700[(8)]);
var inst_52681 = (state_52700[(11)]);
var inst_52679 = (state_52700[(7)]);
var inst_52679__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_52631) : topic_fn.call(null,inst_52631));
var inst_52680 = cljs.core.deref(mults);
var inst_52681__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52680,inst_52679__$1);
var state_52700__$1 = (function (){var statearr_52716 = state_52700;
(statearr_52716[(11)] = inst_52681__$1);

(statearr_52716[(7)] = inst_52679__$1);

return statearr_52716;
})();
if(cljs.core.truth_(inst_52681__$1)){
var statearr_52717_54327 = state_52700__$1;
(statearr_52717_54327[(1)] = (19));

} else {
var statearr_52718_54328 = state_52700__$1;
(statearr_52718_54328[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52701 === (25))){
var inst_52690 = (state_52700[(2)]);
var state_52700__$1 = state_52700;
var statearr_52719_54335 = state_52700__$1;
(statearr_52719_54335[(2)] = inst_52690);

(statearr_52719_54335[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52701 === (17))){
var inst_52655 = (state_52700[(10)]);
var inst_52664 = cljs.core.first(inst_52655);
var inst_52665 = cljs.core.async.muxch_STAR_(inst_52664);
var inst_52666 = cljs.core.async.close_BANG_(inst_52665);
var inst_52667 = cljs.core.next(inst_52655);
var inst_52641 = inst_52667;
var inst_52642 = null;
var inst_52643 = (0);
var inst_52644 = (0);
var state_52700__$1 = (function (){var statearr_52720 = state_52700;
(statearr_52720[(12)] = inst_52643);

(statearr_52720[(13)] = inst_52644);

(statearr_52720[(14)] = inst_52666);

(statearr_52720[(15)] = inst_52641);

(statearr_52720[(16)] = inst_52642);

return statearr_52720;
})();
var statearr_52721_54336 = state_52700__$1;
(statearr_52721_54336[(2)] = null);

(statearr_52721_54336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52701 === (3))){
var inst_52698 = (state_52700[(2)]);
var state_52700__$1 = state_52700;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52700__$1,inst_52698);
} else {
if((state_val_52701 === (12))){
var inst_52675 = (state_52700[(2)]);
var state_52700__$1 = state_52700;
var statearr_52722_54337 = state_52700__$1;
(statearr_52722_54337[(2)] = inst_52675);

(statearr_52722_54337[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52701 === (2))){
var state_52700__$1 = state_52700;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52700__$1,(4),ch);
} else {
if((state_val_52701 === (23))){
var state_52700__$1 = state_52700;
var statearr_52723_54338 = state_52700__$1;
(statearr_52723_54338[(2)] = null);

(statearr_52723_54338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52701 === (19))){
var inst_52631 = (state_52700[(8)]);
var inst_52681 = (state_52700[(11)]);
var inst_52683 = cljs.core.async.muxch_STAR_(inst_52681);
var state_52700__$1 = state_52700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52700__$1,(22),inst_52683,inst_52631);
} else {
if((state_val_52701 === (11))){
var inst_52641 = (state_52700[(15)]);
var inst_52655 = (state_52700[(10)]);
var inst_52655__$1 = cljs.core.seq(inst_52641);
var state_52700__$1 = (function (){var statearr_52724 = state_52700;
(statearr_52724[(10)] = inst_52655__$1);

return statearr_52724;
})();
if(inst_52655__$1){
var statearr_52725_54346 = state_52700__$1;
(statearr_52725_54346[(1)] = (13));

} else {
var statearr_52726_54347 = state_52700__$1;
(statearr_52726_54347[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52701 === (9))){
var inst_52677 = (state_52700[(2)]);
var state_52700__$1 = state_52700;
var statearr_52727_54348 = state_52700__$1;
(statearr_52727_54348[(2)] = inst_52677);

(statearr_52727_54348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52701 === (5))){
var inst_52638 = cljs.core.deref(mults);
var inst_52639 = cljs.core.vals(inst_52638);
var inst_52640 = cljs.core.seq(inst_52639);
var inst_52641 = inst_52640;
var inst_52642 = null;
var inst_52643 = (0);
var inst_52644 = (0);
var state_52700__$1 = (function (){var statearr_52728 = state_52700;
(statearr_52728[(12)] = inst_52643);

(statearr_52728[(13)] = inst_52644);

(statearr_52728[(15)] = inst_52641);

(statearr_52728[(16)] = inst_52642);

return statearr_52728;
})();
var statearr_52729_54351 = state_52700__$1;
(statearr_52729_54351[(2)] = null);

(statearr_52729_54351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52701 === (14))){
var state_52700__$1 = state_52700;
var statearr_52733_54352 = state_52700__$1;
(statearr_52733_54352[(2)] = null);

(statearr_52733_54352[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52701 === (16))){
var inst_52655 = (state_52700[(10)]);
var inst_52659 = cljs.core.chunk_first(inst_52655);
var inst_52660 = cljs.core.chunk_rest(inst_52655);
var inst_52661 = cljs.core.count(inst_52659);
var inst_52641 = inst_52660;
var inst_52642 = inst_52659;
var inst_52643 = inst_52661;
var inst_52644 = (0);
var state_52700__$1 = (function (){var statearr_52734 = state_52700;
(statearr_52734[(12)] = inst_52643);

(statearr_52734[(13)] = inst_52644);

(statearr_52734[(15)] = inst_52641);

(statearr_52734[(16)] = inst_52642);

return statearr_52734;
})();
var statearr_52735_54353 = state_52700__$1;
(statearr_52735_54353[(2)] = null);

(statearr_52735_54353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52701 === (10))){
var inst_52643 = (state_52700[(12)]);
var inst_52644 = (state_52700[(13)]);
var inst_52641 = (state_52700[(15)]);
var inst_52642 = (state_52700[(16)]);
var inst_52649 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_52642,inst_52644);
var inst_52650 = cljs.core.async.muxch_STAR_(inst_52649);
var inst_52651 = cljs.core.async.close_BANG_(inst_52650);
var inst_52652 = (inst_52644 + (1));
var tmp52730 = inst_52643;
var tmp52731 = inst_52641;
var tmp52732 = inst_52642;
var inst_52641__$1 = tmp52731;
var inst_52642__$1 = tmp52732;
var inst_52643__$1 = tmp52730;
var inst_52644__$1 = inst_52652;
var state_52700__$1 = (function (){var statearr_52736 = state_52700;
(statearr_52736[(17)] = inst_52651);

(statearr_52736[(12)] = inst_52643__$1);

(statearr_52736[(13)] = inst_52644__$1);

(statearr_52736[(15)] = inst_52641__$1);

(statearr_52736[(16)] = inst_52642__$1);

return statearr_52736;
})();
var statearr_52737_54356 = state_52700__$1;
(statearr_52737_54356[(2)] = null);

(statearr_52737_54356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52701 === (18))){
var inst_52670 = (state_52700[(2)]);
var state_52700__$1 = state_52700;
var statearr_52738_54358 = state_52700__$1;
(statearr_52738_54358[(2)] = inst_52670);

(statearr_52738_54358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52701 === (8))){
var inst_52643 = (state_52700[(12)]);
var inst_52644 = (state_52700[(13)]);
var inst_52646 = (inst_52644 < inst_52643);
var inst_52647 = inst_52646;
var state_52700__$1 = state_52700;
if(cljs.core.truth_(inst_52647)){
var statearr_52739_54359 = state_52700__$1;
(statearr_52739_54359[(1)] = (10));

} else {
var statearr_52740_54360 = state_52700__$1;
(statearr_52740_54360[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51656__auto___54300,mults,ensure_mult,p))
;
return ((function (switch__50648__auto__,c__51656__auto___54300,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__50649__auto__ = null;
var cljs$core$async$state_machine__50649__auto____0 = (function (){
var statearr_52741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52741[(0)] = cljs$core$async$state_machine__50649__auto__);

(statearr_52741[(1)] = (1));

return statearr_52741;
});
var cljs$core$async$state_machine__50649__auto____1 = (function (state_52700){
while(true){
var ret_value__50650__auto__ = (function (){try{while(true){
var result__50651__auto__ = switch__50648__auto__(state_52700);
if(cljs.core.keyword_identical_QMARK_(result__50651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50651__auto__;
}
break;
}
}catch (e52742){if((e52742 instanceof Object)){
var ex__50652__auto__ = e52742;
var statearr_52743_54368 = state_52700;
(statearr_52743_54368[(5)] = ex__50652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52742;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54370 = state_52700;
state_52700 = G__54370;
continue;
} else {
return ret_value__50650__auto__;
}
break;
}
});
cljs$core$async$state_machine__50649__auto__ = function(state_52700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50649__auto____1.call(this,state_52700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50649__auto____0;
cljs$core$async$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50649__auto____1;
return cljs$core$async$state_machine__50649__auto__;
})()
;})(switch__50648__auto__,c__51656__auto___54300,mults,ensure_mult,p))
})();
var state__51658__auto__ = (function (){var statearr_52744 = (f__51657__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51657__auto__.cljs$core$IFn$_invoke$arity$0() : f__51657__auto__.call(null));
(statearr_52744[(6)] = c__51656__auto___54300);

return statearr_52744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51658__auto__);
});})(c__51656__auto___54300,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__52746 = arguments.length;
switch (G__52746) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__52748 = arguments.length;
switch (G__52748) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__52750 = arguments.length;
switch (G__52750) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__51656__auto___54375 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51656__auto___54375,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__51657__auto__ = (function (){var switch__50648__auto__ = ((function (c__51656__auto___54375,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_52789){
var state_val_52790 = (state_52789[(1)]);
if((state_val_52790 === (7))){
var state_52789__$1 = state_52789;
var statearr_52791_54376 = state_52789__$1;
(statearr_52791_54376[(2)] = null);

(statearr_52791_54376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52790 === (1))){
var state_52789__$1 = state_52789;
var statearr_52792_54377 = state_52789__$1;
(statearr_52792_54377[(2)] = null);

(statearr_52792_54377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52790 === (4))){
var inst_52753 = (state_52789[(7)]);
var inst_52755 = (inst_52753 < cnt);
var state_52789__$1 = state_52789;
if(cljs.core.truth_(inst_52755)){
var statearr_52793_54378 = state_52789__$1;
(statearr_52793_54378[(1)] = (6));

} else {
var statearr_52794_54379 = state_52789__$1;
(statearr_52794_54379[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52790 === (15))){
var inst_52785 = (state_52789[(2)]);
var state_52789__$1 = state_52789;
var statearr_52795_54380 = state_52789__$1;
(statearr_52795_54380[(2)] = inst_52785);

(statearr_52795_54380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52790 === (13))){
var inst_52778 = cljs.core.async.close_BANG_(out);
var state_52789__$1 = state_52789;
var statearr_52796_54381 = state_52789__$1;
(statearr_52796_54381[(2)] = inst_52778);

(statearr_52796_54381[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52790 === (6))){
var state_52789__$1 = state_52789;
var statearr_52797_54382 = state_52789__$1;
(statearr_52797_54382[(2)] = null);

(statearr_52797_54382[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52790 === (3))){
var inst_52787 = (state_52789[(2)]);
var state_52789__$1 = state_52789;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52789__$1,inst_52787);
} else {
if((state_val_52790 === (12))){
var inst_52775 = (state_52789[(8)]);
var inst_52775__$1 = (state_52789[(2)]);
var inst_52776 = cljs.core.some(cljs.core.nil_QMARK_,inst_52775__$1);
var state_52789__$1 = (function (){var statearr_52798 = state_52789;
(statearr_52798[(8)] = inst_52775__$1);

return statearr_52798;
})();
if(cljs.core.truth_(inst_52776)){
var statearr_52799_54383 = state_52789__$1;
(statearr_52799_54383[(1)] = (13));

} else {
var statearr_52800_54384 = state_52789__$1;
(statearr_52800_54384[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52790 === (2))){
var inst_52752 = cljs.core.reset_BANG_(dctr,cnt);
var inst_52753 = (0);
var state_52789__$1 = (function (){var statearr_52801 = state_52789;
(statearr_52801[(9)] = inst_52752);

(statearr_52801[(7)] = inst_52753);

return statearr_52801;
})();
var statearr_52802_54386 = state_52789__$1;
(statearr_52802_54386[(2)] = null);

(statearr_52802_54386[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52790 === (11))){
var inst_52753 = (state_52789[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_52789,(10),Object,null,(9));
var inst_52762 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_52753) : chs__$1.call(null,inst_52753));
var inst_52763 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_52753) : done.call(null,inst_52753));
var inst_52764 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_52762,inst_52763);
var state_52789__$1 = state_52789;
var statearr_52803_54388 = state_52789__$1;
(statearr_52803_54388[(2)] = inst_52764);


cljs.core.async.impl.ioc_helpers.process_exception(state_52789__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52790 === (9))){
var inst_52753 = (state_52789[(7)]);
var inst_52766 = (state_52789[(2)]);
var inst_52767 = (inst_52753 + (1));
var inst_52753__$1 = inst_52767;
var state_52789__$1 = (function (){var statearr_52804 = state_52789;
(statearr_52804[(10)] = inst_52766);

(statearr_52804[(7)] = inst_52753__$1);

return statearr_52804;
})();
var statearr_52805_54393 = state_52789__$1;
(statearr_52805_54393[(2)] = null);

(statearr_52805_54393[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52790 === (5))){
var inst_52773 = (state_52789[(2)]);
var state_52789__$1 = (function (){var statearr_52806 = state_52789;
(statearr_52806[(11)] = inst_52773);

return statearr_52806;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52789__$1,(12),dchan);
} else {
if((state_val_52790 === (14))){
var inst_52775 = (state_52789[(8)]);
var inst_52780 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_52775);
var state_52789__$1 = state_52789;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52789__$1,(16),out,inst_52780);
} else {
if((state_val_52790 === (16))){
var inst_52782 = (state_52789[(2)]);
var state_52789__$1 = (function (){var statearr_52807 = state_52789;
(statearr_52807[(12)] = inst_52782);

return statearr_52807;
})();
var statearr_52808_54397 = state_52789__$1;
(statearr_52808_54397[(2)] = null);

(statearr_52808_54397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52790 === (10))){
var inst_52757 = (state_52789[(2)]);
var inst_52758 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_52789__$1 = (function (){var statearr_52809 = state_52789;
(statearr_52809[(13)] = inst_52757);

return statearr_52809;
})();
var statearr_52810_54402 = state_52789__$1;
(statearr_52810_54402[(2)] = inst_52758);


cljs.core.async.impl.ioc_helpers.process_exception(state_52789__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52790 === (8))){
var inst_52771 = (state_52789[(2)]);
var state_52789__$1 = state_52789;
var statearr_52811_54403 = state_52789__$1;
(statearr_52811_54403[(2)] = inst_52771);

(statearr_52811_54403[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51656__auto___54375,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__50648__auto__,c__51656__auto___54375,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__50649__auto__ = null;
var cljs$core$async$state_machine__50649__auto____0 = (function (){
var statearr_52812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52812[(0)] = cljs$core$async$state_machine__50649__auto__);

(statearr_52812[(1)] = (1));

return statearr_52812;
});
var cljs$core$async$state_machine__50649__auto____1 = (function (state_52789){
while(true){
var ret_value__50650__auto__ = (function (){try{while(true){
var result__50651__auto__ = switch__50648__auto__(state_52789);
if(cljs.core.keyword_identical_QMARK_(result__50651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50651__auto__;
}
break;
}
}catch (e52813){if((e52813 instanceof Object)){
var ex__50652__auto__ = e52813;
var statearr_52814_54410 = state_52789;
(statearr_52814_54410[(5)] = ex__50652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52813;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54413 = state_52789;
state_52789 = G__54413;
continue;
} else {
return ret_value__50650__auto__;
}
break;
}
});
cljs$core$async$state_machine__50649__auto__ = function(state_52789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50649__auto____1.call(this,state_52789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50649__auto____0;
cljs$core$async$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50649__auto____1;
return cljs$core$async$state_machine__50649__auto__;
})()
;})(switch__50648__auto__,c__51656__auto___54375,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__51658__auto__ = (function (){var statearr_52815 = (f__51657__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51657__auto__.cljs$core$IFn$_invoke$arity$0() : f__51657__auto__.call(null));
(statearr_52815[(6)] = c__51656__auto___54375);

return statearr_52815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51658__auto__);
});})(c__51656__auto___54375,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__52818 = arguments.length;
switch (G__52818) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51656__auto___54421 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51656__auto___54421,out){
return (function (){
var f__51657__auto__ = (function (){var switch__50648__auto__ = ((function (c__51656__auto___54421,out){
return (function (state_52850){
var state_val_52851 = (state_52850[(1)]);
if((state_val_52851 === (7))){
var inst_52829 = (state_52850[(7)]);
var inst_52830 = (state_52850[(8)]);
var inst_52829__$1 = (state_52850[(2)]);
var inst_52830__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52829__$1,(0),null);
var inst_52831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52829__$1,(1),null);
var inst_52832 = (inst_52830__$1 == null);
var state_52850__$1 = (function (){var statearr_52852 = state_52850;
(statearr_52852[(9)] = inst_52831);

(statearr_52852[(7)] = inst_52829__$1);

(statearr_52852[(8)] = inst_52830__$1);

return statearr_52852;
})();
if(cljs.core.truth_(inst_52832)){
var statearr_52853_54423 = state_52850__$1;
(statearr_52853_54423[(1)] = (8));

} else {
var statearr_52854_54424 = state_52850__$1;
(statearr_52854_54424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52851 === (1))){
var inst_52819 = cljs.core.vec(chs);
var inst_52820 = inst_52819;
var state_52850__$1 = (function (){var statearr_52855 = state_52850;
(statearr_52855[(10)] = inst_52820);

return statearr_52855;
})();
var statearr_52856_54426 = state_52850__$1;
(statearr_52856_54426[(2)] = null);

(statearr_52856_54426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52851 === (4))){
var inst_52820 = (state_52850[(10)]);
var state_52850__$1 = state_52850;
return cljs.core.async.ioc_alts_BANG_(state_52850__$1,(7),inst_52820);
} else {
if((state_val_52851 === (6))){
var inst_52846 = (state_52850[(2)]);
var state_52850__$1 = state_52850;
var statearr_52857_54428 = state_52850__$1;
(statearr_52857_54428[(2)] = inst_52846);

(statearr_52857_54428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52851 === (3))){
var inst_52848 = (state_52850[(2)]);
var state_52850__$1 = state_52850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52850__$1,inst_52848);
} else {
if((state_val_52851 === (2))){
var inst_52820 = (state_52850[(10)]);
var inst_52822 = cljs.core.count(inst_52820);
var inst_52823 = (inst_52822 > (0));
var state_52850__$1 = state_52850;
if(cljs.core.truth_(inst_52823)){
var statearr_52859_54429 = state_52850__$1;
(statearr_52859_54429[(1)] = (4));

} else {
var statearr_52860_54430 = state_52850__$1;
(statearr_52860_54430[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52851 === (11))){
var inst_52820 = (state_52850[(10)]);
var inst_52839 = (state_52850[(2)]);
var tmp52858 = inst_52820;
var inst_52820__$1 = tmp52858;
var state_52850__$1 = (function (){var statearr_52861 = state_52850;
(statearr_52861[(10)] = inst_52820__$1);

(statearr_52861[(11)] = inst_52839);

return statearr_52861;
})();
var statearr_52862_54431 = state_52850__$1;
(statearr_52862_54431[(2)] = null);

(statearr_52862_54431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52851 === (9))){
var inst_52830 = (state_52850[(8)]);
var state_52850__$1 = state_52850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52850__$1,(11),out,inst_52830);
} else {
if((state_val_52851 === (5))){
var inst_52844 = cljs.core.async.close_BANG_(out);
var state_52850__$1 = state_52850;
var statearr_52863_54432 = state_52850__$1;
(statearr_52863_54432[(2)] = inst_52844);

(statearr_52863_54432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52851 === (10))){
var inst_52842 = (state_52850[(2)]);
var state_52850__$1 = state_52850;
var statearr_52864_54433 = state_52850__$1;
(statearr_52864_54433[(2)] = inst_52842);

(statearr_52864_54433[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52851 === (8))){
var inst_52820 = (state_52850[(10)]);
var inst_52831 = (state_52850[(9)]);
var inst_52829 = (state_52850[(7)]);
var inst_52830 = (state_52850[(8)]);
var inst_52834 = (function (){var cs = inst_52820;
var vec__52825 = inst_52829;
var v = inst_52830;
var c = inst_52831;
return ((function (cs,vec__52825,v,c,inst_52820,inst_52831,inst_52829,inst_52830,state_val_52851,c__51656__auto___54421,out){
return (function (p1__52816_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__52816_SHARP_);
});
;})(cs,vec__52825,v,c,inst_52820,inst_52831,inst_52829,inst_52830,state_val_52851,c__51656__auto___54421,out))
})();
var inst_52835 = cljs.core.filterv(inst_52834,inst_52820);
var inst_52820__$1 = inst_52835;
var state_52850__$1 = (function (){var statearr_52865 = state_52850;
(statearr_52865[(10)] = inst_52820__$1);

return statearr_52865;
})();
var statearr_52866_54436 = state_52850__$1;
(statearr_52866_54436[(2)] = null);

(statearr_52866_54436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__51656__auto___54421,out))
;
return ((function (switch__50648__auto__,c__51656__auto___54421,out){
return (function() {
var cljs$core$async$state_machine__50649__auto__ = null;
var cljs$core$async$state_machine__50649__auto____0 = (function (){
var statearr_52867 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52867[(0)] = cljs$core$async$state_machine__50649__auto__);

(statearr_52867[(1)] = (1));

return statearr_52867;
});
var cljs$core$async$state_machine__50649__auto____1 = (function (state_52850){
while(true){
var ret_value__50650__auto__ = (function (){try{while(true){
var result__50651__auto__ = switch__50648__auto__(state_52850);
if(cljs.core.keyword_identical_QMARK_(result__50651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50651__auto__;
}
break;
}
}catch (e52868){if((e52868 instanceof Object)){
var ex__50652__auto__ = e52868;
var statearr_52869_54437 = state_52850;
(statearr_52869_54437[(5)] = ex__50652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52868;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54438 = state_52850;
state_52850 = G__54438;
continue;
} else {
return ret_value__50650__auto__;
}
break;
}
});
cljs$core$async$state_machine__50649__auto__ = function(state_52850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50649__auto____1.call(this,state_52850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50649__auto____0;
cljs$core$async$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50649__auto____1;
return cljs$core$async$state_machine__50649__auto__;
})()
;})(switch__50648__auto__,c__51656__auto___54421,out))
})();
var state__51658__auto__ = (function (){var statearr_52870 = (f__51657__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51657__auto__.cljs$core$IFn$_invoke$arity$0() : f__51657__auto__.call(null));
(statearr_52870[(6)] = c__51656__auto___54421);

return statearr_52870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51658__auto__);
});})(c__51656__auto___54421,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__52872 = arguments.length;
switch (G__52872) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51656__auto___54440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51656__auto___54440,out){
return (function (){
var f__51657__auto__ = (function (){var switch__50648__auto__ = ((function (c__51656__auto___54440,out){
return (function (state_52896){
var state_val_52897 = (state_52896[(1)]);
if((state_val_52897 === (7))){
var inst_52878 = (state_52896[(7)]);
var inst_52878__$1 = (state_52896[(2)]);
var inst_52879 = (inst_52878__$1 == null);
var inst_52880 = cljs.core.not(inst_52879);
var state_52896__$1 = (function (){var statearr_52898 = state_52896;
(statearr_52898[(7)] = inst_52878__$1);

return statearr_52898;
})();
if(inst_52880){
var statearr_52899_54441 = state_52896__$1;
(statearr_52899_54441[(1)] = (8));

} else {
var statearr_52900_54442 = state_52896__$1;
(statearr_52900_54442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52897 === (1))){
var inst_52873 = (0);
var state_52896__$1 = (function (){var statearr_52901 = state_52896;
(statearr_52901[(8)] = inst_52873);

return statearr_52901;
})();
var statearr_52902_54443 = state_52896__$1;
(statearr_52902_54443[(2)] = null);

(statearr_52902_54443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52897 === (4))){
var state_52896__$1 = state_52896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52896__$1,(7),ch);
} else {
if((state_val_52897 === (6))){
var inst_52891 = (state_52896[(2)]);
var state_52896__$1 = state_52896;
var statearr_52903_54445 = state_52896__$1;
(statearr_52903_54445[(2)] = inst_52891);

(statearr_52903_54445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52897 === (3))){
var inst_52893 = (state_52896[(2)]);
var inst_52894 = cljs.core.async.close_BANG_(out);
var state_52896__$1 = (function (){var statearr_52904 = state_52896;
(statearr_52904[(9)] = inst_52893);

return statearr_52904;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52896__$1,inst_52894);
} else {
if((state_val_52897 === (2))){
var inst_52873 = (state_52896[(8)]);
var inst_52875 = (inst_52873 < n);
var state_52896__$1 = state_52896;
if(cljs.core.truth_(inst_52875)){
var statearr_52905_54446 = state_52896__$1;
(statearr_52905_54446[(1)] = (4));

} else {
var statearr_52906_54447 = state_52896__$1;
(statearr_52906_54447[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52897 === (11))){
var inst_52873 = (state_52896[(8)]);
var inst_52883 = (state_52896[(2)]);
var inst_52884 = (inst_52873 + (1));
var inst_52873__$1 = inst_52884;
var state_52896__$1 = (function (){var statearr_52907 = state_52896;
(statearr_52907[(10)] = inst_52883);

(statearr_52907[(8)] = inst_52873__$1);

return statearr_52907;
})();
var statearr_52908_54448 = state_52896__$1;
(statearr_52908_54448[(2)] = null);

(statearr_52908_54448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52897 === (9))){
var state_52896__$1 = state_52896;
var statearr_52909_54453 = state_52896__$1;
(statearr_52909_54453[(2)] = null);

(statearr_52909_54453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52897 === (5))){
var state_52896__$1 = state_52896;
var statearr_52910_54454 = state_52896__$1;
(statearr_52910_54454[(2)] = null);

(statearr_52910_54454[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52897 === (10))){
var inst_52888 = (state_52896[(2)]);
var state_52896__$1 = state_52896;
var statearr_52911_54455 = state_52896__$1;
(statearr_52911_54455[(2)] = inst_52888);

(statearr_52911_54455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52897 === (8))){
var inst_52878 = (state_52896[(7)]);
var state_52896__$1 = state_52896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52896__$1,(11),out,inst_52878);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__51656__auto___54440,out))
;
return ((function (switch__50648__auto__,c__51656__auto___54440,out){
return (function() {
var cljs$core$async$state_machine__50649__auto__ = null;
var cljs$core$async$state_machine__50649__auto____0 = (function (){
var statearr_52912 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52912[(0)] = cljs$core$async$state_machine__50649__auto__);

(statearr_52912[(1)] = (1));

return statearr_52912;
});
var cljs$core$async$state_machine__50649__auto____1 = (function (state_52896){
while(true){
var ret_value__50650__auto__ = (function (){try{while(true){
var result__50651__auto__ = switch__50648__auto__(state_52896);
if(cljs.core.keyword_identical_QMARK_(result__50651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50651__auto__;
}
break;
}
}catch (e52913){if((e52913 instanceof Object)){
var ex__50652__auto__ = e52913;
var statearr_52914_54457 = state_52896;
(statearr_52914_54457[(5)] = ex__50652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52913;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54458 = state_52896;
state_52896 = G__54458;
continue;
} else {
return ret_value__50650__auto__;
}
break;
}
});
cljs$core$async$state_machine__50649__auto__ = function(state_52896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50649__auto____1.call(this,state_52896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50649__auto____0;
cljs$core$async$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50649__auto____1;
return cljs$core$async$state_machine__50649__auto__;
})()
;})(switch__50648__auto__,c__51656__auto___54440,out))
})();
var state__51658__auto__ = (function (){var statearr_52915 = (f__51657__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51657__auto__.cljs$core$IFn$_invoke$arity$0() : f__51657__auto__.call(null));
(statearr_52915[(6)] = c__51656__auto___54440);

return statearr_52915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51658__auto__);
});})(c__51656__auto___54440,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52917 = (function (f,ch,meta52918){
this.f = f;
this.ch = ch;
this.meta52918 = meta52918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52919,meta52918__$1){
var self__ = this;
var _52919__$1 = this;
return (new cljs.core.async.t_cljs$core$async52917(self__.f,self__.ch,meta52918__$1));
});

cljs.core.async.t_cljs$core$async52917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52919){
var self__ = this;
var _52919__$1 = this;
return self__.meta52918;
});

cljs.core.async.t_cljs$core$async52917.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52917.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async52917.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async52917.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52917.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52920 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52920 = (function (f,ch,meta52918,_,fn1,meta52921){
this.f = f;
this.ch = ch;
this.meta52918 = meta52918;
this._ = _;
this.fn1 = fn1;
this.meta52921 = meta52921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_52922,meta52921__$1){
var self__ = this;
var _52922__$1 = this;
return (new cljs.core.async.t_cljs$core$async52920(self__.f,self__.ch,self__.meta52918,self__._,self__.fn1,meta52921__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async52920.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_52922){
var self__ = this;
var _52922__$1 = this;
return self__.meta52921;
});})(___$1))
;

cljs.core.async.t_cljs$core$async52920.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52920.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async52920.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async52920.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__52916_SHARP_){
var G__52930 = (((p1__52916_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__52916_SHARP_) : self__.f.call(null,p1__52916_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__52930) : f1.call(null,G__52930));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async52920.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52918","meta52918",-47097882,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async52917","cljs.core.async/t_cljs$core$async52917",-495775055,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta52921","meta52921",-1549858733,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async52920.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52920";

cljs.core.async.t_cljs$core$async52920.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52920");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52920.
 */
cljs.core.async.__GT_t_cljs$core$async52920 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52920(f__$1,ch__$1,meta52918__$1,___$2,fn1__$1,meta52921){
return (new cljs.core.async.t_cljs$core$async52920(f__$1,ch__$1,meta52918__$1,___$2,fn1__$1,meta52921));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async52920(self__.f,self__.ch,self__.meta52918,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__52935 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__52935) : self__.f.call(null,G__52935));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async52917.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52917.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async52917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52918","meta52918",-47097882,null)], null);
});

cljs.core.async.t_cljs$core$async52917.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52917";

cljs.core.async.t_cljs$core$async52917.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52917");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52917.
 */
cljs.core.async.__GT_t_cljs$core$async52917 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52917(f__$1,ch__$1,meta52918){
return (new cljs.core.async.t_cljs$core$async52917(f__$1,ch__$1,meta52918));
});

}

return (new cljs.core.async.t_cljs$core$async52917(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52961 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52961 = (function (f,ch,meta52962){
this.f = f;
this.ch = ch;
this.meta52962 = meta52962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52963,meta52962__$1){
var self__ = this;
var _52963__$1 = this;
return (new cljs.core.async.t_cljs$core$async52961(self__.f,self__.ch,meta52962__$1));
});

cljs.core.async.t_cljs$core$async52961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52963){
var self__ = this;
var _52963__$1 = this;
return self__.meta52962;
});

cljs.core.async.t_cljs$core$async52961.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52961.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async52961.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52961.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async52961.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52961.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async52961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52962","meta52962",-735571459,null)], null);
});

cljs.core.async.t_cljs$core$async52961.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52961";

cljs.core.async.t_cljs$core$async52961.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52961");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52961.
 */
cljs.core.async.__GT_t_cljs$core$async52961 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async52961(f__$1,ch__$1,meta52962){
return (new cljs.core.async.t_cljs$core$async52961(f__$1,ch__$1,meta52962));
});

}

return (new cljs.core.async.t_cljs$core$async52961(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52995 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52995 = (function (p,ch,meta52996){
this.p = p;
this.ch = ch;
this.meta52996 = meta52996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52997,meta52996__$1){
var self__ = this;
var _52997__$1 = this;
return (new cljs.core.async.t_cljs$core$async52995(self__.p,self__.ch,meta52996__$1));
});

cljs.core.async.t_cljs$core$async52995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52997){
var self__ = this;
var _52997__$1 = this;
return self__.meta52996;
});

cljs.core.async.t_cljs$core$async52995.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52995.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async52995.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async52995.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52995.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async52995.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52995.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async52995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52996","meta52996",415989970,null)], null);
});

cljs.core.async.t_cljs$core$async52995.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52995";

cljs.core.async.t_cljs$core$async52995.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52995");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52995.
 */
cljs.core.async.__GT_t_cljs$core$async52995 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async52995(p__$1,ch__$1,meta52996){
return (new cljs.core.async.t_cljs$core$async52995(p__$1,ch__$1,meta52996));
});

}

return (new cljs.core.async.t_cljs$core$async52995(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__53012 = arguments.length;
switch (G__53012) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51656__auto___54492 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51656__auto___54492,out){
return (function (){
var f__51657__auto__ = (function (){var switch__50648__auto__ = ((function (c__51656__auto___54492,out){
return (function (state_53042){
var state_val_53043 = (state_53042[(1)]);
if((state_val_53043 === (7))){
var inst_53037 = (state_53042[(2)]);
var state_53042__$1 = state_53042;
var statearr_53046_54493 = state_53042__$1;
(statearr_53046_54493[(2)] = inst_53037);

(statearr_53046_54493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53043 === (1))){
var state_53042__$1 = state_53042;
var statearr_53048_54498 = state_53042__$1;
(statearr_53048_54498[(2)] = null);

(statearr_53048_54498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53043 === (4))){
var inst_53022 = (state_53042[(7)]);
var inst_53022__$1 = (state_53042[(2)]);
var inst_53024 = (inst_53022__$1 == null);
var state_53042__$1 = (function (){var statearr_53050 = state_53042;
(statearr_53050[(7)] = inst_53022__$1);

return statearr_53050;
})();
if(cljs.core.truth_(inst_53024)){
var statearr_53052_54499 = state_53042__$1;
(statearr_53052_54499[(1)] = (5));

} else {
var statearr_53053_54500 = state_53042__$1;
(statearr_53053_54500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53043 === (6))){
var inst_53022 = (state_53042[(7)]);
var inst_53028 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_53022) : p.call(null,inst_53022));
var state_53042__$1 = state_53042;
if(cljs.core.truth_(inst_53028)){
var statearr_53059_54501 = state_53042__$1;
(statearr_53059_54501[(1)] = (8));

} else {
var statearr_53060_54502 = state_53042__$1;
(statearr_53060_54502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53043 === (3))){
var inst_53039 = (state_53042[(2)]);
var state_53042__$1 = state_53042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53042__$1,inst_53039);
} else {
if((state_val_53043 === (2))){
var state_53042__$1 = state_53042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53042__$1,(4),ch);
} else {
if((state_val_53043 === (11))){
var inst_53031 = (state_53042[(2)]);
var state_53042__$1 = state_53042;
var statearr_53067_54503 = state_53042__$1;
(statearr_53067_54503[(2)] = inst_53031);

(statearr_53067_54503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53043 === (9))){
var state_53042__$1 = state_53042;
var statearr_53068_54504 = state_53042__$1;
(statearr_53068_54504[(2)] = null);

(statearr_53068_54504[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53043 === (5))){
var inst_53026 = cljs.core.async.close_BANG_(out);
var state_53042__$1 = state_53042;
var statearr_53069_54509 = state_53042__$1;
(statearr_53069_54509[(2)] = inst_53026);

(statearr_53069_54509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53043 === (10))){
var inst_53034 = (state_53042[(2)]);
var state_53042__$1 = (function (){var statearr_53073 = state_53042;
(statearr_53073[(8)] = inst_53034);

return statearr_53073;
})();
var statearr_53074_54510 = state_53042__$1;
(statearr_53074_54510[(2)] = null);

(statearr_53074_54510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53043 === (8))){
var inst_53022 = (state_53042[(7)]);
var state_53042__$1 = state_53042;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53042__$1,(11),out,inst_53022);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__51656__auto___54492,out))
;
return ((function (switch__50648__auto__,c__51656__auto___54492,out){
return (function() {
var cljs$core$async$state_machine__50649__auto__ = null;
var cljs$core$async$state_machine__50649__auto____0 = (function (){
var statearr_53079 = [null,null,null,null,null,null,null,null,null];
(statearr_53079[(0)] = cljs$core$async$state_machine__50649__auto__);

(statearr_53079[(1)] = (1));

return statearr_53079;
});
var cljs$core$async$state_machine__50649__auto____1 = (function (state_53042){
while(true){
var ret_value__50650__auto__ = (function (){try{while(true){
var result__50651__auto__ = switch__50648__auto__(state_53042);
if(cljs.core.keyword_identical_QMARK_(result__50651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50651__auto__;
}
break;
}
}catch (e53083){if((e53083 instanceof Object)){
var ex__50652__auto__ = e53083;
var statearr_53084_54512 = state_53042;
(statearr_53084_54512[(5)] = ex__50652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53083;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54513 = state_53042;
state_53042 = G__54513;
continue;
} else {
return ret_value__50650__auto__;
}
break;
}
});
cljs$core$async$state_machine__50649__auto__ = function(state_53042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50649__auto____1.call(this,state_53042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50649__auto____0;
cljs$core$async$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50649__auto____1;
return cljs$core$async$state_machine__50649__auto__;
})()
;})(switch__50648__auto__,c__51656__auto___54492,out))
})();
var state__51658__auto__ = (function (){var statearr_53087 = (f__51657__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51657__auto__.cljs$core$IFn$_invoke$arity$0() : f__51657__auto__.call(null));
(statearr_53087[(6)] = c__51656__auto___54492);

return statearr_53087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51658__auto__);
});})(c__51656__auto___54492,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__53091 = arguments.length;
switch (G__53091) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__51656__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51656__auto__){
return (function (){
var f__51657__auto__ = (function (){var switch__50648__auto__ = ((function (c__51656__auto__){
return (function (state_53192){
var state_val_53193 = (state_53192[(1)]);
if((state_val_53193 === (7))){
var inst_53188 = (state_53192[(2)]);
var state_53192__$1 = state_53192;
var statearr_53209_54520 = state_53192__$1;
(statearr_53209_54520[(2)] = inst_53188);

(statearr_53209_54520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53193 === (20))){
var inst_53150 = (state_53192[(7)]);
var inst_53169 = (state_53192[(2)]);
var inst_53170 = cljs.core.next(inst_53150);
var inst_53126 = inst_53170;
var inst_53127 = null;
var inst_53128 = (0);
var inst_53129 = (0);
var state_53192__$1 = (function (){var statearr_53218 = state_53192;
(statearr_53218[(8)] = inst_53128);

(statearr_53218[(9)] = inst_53129);

(statearr_53218[(10)] = inst_53127);

(statearr_53218[(11)] = inst_53169);

(statearr_53218[(12)] = inst_53126);

return statearr_53218;
})();
var statearr_53219_54521 = state_53192__$1;
(statearr_53219_54521[(2)] = null);

(statearr_53219_54521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53193 === (1))){
var state_53192__$1 = state_53192;
var statearr_53224_54522 = state_53192__$1;
(statearr_53224_54522[(2)] = null);

(statearr_53224_54522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53193 === (4))){
var inst_53113 = (state_53192[(13)]);
var inst_53113__$1 = (state_53192[(2)]);
var inst_53115 = (inst_53113__$1 == null);
var state_53192__$1 = (function (){var statearr_53237 = state_53192;
(statearr_53237[(13)] = inst_53113__$1);

return statearr_53237;
})();
if(cljs.core.truth_(inst_53115)){
var statearr_53239_54523 = state_53192__$1;
(statearr_53239_54523[(1)] = (5));

} else {
var statearr_53244_54524 = state_53192__$1;
(statearr_53244_54524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53193 === (15))){
var state_53192__$1 = state_53192;
var statearr_53248_54525 = state_53192__$1;
(statearr_53248_54525[(2)] = null);

(statearr_53248_54525[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53193 === (21))){
var state_53192__$1 = state_53192;
var statearr_53249_54526 = state_53192__$1;
(statearr_53249_54526[(2)] = null);

(statearr_53249_54526[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53193 === (13))){
var inst_53128 = (state_53192[(8)]);
var inst_53129 = (state_53192[(9)]);
var inst_53127 = (state_53192[(10)]);
var inst_53126 = (state_53192[(12)]);
var inst_53143 = (state_53192[(2)]);
var inst_53146 = (inst_53129 + (1));
var tmp53245 = inst_53128;
var tmp53246 = inst_53127;
var tmp53247 = inst_53126;
var inst_53126__$1 = tmp53247;
var inst_53127__$1 = tmp53246;
var inst_53128__$1 = tmp53245;
var inst_53129__$1 = inst_53146;
var state_53192__$1 = (function (){var statearr_53254 = state_53192;
(statearr_53254[(8)] = inst_53128__$1);

(statearr_53254[(9)] = inst_53129__$1);

(statearr_53254[(14)] = inst_53143);

(statearr_53254[(10)] = inst_53127__$1);

(statearr_53254[(12)] = inst_53126__$1);

return statearr_53254;
})();
var statearr_53259_54528 = state_53192__$1;
(statearr_53259_54528[(2)] = null);

(statearr_53259_54528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53193 === (22))){
var state_53192__$1 = state_53192;
var statearr_53266_54529 = state_53192__$1;
(statearr_53266_54529[(2)] = null);

(statearr_53266_54529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53193 === (6))){
var inst_53113 = (state_53192[(13)]);
var inst_53124 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53113) : f.call(null,inst_53113));
var inst_53125 = cljs.core.seq(inst_53124);
var inst_53126 = inst_53125;
var inst_53127 = null;
var inst_53128 = (0);
var inst_53129 = (0);
var state_53192__$1 = (function (){var statearr_53282 = state_53192;
(statearr_53282[(8)] = inst_53128);

(statearr_53282[(9)] = inst_53129);

(statearr_53282[(10)] = inst_53127);

(statearr_53282[(12)] = inst_53126);

return statearr_53282;
})();
var statearr_53289_54533 = state_53192__$1;
(statearr_53289_54533[(2)] = null);

(statearr_53289_54533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53193 === (17))){
var inst_53150 = (state_53192[(7)]);
var inst_53158 = cljs.core.chunk_first(inst_53150);
var inst_53159 = cljs.core.chunk_rest(inst_53150);
var inst_53160 = cljs.core.count(inst_53158);
var inst_53126 = inst_53159;
var inst_53127 = inst_53158;
var inst_53128 = inst_53160;
var inst_53129 = (0);
var state_53192__$1 = (function (){var statearr_53293 = state_53192;
(statearr_53293[(8)] = inst_53128);

(statearr_53293[(9)] = inst_53129);

(statearr_53293[(10)] = inst_53127);

(statearr_53293[(12)] = inst_53126);

return statearr_53293;
})();
var statearr_53295_54538 = state_53192__$1;
(statearr_53295_54538[(2)] = null);

(statearr_53295_54538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53193 === (3))){
var inst_53190 = (state_53192[(2)]);
var state_53192__$1 = state_53192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53192__$1,inst_53190);
} else {
if((state_val_53193 === (12))){
var inst_53178 = (state_53192[(2)]);
var state_53192__$1 = state_53192;
var statearr_53304_54539 = state_53192__$1;
(statearr_53304_54539[(2)] = inst_53178);

(statearr_53304_54539[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53193 === (2))){
var state_53192__$1 = state_53192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53192__$1,(4),in$);
} else {
if((state_val_53193 === (23))){
var inst_53186 = (state_53192[(2)]);
var state_53192__$1 = state_53192;
var statearr_53311_54540 = state_53192__$1;
(statearr_53311_54540[(2)] = inst_53186);

(statearr_53311_54540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53193 === (19))){
var inst_53173 = (state_53192[(2)]);
var state_53192__$1 = state_53192;
var statearr_53313_54541 = state_53192__$1;
(statearr_53313_54541[(2)] = inst_53173);

(statearr_53313_54541[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53193 === (11))){
var inst_53150 = (state_53192[(7)]);
var inst_53126 = (state_53192[(12)]);
var inst_53150__$1 = cljs.core.seq(inst_53126);
var state_53192__$1 = (function (){var statearr_53318 = state_53192;
(statearr_53318[(7)] = inst_53150__$1);

return statearr_53318;
})();
if(inst_53150__$1){
var statearr_53320_54542 = state_53192__$1;
(statearr_53320_54542[(1)] = (14));

} else {
var statearr_53322_54543 = state_53192__$1;
(statearr_53322_54543[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53193 === (9))){
var inst_53180 = (state_53192[(2)]);
var inst_53181 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_53192__$1 = (function (){var statearr_53332 = state_53192;
(statearr_53332[(15)] = inst_53180);

return statearr_53332;
})();
if(cljs.core.truth_(inst_53181)){
var statearr_53337_54545 = state_53192__$1;
(statearr_53337_54545[(1)] = (21));

} else {
var statearr_53340_54546 = state_53192__$1;
(statearr_53340_54546[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53193 === (5))){
var inst_53117 = cljs.core.async.close_BANG_(out);
var state_53192__$1 = state_53192;
var statearr_53341_54547 = state_53192__$1;
(statearr_53341_54547[(2)] = inst_53117);

(statearr_53341_54547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53193 === (14))){
var inst_53150 = (state_53192[(7)]);
var inst_53156 = cljs.core.chunked_seq_QMARK_(inst_53150);
var state_53192__$1 = state_53192;
if(inst_53156){
var statearr_53346_54548 = state_53192__$1;
(statearr_53346_54548[(1)] = (17));

} else {
var statearr_53347_54550 = state_53192__$1;
(statearr_53347_54550[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53193 === (16))){
var inst_53176 = (state_53192[(2)]);
var state_53192__$1 = state_53192;
var statearr_53348_54551 = state_53192__$1;
(statearr_53348_54551[(2)] = inst_53176);

(statearr_53348_54551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53193 === (10))){
var inst_53129 = (state_53192[(9)]);
var inst_53127 = (state_53192[(10)]);
var inst_53138 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_53127,inst_53129);
var state_53192__$1 = state_53192;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53192__$1,(13),out,inst_53138);
} else {
if((state_val_53193 === (18))){
var inst_53150 = (state_53192[(7)]);
var inst_53163 = cljs.core.first(inst_53150);
var state_53192__$1 = state_53192;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53192__$1,(20),out,inst_53163);
} else {
if((state_val_53193 === (8))){
var inst_53128 = (state_53192[(8)]);
var inst_53129 = (state_53192[(9)]);
var inst_53131 = (inst_53129 < inst_53128);
var inst_53132 = inst_53131;
var state_53192__$1 = state_53192;
if(cljs.core.truth_(inst_53132)){
var statearr_53350_54558 = state_53192__$1;
(statearr_53350_54558[(1)] = (10));

} else {
var statearr_53351_54559 = state_53192__$1;
(statearr_53351_54559[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51656__auto__))
;
return ((function (switch__50648__auto__,c__51656__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__50649__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__50649__auto____0 = (function (){
var statearr_53363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53363[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__50649__auto__);

(statearr_53363[(1)] = (1));

return statearr_53363;
});
var cljs$core$async$mapcat_STAR__$_state_machine__50649__auto____1 = (function (state_53192){
while(true){
var ret_value__50650__auto__ = (function (){try{while(true){
var result__50651__auto__ = switch__50648__auto__(state_53192);
if(cljs.core.keyword_identical_QMARK_(result__50651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50651__auto__;
}
break;
}
}catch (e53370){if((e53370 instanceof Object)){
var ex__50652__auto__ = e53370;
var statearr_53372_54561 = state_53192;
(statearr_53372_54561[(5)] = ex__50652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53370;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54563 = state_53192;
state_53192 = G__54563;
continue;
} else {
return ret_value__50650__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__50649__auto__ = function(state_53192){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__50649__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__50649__auto____1.call(this,state_53192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__50649__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__50649__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__50649__auto__;
})()
;})(switch__50648__auto__,c__51656__auto__))
})();
var state__51658__auto__ = (function (){var statearr_53375 = (f__51657__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51657__auto__.cljs$core$IFn$_invoke$arity$0() : f__51657__auto__.call(null));
(statearr_53375[(6)] = c__51656__auto__);

return statearr_53375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51658__auto__);
});})(c__51656__auto__))
);

return c__51656__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__53378 = arguments.length;
switch (G__53378) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__53383 = arguments.length;
switch (G__53383) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__53387 = arguments.length;
switch (G__53387) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51656__auto___54571 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51656__auto___54571,out){
return (function (){
var f__51657__auto__ = (function (){var switch__50648__auto__ = ((function (c__51656__auto___54571,out){
return (function (state_53411){
var state_val_53412 = (state_53411[(1)]);
if((state_val_53412 === (7))){
var inst_53406 = (state_53411[(2)]);
var state_53411__$1 = state_53411;
var statearr_53425_54572 = state_53411__$1;
(statearr_53425_54572[(2)] = inst_53406);

(statearr_53425_54572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53412 === (1))){
var inst_53388 = null;
var state_53411__$1 = (function (){var statearr_53427 = state_53411;
(statearr_53427[(7)] = inst_53388);

return statearr_53427;
})();
var statearr_53432_54573 = state_53411__$1;
(statearr_53432_54573[(2)] = null);

(statearr_53432_54573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53412 === (4))){
var inst_53391 = (state_53411[(8)]);
var inst_53391__$1 = (state_53411[(2)]);
var inst_53392 = (inst_53391__$1 == null);
var inst_53393 = cljs.core.not(inst_53392);
var state_53411__$1 = (function (){var statearr_53437 = state_53411;
(statearr_53437[(8)] = inst_53391__$1);

return statearr_53437;
})();
if(inst_53393){
var statearr_53438_54575 = state_53411__$1;
(statearr_53438_54575[(1)] = (5));

} else {
var statearr_53440_54576 = state_53411__$1;
(statearr_53440_54576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53412 === (6))){
var state_53411__$1 = state_53411;
var statearr_53446_54577 = state_53411__$1;
(statearr_53446_54577[(2)] = null);

(statearr_53446_54577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53412 === (3))){
var inst_53408 = (state_53411[(2)]);
var inst_53409 = cljs.core.async.close_BANG_(out);
var state_53411__$1 = (function (){var statearr_53451 = state_53411;
(statearr_53451[(9)] = inst_53408);

return statearr_53451;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53411__$1,inst_53409);
} else {
if((state_val_53412 === (2))){
var state_53411__$1 = state_53411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53411__$1,(4),ch);
} else {
if((state_val_53412 === (11))){
var inst_53391 = (state_53411[(8)]);
var inst_53400 = (state_53411[(2)]);
var inst_53388 = inst_53391;
var state_53411__$1 = (function (){var statearr_53452 = state_53411;
(statearr_53452[(10)] = inst_53400);

(statearr_53452[(7)] = inst_53388);

return statearr_53452;
})();
var statearr_53453_54578 = state_53411__$1;
(statearr_53453_54578[(2)] = null);

(statearr_53453_54578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53412 === (9))){
var inst_53391 = (state_53411[(8)]);
var state_53411__$1 = state_53411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53411__$1,(11),out,inst_53391);
} else {
if((state_val_53412 === (5))){
var inst_53391 = (state_53411[(8)]);
var inst_53388 = (state_53411[(7)]);
var inst_53395 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53391,inst_53388);
var state_53411__$1 = state_53411;
if(inst_53395){
var statearr_53455_54579 = state_53411__$1;
(statearr_53455_54579[(1)] = (8));

} else {
var statearr_53456_54580 = state_53411__$1;
(statearr_53456_54580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53412 === (10))){
var inst_53403 = (state_53411[(2)]);
var state_53411__$1 = state_53411;
var statearr_53457_54581 = state_53411__$1;
(statearr_53457_54581[(2)] = inst_53403);

(statearr_53457_54581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53412 === (8))){
var inst_53388 = (state_53411[(7)]);
var tmp53454 = inst_53388;
var inst_53388__$1 = tmp53454;
var state_53411__$1 = (function (){var statearr_53458 = state_53411;
(statearr_53458[(7)] = inst_53388__$1);

return statearr_53458;
})();
var statearr_53459_54587 = state_53411__$1;
(statearr_53459_54587[(2)] = null);

(statearr_53459_54587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__51656__auto___54571,out))
;
return ((function (switch__50648__auto__,c__51656__auto___54571,out){
return (function() {
var cljs$core$async$state_machine__50649__auto__ = null;
var cljs$core$async$state_machine__50649__auto____0 = (function (){
var statearr_53460 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53460[(0)] = cljs$core$async$state_machine__50649__auto__);

(statearr_53460[(1)] = (1));

return statearr_53460;
});
var cljs$core$async$state_machine__50649__auto____1 = (function (state_53411){
while(true){
var ret_value__50650__auto__ = (function (){try{while(true){
var result__50651__auto__ = switch__50648__auto__(state_53411);
if(cljs.core.keyword_identical_QMARK_(result__50651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50651__auto__;
}
break;
}
}catch (e53461){if((e53461 instanceof Object)){
var ex__50652__auto__ = e53461;
var statearr_53462_54590 = state_53411;
(statearr_53462_54590[(5)] = ex__50652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53461;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54591 = state_53411;
state_53411 = G__54591;
continue;
} else {
return ret_value__50650__auto__;
}
break;
}
});
cljs$core$async$state_machine__50649__auto__ = function(state_53411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50649__auto____1.call(this,state_53411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50649__auto____0;
cljs$core$async$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50649__auto____1;
return cljs$core$async$state_machine__50649__auto__;
})()
;})(switch__50648__auto__,c__51656__auto___54571,out))
})();
var state__51658__auto__ = (function (){var statearr_53463 = (f__51657__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51657__auto__.cljs$core$IFn$_invoke$arity$0() : f__51657__auto__.call(null));
(statearr_53463[(6)] = c__51656__auto___54571);

return statearr_53463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51658__auto__);
});})(c__51656__auto___54571,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__53469 = arguments.length;
switch (G__53469) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51656__auto___54593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51656__auto___54593,out){
return (function (){
var f__51657__auto__ = (function (){var switch__50648__auto__ = ((function (c__51656__auto___54593,out){
return (function (state_53507){
var state_val_53508 = (state_53507[(1)]);
if((state_val_53508 === (7))){
var inst_53503 = (state_53507[(2)]);
var state_53507__$1 = state_53507;
var statearr_53509_54595 = state_53507__$1;
(statearr_53509_54595[(2)] = inst_53503);

(statearr_53509_54595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (1))){
var inst_53470 = (new Array(n));
var inst_53471 = inst_53470;
var inst_53472 = (0);
var state_53507__$1 = (function (){var statearr_53510 = state_53507;
(statearr_53510[(7)] = inst_53472);

(statearr_53510[(8)] = inst_53471);

return statearr_53510;
})();
var statearr_53511_54596 = state_53507__$1;
(statearr_53511_54596[(2)] = null);

(statearr_53511_54596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (4))){
var inst_53475 = (state_53507[(9)]);
var inst_53475__$1 = (state_53507[(2)]);
var inst_53476 = (inst_53475__$1 == null);
var inst_53477 = cljs.core.not(inst_53476);
var state_53507__$1 = (function (){var statearr_53512 = state_53507;
(statearr_53512[(9)] = inst_53475__$1);

return statearr_53512;
})();
if(inst_53477){
var statearr_53513_54597 = state_53507__$1;
(statearr_53513_54597[(1)] = (5));

} else {
var statearr_53514_54598 = state_53507__$1;
(statearr_53514_54598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (15))){
var inst_53497 = (state_53507[(2)]);
var state_53507__$1 = state_53507;
var statearr_53515_54600 = state_53507__$1;
(statearr_53515_54600[(2)] = inst_53497);

(statearr_53515_54600[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (13))){
var state_53507__$1 = state_53507;
var statearr_53516_54601 = state_53507__$1;
(statearr_53516_54601[(2)] = null);

(statearr_53516_54601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (6))){
var inst_53472 = (state_53507[(7)]);
var inst_53493 = (inst_53472 > (0));
var state_53507__$1 = state_53507;
if(cljs.core.truth_(inst_53493)){
var statearr_53517_54602 = state_53507__$1;
(statearr_53517_54602[(1)] = (12));

} else {
var statearr_53518_54603 = state_53507__$1;
(statearr_53518_54603[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (3))){
var inst_53505 = (state_53507[(2)]);
var state_53507__$1 = state_53507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53507__$1,inst_53505);
} else {
if((state_val_53508 === (12))){
var inst_53471 = (state_53507[(8)]);
var inst_53495 = cljs.core.vec(inst_53471);
var state_53507__$1 = state_53507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53507__$1,(15),out,inst_53495);
} else {
if((state_val_53508 === (2))){
var state_53507__$1 = state_53507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53507__$1,(4),ch);
} else {
if((state_val_53508 === (11))){
var inst_53487 = (state_53507[(2)]);
var inst_53488 = (new Array(n));
var inst_53471 = inst_53488;
var inst_53472 = (0);
var state_53507__$1 = (function (){var statearr_53519 = state_53507;
(statearr_53519[(7)] = inst_53472);

(statearr_53519[(10)] = inst_53487);

(statearr_53519[(8)] = inst_53471);

return statearr_53519;
})();
var statearr_53520_54604 = state_53507__$1;
(statearr_53520_54604[(2)] = null);

(statearr_53520_54604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (9))){
var inst_53471 = (state_53507[(8)]);
var inst_53485 = cljs.core.vec(inst_53471);
var state_53507__$1 = state_53507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53507__$1,(11),out,inst_53485);
} else {
if((state_val_53508 === (5))){
var inst_53480 = (state_53507[(11)]);
var inst_53475 = (state_53507[(9)]);
var inst_53472 = (state_53507[(7)]);
var inst_53471 = (state_53507[(8)]);
var inst_53479 = (inst_53471[inst_53472] = inst_53475);
var inst_53480__$1 = (inst_53472 + (1));
var inst_53481 = (inst_53480__$1 < n);
var state_53507__$1 = (function (){var statearr_53521 = state_53507;
(statearr_53521[(11)] = inst_53480__$1);

(statearr_53521[(12)] = inst_53479);

return statearr_53521;
})();
if(cljs.core.truth_(inst_53481)){
var statearr_53522_54605 = state_53507__$1;
(statearr_53522_54605[(1)] = (8));

} else {
var statearr_53523_54606 = state_53507__$1;
(statearr_53523_54606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (14))){
var inst_53500 = (state_53507[(2)]);
var inst_53501 = cljs.core.async.close_BANG_(out);
var state_53507__$1 = (function (){var statearr_53525 = state_53507;
(statearr_53525[(13)] = inst_53500);

return statearr_53525;
})();
var statearr_53526_54607 = state_53507__$1;
(statearr_53526_54607[(2)] = inst_53501);

(statearr_53526_54607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (10))){
var inst_53491 = (state_53507[(2)]);
var state_53507__$1 = state_53507;
var statearr_53527_54612 = state_53507__$1;
(statearr_53527_54612[(2)] = inst_53491);

(statearr_53527_54612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (8))){
var inst_53480 = (state_53507[(11)]);
var inst_53471 = (state_53507[(8)]);
var tmp53524 = inst_53471;
var inst_53471__$1 = tmp53524;
var inst_53472 = inst_53480;
var state_53507__$1 = (function (){var statearr_53528 = state_53507;
(statearr_53528[(7)] = inst_53472);

(statearr_53528[(8)] = inst_53471__$1);

return statearr_53528;
})();
var statearr_53529_54617 = state_53507__$1;
(statearr_53529_54617[(2)] = null);

(statearr_53529_54617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51656__auto___54593,out))
;
return ((function (switch__50648__auto__,c__51656__auto___54593,out){
return (function() {
var cljs$core$async$state_machine__50649__auto__ = null;
var cljs$core$async$state_machine__50649__auto____0 = (function (){
var statearr_53530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53530[(0)] = cljs$core$async$state_machine__50649__auto__);

(statearr_53530[(1)] = (1));

return statearr_53530;
});
var cljs$core$async$state_machine__50649__auto____1 = (function (state_53507){
while(true){
var ret_value__50650__auto__ = (function (){try{while(true){
var result__50651__auto__ = switch__50648__auto__(state_53507);
if(cljs.core.keyword_identical_QMARK_(result__50651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50651__auto__;
}
break;
}
}catch (e53531){if((e53531 instanceof Object)){
var ex__50652__auto__ = e53531;
var statearr_53532_54619 = state_53507;
(statearr_53532_54619[(5)] = ex__50652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53531;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54621 = state_53507;
state_53507 = G__54621;
continue;
} else {
return ret_value__50650__auto__;
}
break;
}
});
cljs$core$async$state_machine__50649__auto__ = function(state_53507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50649__auto____1.call(this,state_53507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50649__auto____0;
cljs$core$async$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50649__auto____1;
return cljs$core$async$state_machine__50649__auto__;
})()
;})(switch__50648__auto__,c__51656__auto___54593,out))
})();
var state__51658__auto__ = (function (){var statearr_53533 = (f__51657__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51657__auto__.cljs$core$IFn$_invoke$arity$0() : f__51657__auto__.call(null));
(statearr_53533[(6)] = c__51656__auto___54593);

return statearr_53533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51658__auto__);
});})(c__51656__auto___54593,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__53535 = arguments.length;
switch (G__53535) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51656__auto___54623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51656__auto___54623,out){
return (function (){
var f__51657__auto__ = (function (){var switch__50648__auto__ = ((function (c__51656__auto___54623,out){
return (function (state_53577){
var state_val_53578 = (state_53577[(1)]);
if((state_val_53578 === (7))){
var inst_53573 = (state_53577[(2)]);
var state_53577__$1 = state_53577;
var statearr_53579_54624 = state_53577__$1;
(statearr_53579_54624[(2)] = inst_53573);

(statearr_53579_54624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53578 === (1))){
var inst_53536 = [];
var inst_53537 = inst_53536;
var inst_53538 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_53577__$1 = (function (){var statearr_53580 = state_53577;
(statearr_53580[(7)] = inst_53538);

(statearr_53580[(8)] = inst_53537);

return statearr_53580;
})();
var statearr_53581_54625 = state_53577__$1;
(statearr_53581_54625[(2)] = null);

(statearr_53581_54625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53578 === (4))){
var inst_53541 = (state_53577[(9)]);
var inst_53541__$1 = (state_53577[(2)]);
var inst_53542 = (inst_53541__$1 == null);
var inst_53543 = cljs.core.not(inst_53542);
var state_53577__$1 = (function (){var statearr_53582 = state_53577;
(statearr_53582[(9)] = inst_53541__$1);

return statearr_53582;
})();
if(inst_53543){
var statearr_53583_54628 = state_53577__$1;
(statearr_53583_54628[(1)] = (5));

} else {
var statearr_53584_54629 = state_53577__$1;
(statearr_53584_54629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53578 === (15))){
var inst_53567 = (state_53577[(2)]);
var state_53577__$1 = state_53577;
var statearr_53585_54630 = state_53577__$1;
(statearr_53585_54630[(2)] = inst_53567);

(statearr_53585_54630[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53578 === (13))){
var state_53577__$1 = state_53577;
var statearr_53586_54633 = state_53577__$1;
(statearr_53586_54633[(2)] = null);

(statearr_53586_54633[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53578 === (6))){
var inst_53537 = (state_53577[(8)]);
var inst_53562 = inst_53537.length;
var inst_53563 = (inst_53562 > (0));
var state_53577__$1 = state_53577;
if(cljs.core.truth_(inst_53563)){
var statearr_53587_54634 = state_53577__$1;
(statearr_53587_54634[(1)] = (12));

} else {
var statearr_53588_54635 = state_53577__$1;
(statearr_53588_54635[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53578 === (3))){
var inst_53575 = (state_53577[(2)]);
var state_53577__$1 = state_53577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53577__$1,inst_53575);
} else {
if((state_val_53578 === (12))){
var inst_53537 = (state_53577[(8)]);
var inst_53565 = cljs.core.vec(inst_53537);
var state_53577__$1 = state_53577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53577__$1,(15),out,inst_53565);
} else {
if((state_val_53578 === (2))){
var state_53577__$1 = state_53577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53577__$1,(4),ch);
} else {
if((state_val_53578 === (11))){
var inst_53541 = (state_53577[(9)]);
var inst_53545 = (state_53577[(10)]);
var inst_53555 = (state_53577[(2)]);
var inst_53556 = [];
var inst_53557 = inst_53556.push(inst_53541);
var inst_53537 = inst_53556;
var inst_53538 = inst_53545;
var state_53577__$1 = (function (){var statearr_53589 = state_53577;
(statearr_53589[(7)] = inst_53538);

(statearr_53589[(8)] = inst_53537);

(statearr_53589[(11)] = inst_53555);

(statearr_53589[(12)] = inst_53557);

return statearr_53589;
})();
var statearr_53590_54636 = state_53577__$1;
(statearr_53590_54636[(2)] = null);

(statearr_53590_54636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53578 === (9))){
var inst_53537 = (state_53577[(8)]);
var inst_53553 = cljs.core.vec(inst_53537);
var state_53577__$1 = state_53577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53577__$1,(11),out,inst_53553);
} else {
if((state_val_53578 === (5))){
var inst_53541 = (state_53577[(9)]);
var inst_53538 = (state_53577[(7)]);
var inst_53545 = (state_53577[(10)]);
var inst_53545__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53541) : f.call(null,inst_53541));
var inst_53546 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53545__$1,inst_53538);
var inst_53547 = cljs.core.keyword_identical_QMARK_(inst_53538,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_53548 = ((inst_53546) || (inst_53547));
var state_53577__$1 = (function (){var statearr_53591 = state_53577;
(statearr_53591[(10)] = inst_53545__$1);

return statearr_53591;
})();
if(cljs.core.truth_(inst_53548)){
var statearr_53592_54638 = state_53577__$1;
(statearr_53592_54638[(1)] = (8));

} else {
var statearr_53593_54639 = state_53577__$1;
(statearr_53593_54639[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53578 === (14))){
var inst_53570 = (state_53577[(2)]);
var inst_53571 = cljs.core.async.close_BANG_(out);
var state_53577__$1 = (function (){var statearr_53595 = state_53577;
(statearr_53595[(13)] = inst_53570);

return statearr_53595;
})();
var statearr_53596_54640 = state_53577__$1;
(statearr_53596_54640[(2)] = inst_53571);

(statearr_53596_54640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53578 === (10))){
var inst_53560 = (state_53577[(2)]);
var state_53577__$1 = state_53577;
var statearr_53597_54641 = state_53577__$1;
(statearr_53597_54641[(2)] = inst_53560);

(statearr_53597_54641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53578 === (8))){
var inst_53541 = (state_53577[(9)]);
var inst_53545 = (state_53577[(10)]);
var inst_53537 = (state_53577[(8)]);
var inst_53550 = inst_53537.push(inst_53541);
var tmp53594 = inst_53537;
var inst_53537__$1 = tmp53594;
var inst_53538 = inst_53545;
var state_53577__$1 = (function (){var statearr_53598 = state_53577;
(statearr_53598[(14)] = inst_53550);

(statearr_53598[(7)] = inst_53538);

(statearr_53598[(8)] = inst_53537__$1);

return statearr_53598;
})();
var statearr_53599_54643 = state_53577__$1;
(statearr_53599_54643[(2)] = null);

(statearr_53599_54643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51656__auto___54623,out))
;
return ((function (switch__50648__auto__,c__51656__auto___54623,out){
return (function() {
var cljs$core$async$state_machine__50649__auto__ = null;
var cljs$core$async$state_machine__50649__auto____0 = (function (){
var statearr_53600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53600[(0)] = cljs$core$async$state_machine__50649__auto__);

(statearr_53600[(1)] = (1));

return statearr_53600;
});
var cljs$core$async$state_machine__50649__auto____1 = (function (state_53577){
while(true){
var ret_value__50650__auto__ = (function (){try{while(true){
var result__50651__auto__ = switch__50648__auto__(state_53577);
if(cljs.core.keyword_identical_QMARK_(result__50651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50651__auto__;
}
break;
}
}catch (e53601){if((e53601 instanceof Object)){
var ex__50652__auto__ = e53601;
var statearr_53602_54645 = state_53577;
(statearr_53602_54645[(5)] = ex__50652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53601;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54649 = state_53577;
state_53577 = G__54649;
continue;
} else {
return ret_value__50650__auto__;
}
break;
}
});
cljs$core$async$state_machine__50649__auto__ = function(state_53577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50649__auto____1.call(this,state_53577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50649__auto____0;
cljs$core$async$state_machine__50649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50649__auto____1;
return cljs$core$async$state_machine__50649__auto__;
})()
;})(switch__50648__auto__,c__51656__auto___54623,out))
})();
var state__51658__auto__ = (function (){var statearr_53603 = (f__51657__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51657__auto__.cljs$core$IFn$_invoke$arity$0() : f__51657__auto__.call(null));
(statearr_53603[(6)] = c__51656__auto___54623);

return statearr_53603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51658__auto__);
});})(c__51656__auto___54623,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
