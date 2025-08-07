import CreateForm from "./CreateForm.jsx";
import Todo from "./Todo.jsx";
import {useState} from "react";

function TodoWrapper() {
    const [todos, setTodos] = useState([
        {content: '打扫厕所', id: Math.random(), isCompleted: false, isEditing: false},
        {content: '写作业', id: Math.random(), isCompleted: false, isEditing: false},
    ])

    // 添加todo
    const addTodo = (content) => {
        setTodos([...todos, {content, id: Math.random()}])
    }

    // 删除todo
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    // 切换已完成状态
    const toggleCompleted = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {...todo, isCompleted: !todo.isCompleted}
            }
            return todo
        }))
    }

    // 切换编辑状态
    const toggleEditing = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {...todo, isEditing: !todo.isEditing}
            }
            return todo
        }))
    }

    // 点击完成修改todo名称
    const editTodo = (id, newContent) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {...todo, content: newContent, isEditing: false}
            }
            return todo
        }))
    }

    return <div className="wrapper">
        <h1>待办事项</h1>
        <CreateForm addTodo={addTodo}/>
        {todos.map((todo) => {
            return <Todo
                todo={todo}
                key={todo.id}
                deleteTodo={deleteTodo}
                toggleCompleted={toggleCompleted}
                toggleEditing={toggleEditing}
                editTodo={editTodo}
            />
        })}
    </div>
}

export default TodoWrapper