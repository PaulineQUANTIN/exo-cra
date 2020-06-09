import React, { Component } from 'react';
import Task from './Task';

class Takslist extends Component {
    state = {  }
    render() { 
        const listTasks = this.props.tasks.map(task => 
            <li><Task task={task}/></li>
        );

        return (  
            <ul>
                {listTasks}
            </ul>
        );
    }
}
 
export default Takslist;