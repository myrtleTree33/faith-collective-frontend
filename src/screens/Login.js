import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../components/login/Login';
import {
  userLogin,
  userLoginClassic,
  userLogout
} from '../redux/actions/userActions';

const LoginScreen = ({ history, handleLogin, handleLoginClassic }) => {
  return (
    <Login
      onLogin={handleLogin}
      onLoginClassic={handleLoginClassic}
      history={history}
    />
  );
};

LoginScreen.propTypes = {
  //   name: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: ({ provider, token }) => {
      dispatch(userLogin(provider, token));
    },
    handleLoginClassic: ({ email, password }) => {
      dispatch(userLoginClassic(email, password));
    }
    // handleLogout: (provider, token) => dispatch(userLogout(provider, token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginScreen));
