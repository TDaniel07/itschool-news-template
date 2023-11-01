import { Container } from "react-bootstrap";
import styles from "./css/FavoritesSection.module.css"

export default function FavoritesSection(){
    return(
        <Container className = {styles.favoritesSection}>
            <h1 className = {styles.favoritesSectionTitle}>Favorite</h1>
            <Container className = {styles.favoritesSectionText}>
                <p>Vrei să îți salvezi știrile favorite pentru a le reciti mai încolo?</p>
                <p>În cadrul fiecărei știri găsești un buton prin care poți adăuga știrea la favorite.</p>
                <p>Vizitează secțiunea Favorite pentru a vedea știrile adăugate.</p>
            </Container>
        </Container>
    );
}