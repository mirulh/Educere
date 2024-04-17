import React, { useContext, useReducer, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { getError } from '../../utils_frontend';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import LoadingBox from '../components/LoadingBox';

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false };
    default:
      return state;
  }
};

export default function ProfileScreen() {
  const { state, dispatch: contextDispatch } = useContext(Store);
  const { userInfo } = state;

  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [{ loadingUpdate }, dispatch] = useReducer(reducer, {
    loadingUpdate: false,
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Password do not match');
      return;
    }
    try {
      dispatch({ type: 'UPDATE_REQUEST' });
      const { data } = await axios.put(
        '/api/users/profile',
        {
          name,
          email,
          password,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` }, // [1]
        }
      );
      dispatch({
        type: 'UPDATE_SUCCESS',
      });
      // console.log(data.message); found user
      contextDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      toast.success('User Updated Successfully');
    } catch (err) {
      dispatch({ type: 'UPDATE_FAIL' });
      toast.error(getError(err));
    }
  };
  return (
    <div>
      <Helmet>
        <title>User Profile</title>
      </Helmet>
      <Container className="small-container">
        <h1 className="mt-5 mb-5">User Profile</h1>
        <Form onSubmit={submitHandler}>
          {/*  */}
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              placeholder="leave blank to keep the same"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              placeholder="leave blank to keep the same"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          <div className="mb-3">
            <Button disabled={loadingUpdate} type="submit">
              Update
            </Button>
            {loadingUpdate && <LoadingBox></LoadingBox>}
          </div>
        </Form>
      </Container>
    </div>
  );
}

/* References


[1] Bearer in token

The addition of the word "Bearer" before the token in the Authorization header serves as a type of credential type indication. It tells the server how the token should be used.

The inclusion of "Bearer" in the Authorization header before the token is a necessary part of the HTTP header syntax when using bearer tokens for authentication. According to the HTTP specification (RFC 6750), the format of the Authorization header for bearer tokens is:

Authorization: Bearer <token>

*/
