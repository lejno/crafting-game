export default function CraftButton({ addToCraftQueue, craftedGood }) {
  function handleClick() {
    addToCraftQueue(craftedGood);
  }

  return (
    <button onClick={handleClick}>Craft: {craftedGood.displayName}</button>
  );
}
