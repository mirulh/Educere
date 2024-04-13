import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { Store } from '../Store';

export default function SigninScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userInfo = null; // retrieve userInfo from Store,js

  const submitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      {!userInfo && (
        <Container className="small-container">
          <h1 className="mt-5 mb-5">Sign In</h1>
          <Form onSubmit={submitHandler}>
            {/*  */}
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="mb-3">
              <Button type="submit">Sign In</Button>
            </div>
            <div className="mb-3">
              New customer?&nbsp;
              <Link to="/signup">Create your account</Link>
            </div>
          </Form>
        </Container>
      )}
    </div>
  );
}
