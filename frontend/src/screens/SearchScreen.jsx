import React, { useContext, useEffect, useReducer, useState } from 'react';
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
import { Store } from '../Store';
import CollapsibleCategory from '../components/CollapsibleCategory';
import CollapsibleType from '../components/CollapsibleType';
import CollapsibleTechStack from '../components/CollapsibleTechStack';
import {
  CollapsibleCost,
  CollapsibleRating,
} from '../components/CollapsibleFilters';

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
    case 'FETCH_RESET':
      return { ...state, loading: false };
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

  // IMPORTANT! all initial values except for searchTerm does not exist in query.

  const searchTerm = searchParams.get('searchTerm') || 'all';
  const category = searchParams.get('category') || 'all';
  const techStack = searchParams.get('techStack') || 'all';
  const cost = searchParams.get('cost') || 'all';
  const type = searchParams.get('type') || 'all';
  const rating = searchParams.get('rating') || 'all';
  const order = searchParams.get('order') || 'newest';
  const page = searchParams.get('page') || 1;

  const [{ loading, error, contents, pages, countContents }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });

  const { state } = useContext(Store);
  const { userSaves, userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `/api/contents/search?searchTerm=${searchTerm}&category=${category}&techStack=${techStack}&cost=${cost}&type=${type}&rating=${rating}&order=${order}&page=${page}`
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
        // console.log('skipVal: ', data.skipValue);
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [category, cost, order, page, searchTerm, rating, type, techStack]);

  // console.log('Contents', contents);
  // console.log('Page | Pages | countContents');
  // console.log(`${page}    |     ${pages} |    ${countContents}`);
  const [categories, setCategories] = useState([]);
  const [costs, setCosts] = useState([]);
  const [types, setTypes] = useState([]);
  const [techStacks, setTechStacks] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/contents/filters`);
        setCategories(data.categories);
        setCosts(data.costs);
        setTypes(data.types);
        setTechStacks(data.techStacks);
        console.log('filters: ', data.techStacks);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);

  const getFilterUrl = (filter) => {
    const filterSearchTerm = filter.searchTerm || searchTerm;
    const filterCategory = filter.category || category;
    const filterTechStack = filter.techStack || techStack;
    const filterCost = filter.cost || cost;
    const filterType = filter.type || type;
    const filterRating = filter.rating || rating;
    const filterOrder = filter.order || order;
    const filterPage = filter.page || page;

    return `/search?searchTerm=${filterSearchTerm}&category=${filterCategory}&techStack=${filterTechStack}&cost=${filterCost}&type=${filterType}&rating=${filterRating}&order=${filterOrder}&page=${filterPage}`;
  };

  const resetSearch = () => {
    navigate('/search');
    dispatch({ type: 'FETCH_RESET' });
    // navigate(getFilterUrl({ category: 'all' }));
  };

  // category filter--------------------------------------------

  const [collapsedCategory, setCollapsedCategory] = useState(true);
  const toggleCategory = () => {
    setCollapsedCategory(!collapsedCategory);
  };
  const handleCategoryChange = (selectedValue) => {
    console.log('Received category:', selectedValue);
    navigate(getFilterUrl({ category: selectedValue }));
  };

  // techStack filter--------------------------------------------

  const [collapsedTechStack, setCollapsedTechStack] = useState(true);
  const toggleTechStack = () => {
    setCollapsedTechStack(!collapsedTechStack);
  };
  const handleTechStackChange = (selectedValue) => {
    console.log('Received TechStack:', selectedValue);
    navigate(getFilterUrl({ techStack: selectedValue }));
  };

  // type filter--------------------------------------------

  const [collapsedType, setCollapsedType] = useState(true);
  const toggleType = () => {
    setCollapsedType(!collapsedType);
  };
  const handleTypeChange = (selectedValue) => {
    console.log('Received type:', selectedValue);
    navigate(getFilterUrl({ type: selectedValue }));
  };

  // cost filter--------------------------------------------

  const [collapsedCost, setCollapsedCost] = useState(true);
  const toggleCost = () => {
    setCollapsedCost(!collapsedCost);
  };
  const handleCostChange = (selectedValue) => {
    console.log('Received cost:', selectedValue);
    navigate(getFilterUrl({ cost: selectedValue }));
  };

  // rating filter--------------------------------------------

  const [collapsedRating, setCollapsedRating] = useState(true);
  const toggleRating = () => {
    setCollapsedRating(!collapsedRating);
  };
  const handleRatingChange = (selectedValue) => {
    console.log('Received rating:', selectedValue);
    navigate(getFilterUrl({ rating: selectedValue }));
  };

  // toggle all button--------------------------------------------

  const toggleAllFilters = () => {
    toggleCategory();
    toggleTechStack();
    toggleType();
    toggleCost();
    toggleRating();
  };
  return (
    <div className="searchBackground">
      <Helmet>
        <title>Search Content</title>
      </Helmet>
      <div className="box-banner bannerContainer">
        <div className="bannerContent">
          <img src="/images/logo.png" />
          <div className="bannerTextButton">
            <h1>Help use Expand with by Contributing?</h1>
            <Link to="/submit-content">
              <Button variant="secondary" className="bannerButton">
                Submit New Content
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Container className="searchContainer">
        {/* <Row className="box-header"></Row> */}
        <div className="mb-3">
          <Row>
            <Col md={2} className="box-sidebar">
              <div>
                <Button
                  type="button"
                  variant="dark"
                  className="mb-3 w-100"
                  onClick={toggleAllFilters}
                >
                  <i className="fa-solid fa-filter me-2"></i>
                  Expand Filters
                </Button>
              </div>
              <CollapsibleCategory
                categories={categories}
                category={category}
                onCategoryChange={handleCategoryChange}
                collapsedCategory={collapsedCategory}
                toggleCategory={toggleCategory}
              />

              <CollapsibleTechStack
                techStacks={techStacks}
                techStack={techStack}
                onTechStackChange={handleTechStackChange}
                collapsedTechStack={collapsedTechStack}
                toggleTechStack={toggleTechStack}
              />

              <CollapsibleType
                types={types}
                type={type}
                onTypeChange={handleTypeChange}
                collapsedType={collapsedType}
                toggleType={toggleType}
              />

              <CollapsibleCost
                costs={costs}
                cost={cost}
                onCostChange={handleCostChange}
                collapsedCost={collapsedCost}
                toggleCost={toggleCost}
              />
              <CollapsibleRating
                ratings={ratings}
                rating={rating}
                onRatingChange={handleRatingChange}
                collapsedRating={collapsedRating}
                toggleRating={toggleRating}
              />
            </Col>
            <Col md={10} className="box-content">
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
                        {techStack !== 'all' && ' | ' + techStack}
                        {cost !== 'all' && ' | ' + cost}
                        {type !== 'all' && ' | ' + type}
                        {rating !== 'all' && ' | Rating ' + rating + ' & up'}
                        {/* Button Condition */}
                        {searchTerm !== 'all' ||
                        category !== 'all' ||
                        techStack !== 'all' ||
                        cost !== 'all' ||
                        type !== 'all' ||
                        rating !== 'all' ? (
                          <Button
                            className="bg-transparent border-0"
                            variant="light"
                            // size="sm"
                            onClick={() => resetSearch()}
                          >
                            <i
                              className="fas fa-times-circle"
                              style={{ color: 'white' }}
                            />
                          </Button>
                        ) : null}
                      </div>
                    </Col>
                    <Col className="text-end ">
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
                  <Row>
                    {/* <div>row all contents</div> */}
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
                            Number(page) === x + 1 ? 'text-black-50' : ''
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
      <div className="box-banner submission-align">
        <Link to="/submit-content">
          <Button className="submission-button">Submit New Content</Button>
        </Link>
      </div>
      <div className="empty-box"></div>
    </div>
  );
}
