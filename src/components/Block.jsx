import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ImageSlider from "./ImageSlider";
import "./SliderHome.css";
const slides = [
  {
    url: "https://i.pinimg.com/564x/48/c4/24/48c424da052f362b4352f60e2e9e3cc6.jpg",
    title: "2",
  },
  {
    url: "https://i.pinimg.com/564x/2f/9c/e1/2f9ce1f4a4a90ef5199d903a17476551.jpg",
    title: "1",
  },
  {
    url: "https://i.pinimg.com/564x/01/ac/21/01ac21e066a8a66713399243dc1ea811.jpg",
    title: "3",
  },
];
const containerStyles = {
  width: "100%",
  height: "450px",
  margin: "0 auto",
  transition: "1s",
};
const overlaySlide = {
  width: "50%",
  position: "absolute",
  left: 0,
  top: "0px",
  height: "450px",
  zIndex: "1",
  background: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(10px)",
};

const Block = () => {
  return (
    <>
      {/* <SliderHome /> */}
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
        <div style={overlaySlide}>
          <div className="overlayContent">
            <p>СПАСИТЕ ЭРКЕАЙЫМ!</p>
            <p>Дорогие друзья, в столь сложное для всех время,</p>
            <p>
              мы вынуждены просить помощи у вас в надежде спасти жизнь маленькой
              Эркеайым.
            </p>
            <a href="#help" style={{ textDecoration: "none" }}>
              <button>Помочь финансово</button>
            </a>
          </div>
        </div>
      </div>
      <div className="block1">
        <img
          src="https://taplink.st/p/2/e/a/6/48243345.jpg?0"
          alt="Photo of Erkaim"
          style={{ width: "250px" }}
        />
        <img
          src="https://taplink.st/p/3/9/4/0/48243372.jpg?0"
          alt="Photo of Erkaim"
          style={{ width: "250px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "30px",
          }}>
          <Typography className="txt-diagnosis">
            Диагноз: нейробластома С2 Т3 N1 M1A 4 Б стадии с лейкемизацией в
            костный мозг. Эркеайым требуется срочная пересадка костного мозга в
            клинике Турции 100 000$ и 8 химиотерапий на сумму 250 000$. В
            Кыргызстане такого рода операции не проводятся, врачами
            рекомендовано пройти лечение за рубежом. Девочке всего 2,5 года,
            просим вас подарить жизнь нашей малышке.
          </Typography>
        </div>
      </div>
      <Box className="box-w-requisits">
        <Typography className="requisits">
          <h1 id="help">Как помочь финансово?</h1>
          <h2>Реквизиты для граждан Кыргызстана:</h2>
          <ul type="none">
            <li>
              ✅Элсом: 0505240681 Получатель: Asel Aliakbarovna Bektemirova{" "}
            </li>
            <li>✅О!Деньги (можно как единицы): 0505240681 </li>
            <li>✅МБанк: 996505240681 Получатель: Бектемирова Асель </li>
            <li>
              ✅Оптима Банк (VISA): 4169 5853 5288 0032 Получатель: Bektemirova
              Asel
            </li>
            <li>
              ✅Бакай Банк (VISA): 4714 2400 6583 5713 Получатель: Ayday
              Toktomambetova
            </li>

            <li>
              ✅Элкарт (Айыл Банк): 9417 3785 0870 9464 Получатель: Bektemirova
              Asel
            </li>
            <li>
              ✅Керемет банк: Карта: 9417 2591 1530 6938 Счет: 1360360003852119
            </li>
            <li> Получатель: Бектемирова Айжаркын Алиакбаровна</li>
          </ul>
          <h2>Реквизиты для зарубежных стран:</h2>
          <a href="https://taplink.cc/save_erkaim">
            <button id="btn-foreign">Посмотреть здесь</button>
          </a>
        </Typography>
      </Box>
    </>
  );
};

export default Block;
