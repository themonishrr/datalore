import { Typography } from '@mui/material';

const GradientHeading = ({ children, variant = 'h2', component, ...props }) => {
  return (
    <Typography 
      variant={variant}
      component={component || variant}
      gutterBottom
      sx={{ 
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
        background: 'linear-gradient(45deg, #9C27B0 30%, #BA68C8 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        mb: 3,
        letterSpacing: '0.02em',
        ...props.sx
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default GradientHeading;