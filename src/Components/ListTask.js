import React from 'react';
import { connect } from 'react-redux';
import { 
    todolistFilters,
    toggleTodo
 } from './actions/action';

 const getListTask = (totasks, filter) => {
    switch(filter) {
        case todolistFilters.SHOW_ALL:
            return totasks;
        case todolistFilters.SHOW_ACTIVE:
            return totasks.filter(t => !t.completed);
        case todolistFilters.SHOW_COMPLETED:
            return totasks.filter(t => t.completed);
        default: 
            throw new Error('unknown filter' +filter);            
    }
}

const mapStateToProps = state => {
    return ({
         totasks: getListTask(state.totasks, state.todolistFilter) 
    })
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: id => dispatch(toggleTodo(id))
    }
}

const ListTask = ({totasks, toggleTodo}) => {
    // console.log(state);
    return ( 
    <div className ="todo-container">
            <ul className ="todo-list">
                {
                
                totasks.map((totask) => ( 
                    <li
                    onClick={() => toggleTodo(totasks.id)} 
                         key={totask.id}
                         style={{textDecoration: totask.completed ? 'line-through': 'none'}}
                    >
                        {totask.text}</li>
                    ))
            }
                
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);