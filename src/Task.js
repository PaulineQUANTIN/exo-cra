import React, { Component } from 'react';

class Task extends Component {
    state = {  }
    render() { 
        let task = this.props.task;
        let listSubtasks = task.subtasks.map(subtask => { 
            return <li>{subtask}</li>
         })

        return (
            <div className="question"> 
                <p>{task.task}</p>
                <ul>{listSubtasks}</ul>
            </div>
          );
    }
}
 
export default Task;