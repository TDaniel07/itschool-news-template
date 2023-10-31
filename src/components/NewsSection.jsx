import { useEffect, useState } from "react";
import getSection from "../endpoints/section";
import styles from "./NewsSection.module.css";
import Card from 'react-bootstrap/Card';
import { Container, Stack } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function NewsSection({title, section, nrOfArticles}){
    let newsCards;
    const [articles, setArticles] = useState();

    useEffect(()=>{
        fetch(getSection(section, nrOfArticles))
        .then((response) => response.json())
        .then((data) => {
            newsCards = data.response.results.map((element) => 
                <Col xs = {4} key = {element.id} style = {{display: "flex", marginBottom: "20px"}}>
                    <Card>
                        <Card.Img variant = "top" src = {`${element.fields.thumbnail}`}/>
                        <Card.Body>
                            <Card.Title>{element.webTitle}</Card.Title>
                            <Card.Text>{element.fields.trailText}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )
            setArticles(newsCards);
        }, [])
              

    }, [])
    
    return(
        <div className = {styles.section}>
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