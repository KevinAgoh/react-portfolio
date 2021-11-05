import React from 'react'
import { FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { FaHtml5 } from 'react-icons/fa';
import { SiRails } from 'react-icons/si';
import { DiSass } from 'react-icons/di';
import { FaWordpress } from 'react-icons/fa';
import { BsBootstrap } from 'react-icons/bs';
import { BiGitBranch } from 'react-icons/bi';
import "./stack.scss";

export default function Stack() {
  return (
    <div className="stack" id="stack">
      <h2>Stack</h2>
      <h4>These are the languages I speak and the tools I use for my work</h4>
      <div className="parent">
        <div className="icon-container">
          <FaReact className="stack-icon" />
          <h3>React</h3>
        </div>
        <div className="icon-container">
          <DiJavascript1 className="stack-icon" />
          <h3>JavaScript</h3>
        </div>
        <div className="icon-container">
          <FaHtml5 className="stack-icon" />
          <h3>HTML</h3>
        </div>
        <div className="icon-container">
          <SiRails className="stack-icon" />
          <h3>Ruby on Rails</h3>
        </div>
        <div className="icon-container">
          <DiSass className="stack-icon" />
          <h3>CSS/Sass</h3>
        </div>
        <div className="icon-container">
          <FaWordpress className="stack-icon" />
          <h3>Wordress</h3>
        </div>
        <div className="icon-container">
          <BsBootstrap className="stack-icon" />
          <h3>Bootstrap</h3>
        </div>
        <div className="icon-container">
          <BiGitBranch className="stack-icon" />
          <h3>Git/GitHub</h3>
        </div>
      </div>
    </div>
  )
}
