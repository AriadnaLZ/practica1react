import './Boton.css'

const Boton = (props) => {
  return (
    <button className='boton' onClick={() => {
      if (props.texto === 'Restar') {props.setCount(props.count - 1)}
      else {
        props.setCount(props.count + 1)
      }
  }}>{props.texto}</button>
  )
}

export default Boton