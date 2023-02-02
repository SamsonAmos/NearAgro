import React, { useEffect, useState, useCallback } from "react";
import { Card, Button, Col, Badge, Stack, Row } from "react-bootstrap";
import { utils } from "near-api-js";
import {useParams, useNavigate} from "react-router-dom"
import { toast } from "react-toastify";
import { NotificationSuccess, NotificationError } from "../utils/Notifications";

import {
  getProduct as getProductById, buyProduct
} from "../../utils/marketplace";



const ViewProductById = () => {

const params = useParams()
const [products, setProducts] = useState({});
const [loading, setLoading] = useState(false);
const id = params.id
const navigate = useNavigate()

const getProduct = useCallback(async () => {
    try {
      setLoading(true);
      setProducts(await getProductById(id));
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  }, [id]);

const buy = async (id, price, name, description, location, from, image) => {
    toast(<NotificationSuccess text="Processing your request..." />);
    try {
      await buyProduct({
        id,
        price, name, description, location, from, image
      }).then((resp) => {
       getProduct(id)
       toast(<NotificationSuccess text="Product bought successfully" />);
     })
      
    } catch (error) {
      toast(<NotificationError text="Failed to purchase product." />);
    } finally {
      setLoading(false);
    }
  };





useEffect(() => {
    getProduct();
  }, [getProduct]);

console.log(id)
console.log(products)
 return (
 	<>
 	<Row className="mt-3">
 	<Col md = {4}>
  <Badge bg="success" style={{float : "right", cursor : "pointer"}} onClick={() => navigate("/")}>
              Back
            </Badge>
  </Col>
 	 <Col key={id} md={4}>
      <Card className=" h-100">
        <Card.Header>
          <Stack direction="horizontal" gap={2}>
            <span className="font-monospace text-secondary">{products.owner}</span>
            <Badge bg="secondary" className="ms-auto">
              {products.sold} Sold
            </Badge>
          </Stack>
        </Card.Header>
        <div className=" ratio ratio-4x3">
          <img src={products.image} alt={products.name} style={{ objectFit: "cover" }} />
        </div>
        <Card.Body className="d-flex  flex-column text-left">
          
          <p className="font-monospace" style={{fontSize : "12px"}}>
                      <span style={{display : "block"}} className="text-uppercase fw-bold">Name: </span>
                      <span >{products.name}</span>
                    </p>

          <p className="font-monospace" style={{fontSize : "12px"}}>
                      <span style={{display : "block"}} className="text-uppercase fw-bold">Description: </span>
                      <span >{products.description}</span>
                    </p>

          <p className="font-monospace" style={{fontSize : "12px"}}>
                      <span style={{display : "block"}} className="text-uppercase fw-bold">Price: </span>
                      <span >{utils.format.formatNearAmount(products.price)} NEAR</span>
                    </p>

                    <p className="font-monospace" style={{fontSize : "12px"}}>
                      <span style={{display : "block"}} className="text-uppercase fw-bold">Location: </span>
                      <span >{products.location}</span>
                    </p>

                        
          <Button
            variant="outline-dark"
            onClick={() => buy(products.id, products.price, products.name, products.description, products.location, products.owner, products.image)}
            className="w-100 py-3"
          >
            Buy for {utils.format.formatNearAmount(products.price)} NEAR
          </Button>
        </Card.Body>
      </Card>
    </Col>
    <Col md = {4}></Col>
    </Row>
 	</>
 	)
}

export default ViewProductById