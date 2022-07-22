import React from 'react'
import Footer from '../../components/footer/Footer'
import "./contact.css"

export default function Contact() {
  return (
    <div className="contact">
      <span className="head">Contact Us</span>  
      <div className="con">
        <div className="content">
          <div className="first">
            CONTACT OUR SUPPORT TEAM 
          </div>
          <div className="second">
            We're here 24*7
          </div>
          <div className="third">
            <p>Reach out with your questions, concerns and challenges. Or just to say hi. We’ll be happy to chat and help.</p>
            <button>Chat Now</button>
          </div>
          <div className="forth">
             Call <span>999-501-8923</span>   
             <p>International calling fees may apply</p>
          </div>
        </div>
        <div className="imge">

          <img src="https://images.ctfassets.net/xiodjcyu2mf8/auFJMZBDKlfAEaDdWFHYu/b6bbc6c20100eb0134781c659a300771/iStock-1059088660_2x.jpg?fm=webp" 
          alt="" 
          />
        </div>
      </div>
      <div className="reach">
        <div className="heading">Contact:</div>
        <div className="add">
          <div className="para">WorkSpace is a fully distributed non-profit organisation registered in India, with team members spread all over the world. We can be contacted by post at the following address:</div>
          <div className="para1">
            WorkSpace Inc.  Hiranandani Business Park, 2nd Floor, Mahatma Gandhi Road, Mantralaya, Fort, Mumbai, Maharashtra 400032 
          </div>
        </div>
      </div>   
      <Footer/>   
    </div>
  )
}
