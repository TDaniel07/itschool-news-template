import { useEffect, useState } from "react";
import getSection from "../endpoints/section";
import styles from "./css/NewsSection.module.css";
import Card from 'react-bootstrap/Card';
import { Container, Stack } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

export default function NewsSection({title, section, nrOfArticles, page}){
    const [articles, setArticles] = useState();
    let newsCards;

    useEffect(()=>{
        if(section !== undefined){
            fetch(getSection(section, nrOfArticles, page))
            .then((response) => response.json())
            .then((data) => {
                newsCards = data.response.results.map((element) => 
                    <Col lg = {4} md = {6} key = {element.id} className = {styles.cardCol}>
                        <Card>
                            <Link to = {`/news/${encodeURIComponent(element.apiUrl)}`}>
                                <Card.Img variant = "top" src = {`${element.fields.thumbnail}`}/>
                                <Card.Body>
                                    <Card.Title><p className={styles.cardText}>{element.webTitle}</p></Card.Title>
                                    <Card.Text><p className={styles.cardText}>{element.fields.trailText}</p></Card.Text>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
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