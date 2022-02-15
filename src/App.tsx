import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import GlobalStyle from './theme/GlobalStyle';
import theme from './theme/theme';

import HomePage from './components/pages/HomePage';
import DonationsPage from './components/pages/DonationsPage';
import AwardedPage from './components/pages/AwardedPage';
import WishlistPage from './components/pages/WishlistPage';
import ProfilePage from './components/pages/ProfilePage';
import Hero from './components/molecules/Hero/Hero';
import LoadingScreen from './components/molecules/LoadingScrren/LoadingScreen';
import ProtectedRoute from './auth/ProtectedRoute';


const App = () => {

  const { isLoading, isAuthenticated } = useAuth0()

  if (isLoading) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LoadingScreen type='login'/>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={ (isAuthenticated) ? <HomePage/> : <Hero/>}/>
        <Route path='donation' element={<ProtectedRoute/>}>
          <Route path='' element={<DonationsPage/>}/>
        </Route>
        <Route path='awarded' element={<ProtectedRoute/>}>
          <Route path='' element={<AwardedPage/>} />
        </Route>
        <Route path='wishlist' element={<ProtectedRoute/>}>
          <Route path='' element={<WishlistPage/>}/>
        </Route>
        <Route path='profile'>
          <Route path=':id' element={<ProtectedRoute/>}>
            <Route path='' element={<ProfilePage/>}/>
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App;
