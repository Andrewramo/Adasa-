import React from 'react'
import ChosenArticles from '../ChosenArticles/ChosenArticles'
import { NavLink } from 'react-router-dom';

export default function ChosenHead() {
    return (
        <>
            <div className="chosen-articles-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-11 mx-auto mb-5">
                            <div className="badge-chosen badge-header rounded-pill d-flex justify-content-center align-items-center gap-2">
                                <div className="red-circle1"></div>
                                <div className="red-circle2"></div>
                                <p className='m-0  main-color'>مميز</p>
                            </div>
                            <h2 className="chosen-title">مقالات مختارة</h2>
                            <div className='show-all d-flex justify-content-between'>
                                <p>محتوى منتقى لبدء رحلة تعلمك</p>
                                <button className="btn main-btn rounded-4 fs-5 arrow p-2 px-3 translate d-flex align-items-center">
                                    <NavLink className="text-decoration-none text-white " to="blog">عرض الكل
                                        <i className="fa-solid fa-angle-left"></i></NavLink></button>
                            </div>
                        </div>
                        <ChosenArticles />
                    </div>
                </div>
            </div>
        </>
    )
}
