import React ,{ useState, useEffect, useRef, useCallback } from "react";
import ImageHeaderLogo from "../assets/img/header-image.svg"

const Header = () => {
//  const [isDisplay, setIsDisplay] = useState("")
//  const isRunning = useRef(false) // スクロール多発防止用フラグ
//
//  const style = {
//    backGround: "#f2f2f3"
//  }
//
//  // リスナに登録する関数
//  const isScrollToggle = useCallback(() => {
//    if (isRunning.current) return
//    isRunning.current = true
//    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
//    console.log(scrollTop)
//    requestAnimationFrame(() => {
//      if (scrollTop > 1000) {
//        setIsDisplay(style)
//      } else {
//        setIsDisplay("")
//      }
//      isRunning.current = false
//    })
//  }, [])
//
//  // 登録と後始末
//  useEffect(() => {
//    document.addEventListener('scroll', isScrollToggle, { passive: true })
//    return () => {
//      document.removeEventListener('scroll', isScrollToggle, { passive: true })
//    }
//  }, [])

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
              {/* <div className="fade-in" style={setIsDisplay}>テスト</div> */}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header