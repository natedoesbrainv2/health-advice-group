import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home  from './pages/home';
import Dashboard  from './pages/dashboard';
import Articles  from './pages/articles-main';
import Health  from './pages/health-tracking';
import Navbar  from './components/Navbar.js';
import Footer  from './components/Footer';
import Help  from './components/Help';
import Login  from './pages/login.js';
import Signup  from './pages/signup.js';

function App() {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='dashboard' element={<Dashboard/>} ></Route>
          <Route path='articles' element={<Articles/>} ></Route>
          <Route path='health-tracking' element={<Health/>} ></Route>
          <Route path='login' element={<Login/>} ></Route>
          <Route path='signup' element={<Signup/>}></Route>
        </Routes>
        <Help/>
        <Footer/>
    </>
  );
}

export default App;