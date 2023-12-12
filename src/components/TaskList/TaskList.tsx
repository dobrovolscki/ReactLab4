import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import { deleteTask, getAllTasks } from '../../services/taskService';
import { TaskResponseInterface } from '../../services/task-response.interface';
import Skeleton from './Skeleton';
import List from './List';
import { toast } from 'react-toastify';
import { TaskListContext } from '../../context/TaskListContext';

const TaskList = () => {
	const [taskList, setTaskList] = useState<TaskResponseInterface[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [sortArrow, setSortArrow] = useState<boolean>(false);
	const [searchInput, setSearchInput] = useState<string>('');

	useEffect(() => {
		getAllTasks().then((data) => {
			setTaskList(data);
			setLoading(false);
		});
	}, []);

	const sortTasks = () => {
		const sortedTasks = [...taskList].sort((a, b) => {
			if (sortArrow) {
				return Number(a.id) - Number(b.id);
			} else {
				return Number(b.id) - Number(a.id);
			}
		});
		setTaskList(sortedTasks);
		setSortArrow(!sortArrow);
	};

	const handleDeleteTask = (id: string | undefined) => {
		deleteTask(id)
			.then(({ title }) => {
				setTaskList((prevTask) => prevTask.filter((task) => task.id !== id));
				toast.success(`The task ${title} has been deleted`);
			})
			.catch(() => toast.error('The task wasn\'t deleted'));
	};

	const searchTasks = taskList.filter((task) => {
		if (task.title.toLowerCase().includes(searchInput.toLowerCase())) {
			return task;
		}
	});

	return (
		<TaskListContext.Provider value={{ taskList: searchTasks }}>
			<div className="flex flex-col justify-center items-center w-full">
				<div className="w-1/2 space-y-4">
					<SearchBar
						sortArrow={sortArrow}
						sortTasks={sortTasks}
						searchInput={searchInput}
						setSearchInput={setSearchInput}
					/>
					{loading ? <Skeleton /> : <List handleDeleteTask={handleDeleteTask} />}
				</div>
			</div>
		</TaskListContext.Provider>
	);
};

export default TaskList;
