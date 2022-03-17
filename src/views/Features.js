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
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a className="text-decoration-none btn" href="#!">
                            Call to action
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="feature bg-dark bg-gradient text-white rounded-3 mb-3"><i className="bi bi-display"></i></div>
                        <h2 className="h4 fw-bolder">Páginas Web</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a className="text-decoration-none btn" href="#!">
                            Call to action
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <div className="feature bg-dark bg-gradient text-white rounded-3 mb-3"><i className="bi bi-bug"></i></div>
                        <h2 className="h4 fw-bolder">Freelance</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a className="text-decoration-none btn" href="#!">
                            Call to action
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