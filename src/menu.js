import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="setction-center">
      {items.map((menuItem) => {
        const { id, title, img, price, desc } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} />
            <div className="item-info">
              <header>
                <h4 className="title">{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <div className="line"></div>
              <p>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
