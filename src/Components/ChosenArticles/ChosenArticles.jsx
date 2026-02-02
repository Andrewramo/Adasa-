import React, { useEffect, useState } from 'react'
import Posts from "../../../posts.json"
import { NavLink } from 'react-router-dom';

export default function ChosenArticles() {


    const [Chosen, setChosen] = useState([]);

    useEffect(() => {
        setChosen(Posts.posts)


    }, [])
    useEffect(() => {
        if (Chosen.length > 0) {
            console.log(Chosen);
        }
    }, [Chosen])




    return (
        <>
            {Chosen.length > 0 ? Chosen.slice(0, 3).map((article, idx) => {
                return <NavLink key={idx} className="text text-decoration-none" to={`blog/${article.slug}`}> <div className="col-md-11 mx-auto mb-4">
                    <div className="article-card d-flex">
                        <div className="article-img position-relative rounded-end-4">
                            <span className="position-absolute  text-white rounded-pill">
                                <i className="fa-solid fa-star"></i> مميز</span>
                            <img src={article.image} className="w-100 rounded-end-4 h-100" alt="" />

                        </div>
                        <div className="article-head rounded-start-4">
                            <div className="article-time d-flex align-items-center mb-3">
                                <span className="rounded-pill ms-2">{article.category}</span>
                                <p className="m-0"><i className="fa-regular fa-clock ms-2"></i>
                                    {article.readTime}</p>
                            </div>
                            <h3 className="article-title mb-3">
                                {article.title}
                            </h3>
                            <p className="article-description mb-5">
                                {article.excerpt}
                            </p>

                            <div className="article-writer d-flex justify-content-between">
                                <div className="author-img d-flex align-items-center">
                                    <div className="position-relative">
                                        <img src={article.author.avatar} className="rounded-circle ms-2" alt="" />
                                        <span></span>
                                    </div>
                                    <div>
                                        <h4>{article.author.name}</h4>
                                        <p>{article.author.role}</p>
                                    </div>
                                </div>

                                <button className="show-article btn">
                                    اقرأ المقال
                                    <i className="fa-solid fa-arrow-left-long me-2"></i>
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
                </NavLink>
            }) : ""}


        </>
    )
}
