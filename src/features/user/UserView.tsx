import React from 'react';
// import { useSelector,useDispatch } from 'react-redux';
import { useAppSelector , useAppDispatch } from '../../app/hook';
import { fetchUsers, IUser } from './userSlice';


const UserView = () => {
    const dispatch  = useAppDispatch()
    const data = useAppSelector(state => state.user)
    console.log(data);

   const getUsers =React.useCallback(() => {
     dispatch(fetchUsers())
   },[fetchUsers])

   React.useEffect(() => { 
    getUsers()
   },[getUsers])
  return (
    <div>
      <h3>List of users</h3>
      { 
        data.loading && <p>loading...</p>
      }
      { 
        !data.loading && data.error ? ( 
          <p>{data.error}</p>
        ) :(
          data.users?.map((user : IUser )=> (
            <ul>
               <li key= {user.id} >
                {user.name}
               </li>
            </ul>
          ))
        )
      }
    </div>
  );
}

export default UserView;
