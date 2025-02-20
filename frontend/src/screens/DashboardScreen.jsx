import React, { useContext, useEffect, useReducer } from 'react';
import { Store } from '../Store';
import axios from 'axios';
import { getError } from '../../utils_frontend';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/Container';
import { Chart } from 'react-google-charts';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, summary: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function DashboardScreen() {
  const [{ loading, summary, error }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/dashboard/summary', {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        //console.log('this is data', data);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [userInfo]);

  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <Container>
        <h1 className="mt-5 mb-5">Dashboard</h1>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox></MessageBox>
        ) : (
          <div>
            <Row>
              <Col md={4}>
                <Card className="dashboardBackground">
                  <Card.Body>
                    <Card.Title>
                      {summary.contents && summary.contents[0]
                        ? summary.contents[0].numContents
                        : 0}
                    </Card.Title>
                    <Card.Text>Contents</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="dashboardBackground">
                  <Card.Body>
                    <Card.Title>
                      {summary.users && summary.users[0]
                        ? summary.users[0].numUsers
                        : 0}
                    </Card.Title>
                    <Card.Text>Users</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="dashboardBackground">
                  <Card.Body>
                    <Card.Title>
                      {summary.admins && summary.admins[0]
                        ? summary.admins[0].numAdmins
                        : 0}
                    </Card.Title>
                    <Card.Text>Admins</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Card className="mt-5 dashboardBackground">
              <div className="p-5">
                <h2>Categories: {summary.numCategory}</h2>
              </div>
              <Card.Body>
                {summary.contentCategories.length === 0 ? (
                  <MessageBox>No Category</MessageBox>
                ) : (
                  <Chart
                    width="100%"
                    height="600px"
                    chartType="PieChart"
                    loader={<div>Loading Chart...</div>}
                    data={[
                      ['Category', 'Count'],
                      ...summary.contentCategories.map((x) => [x._id, x.count]),
                    ]}
                  ></Chart>
                )}
              </Card.Body>
            </Card>
            <Card className="mt-5 dashboardBackground">
              <div className="p-5">
                <h2>Technologies: {summary.numTechStack}</h2>
              </div>
              {summary.contentTechStacks.length === 0 ? (
                <MessageBox>No TechStack</MessageBox>
              ) : (
                <Chart
                  width="100%"
                  height="600px"
                  chartType="PieChart"
                  loader={<div>Loading Chart...</div>}
                  data={[
                    ['TechStack', 'Count'],
                    ...summary.contentTechStacks.map((x) => [x._id, x.count]),
                  ]}
                ></Chart>
              )}
            </Card>
            <Card className="mt-5 mb-5 dashboardBackground">
              <div className="p-5">
                <h2>Content Types: {summary.numType}</h2>
              </div>
              {summary.contentTypes.length === 0 ? (
                <MessageBox>No Types</MessageBox>
              ) : (
                <Chart
                  width="100%"
                  height="600px"
                  chartType="PieChart"
                  loader={<div>Loading Chart...</div>}
                  data={[
                    ['Type', 'Count'],
                    ...summary.contentTypes.map((x) => [x._id, x.count]),
                  ]}
                ></Chart>
              )}
            </Card>
          </div>
        )}
      </Container>
    </div>
  );
}
