import BuildingIcon from "./BuildingIcon";
export default function BuildingsBar({ buildings }) {
  return (
    <div className="buildings-bar">
      <BuildingIcon img={buildings.sawMill.img}></BuildingIcon>
    </div>
  );
}
