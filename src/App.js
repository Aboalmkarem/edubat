import './App.css';
import useLocalStorage from 'use-local-storage';
import Navbar from './componants/navbar/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componants/home/home';

function App() {

  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <BrowserRouter>
      
        <Navbar isChecked={isDark} handleChange={() => {setIsDark(!isDark)}}></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
