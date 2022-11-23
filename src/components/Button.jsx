
const Button = ({text,color}) => {
  return (
    <button className="btn " style={{backgroundColor:color}}>{text}</button>
  )
}
Button.defaultProps ={
  text: "add"
}
export default Button