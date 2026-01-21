export default function BuildingIcon({ buildingKey, building, onClick }) {
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
