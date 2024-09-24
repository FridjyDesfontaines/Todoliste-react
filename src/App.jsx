function App() {

  return (
    <>
      <div className="h-screen bg bg-slate-900">
        <div className="max-w-4xl mx-auto pt-20 px-6">
          <h1 className="text-3xl text-slate-100 mb-4">la to do liste</h1>
            <form className="mb-10">
              <label htmlFor="todo-item"
              className="text-slate-50">Ajouter une chose a faire</label>
              <input type="text" className="mt-1 block w-full rounded" />
              <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">Ajouter</button>
            </form>
            <ul>
               
            </ul>
        </div>
      </div>
    </>
  )
}

export default App
