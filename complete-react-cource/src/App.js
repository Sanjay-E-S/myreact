import React from 'react';
import './App.css';
import './components/ExpenceItem';
import Expences from './components/Expences';

function App() {
  const Expence = [
    { id: 'e1', date: new Date(2021, 5, 12), title: 'pen', rate: '100$' },
    { id: 'e2', date: new Date(2021, 5, 12), title: 'hen', rate: '200$' },
    { id: 'e3', date: new Date(2021, 5, 12), title: 'ben', rate: '300$' },
    { id: 'e4', date: new Date(2021, 5, 12), title: 'ten', rate: '400$' }
  ];

  // return (
  //   <div>
  //     <h2>Expences</h2>
  //     <Expences items={Expence} />
  //   </div>
  // )

  return React.createElement('div', {},
    React.createElement('h2', {}, "Expences"),
    React.createElement(Expences, { items: Expence })
  );
}

export default App;
