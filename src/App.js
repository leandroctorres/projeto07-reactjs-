import Counter from './components/Counter';

const divStyle = {
	color: 'black',
	border: '3px solid #000',
	margin: '5px',
	padding: '10px',
	width: '50%'
};



function App() {
  return (
		<div>
		  <h1>Aplicação de Contador usando Redux</h1>

			<h2>Contador</h2>

			<h3>Componente: Counter</h3>
			<div style={divStyle}>
				<Counter />
			</div>




		</div>
  );
}

export default App;
