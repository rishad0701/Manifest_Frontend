import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useData} from '../Context';

export default function CardsServices(props) {

    const {state,setState} = useData();
    const nav = useNavigate();
    const bookslot = ()=>{

        if(props.Type){
            setState({
                ...state,
                open : true,
                spot : props.title,
                weekend : false,
                weekendId : null,
                Longweekendid : props.id
              })
        }
        else{
            setState({
                ...state,
                open : true,
                spot : props.title,
                weekend : false,
                weekendId : props.id,
                Longweekendid : null
              })
        }
        
    }

  return (
    <div>
        <div className="card shadow-lg" style={{width: "18rem"}}>
            <img src={props.image} classNameName="card-img-top" style={{height:"15rem"}}  alt="tour"/>
            <div classNameName="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.content}</p>
            </div>
            <ul className="list-group list-group-flush">
            <li className="list-group-item">{props.cost}</li>
            <li className="list-group-item">{props.members}</li>
            <li className="list-group-item">{props.vehichle}</li>
            </ul>
            <div className="card-body">
            <a href="#" onClick={bookslot} className="card-link">Book SLot</a>
            </div>
        </div>
    </div>
  )
}
