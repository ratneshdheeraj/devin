import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 220;

const Sidebar = () => (
  <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: {
        width: drawerWidth,
        boxSizing: 'border-box',
        background: '#fff',
        borderRight: '1px solid #f0f0f0',
      },
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', height: 64, px: 2, borderBottom: '1px solid #f0f0f0' }}>
      <Box sx={{ width: 32, height: 32, bgcolor: '#0052CC', borderRadius: 2, mr: 1 }} />
      <Typography variant="h6" fontWeight={700} color="#0052CC">MercuryUI</Typography>
    </Box>
    <List>
      <ListItem button selected>
        <ListItemIcon><DashboardIcon color="primary" /></ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><Inventory2Icon /></ListItemIcon>
        <ListItemText primary="Products" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><SettingsIcon /></ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar; 