import React, { useState, useEffect } from 'react'
import Task from './Task';
import { Link } from 'react-router-dom';
import AddTodo from '../todos/AddTodo';


const TaskPage = () => {

    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        await fetch('http://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((data) => setTodos(data))
        .catch((err) => {
            console.log(err);
        })
    }
    

    const onAdd = async (title,completed) => {
        await fetch('http://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({
                title:title,
                completed:completed
            }),
            headers: {
                "Content-type" : "application/json; charset=UTF-8",
            }
        })
        .then((res) => {
            if(res.status !== 201){
                return
            } else {
                return res.json();
            }
        })
        .then((data) => {
            setTodos((todos)=>[...todos, data]);
        })
        .catch((err) => {
            console.log(err);
        })

    }

   const deleteTodo = async (id) => {
    await fetch(`http://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'DELETE'
   })
   .then((res) =>{
       if(res.status !== 200 ){
        return 
       } else {
           setTodos(todos.filter((todo) => {
               return todo.id !== id;
           }))
       }
   })
   .catch((err) => {
       console.log(err);
   })
   }




    // console.log(todos);

    return (
        <div className='container'>
            <div className='py-4'>
                {/* <AddTodo onAdd={onAdd} /> */}
                <table class="table">
                    {/* <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Completed</th>
                            <th >Action</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        {
                            todos.slice(0, 3).map((todo) => (
                                <tr>
                                    {/* <th scope='row'>{index + 1}</th> */}
                                    <td>{todo.id}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.completed} False</td>
                                    <td>
                                        <Link className='btn btn-danger' onClick={() => deleteTodo(todo.id)}>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }  
                    </tbody>
                </table>
                <Link className='btn btn-primary btn-lg' to="/todos/add" >Add Task</Link>

            </div>
        </div>
    )
}

export default TaskPage;