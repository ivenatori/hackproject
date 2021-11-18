import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>MYIMPERIA</h4>
            <h4 className="list-unstyled">
              <li>+996500299222</li>
              <li>Бишкек, Кыргызстан</li>
              <li>улица Исанова 105/3</li>
            </h4>
          </div>
          <div className="col">
            <h4>Время работы</h4>
            <ui className="list-unstyled">
              <li>ПН-ПТ 9:00-17:00</li>
              <li>СБ-ВС 10:00-18:00</li>
              <li>В праздничные дни круглосуточно</li>
            </ui>
          </div>
          <div className="col">
            <h4>ОНЛАЙН РЕСТОРАН</h4>
            <ui className="list-unstyled">
              <li>Пицца</li>
              <li>Суши</li>
              <li>Напитки</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="descr">
            <p>Пицца — блюдо, завоевавшее любовь тысяч людей. Ее покупают на пикники, на обеды в офисы, домой для дружеских посиделок с друзьями. Ее заказывают для взрослых и детей. Если вы хотите попробовать вкусную итальянскую или американскую пиццу, купите ее в нашем ресторане в Бишкеке.</p>
        </div>
        <hr/>
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Makers students | Все права защищены |
            Копирование материалов без согласия авторов запрещено | 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;