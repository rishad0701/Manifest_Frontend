import { Link } from 'react-router-dom';
import {useData} from './Context';

function CardItem(props) {
  const {state,setState} = useData();

  const book = (e)=>{
    e.preventDefault();
    setState({
      ...state,
      open : true,
      spot : props.text,
      spot2 : props.place,
      id : props.id,
      weekend : true,
      weekendId : null,
      Longweekendid : null
    })
  } 
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' onClick={book} to="#">
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Imag'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
