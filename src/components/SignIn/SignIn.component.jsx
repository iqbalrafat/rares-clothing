import React, {Component} from 'react'
import './SignIn.styles.scss'
import FormInput from '../Form-Input/Form-Input.component'
class SignIn extends Component {
  constructor() {
    super();
    this.state={
         email:"",
         password: ""
    }
  }
  //This function will be apply on Form and first stop to move next and then reset the value of email and Password.
  handleSubmit = (event)=>{
    event.preventDefault();
    this.setState({email:'',password:''})
  }
  //event.target property contains the value what user submit. first it will be email then password
  handleChange = (event)=>{ 
    const {value,name} = event.target
    this.setState({[name]:value})
  }
  render(){

    return(
      <div className="sign-in">
        <h1>I already have an account</h1>
          <span>Sign In with your email and password</span>
          <form onSubmit={this.handleSubmit}>
            <FormInput
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
            />
            <label>Email</label>
            <FormInput
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required 
             /> 
            <label>Password</label>

            <input type="submit" value="submit form"/> 
          </form>
      </div>
    )
  }
}

export default SignIn;