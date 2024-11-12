

const App = () => {
  const course = {
    name: 'Half Stack CourseinfoApplication development',
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
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}
export default App



const Header = (props) => {
  console.log(props)
  return (

        <h1> {props.course}</h1>
    )
}

const Content = (props) => {
  console.log(props.parts)
 return(
   
      <Part part1={props.parts}  
       /> 
  )

}

const Part = (props)=>{
    let item= props.part1
    console.log(item)
   
  return(
    <div>
      {item.map(items=>

        <p>{items.name} {items.exercises}</p>
       
      )}
     
    </div>
  )

}

const Total = ({parts})=>{
    console.log(parts)
    let total= parts.reduce((a,b)=> a+b.exercises,0)
    console.log(total)
  return(
  <div>
    <p>{total}</p>

   </div>
  )
}