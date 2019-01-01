import React, { Component } from 'react';
import { Link, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Icon, Dropdown, Layout, Menu, Popover, Row, Col, Divider } from 'antd';
import { connect } from 'react-redux';
import { isMobile } from 'react-device-detect';

import { userLogout } from './redux/actions/userActions';

import HomeScreen from './screens/Home';
import AboutScreen from './screens/About';
import LoginScreen from './screens/Login';
import SignupScreen from './screens/Signup';
import CartWidgetScreen from './screens/CartWidget';
import CartScreen from './screens/Cart';
import ProfileScreen from './screens/Profile';
import ContactScreen from './screens/Contact';

import './App.css';
import CheckoutScreen from './screens/Checkout';
import ItemScreen from './screens/Item';
import WideReadableDiv from './components/util/WideReadableDiv';
import PaymentScreen from './screens/Payment';

const { Header, Content, Footer } = Layout;

function isAuthenticated() {
  return localStorage.getItem('auth');
}

/**
 * Allows the creation of a protected route, if the user is not signed in.
 * @param {*} param0
 */
const PrivateRoute = ({ component: Component, ...rest }) => {
  // TODO refactor this if needed
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { handleLogout } = this.props;

    const loginMenu = (
      <Menu>
        <Menu.Item>
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </Menu.Item>
      </Menu>
    );

    return (
      <div className="App">
        <Layout className="layout" style={{ minHeight: '100vh' }}>
          {/* <div
            style={{
              textAlign: 'center',
              fontSize: '0.8em',
              color: '#fff',
              background: '#121212'
            }}
          >
            Promotional items go here
          </div> */}
          <Header
            style={{
              background: '#fff'
            }}
          >
            {/* <div
              className="logo"
              style={{
                width: '5rem',
                background: '#f00',
                float: 'left'
              }}
            >
              Logo
            </div> */}
            <Menu
              theme="light"
              mode="horizontal"
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                <Link to="/">
                  <span
                    style={{
                      fontFamily: 'Permanent Marker, cursive',
                      color: '#000',
                      fontSize: '1.2em'
                    }}
                  >
                    FaithCollective.co
                  </span>
                </Link>
              </Menu.Item>
              {isAuthenticated() ? (
                <Menu
                  style={{
                    float: 'right',
                    lineHeight: '64px'
                  }}
                >
                  <Menu.Item key="9.1">
                    <Popover
                      content={<CartWidgetScreen />}
                      placement="bottomRight"
                    >
                      <Link to="/cart">
                        <Icon
                          type="shopping-cart"
                          style={{ fontSize: '1.2rem' }}
                        />
                      </Link>
                    </Popover>
                  </Menu.Item>

                  <Menu.Item key="9.2">
                    <Dropdown overlay={loginMenu} placement="bottomCenter">
                      <Link to="/profile" className="ant-dropdown-link">
                        <Icon type="user" style={{ fontSize: '1.2rem' }} />
                      </Link>
                    </Dropdown>
                  </Menu.Item>
                </Menu>
              ) : (
                <Menu
                  style={{
                    float: 'right',
                    lineHeight: '64px'
                  }}
                >
                  <Menu.Item key="9.1">
                    <Popover
                      content={<CartWidgetScreen />}
                      placement="bottomRight"
                    >
                      <Link to="/cart">
                        <Icon
                          type="shopping-cart"
                          style={{ fontSize: '1.2rem' }}
                        />
                      </Link>
                    </Popover>
                  </Menu.Item>

                  <Menu.Item key="9.2">
                    <Link to="/login">Login</Link>
                  </Menu.Item>
                </Menu>
              )}
            </Menu>
          </Header>
          <Content
            style={{
              padding: '0 0'
            }}
          >
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route path="/cart" component={CartScreen} />
              <Route path="/about" component={AboutScreen} />
              <Route path="/checkout" component={CheckoutScreen} />
              <Route path="/payment" component={PaymentScreen} />
              <Route path="/login" component={LoginScreen} />
              <Route path="/signup" component={SignupScreen} />
              <Route path="/contact" component={ContactScreen} />
              <PrivateRoute path="/profile" component={ProfileScreen} />
            </Switch>
            <Switch>
              <Redirect from="/item/" to="/" exact />
              <Route path="/item/:id" component={ItemScreen} />
            </Switch>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              marginBottom: '2.5rem'
            }}
          >
            <Divider />
            <WideReadableDiv>
              <Row
                gutter={16}
                style={{
                  textAlign: isMobile ? 'center' : 'left',
                  fontSize: '.8em'
                }}
              >
                <Col className="gutter-row" xs={24} sm={8}>
                  <div
                    className="gutter-box"
                    style={{
                      marginTop: isMobile ? '.5rem' : 0,
                      marginBottom: isMobile ? 0 : '.5rem'
                    }}
                  >
                    <b>General</b>
                  </div>
                  <Link to="/about" className="footerLink">
                    <div className="gutter-box">About us</div>
                  </Link>
                </Col>
                <Col className="gutter-row" xs={24} sm={8}>
                  <div
                    className="gutter-box"
                    style={{
                      marginTop: isMobile ? '.5rem' : 0,
                      marginBottom: isMobile ? 0 : '.5rem'
                    }}
                  >
                    <b>Social</b>
                  </div>
                  <Link to="/" className="footerLink">
                    <div className="gutter-box">Facebook</div>
                  </Link>
                  <Link to="/" className="footerLink">
                    <div className="gutter-box">Instagram</div>
                  </Link>
                </Col>
                <Col className="gutter-row" xs={24} sm={8}>
                  <div
                    className="gutter-box"
                    style={{
                      marginTop: isMobile ? '.5rem' : 0,
                      marginBottom: isMobile ? 0 : '.5rem'
                    }}
                  >
                    <b>Let us help you</b>
                  </div>
                  <Link to="/geton" className="footerLink">
                    <div className="gutter-box">Custom prints</div>
                  </Link>
                  <Link to="/contact" className="footerLink">
                    <div className="gutter-box">Contact us</div>
                  </Link>
                </Col>
              </Row>
            </WideReadableDiv>
            <div
              style={{
                fontSize: '.8em',
                marginTop: '3.2rem'
              }}
            >
              <a
                href="http://www.21roses.co"
                style={{
                  color: '#212121'
                }}
              >
                <div
                  style={{
                    marginBottom: '1.2rem'
                  }}
                >
                  {'"'}That they may know from the rising of the sun, and from
                  the west, that there is none beside me. I am the Lord, and
                  there is none else.
                  {'" - Isaiah 45:6'}
                </div>
                <div>Made in Singapore.</div>
              </a>
            </div>
          </Footer>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogout: () => dispatch(userLogout())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
