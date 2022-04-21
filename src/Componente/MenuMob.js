import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {useState, useEfeect} from 'react' 
import $ from 'jquery';
import { Button } from 'bootstrap';


class MenuMob extends Component{
    render(){
      
      return(
           <>
           <div className='menumob'>
             <div className="btn-mob">
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
            </div>
        </div>
         
                    <nav id="app-nav-main" class="menumobile">
        <ul class="app-menu list-unstyled accordion" id="menu-accordion">
            <li class="nav-item">
                        <NavLink to='/' className="nav-link">
                             <span class="nav-link-text">Home</span>
                        </NavLink>
            </li>
            <li class="nav-item">
                        <NavLink to='/Apropos' className="nav-link">
                             <span class="nav-link-text">A propos</span>
                        </NavLink>
            </li>
            <li class="nav-item">
                        <NavLink to='/Resumer' className="nav-link">
                             <span class="nav-link-text">Resumer</span>
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

       
     
        
        
         </>
      );
    }
  }
   
  
  $(document).ready(function(){


    $(".btn-mob").on("click", function(){
         $(".menumobile").toggle( "slide" );
         $(".btn-mob").toggleClass( "close-btn" );
    });
    $(".nav-item").on("click", function(){
        $(".menumobile").hide("slide")
   });

    
})



export default MenuMob;
