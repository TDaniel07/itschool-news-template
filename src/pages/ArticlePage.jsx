import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import getNews from "../endpoints/news";
import NewsArticle from "../components/NewsArticle";

export default function ArticlePage(){
    const [articleData, setArticleData] = useState({head: "", body: ""});
    let aux;
    let {article} = useParams();

    useEffect(() => {
        fetch(getNews(article))
        .then(((response) => response.json()))
        .then((data) => {
            aux = {head: data.response.content.fields.main, body: data.response.content.fields.body};
            console.log(aux.body);
            setArticleData(aux);
        })
    }, [article])

    return(
        <Container>
            <NewsArticle head = {articleData.head} body = {articleData.body}/>
        </Container>
    )
}