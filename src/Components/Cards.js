import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import image2 from '../Components/images/Maldives.jpg';
import image3 from '../Components/images/img-3.jpg';
import image4 from '../Components/images/img-4.jpg';
import image9 from '../Components/images/11.jpg';
import image8 from '../Components/images/Thar.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={image9}
              text='Explore the hidden waterfall deep in Kerala'
              label='Adventure'
              path='/services'
              place='kerala'
              id = {1}
            />
            <CardItem
              src={image2}
              text='Travel through the Islands of Maldives in a Private Cruise'
              label='Luxury'
              path='/services'
              place='Maldives'
              id = {2}
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={image3}
              text='Set Sail in the Indian Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
              place='IndianOcean'
              id = {3}
            />
            <CardItem
              src={image4}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='Himalaya'
              id = {4}
            />
            <CardItem
              src={image8}
              text='Ride through the Thar Desert on a guided camel tour'
              label='Adrenaline'
              path='/services'
              place='Thar'
              id = {5}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
