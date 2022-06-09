import React from 'react'
import { Nav } from './Nav'

export const Header = () => {
  return (
    <>
    
        <Nav/>
    
    <header id="header" className="header">
        <div className="header-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="text-container">
                            <h1><span className="turquoise">Limpieza DAR</span> </h1>
                            <p className="p-large">Lograr la satisfacción del cliente, por medio de la excelencia de nuestro servicios</p>
                            <a className="btn-solid-lg page-scroll" href="#servicios">Servicios</a>
                        </div> 
                    </div> 
                    <div className="col-lg-4">
                        <div className="image-container">
                           
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div>    
        </header> 
    


    

    </>
  )
}
