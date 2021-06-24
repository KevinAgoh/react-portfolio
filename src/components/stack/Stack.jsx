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
      <div class="parent">
        <div class="div1"><FaReact className="icon" /></div>
        <div class="div2"><DiJavascript1 className="icon" /></div>
        <div class="div3"><FaHtml5 className="icon" /></div>
        <div class="div4"><SiRails className="icon" /></div>
        <div class="div5"><DiSass className="icon" /></div>
        <div class="div6"><FaWordpress className="icon" /></div>
      </div>
    </div>
  )
}
