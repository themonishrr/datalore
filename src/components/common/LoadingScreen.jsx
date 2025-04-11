import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import dataloreLogoSvg from '/datalore-logo.svg';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => 
        prevProgress >= 100 ? 0 : prevProgress + 4
      );
    }, 25);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          gap: 4,
          background: 'linear-gradient(135deg, #121212 0%, #1a1a1a 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.1, 1],
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            ease: 'easeOut',
            times: [0, 0.7, 1],
          }}
        >
          <Box
            component="img"
            src={dataloreLogoSvg}
            alt="DATALORE Logo"
            sx={{
              width: { xs: 120, sm: 150, md: 180 },
              height: { xs: 120, sm: 150, md: 180 },
              filter: 'drop-shadow(0 0 20px rgba(156, 39, 176, 0.3))',
            }}
          />
        </motion.div>

        <Box sx={{ position: 'relative', width: '200px', mt: 3 }}>
          <Box
            sx={{
              width: '100%',
              height: '4px',
              backgroundColor: 'rgba(156, 39, 176, 0.2)',
              borderRadius: '2px',
              overflow: 'hidden',
            }}
          >
            <Box
              component={motion.div}
              animate={{
                width: `${progress}%`,
                transition: { duration: 0.5, ease: 'easeInOut' },
              }}
              sx={{
                height: '100%',
                background: 'linear-gradient(90deg, #9C27B0, #BA68C8)',
                borderRadius: '2px',
              }}
            />
          </Box>
        </Box>

        <Typography
          variant="h5"
          component={motion.h5}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          sx={{
            fontFamily: 'Orbitron, sans-serif',
            fontWeight: 700,
            background: 'linear-gradient(45deg, #fff 30%, #9C27B0 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            mt: 2,
          }}
        >
          DATALORE '25
        </Typography>

        <Typography
          variant="body2"
          component={motion.p}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            textAlign: 'center',
            fontFamily: 'Space Grotesk, sans-serif',
          }}
        >
          Loading amazing experiences...
        </Typography>
      </Box>
    </AnimatePresence>
  );
};

export default LoadingScreen;