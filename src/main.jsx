import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Greeting from './Greeting.jsx'
// import { Count } from './Count.jsx'
// import HowMany from './HowMany.jsx'
// import TestTitle from './TestTitle.jsx'
import App from './learn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App type="alert" onClick={() => console.log('Clicked!')}/>
  </StrictMode>,
)
