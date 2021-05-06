import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signUp } from "../../store/user/actions";

export default function SignupPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });

  const onFieldChange = (e) => {
    console.log("field change", e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    const { fName, lName, email, password } = formData;
    if (!fName || !lName || !email || !password) {
      alert("Make sure you fill all the form");
    }
    console.log("submnitted value", formData);

    dispatch(signUp(fName, lName, email, password, history));
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
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="firstName"
              placeholder="Enter First name"
              name="fName"
              value={formData.fName}
              onChange={onFieldChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="lastName"
              placeholder="Enter Last name"
              name="lName"
              value={formData.lName}
              onChange={onFieldChange}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={onFieldChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={onFieldChange}
            />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Link to="/login">Login now!</Link>
    </div>
  );
}
