import ResourceButton from "./ResourceButton";
import "./App.css";
import * as buildings from "./data/buildings";
import Build from "./Build";
import { useEffect, useState } from "react";
import { validate } from "plotly.js-dist-min";

function App() {
  const [resources, setResources] = useState({
    wood: 1000,
    stone: 1000,
    iron: 1000,
  });

  const [income, setIncome] = useState({});

  useEffect(() => {
    const intervalIds = [];
    for (const [resource, interval] of Object.entries(income)) {
      const id = setInterval(() => {
        setResources((prev) => ({
          ...prev,
          [resource]: prev[resource] + interval[0],
        }));
      }, interval[1]);
      intervalIds.push(id);
    }
    return () => {
      intervalIds.forEach((id) => clearInterval(id));
    };
  }, [income]);

  return (
    <>
      <p>Your wood: {resources.wood}</p>
      <p>Your stone: {resources.stone}</p>
      <p>Your iron: {resources.iron}</p>

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
      <Build
        setResources={setResources}
        resources={resources}
        building={buildings.farm}
      />
      <Build
        setResources={setResources}
        resources={resources}
        building={buildings.stoneMill}
        income={income}
        setIncome={setIncome}
      />
    </>
  );
}

export default App;
