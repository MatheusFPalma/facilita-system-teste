import React, { useState, FormEvent } from 'react';

interface TaskFormProps {
    onSubmit: (task: { title: string; description: string }) => void;
    initialData?: { title: string; description: string };
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialData }) => {
    const [title, setTitle] = useState(initialData?.title || '');
    const [description, setDescription] = useState(initialData?.description || '');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        onSubmit({ title, description });
        setTitle(''); 
        setDescription(''); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Título:</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Descrição:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type="submit">Salvar Tarefa</button>
        </form>
    );
};

export default TaskForm;