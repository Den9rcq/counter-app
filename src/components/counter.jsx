import React, {useState} from 'react';

const Counter = () => {
	const [count, setCount] = useState(0)
	const formCount = () => count === 0 ? 'Ноль' : count
	const getBadgeClasses = () => count === 0 ? 'badge m-2 bg-danger' : 'badge m-2 bg-primary'
	const handleIncrement = () => setCount(count + 1)
	const handleDecrement = () => setCount(() => count <= 0 ? 0 : count - 1)
	return (
		<>
			<span className={getBadgeClasses()}>{formCount()}</span>
			<button onClick={handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
			<button onClick={handleDecrement} className='btn btn-secondary btn-sm'>Decrement</button>
		</>
	)
}

export default Counter;