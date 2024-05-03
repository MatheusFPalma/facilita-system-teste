interface TaskData {
    title: string;
    description?: string;
}

export const validateTask = (taskData: TaskData): string[] => {
    const errors = [];
    if (!taskData.title.trim()) {
        errors.push("O título é obrigatório.");
    }
    if (taskData.description && taskData.description.length > 500) {
        errors.push("A descrição não deve exceder 500 caracteres.");
    }
    return errors;
};
