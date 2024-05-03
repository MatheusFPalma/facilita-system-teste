import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { Container, AppBar, Toolbar, Typography, Grid, Box } from '@mui/material';

interface Task {
    id: string;
    title: string;
    description: string;
}

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [editingTask, setEditingTask] = useState<Task | undefined>();

    const handleFormSubmit = (taskData: { title: string; description: string }) => {
        if (editingTask) {
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === editingTask.id ? { ...task, ...taskData } : task
                )
            );
            setEditingTask(undefined);
        } else {
            const newTask: Task = {
                id: String(tasks.length + 1),
                title: taskData.title,
                description: taskData.description || '',
            };
            setTasks((prevTasks) => [...prevTasks, newTask]);
        }
    };

    const handleEditTask = (id: string) => {
        const taskToEdit = tasks.find((task) => task.id === id);
        if (taskToEdit) {
            setEditingTask(taskToEdit);
        }
    };

    const handleDeleteTask = (id: string) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    return (
        <Container maxWidth="md">
            <AppBar position="static" sx={{ boxShadow: 'none', padding: 0, margin: 0 }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Task Manager
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box mt={2}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TaskForm onSubmit={handleFormSubmit} initialData={editingTask} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default App;
