import { Grid } from '@mui/material'
import CartTotal from 'components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import Title from 'components/Title/Title'
import { useAppSelector } from 'redux/hooks'
import { Link } from 'react-router-dom'

type Props = {}

const CartPage = (props: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <>
            <Title>CartPage</Title>
            <Grid container spacing={4} sx={{ margin: 0 }}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>

            <CartTotal productsInCart={productsInCart} />
            <Link to="/checkout">Proceed to checkout</Link>
        </>
    )
}
export default CartPage
