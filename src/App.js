import React from 'react';
import { render } from 'react-dom';

import InvestmentSpecsCard from './components/InvestmentSpecsCard';

const App = () => {
  return (
    <div className='container'>
      <div className='cube'>
      <div className='header'>
      <div className='text'>RIA</div>
      </div>  
        <InvestmentSpecsCard />
      </div>
    </div>
  )
}

render(<App />, document.getElementById('root'))