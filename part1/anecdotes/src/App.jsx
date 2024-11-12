import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [data, setdata]= useState(new Array(anecdotes.length).fill(0))
  const handleclick = ()=> {
    const test= Math.floor(Math.random() * anecdotes.length);
    console.log(test)
    setSelected(test)

  } 
  const copy= [...data]
  const save = ()=>{
    copy[selected]+=1
    setdata(copy)
    console.log(data);
  
  }
  const index = data.indexOf(Math.max(...data));


  return (
    <div>

     <div>
      <h2>Anecdote of the day</h2>
      <p>
        {anecdotes[selected]}
      </p>
      <p>
       has {data[selected]} votes
      </p>
      <button onClick={handleclick}>
        next anecdotes
      </button>
      <button onClick={save}>
        vote
      </button >
    
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[index]}</p>
      <p>has {data[index]} votes</p>
   
     </div>
    </div>
  )
}


export default App