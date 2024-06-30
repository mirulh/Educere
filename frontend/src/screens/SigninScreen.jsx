import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { Store } from '../Store';
import { getError } from '../../utils_frontend';
import { toast } from 'react-toastify';

export default function SigninScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');

  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch: contextDispatch } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/users/signin', {
        email,
        password,
      });
      console.log('Signed In', JSON.stringify(data, null, 2));
      contextDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate('/');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

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
              <Link to={`/signup?redirect=${redirect}`}>
                Create your account
              </Link>
            </div>
            <div className="mb-3">
              Forget Password?{' '}
              <Link to={`/forget-password`}>Reset Password</Link>
            </div>
          </Form>
        </Container>
      )}
    </div>
  );
}
