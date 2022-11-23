
const Button = ({text,color,baadhi}) => {
  return (
    <button className="btn " onClick={baadhi} style={{backgroundColor:color}}>{text}</button>
  )
}
Button.defaultProps ={
  text: "add"
}
export default Button