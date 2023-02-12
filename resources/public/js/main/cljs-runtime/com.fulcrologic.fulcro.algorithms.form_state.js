goog.provide('com.fulcrologic.fulcro.algorithms.form_state');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.set');
goog.require('taoensso.timbre');
goog.require('edn_query_language.core');
goog.require('ghostwheel.core');
goog.require('com.fulcrologic.fulcro.algorithms.tempid');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.components');
com.fulcrologic.fulcro.algorithms.form_state.ident_generator = (function com$fulcrologic$fulcro$algorithms$form_state$ident_generator(){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("other","by-id","other/by-id",-2109321389),(9)], null)]));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null),new cljs.core.Symbol("com.fulcrologic.fulcro.algorithms.form-state","ident-generator","com.fulcrologic.fulcro.algorithms.form-state/ident-generator",-370854661,null)),cljs.spec.alpha.with_gen(edn_query_language.core.ident_QMARK_,com.fulcrologic.fulcro.algorithms.form_state.ident_generator));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.keyword_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__64159){
return cljs.core.set_QMARK_(G__64159);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12935__auto__,v__12936__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12936__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__64160){
return cljs.core.map_QMARK_(G__64160);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12935__auto__,v__12936__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12936__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__64161){
return cljs.core.map_QMARK_(G__64161);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.keyword_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__64166){
return cljs.core.set_QMARK_(G__64166);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__64167){
return cljs.core.map_QMARK_(G__64167);
}),(function (G__64167){
return cljs.core.contains_QMARK_(G__64167,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965));
}),(function (G__64167){
return cljs.core.contains_QMARK_(G__64167,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833));
})], null),(function (G__64167){
return ((cljs.core.map_QMARK_(G__64167)) && (cljs.core.contains_QMARK_(G__64167,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965))) && (cljs.core.contains_QMARK_(G__64167,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","validity","com.fulcrologic.fulcro.algorithms.form-state/validity",-1003224837),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"valid","valid",155614240),"null",new cljs.core.Keyword(null,"unchecked","unchecked",924418378),"null",new cljs.core.Keyword(null,"invalid","invalid",412869516),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"valid","valid",155614240),null,new cljs.core.Keyword(null,"unchecked","unchecked",924418378),null,new cljs.core.Keyword(null,"invalid","invalid",412869516),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","denormalized-form","com.fulcrologic.fulcro.algorithms.form-state/denormalized-form",2115950844),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__64180){
return cljs.core.map_QMARK_(G__64180);
}),(function (G__64180){
return cljs.core.contains_QMARK_(G__64180,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854));
})], null),(function (G__64180){
return ((cljs.core.map_QMARK_(G__64180)) && (cljs.core.contains_QMARK_(G__64180,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854)))], null),null])));
/**
 * Returns the set of defined form fields for the given component class (or instance).
 */
com.fulcrologic.fulcro.algorithms.form_state.get_form_fields = (function com$fulcrologic$fulcro$algorithms$form_state$get_form_fields(class$){
return com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(class$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"form-fields","form-fields",35924568)], 0));
});
/**
 * Returns the form database table ID for the given entity ident.
 */
com.fulcrologic.fulcro.algorithms.form_state.form_id = (function com$fulcrologic$fulcro$algorithms$form_state$form_id(entity_ident){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.first(entity_ident),new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.second(entity_ident)], null);
});

var options__59044__auto___64599 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function com$fulcrologic$fulcro$algorithms$form_state$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function com$fulcrologic$fulcro$algorithms$form_state$ident_STAR_(this$,p__64211){
var map__64212 = p__64211;
var map__64212__$1 = (((((!((map__64212 == null))))?(((((map__64212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64212):map__64212);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64212__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64212__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64212__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833));
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64212__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705));
var pristine_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64212__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","forms-by-ident","com.fulcrologic.fulcro.algorithms.form-state/forms-by-ident",827952006),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.first(id),new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.second(id)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$fulcro$algorithms$form_state$render_FormConfig(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__64217 = com.fulcrologic.fulcro.components.props(this$);
var map__64217__$1 = (((((!((map__64217 == null))))?(((((map__64217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64217):map__64217);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64217__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64217__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64217__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833));
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64217__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705));
var pristine_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64217__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282));
return null;
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.form_state !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.form_state.FormConfig !== 'undefined')){
} else {
/**
 * A component supporting normalization of form state configuration. Use Fulcro Inspect for viewing that data.
 *   Rendering isn't supported on this component so it will work with React Native.
 *   Can also render the form config, if that is useful to you.
 */
com.fulcrologic.fulcro.algorithms.form_state.FormConfig = ((function (options__59044__auto___64599){
return (function com$fulcrologic$fulcro$algorithms$form_state$FormConfig(props__59045__auto__){
var this__59046__auto__ = this;
var temp__5802__auto___64620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__59044__auto___64599,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___64620)){
var init_state__59047__auto___64622 = temp__5802__auto___64620;
this__59046__auto__.state = (function (){var obj64224 = ({"fulcro$state":(function (){var G__64229 = this__59046__auto__;
var G__64230 = goog.object.get(props__59045__auto__,"fulcro$value");
return (init_state__59047__auto___64622.cljs$core$IFn$_invoke$arity$2 ? init_state__59047__auto___64622.cljs$core$IFn$_invoke$arity$2(G__64229,G__64230) : init_state__59047__auto___64622.call(null,G__64229,G__64230));
})()});
return obj64224;
})();
} else {
this__59046__auto__.state = (function (){var obj64232 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj64232;
})();
}

return null;
});})(options__59044__auto___64599))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.fulcro.algorithms.form_state.FormConfig,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","FormConfig","com.fulcrologic.fulcro.algorithms.form-state/FormConfig",-841101890),options__59044__auto___64599);
/**
 * A query join to ::form-config. This should be added to the query of a component that is
 *   using form state support.
 */
com.fulcrologic.fulcro.algorithms.form_state.form_config_join = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.algorithms.form_state.FormConfig)], null);
/**
 * Generate a form config given:
 * 
 *   entity-ident - The ident of the entity you're configuring forms for.
 *   fields - A set of keywords on the entity that is the form.
 *   subforms - An optional set of keywords on the entity that is the form, for the joins to subforms.
 */
com.fulcrologic.fulcro.algorithms.form_state.form_config = (function com$fulcrologic$fulcro$algorithms$form_state$form_config(var_args){
var G__64242 = arguments.length;
switch (G__64242) {
case 2:
return com.fulcrologic.fulcro.algorithms.form_state.form_config.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.form_state.form_config.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.form_state.form_config.cljs$core$IFn$_invoke$arity$2 = (function (entity_ident,fields){
return com.fulcrologic.fulcro.algorithms.form_state.form_config.cljs$core$IFn$_invoke$arity$3(entity_ident,fields,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.algorithms.form_state.form_config.cljs$core$IFn$_invoke$arity$3 = (function (entity_ident,fields,subforms){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965),entity_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833),fields,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__64251){
var vec__64252 = p__64251;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64252,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64252,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),v], null))]);
})),subforms)], null);
});

