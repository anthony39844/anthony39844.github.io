import React, { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    // Star Class
    class Star {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Different layers of stars (distant, medium, prominent)
        const layer = Math.random();
        if (layer < 0.65) {
          // Distant tiny stars
          this.radius = Math.random() * 0.7 + 0.4;
          this.baseAlpha = Math.random() * 0.35 + 0.15;
          this.twinkleSpeed = Math.random() * 0.02 + 0.005;
          this.color = '220, 235, 255'; // Pale cool white
          this.hasGlow = false;
        } else if (layer < 0.92) {
          // Mid-field shimmering stars
          this.radius = Math.random() * 0.9 + 0.8;
          this.baseAlpha = Math.random() * 0.45 + 0.3;
          this.twinkleSpeed = Math.random() * 0.03 + 0.01;
          this.color = Math.random() > 0.4 ? '186, 230, 253' : '224, 231, 255'; // Cyan or soft lavender tint
          this.hasGlow = true;
          this.glowRadius = this.radius * 2.5;
        } else {
          // Bright prominent stars with soft cross flare
          this.radius = Math.random() * 1.2 + 1.2;
          this.baseAlpha = Math.random() * 0.35 + 0.55;
          this.twinkleSpeed = Math.random() * 0.025 + 0.015;
          this.color = '240, 248, 255';
          this.hasGlow = true;
          this.glowRadius = this.radius * 4;
        }

        this.phase = Math.random() * Math.PI * 2;
        // Extremely subtle slow cosmic drift
        this.vx = (Math.random() - 0.5) * 0.03;
        this.vy = -(Math.random() * 0.03 + 0.01);
      }

      update(time) {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around boundaries
        if (this.x < -10) this.x = width + 10;
        if (this.x > width + 10) this.x = -10;
        if (this.y < -10) this.y = height + 10;
        if (this.y > height + 10) this.y = -10;

        // Twinkle factor using smooth sine curve
        this.alpha = this.baseAlpha + Math.sin(time * this.twinkleSpeed + this.phase) * (this.baseAlpha * 0.6);
        this.alpha = Math.max(0.08, Math.min(0.95, this.alpha));
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;

        if (this.hasGlow) {
          ctx.shadowColor = `rgba(${this.color}, ${this.alpha * 0.8})`;
          ctx.shadowBlur = this.glowRadius;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Shooting Star / Meteor Class
    class ShootingStar {
      constructor() {
        this.active = false;
        this.timer = Math.random() * 200 + 120; // Time before next spawn
      }

      spawn() {
        this.active = true;
        // Start somewhere across top or right edge
        this.x = Math.random() * (width * 0.8) + (width * 0.1);
        this.y = Math.random() * (height * 0.35);
        this.length = Math.random() * 70 + 60;
        this.speed = Math.random() * 7 + 9;
        this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.2; // ~45 degree diagonal
        this.opacity = 1;
        this.decay = Math.random() * 0.018 + 0.012;
      }

      update() {
        if (!this.active) {
          this.timer -= 1;
          if (this.timer <= 0) {
            this.spawn();
          }
          return;
        }

        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.opacity -= this.decay;

        if (this.opacity <= 0 || this.x > width + 100 || this.y > height + 100) {
          this.active = false;
          this.timer = Math.random() * 320 + 200; // Wait 4-9 seconds before next one
        }
      }

      draw() {
        if (!this.active || this.opacity <= 0) return;

        const tailX = this.x - Math.cos(this.angle) * this.length;
        const tailY = this.y - Math.sin(this.angle) * this.length;

        const grad = ctx.createLinearGradient(tailX, tailY, this.x, this.y);
        grad.addColorStop(0, `rgba(56, 189, 248, 0)`);
        grad.addColorStop(0.7, `rgba(186, 230, 253, ${this.opacity * 0.4})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${this.opacity * 0.9})`);

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.lineCap = 'round';
        ctx.shadowColor = 'rgba(56, 189, 248, 0.7)';
        ctx.shadowBlur = 8;
        ctx.stroke();

        // Bright star head point
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();

        ctx.restore();
      }
    }

    let stars = [];
    let shootingStars = [];

    const initStars = () => {
      stars = [];
      shootingStars = [];

      // Balanced density based on screen resolution
      const starCount = Math.min(Math.floor((width * height) / 11000), 100);
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }

      // 2 shooting star controllers
      shootingStars.push(new ShootingStar());
      shootingStars.push(new ShootingStar());
    };

    initStars();

    let time = 0;

    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Draw and update stars
      stars.forEach((star) => {
        star.update(time);
        star.draw();
      });

      // Draw and update shooting stars
      shootingStars.forEach((ss) => {
        ss.update();
        ss.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
};

export default BackgroundAnimation;
