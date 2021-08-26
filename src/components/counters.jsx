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
	// Addition value
	const handleIncrement = (counterId) => {
		setCounters(
			[...counters],
			counters.map(c => {
				if (c.id === counterId) c.value++
			})
		)
	}
	// Decrease value
	const handleDecrement = (counterId) => {
		setCounters(
			[...counters],
			counters.map(c => {
				if (c.id === counterId && c.value > 0) c.value--
			})
		)
	}
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
					onIncrement={handleIncrement}
					onDecrement={handleDecrement}
					{...counter}/>
			))}
		</div>
	);
};

export default Counters;