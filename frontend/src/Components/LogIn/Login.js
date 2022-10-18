import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = localStorage.getItem("token");
 

  if(token){
    navigate("/compte")
  }

  const handleLogin = async (user) => {
    const res = await axios.post("http://localhost:4200/auth/login", user);
    const token = res.data.token;
    console.log(typeof token);
    await localStorage.setItem("token", res.data.token);
    navigate("/compte");
  };

  return (
    <div>
      <Container>
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button
              onClick={() => handleLogin({ email, password })}
              variant="primary"
            >
              Connect
            </Button>
          </Form>
        </Col>
      </Container>
    </div>
  );
};

export default Login;
