import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';

const calcAvg = (arr, key) => {
  if (!arr.length) return 0;
  const nums = arr.map(item => parseFloat(item[key]) || 0);
  return (nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(1);
};

const SummaryCards = ({ data }) => (
  <Box sx={{ my: 3 }}>
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card sx={{ borderRadius: 3, boxShadow: '0 2px 12px #0001' }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              Total Products
            </Typography>
            <Typography variant="h4" fontWeight={700}>{data.length}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ borderRadius: 3, boxShadow: '0 2px 12px #0001' }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              Average ROI
            </Typography>
            <Typography variant="h4" fontWeight={700}>{calcAvg(data, 'roi')}%</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ borderRadius: 3, boxShadow: '0 2px 12px #0001' }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              Average Margin
            </Typography>
            <Typography variant="h4" fontWeight={700}>{calcAvg(data, 'margin')}%</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Box>
);

export default SummaryCards; 