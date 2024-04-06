import React, { useState } from "react";
import img from "./img/img.jpeg";

function App() {
 const [showMainButton, setShowMainButton] = useState(true);
 const [showLoader, setShowLoader] = useState(false);
 const [showMainContent, setShowMainContent] = useState(false);
 const [showResult, setShowResult] = useState(false);

 const handleMainButtonClick = () => {
  setShowMainButton(false);
  setShowLoader(true);
  setTimeout(() => {
   setShowLoader(false);
   setShowMainContent(true);
  }, 3000);
 };

 const showResultClick = () => {
  setShowMainContent(false);
  setShowLoader(true);
  setTimeout(() => {
    setShowLoader(false);
    setShowResult(true);
   }, 2000);
 }

 return (
  <div
   style={{
    display: "flex",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    height: "100vh",
    padding: "0, 16px",
   }}
  >
   {showMainButton && (
    <div
     style={{
      background: "green",
      padding: "8px 12px",
      fontSize: "16px",
      fontWeight: "600",
      color: "white",
      borderRadius: "8px",
     }}
     onClick={handleMainButtonClick}
    >
     Знайти русню поблизу
    </div>
   )}
   {showLoader && <p>Loading...</p>}
   {showMainContent && (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
     <div
      style={{
       display: "flex",
       alignItems: "center",
       gap: "4px",
       flexDirection: "column",
      }}
     >
      <p style={{ fontSize: "16px", color: "gray" }}>
       Знайдено русні поблизу: 0 шт
      </p>
      <div
       style={{
        background: "gray",
        padding: "8px 12px",
        fontSize: "26px",
        fontWeight: "600",
        color: "white",
       }}
      >
       Показати
      </div>
     </div>
     <div
      style={{
       display: "flex",
       alignItems: "center",
       gap: "4px",
       flexDirection: "column",
      }}
     >
      <p style={{ fontSize: "16px", color: "red" }}>
       Знайдено сепарів поблизу: 1 шт
      </p>
      <div
       style={{
        background: "green",
        padding: "8px 12px",
        fontSize: "26px",
        fontWeight: "600",
        color: "white",
       }}
       onClick={showResultClick}
      >
       Показати
      </div>
     </div>
    </div>
   )}
   {showResult && <img src={img} />}
  </div>
 );
}

export default App;
