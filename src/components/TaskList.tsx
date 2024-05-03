import React from 'react';
import useTaskForm from '../hooks/useTasksForm';

interface TaskFormProps {
    initialData?: { id?: string; title: string; description?: string };
    onSubmit: (taskData: { title: string; description: string }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ initialData = { title: '', description: '' }, onSubmit }) => {
    const { formState, handleChange, handleSubmit } = useTaskForm(initialData);

    const submitForm = () => {
        const taskData = {
            title: formState.title,
            description: formState.description || ''
        };
        onSubmit(taskData);
    };

    return (
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(submitForm); }}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    value={formState.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={formState.description}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Save Task</button>
        </form>
    );
};

export default TaskForm;
