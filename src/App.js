import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/material';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import SummaryCards from './components/SummaryCards';
import ProductTable from './components/ProductTable';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0052CC',
    },
    background: {
      default: '#f8fafd',
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
  },
});

const productData = [
  {
    brand: 'Top Trumps',
    productName: '1 Sonic The Hedgehog WHOT! Travel Card Game',
    asin: 'B0CV4GGKQF',
    upcEan: '5053410006686',
    price: 6.0,
    moq: 100,
    amazonBuybox: 16.43,
    amazonFees: 6.4,
    profit: 4.1,
    margin: '25%',
    roi: '68%',
  },
  {
    brand: 'Top Trumps',
    productName: 'Top Trumps Card Game Spiders - Family Games For Kids and Adults - Learning Games - Kids Card Games for 2 Players and more - Kid War Games - Card Wars - For 6 plus kids',
    asin: 'B07Q41DMLH',
    upcEan: '885996003330',
    price: 5.0,
    moq: 200,
    amazonBuybox: 11.05,
    amazonFees: 4.8,
    profit: 1.2,
    margin: '11%',
    roi: '25%',
  },
  {
    brand: 'Top Trumps',
    productName: 'Top Trumps Disney Classic Quiz Game, 500 Questions to Test Your Knowledge and Memory on Frozen, Bambi, Encanto and Ralph Breaks The Internet, Educational Gift for Ages 6 Plus',
    asin: 'B084KM2PZK',
    upcEan: '885996004269',
    price: 8.5,
    moq: 200,
    amazonBuybox: 18.99,
    amazonFees: 7.4,
    profit: 3.1,
    margin: '16%',
    roi: '36%',
  },
  {
    brand: 'Tablecraft',
    productName: 'Tablecraft Pepper Shaker with Metal Top, 2.5 x 2.5 x 4.5, Green',
    asin: 'B078VBFBH8',
    upcEan: '727875222299',
    price: 6.0,
    moq: 150,
    amazonBuybox: 14.90,
    amazonFees: 6.4,
    profit: 2.5,
    margin: '17%',
    roi: '42%',
  },
  {
    brand: 'Tablecraft',
    productName: 'Tablecraft Sugar Shaker with Stainless Steel Top, 3.0625" x 5.75", Green',
    asin: 'B078V8JD66',
    upcEan: '727875240194',
    price: 9.0,
    moq: 150,
    amazonBuybox: 21.30,
    amazonFees: 8.2,
    profit: 4.1,
    margin: '19%',
    roi: '46%',
  },
  {
    brand: 'Tablecraft',
    productName: 'Tablecraft 11066 Handheld Churner, 12-inch Length, Acacia Wood',
    asin: 'B09VT1PQCX',
    upcEan: '727875266682',
    price: 8.0,
    moq: 150,
    amazonBuybox: 19.59,
    amazonFees: 7.5,
    profit: 4.1,
    margin: '21%',
    roi: '51%',
  },
  {
    brand: 'Klean Kanteen',
    productName: 'Klean Kanteen Rise Food Box - Lunch - Reusable Food Container for Meal Prep, Lunch & More - Stainless Steel Construction - Dishwasher Safe - Tofu, 23 oz',
    asin: 'B0CQRWRXHQ',
    upcEan: '763332076463',
    price: 20.0,
    moq: 75,
    amazonBuybox: 68.46,
    amazonFees: 16.1,
    profit: 32.3,
    margin: '47%',
    roi: '162%',
  },
  {
    brand: 'Klean Kanteen',
    productName: 'Klean Kanteen Rise Food Box - Lunch - Reusable Food Container for Meal Prep, Lunch & More - Stainless Steel Construction - Dishwasher Safe - Sea Spray, 23 oz',
    asin: 'B0CQRVCM32',
    upcEan: '763332076456',
    price: 20.0,
    moq: 75,
    amazonBuybox: 60.02,
    amazonFees: 13.2,
    profit: 26.9,
    margin: '45%',
    roi: '134%',
  }
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Topbar title="Dashboard" />
          <Container maxWidth="xl" sx={{ pt: 4, pb: 6, flex: 1 }}>
            <SummaryCards data={productData} />
            <ProductTable data={productData} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App; 