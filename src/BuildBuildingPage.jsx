import Build from "./Build.jsx";

export default function BuildBuildingPage({
  buildings,
  setResources,
  resources,
  production,
  setProduction,
  setAvCraftBuildings,
  avCraftBuildings,
}) {
  const array = Object.entries(buildings);

  return array.map((entry) => (
    <Build
      key={entry[0]}
      building={entry[1]}
      setResources={setResources}
      resources={resources}
      production={production}
      setProduction={setProduction}
      setAvCraftBuildings={setAvCraftBuildings}
      avCraftBuildings={avCraftBuildings}
    />
  ));
}
