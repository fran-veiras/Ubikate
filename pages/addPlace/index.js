import { Container, Heading } from '@chakra-ui/react';
import { Header } from '../../components/Header';

export default function addPlace() {
  const searchLocation = async () => {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?key=${process.env.API_KEY}&place_id='Buenosaires'&fields=formatted_address,icon,name,photos,place_id,types,photos`;
    const res = await fetch(url);
    const resJson = await res.json();

    return resJson;
  };

  return (
    <Container>
      <Header />
      <Heading variant="brand">
        Bienvenido/a nos alegra que quieras contribuir..
      </Heading>
    </Container>
  );
}
