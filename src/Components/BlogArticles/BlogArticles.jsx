import React, { useEffect, useState } from 'react'
import Grid from '../Grid/Grid'
import List from './../List/List';
import Posts from "../../../posts.json"
import { useSearchParams } from 'react-router-dom';



export default function BlogArticles() {
    const [View, setView] = useState("grid")
    const [category, setcategory] = useState("")
    const [Word, setWord] = useState("")

    const [SearchParams] = useSearchParams();
    let chosenCategory;
    if (SearchParams) {
        chosenCategory = SearchParams.get("category");

    }

    useEffect(() => {
        if (chosenCategory) {
            setcategory(chosenCategory);
        }
    }, [chosenCategory])


    return (
        <>
            <div className="articles-section py-5">
                <div className="container">
                    <div className="row align-items-center gy-3">
                        <div className="articles-filter-bar sticky-top  py-3" style={{ zIndex: 9999 }}>

                            <div className="row align-items-center">

                                {/* Search */}
                                <div className="search-bar col-md-5 mb-2 mb-md-0">
                                    <div className="position-relative">
                                        <input
                                            onChange={(e) => setWord(e.target.value)}
                                            type="text"
                                            className="form-control ps-5"
                                            placeholder="ابحث في المقالات..."
                                        />
                                        <i className="fa-solid fa-magnifying-glass position-absolute top-50 translate-middle-y ms-3 "></i>
                                    </div>
                                </div>

                                {/* Tabs */}
                                <div className="col-md-7 filter-tabs">
                                    <div className="d-flex flex-wrap gap-2 justify-content-md-end">
                                        <a onClick={() => setcategory("")} to="#" className={`btn btn-outline-dark ${category === "" ? "active" : ""} rounded-pill`}>جميع المقالات</a>
                                        <a onClick={() => setcategory("إضاءة")} to="#" className={`btn btn-outline-dark ${category === "إضاءة" ? "active" : ""} rounded-pill`}>إضاءة</a>
                                        <a onClick={() => setcategory("بورتريه")} to="#" className={`btn btn-outline-dark ${category === "بورتريه" ? "active" : ""} rounded-pill`}>بورتريه</a>
                                        <a onClick={() => setcategory("مناظر طبيعية")} to="#" className={`btn btn-outline-dark ${category === "مناظر طبيعية" ? "active" : ""} rounded-pill`}>مناظر طبيعية</a>
                                        <a onClick={() => setcategory("تقنيات")} to="#" className={`btn btn-outline-dark ${category === "تقنيات" ? "active" : ""} rounded-pill`}>تقنيات</a>
                                        <a onClick={() => setcategory("معدات")} to="#" className={`btn btn-outline-dark ${category === "معدات" ? "active" : ""} rounded-pill`}>معدات</a>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div>
                            <div className="d-flex align-items-center justify-content-between mb-4">

                                <p className="text-secondary mb-0">
                                    عرض <span className="fw-bold text-dark text-white">{category ? Posts.categories.filter((x) => { return x.name === category })[0].count : 28}</span> مقالات
                                </p>

                                <div className="d-flex align-items-center">
                                    <div className="d-flex bg-dark border border-secondary rounded-3 p-1">

                                        <button onClick={() => setView("grid")} className={`btn ${View === "grid" ? "btn-active" : ""} text-white px-3 py-2 rounded-2 me-1`}>
                                            شبكي
                                        </button>

                                        <button onClick={() => setView("list")} className={`btn ${View === "list" ? "btn-active" : ""} text-white  px-3 py-2 rounded-2`}>
                                            قائمة
                                        </button>

                                    </div>
                                </div>

                            </div>

                        </div>
                        {View === "list" ? <List category={category} Word={Word} /> : <Grid category={category} Word={Word} />}




                    </div>
                </div>
            </div>

        </>
    )
}