com.fulcrologic.fulcro.algorithms.form_state.form_config.cljs$lang$maxFixedArity = 3;

com.fulcrologic.fulcro.algorithms.form_state.derive_form_info = (function com$fulcrologic$fulcro$algorithms$form_state$derive_form_info(class$){
var query_nodes = (function (){var G__64263 = class$;
var G__64263__$1 = (((G__64263 == null))?null:com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(G__64263));
var G__64263__$2 = (((G__64263__$1 == null))?null:edn_query_language.core.query__GT_ast(G__64263__$1));
if((G__64263__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__64263__$2);
}
})();
var query_nodes_by_key = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (query_nodes){
return (function (n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(n),n], null);
});})(query_nodes))
),query_nodes);
var join_component = ((function (query_nodes,query_nodes_by_key){
return (function (k){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(query_nodes_by_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"component","component",1555936782)], null));
});})(query_nodes,query_nodes_by_key))
;
var map__64262 = cljs.core.group_by(new cljs.core.Keyword(null,"type","type",1174270348),query_nodes);
var map__64262__$1 = (((((!((map__64262 == null))))?(((((map__64262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64262):map__64262);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64262__$1,new cljs.core.Keyword(null,"prop","prop",-515168332));
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64262__$1,new cljs.core.Keyword(null,"join","join",-758861890));
var join_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),joins));
var prop_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),props));
var queries_for_config_QMARK_ = cljs.core.contains_QMARK_(join_keys,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854));
var all_fields = com.fulcrologic.fulcro.algorithms.form_state.get_form_fields(class$);
var has_fields_QMARK_ = cljs.core.seq(all_fields);
var fields = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(all_fields,prop_keys);
var subform_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(all_fields,join_keys);
var subforms = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (query_nodes,query_nodes_by_key,join_component,map__64262,map__64262__$1,props,joins,join_keys,prop_keys,queries_for_config_QMARK_,all_fields,has_fields_QMARK_,fields,subform_keys){
return (function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),join_component(k)], null))], null);
});})(query_nodes,query_nodes_by_key,join_component,map__64262,map__64262__$1,props,joins,join_keys,prop_keys,queries_for_config_QMARK_,all_fields,has_fields_QMARK_,fields,subform_keys))
),subform_keys);
if(queries_for_config_QMARK_){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Attempt to add form configuration to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.component_name(class$)),", but it does not query for config!"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offending-component","offending-component",385750063),class$], null));
}

if(has_fields_QMARK_){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Attempt to add form configuration to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.component_name(class$)),", but it does not declare any fields!"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offending-component","offending-component",385750063),class$], null));
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fields,subforms,subform_keys], null);
});
/**
 * Add form configuration data to a *denormalized* entity (e.g. pre-merge). This is useful in
 *   initial state or when using `merge-component!`. This function *will not* touch an entity
 *   that already has form config but will recurse the entire form set. It can therefore be
 *   invoked on the top-level of the form set when adding, for example, an instance of a sub-form.
 * 
 *   class - The component class.
 *   entity - A denormalized (tree) of data that matches the given component class.
 * 
 *   Returns the (possibly updated) denormalized entity, ready to merge.
 */
com.fulcrologic.fulcro.algorithms.form_state.add_form_config = (function com$fulcrologic$fulcro$algorithms$form_state$add_form_config(class$,entity){
var vec__64277 = com.fulcrologic.fulcro.algorithms.form_state.derive_form_info(class$);
var fields = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64277,(0),null);
var subform_classmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64277,(1),null);
var subform_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64277,(2),null);
var local_entity = ((cljs.core.contains_QMARK_(entity,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854)))?entity:(function (){var pristine_state = cljs.core.select_keys(entity,fields);
var subform_ident = ((function (pristine_state,vec__64277,fields,subform_classmap,subform_keys){
return (function (k,entity__$1){
var G__64286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(subform_classmap,k);
var G__64286__$1 = (((G__64286 == null))?null:cljs.core.meta(G__64286));
var G__64286__$2 = (((G__64286__$1 == null))?null:new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__64286__$1));
if((G__64286__$2 == null)){
return null;
} else {
return com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__64286__$2,entity__$1);
}
});})(pristine_state,vec__64277,fields,subform_classmap,subform_keys))
;
var subform_keys__$1 = cljs.core.set(cljs.core.keys(subform_classmap));
var subform_refs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pristine_state,subform_ident,subform_keys__$1,vec__64277,fields,subform_classmap,subform_keys){
return (function (refs,k){
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,k);
if(cljs.core.map_QMARK_(items)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(refs,k,subform_ident(k,items));
} else {
if(cljs.core.vector_QMARK_(items)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(refs,k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (items,pristine_state,subform_ident,subform_keys__$1,vec__64277,fields,subform_classmap,subform_keys){
return (function (p1__64274_SHARP_){
return subform_ident(k,p1__64274_SHARP_);
});})(items,pristine_state,subform_ident,subform_keys__$1,vec__64277,fields,subform_classmap,subform_keys))
,items));
} else {
return refs;

}
}
});})(pristine_state,subform_ident,subform_keys__$1,vec__64277,fields,subform_classmap,subform_keys))
,cljs.core.PersistentArrayMap.EMPTY,subform_keys__$1);
var pristine_state__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pristine_state,subform_refs], 0));
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965),com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(class$,entity),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833),fields,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282),pristine_state__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705),(function (){var or__4131__auto__ = subform_classmap;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854),config], null)], 0));
})());
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__64277,fields,subform_classmap,subform_keys,local_entity){
return (function (resulting_entity,k){
var c = (function (){var G__64295 = subform_classmap;
var G__64295__$1 = (((G__64295 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__64295,k));
var G__64295__$2 = (((G__64295__$1 == null))?null:cljs.core.meta(G__64295__$1));
if((G__64295__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__64295__$2);
}
})();
var child = cljs.core.get.cljs$core$IFn$_invoke$arity$2(resulting_entity,k);
try{if(cljs.core.truth_((function (){var and__4120__auto__ = c;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = child;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.vector_QMARK_(child);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resulting_entity,k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (c,child,vec__64277,fields,subform_classmap,subform_keys,local_entity){
return (function (p1__64276_SHARP_){
return (com.fulcrologic.fulcro.algorithms.form_state.add_form_config.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.form_state.add_form_config.cljs$core$IFn$_invoke$arity$2(c,p1__64276_SHARP_) : com.fulcrologic.fulcro.algorithms.form_state.add_form_config.call(null,c,p1__64276_SHARP_));
});})(c,child,vec__64277,fields,subform_classmap,subform_keys,local_entity))
,child));
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = c;
if(cljs.core.truth_(and__4120__auto__)){
return child;
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resulting_entity,k,(com.fulcrologic.fulcro.algorithms.form_state.add_form_config.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.form_state.add_form_config.cljs$core$IFn$_invoke$arity$2(c,child) : com.fulcrologic.fulcro.algorithms.form_state.add_form_config.call(null,c,child)));
} else {
return resulting_entity;

}
}
}catch (e64300){var e = e64300;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Subform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.component_name(c))," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.component_name(class$))," failed to initialize."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested-exception","nested-exception",162394239),e], null));
}});})(vec__64277,fields,subform_classmap,subform_keys,local_entity))
,local_entity,subform_keys);
});
/**
 * Identical to `add-form-config`, but works against normalized entities in the
 *   app state. This makes it ideal for composition within mutations.
 * 
 *   state-map - The application state database (map, not atom).
 *   class - The component class. Must have declared form fields.
 *   entity-ident - The ident of the normalized entity of the given class that you wish to initialize.
 * 
 *   Returns an updated state map with normalized form configuration in place for the entity.
 */
