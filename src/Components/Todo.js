import './Todo.css'
import { useState ,useRef, useEffect} from 'react';

function Todo() {

  const [todo , setTodo] = useState('');
  const [todos , setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos,todo]);
    console.log(todos);
    setTodo('')
  };

  const handleSubmit = (e) => {
      e.preventDefault();
  };

const inputRef = useRef('null');

useEffect(()=>{
  inputRef.current.focus();
})

  return (
    <div className='container'>
        <h2>TODO APP</h2>
        <form className='form-group' onSubmit={handleSubmit}>
          <input type="text" value={todo} ref={inputRef} placeholder='Enter your todo'  className='form-control' onChange={(event)=>setTodo(event.target.value)}/>
          <button onClick={addTodo}>ADD</button>
        </form>
        <div className='list'>
          <ul>

            {
              todos.map((item)=>(
                  <li className='form-control'>{item}</li>
              ))
            }
            
            
          </ul>
        </div>
    </div>
  )
}

export default Todo;