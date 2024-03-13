import React from 'react'
import imagee from '../images/Aboutus.jpeg';
import './aboutus.css';
import Footer from '../Footer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AboutUs() {
  const usenavigate = useNavigate();
  useEffect(() => {
    let username = sessionStorage.getItem('UserName');
    if(username===''||username===null){
        usenavigate('/login');
    }
    window.scrollTo(0, 0); 
  });
  return (
    <>
    <div className='aboutus1'>
      <div className='aboutus2' style={{paddingTop:'90px'}}>
        <h1>Our Travel Community</h1>
        <p style={{fontSize:'50px',color:'skyblue'}}>Who we are??</p>
      </div>
      <div className='aboutus3'>
        <h1>-- How It All Began --</h1>
        <p>We are a group of passionate travellers who firmly believe that travel is not a luxury. Travelling is about growing up, believing in what you love and working hard enough to get it, learning and experiencing new things and constantly educating yourself. Travelling is knowing that there is no obstacle big enough in this world to stop you from being happy.</p>
        <h2>Why TRVL??</h2>
        <p>There are hundreds of travel companies to choose from. But why go tripping with Tripper Trails?</p>
        <h2>1.Because we are 'by travellers, for travellers'</h2>
        <p>We introduce you to the best and the off-beat places that may not be found by usual tourists.</p>
        <p>We research exclusively on the places chosen by you, consider reviews and feedback from people, especially travel bloggers who have visited the place and plan your itinerary. This way, we ensure that you do not see a picture of a place you had been to and say, “Damn, why did I not find it out earlier?”</p>
        <h2>2.You matter!</h2>
        <p>You, yes, you are the priority. It’s your trip but our responsibility to ensure that you have the best tale to narrate.</p>
        <p>We customize your itinerary to suit your ways, whatever you want. You want to be on a lazy vacation or go restaurant hopping? Or trek to a far off mountain or feel your adrenaline rush? Or just explore the unexplored. All you have to do is tell us what you need and relax! We will take care of it.</p>
        <h2>3.No compromise on quality</h2>
        <p>When we say travelling is not a luxury, we mean it. We don’t intend to put a dent on your pocket but that doesn’t mean we compromise with the quality. Offering the highest standards with the best possible price is simply our forte!</p>
        <h2>4.Practising what we preach!</h2>
        <p>While many companies promise to revert back within 24 hours, we actually do it. Any query you have at any point of time, ask away!</p>
      </div>
    </div>
    <Footer/>
    </>
  )
}
