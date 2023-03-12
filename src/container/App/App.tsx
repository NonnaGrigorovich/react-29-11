import Header from "container/Header/Header"
import Main from "container/Main/Main"
import Footer from "container/Footer/Footer"

// tsrafce - швидкий виклик
type Props = {}

const App = (props: Props) => {
  return (
    <div>
        <Header />
        <Main />
        <Footer />
    </div>
  )
}

export default App