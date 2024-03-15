import {createContext , useContext} from "react"


export const ToDoContext =createContext({

    todos:[
        {id:1,
        todo: "todo msg",
        completed: false},
    ],

    addTodo:(todo) => {},
    updateedTodo: (id, todo) =>{},
    deleteTodo:(id) => {},
    
    toggleComplete: (id) => {}


})


export const useTodo =() => {
    return useContext(ToDoContext)
}


export const TodoProvider = ToDoContext.Provider