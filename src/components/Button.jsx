
const Button = ({text,color,baadhi,bd,buudhi,colri}) => {
  return (
    <>
    <button className="btn " onClick={baadhi} style={{backgroundColor:color}} >{text}</button>

    <button className="btn " onClick={buudhi} style={{backgroundColor:colri}} >{bd}</button>
    </>
  )
}
Button.defaultProps ={
  text: "add",
  bd: "show"
}
export default Button