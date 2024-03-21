import { CreateSlice, createSlice, nanoid } from "@reduxjs/toolkit";


const initialState ={
    todos:[{id:1,text:"hello world"}]
}

export const todoSlice = createSlice({

    name: "todo",
    initialState,
    reducers:{
        // yha state and action bydefault milta hai
        addTodo: (state,action)=>{
            const todo ={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            state.todos=state.todos.filter((todo)=>
                todo.id !== action.payload
            )
        },
    }
})

export const {ad}= todoSlice.actions