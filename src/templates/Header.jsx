import React from "react";
import ImageHeaderLogo from "../assets/img/header-image.svg"

const Header = () => {
  function scrollFunction() {
    const head = document.getElementById("scroll")
    const headHeight = window.pageYOffset
    if (headHeight > 250) {
      head.classList.add("is_active") 
    } else {
      head.classList.remove("is_active")
    }
  }
  window.onload = function() {
    scrollFunction();
  }
  window.onscroll = function() {
    scrollFunction();
  }

  return (
    <div className="header" id="scroll">
      <div className="header-contents">
        <img src={ImageHeaderLogo} alt="キャリトレ"></img>
        <nav>
          <ul>
            <li>
              <a href="https://bizreach.biz/service/careertrek/?trcd=careertrekC">採用ご担当者の方</a>
            </li>
            <li>
              <a href="https://www.careertrek.com/login">ログイン</a>
            </li>
            <li id="fadein-list">
              <a href="https://www.careertrek.com/register/email">使ってみる</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header