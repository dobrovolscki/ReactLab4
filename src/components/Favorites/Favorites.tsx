import React from 'react';
import {TaskResponseInterface} from '../../services/task-response.interface';
import moment from 'moment';

const Favorites = () => {
	const favorites: TaskResponseInterface[] = JSON.parse(localStorage.getItem('favorites') || '[]');

	return (
		<div className="flex flex-col justify-center items-center w-full mt-28">
			<h1 className="text-3xl font-bold underline my-8 text-indigo-800">Taskuri favorite</h1>
			<div className="flex flex-wrap justify-center w-3/4 space-x-4">
				{favorites.length !== 0 ? (
					favorites.map((task) => (
						<div key={task.id} className="flex-shrink-0 w-48 p-4 border rounded-md bg-gray-100 hover:bg-gray-200 transition duration-300">
							<div className="text-indigo-750 text-lg font-semibold">
								<h1>{task.title}</h1>
							</div>
							<div className="flex flex-col items-end space-y-1">
								<div className="text-gray-600 text-sm">
									<span>{moment(task.dueDate).format('Do MMM YYYY')}</span>
								</div>
							</div>
						</div>
					))
				) : (
					<div className="flex justify-center text-gray-500 text-3xl">Aici nu este nici un task favorit</div>
				)}
			</div>
		</div>
	);
};

export default Favorites;