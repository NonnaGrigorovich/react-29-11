import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

// tsrafce - швидкий виклик
type Props = {}

type CartData = {
    totalCount: number
    totalPrice: number
}

const App = (props: Props) => {
    const [CharacterData, setCartData] = useState<CartData>({
        totalCount: 10,
        totalPrice: 100,
    })

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
