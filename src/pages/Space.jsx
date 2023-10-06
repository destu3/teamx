import { useState } from 'react';
import { Stage, Sprite, Text, useTick } from '@pixi/react'; // root  container for all entities
import Planet from '../resources/saturn.png';

const Space = () => {
  return (
    <Stage
      width={600}
      height={600}
      options={{
        backgroundColor: 0x2980b9,
        antialias: true,
      }}
    >
      <Planet />
    </Stage>
  );
};

export default Space;
