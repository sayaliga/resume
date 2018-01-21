import React from "react";

class Form extends React.Component {
    render() {
        return (
            <section className="contactme text-center">
                <form className="well" action="https://formspree.io/sayali.gaikwad1994@gmail.com" method="POST">
                    <div className="form-group">
                        <input className="form-control" name="email" type="email" placeholder="Enter email"></input>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="message" placeholder="Your message"></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" value="Send">Send</button>
                    </div>
                </form>
            </section>
        );
    }
}

export default Form;