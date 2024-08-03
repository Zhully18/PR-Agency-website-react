import React from 'react'
import pix1 from '../../assets/about.jpg'
import pix2 from '../../assets/lady3.jpg'
import pix3 from '../../assets/hero.jpg'
import pix4 from '../../assets/man3.jpg'
import pix5 from '../../assets/lady2.jpg'
import './Hero.css'
// import { GiStarShuriken } from 'react-icons/gi'

const Hero = () => {
  return (
    <div>
        <section className="hero">
            <div className="hero-content">
                <h1>Transforming <span>Brands</span>, One Story at a Time</h1>
                <p>Unlock the power of strategic storytelling and dynamic communication. Let's build a brand narrative that resonates and lasts</p>
                <div className="buttons">
                    <a href="#" className="cta-button">Contact Us</a>
                    <a href="#" className="services-button">View All Services</a>
                </div>
            </div>
            <div className="images">
                <div className="image-container_small_one">
                    <img src={pix1} alt="Professional Teams" className='small_clean-img'/>
                    <img src={pix2} alt="Professional Teams" className='small_clean-img'/>
                </div>
                <div className="image-container_small">
                    <img src={pix3} alt="Affordable Pricing" className='small_clean-img'/>    
                </div>
                <div className="image-container_small_one">
                    <img src={pix4} alt="Affordable Pricing" className='small_clean-img'/>
                    <img src={pix5} alt="Affordable Pricing" className='small_clean-img'/>
                </div>
            </div>
        </section>
        {/* <div className="hero_trusted">
            <div className="trusted_content">
                <GiStarShuriken className='hero_icon'/>
                <p>Dedicated </p>
            </div>
            <div className="trusted_content">
            <GiStarShuriken  className='hero_icon'/>
                <p>Innovative</p>
            </div>
            <div className="trusted_content">
            <GiStarShuriken  className='hero_icon'/>
                <p>Strategics</p>
            </div>
            <div className="trusted_content">
            <GiStarShuriken  className='hero_icon'/>
                <p>Observant</p>
            </div>
            <div className="trusted_content">
            <GiStarShuriken  className='hero_icon'/>
                <p>Deliver</p>
            </div>
            <div className="trusted_content">
                <GiStarShuriken className='hero_icon'/>
                <p>Dedicated </p>
            </div>

        </div> */}
    </div>
  )
}

export default Hero