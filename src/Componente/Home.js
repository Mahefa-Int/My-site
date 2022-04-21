import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom'
import { Divide as Hamburger } from 'hamburger-react'
import Menu from './Menu'
import MenuMob from './MenuMob'



class Home extends Component{
    
      
  render(){
    
    return(
        
        
      
      <div className='height home flex-center' style={{
            backgroundImage:
              "url(" + require("../Images/Misy.png").default + ")",
          }}>
              <div className='width'>
          <div className="patterns">
               <svg width="100%" height="100%">
                   <defs>
                          <pattern id="polka-dots" x="0" y="0" width="100" height="80"patternUnits="userSpaceOnUse">
                             <circle fill="#0d19e1" cx="25" cy="25" r="3"></circle>
                          </pattern>  
                
                   </defs>
                   <text x="50%" y="50%"  textAnchor="middle">Tongasoa oh !</text>
               </svg>
         </div>
         <div className="viewall">
                        
             <div className="noselect"  >

                   <NavLink to='/Contact' className="button">
                        Me contacter
                   </NavLink>
                           
                            
             </div>
         </div>
         <div className='absolute'>
               <p>2022 - Andriamihaja Mahefaniaina Marinot</p>
         </div>
         </div>
        
      </div>
      
                
        
        
    );
  }
}


export default Home;