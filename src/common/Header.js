import React from 'react';

function Header(){
    return (
        <>
        {/* Header */}
        <header className="bg-light py-5">
            <div className="container px-5" style={{backgroundImage: 'url("innovation_background.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        <div className="bg-light p-5 rounded mt-2 mb-2" style={{opacity: '0.7'}} >
                            <h1 className="display-5 fw-bolder text-black mb-2">Dale a tu negocio una presencia tecnológica vanguardista.</h1>
                            <p className="lead text-black-70 mb-4">Abeja Dev somos un equipo de desarrollo de sistemas web con experiencia en la implementación de sistemas a medida, cumpliendo estándares de programación y optimización.</p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                <a className="btn btn-secondary btn-lg px-4 me-sm-3" href="#features">Comenzar</a>
                                <a className="btn btn-outline btn-lg px-4" href="#!">Leer Más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
         </>
    );
}

export default Header;