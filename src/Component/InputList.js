
const InputList = ({todos, setTodos, modalToggler}) => {

    const handledelete = (i) => {
        const olditem = [...todos];
        const item = olditem.filter((element, id) => {return id!==i});
        setTodos(item);
        localStorage.setItem("todos", JSON.stringify(item));
    };


  return (
    <div className='container border p-2 my-2'> 
        <h3 className='h3'>Updated List</h3>
        {todos.map((item, i)  => {
            return (
                <div className='row borders' key={i}>
                    <div className='col-sm-5'>          
                        <ul className="list-group">
                            <li className="list-group-item  m-1"><b>Name:</b> {item.name} <br/> <b>Email:</b> {item.email} <br/> <button type="button" className="btn btn-warning mx-1" onClick={()=>modalToggler(item, i)}>update</button> <button type="button" className="btn btn-danger" onClick = { () => handledelete(i)}>Delete</button></li>                                                      
                        </ul>                                           
                    </div>   
                    
                </div>  )         
        })}
    </div> 
  )
}
export default InputList;
