import React, {useEffect, useState} from 'react'

const PhotoGet = () => {
    const [photo, setPhoto] = useState('');
    const [photoById, setPhotoById] = useState('');
    const [id, setId] = useState('');

    async function handleSearchById(e){
        e.preventDefault();
        fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`)
        .then( response => {
            console.log(response)
            return response.json();
        })
        .then( json => {
            console.log(json)
            setPhotoById(json)
            return json
        })
    }

    useEffect( () => {
        fetch('https://dogsapi.origamid.dev/json/api/photo')
        .then( response => {
            console.log(response)
            return response.json();
        })
        .then( json => {
            console.log(json)
            setPhoto(json)
            return json
        })
    }, []);

  return (
    <div>
        <form>
            <input 
            type="text"
            placeholder='Search pelo ID'
            value={id}
            onChange={ ({target}) => setId(target.value)}
            />
            <button onClick={handleSearchById}>Pesquisar</button>
        </form>
        {
            photoById ?
            <div>
                <p>Nome: {photoById.photo.title}</p>
                    <p>Idade: {photoById.photo.idade}</p>
                    <p>Peso: {photoById.photo.peso}</p>
                    <p>Autor: {photoById.photo.author}</p>
                    <p>Imagem</p>
                    <img src={photoById.photo.src} alt={`Foto do ${photoById.photo.title}`} style={{ width: '100%', display: 'block'}} />
            </div>

            :

            photo && photo.map((item, index) => (
                <div key={index} style={{ borderBottom: '1px solid black'}}>
                    <p>ID: {item.id}</p>
                    <p>Nome: {item.title}</p>
                    <p>Idade: {item.idade}</p>
                    <p>Peso: {item.peso}</p>
                    <p>Autor: {item.author}</p>
                    <p>Imagem</p>
                    <img src={item.src} alt={`Foto do ${item.title}`} style={{ width: '100%', display: 'block'}} />
                </div>
            )) 
        }
    </div>
  )
}

export default PhotoGet