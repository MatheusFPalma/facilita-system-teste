import React from 'react';

interface Task {
    id: string;
    title: string;
    description?: string;
}

interface TaskItemProps {
    task: Task;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete }) => {
    return (
        <li>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button onClick={() => onEdit(task.id)}>Editar</button>
            <button onClick={() => onDelete(task.id)}>Excluir</button>
        </li>
    );
};

export default TaskItem;
