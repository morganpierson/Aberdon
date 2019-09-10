import {render} from 'react-dom';

import Application from './App';
import UserProvider from './providers/UserProvider';

render(<UserProvider>
    <Application />
  </UserProvider>, document.getElementById('root'))