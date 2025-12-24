export default function Build({
  setResources,
  resources,
  building,
  production,
  setProduction,
}) {
  function handleClick() {
    const canBuild = Object.entries(building.cost).every(
      ([resource, cost]) => resources[resource] >= cost
    );

    if (!canBuild) {
      alert("Not enough resources!");
      return;
    }

    const newResources = { ...resources };
    Object.entries(building.cost).forEach(([resource, cost]) => {
      newResources[resource] -= cost;
    });

    const newProduction = { ...production };
    if (building.income) {
      Object.entries(building.income).forEach(
        ([resource, [amount, interval]]) => {
          const key = `${building.name}-${resource}`;
          if (newProduction[key]) {
            newProduction[key].count += 1;
          } else {
            newProduction[key] = { resource, amount, interval, count: 1 };
          }
        }
      );
    }

    setResources(newResources);
    setProduction(newProduction);
  }

  return (
    <button onClick={handleClick}>
      {building.name}
      {building.cost && (
        <span>
          {" ("}
          {Object.entries(building.cost)
            .map(([resource, cost]) => `${resource}: ${cost}`)
            .join(", ")}
          {")"}
        </span>
      )}
    </button>
  );
}
