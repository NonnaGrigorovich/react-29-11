import ProductList from 'components/Products/ProductList'
import ReviewsPage from 'pages/Reviews/ReviewsPage'

type Props = {}

const Home = (props: Props) => {
    return (
        <div>
            <ProductList />
            <ReviewsPage />
        </div>
    )
}
export default Home
