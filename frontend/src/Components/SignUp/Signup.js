import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { userSignup } from "../../Api/auth";

const Signup = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");



  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (newuser) => {
    await userSignup(newuser);
    navigate("/login");
  };

  return (
    <div>
      <Container>
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </Form.Group>

            <Button
              onClick={() => handleSignUp({ email, name, password })}
              variant="primary"
            >
              SignUp
            </Button>
          </Form>
        </Col>
      </Container>
    </div>
  );
};

export default Signup;
