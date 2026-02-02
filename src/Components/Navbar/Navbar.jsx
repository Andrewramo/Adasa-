import React from 'react'
import style from './navbar.module.css'
import logo from "../../assets/logo.png"
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {


    return (
        <>
            <nav className={`${style.navbar} bg-web-black w-100 bg position-sticky top-0 end-0 py-3 px-5 d-flex justify-content-center`}>
                <div className="nav-content w-75 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center cursor-pointer">
                        <img src={logo} className={`${style.icon}`} alt="..." />
                        <div className="logo-title me-2">
                            <h2 className="m-0 text-end text-white">عدسة</h2>
                            <p className="m-0 main-color fs-6">عالم التصوير الفوتوغرافي</p>
                        </div>

                    </div>

                    <div >
                        <ul className={`${style.navLinks} list-unstyled d-flex justify-content-center gap-4  rounded-pill py-4 m-0`}>
                            <li className=""><NavLink className={`${style.navLink} px-4 py-3   rounded-pill text-decoration-none`} to="/">الرئيسية</NavLink></li>
                            <li className=""><NavLink className={`${style.navLink} px-4 py-3  rounded-pill text-decoration-none`} to="blog">المدونة</NavLink></li>
                            <li className=""><NavLink className={`${style.navLink} px-4 py-3  rounded-pill text-decoration-none`} to="who">من نحن</NavLink></li>
                        </ul>
                    </div>
                    <div className="button-link d-flex align-items-center">
                        <div className={`d-flex justify-content-center align-items-center rounded-4 ${style.searchIcon}`}> <i className='fa fa-search fs-6'></i></div>
                        <Link className="main-btn rounded-pill me-3 translate" to="blog"> ابدأ القراءة</Link>
                    </div>


                </div>
            </nav>
        </>
    )
}
