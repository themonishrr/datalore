import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const SpeakerCard = ({ speaker }) => {
  return (
    <Card
      component={motion.div}
      whileHover={{ y: -8 }}
      sx={{
        height: '100%',
        background: 'linear-gradient(145deg, rgba(18, 18, 18, 0.8) 0%, rgba(9, 9, 9, 0.9) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(156, 39, 176, 0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          border: '1px solid rgba(156, 39, 176, 0.2)',
          boxShadow: '0 12px 40px rgba(156, 39, 176, 0.15)',
          '& .speaker-image': {
            transform: 'scale(1.05)',
          },
        },
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="280"
          image={speaker.image}
          alt={speaker.name}
          className="speaker-image"
          sx={{
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
            height: '50%',
          }}
        />
      </Box>
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            background: (theme) => theme.palette.gradients.primary,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 1,
          }}
        >
          {speaker.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {speaker.role}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {speaker.topic}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SpeakerCard;