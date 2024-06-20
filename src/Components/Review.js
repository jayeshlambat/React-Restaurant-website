import React from 'react'
import { profile } from "../data"
import qouteImg from "../Images//quote-img.png"

function Review() {
    return (
        <div>
            <section className='review' id='review'>
                <h1 className='heading'>
                    Customers <span> Review</span>
                </h1>
                <div className="box-container">
                    {profile.map((item, index) => (
                        <div className="box" key={index * Math.random()}>
                            <img src={qouteImg} alt="" className="quote" />
                            <p>
                                {item.review}
                            </p>
                            <img src={item.img} className="user" alt="" />
                            <h3>{item.name}</h3>
                            <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Review
