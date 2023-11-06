import { Button, Container } from "react-bootstrap";
import styles from "./css/FavoritesCard.module.css"
import { useContext } from "react";
import { favoritesContext } from "../favorites/context";

export default function FavoritesCard({date, authors, apiUrl, thumbnail, webTitle, trailText, setShowAlert} ){
    const [favoritesList, favoritesDispatch] = useContext(favoritesContext);

    console.log(webTitle);


    function handleCLick(){
        setShowAlert(true);
        setTimeout(()=>{
            setShowAlert(false);
        }, 2000)
        favoritesDispatch({type: "add", newArticle: {apiUrl: apiUrl, thumbnail: thumbnail, webTitle: webTitle, trailText: trailText}})
    }

    return(
        <div className={styles.favoritesCardContainer}>
            <div>
                <p><b>{authors}</b></p>
                <p><b>{`${date.day}/${date.month}/${date.year}`}</b></p>
            </div>
            <div>
                <Button className={styles.favoriteButton} onClick={handleCLick}>
                    Adaugă la favorite
                </Button>
            </div>
        </div>
    )
}