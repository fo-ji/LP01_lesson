import React from "react"
import "./assets/reset.css"
import "./assets/style.scss"
import Home from "./templates/Home"
import Header from "./templates/Header"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
