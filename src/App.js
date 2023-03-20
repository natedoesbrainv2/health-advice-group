import { Route, Routes } from 'react-router-dom';
import HomePage  from './pages/home';
import DashboardPage  from './pages/dashboard';
import ArticlesPage  from './pages/articles';
import HealthPage  from './pages/health-tracking';
import LoginPage  from './pages/login.js';
import RegisterPage  from './pages/register.js';
import Navigation from './components/Navbar.js';
import Footer  from './components/Footer';
import Help  from './components/Help';


function App() {
  return (
    <>
        <Navigation/>
        <Routes>
          <Route path='/' element={<HomePage/>} ></Route>
          <Route path='dashboard' element={<DashboardPage/>} ></Route>
          <Route path='articles' element={<ArticlesPage/>} ></Route>
          <Route path='health-tracking' element={<HealthPage/>} ></Route>
          <Route path='log-in' element={<LoginPage/>} ></Route>
          <Route path='register' element={<RegisterPage/>}></Route>
        </Routes>
        <Help/>
        <Footer/>
    </>
  );
}

export default App;