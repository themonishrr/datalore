import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';

const AnimatedBackground = ({ children }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const cursorTrail = [];
    const maxTrailLength = 20;
    const columns = Math.floor(canvas.width / 30);
    const fallingChars = [];
    const chars = '0123456789'.split('');
    
    // Declare mouse position variables
    let mouseX = -100;
    let mouseY = -100;
    let time = 0;
    
    // Initialize falling characters
    for (let i = 0; i < columns; i++) {
      fallingChars.push({
        x: i * 30,
        y: Math.random() * canvas.height,
        speed: Math.random() * 3 + 2,
        char: chars[Math.floor(Math.random() * chars.length)],
        opacity: Math.random() * 0.5 + 0.3,
        switchTime: Math.random() * 20
      });
    }

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw falling characters
      ctx.font = '40px monospace';
      fallingChars.forEach(char => {
        char.y += char.speed;
        char.switchTime--;

        if (char.switchTime <= 0) {
          char.char = chars[Math.floor(Math.random() * chars.length)];
          char.switchTime = Math.random() * 20;
        }

        if (char.y > canvas.height) {
          char.y = -20;
          char.speed = Math.random() * 3 + 2;
          char.opacity = Math.random() * 0.5 + 0.3;
        }

        ctx.fillStyle = `rgba(156, 39, 176, ${char.opacity})`;
        ctx.fillText(char.char, char.x, char.y);
      });

      // Update cursor trail
      cursorTrail.unshift({ x: mouseX, y: mouseY, time });
      if (cursorTrail.length > maxTrailLength) {
        cursorTrail.pop();
      }

      // Draw cursor trail
      cursorTrail.forEach((point, index) => {
        const size = 20 * (1 - index / maxTrailLength);
        const opacity = 0.9 * (1 - index / maxTrailLength);
        const wobble = Math.sin(time * 5 + index) * 3;

        if (index === 0) {
          ctx.beginPath();
          ctx.arc(point.x, point.y, 20, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(156, 39, 176, 0.9)';
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(point.x, point.y, 10, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(156, 39, 176, 0.4)';
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(point.x + wobble, point.y + wobble, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(156, 39, 176, ${opacity * 0.4})`;
        ctx.fill();
      });

      time += 0.016;
      requestAnimationFrame(draw);
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Recalculate columns and reinitialize falling characters
      const newColumns = Math.floor(canvas.width / 30);
      fallingChars.length = 0;
      
      for (let i = 0; i < newColumns; i++) {
        fallingChars.push({
          x: i * 30,
          y: Math.random() * canvas.height,
          speed: Math.random() * 3 + 2,
          char: chars[Math.floor(Math.random() * chars.length)],
          opacity: Math.random() * 0.5 + 0.3,
          switchTime: Math.random() * 20
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <Box sx={{ 
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      background: '#0a0a0a',
    }}>
      <canvas 
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {children}
      </Box>
    </Box>
  );
};

export default AnimatedBackground;