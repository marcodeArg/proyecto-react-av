import { useEffect, useState } from "react"

function Character() {
  const [data, setData] = useState({})
  const [counter, setCounter] = useState(1)

  const abortController = new AbortController()
  const signal = abortController.signal

  useEffect(() => {
    setTimeout(fetch(`https://rickandmortyapi.com/api/character/${counter}`, { signal })
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err)), 2000)

    return () => abortController.abort()
  }, [counter])

  const handleCounter = () => {
    setCounter((prevCounter) => prevCounter + 1)
  }

  return (
    <section>
      <h1>{data.name}</h1>
      <img src={data.image} alt={data.name} />
      <button className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={handleCounter}>Next Character </button>
    </section>

  )
}

export default Character