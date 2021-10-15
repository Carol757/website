import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
   
    
    <div className='cards'>
      <h1>Grow your oak!!</h1>
      <section><div class="row">
        <h2>
                <p class="mt-4 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                    like Aldus PageMaker including versions of Lorem Ipsum</p> </h2>
             </div>   </section>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text=' 
             '
              label='Adventure'
              path='/services'
            />
            {/* <CardItem
              
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            /> */}
          </ul>
          <h1>Grow your oak!!</h1>
          <br></br>
          <br></br>
          <ul className='cards__items'>
          
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
