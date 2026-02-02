import React from 'react'
import style from "./homeHero.module.css"
import { NavLink } from 'react-router-dom'


export default function HomeHero() {
    return (
        <>
            <div className='hero-section'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 mx-auto">
                            <div className="hero-content  d-flex flex-column justify-content-center align-items-center p-5">
                                <div className="badge-header rounded-pill d-flex justify-content-center align-items-center gap-2">
                                    <div className="red-circle1"></div>
                                    <div className="red-circle2"></div>
                                    <p className='m-0 text-white'>مرحباً بك في عدسة</p>
                                </div>
                                <div className='text-center'>
                                    <h2 className={`${style.heroTitle} mb-4`}>
                                        اكتشف  <span className='main-color'>فن </span> <br />
                                        التصوير الفوتوغرافي
                                    </h2>
                                    <p className="fs-4  text-secondary">انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.</p>
                                </div>
                                <div className="hero-btns d-flex justify-content-center align-items-center">

                                    <button className="btn main-btn rounded-pill fs-5 arrow p-2 px-3 translate d-flex align-items-center">
                                        <NavLink className="text-decoration-none text-white" to="blog"> استكشف المقالات <i className="fa fa-arrow-left m-0 fs-6"></i></NavLink>
                                    </button>
                                    <button className=" more-info me-2 rounded-pill">
                                        <i className="fa-solid fa-circle-info ms-2"> </i>اعرف المزيد
                                    </button>
                                </div>

                                <div className="statics text-white text-center d-flex justify-content-between align-items-center">
                                    <div className="item rounded-4 me-3 d-flex flex-column align-items-center justify-content-between">
                                        <i className="fa-solid fa-newspaper"></i>
                                        <p>+50</p>
                                        <h3>مقالة</h3>
                                    </div>
                                    <div className="item rounded-4 me-3 d-flex flex-column align-items-center justify-content-between">
                                        <i className="fa-solid fa-users"></i>
                                        <p> +10 ألف  </p>
                                        <h3>  قارئ </h3>

                                    </div>
                                    <div className="item rounded-4 me-3 d-flex flex-column align-items-center justify-content-between">
                                        <i className="fa-solid fa-folder-open"></i>
                                        <p>4</p>
                                        <h3>تصنيفات </h3>

                                    </div>

                                    <div className="item rounded-4 me-3 d-flex flex-column align-items-center justify-content-between">
                                        <i className="fa-solid fa-pen-nib"></i>
                                        <p>6</p>
                                        <h3>كاتب</h3>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
