import React from "react";
import './FirstSlide.css'

import Header from '../../components/Header/Header';

import FSdino from '../../img/FSdino.png'

export default function FirstSlide() {
  return (
    <div className="first-slide">
        <div className="first-slide_container">
          <Header/>
          <div className="first-slide_container_content">
            <div className="first-slide_container_content_text">
              <h1>Веломастерская “Велозар”</h1>
              <p>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
            </div>
            <div className="first-slide_container_content_img"><img src={FSdino} alt="" /></div>
          </div>
        </div>
    </div>

  );
}