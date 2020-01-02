import React from 'react'
import Logo from '../../assets/icons8-chuck-norris-100.png'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({ location: { pathname } }) => {
  return (
    <div className="header">
      <Link className="header__logo" to="/">
        <img className="header__src" src={Logo} alt="Chuck Norris icon" />
      </Link>
      <div className="header__content">
        <Link className={`header__icon ${pathname === '/' ? '' : 'visible'}`} to="/">
          <FontAwesomeIcon icon="arrow-left" color="#000" size="lg" />
        </Link>
        <h1 className="header__content__text">CHUCK NORRIS FACTS!</h1>
      </div>
    </div>
  )
}

export default withRouter(Header)
