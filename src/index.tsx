import React from 'react'
import ReactDOM from 'react-dom/client'
import Title from './Title'

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias accusamus quaerat deserunt excepturi aliquam
                consequuntur iste esse quo consequatur dignissimos alias,
                perspiciatis adipisci temporibus at, vitae obcaecati sequi
                dolore? Sequi.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                vitae quaerat est ex exercitationem amet error ipsum
                accusantium, odio possimus aut, dolorem minima minus, a hic id
                cupiditate pariatur quis!
            </p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Title title="React" year={2023} />
            <Title title="App" year={2022} />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
