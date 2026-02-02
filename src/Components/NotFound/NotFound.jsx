import React from "react";
import "./NotFound.css"; // هنضيف شوية CSS بسيط تحت
import { NavLink } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden bg-dark">

            {/* الخلفية Grid */}
            <div className="grid-bg position-absolute top-0 start-0 w-100 h-100"></div>

            {/* دوائر الإضاءة */}
            <div className="glow-circle glow-1"></div>
            <div className="glow-circle glow-2"></div>

            {/* المحتوى */}
            <div className="position-relative text-center px-4" style={{ maxWidth: "600px" }}>

                {/* عنوان 404 العملاق */}
                <div className="position-relative mb-4">
                    <h1 className="display-1 fw-bold text-gradient">404</h1>
                    <h1 className="display-1 fw-bold text-orange position-absolute top-0 start-50 translate-middle-x">
                        404
                    </h1>
                </div>

                {/* الأيقونة */}
                <div className="mx-auto mb-4 position-relative icon-wrapper">
                    <div className="icon-circle"></div>
                    <i className="fa-regular fa-face-frown text-warning fs-1 position-absolute top-50 start-50 translate-middle"></i>
                </div>

                <h2 className="text-white fw-bold mb-3">عفواً! الصفحة غير موجودة</h2>
                <p className="text-secondary mb-4 fs-5">
                    الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.
                </p>

                {/* أزرار */}
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5">
                    <NavLink to="/" className="btn main-btn px-4 py-2 fw-bold">
                        <i className="bi bi-house-door-fill me-2"></i> الذهاب للرئيسية
                    </NavLink>
                    <NavLink to="/blog" className="btn btn-outline-warning px-4 py-2 fw-bold">
                        <i className="bi bi-journal-text me-2"></i> تصفح المقالات
                    </NavLink>
                </div>

                {/* روابط أسفل */}
                <div className="pt-4 border-top border-secondary text-small">
                    <p className="text-secondary mb-2">قد تجد هذه مفيدة:</p>
                    <div className="d-flex gap-3 justify-content-center small">
                        <span className="text-secondary">•</span>

                        <NavLink to="/blog" className="text-warning text-decoration-none fw-semibold">المدونة</NavLink>
                        <span className="text-secondary">•</span>

                    </div>
                </div>

            </div>
        </div>
    );
}
