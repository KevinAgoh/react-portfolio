import "./portfolioList.scss";

import React from 'react'

export default function PortfolioList(title, active, setSelected) {
  return (
    <li className={active ? "portfolioList active" : "portfolioList"} >
      {title}
    </li>
  )
}