com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_ = (function com$fulcrologic$fulcro$algorithms$form_state$add_form_config_STAR_(state_map,class$,entity_ident){
var vec__64308 = com.fulcrologic.fulcro.algorithms.form_state.derive_form_info(class$);
var fields = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64308,(0),null);
var subform_classmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64308,(1),null);
var subform_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64308,(2),null);
var entity = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,entity_ident);
var updated_state_map = ((cljs.core.contains_QMARK_(entity,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854)))?state_map:(function (){var pristine_state = cljs.core.select_keys(entity,clojure.set.union.cljs$core$IFn$_invoke$arity$2(subform_keys,fields));
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965),entity_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833),fields,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282),pristine_state,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705),(function (){var or__4131__auto__ = subform_classmap;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], null);
var cfg_ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","forms-by-ident","com.fulcrologic.fulcro.algorithms.form-state/forms-by-ident",827952006),com.fulcrologic.fulcro.algorithms.form_state.form_id(entity_ident)], null);
return cljs.core.assoc_in(cljs.core.assoc_in(state_map,cfg_ident,config),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(entity_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854)),cfg_ident);
})());
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__64308,fields,subform_classmap,subform_keys,entity,updated_state_map){
return (function (smap,subform_key){
var subform_class = (function (){var G__64319 = subform_classmap;
var G__64319__$1 = (((G__64319 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__64319,subform_key));
var G__64319__$2 = (((G__64319__$1 == null))?null:cljs.core.meta(G__64319__$1));
if((G__64319__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__64319__$2);
}
})();
var subform_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,subform_key);
try{if(cljs.core.truth_((function (){var and__4120__auto__ = subform_class;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = subform_target;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.every_QMARK_(edn_query_language.core.ident_QMARK_,subform_target);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (subform_class,subform_target,vec__64308,fields,subform_classmap,subform_keys,entity,updated_state_map){
return (function (s,subform_ident){
return (com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_.cljs$core$IFn$_invoke$arity$3(s,subform_class,subform_ident) : com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_.call(null,s,subform_class,subform_ident));
});})(subform_class,subform_target,vec__64308,fields,subform_classmap,subform_keys,entity,updated_state_map))
,smap,subform_target);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = subform_class;
if(cljs.core.truth_(and__4120__auto__)){
return edn_query_language.core.ident_QMARK_(subform_target);
} else {
return and__4120__auto__;
}
})())){
return (com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_.cljs$core$IFn$_invoke$arity$3(smap,subform_class,subform_target) : com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_.call(null,smap,subform_class,subform_target));
} else {
return smap;

}
}
}catch (e64320){var e = e64320;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Subform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.component_name(subform_class))," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.component_name(class$))," failed to initialize."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested-exception","nested-exception",162394239),e], null));
}});})(vec__64308,fields,subform_classmap,subform_keys,entity,updated_state_map))
,updated_state_map,subform_keys);
});
/**
 * Get the instances of the immediate subforms that are joined into the given entity by
 * subform-join-keys (works with to-one and to-many).
 * 
 * - `entity` - a denormalized (UI) entity.
 * - `subform-join-keys` - The keys of the subforms of this entity, as a set.
 * 
 * Returns a sequence of those entities (all denormalized).
 */
com.fulcrologic.fulcro.algorithms.form_state.immediate_subforms = (function com$fulcrologic$fulcro$algorithms$form_state$immediate_subforms(entity,subform_join_keys){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__64325_SHARP_){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,p1__64325_SHARP_);
if(cljs.core.sequential_QMARK_(v)){
return v;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subform_join_keys], 0)));
});
/**
 * Returns true if the given ui-entity-props that are configured as a form differ from the pristine version.
 *   Recursively follows subforms if given no field. Returns true if anything doesn't match up.
 * 
 *   If given a field, it only checks that field.
 */
