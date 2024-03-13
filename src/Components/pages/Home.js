import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Book from '../Book';
import { useData } from '../Context';


function Home() {

  const usenavigate = useNavigate();
  const {state,setState} = useData();

  useEffect(()=>{

    let username = sessionStorage.getItem('UserName');
    if(username===''||username===null){
        usenavigate('/login');
    }
    window.scrollTo(0, 0);
  },);

  return (
    // <>
    //   <Book/>
    //   <HeroSection />
    //   <Cards />
    //   <Footer />
    // </>
    <div >
      {state.open && <Book />} 
      <div className={state.open ? 'blur' : null}>  
        <div className="content">
          <HeroSection />
          <Cards />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
