import React, { FormEvent, useState } from 'react';
import Form from './Form';
import { createTask } from '../../services/taskService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CreateTaskContext } from '../../context/CreateTaskContext';

const CreateTask = () => {
	const [title, setTitle] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [dueDate, setDueDate] = useState<string>('');
	const navigate = useNavigate();

	const handleCreateTask = (e: FormEvent) => {
		e.preventDefault();

		if (!title.trim() || !description.trim() || !dueDate.trim()) {
			toast.error('Please fill in all required fields');
			return;
		}

		createTask({
			title,
			dueDate,
			description,
		})
			.then(() => {
				navigate('/');
				toast.success('The task has been created');
			})
			.catch(() => toast.error('The task was not created'));
	};

	return (
		<CreateTaskContext.Provider value={{ title, dueDate, description, setDescription, setTitle, setDueDate, handleCreateTask }}>
			<Form />
		</CreateTaskContext.Provider>
	);
};

export default CreateTask;
