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
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import { allTypes, allCategories, allTechStacks } from '../../utils_frontend';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, submission: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    case 'UPLOAD_REQUEST':
      return { ...state, loadingUpload: true };
    case 'UPLOAD_SUCCESS':
      return { ...state, loadingUpload: false };
    case 'UPLOAD_FAIL':
      return { ...state, loadingUpload: false, errorUpload: action.payload };

    case 'APPROVE_REQUEST':
      return { ...state, loadingApprove: true };
    case 'APPROVE_SUCCESS':
      return { ...state, loadingApprove: false };
    case 'APPROVE_FAIL':
      return { ...state, loadingApprove: false };

    case 'DELETE_REQUEST':
      return { ...state, loadingDelete: true };
    case 'DELETE_SUCCESS':
      return { ...state, loadingDelete: false };
    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false };
    default:
      return state;
  }
};

export default function SubmissionEditScreen() {
  const navigate = useNavigate();
  const params = useParams();
  const { id: submissionId } = params;
  const { state } = useContext(Store);
  const { userInfo } = state;

  const [
    {
      loading,
      error,
      loadingDelete,
      loadingUpload,
      loadingApprove,
      errorUpload,
      submission,
    },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState([]);
  const [techStack, setTechStack] = useState([]);
  const [type, setType] = useState([]);
  const [cost, setCost] = useState('');
  const [hasCert, setHasCert] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(null);
  const [url, setUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/submissions/${submissionId}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        setName(data.name);
        setSlug(data.slug);
        setCategory(data.category);
        setTechStack(data.techStack);
        setType(data.type);
        setImage(data.image);
        setCost(data.cost);
        setHasCert(data.hasCert);
        setDescription(data.description);
        setRating(data.rating);
        setUrl(data.url);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
        // console.log(data);
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, [submissionId, userInfo]);

  console.log('current submission', submission);

  const uploadFileHandler = async (e) => {
    const image = e.target.files[0];
    const bodyFormData = new FormData();
    // console.log('before', bodyFormData);
    bodyFormData.append('file', image);
    // console.log('after', bodyFormData);
    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const { data } = await axios.post('/api/upload', bodyFormData, {
        headers: {
          // view the request tab in network to see
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: 'UPLOAD_SUCCESS' });
      setImage(data.url);
      toast.success('Image uploaded successfully');
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
    }
  };

  const deleteHandler = async (submission, noToast) => {
    try {
      dispatch({ type: 'DELETE_REQUEST' });
      const { data } = await axios.delete(
        `/api/submissions/${submission._id}`,
        { headers: { Authorization: `Bearer ${userInfo.token}` } }
      );
      dispatch({ type: 'DELETE_SUCCESS' });

      // removing toast when using approveHandler
      if (noToast) {
        return;
      } else {
        toast.success('submission deleted successfully');
        navigate('/admin/submissions');
      }
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'DELETE_FAIL' });
    }
  };

  const approveHandler = async (e) => {
    e.preventDefault();
    const noToast = true;
    try {
      const { data } = await axios.post(
        `/api/submissions/${submissionId}`,
        {
          _id: submissionId,
          name,
          slug,
          image,
          category,
          techStack,
          type,
          cost,
          hasCert,
          description,
          rating,
          url,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      //delete the submission after approve
      deleteHandler(submission, noToast);
      toast.success('Submission approve to the content list');
      navigate('/admin/contents');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  // For react-select categories and types
  const animatedComponents = makeAnimated();

  return (
    <div>
      <Helmet>
        <title>Edit Submission ID {submissionId} </title>
      </Helmet>
      <Container className="small-container mb-5">
        <h3 className="mt-5 mb-5">Edit Submission ID: {submissionId}</h3>
        {loadingDelete && <LoadingBox></LoadingBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <Form onSubmit={approveHandler}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="content name"
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
                  required
                  placeholder="https://www.example.com/"
                />
              </InputGroup>

              <Form.Label>Categories</Form.Label>
              <CreatableSelect
                className="mb-4 basic-multi-select"
                defaultValue={category}
                name="select"
                options={allCategories}
                isMulti
                closeMenuOnSelect={false}
                components={animatedComponents}
                onChange={(category) => setCategory(category)}
              />

              <Form.Label>Technology Stacks</Form.Label>
              <CreatableSelect
                className="mb-4 basic-multi-select"
                defaultValue={techStack}
                name="select"
                options={allTechStacks}
                isMulti
                closeMenuOnSelect={false}
                components={animatedComponents}
                onChange={(techStack) => setTechStack(techStack)}
              />

              <Form.Label>Format of the material</Form.Label>
              <CreatableSelect
                className="mb-5 basic-multi-select"
                defaultValue={type}
                name="select"
                options={allTypes}
                isMulti
                closeMenuOnSelect={false}
                components={animatedComponents}
                onChange={(type) => setType(type)}
              />

              <Row className="mb-4">
                <Col md={10} className="mb-3">
                  <Form.Group>
                    <Form.Label>Image File</Form.Label>
                    <Form.Control
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      required
                      // disabled
                    />
                  </Form.Group>
                </Col>
                <Col md={2} className="positionContainer">
                  <div className="toBePosition">
                    {' '}
                    {loadingUpload && <LoadingBox></LoadingBox>}
                  </div>
                  <div className="imgContainer">
                    <img
                      src={image}
                      className="img-fluid rounded img-thumbnail"
                    ></img>
                  </div>
                </Col>
              </Row>

              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}

              <Form.Group className="mb-4">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/png, image/gif, image/jpeg image/jpg"
                  onChange={uploadFileHandler}
                />
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
                  required
                />
              </Form.Group>

              <div className="mb-5 text-end">
                {loadingApprove && <LoadingBox></LoadingBox>}
                <Button
                  className="me-4"
                  type="button"
                  variant="danger"
                  onClick={() => deleteHandler(submission)}
                >
                  Reject
                </Button>
                <Button
                  variant="success"
                  disabled={loadingApprove}
                  type="submit"
                >
                  Approve
                </Button>
              </div>
            </Form>
          </>
        )}
      </Container>
    </div>
  );
}
