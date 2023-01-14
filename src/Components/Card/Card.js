import { react, useState, useEffect, Component } from "react";
import "./Card.css";
import "../CardPage/CardPage.css";
import Axios from "axios";
import styled from "styled-components";
import { ReactComponent as Vector22 } from "../../Assets/Vector2.svg";
import { ReactComponent as Vector33 } from "../../Assets/Vector3.svg";
import { ReactComponent as Vector4 } from "../../Assets/Vector4.svg";
import { ReactComponent as Vector5 } from "../../Assets/Vector5.svg";

const CardGrid = styled.div`
display: flex;
margin-top: 116px;
.parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 13px;
  grid-row-gap: 13px;
 }

section:first-child{
  background: yellow;
}
@media (max-width: 760px) {
  flex-direction: column;
  display: inline-block;
}
`;

const Vector = { img: <Vector22 />}
const Vector2 = { img: <Vector33 />}

const Card = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    Axios.get("https://api.npoint.io/57ea8c86634e5970871d")
      .then((res) => setCardData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(cardData);


 


  const cardRender = cardData.slice(0,4).map((card, index) => {


    const VectorPass = () => { 
    if(index === 0 || index === 2) 
    {return( <section className="cardshape">{Vector.img}</section>)}
    
    if(index === 1 || index === 3) 
    {return( <section className="cardshape">{Vector2.img}</section>)}
    }


    return (
      <> 
        <div className="cardbox" id="cardbox">
          <div className="cardbox2" id="cardbox2">
            <div className="cardbox3" id="cardbox3">
              <div className="cardbox4" id="cardbox4">
                <img src={card.avatar} className="cardimg" />

           <VectorPass />

                <div className="cardinfo">
                  <div className="metainfo">
                    <div className="cardname">{card.name}</div>
                    <div className="locationcontainer">
                      <div className="cardlocation">{card.state}</div>
                    </div>
                  </div>
                  <div className="cardexcerpt">
                    <p style={{ marginLeft: "10px" }}>
                      Aenean et diam vel metus dignissim suscipit fermentum nec
                      urna...
                    </p>
                  </div>
                  <div className="cardexcerpthidden" id="classexcerpthidden">
                    <p style={{ marginLeft: "10px" }}>{card.body}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
 
      </>
    );
});
  console.log(cardRender);
  return (
    <>
      <div>
        <CardGrid>{cardRender}</CardGrid>
      </div>
    </>
  );
};



export default Card;
