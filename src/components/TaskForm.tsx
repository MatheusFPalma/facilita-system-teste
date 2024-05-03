// src/components/TaskForm.tsx
import React, { useState, useEffect } from 'react';
import { Button, TextField, Grid, Paper, Typography } from '@mui/material';

interface TaskFormProps {
    onSubmit: (taskData: { title: string; description: string }) => void;
    initialData?: { id?: string; title: string; description: string };
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialData }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setDescription(initialData.description);
        }
    }, [initialData]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit({
            title,
            description
        });
        setTitle('');
        setDescription('');
    };

    return (
        <Paper style={{ padding: 16 }}>
            <Typography variant="h6">{initialData ? 'Edit Task' : 'Add Task'}</Typography>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <Grid container alignItems="flex-start" spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Title"
                            fullWidth
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Description"
                            fullWidth
                            multiline
                            minRows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Grid>
                    <Grid item style={{ marginTop: 16 }}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            {initialData ? 'Update Task' : 'Add Task'}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default TaskForm;
