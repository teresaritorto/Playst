import React from 'react';

import './App.css';
import { Box } from './components/Box'

const getBoxElements = (arr) => {
  const iterateBoxes = (item) => {    
      return (
          <Box className={ item.className } value={ item.value } />	            
      );
  }
  return arr.map(function (item, i) {
      return (
          <React.Fragment key={ item.value }>  
              {iterateBoxes(item)}
          </React.Fragment>  
      );
  });
};

const boxes = [
  { className: 'box one', value: '1' },
  { className: 'box two', value: '2' },
  { className: 'box three', value: '3' },
  { className: 'box four', value: '4' },
  { className: 'box five', value: '5' }
];

function App() {
  return (
      <div id="container" className="wrapper">
          {getBoxElements(boxes)}                
      </div>
  );
}

export default App;
