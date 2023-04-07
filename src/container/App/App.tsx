import Header from 'container/Header/Header'
import Footer from 'container/Footer/Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'

import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import CartPage from 'pages/Cart/CartPage'

import ProductPage from 'pages/Product/ProductPage'
import CheckoutPage from 'pages/Checkout/CheckoutPage'
import { useAppDispatch } from 'redux/hooks'
import { useEffect } from 'react'
import { fetchProducts } from 'redux/productsReducer'

// tsrafce - швидкий виклик

const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Container
                sx={{
                    padding: '40px 0',
                }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/products/:id" element={<ProductPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                </Routes>
            </Container>

            <Footer />
        </StyledEngineProvider>
    )
}

export default App
