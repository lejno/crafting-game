export default function Button({ resource, resources, setResources }) {
  function handleClick() {
    setResources((prev) => ({ ...prev, [resource]: prev[resource] + 1 }));
  }
  return (
    <>
      <button onClick={handleClick}>Click for {resource} </button>
    </>
  );
}
