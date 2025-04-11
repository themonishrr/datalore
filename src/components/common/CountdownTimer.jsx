import { useState, useEffect } from 'react';
import { Box, Typography, Paper, Grid, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  function calculateTimeLeft() {
    const targetDate = new Date('2025-04-23T08:00:00');
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: isMobile ? '90%' : '800px',
        mx: 'auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <Paper
          elevation={3}
          sx={{
            p: { xs: 2, sm: 3 },
            bgcolor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            border: '1px solid rgba(156, 39, 176, 0.2)',
          }}
        >
          <Typography
            id="countdown-timer-heading"
            variant="h4"
            align="center"
            sx={{
              mb: 2,
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 500,
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
              letterSpacing: '0.02em',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }}
          >
            Event Begins In
          </Typography>

          <Grid container spacing={{ xs: 4, sm: 5 }} justifyContent="center" sx={{ maxWidth: '100%', mx: 'auto', px: { xs: 1.5, sm: 2.5 } }}>
            {timeUnits.map((unit) => (
              <Grid item xs={3} sm={3} key={unit.label} sx={{ px: { xs: 0.75, sm: 1.25 } }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    mx: 'auto',
                    textAlign: 'center',
                  }}
                >
                  <Paper
                    id={`countdown-timer-${unit.label.toLowerCase()}`}
                    elevation={2}
                    sx={{
                      width: { xs: '55px', sm: '75px', md: '90px', lg: '100px' },
                      aspectRatio: '1/1',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      bgcolor: 'rgba(18, 18, 18, 0.95)',
                      border: '2px solid rgba(156, 39, 176, 0.4)',
                      borderRadius: { xs: '10px', sm: '14px', md: '16px' },
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 8px 32px rgba(156, 39, 176, 0.15)',
                      transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      mx: 'auto',
                      textAlign: 'center',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.03)',
                        boxShadow: '0 15px 45px rgba(156, 39, 176, 0.3)',
                        border: '2px solid rgba(156, 39, 176, 0.8)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, rgba(156, 39, 176, 0.5), transparent)',
                      },
                    }}
                  >
                    <Typography
                      variant={isMobile ? 'h4' : 'h2'}
                      sx={{
                        fontWeight: 800,
                        color: theme.palette.primary.main,
                        mx: 'auto',
                        textAlign: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        display: 'flex',
                        fontFamily: "'Space Grotesk', sans-serif",
                        justifyContent: 'center',
                        textShadow: '0 0 20px rgba(156, 39, 176, 0.5)',
                        letterSpacing: '0.05em',
                        transform: 'scale(1.2)',
                        transition: 'transform 0.3s ease, color 0.3s ease',
                        fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2.25rem', lg: '2.5rem' },
                        lineHeight: 1.2,
                        '&:hover': {
                          transform: 'scale(1)',
                          color: theme.palette.primary.light
                        }
                      }}
                    >
                      {unit.value !== undefined ? String(unit.value).padStart(2, '0') : '00'}
                    </Typography>
                  </Paper>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      mt: { xs: 0.25, sm: 0.5, md: 0.75 },
                      textAlign: 'center',
                      color: 'rgba(255, 255, 255, 0.85)',
                      fontSize: { xs: '0.65rem', sm: '0.9rem', md: '1rem' },
                      fontWeight: 600,
                      letterSpacing: { xs: '0.01em', sm: '0.05em' },
                      textTransform: 'uppercase',
                      lineHeight: 1.4,
                      width: '100%',
                      mx: 'auto'
                    }}
                  >
                    {unit.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default CountdownTimer;
