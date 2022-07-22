import React from 'react'
import Footer from '../../components/footer/Footer'
import "./about.css"

export default function About() {
  return (
    <>
    <div className="about">
      <br/>
      <span>About Us</span>
      <div id="aim">
        <div>OUR  AIM</div>
        <p>
          At WorkSpace our mission is to provide user a platform for creating, drafting and publishing there content online and express themselves across the world.
        </p>
      </div>
      <div id="believe">
        <div>WHAT  WE  BELIEVE</div>
        <p>
          Anyone can have an idea. We want you to have the power and support to get it online and show your content to the world.
        </p>
      </div>
      <div id="are">
        <div>WHO  WE  ARE</div>
        <p>
        Our goal is to be your go-to partner in today’s always-on digital world. With our extensive product offerings and personalized support, we know we can service all of your online presence needs. We’ve been helping customers succeed online, and we’re here to help you, too.
        </p>
      </div>
      <div id="do">
        <div>WHAT  WE  DO</div>
        <p>
        For those of you that want to build things on your own, we offer easy-to-use website builder tools. With a variety of templates and a library of images to choose from, you’ll be able to build a professional website for your business.
        </p>
      </div>
      <br/>
    </div>
    <Footer/>
    </>
  )
}
