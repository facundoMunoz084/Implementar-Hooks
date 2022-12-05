import {useState} from 'react';
import data from './data.json';
import './App.css';
import TodoList from './Components/TodoList';
import TodosForm from './Components/TodosForm';




function App() {

  const [todo , setTodos ] = useState(data);

  const onComplete =(id) =>{

    setTodos(todo.map((todo) =>{
      return todo.id === Number(id) ? {...todo, completed: !todo.completed} : {...todo};
    }))
  }

  const onDeleteItem = (id) =>{
    setTodos([...todo].filter(todo =>todo.id !== id));
  }

  const addTodo = (newTodo) => {
    console.log('newTodo', newTodo);
    let newItem = {id : +new Date(), task: newTodo, completed: false};

    setTodos([...todo, newItem]);
  }



  return (
    <div className="container">
      <div class="header">
        <h1>lista de tareas</h1>
      </div>
      <TodosForm addTodo = {addTodo}/>
      <TodoList todo = {todo} onComplete={onComplete}  onDeleteItem ={onDeleteItem}/>

    </div>
  );
}

export default App;
