import { Box, Container, Heading } from '@chakra-ui/react';
import { Front } from '../components/Front';
import { Header } from '../components/Header';
import { Places } from '../components/PlacesRecommendations';
import dynamic from 'next/dynamic';

export default function Home(data) {
  const FrontMap = dynamic(() => import('../components/FrontMap/index'), {
    ssr: false,
  });

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&family=Spline+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Container>
        <Header />
        <Front />
        <Places places={data} />
        <Box
          my={20}
          width="100%"
          height="700px"
          overflow="hidden"
          borderRadius="15px"
        >
          <FrontMap />
        </Box>
      </Container>
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3000/api/places`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
