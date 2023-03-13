import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'

type Props = {}

const ProductList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '30px',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                }}
            >
                List of Products
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <ProductListItem />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductList
