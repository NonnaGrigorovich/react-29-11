import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"

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