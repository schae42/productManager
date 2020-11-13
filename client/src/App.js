import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

// const removeFromDom = productId => {
//   setProduct(product.filter(product => product._id !== productId));
// }

// removeFromDom={removeFromDom}



function App() {
  return (
    <div className="App">
      <Router>
        <Main path="product"/>
        <Detail path="product/:id" />
        <Update path="/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;