import React, { useState } from 'react';
import { Card, CardActions, CardContent, IconButton, Typography, Modal, Box, Button } from '@mui/material';
import { Edit, Delete, ExpandMore } from '@mui/icons-material';

interface Task {
    id: string;
    title: string;
    description?: string;
}

interface TaskItemProps {
    task: Task;
    onEdit: () => void;
    onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete }) => {
    const [open, setOpen] = useState(false);

    const handleExpandClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <Card sx={{ mb: 2, boxShadow: 1, padding: 2 }}>
                <CardContent>
                    <Typography variant="h6">{task.title}</Typography>
                    <Typography variant="body2">{task.description}</Typography>
                </CardContent>
                <CardActions>
                    <IconButton onClick={onEdit}>
                        <Edit />
                    </IconButton>
                    <IconButton onClick={onDelete}>
                        <Delete />
                    </IconButton>
                    <IconButton onClick={handleExpandClick}>
                        <ExpandMore />
                    </IconButton>
                </CardActions>
            </Card>
            <Modal open={open} onClose={handleExpandClick}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography variant="h6" component="h2">
                        {task.title}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        {task.description}
                    </Typography>
                    <Button onClick={handleExpandClick}>Close</Button>
                </Box>
            </Modal>
        </>
    );
};

export default TaskItem;