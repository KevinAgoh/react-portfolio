import {useEffect, useState} from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {featuredPortfolio, skillsPortfolio, experiencePortfolio, projectsPortfolio, contentPortfolio} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]); 

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

  useEffect(() => {
    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
      case "skills":
        setData(skillsPortfolio);
        break;
      case "experience":
        setData(experiencePortfolio);
        break;
      case "projects":
        setData(projectsPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected])

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
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
