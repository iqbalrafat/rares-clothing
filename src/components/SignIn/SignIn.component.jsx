import React, { Component } from "react"
import "./SignIn.styles.scss"
import FormInput from "../Form-Input/Form-Input.component"
import CustomButton from "../Custom-Button/Custom-Button.component"
import { signInWithGoogle } from '../../firebase/firebase.utils'
class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  //This function will be apply on Form and first stop to move next and then reset the value of email and Password.
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  //event.target property contains the value what user submit. first it will be email then password
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign In with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            required={true}
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
            label="Password"
          />
          <CustomButton type="submit">SignIn</CustomButton>
          <button onClick={signInWithGoogle} value="SIGN IN WITH GOOGLE"/>
        </form>
      </div>
    );
  }
}

export default SignIn;
