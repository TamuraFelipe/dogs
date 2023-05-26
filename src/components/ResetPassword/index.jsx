import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { PASSWORD_RESET } from '../../services/api';

import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';

import Input from '../Input';
import Button from '../Button';
import Error from '../Error';
import Head from '../Head';

const ResetPassword = () => {
  const [login, setLogin] = useState('');
  const [key, setKey] = useState('');
  const password = useForm();
  const {error, loading, request} = useFetch();
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    if(password.validate()){
      const {url, options} = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      })
      const { response } = await request(url, options);
      if(response.ok) {
        alert('Senha resetada com sucesso!')
        navigate('/login')
      }
    }
  }

  useEffect( () => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if(key) setKey(key)
    if(login) setLogin(login)
  }, []);

  return (
    <section className='animeLeft'>
      <Head 
      title='Resetar a senha'
      />
      <h1 className='title'>Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input 
        label='Nova Senha'
        type='password'
        name='password'
        {...password}
        />
        {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
      </form>
      <Error error={error}/>
    </section>
  )
}

export default ResetPassword