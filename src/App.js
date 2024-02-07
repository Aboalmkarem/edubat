import './App.css';
import useLocalStorage from 'use-local-storage';
import Navbar from './componants/navbar/navbar'

function App() {

  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Navbar isChecked={isDark} handleChange={() => {setIsDark(!isDark)}}></Navbar>
    </div>
  );
}

export default App;
