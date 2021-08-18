import React, {useState} from 'react';

const Counter = () => {
	const [count, setCount] = useState(0)
	const formCount = () => count === 0 ? 'Ноль' : count
	return (
		<>
			<span className='badge bg-primary m-2'>{formCount()}</span>
			<button className='btn btn-secondary btn-sm'>Increment</button>
		</>
	)
}

export default Counter;