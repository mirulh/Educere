import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import { getError } from '../../utils_frontend';
import { toast } from 'react-toastify';
import Axios from 'axios';
import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ForgetPasswordScreen() {
  const navigate = useNavigate();
  //   const { search } = useLocation();
  //   const redirectInUrl = new URLSearchParams(search).get('redirect');
  //   const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');

  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('/api/users/forget-password', {
        email,
      });
      toast.success(data.message);
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <Container className="small-container profileBackground">
      <Helmet>
        <title>Forget Password</title>
      </Helmet>
      <h1 className="my-3">Forget Password</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <div className="mb-3">
          <Button type="submit">submit</Button>
        </div>
      </Form>
    </Container>
  );
}
