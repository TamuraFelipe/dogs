import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../services/api';

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  async function getUser(token){
    const { url, options } = USER_GET(token)
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password){
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({username, password});
      const response = await fetch(url, options);
      if(!response.ok) throw new Error('Usuário inválido!');
      const { token } = await response.json();
      window.localStorage.setItem('@dogs:token', token);
      await getUser(token);
      navigate('/account')
    } catch (error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
    
  }

  const userLogout = useCallback( async function(){
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('@dogs:token')
    
  }, []);

  useEffect( () => {
    async function autoLogin(){
      const token = window.localStorage.getItem('@dogs:token');
      if(token){
        try {
          setError(null);
          setLoading(true);
          const { url, options} = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if(!response.ok) throw new Error('Token inválido!')
          await getUser(token);
        } catch (error) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false)
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider value={{
      userLogin,
      userLogout,
      data,
      error,
      loading,
      login
      }}>
      {children}
    </UserContext.Provider>
  )
}

