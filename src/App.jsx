import React, {useState} from "react";
import './App.css';
import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
	const initialState = [
		{value: 0, id: 1, name: 'Ложка'},
		{value: 4, id: 2, name: 'Вилка'},
		{value: 0, id: 3, name: 'Тарелка'},
		{value: 0, id: 4, name: 'Стартовый набор минималиста'},
		{value: 0, id: 5, name: 'Ненужные вещи'},
	]

	const [counters, setCounters] = useState(initialState)
	// Addition value
	const handleIncrement = (counterId) => setCounters(counters.map(c => c.id === counterId ? {
		...c,
		value: ++c.value
	} : c))
	// Decrease value
	const handleDecrement = (counterId) => setCounters(counters.map(c => c.id === counterId && c.value > 0 ? {
		...c,
		value: --c.value
	} : c))
	// Deleting an array element
	const handleDelete = (counterId) => setCounters(counters.filter(counter => counter.id !== counterId))
	// Reset state
	const handleReset = () => setCounters(initialState)
	// Sum items
	const sumItems = () => counters.reduce((a, b) => a + b.value, 0)
	return (
		<div className="col-lg-8 mx-auto p-3 py-md-5">
			<main>
				<NavBar totalItems={sumItems}/>
				<Counters onIncrement={handleIncrement}
				          onDecrement={handleDecrement}
				          onDelete={handleDelete}
				          onReset={handleReset}
				          counters={counters}/>
			</main>
		</div>
	);
}

export default App;
