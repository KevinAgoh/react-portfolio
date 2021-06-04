import "./intro.scss";
import CheckIcon from '@material-ui/icons/Check';
import {init} from 'ityped';
import {useEffect, useRef} from "react";

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { showCursor: false, backDelay: 1500, backSpeed: 60, showCursor: true, strings: ['Developer'] })
  }, [])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/kevin.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I am</h2>
          <h1>Kéumzer</h1>
          <h3>Front-end <span ref={textRef}></span></h3>
          <a href="mailto:kevin.agoh@outlook.com?subject=Hi Kev">Get in touch</a>
        </div>
        <a href="#portfolio">
        <CheckIcon className="check"/>
        </a>
      </div>
    </div>
  )
}
