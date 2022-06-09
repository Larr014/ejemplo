import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo_clean.svg'
export const Nav = () => {
  return (
    <>
        
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
         
        <a className="navbar-brand logo-image" href="index.html"><img src={logo} alt="alternative"/></a>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-awesome fas fa-bars"></span>
            <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>
        
    
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink to="/home" className="nav-link page-scroll">Inicio<span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/descripcion" className="nav-link page-scroll" >Descripción</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/servicios" className="nav-link page-scroll" >Servicios</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/fotos" className="nav-link page-scroll">Fotos</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contacto" className="nav-link page-scroll">Contacto</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/intranet" className="nav-link page-scroll" >Intranet</NavLink>
                </li>

                

            </ul>
            <span className="nav-item social-icons">
                <span className="fa-stack">
                    <a href="https://api.whatsapp.com/send?phone=56950057191" target="_blank">
                        <i className="fas fa-circle fa-stack-2x twitter"></i>
                        <i className="fab fa-whatsapp fa-stack-1x"></i>
                    </a>
                </span>
                <span className="fa-stack">
                    <a href="https://www.facebook.com/CLEAN-Master-ASEO-114730918932617" target="_blank">
                        <i className="fas fa-circle fa-stack-2x facebook"></i>
                        <i className="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
                <span className="fa-stack">
                    <a href="https://www.instagram.com/limpiezaintegraldar/" target="_blank">
                        <i className="fas fa-circle fa-stack-2x twitter"></i>
                        <i className="fab fa-instagram fa-stack-1x"></i>
                    </a>
                </span>
                
            </span>
        </div>
    </nav> 
    
        
    </>
  )
}
