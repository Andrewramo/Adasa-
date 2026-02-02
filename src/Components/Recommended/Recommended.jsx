import React, { useEffect, useState } from 'react'
import Posts from "../../../posts.json"
import { NavLink } from 'react-router-dom'

export default function Recommended({ Article }) {
    const [Category, setCategory] = useState([])
    useEffect(() => {
        if (Article?.category) {
            const filterd = Posts.posts.filter((item) => {
                return item.category === Article.category && item.title !== Article.title;
            })
            setCategory(filterd);

        }
        ;





    }, [Article])

    useEffect(() => {
        if (Category.length > 0) { console.log(Category); }


    }, [Category])


    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className=" py-5 border-top border-secondary">
                            {/* Header */}
                            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                                <div className="d-flex align-items-center gap-3 mb-2 mb-sm-0">
                                    <span
                                        className="d-flex justify-content-center align-items-center camera-icon rounded-3"
                                        style={{ width: "48px", height: "48px", fontSize: "20px" }}
                                    >
                                        <i className="fa-regular fa-image"></i>
                                    </span>
                                    <div>
                                        <h2 className="text-white mb-1">مقالات قد تعجبك</h2>
                                        <p className="text-secondary small mb-0">استكشف المزيد من المحتوى المميز</p>
                                    </div>
                                </div>
                                <a href="#" className="d-none d-sm-flex align-items-center gap-2 main-color text-decoration-none">
                                    عرض الكل
                                    <span className="d-inline-block"><i className="fa-solid fa-arrow-left"></i></span>
                                </a>
                            </div>

                            {/* Articles Grid */}
                            <div className="row g-3">
                                {/* Article 1 */}
                                {Category.length > 0 && Category.slice(0, 3).map((item, idx) => {
                                    return <div className="col-sm-6 col-lg-4">
                                        <NavLink
                                            key={idx}
                                            to={`/blog/${item.slug}`}
                                            className="d-block main-bg text-decoration-none rounded-3 overflow-hidden border border-dark"
                                        >
                                            <div className="position-relative overflow-hidden" style={{ height: "12rem" }}>
                                                <div className="w-100 h-100 main-bg"><img src={item.image} alt="" /></div>
                                                <div
                                                    className="position-absolute top-0 start-0 w-100 h-100"
                                                    style={{ background: "linear-gradient(to top, #111, transparent)", zIndex: 100 }}
                                                ></div>
                                                <span className="position-absolute main-btn top-0 end-0 px-2 py-1  text-white text-xs rounded-pill">
                                                    {item.category}
                                                </span>
                                            </div>
                                            <div className="p-3">
                                                <h3 className="text-white fw-bold mb-2">{item.title}</h3>

                                                <div className="d-flex justify-content-between align-items-center text-secondary small">

                                                    {/* Author */}
                                                    <span className="d-flex align-items-center gap-2">
                                                        <div
                                                            className="rounded-circle overflow-hidden"
                                                            style={{
                                                                width: "32px",
                                                                height: "32px",
                                                                flexShrink: 0
                                                            }}
                                                        >
                                                            <img
                                                                src={item.author.avatar}
                                                                alt=""
                                                                style={{
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    objectFit: "cover"
                                                                }}
                                                            />
                                                        </div>

                                                        <p className="m-0">{item.author.name}</p>
                                                    </span>

                                                    <span>{item.readTime}</span>

                                                </div>
                                            </div>

                                        </NavLink>
                                    </div>
                                })}

                                {/* Article 2 */}

                                {/* Article 3 */}

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
