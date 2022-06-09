import React from 'react'
import { Copyright } from './Copyright'

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <div className="footer-col">
                        <h4>Servicios Garantizados</h4>
                        
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Región Metropolitana.</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body" >V Región: <span >Valparaíso, Viña del Mar, Reñaca, Concón.</span></div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body" >Lunes a Sábado: 08:00 a 20:00 hrs.</div>
                            </li>

                            
                        </ul>
                        
                    </div>
                </div> 
                <div className="col-md-4">
                    <div className="footer-col middle">
                        <h4>Otras Referencias</h4>
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Guía Limpieza <a className="turquoise" href="https://www.guialimpieza.cl/empresas/clean-master?fbclid=IwAR3CJi3qjyao0O-kLYFg3P3q-wTkwnd1wVO1j3Df-pdEpl0VPG_ADp9CMJs">guialimpieza.cl</a></div>
                            </li>
                            
                        </ul>
                    </div>
                </div> 
                <div className="col-md-3">
                    <div className="footer-col last">
                        <h4>Redes Sociales</h4>
                        <span className="fa-stack">
                            <a href="https://api.whatsapp.com/send?phone=56950057191" target="_blank">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-whatsapp fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="https://www.facebook.com/CLEAN-Master-ASEO-114730918932617" target="_blank">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                                                
                        <span className="fa-stack">
                            <a href="https://www.instagram.com/limpiezaintegraldar/" target="_blank">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                        
                    </div> 
                </div> 
            </div> 
        </div> 
    </div>
    <Copyright/>
   
    </>
  )
}
