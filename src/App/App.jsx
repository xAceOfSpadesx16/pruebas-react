import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import productos from '../../fake_data.json';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const data = [
	{ field: 'id', headerName: 'ID', width: 90 },
	{
		field: 'name',
		headerName: 'Nombre',
		width: 150,
		editable: false,
	},
	{
		field: 'category',
		headerName: 'Categoria',
		width: 150,
		editable: false,
	},
	{
		field: 'trade_mark',
		headerName: 'Marca',
		width: 150,
		editable: false,
	},
	{
		field: 'price',
		headerName: 'Precio',
		width: 150,
		editable: false,
	},
	{
		field: 'barcode',
		headerName: 'CodeBar',
		width: 150,
		editable: false,
	},
];

const FIELDS = ['Nombre', 'Categoria', 'Marca'];

const columns = () => (
	data.columns.filter(column => FIELDS.includes(column.field)), [data.columns]
);

const MiTabla = () => {
	return (
		<>
			<CssBaseline />
			<Box sx={{ height: 'auto', width: '100%' }}>
				<DataGrid
					rows={productos}
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: {
								pageSize: 20,
							},
						},
						filter: {
							filterModel: {
								items: [],
								quickFilterValues: [],
							},
						},
					}}
					pageSizeOptions={[20]}
					disableRowSelectionOnClick
				/>
			</Box>
		</>
	);
};

export default MiTabla;

// <Grid
// container
// spacing={{ xs: 2, sm: 4, md: 4 }}
// columns={{ xs: 12, sm: 6, md: 4 }}>
// {productosvar.map(producto => (
// 	<Grid item xs={'auto'} sm={'auto'} md={'auto'} key={producto.id}>
// 		<Card>
// 			<CardContent>
// 				<Typography variant='h6' paragraph>
// 					{producto.name || 'Sin nombre'}{' '}
// 				</Typography>
// 				<Typography>{producto.category || 'Sin Categoria'}</Typography>
// 				<Typography>{producto.price || 'Sin precio'}</Typography>
// 				<Typography>{producto.trade_mark || 'Sin marca'}</Typography>
// 				<Typography>{producto.barcode || 'Sin barcode'}</Typography>
// 			</CardContent>
// 		</Card>
// 	</Grid>
// ))}
// </Grid>
