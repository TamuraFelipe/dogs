import React from 'react'
import { PASSWORD_LOST } from '../../services/api';

import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';

import Error from '../Error';

import Input from '../Input';
import Button from '../Button';

import Head from '../Head';

const LostPassword = () => {
  const login = useForm();
  const {data, loading, error, request} = useFetch();
  
  async function handleSubmit(e){
    e.preventDefault();

    if(login.validate()){
      const {url, options} = PASSWORD_LOST({
        login: login.value, 
        url: window.location.href.replace('lost-password', 'reset-password'),
      });
      request(url, options);
    }
  }

  return (
    <section className='animeLeft'>
      <Head 
      title='Perdeu a senha'
      />
      <h1 className='title'>Perdeu a senha?</h1>
      {data ? 
      <p style={{color: '#4c1'}}>{data}</p>
      : 
      <form onSubmit={handleSubmit}>
        <Input 
        label='Email / Usuário'
        type='text'
        name='email'
        {...login}
        />
        {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar Email</Button>}
      </form>
      }
      <Error error={error}/>
    </section>
  )
}

export default LostPassword