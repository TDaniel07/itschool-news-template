import { Container } from "react-bootstrap";
import NewsSection from "../components/NewsSection";
import styles from "./css/MainPage.module.css"
import FavoritesSection from "../components/FavoritesSection";

export default function MainPage(){
    return(
        <Container className = {styles.mainPageContainer} fluid>
            <Container className= {styles.newsSectionContainer}>
                <NewsSection title = {"Tech"} section = {"technology"} nrOfArticles = {6} page = {1}/>
                <Container className= {styles.textContainer}>
                    <p>Vezi toate știrile legate de tehnologie în secțiunea Tech.</p>
                </Container>
            </Container>
            <Container className= {styles.newsSectionContainer}>
                <NewsSection title = {"Fotbal"} section = {"football"} nrOfArticles = {6} page = {1}/>
                <Container className= {styles.textContainer}>
                    <p>Vezi toate știrile legate de tehnologie în secțiunea Fotbal.</p>
                </Container>
            </Container>
            <Container className= {styles.newsSectionContainer}>
                <NewsSection title = {"Fashion"} section = {"fashion"} nrOfArticles = {6} page = {1}/>
                <Container className= {styles.textContainer}>
                    <p>Vezi toate știrile legate de tehnologie în secțiunea Fotbal.</p>
                </Container>
            </Container>
            <Container className= {styles.favoritesSectionContainer}>
                <FavoritesSection />
            </Container>
        </Container>
    );
}