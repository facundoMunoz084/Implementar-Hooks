import React, { useState } from 'react'

function TodosForm({addTodo}) {

    const [userInput, setUserInput] = useState('');

    const handleOnChange = (e) => {
        setUserInput(e.currentTarget.value);
        //console.log(e);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput.trim() !== ''){
            addTodo(userInput);
            setUserInput('');
        

        }

    }

    return (
        <div style={{margin: 20}}>
            <form onSubmit={handleSubmit}>
                <input type="text" value={userInput} onChange = {handleOnChange}/>
                <button> agregar tarea</button>
            </form>
          
        </div>
      )
    }
export default TodosForm


