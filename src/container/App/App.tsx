import Header from 'container/Header/Header'
import Footer from 'container/Footer/Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'

import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import CartPage from 'pages/Cart/CartPage'

import ProductPage from 'pages/Product/ProductPage'

// tsrafce - швидкий виклик

const App = () => {
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
                </Routes>
            </Container>

            <Footer />
        </StyledEngineProvider>
    )
}

export default App
