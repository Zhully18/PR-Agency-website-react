import React from 'react'
import './Services.css'
import { services } from '../../data'

const Services = () => {
  return (
    <div>
        <div className="services">
            <h1>Our Services</h1>
            <div className="service_container">
                {services.map(({image, content}) =>{
                    return (
                        <div className="service_content">
                            <img src={image} alt="" className='service_icon'/>
                            <h2>{content} </h2>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Services