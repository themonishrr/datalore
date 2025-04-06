import { Box, Container, Typography, Link, IconButton, Stack, Button } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, WhatsApp } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { 
      icon: <LinkedIn />, 
      url: 'https://linkedin.com/company/datalore25-tech-conference',
      label: 'Connect with us on LinkedIn'
    },
    { 
      icon: <Instagram />, 
      url: 'https://www.instagram.com/datalore_rec?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      label: 'Follow us on Instagram'
    },
    { 
      icon: <WhatsApp/>, 
      url: 'https://wa.me/9789096777',
      label: 'Join our community on WhatsApp'
    }
  ];

  const footerLinks = {
    About: [
      { title: 'About Us', path: '/about' },
      { title: 'Our Team', path: '/about#faculty-coordinators' },
      { title: 'Careers', path: '/careers' },
      { title: 'Contact Us', path: '/contact' },
      { title: 'Partner With Us', path: '/partnership' }
    ],
    Support: [
      { title: 'FAQs', path: '/contact' }, // Updated path to point to combined page
      { title: 'Help Center', path: '/help' },
      { title: 'Registration', path: '/register' },
      { title: 'Sponsorship', path: '/sponsors' },
      { title: 'Technical Support', path: '/support' }
    ]
  };

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(180deg, rgba(8, 8, 8, 0.98) 0%, rgba(12, 12, 12, 0.97) 100%)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(156, 39, 176, 0.4)',
        py: { xs: 8, md: 10 },
        mt: 'auto',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, transparent, #9C27B0, #BA68C8, transparent)',
          opacity: 0.8,
          animation: 'shine 3s infinite linear'
        },
        '@keyframes shine': {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: '200px 0' }
        }
      }}
    >
      {/* Floating Particles Background */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 0,
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 30%, rgba(156, 39, 176, 0.1) 0%, transparent 50%)'
        }
      }}>
        {[...Array(15)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              y: ['0%', `${Math.random() * 100}%`],
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear'
            }}
            sx={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.8)',
              boxShadow: '0 0 10px 2px rgba(186, 104, 200, 0.7)'
            }}
          />
        ))}
      </Box>

      <Container maxWidth="xxl" sx={{ 
        position: 'relative', 
        zIndex: 1,
        px: { xs: 3, sm: 4, md: 6 },
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%'
      }}>
        {/* Main Content Grid */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: '1fr 1fr', 
            md: '1.5fr 1fr 1fr' 
          },
          gap: { xs: 4, sm: 5, md: 6 },
          mb: 6,
          alignItems: 'flex-start',
          justifyItems: { xs: 'center', sm: 'start' },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -30,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            height: '1px',
            background: 'radial-gradient(circle, rgba(156, 39, 176, 0.4) 0%, transparent 70%)'
          }
        }}>
          {/* Company Info - Now properly centered */}
          <Box sx={{ 
            width: '100%',
            maxWidth: { xs: '400px', sm: 'none' },
            textAlign: { xs: 'center', sm: 'left' }
          }}>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="h4"
                  component={RouterLink}
                  to="/"
                  sx={{
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                    fontWeight: 900,
                    background: 'linear-gradient(45deg, #fff 10%, #BA68C8 60%, #9C27B0 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textDecoration: 'none',
                    mb: 3,
                    display: 'inline-block',
                    fontFamily: 'Orbitron, sans-serif',
                    letterSpacing: '1px'
                  }}
                >
                  DATALORE '25
                </Typography>
              </motion.div>
              
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.75)',
                  mb: 3,
                  lineHeight: 1.8,
                  fontSize: '1.05rem',
                  maxWidth: '400px'
                }}
              >
                Pioneering the future of technology through innovation and collaboration.
              </Typography>
            </div>

            <Stack 
              direction="row" 
              spacing={2} 
              sx={{ 
                mt: 4,
                flexWrap: 'wrap',
                gap: 2 // Ensures proper spacing when wrapped
              }}
            >
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    sx={{
                      color: 'white',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(156, 39, 176, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(156, 39, 176, 0.2)',
                        transform: 'translateY(-2px)',
                        borderColor: '#BA68C8',
                        boxShadow: '0 4px 12px rgba(156, 39, 176, 0.3)'
                      }
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Stack>
          </Box>

          {/* Footer Links - Improved alignment */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <Box key={category} sx={{ 
              width: '100%',
              textAlign: { xs: 'center', sm: 'left' }
            }}>
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  mb: 3,
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: '40px',
                    height: '3px',
                    background: 'linear-gradient(90deg, #9C27B0, transparent)',
                    borderRadius: '3px'
                  }
                }}
              >
                {category}
              </Typography>
              <Stack 
                spacing={{ xs: 1.5, md: 2 }}
                alignItems={{ xs: 'center', sm: 'flex-start' }}
              >
                {links.map((link) => (
                  <motion.div
                    key={link.title}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      component={RouterLink}
                      to={link.path}
                      sx={{
                        color: 'rgba(255, 255, 255, 0.75)',
                        fontSize: '1rem',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        '&:hover': {
                          color: '#BA68C8',
                          textDecoration: 'none',
                          '&::before': {
                            content: '"→"',
                            color: '#9C27B0',
                            fontSize: '1.2rem'
                          }
                        }
                      }}
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
              </Stack>
            </Box>
          ))}
        </Box>

        {/* Copyright Section - Perfectly centered */}
        <Box sx={{ 
          mt: 'auto',
          pt: 4,
          pb: 2,
          width: '100%',
          textAlign: 'center'
        }}>
          {/* ... copyright content ... */}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;