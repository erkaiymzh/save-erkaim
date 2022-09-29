import { Button, Typography } from "@mui/material";
import React from "react";

const Block = () => {
  return (
    <>
      <div className="block1">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            margin: "20px",
          }}>
          <Typography sx={{ marginBottom: "10px", fontFamily: "Rubik" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            maxime, magni esse unde asperiores porro.
          </Typography>
          <a href="#help" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              color="error"
              style={{
                border: "3px solid",
                borderRadius: "20px",
                margin: "5px",
                fontSize: "20px",
              }}>
              Помочь финансово
            </Button>
          </a>
        </div>
        <img
          src="https://thumbs.dreamstime.com/b/hand-donating-money-icon-charity-sketch-vector-illustration-isolated-foundations-events-cartoon-white-background-157281765.jpg"
          alt=""
        />
      </div>
      <Typography style={{ margin: "10px", maxWidth: "500px" }}>
        <p id="help">Как помочь финансово?</p>
        <h1>Реквизиты для граждан Кыргызстана</h1>
        <ul type="circle">
          <li>Элсом: 0505240681 Получатель: Asel Aliakbarovna Bektemirova </li>
          <li>О!Деньги (можно как единицы): 0505240681 </li>
          <li>МБанк: 996505240681 Получатель: Бектемирова Асель </li>
          <li>
            {" "}
            Оптима Банк (VISA): 4169 5853 5288 0032 Получатель: Bektemirova Asel{" "}
          </li>
          <li>
            Бакай Банк (VISA): 4714 2400 6583 5713 Получатель: Ayday
            Toktomambetova
          </li>
          <li>
            Элкарт (Айыл Банк): 9417 3785 0870 9464 Получатель: Bektemirova Asel{" "}
          </li>
          <li>
            Керемет банк: Карта: 9417 2591 1530 6938 Счет: 1360360003852119
            Получатель: Бектемирова Айжаркын Алиакбаровна
          </li>
        </ul>
      </Typography>
    </>
  );
};

export default Block;
