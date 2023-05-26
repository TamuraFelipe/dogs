import React, { useState } from 'react';

import useFetch from '../../Hooks/useFetch';

import Error from '../Error';

import {ReactComponent as Enviar} from '../../assets/enviar.svg';

import { COMMENT_POST } from '../../services/api';

import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({id, setComments}) => {
    const [comment, setComment] = useState('');

    const {request, error} = useFetch();

    async function handleSubmit(e){
        e.preventDefault();
        const {url, options} = COMMENT_POST(id, {comment});
        const {response, json} = await request(url, options);
        if(response.ok) {
            setComment('');
            setComments( (comments) => [...comments, json] );
        }
    }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
      className={styles.textarea} 
      id='comment'
      name='comment'
      placeholder='Dê um comentário fofo para mim...'
      value={comment}
      onChange={ ({target}) => setComment(target.value)}
      />
      <button className={styles.button}><Enviar /></button>
      <Error error={error}/>
    </form>
  )
}

export default PhotoCommentsForm
