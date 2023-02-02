import React from "react";
import PropTypes from "prop-types";
import { Button, Container } from "react-bootstrap";

const Cover = ({ name, login, coverImg }) => {
  if ((name, login, coverImg)) {
    return (
      <div
        className="d-flex justify-content-center flex-column "
        style={{ background: "#000", minHeight: "100vh" }}
      >
      <Container>
        <div className="d-flex justify-content-between mt-auto text-light mb-5">
          <h4>{name}</h4>
          <Button
            onClick={login}
            variant="outline-light"
            className="rounded-pill px-3 mt-1"
          >
            Connect Wallet
          </Button>
        </div>

         <div className=" row text-light mt-5">
          <div className="col-md-5  m-4">
            <h4 className="text-left mt-4">Welcome to NearAgro</h4>
            <div
              style={{ fontSize: "20px", opacity: 0.8, lineHeight: "5vh" }}
              className="mt-4 text-left"
            >
              A decentralized farmer marketplace built on the NEAR protocol, where a farmer can both
              buy and sell plant seed on  the NEAR blockchain.
            </div>
          </div>
          <div className="col-md-1" />
          <div className="col-md-5 mt-4">
            <img
              src={coverImg}
              alt=""
              style={{ marginTop: "5vh", width: "80vh", height: "40vh", borderRadius : "2px", cover : "objectFit" }}
            />
          </div>
        </div>
        <p className="mt-4 text-secondary text-center">Powered by NEAR</p>
        </Container>
      </div>
    );
  }
  return null;
};

Cover.propTypes = {
  name: PropTypes.string,
};

Cover.defaultProps = {
  name: "",
};

export default Cover;
