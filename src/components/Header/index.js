import React, { useEffect, useState, useRef } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

export default ({ black }) => {
  const [isActive, setIsActive] = useState(false);
  const searchInput = useRef(null);

  const handleClick = (event) => {
    setTimeout(function () {
      searchInput.current.focus();
    }, 50);

    setIsActive((current) => !current);
  };

  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="">
          <img
            alt="Netflix"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
          />
        </a>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="">Início</a>
          </li>
          <li>
            <a href="">Séries</a>
          </li>
          <li>
            <a href="">Filmes</a>
          </li>
          <li>
            <a href="">Bombando</a>
          </li>
          <li>
            <a href="">Minha Lista</a>
          </li>
        </ul>
      </div>
      <div class={isActive ? "header--search open" : "header--search"}>
        <SearchIcon
          style={{ fontSize: 30 }}
          onClick={handleClick}
          className={isActive ? "searchIcon openIcon" : "searchIcon"}
        />
        <input
          type="search"
          id="pesquisa"
          ref={searchInput}
          className={isActive ? "searchBox openBox" : "searchBox"}
        />
      </div>
      <div class="header--notification">
        <NotificationsIcon style={{ fontSize: 30 }} />
        <div className="header--menu-notification">
          Nenhuma notificação recente
        </div>
      </div>
      <div className="header--user">
        <div className="header--menu-account">
          <ul>
            <li>
              <a href="">
                <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" />{" "}
                pessoal
              </a>
            </li>
            <li>
              <a href="">
                <ModeEditOutlineOutlinedIcon /> Gerenciar Perfis
              </a>
            </li>
          </ul>
          <hr />
          <ul>
            <li>
              <a href="">
                <PersonOutlineOutlinedIcon /> Minha Conta
              </a>
            </li>
            <li>
              <a href="">
                <HelpOutlineOutlinedIcon /> Centro de Ajuda
              </a>
            </li>
          </ul>
          <hr />
          <ul>
            <li
              style={{
                paddingLeft: 45,
              }}
            >
              <a href="">Sair da Netflix</a>
            </li>
          </ul>
        </div>
        <a href="">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
        </a>
        <div class="header--arrow-down">
          <ArrowDropDownIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </header>
  );
};
