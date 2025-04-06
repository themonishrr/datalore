import { Box, Card, CardContent, CardMedia, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const AnimatedCard = ({ image, title, description, delay = 0, onClick }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        delay,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      whileHover={{ y: -8 }}
    >
      <Card
        onClick={onClick}
        sx={{
          height: '100%',
          background: theme.palette.gradients.dark,
          borderRadius: '20px',
          border: '1px solid rgba(156, 39, 176, 0.1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            border: '1px solid rgba(156, 39, 176, 0.2)',
            boxShadow: '0 12px 40px rgba(156, 39, 176, 0.15)',
            '& .MuiCardMedia-root': {
              transform: 'scale(1.05)',
            },
          },
        }}
      >
        {image && (
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt={title}
            sx={{
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            className="MuiCardMedia-root"
          />
        )}
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              background: theme.palette.gradients.primary,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 1,
            }}
          >
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

AnimatedCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  delay: PropTypes.number,
  onClick: PropTypes.func,
};

export default AnimatedCard;