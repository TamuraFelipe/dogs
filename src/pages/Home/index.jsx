import React from 'react';

import Feed from '../../components/Feed';

import styles from './Home.module.css';
import Head from '../../components/Head';

const Home = () => {
  return (
    <section className='container mainContainer'>
      <Head 
      title='Fotos'
      description='Home do site dogs, com feed de fotos.'
      />
      <h1 className='title' style={{marginBottom: '40px'}}>Meu Feed</h1>
      <Feed />
    </section>
  )
}

export default Home