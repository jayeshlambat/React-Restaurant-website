import React, { useRef } from 'react'
import Logo from "../Images/logo1.png"
import { cart } from "../data"


function Navbar() {
    const handlerefsearch = useRef()
    const searchhandle = () => {
        handlerefsearch.current.classList.toggle("active")
        cartRef.current.classList.remove("active")
        navBarRef.current.classList.remove("active")
    }
    const cartRef = useRef()
    const handleCart = () => {
        cartRef.current.classList.toggle("active");
        handlerefsearch.current.classList.remove("active")
        navBarRef.current.classList.remove("active")
    }
    const navBarRef = useRef();
    const handleNavbar = () => {
        navBarRef.current.classList.toggle("active")
        handlerefsearch.current.classList.remove("active")
        cartRef.current.classList.remove("active")
    }
    return (
        <>
            <header className='header'>
                <a href='#' className='logo' >
                    <img src={Logo} alt='err' />
                </a >
                <nav className='navbar' ref={navBarRef}>
                    <a href='#home'>Home</a>
                    <a href='#about'>about</a>
                    <a href='#menu'>menu</a>
                    <a href='#products'>product</a>
                    <a href='#review'>review</a>
                    <a href='#contact'>contact</a>

                </nav>
                <div className='icons'>

                    <div className='fa fa-search' onClick={searchhandle}></div >
                    <div className='fa fa-shopping-cart' onClick={handleCart}></div >
                    <div className='fa fa-bars' id='menu-btn' onClick={handleNavbar}></div >

                </div>
                <div className='search-form '
                    ref={handlerefsearch}>
                    <input type='search' placeholder='search here..' id='search-box' />
                    <label htmlFor='serach-box' className='fa fa-search'></label>
                </div>



                <div className="cart-items-container" ref={cartRef}>
                    {
                        cart.map((item, index) => (
                            <div className="cart-item" key={index * Math.random()}>
                                <span className="fa fa-times"></span>
                                <img src={item.img} alt="err" />
                                <div className="content">
                                    <h3> cart item :{item.no}</h3>
                                    <div className="price">{item.price}</div>
                                </div>
                            </div>
                        ))
                    }
                    <a href='#' className='btn'>check out</a>
                </div>
            </header>



        </>
    )
}


export default Navbar
