import React from 'react';

interface TaskItemProps {
    task: { id: string; title: string; description?: string };
    onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete }) => {
    return (
        <li>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
    );
};

export default TaskItem;