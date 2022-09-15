import {react, useState, useEffect, Component} from "react"
import "./Card.css"
import Axios from "axios"
import styled from "styled-components"
import {ReactComponent as Vector} from "../../Assets/Vector.svg"

const Grid = styled.div`
margin-top: 116px;
.parent {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 14px;
    grid-row-gap: 14px;
 
    }
    
    .div1 { grid-area: 1 / 1 / 6 / 2; }
    .div2 { grid-area: 1 / 2 / 6 / 3; }
    .div3 { grid-area: 1 / 3 / 6 / 4; }
    .div4 { grid-area: 1 / 4 / 6 / 5; }
`;

const Card = () => {

    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
       Axios.get('https://api.infosit-zadatak.tk/api/entity').then(res => 
       setCardsData(res.data)).catch(err => console.log(err))
    }, [])
    console.log(cardsData);


    const arr = cardsData.slice(0,4).map((card, index) => {
        return(
            <><Vector className="vector"/><Grid>
                <><img src={card.image} className="cardimg" /><div className="cardinfo"><div className="cardname">{card.name ? card.name : <p>"Unavailable"</p>}</div>
                    <div className="cardlocation">{card.state}</div><div className="cardexcerpthidden">Aenean et diam vel metus dignissim suscipit fermentum nec urna...</div><div className="cardexcerpt">Aenean et diam vel metus dignissim suscipit fermentum nec urna...</div></div></></Grid></>
        )
    })

   return ([arr])
}


export default Card;