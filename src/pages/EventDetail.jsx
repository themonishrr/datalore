import { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Chip,
  Avatar,
  Card,
  CardContent,
  Divider,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import SectionHeading from '../components/common/SectionHeading';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Simulated event data - In a real app, this would come from an API
  useEffect(() => {
    // Simulating API call
    const eventData = {
      id: 'hackathon',
      title: 'AI Hackathon 2024',
      description: 'Join us for an exciting 24-hour hackathon where you\'ll work with cutting-edge AI technologies to solve real-world problems. Collaborate with fellow developers, receive mentorship from industry experts, and compete for amazing prizes.',
      date: '2024-03-15',
      time: '9:00 AM - 9:00 AM (Next day)',
      venue: 'Main Conference Hall, Engineering Block',
      capacity: 200,
      image: '/events/hackathon-detail.jpg',
      category: 'Competition',
      registrationDeadline: '2024-03-01',
      prizeMoney: '₹1,00,000',
      highlights: [
        'Access to latest AI tools and APIs',
        'Mentorship from industry experts',
        'Networking opportunities',
        'Free meals and refreshments',
        'Certificate of participation',
        'Exciting prizes for winners',
      ],
      schedule: [
        { time: '9:00 AM', activity: 'Registration and Team Formation' },
        { time: '10:00 AM', activity: 'Opening Ceremony and Problem Statement Release' },
        { time: '11:00 AM', activity: 'Hacking Begins' },
        { time: '2:00 PM', activity: 'Lunch Break' },
        { time: '6:00 PM', activity: 'Mentorship Sessions' },
        { time: '9:00 PM', activity: 'Dinner Break' },
        { time: '8:00 AM', activity: 'Submission Deadline' },
        { time: '9:00 AM', activity: 'Presentations and Judging' },
      ],
      speakers: [
        {
          name: 'Dr. Sarah Johnson',
          role: 'AI Research Lead, Google',
          image: '/speakers/speaker1.jpg',
        },
        {
          name: 'Michael Chen',
          role: 'Senior Developer, Microsoft',
          image: '/speakers/speaker2.jpg',
        },
      ],
    };

    setEvent(eventData);
  }, [id]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (!event) {
    return null; // Or a loading spinner
  }

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {/* Hero Section */}
        <Box
          component={motion.div}
          variants={fadeInUp}
          sx={{
            position: 'relative',
            height: { xs: 300, md: 400 },
            borderRadius: '24px',
            overflow: 'hidden',
            mb: 6,
          }}
        >
          <Box
            component="img"
            src={event.image}
            alt={event.title}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
              p: { xs: 3, md: 5 },
            }}
          >
            <Typography variant="h2" color="white" gutterBottom>
              {event.title}
            </Typography>
            <Chip
              label={event.category}
              color="primary"
              sx={{ mt: 1 }}
            />
          </Box>
        </Box>

        {/* Event Details */}
        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} md={8}>
            <motion.div variants={fadeInUp}>
              <Card
                sx={{
                  background: 'linear-gradient(145deg, #121212 0%, #090909 100%)',
                  borderRadius: '20px',
                  mb: 4,
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" gutterBottom color="primary.main">
                    About the Event
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {event.description}
                  </Typography>

                  <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                    <Button
                      variant="contained"
                      component={RouterLink}
                      to="/register"
                      size="large"
                    >
                      Register Now
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                    >
                      Share Event
                    </Button>
                  </Stack>

                  <Divider sx={{ my: 4 }} />

                  {/* Event Highlights */}
                  <Typography variant="h5" gutterBottom color="primary.main">
                    Event Highlights
                  </Typography>
                  <Grid container spacing={2} sx={{ mb: 4 }}>
                    {event.highlights.map((highlight, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '&:before': {
                              content: '"•"',
                              color: 'primary.main',
                              mr: 2,
                              fontSize: '1.5rem',
                            },
                          }}
                        >
                          {highlight}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>

                  {/* Schedule */}
                  <Typography variant="h5" gutterBottom color="primary.main">
                    Event Schedule
                  </Typography>
                  <Box sx={{ mb: 4 }}>
                    {event.schedule.map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          mb: 2,
                          p: 2,
                          borderRadius: 2,
                          bgcolor: 'rgba(156, 39, 176, 0.1)',
                          '&:hover': {
                            bgcolor: 'rgba(156, 39, 176, 0.15)',
                          },
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          color="primary.main"
                          sx={{ minWidth: 100 }}
                        >
                          {item.time}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {item.activity}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <motion.div variants={fadeInUp}>
              {/* Event Info Card */}
              <Card
                sx={{
                  background: 'linear-gradient(145deg, #121212 0%, #090909 100%)',
                  borderRadius: '20px',
                  mb: 4,
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Stack spacing={3}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CalendarTodayIcon color="primary" sx={{ mr: 2 }} />
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                          Date
                        </Typography>
                        <Typography variant="body1">{event.date}</Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccessTimeIcon color="primary" sx={{ mr: 2 }} />
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                          Time
                        </Typography>
                        <Typography variant="body1">{event.time}</Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LocationOnIcon color="primary" sx={{ mr: 2 }} />
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                          Venue
                        </Typography>
                        <Typography variant="body1">{event.venue}</Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <GroupIcon color="primary" sx={{ mr: 2 }} />
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                          Capacity
                        </Typography>
                        <Typography variant="body1">{event.capacity} participants</Typography>
                      </Box>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>

              {/* Speakers Card */}
              <Card
                sx={{
                  background: 'linear-gradient(145deg, #121212 0%, #090909 100%)',
                  borderRadius: '20px',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom color="primary.main">
                    Event Speakers
                  </Typography>
                  <Stack spacing={2}>
                    {event.speakers.map((speaker, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                        }}
                      >
                        <Avatar
                          src={speaker.image}
                          alt={speaker.name}
                          sx={{ width: 60, height: 60 }}
                        />
                        <Box>
                          <Typography variant="subtitle1">{speaker.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {speaker.role}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default EventDetail;