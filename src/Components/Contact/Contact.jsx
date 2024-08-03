import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
        <div className="contact">
            <div className="c_left">
                <h2>Ready to elevate your brand?</h2>
                <p>Get in touch with us today to discuss your PR needs and discover how we can help you achieve your goals.</p>
            </div>
            <div className="c_right">
                <form action="#">
                    <div>
                        <label htmlFor="last">First Name *</label>
                        <input type="text" name="firstName" placeholder='First Name' />
                    </div>
                    <div>
                        <label htmlFor="last">Last Name *</label>
                        <input type="text" name='secondName' placeholder='Last Name'/>
                    </div>
                    <div>
                        <label htmlFor="message">Message *</label>
                        <textarea name="Message" id=""></textarea>
                    </div>
                </form>
                <button>Send Message</button>
            </div>
        </div>
    </div>
  )
}

export default Contact