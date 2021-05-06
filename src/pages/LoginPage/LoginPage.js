import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "../../store/user/actions";

export default function LoginPage() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // SUBMIT HANDELER
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Make sure you fill both the email and password");
    }
    console.log("login", email, password);
    dispatch(logIn(email, password));
  };
  return (
    <div
      style={{
        width: "500px",
        marginLeft: "20%",
        marginTop: "100px",
        boxShadow: "2px 8px 20px #ddd",
        padding: "20px",
        borderRadius: "10px",
      }}>
      <Form onSubmit={onFormSubmit}>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Login</Button>
          </Col>
        </Form.Group>
      </Form>
      <Link to="/signup">Signup now!</Link>
    </div>
  );
}
