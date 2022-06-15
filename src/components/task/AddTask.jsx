import React, { useState } from "react";
import CreateTask from "./CreateTask";
import ListTasks from "./ListTasks";

const AddTask = () => {
  const [userInput, setUserInput] = useState("");
  const [category, setCategory] = useState("");
  const [list, setList] = useState([]);

  const handleInputChange = (e) => setUserInput(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleClick = () => {
    setList([...list, {name: userInput, category}])
    setUserInput("")
  }

  return (
    <div>
      <h1>Add Task</h1>
      <CreateTask
        changeInput={handleInputChange}
        userInput={userInput}
        category={category}
        changeCat={handleCategoryChange}
        setList={setList}
        handleClick={handleClick}
      />
      <h2>My Tasks</h2>
      <ListTasks list={list} setList={setList} />
    </div>
  );
};

export default AddTask;
