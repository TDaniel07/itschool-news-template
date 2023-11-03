import { useContext } from "react";
import NewsCard from "../components/NewsCard";
import { favoritesContext } from "../favorites/context"
import { Container, Row } from "react-bootstrap";
import styles from "./css/FavoritesPage.module.css"

export default function FavoritesPage(){
    const [favoritesList, favoritesDispatch] = useContext(favoritesContext);
    let favoritesCards = [];

    favoritesCards = favoritesList.map((element) => (<NewsCard
        key = {element.id}
        apiUrl={element.apiUrl} 
        thumbnail={element.thumbnail}
        webTitle={element.webTitle}
        trailText={element.trailText}
        showDeleteButton={true}
        />)).reverse();


    return(
        <Container className={styles.favoritesContainer}>
        <div>
            <h1 className={styles.titleContainer}>Știrile tale favorite</h1>
        </div>
        {
        favoritesCards.length > 0 ?
        <Container>
            <Row>
                {favoritesCards}
            </Row>
        </Container>
        :
        <div className={styles.textContainer}>
            <p>Momentan nu ai nicio știre favorită.</p>
        </div>
        }
        </Container>
    )
    
}