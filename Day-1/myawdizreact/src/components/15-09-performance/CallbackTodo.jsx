import React, { memo } from "react";

const CallbackTodo = ({ todos, buttonx }) => {
    console.log("child render");
    
  return (
    <div>
      {todos.map((todo,index)=>(<p key={index}>{todo}</p>))}
      <button onClick={buttonx}>Add todo</button>
    </div>
  );
};

export default memo (CallbackTodo);
