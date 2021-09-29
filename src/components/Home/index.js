import {Component} from 'react'

import PasswordCard from '../PasswordCard/index'
import './index.css'

class Home extends Component {
  state = {
    passwordsList: [],
    website: '',
    name: '',
    password: '',
    searchInput: '',
    toShow: false,
  }

  addPassword = event => {
    event.preventDefault()
    const {website, name, password} = this.state

    const passwordList = {
      websiteName: website,
      username: name,
      userPassword: password,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, passwordList],
      website: '',
      name: '',
      password: '',
    }))
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <div className="data-input-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
          alt="password"
          className="input-logo"
        />
        <input
          type="password"
          onChange={this.changePassword}
          placeholder="Enter Password"
          className="input-element"
          value={password}
        />
      </div>
    )
  }

  changeName = event => {
    this.setState({name: event.target.value})
  }

  renderUserName = () => {
    const {name} = this.state

    return (
      <div className="data-input-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
          alt="username"
          className="input-logo"
        />
        <input
          type="text"
          onChange={this.changeName}
          placeholder="Enter Username"
          className="input-element"
          value={name}
        />
      </div>
    )
  }

  onWebsite = event => {
    this.setState({website: event.target.value})
  }

  renderWebsite = () => {
    const {website} = this.state

    return (
      <div className="data-input-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
          alt="website"
          className="input-logo"
        />
        <input
          type="text"
          onChange={this.onWebsite}
          placeholder="Enter Website"
          className="input-element"
          value={website}
        />
      </div>
    )
  }

  renderInputContainer = () => (
    <div className="user-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
        alt="password manager"
        className="password-manager-sm"
      />
      <form onSubmit={this.addPassword} className="user-data-container">
        <h1 className="form-title">Add New Password</h1>
        {this.renderWebsite()}
        {this.renderUserName()}
        {this.renderPassword()}
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
        alt="password manager"
        className="password-manager-lg"
      />
    </div>
  )

  changeCheckbox = () => {
    this.setState(prevState => ({toShow: !prevState.toShow}))
  }

  onSearch = event => {
    const {passwordsList} = this.state
    const text = event.target.value.toLowerCase()
    const updatedList = passwordsList.filter(eachCard =>
      eachCard.websiteName.toLowerCase().includes(text),
    )
    this.setState({passwordsList: updatedList, searchInput: text})
  }

  onDelete = nameText => {
    const {passwordsList} = this.state
    const updatedList = passwordsList.filter(
      eachCard => eachCard.websiteName !== nameText,
    )
    this.setState({passwordsList: updatedList})
  }

  renderPasswordList = () => {
    const {passwordsList, toShow} = this.state

    return passwordsList.length === 0 ? (
      <div className="no_password_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="no_password_image"
        />
        <h1 className="form-title">No Passwords</h1>
      </div>
    ) : (
      <ul className="list-container">
        {passwordsList.map(eachCard => (
          <PasswordCard
            details={eachCard}
            key={eachCard.websiteName}
            showValue={toShow}
            deleteFunction={this.onDelete}
          />
        ))}
      </ul>
    )
  }

  renderPasswordContainer = () => {
    const {passwordsList, searchInput} = this.state

    return (
      <div className="bottom-container">
        <div className="bottom-top-container">
          <p className="form-title bottom-text">
            Your Passwords <span className="count">{passwordsList.length}</span>
          </p>
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="input-logo"
            />
            <input
              type="search"
              placeholder="Search"
              className="search-input"
              onChange={this.onSearch}
              value={searchInput}
            />
          </div>
        </div>
        <hr className="line" />
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="showPassword"
            onChange={this.changeCheckbox}
            className="check-box-input"
          />
          <label htmlFor="showPassword" className="form-title bottom-text">
            Show Passwords
          </label>
        </div>
        {this.renderPasswordList()}
      </div>
    )
  }

  render() {
    return (
      <div className="main-app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="company-logo"
        />
        {this.renderInputContainer()}
        {this.renderPasswordContainer()}
      </div>
    )
  }
}

export default Home
