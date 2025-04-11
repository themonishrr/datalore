import { useState } from 'react';
import { Box, Container, Grid, Typography, Card, CardMedia, CardContent, Chip, Button, Modal } from '@mui/material';
import GradientHeading from '../components/common/GradientHeading';
import { motion, AnimatePresence } from 'framer-motion';
import { AccessTime, LocationOn, Group } from '@mui/icons-material';
import SectionHeading from '../components/common/SectionHeading';
import { Link as RouterLink } from 'react-router-dom';
import { DEFAULT_PROFILE_IMAGE } from '../constants/images';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Function to get student coordinator phone numbers
  const getStudentPhone = (studentName) => {
    const phoneNumbers = {
      'BhuvanKalyan': '+91 9876543210',
      'Harshini MD': '+91 9876543211',
      'Maiyazhagan V': '+91 9876543212',
      'Vaishnavi S': '+91 9876543213',
      'Yashwanth P': '+91 9876543214',
      'Thejas KS': '+91 9876543215',
      'Vijay Kumar V': '+91 9876543216',
      'Devika C': '+91 9876543217',
      'Nithish S': '+91 9876543218',
      'Praveen B': '+91 9876543219',
      'R Sai Narayanan': '+91 9876543220',
      'M Thofiq Gani': '+91 9876543221'
    };
    return phoneNumbers[studentName] || 'Contact number not available';
  };

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
      },
      description: 'Welcome to Prompt Craft 2025, an immersive competition designed to challenge participants in mastering the art of prompt engineering! Over two intense rounds, participants will demonstrate their expertise in crafting precise, creative, and optimized prompts for AI models. Round 1 focuses on basic prompt engineering techniques and optimization, while Round 2 challenges participants with complex scenarios requiring advanced prompt chaining and context manipulation. Winners will be judged on prompt effectiveness, creativity, and practical applicability.',
      highlights: [
        'Two challenging rounds with increasing complexity',
        'Hands-on experience with latest AI models',
        'Real-world problem-solving scenarios',
        'Expert mentorship and guidance',
        'Valuable feedback from industry professionals',
        'Networking opportunities with AI enthusiasts'
      ],
      coordinators: {
        staff: ['Mrs.P.Jayasri Archana Devi'],
        students: ['BhuvanKalyan', 'Harshini MD']
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
      },
      description: 'Design Sphere is an intensive UI/UX design competition that challenges participants to create innovative, user-centric digital experiences. In Round 1, teams will redesign a given interface focusing on usability and aesthetic appeal. Round 2 presents a complex design challenge where participants must create a complete design system including wireframes, prototypes, and user journey maps. The competition emphasizes modern design principles, accessibility standards, and real-world applicability.',
      highlights: [
        'Comprehensive UI/UX design challenges',
        'Industry-standard tool utilization',
        'User research and persona creation',
        'Interactive prototyping',
        'Professional design critique sessions',
        'Portfolio-worthy project opportunities'
      ],
      coordinators: {
        staff: ['Mrs.A.Mariya Monica Celestir'],
        students: ['Maiyazhagan V', 'Vaishnavi S']
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
      },
      description: 'Pitch or Pass is an exhilarating investment challenge where participants step into the shoes of venture capitalists. Teams will receive comprehensive financial datasets, market analysis reports, and company profiles. They must conduct thorough analysis, develop investment strategies, and create compelling investment proposals. The final round involves presenting their investment thesis to a panel of experienced investors and defending their decisions through detailed Q&A sessions.',
      highlights: [
        'Real-world financial data analysis',
        'Market research and trend analysis',
        'Risk assessment techniques',
        'Investment portfolio optimization',
        'Professional pitch deck creation',
        'Live Q&A with industry experts'
      ],
      coordinators: {
        staff: ['Mr.P.Preejith', 'Mrs.S.Renuka Devi'],
        students: ['Yashwanth P', 'Thejas KS']
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
      },
      description: 'The Quest for Innovation is an intensive case study competition that challenges participants to solve real-world business and technology problems. Teams will receive detailed case studies from leading companies, requiring them to analyze complex scenarios, identify key challenges, and propose innovative solutions. The competition tests participants\'s analytical thinking, problem-solving abilities, and strategic planning skills.',
      highlights: [
        'Real industry case analysis',
        'Strategic problem-solving',
        'Business model innovation',
        'Technology integration planning',
        'Professional presentation skills',
        'Feedback from industry leaders'
      ],
      coordinators: {
        staff: ['Dr.V.Sampath Kumar', 'Mr.G.Thiyagarajan'],
        students: ['Vijay Kumar V', 'Devika C']
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
      },
      description: 'Insight is a premier project showcase event where participants present their innovative AI and Data Science projects. This platform allows students to demonstrate their technical expertise, creativity, and problem-solving abilities through practical applications. Projects will be evaluated based on innovation, technical complexity, practical impact, and presentation quality. Selected projects will receive mentorship opportunities and potential industry collaboration prospects.',
      highlights: [
        'Live project demonstrations',
        'Technical deep-dive sessions',
        'Innovation assessment',
        'Industry mentor feedback',
        'Networking opportunities',
        'Publication opportunities'
      ],
      coordinators: {
        staff: ['Dr. J. Manoranjini', 'Dr. A. Beulah'],
        students: ['Nithish S', 'Praveen B']
      }
    },
    {
      id: 6,
      title: 'Code Heist',
      category: 'Coding Challenge',
      image: DEFAULT_PROFILE_IMAGE,
      date: '2025',
      time: '2 hours',
      venue: 'KFR02',
      capacity: 30,
      slot: 'I',
      actualTime: '9:45 - 11:45',
      prizePool: {
        first: '₹1,500',
        second: '₹1,000'
      },
      description: 'Code Heist is an immersive coding challenge that puts participants in the role of ethical hackers. Through three progressively challenging rounds, participants must navigate a simulated high-security system, combining coding skills with strategic thinking. Round 1 focuses on basic system penetration, Round 2 involves advanced encryption challenges, and the final round tests participants\' ability to execute a complete system infiltration while maintaining stealth.',
      highlights: [
        'Progressive difficulty levels',
        'Advanced encryption challenges',
        'System security analysis',
        'Code optimization tasks',
        'Real-time monitoring evasion',
        'Strategic resource management'
      ],
      coordinators: {
        staff: ['Ms Selvarani'],
        students: ['R Sai Narayanan', 'M Thofiq Gani']
      }
    },
    {
      id: 7,
      title: 'Papervez',
      category: 'Paper Presentation',
      image: DEFAULT_PROFILE_IMAGE,
      date: '2025',
      time: '2 hours',
      venue: 'Purple Hall',
      capacity: 45,
      slot: 'I',
      actualTime: '9:45 - 11:45',
      teamSize: '1-3',
      prizePool: {
        first: '₹2,500',
        second: '₹1,000'
      },
      description: 'Papervez is an academic paper presentation competition where teams of 1-3 members present their research work in emerging technologies. Participants will showcase their research findings, methodologies, and conclusions through professional presentations.',
      highlights: [
        'Research presentation',
        'Technical paper writing',
        'Academic discussion',
        'Professional feedback',
        'Publication opportunities',
        'Networking with researchers'
      ],
      coordinators: {
        staff: ['Dr. Research Coordinator'],
        students: ['Research Lead 1', 'Research Lead 2']
      }
    },
    {
      id: 8,
      title: 'Workshop',
      category: 'Technical Workshop',
      image: DEFAULT_PROFILE_IMAGE,
      date: '2025',
      time: '2 hours',
      venue: 'Main Seminar Hall',
      capacity: 100,
      slot: 'I',
      actualTime: '9:45 - 11:45',
      description: 'A comprehensive technical workshop focusing on cutting-edge technologies and industry practices. Participants will gain hands-on experience with the latest tools and frameworks while learning from industry experts.',
      highlights: [
        'Hands-on training',
        'Industry expert sessions',
        'Interactive learning',
        'Practical exercises',
        'Take-home resources',
        'Certificate of completion'
      ],
      coordinators: {
        staff: ['Workshop Coordinator'],
        students: ['Workshop Lead 1', 'Workshop Lead 2']
      }
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 0.8,
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      y: -8,
      boxShadow: "0 20px 40px rgba(156, 39, 176, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.5,
        duration: 0.3
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.4
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 30,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 3 } }}>
      <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
        <GradientHeading 
          variant="h2" 
          component="h1" 
        >
          Featured Events
        </GradientHeading>
        <Typography 
          variant="h2" 
          color="text.secondary"
          sx={{ 
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            maxWidth: '800px',
            mx: 'auto',
            opacity: 0.9
          }}
        >
          Discover our exciting lineup of workshops and sessions
        </Typography>
      </Box>

      <Grid container spacing={{ xs: 4, md: 5 }} alignItems="stretch">
        {events.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: Math.min(index * 0.1, 0.8) }}
              style={{ height: '100%' }}
            >
              <Card
                onClick={() => setSelectedEvent(event)}
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  background: 'rgba(18, 18, 18, 0.8)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(156, 39, 176, 0.15)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: '0 25px 50px -12px rgba(156, 39, 176, 0.25)',
                    border: '1px solid rgba(156, 39, 176, 0.4)',
                    '& .event-image': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={event.image}
                    alt={event.title}
                    className="event-image"
                    sx={{
                      transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                      filter: 'brightness(0.85)',
                      '&:hover': {
                        filter: 'brightness(1)'
                      }
                    }}
                  />
                  <Chip
                    label={event.category}
                    color="primary"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      backdropFilter: 'blur(8px)',
                      background: 'rgba(156, 39, 176, 0.9)',
                      borderRadius: '16px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontSize: '0.75rem',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                    }}
                  />
                </Box>

                <CardContent sx={{ p: 3.5 }}>
                  <Typography 
                    variant="h4" 
                    gutterBottom
                    sx={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: { xs: '1.75rem', md: '2rem' },
                      background: 'linear-gradient(45deg, #9C27B0 30%, #BA68C8 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      transition: 'all 0.3s ease',
                      mb: 2.5,
                      lineHeight: 1.2,
                      '&:hover': {
                        transform: 'translateX(4px)'
                      }
                    }}
                  >
                    {event.title}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mt: 2.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <AccessTime sx={{ color: '#BA68C8', fontSize: '1.4rem' }} />
                      <Box>
                        <Typography variant="body1" sx={{ color: '#E0E0E0', fontSize: { xs: '1.1rem', md: '1.2rem' }, fontWeight: 500 }}>
                          Duration: {event.time}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#BA68C8', fontSize: { xs: '0.9rem', md: '1rem' }, fontWeight: 500 }}>
                          Time: {event.actualTime} (Slot {event.slot})
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <LocationOn sx={{ color: '#BA68C8', fontSize: '1.4rem' }} />
                      <Typography variant="body1" sx={{ color: '#E0E0E0', fontSize: { xs: '1.1rem', md: '1.2rem' }, fontWeight: 500 }}>
                        {event.venue}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Group sx={{ color: '#BA68C8', fontSize: '1.4rem' }} />
                      <Typography variant="body1" sx={{ color: '#E0E0E0', fontSize: { xs: '1.1rem', md: '1.2rem' }, fontWeight: 500 }}>
                        {event.capacity} participants
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        closeAfterTransition
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 2, sm: 3, md: 4 },
          '& .MuiBackdrop-root': {
            backdropFilter: 'blur(12px)',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          style={{ 
            width: '100%', 
            maxWidth: '1000px',
            margin: '0 auto',
            position: 'relative',
            borderRadius: '24px'
          }}
        >
          <Box
            sx={{
              bgcolor: 'rgba(18, 18, 18, 0.95)',
              backdropFilter: 'blur(20px)',
              p: { xs: 3, sm: 4, md: 5 },
              borderRadius: '24px',
              border: '1px solid rgba(156, 39, 176, 0.2)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
              position: 'relative'
            }}
          >
            {selectedEvent && (
              <Grid container spacing={4}>
                <Grid item xs={12} md={7}>
                  <Box 
                    component={motion.div}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        fontSize: { xs: '2rem', sm: '2.25rem', md: '2.5rem' },
                        background: 'linear-gradient(45deg, #9C27B0 30%, #BA68C8 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        mb: 3,
                        fontFamily: 'var(--font-display)'
                      }}
                    >
                      {selectedEvent.title}
                    </Typography>
                    
                    <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#E0E0E0', mb: 4 }}>
                      {selectedEvent.description}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 4 }}>                      
                      {selectedEvent.highlights.map((highlight, index) => (
                        <Chip
                          key={index}
                          label={highlight}
                          sx={{
                            background: 'rgba(156, 39, 176, 0.1)',
                            border: '1px solid rgba(156, 39, 176, 0.2)',
                            color: '#E0E0E0',
                            py: 1.5,
                            px: 1,
                            '&:hover': { background: 'rgba(156, 39, 176, 0.2)' }
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={5}>
                  <Box
                    sx={{
                      background: 'rgba(18, 18, 18, 0.8)',
                      borderRadius: '16px',
                      border: '1px solid rgba(156, 39, 176, 0.2)',
                      p: 3,
                    }}
                  >
                    <Typography variant="h6" sx={{ color: '#BA68C8', mb: 3, fontSize: '1.25rem' }}>Event Details</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <AccessTime sx={{ color: '#CE93D8', fontSize: '1.5rem' }} />
                        <Typography variant="body1" sx={{ color: '#E0E0E0', fontSize: '1.1rem' }}>{selectedEvent.time}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <LocationOn sx={{ color: '#CE93D8', fontSize: '1.5rem' }} />
                        <Typography variant="body1" sx={{ color: '#E0E0E0', fontSize: '1.1rem' }}>{selectedEvent.venue}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Group sx={{ color: '#CE93D8', fontSize: '1.5rem' }} />
                        <Typography variant="body1" sx={{ color: '#E0E0E0', fontSize: '1.1rem' }}>{selectedEvent.capacity} participants</Typography>
                      </Box>
                    </Box>

                    <Box sx={{ mt: 4 }}>
                      <Typography variant="h6" sx={{ color: '#BA68C8', mb: 3, fontSize: '1.25rem' }}>Coordinators</Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Box>
                          <Typography variant="subtitle1" sx={{ color: '#E0E0E0', mb: 1 }}>Staff Coordinators:</Typography>
                          {selectedEvent.coordinators.staff.map((staff, index) => (
                            <Typography key={index} variant="body2" sx={{ color: '#BA68C8' }}>{staff}</Typography>
                          ))}
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" sx={{ color: '#E0E0E0', mb: 1 }}>Student Coordinators:</Typography>
                          {selectedEvent.coordinators.students.map((student, index) => (
                            <Typography key={index} variant="body2" sx={{ color: '#BA68C8' }}>
                              {student} - {getStudentPhone(student)}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    </Box>

                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      component={RouterLink}
                      to="/register"
                      sx={{
                        mt: 4,
                        width: '100%',
                        py: 1.5,
                        borderRadius: '12px',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        background: 'linear-gradient(45deg, #9C27B0 30%, #BA68C8 90%)',
                        boxShadow: '0 8px 20px rgba(156, 39, 176, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #7B1FA2 30%, #9C27B0 90%)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 12px 28px rgba(156, 39, 176, 0.4)'
                        }
                      }}
                    >
                      Register Now
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            )}
          </Box>
        </motion.div>
      </Modal>
    </Container>
  );
};

export default Events;