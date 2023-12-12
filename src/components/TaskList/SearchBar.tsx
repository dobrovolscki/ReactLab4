import React, {FC} from 'react';
import {BiSortDown, BiSortUp} from 'react-icons/bi';

interface SearchBarProps {
    sortArrow: boolean;
	sortTasks(): void;
	searchInput: string;
	setSearchInput: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar: FC<SearchBarProps> = ({sortArrow, sortTasks, setSearchInput, searchInput}) => {
	return (
		<div className="mt-16 w-full">
			<input
				value={searchInput}
				placeholder="Search task..."
				onChange={(e) => setSearchInput(e.target.value)}
				className="shadow-xl rounded-lg px-4 py-4 border w-full focus-visible:outline-0"
			/>
			<div className="border-t my-6 w-full"></div>
			<div className="flex justify-end my-6">
				{sortArrow ?
					<BiSortDown onClick={sortTasks} className="text-3xl text-purple-500 cursor-pointer hover:scale-105 transition"/> :
					<BiSortUp onClick={sortTasks} className="text-3xl text-purple-500 cursor-pointer hover:scale-105 transition"/>}
			</div>
		</div>
	);
};

export default SearchBar;