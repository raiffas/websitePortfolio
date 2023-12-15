import { useState } from "react"
export function NewTodoForm({ addTodo }) {
    const [newItem, setNewItem] = useState("")
    

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return
        addTodo(newItem)
        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
        <label htmlFor="item">New Item</label>
          <input 
            value={newItem} // value will always be equal to the value in this component because of the next line
            onChange={e => setNewItem(e.target.value)} // this is important to make sure that the changes that are being made are actually being shown. it updates the value of newitem with what is in the input field
            type="text" 
            id="item" 
          />
        </div>
        <button className="btn">Add</button>
      </form>
    )
}