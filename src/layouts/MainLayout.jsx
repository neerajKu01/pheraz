import { Box, Container } from '@mui/material';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container sx={{ flex: 1, mt: 8, mb:8 }}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default MainLayout;
