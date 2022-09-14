import {react, useState, useEffect} from "react"
import "./Card.css"
import api from "../../Api/cards"

const Card = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            try{
             const response = await api.get('/entity')
             setCards(response.data);
            } catch (err) {
                    console.log("Error")
            }
        }
        fetchCards();
    }, [])

    console.log(cards.name);

   return ( <><div className="cardimg"></div><div className="cardinfo"><h3 className="cardname">{cards.id}</h3> 
  <h2 className="cardlocation">USA</h2></div> <p className="cardexcerpt">Aenean et diam vel metus dignissim suscipit fermentum nec urna...</p></>)
}


export default Card;