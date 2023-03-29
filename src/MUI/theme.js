import { createTheme } from '@mui/material';

const scrollbarStyle1 = {
  '&::-webkit-scrollbar': {
    width: '12px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#121212',
    border: '1px solid rgb(255,255,0, 0.6)',
    borderRadius: '15px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    border: '1px solid rgb(255,255,0)',
  },
  '&::-webkit-scrollbar-corner': {
    display: 'none',
  },
};

const scrollbarStyle2 = {
  '&::-webkit-scrollbar': {
    width: '12px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#121212',
    border: '1px solid rgb(255,255,0, 0.6)',
    borderRadius: '15px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    border: '1px solid rgb(255,255,0)',
  },
  '&::-webkit-scrollbar-corner': {
    display: 'none',
  },
  '&::-webkit-scrollbar-track-piece': {
    background: 'rgb(0,0,0)',
  },
};

const theme = createTheme({
  palette: {
    secondary: {
      main: '#FFFF00',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        '.Table': scrollbarStyle1,
        body: scrollbarStyle2,
      }),
    },
  },
});

export default theme;
