import ExitButton from '../components/ExitButton';
import './OceanGame.css';
import React, { useEffect } from 'react';
import popSound from '../resources/pop.mp3';

const OceanGame = () => {
  const popAudio = new Audio(popSound);

  // Function to play the popping sound
  const playPopSound = () => {
    popAudio.play();
  };

  useEffect(() => {
    const updateElementsPosition = () => {
      const sea1 = document.getElementById('sea1');
      const sea2 = document.getElementById('sea2');
      const sea3 = document.getElementById('sea3');
      const ship = document.getElementById('ship');

      if (sea1 && sea2 && sea3 && ship) {
        const offsetY = window.pageYOffset;

        sea1.style.top = `${200 + (offsetY - 200) * 0.3}px`;
        sea2.style.top = `${200 + (offsetY - 200) * 0.2}px`;
        sea3.style.top = `${200 + (offsetY - 200) * 0.1}px`;
        ship.style.top = `${100 + (offsetY - 100) * 0.05}px`;
      }

      requestAnimationFrame(updateElementsPosition);
    };

    requestAnimationFrame(updateElementsPosition);

    // Your JavaScript code that should run after component render
    const canvasElement = document.querySelector('canvas');
    canvasElement.width = document.body.clientWidth;
    canvasElement.height = document.body.clientHeight;
    const ctx = canvasElement.getContext('2d');
    const count = canvasElement.height;
    const bubbles = [];
    const bubbleCount = 50;
    const bubbleSpeed = 1;
    const popLines = 6;
    let popDistance = 40;
    const mouseOffset = {
      x: 0,
      y: 0,
    };

    // Animation Loop
    function animate() {
      // Clear Canvas
      ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

      // Draw Bubbles
      ctx.beginPath();
      for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].position.x =
          Math.sin(bubbles[i].count / bubbles[i].distanceBetweenWaves) * 50 +
          bubbles[i].xOff;
        bubbles[i].position.y = bubbles[i].count;
        bubbles[i].render();

        if (bubbles[i].count < 0 - bubbles[i].radius) {
          bubbles[i].count = canvasElement.height + bubbles[i].yOff;
        } else {
          bubbles[i].count -= bubbleSpeed;
        }
      }

      // On Bubble Hover
      for (let i = 0; i < bubbles.length; i++) {
        if (
          mouseOffset.x > bubbles[i].position.x - bubbles[i].radius &&
          mouseOffset.x < bubbles[i].position.x + bubbles[i].radius
        ) {
          if (
            mouseOffset.y > bubbles[i].position.y - bubbles[i].radius &&
            mouseOffset.y < bubbles[i].position.y + bubbles[i].radius
          ) {
            for (let a = 0; a < bubbles[i].lines.length; a++) {
              popDistance = bubbles[i].radius * 0.5;
              bubbles[i].lines[a].popping = true;
              bubbles[i].popping = true;
            }
          }
        }
      }

      window.requestAnimationFrame(animate);
    }

    // Bubble Constructor
    function createBubble() {
      this.position = { x: 0, y: 0 };
      this.radius = 20 + Math.random() * 6;
      this.xOff = Math.random() * canvasElement.width - this.radius;
      this.yOff = Math.random() * canvasElement.height;
      this.distanceBetweenWaves = 50 + Math.random() * 40;
      this.count = canvasElement.height + this.yOff;
      this.color = '#fff';
      this.lines = [];
      this.popping = false;
      this.maxRotation = 85;
      this.rotation =
        Math.floor(Math.random() * (this.maxRotation - this.maxRotation * -1)) +
        this.maxRotation * -1;
      this.rotationDirection = 'forward';

      // Populate Lines
      for (let i = 0; i < popLines; i++) {
        const tempLine = new createLine();
        tempLine.bubble = this;
        tempLine.index = i;

        this.lines.push(tempLine);
      }

      this.resetPosition = function () {
        this.position = { x: 0, y: 0 };
        this.radius = 8 + Math.random() * 6;
        this.xOff = Math.random() * canvasElement.width - this.radius;
        this.yOff = Math.random() * canvasElement.height;
        this.distanceBetweenWaves = 50 + Math.random() * 40;
        this.count = canvasElement.height + this.yOff;
        this.popping = false;
      };

      // Render the circles
      this.render = function () {
        if (this.rotationDirection === 'forward') {
          if (this.rotation < this.maxRotation) {
            this.rotation++;
          } else {
            this.rotationDirection = 'backward';
          }
        } else {
          if (this.rotation > this.maxRotation * -1) {
            this.rotation--;
          } else {
            this.rotationDirection = 'forward';
          }
        }

        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate((this.rotation * Math.PI) / 180);

        if (!this.popping) {
          ctx.beginPath();
          ctx.strokeStyle = 'white';
          ctx.lineWidth = 1;
          ctx.arc(0, 0, this.radius - 3, 0, Math.PI * 1.5, true);
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(0, 0, this.radius, 0, Math.PI * 2, false);
          ctx.stroke();
        }

        ctx.restore();

        // Draw the lines
        for (let a = 0; a < this.lines.length; a++) {
          if (this.lines[a].popping) {
            if (
              this.lines[a].lineLength < popDistance &&
              !this.lines[a].inversePop
            ) {
              this.lines[a].popDistance += 0.06;
            } else {
              if (this.lines[a].popDistance >= 0) {
                this.lines[a].inversePop = true;
                this.lines[a].popDistanceReturn += 1;
                this.lines[a].popDistance -= 0.03;
              } else {
                this.lines[a].resetValues();
                this.resetPosition();
              }
            }

            this.lines[a].updateValues();
            this.lines[a].render();
          }
        }
      };
    }

    // Populate Bubbles
    for (let i = 0; i < bubbleCount; i++) {
      const tempBubble = new createBubble();

      bubbles.push(tempBubble);
    }

    // Line Constructor
    function createLine() {
      this.lineLength = 0;
      this.popDistance = 0;
      this.popDistanceReturn = 0;
      this.inversePop = false; // When the lines reach full length they need to shrink into the end position
      this.popping = false;

      this.resetValues = function () {
        this.lineLength = 0;
        this.popDistance = 0;
        this.popDistanceReturn = 0;
        this.inversePop = false;
        this.popping = false;

        this.updateValues();
      };

      this.updateValues = function () {
        this.x =
          this.bubble.position.x +
          (this.bubble.radius + this.popDistanceReturn) *
            Math.cos((2 * Math.PI * this.index) / this.bubble.lines.length);
        this.y =
          this.bubble.position.y +
          (this.bubble.radius + this.popDistanceReturn) *
            Math.sin((2 * Math.PI * this.index) / this.bubble.lines.length);
        this.lineLength = this.bubble.radius * this.popDistance;
        this.endX = this.lineLength;
        this.endY = this.lineLength;
      };

      this.render = function () {
        this.updateValues();

        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.moveTo(this.x, this.y);
        if (this.x < this.bubble.position.x) {
          this.endX = this.lineLength * -1;
        }
        if (this.y < this.bubble.position.y) {
          this.endY = this.lineLength * -1;
        }
        if (this.y === this.bubble.position.y) {
          this.endY = 0;
        }
        if (this.x === this.bubble.position.x) {
          this.endX = 0;
        }
        ctx.lineTo(this.x + this.endX, this.y + this.endY);
        ctx.stroke();
      };
    }

    const mouseMove = e => {
      mouseOffset.x = e.offsetX;
      mouseOffset.y = e.offsetY;
    };

    canvasElement.addEventListener('mousemove', mouseMove);

    const handleResize = () => {
      canvasElement.width = document.body.clientWidth;
      canvasElement.height = document.body.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Start the animation loop
    requestAnimationFrame(animate);
  }, []);

  return (
    <>
      <ExitButton />
      <section className="gameArea">
        <div id="sky"></div>
        <div id="sea1"></div>
        <div id="sea2"></div>
        <div id="sea3"></div>
        <div id="ship"></div>
        <div id="sea4"></div>

        <canvas></canvas>
      </section>
    </>
  );
};

export default OceanGame;
