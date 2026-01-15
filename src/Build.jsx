import placeholder from "./assets/placeholder.png";

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
    <button onClick={handleClick} className="building-icon-container">
      <img className="building-icon" src={placeholder} alt={building.name} />
      {building.cost && (
        <div className="building-cost-overlay">
          {Object.entries(building.cost).map(([resource, amount]) => (
            <div key={resource} className="cost-item">
              {resource}: {amount}
            </div>
          ))}
        </div>
      )}
      <div className="building-info">{building.name}</div>
    </button>
  );
}
