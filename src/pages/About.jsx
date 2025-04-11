import { Box, Container, Grid, Typography, Card, Avatar, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../components/common/SectionHeading';
import GradientHeading from '../components/common/GradientHeading';
import { DEFAULT_PROFILE_IMAGE } from '../constants/images';

const About = () => {
  // Remove the useInView hook and related state
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const organizers = [
    {
      name: "Dr. J.M Gnanesekaran",
      role: "Head of Department",
      department: "Artificial Intelligence and Data Science",
      image: "/assets/images/gnanasekar.jpg",
      expertise: ['AI Research', 'Data Analytics', 'Machine Learning']
    },
    {
      name: "Dr. S.Suresh Kumar",
      role: "Associate Professor",
      department: "Artificial Intelligence and Data Science",
      image: "/assets/images/suresh kumar.jpg",
      expertise: ['Machine Learning', 'Deep Learning', 'Computer Vision']
    }
  ];

  const teamMembers = [
    {
      name: 'Monish R R',
      role: 'Team Lead',
      image: DEFAULT_PROFILE_IMAGE,
      bio: 'Full-stack developer specializing in React and Node.js.',
    },
    {
      name: 'Bhuvan Kalyan',
      role: 'Technical Lead',
      image: DEFAULT_PROFILE_IMAGE,
      bio: 'Expert in AI/ML implementations and system architecture.',
    },
    {
      name: 'Harshini MD',
      role: 'Design Lead',
      image: DEFAULT_PROFILE_IMAGE,
      bio: 'UI/UX specialist with expertise in user-centered design.',
    },
    {
      name: 'Maiyazhagan V',
      role: 'Frontend Developer',
      image: DEFAULT_PROFILE_IMAGE,
      bio: 'Specialized in creating responsive and interactive web interfaces.',
    },
    {
      name: 'Vaishnavi S',
      role: 'Backend Developer',
      image: DEFAULT_PROFILE_IMAGE,
      bio: 'Database expert and API architect.',
    },
    {
      name: 'Yashwanth P',
      role: 'Content Strategist',
      image: DEFAULT_PROFILE_IMAGE,
      bio: 'Creating engaging content and documentation.',
    },
    {
      name: 'Thejas KS',
      role: 'QA Engineer',
      image: DEFAULT_PROFILE_IMAGE,
      bio: 'Ensuring quality and performance optimization.',
    },
    {
      name: 'Vijay Kumar V',
      role: 'DevOps Engineer',
      image: DEFAULT_PROFILE_IMAGE,
      bio: 'Managing deployment and infrastructure.',
    },
    {
      name: 'Devika C',
      role: 'UI Developer',
      image: DEFAULT_PROFILE_IMAGE,
      bio: 'Creating beautiful and intuitive user interfaces.',
    },
    {
      name: 'Nithish S',
      role: 'Backend Developer',
      image: DEFAULT_PROFILE_IMAGE,
      bio: 'Specialized in server-side architecture and performance.',
    },
    {
      name: 'Praveen B',
      role: 'Frontend Developer',
      image: DEFAULT_PROFILE_IMAGE,
      bio: 'Expert in modern frontend frameworks and animations.',
    },
    {
      name: 'R Sai Narayanan',
      role: 'Security Specialist',
      image: DEFAULT_PROFILE_IMAGE,
      bio: 'Implementing robust security measures and best practices.',
    },
    {
      name: 'M Thofiq Gani',
      role: 'Database Administrator',
      image: DEFAULT_PROFILE_IMAGE,
      bio: 'Managing database architecture and optimization.',
    },
    {
      name: 'Santhosh Kumar R',
      role: 'System Architect',
      image: DEFAULT_PROFILE_IMAGE,
      bio: 'Designing scalable system architecture and integration.',
    },
    {
      name: 'Abishek S',
      role: 'Testing Lead',
      image: DEFAULT_PROFILE_IMAGE,
      bio: 'Leading quality assurance and testing strategies.',
    }
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
      <GradientHeading variant="h2" component="h1" align="center">
          About REC
        </GradientHeading>
        <Typography variant="h1" align="center" color="text.secondary" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '1.9rem', md: '1.9rem' }, mb: 6 }}>
          Excellence in Engineering Education
        </Typography>

        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <Box
              component="img" // Remove motion.img
              src="/IMG_0195.JPG"
              alt="Rajalakshmi Engineering College"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 4,
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div> {/* Remove motion.div */}
              <GradientHeading 
                variant="h1" 
                component="h5" 
                align="center"
                sx={{
                  position: 'relative',
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    right: '-10px',
                    bottom: '-10px',
                    borderRadius: '8px',
                    filter: 'blur(8px)',
                    animation: 'pulse 3s ease-in-out infinite'
                  },
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
                    '50%': { opacity: 0.8, transform: 'scale(1.05)' }
                  }
                }}
              >
                Our Legacy of Excellence
              </GradientHeading>
              <Typography variant="body1" textAlign="justify" sx={{ mb: 3, lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>
                Rajalakshmi Engineering College, established in 1997, stands as a premier institution of higher learning in Chennai. Renowned for its academic excellence, state-of-the-art infrastructure, and industry collaborations, REC has consistently produced skilled engineers who drive innovation across the globe. Our commitment to quality education and research has earned us prestigious accreditations and rankings.
              </Typography>
            </div>
          </Grid>
        </Grid>

        {/* Faculty Coordinators Section */}
        <Box sx={{ mt: 12 }}>
          <GradientHeading variant="h2" component="h1" align="center">
            Faculty Coordinators
          </GradientHeading>

          <Grid container spacing={4}>
            {organizers.map((coordinator) => (
              <Grid item xs={12} sm={6} key={coordinator.name}>
                  <Card
                    sx={{
                      p: 4,
                      background: 'linear-gradient(145deg, rgba(18, 18, 18, 0.8) 0%, rgba(9, 9, 9, 0.9) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '2px solid transparent',
                      borderRadius: '20px',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: '18px',
                        padding: '2px',
                        background: 'linear-gradient(135deg, #9C27B0 0%, #E1BEE7 50%, #9C27B0 100%)',
                        opacity: 0.2,
                        animation: 'gradient 8s ease infinite',
                      },
                      '@keyframes gradient': {
                        '0%': {
                          backgroundPosition: '0% 50%',
                          opacity: 0.2,
                        },
                        '50%': {
                          backgroundPosition: '100% 50%',
                          opacity: 0.3,
                        },
                        '100%': {
                          backgroundPosition: '0% 50%',
                          opacity: 0.2,
                        },
                      },
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)',
                        boxShadow: '0 20px 40px rgba(156, 39, 176, 0.2)',
                        '&::before': {
                          opacity: 0.4,
                        },
                        '& .coordinator-avatar': {
                          transform: 'scale(1.05) rotate(5deg)',
                          boxShadow: '0 0 30px rgba(156, 39, 176, 0.3)',
                        },
                        '& .expertise-chip': {
                          background: 'rgba(156, 39, 176, 0.3)',
                          borderColor: 'rgba(156, 39, 176, 0.6)',
                          transform: 'translateY(-2px)',
                        }
                      },
                    }}
                  >
                    <Avatar
                      src={coordinator.image}
                      alt={coordinator.name}
                      className="coordinator-avatar"
                      sx={{
                        width: 140,
                        height: 140,
                        mx: 'auto',
                        mb: 3,
                        border: '4px solid',
                        borderColor: 'primary.main',
                        boxShadow: '0 8px 24px rgba(156, 39, 176, 0.2)',
                        transition: 'all 0.4s ease',
                      }}
                    />
                    <Typography 
                      variant="h4" 
                      align="center" 
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        background: 'linear-gradient(135deg, #fff 0%, #9C27B0 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                      }}
                    >
                      {coordinator.name}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      align="center" 
                      sx={{
                        color: 'primary.main',
                        fontWeight: 500,
                        mb: 1,
                        letterSpacing: '0.5px'
                      }}
                    >
                      {coordinator.role}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      align="center" 
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        mb: 3,
                        fontStyle: 'italic'
                      }}
                    >
                      {coordinator.department}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', justifyContent: 'center' }}>
                      {coordinator.expertise.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          className="expertise-chip"
                          sx={{
                            background: 'rgba(156, 39, 176, 0.1)',
                            border: '1px solid rgba(156, 39, 176, 0.3)',
                            color: '#fff',
                            fontWeight: 500,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: 'rgba(156, 39, 176, 0.25)',
                              transform: 'translateY(-2px)'
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* Team Members Section */}
        <Box 
          id="our-team"
          sx={{ 
            mt: 12, 
            mb: 12,
            scrollMarginTop: '150px', // Adjust this value based on your header height
            '&:target': {
              pt: '150px', // Creates space at the top when navigated to
              mt: '-150px' // Pulls the content up to compensate
            }
          }}
        >
          <GradientHeading variant="h2" component="h1" align="center">
            Our Team
          </GradientHeading>

          <Grid container spacing={4}>
            {teamMembers.map((member) => (
              <Grid item xs={12} sm={6} md={4} key={member.name}>
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    borderRadius: '12px',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 16px 40px rgba(156, 39, 176, 0.3)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      '& .team-avatar-container': {
                        transform: 'rotate(5deg) scale(1.05)',
                        '&::before': {
                          opacity: 0.8
                        }
                      }
                    }
                  }}
                >
                  <Box
                    className="team-avatar-container"
                    sx={{
                      position: 'relative',
                      width: 120,
                      height: 120,
                      mb: 3,
                      borderRadius: '8px',
                      overflow: 'hidden',
                      transition: 'all 0.4s ease',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.8), rgba(225, 190, 231, 0.8))',
                        opacity: 0.5,
                        transition: 'all 0.4s ease'
                      }
                    }}
                  >
                    <Box
                      component="img"
                      src={member.image}
                      alt={member.name}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'relative'
                      }}
                    />
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{
                      fontWeight: 700,
                      color: 'text.primary',
                      mb: 1,
                      fontSize: '1.25rem',
                      background: 'linear-gradient(135deg, #fff 0%, #9C27B0 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography 
                    variant="subtitle1"
                    sx={{ 
                      color: 'primary.light',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      letterSpacing: '0.5px',
                      mb: 2
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Typography 
                    variant="body2"
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      lineHeight: 1.6,
                      fontSize: '0.9rem',
                      mb: 3
                    }}
                  >
                    {member.bio}
                  </Typography>
                  <Box sx={{ 
                    display: 'flex',
                    gap: 1,
                    '& > div': {
                      width: '20px',
                      height: '4px',
                      background: 'linear-gradient(90deg, #9C27B0, #E1BEE7)',
                      borderRadius: '2px',
                      opacity: 0.6
                    }
                  }}>
                    <Box />
                    <Box />
                    <Box />
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;