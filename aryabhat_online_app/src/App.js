
// Lama dev portfolio Oct 8, 2021
import './App.css';
import Toggle from './components/toggle/Toggle';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProductList from './components/product/ProductList';
import Contact from './components/contact/Contact';
import { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './context';

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{ backgroundColor: darkMode ? "rgb(34, 34, 34)" : 'white', color: darkMode && 'white', }}>

      {/* <header className="App-header">
        Hello World!
      </header> */}
      <Toggle />
      <Navbar />
      {/* <ThemeProvider> */}
      <Intro />
      <About />
      <ProductList />

      {/* </ThemeProvider> */}
      <Contact />
    </div>
  );
}

export default App;
