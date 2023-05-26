import React, { useContext } from 'react'

import Input from '../Input';
import Button from '../Button';
import Error from '../Error';

import { UserContext } from '../../Hooks/userContext';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';

import { USER_POST } from '../../services/api';
import Head from '../Head';


const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const {userLogin} = useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(e){
    e.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    })
    const {response, json} = await request(url, options)
    //console.log(response)
    if(response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className='animeLeft'>
      <Head 
      title='Criar conta'
      />
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' {...username}/>
        <Input label='E-mail' type='email'{...email}/>
        <Input label='Senha' type='password' {...password}/>
        {
          loading ? 
          <Button disabled>Cadastrando...</Button>
          :
          <Button>Cadastrar</Button>
        }
        <Error error={error}/>
      </form>
    </section>
  )
}

export default LoginCreate