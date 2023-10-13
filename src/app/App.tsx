import { ThemeProvider } from '@mui/material';
import customTheme from './styles/theme/customTheme';
import { FC, ReactNode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { customRoutes } from './router/routes';
import GlobalStyle from './styles/theme/GlobalStyle';
import { Global } from '@emotion/react';

interface IWithProviders {
  children?: ReactNode;
}

const App: FC<IWithProviders> = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <Global styles={GlobalStyle} />
      <RouterProvider router={customRoutes} />
    </ThemeProvider>
  );
};

export default App;
