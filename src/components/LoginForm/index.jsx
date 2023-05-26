import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import Input from '../Input';
import Button from '../Button';
import Error from '../Error';

import useForm from '../../Hooks/useForm';
import { UserContext } from '../../Hooks/userContext';

import styles from './LoginForm.module.css';
import stylesBtn from '../Button/Button.module.css';
import Head from '../Head';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext)

  async function handleSubmit(e){
    e.preventDefault();
    
    if(username.validate() && password.validate()){
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className="animeLeft">
      <Head 
      title='Login'
      />
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input 
        label="Usuário"
        type="text"
        name='username'
        placeholder="Ex: user"
        {...username}
        />
        <Input 
        id='password'
        type="password"
        label="Senha"
        placeholder="Digite sua senha"
        {...password}
        />
        {
          loading ? 
          <Button disabled>Carregando...</Button>
          :
          <Button>Entrar</Button>
        }
        <Error error={error && 'Usuário e/ou Senha incorreto(s)'}/>
      </form>
      <Link className={styles.perdeu} to='/login/lost-password'>Esqueci minha senha</Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to='/login/create'>Cadastro</Link>
      </div>
    </section>
  )
}

export default LoginForm