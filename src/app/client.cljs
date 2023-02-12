(ns app.client
  (:require
    [com.fulcrologic.fulcro.application :as app]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :as dom]
    [com.fulcrologic.fulcro.algorithms.merge :as merge]
    [com.fulcrologic.fulcro.algorithms.data-targeting :as targeting]))

(defsc Car [this {:car/keys [id model] :as props}]
  {}
    (dom/div
      "Model: " model))                         ;A component Car is looking into a car map, and taking the asign variables to the keys :car/id and car/model

(def ui-car (comp/factory Car {:keyfn :car/id}))

(defsc Person [this {:person/keys [id name ] :as props}]
  {:query [:person/id :person/name]                         ; The :query parameter is used to specify the data that the component needs from the state in order to render properly
   :ident :person/id}                                       ; This is a unique identifier for the component
  (dom/div
    (dom/div
    "Name: " name)
    #_#_(dom/h3 "Cars")
    (dom/ul
      (map ui-car cars))))                               ;A component Person is called where the id and names are destructured from the state

(def ui-person (comp/factory Person {:keyfn :person/id}))   ;An instance is created from the Person component that uses as unique identifier :person/id
(defsc Sample [this {:keys [sample]}]
   {}
  (dom/div
    (ui-person sample)))                                    ;ui-person acts as a factory function that takes a single argument and returns and instance of the person component with the properties in sample

(defonce APP (app/fulcro-app))

(defn ^:export init []
  (app/mount! APP Sample "app"))

(comment
  (reset! (::app/state-atom APP) {:sample {:person/id   1
                                           :person/name "Daniel"
                                           :person/cars [{
                                                          :car/id    22
                                                          :car/model "Escort"
                                                          }]}
                                  })
  (app/schedule-render! APP))