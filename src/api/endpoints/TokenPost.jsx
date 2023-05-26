import React, {useState} from 'react'

const TokenPost = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
            })
        })
        .then( response => {
            console.log(response)
            return response.json();
        })
        .then( json => {
            console.log(json)
            setData(json)
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
            type="password"
            placeholder='Password'
            value={password}
            onChange={ ({target}) => setPassword(target.value)}
            />
            <button>Enviar</button>
        </form>
        <p style={{wordBreak: 'break-all'}}>Token: {data.token}</p>
        <p>NickName: {data.user_nicename}</p>
        <p>E-mail: {data.user_email}</p>
        <p>User Display Name: {data.user_display_name}</p>
    </div>
  )
}

export default TokenPost