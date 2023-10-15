import { Outlet } from 'react-router-dom';

import { SLayout } from './defaultScreen.styles';
import { Header } from '@widgets';
import { Container } from '@mui/material';

const DefaultScreen = () => {
  return (
    <SLayout>
      <Header />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </SLayout>
  );
};

export default DefaultScreen;
