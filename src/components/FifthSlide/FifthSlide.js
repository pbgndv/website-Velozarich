import React from "react";
import './FifthSlide.css'

import FifthImage from '../../img/fifth.png'

export default function FifthSlide() {
  return (
    <div className="fifth-slide">
      <div className="fifth-slide_container">
        <img src={FifthImage} alt="" />
        <div className="fifth-slide_container_text">
          <h1>Прокат велосипедов</h1>
          <p>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!</p>
        </div>
      </div>
    </div>

  );
}