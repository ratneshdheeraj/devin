import React from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar } from '@mui/material';

const Topbar = ({ title }) => (
  <AppBar position="static" elevation={0} sx={{ bgcolor: '#fff', color: '#222', borderBottom: '1px solid #f0f0f0' }}>
    <Toolbar sx={{ minHeight: 64, px: 3 }}>
      <Typography variant="h5" fontWeight={700} sx={{ flexGrow: 1 }}>
        {title}
      </Typography>
      <Box>
        <Avatar sx={{ bgcolor: '#0052CC' }}>A</Avatar>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Topbar; 