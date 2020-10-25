import React from "react";
import ImageTopMessage from "../assets/img/top-message.svg"
import GifPr from "../assets/img/section-pr.gif"
import GifMatch from "../assets/img/section-match.gif"

const Home = () => {
  return (
    <div>
      <section className="top-section">
        <div className="top-section__text">
          <h1>
            <img src={ImageTopMessage} alt="キャリアをカチトレ。" />
          </h1>
          <p>優良ベンチャーから大手企業まで多数！たくさんの企業が「挑戦したい20代」を<br />待っています</p>
          <a href="https://www.careertrek.com/register/email">
            <buton>さっそく使ってみる</buton>
          </a>
        </div>
      </section>
      <section className="middle-section--high">
        <h2>気になる企業に<br />自分からアプローチ</h2>
        <ul>
          <li>
            <div className="list-container">
              <img src={GifPr} alt="１タップで気軽に企業にアピールができる">
              </img>
              <div className="list-container__text">
                <h3>
                  １タップで気軽に<br /><span>企業にアピールができる</span>
                </h3>
                <p>
                  通勤時間・ランチタイム・寝る前など、ちょっとした時間でも転職活動ができます。気になる企業には積極的に「興味がある」をタップしましょう。
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="list-container">
              <div className="list-container__text">
                <h3>
                  マッチしたら<br /><span>企業と直接やり取り可能</span>
                </h3>
                <p>
                  あなたの「興味がある」は企業に届きます。見事マッチすると企業からスカウトが届き、直接のやりとりが可能に。思わぬ企業からスカウトが届くことも
                </p>
              </div>
              <img src={GifMatch} alt="マッチしたら企業と直接やり取り可能">
              </img>
            </div>
          </li>
        </ul>
      </section>
      <section className="middle-section--low">
        <h3>
          使えば使うほど<br />可能性が広がる、出会える
        </h3>
        <p>
          キャリトレはあなたの志向性を学習し、<br />おすすめの仕事をお届けします。<br />自分でも気付いていなかった新しい可能性に出会えます。
        </p>
      </section>
      <section className="bottom-section">
        <h3>
          楽しく、本気で、転職活動を始めよう。
        </h3>
        <a href="https://www.careertrek.com/register/email">
            <buton>さっそく使ってみる</buton>
          </a>
      </section>
    </div>
  )
}

export default Home