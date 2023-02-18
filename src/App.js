import { useState, useEffect } from 'react';
import Header from './Component/Header';
import Input from './Component/Input';
import InputList from './Component/InputList';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputField from './Component/InputField';


function App() {
  const localItems = "todos"
  const [enter, setEnter] = useState({ name:"",email:"" });
  const [update, setUpdate] = useState({ name:"",email:"" });
  const [updateId, setUpdateId] = useState(null);
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const modalToggler = ({email, name}, i) => {
    setUpdate({email, name})
    setUpdateId(i)
    setShow(!show);
  }

  const updateHandler = () => {
    const olditem = [...todos];
    olditem[updateId] = update
    setTodos(olditem);
    localStorage.setItem("todos", JSON.stringify(olditem));
    setShow(!show);
    setUpdate({name:"", email:""})
    setUpdateId(null)
  }

  useEffect(() => {
   const retrivcontact = JSON.parse(localStorage.getItem(localItems));
   console.log(retrivcontact);
   if (retrivcontact) setTodos(retrivcontact)
  }, []);

  return (
    <div >
      <Header />
      <Input  
          enter = {enter}
          setEnter={setEnter}
          todos = {todos}
          setTodos={setTodos}
      />
      <InputList 
        todos= {todos}
        setTodos = {setTodos}
        modalToggler = {({email, name}, i)=>modalToggler({email, name}, i)}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputField  label="Name" value= {update.name} newFunction={(newVal)=>setUpdate({...update,name:newVal})}/>
        <InputField  label="Email" value= {update.email} newFunction={(val) => setUpdate({...update,email:val})}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={updateHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
