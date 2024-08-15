/* eslint-disable react/prop-types */

const Message = ({name, email}) => {
  return (
    <div>
        <h2>Gracias, {name} </h2>
        <h4>Te enviamos tu entrada a {email} </h4>
    </div>
  )
}

export default Message