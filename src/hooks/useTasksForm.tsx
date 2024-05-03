import { useState } from 'react';

const useTaskForm = (initialState: { title: string; description?: string }) => {
    const [formState, setFormState] = useState(initialState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (callback: (formData: typeof formState) => void) => {
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