com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_ = (function com$fulcrologic$fulcro$algorithms$form_state$dirty_QMARK_(var_args){
var G__64342 = arguments.length;
switch (G__64342) {
case 2:
return com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (ui_entity_props,field){
var map__64343 = ui_entity_props;
var map__64343__$1 = (((((!((map__64343 == null))))?(((((map__64343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64343):map__64343);
var map__64344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64343__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854));
var map__64344__$1 = (((((!((map__64344 == null))))?(((((map__64344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64344):map__64344);
var pristine_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64344__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ui_entity_props,field);
var original = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pristine_state,field);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current,original);
});

com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (ui_entity_props){
var map__64347 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854).cljs$core$IFn$_invoke$arity$1(ui_entity_props);
var map__64347__$1 = (((((!((map__64347 == null))))?(((((map__64347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64347):map__64347);
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64347__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64347__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833));
var dirty_field_QMARK_ = ((function (map__64347,map__64347__$1,subforms,fields){
return (function (k){
return com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$2(ui_entity_props,k);
});})(map__64347,map__64347__$1,subforms,fields))
;
var subform_entities = com.fulcrologic.fulcro.algorithms.form_state.immediate_subforms(ui_entity_props,cljs.core.set(cljs.core.keys(subforms)));
return cljs.core.boolean$((function (){var or__4131__auto__ = cljs.core.some(dirty_field_QMARK_,fields);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.some(com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_,subform_entities);
}
})());
});

com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$lang$maxFixedArity = 2;

/**
 * Returns false if and only if the given key has a spec, and the spec is not valid for the value found in the given
 *   map of entity props (e.g. `(s/valid? key (get entity-props key))`).
 * 
 *   Returns true otherwise.
 */
com.fulcrologic.fulcro.algorithms.form_state.no_spec_or_valid_QMARK_ = (function com$fulcrologic$fulcro$algorithms$form_state$no_spec_or_valid_QMARK_(entity_props,key){
return ((cljs.core.not(cljs.spec.alpha.get_spec(key))) || (cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity_props,key))));
});
/**
 * Returns a new validity based on the combination of two.
 * 
 *   * :valid :valid = :valid
 *   * :valid :invalid = :invalid
 *   * :valid :unchecked = :unchecked
 *   * :invalid :valid = :invalid
 *   * :invalid :invalid = :invalid
 *   * :invalid :unchecked = :unchecked
 *   * :unchecked :valid = :unchecked
 *   * :unchecked :invalid = :unchecked
 *   * :unchecked :unchecked = :unchecked
 *   
 */
com.fulcrologic.fulcro.algorithms.form_state.merge_validity = (function com$fulcrologic$fulcro$algorithms$form_state$merge_validity(a,b){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","validity","com.fulcrologic.fulcro.algorithms.form-state/validity",-1003224837),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","validity","com.fulcrologic.fulcro.algorithms.form-state/validity",-1003224837),ghostwheel.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","validity","com.fulcrologic.fulcro.algorithms.form-state/validity",-1003224837)], null);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unchecked","unchecked",924418378),a)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unchecked","unchecked",924418378),b)))){
return new cljs.core.Keyword(null,"unchecked","unchecked",924418378);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valid","valid",155614240),a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valid","valid",155614240),b)))){
return new cljs.core.Keyword(null,"valid","valid",155614240);
} else {
return new cljs.core.Keyword(null,"invalid","invalid",412869516);

}
}
});
/**
 * Create a form/field validation function using a supplied field checker. The field checker will be given
 *   then entire form (denormalized) and a single field key that is to be checked. It must return
 *   a boolean indicating if that given field is valid.
 * 
 *   During a recursive check for a form, the validation function will be in the correct context (e.g. the form supplied will contain
 *   the field. There is no need to search for it in subforms).
 * 
 *   make-validator returns a dual arity function:
 * 
 *   - `(fn [form] ...)` - Calling this version will return :unchecked, :valid, or :invalid for the entire form.
 *   - `(fn [form field] ...)` - Calling this version will return :unchecked, :valid, or :invalid for the single field.
 * 
 *   Typical usage would be to show messages around the form fields:
 * 
 *   ```
 *   (def field-valid? [form field] true) ; just say everything is valid
 * 
 *   (def my-validator (make-validator field-valid?))
 * 
 *   (defn valid? [form field]
 *   (= :valid (my-validator form field)))
 * 
 *   (defn checked? [form field]
 *   (not= :unchecked (my-validator form field)))
 *   ```
 *   
 */
