import axios from "axios";
import React, { useState, useEffect } from "react";
import CreateTask from "./CreateTask";
import ListTasks from "./ListTasks";

const AddTask = () => {
  const [list, setList] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  const getTasks = () => {
    axios
      .get('http://localhost:4000/api/getAllTasks')
      .then((res) => setList(res.data))
  }

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/getCategories')
      .then((res) => setAllCategories(res.data))
    getTasks()
  },[])
  

  return (
    <div>
      <h1>Add Task</h1>
      <CreateTask
        getTasks={getTasks}
        setList={setList}
      />
      <h2>My Tasks</h2>
      <ListTasks list={list} setList={setList} />
    </div>
  );
};

export default AddTask;
