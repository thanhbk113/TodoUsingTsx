import React, { useRef } from 'react';

type NewTodoProps = {
    onAddTodo: (todoText:string) =>void;
}

const NewTodo:React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null)
   
    const todoSubmittedHander = (event:React.FormEvent) => {
       event.preventDefault()
       const enterRefText = textInputRef.current!.value
       props.onAddTodo(enterRefText)
    };

    return (
        <form className='ui form' onSubmit={todoSubmittedHander}>
            <div>
                <label className='ui lable' htmlFor='todo-text'>Todo Text:</label>
                <input className='ui input' autoComplete='off' type='text' id='todo-text' ref={textInputRef}/>
            </div>
            <button type='submit' className='positive ui button'>ADD TODO</button>
        </form>
    );
};

export default NewTodo;