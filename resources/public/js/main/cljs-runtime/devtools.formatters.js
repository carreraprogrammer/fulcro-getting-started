goog.provide('devtools.formatters');
goog.require('cljs.core');
goog.require('goog.labs.userAgent.browser');
goog.require('devtools.prefs');
goog.require('devtools.util');
goog.require('devtools.context');
goog.require('devtools.formatters.core');
devtools.formatters._STAR_installed_STAR_ = false;
devtools.formatters._STAR_sanitizer_enabled_STAR_ = true;
devtools.formatters._STAR_monitor_enabled_STAR_ = false;
devtools.formatters.obsolete_formatter_key = "devtoolsFormatter";
devtools.formatters.available_QMARK_ = (function devtools$formatters$available_QMARK_(){
var or__4131__auto__ = (devtools.util.in_node_context_QMARK_.cljs$core$IFn$_invoke$arity$0 ? devtools.util.in_node_context_QMARK_.cljs$core$IFn$_invoke$arity$0() : devtools.util.in_node_context_QMARK_.call(null));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = goog.labs.userAgent.browser.isChrome();
if(cljs.core.truth_(and__4120__auto__)){
return goog.labs.userAgent.browser.isVersionOrHigher((47));
} else {
return and__4120__auto__;
}
}
});

/**
* @constructor
*/
devtools.formatters.CLJSDevtoolsFormatter = (function (){
});

devtools.formatters.CLJSDevtoolsFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

devtools.formatters.CLJSDevtoolsFormatter.cljs$lang$type = true;

devtools.formatters.CLJSDevtoolsFormatter.cljs$lang$ctorStr = "devtools.formatters/CLJSDevtoolsFormatter";

devtools.formatters.CLJSDevtoolsFormatter.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"devtools.formatters/CLJSDevtoolsFormatter");
});

/**
 * Positional factory function for devtools.formatters/CLJSDevtoolsFormatter.
 */
devtools.formatters.__GT_CLJSDevtoolsFormatter = (function devtools$formatters$__GT_CLJSDevtoolsFormatter(){
return (new devtools.formatters.CLJSDevtoolsFormatter());
});

devtools.formatters.find_fn_in_debug_ns = (function devtools$formatters$find_fn_in_debug_ns(fn_name){
try{return ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]["debug"][fn_name]);
}catch (e44036){var _ = e44036;
return null;
}});
devtools.formatters.monitor_api_call_if_avail = (function devtools$formatters$monitor_api_call_if_avail(name,api_call,args){
var temp__5802__auto__ = devtools.formatters.find_fn_in_debug_ns("monitor_api_call");
if(cljs.core.truth_(temp__5802__auto__)){
var monitor_api_call = temp__5802__auto__;
return (monitor_api_call.cljs$core$IFn$_invoke$arity$3 ? monitor_api_call.cljs$core$IFn$_invoke$arity$3(name,api_call,args) : monitor_api_call.call(null,name,api_call,args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_call,args);
}
});
devtools.formatters.log_exception_if_avail = (function devtools$formatters$log_exception_if_avail(var_args){
var args__4736__auto__ = [];
var len__4730__auto___44042 = arguments.length;
var i__4731__auto___44043 = (0);
while(true){
if((i__4731__auto___44043 < len__4730__auto___44042)){
args__4736__auto__.push((arguments[i__4731__auto___44043]));

var G__44048 = (i__4731__auto___44043 + (1));
i__4731__auto___44043 = G__44048;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var temp__5802__auto__ = devtools.formatters.find_fn_in_debug_ns("log_exception");
if(cljs.core.truth_(temp__5802__auto__)){
var log_exception = temp__5802__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(log_exception,args);
} else {
return null;
}
});

devtools.formatters.log_exception_if_avail.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.formatters.log_exception_if_avail.cljs$lang$applyTo = (function (seq44037){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44037));
});

devtools.formatters.monitor_api_calls = (function devtools$formatters$monitor_api_calls(name,api_call){
return (function() { 
var G__44051__delegate = function (args){
if((!(devtools.formatters._STAR_monitor_enabled_STAR_))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_call,args);
} else {
return devtools.formatters.monitor_api_call_if_avail(name,api_call,args);
}
};
var G__44051 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44054__i = 0, G__44054__a = new Array(arguments.length -  0);
while (G__44054__i < G__44054__a.length) {G__44054__a[G__44054__i] = arguments[G__44054__i + 0]; ++G__44054__i;}
  args = new cljs.core.IndexedSeq(G__44054__a,0,null);
} 
return G__44051__delegate.call(this,args);};
G__44051.cljs$lang$maxFixedArity = 0;
G__44051.cljs$lang$applyTo = (function (arglist__44055){
var args = cljs.core.seq(arglist__44055);
return G__44051__delegate(args);
});
G__44051.cljs$core$IFn$_invoke$arity$variadic = G__44051__delegate;
return G__44051;
})()
;
});
devtools.formatters.sanitize = (function devtools$formatters$sanitize(name,api_call){
return (function() { 
var G__44056__delegate = function (args){
if((!(devtools.formatters._STAR_sanitizer_enabled_STAR_))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_call,args);
} else {
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_call,args);
}catch (e44038){var e = e44038;
devtools.formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], 0));

return null;
}}
};
var G__44056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44061__i = 0, G__44061__a = new Array(arguments.length -  0);
while (G__44061__i < G__44061__a.length) {G__44061__a[G__44061__i] = arguments[G__44061__i + 0]; ++G__44061__i;}
  args = new cljs.core.IndexedSeq(G__44061__a,0,null);
} 
return G__44056__delegate.call(this,args);};
G__44056.cljs$lang$maxFixedArity = 0;
G__44056.cljs$lang$applyTo = (function (arglist__44062){
var args = cljs.core.seq(arglist__44062);
return G__44056__delegate(args);
});
G__44056.cljs$core$IFn$_invoke$arity$variadic = G__44056__delegate;
return G__44056;
})()
;
});
devtools.formatters.build_cljs_formatter = (function devtools$formatters$build_cljs_formatter(){
var wrap = (function (name,api_call){
var monitor = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.formatters.monitor_api_calls,name);
var sanitizer = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.formatters.sanitize,name);
var fexpr__44039_44093 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(monitor,sanitizer);
(fexpr__44039_44093.cljs$core$IFn$_invoke$arity$1 ? fexpr__44039_44093.cljs$core$IFn$_invoke$arity$1(api_call) : fexpr__44039_44093.call(null,api_call));

return api_call;
});
var formatter = (new devtools.formatters.CLJSDevtoolsFormatter());
var define_BANG_ = ((function (wrap,formatter){
return (function (name,fn){
return (formatter[name] = wrap(name,fn));
});})(wrap,formatter))
;
define_BANG_("header",devtools.formatters.core.header_api_call);

