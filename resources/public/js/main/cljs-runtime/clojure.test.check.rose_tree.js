goog.provide('clojure.test.check.rose_tree');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IIndexed}
*/
clojure.test.check.rose_tree.RoseTree = (function (root,children){
this.root = root;
this.children = children;
this.cljs$lang$protocol_mask$partition0$ = 16;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
clojure.test.check.rose_tree.RoseTree.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0))){
return self__.root;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(1))){
return self__.children;
} else {
throw (new Error("Index out of bounds in rose tree"));

}
}
});

clojure.test.check.rose_tree.RoseTree.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0))){
return self__.root;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(1))){
return self__.children;
} else {
return not_found;

}
}
});

clojure.test.check.rose_tree.RoseTree.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
});

clojure.test.check.rose_tree.RoseTree.cljs$lang$type = true;

clojure.test.check.rose_tree.RoseTree.cljs$lang$ctorStr = "clojure.test.check.rose-tree/RoseTree";

clojure.test.check.rose_tree.RoseTree.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"clojure.test.check.rose-tree/RoseTree");
});

/**
 * Positional factory function for clojure.test.check.rose-tree/RoseTree.
 */
clojure.test.check.rose_tree.__GT_RoseTree = (function clojure$test$check$rose_tree$__GT_RoseTree(root,children){
return (new clojure.test.check.rose_tree.RoseTree(root,children));
});

/**
 * Returns the root of a Rose tree.
 */
clojure.test.check.rose_tree.root = (function clojure$test$check$rose_tree$root(rose){
return rose.root;
});
/**
 * Returns the children of the root of the Rose tree.
 */
clojure.test.check.rose_tree.children = (function clojure$test$check$rose_tree$children(rose){
return rose.children;
});
clojure.test.check.rose_tree.make_rose = (function clojure$test$check$rose_tree$make_rose(root,children){
return (new clojure.test.check.rose_tree.RoseTree(root,children));
});
/**
 * Exclude the nth value in a collection.
 */
clojure.test.check.rose_tree.exclude_nth = (function clojure$test$check$rose_tree$exclude_nth(n,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__5804__auto__ = cljs.core.seq(coll);
if(temp__5804__auto__){
var s = temp__5804__auto__;
if((n === (0))){
return cljs.core.rest(coll);
} else {
return cljs.core.cons(cljs.core.first(s),(function (){var G__44369 = (n - (1));
var G__44370 = cljs.core.rest(s);
return (clojure.test.check.rose_tree.exclude_nth.cljs$core$IFn$_invoke$arity$2 ? clojure.test.check.rose_tree.exclude_nth.cljs$core$IFn$_invoke$arity$2(G__44369,G__44370) : clojure.test.check.rose_tree.exclude_nth.call(null,G__44369,G__44370));
})());
}
} else {
return null;
}
}),null,null));
});
/**
 * Turn a tree of trees into a single tree. Does this by concatenating
 *   children of the inner and outer trees.
 */
clojure.test.check.rose_tree.join = (function clojure$test$check$rose_tree$join(rose){
var outer_root = clojure.test.check.rose_tree.root(rose);
var outer_children = clojure.test.check.rose_tree.children(rose);
var inner_root = clojure.test.check.rose_tree.root(outer_root);
var inner_children = clojure.test.check.rose_tree.children(outer_root);
return clojure.test.check.rose_tree.make_rose(inner_root,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.join,outer_children),inner_children));
});
/**
 * Puts a value `x` into a Rose tree, with no children.
 */
clojure.test.check.rose_tree.pure = (function clojure$test$check$rose_tree$pure(x){
return clojure.test.check.rose_tree.make_rose(x,cljs.core.PersistentVector.EMPTY);
});
/**
 * Applies functions `f` to all values in the tree.
 */
