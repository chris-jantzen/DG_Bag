import { Box, Flex, Text } from '@chakra-ui/react';
import Disc from './Disc';
import { DiscProperties } from "../../models/disc";
import React from 'react';

const Bag: React.FC = () => {
  const bag = { name: 'BX3' };
  const discs: DiscProperties[] = [
    {
      name: 'Undertaker',
      id: '1',
      manufacturer: 'Discraft',
      plastic: 'Titanium',
      weight: 173,
      speed: 9,
      glide: 5,
      turn: -1,
      fade: 2,
      color: '#d52b57',
    },
    {
      name: 'Vulture',
      id: '2',
      manufacturer: 'Discraft',
      plastic: 'Titanium',
      weight: 172,
      speed: 10,
      glide: 5,
      turn: 0,
      fade: 2,
      color: '#b115eb',
    },
    {
      name: 'P Model S',
      id: '3',
      manufacturer: 'Prodigy',
      plastic: 'Base Grip',
      weight: 173,
      speed: 3,
      glide: 5,
      turn: 0,
      fade: 2,
      color: '#eb7515',
    },
    {
      name: 'P Model S',
      id: '4',
      manufacturer: 'Prodigy',
      plastic: 'Base Grip',
      weight: 175,
      speed: 3,
      glide: 5,
      turn: 0,
      fade: 2,
      color: '#fff',
    },
  ];
  return (
    <>
      <Box borderBottom='1px solid #cdcdcd'>
        <Text paddingLeft={15}>{bag.name}</Text>
      </Box>
      <Flex w='100%' direction='row' flexWrap='wrap'>
        {discs.map((disc) => (
          <Disc disc={disc} key={disc.id} />
        ))}
      </Flex>
    </>
  );
};

export default Bag;
