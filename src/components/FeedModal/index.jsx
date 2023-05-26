import React, { useEffect } from 'react';

import Error from '../Error';
import Loading from '../Loading';

import useFetch from '../../Hooks/useFetch';

import { PHOTO_GET } from '../../services/api';

import PhotoContent from '../PhotoContent';

import styles from './FeedModal.module.css';

const FeedModal = ({photo, setModalPhoto}) => {
  const {data, error, loading, request} = useFetch();

  function handleOutsideClick(e){
    if(e.target === e.currentTarget) setModalPhoto(null)
  }

  useEffect( () => {
    const {url, options} = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request]);
  
  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error}/>}
      {loading && <Loading />}
      {data && <PhotoContent data={data}/>}
    </div>
  )
}

export default FeedModal
