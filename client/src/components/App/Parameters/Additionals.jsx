import _ from 'lodash'
import React from 'react';
import Parameter from './Parameter';
import {additionalParams} from '../../../constants';

function Additionals({params, editing, onChange}) {
	return (
		<>
			{
				_.keys(additionalParams).map((param, index) => (
					<Parameter
						key={index}
						name={additionalParams[param]}
						points={params[param]}
						type="additional"
					/>
				))
			}
		</>
	);
}

export default Additionals;
