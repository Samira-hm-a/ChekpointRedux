import React from 'react';
import { connect } from 'react-redux';
import { addTask } from './actions/action';

const AddTask = ({dispatch}) => {
    let input;

    const addTaskk = (e) => {
        e.preventDefault();
        if (!input.value.trim()) return;

        dispatch(addTask(input.value));
        input.value= '';
    }

    return (
        <div>
            <form onSubmit={addTaskk}>
               <input ref={node => input = node}/>
               <button type="submit">
                     Add Task
               </button>
            </form>
        </div>
    )
}

export default connect()(AddTask);