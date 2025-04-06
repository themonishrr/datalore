import { lazy, Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, CircularProgress, Typography } from '@mui/material';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import darkTheme from './styles/theme';
import AnimatedBackground from './components/common/AnimatedBackground';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Events = lazy(() => import('./pages/Events'));
const About = lazy(() => import('./pages/About'));
const ContactAndFAQ = lazy(() => import('./pages/ContactAndFAQ'));
const Register = lazy(() => import('./pages/Register'));
const Schedule = lazy(() => import('./pages/Schedule'));
// Remove FAQ import

const LoadingScreen = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      bgcolor: 'background.default',
    }}
  >
    <CircularProgress color="primary" size={60} thickness={4} />
  </Box>
);

const RootLayout = () => (
  <AnimatedBackground>
    <Box sx={{ 
      width: '100%', 
      minHeight: '100vh',
      color: 'text.primary',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto',
      position: 'relative'
    }}>
      <ScrollToTop />
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, overflowY: 'auto', position: 'relative' }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  </AnimatedBackground>
);



const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Suspense fallback={<LoadingScreen />}><Home /></Suspense>,
      },
      {
        path: 'events',
        element: <Suspense fallback={<LoadingScreen />}><Events /></Suspense>,
      },
      {
        path: 'schedule',
        element: <Suspense fallback={<LoadingScreen />}><Schedule /></Suspense>,
      },
      {
        path: 'about',
        element: <Suspense fallback={<LoadingScreen />}><About /></Suspense>,
      },
      {
        path: 'contact',
        element: <Suspense fallback={<LoadingScreen />}><ContactAndFAQ /></Suspense>,
      },
      {
        path: 'register',
        element: <Suspense fallback={<LoadingScreen />}><Register /></Suspense>,
      },
      {
        path: 'faq',
        element: <Navigate to="/contact" replace />,
      },
    ],
    handle: () => {
      window.scrollTo(0, 0);
      return null;
    }
  }
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  },
  scrollRestoration: 'top'
});

// Add these imports at the top with other imports
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

// Remove the old Router implementation and keep the createBrowserRouter setup above
export default App;