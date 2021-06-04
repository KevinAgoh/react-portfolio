import {useEffect, useState} from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured"
    },
    {
      id: "skills",
      title: "Skills"
    },
    {
      id: "experience",
      title: "Experience"
    },
    {
      id: "projects",
      title: "Projects"
    },
    {
      id: "content",
      title: "Content"
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList 
            title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="https://assets-fr.imgfoot.com/media/cache/642x382/andre-ayew-swansea-2020.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://assets-fr.imgfoot.com/media/cache/642x382/andre-ayew-swansea-2020.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://assets-fr.imgfoot.com/media/cache/642x382/andre-ayew-swansea-2020.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  )
}
