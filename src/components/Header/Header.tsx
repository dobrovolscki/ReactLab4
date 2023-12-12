import React from 'react';
import {BsFillCheckSquareFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import {links} from './links';

const Header = () => {
	return (
		<nav className="bg-purple-700 border-gray-300">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<div
					className="self-center flex items-center space-x-2 justify-center text-2xl font-semibold whitespace-nowrap text-yellow-400">
					<BsFillCheckSquareFill className="text-xl"/>
					<Link to={'/'} className="text-3xl font-extrabold text-yellow-40">My ToDo</Link>
				</div>
				<div className="hidden w-full space-x-4 md:block md:w-auto" id="navbar-default">
					{links.map((link, index) => (
						<Link
							key={index}
							to={link.path}
							className="text-gray-300 hover:text-white font-semibold">
							{link.name}
						</Link>
					))}
				</div>
			</div>
		</nav>

	);
};

export default Header;