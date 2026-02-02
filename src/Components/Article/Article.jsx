import React, { useEffect, useState } from 'react'
import ArticleHead from '../ArticleHead/ArticleHead'
import ArticleBody from '../ArticleBody.jsx/ArticleBody'
import Recommended from '../Recommended/Recommended'
import { useParams } from 'react-router-dom';
import Posts from "../../../posts.json"
export default function Article() {


    const { id } = useParams();
    const [Article, setArticle] = useState({})


    useEffect(() => {
        setArticle(Posts.posts.find((item) => {


            return item.slug === String(id);

        }))


    }, [id])

    return (
        <>
            <ArticleHead Article={Article} />
            <ArticleBody Article={Article} />
            <Recommended Article={Article} />
        </>
    )
}
