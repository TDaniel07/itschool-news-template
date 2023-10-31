import { Container } from "react-bootstrap";
import NewsSection from "../components/NewsSection";

export default function MainPage(){
    return(
        <NewsSection title = {"Tech"} section = {"technology"} nrOfArticles = {6} />
    );
}