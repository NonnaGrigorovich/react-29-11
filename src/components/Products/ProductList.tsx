import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'

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
                {productsArray.map(({title, description, type, capacity, price}, i) => (
                    <Grid item xs={12} sm={4} key={i}>
                        <ProductListItem
                            title={title}
                            description={description}
                            type={type}
                            capacity={capacity}
                            price={price}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default ProductList
