import React, {FC, useContext, useState} from 'react';
import { MdOutlineFavorite } from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';
import moment from 'moment/moment';
import { TaskResponseInterface } from '../../services/task-response.interface';
import { useNavigate } from 'react-router-dom';
import {TaskListContext, TaskListContextInterface} from '../../context/TaskListContext';

interface ListProps {
	handleDeleteTask(id: string | undefined): void;
}

const List: FC<ListProps> = ({ handleDeleteTask }) => {
	const [favorites, setFavorites] = useState<TaskResponseInterface[]>(
		JSON.parse(localStorage.getItem('favorites') || '[]')
	);
	const navigate = useNavigate();
	
	const {taskList} = useContext<TaskListContextInterface>(TaskListContext);

	const toggleFavorite = (task: TaskResponseInterface) => {
		const updatedFavorites = [...favorites];

		const taskIndex = updatedFavorites.findIndex(
			(favTask: TaskResponseInterface) => favTask.id === task.id
		);

		if (taskIndex === -1) {
			updatedFavorites.push(task);
		} else {
			updatedFavorites.splice(taskIndex, 1);
		}

		setFavorites(updatedFavorites);
		localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
	};

	return (
		<>
			{taskList?.length !== 0 ? (
				taskList?.map((task) => (
					<div key={task.id} className="border p-1 rounded-md hover:bg-gray-100 transition duration-200">
						<div onClick={() => navigate(`task/${task.id}`)} className="text-purple-950 text-2xl">
							<h1>{task.title}</h1>
						</div>
						<div className="flex flex-col items-end space-y-1">
							<div className="flex space-x-2">
								<MdOutlineFavorite
									onClick={() => toggleFavorite(task)}
									className={`${
										favorites.some((favTask: TaskResponseInterface) => favTask.id === task.id)
											? 'text-red-500'
											: 'text-gray-500'
									} cursor-pointer text-xl`}
								/>
								<BsTrash onClick={() => handleDeleteTask(task.id)} className="text-red-500 text-xl cursor-pointer" />
							</div>
							<div className="text-gray-00 text-sm">
								<span>{moment(task.dueDate).format('Do MMM YYYY')}</span>
							</div>
						</div>
					</div>
				))
			) : (
				<div className="flex justify-center text-gray-500 text-3xl">There are no tasks</div>
			)}
		</>
	);
};

export default List;
