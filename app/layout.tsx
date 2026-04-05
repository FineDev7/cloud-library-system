import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './Navbar';
import './globals.css';

const theme = {
  // Your theme properties here
};

const RootLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default RootLayout;