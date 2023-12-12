import {createContext} from 'react';
import {TaskResponseInterface} from '../services/task-response.interface';

export interface TaskListContextInterface  {
    taskList: TaskResponseInterface[] | undefined
}
export const TaskListContext = createContext<TaskListContextInterface>({
	taskList: undefined
});