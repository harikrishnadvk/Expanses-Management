import React,{useState} from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default function App(){

  const [state,setState] = useState({
                firstName:"",
                firstNameError:"",
                lastName:"",
                lastNameError:"",
                username:"",
                usernameError:"",
                email:"",
                emailError:"",
                password:"",
                passwordError:""
              })
  
 function change (e) {
    // this.props.onChange({ [e.target.name]: e.target.value });
    setState({
      [e.target.name]: e.target.value
    });
  };

  function validate () {
    let isError = false;
    const errors = {
      firstNameError: "",
      lastNameError: "",
      usernameError: "",
      emailError: "",
      passwordError: ""
    };

    if (this.state.username.length < 5) {
      isError = true;
      errors.usernameError = "Username needs to be atleast 5 characters long";
    }

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Requires valid email";
    }

    setState({
      ...state,
      ...errors
    });

    return isError;
  };

  function onSubmit (e) {
    e.preventDefault();
    const err = validate();
    if (!err) {
      this.props.onSubmit(state);
      // clear form
      setState({
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        username: "",
        usernameError: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: ""
      });
    }
  };
    return (
      <form className="form2" style={{flexDirection:'row'}}>         
       <RaisedButton style={{fontSize:1,marginLeft:30,marginRight:30,marginTop:40,width:150,height:40}} label="Add Expanses" onClick={e => onSubmit(e)} primary />
          <br/><br/><br/>
         <TextField
        style={{width:100,margin:20}}
          name="firstName"
          // hintText="Category"
          floatingLabelText="Category"
          value={state.firstName}
          onChange={e => change(e)}
          errorText={state.firstNameError}
          floatingLabelFixed
        />
       
        <TextField
          style={{width:100,margin:20}}
          name="lastName"
          // hintText="Last Name"
          floatingLabelText="Item Name"
          value={state.lastName}
          onChange={e => change(e)}
          errorText={state.lastNameError}
          floatingLabelFixed
        />
        <br />
        <TextField
          style={{width:100,margin:20}}
          name="username"
          // hintText="Username"
          floatingLabelText="Amount"
          value={state.username}
          onChange={e => change(e)}
          errorText={state.usernameError}
          floatingLabelFixed
        />
        <br />
        <TextField
          style={{width:120,margin:20}}
          name="name"
          // hintText="Email"
          floatingLabelText="Expanses Date"
          value={state.email}
          onChange={e => change(e)}
          errorText={state.emailError}
          floatingLabelFixed
        />
        <br />
      
      </form>
    );
  }


















