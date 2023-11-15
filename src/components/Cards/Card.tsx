import React from "react";
import CardProps from "./interfaces/CardProps";

export const Card: React.FC<CardProps> = ({ title, image, children }) => {
  return (
    <div className="card mb-3">
      {image && <img src={image} className="card-img-top" alt={title} />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Card;
