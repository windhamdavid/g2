import React from 'react';

import { Text } from '../../index';
import { Checkbox } from '../index';

export default {
	component: Checkbox,
	title: 'Components/Checkbox',
};

export const _default = () => {
	return <Checkbox label="Check" />;
};

export const _help = () => {
	return <Checkbox help={<Text>Help Text</Text>} label="Checkbox" />;
};
