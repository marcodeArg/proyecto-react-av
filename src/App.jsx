import { useState } from 'react'
import Character from './components/Character'
import NavBar from './components/NavBar'
import ProductDetail from './components/ProductDetail'
import Home from './views/Home'

function App() {
  const [itemsCounter, setItemsCounter] = useState(0)


  return (
    <>
      <NavBar counter={itemsCounter} />
      {/*<Character />*/}
      <Home counter={itemsCounter} set={setItemsCounter} />
    </>
  )
}

export default App
