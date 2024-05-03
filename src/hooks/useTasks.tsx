import { useState } from 'react';

interface TaskFormData {
    title: string;
    description?: string;
}

const useTaskForm = (initialState: TaskFormData) => {
    const [formState, setFormState] = useState<TaskFormData>({
        title: initialState.title,
        description: initialState.description || ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormState(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (callback: (formData: TaskFormData) => void) => {
        callback(formState);
        setFormState({ title: '', description: '' });
    };

    return {
        formState,
        handleChange,
        handleSubmit
    };
};

export default useTaskForm;