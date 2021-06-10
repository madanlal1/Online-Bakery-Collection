import React from 'react';

function Footer(){

    return(
    <>
        <footer>
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-sm-12 col-xs-12">
                    <br/><br/>
                    <img src="images/logo.png" alt="logo" width="140px" />
                    <strong><h3>Online Bakery Collection</h3></strong>
                </div>

                <div class="col-xl-4 col-lg-4 col-sm-12 col-xs-12 left">
                    <br/><br/><br/><br/>
                    <i class="fas fa-map-marker-alt"></i>   
                    &nbsp;           
                    Dehli Muslim Housing Society 
                    <strong> Sukkur</strong>
                    <br/><br/><br/>
                    <i class="fas fa-phone-alt"></i>
                    &nbsp;
                    +923451234567
                    <br/><br/><br/>
                    <i class="fas fa-envelope"></i>
                    &nbsp;
                    backerycollection@comany.com 
                    <br/><br/><br/><br/>
                </div>

                <div class="col-xl-4 col-lg-4 col-sm-12 col-xs-12 left">
                    <br/>
                    <strong id="aboutUs">About Us</strong>
                    <br/><br/>
                    <b>Madan Lal</b>
                    <br/>
                    Department of Software Engineering
                    <br/>
                    Sukkur IBA University
                    <br/><br/>
                    <b>Safdar Hussain</b>
                    <br/>
                    Department of Computer Science
                    <br/>
                    Sukkur IBA University
                    <br/><br/>  
                    <b>Wahiba Akram</b>
                    <br/>
                    Department of Computer Science
                    <br/>
                    Sukkur IBA University
                    <br/><br/>
                </div>
            </div>
        </footer>
    </>
    );
}

export default Footer;