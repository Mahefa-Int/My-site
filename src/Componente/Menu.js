import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {useState, useEfeect} from 'react' 
import $ from 'jquery';
import { Button } from 'bootstrap';


class Menu extends Component{
    render(){
      
      return(
           <>
           <div className='btn-menu'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-filter-right" viewBox="0 0 16 16">
                      <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"/>
                  </svg>
          </div>
         <div className='my-menu'>
                    <nav id="app-nav-main" class="menu">
        <ul class="app-menu list-unstyled accordion" id="menu-accordion">
            <li class="nav-item">
                        <NavLink to='/' className="nav-link">
                             <span class="nav-link-text">Accueil</span>
                        </NavLink>
            </li>
            <li class="nav-item">
                        <NavLink to='/Apropos' className="nav-link">
                             <span class="nav-link-text">A propos</span>
                        </NavLink>
            </li>
            <li class="nav-item">
                        <NavLink to='/Resumer' className="nav-link">
                             <span class="nav-link-text">Parcours</span>
                        </NavLink>
            </li>
            <li class="nav-item">
                        <NavLink to='/Portfolio' className="nav-link">
                             <span class="nav-link-text">Portfolio</span>
                        </NavLink>
            </li>
            <li class="nav-item">
                        <NavLink to='/Contact' className="nav-link">
                             <span class="nav-link-text">Contact</span>
                        </NavLink>
            </li>
        </ul>
                     </nav>

        </div>
     
        <div className='close'>
                <svg className='up' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                     <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
               </svg>
        </div>
         </>
      );
    }
  }
   
  $(document).ready(function(){
     $(".my-menu").hide();


     $(".btn-menu").on("click", function(){
          $(".my-menu").show( "slide" );
          $(".close").addClass("close-2");
     });

     $(".bi").on("click", function(){
          $(".my-menu").hide("slide");
          $(".close").removeClass("close-2");
     });

     $(".nav-link-text").on("click", function(){
          $(".my-menu").hide("slide");
          $(".close").removeClass("close-2");
     });
})

export default Menu;
