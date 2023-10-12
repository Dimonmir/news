import { Typography } from '@mui/material';
import SContainer from './header.style';

const Header = () => {
  return (
    <SContainer>
      <Typography variant="h1" component="h2">
        Найди свою статью !
      </Typography>
    </SContainer>
  );
};

export default Header;
