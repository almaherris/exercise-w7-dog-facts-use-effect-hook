// DogFact Component
export const DogFact = ({dogFact}) => {
  // Hint: Extract the 'body' from 'attributes' of the 'fact' prop
  console.log(dogFact)
  const cleanFact = dogFact.data[0].attributes.body
  console.log(cleanFact)
  // Hint: Render the 'cleanFact' if available, otherwise show a loading message

  return <div className="fact">{cleanFact}</div>
}

// Hint: To use this component, import it in your main App component and pass the 'fact' prop to it.
// Example: <DogFact fact={yourFactData} />
