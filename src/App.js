import React, {Component} from 'react';
// import React, { useState, useEffect } from 'react'
import './App.css';
import PageControle from './Componente/PageControle'
// import Loder from './Componente/Loder'



class App extends Component{
  render(){
    return(
      <div className='App'>
        <PageControle/>
      </div>
    );
  }
}

export default App;