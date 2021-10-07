import React from "react"
import { useAuth } from "../../contexts/AuthContext";

const Contact = () => {
  const { currentUser } = useAuth()
    return(
        <>  
          <ul className='personalInformationUL'>
              <div className='liWrapper'><li>Phone Number:</li>{currentUser.phone}</div>
              <div className='liWrapper'><li>Email:</li>{currentUser.email}</div>
              <div className='liWrapper'><li>City:</li>{currentUser.city}</div>
              <div className='liWrapper'><li>Address:</li>{currentUser.address}</div>
          </ul>
        </>
    );
}

export default Contact