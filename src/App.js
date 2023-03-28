import { Route, Routes } from 'react-router-dom';
import { UserContextProvider } from './components/UserContext';
import HomePage  from './pages/home/home';
import DashboardPage  from './pages/dashboard/dashboard';
import ArticlesPage  from './pages/articles/articles';
import HealthPage  from './pages/health-tracking/health-tracking';
import LoginPage  from './pages/accounts/login.js';
import RegisterPage  from './pages/accounts/register.js';
import ArticlesCreate from './pages/articles/article-create';
import Navigation from './components/navbar/Navbar.js';
import Footer  from './components/footer/Footer';
import Help  from './components/helpdoc/Help';
import RisksPage from './pages/risks/risk';



function App() {
  return (
    <>
    <UserContextProvider>
    <Navigation/>
        <Routes>
          <Route path='/' element={<HomePage/>} ></Route>
          <Route path='dashboard' element={<DashboardPage/>} ></Route>
          <Route path='articles' element={<ArticlesPage/>} ></Route>
          <Route path='risks-assessment' element={<RisksPage/>}></Route>
          <Route path='health-tracking' element={<HealthPage/>} ></Route>
          <Route path='log-in' element={<LoginPage/>} ></Route>
          <Route path='register' element={<RegisterPage/>}></Route>
          <Route path='article-create' element={<ArticlesCreate/>}></Route>
        </Routes>
        <Help/>
        <Footer/>
    </UserContextProvider>

    </>
  );
}

export default App;