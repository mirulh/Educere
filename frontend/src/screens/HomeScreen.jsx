import React, { useContext, useEffect, useReducer, useState } from 'react';
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
import { getError } from '../../utils_frontend';

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

  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [techStacks, setTechStacks] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/contents/filters`);
        setCategories(data.categories);
        setTypes(data.types);
        setTechStacks(data.techStacks);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);

  let ws;
  const proto = window.location.protocol === 'https:' ? 'wss' : 'ws';
  ws = new WebSocket(`${proto}://${window.location.host}`);
  ws.onmessage = (event) => {console.log(event.data)};
  console.log('hi mom')

  return (
    // <div style={{ backgroundColor: '#0c0c0e' }}>
    <div className="homeBackground">
      <Helmet>
        <title>Educere</title>
      </Helmet>
      <div className="box-banner bannerContainer">
        <div className="bannerContent">
          <img className="bannerImage" src="/images/logo.png" />
          <div className="bannerTextButton">
            <h1>Discover The Right Learning Resources For You</h1>
            <Link to="/search">
              <Button variant="secondary" className="bannerButton">
                Discover New Resources
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Container>
        <Row className="splashContainer">
          <Col md={6} lg={7} className="splashDetailsContainer">
            <h1 className="splashTitle">Empowering Your Tech Journey</h1>
            <div className="splashDescription">
              Discover, Review, Contribute. Streamline your learning journey in
              Computer Science and Information Technology with our curated
              resources.{' '}
            </div>
          </Col>
          <Col md={6} lg={5} className="splashImageContainer">
            <img className="splashImage" src="/images/splash.png" alt="" />
          </Col>
        </Row>

        <Row className="cardFilters">
          <h4 className="text-light">Navigate by Tags</h4>

          <Col xl={3} lg={5} md={12} sm={12} className="subjectCard">
            <h4 className="verticalTitle">Subject Areas</h4>
            <div className="cardContainer">
              <img className="cardNavImage" src="/images/splash3.png" alt="" />
              <div className="cardTags">
                {categories.map((c, index) => (
                  <Link key={index} to={`/search?category=${c.value}`}>
                    <Badge bg="success" text="dark" pill className="me-2">
                      {c.label}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </Col>
          <Col xl={3} lg={5} md={12} sm={12} className="techCard">
            <h4 className="verticalTitle">Technologies</h4>
            <div className="cardContainer">
              <img className="cardNavImage" src="/images/splash2.png" alt="" />
              <div className="cardTags">
                {techStacks.map((ts, index) => (
                  <Link key={index} to={`/search?techStack=${ts.value}`}>
                    <Badge bg="warning" text="dark" pill className="me-2">
                      {ts.label}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </Col>
          <Col xl={3} lg={5} md={12} sm={12} className="typeCard">
            <h4 className="verticalTitle">Content Types</h4>
            <div className="cardContainer">
              <img className="cardNavImage" src="/images/splash4.png" alt="" />
              <div className="cardTags">
                {types.map((t, index) => (
                  <Link key={index} to={`/search?type=${t.value}`}>
                    <Badge bg="primary" text="dark" pill className="me-2">
                      {t.label}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="box-banner submission-align">
        <h4>Help us Expand?</h4>
        <Link to="/submit-content">
          <Button className="submission-button">Submit New Content</Button>
        </Link>
      </div>
      <div className="empty-box"></div>
    </div>
  );
}
