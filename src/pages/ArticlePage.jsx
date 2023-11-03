import { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import getNews from "../endpoints/news";
import styles from "./css/ArticlePage.module.css"
import transformDate from "../utils/transformDate";
import FavoritesCard from "../components/FavoritesCard";

export default function ArticlePage(){
    const [articleData, setArticleData] = useState({head: "", body: ""});
    let {article} = useParams();
    const [showAlert, setShowAlert] = useState(false);

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
                    apiUrl: data.response.content.apiUrl,
                    thumbnail: data.response.content.fields.thumbnail,
                    webTitle: data.response.content.webTitle,
                    });
        })
    }, [article])

    return(
        <Container className={`${styles.articleContainer} gx-5 fluid`}>
            {showAlert && <Alert variant="success" className={styles.addToFavoriteAlert}>Succes! Poți vedea știrea accesând secțiunea Favorite.</Alert>}
            <h1>{articleData.title}</h1>
            <p className="fw-bold">{articleData.trailText}</p>
            <div dangerouslySetInnerHTML={{__html: articleData.head}}/>
            <FavoritesCard 
            date = {transformDate(articleData.date)} 
            authors={articleData.authors} 
            apiUrl={articleData.apiUrl} 
            thumbnail={articleData.thumbnail} 
            trailText={articleData.trailText}
            webTitle={articleData.webTitle}
            setShowAlert={setShowAlert}
            />
            <div dangerouslySetInnerHTML={{__html: articleData.body}}/>
        </Container>
    )
}