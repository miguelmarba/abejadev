import React from 'react';

function Testimonials(){
    return (
        <>
        {/* Testimonials section */}
        <section className="py-5 border-bottom" id='testimonials' style={{backgroundColor: '#fe8024'}} >
            <div className="container px-5 my-5 px-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bolder">Testimonios de nuestros clientes</h2>
                    <p className="lead mb-0">Nuestros clientes tienen algo que comentar sobre nosotros</p>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        {/* Testimonial 1 */}
                        <div className="card mb-4">
                            <div className="card-body p-4">
                                <div className="d-flex">
                                    <div className="flex-shrink-0"><i className="bi bi-chat-right-quote-fill text-dark fs-1"></i></div>
                                    <div className="ms-4">
                                        <p className="mb-1">Estamos muy contentos y agradecidos por el trabajo que hicieron en nuestro sitio web, hemos tenido comentarios positivos de nuestro negocio.</p>
                                        <div className="small text-muted">- Noé Reynoso, Ciudad de México</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="card">
                            <div className="card-body p-4">
                                <div className="d-flex">
                                    <div className="flex-shrink-0"><i className="bi bi-chat-right-quote-fill text-dark fs-1"></i></div>
                                    <div className="ms-4">
                                        <p className="mb-1">Con el desarrollo del sistema de administración de control escolar por parta de Abeja Dev contamos con mas herramientas para crecer como empresa de enseñanza en el mundo culinario.</p>
                                        <div className="small text-muted">- Administración Culinary, Tijuana México</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         </>
    );
}

export default Testimonials;