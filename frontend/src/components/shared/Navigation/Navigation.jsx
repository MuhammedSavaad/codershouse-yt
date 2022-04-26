import React from 'react';
import styles from './Navigation.module.css'
import { Link } from 'react-router-dom';

const Navigation = () => {
  const brandStyle={
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '22px',
    display: 'flex',
    align: 'center'
  }

  const logoText = {
    marginLeft: '10px',
  }

  const logoImg = {
    width: '35px',
  }

  return (
    <nav className={`${styles.navbar} container`}>
      <Link to="/" style={brandStyle}>
        <img src="/images/logo.png" style={logoImg} alt="logo" />
        <span style={logoText}>Codershouse</span>
      </Link>
    </nav>
  )
}

export default Navigation;