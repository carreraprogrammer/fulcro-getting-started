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
    (dom/div "Name: " name)))                               ;A component Person is called where the id and names are destructured from the state

(def ui-person (comp/factory Person {:keyfn :person/id}))   ;An instance is created from the Person component that uses as unique identifier :person/id
(defsc Sample [this {:keys [sample sample2]}]
   {}
  (dom/div
    (ui-person sample2)))                                    ;ui-person acts as a factory function that takes a single argument and returns and instance of the person component with the properties in sample

(defonce APP (app/fulcro-app))

(defn ^:export init []
  (app/mount! APP Sample "app"))

(comment
  (reset! (::app/state-atom APP) {:sample {:person/id 1
                                           :person/name "Daniel"}
                                  :sample2 {
                                            :person/id 2
                                            :person/name "I finaly understood!"
                                            }
                                  })
  (app/schedule-render! APP))