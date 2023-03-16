import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const ProductListItem = ({
    title,
    description,
    type,
    capacity,
    price,
    image,
}: Props) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <h4 className="product-title">{title}</h4>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}Gb</div>
                <div className="product-price">
                    Price: <strong>${price}</strong>
                </div>
                <div className="product-quantity">
                    <Button variant="outlined">-</Button>
                    <TextField size="small" value="1" />
                    <Button variant="outlined">=</Button>
                </div>
                <CardActions className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
