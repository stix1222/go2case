import React from 'react'
import Image from 'next/image'
import Logo from '../public/Case.png'
import Link from 'next/link'

function Navbar(){
    return (
        <nav className="navbar navbar-light bg-light navbar-toggle navbar-expand-lg nav-color">
        <div className="container container-fluid">
          <a className="navbar-brand case-tech" href="/">
              <Image
                src={Logo}
                alt="Case Technologies"
                height={40}
                width={45}
              />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse container" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                <a className="nav-link active" aria-current="page">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                <a className="nav-link">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/services">
                <a className="nav-link">Services</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/contact">
                <a className="nav-link">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
