import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import { DiscProps } from "../../models/disc";

const Disc: React.FunctionComponent<DiscProps> = ({ disc }) => {
  return (
    <Box paddingX={15} paddingY={1}>
      <Flex
        justifyContent='flex-start'
        w={300}
        h={50}
        borderRadius='0.25rem'
        boxShadow='1px 1px 3px gray'
        _hover={{ boxShadow: '3px 3px 5px #999', cursor: 'pointer' }}
      >
        <Flex
          backgroundColor={disc.color}
          justifyContent='center'
          alignItems='center'
          borderRadius='0.25rem 0 0 0.25rem'
          w={30}
          h='full'
        >
          <Text as='p'>X</Text>
        </Flex>
        <Flex w='full' h='full'>
          {/* Basic disc info */}
          <Box w='85%'>
            <Flex
              direction='column'
              lineHeight='0.8rem'
              fontSize='0.95rem'
              paddingLeft={2}
              justifyContent='space-evenly'
              width='70%'
              height='full'
            >
              <Text as='p' fontWeight='bold'>
                {disc.name}
              </Text>
              <Flex direction='row'>
                <Text as='em'>{disc.plastic}</Text>
                {disc.weight && (
                  <Text as='p' paddingLeft={1}>
                    ({disc.weight})
                  </Text>
                )}
              </Flex>
            </Flex>
          </Box>
          {/* Flight numbers */}
          <Box w='15%'>
            <Grid
              gridTemplateColumns='repeat(2, 1fr)'
              gridTemplateRows='repeat(2, 1fr)'
              height='full'
              borderLeft='1px solid rgba(232, 232, 232, 0.5)'
              textAlign='center'
            >
              <GridItem backgroundColor='rgba(232, 232, 232, 0.5)'>{disc.speed}</GridItem>
              <GridItem>{disc.glide}</GridItem>
              <GridItem>{disc.turn}</GridItem>
              <GridItem backgroundColor='rgba(232, 232, 232, 0.5)'>{disc.fade}</GridItem>
            </Grid>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Disc;
