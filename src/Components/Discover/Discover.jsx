import React, { useEffect, useState } from 'react'
import Posts from "../../../posts.json"
import { NavLink } from 'react-router-dom'

export default function Discover() {

    const [Categories, setCategories] = useState([])

    useEffect(() => {
        setCategories(Posts.categories)
    }, [])
    return (
        <>
            <div className="discover-section">
                <div className="container">
                    <div className="row text-center gy-3">
                        <div className="badge-header rounded-pill d-flex justify-content-center align-items-center gap-2">
                            <div className="red-circle1"></div>
                            <div className="red-circle2"></div>
                            <p className='m-0 text-white'>التصنيفات</p>
                        </div>
                        <h2 className="title">استكشف حسب الموضوع</h2>
                        <p className='disc'>اعثر على محتوى مصمم حسب اهتماماتك</p>
                        {Categories.map((category, idx) => {
                            return <div key={idx} className="col-md-3">
                                <NavLink className="text-decoration-none" to={`/blog?category=${category.name}`}>
                                    <div className="category rounded-4 d-flex justify-content-between align-items-center text-end">
                                        <div className="category-info d-flex flex-column justify-content-between">
                                            <div className="category-icon rounded-3 ">
                                                <i className="fa-solid fa-sun"></i>
                                            </div>
                                            <h4>{category.name}</h4>
                                            <p>  {category.count} مقالة </p>
                                        </div>
                                        <div className="show-category rounded-circle d-flex justify-content-center align-items-center">
                                            <i className="fa-solid fa-angle-left"></i>
                                        </div>
                                    </div>
                                </NavLink>

                            </div>
                        })}
                    </div>
                </div>
            </div>


        </>
    )
}
