import React from 'react'

const PersonalInformation = ({user}) => {

    return(
        <>  
          <ul className='personalInformationUL'>
              <div className='liWrapper'><li>Name:</li>{user.name}</div>
              <div className='liWrapper'><li>Surname:</li>{user.surname}</div>
              <div className='liWrapper'><li>Birth Date:</li>{user.birthdate}</div>
              <div className='liWrapper'><li>Gender:</li>{user.gender}</div>
          </ul>
        </>
    );
}

export default PersonalInformation