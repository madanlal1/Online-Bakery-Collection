import React from 'react';

function Header(){

    return(
    <>
    <div className="py-1 col-xl-3 col-lg-3 col-sm-6 col-xs-12 hvr">
    <a href="index.html" style={{textDecoration: "none", color: "white"}}>
        <img src="images/logo.png" alt="logo" width="45px" style={{marginTop: "-7px"}} />
        Bakery Collection
    </a>
    </div>

    <div className="col-xl-3 col-lg-3 col-sm-6 col-xs-12" >
        
        <div className="input-group">
        <div className="form-outline">
            <input type="search"  placeholder="Search" className="form-control" />
        </div>
        <button type="button" className="btn btn-secondary">
            <i className="fa fa-search"></i>
        </button>
        </div>

    </div>
    
    <div className="col-xl-3 col-lg-3 col-sm-6 col-xs-12 px-4">

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
        <div className="px-4 col-xl-1 col-lg-1 col-sm-6 col-xs-12 hvr">
        <i className="fas fa-cart-arrow-down"></i>
        0
        </div>
        <div className=" col-xl-2 col-lg-2 col-sm-6 col-xs-12">
        <button type="button" class="btn btn-outline-secondary form-control" data-toggle="modal" data-target="#myModal">
        <a href="LogIn.js">
        <img src="https://img.icons8.com/fluent/48/000000/administrator-male.png" width="27px"/>
          Login
          </a>
        </button> 
        </div>
        
        </>
    );


    
}

export default Header;




        

      