import ResourceButton from "./ResourceButton";
import { useLocalStorage } from "./useLocalStorage";

import "./App.css";

import * as buildings from "./data/buildings";
import HouseBuild from "./HouseBuild";

function App() {
  const [resources, setResources] = useLocalStorage("resources", {
    wood: 0,
    stone: 0,
    iron: 0,
  });

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
      <HouseBuild setWood={resources.setWood} />
    </>
  );
}

export default App;
