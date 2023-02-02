import React, { useEffect, useState, useCallback } from "react";
import { Card, Button, Col, Badge, Row,  Form, FloatingLabel, Modal, Container } from "react-bootstrap";
import { utils } from "near-api-js";
import {useNavigate} from "react-router-dom"
import { toast } from "react-toastify";
import Loader from "../utils/Loader";
import { NotificationSuccess, NotificationError } from "../utils/Notifications";
import {
   getSeeds as getSeedList, deleteSeed as deleteSeedById,
    getSeed as getSeedById, updateSeed as updateSeedById
} from "../../utils/marketplace";



const MyProducts = ({accountId}) => {
const navigate = useNavigate()
const [show, setShow] = useState(false);
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(false);
const [name, setName] = useState("");
const [image, setImage] = useState("");
const [description, setDescription] = useState("");
const [location, setLocation] = useState("");
const [price, setPrice] = useState(0);
const isFormFilled = () => name && image && description && location && price;
const handleClose = () => setShow(false);
const handleShow = () => setShow(true); 
  
const getProducts = useCallback(async () => {
  let _products = []
    try {
      setLoading(true);
      _products =  await getSeedList()
      setProducts(_products.filter(item => item.owner === accountId))
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  }, [accountId]);


const getProduct = useCallback(async (id) => {
    try {
      // setLoading(true);
      let product = await getSeedById(id)
      setName(product.name)
      setImage(product.image)
      setDescription(product.description)
      setLocation(product.location)
      setPrice(utils.format.formatNearAmount(product.price))
      handleShow()
       
    } catch (error) {
      console.log({ error });
    } finally {
        
    }
  }, []);


  const deleteProduct = async (id) => {
  try{
    toast(<NotificationSuccess text="deleting product please wait." />);
    deleteSeedById(id)
    .then((resp) => {
      getProducts()
      toast(<NotificationSuccess text="product deleted successfully." />);
    })
  }
  catch(error) {
    toast(<NotificationError text="Failed to delete product." />);
  }
  finally{
  }
}


const updateProduct = async (id) => {
    try {
      toast(<NotificationSuccess text="updating product please wait." />);
      updateSeedById(id, name, description, image, location, price).then((resp) => {
        getProducts();
        handleClose();
      });
      toast(<NotificationSuccess text="Product updated successfully." />);
    } catch (error) {
      console.log({ error });
      toast(<NotificationError text="Failed to update  product." />);
    } finally {
    }
  };




useEffect(() => {
    getProducts();
  }, [getProducts]);


 return (
 	<>
<Container>
   <Button className="my-4 btn-secondary" size="sm" onClick={() => navigate("/")}>Back</Button>

{!loading && products.length === 0 ? (
  <p className="text-center font-monospace" style={{margin : "auto"}}>No product created yet.</p>
  )
:
!loading && products ? (
  <Row>
  {              
  products && products
    .map((item, index) => (
 	 <Col key={index} md={12} className="my-2">
   <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        
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
          <Button size="sm" variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
          size="sm"
            variant="dark"
            disabled={!isFormFilled()}
            onClick={() => updateProduct(item.id)}>
            Update
          </Button>
            
        </Modal.Footer>
      </Modal>
      <Card className=" h-100">
        <Card.Header>
          <div className="d-flex justify-content-between">
            <span className="font-monospace text-secondary">{item.owner}</span>
            
            <div>
            <Badge bg="success mx-2" style={{cursor : "pointer"}} onClick={() => getProduct(item.id)} className="ms-auto">
               Update
            </Badge>

            <Badge bg="danger mx-2" style={{cursor : "pointer"}} onClick={() => deleteProduct(item.id)} className="ms-auto">
               Delete
            </Badge>
            </div>
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
                      <span style={{display : "block"}} className="text-uppercase fw-bold">Sold: </span>
                      <span >{item.sold}</span>
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

export default MyProducts