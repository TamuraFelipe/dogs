import React from 'react'

import ImageSkeleton from '../ImageSkeleton';

import styles from './FeedPhotoItem.module.css';

const FeedPhotoItem = ({photo, setModalPhoto}) => {
  
  function handleClick(){
    setModalPhoto(photo)
  }
  
  return (
    <li className={styles.photo} onClick={handleClick}>
      <ImageSkeleton src={photo.src} alt={photo.title}/>
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotoItem
