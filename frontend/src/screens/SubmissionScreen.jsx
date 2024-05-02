import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/Container';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getError } from '../../utils_frontend';
import axios from 'axios';
import { Store } from '../Store';
import InputGroup from 'react-bootstrap/InputGroup';
import { toast } from 'react-toastify';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_REQUEST':
      return { ...state, loadingCreate: true };
    case 'CREATE_SUCCESS':
      return { ...state, loadingCreate: false, successCreate: true };
    case 'CREATE_FAIL':
      return { ...state, loadingCreate: false, error: action.payload };
    case 'CREATE_RESET':
      return { ...state, successCreate: false };
    default:
      return state;
  }
};

export default function SubmissionScreen() {
  const [{ loadingCreate, successCreate, error }, dispatch] = useReducer(
    reducer,
    {
      loadingCreate: false,
      error: '',
    }
  );

  const { state } = useContext(Store);
  const { userInfo } = state;

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [hasCert, setHasCert] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    setName('');
    setCost('');
    setHasCert('');
    setDescription('');
    setUrl('');

    if (successCreate) {
      dispatch({ type: 'CREATE_RESET' });
    }
  }, [successCreate]);

  console.log('success create', successCreate);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'CREATE_REQUEST' });
      const { data } = await axios.post(
        `/api/submissions/create`,
        {
          name,
          cost,
          hasCert,
          description,
          url,
        },
        { headers: { Authorization: `Bearer ${userInfo.token}` } }
      );
      dispatch({ type: 'CREATE_SUCCESS' });
      toast.success('Submission successfully created');
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'CREATE_FAIL', payload: getError(err) });
    }
  };
  return (
    <div>
      <Helmet>Submit a new content</Helmet>
      <Container className="small-container mb-5">
        <h3 className="mt-5 mb-4">Submit a new content</h3>
        <p className="mb-4">
          <i>
            You are expected to provide, at minimum, the link to the website.
            You can opt to not fill out the rest if you wish.
          </i>
        </p>
        {loadingCreate ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <Form onSubmit={submitHandler}>
              <Form.Label>Website URL *</Form.Label>
              <InputGroup className="mb-4">
                <InputGroup.Text>URL</InputGroup.Text>
                <Form.Control
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                  placeholder="https://www.example.com/"
                />
              </InputGroup>

              <Form.Group className="mb-4">
                <Form.Label>Website Name</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="content name"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>
                  Are the materials provided free, paid, or a mixed of both?
                </Form.Label>
                <Form.Control
                  //   className="w-25"
                  className="selectWidth"
                  as="select"
                  size="sm"
                  onChange={(e) => setCost(e.target.value)}
                >
                  <option value="Free">Free</option>
                  <option value="Paid">Paid</option>
                  <option value="Free/Paid">Free/Paid</option>
                </Form.Control>
                <div className="chevronContainer">
                  <i className="fa-solid fa-chevron-down chevronPosition "></i>
                </div>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>
                  Does the website provide certification on its
                  materials/courses?
                </Form.Label>
                <Form.Control
                  className="selectWidth"
                  as="select"
                  size="sm"
                  onChange={(e) => setHasCert(e.target.value)}
                >
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                  <option value="false">I don&apos;t know</option>
                </Form.Control>
                <div className="chevronContainer">
                  <i className="fa-solid fa-chevron-down chevronPosition "></i>
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Describe the content, what it is about?</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="otherwise, leave blank"
                />
              </Form.Group>

              <div className="mb-5 text-end">
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </>
        )}
      </Container>
    </div>
  );
}
