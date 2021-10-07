import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from 'react-pro-sidebar'

//icons
import { Icon } from '@iconify/react';
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi'

//styles
import 'react-pro-sidebar/dist/css/styles.css';
import './SideBar.css'


const SideBar = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id='header'>
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className='logotext'>
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? <Icon icon="ion:logo-android" color="#0d6efd" /> : 'Big Logo'}</p>
            </div>
            <div className='closemenu' onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape='square'>
              <MenuItem>
              <Link to='/' active={true} icon={<FiHome />}>
                My Profile
              </Link>
              </MenuItem>
              <MenuItem>
              <Link to='/myfiles' active={true} icon={<FiHome />}>
                My Files
              </Link>
              </MenuItem>
             
  
            </Menu>
          </SidebarContent>
          {/*<SidebarFooter>
            <Menu iconShape='square'>
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>*/}
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBar;