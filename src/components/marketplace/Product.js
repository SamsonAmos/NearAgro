import React from "react";
import PropTypes from "prop-types";
import { utils } from "near-api-js";
import { Card, Button, Col, Badge, Stack } from "react-bootstrap";
import {useNavigate} from "react-router-dom"

const Product = ({ product, buy }) => {
  const { id, price, name, sold, image, owner } =
    product;


  const navigate = useNavigate()

  return (
    <Col key={id}>
      <Card className=" h-100">
        <Card.Header>
          <Stack direction="horizontal" gap={2}>
            <span className="font-monospace text-secondary">{owner}</span>
            <Badge bg="secondary" className="ms-auto">
              {sold} Sold
            </Badge>
          </Stack>
        </Card.Header>
        <div className=" ratio ratio-4x3">
          <img src={image} alt={name} style={{ objectFit: "cover" }} />
        </div>
        <Card.Body className="d-flex  flex-column ">
          <p className="font-monospace" style={{fontSize : "12px"}}>
                      <span style={{display : "block"}} className="text-uppercase fw-bold">Name </span>
                      <span >{name}</span>
                    </p>

              <p className="font-monospace" style={{fontSize : "12px"}}>
                      <span style={{display : "block"}} className="text-uppercase fw-bold">Price </span>
                      <span >{utils.format.formatNearAmount(price)} NEAR</span>
                    </p>

        
          <Button
            variant="outline-dark"
            onClick={() => navigate(`/view_product_by_id/${id}`)}
            className="w-100 py-3"
          >
            View More Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

Product.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
  buy: PropTypes.func.isRequired,
};

export default Product;
