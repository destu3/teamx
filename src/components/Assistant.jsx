import React, { useEffect, useState } from 'react';
import * as PIXI from 'pixi.js';
import styled from 'styled-components';

const Assistant = () => {
  const [update, setUpdate] = useState();
  let app;

  useEffect(() => {
    let app = new PIXI.Application({
      background: '#1099bb',
      resizeTo: window,
    });

    document.body.appendChild(app.view);

    // Scale mode for all textures, will retain pixelation
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

    const sprite = PIXI.Sprite.from('https://pixijs.com/assets/flowerTop.png');

    // Set the initial position
    sprite.anchor.set(0.5);
    sprite.x = app.screen.width / 2;
    sprite.y = app.screen.height / 2;

    // Opt-in to interactivity
    sprite.eventMode = 'static';

    // Shows hand cursor
    sprite.cursor = 'pointer';

    // Pointers normalize touch and mouse (good for mobile and desktop)
    sprite.on('pointerdown', onClick);

    // Alternatively, use the mouse & touch events:
    // sprite.on('click', onClick); // mouse-only
    // sprite.on('tap', onClick); // touch-only

    app.stage.addChild(sprite);

    function onClick() {
      // create a new Sprite from an image path
      const bunny = PIXI.Sprite.from(
        'https://static.wikia.nocookie.net/essentialsdocs/images/f/fc/Controls.png/revision/latest?cb=20210502161810'
      );

      // center the sprite's anchor point
      bunny.anchor.set(0.5);

      // move the sprite to the center of the screen
      bunny.x = app.screen.width / 2;
      bunny.y = app.screen.height / 2;

      app.stage.addChild(bunny);
    }

    // Add a click event listener to the button
    const speakButton = document.getElementById('speakButton');
    speakButton.addEventListener('click', () => {
      const textToSpeak = 'Hi, I am Mickey, your pal. Click me for help!';
      speakText(textToSpeak);
    });

    // Function to speak text
    function speakText(text) {
      // Check if the SpeechSynthesis API is available
      if ('speechSynthesis' in window) {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);

        // Optionally, you can configure the voice and other settings here
        // utterance.voice = synth.getVoices()[0]; // Choose a specific voice
        // utterance.rate = 1.0; // Adjust speech rate (1.0 is the default)

        // Speak the text
        synth.speak(utterance);
      } else {
        console.error('Text-to-speech is not supported in this browser.');
      }
    }

    PIXI.Assets.load('https://pixijs.com/assets/bitmap-font/desyrel.xml').then(
      () => {
        const bitmapFontText = new PIXI.BitmapText(
          'Hi I am Mickey your pal, click me for help!!',
          {
            fontName: 'Desyrel',
            fontSize: 55,
            align: 'right',
          }
        );

        bitmapFontText.x = 50;
        bitmapFontText.y = 200;

        app.stage.addChild(bitmapFontText);
      }
    );
  }, []);

  useEffect(() => {
    if (!app) {
      return;
    }
    if (app) {
      const container = document.getElementById('container');
      container.appendChild(app.view);
    }
  }, [app]);

  return (
    <Wrapper>
      <div id='container'>
        <div id='background'></div>
        <button id='speakButton' className='speakButton'>
          Speak Text
        </button>
      </div>
    </Wrapper>
  );
};

export default Assistant;

const Wrapper = styled.div`
  position: absolute;
  bottom: 100px;
  left: 100px;
  z-index: 100;
  .speakButton {
    background-color: #00008b;
    color: #fff;
    font-size: 18px;
    padding: 10px 20px;
    border: 3px solid white;
    cursor: pointer;
    font-family: Arial, sans-serif;
    border-radius: 50px;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1;
  }
`;
