import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import UserHeader from '../../components/UserHeader'
import Feed from '../../components/Feed'
import UserPhotoPost from '../../components/UserPhotoPost'
import UserStats from '../../components/UserStats'
import NotFound from '../NotFound';

import { UserContext } from '../../Hooks/userContext'
import Head from '../../components/Head'

const User = () => {
  const {data} = useContext(UserContext);

  return (
    <section className='container'>
      <Head 
      title='Minhas Conta'
      />
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={data.id}/>}/>
        <Route path='post' element={<UserPhotoPost />}/>
        <Route path='stats' element={<UserStats />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </section>
  )
}

export default User
