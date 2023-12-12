interface LinksInterface {
    name: string;
    path: string;
}

export const links: LinksInterface[] = [
	{name: 'Create task', path: '/create-task'},
	{name: 'Favorites', path: '/favorites'}
];