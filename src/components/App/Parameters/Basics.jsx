import _ from 'lodash'
import React from 'react';
import Parameter from './Parameter';
import {basicParams} from '../../../constants';

function Basics({params, editing, onChange}) {
	return (
		<>
			{
				_.keys(basicParams).map((param, index) => (
					<Parameter
						key={index}
						name={basicParams[param]}
						points={params[param]}
						type={param}
						editing={editing}
						onChange={(value) => onChange(`basics.${param}`, value)}
					/>
				))
			}
		</>
	);
}

export default Basics;