define_BANG_("hasBody",devtools.formatters.core.has_body_api_call);

define_BANG_("body",devtools.formatters.core.body_api_call);

return formatter;
});
devtools.formatters.is_ours_QMARK_ = (function devtools$formatters$is_ours_QMARK_(o){
return (o instanceof devtools.formatters.CLJSDevtoolsFormatter);
});
devtools.formatters.present_QMARK_ = (function devtools$formatters$present_QMARK_(){
var formatters = devtools.util.get_formatters_safe();
return cljs.core.boolean$(cljs.core.some(devtools.formatters.is_ours_QMARK_,formatters));
});
devtools.formatters.install_our_formatter_BANG_ = (function devtools$formatters$install_our_formatter_BANG_(formatter){
var formatters = devtools.util.get_formatters_safe().slice();
formatters.push(formatter);

devtools.util.set_formatters_safe_BANG_(formatters);

if(cljs.core.truth_(devtools.prefs.pref(new cljs.core.Keyword(null,"legacy-formatter","legacy-formatter",-1954119499)))){
return ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))[devtools.formatters.obsolete_formatter_key] = formatter);
} else {
return null;
}
});
devtools.formatters.uninstall_our_formatters_BANG_ = (function devtools$formatters$uninstall_our_formatters_BANG_(){
var new_formatters = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(devtools.formatters.is_ours_QMARK_,cljs.core.vec(devtools.util.get_formatters_safe()));
var new_formatters_js = ((cljs.core.empty_QMARK_(new_formatters))?null:cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new_formatters));
return devtools.util.set_formatters_safe_BANG_(new_formatters_js);
});
devtools.formatters.installed_QMARK_ = (function devtools$formatters$installed_QMARK_(){
return devtools.formatters._STAR_installed_STAR_;
});
devtools.formatters.install_BANG_ = (function devtools$formatters$install_BANG_(){
if(devtools.formatters._STAR_installed_STAR_){
return null;
} else {
devtools.formatters._STAR_installed_STAR_ = true;

devtools.formatters.install_our_formatter_BANG_(devtools.formatters.build_cljs_formatter());

return true;
}
});
devtools.formatters.uninstall_BANG_ = (function devtools$formatters$uninstall_BANG_(){
if(devtools.formatters._STAR_installed_STAR_){
devtools.formatters._STAR_installed_STAR_ = false;

return devtools.formatters.uninstall_our_formatters_BANG_();
} else {
return null;
}
});

//# sourceMappingURL=devtools.formatters.js.map
