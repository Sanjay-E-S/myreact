import './App.css';
import Card from './components/Card';
import './components/ExpenceItem';
import ExpenceItem from './components/ExpenceItem';

function App() {
  const Expence = [
    { id: 'e1', date: new Date(2021, 5, 12), title: 'pen', rate: '100$' },
    { id: 'e2', date: new Date(2021, 5, 12), title: 'hen', rate: '200$' },
    { id: 'e3', date: new Date(2021, 5, 12), title: 'ben', rate: '300$' },
    { id: 'e4', date: new Date(2021, 5, 12), title: 'ten', rate: '400$' }
  ]
  return (
    <Card>
      <ExpenceItem
        title={Expence[0].title}
        date={Expence[0].date}
        rate={Expence[0].rate}
      ></ExpenceItem>
      <ExpenceItem
        title={Expence[1].title}
        date={Expence[1].date}
        rate={Expence[1].rate}
      ></ExpenceItem>
      <ExpenceItem
        title={Expence[2].title}
        date={Expence[2].date}
        rate={Expence[2].rate}
      ></ExpenceItem>
      <ExpenceItem
        title={Expence[3].title}
        date={Expence[3].date}
        rate={Expence[3].rate}
      ></ExpenceItem>
    </Card >
  );
}

export default App;
