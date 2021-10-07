import React from "react"

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
                <h2>Joanna Johnson</h2>
                <h5>Junior Developer at Test</h5>
              </div> 
          </div>

          <Tabs defaultActiveKey="personalinformation" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="personalinformation" title="Personal">
                  <Personal />
              </Tab>
              <Tab eventKey="contact" title="Contact">
                  <Contact />
              </Tab>
              <Tab eventKey="workinformation" title="Work">
                  <Work />
              </Tab>
          </Tabs>
      </div>
    </>
    );
}

export default MyProfile