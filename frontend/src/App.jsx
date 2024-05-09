import { Link, Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';
import SearchBox from './components/SearchBox';
import Badge from 'react-bootstrap/Badge';

function App() {
  const navigate = useNavigate();
  const { state, dispatch: contextDispatch } = useContext(Store);
  const { userInfo, userSaves } = state;

  const signoutHandler = () => {
    contextDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('userSaves');
    navigate('/signin');
  };

  return (
    <div className="d-flex flex-column site-container">
      <ToastContainer position="bottom-center" limit={1} />
      <header>
        <Navbar className="nav" variant="dark" expand="lg">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Educere</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <SearchBox />
              <Nav className="me-auto w-100 justify-content-end">
                {userInfo && (
                  <Link to="/saved" className="nav-link me-3">
                    Saved <i className="fa-regular fa-bookmark"></i>
                    {userSaves.numSaves > 0 && (
                      <Badge pill bg="danger" className="badgePillRound">
                        {userSaves.numSaves}
                      </Badge>
                    )}
                  </Link>
                )}
                {userInfo ? (
                  <NavDropdown
                    className="me-2"
                    title={<i className="fa-regular fa-user"></i>}
                    id="basic-nav-dropdown"
                  >
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    {/* <LinkContainer to="/submission">
                      <NavDropdown.Item>Submission</NavDropdown.Item>
                    </LinkContainer> */}
                    <NavDropdown.Divider />
                    <Link
                      to="#signout"
                      className="dropdown-item"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link to="/signin" className="nav-link">
                    Sign In
                  </Link>
                )}
                {userInfo && userInfo.isAdmin && (
                  <NavDropdown
                    title={<i className="fa-solid fa-user-tie"></i>}
                    id="admin-nav-dropdown"
                  >
                    <LinkContainer to="/admin/dashboard">
                      <NavDropdown.Item>Dashboard</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/contents">
                      <NavDropdown.Item>Contents</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/submissions">
                      <NavDropdown.Item>Submissions</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/users">
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        {/* empty class for now className="mainElement"*/}
        <div>
          {/* <div className="box-cover">Banner here</div> */}
          <Container fluid className="topContainer mt-0">
            <Outlet />
          </Container>
          {/* <div className="box-cover mb-5">submission</div> */}
        </div>
      </main>
      <footer>
        <div className="text-center box-footer">
          <div>All rights reserved</div>
        </div>
      </footer>
    </div>
  );
}

export default App;

/* 

TODO: Implement a sidebar if necessary

*/
