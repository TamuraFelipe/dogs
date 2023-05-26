import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { UserContext } from '../../Hooks/userContext';
import { UseMedia } from '../../Hooks/useMedia';

import {ReactComponent as MinhasFotos} from '../../assets/feed.svg';
import {ReactComponent as Stats} from '../../assets/estatisticas.svg';
import {ReactComponent as AdicionarFoto} from '../../assets/adicionar.svg';
import {ReactComponent as Sair} from '../../assets/sair.svg';


import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const {userLogout} = useContext(UserContext);
  const mobile = UseMedia('(max-width: 40rem)');

  const {pathname} = useLocation();
  
  const navigate = useNavigate();
  function handleLogout(){
    userLogout();
    navigate('/login')
  }

  useEffect( () => {
    setMobileMenu(false)
  }, [pathname]);

  return (
    <>
      {
        mobile && (
          <button className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} aria-label='Menu' onClick={() => setMobileMenu(!mobileMenu)}></button>
        )
      }
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to='/account' end><MinhasFotos />{mobile && 'Minhas Fotos'}</NavLink>
        <NavLink to='/account/stats'><Stats />{mobile && 'Stats'}</NavLink>
        <NavLink to='/account/post'><AdicionarFoto />{mobile && 'Adicionar Foto'}</NavLink>
        <button onClick={handleLogout}><Sair />{mobile && 'Sair'}</button>
      </nav>
    </>
  )
}

export default UserHeaderNav
