import React from 'react'
import '../stylesheets/TodoListTemplate.css'

const TodoListTemplate = ({form, palette, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                Todo List
            </div>

            <section className="palette-wrapper">
                {palette}
            </section>

            <section className="form-wrapper">
                {form}
            </section>

            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    )
}

export default TodoListTemplate