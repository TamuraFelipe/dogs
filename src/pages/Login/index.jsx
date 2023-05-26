import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';

import LoginForm from '../../components/LoginForm';
import LoginCreate from '../../components/LoginCreate';
import LostPassword from '../../components/LostPassword';
import ResetPassword from '../../components/ResetPassword';
import NotFound from '../NotFound';

import styles from './Login.module.css';
import { UserContext } from '../../Hooks/userContext';

const Login = () => {
  const { login } = useContext(UserContext);
  if(login === true) return <Navigate to='/accoount' />


  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path='/' element={<LoginForm />}/>
          <Route path='/create' element={<LoginCreate />}/>
          <Route path='/lost-password' element={<LostPassword />}/>
          <Route path='/reset-password' element={<ResetPassword />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
    </section>
  )
}

export default Login