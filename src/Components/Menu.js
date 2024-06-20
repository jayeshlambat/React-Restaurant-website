import React from 'react'
import { menu } from "../data"

function Menu() {
    return (
        <div>
            <section className='menu' id='menu'>
                <h1 className='heading'>
                    <span>Our </span>Menu
                </h1>

                <div className="box-container">
                    {menu.map((item, index) => (
                        <div className="box" key={index * Math.random()}>
                            <img src={item.img} alt="" />
                            <h3>{item.name}</h3>
                            <div className="price">
                                {item.discount} <span>{item.price}</span>
                            </div>
                            <a href="#" className="btn">
                                add to cart
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Menu
