import React, {useEffect, useState} from 'react';
import {TaskResponseInterface} from '../../services/task-response.interface';
import {useParams} from 'react-router-dom';
import {getTaskById} from '../../services/taskService';
import moment from 'moment/moment';

const TaskBLock = () => {
	const [task, setTask] = useState<TaskResponseInterface>();
	const {id} = useParams();
    
	useEffect(() => {
		getTaskById(id).then((data) => setTask(data));
	},[]);

	return (
		<div className="flex flex-col justify-center items-center w-full">
			<div className="w-3/4 mt-10 border rounded-lg shadow-lg p-6 flex flex-col justify-center items-center bg-gray-100">
				<div className="flex flex-col justify-center items-center">
					<p className="text-indigo-600 font-extrabold text-4xl capitalize">{task?.title}</p>
					<span className="text-gray-500 text-xs">Created at: {moment(task?.createdAt).format('Do MMM YYYY')}</span>
				</div>
				<div className="mt-8 text-lg text-gray-700 font-medium">
					<p>{task?.description}</p>
				</div>
				<div className="flex justify-end items-end w-full mt-6 text-orange-600 font-semibold">
					<p>Date limit: {moment(task?.dueDate).format('Do MMM YYYY')}</p>
				</div>
			</div>
		</div>
	);
};

export default TaskBLock;