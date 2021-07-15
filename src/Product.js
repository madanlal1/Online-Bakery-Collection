
import {useState, useEffect} from 'react'
import {Card, Image} from 'semantic-ui-react'
export let cartItems=[];
export function Product(){

  const[products, updateProducts]=useState([])

  function handleAddToCart(item){

      cartItems.push(item);

  }
    useEffect(() => {
            fetch('http://localhost:3001/loadAllProductsList').then((response)=>response.json()).then((data)=>{
                console.log(data)
                updateProducts(data)

              })
    }, [])

   
    return(
        <div style={{marginLeft:"50px", marginRight:"20px"}}>
            <div class="ui four column grid">
                   <div class="row">
             {products.map(itm=>{
                 
               return <div key={'_'+itm.productId} className="container-fluid d-inline column" style={{marginTop:"30px", width: '22rem'}}>
               <Card color="blue" style={{borderRadius: "20px", border:"2px solid #5cb85c"}}>
                  <Card.Content>

                    <Card.Header>
                     <div className="row">
                   
                     <center>{itm.productName}</center>
                    <br/>
                     </div>
                     <div className="row">
                     <Image src={itm.productImage} style={{width:"22rem", height: "230px", borderRadius: "15px"}}/>
                
                    
                    <div>
                      
                      <button className="btn btn-outline-success form-control" onClick={()=>{handleAddToCart(itm)}} style={{marginTop:'10px'}}>
                              <h5>Add to cart</h5>
                      </button>

                    </div>

                     
                    </div> 
                      
                    
                    </Card.Header>
                    <hr />
                    <Card.Description>
                      Price: <strong>{itm.productPrice}</strong>
                    </Card.Description>
                    </Card.Content>
                 
                </Card>
            </div>
            
            })}
         </div>
    </div>
 
        </div>
    ) 
}