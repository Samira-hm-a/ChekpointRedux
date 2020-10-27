import React from "react";
import { connect } from "react-redux";
import { addTask, EditTask } from "./actions/action";

// add action to the component
const AddTask = ({ dispatch }) => {
  let input;
  const addTaskk = (e) => {
    e.preventDefault();
    if (!input.value) return;
    dispatch(addTask(input.value));
    input.value = "";
  };

  return (
    <div>
      <div>
        <form onSubmit={addTaskk}>
          <input
            ref={(node) => (input = node)}
            placeholder="Write Todo Text..."
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default connect()(AddTask);
