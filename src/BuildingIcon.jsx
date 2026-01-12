import { useState } from "react";

import BuildingUI from "./BuildingUI";

export default function BuildingIcon({ img }) {
  // const [showUI, setShowUI] = useState(false);

  // function handleClick() {
  //   setShowUI(!showUI);
  // }

  return (
    <>
      <img src={img} alt="" className="icon" />
      {/* {showUI && (
        <BuildingUI
          craftedGoods={craftedGoods}
          resources={resources}
          setResources={setResources}
        />
      )} */}
    </>
  );
}
