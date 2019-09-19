import React, { useState } from 'react'
import { Link } from 'gatsby'

import inverseLogo from '../assets/images/inverse-logo.svg'

import './header.css'

import github from '../assets/images/github.svg'

const Header = ({ siteTitle, home }) => {
  const [mode, setMode] = useState(false)

  return (
    <header data-mode={mode ? 'dark' : 'none'} className="header">
      <div className={`nav-item ${home ? 'home' : ''}`}>
        <div className="brand">
          <Link to="/">
            <div className="brand-logo">
              <div className="logo">
                <img alt="js-logo" src={inverseLogo} />
              </div>
              <h1>{siteTitle}</h1>
            </div>
          </Link>
        </div>
        <div className="items">
          <ul>
            <li>
              <a
                target="__blank"
                rel="noopener noreferrer"
                href="https://github.com/zonayedpca/js.zonayed.me"
              >
                <img src={github} alt="github" />
              </a>
            </li>
            <li>
              <div
                onClick={() => setMode(!mode)}
                className={`switch ${mode && `dark`}`}
              ></div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header