import React, { useEffect, useState } from "react"

import axios from '../../axiosCommonInstance'
import { useAuth } from "../../contexts/AuthContext";

//components
import Personal from './PersonalInformation'
import Contact from "./Contact"
import Work from './WorkInformation'

//assets
import placeholder from '../assets/placeholder.png'

//styles
import {Tabs, Tab} from 'react-bootstrap'
import { Icon } from '@iconify/react';

const MyProfile = () => {
    const { currentUser } = useAuth()
    const [user, setUser] = useState({}) //initial value is empty (user) object

    useEffect( () => {
        axios.get("http://localhost:8080/user/getUserByUid", {
          params: {
            uid: currentUser.uid
          }
        })
        .then((result) => {
            setUser(result.data)
        }).catch(err => {
          console.log(err)
        })
    }, [currentUser])
    
    //console.log(user)

  return(
    <>
      <div className='containerPaper'>
          <div className='cardsHeader'>
              <Icon icon="bx:bx-table" color="#0d6efd" height="44" />
              <h1>My Profile</h1>
          </div>

          <div className='myProfileHeadlineWrapper'>
              <img src={placeholder} className='profileImg' alt='profileimg'></img>
              <div className='myProfileHeadlineNameRoleWrapper'>   
                <h2>{user.name} {user.surname}</h2>
                <h5>Test at Test</h5>
              </div> 
          </div>

          <Tabs defaultActiveKey="personalinformation" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="personalinformation" title="Personal">
                  <Personal user={user}/>
              </Tab>
              <Tab eventKey="contact" title="Contact">
                  <Contact user={user} currentUser={currentUser} />
              </Tab>
              <Tab eventKey="workinformation" title="Work">
                  <Work user={user} />
              </Tab>
          </Tabs>
      </div>
    </>
    );
}

export default MyProfile