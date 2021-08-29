import React from 'react';

const Counter = ({value, name, id, onIncrement, onDecrement, onDelete}) => {
	const formValue = () => value === 0 ? 'Ноль' : value
	const getBadgeClasses = () => value === 0 ? 'badge m-2 bg-danger' : 'badge m-2 bg-primary'

	return (
		<div>
			<h4>{name}</h4>
			<span className={getBadgeClasses()}>{formValue()}</span>
			<button onClick={() => onIncrement(id)}
			        className='btn btn-secondary btn-sm m-1'>Increment
			</button>
			<button onClick={() => onDecrement(id)}
			        className='btn btn-secondary btn-sm m-1'>Decrement
			</button>
			<button onClick={() => onDelete(id)}
			        className="btn btn-danger btn-sm m-2">Delete
			</button>
		</div>
	)
}

export default Counter;