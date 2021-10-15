import React from 'react';
import './Lock.css';
import CardItems from './CardItems';

function Lock() {
    return (
    //     <div>
    //         <section>
    //   <ul className='card__items'>
    //         <CardItems
    //           src='images/img-9.jpg'
    //           text=''
    //           label=''
    //           path='/services'
    //         />
    //         </ul>

    //  </section>

    //     </div>
    //     );
    
   
       
         
          
          <div className='card'>
            
            <section> <h2>
                <p class="mt-4 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                    like Aldus PageMaker including versions of Lorem Ipsum</p> </h2> </section>
            
              <div className='card__wrapper'>
                  <section style={{position: 'absolute', right: 0,textSizeAdjust:10000}} >
                <ul className='card__items'>
               <h2>  
               <br></br>
               <br></br>
               <br></br>
               <h1>Grow your oak!!</h1>
              hvb j lsd j klmpk
              <br></br>
               hvb j lsd j klmpkkmjpojpkmjpojp 
               <br></br>
                hvb j lsd j klmpkkmjpojp
              <br></br>
              <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
              <br></br> <br></br> <br></br> <br></br>
              <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
              <br></br> <br></br> <br></br> <br></br>
              <h1>Grow your oak!!</h1>
              hvb j lsd j klmpkkmjpojpkmjpojp 
              </h2>
                </ul>
                
</section>
                <ul className='card__items'>
                  <CardItems
                    src='images/img-3.jpg'
                    text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                    label='Mystery'
                    path='/services'
                  />
                  <br></br><br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
              <br></br> <br></br> <br></br> <br></br>
              
              <br></br><br></br> 
                  <CardItems
                    src='images/img-4.jpg'
                    text='Experience Football on Top of the Himilayan Mountains'
                    label='Adventure'
                    path='/products'
                  />
                    <br></br><br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
              <br></br> <br></br> <br></br> <br></br>
            
              <br></br><br></br> 
                  <CardItems
                    src='images/img-8.jpg'
                    text='Ride through the Sahara Desert on a guided camel tour'
                    label='Adrenaline'
                    path='/sign-up'
                  />
                </ul>
              </div>
            </div>
          
        );
      }
      
      
    export default Lock;