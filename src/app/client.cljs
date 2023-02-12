(ns app.client
  (:require
    [com.fulcrologic.fulcro.application :as app]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :as dom]))

(defsc Sample [this props]
  {}
  (dom/div "HELLO WORLD!"))

(defonce APP (app/fulcro-app))

(defn f [x]
  (+ 2 2)
  (* x x))

(defn ^:export init []
  (app/mount! APP Sample "app"))

(comment
  (def a 33))