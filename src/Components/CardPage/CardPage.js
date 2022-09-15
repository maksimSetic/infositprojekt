import react from "react"
import "./CardPage.css"
import Card from "../Card/Card"

const CardPage = () => {

   return(
  <div className="cardcontainerpage"><div className="cardcontainer">
    <h2 className="containertitle1">Users list</h2>
    <h2 className="containertitle2">This is a user list lorem sit amet...</h2>
    <div className="cardarraybox"><Card/></div></div></div>)
}

export default CardPage;