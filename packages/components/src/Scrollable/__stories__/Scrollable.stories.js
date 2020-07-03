import React from 'react';

import { BaseView } from '../../BaseView';
import { Scrollable } from '../index';

export default {
	component: Scrollable,
	title: 'Scrollable',
};

export const _default = () => {
	return (
		<Scrollable sx={{ height: 400, width: 300 }}>
			<BaseView m={3} sx={{ backgroundColor: '#eee', height: 1000 }} />
		</Scrollable>
	);
};
