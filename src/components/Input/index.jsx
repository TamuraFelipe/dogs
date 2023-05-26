import React from 'react'

import styles from './Input.module.css';

const Input = ({ label, placeholder, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={name}>{label}</label>
        <input 
        id={name}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        />
        {
          error && <p className={styles.error}>{error}</p>
        }
    </div>
  )
}

export default Input
