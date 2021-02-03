import React from "react"

const Contact =()=>{
    return(
        <div>
            <form id="contact-form" className="text-center" >
        <h2>Contact us</h2>

        
        <div className="form-outline mb-4">
          <input type="text" id="name" name="name" className="form-control" />
          <label className="form-label" for="name" >Name</label>
        <div className="form-notch"><div className="form-notch-leading" ></div><div className="form-notch-middle" ></div><div className="form-notch-trailing"></div></div></div>

        
        <div className="form-outline mb-4">
          <input type="email" id="email" name="email" className="form-control" />
          <label className="form-label" for="email" >Email address</label>
        <div className="form-notch"><div className="form-notch-leading" ></div><div className="form-notch-middle" ></div><div className="form-notch-trailing"></div></div></div>

        
        <div className="form-outline mb-4">
          <input type="text" id="subject" name="subject" className="form-control"/>
          <label className="form-label" for="subject" >Subject</label>
        <div className="form-notch"><div className="form-notch-leading" ></div><div className="form-notch-middle" ></div><div className="form-notch-trailing"></div></div></div>

        
        <div className="form-outline mb-4">
          <textarea className="form-control" id="message" name="message" rows="4"></textarea>
          <label className="form-label" for="message" >Message</label>
        <div className="form-notch"><div className="form-notch-leading" ></div><div className="form-notch-middle" ></div><div className="form-notch-trailing"></div></div></div>

        
        <button className="btn btn-primary btn-block mb-4">Send</button>
      </form>
        </div>
    )
}

export default Contact