import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import Layout from 'components/Layout';

export default function Home() {
  return (
    <Layout>
      <Heading as='h1'>Disc Storage</Heading>
      {/* <Box w='100%' h='calc(100% - 50px + 6.4px)' bg='blue'></Box> */}
      <Grid
        templateColumns='6fr 5fr'
        templateRows='1fr'
        gap={4}
        w='100%'
        h='calc(100% - 50px + 6.4px)'
      >
        <GridItem w='100%' border='1px solid black'>
          <Flex h='100%' direction='column'>
            <Box as='section' h='10%' bg='red'>
              <Text as='p'>Sorting</Text>
            </Box>
            <Box as='section' h='90%'>
              <Text as='p'>Bags</Text>
            </Box>
          </Flex>
        </GridItem>
        <GridItem w='100%' border='1px solid black'>
          <Text as='p'>Disc Grid</Text>
        </GridItem>
      </Grid>
    </Layout>
  );
}
