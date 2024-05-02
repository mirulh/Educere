import React, { useContext, useEffect, useReducer } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet-async';
import Button from 'react-bootstrap/Button';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import axios from 'axios';
import { Store } from '../Store';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getError } from '../../utils_frontend';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        contents: action.payload.contents,
        page: action.payload.page,
        pages: action.payload.pages,
        loading: false,
        count: action.payload.count,
      };
    case 'FETCH_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'DELETE_REQUEST':
      return {
        ...state,
        loadingDelete: true,
        successDelete: false,
      };
    case 'DELETE_SUCCESS':
      return {
        ...state,
        loadingDelete: false,
        successDelete: true,
      };

    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false, successDelete: false };
    case 'DELETE_RESET':
      return { ...state, loadingDelete: false, successDelete: false };
    case 'CREATE_REQUEST':
      return { ...state, loadingCreate: true };
    case 'CREATE_SUCCESS':
      return { ...state, loadingCreate: false };
    case 'CREATE_FAIL':
      return { ...state, loadingCreate: false };
    default:
      return state;
  }
};

export default function ContentListScreen() {
  const navigate = useNavigate();
  const [
    {
      loading,
      error,
      contents,
      pages,
      loadingDelete,
      successDelete,
      loadingCreate,
      count,
    },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const page = searchParams.get('page') || 1;

  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/contents/admin?page=${page}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err),
        });
        // toast.error(getError(err));
      }
    };
    if (successDelete) {
      dispatch({ type: 'DELETE_RESET' });
    } else {
      fetchData();
    }
  }, [page, userInfo, successDelete]);

  const deleteHandler = async (content) => {
    if (window.confirm('Delete this content?')) {
      try {
        dispatch({ type: 'DELETE_REQUEST' });
        const { data } = await axios.delete(`/api/contents/${content._id}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        // console.log(data.message);
        toast.success('content deleted successfully');
        dispatch({ type: 'DELETE_SUCCESS' });
      } catch (err) {
        toast.error(getError(err));
        dispatch({ type: 'DELETE_FAIL' });
      }
    }
  };

  const createHandler = async () => {
    if (window.confirm('Create a new content?')) {
      try {
        dispatch({ type: 'CREATE_REQUEST' });
        const { data } = await axios.post(
          '/api/contents',
          {},
          {
            headers: { Authorization: `Bearer ${userInfo.token}` },
          }
        );
        toast.success('new content created successfully');
        dispatch({ type: 'CREATE_SUCCESS' });
        navigate(`/admin/content/${data.content._id}`);
      } catch (err) {
        toast.error(getError(err));
        dispatch({ type: 'CREATE_FAIL' });
      }
    }
  };

  console.log('contents', contents);

  return (
    <div>
      <Helmet>
        <title>Contents</title>
      </Helmet>
      <Container>
        <Row className="mt-5 mb-5">
          <Col>
            <h1>Contents List</h1>
          </Col>
          <Col className="col text-end">
            <div className="positionContainer2">
              <div className="toBePosition2">
                {loadingCreate && <LoadingBox></LoadingBox>}
              </div>
              <Button
                variant="warning"
                type="button"
                onClick={createHandler}
                disabled={error}
              >
                Create Content
              </Button>
            </div>
          </Col>
        </Row>
        {loadingDelete && <LoadingBox></LoadingBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>CONTENT ID</th>
                  <th>NAME</th>
                  <th>CATEGORY</th>
                  <th>COST</th>
                  <th>TYPE</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>

              <tbody>
                {contents.map((content, index) => (
                  <tr key={content._id}>
                    <td>{index + 1 + count}</td>
                    <td>{content._id}</td>
                    <td>{content.name}</td>
                    <td>{content.category}</td>
                    <td>{content.cost}</td>
                    <td>
                      {content.type.map((ct, index) => (
                        <li
                          className="list-unstyled"
                          key={index}
                        >{`${ct} `}</li>
                      ))}
                    </td>
                    <td className="text-nowrap">
                      <Button
                        className="me-2"
                        type="button"
                        // variant="light"
                        onClick={() =>
                          navigate(`/admin/content/${content._id}`)
                        }
                      >
                        Edit
                      </Button>
                      <Button
                        type="button"
                        variant="danger"
                        onClick={() => deleteHandler(content)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mb-5">
              {[...Array(pages).keys()].map((x) => (
                <Link
                  className={
                    x + 1 === Number(page) ? 'btn text-bold border' : 'btn'
                  }
                  to={`/admin/contents?page=${x + 1}`}
                  key={x + 1}
                >
                  {x + 1}
                </Link>
              ))}
            </div>
          </>
        )}
      </Container>
    </div>
  );
}
