import React, { useEffect, useCallback, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { login, logout as destroy, accountBalance } from "./utils/near";
import Wallet from "./components/Wallet";
import { Notification } from "./components/utils/Notifications";
import Products from "./components/marketplace/Products";
import ViewProductById from "./components/marketplace/ViewProductById";
import ViewCreatedProduct from "./components/marketplace/ViewCreatedProduct";
import Cover from "./components/utils/Cover";
import coverImg from "./assets/img/images.jpeg";
import { Routes, Route, useNavigate  } from "react-router-dom";
import "./App.css";

const App = function AppWrapper() {
  const account = window.walletConnection.account();
  const [balance, setBalance] = useState("0");

  const navigate  = useNavigate()

  const getBalance = useCallback(async () => {
    if (account.accountId) {
      setBalance(await accountBalance());
      
    }
  });

  console.log("account", account.accountId)

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  return (
    <>
      <Notification />
      {account.accountId ? (
        <>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>NearAgro</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" onClick={() => navigate("/view_created_products")}>
            <Nav.Link>Created Products</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link eventKey={2}>
              <Wallet
                address={account.accountId}
                amount={balance}
                symbol="NEAR"
                destroy={destroy}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          

<Routes>
 <Route path="/"  element={<Products />} /> 
 <Route path="/view_product_by_id/:id"  element={<ViewProductById />} /> 
 <Route path="/view_created_products"  element={<ViewCreatedProduct accountId = {account.accountId}/>} /> 
 </Routes>


        </>
      ) : (
        <Cover name="NearAgro" login={login} coverImg={coverImg} />
      )}
    </>
  );
};

export default App;
