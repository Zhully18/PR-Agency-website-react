import React from 'react'
import img from '../../assets/about.jpg'
import './Impact.css'

const Impact = () => {
  return (
    <div>
        <div className="impact">
            <div className="impact_txt">
                <h1>Elevate Your Brand with Orange Media </h1>
                <p>Here's what our company statistics looks like and here is what our ongoing statistics looks
                    like with our numbers telling our outstanding performance
                </p>
            </div>
            <div className="impact_container">
                <div className="left">
                    <img src={img} alt="" />
                </div>
                <div className="right">
                    <div className="right_num">
                        <h1> 80k</h1>
                        <p>Satisfied Customers</p>
                    </div>
                    <div className="right_num">
                        <h1> 50k</h1>
                        <p>Product Launch</p>
                    </div>
                    <div className="right_num">
                        <h1> 96%</h1>
                        <p>Trending Campaign</p>
                    </div>
                    <div className="right_num">
                        <h1> 10K</h1>
                        <p>Successful Events</p>
                    </div>
                    <div className="right_num">
                        <h1> 96%</h1>
                        <p>Target Audience</p>
                    </div>
                    <div className="right_num">
                        <h1> 10K</h1>
                        <p>Meetups</p>
                    </div>
                </div>
            </div>
            <button>Get Started</button>
        </div>
    </div>
  )
}

export default Impact