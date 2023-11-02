import { Button, Container } from "react-bootstrap";
import styles from "./css/FavoritesCard.module.css"

export default function FavoritesCard({date, authors} ){
    return(
        <div className={styles.favoritesCardContainer}>
            <div>
                <p><b>{authors}</b></p>
                <p><b>{`${date.year}/${date.month}/${date.day}`}</b></p>
            </div>
            <div>
                <Button className={styles.favoriteButton}>Adaugă la favorite</Button>
            </div>
        </div>
    )
}