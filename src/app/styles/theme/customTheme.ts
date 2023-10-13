import { createTheme } from '@mui/material/styles';

const customColors = {
  primary: '#024744',
  secondary: '#40ABA4',
  thirdMain: '#FDE6C4',
  thirdDark: '#FAC77A',
  thirdLight: '#FEF0DD',
};

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    third?: {
      main: string;
      dark: string;
      light: string;
    };
  }
}

const customTheme = createTheme({
  palette: {
    primary: {
      main: customColors.primary, // Основной цвет
    },
    secondary: {
      main: customColors.secondary, // Второстепенный цвет
    },
    third: {
      main: customColors.thirdMain, // Кастомный цвет
      dark: customColors.thirdDark, 
      light: customColors.thirdLight,
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Настройка шрифта
  },
});

export default customTheme;
