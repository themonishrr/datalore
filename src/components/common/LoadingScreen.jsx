import { Box, CircularProgress, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const LoadingScreen = () => (
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
      gap: 2,
      background: (theme) => theme.palette.background.default,
    }}
  >
    <CircularProgress
      sx={{
        color: 'primary.main',
        '& .MuiCircularProgress-circle': {
          strokeLinecap: 'round',
        },
      }}
    />
    <Typography
      variant="h6"
      sx={{
        fontFamily: 'Orbitron, sans-serif',
        background: (theme) => theme.palette.gradients.primary,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      Datalore '25
    </Typography>
    <CircularProgress />
  </Box>
);

export default LoadingScreen;