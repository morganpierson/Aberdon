import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';

import InvestmentSpecsCard from './components/InvestmentSpecsCard';
import HeaderNav from './components/NavHeader';
import About from './views/AboutUs';
import SearchResults from './views/SearchResults';
import Authentication from './components/Authentication';
import CurrentUser from './components/CurrentUser';
import UserProvider from './providers/UserProvider';


const App = () => {

  let unsubscribeFromFirestore = null;


  return (
    
    <div className='container'>
    <UserProvider>
    <HeaderNav />
      <Router>
        <About path='/about-us'/>
        <InvestmentSpecsCard path='/'/>
        <SearchResults path='/results'/>
        <Authentication path='/authentication/:type' />
        <CurrentUser path='/user/:id' />
      </Router>
      </UserProvider>
    </div>
  )
}

render(<App />, document.getElementById('root'))