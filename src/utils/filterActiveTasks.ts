import { Task } from '../interfaces/Task';

export const filterActiveTasks = (tasks: Task[]): Task[] => {
    return tasks.filter(task => !task.isCompleted);
};
