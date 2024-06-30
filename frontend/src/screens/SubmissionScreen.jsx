import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/Container';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Store } from '../Store';
import InputGroup from 'react-bootstrap/InputGroup';
import { toast } from 'react-toastify';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import { useNavigate } from 'react-router-dom';
import {
  allCategories,
  allTypes,
  convertArraySlug,
  extractSDL,
  getError,
  allTechStacks,
} from '../../utils_frontend';

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
  const navigate = useNavigate();
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
  const [category, setCategory] = useState([]);
  const [techStack, setTechStack] = useState([]);
  const [type, setType] = useState([]);
  const [cost, setCost] = useState('');
  const [hasCert, setHasCert] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(null);
  const [url, setUrl] = useState('');

  // for rating
  const [hover, setHover] = useState(null);

  useEffect(() => {
    setName('');
    setCategory([]);
    setTechStack([]);
    setType([]);
    setCost('');
    setHasCert('');
    setDescription('');
    setRating(null);
    setUrl('');

    if (successCreate) {
      dispatch({ type: 'CREATE_RESET' });
    }
  }, [successCreate]);

  console.log('success create', successCreate);

  const submitHandler = async (e) => {
    e.preventDefault();
    // if (rating === null) {
    //   toast.error('Please enter a rating!');
    //   return;
    // }
    try {
      dispatch({ type: 'CREATE_REQUEST' });
      const { data } = await axios.post(
        `/api/submissions/create`,
        {
          name,
          category,
          techStack,
          type,
          cost,
          hasCert,
          description,
          rating,
          url,
        },
        { headers: { Authorization: `Bearer ${userInfo.token}` } }
      );
      dispatch({ type: 'CREATE_SUCCESS' });
      toast.success('Submission successfully created');
      navigate('/');
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'CREATE_FAIL', payload: getError(err) });
    }
  };

  useEffect(() => {
    const contentName = extractSDL(url);
    setName(contentName);
  }, [url]);

  // For react-select categories and types
  const animatedComponents = makeAnimated();

  console.log('category here', category);
  console.log('rating', rating);
  return (
    <div>
      <Helmet>Submit a new content</Helmet>
      <Container className="small-container mb-5">
        <h3 className="mt-5 mb-4">Submit a new content</h3>
        <p className="mb-4">
          <i>
            You are expected to provide, at minimum,{' '}
            <b>the link to the website</b>. You can opt to not fill out the rest
            if you wish to do so.
          </i>
        </p>
        {loadingCreate ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <Form onSubmit={submitHandler}>
              <Form.Label>Content / website URL *</Form.Label>
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
                <Form.Label>Content / website Name</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="content name"
                  readOnly
                />
              </Form.Group>
              {/* 
              <Form.Label>
                Rate your experience using this material *
              </Form.Label>
              <Form.Group className="mb-4">
                {[...Array(5)].map((star, index) => {
                  const currentRating = index + 1;
                  return (
                    <Form.Label key={index}>
                      <Form.Check
                        type="radio"
                        name="option"
                        value={currentRating}
                        onChange={() => setRating(currentRating)}
                      ></Form.Check>
                      <span
                        className={
                          currentRating <= (hover || rating)
                            ? 'fa-solid fa-star fa-xl'
                            : 'fa-regular fa-star fa-xl'
                        }
                        style={{ color: '#ffc107' }}
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}
                      ></span>
                    </Form.Label>
                  );
                })}
              </Form.Group> */}

              <Form.Label>Describe content subject area</Form.Label>
              <CreatableSelect
                className="mb-4 basic-multi-select"
                name="select"
                options={allCategories}
                isMulti
                closeMenuOnSelect={false}
                components={animatedComponents}
                onChange={(category) => setCategory(convertArraySlug(category))}
              />
              <Form.Label>
                Describe any technologies the content offers
              </Form.Label>
              <CreatableSelect
                className="mb-4 basic-multi-select"
                name="select"
                options={allTechStacks}
                isMulti
                closeMenuOnSelect={false}
                components={animatedComponents}
                onChange={(techStack) =>
                  setTechStack(convertArraySlug(techStack))
                }
              />
              <Form.Label>Describe content type</Form.Label>
              <CreatableSelect
                className="mb-5 basic-multi-select"
                name="select"
                options={allTypes}
                isMulti
                closeMenuOnSelect={false}
                components={animatedComponents}
                onChange={(type) => setType(convertArraySlug(type))}
              />
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
                  <i className="fa-solid fa-caret-down chevronPosition"></i>
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
                  <i className="fa-solid fa-caret-down chevronPosition"></i>
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
