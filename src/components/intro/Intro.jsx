import "./intro.scss";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {init} from 'ityped';
import {useEffect, useRef} from "react";

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { backDelay: 1500, backSpeed: 60, showCursor: true, strings: ['Developer'] })
  }, [])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Photo_de_profil_Kevin-detouree.png" alt="Kevin's face" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I am</h2>
          <h1>Kévin Agoh</h1>
          <h3>Full-Stack <span ref={textRef}></span></h3>
        </div>
        <a href="#myself">
          <ArrowDropDownIcon className="arrow"/>
        </a>
      </div>
    </div>
  )
}
