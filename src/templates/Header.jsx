import React from "react";
import ImageHeaderLogo from "../assets/img/header-image.svg"

const Header = () => {
  return (
    <div className="header">
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
            <li>
              <div>テスト</div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header