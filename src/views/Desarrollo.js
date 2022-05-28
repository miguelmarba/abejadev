import React from 'react';

function Desarrollo(){
    return (
        <>
        {/* Pricing section */}
        <section className="bg-light py-5 border-bottom" id='desarrollo' >
            <div className="container px-5 my-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bolder">Desarrollo de Software a la Medida</h2>
                    <p className="lead mb-0">Con tecnología de vanguardia segun tus necesidades</p>
                </div>
                <div className="row gx-5 justify-content-center">
                    {/* Pricing card free */}
                    <div className="col-lg-6 col-xl-4">
                        <div className="card mb-5 mb-xl-0">
                            <div className="card-body p-5">
                                {/* <div className="small text-uppercase fw-bold text-muted">Free</div> */}
                                <div className="mb-3">
                                    <span className="display-4 fw-bold">Fase1</span>
                                    <span className="text-muted">/ Análisis</span>
                                </div>
                                <div className="mb-3">
                                    <p className="lead mb-0">Se identifican las necesidades del cliente, cuál es la audiencia y se conceptualizan el negocio y las metas del cliente para su sitio de Internet.</p>
                                </div>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        <strong>Entrevista con el cliente</strong>
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Análisis de requerimientos
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Propuesta técnica y económica
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        ¿cliente acepta?
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Se fija cronograma
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Se crean las especificaciones finales y el diagrama 
                                    </li>
                                    {/* <li className="mb-2 text-muted">
                                        <i className="bi bi-x"></i>
                                        Free linked domain
                                    </li>
                                    <li className="text-muted">
                                        <i className="bi bi-x"></i>
                                        Monthly status reports
                                    </li> */}
                                </ul>
                                {/* <div className="d-grid"><a className="btn btn-outline-dark" href="#!">Choose plan</a></div> */}
                            </div>
                        </div>
                    </div>
                    {/* Pricing card pro */}
                    <div className="col-lg-6 col-xl-4">
                        <div className="card mb-5 mb-xl-0">
                            <div className="card-body p-5">
                                {/* <div className="small text-uppercase fw-bold">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    Pro
                                </div> */}
                                <div className="mb-3">
                                    <span className="display-4 fw-bold">Fase 2</span>
                                    <span className="text-muted">/ Diseño y Desarrollo.</span>
                                </div>
                                <div className="mb-3">
                                    <p className="lead mb-0">Se diseña un prototipo visual mediante un software de diseño gráfico. Este se toma como base de aprobación del cliente y para los desarrolladores.</p>
                                </div>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        <strong>Diseño de pantallas</strong>
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Revisión interna
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Revisión con el cliente
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Creación de estilos y selección de plataforma de trabajo
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Desarrollo / Implementación de la plataforma
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Pruebas formales
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Preparación de sitio demo
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Presentación con el cliente
                                    </li>
                                </ul>
                                {/* <div className="d-grid"><a className="btn btn-dark" href="#!">Choose plan</a></div> */}
                            </div>
                        </div>
                    </div>
                    {/* Pricing card enterprise */}
                    <div className="col-lg-6 col-xl-4">
                        <div className="card">
                            <div className="card-body p-5">
                                {/* <div className="small text-uppercase fw-bold text-muted">Enterprise</div> */}
                                <div className="mb-3">
                                    <span className="display-4 fw-bold">Fase 3</span>
                                    <span className="text-muted">/ Lanzamiento</span>
                                </div>
                                <div className="mb-3">
                                    <p className="lead mb-0">Instalación, pruebas y depuración del sitio de Internet del cliente. Se planifica el lanzamiento y se coordina el lanzamiento y se coordina el entrenamiento en las herramientas de administración.</p>
                                </div>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        <strong>Configuración del servidor</strong>
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Puesta en línea oficial del cliente
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Monitoreo y depuración
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Soporte continuo
                                    </li>
                                    {/* <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Unlimited private projects
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Dedicated support
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        <strong>Unlimited</strong>
                                        linked domains
                                    </li>
                                    <li className="text-muted">
                                        <i className="bi bi-check text-primary"></i>
                                        Monthly status reports
                                    </li> */}
                                </ul>
                                {/* <div className="d-grid"><a className="btn btn-outline-dark" href="#!">Choose plan</a></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         </>
    );
}

export default Desarrollo;