import { createRoot } from 'react-dom/client';
//import { productos } from '../productos.json';
import MiTabla from './App';
import './index.css';

// const Nombre = props => {
// 	console.log(props.prods);
// 	const prods = props.prods.map(items => {
// 		return (
// 			<div className='productos'>
// 				<h2 className='title'>{items.Nombre || 'Sin nombre'}</h2>
// 				<h5>{items.Marca || 'Sin marca'}</h5>
// 				<h5>{items.Categoria || 'Sin categoria'}</h5>
// 				<h5>{items.CodigoProducto || 'Sin codigo de producto'}</h5>
// 			</div>
// 		);
// 	});
// 	return <>{prods}</>;
// };

// const App = <Nombre prods={productos} />;

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
	<>
		<MiTabla />
	</>,
);
