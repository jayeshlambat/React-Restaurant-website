import React from 'react'
import { product } from "../data"

function Product() {
    return (
        <div>
            <section className='products' id='products'>
                <h1 className='heading'>
                    our <span>products</span>
                </h1>
                <div className="box-container">
                    {product.map((item, index) => (
                        <div className="box" key={index * Math.random()}>
                            <div className="icons">
                                <a href="" className="fa fa-shopping-cart"></a>
                                <a href="" className="fa fa-heart"></a>
                                <a href="" className="fa fa-eye"></a>
                            </div>
                            <div className="image">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="content">
                                <h3>{item.name}</h3>
                                <div className="stars">
                                    <i className={item.rating}></i>
                                    <i className={item.rating}></i>
                                    <i className={item.rating}></i>
                                    <i className={item.rating}></i>
                                    <i className={item.rating2}></i>
                                </div>
                                <div className="price">
                                    {item.discount}<span>{item.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Product
