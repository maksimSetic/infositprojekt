import react from "react";
import "./CardPage.css";
import Card from "../Card/Card";

const CardPage = () => {
  return (
    <div className="cardcontainerpage">
      <div className="cardcontainer">
        <div className="flex mt-5 ml-4 w-48 text-orange-600 h-10 font-bold text-3xl leading-9">
          Users list
        </div>
        <div className="flex not-italic font-normal text-xl leading-6 text-gray-700 ml-4">
          This is a user list connected to a relational database...
        </div>
        <Card />
      </div>
    </div>
  );
};

export default CardPage;
