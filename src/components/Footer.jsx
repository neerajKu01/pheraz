import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ p: 2, backgroundColor: '#f5f5f5', textAlign: 'center' }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Pehraz — All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
