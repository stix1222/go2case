import React from 'react'

export const Contact = () => {
    return (
        <div className="justify-content-center">
            <div className="spacer"></div>
            <div className="container container-fluid">
                <form className="contact-form justify-content-center">
                    <label>First Name</label>
                    <input type="text" className="fname form-field" name="firstname" placeholder="John"/>
                    <label>Last Name</label>
                    <input type="text" className="lname form-field" name="lastname" placeholder="Doe"/>
                    <label htmlFor="contactMessage">Message</label>
                    <textarea className="contact-message form-field" name="message" placeholder="Write your message here..."></textarea>
                    <button className="submit btn btn-success">Submit</button>
                </form>
            </div>
            <div className="spacer"></div>
        </div>
    )
}

export default Contact