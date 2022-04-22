
import Menu from './Menu'
import React, { useState, useEffect, Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import prof from '../Images/right.png'
import '../Styles/index.css'
import Resumer from './Resumer'
import Portfolio from './Portfolio'
import Apropos from './Apropos'
import Contact from './Contact'
import {Link, NavLink} from 'react-router-dom'
import MenuMob from './MenuMob'
import Home from '../Componente/Home'
import {BrowserRouter, Routes, Route } from 'react-router-dom';




class PageControle extends Component{

    render(){

    return  (
        <BrowserRouter>
                <div className='menumob'>
                    <div className="btn-mob">
                        <span className="bar1"></span>
                        <span className="bar2"></span>
                        <span className="bar3"></span>
                    </div>
                </div>
                    
                        <MenuMob/>
                    
                <div className="container-fluid big-content flex-center">
                    <div className="content flex-center col-md-11">
                      <div className="row flex-center col-md-12 height">
                        
                            <div className="my-scroll col-md-9">
                                <Routes>
                                    <Route path='/' exact element={<Home/>}/>
                                    <Route path='/Apropos' exact element={<Apropos/>}/>
                                    <Route path='/Resumer' exact element={<Resumer/>}/>
                                    <Route path='/Portfolio' exact element={<Portfolio/>}/>
                                    <Route path='/Contact' exact element={<Contact/>}/>
                                </Routes>
                            </div>
                            <div className="col-md-3 profile home">
                                    <img src={prof}/>
                                    <Menu/>
                            </div>
                      </div>
                </div>
                </div>
        </BrowserRouter>
        );
        

    }
}



export default PageControle;