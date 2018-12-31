import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import SocialLogin from 'react-social-login';

const SocialButton = SocialLogin(({ children, triggerLogin, ...props }) => (
  <Button
    onClick={triggerLogin}
    {...props}
    size="large"
    style={{
      backgroundColor: props.socialcolor,
      color: '#fff',
      width: '100%',
      margin: '.2rem 0'
    }}
  >
    {children}
  </Button>
));

const SocialLoginCmpt = ({ history, onLogin }) => {
  const handleSocialLogin = providerRes => {
    const { provider, token } = providerRes;
    onLogin({ provider, token: token.accessToken });
  };

  const handleSocialLoginFailure = err => {
    console.error('Unable to login user');
  };

  return (
    <div>
      <SocialButton
        provider="google"
        socialcolor="#dd4b39"
        appId={process.env.REACT_APP_SOCIAL_LOGIN_GOOGLE_APP_ID}
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
        Login with Google
      </SocialButton>

      <SocialButton
        provider="facebook"
        socialcolor="#3b5998"
        appId={process.env.REACT_APP_SOCIAL_LOGIN_FACEBOOK_APP_ID}
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
        Login with Facebook
      </SocialButton>
    </div>
  );
};

export default SocialLoginCmpt;
