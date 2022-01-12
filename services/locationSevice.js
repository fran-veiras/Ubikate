const getLocation = async (id) => {
  const res = await fetch(`http://localhost:3000/api/places`);
  const data = await res.json();
  const dataWithId = data.filter((val) => val.id === id);

  return dataWithId;
};

const locationApiActions = {
  getLocation,
};

export default locationApiActions;
