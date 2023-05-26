import React from 'react';

import { ReactComponent as Dogs } from '../../assets/dogs-footer.svg';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dog. Alguns direitos reservados.</p>    
    </footer>
  )
}

export default Footer