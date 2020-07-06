import { BaseView } from '@g2/css';
import { connect } from '@g2/provider';
import React from 'react';

function Placeholder({ height = 36, width, ...props }) {
	return (
		<BaseView
			__css={{
				alignItems: 'center',
				background: '#eee',
				display: 'flex',
				justifyContent: 'center',
			}}
			style={{ height, width }}
			{...props}
		/>
	);
}

export default connect(Placeholder);
