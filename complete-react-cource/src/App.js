import React, { useState } from 'react';
import './App.css';
import './components/ExpenceItem';
import Expences from './components/Expences';
import NewExpence from './components/NewExpence';

const prev_Expence = [
  { id: 'e1', date: new Date(2021, 5, 12), title: 'pen', rate: '100$' },
  { id: 'e2', date: new Date(2021, 5, 12), title: 'hen', rate: '200$' },
  { id: 'e3', date: new Date(2021, 5, 12), title: 'ben', rate: '300$' },
  { id: 'e4', date: new Date(2021, 5, 12), title: 'ten', rate: '400$' }
];
function App() {

  const [Expence, setExpence] = useState(prev_Expence);

  const addExpenceHandler = (Expence) => {
    console.log('in app.js');
    // console.log(Expence);
    setExpence((Expence) => {
      return [Expence, ...Expence];
    });
  }

  return (
    <div>
      <h2>Expences</h2>
      <NewExpence onAddExpence={addExpenceHandler} />
      <Expences items={Expence} />
    </div>
  )

  // return React.createElement('div', {},
  //   React.createElement('h2', {}, "Expences"),
  //   React.createElement(NewExpence),
  //   React.createElement(Expences, { items: Expence })
  // );
}

export default App;
