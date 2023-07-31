import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
   
    // background: {
    //   paper: '#111827', // Yellow background color for dark mode
    //   default: '#1f2937', // Dark gray background color for dark mode (fallback)
    // },
  },
});
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    // primary: {
    //   main: '#1976d2', // Blue color for primary elements
    // },
    // secondary: {
    //   main: '#ff4081', // Pink color for secondary elements
    // },
    // error: {
    //   main: '#f44336', // Red color for error elements
    // },
    // background: {
    //   default: '#f1fafb', // Light blue background color for light mode
    // },
  },
});
