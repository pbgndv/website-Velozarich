import React, { useState } from "react";
import './Header.css'

import LogoVelozavr from '../../img/logoVelozavr.png'

export default function Header() {
  const [index, setIndex] = useState(0)
  return (
    <div className="header">
        <div className="header_container">

          <div className="header_container_logo"><img src={LogoVelozavr} alt="" /></div>

          <div className="header_container_navbar">
            <ul>
              <li className={`${index === 0 ? 'active-li' : ''} `} onClick={() => setIndex(0)}>О нас</li>
              <li className={`${index === 1 ? 'active-li' : ''} `} onClick={() => setIndex(1)}>Услуги</li>
              <li className={`${index === 2 ? 'active-li' : ''} `} onClick={() => setIndex(2)}>Аренда</li>
            </ul>
          </div>
         
          <div className="header_container_button">Связаться</div>
        
        </div>
    </div>

  );
}
