import React from "react";
import './SecondSlide.css'

import FirstImage from '../../img/first_image.png'

export default function SecondSlide() {
  return (
    <div className="second-slide">
      <div className="second-slide_container">
        <div className="second-slide_container_text">
          <h1>Что мы предлагаем</h1>
          <p>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. </p>
        </div>
        <img src={FirstImage} alt="" />
      </div>
    </div>

  );
}