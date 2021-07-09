
import {useState, useEffect} from 'react'
import {Button, Card, Image, Icon} from 'semantic-ui-react'
import {Row,Col} from 'react-bootstrap'
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
                 
               return <div key={'_'+itm.productId} class="column" style={{marginTop:"30px"}}>
               <Card color="blue">
                  <Card.Content>

                    <Card.Header>
                     <Row>
                     <Col md={4}>
                     {itm.productName}
                     </Col>
                     <Image src={itm.productImage} style={{height:"300px",width:"200px"}}/>
                     <Col md={8}>
                    
                    <div>
                      
                      <Button basic color='blue' onClick={()=>{handleAddToCart(itm)}}>
                              <h5>Add to cart</h5>
                      </Button>

                    </div>

                    </Col>
                     
                    </Row> 
                      
                    
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