import React, { useEffect } from 'react'
import {useData} from './Context';
import './book.css';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function Book() {

    const {state,setState} = useData();
    const [places,setPlaces] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const[count,setCount] = useState(0);
    const[Name,setName] = useState('');
    const[PhoneNumber,setPhoneNumber] = useState('');
    const[Email,setEmail] = useState('');
    const[members,setMembers] = useState('');
    const[weekentCount,setWeekendCount] = useState();
    const [error, setError] = useState('');
    const [error2, setError2] = useState('');
    const[placeId,setPlaceId] = useState([]);

    useEffect(()=>{
      const getplace = async()=>{
        let jwt = sessionStorage.getItem('Token');
        await fetch(`http://localhost:54850/api/Manifest/places/${state.id}`,{method:"POST",
        headers:{'Authorization' : 'bearer '+jwt,'Accept':'application/json','Content-Type':'application/json'},})
        .then(resp=>resp.json())
        .then(
          data=>{
            setPlaces(data);
            console.log(places);
          }
        )
        .catch(error => {
          console.error('Error fetching places:', error);
      });
      }
      if (state.id) {
        getplace();
    }
    },[state.id])
    const handlesubmit=async(e)=>{
      
      e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (emailRegex.test(Email)) {
              try{
                let jwt = sessionStorage.getItem('Token');
                console.log(placeId);
              const x = await fetch("http://localhost:54850/api/Manifest/Bookings",{
                    method:"POST",
                    headers:{'Authorization' : 'bearer '+jwt,'Accept':'application/json','Content-Type':'application/json'},
                    body:JSON.stringify({
                        Name : Name,
                        PhoneNumber : PhoneNumber,
                        Email : Email,
                        PlaceId : placeId.join(','),
                        WeekendId : state.weekendId,
                        LongWeekendId : state.Longweekendid,
        
                    })
                    
                })
                toast.success('Succesfully Submitted!!!', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
                setName('');
                setEmail('');
                setMembers(1);
                setPhoneNumber('');
                setCount(0);
                setIsOpen(!isOpen);
                setWeekendCount(1);
                setPlaceId([]);
                setError('')
              }
              catch{
                console.log("Failed");
                toast.error('Failed!!!!', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
              }
          setError2('');
        } else {
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

const validateEmail = (x) => {
  const inputEmail = x;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  if (emailRegex.test(inputEmail)) {
    setEmail(inputEmail);
    setError2('');
  } else {
    setError2('Please enter a valid email address');
  }
}
    const toggleb = ()=>{
      setState({
        ...state,
        open : false,
      })
    }

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };
  const memscount = (e)=>{
      const x = parseInt(e.target.value,10);
      setMembers(x);
      // setCount(prev=>prev*x);
      setCount(selectedOptions.length*2000*x);
      setWeekendCount(x*4599);
  }

  const handleOptionClick = (value) => {
    let updatedOptions;
    let updateplaceid;
    
    if(placeId.includes(value.placeId)){
      updateplaceid = placeId.filter(option=>option!==value.placeId)
    }
    
    if (selectedOptions.includes(value.placeName)) {
      updatedOptions = selectedOptions.filter(option => option !== value.placeName);
      
    } else {
      updateplaceid = [...placeId,value.placeId];
      updatedOptions = [...selectedOptions, value.placeName];
    }
    setSelectedOptions(updatedOptions);
    setPlaceId(updateplaceid);
    setCount(updatedOptions.length * 2000 * members);
  };
     if(!state.open) return null;
    return (
      <div className='book-container'>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored"/>           
        <button type="button" className="btn-close" onClick={toggleb} style={{backgroundColor:'skyblue'}} aria-label="Close">
          <span aria-hidden="true"></span>
        </button>
        <h1 style={{color: 'skyblue'}}>{state.spot}</h1>
        <form onSubmit={handlesubmit} style={{ width: '400px' }}>

        {state.weekend && 
        (<div className="mb-3">
        <div className="form-control" onClick={toggleOptions} style={{ cursor: 'pointer' }}>
          {selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Select places'}
          <span className="dropdown-icon"></span>
        </div>
        {isOpen && (
          <ul className="options">
            {places.map(option => (
              <li key={option.placeId} onClick={() => handleOptionClick(option) }>
                <label>
                  <input type="checkbox" checked={selectedOptions.includes(option.placeName) && placeId.includes(option.placeId)} readOnly />
                  {option.placeName}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>)}
      
          <div className="mb-3">
          {/* <label for="exampleInputPassword1"  className="form-label">Password</label> */}
          <input type="text" placeholder='Name' className="form-control" id="exampleInputPassword1" value={Name} onChange={e=>setName(e.target.value)} required/>
          </div>
          <div className="mb-3">
          {/* <label for="exampleInputPassword1"  className="form-label">Password</label> */}
          <input type="text" placeholder='PhoneNumber' className="form-control" id="exampleInputPassword1" value={PhoneNumber} onChange={validatePhoneNumber} required/>
          {error && (
            <div className="error-message">{error}</div>
          )}
          </div>
          <div className="mb-3">
          {/* <label for="exampleInputPassword1"  className="form-label">Password</label> */}
          <input type="text" placeholder='Email' className="form-control" value={Email}  onChange={e=>setEmail(e.target.value)} required/>
          {error2 && (
            <div className="error-message">{error2}</div>
          )}
          </div>
          <div className="mb-3">
          {/* <label for="exampleInputPassword1"  className="form-label">Password</label> */}
          <input type="number" placeholder='Count' className="form-control" value={members}  onChange={e=>memscount(e)}  required/>
          </div>

          {state.weekend && 
          <div className="mb-3 form-check">
          {/* <input type="checkbox" className="form-check-input" id="exampleCheck1" /> */}
          <label className="form-check-label" for="exampleCheck1">Total Amount Per Head</label>
          <h5>{count}</h5>
          </div>}
          
          {!state.weekend &&
          <div className="mb-3 form-check">
          {/* <input type="checkbox" className="form-check-input" id="exampleCheck1" /> */}
          <label className="form-check-label" for="exampleCheck1">Total Amount </label>
          <h5>{weekentCount}</h5>
          </div>}

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
};
