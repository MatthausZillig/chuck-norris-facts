import React from 'react'
import Logo from '../../assets/icons8-chuck-norris-100.png'
import { Link } from 'react-router-dom'
import './header.styles.scss'

const Header = () => {
  return (
    <div className="header">
      <Link className="header__logo" to="/">
        <img className="header__src" src={Logo} alt="Chuck Norris icon" />
      </Link>
      <div className="header__content">
        <h1 className="header__content__text">CHUCK NORRIS FACTS</h1>
      </div>
    </div>
  )
}

export default Header
