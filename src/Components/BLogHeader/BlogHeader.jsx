import React from 'react'

export default function BlogHeader() {
    return (
        <>
            <div className='hero-section head-blog'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 mx-auto">
                            <div className="hero-content  d-flex flex-column justify-content-center align-items-center p-5">
                                <div className="badge-header rounded-pill d-flex justify-content-center align-items-center gap-2">
                                    <div className="red-circle1"></div>
                                    <div className="red-circle2"></div>
                                    <p className='m-0 text-white'>  مدونتنا </p>
                                </div>
                                <div className='text-center'>
                                    <h2 className={`mb-4`}>
                                        استكشف  <span className='main-color'>مقالاتنا </span> <br />
                                    </h2>
                                    <p className="fs-4  text-secondary">اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
