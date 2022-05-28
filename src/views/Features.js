import React from 'react';

function Features(){
    return (
        <>
        {/* Features section */}
        <section className="py-5 border-bottom" id="features" style={{backgroundColor: '#fe8024'}} >
            <div className="container px-5 my-5">
                <div className="row gx-5">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="feature bg-dark bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection"></i></div>
                        <h2 className="h4 fw-bolder">Software</h2>
                        <p>Implementamos herramientas tecnológicas capaces de resolver situaciones generales en tu negocio. Ayudandote a facilitar tus operaciones diarias a través de internet.</p>
                        <a className="text-decoration-none btn" href="#!">
                            Quiero saber más
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="feature bg-dark bg-gradient text-white rounded-3 mb-3"><i className="bi bi-display"></i></div>
                        <h2 className="h4 fw-bolder">Soluciones Web</h2>
                        <p>Desarrollamos tu pagina web personal o empresarial a medida para atraer clientes y aportar valor a tu negocio. Contamos con tecnologia de punta para darte un lugar en internet.</p>
                        <a className="text-decoration-none btn" href="#!">
                            Quiero saber más
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <div className="feature bg-dark bg-gradient text-white rounded-3 mb-3"><i className="bi bi-bug"></i></div>
                        <h2 className="h4 fw-bolder">Freelance y Soporte</h2>
                        <p>Te asignamos un profesional de acuerdo a las necesidades para tu empresa, invirtiendo unicamente el tiempo necesario para tu proyecto de inovación tecnológico.</p>
                        <a className="text-decoration-none btn" href="#!">
                            Quiero saber más
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
         </>
    );
}

export default Features;