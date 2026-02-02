import React, { useEffect, useState } from 'react'
import Posts from "../../../posts.json"
import { NavLink } from 'react-router-dom';


export default function Recently() {
    const [Recently, setRecently] = useState([])

    useEffect(() => {
        setRecently(Posts.posts.slice(3, 6))
    }, [])

    return (
        <>
            <div className="recently-section">
                <div className="container">
                    <div className="row">

                        <div className="mb-5">
                            <div className="badge-header rounded-pill d-flex justify-content-center align-items-center gap-2">
                                <div className="red-circle1"></div>
                                <div className="red-circle2"></div>
                                <p className='m-0 text-white'>
                                    الأحدث</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h2 className="title">أحدث المقالات</h2>
                                    <p className='disc'>محتوى جديد طازج من المطبعة</p>
                                </div>

                                <div className="show-all-articles">
                                    <NavLink className="text-decoration-none" to="blog">
                                        عرض جميع المقالات
                                        <i className="fa-solid fa-arrow-left-long me-2"></i>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        {Recently.length > 0 && Recently.map((article, idx) => {
                            return <div key={idx} className="col-md-4">
                                <NavLink className="text-decoration-none" to={`blog/${article.slug}`}>
                                    <div className="recently-item rounded-4">
                                        <div className="recently-img rounded-top-4">
                                            <img src={article.image} className="w-100 h-100 rounded-top-4" alt="" />
                                            <span className="rounded-pill">{article.category}</span>
                                        </div>
                                        <div className="recently-info rounded-bottom-4">
                                            <div className="recently-time d-flex">

                                                <p>   <i className="fa-regular fa-clock"></i> {article.readTime}
                                                    ..{article.date} </p>

                                            </div>
                                            <h3 className="recently-title mb-3">
                                                {article.title}
                                            </h3>
                                            <p className="recently-disc mb-3">
                                                {article.excerpt}
                                            </p>
                                            <div className="recently-author d-flex justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <img src={article.author.avatar} className="ms-2" alt="" />
                                                    <div>
                                                        <h4 className="author-name m-0">
                                                            {article.author.name}
                                                        </h4>
                                                        <p className="author-role m-0">
                                                            {article.author.role}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="arrow-icon">
                                                    <i className="fa-solid fa-angle-left"></i>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </NavLink>
                            </div>

                        })}
                    </div>
                </div>
            </div >
        </>
    )
}
