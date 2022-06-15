import React from 'react'

const CreateTask = (props) => {

  

  return (
    <div className='task-form'>
      <input type="text" placeholder="Name your Task" onChange={props.changeInput} value={props.userInput}/>
      <select onChange={props.changeCat}>
        <option selected disabled defaultValue>Category</option>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Errands">Errands</option>
      </select>
      <button onClick={props.handleClick}>Add</button>
    </div>
  )
}

export default CreateTask