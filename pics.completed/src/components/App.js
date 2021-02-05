import React from "react";
import "./App.css";
// import axios from 'axios';
import SearchBar from "./SearchBar";
import unsplash from '../api/unsplash';
import ImageList from './imageList';


// KEY= 'nJ-aXkCdVKTT3lgO_1qzy49sAe0hZmpudD3u1eCXpYQ';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos',{
      params: {query: term }
    });  
    this.setState({ images: response.data.results });
  };
 render () {
  return (
    <div className='ui container' style={{marginTop: '10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit} />
      <ImageList images={this.state.images}/>
    </div>
  );
};
};
export default App;
