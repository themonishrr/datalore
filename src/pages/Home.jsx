import { useState, useEffect, useRef } from 'react';
import { Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Divider,
  Avatar,
  Chip,
  useMediaQuery,
  useTheme,
  Modal,
  IconButton
} from '@mui/material';
import GradientHeading from '../components/common/GradientHeading';
import '../styles/fonts.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link as RouterLink } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CodeIcon from '@mui/icons-material/Code';
import CountdownTimer from '../components/common/CountdownTimer';
import { DEFAULT_PROFILE_IMAGE } from '../constants/images';
import { AccessTime, LocationOn, Group, EmojiEvents, WorkspacePremium, ArrowBack } from '@mui/icons-material';
import trophyIcon from '../assets/images/trophy-icon.svg';

const Home = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  
  const handleOpenModal = (event) => {
    setSelectedEvent(event);
    setOpenModal(true);
  };
  
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prizePool = {
    total: "₹20,000+",
    breakdown: [
      { position: "First Prize Pool", amount: "₹7,000", icon: EmojiEvents },
      { position: "Second Prize Pool", amount: "₹5,000", icon: EmojiEvents }
    ],
    perks: [
      "Merit Certificates for Winners",
      "Participation Certificates for All",
      "Industry Recognition",
      "Networking Opportunities"
    ]
  };
  // Import events from Events page
  const events = [
    {
      id: 1,
      title: 'Prompt Craft',
      category: 'Competition',
      image: DEFAULT_PROFILE_IMAGE,
      time: '2.5 hours',
      venue: 'Tech Lounge',
      capacity: 50,
      slot: 'II',
      actualTime: '12:20 - 2:20',
      prizePool: {
        first: '₹1,500',
        second: '₹1,000'
      }
    },
    {
      id: 2,
      title: 'UXplore',
      category: 'Design Competition',
      image: DEFAULT_PROFILE_IMAGE,
      time: '2 hours',
      venue: 'Idea Lab (KFR02)',
      capacity: 30,
      slot: 'II',
      actualTime: '12:10 - 2:20',
      teamSize: '1-2',
      prizePool: {
        first: '₹1,500',
        second: '₹1,000'
      }
    },
    {
      id: 3,
      title: 'Pitch or Pass',
      category: 'Investment Challenge',
      image: DEFAULT_PROFILE_IMAGE,
      time: '3 hours',
      venue: 'Conference Hall',
      capacity: 30,
      slot: 'I',
      actualTime: '9:45 - 12:45',
      teamSize: '1-3',
      prizePool: {
        first: '₹1,500',
        second: '₹1,000'
      }
    },
    {
      id: 4,
      title: 'The Innovation Quest',
      category: 'Case Analysis',
      image: DEFAULT_PROFILE_IMAGE,
      time: '2 hours',
      venue: 'Purple Hall',
      capacity: 45,
      slot: 'II',
      actualTime: '12:20 - 2:20',
      teamSize: '1-3',
      prizePool: {
        first: '₹1,500',
        second: '₹1,000'
      }
    },
    {
      id: 5,
      title: 'Insight',
      category: 'Project Showcase',
      image: DEFAULT_PROFILE_IMAGE,
      time: '2 hours',
      venue: 'Main Seminar Hall',
      capacity: 75,
      slot: 'II',
      actualTime: '12:20 - 2:20',
      teamSize: '1-3',
      prizePool: {
        first: '₹2,500',
        second: '₹1,000'
      }
    },
    {
      id: 6,
      title: 'Code Heist',
      category: 'Coding Challenge',
      image: DEFAULT_PROFILE_IMAGE,
      time: '2 hours',
      venue: 'KFR02',
      capacity: 30,
      slot: 'I',
      actualTime: '9:45 - 11:45',
      prizePool: {
        first: '₹1,500',
        second: '₹1,000'
      }
    },
    {
      id: 7,
      title: 'Papervez',
      category: 'Paper Presentation',
      image: DEFAULT_PROFILE_IMAGE,
      time: '2 hours',
      venue: 'Purple Hall',
      capacity: 45,
      slot: 'I',
      actualTime: '9:45 - 11:45',
      teamSize: '1-3',
      prizePool: {
        first: '₹2,500',
        second: '₹1,000'
      }
    },
    {
      id: 8,
      title: 'Workshop',
      category: 'Technical Workshop',
      image: DEFAULT_PROFILE_IMAGE,
      time: '2 hours',
      venue: 'Main Seminar Hall',
      capacity: 100,
      slot: 'I',
      actualTime: '9:45 - 11:45'
    }
  ];
  const guest = {
    name: "Dr. Emily Chen",
    designation: "Chief Innovation Officer",
    image: DEFAULT_PROFILE_IMAGE,
    description: "A pioneering researcher in quantum computing with over 15 years of experience. Leading groundbreaking projects in quantum algorithms and their applications in cryptography. Known for developing novel approaches to quantum error correction. Regular speaker at international technology conferences. Recipient of multiple awards for contributions to quantum computing advancement."
  };

  const eventVariants = {
    hidden: { opacity: 0, x: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 20,
        duration: 0.3
      }
    }
  };
  

  return (
    <Container maxWidth="lg">
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 3,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(156, 39, 176, 0.3), transparent)'
                  }
                }}>
                  <IconButton 
                    onClick={handleCloseModal}
                    sx={{ 
                      mr: 2,
                      color: '#BA68C8',
                      backgroundColor: 'rgba(156, 39, 176, 0.1)',
                      '&:hover': {
                        background: 'rgba(156, 39, 176, 0.2)',
                        transform: 'scale(1.1)',
                        boxShadow: '0 0 15px rgba(186, 104, 200, 0.3)'
                      },
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    aria-label="Back"
                  >
                    <ArrowBack />
                  </IconButton>
                  <Typography variant="h4" >
                    </Typography> 
                    </Box>
    

  <Box
    component={motion.div}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    sx={{
      minHeight: 'calc(100vh - 64px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      py: { xs: 4, md: 8 }
    }}
  >
        <GradientHeading variant="h2" component="h1">
          Welcome to Datalore '25
        </GradientHeading>
        <Typography 
          variant="h3" 
          color="text.secondary" 
          sx={{ 
            fontFamily: 'var(--font-primary)',
            mb: 4, 
            maxWidth: 'sm', 
            mx: 'auto',
            fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.4rem' },
            lineHeight: 1.6,
            opacity: 0.9,
            letterSpacing: '0.01em'
          }}
        >
          Join us for an extraordinary journey into the future of technology
        </Typography>
        <CountdownTimer />
        <Box
          component={motion.div}
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          sx={{ mt: 6 }}
        >
          <Button
            onClick={(e) => {
              e.preventDefault();
              const button = e.currentTarget;
              const buttonRect = button.getBoundingClientRect();
              
              // Create overlay element
              const overlay = document.createElement('div');
              overlay.style.position = 'fixed';
              overlay.style.top = `${buttonRect.top}px`;
              overlay.style.left = `${buttonRect.left}px`;
              overlay.style.width = `${buttonRect.width}px`;
              overlay.style.height = `${buttonRect.height}px`;
              overlay.style.background = 'linear-gradient(135deg, #9C27B0 0%, #E1BEE7 50%, #9C27B0 100%)';
              overlay.style.backgroundSize = '200% 200%';
              overlay.style.animation = 'gradientShift 2s ease infinite';
              overlay.style.borderRadius = '30px';
              overlay.style.zIndex = '9999';
              overlay.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
              document.body.appendChild(overlay);

              // Add gradient animation keyframes
              const style = document.createElement('style');
              style.textContent = `
                @keyframes gradientShift {
                  0% { background-position: 0% 50% }
                  50% { background-position: 100% 50% }
                  100% { background-position: 0% 50% }
                }
              `;
              document.head.appendChild(style);

              // Animate overlay to full screen
              requestAnimationFrame(() => {
                overlay.style.transform = 'scale(60)';
                overlay.style.borderRadius = '0';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100vw';
                overlay.style.height = '100vh';
              });

              // Navigate after animation completes
              setTimeout(() => {
                window.location.href = '/register';
              }, 800);
            }}
            aria-label="Navigate to registration page"
            variant="contained"
            size="large"
            sx={{
              py: 2,
              px: 6,
              width: '280px',
              fontSize: { xs: '1.1rem', sm: '1.3rem' },
              fontWeight: 800,
              textTransform: 'none',
              borderRadius: '30px',
              background: 'linear-gradient(135deg, #9C27B0 0%, #E1BEE7 50%, #9C27B0 100%)',
              backgroundSize: '400% 400%',
              animation: 'gradient 8s ease infinite, pulse 2s ease-in-out infinite',
              boxShadow: '0 15px 45px rgba(156, 39, 176, 0.2)',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              mt: 4,
              mx: 'auto',
              display: 'block',
              position: 'relative',
              overflow: 'hidden',
              perspective: '1000px',
              transformStyle: 'preserve-3d',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
                transition: 'all 0.6s ease',
                zIndex: 1,
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                inset: -3,
                background: 'linear-gradient(135deg, #9C27B0, #E1BEE7, #9C27B0)',
                filter: 'blur(20px)',
                opacity: 0,
                transition: 'opacity 0.4s ease',
                zIndex: -1,
              },
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                transform: 'translateY(-5px) scale(1.02) rotateX(10deg)',
                boxShadow: '0 20px 60px rgba(156, 39, 176, 0.4)',
                '&::before': {
                  left: '100%',
                },
                '&::after': {
                  opacity: 0.8,
                },
              },
              '@keyframes gradient': {
                '0%': { backgroundPosition: '0% 50%' },
                '50%': { backgroundPosition: '100% 50%' },
                '100%': { backgroundPosition: '0% 50%' },
              },
              '@keyframes pulse': {
                '0%': { transform: 'scale(1)' },
                '50%': { transform: 'scale(1.02)' },
                '100%': { transform: 'scale(1)' },
              },
            }}
          >
            Register Now
          </Button>
        </Box>
      </Box>

      {/* Chief Guest Section */}
      <Box sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            mb: 6,
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.25rem' },
            background: 'linear-gradient(45deg, #9C27B0 30%, #BA68C8 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textTransform: 'uppercase',
            letterSpacing: '0.2em'
          }}
        >
          Chief Guest
        </Typography>
        <Card
          component={motion.div}
          whileHover={{ y: -10, boxShadow: '0 12px 40px rgba(156, 39, 176, 0.25)' }}
          sx={{ 
            background: 'rgba(18, 18, 18, 0.85)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(156, 39, 176, 0.2)',
            borderRadius: 4,
            overflow: 'hidden',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, transparent, rgba(156, 39, 176, 0.5), transparent)'
            },
            transition: 'all 0.4s ease-in-out'
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={12} md={4}>
              <Box sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  right: 0,
                  top: '10%',
                  height: '80%',
                  width: '1px',
                  background: 'linear-gradient(to bottom, transparent, rgba(156, 39, 176, 0.3), transparent)',
                  display: { xs: 'none', md: 'block' }
                }
              }}>
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: '350px',
                    aspectRatio: '1',
                    position: 'relative',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '3px solid rgba(156, 39, 176, 0.3)',
                    boxShadow: '0 8px 32px rgba(156, 39, 176, 0.2)'
                  }}
                >
                  <CardMedia
                    component="img"
                    image={guest.image}
                    alt={guest.name}
                    sx={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'grayscale(20%)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </Box>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mt: 3,
                    mb: 1,
                    color: '#fff',
                    fontWeight: 600,
                    textAlign: 'center',
                    fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
                  }}
                >
                  {guest.name}
                </Typography>
                <Typography 
                  variant="subtitle1"
                  sx={{ 
                    color: 'primary.main',
                    fontWeight: 500,
                    textAlign: 'center',
                    letterSpacing: '0.5px',
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                    opacity: 0.9
                  }}
                >
                  {guest.designation}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <CardContent 
                sx={{ 
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <Typography 
                  variant="body1"
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                    lineHeight: 1.8,
                    textAlign: 'justify',
                    position: 'relative',
                    '&::before': {
                      content: '"\u201C"',
                      fontSize: { xs: '3rem', sm: '3.5rem', md: '4rem' },
                      color: 'rgba(156, 39, 176, 0.2)',
                      position: 'absolute',
                      left: -10,
                      top: -20
                    }
                  }}
                >
                  {guest.description}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Box>
      
      {/* Events Section */}
      <Box sx={{ 
        overflow: 'hidden',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        py: 8
      }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            mb: 6,
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.25rem' },
            background: 'linear-gradient(45deg, #9C27B0 30%, #BA68C8 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textTransform: 'uppercase',
            letterSpacing: '0.2em'
          }}
        >
          Upcoming Events
        </Typography>
        <Box sx={{ 
          display: 'flex',
          width: '100%',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', gap: '48px', padding: '24px 0', position: 'relative', overflowX: 'auto' }}>
            {[...events, ...events].map((event, index) => (
              <Box
                key={`${event.id}-${index}`}
                sx={{
                  minWidth: { xs: '320px', sm: '380px', md: '420px' },
                  flexShrink: 0,
                  background: 'linear-gradient(145deg, rgba(18, 18, 18, 0.98) 0%, rgba(9, 9, 9, 0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
              >
                <motion.div
                  variants={eventVariants}
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card
                    onClick={() => handleOpenModal(event)}
                    sx={{
                      height: '100%',
                      background: 'linear-gradient(145deg, rgba(18, 18, 18, 0.98) 0%, rgba(9, 9, 9, 0.95) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(156, 39, 176, 0.3)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      position: 'relative',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(156, 39, 176, 0.3), transparent 100px)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        pointerEvents: 'none'
                      },
                      '&:hover': {
                        transform: 'translateY(-12px) scale(1.03)',
                        boxShadow: '0 25px 80px rgba(186, 104, 200, 0.4)',
                        border: '1px solid rgba(186, 104, 200, 0.6)',
                        opacity: 1,
                        '& .MuiCardContent-root': {
                          background: 'linear-gradient(145deg, rgba(18, 18, 18, 0.95) 0%, rgba(9, 9, 9, 0.98) 100%)',
                          boxShadow: 'inset 0 0 20px rgba(186, 104, 200, 0.2)'
                        },
                        '&::before': {
                          opacity: 1
                        }
                      }
                    }}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = ((e.clientX - rect.left) / rect.width) * 100;
                      const y = ((e.clientY - rect.top) / rect.height) * 100;
                      e.currentTarget.style.setProperty('--x', `${x}%`);
                      e.currentTarget.style.setProperty('--y', `${y}%`);
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography 
                        variant="h6" 
                        gutterBottom
                        sx={{
                          fontSize: { xs: '1.25rem', sm: '1.5rem' },
                          fontWeight: 700,
                          color: '#fff',
                          mb: 2,
                          textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                        }}
                      >
                        {event.title}
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <AccessTime sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              color: 'rgba(255,255,255,0.9)',
                              fontSize: '1.1rem',
                              fontFamily: 'var(--font-primary)',
                              fontWeight: 600,
                              letterSpacing: '0.05em'
                            }}
                          >
                            {event.date} | {event.time}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <LocationOn sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              color: 'rgba(255,255,255,0.9)',
                              fontSize: '1.1rem',
                              fontFamily: 'var(--font-primary)',
                              fontWeight: 600,
                              letterSpacing: '0.05em'
                            }}
                          >
                            {event.venue}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Group sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              color: 'rgba(255,255,255,0.9)',
                              fontSize: '1.1rem',
                              fontFamily: 'var(--font-primary)',
                              fontWeight: 600,
                              letterSpacing: '0.05em'
                            }}
                          >
                            Capacity: {event.capacity} participants
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </div>
        </Box>
      </Box>

      {/* Prize Pool Section */}
      <Box
        ref={ref}
        component={motion.div}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
        sx={{ py: 8 }}
      >
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            mb: 6,
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.25rem' },
            background: 'linear-gradient(45deg, #9C27B0 30%, #BA68C8 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textTransform: 'uppercase',
            letterSpacing: '0.2em'
          }}
        >
          Rewards & Prizes
        </Typography>

        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  textAlign: 'center',
                  p: 4
                }}
              >
                <Box
                  component="img"
                  src={trophyIcon}
                  alt="Trophy"
                  sx={{
                    width: { xs: '200px', md: '250px' },
                    height: 'auto',
                    mb: 3,
                    filter: 'drop-shadow(0 0 20px rgba(156, 39, 176, 0.3))',
                    animation: 'float 3s ease-in-out infinite'
                  }}
                />
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                    background: 'linear-gradient(45deg, #9C27B0 30%, #E1BEE7 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 2
                  }}
                >
                  {prizePool.total}
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    color: "#9C27B0",
                    fontWeight: 10000,
                    mb: 4
                  }}
                >
                  Total Prize Pool
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  background: 'rgba(18, 18, 18, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(156, 39, 176, 0.2)'
                }}
              >
                <Box sx={{ mb: 4 }}>
                  {prizePool.breakdown.map((prize, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                        p: 2,
                        borderRadius: '10px',
                        background: 'rgba(156, 39, 176, 0.1)',
                        border: '1px solid rgba(156, 39, 176, 0.2)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateX(10px)',
                          background: 'rgba(156, 39, 176, 0.15)',
                          border: '1px solid rgba(156, 39, 176, 0.3)'
                        }
                      }}
                    >
                      <prize.icon
                        sx={{
                          fontSize: '4rem',
                          color: index === 0 ? '#FFD700' : index === 1 ? '#C0C0C0' : '#CD7F32',
                          mr: 2
                        }}
                      />
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h2" sx={{ color: '#fff' }}>
                          {prize.position}
                        </Typography>
                        <Typography variant="h2" sx={{ color: theme.palette.primary.main, fontWeight: 10000 }}>
                          {prize.amount}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Divider sx={{ my: 3, borderColor: 'rgba(156, 39, 176, 0.2)' }} />

                <Typography variant="h2" sx={{ mb: 2, color: '#fff' }} align="center">
                  Additional Perks
                </Typography>
                <Grid container spacing={2}>
                  {prizePool.perks.map((perk, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          p: 1
                        }}
                      >
                        <WorkspacePremium sx={{ color: theme.palette.primary.main }} />
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                          {perk}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};


export default Home;
                  


                  