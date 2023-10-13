import { styled } from '@mui/system';

export const SLayout = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  width: '100%',
  backgroundColor: theme.palette.divider,
}));