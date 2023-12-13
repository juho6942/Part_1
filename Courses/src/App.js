const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}
  
const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.count}</p>
    </div>
  )
}
const Total = ({parts}) => {
  const a = parts[0].exercises;
  const b = parts[1].exercises;
  const c = parts[2].exercises;
  return (
    <div>
      <p>Number of exercises {a+b+c}</p>
    </div>
  );
};

const Content = ({lol}) => {
  return (
    <div>
      <Part name={lol[0].name} count = {lol[0].exercises} />
      <Part name={lol[1].name} count = {lol[1].exercises} />
      <Part name={lol[2].name} count = {lol[2].exercises} />      
    </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course= {course.name}/>
      <Content lol={course.parts}/>     
      <Total parts={course.parts} />
    </div>
  )
}

export default App