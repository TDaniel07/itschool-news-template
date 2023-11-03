import { useContext } from "react"
import styles from "./css/NewsCard.module.css"
import { Button, Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { favoritesContext } from "../favorites/context"

export default function NewsCard({apiUrl, thumbnail, webTitle, trailText, showDeleteButton}){
    const [favoritesList, favoritesDispatch] = useContext(favoritesContext);

    function handleClick(e){
        e.preventDefault();
        e.stopPropagation();
        favoritesDispatch({type: "delete", url: apiUrl})
    }

    return(
        <Col lg = {4} md = {6} className = {styles.cardCol}>
            <Card>
                <Link to = {`/news/${encodeURIComponent(apiUrl)}`}>
                    <Card.Img variant = "top" src = {`${thumbnail}`}/>
                    <Card.Body>
                        {
                        showDeleteButton &&
                        <Button variant = "light" className={styles.deleteButton} onClick={handleClick}>
                            <span class="material-icons">close</span>
                        </Button>
                        }
                    <Card.Title><p className={styles.cardText}>{webTitle}</p></Card.Title>
                    <Card.Text><p className={styles.cardText}>{trailText}</p></Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
    )
}