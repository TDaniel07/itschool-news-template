import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import getNews from "../endpoints/news";
import styles from "./css/ArticlePage.module.css"
import transformDate from "../utils/transformDate";
import FavoritesCard from "../components/FavoritesCard";

export default function ArticlePage(){
    const [articleData, setArticleData] = useState({head: "", body: ""});
    let {article} = useParams();

    useEffect(() => {
        fetch(getNews(article))
        .then(((response) => response.json()))
        .then((data) => {
            setArticleData({
                    head: data.response.content.fields.main,
                    body: data.response.content.fields.body,
                    title: data.response.content.fields.headline,
                    trailText: data.response.content.fields.trailText,
                    date: data.response.content.webPublicationDate,
                    authors: data.response.content.fields.byline,
                    });
        })
    }, [article])

    return(
        <Container className={`${styles.articleContainer} gx-5 fluid`}>
            <h1>{articleData.title}</h1>
            <p className="fw-bold">{articleData.trailText}</p>
            <div dangerouslySetInnerHTML={{__html: articleData.head}}/>
            <FavoritesCard date = {transformDate(articleData.date)} authors={articleData.authors}/>
            <div dangerouslySetInnerHTML={{__html: articleData.body}}/>
        </Container>
    )
}