goog.provide('clojure.test.check.results');
goog.require('cljs.core');

/**
 * @interface
 */
clojure.test.check.results.Result = function(){};

/**
 * A boolean indicating if the result passed.
 */
clojure.test.check.results.pass_QMARK_ = (function clojure$test$check$results$pass_QMARK_(result){
if((((!((result == null)))) && ((!((result.clojure$test$check$results$Result$pass_QMARK_$arity$1 == null)))))){
return result.clojure$test$check$results$Result$pass_QMARK_$arity$1(result);
} else {
var x__4433__auto__ = (((result == null))?null:result);
var m__4434__auto__ = (clojure.test.check.results.pass_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4434__auto__.call(null,result));
} else {
var m__4431__auto__ = (clojure.test.check.results.pass_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4431__auto__.call(null,result));
} else {
throw cljs.core.missing_protocol("Result.pass?",result);
}
}
}
});

/**
 * A map of data about the trial.
 */
clojure.test.check.results.result_data = (function clojure$test$check$results$result_data(result){
if((((!((result == null)))) && ((!((result.clojure$test$check$results$Result$result_data$arity$1 == null)))))){
return result.clojure$test$check$results$Result$result_data$arity$1(result);
} else {
var x__4433__auto__ = (((result == null))?null:result);
var m__4434__auto__ = (clojure.test.check.results.result_data[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4434__auto__.call(null,result));
} else {
var m__4431__auto__ = (clojure.test.check.results.result_data["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4431__auto__.call(null,result));
} else {
throw cljs.core.missing_protocol("Result.result-data",result);
}
}
}
});

goog.object.set(clojure.test.check.results.Result,"_",true);

var G__44456_44470 = clojure.test.check.results.pass_QMARK_;
var G__44457_44471 = "_";
var G__44458_44472 = ((function (G__44456_44470,G__44457_44471){
return (function (this$){
return cljs.core.boolean$(this$);
});})(G__44456_44470,G__44457_44471))
;
goog.object.set(G__44456_44470,G__44457_44471,G__44458_44472);

var G__44459_44473 = clojure.test.check.results.result_data;
var G__44460_44474 = "_";
var G__44461_44475 = ((function (G__44459_44473,G__44460_44474){
return (function (this$){
return null;
});})(G__44459_44473,G__44460_44474))
;
goog.object.set(G__44459_44473,G__44460_44474,G__44461_44475);

goog.object.set(clojure.test.check.results.Result,"null",true);

var G__44462_44476 = clojure.test.check.results.pass_QMARK_;
var G__44463_44477 = "null";
var G__44464_44478 = ((function (G__44462_44476,G__44463_44477){
return (function (this$){
return false;
});})(G__44462_44476,G__44463_44477))
;
goog.object.set(G__44462_44476,G__44463_44477,G__44464_44478);

var G__44465_44479 = clojure.test.check.results.result_data;
var G__44466_44480 = "null";
var G__44467_44481 = ((function (G__44465_44479,G__44466_44480){
return (function (this$){
return null;
});})(G__44465_44479,G__44466_44480))
;
goog.object.set(G__44465_44479,G__44466_44480,G__44467_44481);

//# sourceMappingURL=clojure.test.check.results.js.map
