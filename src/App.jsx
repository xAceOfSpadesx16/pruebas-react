import DataTable from 'react-data-table-component';
import { productos } from '../productos.json';
import { Component } from 'react';

const data = productos;

const columns = [
	{
		name: ' Nombre',
		selector: 'Nombre',
		sortable: true,
	},
	{
		name: 'Marca',
		selector: 'Marca',
	},
	{
		name: 'Categoria',
		selector: 'Categoria',
	},
	{
		name: 'Codigo de Barras',
		selector: 'CodigoProducto',
	},
];

class MiTabla extends Component {
	render() {
		return (
			<DataTable
				pagination
				responsive
				direction='ltr'
				title='Productos en Datatables'
				columns={columns}
				data={data}></DataTable>
		);
	}
}

export default MiTabla;
