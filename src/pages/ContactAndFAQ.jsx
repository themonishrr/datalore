import { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme
} from '@mui/material';
import GradientHeading from '../components/common/GradientHeading';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { LocationOn, Phone, Email } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SectionHeading from '../components/common/SectionHeading';

const ContactAndFAQ = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const faqRefs = useRef([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const validRefs = faqRefs.current.filter(ref => ref !== null);

      if (validRefs.length > 0) {
        // Create a single timeline for all FAQ animations
        const tl = gsap.timeline();

        validRefs.forEach((ref, index) => {
          // Initial animation
          tl.fromTo(ref,
            {
              opacity: 0,
              y: 30,
              scale: 0.98,
              transformOrigin: 'center center',
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: ref,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              }
            },
            index * 0.15 // Stagger timing
          );

          // Hover animations using GSAP's quickTo for better performance
          const scale = gsap.quickTo(ref, 'scale', {duration: 0.3, ease: 'power2.out'});
          const y = gsap.quickTo(ref, 'y', {duration: 0.3, ease: 'power2.out'});
          const boxShadow = gsap.quickTo(ref, 'boxShadow', {duration: 0.3, ease: 'power2.out'});

          const enterAnimation = () => {
            scale(1.02);
            y(-5);
            boxShadow('0 8px 30px rgba(156, 39, 176, 0.25)');
          };

          const leaveAnimation = () => {
            scale(1);
            y(0);
            boxShadow('0 4px 20px rgba(0, 0, 0, 0.15)');
          };

          ref.addEventListener('mouseenter', enterAnimation);
          ref.addEventListener('mouseleave', leaveAnimation);

          // Store cleanup functions
          ref._cleanup = () => {
            ref.removeEventListener('mouseenter', enterAnimation);
            ref.removeEventListener('mouseleave', leaveAnimation);
          };
        });
      }
    });

    return () => {
      ctx.revert(); // This will clean up all GSAP animations
      // Clean up event listeners
      faqRefs.current
        .filter(ref => ref !== null && ref._cleanup)
        .forEach(ref => {
          ref._cleanup();
          delete ref._cleanup;
        });
    };
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    
    // Animate accordion content
    if (isExpanded) {
      gsap.to(event.currentTarget, {
        backgroundColor: 'rgba(156, 39, 176, 0.15)',
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(event.currentTarget.querySelector('.MuiAccordionSummary-content'), {
        color: '#CE93D8',
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      gsap.to(event.currentTarget, {
        backgroundColor: 'rgba(18, 18, 18, 0.9)',
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(event.currentTarget.querySelector('.MuiAccordionSummary-content'), {
        color: '#BA68C8',
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };

  const contactInfo = [
    {
      icon: <LocationOn sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Location',
      details: 'Rajalakshmi Engineering College, Chennai - 602105',
    },
    {
      icon: <Phone sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Phone',
      details: '+91 44 2235 7080',
    },
    {
      icon: <Email sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Email',
      details: 'datalore@rajalakshmi.edu.in',
    },
  ];

  const faqs = [
    {
      question: "What is the date and venue of DATALORE?",
      answer: "DATALORE will be held on April 16th, 2025 at Rajalakshmi Engineering College, Chennai."
    },
    {
      question: "Who can attend DATALORE?",
      answer: "The symposium is open to students, researchers, and professionals interested in exploring the latest in fields like Artificial Intelligence, Data Science, and related technologies."
    },
    {
      question: "How do I register for DATALORE?",
      answer: "You can register through our official website by clicking on the 'Register' button and filling out the required form."
    },
    {
      question: "What are the events and competitions conducted during DATALORE?",
      answer: "DATALORE features a series of technical events including paper presentations, coding contests, project expos, hands-on workshops, case study challenges, and a Shark Tank-style startup pitch competition. Full details are available on the 'Events' page."
    },
    {
      question: "Will participants receive certificates?",
      answer: "Yes, all participants will receive e-certificates. Winners of competitions will also receive special recognition through winner certificates."
    },
    {
      question: "Can I participate in multiple events at DATALORE?",
      answer: "Yes, participants can register for and take part in multiple events, provided the event timings do not overlap."
    },
    {
      question: "Is accommodation provided for DATALORE participants?",
      answer: "No, accommodation will not be provided. We suggest making prior arrangements if you're coming from outside Chennai."
    },
    {
      question: "Is transport available to reach the venue for DATALORE?",
      answer: "Yes, participants can use REC college buses for transportation. Bus routes and timings can be viewed on the REC Transport webpage."
    },
    {
      question: "How can I contact the DATALORE organizing team?",
      answer: "You can reach us via email at datalore@rajalakshmi.edu.in or contact our event coordinators listed in the 'Contact Us' section."
    },
    {
      question: "Is there an on-spot registration option available?",
      answer: "On-spot registration may be allowed for select events depending on availability. However, we recommend registering in advance to ensure your spot."
    },
    {
      question: "Do I need to bring anything for the technical events or workshops?",
      answer: "Participants are advised to bring their college ID cards and, if possible, a laptop or necessary materials as specified for certain events or workshops."
    },
    {
      question: "Will food be provided during the symposium?",
      answer: "Yes, lunch and refreshments will be provided to all registered participants."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <GradientHeading variant="h2" component="h1" align="center">
        Contact Us
      </GradientHeading>
      <Typography 
        variant="h3" 
        align="center" 
        color="text.secondary" 
        sx={{ 
          mb: 4, 
          maxWidth: 'sm', 
          mx: 'auto',
          fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.4rem' },
          lineHeight: 1.6,
          opacity: 0.9,
          letterSpacing: '0.01em'
        }}
      >
        Get in touch with our team
      </Typography>
      {/* Google Maps Section */}
      <Box 
        sx={{ 
          mb: 6, 
          borderRadius: 2, 
          boxShadow: 3,
          position: 'relative'
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4258203018458!2d80.00089457507708!3d13.008533387310248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528c9ebac84723%3A0x18e2bf88dfefa3ed!2sRajalakshmi%20Engineering%20College!5e0!3m2!1sen!2sin!4v1743863505177!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ 
            border: 0,
            borderRadius: '15px',
            display: 'block'
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <Box
          component="a"
          href="https://www.google.com/maps/dir//Rajalakshmi+Engineering+College,+Rajalakshmi+Nagar,+Chennai,+Tamil+Nadu+600124/@13.0085334,80.0008946,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a528c9ebac84723:0x18e2bf88dfefa3ed!2m2!1d80.0034695!2d13.0085334?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            cursor: 'pointer',
            '&:hover': {
              '&::after': {
                content: '"Get Directions"',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: 'bold'
              }
            }
          }}
        />
      </Box>
      
      {/* Contact Section */}
      <GradientHeading align="center">
        Get in Touch
        </GradientHeading>
        <Typography 
        variant="h3" 
        align="center" 
        color="text.secondary" 
        sx={{ 
          mb: 4, 
          maxWidth: 'sm', 
          mx: 'auto',
          fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.4rem' },
          lineHeight: 1.6,
          opacity: 0.9,
          letterSpacing: '0.01em'
        }}
      >
        Get in touch with our team
      </Typography>

      <Grid container spacing={6} sx={{ mb: 10 }}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Paper sx={{
              p: 4,
              background: 'rgba(18, 18, 18, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(156, 39, 176, 0.1)',
              borderRadius: 2,
            }}>
              <form>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(156, 39, 176, 0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(156, 39, 176, 0.3)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(156, 39, 176, 0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(156, 39, 176, 0.3)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(156, 39, 176, 0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(156, 39, 176, 0.3)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      size="large"
                      sx={{
                        background: 'linear-gradient(45deg, #9C27B0 30%, #AB47BC 90%)',
                        boxShadow: '0 3px 15px rgba(156, 39, 176, 0.3)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 20px rgba(156, 39, 176, 0.4)',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  background: 'rgba(18, 18, 18, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(156, 39, 176, 0.1)',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 30px rgba(156, 39, 176, 0.15)',
                    border: '1px solid rgba(156, 39, 176, 0.2)',
                  },
                }}>
                  {info.icon}
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {info.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {info.details}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* FAQ Section */}
      <GradientHeading align="center">
      Frequently Asked Questions
        </GradientHeading>
        <Typography 
        variant="h3" 
        align="center" 
        color="text.secondary" 
        sx={{ 
          mb: 4, 
          maxWidth: 'sm', 
          mx: 'auto',
          fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.4rem' },
          lineHeight: 1.6,
          opacity: 0.9,
          letterSpacing: '0.01em'
        }}
      >
        Find answers to your questions
      </Typography>
      
      <Box sx={{ width: '100%' }}>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            ref={el => faqRefs.current[index] = el}
            sx={{ 
              mb: { xs: 2, sm: 2.5, md: 3 },
              background: 'rgba(18, 18, 18, 0.9)',
              borderRadius: '12px',
              border: '1px solid rgba(156, 39, 176, 0.1)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: isMobile ? 'none' : 'translateY(-2px)',
                boxShadow: '0 6px 25px rgba(156, 39, 176, 0.15)',
                border: '1px solid rgba(156, 39, 176, 0.2)',
              },
              '&.Mui-expanded': {
                margin: { xs: '8px 0', sm: '12px 0', md: '16px 0' },
                background: 'rgba(25, 25, 25, 0.95)',
              }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ 
                color: '#BA68C8',
                transition: 'transform 0.3s ease',
                transform: expanded === `panel${index}` ? 'rotate(180deg)' : 'rotate(0deg)',
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
              }} />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
              sx={{
                minHeight: { xs: 48, sm: 56, md: 64 },
                padding: { xs: '0 16px', sm: '0 20px', md: '0 24px' },
                '&:hover': {
                  background: 'rgba(156, 39, 176, 0.08)',
                },
                '& .MuiAccordionSummary-content': {
                  margin: { xs: '8px 0', sm: '10px 0', md: '12px 0' },
                }
              }}
            >
              <Typography 
                variant="h6"
                sx={{
                  color: '#BA68C8',
                  fontWeight: 500,
                  letterSpacing: '0.5px',
                  fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#CE93D8'
                  }
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: { xs: '12px 16px 16px', sm: '14px 20px 20px', md: '16px 24px 24px' },
                borderTop: '1px solid rgba(156, 39, 176, 0.1)',
                background: 'rgba(0, 0, 0, 0.2)'
              }}
            >
              <Typography
                sx={{
                  color: '#e0e0e0',
                  lineHeight: 1.7,
                  letterSpacing: '0.3px',
                  pl: { xs: 0, sm: 0.5, md: 1 },
                  fontSize: { xs: '0.875rem', sm: '0.925rem', md: '1rem' }
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default ContactAndFAQ;