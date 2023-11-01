import { Button, ButtonGroup, ButtonToolbar, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NewsSection from "../components/NewsSection";
import { useSessionStorage } from "../hooks/useStorage";
import { useEffect, useRef, useState } from "react";
import styles from "./css/SectionPage.module.css"

export default function SectionPage(){
    const [page, setPage, removePage] = useSessionStorage("page", "1");
    const [section, setSection] = useState({});

    let sectionParam = useParams();

    useEffect(()=>{
        console.log(sectionParam.section)
        switch(sectionParam.section){
            case "technology":
                setSection({title: "Tech", api: "technology"});
                break;
            case "football":
                setSection({title: "Fotbal", api: "football"});
                break;
            case "fashion":
                setSection({title: "Fashion", api: "fashion"});
                break;
        }

        return () =>{
            setPage(1);
        }

    }, [sectionParam])

    function handleButtonClick(number)
    {
        setPage(number);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    }

    return(
        <Container fluid>
            <NewsSection  title = {section.title} section = {section.api} nrOfArticles={20} page={Number(page)}/>
            <Container className={styles.buttonContainer}>
                <ButtonToolbar>
                    <ButtonGroup>
                        <Button className="btn-secondary" variant = "primary" active = {Number(page) === 1} onClick={() => handleButtonClick(1)}>1</Button>
                        <Button className="btn-secondary" variant = "primary" active = {Number(page) === 2} onClick={() => handleButtonClick(2)}>2</Button>
                        <Button className="btn-secondary" variant = "primary" active = {Number(page) === 3} onClick={() => handleButtonClick(3)}>3</Button>
                        <Button className="btn-secondary" variant = "primary" active = {Number(page) === 4} onClick={() => handleButtonClick(4)}>4</Button>
                        <Button className="btn-secondary" variant = "primary" active = {Number(page) === 5} onClick={() => handleButtonClick(5)}>5</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </Container>
        </Container>
    );
}