import { useState } from 'react';
import { 
  Box, Container, Paper, Stepper, Step, StepLabel, Typography, 
  TextField, Button, FormControl, InputLabel, Select, MenuItem, 
  FormControlLabel, FormLabel, Alert, Checkbox, Radio, RadioGroup,
  Grid, Divider, Tooltip
} from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Send from '@mui/icons-material/Send';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
// Remove this line as we already have the individual imports above
// import { ArrowBackIcon, ArrowForwardIcon, SendIcon } from '@mui/icons-material';
// Add these imports at the top
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import EventIcon from '@mui/icons-material/Event';
import GroupsIcon from '@mui/icons-material/Groups';
import CodeIcon from '@mui/icons-material/Code';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Fab } from '@mui/material';

const Register = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    department: '',
    year: '',
    technicalEvents: [],
    nonTechnicalEvents: [],
    workshop: false,
    totalAmount: 0,
    busTransport: false,
    agreeToTerms: false
  });
""
  const steps = ['Personal Details', 'Event Selection', 'Terms & Payment'];

  const handleNext = () => {
    if (activeStep === 1) {
      const total = calculateFees();
      setFormData(prev => ({ ...prev, totalAmount: total }));
    }
    setActiveStep((prev) => prev + 1);
    // Add setTimeout to ensure scroll happens after state update
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
    // Add setTimeout to ensure scroll happens after state update
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const nonTechnicalEvents = [
    { name: 'Shipwreck', teamSize: '4-5' },
    { name: 'BGMI', teamSize: '4' },
    { name: 'Defective Detective', teamSize: '2' }
  ];

  const technicalEvents = {
    teamEvents: [
      { name: 'Paper Presentation', teamSize: '1-2' },
      { name: 'Idea Presentation', teamSize: '1-2' },
      { name: 'Case Study', teamSize: '1-2' },
      { name: 'Shark Tank', teamSize: '1-2' }
    ],
    individualEvents: [
      { name: 'Coding', teamSize: '1' },
      { name: 'Prompt Engineering', teamSize: '1' },
      { name: 'UI/UX Design', teamSize: '1' }
    ]
  };

  // Update the calculateFees function first
  const calculateFees = () => {
    let total = 0;
    if (formData.technicalEvents.length > 0) {
      total += 150;
    }
    if (formData.nonTechnicalEvents.length > 0) {
      if (formData.nonTechnicalEvents.includes('BGMI')) {
        total += 75;
      } else {
        total += 150;
      }
    }
    if (formData.workshop) {
      total += 150; // Updated workshop fee
    }
    return total;
  };

  // Update the EventCard component
  const EventCard = ({ title, icon, selected, onClick, disabled, teamSize }) => {
    const [ref, inView] = useInView({
      threshold: 0.2,
      triggerOnce: true
    });
  
    const springProps = useSpring({
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(50px)',
      config: { tension: 300, friction: 20 }
    });
  
    const getEventPrice = (eventName) => {
      if (eventName === 'BGMI') return '₹75';
      if (eventName === 'ML/DL Workshop') return '₹150';
      if (eventName === 'College Bus Transport') return '';
      return '₹150';
    };

    return (
      <animated.div ref={ref} style={springProps}>
        <Paper
          onClick={!disabled ? onClick : undefined}
          sx={{
            p: 3,
            cursor: disabled ? 'not-allowed' : 'pointer',
            background: selected 
              ? 'linear-gradient(45deg, rgba(156, 39, 176, 0.3), rgba(171, 71, 188, 0.3))'
              : 'linear-gradient(135deg, rgba(28, 28, 28, 0.95), rgba(18, 18, 18, 0.8))',
            backdropFilter: 'blur(10px)',
            border: `2px solid ${selected ? '#9C27B0' : 'rgba(156, 39, 176, 0.15)'}`,
            borderRadius: 3,
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: selected 
              ? '0 8px 32px rgba(156, 39, 176, 0.3)'
              : '0 4px 20px rgba(0, 0, 0, 0.4)',
            '&:hover': !disabled && {
              transform: 'translateY(-8px) scale(1.02)',
              boxShadow: '0 12px 40px rgba(156, 39, 176, 0.25)',
              background: 'linear-gradient(135deg, rgba(38, 38, 38, 0.95), rgba(28, 28, 28, 0.8))',
              border: '2px solid rgba(156, 39, 176, 0.5)',
              '& .hover-effect': {
                transform: 'translateX(100%)',
              },
              '& .icon': {
                transform: 'scale(1.2) rotate(10deg)',
                color: '#9C27B0',
              }
            },
            opacity: disabled ? 0.5 : 1,
          }}
        >
          <Box className="hover-effect" sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, transparent, rgba(156, 39, 176, 0.1), transparent)',
            transform: 'translateX(-100%)',
            transition: 'transform 0.6s ease',
          }} />
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Box className="icon" sx={{ 
              transition: 'all 0.3s ease',
              transform: selected ? 'scale(1.1)' : 'scale(1)',
              color: selected ? '#9C27B0' : 'rgba(156, 39, 176, 0.7)',
              fontSize: '2rem',
            }}>
              {icon}
            </Box>
            <Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: selected ? '#9C27B0' : 'white',
                  fontWeight: selected ? 700 : 500,
                  fontSize: '1.25rem',
                  textShadow: selected ? '0 0 20px rgba(156, 39, 176, 0.3)' : 'none',
                  letterSpacing: '0.5px',
                }}
              >
                {title}
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: selected ? 'rgba(156, 39, 176, 0.8)' : 'rgba(255,255,255,0.6)',
                  display: 'block',
                  mt: 0.5,
                  fontSize: '0.9rem',
                  letterSpacing: '0.4px',
                }}
              >
                {getEventPrice(typeof title === 'string' ? title : title.props?.children[0])}
                {teamSize && ` • ${teamSize === '1' ? 'Individual Event' : `Team Size: ${teamSize}`}`}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </animated.div>
    );
  };

  const handleTechnicalEventChange = (eventName) => {
    setFormData(prev => ({
      ...prev,
      technicalEvents: prev.technicalEvents.includes(eventName)
        ? prev.technicalEvents.filter(e => e !== eventName)
        : [eventName]
    }));
  };

  const handleNonTechnicalEventChange = (eventName) => {
    setFormData(prev => ({
      ...prev,
      nonTechnicalEvents: prev.nonTechnicalEvents.includes(eventName)
        ? prev.nonTechnicalEvents.filter(e => e !== eventName)
        : [eventName]
    }));
  };

  const getCurrentTotal = () => {
    let total = 0;
    formData.technicalEvents.forEach(event => total += 150);
    formData.nonTechnicalEvents.forEach(event => total += event === 'BGMI' ? 75 : 150);
    if (formData.workshop) total += 150;
    return total;
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(156, 39, 176, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(156, 39, 176, 0.5)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    },
                    '& .MuiInputBase-input': {
                      color: 'white',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(156, 39, 176, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(156, 39, 176, 0.5)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    },
                    '& .MuiInputBase-input': {
                      color: 'white',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(156, 39, 176, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(156, 39, 176, 0.5)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    },
                    '& .MuiInputBase-input': {
                      color: 'white',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="College Name"
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(156, 39, 176, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(156, 39, 176, 0.5)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    },
                    '& .MuiInputBase-input': {
                      color: 'white',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Department"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(156, 39, 176, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(156, 39, 176, 0.5)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    },
                    '& .MuiInputBase-input': {
                      color: 'white',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>Year</InputLabel>
                  <Select
                    value={formData.year}
                    label="Year"
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    sx={{
                      color: 'white',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(156, 39, 176, 0.3)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(156, 39, 176, 0.5)',
                      },
                      '& .MuiSvgIcon-root': {
                        color: 'white',
                      },
                    }}
                  >
                    <MenuItem value="1">First Year</MenuItem>
                    <MenuItem value="2">Second Year</MenuItem>
                    <MenuItem value="3">Third Year</MenuItem>
                    <MenuItem value="4">Fourth Year</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </motion.div>
        );
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Alert 
                  severity="info" 
                  sx={{ 
                    mb: 3,
                    background: 'rgba(156, 39, 176, 0.1)',
                    border: '1px solid rgba(156, 39, 176, 0.3)',
                    '& .MuiAlert-icon': {
                      color: '#9C27B0'
                    }
                  }}
                >
                  You can select one technical event and one non-technical event. Choose wisely!
                </Alert>
                <Typography variant="h5" sx={{ 
                  mb: 3, 
                  background: 'linear-gradient(45deg, #9C27B0, #AB47BC)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 600,
                  fontSize: '1.75rem'
                }}>
                  <EventIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: '1.75rem' }} />
                  Select Your Events
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="h1" sx={{ mb: 2, color: '#9C27B0' }}>
                  Technical Events
                </Typography>
                <Grid container spacing={2}>
                  {technicalEvents.teamEvents.concat(technicalEvents.individualEvents).map((event) => (
                    <Grid item xs={12} key={event.name}>
                      <EventCard
                        title={event.name}
                        icon={<CodeIcon />}
                        selected={formData.technicalEvents.includes(event.name)}
                        onClick={() => handleTechnicalEventChange(event.name)}
                        disabled={formData.technicalEvents.length >= 1 && !formData.technicalEvents.includes(event.name)}
                        teamSize={event.teamSize}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="h1" sx={{ mb: 2, color: '#9C27B0' }}>
                  Non-Technical Events
                </Typography>
                <Grid container spacing={2}>
                  {nonTechnicalEvents.map((event) => (
                    <Grid item xs={12} key={event.name}>
                      <EventCard
                        title={event.name}
                        icon={<GroupsIcon />}
                        selected={formData.nonTechnicalEvents.includes(event.name)}
                        onClick={() => handleNonTechnicalEventChange(event.name)}
                        disabled={formData.nonTechnicalEvents.length >= 1 && !formData.nonTechnicalEvents.includes(event.name)}
                        teamSize={event.teamSize}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{ my: 4, borderColor: 'rgba(156, 39, 176, 0.2)' }} />
                <Typography variant="h1" sx={{ mb: 2, color: '#9C27B0' }}>
                  Workshops
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <EventCard
                      title={
                        <Box>
                          ML/DL Workshop
                          <Typography variant="caption" sx={{ 
                            display: 'block',
                            color: 'rgba(255,255,255,0.7)',
                            mt: 1,
                            fontSize: '0.9rem'
                          }}>
                            Premium Event
                          </Typography>
                        </Box>
                      }
                      icon={<WorkspacePremiumIcon />}
                      selected={formData.workshop}
                      onClick={() => setFormData({ ...formData, workshop: !formData.workshop })}
                      teamSize="1"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box
              sx={{
                position: 'fixed',
                bottom: 30,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1000,
              }}
            >
              <Paper
                elevation={10}
                sx={{
                  background: 'rgba(18, 18, 18, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(156, 39, 176, 0.3)',
                  borderRadius: '15px',
                  padding: '12px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    border: '2px solid rgba(156, 39, 176, 0.8)',
                    boxShadow: '0 0 20px rgba(156, 39, 176, 0.2)',
                  }
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontWeight: 500,
                    fontSize: '1.1rem',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                  }}
                >
                  Total:
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#9C27B0',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    fontSize: '1.5rem',
                    textShadow: '0 0 20px rgba(156, 39, 176, 0.3)',
                    letterSpacing: '1px',
                  }}
                >
                  <CurrencyRupeeIcon sx={{ fontSize: '1.5rem' }} />
                  {getCurrentTotal()}
                </Typography>
              </Paper>
            </Box>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <Paper sx={{
              p: 4,
              background: 'rgba(18, 18, 18, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(156, 39, 176, 0.2)',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            }}>
              <Typography 
                variant="h2" 
                gutterBottom
                sx={{
                  background: 'linear-gradient(45deg, #9C27B0, #AB47BC)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 600,
                  mb: 3,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <CurrencyRupeeIcon sx={{ color: '#9C27B0' }} />
                Registration Summary
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper sx={{
                    p: 2,
                    background: 'rgba(156, 39, 176, 0.1)',
                    border: '1px solid rgba(156, 39, 176, 0.2)',
                    borderRadius: '12px',
                  }}>
                    <Typography
                      variant="h2"
                      sx={{
                        color: '#9C27B0',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      Total Amount: ₹{formData.totalAmount}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper sx={{
                    p: 2,
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                  }}>
                    <Typography 
                      variant="body1" 
                      sx={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <EventIcon sx={{ color: '#9C27B0' }} />
                      Event Date: April 16, 2025 (Wednesday)
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper sx={{
                    p: 3,
                    background: 'rgba(156, 39, 176, 0.05)',
                    border: '1px solid rgba(156, 39, 176, 0.15)',
                    borderRadius: '12px',
                  }}>
                    <FormControlLabel
                      required
                      control={
                        <Checkbox
                          checked={formData.agreeToTerms}
                          onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                          sx={{
                            color: 'rgba(156, 39, 176, 0.7)',
                            '&.Mui-checked': {
                              color: '#9C27B0',
                            },
                          }}
                        />
                      }
                      label={
                        <Typography 
                          variant="body1"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontWeight: 500,
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 1,
                            letterSpacing: '0.2px',
                          }}
                        >
                          I Agree To Bring My College ID Card And Follow All Rules And Regulations
                        </Typography>
                      }
                      sx={{
                        alignItems: 'flex-start',
                        marginLeft: 0,
                        '& .MuiFormControlLabel-asterisk': {
                          display: 'none'
                        }
                      }}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </motion.div>
        );

      default:
        return null;
    }
  }; 

  return (
    <Container maxWidth="lg">
      <Box 
        sx={{ 
          mt: 4, 
          mb: 8,
          p: 4,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: 2,
          border: '1px solid rgba(156, 39, 176, 0.2)',
        }}
      >
        <Stepper 
          activeStep={activeStep} 
          alternativeLabel
          sx={{
            '& .MuiStepLabel-label': {
              color: 'white',
            }
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mt: 4 }}>
          {renderStepContent(activeStep)}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            startIcon={<ArrowBack />}
            sx={{ color: 'white' }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={activeStep === steps.length - 1 ? undefined : handleNext}
            endIcon={activeStep === steps.length - 1 ? <Send /> : <ArrowForward />}
          >
            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;

  
