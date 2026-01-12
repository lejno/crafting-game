export default function Button({ resource, resources, setResources }) {
  // function handleClick() {
  //   setResources((prev) => ({ ...prev, [resource]: prev[resource] + 1 }));
  // }

  function handleClick() {
    const newResources = { ...resources };

    newResources[resource] = (newResources[resource] || 0) + 1;

    setResources(newResources);
  }
  return (
    <>
      <button onClick={handleClick}>Click for {resource} </button>
    </>
  );
}
