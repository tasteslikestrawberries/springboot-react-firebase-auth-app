import React from "react"
import { useAuth } from "../../contexts/AuthContext";

const WorkInformation = () => {
  const { currentUser } = useAuth()
    return(
        <>
        <ul className='personalInformationUL'>
            <div className='liWrapper'><li>Employment Date:</li>{currentUser.employmentdate}</div>
            <div className='liWrapper'><li>Work Location:</li>{currentUser.worklocation}</div>
            <div className='liWrapper'><li>Department:</li>{currentUser.department}</div>
        </ul>
        </>
    );
}

export default WorkInformation