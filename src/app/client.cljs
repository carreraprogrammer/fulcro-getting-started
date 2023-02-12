(ns app.client
  (:require
    [com.fulcrologic.fulcro.application :as app]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :as dom]
    [com.fulcrologic.fulcro.algorithms.merge :as merge]
    [com.fulcrologic.fulcro.algorithms.data-targeting :as targeting]))

(defsc Person [this {:person/keys [id name] :as props}]
  {}
  (dom/div
    (dom/div "Name: " name)))

(def ui-person (comp/factory Person {:keyfn :person/id}))
(defsc Sample [this {:keys [sample]}]
   {}
  (dom/div
    (ui-person sample)))

(defonce APP (app/fulcro-app))

(defn ^:export init []
  (app/mount! APP Sample "app"))

(comment
  (reset! (::app/state-atom APP) {:sample {:person/id 1
                                           :person/name "Daniel"}
                                  })
  (app/schedule-render! APP))