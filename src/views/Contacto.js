import React, {useState} from 'react';
import emailjs from 'emailjs-com';

function Contacto(){
    const frmContact = { userEmail:'', concernCategory:'', emailTitle:'', emailDetails:'' };
    const [contact, setContact] = useState(frmContact);
    const [showMessage, setShowMessage] = useState(false);
    const handleChange = e => { 
		const {name,value} = e.target;
		setContact({...contact,[name]:value}); 
    };
    const handleSubmit = e =>{
	    e.preventDefault();
	   
		emailjs.send('default_service','template_fqgqpaf', contact, 'dEnny2KB7Uasa_z-l')
		.then((response) => {
				   console.log('SUCCESS!', response.status, response.text);
				   setContact(frmContact);
				   setShowMessage(true);
		}, (err) => {
				   console.log('FAILED...', err);
		});
     }
    return (
        <>
        {/* Contact section */}
        <section className="bg-light py-5" id='contact'>
            <div className="container px-5 my-5 px-5">
                <div className="text-center mb-5">
                    <div className="feature bg-dark bg-gradient text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                    <h2 className="fw-bolder">Contactanos</h2>
                    <p className="lead mb-0">Nos encantaría saber más de ti</p>
                    { showMessage ? <div className="alert alert-success col-md-5 mx-auto" role="alert">Email Send Success!!</div> : ''}
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="emailTitle" name="emailTitle" type="text" placeholder="Enter your name..." data-sb-validations="required" value={contact.emailTitle} onChange={handleChange} />
                                <label htmlFor="name">Nombre completo</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="userEmail" name="userEmail" type="email" placeholder="name@example.com" data-sb-validations="required,email" value={contact.userEmail} onChange={handleChange} />
                                <label htmlFor="userEmail">Correo electrónico</label>
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label htmlFor="phone">Número de celular</label>
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="emailDetails" name="emailDetails" type="text" placeholder="Enter your message here..." style={{height:"10rem"}} data-sb-validations="required" value={contact.emailDetails} onChange={handleChange}></textarea>
                                <label htmlFor="emailDetails">Mensaje</label>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                            <div className="d-grid"><button className="btn btn-dark btn-lg" id="submitButton" type="submit">Enviar</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
         </>
    );
}

export default Contacto;