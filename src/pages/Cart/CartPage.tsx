import { Typography } from '@mui/material'
import CartTotal from 'components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartPage = ({ productsInCart }: Props) => {
    return (
        <>
            <Typography variant="h4" component={'h1'}>
                CartPage
            </Typography>
            <div>
                <CartProductList productsInCart={productsInCart} />
                <CartTotal productsInCart={productsInCart} />
            </div>
        </>
    )
}
export default CartPage
