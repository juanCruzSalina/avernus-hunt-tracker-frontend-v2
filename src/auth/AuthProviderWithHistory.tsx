import React from 'react';
import { createBrowserHistory } from 'history';
import { AppState, Auth0Provider } from '@auth0/auth0-react';

const AuthProviderWithHistory: React.FC = ({ children }) => {

  const domain = (process.env.REACT_APP_AUTH0_DOMAIN as string)
  const clientID = (process.env.REACT_APP_AUTH0_CLIENT_ID as string)

  const history = createBrowserHistory()

  const onRedirectCallback = (appState: AppState) => {
    history.push(
      appState?.returnTo || window.location.pathname
      );
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProviderWithHistory;
