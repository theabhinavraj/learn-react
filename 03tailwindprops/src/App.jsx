import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    username: "Abhinav Raj",
    age: 23
  }
  let myArray = [1, 2, 3, 4, 5]

  return (
    <>
      <h1 className='bg-green-500 text-white p-4 text-black rounded-xl'>Tailwind test</h1>
        <Card user={myObject} btnText={"Click me"}/>
        <Card user={{ username: "Rahul", age: 25 }} btnText={"Learn more"}/>
    </>
  )
}

export default App
