import React, { useState } from "react";

const Item = ({ task, index, deleteTask }) => {
  const [complete, setComplete] = useState(false);
  return (
    <div className="item-card">
      <div className="item-card-left">
        <h3
          onClick={() => setComplete(!complete)}
          className={complete && "complete"}
        >
          {task.name}
        </h3>
        <h5>{task.category}</h5>
      </div>
      <button className="small-btn" onClick={() => deleteTask(index)}>
        X
      </button>
    </div>
  );
};

export default Item;
