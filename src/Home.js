import react from 'react'
import Slider from './Slider'
import {Row,Col,Card} from 'react-bootstrap'
import Footer from './Footer'
import { Products } from './Products'
export default function Home()
{
    return(
        <div>
            <Slider/>

            <div style={{marginBottom:"50px"}} >

            <Products/>
            </div>
       
            <Footer/>
        </div>
    )
}