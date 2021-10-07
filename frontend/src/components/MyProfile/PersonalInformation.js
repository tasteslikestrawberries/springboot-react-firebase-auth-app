import React from 'react'
//import { useEffect }  from 'react'
//import axios from '../../axiosCommonInstance'
import { useAuth } from "../../contexts/AuthContext";

const PersonalInformation = () => {
 const { currentUser } = useAuth()
  console.log(currentUser.uid)
 
  //TODO
  /*useEffect( () => {
    axios.get("http://localhost:8080/user/getUserByUid")
    .then((result) => {
        console.log(result.data)
    }).catch(err => {
      console.log(err)
    })
}, [])*/

    return(
        <>  
          <ul className='personalInformationUL'>
              <div className='liWrapper'><li>Name:</li>{currentUser.name}</div>
              <div className='liWrapper'><li>Surname:</li>{currentUser.surname}</div>
              <div className='liWrapper'><li>Birth Date:</li>{currentUser.birthdate}</div>
              <div className='liWrapper'><li>Gender:</li>{currentUser.gender}</div>
          </ul>
        </>
    );
}

export default PersonalInformation