import React from 'react'
import { FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { FaHtml5 } from 'react-icons/fa';
import { SiRails } from 'react-icons/si';
import { DiSass } from 'react-icons/di';
import { FaWordpress } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { BiGitBranch } from 'react-icons/bi';
import "./stack.scss";

export default function Stack() {
  return (
    <div className="stack" id="stack">
      <h1>My Stack</h1>
      <h4>These are the technologies I have learned and I use for my work</h4>
      <div class="parent">
        <div class="icon-container">
          <FaReact className="stack-icon" />
          <h3>React</h3>
        </div>
        <div class="icon-container">
          <DiJavascript1 className="stack-icon" />
          <h3>JavaScript</h3>
        </div>
        <div class="icon-container">
          <FaHtml5 className="stack-icon" />
          <h3>HTML</h3>
        </div>
        <div class="icon-container">
          <SiRails className="stack-icon" />
          <h3>Ruby on Rails</h3>
        </div>
        <div class="icon-container">
          <DiSass className="stack-icon" />
          <h3>CSS/Sass</h3>
        </div>
        <div class="icon-container">
          <FaWordpress className="stack-icon" />
          <h3>Wordress</h3>
        </div>
        <div class="icon-container">
          <FaBootstrap className="stack-icon" />
          <h3>Bootstrap</h3>
        </div>
        <div class="icon-container">
          <BiGitBranch className="stack-icon" />
          <h3>Git/GitHub</h3>
        </div>
      </div>
    </div>
  )
}
