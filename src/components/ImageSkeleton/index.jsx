import React, { useState } from 'react'
import styles from './ImageSkeleton.module.css';

const ImageSkeleton = ({alt, ...props}) => {
    const [skeleton, setSkeleton] = useState(true);

    function handleLoad({ target }){
        setSkeleton(false);
        target.style.opacity = 1;
    }

  return (
    <div className={styles.wrapper}>
        {skeleton && <div className={styles.skeleton}></div>}
        <img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />      
    </div>
  )
}

export default ImageSkeleton