com.fulcrologic.fulcro.algorithms.form_state.make_validator = (function com$fulcrologic$fulcro$algorithms$form_state$make_validator(field_valid_QMARK_){
return (function() {
var com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR_ = null;
var com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR___1 = (function (ui_entity_props){
var map__64369 = ui_entity_props;
var map__64369__$1 = (((((!((map__64369 == null))))?(((((map__64369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64369):map__64369);
var map__64370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64369__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854));
var map__64370__$1 = (((((!((map__64370 == null))))?(((((map__64370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64370):map__64370);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64370__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833));
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64370__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705));
var immediate_subforms = com.fulcrologic.fulcro.algorithms.form_state.immediate_subforms(ui_entity_props,cljs.core.set(cljs.core.keys(subforms)));
var field_validity = ((function (map__64369,map__64369__$1,map__64370,map__64370__$1,fields,subforms,immediate_subforms){
return (function (current_validity,k){
return com.fulcrologic.fulcro.algorithms.form_state.merge_validity(current_validity,com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR_.cljs$core$IFn$_invoke$arity$2(ui_entity_props,k));
});})(map__64369,map__64369__$1,map__64370,map__64370__$1,fields,subforms,immediate_subforms))
;
var subform_validities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR_,immediate_subforms);
var subform_validity = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.algorithms.form_state.merge_validity,new cljs.core.Keyword(null,"valid","valid",155614240),subform_validities);
var this_validity = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(field_validity,new cljs.core.Keyword(null,"valid","valid",155614240),fields);
return com.fulcrologic.fulcro.algorithms.form_state.merge_validity(this_validity,subform_validity);
});
var com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR___2 = (function (ui_entity_props,field){
var map__64363 = ui_entity_props;
var map__64363__$1 = (((((!((map__64363 == null))))?(((((map__64363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64363):map__64363);
var map__64364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64363__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854));
var map__64364__$1 = (((((!((map__64364 == null))))?(((((map__64364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64364):map__64364);
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64364__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344));
var complete_QMARK___$1 = (function (){var or__4131__auto__ = complete_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.not((complete_QMARK___$1.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK___$1.cljs$core$IFn$_invoke$arity$1(field) : complete_QMARK___$1.call(null,field)))){
return new cljs.core.Keyword(null,"unchecked","unchecked",924418378);
} else {
if(cljs.core.not((field_valid_QMARK_.cljs$core$IFn$_invoke$arity$2 ? field_valid_QMARK_.cljs$core$IFn$_invoke$arity$2(ui_entity_props,field) : field_valid_QMARK_.call(null,ui_entity_props,field)))){
return new cljs.core.Keyword(null,"invalid","invalid",412869516);
} else {
return new cljs.core.Keyword(null,"valid","valid",155614240);

}
}
});
com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR_ = function(ui_entity_props,field){
switch(arguments.length){
case 1:
return com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR___1.call(this,ui_entity_props);
case 2:
return com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR___2.call(this,ui_entity_props,field);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR_.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR___1;
com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR_.cljs$core$IFn$_invoke$arity$2 = com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR___2;
return com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR_;
})()
});
var spec_validator_64683 = com.fulcrologic.fulcro.algorithms.form_state.make_validator(com.fulcrologic.fulcro.algorithms.form_state.no_spec_or_valid_QMARK_);
/**
 * Get the validity (:valid :invalid or :unchecked) for the given form/field using Clojure specs of the field keys.
 * 
 *  - `ui-entity-props` : A denormalized (UI) entity, which can have subforms.
 *  - `field` : Optional. Returns the validity of just the single field on the top-level form.
 * 
 *  Returns `:invalid` if all of the fields have been interacted with, and *any* are invalid.
 * 
 *  Returns `:unchecked` if any field is not yet been interacted with.
 * 
 *  Fields are marked as having been interacted with by programmatic action on your part via
 *  the validate* mutation helper can be used in a mutation to mark fields ready for validation.
 * 
 *  If given a field then it checks just that field.
 */
com.fulcrologic.fulcro.algorithms.form_state.get_spec_validity = ((function (spec_validator_64683){
return (function com$fulcrologic$fulcro$algorithms$form_state$get_spec_validity(var_args){
var G__64383 = arguments.length;
switch (G__64383) {
case 1:
return com.fulcrologic.fulcro.algorithms.form_state.get_spec_validity.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.form_state.get_spec_validity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(spec_validator_64683))
;

com.fulcrologic.fulcro.algorithms.form_state.get_spec_validity.cljs$core$IFn$_invoke$arity$1 = ((function (spec_validator_64683){
return (function (form){
return (spec_validator_64683.cljs$core$IFn$_invoke$arity$1 ? spec_validator_64683.cljs$core$IFn$_invoke$arity$1(form) : spec_validator_64683.call(null,form));
});})(spec_validator_64683))
;

com.fulcrologic.fulcro.algorithms.form_state.get_spec_validity.cljs$core$IFn$_invoke$arity$2 = ((function (spec_validator_64683){
return (function (form,field){
return (spec_validator_64683.cljs$core$IFn$_invoke$arity$2 ? spec_validator_64683.cljs$core$IFn$_invoke$arity$2(form,field) : spec_validator_64683.call(null,form,field));
});})(spec_validator_64683))
;

com.fulcrologic.fulcro.algorithms.form_state.get_spec_validity.cljs$lang$maxFixedArity = 2;

/**
 * Returns true if the given field (or the entire denormalized (UI) form recursively) is :valid
 *   according to clojure specs. Returns false if unchecked or invalid. Use `checked-spec?` or `get-spec-validity`
 *   for better detail.
 */
com.fulcrologic.fulcro.algorithms.form_state.valid_spec_QMARK_ = (function com$fulcrologic$fulcro$algorithms$form_state$valid_spec_QMARK_(var_args){
var G__64391 = arguments.length;
switch (G__64391) {
case 1:
return com.fulcrologic.fulcro.algorithms.form_state.valid_spec_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.form_state.valid_spec_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.form_state.valid_spec_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (ui_form){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valid","valid",155614240),com.fulcrologic.fulcro.algorithms.form_state.get_spec_validity.cljs$core$IFn$_invoke$arity$1(ui_form));
});

com.fulcrologic.fulcro.algorithms.form_state.valid_spec_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (ui_form,field){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valid","valid",155614240),com.fulcrologic.fulcro.algorithms.form_state.get_spec_validity.cljs$core$IFn$_invoke$arity$2(ui_form,field));
});

com.fulcrologic.fulcro.algorithms.form_state.valid_spec_QMARK_.cljs$lang$maxFixedArity = 2;

/**
 * Returns true if the given field (or any field if only a form is given) in the denormalized (UI) form is :invalid
 *   (recursively) according to clojure specs. Returns false if the field is marked unchecked. Use `checked-spec?` or
 *   `get-spec-validity` for better detail.
 */
com.fulcrologic.fulcro.algorithms.form_state.invalid_spec_QMARK_ = (function com$fulcrologic$fulcro$algorithms$form_state$invalid_spec_QMARK_(var_args){
var G__64397 = arguments.length;
switch (G__64397) {
case 1:
return com.fulcrologic.fulcro.algorithms.form_state.invalid_spec_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.form_state.invalid_spec_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.form_state.invalid_spec_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (ui_form){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid","invalid",412869516),com.fulcrologic.fulcro.algorithms.form_state.get_spec_validity.cljs$core$IFn$_invoke$arity$1(ui_form));
});

com.fulcrologic.fulcro.algorithms.form_state.invalid_spec_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (ui_form,field){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid","invalid",412869516),com.fulcrologic.fulcro.algorithms.form_state.get_spec_validity.cljs$core$IFn$_invoke$arity$2(ui_form,field));
});

com.fulcrologic.fulcro.algorithms.form_state.invalid_spec_QMARK_.cljs$lang$maxFixedArity = 2;

var do_not_care_64713 = cljs.core.constantly(true);
var carefree_validator_64714 = com.fulcrologic.fulcro.algorithms.form_state.make_validator(do_not_care_64713);
/**
 * Returns true if the field (or entire denormalized (UI) form) is ready to be checked for validation.
 *  Until this returns true validators will simply return :unchecked for a form/field.
 */
com.fulcrologic.fulcro.algorithms.form_state.checked_QMARK_ = ((function (do_not_care_64713,carefree_validator_64714){
return (function com$fulcrologic$fulcro$algorithms$form_state$checked_QMARK_(var_args){
var G__64403 = arguments.length;
switch (G__64403) {
case 1:
return com.fulcrologic.fulcro.algorithms.form_state.checked_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.form_state.checked_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(do_not_care_64713,carefree_validator_64714))
;

com.fulcrologic.fulcro.algorithms.form_state.checked_QMARK_.cljs$core$IFn$_invoke$arity$1 = ((function (do_not_care_64713,carefree_validator_64714){
return (function (ui_form){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unchecked","unchecked",924418378),(carefree_validator_64714.cljs$core$IFn$_invoke$arity$1 ? carefree_validator_64714.cljs$core$IFn$_invoke$arity$1(ui_form) : carefree_validator_64714.call(null,ui_form)));
});})(do_not_care_64713,carefree_validator_64714))
;

com.fulcrologic.fulcro.algorithms.form_state.checked_QMARK_.cljs$core$IFn$_invoke$arity$2 = ((function (do_not_care_64713,carefree_validator_64714){
return (function (ui_form,field){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unchecked","unchecked",924418378),(carefree_validator_64714.cljs$core$IFn$_invoke$arity$2 ? carefree_validator_64714.cljs$core$IFn$_invoke$arity$2(ui_form,field) : carefree_validator_64714.call(null,ui_form,field)));
});})(do_not_care_64713,carefree_validator_64714))
;

com.fulcrologic.fulcro.algorithms.form_state.checked_QMARK_.cljs$lang$maxFixedArity = 2;

/**
 * Get the idents of the immediate subforms that are joined into entity by
 * subform-join-keys (works with to-one and to-many). Entity is a NORMALIZED entity from the state map.
 * 
 * Returns a sequence of those idents.
 */
com.fulcrologic.fulcro.algorithms.form_state.immediate_subform_idents = (function com$fulcrologic$fulcro$algorithms$form_state$immediate_subform_idents(entity,subform_join_keys){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function com$fulcrologic$fulcro$algorithms$form_state$immediate_subform_idents_$_immediate_subform_idents_step(k){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,k);
var result = ((((cljs.core.sequential_QMARK_(v)) && (cljs.core.every_QMARK_(edn_query_language.core.ident_QMARK_,v))))?v:((edn_query_language.core.ident_QMARK_(v))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null):cljs.core.PersistentVector.EMPTY
));
return result;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subform_join_keys], 0)));
});
/**
 * Recursively update a form and its subforms. This function works against the state database (normalized state).
 * 
 *   `state-map` : The application state map
 *   `xform` : A function (fn [entity form-config] [entity' form-config']) that is passed the normalized entity and form-config,
 *  and must return an updated version of them.
 *   `starting-entity-ident` : An ident in the state map of an entity that has been initialized as a form.
 * 
 *   Returns the updated state map.
 */
com.fulcrologic.fulcro.algorithms.form_state.update_forms = (function com$fulcrologic$fulcro$algorithms$form_state$update_forms(state_map,xform,starting_entity_ident){
var entity = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,starting_entity_ident);
var config_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854));
var config = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,config_ident);
var map__64414 = config;
var map__64414__$1 = (((((!((map__64414 == null))))?(((((map__64414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64414):map__64414);
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64414__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705));
var vec__64415 = (xform.cljs$core$IFn$_invoke$arity$2 ? xform.cljs$core$IFn$_invoke$arity$2(entity,config) : xform.call(null,entity,config));
var updated_entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64415,(0),null);
var updated_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64415,(1),null);
var subform_idents = com.fulcrologic.fulcro.algorithms.form_state.immediate_subform_idents(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,starting_entity_ident),cljs.core.set(cljs.core.keys(subforms)));
var sm = state_map;
var sm__$1 = cljs.core.assoc_in(sm,starting_entity_ident,updated_entity);
var sm__$2 = cljs.core.assoc_in(sm__$1,config_ident,updated_config);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (sm,sm__$1,sm__$2,entity,config_ident,config,map__64414,map__64414__$1,subforms,vec__64415,updated_entity,updated_config,subform_idents){
return (function (s,id){
return (com.fulcrologic.fulcro.algorithms.form_state.update_forms.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.algorithms.form_state.update_forms.cljs$core$IFn$_invoke$arity$3(s,xform,id) : com.fulcrologic.fulcro.algorithms.form_state.update_forms.call(null,s,xform,id));
});})(sm,sm__$1,sm__$2,entity,config_ident,config,map__64414,map__64414__$1,subforms,vec__64415,updated_entity,updated_config,subform_idents))
,sm__$2,subform_idents);
});
/**
 * Obtains all of the dirty fields for the given (denormalized) ui-entity, recursively. This works against UI props
 *   because submission mutations should close over the data as parameters to a mutation. In other words, your form
 *   submission to a server should be triggered from UI with the output of this function as parameters:
 * 
 *   ```
 *   (dom/input { :onClick #(comp/transact! this `[(some-submit-function {:diff ~(f/dirty-fields props true)})]) })
 *   ```
 * 
 *   - `ui-entity` - The entity (denormalized) from the UI.
 *   - `as-delta?` - If false, each field's reported (new) value will just be the new value. When true, each value will be a map with :before and :after keys
 *   with the old and new values (useful for optimistic transaction semantics).
 * 
 *   Returns a map keyed by form ID (for each form/subform) whose values are maps of key/value pairs of
 *   changes. Fields from entities that have a temporary IDs will always be included.
 * 
 *   In other words, a change that happened for an entity with ident `entity-ident` on field `:field`:
 * 
 *   With `as-delta?` true:
 * 
 *   ```
 *   {entity-ident {:field {:before 1 :after 2}}}
 *   ```
 * 
 *   with `as-delta?` false:
 * 
 *   ```
 *   {entity-ident {:field 2}}
 *   ```
 *   
 */
com.fulcrologic.fulcro.algorithms.form_state.dirty_fields = (function com$fulcrologic$fulcro$algorithms$form_state$dirty_fields(ui_entity,as_delta_QMARK_){
var map__64438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ui_entity,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854));
var map__64438__$1 = (((((!((map__64438 == null))))?(((((map__64438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64438):map__64438);
var config = map__64438__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64438__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64438__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833));
var pristine_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64438__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282));
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64438__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705));
var subform_keys = cljs.core.set(cljs.core.keys(subforms));
var subform_ident = ((function (map__64438,map__64438__$1,config,id,fields,pristine_state,subforms,subform_keys){
return (function (k,entity){
var G__64442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(subforms,k);
var G__64442__$1 = (((G__64442 == null))?null:cljs.core.meta(G__64442));
var G__64442__$2 = (((G__64442__$1 == null))?null:new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__64442__$1));
if((G__64442__$2 == null)){
return null;
} else {
return com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__64442__$2,entity);
}
});})(map__64438,map__64438__$1,config,id,fields,pristine_state,subforms,subform_keys))
;
var new_entity_QMARK_ = com.fulcrologic.fulcro.algorithms.tempid.tempid_QMARK_(cljs.core.second(id));
var delta = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (map__64438,map__64438__$1,config,id,fields,pristine_state,subforms,subform_keys,subform_ident,new_entity_QMARK_){
return (function (k){
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pristine_state,k);
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ui_entity,k);
if(((new_entity_QMARK_) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(before,after)))){
if(cljs.core.truth_(as_delta_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"after","after",594996914),after], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,after], null);
}
} else {
return null;
}
});})(map__64438,map__64438__$1,config,id,fields,pristine_state,subforms,subform_keys,subform_ident,new_entity_QMARK_))
,fields));
var delta_with_refs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(delta,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (map__64438,map__64438__$1,config,id,fields,pristine_state,subforms,subform_keys,subform_ident,new_entity_QMARK_,delta){
return (function (k){
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ui_entity,k);
var old_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ui_entity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282),k], null));
var current_value = ((cljs.core.map_QMARK_(items))?subform_ident(k,items):((cljs.core.vector_QMARK_(items))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (items,old_value,map__64438,map__64438__$1,config,id,fields,pristine_state,subforms,subform_keys,subform_ident,new_entity_QMARK_,delta){
return (function (p1__64430_SHARP_){
return subform_ident(k,p1__64430_SHARP_);
});})(items,old_value,map__64438,map__64438__$1,config,id,fields,pristine_state,subforms,subform_keys,subform_ident,new_entity_QMARK_,delta))
,items):items
));
var has_tempids_QMARK_ = ((cljs.core.every_QMARK_(edn_query_language.core.ident_QMARK_,current_value))?cljs.core.some(((function (items,old_value,current_value,map__64438,map__64438__$1,config,id,fields,pristine_state,subforms,subform_keys,subform_ident,new_entity_QMARK_,delta){
return (function (p1__64431_SHARP_){
return com.fulcrologic.fulcro.algorithms.tempid.tempid_QMARK_(cljs.core.second(p1__64431_SHARP_));
});})(items,old_value,current_value,map__64438,map__64438__$1,config,id,fields,pristine_state,subforms,subform_keys,subform_ident,new_entity_QMARK_,delta))
,current_value):com.fulcrologic.fulcro.algorithms.tempid.tempid_QMARK_(cljs.core.second(current_value)));
if(cljs.core.truth_((function (){var or__4131__auto__ = has_tempids_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_value,current_value);
}
})())){
if(cljs.core.truth_(as_delta_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),old_value,new cljs.core.Keyword(null,"after","after",594996914),current_value], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,current_value], null);
}
} else {
return null;
}
});})(map__64438,map__64438__$1,config,id,fields,pristine_state,subforms,subform_keys,subform_ident,new_entity_QMARK_,delta))
,subform_keys));
var local_dirty_fields = ((cljs.core.empty_QMARK_(delta_with_refs))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentArrayMap.createAsIfByAssoc([id,delta_with_refs]));
var complete_delta = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__64438,map__64438__$1,config,id,fields,pristine_state,subforms,subform_keys,subform_ident,new_entity_QMARK_,delta,delta_with_refs,local_dirty_fields){
return (function (dirty_fields_so_far,subform_join_field){
var subform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ui_entity,subform_join_field);
if(cljs.core.vector_QMARK_(subform)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (subform,map__64438,map__64438__$1,config,id,fields,pristine_state,subforms,subform_keys,subform_ident,new_entity_QMARK_,delta,delta_with_refs,local_dirty_fields){
return (function (d,f){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d,(com.fulcrologic.fulcro.algorithms.form_state.dirty_fields.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.form_state.dirty_fields.cljs$core$IFn$_invoke$arity$2(f,as_delta_QMARK_) : com.fulcrologic.fulcro.algorithms.form_state.dirty_fields.call(null,f,as_delta_QMARK_))], 0));
});})(subform,map__64438,map__64438__$1,config,id,fields,pristine_state,subforms,subform_keys,subform_ident,new_entity_QMARK_,delta,delta_with_refs,local_dirty_fields))
,dirty_fields_so_far,subform);
} else {
if(cljs.core.map_QMARK_(subform)){
var dirty_subform_fields = (com.fulcrologic.fulcro.algorithms.form_state.dirty_fields.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.form_state.dirty_fields.cljs$core$IFn$_invoke$arity$2(subform,as_delta_QMARK_) : com.fulcrologic.fulcro.algorithms.form_state.dirty_fields.call(null,subform,as_delta_QMARK_));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dirty_fields_so_far,dirty_subform_fields], 0));
} else {
return dirty_fields_so_far;

}
}
});})(map__64438,map__64438__$1,config,id,fields,pristine_state,subforms,subform_keys,subform_ident,new_entity_QMARK_,delta,delta_with_refs,local_dirty_fields))
,local_dirty_fields,subform_keys);
return complete_delta;
});
/**
 * Mark the fields incomplete so that validation checks will no longer return values. This function works on an app state database
 *   map (not atom) and is meant to be composed into mutations. See the `mark-incomplete!` mutation if you do not need to combine
 *   this with other operations.
 * 
 *   Follows the subforms recursively through state, unless a specific field is given.
 */
