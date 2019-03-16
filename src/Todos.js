import React from 'react'

const Todos = ({todos, deleteTodo}) => {
    const todolist = todos.length ? 
    (
        todos.map((todo) => {
            return(
                <div className="collection-item" key= {todo.id}>
                  <span onClick= {() => {deleteTodo(todo.id)}}>{todo.content}</span>                  
                </div>
            )
        })
    ) : 
    (
        <p clasName = "center">You have no TODOS left</p>
    )

    return (
      <div className = "todos collection">
        {todolist}
      </div>
    )
  }
export default Todos;
