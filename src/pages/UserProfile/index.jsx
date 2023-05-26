import React from 'react'
import { useParams } from 'react-router-dom';

import Feed from '../../components/Feed';

import styles from './UserProfile.module.css';
import Head from '../../components/Head';

const UserProfile = () => {
    const {user} = useParams();
  return (
    <section className='container mainContainer'>
      <Head 
      title={user}
      />
        <h1 className='title'>{user}</h1>
      <Feed user={user}/>
    </section>
  )
}

export default UserProfile
