import React, { useEffect, useState, useCallback } from "react";
import { Card, Button, Col,  Row, Container } from "react-bootstrap";
import { utils } from "near-api-js";
import {useNavigate} from "react-router-dom"
import Loader from "../utils/Loader";
import {getPurchasedSeeds} from "../../utils/marketplace";



const MyCart = ({accountId}) => {

const navigate = useNavigate()
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(false);
  

// function used to get all seeds listed 
const getProducts = useCallback(async () => {
  let _products = []
    try {
      setLoading(true);
      _products =  await getPurchasedSeeds()
      setProducts(_products.filter(item => item.to === accountId))
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  }, [accountId]);



useEffect(() => {
    getProducts();
  }, [getProducts]);


 return (
 	<>
<Container>
   <Button className="my-4 btn-secondary" size="sm" onClick={() => navigate("/")}>Back</Button>

{!loading && products.length === 0 ? (
  <p className="text-center font-monospace" style={{margin : "auto"}}>No product purchased yet.</p>
  )
:
!loading && products ? (
  <Row>
  {              
  products && products
    .map((item, index) => (
 	 <Col key={index} md={12} className="my-2">
      <Card className=" h-100">
        <Card.Header>
          <div className="d-flex justify-content-between">
            <span className="font-monospace text-secondary">{item.to}</span>

            <span className="font-monospace text-secondary">{new Date(item.datePurchased / 1000000).toDateString()}</span>
          </div>
        </Card.Header>
        <Card.Body className="d-flex gap-3 text-left">
        <div className="shadow">
          <img src={item.image} alt={item.name} style={{width : "200px", height : "100%", objectFit: "cover", borderRadius : "2px" }} />
        </div>
        
        <div>
          <p className="font-monospace" style={{fontSize : "12px"}}>
                      <span style={{display : "block"}} className="text-uppercase fw-bold">Name: </span>
                      <span >{item.name}</span>
                    </p>

          <p className="font-monospace" style={{fontSize : "12px"}}>
                      <span style={{display : "block"}} className="text-uppercase fw-bold">Description: </span>
                      <span >{item.description}</span>
                    </p>

          <p className="font-monospace" style={{fontSize : "12px"}}>
                      <span style={{display : "block"}} className="text-uppercase fw-bold">Price: </span>
                      <span >{utils.format.formatNearAmount(item.price)} NEAR</span>
                    </p>

                    <p className="font-monospace" style={{fontSize : "12px"}}>
                      <span style={{display : "block"}} className="text-uppercase fw-bold">Location: </span>
                      <span >{item.location}</span>
                    </p>

                    <p className="font-monospace" style={{fontSize : "12px"}}>
                      <span style={{display : "block"}} className="text-uppercase fw-bold">From: </span>
                      <span >{item.from}</span>
                    </p>

                    <p className="font-monospace" style={{fontSize : "12px"}}>
                      <span style={{display : "block"}} className="text-uppercase fw-bold">To: </span>
                      <span >{item.to}</span>
                    </p>


          
      </div>
         </Card.Body>
      </Card>
    </Col>
    
  ))}
    </Row>)
    :(
        <Loader />
      )}
    </Container>
 	</>
 	)
}

export default MyCart