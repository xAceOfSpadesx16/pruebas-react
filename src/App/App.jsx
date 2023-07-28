import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import productos from '../../fake_data.json';

const productosvar = productos;

const MiTabla = () => {
	return (
		<>
			<CssBaseline />
			<Grid
				container
				spacing={{ xs: 2, sm: 4, md: 4 }}
				columns={{ xs: 12, sm: 6, md: 4 }}>
				{productosvar.map(producto => (
					<Grid item xs={'auto'} sm={'auto'} md={'auto'} key={producto.id}>
						<Card>
							<CardContent>
								<Typography variant='h6' paragraph>
									{producto.name || 'Sin nombre'}{' '}
								</Typography>
								<Typography>{producto.category || 'Sin Categoria'}</Typography>
								<Typography>{producto.price || 'Sin precio'}</Typography>
								<Typography>{producto.trade_mark || 'Sin marca'}</Typography>
								<Typography>{producto.barcode || 'Sin barcode'}</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default MiTabla;
