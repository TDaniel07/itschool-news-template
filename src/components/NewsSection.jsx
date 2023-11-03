import { useEffect, useState } from "react";
import getSection from "../endpoints/section";
import styles from "./css/NewsSection.module.css";
import { Container, Stack } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import NewsCard from "./NewsCard";

export default function NewsSection({title, section, nrOfArticles, page}){
    const [articles, setArticles] = useState();
    let newsCards;

    useEffect(()=>{
        if(section !== undefined){
            fetch(getSection(section, nrOfArticles, page))
            .then((response) => response.json())
            .then((data) => {
                newsCards = data.response.results.map((element) => 
                    <NewsCard 
                        key = {element.id}
                        apiUrl={element.apiUrl}
                        thumbnail={element.fields.thumbnail}
                        webTitle={element.webTitle}
                        trailText={element.fields.trailText}
                        showDeleteButton={false}
                    />
                )
                setArticles(newsCards);
            })
        }
              

    }, [title, section, nrOfArticles, page])
    
    return(
        <div className = {styles.newsSection}>
            <div className = {styles.titleContainer}>
                <h1 className= {styles.title}>
                    {title}
                </h1>
            </div>
            <Container>
                <Row>
                    {articles}
                </Row>
            </Container>
        </div>
    );
}