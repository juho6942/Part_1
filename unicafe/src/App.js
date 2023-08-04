import { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) =>{
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    
  )
}
const Average = (good, bad, total) => {
  const a = (good - bad)/total
  return(a)
}
const Positve = (p1) => {
  return (
    <>{p1}%</>
  )
}
const Statistics = (props) => {
  if (props.total ===0) {
    return(
      <p>No statistics given</p>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good}/>
        <StatisticLine text="neutral" value={props.neutral}/>
        <StatisticLine text="bad" value={props.bad}/>
        <StatisticLine text="average" value = {props.average} /> 
        <StatisticLine text="postive" value = {props.positive} />
      </tbody>
      
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good+bad+neutral
  const p1 = (good/total)*100
  console.log(total)
  return (
    <div>
      <h1> give feedback</h1>
      <Button handleClick={() => setGood(good +1)} text="good" />
      <Button handleClick={() => setNeutral(neutral +1)} text="neutral" />
      <Button handleClick={() => setBad(bad +1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} average={Average(good, bad, total)} total={total} positive={Positve(p1)}/>
    </div>
  )
}




export default App