import React from "react";
import jQuery from "jquery";
import SocialIcons from './socialIcons.js';

class Form extends React.Component {
    sendEmail() {
        jQuery.ajax({
            url: "https://formspree.io/sayali.gaikwad1994@gmail.com", 
            method: "POST",
            dataType: "json"
        });
    }
    render() {
        return (
            <section className="contactme">
                <div className="row">
                    <div className="col-sm-6">
                        <form id="gform" className="well" action="https://script.google.com/macros/s/AKfycbzqeHjlQ4wMHRF_UIxqarLnuEEu4Il2nAUDAhLz0OnlIUCd9rD6/exec" method="POST" data-email="sayali.gaikwad1994@gmail.com">
                            <p>
                                Drop me an email and I'll get back to you.
                            </p>
                            <fieldset className="form-group">
                                <label htmlFor="name">Name: </label>
                                <input className="form-control" id="name" name="name" placeholder="Your name" />
                            </fieldset>

                            <fieldset className="form-group">
                                <label htmlFor="name">E-mail: </label>
                                <input className="form-control" id="email" name="email" type="email" placeholder="Your E-Mail" required/>
                            </fieldset>
                            
                            <fieldset className="form-group">
                                <label htmlFor="message">Message: </label>
                                <textarea className="form-control" id="message" name="message" rows="10"
                                placeholder="Leave your message here.."></textarea>
                            </fieldset>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
                <div style={{display: 'none'}} id="thankyou_message">
                    <h2><em>Thanks</em> for contacting!
                    I will get back to you soon!</h2>
                </div>
                <p>
                    Connect with me on linked in - <SocialIcons />
                </p>
            </section>
        );
    }
}

export default Form;