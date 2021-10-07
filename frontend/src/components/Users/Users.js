import React from 'react'

//components
import MultiForm from './MultiForm';
import UsersTable from './UsersTable';

//styles
import {Tabs, Tab} from 'react-bootstrap'

const Users = () => {
    return (
        <div className='containerPaper'>
            <h1>Users</h1>

            {/*defaultActiveKey sets default selected tab*/}
            <Tabs defaultActiveKey="usersForm" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="usersForm" title="Register User" >
                        <MultiForm />
                    </Tab>
                    <Tab eventKey="usersList" title="Users List">
                        <UsersTable />
                    </Tab>
                   
            </Tabs>
        </div>
            
    );
}

export default Users