import React from 'react';

const TextField = ({
	name,
	styleName,
	handleChange,
	placeholder,
	defaultValue,
}) => {
	return (
		<textarea
			name={name}
			className={styleName}
			onChange={e => handleChange(e)}
			placeholder={placeholder}
			defaultValue={defaultValue}
		/>
	);
};

export default TextField;
