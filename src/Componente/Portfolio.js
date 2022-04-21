import React, {Component} from 'react';
import { Divide as Hamburger } from 'hamburger-react'
import Menu from './Menu'
import cosmetic from '../Images/cosmetic .png'
import elo from '../Images/elo.gif'
import audi from '../Images/Audi.png'



class Portfolio extends Component{
  render(){
    
    return(
        
      <div className="info row realise col-sm-12 col-12 ">
      <div className='col-md-4 side port'>
          <img src={elo}/>
      </div>
      <div className='col-md-8 my-realisation text-center my-scroll p-3'>
                <h2>Mes réalisations</h2>
                <div className='container row port-primary p-2 col-md-12'>
                       <img src={cosmetic}/>
                       <div className='infos-hover'>
                                  <button>Voir le site</button>
                       </div>
                </div>
                <div className='container row port-primary p-2 col-md-12'>
                       <img src={audi}/>
                       <div className='infos-hover'>
                                  <button>Voir le site</button>
                       </div>
                </div>
      </div>
</div>
        
        
    );
  }
}


export default Portfolio;