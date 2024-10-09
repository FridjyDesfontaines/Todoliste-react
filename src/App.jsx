import { useState } from "react"
import { nanoid } from "nanoid"
import ListItem from "./components/Listltem";

function App() {
const [todolist, setTodoList ] = useState([

  { id: nanoid(8), content: "item 1"},
  { id: nanoid(8), content: "item 2"},
  { id: nanoid(8), content: "item 3"}

])

const [todo, setTodo] = useState("")
const [showValidation, setShowValidation] = useState(false)

function deleteTodo(id){
  
  setTodoList(todolist.filter(todo => todo.id !== id))
}

function hundleSubmit(e){
  e.preventDefault()
  if(todo == ""){

    setShowValidation(true)
    return

  }

 
  
  setTodoList([...todolist, {id: nanoid(), content: todo }])
  setTodo("")
  setShowValidation(false); 
}
console.log(todolist);

  return (
    <>
      <div className="h-screen bg bg-slate-900">
        <div className="max-w-4xl mx-auto pt-20 px-6">
          <h1 className="text-3xl text-slate-100 mb-4">to do list </h1>
            <form onSubmit={hundleSubmit} className="mb-10">
              <label htmlFor="todo-item"
              className="text-slate-50">Ajouter une chose a faire</label>
              <input 
              value={todo}
              onChange={e => setTodo(e.target.value)}
              type="text" className="mt-1 block w-full rounded" />
              {showValidation && (
                <p className="text-red-400">Ajoutez du contenu </p>
              )}
              <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">Ajouter</button>
            </form>
            <ul>{
              todolist.length === 0 && (
                <li className="text-slate-50 text-md">Pas d'item afficher...</li>
              )}
              {todolist.length > 0 && todolist.map(item =>(

                <ListItem key={item.id} itemData={item} deleteTodo = {deleteTodo}/>
              ))}
              
             
            </ul>
        </div>
      </div>
    </>
  )

  
}

export default App
