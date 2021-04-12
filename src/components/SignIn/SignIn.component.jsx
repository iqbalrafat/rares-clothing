import React, {Component} from 'react'
import './SignIn.styles.scss'
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
            <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
            />
            <label>Email</label>
            <input
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