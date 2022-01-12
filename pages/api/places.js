const places = [
  {
    id: 1,
    name: 'Starbucks',
    location: 'Av. siempre viva 283',
    type: 'Cafeteria',
    wifi: 'si',
    price: 'consumición',
    coords: [-34.6083, -58.371234],
  },
  {
    id: 2,
    name: 'Café martinez',
    location: 'Presidente Menem 483',
    type: 'Cafeteria',
    wifi: 'si',
    price: 'consumición',
    coords: [-34.6083, -54.371234],
  },
  {
    id: 3,
    name: 'We work',
    location: 'San sebastian torrico 123',
    type: 'Co-work',
    wifi: 'si',
    price: 'pago',
    coords: [-33.6083, -54.371234],
  },
  {
    id: 4,
    name: 'Plaza alsina',
    location: 'Rivadavia 83',
    type: 'Plaza',
    wifi: 'si',
    price: 'gratis',
    coords: [-31.6083, -54.371234],
  },
  {
    id: 5,
    name: 'Bar resto',
    location: 'Callao 1220',
    type: 'Bar',
    wifi: 'si',
    price: 'consumición',
    coords: [-33.6083, -52.371234],
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('content-type', 'application/json');
  res.send(JSON.stringify(places));
};
