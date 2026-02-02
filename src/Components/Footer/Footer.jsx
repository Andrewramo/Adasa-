import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <footer className="position-relative text-secondary border-top border-dark overflow-hidden">
                            {/* Background blobs */}
                            <div
                                className="position-absolute rounded-circle"
                                style={{
                                    top: "-8rem",
                                    left: "25%",
                                    width: "24rem",
                                    height: "24rem",
                                    backgroundColor: "rgba(249,115,22,0.05)",
                                    filter: "blur(3rem)",
                                    zIndex: 0,
                                }}
                            ></div>
                            <div
                                className="position-absolute rounded-circle"
                                style={{
                                    bottom: "-8rem",
                                    right: "25%",
                                    width: "24rem",
                                    height: "24rem",
                                    backgroundColor: "rgba(252,211,77,0.05)",
                                    filter: "blur(3rem)",
                                    zIndex: 0,
                                }}
                            ></div>

                            {/* Content */}
                            <div className="position-relative container py-5" style={{ zIndex: 1 }}>
                                <div className="row gy-4 gx-4">
                                    {/* Logo & Description */}
                                    <div className="col-lg-3">
                                        <a href="/" className="d-flex align-items-center gap-3 mb-3 text-decoration-none">
                                            <div
                                                className="d-flex justify-content-center align-items-center rounded-3"
                                                style={{
                                                    width: "44px",
                                                    height: "44px",
                                                    background: "linear-gradient(to bottom right, #f97316, #FF6900)",
                                                    boxShadow: "rgba(249, 115, 22, 0.3) 0px 4px 20px",
                                                    color: "white",
                                                    fontWeight: "bold",
                                                    fontSize: "1.25rem",
                                                }}
                                            >
                                                ع
                                            </div>
                                            <span className="h4 text-white mb-0">عدسة</span>
                                        </a>
                                        <p className="text-secondary small mb-3">
                                            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
                                        </p>
                                        <div className="d-flex gap-2">
                                            {/* Social links */}
                                            <a
                                                href="https://twitter.com/adasah"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="d-flex justify-content-center align-items-center  border border-dark social-link main-bg text-decoration-none rounded-3 text-secondary"
                                                style={{ width: "40px", height: "40px" }}
                                            >
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a
                                                href="https://github.com/adasah"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="d-flex justify-content-center align-items-center  border border-dark social-link main-bg text-decoration-none rounded-3 text-secondary"
                                                style={{ width: "40px", height: "40px" }}
                                            >
                                                <i className="fab fa-github"></i>
                                            </a>
                                            <a
                                                href="https://linkedin.com/company/adasah"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="d-flex justify-content-center align-items-center main-bg border border-dark social-link main-bg text-decoration-none rounded-3 text-secondary"
                                                style={{ width: "40px", height: "40px" }}
                                            >
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                            <a
                                                href="https://youtube.com/@adasah"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="d-flex justify-content-center align-items-center  border border-dark social-link main-bg text-decoration-none rounded-3 text-secondary"
                                                style={{ width: "40px", height: "40px" }}
                                            >
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Explore Links */}
                                    <div className="col-lg-3">
                                        <h5 className="text-white fw-semibold mb-3 d-flex align-items-center gap-2">
                                            <span
                                                className="rounded-pill"
                                                style={{
                                                    width: "32px",
                                                    height: "2px",
                                                    background: "linear-gradient(to right, #f97316, #facc15)",
                                                }}
                                            ></span>
                                            استكشف
                                        </h5>
                                        <ul className="list-unstyled">
                                            <li className="mb-2">
                                                <a href="/" className="text-secondary discover-link text-decoration-none d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-angle-left main-color"></i> الرئيسية
                                                </a>
                                            </li>
                                            <li className="mb-2">
                                                <a href="/blog" className="text-secondary discover-link text-decoration-none d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-angle-left main-color"></i> المدونة
                                                </a>
                                            </li>
                                            <li className="mb-2">
                                                <a href="/about" className="text-secondary discover-link text-decoration-none d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-angle-left main-color"></i> من نحن
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Categories */}
                                    <div className="col-lg-3">
                                        <h5 className="text-white fw-semibold mb-3 d-flex align-items-center gap-2">
                                            <span
                                                className="rounded-pill"
                                                style={{
                                                    width: "32px",
                                                    height: "2px",
                                                    background: "linear-gradient(to right, #f97316, #facc15)",
                                                }}
                                            ></span>
                                            التصنيفات
                                        </h5>
                                        <ul className="list-unstyled">
                                            <li className="mb-2 discover-link">
                                                <NavLink to="/blog?category=إضاءة" className="text-secondary discover-link text-decoration-none">
                                                    <i className="fa-solid fa-angle-left"></i>
                                                    إضاءة
                                                </NavLink>
                                            </li>
                                            <li className="mb-2 discover-link">
                                                <NavLink to="/blog?category=بورتريه" className="text-secondary discover-link text-decoration-none">
                                                    <i className="fa-solid fa-angle-left"></i>
                                                    بورتريه
                                                </NavLink>
                                            </li>
                                            <li className="mb-2 discover-link">
                                                <NavLink to="/blog?category=مناظر طبيعية" className="text-secondary discover-link text-decoration-none">
                                                    <i className="fa-solid fa-angle-left"></i>
                                                    مناظر طبيعية
                                                </NavLink>
                                            </li>
                                            <li className="mb-2 discover-link">
                                                <NavLink to="/blog?category=تقنيات" className="text-secondary discover-link text-decoration-none">
                                                    <i className="fa-solid fa-angle-left"></i>
                                                    تقنيات
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Newsletter */}
                                    <div className="col-lg-3">
                                        <h5 className="text-white fw-semibold mb-3 d-flex align-items-center gap-2">
                                            <span
                                                className="rounded-pill"
                                                style={{
                                                    width: "32px",
                                                    height: "2px",
                                                    background: "linear-gradient(to right, #f97316, #facc15)",
                                                }}
                                            ></span>
                                            ابقى على اطلاع
                                        </h5>
                                        <p className="text-secondary small mb-3">اشترك للحصول على أحدث المقالات والتحديثات.</p>
                                        <form>
                                            <div className="mb-2">
                                                <input
                                                    type="email"
                                                    placeholder="أدخل بريدك الإلكتروني"
                                                    className="form-control bg-secondary text-white border-secondary"
                                                />
                                            </div>
                                            <button type="submit" className="btn main-btn text-white w-100">
                                                اشترك
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom */}
                            <div className="border-top border-secondary py-3 mt-4">
                                <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
                                    <p className="text-secondary small mb-0">
                                        © 2026 عدسة. صنع بكل <i className="fas fa-heart text-warning"></i> جميع الحقوق محفوظة.
                                    </p>
                                    <div className="d-flex gap-3">
                                        <a href="/privacy" className="text-secondary text-decoration-none small">سياسة الخصوصية</a>
                                        <a href="/terms" className="text-secondary text-decoration-none small">شروط الخدمة</a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </section>
        </>
    )
}
