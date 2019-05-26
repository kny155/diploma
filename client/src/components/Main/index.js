import React, { Fragment, useState } from 'react';

import Header from '../Header';
import Content from '../Content';
import Drawer from '../Drawer';

const Main = () => {
	const [openedDrawer, setOpenedDrawer] = useState(false);
	return (
		<Fragment>
			<Header setOpenedDrawer={setOpenedDrawer} />
			<Content />
			<Drawer openedDrawer={openedDrawer} setOpenedDrawer={setOpenedDrawer} />
		</Fragment>
	);
};

export default Main;
