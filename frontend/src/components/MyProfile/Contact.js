import React from "react"

const Contact = ({user, currentUser}) => {
  return(
    <>  
      <ul className='personalInformationUL'>
          <div className='liWrapper'><li>Phone Number:</li>{user.phone}</div>
          <div className='liWrapper'><li>Email:</li>{currentUser.email}</div> 
          <div className='liWrapper'><li>City:</li>{user.city}</div>
          <div className='liWrapper'><li>Address:</li>{user.address}</div>
      </ul>
    </>
    );
}

export default Contact