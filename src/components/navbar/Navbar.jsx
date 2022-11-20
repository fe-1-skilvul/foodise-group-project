import React, { useContext } from 'react';
import { Container, Dropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { loginCtx } from '../../context/LoginCtx';
import Icon from '../atoms/Icon';
import Search from '../search/Search';
import './Navbar.css';

const Appbar = () => {
  const { setShow, isLogin, setIsLogin } = useContext(loginCtx);

  const handleLogout = () => {
    localStorage.removeItem('ActiveUser');
    setIsLogin(false);
  };
  return (
    <Navbar
      style={{
        backgroundColor: '#fff',
      }}
      expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to={'/home'}>
            <img
              src="/images/foodise-logo.png"
              alt=""
              width={180}
              height={70}
            />
          </Link>
        </Navbar.Brand>
        <div className="d-none d-md-flex">
          <Search />
        </div>

        <div className="container-nav">
          <div className="box-nav d-none d-md-flex">
            <Link to={'/booked'}>
              <Icon
                image="/icons/bowl-food-solid.svg"
                alt="favorite"
              />
            </Link>
            <Link to={'#'}>
              <Icon image="/icons/bell-solid.svg" alt="notif" />
            </Link>
          </div>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="light"
              className="rounded-pill border border-gray text-success avatar-menu">
              <Icon image="/icons/user-solid.svg" alt="avatar" />
              <Icon image="/icons/bars-solid.svg" alt="menu" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/home" className="text-decoration-none">
                  Foods
                </Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link to="/booked" className="text-decoration-none">
                  Favorites
                </Link>
              </Dropdown.Item>

              <Dropdown.Divider />
              {isLogin ? (
                <Dropdown.Item
                  link="#"
                  onClick={(e) => handleLogout()}>
                  Log out
                </Dropdown.Item>
              ) : (
                <>
                  <Dropdown.Item
                    link="#"
                    onClick={(e) => setShow(true)}>
                    Log in
                  </Dropdown.Item>
                  <Link
                    to={'/signup'}
                    className="text-decoration-none text-success text-center "
                    style={{
                      paddingLeft: '15px',
                      fontWeight: 'bold',
                    }}>
                    Sign up
                  </Link>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
};

export default Appbar;
