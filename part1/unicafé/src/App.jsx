import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Button handleClick={() => setGood(good + 1)} text="good " />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral " />
      <Button handleClick={() => setBad(bad + 1)} text="bad " /> 
      <Statistics good={good} neutral={neutral} bad={bad}  />
    </div>
  )
}

export default App

const Statistics = (props) => {
    const {good, neutral , bad}= props;
    const test = (good !== 0 || neutral !== 0 || bad !== 0 ? true : false)
    const total= good+bad+neutral
    console.log(test, total)


  return(
    <div>
       <p>
         {test ? "" : "No feedback given"}

      </p>
      
      <StatisticLine text="good " value ={props.good} />
      <StatisticLine text="neutral " value ={props.neutral} />
      <StatisticLine text="bad " value ={props.bad} />
      <p>
         {test ? 'All  '+(total) : ""}

      </p>

      {test ? ( 
       <p>
        {((good-bad)/(total))}
      </p>
     ): ''}

      {test ? ( 
       <p>
        {Math.ceil((good*100)/(total))}%
      </p>
     ): ''}
    
    </div>
  )
}

const StatisticLine = (props) => {
 
  return(
    <div>

      <p>
         {props.value > 0 ? `${props.text} ${props.value}` : ""}

      </p>
    </div>
  )
}


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)