import React, { useContext, useEffect, useRef, useState } from 'react'

import {UserContext} from '../../Hooks/userContext';
import PhotoCommentsForm from '../PhotoCommentsForm';

import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments)
  const { login } = useContext(UserContext);

  const commentsSection = useRef();
  useEffect( () => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentsSection} className={`${styles.comments} ${props.single ? styles.single : ''}`}>
        {comments.map((comment, index) => 
        <li key={index}>
          <b>{comment.comment_author}: </b>
          <span>{comment.comment_content}</span>
        </li>)
        }
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments}/>}
    </>
  )
}

export default PhotoComments
