import React, { useContext, useEffect, useReducer } from 'react';
import { Store } from '../Store';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getError } from '../../utils_frontend';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        submissions: action.payload.submissions,
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
      return { ...state, loadingDelete: true, successDelete: false };
    case 'DELETE_SUCCESS':
      return { ...state, loadingDelete: false, successDelete: true };
    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false, successDelete: false };
    case 'DELETE_RESET':
      return { ...state, loadingDelete: false, successDelete: false };
    default:
      return state;
  }
};

export default function SubmissionListScreen() {
  const navigate = useNavigate();
  const [
    { loading, error, submissions, pages, loadingDelete, successDelete, count },
    dispatch,
  ] = useReducer(reducer, {
    count: 0,
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
        const { data } = await axios.get(
          `/api/submissions/admin?page=${page}`,
          {
            headers: { Authorization: `Bearer ${userInfo.token}` },
          }
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
        console.log(data);
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
        // toast.error(getError(err));
      }
    };
    if (successDelete) {
      dispatch({ type: 'DELETE_RESET' });
    } else {
      fetchData();
    }
  }, [page, successDelete, userInfo]);

  const deleteHandler = async (submission) => {
    if (window.confirm('Delete this submission?')) {
      try {
        dispatch({ type: 'DELETE_REQUEST' });
        const { data } = await axios.delete(
          `/api/submissions/${submission._id}`,
          { headers: { Authorization: `Bearer ${userInfo.token}` } }
        );
        dispatch({ type: 'DELETE_SUCCESS' });
        toast.success('submission rejected successfully');
        navigate('/admin/submissions');
      } catch (err) {
        toast.error(getError(err));
        dispatch({ type: 'DELETE_FAIL' });
      }
    }
  };

  const approveHandler = async (submission) => {
    if (window.confirm('Approve this submission?')) {
      try {
        const { data } = await axios.post(
          `/api/submissions/${submission._id}`,
          {
            _id: submission._id,
            name: submission.name,
            slug: submission.slug,
            image: submission.image,
            category: submission.category,
            techStack: submission.techStack,
            type: submission.type,
            cost: submission.cost,
            hasCert: submission.hasCert,
            description: submission.description,
            rating: submission.rating,
            url: submission.url,
          },
          {
            headers: { Authorization: `Bearer ${userInfo.token}` },
          }
        );
        toast.success('Submission is approved');
      } catch (err) {
        toast.error(getError(err));
      }

      // delete submission after approve
      try {
        dispatch({ type: 'DELETE_REQUEST' });
        const { data } = await axios.delete(
          `/api/submissions/${submission._id}`,
          { headers: { Authorization: `Bearer ${userInfo.token}` } }
        );
        dispatch({ type: 'DELETE_SUCCESS' });
        navigate('/admin/submissions');
      } catch (err) {
        toast.error(getError(err));
        dispatch({ type: 'DELETE_FAIL' });
      }
    }
  };

  return (
    <div>
      <Helmet>
        <title>Submissions</title>
      </Helmet>
      <Container className="submissionContainer">
        <h1 className="mt-5 mb-5">Submission List</h1>
        {loadingDelete && <LoadingBox></LoadingBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <Table striped bordered hover>
              <thead>
                <tr className="text-center">
                  <th>No.</th>
                  <th>URL</th>
                  <th>NAME</th>
                  <th>CATEGORY</th>
                  <th>TECH</th>
                  <th>TYPE</th>
                  <th>COST</th>
                  <th colSpan={2} className="w-25">
                    ACTIONS
                  </th>
                </tr>
              </thead>

              <tbody>
                {submissions.map((submission, index) => (
                  <tr key={submission._id}>
                    <td>{index + 1 + count}</td>
                    <td>
                      <a
                        href={submission.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {submission.url}
                      </a>
                    </td>
                    <td>{submission.name}</td>
                    <td>
                      {submission.category.map((ct, index) => (
                        <li
                          className="list-unstyled"
                          key={index}
                        >{`${ct.label}`}</li>
                      ))}
                    </td>
                    <td>
                      {submission.techStack.map((ts, index) => (
                        <li
                          className="list-unstyled"
                          key={index}
                        >{`${ts.label}`}</li>
                      ))}
                    </td>
                    <td>
                      {submission.type.map((ct, index) => (
                        <li
                          className="list-unstyled"
                          key={index}
                        >{`${ct.label}`}</li>
                      ))}
                    </td>
                    <td>{submission.cost}</td>
                    <td className="text-nowrap d-flex justify-content-evenly">
                      <Button
                        type="button"
                        className="me-2"
                        variant="success"
                        onClick={() => approveHandler(submission)}
                      >
                        Approve
                      </Button>
                      <Button
                        type="button"
                        className="me-2"
                        variant="danger"
                        onClick={() => deleteHandler(submission)}
                      >
                        Reject
                      </Button>
                    </td>
                    <td>
                      <Button
                        type="button"
                        // variant="light"
                        onClick={() =>
                          navigate(`/admin/submission/${submission._id}`)
                        }
                      >
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="mb-5">
              {[...Array(pages).keys()].map((x) => (
                <Link
                  key={x + 1}
                  className={
                    x + 1 === Number(page) ? 'btn text-border border' : 'btn'
                  }
                  to={`/admin/submissions?page=${x + 1}`}
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
