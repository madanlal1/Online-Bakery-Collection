import React from 'react';

function Header(){

    return(
    <>
    <div className="col-xl-3 col-lg-3 col-sm-6 col-xs-12 hvr">
    <a href="index.html" style={{textDecoration: "none", color: "white"}}>
        <img src="images/logo.png" alt="logo" width="45px" style={{marginTop: "-7px"}} />
        Bakery Collection
    </a>
    </div>

    <div className="col-xl-4 col-lg-4 col-sm-6 col-xs-12">
        
        <div className="input-group rounded">
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
            aria-describedby="search-addon" />
            &nbsp;&nbsp;&nbsp;
            <i className="fas fa-search hvr"></i>
            <div id="clock"></div> 
        </div>

    </div>
    
    <div className="offset-1 col-xl-3 col-lg-3 col-sm-6 col-xs-12">

        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle form-control" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            Products
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a className="dropdown-item" href="Cookies.js">Cookies</a></li>
            <li><a className="dropdown-item" href="Cakes.js">Cakes</a></li>
            <li><a className="dropdown-item" href="Donuts.js">Donuts</a></li>
            <li><a className="dropdown-item" href="Bread.js">Bread</a></li>
            <li><a className="dropdown-item" href="Brownies.js">Brownies</a></li>
            <li><a className="dropdown-item" href="FastFood.js">Fast Food</a></li>
            </ul>
        </div> 
        
        </div>
        <div className="col-xl-1 col-lg-1 col-sm-6 col-xs-12 hvr">
        <i className="fas fa-cart-arrow-down"></i>
        0
        </div>
        </>
    );
}

export default Header;