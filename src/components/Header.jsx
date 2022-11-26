import Button from "./Button"
const Header = ({title ,add}) => {
  return (
    <header className="header">
      <h2>{title}</h2>
  
   <Button className="btn" baadhi={add}  /> 
  
      
      </header>

  )
 
}
Header.defaultProps ={
  title: 'Task Tracker ',
}
export default Header