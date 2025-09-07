import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { themes } from './theme'; // temas claro/escuro
import { useEffect, useState } from 'react';

const Root = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Lê o tema salvo no localStorage ao carregar
  useEffect(() => {
    const savedTheme = localStorage.getItem('preferred-theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Salva o tema no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem('preferred-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <ThemeProvider theme={darkMode ? themes.dark : themes.light}>
      <CssBaseline />
      {/* Passa o tema como props para o App */}
      <App darkMode={darkMode} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />);
