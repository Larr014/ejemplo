import React from 'react'
import despues from '../images/33a.jpg';
import antes from '../images/33d.jpg';
import fotoServicios from '../images/fotos/17.jpeg';
export const Servicios = () => {



    return (
        <>
            <div className="basic-1" id="servicios">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="text-container " style={{margin: 'auto'}}>
                                <h2>Servicios</h2>
                                <p className="text-justify">Hacemos de su empresa un lugar agradable y limpio, fomentando la productividad e incrementamos la imagen
                                    de su compañía.</p>
                                <p className="text-justify">Ponemos a su disposición servicios de mantención periódica o trabajos puntuales para oficinas,
                                    locales comerciales, establecimientos educacionales, consultas médicas, gimnasios, restaurantes y otros.</p>
                                <p className="text-justify">Realizamos Limpieza profunda. Nos enfocamos en atacar aquellos lugares difíciles de limpiar, logrando
                                    una mantención minuciosa y de alto estándar.




                                </p>
                                <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-1">Ver más</a>
                            </div>
                        </div>

                        <div className="image-container col-lg-6 d-flex align-items-center">
                            <img className="img-fluid " src={fotoServicios} alt="alternative" />
                        </div>

                    </div>
                </div>
            </div>




            <div className="basic-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image-container text-center" >

                                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>

                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="d-block w-100" src={antes} alt="First slide" />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>Antes</h5>

                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src={despues} alt="Second slide" />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>Despues</h5>

                                            </div>
                                        </div>

                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>



                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h2>Satisfacción del Cliente</h2>
                                <p className="text-justify">El objetivo de Nuestra Empresa, es lograr la satisfacción del cliente, por medio de la excelencia en sus servicios.</p>

                                <p className="text-justify">Este objetivo se desarrolla mediante el trabajo en equipo de todos los integrantes de la empresa,
                                    buscando la motivación, la plena integración y la satisfacción del personal, con el apoyo de charlas continuas.</p>

                                <p className="text-justify">Una de las principales metas es tener una mayor participación de mercado.</p>

                                <p className="text-justify">Es vital para <strong>Limpieza DAR</strong>, mejorar continuamente la relación con nuestros clientes y proveedores,
                                    ya que el camino hacia el progreso, lo debemos recorrer juntos. En estas premisas están implicados
                                    todos los miembros de la empresa,  los cuales, mediante un trato común, cordial  y respetuoso, lucharán
                                    por la excelencia en todo aquello que realicen.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*
            <div id="details-lightbox-1" className="lightbox-basic zoom-anim-dialog mfp-hide">
                <div className="container">
                    <div className="row">
                        <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
                        <div className="col-lg-7">
                            <div className="image-container text-center">
                                <img className="img-fluid" src="images/fotos/34.jpg" alt="alternative"/>
                            </div> 
                        </div> 
                        <div className="col-lg-5">



                            <h3>Servicios</h3>
                            <hr/>

                                <ul className="list-unstyled li-space-lg text-justify">
                                    <li className="media">
                                        <i className="fas fa-check"></i><div className="media-body">Remoción de polvo de mobiliario, objetos de oficina y vitrinas.</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-check"></i><div className="media-body">Aspirado total.</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-check"></i><div className="media-body">Limpieza de vidrios interiores.</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-check"></i><div className="media-body">Limpieza y desinfección en baños según programa de sanitización.</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-check"></i><div className="media-body">Limpieza y desinfección en sala de almuerzo.</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-check"></i><div className="media-body">Limpieza interior de todo tipo de edificios y oficinas.</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-check"></i><div className="media-body">Limpiezas puntuales derivadas de una situación particular, habitualmente relacionadas con un evento o una nueva construcción (limpieza de obra nueva, reformas de locales, inauguraciones, grandes eventos deportivos y culturales).</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-check"></i><div className="media-body">Tratamientos de suelos, escaleras, ascensores, alfombras y tapicerías.</div>
                                    </li>
                                </ul>
                                <div style="text-align: center;">
                                    <a className="btn-solid-reg mfp-close page-scroll" href="#contacto">Contactar</a> <a className="btn-outline-reg mfp-close as-button" href="#servicios">Volver</a>
                                </div>
                        </div> 
                    </div> 
                </div> 
    </div> */}
        </>
    )
}
