export default function Build({
  setResources,
  resources,
  building,
  income,
  setIncome,
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

    const newIncome = { ...income };
    Object.entries(building.income).forEach(([resource, [amount, time]]) => {
      if (newIncome[resource]) {
        newIncome[resource][0] += amount; // Add to existing amount
      } else {
        newIncome[resource] = [amount, time]; // Create new entry
      }
    });

    setResources(newResources);
    setIncome(newIncome);
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
