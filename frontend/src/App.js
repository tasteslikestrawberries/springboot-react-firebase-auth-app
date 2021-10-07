import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
  Link
} from "react-router-dom"

import { useAuth } from './contexts/AuthContext'

//components
//import ScrollToTop from './components/ScrollToTop'
import PrivateRoute from './components/Auth/PrivateRoute'
import Signup from './components/Auth/Signup'
import Login from "./components/Auth/Login"
import ForgotPassword from './components/Auth/ForgotPassword'
import UpdateProfile from './components/Auth/UpdateProfile'

import Users from './components/Users/Users'
import SideBar from './components/Navigation/SideBar'
import MyProfile from './components/MyProfile/MyProfile'
import Files from './components/Files/Files'

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Button, NavDropdown} from 'react-bootstrap';
import './styles.css';  

function App() {

  //prevents window from closing (alerts the user)
  //https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload

    window.onbeforeunload = (event) => {
      const e = event || window.event;
      // Cancel the event
      e.preventDefault();
      if (e) {
        e.returnValue = ''; // browser defines the message
      }
      return ''; 
    };

  /*AUTH*/
  const [ , setError] = useState('')
  const { currentUser, logout } = useAuth()
  const history = useHistory()

    async function handleLogout() {
      if (window.confirm('Log out? Changes you made may not be saved')===false) return
      
      setError('')
      try {
        await logout()
        history.push('/login')
      } catch {
        setError('Failed to log out')
      }
    }

  return (
    <>
      <Router>
          <Navbar bg="light" variant="light" sticky="top">
            <Container>
              <Navbar.Brand>My App</Navbar.Brand>

              {/*if user is logged in, show this: */}
              {currentUser &&
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <NavDropdown title={currentUser.email} style={{fontWeight:'bold'}} id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to='/update-profile'>Update Profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to='/users'>Register New User</NavDropdown.Item>
                  </NavDropdown>

                </Navbar.Text>
                <Button variant='link' onClick={handleLogout}>Log Out</Button>
              </Navbar.Collapse>}
            </Container>
          </Navbar>

          {!currentUser ? <>
              <Route path="/login" component={Login} />
              <Route path='/forgot-password' component={ForgotPassword} />
              <Redirect to='/login' component={Login} />
            </>      
            : <div className='myProfileContainer' >
              <SideBar />
              <Switch>
                <Route exact path='/users' component={Users} />
                <Route exact path='/myfiles' component={Files} />
               
                <PrivateRoute exact path='/' component={MyProfile} />
                <Redirect from='/myprofile' to='/'/>
                <PrivateRoute path='/update-profile' component={UpdateProfile} />
                <Route path='/signup' component={Signup} />
  
                <Redirect to="/" />
              </Switch>
            </div>
          }
      </Router>
    </>
  )

}

export default App;