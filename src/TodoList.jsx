import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './App.css';
import { withRouter } from 'react-router';

function TodoList(props) {
    // const { onEdit } = this.props;
    return (
        <div className='container'>
           <div className='header'>
                <div className='todo-input'>
                    <input placeholder='Add todo' onChange={(e) => props.getInputValue(e)} />
                    <Button className='btn add' onClick={props.addTodo}>Add Todo</Button>
                </div>
            <div className='act-d-div'>
                <Button className='active btn'>Active Todos</Button>
                <Button className='done-todos btn'>Done Todos</Button>
            </div>
        </div>
        <div className='todo-list-div'>



        <ul>
                {
                    props.todos.map(item => {
                    return (
                        <li key={item.id}>
                           { item.id } <span>{''}</span>
                           { item.text }
                          <Button className="edit"><Link to={`/edit/${item.id}`}>Edit</Link></Button>
                          <Button className="delete" onClick={()=> {props.delete(item.id)}}>Delete</Button>
                          <Button className="done">Done</Button>                      
                       </li>
                    )
                })
                }
            </ul>
        </div>
        </div> 
    )
}

export default withRouter(TodoList);
