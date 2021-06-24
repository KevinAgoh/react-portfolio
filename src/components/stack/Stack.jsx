import React from 'react'
import { FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { FaHtml5 } from 'react-icons/fa';
import { SiRails } from 'react-icons/si';
import { DiSass } from 'react-icons/di';
import { FaWordpress } from 'react-icons/fa';
import "./stack.scss";

export default function Stack() {
  return (
    <div className="stack" id="stack">
      <h1>My Stack</h1>
      <h4>These are the technologies I have learned and I use for my work</h4>
      <div class="parent">
        <div class="icon-container">
          <FaReact className="stack-icon" />
          <p>React</p>
        </div>
        <div class="icon-container">
          <DiJavascript1 className="stack-icon" />
          <p>JavaScript</p>
        </div>
        <div class="icon-container">
          <FaHtml5 className="stack-icon" />
          <p>HTML</p>
        </div>
        <div class="icon-container">
          <SiRails className="stack-icon" />
          <p>Ruby on Rails</p>
        </div>
        <div class="icon-container">
          <DiSass className="stack-icon" />
          <p>CSS/Sass</p>
        </div>
        <div class="icon-container">
          <FaWordpress className="stack-icon" />
          <p>Wordpress</p>
        </div>
      </div>
    </div>
  )
}
