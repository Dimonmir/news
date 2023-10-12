import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#01605A', // Основной цвет
    },
    secondary: {
      main: '#FF862D', // Второстепенный цвет
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Настройка шрифта
  },
});

export default customTheme;
