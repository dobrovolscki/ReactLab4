import { createContext, FormEvent, Dispatch, SetStateAction } from 'react';

export interface CreateTaskContextInterface {
    title: string;
    description: string;
    dueDate: string;
    setTitle: Dispatch<SetStateAction<string>> | undefined;
    setDescription: Dispatch<SetStateAction<string>> | undefined;
    setDueDate: Dispatch<SetStateAction<string>> | undefined;
    handleCreateTask: (e: FormEvent) => void;
}

export const CreateTaskContext = createContext<CreateTaskContextInterface>({
	title: '',
	description: '',
	dueDate: '',
	setTitle: undefined,
	setDescription: undefined,
	setDueDate: undefined,
	handleCreateTask: (e: FormEvent) => {
		return e;
	}
});
