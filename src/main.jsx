// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';
import App from './App.jsx';
import '@mantine/core/styles.css';

// Criação do tema
const theme = createTheme({
  defaultColorScheme: 'dark',
  primaryColor: 'violet',
  fontFamily: 'Inter, sans-serif',
  colors: {
    dark: [
      '#C1C2C5', '#A6A7AB', '#909296', '#5c5f66',
      '#373A40', '#2C2E33', '#25262b', '#1A1B1E',
      '#141517', '#101113',
    ],
  },

  components: {
    Paper: {
      defaultProps: {
        bg: 'dark.7', // Cor de fundo principal
      },
    },
    // Adicionamos um estilo global para o Body aqui
    ActionIcon: {
        defaultProps: {
            variant: 'subtle'
        }
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </React.StrictMode>
);
