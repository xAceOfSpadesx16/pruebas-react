import CssBaseline from '@mui/material/CssBaseline';
import productos from '../../fake_data.json';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
	{ field: 'id', headerName: 'ID', width: 90 },
	{
		field: 'name',
		headerName: 'Nombre',
		width: 150,
		editable: true,
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

const MiTabla = () => {
	return (
		<>
			<CssBaseline />

			<Box sx={{ height: 'auto', width: '100%' }}>
				<DataGrid
					rows={productos}
					columns={columns}
					slots={{ toolbar: GridToolbar }}
					// onCellDoubleClick={}
					// onCellClick={props => console.log(props)}
					onCellEditStop={props => console.log(props)}
					onCellEditStart={props => console.log(props)}
					checkboxSelection
					slotProps={{
						toolbar: {
							showQuickFilter: true,
							quickFilterProps: { debounceMs: 200 },
						},
					}}
					initialState={{
						pagination: {
							paginationModel: {
								pageSize: 10,
							},
						},
						filter: {
							filterModel: {
								items: [],
								quickFilterValues: [],
							},
						},
					}}
					pageSizeOptions={[5, 10, 25]}
					// pageSizeOptions={[20]}
					disableRowSelectionOnClick
					disableColumnFilter
					// disableColumnSelector
					// disableDensitySelector
				/>
			</Box>
		</>
	);
};

export default MiTabla;
