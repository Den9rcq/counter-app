import React, {useState} from 'react';

const Counter = (props) => {
	const [value, setValue] = useState(props.value)
	const formValue = () => value === 0 ? 'Ноль' : value
	const getBadgeClasses = () => value === 0 ? 'badge m-2 bg-danger' : 'badge m-2 bg-primary'
	const handleIncrement = () => setValue(value + 1)
	const handleDecrement = () => setValue(() => value <= 0 ? 0 : value - 1)
	return (
		<div>
			<span className={getBadgeClasses()}>{formValue()}</span>
			<button onClick={handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
			<button onClick={handleDecrement} className='btn btn-secondary btn-sm'>Decrement</button>
		</div>
	)
}

export default Counter;