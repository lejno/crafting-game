function BuildingIcon({ buildingKey, building, onClick }) {
  return (
    <button
      onClick={() => onClick(buildingKey, building)}
      className="building-icon-container"
    >
      <img className="building-icon" src={building.img} alt={building.name} />
      <div className="building-info">{building.name}</div>
    </button>
  );
}

export default function CraftBuildingsPage({ avCraftBuildings }) {
  function handleClick(buildingKey, building) {
    console.log(buildingKey, building);
  }

  const array = Object.entries(avCraftBuildings);

  return array.map((entry) => (
    <BuildingIcon
      key={entry[0]}
      buildingKey={entry[0]}
      building={entry[1]}
      onClick={handleClick}
    />
  ));
}
