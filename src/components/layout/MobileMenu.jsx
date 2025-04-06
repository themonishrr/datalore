import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  IconButton, 
  Box,
  Button,
  Typography,
  Divider
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu = ({ isOpen, onClose, navItems }) => {
  const faqs = [
    {
      question: "What is Symposium 2025?",
      answer: "Premier technical event bringing together experts and students"
    },
    {
      question: "When and where?",
      answer: "April 16-18, 2025 at Rajalakshmi Engineering College"
    },
    // Add more FAQ items as needed
  ];

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: '100%',
          maxWidth: { xs: '100%', sm: '400px' },
          background: 'rgba(18, 18, 18, 0.98)',
          backdropFilter: 'blur(10px)',
          borderLeft: '1px solid rgba(156, 39, 176, 0.2)',
          boxShadow: '-4px 0 25px rgba(0, 0, 0, 0.5)',
        }
      }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          borderBottom: '1px solid rgba(156, 39, 176, 0.2)'
        }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: { xs: '1.2rem', sm: '1.4rem' },
              fontWeight: 800,
              background: 'linear-gradient(45deg, #fff 30%, #9C27B0 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            DATALORE '25S
          </Typography>
          <IconButton
            onClick={onClose}
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(156, 39, 176, 0.1)',
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        
        <List sx={{ p: 2, flexGrow: 1 }}>
          {/* Navigation Items */}
          {navItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ListItem
                component={RouterLink}
                to={item.path}
                onClick={onClose}
                sx={{
                  py: 2,
                  px: 3,
                  color: 'white',
                  borderRadius: '12px',
                  mb: 1,
                  transition: 'all 0.3s ease',
                  background: 'rgba(156, 39, 176, 0.05)',
                  '&:hover': {
                    background: 'rgba(156, 39, 176, 0.1)',
                    transform: 'translateX(8px)',
                  },
                }}
              >
                <ListItemText 
                  primary={item.title}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: '1.2rem',
                      fontWeight: 500,
                      letterSpacing: '0.5px',
                    }
                  }}
                />
              </ListItem>
            </motion.div>
          ))}

          {/* FAQ Section */}
          <Typography variant="h6" sx={{ 
            mt: 4,
            mb: 2,
            px: 2,
            color: 'white',
            fontWeight: 600
          }}>
            FAQs
          </Typography>
          
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ListItem sx={{
                py: 2,
                px: 3,
                color: 'white',
                borderRadius: '12px',
                mb: 1,
                background: 'rgba(156, 39, 176, 0.05)',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 600,
                  mb: 1,
                  color: '#BA68C8'
                }}>
                  {faq.question}
                </Typography>
                <Typography variant="body2">
                  {faq.answer}
                </Typography>
              </ListItem>
            </motion.div>
          ))}
        </List>

        <Box sx={{ p: 3, borderTop: '1px solid rgba(156, 39, 176, 0.2)' }}>
          <Button
            component={RouterLink}
            to="/register"
            variant="contained"
            fullWidth
            onClick={onClose}
            sx={{
              py: 2,
              background: 'linear-gradient(135deg, #9C27B0 0%, #BA68C8 100%)',
              fontSize: '1.1rem',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(156, 39, 176, 0.3)',
              '&:hover': {
                boxShadow: '0 8px 25px rgba(156, 39, 176, 0.5)',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Register Now
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileMenu;