import CraftButton from "./CraftButton";
import { useState, useEffect } from "react";

// Add item to queue
export default function BuildingUI({ setResources, resources, craftedGoods }) {
  const [craftQueue, setCraftQueue] = useState([]);
  const [isCrafting, setIsCrafting] = useState(false);

  const addToCraftQueue = (craftedGood) => {
    const canCraft = Object.entries(craftedGood.cost).every(
      ([resource, cost]) => resources[resource] >= cost
    );
    if (!canCraft) {
      alert("Not enough resources!");
      return;
    }
    setCraftQueue((prev) => [...prev, craftedGood]);
  };

  useEffect(() => {
    if (isCrafting || craftQueue.length === 0) return;

    const craftedGood = craftQueue[0];
    setIsCrafting(true);

    setResources((prev) => {
      const newResources = { ...prev };
      Object.entries(craftedGood.cost).forEach(([resource, cost]) => {
        newResources[resource] -= cost;
      });
      return newResources;
    });

    setTimeout(() => {
      setResources((prev) => ({
        ...prev,
        [craftedGood.name]: (prev[craftedGood.name] || 0) + craftedGood.amount,
      }));
      setCraftQueue((prev) => prev.slice(1));
      setIsCrafting(false);
    }, craftedGood.time);
  }, [craftQueue, isCrafting, setResources]);

  return (
    <CraftButton
      resources={resources}
      addToCraftQueue={addToCraftQueue}
      craftedGood={craftedGoods.plank}
    />
  );
}
