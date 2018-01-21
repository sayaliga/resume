import React from "react";
import jQuery from "jquery";

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
                <form className="well" action="https://formspree.io/sayali.gaikwad1994@gmail.com" method="POST">
                    <div className="form-group">
                        <input className="form-control" name="email" type="email" placeholder="Enter your email" required></input>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="message" placeholder="Your message" required></textarea>
                        <input type="hidden" type="_next" value="https://sayaliga.github.io/react-resume/thankyou.html"></input>
                    </div>
                    <div className="form-group">
                        <button onClick={this.sendEmail}>
                            <i className="fa fa-send text-center" aria-hidden="true">&nbsp;&nbsp;Send</i>
                        </button>
                        <button type="reset">
                            <i className="fa fa-close text-center" aria-hidden="true">&nbsp;&nbsp;Reset</i>
                        </button>
                    </div>
                </form>
            </section>
        );
    }
}

export default Form;