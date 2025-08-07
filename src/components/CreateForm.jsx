import {useState} from "react";

function CreateForm({addTodo}) {
    const [content, setContent] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(content)
        setContent('')
    }

    return <div>
        <form className="create-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="输入待办事项"
                   value={content} onChange={(e) => setContent(e.target.value)}/>
            <button type="submit">加入</button>
        </form>
    </div>
}

export default CreateForm