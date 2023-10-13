import { styled } from '@mui/system';

export const SContainer = styled('div')(({ theme }) => ({
  padding: '20px 0',
  display: 'flex',
  justifyContent: 'center',
  fontWeight: 'bold',
  color: theme.palette.third.light,
  backgroundColor: theme.palette.primary.main,
}));