com.fulcrologic.fulcro.algorithms.form_state.clear_complete_STAR_ = (function com$fulcrologic$fulcro$algorithms$form_state$clear_complete_STAR_(var_args){
var G__64460 = arguments.length;
switch (G__64460) {
case 3:
return com.fulcrologic.fulcro.algorithms.form_state.clear_complete_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.form_state.clear_complete_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.form_state.clear_complete_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (state_map,entity_ident,field){
var form_config_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(entity_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854));
var form_config_path__$1 = ((edn_query_language.core.ident_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,form_config_path)))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,form_config_path):(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.form-state",null,485,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (form_config_path){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["FORM NOT NORMALIZED: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(entity_ident)].join('')], null);
});})(form_config_path))
,null)),null,1908155794);

return form_config_path;
})()
);
var complete_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(form_config_path__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state_map,complete_path,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.disj,cljs.core.PersistentHashSet.EMPTY),field);
});

com.fulcrologic.fulcro.algorithms.form_state.clear_complete_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (state_map,entity_ident){
return com.fulcrologic.fulcro.algorithms.form_state.update_forms(state_map,(function com$fulcrologic$fulcro$algorithms$form_state$mark_STAR__step(e,form_config){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_config,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344),cljs.core.PersistentHashSet.EMPTY)], null);
}),entity_ident);
});

