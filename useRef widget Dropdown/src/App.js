// import logo from '../logo.svg';
// import './App.css';
import React, {useState} from 'react';
// import Accordion from './components/Acordion';
// import Search from './components/Search';
import reactDom from 'react-dom';
import Dropdown from './components/Dropdown';



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

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
]

function App() {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);


  return (
    <div className="App">
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      { showDropdown ? 
        <Dropdown 
        selected = {selected}
        onSelectedChange={setSelected} 
        options={options} /> : null}
    </div>
  );
}

export default App;
