import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageBox from '../components/MessageBox';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap';
import { getError } from '../../utils_frontend';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function SavedScreen() {
  const navigate = useNavigate();
  const { state, dispatch: contextDispatch } = useContext(Store);

  const {
    userInfo,
    userSaves: { numSaves, saves },
  } = state;

  console.log(numSaves);
  console.log(saves);

  const removeFromSave = async (save) => {
    try {
      const { data } = await axios.post(
        `/api/users/save`,
        {
          contentId: save._id,
          contentName: save.name,
          contentSlug: save.slug,
          contentUrl: save.url,
        },
        { headers: { Authorization: `Bearer ${userInfo.token}` } }
      );
      contextDispatch({
        type: 'UPDATE_SAVES',
        payload: data,
      });
      localStorage.setItem('userSaves', JSON.stringify(data));
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <div>
      <Helmet>
        <title>Saved Page</title>
      </Helmet>
      <Container>
        <h3 className="mt-5 mb-5">Your Saved Content</h3>
        <Row>
          <Col md={8} className="mb-3">
            {saves.length === 0 ? (
              <MessageBox>
                Page is empty. <Link to="/search">Find more content</Link>
              </MessageBox>
            ) : (
              // <div>No its not</div>
              <ListGroup>
                {saves.map((save, index) => (
                  <ListGroup.Item key={save._id} className="pt-3">
                    <Row>
                      <Col md={1} className="mb-3">
                        <Badge bg="dark">{index + 1}</Badge>
                      </Col>
                      <Col md={5}>
                        <Link to={`/content/${save.slug}`}>{save.name}</Link>
                      </Col>
                      <Col md={5}>
                        Visit website &nbsp;
                        <a
                          href={save.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                      </Col>
                      <Col md={1} className="text-end">
                        <Button
                          onClick={() => removeFromSave(save)}
                          variant="light"
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Col>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h4>Total Content: {numSaves}</h4>
                  </ListGroup.Item>
                  {numSaves > 0 && (
                    <ListGroup.Item>
                      Need more content?
                      <Link to="/search" className="d-grid mt-3">
                        <Button type="button">Add More</Button>
                      </Link>
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
