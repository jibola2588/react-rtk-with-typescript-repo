import React from 'react';
// import { useSelector,useDispatch } from 'react-redux';
import { ordered,restocked } from './iceCreamSlice';
import { useAppSelector,useAppDispatch } from '../../app/hook';


const IceCreamView = () => {
  const {num_of_iceCream }=   useAppSelector(state => state.iceCream)
//    console.log(num_of_iceCream)
   const dispatch = useAppDispatch()
  return (
    <div>
      <h3>Number of icecreams : {num_of_iceCream} </h3>
      <button
      onClick={ () =>dispatch(ordered())}
      >ordered icrecream</button>
      <button
      onClick={ () => dispatch(restocked(10))}
      >restocked icecream</button>
    </div>
  );
}

export default IceCreamView;
