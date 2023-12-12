import React, {useContext} from 'react';
import {CreateTaskContext} from '../../context/CreateTaskContext';

const Form = () => {
	const {
		title,
		setTitle,
		handleCreateTask,
		dueDate,
		setDueDate,
		description,
		setDescription
	} = useContext(CreateTaskContext);

	return (
		<div className="flex justify-center">
			<div className="flex flex-col mt-16 px-8 shadow-lg rounded-lg w-[600px] p-3 bg-gray-100">
				<div className="flex justify-center text-purple-600 text-2xl font-semibold mb-4">
					<h1>Create task</h1>
				</div>
				<form onSubmit={handleCreateTask} className="flex flex-col mt-3 w-full">
					<div className="mb-4">
						<label className="border focus:outline-none focus:ring focus:border-blue-300 rounded-md px-3 py-2 w-full">Title*</label>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle && setTitle(e.target.value)}
							className="border focus:outline-none focus:ring focus:border-blue-300 rounded-md px-3 py-2 w-full"
						/>
					</div>
					<div className="mb-4">
						<label className="block mb-2 text-sm font-medium text-gray-700">Description*</label>
						<textarea
							value={description}
							onChange={(e) => setDescription && setDescription(e.target.value)}
							className="border focus:outline-none focus:ring focus:border-blue-300 rounded-md px-3 py-2 w-full"
						/>
					</div>
					<div className="mb-4">
						<label className="block mb-2 text-sm font-medium text-gray-900">Date limit*</label>
						<input
							type="date"
							value={dueDate}
							onChange={(e) => setDueDate && setDueDate(e.target.value)}
							className="border focus:outline-none focus:ring focus:border-blue-300 rounded-md px-3 py-2 w-full"
						/>
					</div>
					<div className="flex justify-end my-4">
						<button
							type='submit'
							className="w-40 rounded-full px-4 py-2 bg-purple-600 text-white border hover:bg-amber-500 transition duration-500 font-bold">
                            Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Form;