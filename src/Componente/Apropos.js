import React, {Component} from 'react';
import { Progress } from 'react-sweet-progress'
import "react-sweet-progress/lib/style.css"
import { Divide as Hamburger } from 'hamburger-react'
import Menu from './Menu'
import MenuMob from './MenuMob'
import html from '../Images/HTML5.png'
import mada from '../Images/madagascar.png'
import react from '../Images/logo-react.png'
import wp from '../Images/wordpress.png'
import query from '../Images/query.png'
import css from '../Images/CSS.png'
import bootstrap from '../Images/bootstrap.png'
import sariko from '../Images/zoky.jpg'



class Apropos extends Component{
  render(){
    
    return(
        
      <div className="row info my-scrolls col-sm-12 row ">
      <div className='identity col-12'>
                   {/* <div className='col-md-12 my-pic-prof'>
                          <img src={sariko} alt="Logo" />     
                   </div> */}
                   <div className='col-md-12 my-motiv'>
                       <h2>Integrateur web</h2>
                          <p>Vous souhaitez une intégration HTML/CSS de qualité et fidèle à votre maquette ? <br/>
                             Vous avez sonné à la bonne porte !
                             J’intègre au pixel perfect et sur tous les supports <br/> (ordinateur, tablette, smartphone)  en utilisant si vous le souhaitez Bootstrap...
                          </p>
                          
                   </div>
      </div>
      <div className='container text-center mt-4'>
      <h2>Profil</h2>
      </div>
     <div className='col-md-5 block'>
        
        <div className='col-md-12 contenu-block'>
         <p><span>Nom:    </span>Andriamihaja</p>
         <p><span>Prenom:    </span>Mahefaniaina Marinot</p>
         <p><span>Pays:    </span> <img src={mada}/></p>
         {/* <img src={mada} alt="Logo" /> */}
        </div>
     </div>
     <div className='col-md-5 block'>
        
        <div className='col-md-12 contenu-block'>
         <p><span>Telephone:    </span>034 38 287 23</p>
         <p><span>E-mail:    </span>marinotandria@gmail.com</p>
         <p><span>skype:    </span>Mahefa Andriamihaja</p>
        </div>
     </div>
     <div className='container text-center mt-4 mb-4'>
       <h2>Outils</h2>
       <div className='row outils mt-3 flex-center'>
       <div className='col-md-3 outils-content'>
          <div className='logo-outils col-md-4 flex-center'>
             <img src={html}/>
          </div>
          <div className='col-md-8 flex-center'>
          <Progress percent={95}  />
          </div>
       </div>
       <div className='col-md-3 outils-content'>
          <div className='logo-outils col-md-4 flex-center'>
             <img src={css}/>
          </div>
          <div className='col-md-8 flex-center'>
          <Progress percent={88}  />
          </div>
       </div>
       <div className='col-md-3 outils-content'>
          <div className='logo-outils col-md-4 flex-center'>
             <img src={bootstrap}/>
          </div>
          <div className='col-md-8 flex-center'>
          <Progress percent={90}  />
          </div>
          
       </div>
       </div>
       <div className='row outils mt-3 flex-center'>
       <div className='col-md-3 outils-content'>
          <div className='logo-outils col-md-4 flex-center'>
             <img src={react}/>
          </div>
          <div className='col-md-8 flex-center'>
          <Progress percent={30}  />
          </div>
       </div>
       <div className='col-md-3 outils-content'>
          <div className='logo-outils col-md-4 flex-center'>
             <img src={query}/>
          </div>
          <div className='col-md-8 flex-center'>
          <Progress percent={70}  />
          </div>
       </div>
       <div className='col-md-3 outils-content'>
          <div className='logo-outils col-md-4 flex-center'>
             <img src={wp}/>
          </div>
          <div className='col-md-8 flex-center'>
          <Progress percent={85}  />
          </div>
          
       </div>
       </div>
     </div>
      <div className='container text-center mt-4'>
      <h2>Missions</h2>
      </div>
     <div className='col-md-5 block h-0'>
        
        <div className='col-md-12 single-exp'>
        <div class="circle-wrapper">
               <div class="warning circle"></div>
                    <div class="icon">
                       <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-scissors" viewBox="0 0 16 16">
                           <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/>
                       </svg>
                    </div>
            </div>
           <h4>Découpage</h4>
           <p>Découper les maquettes, échanges préalables avec le webdesigner, récupération des fonts texte et couleurs projet</p>
        </div>
     </div>
     <div className='col-md-5 block h-0'>
        
        <div className='col-md-12 single-exp '>
        <div class="circle-wrapper">
               <div class="warning no circle"></div>
                    <div class="icon">
                           <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-filetype-html" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5Zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662H6.515Zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999h.706Zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z"/>
                           </svg>
                    </div>
            </div>
           <h4 >Construction du HTML</h4>
           <p>Respect de la schémantique, hiérarchisation cohérente du document, préparation logique du HTML en vue des styles et de l’animation</p>
        </div>
     </div>
     <div className='col-md-5 block h-0'>
        
        <div className='col-md-12 single-exp '>
        <div class="circle-wrapper">
               <div class="warning no circle"></div>
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-filetype-css" viewBox="0 0 16 16">
                             <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.397 14.841a1.13 1.13 0 0 0 .401.823c.13.108.289.192.478.252.19.061.411.091.665.091.338 0 .624-.053.859-.158.236-.105.416-.252.539-.44.125-.189.187-.408.187-.656 0-.224-.045-.41-.134-.56a1.001 1.001 0 0 0-.375-.357 2.027 2.027 0 0 0-.566-.21l-.621-.144a.97.97 0 0 1-.404-.176.37.37 0 0 1-.144-.299c0-.156.062-.284.185-.384.125-.101.296-.152.512-.152.143 0 .266.023.37.068a.624.624 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.092 1.092 0 0 0-.2-.566 1.21 1.21 0 0 0-.5-.41 1.813 1.813 0 0 0-.78-.152c-.293 0-.551.05-.776.15-.225.099-.4.24-.527.421-.127.182-.19.395-.19.639 0 .201.04.376.122.524.082.149.2.27.352.367.152.095.332.167.539.213l.618.144c.207.049.361.113.463.193a.387.387 0 0 1 .152.326.505.505 0 0 1-.085.29.559.559 0 0 1-.255.193c-.111.047-.249.07-.413.07-.117 0-.223-.013-.32-.04a.838.838 0 0 1-.248-.115.578.578 0 0 1-.255-.384h-.765ZM.806 13.693c0-.248.034-.46.102-.633a.868.868 0 0 1 .302-.399.814.814 0 0 1 .475-.137c.15 0 .283.032.398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.441 1.441 0 0 0-.489-.272 1.838 1.838 0 0 0-.606-.097c-.356 0-.66.074-.911.223-.25.148-.44.359-.572.632-.13.274-.196.6-.196.979v.498c0 .379.064.704.193.976.131.271.322.48.572.626.25.145.554.217.914.217.293 0 .554-.055.785-.164.23-.11.414-.26.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.799.799 0 0 1-.118.363.7.7 0 0 1-.272.25.874.874 0 0 1-.401.087.845.845 0 0 1-.478-.132.833.833 0 0 1-.299-.392 1.699 1.699 0 0 1-.102-.627v-.495ZM6.78 15.29a1.176 1.176 0 0 1-.111-.449h.764a.578.578 0 0 0 .255.384c.07.049.154.087.25.114.095.028.201.041.319.041.164 0 .301-.023.413-.07a.559.559 0 0 0 .255-.193.507.507 0 0 0 .085-.29.387.387 0 0 0-.153-.326c-.101-.08-.256-.144-.463-.193l-.618-.143a1.72 1.72 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.068 1.068 0 0 1-.123-.524c0-.244.063-.457.19-.639.127-.181.303-.322.527-.422.225-.1.484-.149.777-.149.304 0 .564.05.779.152.217.102.384.239.5.41.12.17.187.359.2.566h-.75a.56.56 0 0 0-.12-.258.624.624 0 0 0-.246-.181.923.923 0 0 0-.37-.068c-.216 0-.387.05-.512.152a.472.472 0 0 0-.184.384c0 .121.047.22.143.3a.97.97 0 0 0 .404.175l.621.143c.217.05.406.12.566.211.16.09.285.21.375.358.09.148.135.335.135.56 0 .247-.063.466-.188.656a1.216 1.216 0 0 1-.539.439c-.234.105-.52.158-.858.158-.254 0-.476-.03-.665-.09a1.404 1.404 0 0 1-.478-.252 1.13 1.13 0 0 1-.29-.375Z"/>
                          </svg>
                    </div>
            </div>
           <h4 >Styles CSS</h4>
           <p> Utilisation du préprocesseur (ou pas, ça dépend)</p>
        </div>
     </div>
     <div className='col-md-5 block h-0'>
        
        <div className='col-md-12 single-exp '>
        <div class="circle-wrapper">
               <div class="warning circle"></div>
                    <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                   <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                </svg>
                    </div>
            </div>
           <h4 >Responsive / Fluid design</h4>
           <p>Prise en compte de tous les devices, media queries, mobile first</p>
        </div>
     </div>
     
   </div>
        
        
    );
  }
}


export default Apropos;