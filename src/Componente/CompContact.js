import React, {Component, useState} from 'react';
import Menu from './Menu';
import emailjs from '@emailjs/browser';



function CompContact(props) {

    const Result =() =>{
        return (
            <div className='succes-message'>
                Message bien Envoyé
            </div>
        )
    }
  
        const [result, showresult] = useState (false);
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs
          .sendForm('service_zxnlm8w', 
          'template_qynpdif', 
          e.target,
           '8TRODvSZni0dVYSbr')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }
            );
            e.target.reset();
            showresult(true);
        };

    return(
        
      
        <form className="form-control-log-doc" action='' onSubmit={sendEmail}>

                        <div className='row col-md-12'>
                           <div class="pseudo-table col-md-6">
                                  <input id="yourname" name="nom" type="texte" placeholder='Nom' required/>
                               
                           </div>
                           <div className="pseudo-table col-md-6">
                                  <input id="yourname" name="prenom" type="texte" placeholder='Prénom' required/>
                               
                           </div>
                        </div>
                        <div className='row col-md-12'>
                           <div className="pseudo-table col-md-6">
                                  <input id="yourname" name="email" type="email" placeholder='E-mail' required/>
                               
                           </div>
                           <div className="pseudo-table col-md-6">
                                  <input id="yourname" name="autres" type="texte" placeholder='Autres contact'/>
                               
                           </div>
                        </div> 
                           
                        
                        <div className="pseudo-table text-message">
                           <textarea id="story" name="sujet" className='text' rows="3" cols="33"  placeholder="Sujet..." required >
                           </textarea>
                        </div>
                        
                        <div className=" send">
                            <button className="noselect">Envoyer</button>
                        </div>
                        <div>
                            {result ? <Result/> : null}
                        </div>
                       
                   </form>

    
    );
  
}


export default CompContact;