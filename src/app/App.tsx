import { ThemeProvider } from '@mui/material';
import customTheme from './styles/theme/customTheme';
import { RouterProvider } from 'react-router-dom';
import { customRoutes } from './router/routes';
import GlobalStyle from './styles/theme/GlobalStyle';
import { Global } from '@emotion/react';

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Global styles={GlobalStyle} />
      <RouterProvider router={customRoutes} />
    </ThemeProvider>
  );
};

export default App;
