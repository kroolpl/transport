import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import App from './App.tsx';
import ContactPage from './pages/Contact.tsx';
import './index.css';

// Wrap each page with motion for transitions
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageWrapper><App /></PageWrapper>,
  },
  {
    path: "/contact",
    element: <PageWrapper><ContactPage /></PageWrapper>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  </StrictMode>
);