import React, {useState} from 'react'

const PhotoPost = () => {
    const [img, setImg] = useState('')
    const [nome, setNome] = useState('');
    const [peso, setPeso] = useState('');
    const [idade, setIdade] = useState(0);
    const [token, setToken] = useState('');
    
    const formData = new FormData();
    formData.append('img', img)
    formData.append('nome', nome)
    formData.append('peso', peso)
    formData.append('idade', idade)

    function handleSubmit(e){
        e.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/api/photo',{
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
            },
            body: formData,
        })
        .then( response => {
            console.log(response)
            return response.json();
        })
        .then( json => {
            console.log(json)
            return json
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder='Token'
            value={token}
            onChange={ ({target}) => setToken(target.value)}
            />
            <input 
            type="text"
            placeholder='Nome'
            value={nome}
            onChange={ ({target}) => setNome(target.value)}
            />
            <input 
            type="text"
            placeholder='Peso'
            value={peso}
            onChange={ ({target}) => setPeso(target.value)}
            />
            <input 
            type="text"
            placeholder='Idade'
            value={idade}
            onChange={ ({target}) => setIdade(target.value)}
            />
            <input 
            type="file"
            onChange={ ({target}) => setImg(target.files[0])}
            />
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default PhotoPost