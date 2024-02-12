import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MDBCol } from "mdbreact";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const state = useSelector(state => state.handleCart);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
    };

    return (
        <>
         <style>
                {`
                    @media (max-width: 750px) {
                        .nav-item img {
                            display: none;
                        }
                    }
                `}
            </style>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" style={{ marginRight: "30px" }} alt="Logo" />
                    </NavLink>
                    <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <MDBCol md="6" style={{ marginRight: "5px" }}>
                        <input className="form-control" type="text" placeholder="Search" aria-label="Search" style={{ border: "none", backgroundColor: "#F0F5FF" }} />
                    </MDBCol>
                    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                    {/* <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Contact</NavLink>
                        </li>
                        <li className="nav-item dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded={isDropdownOpen ? 'true' : 'false'}>
                                Fashion
                            </NavLink>
                            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/">Item</NavLink>
                                <NavLink className="dropdown-item" to="/">Item</NavLink>
                                <NavLink className="dropdown-item" to="/">Item</NavLink>
                                <NavLink className="dropdown-item" to="/">Item</NavLink>
                                <NavLink className="dropdown-item" to="/">Item</NavLink>
                                <NavLink className="dropdown-item" to="/">Item</NavLink>
                                <div className="dropdown-divider"></div>
                                <NavLink className="dropdown-item" to="/">Item</NavLink>
                            </div>
                        </li>
                    </ul> */}
                  
                {/* </div> */}
                    <div className="buttons text-center">
                        <NavLink to="/" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                        <NavLink to="/" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Register</NavLink>
                        <NavLink to="/" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length})</NavLink>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-1 sticky-top">
                <div className="container">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{backgroundColor:"#F1F2F4",borderRadius:"5px"}}>
                        <ul className="navbar-nav m-auto my-2 text-center">
                            <li className="nav-item">
                                <img src='https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100' style={{width:"45%"}}/>
                                <NavLink className="nav-link" to="/">Grocery</NavLink>
                            </li>
                           
                            <li className="nav-item">
                               <img src='https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100' style={{width:"45%"}}/>

                                <NavLink className="nav-link" to="/">Travel</NavLink>
                            </li>
                            <li className="nav-item dropdown" onMouseEnter={toggleDropdown2} onMouseLeave={toggleDropdown2}>
                                <img src='https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100' style={{width:"45%"}}/>
                                <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded={isDropdownOpen ? 'true' : 'false'}>
                                  Toys & More
                                </NavLink>
                                <div className={`dropdown-menu ${isDropdownOpen2 ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                    <NavLink className="dropdown-item" to="/">Toys & School Supplies</NavLink>
                                    <NavLink className="dropdown-item" to="/">Sports & Fitness</NavLink>
                                    <NavLink className="dropdown-item" to="/">Books</NavLink>
                                    <NavLink className="dropdown-item" to="/">Music</NavLink>
                                    <NavLink className="dropdown-item" to="/">Stationary</NavLink>
                                    <NavLink className="dropdown-item" to="/">Office Supplies</NavLink>
                                    <div className="dropdown-divider"></div>
                                    <NavLink className="dropdown-item" to="/">Foods & Drinks</NavLink>
                                    <NavLink className="dropdown-item" to="/">Auto Accessories</NavLink>
                                </div>
                            </li>
                            
                            <li className="nav-item">
                                <img src='https://rukminim2.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100' style={{width:"45%"}}/>
                                <NavLink className="nav-link" to="/">Two Wheelers</NavLink>
                            </li>
                            <li className="nav-item dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <img src='https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100'style={{width:"45%"}}/>
                              
                                <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded={isDropdownOpen ? 'true' : 'false'}>
                                    Fashion
                                </NavLink>
                                <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/">Men's Topwear</NavLink>
                                <NavLink className="dropdown-item" to="/">Men's Bottomwear</NavLink>
                                <NavLink className="dropdown-item" to="/">Women Ethnic</NavLink>
                                <NavLink className="dropdown-item" to="/">Women Western</NavLink>
                                <NavLink className="dropdown-item" to="/">Watches and Accessories</NavLink>
                                <NavLink className="dropdown-item" to="/">Essentials</NavLink>
                                <div className="dropdown-divider"></div>
                                <NavLink className="dropdown-item" to="/">Kids Clothes</NavLink>
                                <NavLink className="dropdown-item" to="/">Kids Toys</NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
