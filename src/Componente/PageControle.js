import React, {Component} from 'react';
import Home from '../Componente/Home'
import '../Styles/index.css'
import Resumer from './Resumer'
import Portfolio from './Portfolio'
import Apropos from './Apropos'
import Contact from './Contact'
import Test from './Test'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';


class PageControle extends Component{
    render(){
        return(
        
            <div>
                    
                       <Test/>
                       
                       
                 </div>
        );
    }
}
export default PageControle;