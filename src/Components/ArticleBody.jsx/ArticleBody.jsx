import React, { useEffect, useState } from 'react'
import Article from './../Article/Article';
import { NavLink } from 'react-router-dom';

export default function ArticleBody({ Article }) {

    function content(text) {
        if (!text) return [];
        const regex = /## (.*)/g;
        let match;
        let sections = [];

        let titles = [...text.matchAll(regex)];
        for (let i = 0; i < titles.length; i++) {
            const title = titles[i][1];
            const start = titles[i].index + titles[i][0].length;

            const end = i + 1 < titles.length ? titles[i + 1].index : text.length;


            const content = text.slice(start, end).trim();


            sections.push({ title: title, content: content });
        }
        return sections

    }
    const [BlogContent, setBlogContent] = useState([])

    useEffect(() => {
        if (Article?.content) { setBlogContent(content(Article.content)); }

    }, [Article])


    return (
        <>
            <section >
                <div className="container py-5">
                    <div className="row g-4 ">

                        {/* Main Content */}
                        <div className="col-lg-8 order-2 order-lg-1">

                            {/* Quote */}
                            <div className="p-4 mb-4 " style={{ background: '#221309', borderRadius: '1rem', border: '1px solid rgba(255,165,0,0.2)' }}>
                                <p className="text-white fst-italic mb-0">{Article?.excerpt}</p>
                            </div>

                            {/* Article Sections */}
                            <div className="article-sections">
                                {BlogContent.length > 0 && BlogContent.map((article, idx) => {
                                    return <div key={idx} className="mb-5">
                                        <h2 className="text-white fw-bold mb-3 d-flex align-items-center gap-2">
                                            <span className="d-flex justify-content-center align-items-center bg-opacity-10  rounded-3 p-2 camera-icon" style={{ width: '40px', height: '40px' }}>
                                                <i className="fa-solid fa-camera"></i>
                                            </span>
                                            {article.title}
                                        </h2>
                                        <p className="text-secondary mb-3" style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
                                            {article.content}
                                        </p>
                                    </div>
                                })}
                            </div>

                            {/* Tags */}
                            <div className="p-4 mb-4 main-bg rounded-3 border border-dark">
                                <div className="mb-3 d-flex align-items-center gap-2">
                                    <div className="w-10 h-10 p-2 rounded d-flex justify-content-center align-items-center camera-icon ">
                                        <i className="fa-solid fa-tags"></i>
                                    </div>
                                    <h5 className="text-white mb-0">الوسوم</h5>
                                </div>
                                <div className="d-flex flex-wrap gap-2">
                                    {Article?.tags?.map((tag, idx) => (
                                        <span key={idx} className="px-3 py-1  text-light rounded-pill border border-dark cursor-pointer tags">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Share Section */}
                            <div className="p-4 mb-4 main-bg rounded-3 border border-dark">
                                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                                    <h5 className="text-white mb-0 d-flex align-items-center gap-2">شارك المقال</h5>
                                    <div className="d-flex gap-2">
                                        {['fa-brands fa-facebook-f', 'fa-brands fa-x-twitter', 'fa-brands fa-whatsapp', 'fa-brands fa-linkedin-in'].map((btn, idx) => (
                                            <button key={idx} className="btn btn-dark border border-dark text-black-50 rounded-3 p-2 ">
                                                {/* placeholder */}
                                                <i className={`fa-brands ${btn}`}></i>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Author Info */}
                            <div className="p-4 mb-4 main-bg rounded-3 border border-dark d-flex flex-column flex-sm-row gap-3 align-items-center">
                                <div style={{ width: '96px', height: '96px', backgroundColor: '#333', borderRadius: '1rem' }}>
                                    <img src={Article?.author?.avatar} alt="" />
                                </div>
                                <div className="text-end ">
                                    <span className="main-color text-uppercase small fw-semibold">كاتب المقال</span>
                                    <h5 className="text-white mt-1">{Article?.author?.name}</h5>
                                    <p className="text-secondary small mb-2">{Article?.author?.role}</p>
                                    <p className="text-light small mb-0">مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.</p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="col-lg-4 order-1 order-lg-2">
                            <div className="sticky-top" style={{ top: '96px' }}>

                                {/* Table of Contents */}
                                <div className="p-4 mb-4 main-bg rounded-3 border border-dark">
                                    <h5 className="text-white mb-3">محتويات المقال</h5>
                                    <nav className="nav flex-column gap-2">
                                        {BlogContent.length > 0 && BlogContent.map((item, idx) => (
                                            <a key={idx} href={`#section-${idx}`} className="nav-link text-secondary p-2 rounded hover-bg-warning">
                                                <span className="d-inline-block bg-dark rounded px-2 ms-2">{idx + 1}</span>
                                                {item.title}
                                            </a>
                                        ))}
                                    </nav>
                                </div>

                                {/* Reading Time & Date */}
                                <div className="p-4 mb-4 mian-bg rounded-3 border border-dark">
                                    <div className="row text-center text-light">
                                        <div className="col-5 p-3 bg-dark rounded mx-4">
                                            <p className="mb-1 fw-bold">{Article?.readTime} </p>
                                            <small className="text-secondary">وقت القراءة</small>
                                        </div>
                                        <div className="col-5 p-3 bg-dark rounded">
                                            <p className="mb-1 fw-bold">{Article?.date}</p>
                                            <small className="text-secondary">تاريخ النشر</small>
                                        </div>
                                    </div>
                                </div>

                                {/* Newsletter / More */}
                                <div className="p-4 main-bg rounded-3 border border-dark text-center">
                                    <div className="mb-3 d-flex justify-content-center align-items-center" style={{ width: '56px', height: '56px', backgroundColor: '#555', borderRadius: '1rem', margin: '0 auto', fontSize: '20px' }}>
                                        <i className="fa-regular fa-envelope"></i>
                                    </div>
                                    <h5 className="text-white mb-2">لا تفوّت جديدنا</h5>
                                    <p className="text-secondary small mb-3">اشترك للحصول على أحدث المقالات</p>
                                    <NavLink to="/blog" className="btn main-btn w-100">تصفح المزيد</NavLink>
                                </div>

                            </div>
                        </aside>

                    </div>
                </div>
            </section>
        </>
    )
}
