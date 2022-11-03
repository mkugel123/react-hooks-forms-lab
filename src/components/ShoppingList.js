import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  const [newItem, setNewItem] = useState({
    id: "",
    name: "",
    category: "Produce",
  })
  
  function handleSubmit(event){
    event.preventDefault()
    console.log(newItem)
    setItems([
      ...items,
      newItem,
    ])
    console.log(items)
  }

  function handleFilterChange(event) {
    setSearch(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
  .filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;

  })
  .filter(item => {
    if(item.name.startsWith(search)) return true;
    return item.name.startsWith(search)
  })

  return (
    <div className="ShoppingList">
      <ItemForm
        newItem={newItem}
        setNewItem={setNewItem}
        onItemFormSubmit={handleSubmit}
      />
      <Filter 
        onCategoryChange={handleCategoryChange} 
        onSearchChange={handleFilterChange}
        search={search}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
