import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyle } from './globalStyle';
import HomePage from "./features/home/HomePage";
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from './common/themeSlice';

const App = () => {
  const isDarkMode = useSelector(selectIsDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
