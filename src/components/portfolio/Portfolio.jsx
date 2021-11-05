import {useEffect, useState} from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {reactPortfolio, railsPortfolio} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("react");
  const [data, setData] = useState([]); 

  const list = [
    {
      id: "react",
      title: "React projects"
    },
    {
      id: "rails",
      title: "Ruby on Rails projects"
    }
  ];

  useEffect(() => {
    switch(selected){
      case "react":
        setData(reactPortfolio);
        break;
      case "rails":
        setData(railsPortfolio);
        break;
      default:
        setData(reactPortfolio);
    }
  }, [selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>My work</h1>
      <ul>
        {list.map((item, index) => (
          <PortfolioList
            key={index}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <a href={d.link} rel="noopener noreferrer" target="_blank">{d.title}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
