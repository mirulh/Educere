import React, { useContext, useEffect, useReducer } from 'react';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet-async';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Store } from '../Store';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'REQUEST':
//       return { ...state, loading: true };
//     default:
//       return state;
//   }
// };

export default function HomeScreen() {
  // const [{ loading, error, saves }, dispatch] = useReducer(reducer, {
  //   loading: true,
  //   error: '',
  // });

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

  return (
    <div>
      <Helmet>
        <title>Educere</title>
      </Helmet>
      <div className="box-banner">Banner here</div>

      <Container>
        <div className="box-trending">
          <div className="box-header">header</div>
          <div className="box-carousel">carousel</div>
        </div>
        <div className="box-recommend">
          <div className="box-header">header</div>
          <div className="box-category">categories</div>
        </div>
        <div className="box-trending">
          <div className="box-header">header</div>
          <div className="box-carousel">carousel</div>
        </div>
      </Container>
      <div className="box-banner mb-5 submission-align">
        <Link to="/submit-content">
          <Button className="submission-button">Submit New Content</Button>
        </Link>
      </div>
    </div>
  );
}
