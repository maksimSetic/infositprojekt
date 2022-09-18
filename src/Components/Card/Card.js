import { react, useState, useEffect, Component } from "react";
import "./Card.css";
import "../CardPage/CardPage.css";
import Axios from "axios";
import styled from "styled-components";
import { ReactComponent as Vector2 } from "../../Assets/Vector2.svg";
import { ReactComponent as Vector3 } from "../../Assets/Vector3.svg";
import { ReactComponent as Vector4 } from "../../Assets/Vector4.svg";
import { ReactComponent as Vector5 } from "../../Assets/Vector5.svg";

const CardGrid = styled.div`
  display: flex;
  margin-top: 116px;
  @media (max-width: 760px) {
    flex-direction: column;
    display: inline-block;
  }
  .parent {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 13px;
    grid-row-gap: 13px;
  }
  .div1 {
    grid-area: 1 / 1 / 6 / 2;
  }
  .div2 {
    grid-area: 1 / 2 / 6 / 3;
  }
  .div3 {
    grid-area: 1 / 3 / 6 / 4;
  }
  .div4 {
    grid-area: 1 / 4 / 6 / 5;
  }
`;

const Card = () => {
  const [cardData, setCardData] = useState([]);

  const vectorArray = [
    {
      img: <Vector2 />,
    },
    {
      img2: <Vector3 />,
    },
    {
      img3: <Vector4 />,
    },
    {
      img4: <Vector5 />,
    },
  ];

  useEffect(() => {
    Axios.get("https://api.infosit-zadatak.tk/api/entity")
      .then((res) => setCardData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(cardData);

  const cardRender = cardData.slice(0, 4).map((card, index) => {
    return (
      <>
        <div className="cardbox" id="cardbox">
          <div className="cardbox2" id="cardbox2">
            <div className="cardbox3" id="cardbox3">
              <div className="cardbox3" id="cardbox4">
                <img src={card.avatar} className="cardimg" />

                {vectorArray.slice(0, 1).map((vector, index) => (
                  <div className="cardshape">{vector.img}</div>
                ))}

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

  return (
    <>
      <div>
        <CardGrid>{cardRender}</CardGrid>
      </div>
    </>
  );
};

export default Card;
