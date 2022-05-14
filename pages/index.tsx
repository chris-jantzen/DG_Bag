import React from 'react';
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import Bag from 'components/discs/Bag';
import Layout from 'components/Layout';

export default function Home() {
  const bagIds = [1];
  return (
    <Layout>
      {/* <Heading as='h1'>Disc Storage</Heading> */}
      <Grid templateColumns='6fr 5fr' templateRows='1fr' gap={0} w='100%' h='100%'>
        <GridItem w='100%' border='1px solid black'>
          {/* TODO: take the whole left side into its own component for sorting later */}
          <Flex h='100%' direction='column'>
            <Box as='section' h='10%' bg='#EF233C' color='#fff' fontWeight='bold'>
              <Flex justifyContent='flex-start' alignItems='center' w='full' h='full'>
                <Text as='p' px={4}>
                  Sorting
                </Text>
              </Flex>
            </Box>
            <Flex
              as='section'
              paddingTop={2}
              h='90%'
              flexDirection='column'
              overflowY='auto'
              overflowX='hidden'
            >
              {bagIds.map((bag) => (
                <Bag key={bag} />
              ))}
            </Flex>
          </Flex>
        </GridItem>
        <GridItem w='100%' border='1px solid black'>
          <Text as='p'>Disc Grid</Text>
        </GridItem>
      </Grid>
    </Layout>
  );
}
