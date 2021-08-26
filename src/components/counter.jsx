import React, {useState} from 'react';

const Counter = (props) => {
	const formValue = () => props.value === 0 ? 'Ноль' : props.value
	const getBadgeClasses = () => props.value === 0 ? 'badge m-2 bg-danger' : 'badge m-2 bg-primary'

	return (
		<div>
			<h4>{props.name}</h4>
			<span className={getBadgeClasses()}>{formValue()}</span>
			<button onClick={() => props.onIncrement(props.id)}
			        className='btn btn-secondary btn-sm m-1'>Increment
			</button>
			<button onClick={() => props.onDecrement(props.id)}
			        className='btn btn-secondary btn-sm m-1'>Decrement
			</button>
			<button onClick={() => props.onDelete(props.id)}
			        className="btn btn-danger btn-sm m-2">Delete
			</button>
		</div>
	)
}

export default Counter;