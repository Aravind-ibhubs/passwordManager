import './index.css'

const PasswordCard = props => {
  const {details, showValue, deleteFunction} = props
  const {websiteName, username, userPassword} = details
  const classArray = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5']
  const initialBackground =
    classArray[Math.floor(Math.random() * classArray.length)]

  const getPassword =
    showValue === true ? (
      <p className="password-paragraph">{userPassword}</p>
    ) : (
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
        className="star-image"
      />
    )

  const onDeleteCard = () => {
    deleteFunction(websiteName)
  }

  return (
    <li className="password_container">
      <h1 className={`initial-letter ${initialBackground}`}>
        {websiteName[0]}
      </h1>
      <div>
        <p className="password-paragraph">{websiteName}</p>
        <p className="password-paragraph">{username}</p>
        {getPassword}
      </div>
      <button
        type="button"
        onClick={onDeleteCard}
        testid="delete"
        className="delete-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordCard
