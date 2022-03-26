import React from "react";
import { useState } from "react";

import "./card.css";

const Card = (props) => {
  const { name, img, options } = props.categories;

  const [isShow, setİsShow] = useState(true);
  const handleClick = () => {
    setİsShow(!isShow);
  
    isShow&&setTimeout(()=>setİsShow(true),2000)
  };
  //  isShow={isShow}
  return (
    <div className="card" onClick={handleClick}>
      {isShow ? (
        <div>
          <img src={img} alt={name} />
          <p>{name}</p>
        </div>
      ) : (
        <div>
          <ul>
            {options.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Card;