clojure.test.check.rose_tree.fmap = (function clojure$test$check$rose_tree$fmap(f,rose){
return clojure.test.check.rose_tree.make_rose((function (){var G__44372 = clojure.test.check.rose_tree.root(rose);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44372) : f.call(null,G__44372));
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44371_SHARP_){
return (clojure.test.check.rose_tree.fmap.cljs$core$IFn$_invoke$arity$2 ? clojure.test.check.rose_tree.fmap.cljs$core$IFn$_invoke$arity$2(f,p1__44371_SHARP_) : clojure.test.check.rose_tree.fmap.call(null,f,p1__44371_SHARP_));
}),clojure.test.check.rose_tree.children(rose)));
});
/**
 * Takes a Rose tree (m) and a function (k) from
 *   values to Rose tree and returns a new Rose tree.
 *   This is the monadic bind (>>=) for Rose trees.
 */
clojure.test.check.rose_tree.bind = (function clojure$test$check$rose_tree$bind(m,k){
return clojure.test.check.rose_tree.join(clojure.test.check.rose_tree.fmap(k,m));
});
/**
 * Returns a new Rose tree whose values pass `pred`. Values who
 *   do not pass `pred` have their children cut out as well.
 *   Takes a list of roses, not a rose
 */
clojure.test.check.rose_tree.filter = (function clojure$test$check$rose_tree$filter(pred,rose){
return clojure.test.check.rose_tree.make_rose(clojure.test.check.rose_tree.root(rose),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44374_SHARP_){
return (clojure.test.check.rose_tree.filter.cljs$core$IFn$_invoke$arity$2 ? clojure.test.check.rose_tree.filter.cljs$core$IFn$_invoke$arity$2(pred,p1__44374_SHARP_) : clojure.test.check.rose_tree.filter.call(null,pred,p1__44374_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44375_SHARP_){
var G__44376 = clojure.test.check.rose_tree.root(p1__44375_SHARP_);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__44376) : pred.call(null,G__44376));
}),clojure.test.check.rose_tree.children(rose))));
});
/**
 * Create a seq of vectors, where each rose in turn, has been replaced
 *   by its children.
 */
