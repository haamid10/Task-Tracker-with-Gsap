import Button from "./Button"
const Header = ({title ,add,app , show,wash}) => {
  return (
    <header className="header">
      <h2>{title}</h2>
  
   <Button className="btn" baadhi={add} 
    buudhi={app}
     color ={show? 'red': 'green'}
     colri ={wash? 'blue': 'orange'}
      text={show  ? 'closed': 'open'}
      bd={wash  ? 'close the tasks': 'open the tasks '}
      /> 
  
      
      </header>

  )
 
}
Header.defaultProps ={
  title: 'Add your Tasks ',
}
export default Header