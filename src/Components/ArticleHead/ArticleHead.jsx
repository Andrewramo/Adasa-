

export default function ArticleHead({ Article }) {



    return (
        <>
            <div className="position-relative overflow-hidden" style={{ height: "60vh", minHeight: "500px" }}>
                {/* Background Image */}
                <img
                    src={Article.image} // فاضي
                    alt=""
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                />

                {/* Gradient Overlays */}
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(to top, #0a0a0a, transparent)" }}></div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.3), transparent)" }}></div>

                {/* Breadcrumb */}
                <div className="position-absolute top-5 start-5 end-5 bread-crumb">
                    <nav className="d-inline-flex align-items-center gap-2 px-3 py-2 bg-dark bg-opacity-50 rounded-pill text-sm border border-white-10">
                        <a href="#" className="text-white-50 text-decoration-none">Home</a>
                        <span className="text-white-30">&gt;</span>
                        <a href="#" className="text-white-50 text-decoration-none">Blog</a>
                        <span className="text-white-30">&gt;</span>
                        <span className="main-color fw-medium text-truncate" style={{ maxWidth: "200px" }}>{Article.category}</span>
                    </nav>
                </div>

                {/* Bottom Content */}
                <div className="position-absolute bottom-0 start-0 end-0 p-4 p-md-5">
                    <div className="container">
                        {/* Category & Date/Time */}
                        <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                            <a href="#" className="main-btn px-3 py-1  text-white text-sm fw-bold rounded-pill text-decoration-none">
                                {Article.category}
                            </a>
                            <div className="d-flex gap-3 text-white small">
                                <span>{Article.date}</span>
                                <span>{Article.readTime}</span>
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-white display-5 fw-bold mb-4">
                            {Article.title}                        </h1>

                        {/* Author Info */}
                        <div className="d-flex align-items-center gap-3 p-3 bg-white bg-opacity-10 rounded-3 border border-white-10 author-info">
                            <img
                                src={Article?.author?.avatar}
                                alt=""
                                className="rounded-circle"
                                style={{ width: "56px", height: "56px", objectFit: "cover", border: "2px solid rgba(255,165,0,0.5)" }}
                            />
                            <div>
                                <p className="fw-bold text-white m-0">{Article?.author?.name}</p>
                                <p className="small text-white-50 m-0">{Article?.author?.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