clojure.test.check.rose_tree.permutations = (function clojure$test$check$rose_tree$permutations(roses){
var iter__4523__auto__ = (function clojure$test$check$rose_tree$permutations_$_iter__44378(s__44379){
return (new cljs.core.LazySeq(null,(function (){
var s__44379__$1 = s__44379;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__44379__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__44389 = cljs.core.first(xs__6360__auto__);
var rose = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44389,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44389,(1),null);
var iterys__4519__auto__ = ((function (s__44379__$1,vec__44389,rose,index,xs__6360__auto__,temp__5804__auto__){
return (function clojure$test$check$rose_tree$permutations_$_iter__44378_$_iter__44380(s__44381){
return (new cljs.core.LazySeq(null,((function (s__44379__$1,vec__44389,rose,index,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__44381__$1 = s__44381;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__44381__$1);
if(temp__5804__auto____$1){
var s__44381__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__44381__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__44381__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__44383 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__44382 = (0);
while(true){
if((i__44382 < size__4522__auto__)){
var child = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__44382);
cljs.core.chunk_append(b__44383,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(roses,index,child));

var G__44416 = (i__44382 + (1));
i__44382 = G__44416;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44383),clojure$test$check$rose_tree$permutations_$_iter__44378_$_iter__44380(cljs.core.chunk_rest(s__44381__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44383),null);
}
} else {
var child = cljs.core.first(s__44381__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(roses,index,child),clojure$test$check$rose_tree$permutations_$_iter__44378_$_iter__44380(cljs.core.rest(s__44381__$2)));
}
} else {
return null;
}
break;
}
});})(s__44379__$1,vec__44389,rose,index,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__44379__$1,vec__44389,rose,index,xs__6360__auto__,temp__5804__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(clojure.test.check.rose_tree.children(rose)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,clojure$test$check$rose_tree$permutations_$_iter__44378(cljs.core.rest(s__44379__$1)));
} else {
var G__44418 = cljs.core.rest(s__44379__$1);
s__44379__$1 = G__44418;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,roses,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
/**
 * Apply `f` to the sequence of Rose trees `roses`.
 */
clojure.test.check.rose_tree.zip = (function clojure$test$check$rose_tree$zip(f,roses){
return clojure.test.check.rose_tree.make_rose(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.root,roses)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44400_SHARP_){
return (clojure.test.check.rose_tree.zip.cljs$core$IFn$_invoke$arity$2 ? clojure.test.check.rose_tree.zip.cljs$core$IFn$_invoke$arity$2(f,p1__44400_SHARP_) : clojure.test.check.rose_tree.zip.call(null,f,p1__44400_SHARP_));
}),clojure.test.check.rose_tree.permutations(roses)));
});
clojure.test.check.rose_tree.remove = (function clojure$test$check$rose_tree$remove(roses){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,_){
return clojure.test.check.rose_tree.exclude_nth(index,roses);
}),roses),clojure.test.check.rose_tree.permutations(cljs.core.vec(roses)));
});
/**
 * Returns an equivalent lazy seq that is not chunked.
 */
clojure.test.check.rose_tree.unchunk = (function clojure$test$check$rose_tree$unchunk(a_lazy_seq){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(Infinity,a_lazy_seq);
});
clojure.test.check.rose_tree.shrink = (function clojure$test$check$rose_tree$shrink(f,roses){
if(cljs.core.seq(roses)){
return clojure.test.check.rose_tree.make_rose(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.root,roses)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44402_SHARP_){
return (clojure.test.check.rose_tree.shrink.cljs$core$IFn$_invoke$arity$2 ? clojure.test.check.rose_tree.shrink.cljs$core$IFn$_invoke$arity$2(f,p1__44402_SHARP_) : clojure.test.check.rose_tree.shrink.call(null,f,p1__44402_SHARP_));
}),clojure.test.check.rose_tree.remove(clojure.test.check.rose_tree.unchunk(roses))));
} else {
return clojure.test.check.rose_tree.make_rose((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),cljs.core.PersistentVector.EMPTY);
}
});
/**
 * Returns a sequence of rose trees representing shrinks that discard
 *   half of the vector of roses.
 */
clojure.test.check.rose_tree.bifurcate = (function clojure$test$check$rose_tree$bifurcate(f,roses){
if(((4) <= cljs.core.count(roses))){
var left_count = cljs.core.quot(cljs.core.count(roses),(2));
return (new cljs.core.LazySeq(null,((function (left_count){
return (function (){
return cljs.core.cons((function (){var G__44403 = f;
var G__44404 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(roses,(0),left_count);
return (clojure.test.check.rose_tree.shrink_vector_STAR_.cljs$core$IFn$_invoke$arity$2 ? clojure.test.check.rose_tree.shrink_vector_STAR_.cljs$core$IFn$_invoke$arity$2(G__44403,G__44404) : clojure.test.check.rose_tree.shrink_vector_STAR_.call(null,G__44403,G__44404));
})(),(new cljs.core.LazySeq(null,((function (left_count){
return (function (){
return (new cljs.core.List(null,(function (){var G__44405 = f;
var G__44406 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(roses,left_count);
return (clojure.test.check.rose_tree.shrink_vector_STAR_.cljs$core$IFn$_invoke$arity$2 ? clojure.test.check.rose_tree.shrink_vector_STAR_.cljs$core$IFn$_invoke$arity$2(G__44405,G__44406) : clojure.test.check.rose_tree.shrink_vector_STAR_.call(null,G__44405,G__44406));
})(),null,(1),null));
});})(left_count))
,null,null)));
});})(left_count))
,null,null));
} else {
return null;
}
});
clojure.test.check.rose_tree.shrink_vector_STAR_ = (function clojure$test$check$rose_tree$shrink_vector_STAR_(f,roses){
var thing = clojure.test.check.rose_tree.shrink(f,roses);
return clojure.test.check.rose_tree.make_rose(clojure.test.check.rose_tree.root(thing),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.bifurcate(f,roses),clojure.test.check.rose_tree.children(thing)));
});
clojure.test.check.rose_tree.shrink_vector = (function clojure$test$check$rose_tree$shrink_vector(f,roses){
if(cljs.core.vector_QMARK_(roses)){
} else {
throw (new Error("Assert failed: (vector? roses)"));
}

var rose = clojure.test.check.rose_tree.shrink_vector_STAR_(f,roses);
var empty_rose = clojure.test.check.rose_tree.make_rose((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),cljs.core.PersistentVector.EMPTY);
if(cljs.core.empty_QMARK_(roses)){
return rose;
} else {
return clojure.test.check.rose_tree.make_rose(clojure.test.check.rose_tree.root(rose),cljs.core.cons(empty_rose,clojure.test.check.rose_tree.children(rose)));
}
});
/**
 * Return a new rose-tree whose depth-one children
 *   are the children from depth one _and_ two of the input
 *   tree.
 */
