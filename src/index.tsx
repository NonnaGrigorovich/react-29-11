import React from 'react'
import ReactDOM from 'react-dom/client'

// const title = React.createElement(
//     'h1',
//     {
//         id: 'title',
//         className: 'red',
//     },
//     React.createElement('div', null, 'test')
// )

// with JSX

//PascalCase - назва починаеться з великої букви (викликається як тег)
const App = () => {
    return <h1>Hello App component</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
