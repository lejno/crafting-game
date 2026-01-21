import ResourceButton from "./ResourceButton";
import "./App.css";
import * as buildings from "./data/buildings";
import * as craftedGoods from "./data/craftedGoods";
import { useEffect, useRef, useState } from "react";

import CraftButton from "./CraftButton";
import CraftBuildingsPage from "./CraftBuildingsPage";
import BuildBuildingPage from "./BuildBuildingPage";
import Bookmark from "./Bookmark";

function App() {
  const [resources, setResources] = useState({
    iron: 1000,
    wood: 1000,
    stone: 1000,
  });

  const [production, setProduction] = useState({});
  const productionRef = useRef(production);
  const intervalsRef = useRef({});
  const [avCraftBuildings, setAvCraftBuildings] = useState({});

  useEffect(() => {
    productionRef.current = production;
  }, [production]);

  // useref of current ids? only values?
  // whole production as useref?
  // keep track of current intervals id?
  // if id existing change only value?
  // make the intervals inside the productions?

  useEffect(() => {
    const intervalIds = intervalsRef.current;

    for (const [name, { resource, interval }] of Object.entries(production)) {
      const id = `${name}-${resource}`;

      // Only create interval if it doesn't exist
      if (!intervalIds[id]) {
        intervalIds[id] = setInterval(() => {
          const current = productionRef.current[name]; // Read latest values
          if (current) {
            setResources((prev) => ({
              ...prev,
              [current.resource]:
                prev[current.resource] + current.amount * current.count,
            }));
          }
        }, interval);
      }
    }

    // Clean up intervals that are no longer in production
    Object.keys(intervalIds).forEach((id) => {
      const exists = Object.entries(production).some(
        ([name, { resource }]) => `${name}-${resource}` === id,
      );
      if (!exists) {
        clearInterval(intervalIds[id]);
        delete intervalIds[id];
      }
    });
  }, [production]);

  // Clean up all intervals on unmount only
  useEffect(() => {
    return () => {
      Object.values(intervalsRef.current).forEach((id) => clearInterval(id));
    };
  }, []);

  return (
    <div className="main">
      <div className="left">
        <p>wood: {resources.wood}</p>
        <p>stone: {resources.stone}</p>
        <p>iron: {resources.iron}</p>
        <p>
          {craftedGoods.plank.displayName}: {resources.plank}
        </p>
        <p>
          {craftedGoods.ironNails.displayName}:{resources.ironNails}
        </p>
        <ResourceButton
          resource={"wood"}
          resources={resources}
          setResources={setResources}
        />
        <ResourceButton
          resource={"stone"}
          resources={resources}
          setResources={setResources}
        />
        <ResourceButton
          resource={"iron"}
          resources={resources}
          setResources={setResources}
        />
      </div>

      <div className="right">
        <div className="right-bookmarks">
          <Bookmark bookmark={"Manage"} />
          <Bookmark bookmark={"Build"} />
        </div>
        <BuildBuildingPage
          buildings={buildings}
          setResources={setResources}
          resources={resources}
          production={production}
          setProduction={setProduction}
          setAvCraftBuildings={setAvCraftBuildings}
          avCraftBuildings={avCraftBuildings}
        />
        <CraftBuildingsPage avCraftBuildings={avCraftBuildings} />
      </div>
    </div>
  );
}

export default App;
