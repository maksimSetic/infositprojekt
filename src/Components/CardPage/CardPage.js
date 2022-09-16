import react from "react"
import "./CardPage.css"
import Card from "../Card/Card"

const CardPage = () => {

   return(
  <div className="cardcontainerpage"><div className="cardcontainer">
    <div className="containertitle1">Users list</div>
    <div className="containertitle2">This is a user list lorem sit amet...</div>
    <div className="cardarraybox"><Card/></div></div></div>)
}

export default CardPage;