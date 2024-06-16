import React, { useContext, useEffect, useReducer } from 'react';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet-async';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Store } from '../Store';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Content from '../components/Content';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, contents: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function HomeScreen() {
  const [{ loading, error, saves, contents }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  const { state, dispatch: contextDispatch } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchSaves = async () => {
      try {
        const { data } = await axios.get(`/api/users/saves/${userInfo._id}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        contextDispatch({
          type: 'UPDATE_SAVES',
          payload: data,
        });
        localStorage.setItem('userSaves', JSON.stringify(data));
      } catch (err) {
        toast.error(err);
      }
    };
    fetchSaves();
  }, [contextDispatch, userInfo]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const { data } = await axios.get('/api/contents');
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
        console.log(data);
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: '#0c0c0e' }}>
      <Helmet>
        <title>Educere</title>
      </Helmet>
      <div className="box-banner bannerContainer">
        <div className="bannerContent">
          <img src="/images/logo.png" />
          <div className="bannerTextButton">
            <h1>Discover The Right Learning Resources For you</h1>
            <Link to="/search">
              <Button className="bannerButton">Discover New Resources</Button>
            </Link>
          </div>
        </div>
      </div>

      <Container className="w-75">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox></MessageBox>
        ) : (
          <Row>
            {contents.map((content) => (
              <Col key={content._id} sm={6} md={4} lg={3} className="mb-2">
                {' '}
                <Content content={content}></Content>
              </Col>
            ))}
          </Row>
        )}
      </Container>
      <div className="box-banner submission-align">
        <Link to="/submit-content">
          <Button className="submission-button">Submit New Content</Button>
        </Link>
      </div>
      <div className="empty-box"></div>
    </div>
  );
}