com.fulcrologic.fulcro.algorithms.form_state.clear_complete_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Mark the fields complete so that validation checks will return values. This function works on a app state database
 *   map (not atom) and is meant to be composed into mutations. See the `mark-complete!` mutation if you do not need to combine
 *   this with other operations.
 * 
 *   Follows the subforms recursively through state, unless a specific field is given.
 */
com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_ = (function com$fulcrologic$fulcro$algorithms$form_state$mark_complete_STAR_(var_args){
var G__64472 = arguments.length;
switch (G__64472) {
case 3:
return com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (state_map,entity_ident,field){
var form_config_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(entity_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854));
var form_config_path__$1 = ((edn_query_language.core.ident_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,form_config_path)))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,form_config_path):(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.form-state",null,506,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (form_config_path){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["FORM NOT NORMALIZED: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(entity_ident)].join('')], null);
});})(form_config_path))
,null)),null,1666561244);

return form_config_path;
})()
);
var complete_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(form_config_path__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state_map,complete_path,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),field);
});

com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (state_map,entity_ident){
return com.fulcrologic.fulcro.algorithms.form_state.update_forms(state_map,(function com$fulcrologic$fulcro$algorithms$form_state$mark_STAR__step(e,form_config){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_config,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833).cljs$core$IFn$_invoke$arity$1(form_config))], null);
}),entity_ident);
});

com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Removes copies of entities used by form-state logic.
 */
com.fulcrologic.fulcro.algorithms.form_state.delete_form_state_STAR_ = (function com$fulcrologic$fulcro$algorithms$form_state$delete_form_state_STAR_(state_map,entity_ident_or_idents){
var entity_idents = ((edn_query_language.core.ident_QMARK_(entity_ident_or_idents))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_ident_or_idents], null):entity_ident_or_idents);
var ks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (entity_idents){
return (function (p__64488){
var vec__64490 = p__64488;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64490,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64490,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table","table",-564943036),t,new cljs.core.Keyword(null,"row","row",-570139521),r], null);
});})(entity_idents))
,entity_idents);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state_map,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","forms-by-ident","com.fulcrologic.fulcro.algorithms.form-state/forms-by-ident",827952006),((function (entity_idents,ks){
return (function (s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,s,ks);
});})(entity_idents,ks))
);
});
/**
 * Copy the pristine state over top of the originating entity of the given form. Meant to be used inside of a
 *   mutation. Recursively follows subforms in app state. Returns the new app state map.
 * 
 *   state-map - The normalized state database (map, not atom)
 *   entity-ident - The ident of the entity that you wish to restore to its original pristine state.
 * 
 *   Only affects declared fields and sub-forms.
 */
