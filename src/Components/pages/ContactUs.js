import React, { useState,useRef } from 'react';
import './contactus.css';
import imagee from '../images/img-home.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer';
import { useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

export default function ContactUs() {

    const[Name,setName] = useState('');
    const[PhoneNumber,setPhoneNumber] = useState('');
    const[Email,setEmail] = useState('');
    const[Place,setPlace] = useState('');
    const [error, setError] = useState('');
    const [error2, setError2] = useState('');
    const formRef = useRef();
    const usenavigate = useNavigate();

    useEffect(() => {
        let username = sessionStorage.getItem('UserName');
    if(username===''||username===null){
        usenavigate('/login');
    }
        window.scrollTo(0, 0); 
      });

    const submit=(e)=>{
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (emailRegex.test(Email)) {
        let obj = {Name,PhoneNumber,Email,Place};
        let jwt = sessionStorage.getItem('Token');
        const x = fetch("http://localhost:54850/api/Manifest/ContactUs",{
            method:"POST",
            headers:{'Authorization' : 'bearer '+jwt,'Accept':'application/json','Content-Type':'application/json'},
            body:JSON.stringify({
                Name : obj.Name,
                PhoneNumber : obj.PhoneNumber,
                Email :obj.Email,
                LongTrips : []
            })
        }).then((res)=>{
            console.log(res);
            toast.success('Succesfully Submitted!!!', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
            setName('');
            setEmail('');
            setPhoneNumber('');
            setPlace('');
            emailjs
                .sendForm('service_tqcfyvs', 'template_6fj5rz5', formRef.current, {
                    publicKey: 'AEEWRqXUxLPCd4J3N',
                })
                .then(
                    () => {
                    console.log('SUCCESS!');
                    },
                    (error) => {
                    console.log('FAILED...', error.text);
                    },
                );
        }).catch((err)=>{
            console.log("Failed");
            toast.error('Manifest Failed!!!!', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});

        });
        setError2('');
    }
    else{
        setError2('Please enter a valid email address');
    }
}

    const validatePhoneNumber = (e) => {
        const inputPhoneNumber = e.target.value;
        const phoneNumberRegex = /^\d{0,10}$/; 
        const numericRegex = /^[0-9]*$/;
        if (numericRegex.test(inputPhoneNumber) && phoneNumberRegex.test(inputPhoneNumber)) {
          setPhoneNumber(inputPhoneNumber);
          setError('');
        } else {
          setError('Please enter up to 10 numeric digits');
        }
      }

    const handleFocus = (e)=>{
        e.target.removeAttribute('placeholder');
    }

    const handleBlur = (e)=>{
        e.target.setAttribute('placeholder', e.target.name === 'name' ? 'Enter the Name' :
            e.target.name === 'phone' ? 'Enter the Phone Number' :
            e.target.name === 'email' ? 'Enter the Email' :
            e.target.name === 'place'? 'Enter the place Name':'')
    }
  return (
    <>
    <div>
        <img className='img1' src={imagee} alt='ad'></img>
        <div className='contactus1'> 
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored"/>           
            <div className='contactus2'>
                <h1>Contact Us</h1>
                <p>hello.trvl@gmail.com/ +9231934239</p>
                <h1 style={{color:'skyblue'}}>We will be happy to help you</h1>
            </div>
            <div>
            <form ref={formRef} className='Container1' onSubmit={submit}>
                <div className="form-group1">
                    {/* <label htmlFor="name">Name:</label> */}
                    <input className='input1' type="text" id="name" name="name" placeholder='Enter the Name' onFocus={handleFocus} onBlur={handleBlur} value={Name} onChange={e=>setName(e.target.value)} required />
                </div>
                <div className="form-group1">
                    {/* <label htmlFor="phone">Phone Number:</label> */}
                    <input className='input1' type="tel" id="phone" name="phone" placeholder='Enter the Phone Number' onFocus={handleFocus} onBlur={handleBlur} value={PhoneNumber} onChange={validatePhoneNumber}  required />
                    {error && (
                    <div className="error-message">{error}</div>
                    )}
                </div>
                <div className="form-group1">
                    {/* <label htmlFor="email">Email:</label> */}
                    <input className='input1' type="email" id="email" name="email" placeholder='Enter the Email'onFocus={handleFocus} onBlur={handleBlur} value={Email} onChange={e=>setEmail(e.target.value)} required />
                    {error2 && (
                    <div className="error-message">{error2}</div>
                    )}
                </div>
                <div className="form-group1">
                    {/* <label htmlFor="name">Name:</label> */}
                    <input className='input1' type="text" id="place"  name="place" placeholder='Enter the place Name' onFocus={handleFocus} onBlur={handleBlur} value={Place} onChange={e=>setPlace(e.target.value)} required />
                </div>
                <button type="submit" className="btn1">Submit</button>
            </form>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
