import React from 'react';
import styles from './Button.module.css'

const Button = ({text, onClick}) => {
  const imgStyle = {
    width: '25px',
    marginLeft: '10px',
  }
  
  return (
    <button onClick={onClick} className={styles.button}>
        <span>{text}</span>
        <img style={imgStyle} src="/images/arrow_forward.png" alt="arrow-img" />
    </button>
  )
}

export default Button;