import { useState } from "react";
import Todo from "./Todo";
import "./todoApp.css";

export default function TodoApp() {
    const [title, setTitle] = useState("hola");
    const [todos, setTodos] = useState([]);

 function handleChange(event) {
    const value = event.target.value;
    setTitle(value);
 }


    function handleSubmit(e) {
        e.preventDefault();
      
        const trimmedTitle = title.trim();
        if (trimmedTitle !== '') {
          const newTodo = {
            id: crypto.randomUUID(),
            title: trimmedTitle,
            completed: false,
          };
      
          const updatedTodos = [newTodo, ...todos];
          setTodos(updatedTodos);
          setTitle("");
        } else {
          // Mostrar mensaje de advertencia o realizar otra acción adicional
          console.log("El título no puede estar en blanco");
        }

    

    



    
 }
    function handleUpdate(id, value){
        const temp = [ ...todos];
        const item = temp.find(item => item.ide = id);
        item.title = value;
        setTodos(temp);
    }
    function handleDelete(id) {
        const temp = todos.filter((item) => item.id !== id);
        setTodos(temp);
    }

    return ( 
    <div className="todoContainer">
        <h1>TO-DO list</h1>
        <form className="todoCreateForn" onSubmit={handleSubmit}>
            <input onChange={handleChange} className="todoInput" value={title}/>
            <input onClick={handleSubmit} 
            type="submit" 
            value="Create todo" 
            className="buttonCreate"
            />
        </form>
        <div className="todosContainer">
            {todos.map((item) =>(
                <Todo key={item.id} item={item}  onUpdate={handleUpdate} onDelete={handleDelete}/>
            ))}
            
        </div>
        </div>
        );

}