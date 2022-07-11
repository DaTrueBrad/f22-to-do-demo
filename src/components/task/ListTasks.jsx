import axios from 'axios'
import React, {useState} from 'react'
import Item from './Item'

const ListTasks = ({list, setList}) => {
  const [filter, setFilter] = useState("")

  const deleteTask = (value) => {
    axios
      .delete(`http://localhost:4000/api/deleteTask/${value}`)
      .then((res) => {
        list.splice(id, 1);
        setList([...list]);
      });
  }

  const listOfTasks = list.filter(item => item.category.includes(filter)).map((task, index) => {
    return <Item task={task} index={index} deleteTask={deleteTask} />
  })

  return (
    <div className='task-container'>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option selected disabled defaultValue>Filter by Category</option>
        <option value="">All</option>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Errands">Errands</option>
      </select>
      {listOfTasks}
    </div>
  )
}

export default ListTasks