import React from 'react';
import TaskItem from './TaskItem';

interface Task {
    id: string;
    title: string;
    description?: string;
}

interface TaskListProps {
    tasks: Task[];
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete }) => {
    return (
        <div>
            <h1>Lista de Tarefas</h1>
            {tasks.length > 0 ? (
                <ul>
                    {tasks.map((task) => (
                        <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
                    ))}
                </ul>
            ) : (
                <p>Não há tarefas cadastradas.</p>
            )}
        </div>
    );
};

export default TaskList;

