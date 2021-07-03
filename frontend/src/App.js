import React, {useState, useEffect} from 'react';
import Cards from './Cards';
import CardsData from './CardsData';


function App() {
  return (
    CardsData.map(cData)
  );
}

function GetLoginData(){
  const {user, setUser} = useState("");
  const {password, setPassword} = useState("");
}

export default App;

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