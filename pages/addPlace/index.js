import { Box, Container, Heading } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../../components/Header';

export default function AddPlace() {
  const AddPlaceComponent = dynamic(
    () => import('../../components/AddPlaceComponent/index'),
    {
      ssr: false,
    }
  );

  const [coords, setCoords] = useState([]);

  const location = useSelector((state) => state.location.data);

  useEffect(() => {
    setCoords([location.x, location.y]);
  }, [location]);

  console.log(coords);

  return (
    <Container>
      <Header />
      <Heading variant="brand">
        Gracias por aportar a esta comunidad hermosa.
      </Heading>
      <Box
        borderRadius="15px"
        my={20}
        width="100%"
        height="700px"
        overflow="hidden"
      >
        <AddPlaceComponent />
      </Box>
    </Container>
  );
}
