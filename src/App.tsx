import Home from "./pages/Home/Home";

;

interface AppProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const App: React.FC<AppProps> = ({ darkMode, toggleTheme }) => {
  return (
    <Home darkMode={darkMode} toggleTheme={toggleTheme} />
  );
};

export default App;
