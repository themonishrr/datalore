import { useState } from 'react';
import { Box, Container, Tabs, Tab, Typography, Paper, Grid, Chip, IconButton } from '@mui/material';
import GradientHeading from '../components/common/GradientHeading';
import { motion, AnimatePresence } from 'framer-motion';
import { Schedule as ScheduleIcon, LocationOn, Person } from '@mui/icons-material';
import SectionHeading from '../components/common/SectionHeading';

const Schedule = () => {
  const [activeEvent, setActiveEvent] = useState(0);
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const scheduleData = [
    {
      time: '08:30 AM',
      title: 'Registration & Welcome Kit Distribution',
      speaker: 'Event Team',
      venue: 'Main Entrance Hall',
      type: 'Registration',
    },
    {
      time: '09:30 AM',
      title: 'Opening Ceremony & Keynote Address',
      speaker: 'Dr. Sarah Johnson',
      venue: 'Main Auditorium',
      type: 'Ceremony',
    },
    {
      time: '10:45 AM',
      title: 'AI in Healthcare: Future Perspectives',
      speaker: 'Prof. Michael Chen',
      venue: 'Conference Hall A',
      type: 'Keynote',
    },
    {
      time: '12:00 PM',
      title: 'Networking Lunch',
      speaker: 'All Participants',
      venue: 'Dining Hall',
      type: 'Break',
    },
    {
      time: '01:30 PM',
      title: 'Innovision: AI Battle Arena',
      speaker: 'Competition Teams',
      venue: 'Tech Lab',
      type: 'Competition',
    },
    {
      time: '03:00 PM',
      title: 'Brainstorm Blitz Presentations',
      speaker: 'Selected Participants',
      venue: 'Conference Hall B',
      type: 'Presentation',
    },
    {
      time: '04:30 PM',
      title: 'Industry Expert Panel Discussion',
      speaker: 'Tech Leaders Panel',
      venue: 'Main Auditorium',
      type: 'Panel',
    },
    {
      time: '05:45 PM',
      title: 'Awards Ceremony & Closing',
      speaker: 'Organizing Committee',
      venue: 'Main Auditorium',
      type: 'Ceremony',
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <GradientHeading variant="h2" component="h1" align="center" >
        Event Timeline
      </GradientHeading>
      <Typography variant="h1" align="center" color="text.secondary" gutterBottom sx={{ mb: 9 }}>
        Your roadmap through  DATALORE '25
      </Typography>

      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: 4,
        position: 'relative',
      }}>
        {/* Active Event Display */}
        <Box sx={{ 
          position: { xs: 'relative', md: 'sticky' },
          top: 100,
          height: 'fit-content'
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEvent}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Paper sx={{
                p: 4,
                background: 'rgba(18, 18, 18, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(156, 39, 176, 0.2)',
                borderRadius: 2,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #9C27B0, #BA68C8)',
                }
              }}>
                <Typography variant="h3" sx={{ color: '#BA68C8', mb: 1 }}>
                  {scheduleData[activeEvent].time}
                </Typography>
                <Typography variant="h4" sx={{ color: '#fff', mb: 3 }}>
                  {scheduleData[activeEvent].title}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip
                        icon={<Person sx={{ color: '#BA68C8' }} />}
                        label={scheduleData[activeEvent].speaker}
                        sx={{
                          background: 'rgba(156, 39, 176, 0.1)',
                          border: '1px solid rgba(156, 39, 176, 0.3)',
                          color: '#fff'
                        }}
                      />
                      <Chip
                        icon={<LocationOn sx={{ color: '#BA68C8' }} />}
                        label={scheduleData[activeEvent].venue}
                        sx={{
                          background: 'rgba(156, 39, 176, 0.1)',
                          border: '1px solid rgba(156, 39, 176, 0.3)',
                          color: '#fff'
                        }}
                      />
                      <Chip
                        label={scheduleData[activeEvent].type}
                        sx={{
                          background: 'linear-gradient(45deg, #9C27B0 30%, #BA68C8 90%)',
                          color: '#fff',
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          </AnimatePresence>
        </Box>

        {/* Timeline */}
        <Box sx={{ position: 'relative' }}>
          <Box sx={{
            position: 'absolute',
            left: '24px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'rgba(156, 39, 176, 0.2)',
            zIndex: 0,
          }} />

          {scheduleData.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredEvent(index)}
              onHoverEnd={() => setHoveredEvent(null)}
              onClick={() => setActiveEvent(index)}
              sx={{ cursor: 'pointer' }}
            >
              <Box sx={{
                position: 'relative',
                pl: 6,
                pr: 2,
                py: 2,
                mb: 2,
              }}>
                <Box sx={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: activeEvent === index ? 
                    'linear-gradient(45deg, #9C27B0, #BA68C8)' : 
                    'rgba(156, 39, 176, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: activeEvent === index ?
                    '0 0 20px rgba(156, 39, 176, 0.5)' : 'none',
                  zIndex: 1,
                }}>
                  <Typography sx={{ 
                    color: '#fff',
                    fontWeight: 600 
                  }}>
                    {index + 1}
                  </Typography>
                </Box>

                <Paper sx={{
                  p: 3,
                  background: activeEvent === index ? 
                    'rgba(156, 39, 176, 0.15)' : 
                    'rgba(18, 18, 18, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  transform: hoveredEvent === index ? 'translateX(10px)' : 'none',
                  border: `1px solid ${activeEvent === index ? 
                    'rgba(156, 39, 176, 0.5)' : 
                    'rgba(156, 39, 176, 0.1)'}`,
                }}>
                  <Typography variant="h6" sx={{ color: '#BA68C8' }}>
                    {event.time}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#fff', mt: 1 }}>
                    {event.title}
                  </Typography>
                </Paper>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Schedule;