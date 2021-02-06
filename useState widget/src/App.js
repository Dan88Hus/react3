// import logo from '../logo.svg';
// import './App.css';
import Accordion from './components/Acordion';

const items = [
  {
    title: 'what is React?',
    content: 'React is UI framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS lib among engineers'
  },
  {
    title: 'How do you use?',
    content: 'you use React by creating components'
  }
];

function App() {
  return (
    <div className="App">
      <Accordion items={items}/>
    </div>
  );
}

export default App;
