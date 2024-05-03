import React from 'react';
import TaskItem from './TaskItem';
import { Box } from '@mui/material';

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
        <Box
            sx={{
                height: '300px',
                overflowY: 'auto',
                padding: 2,
                boxShadow: 1,
                borderRadius: 1,
            }}
        >
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onEdit={() => onEdit(task.id)}
                    onDelete={() => onDelete(task.id)}
                />
            ))}
        </Box>
    );
};

export default TaskList;