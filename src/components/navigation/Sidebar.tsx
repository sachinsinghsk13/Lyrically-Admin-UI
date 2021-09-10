import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import '../../styles/sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar text-white">
        <div className="top-content d-flex flex-column justify-content-center p-2 align-items-center">
            <img src="avtar.png" alt="" className="m-2"/>
            <h5 className="m-2">Sachin Singh</h5>
            <input type="text" className="form-control form-control-sm" placeholder="Search..."/>
        </div>
        <div className="sidebar-nav">
          <ul className="container-fluid">
            <li className="row">
                <i className="fas fa-coffee"></i>
            </li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
        <div className="bottom-content">
            <h6 className="text-center">Copyright</h6>
        </div>
    </div>
  );
};

export default Sidebar;