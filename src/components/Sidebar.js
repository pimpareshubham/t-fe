import React from 'react';
import logo from '../images/logo.png';
import profilePic from '../images/ProfilePic.png';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Sidebar() {
    const user = useSelector((state) => state.userReducer);
    return (
        <div className='sidebar-body sidebar'>
            <img src={logo} height={"70vh"} className='ms-3 logo' alt="Logo" />
            <div className='d-flex flex-column mt-3 ms-4 menu'>
                <NavLink className='menu-item fw-bold p-2 ps-3' to='/home'>
                    <i className="fa-solid fa-house me-3 icons"></i>
                   
                </NavLink>
                <NavLink className='menu-item fw-bold p-2 ps-3' to='/profile'>
                    <i className="fa-solid fa-user me-3 icons"></i>
                    
                </NavLink>
                <NavLink className='menu-item fw-bold p-2 ps-3' to='/login'>
                    <i className="fa-solid fa-right-from-bracket me-3 icons"></i>
                  
                </NavLink>
                <div className='position-absolute bottom-0 pb-4 d-flex flex-column profile-section'>
                    <img src={profilePic} height={"50vh"} className='profilepic' alt="Profile" />
                    
                        <p className='fw-bold'>{user.user.fullName}@123</p>
                      
                    
                </div>
            </div>
        </div>
    );
}
