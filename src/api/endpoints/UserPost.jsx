import React, { useState } from 'react'

export const UserPost = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/api/user',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password,
            })
        })
        .then( response => {
            console.log(response)
            return response.json();
        })
        .then( json => {
            console.log(json)
            return json;
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder='Username'
            value={username}
            onChange={ ({target}) => setUsername(target.value)}
            />
            <input 
            type="email"
            placeholder='E-mail'
            value={email}
            onChange={ ({target}) => setEmail(target.value)}
            />
            <input 
            type="password"
            placeholder='Password'
            value={password}
            onChange={ ({target}) => setPassword(target.value)}
            />
            <button>Enviar</button>
        </form>
    </div>
  )
}
