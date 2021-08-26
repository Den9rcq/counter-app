import React, {useState} from 'react';
import Counter from "./counter";

const Counters = () => {
	const initialState = [
		{value: 0, id: 1, name: 'Ложка'},
		{value: 4, id: 2, name: 'Вилка'},
		{value: 0, id: 3, name: 'Тарелка'},
		{value: 0, id: 4, name: 'Стартовый набор минималиста'},
		{value: 0, id: 5, name: 'Ненужные вещи'},
	]

	const [counters, setCounters] = useState(initialState)
	// Deleting an array element
	const handleDelete = (counterId) => setCounters(counters.filter(counter => counter.id !== counterId))
	// Reset state
	const handleReset = () => setCounters(initialState)
	return (
		<div>
			<button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
			{counters.map(counter => (
				<Counter
					key={counter.id}
					onDelete={handleDelete}
					{...counter}/>
			))}
		</div>
	);
};

export default Counters;