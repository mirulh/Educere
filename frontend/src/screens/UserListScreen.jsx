import React, { useContext, useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Store } from '../Store';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { getError } from '../../utils_frontend';
import { toast } from 'react-toastify';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        users: action.payload.users,
        page: action.payload.page,
        pages: action.payload.pages,
        loading: false,
        count: action.payload.count,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    case 'DELETE_REQUEST':
      return { ...state, loadingDelete: true, successDelete: false };
    case 'DELETE_SUCCESS':
      return { ...state, loadingDelete: false, successDelete: true };
    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false };
    case 'DELETE_RESET':
      return { ...state, loadingDelete: false, successDelete: false };
    default:
      return state;
  }
};

export default function UserListScreen() {
  const navigate = useNavigate();
  const [
    { loading, users, pages, error, loadingDelete, successDelete, count },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  // to make the page dynamic to the URL it scans for {page}
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const page = searchParams.get('page') || 1;

  // for undefined, the value is 0
  // console.log(...Array(pages).keys());
  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/users/admin?page=${page}`, {
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
  }, [userInfo, successDelete, page]);

  const deleteHandler = async (user) => {
    /* console.log(
      'Delete This User',
      JSON.stringify(user._id + '|' + user.name, null, 2)
    ); */
    if (window.confirm('Are you sure to delete?')) {
      try {
        dispatch({ type: 'DELETE_REQUEST' });
        const { data } = await axios.delete(`/api/users/${user._id}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        toast.success('user deleted successfully');
        dispatch({ type: 'DELETE_SUCCESS' });
      } catch (err) {
        toast.error(getError(err));
        dispatch({ type: 'DELETE_FAIL' });
      }
    }
  };

  return (
    <div>
      <Helmet>
        <title>Users</title>
      </Helmet>
      <Container>
        <h1 className="mt-5 mb-5">Users List</h1>
        {/* [1] */}
        {loadingDelete && <LoadingBox></LoadingBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="tableContent">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>IS ADMIN</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1 + count}</td>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.isAdmin ? 'YES' : 'NO'}</td>
                    <td className="text-nowrap">
                      <Button
                        type="button"
                        // variant="light"
                        onClick={() => navigate(`/admin/user/${user._id}`)}
                      >
                        Edit
                      </Button>{' '}
                      &nbsp;&nbsp;
                      <Button
                        type="button"
                        variant="danger"
                        onClick={() => deleteHandler(user)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
        <div className="mb-5">
          {[...Array(pages).keys()].map((x) => (
            <Link
              className={
                x + 1 === Number(page) ? 'btn text-bold border' : 'btn'
              }
              to={`/admin/users?page=${x + 1}`}
              key={x + 1}
            >
              {x + 1}
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

/* 

[1] loadingDelete && LoadingBox

this gives the page quick refresh upon delete action 

[2] pages: undefined

tha value of undefined of pages under ...Array().keys() method is 0 since undefined sometimes regarded as having 0 value

*/
