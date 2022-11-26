import Button from "./Button"
const Header = ({title ,add,app , show}) => {
  return (
    <header className="header">
      <h2>{title}</h2>
  
   <Button className="btn" baadhi={add}  buudhi={app} color ={show? 'red': 'green'} text={show  ? 'closed': 'open'}/> 
  
      
      </header>

  )
 
}
Header.defaultProps ={
  title: 'Add your Tasks ',
}
export default Header