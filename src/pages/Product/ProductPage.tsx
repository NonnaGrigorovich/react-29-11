import { useParams } from 'react-router-dom'
import productsArray, { Product, getProductsObject } from 'utils/productsArray'

type Props = {
    productsObject?: {
        [id: number]: Product
    }
}

const ProductPage = ({
    productsObject = getProductsObject(productsArray),
}: Props) => {
    const { id } = useParams()

    const product = productsObject[parseInt(id!)]
    console.log(product)
    return (
        <div>
            <div>{product.title}</div>
            <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
        </div>
    )
}
export default ProductPage
