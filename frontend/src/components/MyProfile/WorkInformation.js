import React from "react"

const WorkInformation = ({user}) => {
    return(
        <>
        <ul className='personalInformationUL'>
            <div className='liWrapper'><li>Employment Date:</li>{user.employmentdate}</div>
            <div className='liWrapper'><li>Work Location:</li>{user.worklocation}</div>
            <div className='liWrapper'><li>Department:</li>{user.department}</div>
        </ul>
        </>
    );
}

export default WorkInformation