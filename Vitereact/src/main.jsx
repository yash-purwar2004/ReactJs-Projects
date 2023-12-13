import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'

/*
const reactElement = {
  type: 'a',
  props: {
      href: "https://google.com",
      target: "_blank"
  },
  children: "Click me to visit again"
}
*/

const anotherElement = (
  <a href='https://google..com' target='_blank'>Visit Google</a>
)

const anotheruser = "Chai peeyo biscuit khao";

const reactElement = React.createElement(
  'a',
  {href : 'https://google.com', target : '_blank'},
  'Click me to visit google office',
  anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement

)
