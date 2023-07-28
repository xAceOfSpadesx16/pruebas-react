import {
	Grid,
	Typography,
	CssBaseline,
	Card,
	CardContent,
} from '@mui/material';
import productos from '../../fake_data.json';

const productosvar = productos;
const MiTabla = () => {
	return (
		<>
			<CssBaseline />
			<Typography>Caca</Typography>
			<Grid container spacing={2}></Grid>
			{productosvar.map(producto => {
				<Grid item>
					<div key={producto.id}>
						<p>Hola</p>
						<Typography>{producto.name}</Typography>
						<Typography>{producto.category}</Typography>
						<Typography>{producto.price}</Typography>
						<Typography>{producto.trade_mark}</Typography>
						<Typography>{producto.barcode}</Typography>
					</div>
				</Grid>;
			})}
			{/* <Typography variant='h3'>Caca</Typography>
		<Grid
		container
		spacing={{ xs: 2, md: 3 }}
		columns={{ xs: 4, sm: 8, md: 12 }}>
		{productosvar.map(producto => {
			console.log(producto),
			(
				<Grid item xs={4} key={producto.id}>
				<item>
				<Typography
				variant='h3'
				sx={{ fontSize: 14 }}
				color='text.secondary'
				gutterBottom>
				{producto.name}
				</Typography>
				<Typography
				sx={{ fontSize: 14 }}
				color='text.secondary'
				gutterBottom>
				{producto.category}
								</Typography>
								<Typography
								sx={{ fontSize: 14 }}
								color='text.secondary'
								gutterBottom>
								{producto.trade_mark}
								</Typography>
								<Typography
								sx={{ fontSize: 14 }}
								color='text.secondary'
								gutterBottom>
								{producto.price}
								</Typography>
								<Typography
								sx={{ fontSize: 14 }}
								color='text.secondary'
								gutterBottom>
								{producto.barcode}
								</Typography>
								</item>
								</Grid>
								);
							})}
						</Grid> */}
		</>
	);
};

export default MiTabla;
