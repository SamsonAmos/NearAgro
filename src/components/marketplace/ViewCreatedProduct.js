import React, { useEffect, useState, useCallback } from "react";
import { Card, Button, Col, Badge, Stack, Row,  Form, FloatingLabel, Modal } from "react-bootstrap";
import { utils } from "near-api-js";
import {useNavigate,Link} from "react-router-dom"
import { toast } from "react-toastify";
import UpdateProductModal from "./UpdateProductModal"
import { NotificationSuccess, NotificationError } from "../utils/Notifications";

import {
   getProducts as getProductList, buyProduct, deleteProduct as deleteTask,getProduct as getTask, updateProduct
} from "../../utils/marketplace";



const ViewCreatedProducts = ({accountId}) => {
const navigate = useNavigate()
const [show, setShow] = useState(false);
const [products, setProducts] = useState([]);
const [product, setProduct] = useState({});
const [loading, setLoading] = useState(false);
const [name, setName] = useState("");
const [image, setImage] = useState("");
const [description, setDescription] = useState("");
const [location, setLocation] = useState("");
const [price, setPrice] = useState(product.price);
const isFormFilled = () => name && image && description && location && price;
const handleClose = () => setShow(false);
const handleShow = () => setShow(true); 
  
const getProducts = useCallback(async () => {
    try {
      setLoading(true);
      setProducts(await getProductList());
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  }, []);


const getProduct = useCallback(async (id) => {
    try {
      // setLoading(true);
      let product1 = await getTask(id)
      setName(product1.name)
      setImage(product1.image)
      setDescription(product1.description)
      setLocation(product1.location)
      setPrice(utils.format.formatNearAmount(product1.price))
      handleShow()
       
    } catch (error) {
      console.log({ error });
    } finally {
        
    }
  }, []);


  const deleteProduct = async (id) => {
  try{
    // setDisable(true)
    toast(<NotificationError text="Failed to purchase product." />);
    deleteTask(id)
    .then((resp) => {
    	console.log("success", resp)
      toast(<NotificationSuccess text="delete to purchase product." />);
      // getTaskLists()
    })
  }
  catch(error) {
   // setDisable(false)
    toast(<NotificationError text="Failed to purchase product." />);
  }
  finally{
    // setDisable(false)
  }
}


const addProduct = async (id) => {
    try {
      setLoading(true);
      updateProduct(id, name, description, image, location, price).then((resp) => {
        getProducts();
      });
      toast(<NotificationSuccess text="Product added successfully." />);
    } catch (error) {
      console.log({ error });
      toast(<NotificationError text="Failed to create a product." />);
    } finally {
      setLoading(false);
    }
  };




useEffect(() => {
    getProducts();
  }, [getProducts]);

console.log(accountId)
console.log(products)

 return (
 	<>

   <Button><Link to="/" className="text-white my-4">Back</Link></Button>
   {// <UpdateProductModal show={show} product = {product} handleShow = {handleShow} handleClose ={handleClose} location1="hello"/>
 	}

            
  <Row>
  {              
  products && products
    .filter(item => item.owner === accountId)
    .map((item, index) => (
 	 <Col key={index} md={12}>
   <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>New Product</Modal.Title>
        </Modal.Header>
        {JSON.stringify(product)}
        <Form>
          <Modal.Body>
            <FloatingLabel
              controlId="inputName"
              label="Product name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Enter name of product"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputUrl"
              label="Image URL"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputDescription"
              label="Description"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="description"
                style={{ height: "80px" }}

                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputLocation"
              label="Location"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputPrice"
              label="Price"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </FloatingLabel>
          </Modal.Body>
        </Form>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="dark"
            // disabled={!isFormFilled()}
            onClick={() => addProduct(item.id)}>
            Save product
          </Button>
            }
        </Modal.Footer>
      </Modal>
      <Card className=" h-100">
        <Card.Header>
          <Stack direction="horizontal" gap={2}>
            <span className="font-monospace text-secondary">{item.owner}</span>
            
            <Badge bg="success" onClick={() => getProduct(item.id)} className="ms-auto">
               Update
            </Badge>

            <Badge bg="danger" onClick={() => deleteProduct(item.id)} className="ms-auto">
               Delete
            </Badge>
          </Stack>
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
                      <span style={{display : "block"}} className="text-uppercase fw-bold">Sold: </span>
                      <span >{item.sold}</span>
                    </p>
          
      </div>
         </Card.Body>
      </Card>
    </Col>
    
  ))}
    </Row>
 	</>
 	)
}

export default ViewCreatedProducts