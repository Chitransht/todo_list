import InputField from './InputField';

const Input = ({enter, setEnter, todos, setTodos}) => {
    

    const handleAdd = (event) => {
        event.preventDefault();
        const newTodo = [...todos, enter];
        setTodos(newTodo);
        setEnter({name:"", email:""})
        localStorage.setItem("todos", JSON.stringify(newTodo));    
    }

  return (
    <div>
         <form className='container p-4 my-4 border'>
            <div className="mb-3 mt-3">
                <h2 className='h2'>Fill In the Form Please</h2>
                <InputField  label="Name" value= {enter.name} newFunction={(newVal)=>setEnter({...enter,name:newVal})}/>
                <InputField  label="Email" value= {enter.email} newFunction={(val) => setEnter({...enter,email:val})}/>
            </div>
            <button className="btn btn-outline-dark" onClick={handleAdd}>Add</button>
        </form>
    </div>
  )
}

export default Input;
