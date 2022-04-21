import React, {Component} from 'react';
import { Divide as Hamburger } from 'hamburger-react'
import iloo from '../Images/ILOO.jpg'
import or from '../Images/Aureol.png'
import med from '../Images/med.png'
import hec from '../Images/HEC.png'
import ess from '../Images/ess.png'
import Menu from './Menu'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


class Resumer extends Component{
  render(){
    
    return(
        
      <div className="info my-scrolls row col-12 pt-3 ">
      <h1 className='pb-3'>Mes parcours</h1>
    <VerticalTimeline>
<VerticalTimelineElement
className="vertical-timeline-element--work"
// contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
contentArrowStyle={{ borderRight: '7px solid  #fff' }}
date="Septembre 2021"
iconStyle={{ background: '#1b7895', color: '#fff' }}

>
<h3 className="vertical-timeline-element-title">MEDDoC</h3>
<img src={med} className='p-2'/>
<h4 className="vertical-timeline-element-subtitle">Intégrateur HTML/CSS</h4>
<p>
   <ul style={{ listStyleType: 'disc' }}>
            <li>Intégration des maquettes Photoshop</li>
            <li>Intégration sur ReactJS</li>
            <li>Responsive design</li>
   </ul> 
</p>
</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--work"
date="Avril - Juin 2021"
iconStyle={{ background: '#ffa753', color: '#fff' }}

>
<h3 className="vertical-timeline-element-title">Auréol SARL</h3>
<img src={or} className="my-logo"/>
<h4 className="vertical-timeline-element-subtitle">Intégrateur wordpress</h4>
<p>
   <ul style={{ listStyleType: 'disc' }}>
            <li>Intégration des maquettes Photoshop</li>
            <li>Intégrer des sites internet WordPress (thème custom) mobile et desktop</li>
            <li>Build page Elementor</li>
   </ul>

</p>
</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--work"
date="Janvier - Avril 2021"
iconStyle={{ background: '#ff3d00', color: '#fff' }}

>
<h3 className="vertical-timeline-element-title">Ilootech</h3>
<img src={iloo}/>
<h4 className="vertical-timeline-element-subtitle">Intégrateur wordpress</h4>
<p>
   <ul style={{ listStyleType: 'disc' }}>
            <li>Intégration des maquettes Photoshop</li>
            <li>Intégrer des sites internet WordPress (thème custom) mobile et desktop</li>
            <li>Développement des thèmes et des plugins WordPress (DIVI, Elementor, Wp bakery...)</li>
   </ul>
</p>
</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--work"
date="2016 - 2020 Université"
iconStyle={{ background: '#f0e301', color: '#fff' }}

>
<h3 className="vertical-timeline-element-title">Hecmma</h3>
<img src={hec} className='my-logo'/>
<h4 className="vertical-timeline-element-subtitle">Bacc +3 Télecommunication, Informatique</h4>
<p>
   <ul style={{ listStyleType: 'disc' }}>
            <li> Télécommunication Informatique et Electronique</li>
   </ul>
</p>
</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--education"
date="2016 - Baccalaureat"
iconStyle={{ background: '#012535', color: '#fff' }}

>
<h3 className="vertical-timeline-element-title">LTFPPE Talatamaty</h3>
<img src={ess} className='my-logo p-2'/>
<h4 className="vertical-timeline-element-subtitle">Bac professionnel</h4>
<p>
   <ul style={{ listStyleType: 'disc' }}>
            <li> Serie technique Audio visuel</li>
   </ul>
</p>
</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--education"
date="2015 - Brevet d'étude Professionnel"
iconStyle={{ background: '#012535', color: '#fff' }}

>
<h3 className="vertical-timeline-element-title">LTFPPE Talatamaty</h3>
<img src={ess} className='my-logo p-2'/>
<h4 className="vertical-timeline-element-subtitle">BEP (Brévet d'étude professionnel)</h4>
<p>
    <ul style={{ listStyleType: 'disc' }}>
            <li> Serie technique Audio visuel</li>
   </ul>
</p>
</VerticalTimelineElement>

<VerticalTimelineElement
iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
/>
</VerticalTimeline>
        </div>
        
    );
  }
}


export default Resumer;