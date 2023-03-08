import React, { useState } from "react";

const TaskItem = ({ task, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(task.taskName);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(task.id, taskName);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setText(task.taskName);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <span>{task.taskName}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