clojure.test.check.rose_tree.collapse = (function clojure$test$check$rose_tree$collapse(rose){
return clojure.test.check.rose_tree.make_rose(clojure.test.check.rose_tree.root(rose),(function (){var the_children = clojure.test.check.rose_tree.children(rose);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.collapse,the_children),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.collapse,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.test.check.rose_tree.children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([the_children], 0))));
})());
});
clojure.test.check.rose_tree.make_stack = (function clojure$test$check$rose_tree$make_stack(children,stack){
var temp__5802__auto__ = cljs.core.seq(children);
if(temp__5802__auto__){
var s = temp__5802__auto__;
return cljs.core.cons(children,stack);
} else {
return stack;
}
});
/**
 * Create a lazy-seq of all of the (unique) nodes in a shrink-tree.
 *   This assumes that two nodes with the same value have the same children.
 *   While it's not common, it's possible to create trees that don't
 *   fit that description. This function is significantly faster than
 *   brute-force enumerating all of the nodes in a tree, as there will
 *   be many duplicates.
 */
clojure.test.check.rose_tree.seq = (function clojure$test$check$rose_tree$seq(rose){
var helper = (function clojure$test$check$rose_tree$seq_$_helper(rose__$1,seen,stack){
var node = clojure.test.check.rose_tree.root(rose__$1);
var the_children = clojure.test.check.rose_tree.children(rose__$1);
return (new cljs.core.LazySeq(null,((function (node,the_children){
return (function (){
if(cljs.core.not((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(node) : seen.call(null,node)))){
return cljs.core.cons(node,((cljs.core.seq(the_children))?clojure$test$check$rose_tree$seq_$_helper(cljs.core.first(the_children),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,node),clojure.test.check.rose_tree.make_stack(cljs.core.rest(the_children),stack)):(function (){var temp__5804__auto__ = cljs.core.seq(stack);
if(temp__5804__auto__){
var s = temp__5804__auto__;
var f = cljs.core.ffirst(s);
var r = cljs.core.rest(cljs.core.first(s));
return clojure$test$check$rose_tree$seq_$_helper(f,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,node),clojure.test.check.rose_tree.make_stack(r,cljs.core.rest(s)));
} else {
return null;
}
})()));
} else {
var temp__5804__auto__ = cljs.core.seq(stack);
if(temp__5804__auto__){
var s = temp__5804__auto__;
var f = cljs.core.ffirst(s);
var r = cljs.core.rest(cljs.core.first(s));
return clojure$test$check$rose_tree$seq_$_helper(f,seen,clojure.test.check.rose_tree.make_stack(r,cljs.core.rest(s)));
} else {
return null;
}
}
});})(node,the_children))
,null,null));
});
return helper(rose,cljs.core.PersistentHashSet.EMPTY,cljs.core.List.EMPTY);
});

//# sourceMappingURL=clojure.test.check.rose_tree.js.map
