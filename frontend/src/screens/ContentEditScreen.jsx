import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/Container';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Store } from '../Store';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { getError } from '../../utils_frontend';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
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

export default function ContentEditScreen() {
  const navigate = useNavigate();
  const params = useParams();
  const { id: contentId } = params;
  const { state } = useContext(Store);
  const { userInfo } = state;

  const [{ loading, error, loadingUpdate, loadingUpload }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });

  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [cost, setCost] = useState('');
  const [hasCert, setHasCert] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/contents/${contentId}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        setName(data.name);
        setSlug(data.slug);
        setUrl(data.url);
        setImage(data.image);
        setCategory(data.category);
        setCost(data.cost);
        setHasCert(data.hasCert);
        setDescription(data.description);
        dispatch({ type: 'FETCH_SUCCESS' });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, [contentId, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'UPDATE_REQUEST' });
      await axios.put(
        `/api/contents/${contentId}`,
        {
          _id: contentId,
          name,
          slug,
          url,
          image,
          cost,
          hasCert,
          description,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: 'UPDATE_SUCCESS',
      });
      toast.success('Content Updated Successfully');
      navigate('/admin/contents');
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'UPDATE_FAIL' });
    }
  };

  const uploadFileHandler = async (e) => {};

  return (
    <div>
      <Helmet>
        <title>Edit Content ID {contentId} </title>
      </Helmet>
      <Container className="small-container mb-5">
        <h3 className="mt-5 mb-5">Edit Content ID: {contentId}</h3>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Slug</Form.Label>
                <Form.Control
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Label>Website URL</Form.Label>
              <InputGroup className="mb-4">
                <InputGroup.Text>URL</InputGroup.Text>
                <Form.Control
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </InputGroup>

              <Row className="mb-4">
                <Col md={10} className="mb-3">
                  <Form.Group>
                    <Form.Label>Image File</Form.Label>
                    <Form.Control
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      required
                      disabled
                    />
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <img
                    src={image}
                    className="img-fluid rounded img-thumbnail"
                  ></img>
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control type="file" onChange={uploadFileHandler} />
                {loadingUpload && <LoadingBox></LoadingBox>}
              </Form.Group>

              <Row className="mb-4">
                <Col>
                  <Form.Group className="mb-4">
                    <Form.Label>Cost</Form.Label>
                    <Form.Control
                      as="select"
                      size="sm"
                      onChange={(e) => setCost(e.target.value)}
                    >
                      <option value={cost}>{cost}</option>
                      <option value="Free">Free</option>
                      <option value="Paid">Paid</option>
                      <option value="Free/Paid">Free/Paid</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Label></Form.Label>
                  <Form.Check
                    label="provide certification"
                    className="mt-2"
                    type="checkbox"
                    id="hasCert"
                    checked={hasCert}
                    onChange={(e) => setHasCert(e.target.checked)}
                  />
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>

              <div className="mb-5 text-end">
                {loadingUpdate && <LoadingBox></LoadingBox>}
                <Button disabled={loadingUpdate} type="submit">
                  Update
                </Button>
              </div>
            </Form>
          </>
        )}
      </Container>
    </div>
  );
}
