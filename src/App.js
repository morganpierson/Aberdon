import React from 'react';
import { render } from 'react-dom';

const App = () => {
  return (
    <div className='container'>
      <div className='cube'>
        <div className='text'>The new way to find your next big deal</div>
      </div>
    </div>
  )
}

render(<App />, document.getElementById('root'))