import React from 'react';


interface ToDoListProps {
    item: {id:string, text :string}[] ; //initial let TypeScript know item initial inside TodoList in App.tsx
    onDeleteTodo: (id:string) => void;
}

const ToDoList: React.FC<ToDoListProps> = props => {
   
    return (
        <ul className='ui container'>
            {
                props.item.map( (todo) =>
                 <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button className='ui secondary button' onClick={props.onDeleteTodo.bind(null,todo.id)}>DELETE</button>
                 </li> )
            }
        </ul>
    );
};

export default ToDoList;