import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';
import Photo from './pages/Photo';
import UserProfile from './pages/UserProfile';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import Footer from './components/Footer';

import { UserStorage } from './Hooks/userContext';

import ProtectedRoute from './services/ProtectedRoute';

import './app.css';

function App() {
  return (
   <div className='app'>
    <BrowserRouter>
      <UserStorage>
        <Header />
        <main className='appBody'>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='login/*' element={<Login />}/>
              <Route path='account/*' element={<ProtectedRoute> <User /> </ProtectedRoute>}/>  
              <Route path='photo/:id' element={<Photo />}/>
              <Route path='profile/:user' element={<UserProfile />}/>
              <Route path='*' element={<NotFound />}/>
        </Routes>    
        </main>  
        <Footer />
      </UserStorage>
    </BrowserRouter>
  </div>
  )
}

export default App
