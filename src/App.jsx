// Import required  hooks
import { useEffect, useState } from "react"
import "./styles.css"
import { DogFact } from "./components/DogFact"

export const App = () => {
  // Hint: Initialize state for storing the dog fact
  const [dogFact, setDogFact] = useState()

  // Hint: Define the API endpoint
  const URL = "https://dogapi.dog/api/v2/facts"

  // Hint: Create a function to fetch the dog fact
  const fetchDogFact = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setDogFact(json)
      })
  }
  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts
  useEffect(() => {
    fetchDogFact()
  }, [])

  return (
    <div className="App">
      {dogFact ? (
        <DogFact dogFact={dogFact} />
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  )
}
