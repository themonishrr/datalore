import { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Slide, useScrollTrigger, Button } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';
import { useLocation } from 'react-router-dom';
import dataloreImage from '/college logo.png';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const trigger = useScrollTrigger();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pages = [
    { title: 'Home', path: '/' },
    { 
      title: 'Events', 
      path: '/events',
      subEvents: [
        {
          title: 'Innovision',
          subtitle: 'Clash of AI Minds',
          path: '/events/innovision',
          tagline: 'AI Battle Arena – Where Models Compete & Innovations Shine!'
        },
        {
          title: 'Brainstorm Blitz',
          subtitle: 'Paper in a Flash',
          path: '/events/brainstorm-blitz',
          tagline: 'Present Big Ideas in Just 3 Minutes!'
        }
      ]
    },
    { title: 'Schedule', path: '/schedule' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Toolbar spacer */}
      <Box
        sx={{
          height: { 
            xs: '60px',   // Small screens
            sm: '70px',   // Medium screens
            md: scrolled ? '100px' : '120px' // Large screens
          },
          transition: 'all 0.3s ease-in-out'
        }}
      />
      
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar 
          position="fixed" 
          sx={{ 
            background: scrolled 
              ? 'rgba(10, 10, 10, 0.95)' 
              : 'rgba(18, 18, 18, 0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(156, 39, 176, 0.1)',
            transition: 'all 0.3s ease-in-out',
            boxShadow: scrolled 
              ? '0 4px 20px rgba(156, 39, 176, 0.15)' 
              : 'none',
          }}
        >
          <Box sx={{ 
            maxWidth: '100%',
            margin: '0 auto',
            width: '100%',
            px: { 
              xs: 2,  // Increased padding for better spacing
              sm: 3,  // Increased padding for better spacing
              md: 4   // Increased padding for better spacing
            }
          }}>
            <Toolbar 
              disableGutters 
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: { xs: 2, sm: 3, md: 4 },
                minHeight: { 
                  xs: '56px',
                  sm: '64px',
                  md: scrolled ? '72px' : '88px'
                },
                transition: 'all 0.3s ease-in-out',
                px: { xs: 2, sm: 3, md: 4 },
                position: 'relative',
                maxWidth: '1200px',
                margin: '0 auto',
                width: '100%'
              }}
            >
              {/* Logo */}
              <Box sx={{ display: 'flex', alignItems: 'center', mr: 'auto' }}>
                <Typography
                  variant="h6"
                  component={RouterLink}
                  to="/"
                  sx={{
                    fontFamily: 'orbiton, sans-serif',
                    fontSize: { 
                      xs: '1.2rem',
                      sm: '1.4rem',
                      md: scrolled ? '1.6rem' : '1.8rem',
                      lg: scrolled ? '1.8rem' : '2rem'
                    },
                    fontWeight: 800,
                    background: 'linear-gradient(45deg, #fff 30%, #9C27B0 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textDecoration: 'none',
                    letterSpacing: { xs: '0.5px', sm: '1px' },
                    transition: 'all 0.3s ease-in-out',
                    flexShrink: 0,
                    '&:hover': {
                      transform: 'scale(1.02)',
                      background: 'linear-gradient(45deg, #9C27B0 30%, #fff 90%)',
                      WebkitBackgroundClip: 'text',
                    }
                  }}
                >
                  DATALORE '25
                </Typography>
              </Box>

              {/* Desktop Navigation - Hidden on mobile */}
              <Box sx={{ 
                display: { xs: 'none', sm: 'none', md: 'flex' },
                alignItems: 'center',
                gap: { md: 3, lg: 4 },
                ml: 'auto',
                flexGrow: { md: 1 },
                justifyContent: { md: 'flex-end' }
              }}>
                {pages.map((page, index) => (
                  <motion.div
                    key={page.title}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      component={RouterLink}
                      to={page.path}
                      sx={{
                        color: location.pathname === page.path ? '#BA68C8' : 'white',
                        fontSize: { md: '0.95rem', lg: '1.1rem' },
                        padding: { md: '8px 16px', lg: '10px 20px' },
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                        position: 'relative',
                        minWidth: 'auto',
                        whiteSpace: 'nowrap',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          width: location.pathname === page.path ? '80%' : '0',
                          height: '2px',
                          background: 'linear-gradient(90deg, #9C27B0, #BA68C8)',
                          transition: 'all 0.3s ease',
                          transform: 'translateX(-50%)'
                        },
                        '&:hover': {
                          color: '#BA68C8',
                          background: 'rgba(156, 39, 176, 0.08)',
                          '&::after': {
                            width: '80%'
                          }
                        }
                      }}
                    >
                      {page.title}
                    </Button>
                  </motion.div>
                ))}
              </Box>
              {/* Logo Image - Visible on all screens */}
              <RouterLink to="https://rajalakshmi.org/" target="_blank">
                <Box
                  component="img"
                  src={dataloreImage}
                  alt="DATALORE Logo"
                  sx={{
                    height: { xs: '50px', sm: '50px', md: scrolled ? '50px' : '70px' },
                    width: { xs: '130px', sm: '100px', md: scrolled ? '150px' : '170px' },
                    transition: 'all 0.3s ease-in-out',
                    display: { xs: 'block', md: 'block' },
                    ml: { xs: -19, sm: -4, md: -3 } // Increased negative margin to move left
                  }}
                />
              </RouterLink>

              {/* Mobile Menu Button - Hidden on desktop */}
              <Box sx={{ 
                display: { xs: 'flex', sm: 'flex', md: 'none' },
                alignItems: 'center',
                position: 'absolute',
                right: 0
              }}>

                <IconButton
                  onClick={() => setIsOpen(true)}
                  sx={{
                    color: 'white',
                    padding: { xs: '8px', sm: '12px' },
                    marginLeft: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(156, 39, 176, 0.1)',
                      transform: 'scale(1.05)'
                    },
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  <MenuIcon sx={{ fontSize: { xs: '24px', sm: '28px' } }} />
                </IconButton>
              </Box>
            </Toolbar>
          </Box>
        </AppBar>
      </Slide>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} navItems={pages} />
    </>
  );
};

export default Navbar;