com.fulcrologic.fulcro.algorithms.form_state.pristine__GT_entity_STAR_ = (function com$fulcrologic$fulcro$algorithms$form_state$pristine__GT_entity_STAR_(state_map,entity_ident){
return com.fulcrologic.fulcro.algorithms.form_state.update_forms(state_map,(function com$fulcrologic$fulcro$algorithms$form_state$pristine__GT_entity_STAR__$_reset_form_step(e,p__64501){
var map__64502 = p__64501;
var map__64502__$1 = (((((!((map__64502 == null))))?(((((map__64502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64502):map__64502);
var config = map__64502__$1;
var pristine_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64502__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,pristine_state], 0)),config], null);
}),entity_ident);
});
/**
 * Overwrite the pristine state (form state's copy) of the entity. This is meant to be used from a mutation
 *   to update the form state tracking recursively to make the form as 'unmodified'. That is to say, as if you
 *   committed the values to the server, and the current entity state is now the pristine state.
 * 
 *   This function does no sanity checks, so you should ensure the entity is valid!
 * 
 *   Recursively updates all sub forms.
 * 
 *   Returns the updated state-map (database).
 */
com.fulcrologic.fulcro.algorithms.form_state.entity__GT_pristine_STAR_ = (function com$fulcrologic$fulcro$algorithms$form_state$entity__GT_pristine_STAR_(state_map,entity_ident){
return com.fulcrologic.fulcro.algorithms.form_state.update_forms(state_map,(function com$fulcrologic$fulcro$algorithms$form_state$entity__GT_pristine_STAR__$_commit_form_step(e,p__64507){
var map__64509 = p__64507;
var map__64509__$1 = (((((!((map__64509 == null))))?(((((map__64509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64509):map__64509);
var config = map__64509__$1;
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64509__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833));
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64509__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705));
var subform_keys = cljs.core.set(cljs.core.keys(subforms));
var new_pristine_state = cljs.core.select_keys(e,clojure.set.union.cljs$core$IFn$_invoke$arity$2(subform_keys,fields));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282),new_pristine_state)], null);
}),entity_ident);
});
/**
 * Mutation: Reset the form (recursively) to its (last recorded) pristine state. If form ident is not supplied it uses the ident
 * of the calling component. See `pristine->entity*` for a function you can compose into your own mutations.
 */
com.fulcrologic.fulcro.algorithms.form_state.reset_form_BANG_ = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.algorithms.form-state","reset-form!","com.fulcrologic.fulcro.algorithms.form-state/reset-form!",-1216636000,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.algorithms.form-state","reset-form!","com.fulcrologic.fulcro.algorithms.form-state/reset-form!",-1216636000,null),(function (fulcro_mutation_env_symbol){
var map__64520 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__64520__$1 = (((((!((map__64520 == null))))?(((((map__64520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64520):map__64520);
var form_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64520__$1,new cljs.core.Keyword(null,"form-ident","form-ident",-387954473));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__64520,map__64520__$1,form_ident){
return (function com$fulcrologic$fulcro$algorithms$form_state$action(p__64524){
var map__64525 = p__64524;
var map__64525__$1 = (((((!((map__64525 == null))))?(((((map__64525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64525):map__64525);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64525__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64525__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,com.fulcrologic.fulcro.algorithms.form_state.pristine__GT_entity_STAR_,(function (){var or__4131__auto__ = form_ident;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ref;
}
})());

return null;
});})(map__64520,map__64520__$1,form_ident))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__64520,map__64520__$1,form_ident){
return (function (env){
var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__64520,map__64520__$1,form_ident))
], null);
}));
/**
 * Mutation: Mark a given form (recursively) or field complete.
 * 
 *   entity-ident - The ident of the entity to mark complete. This is optional, but if not supplied it will derive it from
 *               the ident of the invoking component.
 *   field - (optional) limit the marking to a single field.
 * 
 *   See `mark-complete*` for a function you can compose into your own mutations.
 */
com.fulcrologic.fulcro.algorithms.form_state.mark_complete_BANG_ = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.algorithms.form-state","mark-complete!","com.fulcrologic.fulcro.algorithms.form-state/mark-complete!",1441268369,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.algorithms.form-state","mark-complete!","com.fulcrologic.fulcro.algorithms.form-state/mark-complete!",1441268369,null),(function (fulcro_mutation_env_symbol){
var map__64530 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__64530__$1 = (((((!((map__64530 == null))))?(((((map__64530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64530):map__64530);
var entity_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64530__$1,new cljs.core.Keyword(null,"entity-ident","entity-ident",-1883769419));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64530__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__64530,map__64530__$1,entity_ident,field){
return (function com$fulcrologic$fulcro$algorithms$form_state$action(p__64535){
var map__64536 = p__64535;
var map__64536__$1 = (((((!((map__64536 == null))))?(((((map__64536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64536):map__64536);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64536__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64536__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var entity_ident_64849__$1 = (function (){var or__4131__auto__ = entity_ident;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ref;
}
})();
if(cljs.core.truth_(field)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_,entity_ident_64849__$1,field);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_,entity_ident_64849__$1);
}

return null;
});})(map__64530,map__64530__$1,entity_ident,field))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__64530,map__64530__$1,entity_ident,field){
return (function (env){
var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__64530,map__64530__$1,entity_ident,field))
], null);
}));
/**
 * Mutation: Mark a given form (recursively) or field incomplete.
 * 
 *   entity-ident - The ident of the entity to mark. This is optional, but if not supplied it will derive it from
 *               the ident of the invoking component.
 *   field - (optional) limit the marking to a single field.
 * 
 *   See `clear-complete*` for a function you can compose into your own mutations.
 */
com.fulcrologic.fulcro.algorithms.form_state.clear_complete_BANG_ = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.algorithms.form-state","clear-complete!","com.fulcrologic.fulcro.algorithms.form-state/clear-complete!",-143538490,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.algorithms.form-state","clear-complete!","com.fulcrologic.fulcro.algorithms.form-state/clear-complete!",-143538490,null),(function (fulcro_mutation_env_symbol){
var map__64547 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__64547__$1 = (((((!((map__64547 == null))))?(((((map__64547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64547):map__64547);
var entity_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64547__$1,new cljs.core.Keyword(null,"entity-ident","entity-ident",-1883769419));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64547__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__64547,map__64547__$1,entity_ident,field){
return (function com$fulcrologic$fulcro$algorithms$form_state$action(p__64551){
var map__64552 = p__64551;
var map__64552__$1 = (((((!((map__64552 == null))))?(((((map__64552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64552):map__64552);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64552__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64552__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var entity_ident_64853__$1 = (function (){var or__4131__auto__ = entity_ident;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ref;
}
})();
if(cljs.core.truth_(field)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,com.fulcrologic.fulcro.algorithms.form_state.clear_complete_STAR_,entity_ident_64853__$1,field);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,com.fulcrologic.fulcro.algorithms.form_state.clear_complete_STAR_,entity_ident_64853__$1);
}

return null;
});})(map__64547,map__64547__$1,entity_ident,field))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__64547,map__64547__$1,entity_ident,field){
return (function (env){
var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__64547,map__64547__$1,entity_ident,field))
], null);
}));

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.form_state.js.map
