import "./App.css";
import Menu from "./menu";
import Categories from "./categories";
import items from "./data";
import { useState } from "react";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  console.log(items[1].category);

  const filterItem = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <div className="underline"></div>
      <Categories filterItem={filterItem} categories={categories} />
      <Menu items={menuItems} />
    </div>
  );
}

export default App;
