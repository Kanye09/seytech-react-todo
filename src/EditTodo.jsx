import React from 'react';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';

class EditTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    componentDidMount() {
        const data = this.props.todos.find(item => { 
            return item.id == this.props.match.params.id    
        })

        console.log('props ', this.props)
        console.log('found ', data)
    }
    

    render() {
        
        return (
            <div className='todo-edit'>
               
                   <Button className='go-back'>Go Back</Button>
                   <div>
                    <input/>
                   </div>
                   <div>
                    <Button className='save'>Save</Button>
                    <Button className='cancel'>Cancel</Button>
                    <Button className='delete-edit'>Delete</Button>
                   </div>
                   
                
            </div>
        )
    }
}

export default withRouter(EditTodo);