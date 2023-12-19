import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
      username : "SUYASH",
      age: 21
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4'>Tailwind CSS</h1>
      <Card username = "Suyash" im = 'https://pbs.twimg.com/profile_images/1722584598201200640/sXqssuUA_400x400.jpg'/>
      <Card username = "Yash"  im = 'https://media.licdn.com/dms/image/C5603AQEyS1fkv5tpTQ/profile-displayphoto-shrink_200_200/0/1595909085274?e=2147483647&v=beta&t=Kyps2WdxzZFhycRvXQ5RRVxV8sMCal0JBRoQ5wUPxpQ'/>
    </>
  )
}

export default App
