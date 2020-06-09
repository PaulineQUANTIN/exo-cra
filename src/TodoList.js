import React, { Component } from 'react';
import Taskslist from './Taskslist';

class TodoList extends Component {
    state = {  
        tasks: [
            {task: "Aller à la pharmacie", 
            subtasks: [
                "Acheter des Doliprane 1000",
                "Acheter de la vitamine C",
            ]},
            {task: "Faire le ménage", 
            subtasks: [
                "Nettoyer les vitres",
                "Passer le balai et la serpillère",
                "Faire la vaisselle",
            ]},
            {task: "Vendre ses vêtements sur Vinted", 
            subtasks: [
                "Prendre les photos",
                "Rédiger les annonces",
                "Poster les annonces",
            ]},
            {task: "Faire les courses", 
            subtasks: [
                "Framoge",
                "Jambon",
                "Pizza",
                "Glace",
            ]},
        ]
    }
    render() { 
        return (  
            <div>
                <Taskslist tasks={this.state.tasks}/>
            </div>
        );
    }
}
 
export default TodoList;