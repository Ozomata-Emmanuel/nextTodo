"use client"

import { useState } from "react"
import { toast, ToastContainer } from "react-toastify";
import { FaCheckCircle, FaTrash, FaUndo } from "react-icons/fa";

export default function page(){
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")
    const [search, setSearch] = useState("");

    const addTodo = ()=>{
        if(!input.trim()){
            toast.error("Todo cannot be empty");
            return;
        }
        const newTodo = {id: Date.now(), text: input, completed: false};
        setTodos([newTodo, ...todos]);
        setInput("");
        toast.success("Todo added successfully")
    }

    const deleteTodo=(id)=>{
        
        setTodos(todos.filter((todo)=> todo.id !==id))
        toast.info("Todo deleted")
    }

    const toggleComplete =(id)=>{
        setTodos(
            todos.map((todo)=> todo.id === id ? {...todo, completed: !todo.completed} : todo)
        )
        toast.success("Todo Updated!")
    }

    const filteredTodo = todos.filter((todo)=> todo.text.toLowerCase().includes(search.toLocaleLowerCase()))

    return(
        <div className="max-w-xl mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-center mb-4">TO-DO App</h1>
            <div className="flex gap-2 mb-4">
                <input 
                type="text"
                 className="flex-1 p-2 border rounded"
                 placeholder="Add a new task...."
                 value={input}
                 onChange={(e)=>setInput(e.target.value)}
                 />
                 <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" onClick={addTodo}>Add</button>
            </div>
            <input type="text" 
            className="w-full p-2 rounded mb-4" 
            placeholder="Search tasks..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
            {/* DISPLAY TO DO OR TASKS */}
            <ul>
                {
                    filteredTodo.map((todo)=>(
                        <li 
                        key={todo.id}
                        className={`flex justify-between items-center p-2 mb-2 rounded ${todo.completed ? "bg-green-200" : "bg-white"}`}
                         >
                            <span className={todo.completed ? "line-through text-gray-500" : "text-black"}>{todo.text}</span>
                            <div className="flex gap-2">
                                <button className="text-green-600" onClick={()=>toggleComplete(todo.id)}>
                                    {todo.completed ? <FaUndo /> : <FaCheckCircle />}
                                </button>
                                <button className="text-red-600" onClick={()=>deleteTodo(todo.id)}>
                                    <FaTrash />
                                </button>
                            </div>
                         </li>
                    ))
                }
            </ul>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    )
}