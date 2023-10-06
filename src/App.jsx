import { useState } from 'react';
import { Stage, Sprite, Text, useTick } from '@pixi/react'; // root  container for all entities
import demoSprite from './resources/demo-sprite.png';

let i = 0;
const DemoSprite = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useTick(delta => {
    i += 0.05 * delta;
    setX(Math.sin(i) * 100);
    setY(Math.sin(i / 1.5) * 100);
  });

  return <Sprite x={x} y={y} scale={1.3} image={demoSprite} />;
};

const App = () => {
  const textStyle = {
    align: 'center',
    fontWeight: 'bold',
    fill: ['#202A44'],
    stroke: '#eef1f5',
    strokeThickness: 1,
    letterSpacing: 5,
    wordWrap: false,
    wordWrapWidth: 350,
  };

  return (
    <Stage
      width={600}
      height={600}
      options={{
        backgroundColor: 0x2980b9,
        antialias: true,
      }}
    >
      <Text text="Demo sprite" style={textStyle} />
      <DemoSprite />
    </Stage>
  );
};

export default App;
