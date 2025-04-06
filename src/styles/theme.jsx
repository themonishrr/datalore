import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  typography: {
    fontFamily: 'Space Grotesk, sans-serif',
    h1: {
      fontFamily: 'Orbitron, sans-serif',
      fontWeight: 700,
      letterSpacing: '0.02em',
      fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: 'Orbitron, sans-serif',
      fontWeight: 600,
      letterSpacing: '0.01em',
      fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: 'Orbitron, sans-serif',
      fontWeight: 600,
      fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: 'Space Grotesk, sans-serif',
      fontWeight: 600,
      fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.5rem' },
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: 'Space Grotesk, sans-serif',
      fontWeight: 500,
      fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem', lg: '2rem' },
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: 'Space Grotesk, sans-serif',
      fontWeight: 500,
      fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem' },
      lineHeight: 1.5,
    },
    subtitle1: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 400,
      letterSpacing: '0.01em',
      fontSize: '1.1rem',
      lineHeight: 1.6,
    },
    subtitle2: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body1: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 400,
      lineHeight: 1.7,
      fontSize: '1rem',
    },
    body2: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 400,
      lineHeight: 1.6,
      fontSize: '0.95rem',
    },
    button: {
      fontFamily: 'Space Grotesk, sans-serif',
      fontWeight: 500,
      letterSpacing: '0.02em',
      textTransform: 'none',
    },
    caption: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
    },
    overline: {
      fontFamily: 'Space Grotesk, sans-serif',
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#9C27B0',
      light: '#BA68C8',
      dark: '#7B1FA2',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#FF8E53',
      light: '#FFA47D',
      dark: '#FE6B8B',
      contrastText: '#000000'
    },
    background: {
      default: '#121212',
      paper: 'rgba(30, 30, 30, 0.9)',
      overlay: 'rgba(0, 0, 0, 0.8)'
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(156, 39, 176, 0.12)'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#121212',
          color: '#ffffff',
          scrollBehavior: 'smooth'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '8px 24px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(156, 39, 176, 0.4)'
          }
        },
        contained: {
          background: 'linear-gradient(45deg, #9C27B0, #BA68C8)',
          '&:hover': {
            background: 'linear-gradient(45deg, #BA68C8, #9C27B0)'
          }
        },
        outlined: {
          borderColor: '#9C27B0',
          '&:hover': {
            borderColor: '#BA68C8',
            backgroundColor: 'rgba(156, 39, 176, 0.08)'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 30px rgba(156, 39, 176, 0.2)'
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)'
          }
        }
      }
    }
  },
  shape: {
    borderRadius: 8
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    }
  }
});

export default darkTheme;