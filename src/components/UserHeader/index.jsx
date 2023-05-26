import React, { useEffect, useState } from 'react'

import UserHeaderNav from '../UserHeaderNav';

import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = useState('');

  const location = useLocation();
  
  useEffect( () => {
    if(location.pathname === '/account') {
      setTitle('Minhas Fotos')
    } else if (location.pathname === '/account/stats') {
      setTitle('Stats')
    } else if (location.pathname === '/account/post') {
      setTitle('Posts')
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader
