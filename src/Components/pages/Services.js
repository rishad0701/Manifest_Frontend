import React from 'react';
import '../../App.css';
import image1 from '../images/Chikmagalur.jpg';
import image2 from '../images/Coorg.jpg';
import image3 from '../images/Gokarna.jpg';
import image4 from '../images/Wayanad.png';
import image5 from '../images/kodaikenal.jpg';
import image6 from '../images/img-9.jpg';
import image7 from '../images/img-home.jpg';
import image8 from '../images/Kerala_trip__12_.png';
import image9 from '../images/Kerala_Backpacking_trip-_Tripper_Trails__8_.jpg';
import './services.css';
import '../Cards.css';
import CardsServices from './CardsServices';
import Footer from '../Footer';
import { useData } from '../Context';
import Book from '../Book';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const {state,setState} = useData();
  const usenavigate = useNavigate();
  useEffect(() => {
    let username = sessionStorage.getItem('UserName');
    if(username===''||username===null){
        usenavigate('/login');
    }
    window.scrollTo(0, 0); 
  });
  return(
  <div>
    {state.open && <Book />} 
    <div className={state.open ? 'blur' : null}>
      <div className='Services'>
        <h1>Check out the Recent Trips here!!</h1>
        <p>Discover the unique destinations</p>
        <hr style={{borderTop:'2px solid ',margin:'0 50px 10px'}}></hr>
        <h1 style={{color:'gray',margin:'50px 0'}}>-- Upcomin Weekend Trips --</h1>
        <div className='services1'>
          <div className='services2'>
            <CardsServices
              image={image1}
              title = 'Chikmagalur'
              content = "1 Night and 2 Days"
              cost='Cost :-- 4599/-'
              members='Members :-- 15'
              vehichle='tempo'
              Type = {false}
              id = {1}
            />
            <CardsServices
              image={image2}
              title = 'Coorg'
              content = "1 Night and 2 Days"
              cost='Cost :-- 4599/-'
              members='Members :-- 15'
              vehichle='tempo'
              Type = {false}
              id = {2}
            />
            <CardsServices
              image={image3}
              title = 'Gokarna'
              content = "1 Night and 2 Days"
              cost='Cost :-- 4599/-'
              members='Members :-- 15'
              vehichle='tempo'
              Type = {false}
              id = {3}
            />
            <CardsServices
              image={image4}
              title = 'Wayanad'
              content = "1 Night and 2 Days"
              cost='Cost :-- 4599/-'
              members='Members :-- 15'
              vehichle='tempo'
              Type = {false}
              id = {4}
            />
            <CardsServices
              image={image5}
              title = 'kodaikenal'
              content = "1 Night and 2 Days"
              cost='Cost :-- 4599/-'
              members='Members :-- 15'
              vehichle='tempo'
              Type = {false}
              id = {5}
            />
            <CardsServices
              image={image6}
              title = 'munnar'
              content = "1 Night and 2 Days"
              cost='Cost :-- 4599/-'
              members='Members :-- 15'
              vehichle='tempo'
              Type = {false}
              id = {6}
            />
            <CardsServices
              image={image7}
              title = 'ooty'
              content = "1 Night and 2 Days"
              cost='Cost :-- 4599/-'
              members='Members :-- 15'
              vehichle='tempo'
              Type = {false}
              id = {7}
            />
          </div>
          <hr style={{borderTop:'2px solid ',margin:'0 50px 10px'}}></hr>
        </div>

        <div className='services3'>
          <h1 style={{color:'gray',margin:'50px 0'}}>-- Long Weekend Trips --</h1>
          <div className='services2'>
            <CardsServices
              image={image8}
              title = 'Kerala eskapade(Kochi-alappe-varkala)'
              content = "2 Night and 3 Days"
              cost='Cost :-- 4599/-'
              members='Members :-- 15'
              vehichle='tempo'
              Type = {true}
              id = {1}
            />
            <CardsServices
              image={image2}
              title = 'Coorg'
              content = "3 Nights and 4 Days"
              cost='Cost :-- 4599/-'
              members='Members :-- 15'
              vehichle='tempo'
              Type = {true}
              id = {2}
            />
            <CardsServices
              image={image3}
              title = 'Kodaikena backpacking trip'
              content = "2 Night and 3 Days"
              cost='Cost :-- 4599/-'
              members='Members :-- 15'
              vehichle='tempo'
              Type = {true}
              id = {3}
            />
            <CardsServices
              image={image9}
              title = 'Tamilanadu'
              content = "4 Night and 5 Days"
              cost='Cost :-- 4599/-'
              members='Members :-- 15'
              vehichle='tempo'
              Type = {true}
              id = {4}
            />
          </div>
        </div>

        <Footer/>
      </div>
    </div>
  </div>
  )
  
}
