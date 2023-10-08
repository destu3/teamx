import { useState } from 'react';
import EnvCard from '../components/EnvCard';
import '../styles/Home.css';

const Home = () => {
  // mvp will use hard coded values
  // pni = page not implemented
  const envData = [
    {
      pni: false,
      category: 'space_and_astronomy',
      env: 'space',
      sectionHeading: 'Outer Space',
      coverImage:
        'https://img.freepik.com/free-vector/alien-spaceship-flying-cosmos-planets_33099-2480.jpg?w=1800&t=st=1696718102~exp=1696718702~hmac=4cf94aadbfbbe4da60c5ee81d6d679698b0aca773d4aeb71d8a8ec0725b1ef8c',
    },
    {
      pni: false,
      category: 'underwater_worlds',
      env: 'ocean',
      sectionHeading: 'Ocean Exploration',
      coverImage:
        'https://img.freepik.com/free-vector/underwater-ocean-life-with-cute-sea-animals-marine-plants_88138-1038.jpg?w=1380&t=st=1696723432~exp=1696724032~hmac=cf5759d4f0ab8f4f78c26f6ad0cacd4a40c97c97c7687b6eb9e6917fb452a992',
    },
    {
      pni: true,
      category: 'fantasy_worlds',
      env: 'home',
      sectionHeading: 'Fairy Tales',
      coverImage:
        'https://img.freepik.com/free-vector/unicorns-enchanted-garden-background_1308-79539.jpg?w=1380&t=st=1696724325~exp=1696724925~hmac=d15f650258c069ec574ab5504b65dd6b24155af0f0abe0f72c01da08ebc1b822',
    },
    {
      pni: true,
      category: 'prehistoric_eras',
      env: 'home',
      sectionHeading: 'Dinosaurs',
      coverImage:
        'https://img.freepik.com/free-vector/dinosaurs-wood-scene-with-river_1308-46228.jpg?w=1480&t=st=1696724561~exp=1696725161~hmac=f55d2408d682f8ab25bbe96a3b45229d0e0e43ec29b701ddf9d5dc433c3d62bc',
    },
  ];

  const [envs] = useState(envData);

  return (
    <div id={'home-container'}>
      <div className="env-container">
        {envs.map((env, i) => (
          <EnvCard key={i + 1} pni={env.pni} data={env} />
        ))}
      </div>
      <div className="wrapper">
        <div className="center-el branding"></div>
      </div>
    </div>
  );
};

export default Home;
