import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 

function MyApp(){
  return (
    <div> 
      <h1>Shana Coder is ready!</h1>
    </div>
  )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank',
//     },
//     children: 'Click me to visit google'

// }


const anotherElement = (
  <a href="https://www.google.com" target="_blank">Visit google</a>
)

const anotheruser = "Shana Coder 45"

const reactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Click me to visit google',
  anotheruser
)

createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
