const getLocation = async () => {
  const res = await fetch(`http://localhost:3000/api/places`);
  const data = await res.json();

  return data;
};

const locationApiActions = {
  getLocation,
};

export default locationApiActions;
