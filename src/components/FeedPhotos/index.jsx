import React, { useEffect, useState } from 'react'

import Error from '../Error';
import Loading from '../Loading';

import useFetch from '../../Hooks/useFetch';

import FeedPhotoItem from '../FeedPhotoItem'
import { PHOTOS_GET } from '../../services/api';

import styles from './FeedPhotos.module.css';

const FeedPhotos = ({setModalPhoto, user, page, setInfinite}) => {
    
  const {data, loading, error, request} = useFetch();
    useEffect( () => {
        async function fetchPhoto(){
            const total = 6;
            const {url, options} = PHOTOS_GET({page, total, user});
            const {response, json} = await request(url, options);
            if(response && response.ok && json.length < total) setInfinite(false);
            //console.log(json)
        }
        fetchPhoto();
    }, [request, user, page, setInfinite]);
    
  if(error) return <Error error={error}/>
  if(loading) return <Loading />
  if(data)
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {
        data.map( photo => 
          <FeedPhotoItem 
          key={photo.id} 
          photo={photo} 
          setModalPhoto={setModalPhoto}/>
        )
      }
    </ul>
  )
  else return null
}

export default FeedPhotos
