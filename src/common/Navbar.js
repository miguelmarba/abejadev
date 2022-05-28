import React from 'react';

function Navbar(){
    return (
        <>
        {/* Responsive navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-5" >
                <a className="navbar-brand" href="#!">
                    <img src="/abejadev_logo_trans.png" alt="" width="250" height="80" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Inicio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#features">Servicios</a></li>
                        <li className="nav-item"><a className="nav-link" href="#desarrollo">Desarrollo</a></li>
                        <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonios</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contactanos</a></li>
                    </ul>
                </div>
            </div>
        </nav>
         </>
    );
}

export default Navbar;