import React from 'react';
import Cards from './Cards';
import BreadData from './BreadData';

function Bread() {
  return (
    BreadData.map(cData)
  );
}

export default Bread;

  // cards attribute data 
  function cData(val){
    return(
    <>
            <div className="col-xl-3 col-lg-3 col-sm-6 col-xs-12">
              <Cards image={val.image} title={val.title}/>
            </div>
    </>
    );
    }