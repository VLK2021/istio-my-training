import React from 'react';

import './SideBarStyle.css';
import {Link, NavLink} from "react-router-dom";

const SideBar = () => {



    return (
        <div className={'sideBar'}>
            <h1>Menu</h1>
            <NavLink to={'/first'}> посилання </NavLink>
            <NavLink to={'/first'}> посилання </NavLink>
            <NavLink to={'/first'}> посилання </NavLink>
            <NavLink to={'/first'}> посилання </NavLink>
            <NavLink to={'/first'}> посилання </NavLink>
            <NavLink to={'/first'}> посилання </NavLink>
            <hr/>


            <select name="name" id="nm">
                <option value="val1"><Link to={'#'}>посилання</Link></option>
                <option value="val1"><Link to={'#'}>посилання</Link></option>
                <option value="val1"><Link to={'#'}>посилання</Link></option>
                <option value="val1"><Link to={'#'}>посилання</Link></option>
            </select>
            <hr/>
            <ul><strong>Заголовок1</strong>
                <li><NavLink to={'/second'}> посилання </NavLink></li>
                <li><NavLink to={'/second'}> посилання </NavLink></li>
                <li><NavLink to={'/second'}> посилання </NavLink></li>
            </ul>
            <ul><strong>Заголовок2</strong>
                <li><NavLink to={'/second'}> посилання </NavLink></li>
                <li><NavLink to={'/second'}> посилання </NavLink></li>
                <li><NavLink to={'/second'}> посилання </NavLink></li>
            </ul>

            <ul><strong>Заголовок3</strong>
                <li><NavLink to={'/second'}> посилання </NavLink></li>
                <li><NavLink to={'/second'}> посилання </NavLink></li>
                <li><NavLink to={'/second'}> посилання </NavLink></li>
            </ul>


        </div>
    );
};

export default SideBar;