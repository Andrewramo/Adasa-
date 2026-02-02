import React, { useEffect, useState } from 'react'
import Posts from "../../../posts.json"
import { NavLink } from 'react-router-dom';



export default function Grid({ category, Word }) {
    const [Grid, setGrid] = useState([])
    console.log(category);

    useEffect(() => {
        setGrid(Posts.posts.slice(0, 6))
    }, [])

    useEffect(() => {
        if (category === "") {
            setGrid(Posts.posts.slice(0, 6));
            return
        }
        else {
            setGrid(Posts.posts.filter((article) => {
                return article.category === category;
            }))
        }

    }, [category])

    useEffect(() => {
        if (Word === "") {
            setGrid(Posts.posts.slice(0, 6));
            return
        }
        else {
            setGrid(Posts.posts.filter((article) => {
                return article.title.includes(Word) || article.excerpt.includes(Word);
            }))
        }
    }, [Word])
    return (
        <>
            {Grid.length > 0 && Grid.map((article, idx) => {
                return <div key={idx} className="col-md-4">
                    <NavLink className="text-decoration-none" to={`${article.slug}`}>
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
        </>
    )
}