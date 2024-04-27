import React, { useEffect, useReducer, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Content from '../components/Content';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getError } from '../../utils_frontend';
import { toast } from 'react-toastify';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';

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
        countContents: action.payload.countContents,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const ratings = [
  {
    rating: 4,
    name: '4 stars & up',
  },
  {
    rating: 3,
    name: '3 stars & up',
  },
  {
    rating: 2,
    name: '2 stars & up',
  },
  {
    rating: 1,
    name: '1 star & up',
  },
];

export default function SearchScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  // eg. search: ?category=network

  /*   console.log('search', search);
  console.log('search Params', searchParams);
 */

  // IMPORTANT! all initial values except for searchTerm does not exist in query.

  const searchTerm = searchParams.get('searchTerm') || 'all';
  const category = searchParams.get('category') || 'all';
  const cost = searchParams.get('cost') || 'all';
  const type = searchParams.get('type') || 'all';
  const rating = searchParams.get('rating') || 'all';
  const order = searchParams.get('order') || 'newest';
  const page = searchParams.get('page') || 1;

  console.log(
    'searchParams: searchTerm | category | cost | type | rating | order | page |'
  );
  console.log(
    `Output: ${searchTerm} | ${category} |${cost} |${type} |${rating} | ${order} | ${page} |`
  );

  const [{ loading, error, contents, pages, countContents }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `/api/contents/search?searchTerm=${searchTerm}&category=${category}&cost=${cost}&type=${type}&rating=${rating}&order=${order}&page=${page}`
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
        console.log('skipVal: ', data.skipValue);
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [category, cost, order, page, searchTerm, rating, type]);

  console.log('Contents', contents);
  console.log('Page | Pages | countContents');
  console.log(`${page}    |     ${pages} |    ${countContents}`);
  const [categories, setCategories] = useState([]);
  const [costs, setCosts] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/contents/filters`);
        setCategories(data.categories);
        setCosts(data.costs);
        setTypes(data.types);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, [dispatch]);

  const getFilterUrl = (filter) => {
    const filterSearchTerm = filter.searchTerm || searchTerm;
    const filterCategory = filter.category || category;
    const filterCost = filter.cost || cost;
    const filterType = filter.type || type;
    const filterRating = filter.rating || rating;
    const filterOrder = filter.order || order;
    const filterPage = filter.page || page;

    return `/search?searchTerm=${filterSearchTerm}&category=${filterCategory}&cost=${filterCost}&type=${filterType}&rating=${filterRating}&order=${filterOrder}&page=${filterPage}`;
  };

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
              <h3>Categories</h3>
              <div>
                <ul>
                  <li>
                    <Link
                      className={category === 'all' ? 'text-bold' : ''}
                      to={getFilterUrl({ category: 'all' })}
                    >
                      All
                    </Link>
                  </li>
                  {categories.map((c) => (
                    <li key={c}>
                      <Link
                        className={category === c ? 'text-bold' : ''}
                        to={getFilterUrl({ category: c })}
                      >
                        {c}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <h3>Cost</h3>
              <div>
                <ul>
                  <li>
                    <Link
                      className={cost === 'all' ? 'text-bold' : ''}
                      to={getFilterUrl({ cost: 'all' })}
                    >
                      All
                    </Link>
                  </li>
                  {costs.map((c) => (
                    <li key={c}>
                      <Link
                        className={cost === c ? 'text-bold' : ''}
                        to={getFilterUrl({ cost: c })}
                      >
                        {c}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <h3>Types</h3>
              <div>
                <ul>
                  <li>
                    <Link
                      className={type === 'all' ? 'text-bold' : ''}
                      to={getFilterUrl({ type: 'all' })}
                    >
                      All
                    </Link>
                  </li>
                  {types.map((t) => (
                    <li key={t}>
                      <Link
                        className={type === t ? 'text-bold' : ''}
                        to={getFilterUrl({ type: t })}
                      >
                        {t}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <h3>Avg. Reviews</h3>
              <div>
                <ul>
                  {ratings.map((r) => (
                    <li key={r.name}>
                      <Link to={getFilterUrl({ rating: r.rating })}>
                        <Rating caption={' & up'} rating={r.rating}></Rating>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={9} className="box-content">
              {loading ? (
                <LoadingBox></LoadingBox>
              ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
              ) : (
                <>
                  <Row className="justify-content-between mb-3">
                    <Col>
                      {/* Filters */}
                      <div>
                        {countContents === 0 ? 'No' : countContents} Results
                        {searchTerm !== 'all' && ' | ' + searchTerm}
                        {category !== 'all' && ' | ' + category}
                        {cost !== 'all' && ' | ' + cost}
                        {type !== 'all' && ' | ' + type}
                        {rating !== 'all' && ' | Rating ' + rating + ' & up'}
                        {/* Button Condition */}
                        {searchTerm !== 'all' ||
                        category !== 'all' ||
                        cost !== 'all' ||
                        type !== 'all' ||
                        rating !== 'all' ? (
                          <Button
                            className="bg-transparent border-0"
                            variant="light"
                            // size="sm"
                            onClick={() => navigate('/search')}
                          >
                            <i className="fas fa-times-circle" />
                          </Button>
                        ) : null}
                      </div>
                    </Col>
                    <Col className="text-end">
                      Sort by{' '}
                      <select
                        size="sm"
                        value={order}
                        onChange={(e) => {
                          navigate(getFilterUrl({ order: e.target.value }));
                        }}
                      >
                        <option value="latest">Latest Added</option>
                        <option value="oldest">Oldest Added</option>
                        <option value="topRated">Most Popular</option>
                        <option value="lowRated">Least Popular</option>
                      </select>
                    </Col>
                  </Row>
                  {/* col-content */}
                  <Row className="box-allContents">
                    <div>row all contents</div>
                    {contents.map((content) => (
                      <Col
                        sm={6}
                        lg={3}
                        key={content._id}
                        className="colContents"
                      >
                        <Content content={content}></Content>
                      </Col>
                    ))}
                  </Row>
                  <div className="box-pagination">
                    {/* <div>pagination</div> */}
                    {[...Array(pages).keys()].map((x) => (
                      <Link
                        key={x + 1}
                        className="mx-1"
                        to={{
                          pathname: '/search',
                          search: getFilterUrl({ page: x + 1 }, true),
                        }}
                      >
                        <Button
                          className={
                            Number(page) === x + 1 ? '' : 'text-black-50'
                          }
                          variant="light"
                        >
                          {x + 1}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </Col>
          </Row>
        </div>
      </Container>
      <div className="box-banner mb-5">submission</div>
    </div>
  );
}
