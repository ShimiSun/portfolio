import React from 'react';
import { 
Menu, 
} from 'grommet';

const MobileMenu = props => (
	<Menu
		justifyContent='center'
		elevation='none'
		items={[
		  { label: 'UX/WEB', onClick: () => {} },
		  { label: 'EDITORIAL', onClick: () => {} },
		  { label: 'DESIGN', onClick: () => {} },
		  { label: 'ABOUT', onClick: () => {} },
		  { label: 'CONTACT', onClick: () => {} },
		]}
	/>
);

export default MobileMenu
