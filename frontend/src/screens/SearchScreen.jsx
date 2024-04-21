import React, { useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Content from '../components/Content';
import { useLocation, useNavigate } from 'react-router-dom';
import { getError } from '../../utils_frontend';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, contents: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function SearchScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);

  const [{ loading, error, contents }, dispatch] = useReducer(reducer, {
    contents: [],
    loading: true,
    error: '',
  });

  const category = searchParams.get('category') || 'all';
  const cost = searchParams.get('cost') || 'cost';
  const query = searchParams.get('query') || 'query';
  const rating = searchParams.get('rating') || 'rating';
  const order = searchParams.get('order') || 'newest';
  const page = searchParams.get('page') || 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `/api/contents/search?page=${page}&query=${query}&category=${category}&cost=${cost}&rating=${rating}&order=${order}`
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
        console.log(data);
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [category, cost, order, page, query, rating]);

  return (
    <div>
      <Helmet>
        <title>Search Content</title>
      </Helmet>
      <div className="box-banner">Banner here</div>

      <Container className="searchContainer">
        <Row className="box-header">header</Row>
        <div className="mb-3">
          <Row>
            <Col md={3} className="box-sidebar">
              filtration
            </Col>
            <Col md={9} className="box-content">
              col-content
              <Row className="box-allContents">
                <div>row all contents</div>
                {contents.map((content) => (
                  <Col sm={6} lg={3} key={content._id} className="colContents">
                    <Content content={content}></Content>
                  </Col>
                ))}
              </Row>
              <div className="box-pagination">pagination</div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="box-banner mb-5">submission</div>
    </div>
  );
}
