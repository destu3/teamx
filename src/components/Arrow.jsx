import React from 'react';
import {
  Stage,
  Container,
  Sprite,
  Text,
  Graphics,
  withFilters,
  useTick,
} from '@pixi/react';
import { useState, useCallback } from 'react';
import button from '../resources/block1.png';

const Arrow = () => {
  let i = 0;

  const [x, setX] = useState(50);
  const [y, setY] = useState(window.innerHeight - 200);

  //   useTick((delta) => {
  //     i += 0.05 * delta;
  //     setX(Math.sin(i) * 100);
  //     setY(Math.sin(i / 1.5) * 100);
  //   });

  return <Sprite image={button} x={x} y={y} anchor={0.5} scale={1.3} />;
};

export default Arrow;
