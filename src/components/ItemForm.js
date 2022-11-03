import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({
  newItem,
  setNewItem,
  onItemFormSubmit
}) {

  function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    setNewItem({
      ...newItem,
      id: uuid(),
      [name]: value
    })
  }

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={newItem.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
