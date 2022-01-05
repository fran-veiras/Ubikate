const places = [
  {
    name: 'Starbucks',
    location: 'Av. siempre viva 283',
    type: 'Cafeteria',
    wifi: 'si',
    price: 'consumición',
  },
  {
    name: 'Café martinez',
    location: 'Presidente Menem 483',
    type: 'Cafeteria',
    wifi: 'si',
    price: 'consumición',
  },
  {
    name: 'We work',
    location: 'San sebastian torrico 123',
    type: 'Co-work',
    wifi: 'si',
    price: 'pago',
  },
  {
    name: 'Plaza alsina',
    location: 'Rivadavia 83',
    type: 'Plaza',
    wifi: 'si',
    price: 'gratis',
  },
  {
    name: 'Bar resto',
    location: 'Callao 1220',
    type: 'Bar',
    wifi: 'si',
    price: 'consumición',
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('content-type', 'application/json');
  res.send(JSON.stringify(places));
};
